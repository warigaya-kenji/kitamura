<template>
  <div id="my-page-title" class="page-title mb-3" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <span class="mr-7"><slot></slot></span>
    <span class="d-inline-block">
      <img src="@/assets/header/t-point.svg" class="mr-2 t-point-img" />
      <span class="text-point">{{ tPoint }}<span class="text-point-unit">pt</span></span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';

export default Vue.extend({
  name: 'my-page',
  setup: (_, context) => {
    const { authorizer } = context.root.$store;

    const state = reactive({
      // Tポイント
      tPoint: authorizer.user?.point || 0
    });

    // Tポイント情報を検知
    watch(
      () => authorizer.user,
      (user) => {
        state.tPoint = user?.point || 0;
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
  マイページタイトル 960px以上
------------------------------- */
.page-title {
  padding-left: 0;
  font-size: 36px;
  font-weight: bold;
  line-height: 2;
}

.text-point {
  font-size: 16px;
  &-unit {
    font-size: 0.8em;
  }
}

.t-point-img {
  height: 16px;
}

/** -------------------------------
  マイページタイトル 960px未満
------------------------------- */
.sp {
  &.page-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
  }
}
</style>
