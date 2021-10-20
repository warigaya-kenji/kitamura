<template>
  <v-app>
    <div class="cinemaline-fx3">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/cinemaline-fx3/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/cinemaline-fx3/sp_img_top.jpg'"
          :topTitle="'ソニー Cinema Line FX3'"
          :topTitleText="'動画撮影の常識を覆す優れたAFを搭載した\nシリーズ最小・最軽量35mmフルサイズCinema Lineカメラ'"
          :padding="'190px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="mb-0">ソニー Cinema Line FX3</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'動画撮影の常識を覆す像面位相差AFを搭載。\n手軽にシネマの映像表現を実現するCinema Lineシリーズ最小・最軽量モデル'" />

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー Cinema Line FX3 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 60回まで分割ー -->
        <subText :textItem="'キタムラなら最大60回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'7,574'"
          :targetDate="'2021年3月12日'"
          :numberOfTimes="'60'"
          :maximumInstallmentPayment="'60'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る ソニー Cinema Line FX3'" />
        <watchInVideo :src="'https://www.youtube.com/embed/16BRd2wWG6s?rel=0'" />
        <watchInVideo :src="'https://www.youtube.com/embed/2YXh88hwqnM'" />
        <watchInVideo :src="'https://www.youtube.com/embed/2ZG1BLktJc4'" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー FX3 / α7SIII / FX6 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー FX3 / α7SIII / FX6 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年3月12日</td>
                  <td>2020年10月9日</td>
                  <td>2020年12月11日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>イメージセンサー</th>
                  <td>フルサイズセンサー (裏面照射型）</td>
                  <td>フルサイズセンサー (裏面照射型）</td>
                  <td>フルサイズセンサー (裏面照射型）</td>
                </tr>
                <tr>
                  <th>解像度 (FF / S35)</th>
                  <td>FF: QFHD / S35: FHD</td>
                  <td>FF: QFHD / S35: FHD</td>
                  <td>FF: DCI-4K & QFHD / S35: FHD</td>
                </tr>
                <tr>
                  <th>HFR (4K / FHD)</th>
                  <td>4K 120p / FHD 240p</td>
                  <td>4K 120p / FHD 240p</td>
                  <td>4K 120p (QFHD) / FHD 240p</td>
                </tr>
                <tr>
                  <th>記録フォーマット</th>
                  <td>XAVC S / XAVC S-I / XAVC HS</td>
                  <td>XAVC S / XAVC S-I / XAVC HS</td>
                  <td>XAVC Long / XAVC Intra</td>
                </tr>
                <tr>
                  <th>ビット深度/コーデック</th>
                  <td>10bit 4:2:2, Long GOP, All-I / H.264, H.265</td>
                  <td>10bit 4:2:2, Long GOP, All-I / H.264, H.265</td>
                  <td>10bit 4:2:2, Long GOP, All-I / H.264</td>
                </tr>
                <tr>
                  <th>ISO</th>
                  <td>80 – 409,600 (拡張時)</td>
                  <td>80 – 409,600 (拡張時)</td>
                  <td>320 – 409,600</td>
                </tr>
                <tr>
                  <th>シネマルック/ S-Log</th>
                  <td>S-Cinetone<br />S-Log3/2, HLG</td>
                  <td>S-Cinetone<font color="red">※1</font><br />S-Log3/2, HLG<br /><font color="red">※1 要2/25公開ユーザーアップデート</font></td>
                  <td>S-Cinetone / s709<br />S-Log3, HLG</td>
                </tr>
                <tr>
                  <th>ボディ内手振れ補正</th>
                  <td>5軸 (アクティブ/ スタンダード)</td>
                  <td>5軸 (アクティブ/ スタンダード)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>オートフォーカス</th>
                  <td>ファストハイブリッドAF / 瞳AF / トラッキング</td>
                  <td>ファストハイブリッドAF / 瞳AF / トラッキング</td>
                  <td>ファストハイブリッドAF / 瞳AF</td>
                </tr>
                <tr>
                  <th>ハンドル/グリップ/スクリュー</th>
                  <td>XRLハンドルユニット/ – / ¼-20 UNC x5</td>
                  <td>-</td>
                  <td>スマートハンドル/ スマートグリップ / ¼-20 UNC x8</td>
                </tr>
                <tr>
                  <th>タリーランプ</th>
                  <td>前面/上面/背面</td>
                  <td>-</td>
                  <td>前面/上面/背面</td>
                </tr>
                <tr>
                  <th>RAW</th>
                  <td>16bit RAW 出力 ( HDMI Type-A)</td>
                  <td>16bit RAW 出力 ( HDMI Type-A)</td>
                  <td>16bit RAW 出力 ( 12G SDI)</td>
                </tr>
                <tr>
                  <th>オーディオ</th>
                  <td>XLR/TRS x 2, 35mm x 2 / LPCM 4ch 24bit</td>
                  <td>35mm ジャック / LPCM 2h 16bit</td>
                  <td>XLR x 2 / LPCM 4h 24bit</td>
                </tr>
                <tr>
                  <th>冷却ファン</th>
                  <td>内蔵</td>
                  <td>非搭載</td>
                  <td>内蔵</td>
                </tr>
                <tr>
                  <th>バッテリー</th>
                  <td>NP-FZ100 (16.4Wh)</td>
                  <td>NP-FZ100 (16.4Wh)</td>
                  <td>BP-U35(35Wh)/U70(72Wh)/U100(97Wh)</td>
                </tr>
                <tr>
                  <th>外形寸法/質量(本体のみ)</th>
                  <td>129.7 x 77.8 x 84.5 (mm) / 640 (g)</td>
                  <td>128.9 x 96.9 x 80.8 (mm) / 614 (g)</td>
                  <td>114 x 116 x 153 (mm) / 890 (g)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <subText :textItem="'ソニー FX3 の特徴'" id="spec" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/pro-cam/products/ILME-FX3/'"
          :height="'70px'"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ソニー Cinema Line FX3'" />
        <shasha
          :txt="'ソニー Cinema Lineシリーズは同社の映像制作用カメラとして展開され、VENICEを最上位機種としたプロの制作現場で求められる映像表現力や操作性を持ったカメラです。FX3はそのCinema Lineと一眼ミラーレスカメラ「α」で培った先進テクノロジーが融合した...'"
          :href="'https://shasha.kitamura.jp/article/480269511.html'"
          :src="'/ec/images2/special/camera/feature/sony/cinemaline-fx3/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー Cinema Line FX3 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ソニー Cinema Line FX3 外観画像'" />
          <p class="text-subtitle-1">ソニー Cinema Line FX3 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/cinemaline-fx3'" />
        </div>

        <!-- ↓ 作例画像 -->
        <div id="images2">
          <subText :textItem="'ソニー Cinema Line FX3 作例画像'" id="images" />
          <exampleImages :path="'/ec/images2/special/camera/feature/sony/cinemaline-fx3/'" :count="1" :sm="12" />
          <exampleImages :path="'/ec/images2/special/camera/feature/sony/cinemaline-fx3/'" :count="5" :target="1" />
        </div>

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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'cinemaline-fx3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'ソニー Cinema Line FX3 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー Cinema Line FX3 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' },
        { naviItem: 'FX3 作例画像', href: '#images2' }
      ],
      expensiveTradeInList: {
        name: 'ソニー Planar T* FE 50mm F1.4 ZA [SEL50F14Z]',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&goodsname=4548736028357&pattern=1&_ga=2.134607473.16120489.1628554499-279164427.1627285160',
        nameImg: '//shopimg.kitamura.jp/images/pd/8d9/c63/bad/3e3/cdc/d99/030/9c8/ca4/9f3/07x/uhq/owi/6/M.jpg',
        txt: 'ソニー FE 50mm F1.2 GM',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel50f12gm/bnr_shitadori_350-130.jpg'
      },
      characteristicList: [
        {
          subtitle: 'フルサイズCMOSセンサーと最新画像処理エンジンで、圧倒的な撮影性能を実現',
          contents: [
            '裏面照射型の35mmフルサイズCMOSセンサーと、最新の画像処理エンジンBIONZ XR（ビオンズ エックスアール）を搭載。一眼で培った技術を惜しみなく搭載することで圧倒的な高画質動画撮影を実現',
            '上位モデルである、FX9やFX6で好評な、肌の色を美しく見せるスキントーンを中心としたルック「S-Cinetone」を搭載。シネマのようなルックを手軽に再現',
            '4K QFHD解像度による最大120pのハイフレームレート動画のカメラ内記録に対応。4K解像度で最大5倍のなめらかなスローモーションや、フルHD解像度時240fpsで、最大10倍のスロー表現も実現'
          ]
        },
        {
          subtitle: '動画撮影の常識を覆す高いフォーカス性能',
          contents: [
            '像面位相差検出AFとコントラストAFを併用したAFシステム（ファストハイブリッドAF）を搭載。動きの速い被写体に高精度かつなめらかに、ワイドなエリアでフォーカスを合わせ続けることが可能',
            'きめ細かい設定が可能な「AFトランジション速度」と「AF乗り移り感度」を搭載。カメラまかせのフォーカスワークができるきめ細かいAF設定が可能',
            'すべての動画記録モードで使用できるリアルタイム瞳AF搭載。高精度かつ自動的に瞳にピントを合わせ続けるため、撮影者は構図に集中できます'
          ]
        },
        {
          subtitle: 'ワンオペレーション撮影をより身近にする機動力とプロの要望に応える信頼性',
          contents: [
            'ケージ不要で周辺機器を直接ボディに装着可能な小型・軽量で機動力を追求した筐体を採用。さらにXLR端子を2基備えたデジタルオーディオインターフェース対応XLRアダプター搭載のXLRハンドルユニットも同梱。ワンオペレーション撮影がより身近になりました',
            '手持ち撮影に特に有効な、光学式5軸ボディ内手ブレ補正機能を搭載。装着可能なすべてのレンズで高い補正効果を得られ、今までにはなかった機動力を実現',
            '冷却ファンと放熱に配慮した構造を採用。アクティブ、パッシブ両面で効率的に放熱し、動画撮影中の温度上昇を抑制。一眼では不可能な長時間の撮影が可能',
            '用途に合わせた点灯/消灯の設定にも対応したタリーランプをカメラ全体に複数配置。安心して記録中であることを確認できます'
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
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
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
          path: 'ソニー Cinema Line FX3',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736123205'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736123205', '4548736121331', '4548736122635'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736123205',
        '4548736064621',
        '4548736064522',
        '4548736055704',
        '4905524730760',
        '4905524846119',
        '4548736106857',
        '4548736106499',
        '4548736004269',
        '4905524760866',
        '4905524905793',
        '4905524846980',
        '4548736089044',
        '4523052022722',
        '4523052022739'
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