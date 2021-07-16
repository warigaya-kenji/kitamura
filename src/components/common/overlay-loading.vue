<template>
  <div class="overlay-loading">
    <v-progress-circular indeterminate :size="70" :width="7" class="overlay-loading-circular"></v-progress-circular>
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
.overlay-loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.overlay-loading-circular {
  color: #ccc;
}
</style>
