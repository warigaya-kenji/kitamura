## 中古商品のステータスによるボタン制御
### 動作確認方法
1. npm i -g json-server でインストールする
1. このファイルと同じディレクトリ配下で、json-server db.json --routes routes.json を実行する
1. fetchUsedProducts関数で、URLを以下に変更する
  http://localhost:3000/ec/api/cache/ns/v1/used_product
1. http://localhost:8080/ec/used/{itemCode} にアクセスして、ボタンの表示を確認する
  ※{itemCode}には以下の文字を入れる(例：TT-2)  
    * インターネット掲載可能：Trueの場合「T」、Falseの場合「F」  
    * 予約可能：Trueの場合「T」、Falseの場合「F」  
    * ステータス：-2, 0 ～ 6の数字  

以上
