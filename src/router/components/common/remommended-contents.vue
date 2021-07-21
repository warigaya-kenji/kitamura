<template>
  <div id="recommended-contents" v-html="includeHtml"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';
import IncludeFIleService from '@/logic/include-file.service';

export default Vue.extend({
  name: 'RemommendedContents',
  setup: () => {
    const includeHtml = ref<string>('');

    // インクルードファイルを取得
    IncludeFIleService.fetchIncludeFile('header/banner.html').then((response) => (includeHtml.value = response));
    return {
      includeHtml
    };
  }
});
</script>
