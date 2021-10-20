<template>
  <v-btn tile large depressed class="back-btn" :to="to" :class="{ sp: $vuetify.breakpoint.smAndDown }" exact>
    <i class="fas fa-chevron-left back-btn-icon"></i>
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'back-button',
  props: {
    text: {
      type: String,
      default: 'トップに戻る'
    },
    to: {
      type: String,
      default: '/'
    }
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  戻るボタン
------------------------------- */
.back-btn {
  background-color: $bg-white !important;
  display: flex;
  flex: 1 0 auto;
  margin: 8px;
  position: relative;
  font-size: 1em;
  font-weight: bold;

  &-icon {
    position: absolute;
    left: 0;
  }
}
</style>
