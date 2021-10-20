<template>
  <v-app>
    <div class="xt4-4531">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <p class="caption mb-0">ご予約受付中！富士フイルム X-T4</p>
        <a href="/ec/special/camera/feature/fujifilm/xt4">
          <v-img src="https://shopimg.kitamura.jp/images/banner/7418.jpg" max-width="950" max-height="200" class="mb-4"></v-img>
        </a>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="4531" />
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
  name: 'xt4-4531',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'ご予約受付中！富士フイルム X-T4 | カメラのキタムラネットショップ';
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ご予約受付中！富士フイルム X-T4',
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
