<template>
  <div class="feature01-536" v-if="isShow">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-1">
          <a href="/ec/special/sale/feature01">
            <img class="mb-1 banner-img pc-s" src="http://shopimg.kitamura.jp/images/banner/4962.png" alt="オータムセール" />
            <img class="mb-1 banner-img sp-s" src="http://shopimg.kitamura.jp/images/banner/6081.png" alt="オータムセール" />
          </a>
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <ul class="w100pr pd-0 ctgr ma-0 pc-s">
          <li>
            <a href="/ec/special/sale/feature01" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/kg01.png" alt="カメラ・ビデオ・レンズ"
            /></a>
          </li>
          <li>
            <a href="/ec/special/sale/feature01/535" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/kg02.png" alt="家電"
            /></a>
          </li>
          <li>
            <a href="/ec/special/sale/feature01/536" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/kg03.png" alt="カメラ用品"
            /></a>
          </li>
          <li>
            <a href="/ec/special/sale/feature01/537" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/kg04.png" alt="スマートウォッチ"
            /></a>
          </li>
        </ul>
        <!-- ↓ ボタン -->
        <ul class="w100pr pd-0 ctgr ma-0 sp-s">
          <li>
            <a href="/ec/special/sale/feature01" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/k01.png" alt="カメラ・ビデオ・レンズ"
            /></a>
          </li>
          <li>
            <a href="/ec/special/sale/feature01/535" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/k02.png" alt="家電"
            /></a>
          </li>
          <li>
            <a href="/ec/special/sale/feature01/536" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/k03.png" alt="カメラ用品"
            /></a>
          </li>
          <li>
            <a href="/ec/special/sale/feature01/537" class="ak-bot kado10"
              ><img src="https://shop.kitamura.jp/ec/images2/special/sale/feature01/k04.png" alt="スマートウォッチ"
            /></a>
          </li>
        </ul>
        <!-- ↑ ボタン -->
        <div class="h-1 ma-0 mb-5"></div>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="536" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <subText :textItem="'【 プリント | PR 】'" />
        <recommendedSales :recommendedSaleList="recommendedSaleList" />
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedSales from '@/components/common/special/recommended-sale.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'feature01-536',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedSales: RecommendedSales,
    facebookAndTwitter: FacebookAndTwitter,
    'product-list-by-special-id': ProductListBySpecialId
  },
  props: {},
  setup: (props, context) => {
    document.title = 'オータムセール | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'オータムセール只今開催中♪デジカメ・カメラレンズ・ビデオカメラ・家電・カメラ用品・スマートウォッチがお買い得☆この機会をお見逃しなく！カメラのキタムラ ネットショップ'
      );
    const state = reactive({
      isShow: false,
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/10/18 10:00',
      validTo: '2021/11/15 23:59',
      // 表示期間外メッセージ
      errorMsg: '',
      // ↑ ---- 掲載期間 ----
      recommendedSaleList: [
        {
          href: 'https://nenga.kitamura.jp/',
          img: 'https://shopimg.kitamura.jp/images/banner/7495.png',
          alt: ' 年賀状印刷2022年',
          target: 'blank'
        },
        {
          href: 'https://www.kitamura-print.com/video_copy/dvd_copy/shop.html',
          img: 'https://shopimg.kitamura.jp/images/banner/3838.png',
          alt: 'ビデオテープからのダビング最大35％OFF',
          target: 'blank'
        },
        {
          href: 'https://www.kitamura-print.com/campaign/photosta/',
          img: 'https://shopimg.kitamura.jp/images/banner/7493.jpg',
          alt: 'スマホの動画保存・紙写真をデータCD 10％OFF',
          target: 'blank'
        },
        {
          href: 'https://nenga.kitamura.jp/campaign/nenga-data/',
          img: 'https://shopimg.kitamura.jp/images/banner/6207.png',
          alt: '年賀状のデータ化が最大20％OFF',
          target: 'blank'
        },
        {
          href: 'https://www.kitamura-print.com/campaign/volumediscount/',
          img: 'https://shopimg.kitamura.jp/images/banner/3561.jpg',
          alt: 'デジカメプリントが100枚以上で10％OFF、最大30％OFF',
          target: 'blank'
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/3842.jpg',
          alt: 'カメラのメンテナンスサービス',
          target: 'blank'
        },
        {
          href: 'https://www.net-chuko.com/sell/index.do',
          img: 'https://shopimg.kitamura.jp/images/banner/3564.jpg',
          alt: '中古高価買取',
          target: 'blank'
        }
      ],
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'オータムセール / カメラ用品',
          linkUrl: '/ec/special/sale/feature01/536',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4905524796629'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    onMounted(async () => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      await fetchProduct();
      state.isShow = true
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  .wp {
    display: block;
    text-align: center;
    white-space: pre-wrap !important;
  }
  .banner-img {
    max-width: 100%;
    height: auto;
  }
  ul.ctgr img {
    max-width: 100%;
    height: auto;
  }
  div#wContent ul,
  div#wContent ul li {
    list-style: none;
  }

  /*アンカー*/
  ul.ctgr {
    padding: 0px 0px 0 0px;
    box-sizing: border-box;
    list-style: none;
  }
  .ctgr li img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    margin: 0 0px 0 0;
  }
  .ctgr li {
    width: 25%;
    padding: 10px;
    margin: 0;
    float: left;
    box-sizing: border-box;
  }
  a.ak-bot:link,/*未訪問のリンクの色*/
  a.ak-bot:visited /*訪問済みのリンクの色*/ {
    width: 100%;
    display: block;
    text-align: center;
    color: #ffffff;
    box-shadow: 0 6px 4px #c1c1c1;
    background: #ff8b00;
  }
  a.ak-bot:hover,  /*カーソルが乗っているリンクの色*/
  a.ak-bot:active /*クリック中のリンクの色*/ {
    width: 100%;
    display: block;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    box-shadow: none;
    background: #8850b5;
  }

  .kado10 {
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
  }
  .h-1 {
    height: 1px;
  }
  .name2 {
    //行数制限
    display: -webkit-box;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    height: 3em !important;
  }
  .line {
    border-bottom: dotted #9aced1 1px;
    box-sizing: border-box;
  }
  .bk-usg {
    background-color: #f8f7f3;
  }
  .mx100pr {
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: 668px) {
    .pc-s {
      display: block;
    }
    .sp-s {
      display: none;
    }
  }
  @media only screen and (max-width: 667px) {
    .pc-s {
      display: none;
    }
    .sp-s {
      display: block;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.feature01-536 {
  &-info {
    color: $text-primary;
  }
}
</style>
