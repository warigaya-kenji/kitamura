<template>
  <div id="not-found">
    <breadcrumbs :breadcrumbs="breadcrumbsList" />
    <div class="error-message">{{ errorMessage }}</div>
    <div class="page-autonav-message">カメラのキタムラWEBサイトをご利用いただきありがとうございます。10秒後にサイトトップへ遷移します。</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onBeforeUnmount } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';

export default Vue.extend({
  name: 'not-found-page',
  components: {
    breadcrumbs: Breadcrumbs
  },
  props: {
    errorMessage: {
      required: true,
      type: String
    }
  },
  setup(props, context) {
    const state = reactive({
      breadcrumbsList: [] as Array<{
        no: number;
        path: string;
        linkUrl?: string | undefined;
      }>
    });

    /** パンくずリスト作成 */
    state.breadcrumbsList = [
      {
        no: 1,
        path: 'ネットショップTOP',
        linkUrl: '/'
      },
      {
        no: 2,
        path: props.errorMessage as string
      }
    ];

    /** トップページに戻る */
    const autoNavigationTimerHandle = setTimeout(() => {
      context.root.$router.push({
        name: 'top-page'
      });
    }, 10000);

    /** ページ離脱時 */
    onBeforeUnmount(() => {
      clearTimeout(autoNavigationTimerHandle);
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style scoped>
.error-message {
  margin: 32px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: rgba(70, 64, 65, 1);
  border: 1px solid rgba(112, 112, 112, 1);
  word-wrap: break-word;
}

.page-autonav-message {
  text-align: center;
}
</style>
