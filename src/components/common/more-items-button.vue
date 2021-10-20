<template>
  <v-btn
    tile
    block
    id="more-items-button"
    class="more-items-button"
    :class="{
      'button-wide': $vuetify.breakpoint.mdAndUp,
      'button-narrow': $vuetify.breakpoint.smAndDown
    }"
    @click="$emit('click')"
  >
    {{ text }}
    <i class="more-items-button-icon fas fa-plus"></i>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'more-items-button',
  props: {
    text: {
      type: String,
      default: 'もっと見る'
    }
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  もっと見るボタン
------------------------------- */
.v-btn.more-items-button {
  margin-top: 12px;
  font-size: 18px;
  height: 60px;
  color: $text-white;
  background-color: $bg-grey2;

  &.button-narrow {
    margin-top: 20px;
    font-size: 16px;
    height: 48px;
  }
}

.more-items-button-icon {
  margin-left: 20px;
}
</style>
