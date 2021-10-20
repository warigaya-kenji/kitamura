<template>
  <v-app>
    <div class="4357">
      <div class="main-contents-wrap line-height">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">お子さまが使用しても安心！コンパクトデジカメ ニコン COOLPIX W150</h1>
        <router-link to="/ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2019/4357/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>
        <p class="pt-4">濡れても落としても安心！子どもも使えるおすすめデジタルカメラ・キッズカメラ</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'プレゼントにおすすめコンパクトデジカメ！ニコン COOLPIX W150'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'濡れても落としても安心 子どもも使えるデジタルカメラ水深10mの防水、1.8m耐衝撃性能'"
          :btntxt="'商品ページを見る'"
        />

        <div class="mt-8 pa-4">
          <!-- ↓ トピック -->
          <subText :textItem="'トピック＆まとめ'" />
          <v-sheet color="#F8FBD1" class="pa-5">
            お子様用のデジカメをお探しの方、クリスマスプレゼントをお探しの方におすすめです！お子さまに持たせても安心！防水、耐衝撃、防塵、耐寒性能でさまざまなシチュエーションでの撮影が可能
            操作もとてもカンタンですのでファーストカメラとしてもオススメです
          </v-sheet>

          <!-- ↑ トピック -->
        </div>

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓おすすめ理由１ -->
        <subText :textItem="'おすすめの理由その１'" id="no1" />
        <p class="my-2 pa-2">
          雪山や水辺、砂場などでも安心してお子様に持たせて撮影できる防水デジカメ。
          ひらがな表示や楽しく撮影できる機能がたくさんついていますのでお子様に飽きる隙をあたえません。
        </p>

        <!-- ↓おすすめ理由２ -->
        <subText :textItem="'おすすめの理由その2'" id="no2" />
        <p class="my-2 pa-2">
          丸みを持たせたかわいいデザインながらも水深10mまでの防水性能に加えて、ニコンの光学技術による高画質撮影が可能ですので大人の方のおでかけカメラとしてもおすすめです
        </p>

        <!-- ↓おすすめ理由３ -->

        <!--比較-->
        <div id="no3">
          <subText :textItem="'ニコン COOLPIX W150 と他防水・防塵デジカメと比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td>
                    <a href="/ec/pd/4960759902528"
                      ><v-img
                        src="https://shopimg.kitamura.jp/images/pd/ee1/374/ece/81d/f4e/7cb/e0b/701/cbe/ea8/f7z/b4r/vxt/6/M.jpg"
                        alt=" "
                        max-width="150"
                        max-height="auto"
                        class="mx-auto hover"
                      ></v-img
                    ></a>
                  </td>
                  <td>
                    <a href="/ec/pd/4547410397789"
                      ><v-img
                        src="https://shopimg.kitamura.jp/images/pd/e38/a6e/771/dc2/ddf/da8/f99/05c/baf/0ef/29r/u33/exz/a/M.jpg"
                        alt=" "
                        max-width="150"
                        max-height="auto"
                        class="mx-auto hover"
                      ></v-img
                    ></a>
                  </td>
                  <td>
                    <a href="/ec/pd/4549212300882"
                      ><v-img
                        src="https://shopimg.kitamura.jp/images/pd/59d/3ce/834/408/729/b65/db8/27c/1d0/3ff/00g/gxq/e85/2/M.jpg"
                        alt=" "
                        max-width="150"
                        max-height="auto"
                        class="mx-auto hover"
                      ></v-img
                    ></a>
                  </td>
                  <td>
                    <a href="/ec/pd/4545350052690"
                      ><v-img
                        src="https://shopimg.kitamura.jp/images/pd/eec/313/3f3/7df/2ee/3e4/ed5/39f/031/2dc/5de/a5c/s86/p/M.jpg"
                        alt=" "
                        max-width="150"
                        max-height="auto"
                        class="mx-auto hover"
                      ></v-img
                    ></a>
                  </td>
                </tr>

                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約1317万画素</td>
                  <td class="bg-kuri">約1635万画素</td>
                  <td>約1600万画素</td>
                  <td>約1200万画素</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>1/3.1</td>
                  <td>1/2.3</td>
                  <td>1/2.3</td>
                  <td>1/2.33</td>
                </tr>
                <tr>
                  <th>光学ズーム</th>
                  <td>3倍</td>
                  <td class="bg-kuri">5倍</td>
                  <td class="bg-kuri">5倍</td>
                  <td>4倍</td>
                </tr>
                <tr>
                  <th>レンズ焦点距離（３５mm換算）</th>
                  <td>30-90mm</td>
                  <td>28-140mm</td>
                  <td>28-140mm</td>
                  <td>25-100mm</td>
                </tr>
                <tr>
                  <th>レンズF値</th>
                  <td>F3.3-5.9</td>
                  <td>F3.9-4.9</td>
                  <td>F3.5-5.5</td>
                  <td>F2.0</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>5cm</td>
                  <td>9cm</td>
                  <td>1cm</td>
                  <td>1cm</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>2.7型</td>
                  <td>3.0型</td>
                  <td>ワイド2.7型</td>
                  <td>3.0型</td>
                </tr>
                <tr>
                  <th>防水性能（ｍ）</th>
                  <td>10m</td>
                  <td>25m</td>
                  <td>14m</td>
                  <td>15m</td>
                </tr>
                <tr>
                  <th>質量（バッテリー、キットレンズ含む）</th>
                  <td class="bg-kuri">177g</td>
                  <td>207.4g</td>
                  <td>193g</td>
                  <td>253g</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 水深10ｍまでの防水性能と1.8mの耐衝撃性能、優れた防じん性能、耐寒性能がさまざまなシチュエーシ.....<a href="/ec/pd/4960759902528"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】 手のひらサイズで約207gの小型軽量ボディに、独自開発の画像処理エンジンと1635万画素の裏面照射型..<a href="/ec/pd/4547410397789"
                      >続きを読む</a
                    >
                  </td>
                  <td>【製品特徴】 水深14mで連続2時間の撮影が可能なタフネス設計...<a href="/ec/pd/4549212300882">続きを読む</a></td>
                  <td>
                    【製品特徴】 防水性能15ｍ、防塵、耐衝撃2.1ｍ、耐荷重100Kgf、耐低温−10℃、撮影レンズ前面の保護ガラスのダブ...<a href="/ec/pd/4545350052690"
                      >続きを読む</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style="clear: both"></div>
        <!--比較-->

        <!-- ↓おすすめ理由4 -->
        <subText :textItem="'ShaSha：実際に使ってみました！ニコン COOLPIX W150'" id="no4" />
        <shasha
          :txt="'自身も7歳のやんちゃ盛りの息子を持つ写真家・水咲奈々が、ニコンD5500・D5600を使ってファミリーフォトを撮る方法をレクチャーする連載の番外編として、防水、耐衝撃性能を持つニコンCOOLPIX W150を使って、家族みんなで写真を楽しむ方法をお伝えします...'"
          :href="'https://shasha.kitamura.jp/article/469098324.html'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4357/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン COOLPIX W150 関連商品一覧'" id="no5" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'プレゼントにおすすめコンパクトデジカメ！ニコン COOLPIX W150'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'濡れても落としても安心 子どもも使えるデジタルカメラ水深10mの防水、1.8m耐衝撃性能'"
          :btntxt="'商品ページを見る'"
        />

        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集を表示したい場合 -->
        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SubText from '@/components/common/special/subtext.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';


