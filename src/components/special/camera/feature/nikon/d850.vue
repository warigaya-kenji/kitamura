<template>
  <v-app>
    <div class="d850">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'ニコン\n D850'"
          :topTitleText="'高画質・幅広い常用感度・高速性能が融合\n表現領域が拡がるFXフォーマット一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :titleFontsize="'200%'"
          :textFontsize="'16px'"
        />

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン D850</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'ニコン D850 価格・人気アクセサリー/お得な情報'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'/ec/sell/item-list?category=デジタル一眼レフ&keyword=D810&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort='"
          :expensivePurchaseSrc="'https://shop.kitamura.jp/ts_rsc/940/images/bnr_shitadori_350-130.gif'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る！ニコンD850 6つの機能'" />
        <watchInVideo :srcList="watchInVideos" :height="265" :sm="6" :type="2" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ニコン D850 ３大特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン D850 / ニコン D810 / キヤノン EOS 5D MarkIV 比較'" />
          <div class="product-comparison mb-5">
            <p class="pttex mb-2">
              <span class="bgtypetitle text-h6 font-weight-bold">前機種『D810』とライバル機種『EOS 5D MarkIV』との性能を比較しました。</span>
            </p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2017年9月8日発売</td>
                  <td>2014年7月17日発売</td>
                  <td>2016年9月8日発売</td>
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
                  <td>約4575万画素</td>
                  <td>約3635万画素</td>
                  <td>約3040万画素</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO64-25600(拡張ISO32/51200/102400)</td>
                  <td>ISO64-12800</td>
                  <td>ISO100～32000（拡張ISO50/51200/102400）</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td>約7コマ/秒</td>
                  <td>約5コマ/秒</td>
                  <td>約7コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                </tr>
                <tr>
                  <th>AF測距点</th>
                  <td>153点（クロス99点）</td>
                  <td>51点</td>
                  <td>最大61点（クロス測距点：最大41点）</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>ワイド3.2型</td>
                  <td>ワイド3.2型</td>
                  <td>ワイド3.2型</td>
                </tr>
                <tr>
                  <th>液晶可動/固定</th>
                  <td>チルト可動(タッチパネル）</td>
                  <td>固定</td>
                  <td>固定</td>
                </tr>
                <tr>
                  <th>Wi-Fi/NFC</th>
                  <td>搭載</td>
                  <td>非搭載</td>
                  <td>搭載</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>XQDカード、SDHC/SDXC(UHS-Ⅱ対応)</td>
                  <td>CFカード、SDHC/SDXCメモリーカード(UHS-I対応）</td>
                  <td>CFカード、SD/SDHC/SDXCメモリーカード</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>MOV、MP4</td>
                  <td>MOV</td>
                  <td>MOV、MP4</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約1840枚</td>
                  <td>約1200枚</td>
                  <td>約900枚</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td>993ｇ</td>
                  <td>980g</td>
                  <td>890g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ニコン D850 作例画像'" />
        <exampleImages :path="exampleImagesPath" :count="2" />
        <exampleImages :path="exampleImagesPath" :count="2" :target="3" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'7,493'" :isCreditBtn="true" :targetDate="''" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン D850 外観画像'" />
          <p><b>ニコン D850</b>の外観画像。レンズ装着イメージ</p>
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
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'd850',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    exampleImages: ExampleImages,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
    watchInVideo: WatchInVideo,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = 'ニコン フルサイズデジタル一眼レフ 新製品 D850 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン フルサイズデジタル一眼レフ 新製品「D850」特集。前機種からの進化点、上位機種との比較などの情報や価格・スペック・お得な情報をチェック！新製品ならカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d850/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d850/sp_img_top.jpg',
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d850/',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d850',
      watchInVideos: ['https://www.youtube.com/embed/_0xYonoBywI?rel=0', 'https://www.youtube.com/embed/zlsQPIt39TY?rel=0', 'https://www.youtube.com/embed/IZcpFMj4SvQ?rel=0', 'https://www.youtube.com/embed/XAw95xMTbPk?rel=0', 'https://www.youtube.com/embed/6Z2tlswQXcc?rel=0', 'https://www.youtube.com/embed/XSO982RyFRw?rel=0'],
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'ニコンデジタル一眼レフカメラ史上最高有効画素数4575万画素をベースに、さらに磨きをかけた描写力',
          contents: [
            'ニコンのデジタル一眼レフカメラで初めて裏面照射型CMOSセンサーを搭載',
            '有効画素数4575万画素と高画素ながら、ISO 64～25600の常用感度域を達成',
            '画像処理エンジン「EXPEED 5」と連携して、高感度でも鮮鋭感を保ちながら効果的にノイズを抑制'
          ]
        },
        {
          subtitle: '高画素モデルの限界を打ち破ったかつてない柔軟な対応力',
          contents: [
            '高画素モデルでありながら、ボディー単体で最高約7コマ/秒、マルチパワーバッテリーパック MB-D18使用で約9コマ/秒（※）の高速連続撮影が可能\n※ MB-D18を装着し、EN-EL18b使用時',
            'D5と同じ153点AFシステムがサポートし、動く被写体もより確実に捕捉',
            '14ビットロスレス圧縮RAWで約51コマ、12ビットロスレス圧縮RAW（L）なら170コマまで連続して撮影可能'
          ]
        },
        {
          subtitle: 'さらなる進化を遂げた動画性能',
          contents: [
            'FX フォーマットベース フルフレームの4K UHD（3840 ×2160）動画対応',
            'NIKKORレンズの、広角レンズや魚眼レンズのワイドな画角や独特の表現力を最大限に活用した、ドラマチックな映像表現が可能',
            'フルHD動画の表現力を拡げる「スローモーション動画」機能を新搭載'
          ]
        },
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
          path: ' ニコン D850',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759149336'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759149336', '4960759143532', '4549292075748'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759149336',
        '4960759149312',
        '4960759149329',
        '4960759900005',
        '4960759900012',
        '4960759900029',
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
.bgtypetitle {
  background-color: #ffffcc;
}
</style>