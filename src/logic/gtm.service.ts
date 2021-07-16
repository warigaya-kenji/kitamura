import Vue from 'vue';

/**
 * WindowのinterfaceにGTMのプロパティを追加する
 */
declare global {
  interface Window {
    google_tag_manager: any;
  }
}

/** 最大リトライ回数 */
const GTM_MAX_RETRY_COUNT = 10;

/** 待機時間（ms） */
const GTM_WAITING_TIME = 1000;

// GTM関連サービス
const GtmService = {
  // 待機処理のID
  _intervalId: undefined as number | undefined,

  // リトライ回数
  _retryCount: 0,

  /**
   * GTMが読み込まれているか
   * @param resolve Promiseの成功処理
   */
  _findGtm(resolve: (value: void | PromiseLike<void>) => void): void {
    if (window.google_tag_manager || !this._intervalId) {
      clearInterval(this._intervalId);
      resolve();
    } else if (this._retryCount > GTM_MAX_RETRY_COUNT) {
      // リトライ回数を超えたら待機状態から開放する
      resolve();
    }

    this._retryCount++;
  },

  /**
   * GTMが読み込まれるまで待機する
   * @returns GTMが読み込まれたら返却する
   */
  waitInitGtm(): Promise<void> {
    this._retryCount = 0;
    clearInterval(this._intervalId);
    return new Promise<void>((resolve) => {
      this._intervalId = setInterval(this._findGtm, GTM_WAITING_TIME, resolve);
    });
  },

  /**
   * GTMのトラッキングイベントを発行する
   * @param gtmPageName ページ名
   * @param janCode 商品コード
   * @param netMemberId 会員ID
   */
  trackEvent(gtmPageName: string, janCode = '', netMemberId = '', referrer?: string): void {
    const event: { [key: string]: object | string } = {
      event: 'optimize.activate',
      page: gtmPageName,
      jan_cd: janCode, // eslint-disable-line @typescript-eslint/camelcase
      net_member_id: netMemberId // eslint-disable-line @typescript-eslint/camelcase
    };

    if (referrer) {
      event.gtm = { oldUrl: referrer };
    }

    Vue.prototype.$gtm.trackEvent(event);
  }
};

export default GtmService;
