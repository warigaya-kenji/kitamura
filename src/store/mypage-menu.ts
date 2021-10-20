import { reactive, ref } from '@vue/composition-api';

/**
 * 認証関連のStore
 */
export default function mypageMenuStore() {
  const state = reactive({
    ownedCount: 0,
    couponCount: 0
  });

  return {
    get ownedCount(): number {
      return state.ownedCount;
    },

    get couponCount(): number {
      return state.couponCount;
    },

    set ownedCount(count) {
      state.ownedCount = count;
    },

    set couponCount(count) {
      state.couponCount = count;
    },

    clear() {
      state.ownedCount = 0;
      state.couponCount = 0;
    }
  };
}

export type MypageMenuStore = ReturnType<typeof mypageMenuStore>;
