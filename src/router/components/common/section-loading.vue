<template>
  <div class="section-loading">
    <v-progress-circular indeterminate color="grey" :size="40" :width="5"></v-progress-circular>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'overlay-loading',
  setup: () => {
    const state = reactive({
      target: '#page-top',
      offset: {
        duration: 300,
        offset: 0,
        easing: 'linear'
      }
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.section-loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}
</style>
