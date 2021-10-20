import { reactive } from '@vue/composition-api';

const emptyFunc = () => {
  return;
};

/**
 * 確認ダイアログ関連のStore
 */
export default function confirmDialogStore() {
  const state = reactive({
    /** メッセージ */
    message: '',

    /** OKボタンの表示 */
    okText: 'OK',

    /** キャンセルボタンの表示 */
    cancelText: 'キャンセル',

    /** OK時の処理 */
    okAction: emptyFunc,

    /** キャンセル時の処理 */
    cancelAction: emptyFunc
  });

  return {
    get message(): string {
      return state.message;
    },

    get okText(): string {
      return state.okText;
    },

    get cancelText(): string {
      return state.cancelText;
    },

    get okAction(): () => void {
      return state.okAction;
    },

    get cancelAction(): () => void {
      return state.cancelAction;
    },

    open(message: string, okText?: string, cancelText?: string): Promise<boolean> {
      state.message = message;
      state.okText = okText || 'OK';
      state.cancelText = cancelText || 'キャンセル';

      return new Promise((resolve) => {
        state.okAction = () => resolve(true);
        state.cancelAction = () => resolve(false);
      });
    },

    clear(): void {
      state.message = '';
      state.okText = 'OK';
      state.cancelText = 'キャンセル';
      state.okAction = emptyFunc;
      state.cancelAction = emptyFunc;
    }
  };
}

export type ErrorStore = ReturnType<typeof confirmDialogStore>;
