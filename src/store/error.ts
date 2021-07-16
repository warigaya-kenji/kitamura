import { reactive } from '@vue/composition-api';

/**
 * エラー関連のStore
 */
export default function errorStore() {
  const state = reactive({
    /** エラーメッセージ */
    errorMessage: ''
  });

  return {
    get errorMessage(): string {
      return state.errorMessage;
    },

    set errorMessage(message: string) {
      state.errorMessage = message;
    },

    clear(): void {
      state.errorMessage = '';
    }
  };
}

export type ErrorStore = ReturnType<typeof errorStore>;
