<template>
  <v-app>
    <div class="camera-album">
      <div class="main-contents-wrap">
        <!-- パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbsList" class="mb-4" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="Number(routeItemCode)" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs, onUpdated, watch } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { Route } from 'vue-router';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'camera-album-page',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
  },
  setup(props, context) {
    document.title = 'おすすめ 写真アルバム | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '大量収納できる、整理におすすめな写真アルバムや、贈り物にプレゼントにぴったりな写真アルバムまで、カメラのキタムラでは多数の写真アルバムをご用意しております！写真アルバムのご購入はカメラのキタムラネットショップにお任せください。')
    const state = reactive({
      routeItemCode: '',
      // パンくず情報
      breadcrumbsList: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '写真アルバム シリーズ紹介',
          linkUrl: '/ec/special/camera/album',
          disabled: false
        },
      ],
    });

    /**
     * ページ状態の初期化
     * 一度値を定義したページ状態変数の値を初期化する
     */
    function initState() {
      state.routeItemCode = '';
    }

    /**
     * 商品詳細情報を取得して設定する
     */
    function setProduct(route: Route) {
      // ページ内状態を初期化
      initState();

      // ルートパスから、特集ID取得
      state.routeItemCode = route.params.id;
      console.log(state.routeItemCode)
    }

    // 初期化
    setProduct(context.root.$route);

    /**
     * 画面が切り替わった際に再度商品詳細情報を再設定する
     */
    watch(
      () => context.root.$route,
      (route) => {
        if (route.params.id !== state.routeItemCode) {
          setProduct(route);
        }
      }
    );

    return {
      ...toRefs(state),
    };
  }
});
</script>