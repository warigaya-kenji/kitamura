<template>
  <v-app>
    <div class="storage-363">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'防湿庫特集 | ドライボックスで湿気・防湿対策'" />
        <product-list-by-special-id class="mb-5" :specialId="363" />
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
  name: 'storage-363',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText,
  },
  setup: (props, context) => {
    document.title = '防湿庫特集 | ドライボックスで湿気・防湿対策 | カメラのキタムラネットショップ'

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '防湿庫の選び方・湿気対策特集',
          linkUrl: '/ec/special/camera/storage',
          disabled: true
        },
        {
          path: 'ドライボックスで湿気・防湿対策',
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
