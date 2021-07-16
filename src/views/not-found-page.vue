<template>
  <div id="error-400-page">
    <not-found errorMessage="指定されたページが見つかりませんでした" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NotFound from '@/components/common/not-found.vue';

export default Vue.extend({
  name: 'not-found-page',
  components: {
    'not-found': NotFound
  }
});
</script>

<style scoped></style>
