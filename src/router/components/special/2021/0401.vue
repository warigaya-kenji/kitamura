<template>
  <div class="component">
    <div class="component-info">
      <div>テンプレートC</div>
      <div>コンポーネント : {{ msg }}</div>
    </div>

    <!-- サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: '0401',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: (props, context) => {
    const state = reactive({
      msg: '/2021/0401.vue',
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '2021',
          linkUrl: '/ec/special/2021',
          disabled: true
        },
        {
          path: '0401',
          linkUrl: '',
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

<style lang="scss" scoped>
/* template内のDomへの適用 */
.component {
  &-info {
    color: $text-blue;
  }
}
</style>
