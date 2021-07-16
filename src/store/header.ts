import { reactive } from '@vue/composition-api';

/**
 * ヘッダー関連のStore
 */
export default function headerStore() {
  const state = reactive({
    headerHeight: 0
  });

  return {
    get headerHeight(): number {
      return state.headerHeight;
    },

    setHeight(height: number): void {
      state.headerHeight = height;
    }
  };
}

export type HeaderStore = ReturnType<typeof headerStore>;
