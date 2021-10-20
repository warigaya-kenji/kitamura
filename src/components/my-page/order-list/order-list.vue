<template>
  <div
    id="my-page-order-list"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <v-tabs v-model="tab" class="order-list-tabs" fixed-tabs>
        <v-tab class="order-list-tab">
          <i class="fas fa-shopping-cart mr-1"></i>
          購入履歴
        </v-tab>
        <v-tab class="order-list-tab">
          <i class="fas fa-camera mr-1"></i>
          買取・下取履歴
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item class="py-5">
          <order-buy-list />
        </v-tab-item>
        <v-tab-item class="py-5">
          <order-sell-list />
        </v-tab-item>
      </v-tabs-items>
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown">
      マイページトップへ戻る
    </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';
import OrderBuyList from './order-buy-list.vue';
import OrderSellList from './order-sell-list.vue';
import MyPageLayout from '../common/my-page-layout.vue';
import BackButton from '@/components/common/back-button.vue';

export default Vue.extend({
  name: 'order-list',
  components: {
    'my-page-layout': MyPageLayout,
    'order-buy-list': OrderBuyList,
    'order-sell-list': OrderSellList,
    'back-button': BackButton
  },
  setup: (_, context) => {
    const state = reactive({
      // 画面タイトル
      title: 'ご利用履歴',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: 'ご利用履歴', linkUrl: '' }
      ],
      // タブメニュー
      tab: 0
    });

    // URLによってタブの初期表示を切り替える
    const tabType = context.root.$route.query.type;
    if (tabType === 'sell') {
      state.tab = 1;
    }

    watch(
      () => state.tab,
      (tabIndex) => {
        let url = '/ec/mypage/odr/list';
        if (tabIndex === 1) {
          // 買取・下取履歴タブが選択された場合、クエリパラメータを付与する
          url += '?type=sell';
        }
        history.replaceState(null, '', url);
      }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  ご利用履歴 960px以上
------------------------------- */
.order-list {
  &-tabs {
    width: 100%;
  }

  &-tab {
    max-width: none;
    font-size: 1.4em;
    font-weight: bold;
    border-bottom: 2px solid;
  }
}

/** -------------------------------
  ご利用履歴 960px以下
------------------------------- */
.container-narrow {
  .order-list-tab {
    font-size: 1em;
  }
}
</style>
