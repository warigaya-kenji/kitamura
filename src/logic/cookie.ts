const Cookie = {
  /**
   * Cookieへの格納
   * @param key キー名
   * @param value 値
   */
  setCookie(key: string, value: any, maxAge: number) {
    const convertJson = JSON.stringify(value);
    document.cookie = `${key}=${convertJson};max-age=${maxAge}`;
  },

  /**
   * Cookieの取得
   * @param key キー名
   */
  getCookie(key: string): any {
    const targetCookie = document.cookie.split('; ').find((row) => row.startsWith(key));
    const val = targetCookie ? JSON.parse(targetCookie.split('=')[1]) : undefined;
    return val;
  }
};

export default Cookie;
