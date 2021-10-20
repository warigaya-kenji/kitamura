<template>
  <v-app>
    <div class="eosrp">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/eosrp/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/eosrp/sp_img_top.jpg'"
          :topTitle="'キヤノン'"
          :topTitleText="'高画質を手軽に楽しめる\n小型・軽量のフルサイズミラーレス一眼'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キヤノン EOS RP 好評発売中</span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>キヤノン EOS RP 好評発売中!</span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン EOS RP 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'" :url="'https://cweb.canon.jp/eos/lineup/kissm2/'" :height="'70px'" />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'キヤノン EOS RP特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:EOS RP 作例・レビュー'" />
        <shasha
          :txt="'【必見】EOS RPがフルサイズカメラ初心者に大人気な理由！カメラの祭典CP+2019では大きな注目を集めたEOS RPがフルサイズミラーレス初心者に大人気な理由を調べました...'"
          :href="'http://shasha.kitamura.jp/article/466192231.html?ref=netshop_t'"
          :src="'https://shopimg.kitamura.jp/images/images/banner/6526.jpg'"
        />
        <!-- ↑ ShaSha -->
        <!--動画で見る-->
        <subText :textItem="'動画で見る キヤノン EOS R5！'" />
        <watchInVideo :src="'https://www.youtube.com/embed/T1AveGxZw0Q?rel=0'" :height="315" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS RP / EOS R / SONY α7 II 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">キヤノン EOS RP / EOS R / SONY α7 II 比較</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年3月14日発売</td>
                  <td>2018年10月25日発売</td>
                  <td>2014年12月5日発売</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2620万画素</td>
                  <td>約3030万画素</td>
                  <td>約2430万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズCMOS</td>
                  <td>35mmフルサイズCMOS</td>
                  <td>35mmフルサイズCMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約5コマ/秒</td>
                  <td>最高 約8コマ/秒</td>
                  <td>最高約5コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>RAW：約50枚</td>
                  <td>RAW：約34枚</td>
                  <td>RAW 30枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～102400</td>
                  <td>100～102400</td>
                  <td>100～25600</td>
                </tr>
                <tr>
                  <th>瞳AF</th>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                </tr>
                <tr>
                  <th>測距輝度範囲</th>
                  <td>EV-5～18</td>
                  <td>EV-6～18</td>
                  <td>EV-1～20</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約250枚</td>
                  <td>約370枚</td>
                  <td>約350枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約132.5×85.0×70.0mm</td>
                  <td>約135.8×98.3×84.4mm</td>
                  <td>約126.9×95.7×59.7mm</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.70倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.71倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約440g</td>
                  <td>約580g</td>
                  <td>約556g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    シングルスロット<br />
                    UHS-II・UHS-I 対応
                  </td>
                  <td>
                    シングルスロット<br />
                    UHS-II・UHS-I 対応
                  </td>
                  <td>
                    シングルスロット<br />
                    UHS-I 対応
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS RP 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[3]" :numberOfTimes="'48'" :amount="'4,850'" :isCreditBtn="true" />
        </div>
        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'キヤノン EOS RP 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS RPの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/eosrp'" :sm="'6'" />
        </div>

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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
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
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
export default Vue.extend({
  name: 'canon-eosrp',
  components: {
    appearanceImage: AppearanceImage,
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = '新製品！キヤノン EOS RP | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS RP 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '高画質で豊かな描写力と小型・軽量なボディーを実現',
          contents: [
            'RFレンズと35mmフルサイズCMOSセンサー、「DIGIC 8」の組み合わせにより、高画質で表現豊かな撮影が可能',
            'キヤノンのレンズ交換式カメラEOSシリーズのフルサイズセンサー搭載モデルにおいて、最小・最軽量を実現',
            'フルサイズながら、「EOS Kiss X9i」より小型・軽量なボディ',
          ]
        },
        {
          subtitle: '多様なシーンに対応する「デュアルピクセルCMOS AF」',
          contents: [
            '「デュアルピクセルCMOS AF」とRFレンズの駆動制御を最適化したことにより、最速0.05秒の高速AFを実現',
            '被写体の瞳を検出してピントを合わせる「瞳AF」の機能を向上し、サーボAFに対応',
            '中央測距点ではEV -5を達成し、暗い状況でも高精度なピント合わせを実現',
          ]
        },
        {
          subtitle: '幅広いユーザーに対応した優れた操作性と拡張性',
          contents: [
            'グリップの凸部を小型化しながらも、持ちやすく感じる形状を採用。小型・軽量を実現しながら、高いホールド性を実現',
            'タッチ操作に対応したバリアングル液晶モニターやEVFと合わせ、さまざまな撮影スタイルに対応',

          ]
        }
      ],

      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'キヤノン EOS RP',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292132144', '4957792145197', '4957792145203', '4957792145210'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292132144', '4549292119282', '4548736001657',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292132144',
        '4957792145197',
        '4957792145203',
        '4957792145210',
        '4957792145227',
        '4957792145234',
        '4549292133356',
        '4549292133318',
        '4549292133325',
        '4549292115727',
        '4549292115611',
        '4549292115581'
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

