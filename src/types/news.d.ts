type CategoryTag = '動画' | 'ShaSha' | 'おすすめ' | '新製品' | '特集' | 'セール' | 'お知らせ';

/** 画面表示用新着情報型 */
export type NewsOnScreen = {
  /** 日 */
  newsDate: Date;

  /** ニュース分類
   * 新品：お知らせ・新商品・セール・オススメ
   * 中古：「お知らせ」固定
   */
  newsType: CategoryTag;

  /** タイトル */
  newsTitle: string;

  /** 本文 */
  newsContent?: string;

  /** 値段 */
  price?: number;

  /** 5段階評価 */
  rating?: number;

  /** リンク先 */
  linkUrl: string;

  /** 画像URL */
  thumbnailUrl?: string;

  /**
   * 遷移先区分
   * 新品：1：リンクURLに直接 2：リンクURLにニュース詳細から遷移
   * 中古：「本文」固定で
   */
  linkType?: number;

  /**
   * 遷移時のタブ
   * 新品：1：別タブにする 2：同一タブ内
   * 中古は「同一タブ」固定で
   */
  linkTab?: number;
};

/** 新着情報のAPI */
export type News = {
  /** 行番号（ソートのため） */
  rowNo?: number;

  /** お知らせ番号 */
  newsNo?: number;

  /** 日 */
  newsDate: string;

  /** ニュース分類
   * 新品：お知らせ・新商品・セール・オススメ
   * 【新品】
   * １：新商品
   * ２：オススメ
   * ３：セール
   * ４：お知らせ
   *
   * 中古：「お知らせ」固定
   */
  newsType: number;

  /** タイトル */
  newsTitle: string;

  /**
   * 遷移先区分
   * 新品：1：リンクURLに直接 2：リンクURLにニュース詳細から遷移
   * 中古：「本文」固定で
   */
  linkType: number;

  /**
   * 遷移時のタブ
   * 新品：1：別タブにする 2：同一タブ内
   * 中古は「同一タブ」固定で
   */
  linkTab: number;

  /** リンク先 */
  linkUrl: string;

  /** テンプレートID */
  templateId?: string;

  /** 本文 */
  newsContent: string;

  /** JanCode */
  janCodes?: Array<string>;

  /** 商品情報 */
  items?: Array<NewsItem>;
};

export type NewsItem = {
  /** 行番号（ソートのため） */
  rowNo: number;

  /** JanCode */
  janCode: string;
};

export type ShaSha = {
  /** タイトル */
  title: string;

  /** 公開日 "yyyy/mm/dd hh24:00:00" 形式 */
  pub_date: string;

  /** カテゴリ（執筆者） */
  category: string;

  /** 概要 */
  description: string;

  /** リンクURL */
  link_url: string;

  /** 画像URL */
  thumbnail_url: string;
};
