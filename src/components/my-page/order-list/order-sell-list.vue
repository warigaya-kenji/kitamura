<template>
  <div id="my-page-order-sell-list" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <div
      class="d-flex align-center mb-6"
      :class="{
        'px-2': $vuetify.breakpoint.mdAndUp,
        'justify-space-between': $vuetify.breakpoint.smAndDown
      }"
    >
      <div
        class="order-filter"
        :class="{
          'mr-8': $vuetify.breakpoint.mdAndUp,
          'mr-4': $vuetify.breakpoint.smAndDown
        }"
      >
        <span class="order-filter-label mr-2">種類：</span>
        <v-select
          id="order-type-select"
          class="order-filter-select"
          outlined
          dense
          hide-details
          :items="orderTypes"
          v-model="selectedOrderType"
          @change="onChangeFilter()"
        />
      </div>
      <div class="order-filter">
        <span class="order-filter-label mr-2">注文時期：</span>
        <v-select
          id="order-season-select"
          class="order-filter-select"
          outlined
          dense
          hide-details
          :items="orderSeasons"
          v-model="selectedOrderSeason"
          @change="onChangeFilter()"
        />
      </div>
    </div>

    <router-link class="ec-link-image" :to="getRouterLink(order)" v-for="order in getOrderList" :key="order.odrId">
      <v-row class="order-product">
        <!-- 商品画像 -->
        <v-col cols="3" class="d-flex align-self-center order-product-img-area">
          <img class="order-product-img" contain :src="order.imagePath || require('@/assets/no-image-M.gif')" @error="noimage" />
        </v-col>

        <!-- 注文情報 -->
        <v-col cols="8" md="5" class="order-product-info d-flex flex-column justify-space-between">
          <div
            class="font-weight-bold"
            :class="{
              'mb-2': $vuetify.breakpoint.smAndDown
            }"
          >
            <span v-if="order.kind === SELL_KIND.PURCHASE">買取お申込み日</span>
            <span v-else>下取お申込み日</span>
            <span>：{{ order.odrDttm | date('YYYY/MM/DD') }}</span>
          </div>
          <div class="mb-1">
            <span>種類：</span>
            <span v-if="order.kind === SELL_KIND.PURCHASE">直送買取</span>
            <span v-else-if="order.kind === SELL_KIND.TOKUTOKU">トクトク交換</span>
            <span v-else-if="order.kind === SELL_KIND.TRADE_IN">下取り</span>
          </div>
          <div>{{ order.makerName }}</div>
          <div
            class="order-product-info-name"
            :class="{
              'mb-4': $vuetify.breakpoint.mdAndUp,
              'mb-2': $vuetify.breakpoint.smAndDown
            }"
          >
            {{ order.itemName }}
          </div>
          <div
            :class="{
              'mb-2': $vuetify.breakpoint.smAndDown
            }"
            v-if="order.quantity !== undefined && order.quantity !== null"
          >
            数量：<span v-if="order.quantity <= 0">-</span><span v-else>{{ order.quantity }}点</span>
          </div>

          <!-- 注文状況 960px以下 -->
          <div v-if="$vuetify.breakpoint.smAndDown" class="order-product-info-status">
            <span v-if="order.kind === SELL_KIND.PURCHASE && order.statusText">買取状況：{{ order.statusText }}</span>
            <span v-else-if="[SELL_KIND.TOKUTOKU, SELL_KIND.TRADE_IN].includes(order.kind)" class="order-product-info-status-no"
              >注文番号：{{ order.formatedOdrNum }}</span
            >
          </div>
        </v-col>

        <!-- 注文状況 960px以上 -->
        <v-col cols="3" v-if="$vuetify.breakpoint.mdAndUp" class="d-flex align-self-center font-weight-bold">
          <span v-if="order.kind === SELL_KIND.PURCHASE && order.statusText">買取状況：{{ order.statusText }}</span>
          <span v-else-if="[SELL_KIND.TOKUTOKU, SELL_KIND.TRADE_IN].includes(order.kind)">注文番号：{{ order.formatedOdrNum }}</span>
        </v-col>

        <v-col cols="1" class="d-flex align-self-center justify-end">
          <v-icon class="order-product-arrow">fas fa-chevron-right</v-icon>
        </v-col>
      </v-row>
    </router-link>

    <div class="loading-order-list" v-if="!loaded.orderList">
      <section-loading />
    </div>

    <!-- 購入履歴がない場合 -->
    <div class="not-found-area" v-else-if="!getOrderList || getOrderList.length < 1">
      <i class="fas fa-camera not-found-icon"></i>
      <p>買取・下取履歴はありません</p>
    </div>

    <!-- もっと見るボタン -->
    <more-items-button class="mt-10" @click="fetchNextList()" v-if="maxOrderLength > showOrderLength" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import MoreItemsButton from '@/components/common/more-items-button.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import { SELL_ORDER_TYPES, SELL_KIND } from '@/constants/mypage-order-types';
