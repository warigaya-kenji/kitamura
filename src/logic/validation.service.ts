const ValidationService = {
  required: (name: string) => (value: string) => value.length > 0 || `${name}を入力してください。`,
  select: (name: string) => (value: string) => !!value || `${name}が指定されていません。`,
  range: (name: string, min: number, max: number) => (value: string) =>
    (min <= value.length && value.length <= max) || `${name}は${min}文字以上${max}文字以下で入力してください。`,
  length: (name: string, len: number) => (value: string) => value.length === len || `${name}は${len}文字で入力してください。`,
  max: (name: string, max: number) => (value: string) => value.length <= max || `${name}は${max}文字以下で入力してください。`,
  number: (name: string) => (value: string) => /^([0-9]*)$/.test(value) || `${name}は半角数字で入力してください。`,
  kana: (name: string) => (value: string) => /^[ァ-ヶー]*$/.test(value) || `${name}は全角カタカナで入力してください。`,
  deliveryBox: (name: string) => (value: number) => value >= 0 || `${name}が指定されていません。`,
  point: (name: string, max: number) => (value: string) => +value <= max || `ご利用ポイントは${name}より低いポイントを入力してください。`
};

export default ValidationService;
