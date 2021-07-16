/**
 * セッション
 */
export interface Session {
  /** セッションID */
  sessionId: string;

  /** セッションID_EZ */
  ezSessionId: string;
}

/**
 * ユーザー情報
 */
export interface User {
  /** ネット会員ID */
  netMemberId: string;

  /** ログイン状態 */
  isLogin: boolean;

  /** カート内商品数 */
  cartItemCount: number;

  /** カート内金額合計 */
  cartTotalAmount: number;

  /** 姓 */
  lastName: string;

  /** 名 */
  firstName: string;

  /** 都道府県コード */
  kenCode: string;

  /** 性別 */
  sex: string;

  /** ニックネーム */
  nickname: string;

  /** Tポイントを保持しているか */
  linkedTPoint: boolean;

  /** Tポイント残数 */
  point: number;

  /** お気に入り登録数 */
  favoriteCount: number;
}
