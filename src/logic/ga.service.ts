/**
 * WindowのinterfaceにGAのプロパティを追加する
 */
declare global {
  interface Window {
    ga: (func: (tracker: any) => void) => void;
  }
}

/** 最大リトライ回数 */
const GA_MAX_RETRY_COUNT = 10;

/** 待機時間（ms） */
const GA_WAITING_TIME = 1000;

// GA関連サービス
const GaService = {
  // 待機処理のID
  _intervalId: undefined as number | undefined,

  // リトライ回数
  _retryCount: 0,

  /**
   * GAが読み込まれているか
   */
  isLoadedGa(): boolean {
    return !!window.ga;
  },

  /**
   * GAが読み込まれているか
   * @param resolve Promiseの成功処理
   */
  _isLoadedGaForPromise(resolve: (value: boolean) => void): void {
    if (this.isLoadedGa() || !this._intervalId) {
      clearInterval(this._intervalId);
      resolve(true);
    } else if (this._retryCount > GA_MAX_RETRY_COUNT) {
      // リトライ回数を超えたら待機状態から開放する
      resolve(false);
    }

    this._retryCount++;
  },

  /**
   * GAが読み込まれるまで待機する
   * @returns GAが読み込まれたら返却する
   */
  waitInitGa(): Promise<boolean> {
    this._retryCount = 0;
    clearInterval(this._intervalId);
    return new Promise<boolean>((resolve) => {
      this._intervalId = setInterval(this._isLoadedGaForPromise.bind(this), GA_WAITING_TIME, resolve);
    });
  },

  /**
   * リンカーパラメータを取得する
   * @returns リンカーパラメータ
   */
  getLinkerParam(): Promise<string> {
    return new Promise((resolve) => {
      // リンクパラメータを取得
      window.ga((tracker) => {
        const linkerParam = tracker.get('linkerParam');
        resolve(linkerParam);
      });
    });
  },

  /**
   * リンクパラメータを取得する
   */
  async addLinkerParam(url: string): Promise<string> {
    // GAクロスドメインが初期化されか確認し、必要であれば待つ
    let gaLoaded = this.isLoadedGa();
    if (!gaLoaded) {
      gaLoaded = await this.waitInitGa();
    }

    if (gaLoaded) {
      const linkerParam = await this.getLinkerParam();
      return `${url}?${linkerParam}`;
    } else {
      // 一定時間待った場合でもGAが読み込めなかった場合は付与しない
      return url;
    }
  }
};

export default GaService;
