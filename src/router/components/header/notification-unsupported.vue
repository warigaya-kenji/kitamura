<template>
  <div id="notification-unsupported" class="notification-content" v-if="visible">
    <div class="notification-area">
      <div class="notification-text">
        <span>
          お使いのブラウザは動作保証対象外のため表示が崩れる個所がございます。<br />
          お手数おかけしますが、サポートされているブラウザに切り替えをお願いいたします。<br />
          なお、ダウンロードやインストール方法等は、各提供元へお問い合わせくださいませ。<br />
        </span>
        <div>
          <v-btn class="link-button" style="text-transform: none" depressed small href="https://www.microsoft.com/ja-jp/edge" target="_blank">
            <span>Microsoft Edge(最新版)</span>
          </v-btn>
          <v-btn class="link-button" style="text-transform: none" depressed small href="https://www.google.co.jp/chrome/" target="_blank">
            <span>Google Chrome(最新版)</span>
          </v-btn>
        </div>
      </div>
      <div class="close-button-area">
        <v-btn depressed @click="closeNotification()">
          <span><v-icon>fas fa-times</v-icon>閉じる</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { isModernBrowser } from '@/logic/utils';

export default Vue.extend({
  name: 'notification-unsupported',
  setup: () => {
    const state = reactive({
      visible: !isModernBrowser()
    });

    function closeNotification() {
      state.visible = false;
    }
    return {
      ...toRefs(state),
      closeNotification
    };
  }
});
</script>

<style lang="scss" scoped>
.notification-content {
  width: 100%;
  background-color: $ec-primary;
}

.notification-area {
  display: flex;
  margin: auto;
  padding: 8px 12px 4px 12px;
  max-width: 1000px;
  justify-content: space-between;

  .notification-text {
    display: inline-block;
    color: #fff;
  }

  .link-button {
    margin: 0.5em 1em 0.5em 0;
  }

  .close-button-area {
    display: block;
    margin: auto 0;
    height: 100%;
  }
}
</style>
