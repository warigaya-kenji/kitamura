<template>
  <v-dialog v-model="errorDialog" max-width="640" fixed @click:outside="close()" class="error-dialog">
    <v-card class="error-dialog-body d-flex">
      <v-btn icon class="dialog-close-button" @click="close()" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <v-card-title class="error-dialog-msg ma-auto">
        <div class="error-dialog-msg-area d-flex">
          <v-icon size="42" class="mr-9">fas fa-exclamation-circle</v-icon>
          <span>{{ errorMessage }}</span>
        </div>
      </v-card-title>
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

  &-body {
    min-height: 200px;
  }

  &-msg {
    &-area {
      align-items: center;
    }
  }
}

.dialog-close-button {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
