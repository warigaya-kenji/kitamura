<template>
  <v-app>
    <div class="gr3x">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="' /ec/images2/special/camera/feature/ricoh/gr3x/bg_top.jpg'"
          :spBackgroundImg="' /ec/images2/special/camera/feature/ricoh/gr3x/sp_img_top.jpg'"
          :topTitle="'リコー GR IIIx'"
          :topTitleText="'40mm相当の標準画角で撮影が楽しめる\nハイエンドコンパクトデジタルカメラ「RICOH GR IIIx」'"
          :padding="'150px 0px 15px 40px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>
        <p class="text-left">リコー GR IIIx</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'40mm相当の標準画角で撮影が楽しめる新レンズ搭載ハイエンドコンパクトデジタルカメラ'" />

        <!-- ↓ 価格・ご購入 -->
        <div id="price">
          <subText :textItem="'リコー GR IIIx 価格・ご購入'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>
        <!-- ↓ 最大60回まで分割ー -->
        <div id="otoku">
          <subText :textItem="'キタムラなら最大36回まで分割金利手数料0円！'" />
          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[0]"
            :numberOfTimes="'36'"
            :maximumInstallmentPayment="'36'"
            :amount="'3,245'"
            :targetDate="'2021年9月14日'"
          />
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る リコー GR IIIx'" />
        <watchInVideo :src="'https://www.youtube.com/embed/wptbfF4pBHM'" :height="315" />
        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'リコー GR IIIx / リコー GR III / フジフイルム X100V 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">リコー GR IIIx / リコー GR III / フジフイルム X100V 比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年10月1日発売</td>
                  <td>2019年3月15日発売</td>
                  <td>2020年3月12日発売</td>
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
                  <td>約2424万画素</td>
                  <td>約2424万画素</td>
                  <td>約2610万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>23.5mm×15.6mm（APS-Cサイズ）</td>
                  <td>23.5mm×15.6mm（APS-Cサイズ）</td>
                  <td>23.5mm×15.6mm（APS-Cサイズ）</td>
                </tr>
                <tr>
                  <th>焦点距離</th>
                  <td>26.1mm(35mm判換算：約40mm相当)</td>
                  <td>18.3mm(35mm判換算：約28mm相当)</td>
                  <td>23mm(35mm判換算：約35mm相当)</td>
                </tr>
                <tr>
                  <th>開放F値</th>
                  <td>F2.8</td>
                  <td>F2.8</td>
                  <td>F2.0</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100～102400<br />
                    下限値/上限値/低速限界値設定可能
                  </td>
                  <td>
                    ISO100～102400<br />
                    下限値/上限値/低速限界値設定可能
                  </td>
                  <td>
                    ISO160～12800<br />
                    拡張モード ISO80／100／125／25600／51200
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000～30秒、バルブ、タイム</td>
                  <td>1/4000～30秒、バルブ、タイム</td>
                  <td>
                    メカニカルシャッター：1/4000秒～15分、バルブ：最長60分<br />
                    電子シャッター：1/32000秒～15分、バルブ：1秒固定
                  </td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>
                    標準：約20cm<br />
                    マクロモード：約12cm
                  </td>
                  <td>
                    標準：約10cm<br />
                    マクロモード：約6cm
                  </td>
                  <td>約10cm</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>なし</td>
                  <td>なし</td>
                  <td>
                    OVF:電子式ブライトフレームファインダー（逆ガリレオ式） 撮影範囲フレーム視野率 約95% ファインダー倍率 約0.52倍<br />
                    EVF:0.5型有機ELファインダー 約369万ドット（４：３アスペクト） 視野率約100% ファインダー倍率0.66倍<br />
                    ハイブリッドビューファインダー
                  </td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    3.0型 固定式<br />
                    約103.7万ドット
                  </td>
                  <td>
                    3.0型 固定式<br />
                    約103.7万ドット
                  </td>
                  <td>
                    3.0型 チルト式<br />
                    約162万ドット
                  </td>
                </tr>
                <tr>
                  <th>
                    静止画撮影可能枚数/時間<br />
                    (CIPA規格基準)
                  </th>
                  <td>約200枚</td>
                  <td>約200枚</td>
                  <td>約350枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約109.4×61.9×35.2mm</td>
                  <td>約109.4×61.9×33.2mm</td>
                  <td>約128.0×74.8×53.3mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約262g</td>
                  <td>約227g</td>
                  <td>約428g</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>内蔵メモリー(約2GB)、SD/SDHC/SDXC/メモリーカード(SDHC、SDXCメモリーカードはUHS-I規格に対応)</td>
                  <td>内蔵メモリー(約2GB)、SD/SDHC/SDXC/メモリーカード(SDHC、SDXCメモリーカードはUHS-I規格に対応)</td>
                  <td>SDカード(～2GB）／SDHCカード(～32GB）／SDXCカード(～512GB） UHS-I 対応</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>フルHD</td>
                  <td>フルHD</td>
                  <td>4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->
        <div style="clear: both"></div>
        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'リコー GR IIIxの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.ricoh-imaging.co.jp/japan/products/gr-3/'"
          :height="'70px'"
        /><br /><br />
        <!--キャンペーンバナー-->
        <a href="https://www.ricoh-imaging.co.jp/japan/event/2021/griiix_purplering/" target="blank"
          ><v-img
            src="https://shop.kitamura.jp/ts_rsc/1479/images/camp.jpg"
            alt="リコー GR IIIx キャンペーン  "
            max-width="100%"
            max-height="auto"
            class="mx-auto hover"
          ></v-img
        ></a>

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'リコー GR IIIx 外観画像'" />
          <p class="text-subtitle-1">リコー GR IIIxの外観画像</p>
          <appearanceImage :src="' /ec/images2/special/camera/feature/ricoh/gr3x'" />
        </div>

        <!--↓ SNSー-->
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';



export default Vue.extend({
  name: 'gr3x',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    watchInVideo: WatchInVideo,
    appearanceImage: AppearanceImage,
    splitContent: SplitContent,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn

  },
  setup: (props, context) => {
    document.title = 'リコー GR IIIx | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'リコー GR IIIx ご予約受付中、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({

      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '新開発の高解像GR LENS',
          contents: [
            '高性能化と薄型化を両立した新開発標準画角GRレンズを搭載',
            '35ミリ判換算で40mm相当の標準画角の為、自然な遠近感の新たな視野でのスナップ撮影に対応',
            '非球面レンズ2枚を最適配置した新開発の光学系によりディストーションや色収差を極限に近いレベルまで抑制、高い解像力を実現',
            '最短12cmでのマクロ撮影では、標準画角の焦点距離と相まって背景のボケ味を生かした自然な遠近感での撮影が可能'

          ]
        },
        {
          subtitle: '解像感と階調再現性に優れた高画質を実現',
          contents: [
            '高彩度かつ柔らかい階調表現を特長とする「ノスタルジックネガ」を含む全19種類の「フィルムシミュレーション」を搭載。被写体やシーンに合わせて、写真フィルムを選ぶ感覚で多彩な表現が可能',
            '有効画素数は約2424万画素と超高精細で、解像感と階調再現性に優れた高画質を実現',
            'センサーからの画像情報を最適化する独自のアクセラレーターユニットを搭載、最高ISO感度102400の優れた高感度性能を実現'
          ]
        },
        {
          subtitle: '高速高精度ハイブリッドAF',
          contents: [
            'オートフォーカスには、コントラストAFと像面位相差AFによるハイブリッド方式を採用',
            'AF時に人物の顔および瞳検出をおこない、ピントを合わせた位置にAF枠を表示することが可能',
            '複数の人物の顔を検出した場合は、自動でメインの被写体とサブの被写体を判別して枠を表示、タッチパネルでの簡単操作でメイン被写体の切り替えも可能'

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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'http://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
        },
        {
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
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
          path: 'リコー GR IIIx',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549212303739',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549212303739', '4549212300202', '4547410423433',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
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

      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;

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