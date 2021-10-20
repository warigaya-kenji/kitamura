<template>
  <v-app>
    <div class="443">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'ハンザ 差替えマットパネル'" />
        <product-list-by-special-id class="mb-5" :specialId="443" />
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
  name: '443',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText,
  },
  setup: (props, context) => {
    document.title = 'ハンザ 差替えマットパネル | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ハンザ 差替えマットパネルの購入はカメラのキタムラにおまかせください！')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '見て選ぶ・見て探す。おすすめフォトフレーム・額',
          linkUrl: '/ec/special/camera/frame',
          disabled: false
        },
        {
          path: 'ハンザ 差替えマットパネル',
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
