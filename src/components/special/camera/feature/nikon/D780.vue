<template>
  <v-app>
    <div class="D780">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/D780/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/D780/sp_img_top.jpg'"
          :topTitle="'ニコン D780'"
          :topTitleText="'ハイブリッドAFシステム搭載\n瞳AFにも対応した新世代一眼レフ'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ニコン D780 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="mb-0 text-subtitle-2">ニコン D780</p>
        <naviBtn :naviList="naviList" :color="'#E00000'" :hoverColor="'#A0A0A0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'進化したAFシステム、高い性能と多彩な機能を搭載したデジタル一眼レフカメラ「D780」'" />
        <p class="text-subtitle-1 font-weight-bold">デジタル一眼レフ初、ハイブリッドAFシステムを搭載し、瞳AFにも対応した新世代一眼レフカメラ</p>

        <!-- ↓ ニコン D780 ボディはこちらー -->
        <specificationsExamplesBtn
          :btntxt="'ニコン D780 ボディはこちら'"
          :url="'https://shop.kitamura.jp/ec/pd/4960759904058'"
          :height="'50px'"
          :color="'#ff0000'"
        />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'ニコン D780の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.nikon-image.com/products/slr/lineup/d780/'"
          :height="'70px'"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン D780 レビュー・作例を見る'" />
        <shasha
          :txt="'2020年1月24日に発売された、ニコンのD780は、有効画素数2450万画素、最高常用ISO感度51200、約7コマ/秒の高速連続撮影、フルフレームでの4K UHD/30pの動画撮影も可能な、高性能FXフォーマットデジタル一眼レフカメラです。画像処理エンジンは、ミラーレスカメラのZ 7、Z 6、Z 50と同じEXPEED 6を搭載していて、AFシステムが強化されているため、ファインダー撮影も、ライブビュー撮影も快適な機種に仕上がっています。今回は、ポートレート撮影で本機の性能をレビューします。レンズは、...'"
          :href="'https://shasha.kitamura.jp/article/473648829.html'"
          :src="'/ec/images2/special/camera/feature/nikon/D780/3shashabnr.jpg'"
        />
        <shasha
          :txt="'今回は特別に未開封の製品をお借りすることが出来たので、開封からボディの外観チェックをレビューします。...'"
          :href="'https://shasha.kitamura.jp/article/473207260.html'"
          :src="'/ec/images2/special/camera/feature/nikon/D780/shashabnr.jpg'"
        />
        <shasha
          :txt="'D750と比較しながら、変わった部分や性能をご紹介したいと思います。ぜひご覧ください...'"
          :href="'https://shasha.kitamura.jp/article/473363072.html'"
          :src="'/ec/images2/special/camera/feature/nikon/D780/2shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン D780 / ニコン D750 / ニコン D850 / ニコン Z 6 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコン D780 / ニコン D750 / ニコン D850 / ニコン Z 6 の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年1月24日発売</td>
                  <td>2014年9月25日発売</td>
                  <td>2017年9月8日発売</td>
                  <td>2018年11月23日発売</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>タイプ</th>
                  <td>一眼レフ</td>
                  <td>一眼レフ</td>
                  <td>一眼レフ</td>
                  <td>ミラーレス</td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2450万画素</td>
                  <td>約2432万画素</td>
                  <td>約4575万画素</td>
                  <td>約2450万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    35mmフルサイズ<br />
                    ニコンFXフォーマット<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    ニコンFXフォーマット<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    ニコンFXフォーマット<br />
                    CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約7コマ/秒</td>
                  <td>最高 約6.5コマ/秒</td>
                  <td>約7コマ/秒</td>
                  <td>最高 約12コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    RAW(ロスレス圧縮RAW/12ビット記録)：約100枚<br />
                    JPEG：約100枚
                  </td>
                  <td>
                    RAW(ロスレス圧縮RAW/12ビット記録)：約25枚<br />
                    JPEG：約87枚
                  </td>
                  <td>
                    RAW(ロスレス圧縮RAW/12ビット記録)：約170枚<br />
                    JPEG：約200枚
                  </td>
                  <td>
                    RAW(ロスレス圧縮RAW/12ビット記録)：約35枚<br />
                    JPEG：約44枚
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000～30秒、バルブ、Time</td>
                  <td>1/4000～30秒、バルブ、Time</td>
                  <td>1/8000～30秒、バルブ、Time</td>
                  <td>1/8000～30秒、バルブ、Time</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO 100～51200<br />
                    （拡張ISO50相当~204800相当）
                  </td>
                  <td>
                    ISO 100～12800<br />
                    （拡張ISO50相当~51200相当）
                  </td>
                  <td>
                    ISO64-25600<br />
                    (拡張ISO32/51200/102400)
                  </td>
                  <td>
                    ISO 100～51200<br />
                    （拡張ISO50相当~204800相当）
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>
                    ファインダー撮影時：51点<br />
                    ライブビュー撮影時：273点
                  </td>
                  <td>51点</td>
                  <td>153点</td>
                  <td>273点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>ファインダーのみ使用時：約2260コマ</td>
                  <td>ファインダーのみ使用時：約1230コマ</td>
                  <td>ファインダー撮影：約1840コマ</td>
                  <td>
                    ファインダーのみ使用時：約310コマ<br />
                    画像モニターのみ使用時：約380コマ
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約143.5×115.5×76mm</td>
                  <td>約140.5×113×78mm</td>
                  <td>約146×124×78.5mm</td>
                  <td>約134×100.5×67.5mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.7倍</td>
                  <td>約100% / 約0.7倍</td>
                  <td>約100% / 約0.75倍</td>
                  <td>約100% / 約0.8倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約755g</td>
                  <td>約750g</td>
                  <td>約915g</td>
                  <td>約585g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    ダブルスロット<br />
                    SDカード(UHS-II規格対応)
                  </td>
                  <td>
                    ダブルスロット<br />
                    SDカード(UHS-I規格対応)
                  </td>
                  <td>
                    ダブルスロット<br />
                    XQDカード、SDカード(UHS-II規格対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    XQDカード、CFexpressカード
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>フルHD/HD</td>
                  <td>フルHD/HD</td>
                  <td>4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン D780 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'ニコン D780をご購入時、ニコン D750 ボディ高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />
        </div>

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'5,157'"
          :targetDate="'2020年１月7日'"
          :isCreditBtn="true"
          :isMax60Txt="true"
        />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン D780 外観画像'" />
          <p class="text-subtitle-1">ニコン D780の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/D780'" :count="3" />
        </div>

        <!-- ↓ ニコン D780 ボディはこちらー -->
        <specificationsExamplesBtn
          :btntxt="'ニコン D780 ボディはこちら'"
          :url="'https://shop.kitamura.jp/ec/pd/4960759904058'"
          :height="'50px'"
          :color="'#ff0000'"
        />

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ニコン D780 作例'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/nikon/D780/'" :count="10" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
export default Vue.extend({
  name: 'D780',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    shasha: ShaSha,
    expensiveTradeIn: ExpensiveTradeIn,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages
  },
  setup: (props, context) => {
    document.title = 'ニコン D780 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン D780 価格・スペック・ニコン D750との比較・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'キタムラ特典', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'AF性能を強化し、幅広い撮影シーンに対応。狙った被写体をより高精度に捕捉',
          contents: [
            '強化された51点AFシステムによりファインダー撮影時のAF性能が大きく進化。被写体検出性能の向上で狙った被写体を高精度に捕捉',
            'RGBセンサーを用いたアドバンストシーン認識システムが進化。「3D-トラッキング」の動体追尾性能が向上',
            'ライブビュー撮影時、「瞳AF」に対応。像面位相差AF搭載の273点ハイブリッドAFシステム'
          ]
        },
        {
          subtitle: '多彩な映像表現をサポートする性能・機能',
          contents: [
            'ファインダー撮影時、ライブビュー撮影時ともに最高約7コマ/秒での快適な高速連続撮影が可能',
            '14ビットロスレス圧縮RAWでも「D750」の約4倍となる約68コマの連続撮影を実現',
            'シャッタースピードは1/8000秒～最長900秒までの幅広い露光時間の設定が可能。動きの速い被写体から天体撮影まで幅広く対応'
          ]
        },
        {
          subtitle: '高い信頼性と操作性。優れた高感度・低ノイズ性能でより幅広い撮影シーンで活躍',
          contents: [
            'カメラ上面と背面カバーにマグネシウム合金を採用したモノコック構造で、高い剛性と耐久性を達成しながらも軽量ボディーを実現',
            '低消費電力設計で1回の充電で約2260コマ（CIPA規格準拠）の撮影に対応し、長時間の撮影にも安心して使用可能',
            '常用ISO感度100～51200の広い常用感度域を実現。高感度でも解像感を保ちながらノイズを効果的に低減'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'ニコン D750 ボディ',
        href: 'https://www.net-chuko.com/sell/item-list.do?kind=&maker=&goodsname=4960759143846&_ga=2.61767404.1712661879.1629071621-279164427.1627285160&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/009/b51/5b1/d9b/6cf/2b3/e79/7b4/a00/b9f/61y/sz7/qnw/n/L.jpg',
        txt: 'ニコン D780',
        tradeInImg: '/ec/images2/special/camera/feature/nikon/D780/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
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
          alt: 'トクトク買取',
          target: 'blank'
        }
      ],
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
          path: 'ニコン D780',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759904058'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759904058', '4549292157253', '4960759149336', '4960759901484'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759904058', '4960759126566', '4960759904348', '4960759904355', '4960759146335', '4960759146670'],
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
