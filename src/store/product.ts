import { SecretInfo } from '@/types/special-product';
import { reactive } from '@vue/composition-api';

export default function productStore() {
  const state = reactive({
    secretInfo: {} as SecretInfo | {}
  });

  return {
    get secretInfo(): SecretInfo | {} {
      return state.secretInfo;
    },

    set secretInfo(info: SecretInfo | {}) {
      state.secretInfo = info;
    },

    resetSecretInfo() {
      state.secretInfo = {};
    }
  };
}

export type ProductStore = ReturnType<typeof productStore>;
