<template>
  <v-app>
    <div class="1985">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'おすすめ！クラフトアルバム・デミサイズのアルバム・ポケットアルバム'" />
        <product-list-by-special-id class="mb-5" :specialId="1985" />
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
import SubText from '@/components/common/special/subtext.vue';

export default Vue.extend({
  name: '1985',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText,
  },
  setup: (props, context) => {
    document.title = 'おすすめ商品！クラフトアルバム・デミサイズのアルバム・ポケットアルバム| カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'おすすめ商品！クラフトアルバム・デミサイズのアルバム・ポケットアルバムの購入はカメラのキタムラにおまかせください！')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '手作りアルバム特集',
          linkUrl: '/ec/special/camera/album/feature',
          disabled: true
        },
        {
          path: 'おすすめ！クラフトアルバム・デミサイズのアルバム・ポケットアルバム',
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