import { SELL_ORDER_SEASONS } from '@/constants/mypage-order-seasons';
import { noimage, sortByRowNo } from '@/logic/utils';
import UserService from '@/logic/user.service';
import { PurchaseInfo } from '@/types/purchase-list';
import dayjs from 'dayjs';
import { SELL_ORDER_STEP } from '@/constants/mypage-order-step';

// 画面表示用注文内容
type OrderInfoScreen = PurchaseInfo & {
  statusText: string;
};

export default Vue.extend({
  name: 'order-sell-list',
  components: {
    'more-items-button': MoreItemsButton,
    'section-loading': SectionLoading
  },
  setup: (_, context) => {
    const { authorizer } = context.root.$store;

    // 過去10年分の注文時期選択肢を作成
    const thisYear = dayjs().year();
    const orderSeasonYears = [...Array(10).keys()].map((i) => thisYear - i);

    const state = reactive({
      // 種類
      orderTypes: SELL_ORDER_TYPES,
      selectedOrderType: SELL_ORDER_TYPES[0].value,
      // 注文時期
      orderSeasons: [...SELL_ORDER_SEASONS, ...orderSeasonYears],
      selectedOrderSeason: SELL_ORDER_SEASONS[0].value,
      // 履歴一覧
      orderList: [] as Array<OrderInfoScreen>,
      // 表示注文数
      showOrderLength: 10,
      maxOrderLength: 0,
      page: 1,
      loaded: {
        orderList: false
      }
    });

    // 買取・下取り履歴を取得
    const fetchPurchaseList = () => {
      state.loaded.orderList = false;

      const year = state.selectedOrderSeason !== 0 ? state.selectedOrderSeason : undefined;
      const kind = state.selectedOrderType !== 0 ? state.selectedOrderType : undefined;
      UserService.fetchPurchaseList(state.page, year, kind)
        .then((response) => {
          const odrInfoList = response.odrInfo;
          let orderList: Array<OrderInfoScreen> = odrInfoList.map((order) => {
            const statusText = UserService.convertStepStatus(SELL_ORDER_STEP, `${order.status}`).text;
            return {
              ...order,
              statusText
            };
          });

          // 「rowNo」を昇順にソートする
          // ページ毎に「rowNo」が新規に割り振られているため、レスポンス内容の中でソートする
          orderList = sortByRowNo<OrderInfoScreen>(orderList);

          // 2ページ目以降は配列に追加していく
          if (1 < state.page) {
            state.orderList.push(...orderList);
          } else {
            state.orderList = orderList;
          }
          state.maxOrderLength = response.totalPageCount;
        })
        .catch((error) => console.error(error))
        .finally(() => (state.loaded.orderList = true));
    };

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        fetchPurchaseList();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchPurchaseList();
      }
    );

    // 表示する注文履歴を取得する
    const getOrderList = computed((): Array<OrderInfoScreen> => state.orderList.slice(0, state.showOrderLength));

    // 表示条件が変更された場合、指定された条件で一覧を取得する
    const onChangeFilter = () => {
      state.page = 1;
      fetchPurchaseList();
    };

    // 次の一覧を取得する
    const fetchNextList = () => {
      state.page += 1;
      fetchPurchaseList();
      state.showOrderLength += 10;
    };

    const getRouterLink = (order: OrderInfoScreen): string => {
      switch (order.kind) {
        case SELL_KIND.TOKUTOKU:
          return `/ec/mypage/odr/tokutoku/${order.odrId}`;
        case SELL_KIND.TRADE_IN:
          return `/ec/mypage/odr/trade/${order.odrId}`;
        default:
          return `/ec/mypage/odr/sell/${order.odrId}`;
      }
    };

    return {
      ...toRefs(state),
      noimage,
      getOrderList,
      onChangeFilter,
      fetchNextList,
      SELL_KIND,
      getRouterLink
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  買取・下取り履歴
------------------------------- */
.order {
  &-filter {
    &-select {
      display: inline-block;
      width: 150px;
    }
  }

  &-product {
    margin: 0 0 20px;
    padding-bottom: 8px;
    border-bottom: dashed 1px $ec-grey;

    &-img {
      width: 100%;
      max-width: 150px;
      object-fit: contain;
    }

    &-info {
      &-name {
        @include ellipsis-lines(2);
      }
    }

    &-arrow {
      color: $text-light-grey;
    }
  }
}

.not-found {
  &-area {
    text-align: center;
  }

  &-icon {
    color: $ec-light-grey;
    font-size: 50px;
    margin-bottom: 4px;
  }
}

/** -------------------------------
  買取・下取り履歴 960px以下
------------------------------- */
.sp {
  .order {
    &-filter {
      font-size: 12px;

      &-select {
        display: inline-block;
        font-size: 12px;
        max-width: 120px;
      }
    }

    &-product {
      &-img-area {
        padding: 0;
      }

      &-info {
        font-size: 12px;

        &-status {
          font-size: 16px;
          font-weight: bold;

          &-no {
            font-size: 12px;
            font-weight: normal;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
