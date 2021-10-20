<template>
  <v-app>
    <div class="highly_recommended-4725">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <h1 class="text-h6 font-weight-bold">パパママ必見！家族の素敵な写真を撮るならこのカメラ！ニコン D5600</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4725/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4725/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- ↑top image -->
        <h2 class="text-body-2">動いている子供も簡単に撮影できます</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ニコン D5600'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'高速オートフォーカスでピントが合わせやすい ニコン D5600 は、お子様をよく撮影されるファミリー層、ペット撮影の多いユーザーにおすすめです！'"
          :btntxt="'商品一覧を見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          走ったり遊具で遊んだり動き回るお子様もカンタン操作でキレイに撮影が可能<br />
          動き回る場面だけでなく、一瞬のステキな表情も捉えることができるんです<br />
          また、お子様のみではなくペット撮影用としてもおすすめですよ！
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">高速オートフォーカスで、動き回るお子様の撮影でもピントが合わせやすく、高速連写で一瞬のステキな表情を逃しません。</p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          動きの速い犬、猫などのペット撮影などにも最適。<br />
          高速性能で予想外の動きにも対応可能。躍動感のある写真が撮影できます。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'ニコンD5600 と他社の一眼レフカメラと比較してみました'" />
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
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/fbd/8a9/150/f4e/51e/08c/4ec/934/dbc/5cd/e41/bjr/8ui/x/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 220 : 77"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/a9e/a37/8b0/9f7/6bc/00d/0b7/5e9/d1e/c0a/1cw/xxc/1ut/g/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 220 : 77"
                      height="auto"
                    />
                  </td>
                  <td>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/b33/a35/f58/205/764/65f/6b1/e0c/690/ec5/6ev/cck/ovs/a/M.jpg"
                      :max-width="$vuetify.breakpoint.mdAndUp ? 220 : 77"
                      height="auto"
                    />
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
                  <td>約2416万画素</td>
                  <td>約2410万画素</td>
                  <td>約2410万画素</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高約5コマ/秒</td>
                  <td>最高約7.5コマ/秒</td>
                  <td>最高約5.0コマ/秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～25600</td>
                  <td>100～25600（拡張時51200相当）</td>
                  <td>100～25600</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約465g</td>
                  <td>約515g</td>
                  <td>約449g</td>
                </tr>
                <tr>
                  <th>撮影可能枚数目安</th>
                  <td>約970枚</td>
                  <td>ファインダー撮影 約800枚/ライブビュー撮影 約310枚</td>
                  <td>ファインダー撮影 約1,070枚/液晶モニター撮影 約320枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】SnapBridgeアプリ対応で、D5600とスマートデバイスを常時接続。自由なアングルでクリエイティブな写真が撮りやすいバリアングル液晶モニター搭載...<a
                      href="/ec/pd/4960759148117/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】動く被写体に対しても優れた捕捉性能を実現する「オールクロス45点AF」を採用。光学ファインダー撮影時に顔検出を実現。顔検出後、被写体の顔を追尾...<a
                      href="/ec/pd/4549292151251/"
                      >続きを読む</a
                    >
                  </td>
                  <td>
                    【製品特徴】被写体の動きを予測し自動的にピントを合わせ続けるAIサーボAF機能により動きの速い被写体でも撮影可能。ライブビュー撮影時は約0.03秒の高速AF...<a
                      href="/ec/pd/4549292132694/"
                      >続きを読む</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：ニコンD5500・D5600を使ったファミリーフォト撮影テクニック Vol.2'" id="r03" />
        <shasha
          :txt="'動き回る子どもを撮るための5つの設定についてご紹介します！\n【設定1：撮影モードはシャッター優先オートで】カメラの上部にある「撮影モードダイヤル」を「S」マークに合わせましょう。これで、「シャッター優先オート」で撮影するモードになります。このモードは・・・・'"
          :href="'https://shasha.kitamura.jp/article/468932972.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4960759148117'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4725/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <kitamuraService />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
export default Vue.extend({
  name: 'highly_recommended-4725',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    tableOfContentsNavi: TableOfContentsNavi,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！ニコン D5600 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン D5600 は、お子様をよく撮影されるファミリー層や、ペット撮影の多いユーザーにおすすめです')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'ニコンD5600 と他社の一眼レフカメラと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：ニコンD5500・D5600を使ったファミリーフォト撮影テクニック Vol.2', href: '#r03' },
        { naviItem: '商品一覧', href: '#r04' }
      ],
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
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフのイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'スタッフイチオシ！ニコン D5600',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759148100'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759148117', '4549292151251', '4549292151251'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759148117',
        '4960759148131',
        '4960759148124',
        '4960759148100'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
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
.sen-gl {
    border: #B8B8B8 1px solid !important;
    box-sizing: border-box;
}
</style>