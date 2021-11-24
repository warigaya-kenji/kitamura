import { News } from '@/types/news';
import { Location, Route } from 'vue-router';
import dayjs from 'dayjs';
import { USED_STATUS } from '@/constants/used-status';
import { BOT_USER_AGENTS } from '@/constants/bot-user-agents';
import { prefectureList } from '@/constants/prefecture-list';

/**
 * 対象がホスト名と同じか判定する
 * @param target 対象
 */
export function equalsHostname(target: string): boolean {
  const hostName = document.location.hostname;
  return target != null && hostName === target;
}

/**
 * ローカルホスト環境であるか判定する
 */
export function isLocalHost(): boolean {
  return equalsHostname('localhost') || equalsHostname('127.0.0.1');
}

/**
 * 指定のクエリパラメータを除いた遷移先のロケーションを取得する
 * @param route 遷移先のルート
 * @param removeQueries 削除対象のクエリ
 */
export function getLocationRemovedQuery(route: Route, removeQueries: string[]): Location | void {
  const query = Object.assign({}, route.query);

  for (const removeQuery of removeQueries) {
    delete query[removeQuery];
  }

  return {
    path: route.path,
    hash: route.hash,
    query,
    replace: true
  };
}

/**
 * 画像パスを生成（ローカル以外は、相対パスでアクセス）
 * @param path 画像パス
 */
export function generateImagePath(path: string): string {
  return path || require('@/assets/no-image-M.gif');

  // 画像が表示されない問題があるため
  // const regex = /(https?:)?\/\/[0-9a-zA-Z.-]*\/images\//;
  // const repPath = path ? path.replace(regex, process.env.VUE_APP_NEW_PRODUCT_IMAGE_URL) : require('@/assets/no-image-M.gif');
  // return repPath;
}

/**
 * YouTube動画へのURLを取得する
 * @param movieId 動画ID
 */
export function getYouTubeUrl(movieId: string): string {
  return `https://www.youtube.com/embed/${movieId}`;
}

/**
 * YouTube動画のサムネイル画像のURLを取得する
 * @param movieId 動画ID
 */
export function getYouTubeThumbnailUrl(movieId: string): string {
  return `https://i.ytimg.com/vi/${movieId}/hqdefault.jpg`;
}

/**
 * ニュースの遷移先URLを取得する
 * @param news 1つのニュース
 * @returns 遷移先URL
 */
export function getNewsLinkUrl(news: News): string {
  // リンクタイプが2の場合、もしくはAPIのURL先がない場合
  if (news.linkType === 2 || !news.linkUrl || news.linkUrl === '' || news.linkUrl === 'https://' || news.linkUrl === 'http://') {
    return '/news/display.html?id=' + news.newsNo;
  } else {
    let linkUrl = news.linkUrl;
    if (news.newsNo != null) {
      // 「$newsid$」がある場合はニュース番号で置換する
      linkUrl = news.linkUrl.replace(/\$newsid\$/g, String(news.newsNo));
    }
    return linkUrl;
  }
}

/**
 * 画像がエラーだった場合、NoImageの画像を表示する
 * @param elem
 */
export function noimage(elem: any) {
  if (elem) {
    elem.target.src = require('@/assets/no-image-M.gif');
  }
}

/**
 * ブラウザがIE、Safari12未満以外かを判定する
 * @returns Safari12未満、IEの場合False,それ以外の場合True
 */
export function isModernBrowser(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    // IEなのでFalse
    return false;
  }
  // UAにsafariが含まれて、Chromeが含まれない場合Safari
  if (userAgent.indexOf('safari') != -1 && !(userAgent.indexOf('chrome') != -1)) {
    // Safari < 3 の場合UAにversion文字列が含まれない
    if (!(userAgent.indexOf('version') != -1)) {
      return false;
    }
    // バージョン情報を抜き出し
    const cutStart = userAgent.indexOf('version');
    const cutEnd = userAgent.indexOf(' ', cutStart);
    const browserVer = userAgent.substring(cutStart + 8, cutEnd);
    const majorVersion = browserVer.split('.')[0];
    if (Number(majorVersion) < 12) {
      return false;
    }
  }
  return true;
}

/**
 * リストを、指定した分割サイズごとに要素を切り出す。
 * @param list 分割するリスト
 * @param size 分割サイズ（1リストあたりの最大サイズ）
 * @returns 分割したリストのリスト
 */
export function splitList(list: any[], size: number): any[][] {
  return new Array(Math.ceil(list.length / size)).fill(null).map((_, index) => list.slice(index * size, (index + 1) * size));
}

/**
 * デバッグモードであるかどうか
 * @returns trueならデバッグモード
 */
export function isDebugMode(): boolean {
  return process.env.VUE_APP_DEBUG_MODE === 'true';
}

/**
 * 価格をフォーマットする
 * @param price 価格数値
 * @returns フォーマットされた価格文字列
 */
export function formatPrice(price: number, permitMinus = false): string {
  if (price == null) {
    return '-';
  }

  let formattedPrice = '';

  if (permitMinus) {
    formattedPrice = price === 0 ? '-' : price.toLocaleString();
  } else {
    formattedPrice = price < 0 ? '-' : price.toLocaleString();
  }
  return formattedPrice;
}

/**
 * 日付をフォーマットする
 * @param date 日付
 * @param format フォーマットの形式
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: string, format = 'YYYY年MM月DD日'): string {
  return dayjs(date).format(format);
}

/**
 * 表示期間のバリデーション
 * @param targetDate 比較日時
 * @param validFrom from日付
 * @param validTo to日付
 * @returns 表示期間内か否か
 */
export function validationPeriod(targetDate: string, validFrom?: string, validTo?: string): boolean {
  if (!validFrom && !validTo) return true;
  const today = dayjs(targetDate);
  const from = dayjs(validFrom);
  const to = dayjs(validTo);
  return today.isBetween(from, to, 'minutes', '[]');
}

/**
 * 配列の要素にある「rowNo」を昇順にソートする
 * @param list ソートする配列
 */
type RowNoListItem = { rowNo: number };
export function sortByRowNo<T extends RowNoListItem>(list: Array<T>): Array<T> {
  const sortedList = list.sort((a, b) => a.rowNo - b.rowNo);
  return sortedList;
}

/**
 * 中古商品の状態値をテキストに変換
 * @param val 状態値
 * @returns 状態名
 */
export function convertToUsedStatesText(val: string): string {
  const target = USED_STATUS.filter((item) => item.value === val);
  return target.length ? target[0].text : '';
}

/**
 * ボットであるかを判定する
 *
 * @param userAgent ユーザーエージェント
 * @returns Trueならボット
 */
export function isBot(userAgent: string): boolean {
  const isBot = BOT_USER_AGENTS.some((botUserAgent) => userAgent.indexOf(botUserAgent) !== -1);
  return isBot;
}

/**
 * 都道府県名を取得する
 * @param code 都道府県コード
 */
export function getPrefectureName(code: number): string {
  const prefecture = prefectureList.find((item) => item.value === code);
  return prefecture?.text || '';
}

/**
 * 買取価格の切り捨て（0.9掛け、１の位切り捨て）
 * @param price 買取価格
 * @returns 表示価格
 */
export function roundDownSellPrice(price: number): number {
  return Math.floor((price * 0.9) / 10) * 10;
}
