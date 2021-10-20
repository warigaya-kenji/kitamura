<template>
  <div id="my-page-order-buy-list" :class="{ sp: $vuetify.breakpoint.smAndDown }">
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

    <router-link class="ec-link-image" :to="`/ec/mypage/odr/${order.odrId}`" v-for="order in getOrderList" :key="order.odrId">
      <v-row class="order-product">
        <!-- 商品画像 -->
        <v-col cols="3" class="d-flex align-self-center order-product-img-area">
          <img class="order-product-img" contain :src="getOrderImage(order)" @error="noimage" />
        </v-col>

        <!-- 注文情報 -->
        <v-col
          cols="8"
          md="5"
          class="order-product-info d-flex flex-column justify-space-between"
          :class="{
            'py-8': $vuetify.breakpoint.mdAndUp
          }"
        >
          <div>ご注文日：{{ order.odrDttm | date('YYYY/MM/DD') }}</div>
          <div class="order-product-no">注文番号：{{ order.formatedOdrNum }}</div>
          <div v-if="order.orderedProductCount !== undefined && order.orderedProductCount !== null">
            数量：<span v-if="order.orderedProductCount <= 0">-</span><span v-else>{{ order.orderedProductCount }}点</span>
          </div>
          <div v-if="$vuetify.breakpoint.smAndDown">
            <b v-if="order.deliveryOdrStatusName">注文状況：{{ order.deliveryOdrStatusName }}</b>
          </div>
        </v-col>

        <!-- 注文状況 -->
        <v-col cols="3" v-if="$vuetify.breakpoint.mdAndUp" class="d-flex align-self-center">
          <b v-if="order.deliveryOdrStatusName">注文状況：{{ order.deliveryOdrStatusName }}</b>
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
      <i class="fas fa-shopping-cart not-found-icon"></i>
      <p>購入履歴はありません</p>
    </div>

    <!-- もっと見るボタン -->
    <more-items-button class="mt-10" @click="fetchNextList()" v-if="maxOrderLength > showOrderLength" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import MoreItemsButton from '@/components/common/more-items-button.vue';
import { BUY_ORDER_TYPES } from '@/constants/mypage-order-types';
import { BUY_ORDER_SEASONS } from '@/constants/mypage-order-seasons';
import { DELIVERY_ORDER_STATUS } from '@/constants/order';
import { noimage, sortByRowNo } from '@/logic/utils';
import UserService from '@/logic/user.service';
import { OrderInfo } from '@/types/order-list';
import SectionLoading from '@/components/common/section-loading.vue';
import dayjs from 'dayjs';

type OrderInfoScreen = OrderInfo & { deliveryOdrStatusName: string };

export default Vue.extend({
  name: 'order-buy-list',
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
      orderTypes: BUY_ORDER_TYPES,
      selectedOrderType: BUY_ORDER_TYPES[0].value,
      // 注文時期
      orderSeasons: [...BUY_ORDER_SEASONS, ...orderSeasonYears],
      selectedOrderSeason: BUY_ORDER_SEASONS[0].value,
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

    // 注文状況を取得する
    const getDeliveryOrderStatus = (statusId: string): string => {
      return DELIVERY_ORDER_STATUS[statusId] || '-';
    };

    /**
     * 注文履歴を取得
     */
    const fetchOrderList = () => {
      state.loaded.orderList = false;

      const year = state.selectedOrderSeason !== 0 ? state.selectedOrderSeason : undefined;
      const goodsKind = state.selectedOrderType !== 0 ? state.selectedOrderType : undefined;
      UserService.fetchOrderList(state.page, year, goodsKind)
        .then((response) => {
          const odrInfoList = response.odrInfo;
          let orderList: Array<OrderInfoScreen> = odrInfoList.map((order) => ({
            ...order,
            deliveryOdrStatusName: getDeliveryOrderStatus(order.deliveryOdrStatusId)
          }));

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
        fetchOrderList();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchOrderList();
      }
    );

    // 表示する注文履歴を取得する
    const getOrderList = computed((): Array<OrderInfoScreen> => state.orderList.slice(0, state.showOrderLength));

    // 表示条件が変更された場合、指定された条件で一覧を取得する
    const onChangeFilter = () => {
      state.page = 1;
      fetchOrderList();
    };

    // 次の一覧を取得する
    const fetchNextList = () => {
      state.page += 1;
      fetchOrderList();
      state.showOrderLength += 10;
    };

    // 表示する画像を取得する
    const getOrderImage = (order: OrderInfoScreen): string => {
      return order.imagePath || require('@/assets/no-image-M.gif');
    };

    return {
      ...toRefs(state),
      noimage,
      getOrderList,
      onChangeFilter,
      fetchNextList,
      getOrderImage
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  購入履歴
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

    &-no {
      white-space: nowrap;
    }

    &-img {
      width: 100%;
      max-width: 150px;
      object-fit: contain;
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
  購入履歴 960px以下
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
        font-size: 14px;
      }
    }
  }
}
</style>
