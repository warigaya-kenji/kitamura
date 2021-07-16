import { reactive } from '@vue/composition-api';

/**
 * 認証関連のStore
 */
export default function loadStore() {
  const state = reactive({
    /** ルーター読み込み状態 */
    routeLoaded: false
  });

  return {
    get isRouteLoaded(): boolean {
      return state.routeLoaded;
    },

    routeLoaded(): void {
      state.routeLoaded = true;
    },

    routeUnset(): void {
      state.routeLoaded = false;
    }
  };
}

export type LoadStore = ReturnType<typeof loadStore>;
