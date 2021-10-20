<template>
  <div id="my-page" class="ec-back-color my-page-container">
    <!-- ページコンテンツ -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, watch } from '@vue/composition-api';

export default Vue.extend({
  name: 'my-page',
  setup: (_, context) => {
    const { authorizer } = context.root.$store;

    const checkLoggedIn = async () => {
      // ログインされていない場合、ログインダイアログを表示
      if (!authorizer.isLoggedIn) {
        authorizer.openLoginMenu();
      }
    };

    onMounted(() => {
      checkLoggedIn();

      // ブラウザの戻るボタン検知用（Vue系のものは、反応しないときがあるため）
      window.addEventListener('popstate', function() {
        checkLoggedIn();
      });
    });

    // ログイン状況を監視する
    watch(
      () => [authorizer.isLoggedIn, authorizer.loginMenuOpenState],
      ([isLoggedIn, state]) => {
        if (!isLoggedIn && !state) {
          // ログインが完了していない場合、トップページに戻す
          context.root.$router.push({ name: 'top-page' });
        }
      }
    );

    // 内部ルーティングが変更された場合、表示内容を初期化する
    watch(
      () => context.root.$route,
      () => checkLoggedIn()
    );

    return {};
  }
});
</script>

<style lang="scss" scoped>
.my-page-container {
  // marginのはみ出し防止
  overflow: hidden;
}
</style>