export default Vue.extend({
  name: '4357',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha,
  },
  setup: (props, context) => {
    document.title = 'ニコン COOLPIX W150がおすすめの理由をご紹介 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン COOLPIX W150がおすすめの理由をご紹介')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'ニコン COOLPIX W150がおすすめの理由をご紹介 ',
          disabled: true
        }

      ],
      // ↓ ---- 話題の新製品バックナンバー＆おすすめの特集 ----
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/sale/shoppingcredit-campaign',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ],
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#no1' },
        { naviItem: 'おすすめの理由その２', href: '#no2' },
        { naviItem: 'ニコン COOLPIX W150 と他防水・防塵デジカメ', href: '#no3' },
        { naviItem: 'ShaSha：実際に使ってみました！ニコン COOLPIX W150 作例', href: '#no4' },
        { naviItem: '関連商品一覧', href: '#no5' }
      ],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759902528', '4547410397789', '4549212300882', '4545350052690',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759903280',
        '4960759902528',
        '4960759903266',
        '4960759903297',
        '4961607733301',
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,

      mainProductJanCode: ['4960759902528',],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;


      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }

    };
    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style scoped>
.line-g {
  background: url(/ec/images2/special/general/highly_recommended/2019/4357/bk_line.gif);
}
.product-waku {
    background: #f8fbd1;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.w50{
  width:50%;
}

.bg-kuri{
  background: #fff099;


}
</style>
