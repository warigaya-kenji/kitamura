<template>
  <div class="order-contents operator-memo">
    <div class="order-contents-title d-flex">代理注文用コメント</div>
    <div class="order-contents-area operator-memo-area">
      <v-textarea outlined hide-details rows="2" v-model="comment"></v-textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';

export default Vue.extend({
  name: 'order-confirm-operator-memo',
  components: {},
  props: {
    operatorMemo: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup: (props, context) => {
    const state = reactive({
      comment: props.operatorMemo as string
    });

    watch(
      () => state.comment,
      () => {
        context.emit('changeComment', state.comment);
      }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  代理注文用コメント
------------------------------- */
.operator-memo {
  &-area {
    padding: 16px;
    border: 1px solid $bg-grey;
  }
}
/** -------------------------------
  代理注文用コメント 960px以下
------------------------------- */
.container-narrow {
  .operator-memo {
    &-area {
      padding: 12px 18px;
      border: none;
    }
  }
}
</style>
