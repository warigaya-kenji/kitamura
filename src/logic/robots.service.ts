// robots関連サービス
const RobotsService = {
  // headタグ
  _headElement: document.getElementsByTagName('head')[0],
  // headタグに付与したrobots
  _robotsElement: null as Node | null,

  /**
   * robotsを設定
   * @param url URL
   */
  set(content: string): void {
    // 初期化
    this.clear();

    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = content;

    this._headElement.appendChild(meta);

    this._robotsElement = meta;
  },

  /**
   * 付与したrobotsをクリア
   */
  clear(): void {
    if (this._robotsElement) {
      this._headElement.removeChild(this._robotsElement);
      this._robotsElement = null;
    }
  }
};

export default RobotsService;
