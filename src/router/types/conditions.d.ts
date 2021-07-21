/**
 * 検索条件
 */
export type Condition = {
  /** 検索パラメーターコード */
  paramCode: string;

  /** 条件名 */
  name: string;

  /** 表示順 */
  sort: number;

  /** ログイン時表示フラグ */
  isDisplayLogin: boolean;

  /** ログアウト時表示フラグ */
  isDisplayLogout: boolean;

  /** 表示用変換フラグ */
  isConvert: boolean;

  /** 結果件数ソートフラグ */
  isSortWithCount: boolean;
};

export type ConditionOption = {
  [key: string]: Array<string>;
};

export type ConditionItem = {
  paramCode: string;
  paramText: string;
  value: string;
  valueText: string;
};
