// カノニカル関連サービス
const CanonicalService = {
  // headタグ
  _headElement: document.getElementsByTagName('head')[0],
  // headタグに付与したカノニカル
  _canonicalElement: null as Node | null,

  /**
   * カノニカルを設定
   * @param url URL
   */
  set(url: string): void {
    // 初期化
    this.clear();

    const link = document.createElement('link');
    link.id = 'canonical';
    link.rel = 'canonical';
    link.href = url;

    this._headElement.appendChild(link);

    this._canonicalElement = link;
  },

  /**
   * 付与したカノニカルをクリア
   */
  clear(): void {
    if (this._canonicalElement) {
      this._headElement.removeChild(this._canonicalElement);
      this._canonicalElement = null;
    }
  }
};

export default CanonicalService;
