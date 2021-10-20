# netshop-spa special

ECサイトリニューアル フロントエンド（ネットショップ SPA） 特集ページ

## 概要

特集ページには、3つのテンプレートが用意されています。

|テンプレートの種類|URIパターン|備考|
|-----------------|-----------|----|
|テンプレートA|/ec/sale/######|JSONファイルの記述に従って商品を表示します。|
|テンプレートB|/ec/special/news|クエリ文字列で、ニュース番号とバナー番号を指定して表示します。|
|テンプレートC|/ec/special/######|任意のレイアウトで画面を作成します。|

---

## 特集系ページの共通スタイルの記述  

`netshop-spa` リポジトリにある、以下のファイルを修正してください。    

    src/assets/special/style/common.scss

---

# テンプレート

## テンプレートA

URL: **/ec/sale/XXXXX**　（/ec/sale/からなるもの）  
「XXXXX」が「JSONファイル名」になります。

    /ec/sale/202103suihan
    → 202103suihan.jsonファイルが参照されます。

### JSONファイル

JSONファイルは、 `netshop-static` リポジトリの `public/ec/static/json/sale` 配下に置いてください。  
JSONファイルのフォーマットは次の通りです。

```json
{
  "limitedPassCode": "testpass",
  "validFrom": "2021/05/01 10:00",
  "validTo": "2021/06/01 10:00",
  "parent": {
    "id": 158,
    "bannerImagePath": "/ec/images/banner/main.png",
    "title": "202103suihanメインタイトル",
    "backLinkTitle": "週末限定セール トップページへ戻る",
    "backLinkUrl": "/special/sale-fair/"
  },
  "content": "商品が安い！今お買い得な商品はコチラ↓↓",
  "children": [
    {
      "id": 301,
      "bannerImagePath": "/ec/images/banner/7719.jpg",
      "title": "Canon"
    },
      
    ～ 省略 ～
      
    {
      "id": 308,
      "bannerImagePath": "/ec/images/banner/7401.jpg",
      "title": "Nicon 2"
    }
  ],
  "footBanners": [
    {
      "index": 1,
      "imageSrc": "/ec/images2/list/compact220.png",
      "linkUrl": "/ec/special/sale-fair/camera/compact",
      "isBlank": "no",
      "validFrom": "2020/12/31 12:01",
      "validTo": "2999/04/01 00:00"
    },
      
    ～ 省略 ～
      
    {
      "index": 4,
      "imageSrc": "/ec/images2/list/shasha220.png",
      "linkUrl": "https://shasha.kitamura.jp/",
      "isBlank": "yes",
      "validFrom": "2020/12/31 12:01",
      "validTo": "2999/04/01 00:00"
    }
  ]
}
```

#### 1. limitedPassCode
`「limitedPassCode` の有無により、「特集対象商品」と「限定販売対象商品」の取得を切り替えます。

指定あり：「限定販売対象商品」  
指定なし：「特集対象商品」

ページの表示は、以下の条件に従います。

|JSONファイル|URIクエリパラメータ|画面表示|
|------------|-------------------|--------|
| `limitPassCode` 指定あり|指定なし|パスコード入力画面|
| `limitPassCode` 指定あり| `passcode` 指定あり、JSONと値一致|特集画面|
| `limitPassCode` 指定あり| `passcode` 指定あり、JSONと値不一致|パスコード入力画面|
| `limitPassCode` 指定なし| * |特集画面|

#### 2. validFrom, validTo 

「掲載期間」の設定情報です。
指定されている期間内のみコンテンツが表示されます。

    "validFrom": "2021/05/01 10:00",
    "validTo": "2021/06/01 10:00",

開発環境、検証環境では、URLのクエリパラメータに「date」を追加することにより、任意の時間を指定しての表示確認ができます。

    https://ns-stg.kitamura.shop/ec/sale/202103suihan?date=2021/05/01 10:00

#### 3. parent

「タイトルやメインバナーなど」の表示情報です。  

