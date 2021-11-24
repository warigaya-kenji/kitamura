<template>
  <h2 class="text-h6 font-weight-bold mb-4"><v-icon v-if="isGoodIcon" color="red" class="mr-2" left>far fa-thumbs-up</v-icon>{{ subtitle }}</h2>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'sub-title',
  props: {
    subtitle: {
      required: true
    },
    isGoodIcon: {
      type: Boolean,
      default: true
    }
  },
});
</script>
