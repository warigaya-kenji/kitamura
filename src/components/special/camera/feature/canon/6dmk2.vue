<template>
  <v-app>
    <div class="6dmk2">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/6dmk2/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/6dmk2/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS 6D MarkII'"
          :topTitleText="'新次元の高速性能を実現した撮影表現の可能性を広げる\n小型軽量 フルサイズデジタル一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キャノン EOS 6D MarkII 好評発売中</span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>キャノン EOS 6D MarkII</span>
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
        <subText :textItem="'キヤノン EOS 6D MarkII 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://cweb.canon.jp/eos/lineup/6dmk2/index.html'"
          :height="'70px'"
        />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'キヤノン EOS 6D MarkIIの特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS 6D MarkII / キヤノン EOS 6D / キヤノン EOS 5D MarkIV 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">前機種『EOS 6D』と上位機種『EOS 5D MarkIV』との性能を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2017年8月4日</td>
                  <td>2012年11月30日</td>
                  <td>2016年9月8日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素</th>
                  <td>約2620万画素</td>
                  <td>約2020万画素</td>
                  <td>約3040万画素</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～40000</td>
                  <td>100～25600</td>
                  <td>100～32000</td>
                </tr>
                <tr>
                  <th>高速連続撮影</th>
                  <td>約6.5コマ/秒</td>
                  <td>約4.5コマ/秒</td>
                  <td>約7コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッター速度</th>
                  <td>1/4000～30秒，B</td>
                  <td>1/4000～30秒，B</td>
                  <td>1/8000～30秒，B</td>
                </tr>
                <tr>
                  <th>AFセンサー</th>
                  <td>最大45点（全点クロス,最大27点F8対応）</td>
                  <td>最大11点（中央1点クロス測距）</td>
                  <td>最大61点（最大41点クロス,全点F8対応）</td>
                </tr>
                <tr>
                  <th>AE測光センサー</th>
                  <td>7560画素 RGB＋IR</td>
                  <td>63分割デュアルレイヤー測光センサー</td>
                  <td>150K RGB＋IR</td>
                </tr>
                <tr>
                  <th>（LVサーボAF時/LV one shot AF時）</th>
                  <td>（最高約4.0f/s / 最高約6.5f/s）</td>
                  <td>（× / 最高約4.5f/s）</td>
                  <td>（最高約4.3f/s /最高約7.0f/s）</td>
                </tr>
                <tr>
                  <th>ライブビューAF</th>
                  <td>デュアルピクセルCMOS AF</td>
                  <td>コントラストAF</td>
                  <td>デュアルピクセルCMOS AF</td>
                </tr>
                <tr>
                  <th>レリーズタイムラグ</th>
                  <td>約60ms</td>
                  <td>約60ms</td>
                  <td>約58ms</td>
                </tr>
                <tr>
                  <th>モニターサイズ／画素</th>
                  <td>3.0型/104万画素</td>
                  <td>3.0型/104万画素</td>
                  <td>3.2型/162万画素</td>
                </tr>
                <tr>
                  <th>タッチパネル／バリアングル</th>
                  <td>○／○</td>
                  <td>×／×</td>
                  <td>○／×</td>
                </tr>
                <tr>
                  <th>通信機能</th>
                  <td>○（Wi-Fi/Bluetooth/NFC)</td>
                  <td>○（Wi-Fi）</td>
                  <td>○（Wi-Fi/NFC)</td>
                </tr>
                <tr>
                  <th>動画記録サイズ</th>
                  <td>フルHD/HD</td>
                  <td>フルHD/HD/SD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
                <tr>
                  <th>タイムラプス</th>
                  <td>タイムラプス動画（4K/FHD）</td>
                  <td>─</td>
                  <td>タイムラプス（FHD）</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>SD/SDHC/SDXC※UHS-II対応</td>
                  <td>SD/SDHC/SDXC※UHS-I対応</td>
                  <td>CFカード、SD/SDHC/SDXCメモリーカード</td>
                </tr>
                <tr>
                  <th>大きさ</th>
                  <td>約144.0×110.5×74.8mm</td>
                  <td>約144.5×110.5×71.2mm</td>
                  <td>約150.7×116.4×75.9mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約685g(本体のみ)/約765g(Bat+SD)</td>
                  <td>約680g(本体のみ)/約755g(Bat+SD)</td>
                  <td>約800g(本体のみ)/約890g(Bat+CF+SD)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'EOS 6D MarkII 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'3,725'"
          :targetDate="'2020年7月10日'"
          :isCreditBtn="true"
        />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'キヤノン EOS 6D MarkII 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS 6D MarkIIの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/6dmk2'" />
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
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: '6dmk2',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    appearanceImage: AppearanceImage,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = '好評発売中！キヤノンEOS 6D MarkII | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS 6D MarkII 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '35mmフルサイズ　約2620万画素CMOSセンサー',
          contents: [
            '新たに自社開発・自社生産したフルサイズセンサー',
            '約2620万画素で、被写体のディテールまで鮮鋭に描写。',
            '最新のセンサー技術を導入することで、従来機種から高画素化しながらも豊かな階調表現や低ノイズ化を達成。',
            '新開発有効約2620万画素フルサイズCMOSセンサー×最新映像エンジンDIGIC 7を搭載',
            '高画素化しながらも常用最高ISO40000を実現し、暗所での撮影やスポーツ撮影でも高画質な撮影が可能',
          ]
        },
        {
          subtitle: '「バリアングル＆タッチパネル液晶モニター',
          contents: [
            '前方向約180度、後ろ方向約90度、水平方向約175度に稼働するバリアングル液晶をEOS のフルサイズとして初採用。',
            'EOSフルサイズ一眼としてバリアングル液晶を初採用',
            'ライブビュー撮影時や動画撮影時の操作性や撮影アングルの自由度が高まり、実用性が大幅に向上。',
          ]
        },
        {
          subtitle: 'オールクロス45点AFセンサー',
          contents: [
            '全測距点でF5.6光束対応のクロス（縦／横）測距が可能',
            '中央にはF2.8とF5.6のデュアルクロス測距※２を配置。※１　使用レンズにより、測距点数、デュアルクロス測距点数、クロス測距点数が変動します。※２　AFグループ属性：対応レンズについてはホームページでご確認ください。',
            '上下18点を除いた最大27点の開放値F8対応や、測距エリア選択モードの搭載も実現しました'
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
          path: 'キヤノンEOS 6D MarkII',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292083897', '4549292084016', '4549292084061'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292083897', '4960999964508', '4549292075748',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292083897',
        '4549292084016',
        '4549292084061',
        '4549292087512',

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
