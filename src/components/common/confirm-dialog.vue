<template>
  <v-dialog v-model="confirmDialog" max-width="640" fixed @click:outside="cancel()" class="confirm-dialog">
    <v-card class="confirm-dialog-body d-flex flex-column">
      <v-btn icon class="dialog-close-button" @click="cancel()" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <v-card-title class="ma-auto">
        <div class="d-flex align-center">
          <v-icon size="42" class="mr-5">fas fa-exclamation-circle</v-icon>
          <span>{{ message }}</span>
        </div>
      </v-card-title>

      <v-card-actions class="dialog-actions-area">
        <v-btn id="dialog-ok-btn" color="primary" class="dialog-btn mr-4" @click="ok()">{{ okText }}</v-btn>
        <v-btn id="dialog-cancel-btn" class="dialog-btn" @click="cancel()">{{ cancelText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';

export default Vue.extend({
  name: 'confirm-dialog',
  setup: (_, context) => {
    const { confirmDialogStore } = context.root.$store;

    const state = reactive({
      confirmDialog: false,
      message: confirmDialogStore.message,
      okText: confirmDialogStore.okText,
      cancelText: confirmDialogStore.cancelText,
      okAction: confirmDialogStore.okAction,
      cancelAction: confirmDialogStore.cancelAction
    });

    /** ダイアログを閉じる */
    const close = () => {
      state.confirmDialog = false;
      confirmDialogStore.clear();
    };

    /** OK時の処理を行ってダイアログを閉じる */
    const ok = () => {
      state.okAction();
      close();
    };

    /** キャンセル時の処理を行ってダイアログを閉じる */
    const cancel = () => {
      state.cancelAction();
      close();
    };

    /** エラーメッセージが更新されたダイアログを表示する */
    watch(
      () => confirmDialogStore.message,
      (message) => {
        if (message) {
          state.message = message;
          state.okText = confirmDialogStore.okText;
          state.cancelText = confirmDialogStore.cancelText;
          state.okAction = confirmDialogStore.okAction;
          state.cancelAction = confirmDialogStore.cancelAction;
          state.confirmDialog = true;
        }
      }
    );
    return {
      ...toRefs(state),
      ok,
      cancel
    };
  }
});
</script>

<style lang="scss" scoped>
.confirm-dialog {
  z-index: 600;

  &-body {
    min-height: 200px;
  }
}

.dialog-close-button {
  position: absolute;
  top: 5px;
  right: 5px;
}

.dialog-actions-area {
  margin: 0 auto;

  .dialog-btn {
    width: 100px;
  }
}
</style>
