<template>
  <div class="menu-link-area ec-back-color">
    <v-btn class="menu-link-btn" block tile depressed x-large to="/ec/mypage/odr/list" v-if="$vuetify.breakpoint.mdAndUp">
      <i class="far fa-history mr-1 menu-link-btn-icon"></i>
      ご利用履歴
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large to="/ec/mypage/favorite/list" v-if="$vuetify.breakpoint.mdAndUp">
      <i class="far fa-heart mr-1 menu-link-btn-icon"></i>
      お気に入り商品
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large to="/ec/mypage/owned/list">
      <i class="far fa-hand-paper mr-1 menu-link-btn-icon"></i>
      持っている商品
      <span class="menu-link-btn-count">{{ ownedCount }}</span>
    </v-btn>
    <v-btn class="menu-link-btn d-flex align-center" block tile depressed x-large to="/ec/mypage/coupon/list">
      <i class="fad fa-ticket mr-1 menu-link-btn-icon"></i>
      持っているクーポン
      <span class="menu-link-btn-count menu-link-btn-count-red">{{ couponCount }}</span>
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large to="/ec/mypage/review/list">
      <i class="far fa-edit mr-1 menu-link-btn-icon"></i>
      投稿したレビュー
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large to="/ec/mypage/delivery/list">
      <i class="far fa-home mr-1 menu-link-btn-icon"></i>
      お届け先確認・変更
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large :href="accountUpdateUrl" target="_blank">
      <i class="far fa-address-card mr-1 menu-link-btn-icon"></i>
      会員情報確認・変更
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large :href="`${ncBaseUrl}ec/mypage/sell/list`">
      <i class="fad fa-bullseye mr-1 menu-link-btn-icon"></i>
      買取見積もり表示
    </v-btn>
    <v-btn class="menu-link-btn" block tile depressed x-large :href="logoutUrl">
      <i class="fal fa-sign-out mr-1 menu-link-btn-icon"></i>
      ログアウト
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import UserService from '@/logic/user.service';

export default Vue.extend({
  name: 'my-page-menu',
  props: {
    // API呼び出しが重複しないよう持っている商品の取得が必要かを指定
    requireFetchOwned: {
      type: Boolean,
      default: true
    },
    // API呼び出しが重複しないよう持っているクーポンの取得が必要かを指定
    requireFetchCoupon: {
      type: Boolean,
      default: true
    }
  },
  setup: (props, context) => {
    const { authorizer, mypageMenuStore } = context.root.$store;

    const state = reactive({
      ncBaseUrl: process.env.VUE_APP_NET_CHUKO_URL,
      accountUpdateUrl: process.env.VUE_APP_API_MEMBER_BASE_URL + 'group/account/update.do',
      logoutUrl: ''
    });

    // ログアウトURL
    const urlParams = new URLSearchParams({
      s: process.env.VUE_APP_SITE_ID,
      u: window.location.origin
    });
    const logoutUrl = process.env.VUE_APP_API_MEMBER_BASE_URL + 'sso/logout.html?' + urlParams.toString();
    state.logoutUrl = logoutUrl;

    // 初期化
    const init = (): void => {
      // 持っている商品の数を取得
      if (props.requireFetchOwned) {
        UserService.fetchOwnedList().then((ownedResult) => (mypageMenuStore.ownedCount = ownedResult.count));
      }

      // 持っているクーポンの数を取得
      if (props.requireFetchCoupon) {
        UserService.fetchCouponList().then((couponResult) => (mypageMenuStore.couponCount = couponResult.couponInfo.length));
      }
    };

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        init();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) init();
      }
    );

    /**
     * 表示する持っている商品の数を取得
     */
    const ownedCount = computed(() => mypageMenuStore.ownedCount);

    /**
     * 表示する持っているクーポンの数を取得
     */
    const couponCount = computed(() => mypageMenuStore.couponCount);

    return {
      ...toRefs(state),
      ownedCount,
      couponCount
    };
  }
});
</script>

<style lang="scss" scoped>
// メニューリンク
.menu-link {
  &-area {
    padding: 8px;
  }

  &-btn {
    position: relative;
    background-color: $bg-white !important;
    font-weight: bold;
    text-align: left;

    &:hover {
      color: inherit;
    }

    ::v-deep .v-btn__content {
      display: inline-block;
      color: inherit;
    }

    &:not(:last-child) {
      border-bottom: 1px dotted $ec-light-grey2;
    }

    &::before {
      opacity: 0;
    }

    &-icon {
      width: 20px;
      color: inherit !important;
    }

    &-count {
      position: absolute;
      right: 0;
      color: $text-white !important;
      background-color: $ec-black;
      border-radius: 0.9em;
      padding: 0 8px;
      font-size: 0.9em;
      font-weight: normal;

      &-red {
        background-color: $ec-red;
      }
    }
  }
}
</style>
