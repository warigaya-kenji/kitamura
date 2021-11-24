<template>
  <v-app>
    <div class="camera-printer">
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
import { reactive, toRefs, watch } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { Route } from 'vue-router';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'camera-photomount-page',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
  },
  setup(props, context) {
    document.title = 'おすすめプリンター特集 商品一覧 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '写真印刷や、A3サイズのプリント・ハガキの宛名印刷にもおすすめのプリンターのご紹介です。プリンターのご購入はカメラのキタムラにお任せください')

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
          path: 'おすすめプリンター特集',
          linkUrl: '/ec/special/camera/printer',
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