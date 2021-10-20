/**
 * カルーセルバナー
 */
export type CarouselBanner = {
  /** ソート順 */
  index: number;

  /** バナー画像URL */
  imageSrc: string;

  /** リンク先 */
  linkUrl: string;

  /** 別タブで開くか */
  isBlank: 'yes' | 'no';

  /** 有効期限（開始）[yyyy/MM/dd HH:mm] */
  validFrom: string;

  /** 有効期限（終了）[yyyy/MM/dd HH:mm] */
  validTo: string;
};

/**
 * カテゴリリンク
 */
export type CategoryLink = {
  /** 場所 */
  column: string;

  /** 名称 */
  categoryName: string;

  /** リンクURL */
  linkUrl: string;

  /** 画像PATH */
  imageSrc: string;
};

/**
 * カテゴリ(新品)
 */
export type NewerCategory = {
  /** コード */
  code: string;

  /** コード桁数 */
  digit: string;

  /** 親カテゴリ名 */
  parentCategoryName: string;

  /** 子カテゴリ名 */
  childCategoryName: string;

  /** 孫カテゴリ名 */
  grandchildCategoryName: string;

  /** 連結カテゴリ名 */
  concatenationCategoryName: string;

  /** カテゴリーパス */
  path: string;
};

/**
 * カテゴリ(中古)
 */
export type UsedCategory = {
  /** カテゴリ名 */
  categoryName: string;

  /** 新品コード */
  newerCode: string;

  /** 画像PATH */
  imageSrc: string;
};

/**
 * 検索条件
 */
export type ConditionTsv = {
  /** 検索パラメーターコード */
  paramCode: string;

  /** 条件名 */
  name: string;

  /** 表示順 */
  sort: number;

  /** ログイン時表示フラグ */
  isDisplayLogin: string;

  /** ログアウト時表示フラグ */
  isDisplayLogout: string;

  /** 表示用変換フラグ */
  isConvert: string;

  /** 結果件数ソートフラグ */
  isSortWithCount: string;
};

/**
 * 表示用価格
 */
export type DisplayPrice = {
  /** 値 */
  value: string;

  /** 表示 */
  text: string;
};

/**
 * 新着動画
 */
export type MovieNews = {
  /** 動画タイトル */
  title: string;

  /** YouTube動画ID */
  movieId: string;

  /** キャプション */
  caption: string;

  /** 有効期限（開始）[yyyy/MM/dd HH:mm] */
  validFrom: string;

  /** 有効期限（終了）[yyyy/MM/dd HH:mm] */
  validTo: string;
};

/**
 * 特集・セール
 */
export type SpecialSaleNews = {
  /** 特集タイトル */
  title: string;

  /** タグ名 */
  tag: '特集' | 'セール';

  /** キャプション */
  caption: string;

  /** リンクURL */
  linkUrl: string;

  /** 画像PATH */
  imageSrc: string;

  /** 有効期限（開始）[yyyy/MM/dd HH:mm] */
  validFrom: string;

  /** 有効期限（終了）[yyyy/MM/dd HH:mm] */
  validTo: string;
};

export type Maker = {
  /** ソート順 */
  index: number;

  /** メーカー名 */
  makerName: string;

  /** バナー画像URL */
  imageSrc: string;

  /** リンク先 */
  linkUrl: string;

  /** 有効期限（開始）[yyyy/MM/dd HH:mm] */
  validFrom: string;

  /** 有効期限（終了）[yyyy/MM/dd HH:mm] */
  validTo: string;
};

/**
 * 特集バナー
 */
export type SpecialBanner = {
  /** ソート順 */
  index: number;

  /** バナー画像URL */
  imageSrc: string;

  /** リンク先 */
  linkUrl: string;

  /** 別タブで開くか */
  isBlank: 'yes' | 'no';

  /** 有効期限（開始）[yyyy/MM/dd HH:mm] */
  validFrom: string;

  /** 有効期限（終了）[yyyy/MM/dd HH:mm] */
  validTo: string;
};
