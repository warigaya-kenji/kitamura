<template>
  <div class="component2">
    <div class="component2-info">
      <div>テンプレートC</div>
      <div>コンポーネント : {{ msg }}</div>
    </div>

    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->

    <!-- ↓ サンプル：特集IDでの商品一覧表示 -->
    <product-list-by-special-id class="mb-5" :specialId="603" />
    <!-- ↑ サンプル：特集IDでの商品一覧表示 -->

    <!-- ↓ サンプル：JanCodeリストでの商品一覧表示 -->
    <product-list-by-jan-code
      :janCodes="[
        '4547410369137',
        '4547410379372',
        '4547410379389',
        '4974214167704',
        '4974214175174',
        '4902205338192',
        '4902408338685',
        '4901770448428',
        '4901881167966',
        '4901881291913',
        '4902205235248',
        '4901881168130',
        '4901881168123',
        '4901881168062',
        '4901881168055',
        '4901881168048',
        '4901881168116',
        '4901881168147',
        '4901881168031',
        '4901881168079',
        '4901881168086',
        '4901881168093'
      ]"
    />
    <!-- ↑ サンプル：JanCodeリストでの商品一覧表示 -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ProductListByJanCode from '@/components/special/common/product-list-by-jan-code.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'sample-component2.vue',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    'product-list-by-jan-code': ProductListByJanCode
  },
  setup: (props, context) => {
    const state = reactive({
      msg: 'sample-component2',
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'サンプル２',
          linkUrl: '',
          disabled: true
        }
      ]
    });

    onMounted(() => {
      console.log('onMounted');
      console.log(state.msg);
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.component2 {
  &-info {
    color: $text-green;
  }
}
</style>
