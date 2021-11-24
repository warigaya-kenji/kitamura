<template>
  <v-app>
    <div class="sony-a7r3">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :topTitle="'SONY\nα7R III [ILCE-7RM3]'"
          :topTitleText="'超高画質はそのままに\n飛躍的にスピード性能が進化した\nフルサイズミラーレス一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :titleFontsize="'200%'"
          :textFontsize="'16px'"
          :padding="'40px 0px 15px 30px'"
        />

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー α7R III</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'SONY α7R III 価格・人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4548736017689&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort='"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/sony/a7r3/bnr_shitadori_350-130.gif'"
        />

        <subText :textItem="'SONY α7RIII レビューレポート'" />
        <a href="/ec/special/general/photo_mono/a7r3-a9">
          <v-img
            src="https://shopimg.kitamura.jp/images/banner/4997.jpg"
            max-width="708"
            height="auto"
            alt="photo＋Mono特集 Vol.4 α7RⅢやα9を比較レビューレポート"
            class="hover mx-auto"
          ></v-img>
        </a>

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'SONY α7R III [ILCE-7RM3] ３大特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--動画で見る-->
        <subText :textItem="'動画で見る！SONY α7R III'" />
        <v-row>
          <v-col cols="12" sm="6">
            <watchInVideo :src="'https://www.youtube.com/embed/K4YqOFsehTc?rel=0'" :height="263" :sm="12" />
          </v-col>
          <v-col cols="12" sm="6">
            <watchInVideo :src="'https://www.youtube.com/embed/9TZH3lYhj_k?rel=0'" :height="263" :sm="12" />
          </v-col>
        </v-row>

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'6,900'" :targetDate="''" :isCreditBtn="true" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'SONY α7R III / SONY α7R II / ニコン D850 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">前機種『SONY α7R II』と『ニコン D850』との性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2017年11月25日発売</td>
                  <td>2015年8月7日発売</td>
                  <td>2017年9月8発売</td>
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
                  <td>約4240万画素</td>
                  <td>約4240万画素</td>
                  <td>4575万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>裏面照射型CMOS</td>
                  <td>裏面照射型CMOS</td>
                  <td>裏面照射型CMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高約10コマ/秒</td>
                  <td>最高約5コマ/秒</td>
                  <td>最高約7コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO 100～32000</td>
                  <td>ISO 100～25600</td>
                  <td>ISO 64～25600</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>399点(位相差検出方式)<br />425点（コントラスト検出方式）</td>
                  <td>399点(位相差検出方式)<br />25点（コントラスト検出方式）</td>
                  <td>153点<br />（99点でクロス測距可能、15点F8対応、選択可能55点）</td>
                </tr>
                <tr>
                  <th>バッテリー</th>
                  <td>NP-FZ100</td>
                  <td>NP-FW50</td>
                  <td>EN-EL15a</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約530コマ</td>
                  <td>約290コマ</td>
                  <td>約1840コマ</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約126.9×95.6×62.7mm</td>
                  <td>約126.9×95.7×60.3mm</td>
                  <td>約146×124×78.5mm</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td>約657g</td>
                  <td>約625g</td>
                  <td>約1005g</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>SDメモリーカード/メモリースティックPRO×2</td>
                  <td>SDメモリーカード/メモリースティックPRO×1</td>
                  <td>XQDカード×1、SDメモリーカード×1</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD (HDR動画に対応)</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 作例画像 -->
        <subText :textItem="'SONY α7R III 作例画像'" />
        <exampleImages :path="exampleImagesPath" :count="4" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'SONY α7R III 外観画像'" />
          <p class="text-subtitle-1">SONY α7R III の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="appearanceImagePath" :count="3" />
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';

export default Vue.extend({
  name: 'sony-a7r3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
  },
  setup: () => {
    document.title = 'ソニー α1 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α1 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a7r3/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a7r3/sp_img_top.jpg',
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a7r3/',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a7r3',
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '一新した信号処理システムをはじめ最新の技術を結集し、大幅に向上した高画質性能',
          contents: [
            'イメージセンサーからの読出し速度は従来機比約2倍、画像処理速度も従来機比約1.8倍に高速化',
            '中高感度域で約1段ノイズを低減し、広い感度域での高解像と低ノイズ性能を両立',
            '世界最高の5.5段の補正効果を誇る、光学式5軸ボディ内手ブレ補正を搭載',
          ]
        },
        {
          subtitle: '4Dフォーカスに対応、最高約10コマ/秒のAF/AE追従による高速連写も実現するAF性能',
          contents: [
            '有効約4240万画素の高解像でありながら、従来機比の２倍となる最高約10コマ/秒のAF/AE追従高速連写を実現',
            'RAW連写時でも最大76枚の連写が持続する大容量バッファーを搭載',
            '399点の像面位相差検出AFセンサーを配置、コントラストAFを425点に多分割化したことで検出精度が大幅に向上',
            'AF-SモードでのAF検出輝度範囲の下限値はEV-3を達成、暗いシーンでも高精度な撮影が可能',
          ]
        },
        {
          subtitle: 'プロフェッショナルの撮影現場でも活躍する操作性、信頼性',
          contents: [
            '約50万回のレリーズ耐久性とシャッター音の静音性も備えた新開発の低振動、高耐久シャッター',
            'リレー記録・同時記録が可能なデュアルスロット（スロット1のみUHS-II対応）を搭載',
            'NP-FW50の約2.2倍の容量を持つ高容量バッテリーNP-FZ100に対応',
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
          href: '/ec/special/camera/dslr',
          img: 'https://shopimg.kitamura.jp/images/banner/1350.gif',
          alt: 'ミラーレス一眼特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
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
          path: 'SONY フルサイズミラーレス一眼 新製品 α7R III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736075139'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736075139', '4548736017689', '4960759149336'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736075139',
        '4548736074125',
        '4548736064522',
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