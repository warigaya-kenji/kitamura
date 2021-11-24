<template>
  <v-app>
    <div class="em1m3">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/olympus/em1m3/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/olympus/em1m3/sp_img_top.jpg'"
          :topTitle="'オリンパス OM-D E-M1 Mark III'"
          :topTitleText="'最高7.5段の手ぶれ補正＆新画像処理エンジン搭載\nプロフェッショナルミラーレス一眼'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :textPadding="'15px 0px 0px 0px'"
          :titleFontsize="'30px'"
          :textFontsize="'16px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">オリンパス OM-D E-M1 Mark III</p>
        <naviBtn :naviList="naviList" :color="'red darken-3'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--特徴-->
        <subText :textItem="'手持ち撮影の限界に挑戦「OM-D E-M1 Mark III」登場！'" id="point" />
        <div>
          <div>
            <ul class="point">
              <p class="pttex">
                <span class="bgtypetitle">暗所や超望遠の撮影時でも強力に手ぶれを補正。三脚を使用しない撮影スタイルで自由度が格段に向上</span>
              </p>
            </ul>
          </div>
          <div style="clear: both"></div>
          <div class="text-center">
            <v-btn class="block" color="red darken-1" href="/special/sale-fair/camera/feature/olympus/em1m3/4484/" x-large>
              <span class="text-h6 white--text">オリンパス OM-D E-M1 Mark III ご購入はこちら</span>
            </v-btn>
          </div>
        </div>
        <subText :textItem="'オリンパス OM-D E-M1 Mark IIIの特徴'" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--仕様・作例ボタン-->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで仕様・作例を詳しく見る'"
          :url="'https://www.olympus-imaging.jp/product/dslr/em5mk3/index.html'"
          :height="'50px'"
        />
        <!--仕様・作例ボタン-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'オリンパス OM-D E-M1 Mark III / OM-D E-M1 MarkII / OM-D E-M1X / OM-D E-M5 MarkIII'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">オリンパス OM-D E-M1 Mark IIIと、OM-D E-M1 MarkII、OM-D E-M1X、OM-D E-M5 MarkIIIの性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年2月28日発売予定</td>
                  <td>2016年12月22日発売</td>
                  <td>2019年2月22日発売</td>
                  <td>2019年11月22日発売</td>
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
                  <td>約2037万画素</td>
                  <td>約2037万画素</td>
                  <td>約2037万画素</td>
                  <td>約2037万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    4/3型(マイクロフォーサーズ)<br />
                    Live MOSセンサー
                  </td>
                  <td>
                    4/3型(マイクロフォーサーズ)<br />
                    Live MOSセンサー
                  </td>
                  <td>
                    4/3型(マイクロフォーサーズ)<br />
                    Live MOSセンサー
                  </td>
                  <td>
                    4/3型(マイクロフォーサーズ)<br />
                    Live MOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>画像処理エンジン</th>
                  <td>TruePic Ⅸ</td>
                  <td>TruePic VIII</td>
                  <td>TruePic VIIIx 2</td>
                  <td>TruePic VIII</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約18コマ/秒</td>
                  <td>最高 約15コマ/秒</td>
                  <td>最高 約18コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    RAW：約 101コマ<br />
                    JPEG：約 134コマ
                  </td>
                  <td>
                    RAW：約 84コマ<br />
                    JPEG：約 117コマ
                  </td>
                  <td>
                    RAW：約 103コマ<br />
                    JPEG：約 132コマ
                  </td>
                  <td>
                    RAW：約 150コマ<br />
                    JPEG：カード容量一杯まで
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000～60秒、ライブバルブ、ライブタイム、ライブコンポジット</td>
                  <td>1/8000～60秒、ライブバルブ、ライブタイム、ライブコンポジット</td>
                  <td>1/8000～60秒、ライブバルブ、ライブタイム、ライブコンポジット</td>
                  <td>1/8000～60秒、ライブバルブ、ライブタイム、ライブコンポジット</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO LOW（64相当、100相当）<br />
                    200～25600
                  </td>
                  <td>
                    ISO LOW（64相当）<br />
                    200～25600
                  </td>
                  <td>
                    ISO LOW（64相当、100相当）<br />
                    200～25600
                  </td>
                  <td>
                    ISO LOW（64相当）<br />
                    200～25600
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>121点</td>
                  <td>121点</td>
                  <td>121点</td>
                  <td>121点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約420枚</td>
                  <td>約440枚</td>
                  <td>約870枚</td>
                  <td>約310枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約134.1mm × 90.9mm × 68.9mm</td>
                  <td>約134.1mm × 90.9mm × 68.9mm</td>
                  <td>約144.4mm×146.8mm×75.4mm</td>
                  <td>約125.3mm×85.2mm×49.7mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>ボディー内5軸手ぶれ補正（最高7.5段）</td>
                  <td>ボディー内5軸手ぶれ補正（最高6.5段）</td>
                  <td>ボディー内5軸手ぶれ補正（最高7.5段）</td>
                  <td>ボディー内5軸手ぶれ補正（最高6.5段）</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>約236万ドット/視野率約100%</td>
                  <td>約236万ドット/視野率約100%</td>
                  <td>約236万ドット/視野率約100%</td>
                  <td>約236万ドット/視野率約100%</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>3.0型/2軸可動式/約104万ドット</td>
                  <td>3.0型/2軸可動式/約104万ドット</td>
                  <td>3.0型/2軸可動式/約104万ドット</td>
                  <td>3.0型/2軸可動式/約104万ドット</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約504g</td>
                  <td>約574g</td>
                  <td>約997g</td>
                  <td>約414g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    デュアルスロット<br />
                    SDカードUHS-II 対応（スロット1）<br />
                    UHS-I 対応（スロット2）
                  </td>
                  <td>
                    デュアルスロット<br />
                    SDカードUHS-II 対応（スロット1）<br />
                    UHS-I 対応（スロット2）
                  </td>
                  <td>
                    デュアルスロット<br />
                    SDカード(UHS-II 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDカード(UHS-II 対応)
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'オリンパス OM-D E-M1 Mark III 価格/人気アクセサリー'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--高価下取り-->
        <div>
          <subText :textItem="'オリンパス OM-D E-M1 Mark IIIをご購入時、OM-D E-M1 MarkII ボディ ブラック高値下取り実施中！'" />
          <v-container class="mb-5">
            <v-row>
              <v-col class="text-center" cols="12" sm="4">
                <a href="https://www.net-chuko.com/ec/sell/item-list?keyword=4545350050849&sort=keyword&limit=40" target="_blank">
                  <div class="d-flex flex-column justify-space-between align-center">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/b5a/43a/19a/32d/048/91a/48c/ca7/4ad/060/43e/80g/ugo/i/L.jpg"
                      class="hover"
                      max-width="80%"
                      height="auto"
                    ></v-img>
                  </div>
                </a>
                <span class="text-subtitle-2">OM-D E-M1 MarkII ボディ ブラック</span>
              </v-col>
              <v-col col="12" sm="8" class="mt-6 pa-0">
                <p class="text-subtitle-2">
                  今ならオリンパス OM-D E-M1 Mark IIIをご購入時、<br />・OM-D E-M1 MarkII ボディ ブラックを<br />高価下取り実施中です
                </p>
                <a href="https://www.net-chuko.com/ec/sell/item-list?keyword=4545350050849&sort=keyword&limit=40" target="_blank">
                  <img src="/ec/images2/special/camera/feature/olympus/em1m3/bnr_shitadori_350-130.jpg" alt="高値下取り実施中" class="hover" />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <!--高価下取り-->

        <!--分割48回-->
        <subText :textItem="'キタムラなら48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'48'"
          :maximumInstallmentPayment="'48'"
          :amount="'4,084'"
          :targetDate="'2020年2月11日'"
          :isCreditBtn="true"
          :isMax60Txt="true"
        />
        <!--分割48回-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'オリンパス OM-D E-M1 Mark III 外観画像'" />
          <p class="text-subtitle-1">オリンパス OM-D E-M1 Mark III の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/olympus/em1m3'" />
        </div>

        <div class="text-center mb-12">
          <v-btn class="block" color="red darken-1" href="/special/sale-fair/camera/feature/olympus/em1m3/4484/" x-large>
            <span class="text-h6 white--text">オリンパス OM-D E-M1 Mark III ご購入はこちら</span>
          </v-btn>
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
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'em1m3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    kitamuraService: KitamuraService
  },
  setup: (props, context) => {
    document.title = 'オリンパス E-M1 MarkIII | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'オリンパス OM-D E-M1 Mark III 発売開始！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！ OM-D E-M1 Mark IIIをご購入時、OM-D E-M1 MarkII ボディ ブラック高値下取り実施中')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観画像', href: '#images2' },
      ],
      characteristicList: [
        {
          subtitle: '最高7.5段手ぶれ補正、新エンジン「TruePic IX」が生む高画質を小型・軽量ボディーで実現',
          contents: [
            '対応レンズのレンズ内手ぶれ補正機構とボディー内5軸手ぶれ補正機構をシンクロさせることで、世界最高7.5段の手ぶれ補正を実現',
            'ボディー内に搭載された手ぶれ補正機構単独で最高7段分の補正効果。装着したすべてのレンズで最高レベルの手振れ補正を実現',
            '新画像処理エンジン「TruePic IX」を搭載。高感度時でもノイズが少なく、周辺まで歪みの少ない一眼トップクラスの高画質を実現'
          ]
        },
        {
          subtitle: '防塵・防滴、耐低温設計など、過酷な環境下でも安心して使える高い信頼性',
          contents: [
            '各部にシーリングを施し高い防塵・防滴、耐低温性を備えた堅牢なマグネシウム合金のボディーを採用。防塵・防滴仕様の「M.ZUIKO DIGITAL」レンズと組み合わせることで、過酷な環境下であっても撮影が可能',
            'USB経由での本体内充電に対応。給電しながらの長時間撮影を実現し、寒冷地での天体撮影等でも安心して撮影が可能',
            '従来機に比べゴミやホコリが写真に映り込む可能性を1/10に低減した、新コーティング採用の進化したダストリダクションシステム搭載'
          ]
        },
        {
          subtitle: '新開発の「星空AF」や進化した「顔優先／瞳優先AF」など、高速・高精度なAF システム',
          contents: [
            '動く被写体も高精度に捉える121点オールクロス像面位相差AF センサー搭載。「顔優先／瞳優先AF」も進化し狙った被写体を逃さない',
            'マニュアルによるピント合わせが常識だった天体写真の世界に革新をもたらす新開発「星空AF」で、暗闇に光る微小な星にも確実に捕捉',
            'ファインダーを覗きながら親指の操作で素早くAFターゲットを移動可能な「マルチセレクター」を搭載。動きの激しい被写体でも確実に捕捉可能'
          ]
        },
        {
          subtitle: '「プロキャプチャーモード」や手持ち4K 動画など、表現の幅を広げる多彩な撮影機能',
          contents: [
            '人の反応タイムラグやカメラの動作タイムラグが原因で撮り逃していた瞬間を確実に記録できる「プロキャプチャーモード」を搭載',
            'ボディー内5軸手ぶれ補正に電子手ぶれ補正を組み合わせることで高い手ぶれ補正を実現する、動画撮影専用の手ぶれ補正モードM-IS1 を搭載',
            'ハイレゾ録音に対応したリニアPCMレコーダー「LS-P4」を外部マイク／レコーダーとして組み合わせることで、高音質な動画音声記録が可能'
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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
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
          linkUrl: '/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'オリンパス OM-D E-M1 Mark III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4545350053000', '4545350053017'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4545350053000', '4545350050849', '4545350052621', '4545350052768'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350053000',
        '4545350053017',
        '4545350050894',
        '4545350051020',
        '4545350052553',
        '4545350050924',
        '4545350050917'
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
        console.log(productListResult);
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