|項目|説明|
|----|----|
|id|上記「1.」の対象から取得するID|
|bannerImagePath|メインバナー画像のパス|
|title|「パンくず」「ページタイトル」「メインバナーのalt属性」に適用|
|backLinkTitle|メインバナー下に表示されるリンクテキスト|
|backLinkUrl|上記、テキスト押下時の遷移先|

    "id": 158,
    "bannerImagePath": "/ec/images/banner/main.png",
    "title": "202103suihanメインタイトル",
    "backLinkTitle": "週末限定セール トップページへ戻る",
    "backLinkUrl": "/special/sale-fair/"

#### 4. content  

メインバナーと子バナーの間に表示される「テキスト」になります。

#### 5. children  

「子バナー」の表示情報です。  

|項目|説明|
|----|----|
|id|上記「1.」の対象から取得するID|
|bannerImagePath|子バナー画像のパス|
|title|「子バナー画像のalt属性」に適用|

    "id": 301,
    "bannerImagePath": "/ec/images/banner/7719.jpg",
    "title": "Canon"

#### 6. footBanners

「おすすめコンテンツ」の表示情報です。


|項目|説明|
|----|----|
|index|この数値でコンテンツがソートされます|
|imageSrc|画像のパス|
|linkUrl|コンテンツ押下時の遷移先|
|isBlank|遷移時別ダブ表示にするか（「yes」or「no」を指定してください）|
|validFrom, validTo|コンテンツ表示期間の指定|

    "index": 1,
    "imageSrc": "/ec/images2/list/compact220.png",
    "linkUrl": "/ec/special/sale-fair/camera/compact",
    "isBlank": "no",
    "validFrom": "2020/12/31 12:01",
    "validTo": "2999/04/01 00:00"

---

## テンプレートB

URL: **/ec/special/news?news=XXXXX&bn=YYYYY**    

「XXXXX」が「お知らせID」の指定になります。
「YYYYY」が「バナー画像ファイル名」の指定になります。

    /ec/special/news?news=6552&bn=6552

---
	
## テンプレートC

URL: **/ec/special/XXXXX**　（/ec/special/からなるnews以外のもの）

    /ec/special/sample1
    /ec/special/2021/0401

### Vueファイルの内容（定型的に記述する内容）

#### 1. コンポーネントの準備

  以下のディレクトリにページ内容として表示するvueファイルを配置してください。  
  ディレクトリ: **src/components/special/**

    src/components/special/sample-component1.vue

  パスに階層を含めたい場合は、vueファイルと一緒にディレクトリの作成もおこなってください。

    src/components/special/2021/0401.vue

#### 2. コンポーネントの適用

  以下のファイルを修正いたします。  
  修正ファイル: **src/views/special/special-page.vue**

##### 2-1. 作成したコンポーネントをimportします

    // 特集ページの内容を実装したコンポーネントを読み込みます。
    import SampleComponent1 from '@/components/special/sample-component1.vue';
    import Component20210401 from '@/components/special/2021/0401.vue';

##### 2-2. importしたファイルを表示設定いたします

  「PAGE_LIST」に設定しているものが実際に表示できるページになります。  
  「PAGE_LIST」内の「：」の左側が「URL」（/ec/special/以降のURL）を、右側にimportしたコンポーネント名を指定してください。  
  ※ここで定義されていないページは、404ページに遷移いたします。  
  ex）

    // 上記で読み込んだコンポーネントのうち、実際に表示させるページを設定してください。
    // 'ページURL': 読み込んだコンポーネント名
    const PAGE_LIST = {
      sample1: SampleComponent1,
      '2021/0401': Component20210401
    };

#### 3. コンポーネントの編集

##### 3-1. htmlの記載

  templateタグ内に記載します。  
  templateタグ直下は、一つのタグのみの記載できますので、実際には以下のような形になります。

```vue
    <template>
      <div class="component1">
        <!-- ↓ コンテンツ内容 -->
        <div class="component1-info">
          <div>テンプレートC</div>
          <div>コンポーネント : {{ msg }}</div>
        </div>
        
        <v-btn
          class="main-product-btn text-h5 font-weight-bold"
          dark
          block
          color="rgba(255, 132, 0, 1)"
          height="60px"
          :href="`/ec/pd/${mainProduct.janCode}`"
        >
          <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
          ご購入はこちら
        </v-btn>
        <!-- ↑ コンテンツ内容 -->
      </div>
    </template>
```

##### 3-2. cssの記載

  styleタグ内に記載します。  
  「lang="scss"」はSCSS記法での記述指定、  
  「scoped」は同ファイルのtemplate内DOMにのみのスタイル適用となっております。  
  Vuetifyであとから生成されるDomへは、scopedなしで記載してください。  

```vue
    <style lang="scss">
    /* Vuetifyで生成されるDomへのスタイル適用（※scopedなしのため、該当セレクタに適用される） */
    // v-btn:hoverの上書き
    .main-product {
      &-btn {
        &:hover {
          .v-btn__content {
            color: $text-white;
            text-decoration: underline;
          }
        }
      }
    }
    </style>
    
    <style lang="scss" scoped>
    /* template内のDomへの適用 */
    .component1 {
      &-info {
        color: $text-primary;
      }
    }
    </style>
