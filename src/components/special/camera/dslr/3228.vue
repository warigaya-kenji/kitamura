<template>
  <v-app>
    <div class="dslr-3228">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'おすすめミラーレス一眼カメラ キヤノン EOS M200'" />
        <product-list-by-special-id class="mb-5" :specialId="3228" />
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
  name: 'dslr-3228',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText,
  },
  setup: (props, context) => {
    document.title = 'おすすめミラーレス一眼カメラ キヤノン EOS M200 | カメラのキタムラネットショップ'

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'おすすめのデジタル一眼レフ/ミラーレスカメラ特集',
          linkUrl: '/ec/special/camera/dslr',
          disabled: true
        },
        {
          path: 'おすすめミラーレス一眼カメラ キヤノン EOS M200',
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
