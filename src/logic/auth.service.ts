import Vue from 'vue';
import { load } from 'recaptcha-v3';

import ApiService from './api.service';
import { Session, User } from '@/types/auth';

// セッション情報が取得出来たかを保持するセッションストレージの値
const VALID_SESSION_STORAGE_KEY = 'ec.valid.session';
const VALID_SESSION_STORAGE_VALUE = {
  IS_VALID: 'yes',
  IS_INVALID: 'no'
} as const;
const VALID_SESSION_STORAGE_RETRY_COUNT_KEY = 'ec.valid.session.retry.count';
const MAX_RETRY_COUNT = 1;
const SESSION_STORAGE_KEY = 'JSESSIONID';

const AuthService = {
  /**
   * セッション情報を取得する
   */
  getSession(): string {
    return sessionStorage.getItem(SESSION_STORAGE_KEY) || '';
  },

  /**
   * SSOセッション引継ぎトークン発行
   * @param redirectUrl リダイレクト先
   */
  createToken(redirectUrl: string): void {
    const urlParams = new URLSearchParams({ s: process.env.VUE_APP_SITE_ID });
    if (redirectUrl) {
      urlParams.append('u', redirectUrl);
    }
    const url = process.env.VUE_APP_API_MEMBER_BASE_URL + 'sso/touch.html?' + urlParams.toString();

    window.location.href = url;
  },

  /**
   * SSOセッション引継ぎ
   * @param token 引継ぎトークン
   */
  async requestSession(token: string, redirectUrl: string): Promise<void> {
    let isValidSession: string = VALID_SESSION_STORAGE_VALUE.IS_INVALID;
    try {
      // レスポンスにてセッション情報がCookieに付与される
      const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'sso';
      const session: Session = await ApiService.post(url, { token });
      sessionStorage.setItem(SESSION_STORAGE_KEY, session.sessionId);
      isValidSession = VALID_SESSION_STORAGE_VALUE.IS_VALID;
    } catch (error) {
      console.error('セッション情報の取得に失敗しました。', error);

      const retryCountStr = sessionStorage.getItem(VALID_SESSION_STORAGE_RETRY_COUNT_KEY);
      const retryCount = retryCountStr ? Number(retryCountStr) : 0;
      if (retryCount < MAX_RETRY_COUNT) {
        // SSO処理をリトライする
        sessionStorage.setItem(VALID_SESSION_STORAGE_RETRY_COUNT_KEY, String(retryCount + 1));
        this.createToken(redirectUrl.split('?')[0]);
      } else {
        // 最大リトライ回数を超えたため、一時的にセッションを通す。
        isValidSession = VALID_SESSION_STORAGE_VALUE.IS_VALID;
      }
    } finally {
      // 一時的にセッションストレージで保持する
      sessionStorage.setItem(VALID_SESSION_STORAGE_KEY, String(isValidSession));
    }
  },

  /**
   * SSOセッション情報取得
   */
  async fetchUser(): Promise<User> {
    // Cookieのセッション情報から個人が特定される
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'session';
    const user = await ApiService.get(url, {}, true, { apiName: 'session' });
    return user;
  },

  /**
   * セッションが実行されているか
   */
  isExecutedSession(): boolean {
    const validSession = sessionStorage.getItem(VALID_SESSION_STORAGE_KEY) || '';
    return validSession === VALID_SESSION_STORAGE_VALUE.IS_VALID;
  },

  /**
   * SSOログイン状態確認
   */
  async checkLoginStatus(): Promise<boolean> {
    // ユーザー情報取得
    try {
      const user = await this.fetchUser();
      if (user?.isLogin) {
        Vue.prototype.$store.authorizer.login(user);
      } else {
        Vue.prototype.$store.authorizer.logout();
      }

      return user?.isLogin;
    } catch (error) {
      console.error(error);
      Vue.prototype.$store.authorizer.logout();
    }

    return false;
  },

  /**
   * ログイン状態を初期化する
   */
  initLoginStatus(): void {
    this.checkLoginStatus().then();
  },

  /**
   * ログイン認証
   * @param userId ユーザーID
   * @param password パスワード
   */
  async login(userId: string, password: string): Promise<void> {
    // reCAPTCHAトークン取得
    let reCaptchaToken;
    try {
      const reCaptcha = await load(process.env.VUE_APP_RE_CAPTCHA_SITE_KEY);
      reCaptchaToken = await reCaptcha.execute('homepage');
    } catch (error) {
      console.error('Failure to get reCAPTCHA token for login: ', error);
    }

    // ログイン実行
    const url = process.env.VUE_APP_API_COMMON_BASE_URL + 'login';
    await ApiService.post(
      url,
      {
        uid: userId,
        upw: password,
        token: reCaptchaToken
      },
      {},
      true,
      { apiName: 'login' }
    );

    // ユーザー情報取得
    await this.checkLoginStatus();
  },

  /**
   * ログアウト認証
   */
  async logout(): Promise<void> {
    Vue.prototype.$store.authorizer.logout();
  },

  /**
   * セッション実行をパスする
   */
  passSessionExecution(): void {
    sessionStorage.setItem(VALID_SESSION_STORAGE_KEY, VALID_SESSION_STORAGE_VALUE.IS_VALID);
  }
};

export default AuthService;
