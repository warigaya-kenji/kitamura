<template>
  <v-dialog v-model="errorDialog" max-width="640" fixed @click:outside="close()" class="error-dialog">
    <v-card class="error-dialog-body d-flex flex-column px-3 py-5">
      <v-card-title class="error-dialog-msg">
        <div class="error-dialog-msg-area d-flex">
          <v-icon size="42" :class="{ 'mr-9': $vuetify.breakpoint.mdAndUp, 'mr-6': $vuetify.breakpoint.smAndDown }">fas fa-exclamation-circle</v-icon>
          <span>{{ errorMessage }}</span>
        </div>
      </v-card-title>

      <v-card-actions class="error-dialog-actions-area d-flex justify-center">
        <v-btn color="primary" class="error-dialog-btn" @click="close()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';

export default Vue.extend({
  name: 'error-dialog',
  setup: (_, context) => {
    const { errorStore } = context.root.$store;

    const state = reactive({
      errorDialog: false,
      errorMessage: ''
    });

    /** ダイアログを閉じる */
    const close = () => {
      state.errorDialog = false;
      errorStore.clear();
    };

    /** エラーメッセージが更新されたダイアログを表示する */
    watch(
      () => errorStore.errorMessage,
      (errorMessage) => {
        if (errorMessage) {
          state.errorMessage = errorMessage;
          state.errorDialog = true;
        }
      }
    );

    return {
      ...toRefs(state),
      close
    };
  }
});
</script>

<style lang="scss" scoped>
.error-dialog {
  z-index: 600;

  &-msg-area {
    align-items: center;
    white-space: pre-line; // 改行を有効にする
  }

  &-btn {
    width: 100px;
  }
}
</style>