```

##### 3-3. JavaScriptの記述

  scriptタグ内にtypescriptで記載します。  
  nameには、ファイル名を指定してください。  
  state内で定義した変数は、templateタグ内で使用可能になります。  
  動的処理がある場合は、onMounted内へ記載してください。 

```vue
    <script lang="ts">
    import Vue from 'vue';
    import { reactive, toRefs, onMounted } from '@vue/composition-api';
    
    export default Vue.extend({
      name: 'sample-component1',
      setup: (props, context) => {
        const state = reactive({
          msg: 'sample-component1'
        });
        
        onMounted(() => {
          console.log('onMounted');
        });
        
        return {
          ...toRefs(state)
        };
      }
    });
    </script>
```

##### 3-4. 画像の読み込み

  以下のディレクトリに画像を配置してください。  
  ディレクトリ: **src/assets/special/img/**  

###### ・htmlでの読み込み

```html
    <!-- サンプル：画像の読み込み -->
    <img class="mb-5" src="@/assets/special/img/sample.jpg" />
```

###### ・cssでの読み込み  

```css
    // サンプル：メイン商品
    .component1 {
      background: url('../../assets/special/img/sample1/bk_line.gif') repeat scroll top left;
    }
```

#### 4. パンくずの設定

##### 4-1. タグの配置  

  breadcrumbsタグを配置してください。

```html
    <!-- サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
``` 

##### 4-2. パンくずの読み込み

  scriptタグの直下にパンくずのファイルをimportしてください。
 
 ```vue
    <script lang="ts">
    import Breadcrumbs from '@/components/common/breadcrumbs.vue';
    </script>
```

##### 4-3. パンくず内容の設定

  stateの中にbreadcrumbs変数を定義してください。  
  path：表示名、linkUrl：遷移先、disabled：tureで遷移無効化  

```ts
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニー α1',
          linkUrl: '',
          disabled: true
        }
      ]
    });
```

#### 5. 商品の取得および表示方法

##### 5-1. 取得するjanCodeと結果格納用変数を設定

  stateの中に、取得するJanCodeをString配列で、  
  結果格納用変数をProductDetailの配列で定義してください。  
  ※最大20件までになります。 

```ts
    const state = reactive({
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736130678',
        '4548736108288',
        '4548736105546',
        '4548736064539',
        '4548736064621',
        '4548736055704',
        '4548736109520',
        '4548736121249'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
```

##### 5-2. 取得処理

  asycの関数内で「ProductService.fetchProducts(state.productJanCodeList, true)」にてAPIを実行いたします。  
  （引数の「true」は、詳細情報の一部だけを取得するかの設定になります。  商品名、商品画像、価格以外の情報を扱う場合は、「false」を設定してください。 ）   
  作成した関数をonMounted内で呼び出してください。  

```ts
    /**
      * 商品詳細を取得する
      */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    
    onMounted(() => {
      fetchProduct();
    });
```

##### 5-3. 表示処理

  template内で結果格納用に定義した変数をループさせて、表示処理をおこないます。 

```html
    <!-- サンプル：価格・人気アクセサリー -->
    <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
      <div class="product-list-item-img mb-4 text-center">
        <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
          ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
        /></router-link>
      </div>
      <div class="product-list-item-name-wrap mb-2">
        <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
          ><div class="product-list-item-name">{{ product.itemName }}</div></router-link
        >
      </div>
      <div class="product-list-item-price-wrap">
        特別価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
        >（税込）
      </div>
    </div>
```

---