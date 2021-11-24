<template>
  <div
    id="shopping-credit-complete-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'content-area-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <div class="shopping-credit">
        <!-- ページタイトル -->
        <h2 class="shopping-credit-title">
          申し込みが完了しました
        </h2>

        <!-- メッセージ -->
        <div class="shopping-credit-message">
          <span>ショッピングクレジットのお申し込みが完了致しました。</span>
        </div>

        <div class="text-right secondary-link py-3 mb-4">
          <router-link to="/">
            <span class="secondary-link-text">トップページへ</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'shopping-credit-complete-page',
  setup: () => {
    document.title = '【カメラのキタムラ】ショッピングクレジットの申込完了';

    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  信販申し込み完了
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

.shopping-credit {
  margin: 50px 8px;
  padding: 12px;
  border: 1px solid $ec-light-grey;
  border-radius: 5px;

  &-title {
    color: $text-white;
    background-color: #666;
    padding: 5px 10px;
  }

  &-message {
    padding: 10px;
  }
}

/** -------------------------------
  信販申し込み完了 960px未満
------------------------------- */
.container-narrow {
  .shopping-credit {
    margin: 10px 8px;
  }
}
</style>
