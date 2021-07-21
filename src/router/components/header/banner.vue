<template>
  <div id="header-banner" v-html="includeHtml" class="banner-full-width"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';
import IncludeFileService from '@/logic/include-file.service';

export default Vue.extend({
  name: 'banner',
  setup: () => {
    const includeHtml = ref<string>('');

    // インクルードファイルを取得
    IncludeFileService.fetchIncludeFile('header/banner.html').then((response) => (includeHtml.value = response));
    return {
      includeHtml
    };
  }
});
</script>

<style lang="scss" scoped>
.banner-full-width {
  width: 100%;
}
</style>
