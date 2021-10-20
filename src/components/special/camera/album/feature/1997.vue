<template>
  <v-app>
    <div class="1997">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'手作りアルバム・ペーパーパーツ・シールで華やかデコレーション'" />
        <product-list-by-special-id class="mb-5" :specialId="1997" />
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
  name: '1997',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText,
  },
  setup: (props, context) => {
    document.title = '手作りアルバム・ペーパーパーツ・シールで華やかデコレーション| カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '手作りアルバム・ペーパーパーツ・シールで華やかデコレーションの購入はカメラのキタムラにおまかせください！')

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
