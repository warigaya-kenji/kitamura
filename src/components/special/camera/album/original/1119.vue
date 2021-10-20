<template>
  <v-app>
    <div class="photomount-1119">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1119" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: '1119',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'オリジナル クラフトアルバム・オリジナル リネンポケットアルバム | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'オリジナル クラフトアルバム・オリジナル リネンポケットアルバム。写真台紙のお買い求めは、カメラのキタムラにお任せください！お手軽な普通写真台紙や婚礼用の写真台紙、高級写真台紙まで勢揃い♪カメラ専門店カメラのキタムラネットショップへお任せください。'
      );
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'キタムラオリジナル商品',
          linkUrl: '/ec/special/camera/album/original',
          disabled: false
        },
        {
          path: 'オリジナル クラフトアルバム・オリジナル リネンポケットアルバム',
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
