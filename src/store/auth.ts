import { reactive, ref } from '@vue/composition-api';
import { User } from '@/types/auth';
import AuthService from '@/logic/auth.service';

/**
 * 認証関連のStore
 */
export default function authStore() {
  const state = reactive({
    /** ログイン状態 */
    isLoggedIn: false,

    /** ユーザー情報 */
    user: ref<User | null>(null),

    /** ログインメニューの開閉状態 */
    loginMenuOpenState: false
  });

  return {
    get isLoggedIn(): boolean {
      return state.isLoggedIn;
    },

    get loginMenuOpenState(): boolean {
      return state.loginMenuOpenState;
    },

    set loginMenuOpenState(openState) {
      state.loginMenuOpenState = openState;
    },

    get user(): User | null {
      return state.user;
    },

    login(user: User) {
      state.isLoggedIn = true;
      state.user = user;
    },

    logout(): void {
      state.isLoggedIn = false;
      state.user = null;
    },

    openLoginMenu(): void {
      AuthService.checkLoginStatus().then((isLoggedIn) => {
        state.loginMenuOpenState = !isLoggedIn;
      });
    }
  };
}

export type AuthStore = ReturnType<typeof authStore>;
