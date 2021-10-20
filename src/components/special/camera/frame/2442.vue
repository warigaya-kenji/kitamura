<template>
  <v-app>
    <div class="frame-2442">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="2442" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'frame-2442',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: () => {
    document.title = 'チクマ 木製額FI フォトフレーム | カメラのキタムラネットショップ';
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '額縁・写真フォトフレーム おすすめシリーズ紹介',
          linkUrl: '/ec/special/camera/frame',
          disabled: false
        },
        {
          path: 'チクマ 木製額FI フォトフレーム',
          disabled: true
        }
      ]
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>
