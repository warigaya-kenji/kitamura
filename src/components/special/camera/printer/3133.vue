<template>
  <v-app>
    <div class="printer-3133">
      <div class="main-contents-wrap">
        <!-- ↓ サンプル：パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-2 text-body-1">
          <a href="/ec/special/camera/printer">
            <v-img src="https://shopimg.kitamura.jp/images/banner/4769.gif" alt="おすすめプリンター特集" max-width="100%" height="auto"
          /></a>
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="3133" />
      </div>
    </div>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'printer-3133',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
  },
  props: {},
  setup: (context) => {
    document.title = 'こだわりの高画質で印刷したい方におすすめのプリンター | カメラのキタムラネットショップ';
    const state = reactive({
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'こだわりの高画質で印刷したい方におすすめのプリンター',
          disabled: true
        }
      ],
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
