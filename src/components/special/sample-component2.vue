<template>
  <div class="component2">
    <div class="component2-info">
      <div>テンプレートC</div>
      <div>コンポーネント : {{ msg }}</div>
    </div>

    <!-- サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'sample-component2.vue',
  components: {
    breadcrumbs: Breadcrumbs
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
