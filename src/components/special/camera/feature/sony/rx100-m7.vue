<template>
  <v-app>
    <div class="rx100m7">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/RX100M7/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/RX100M7/sp_img_top.jpg'"
          :padding="'40px 0px 15px 20px'"
          :topTitle="'ソニー DSC-RX100M7'"
          :topTitleText="'新開発のメモリー一体1.0 型積層型CMOSセンサー搭載\nフルサイズミラーレス一眼カメラ『α9』同等の高速・AF性能を実現した\nプレミアムコンパクトカメラ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ソニー DSC-RX100M7 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー DSC-RX100M7</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'RX100 シリーズの第7 世代モデル「DSC-RX100M7」'" id="spec" />
        <ul class="point pa-2">
          <li class="pointt">新開発のイメージセンサーが実現するフルサイズミラーレス一眼カメラ『α9』同等の高いAF/スピード性能</li>
          <li class="pointt">ソニーの最先端技術を惜しみなく搭載した高いAF性能</li>
          <li class="pointt">24-200mm レンズと新開発のイメージセンサー、画像処理エンジンによる高画質の実現</li>
          <li class="pointt">クリエイターを満足させる、強化された動画撮影機能</li>
        </ul>

        <v-row justify="center mt-10">
          <v-col cols="10" sm="6">
            <v-hover v-slot="{ hover }">
              <v-btn block :elevation="hover ? 8 : 2" color="#ff0000" class="main-product-btn" height="52px" href="/ec/pd/4548736106284">
                <span class="white--text text-sm-subtitle-1 text-center">ソニー DSC-RX100M7商品購入はこちら</span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

        <!--動画で見る-->
        <subText :textItem="'動画で見る！DSC-RX100M7の機能'" />
        <watchInVideo :src="'https://www.youtube.com/embed/lNn6pjlkTrI?rel=0'" :height="315" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー DSC-RX100M7 / DSC-RX100M6/ DSC-RX100M5A / キヤノン PowerShot G5 X Mark II 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー DSC-RX100M7 / DSC-RX100M6/ DSC-RX100M5A / キヤノン PowerShot G5 X Mark II 比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年8月30日発売</td>
                  <td>2018年6月22日発売</td>
                  <td>2018年7月13日発売</td>
                  <td>2019年8月1日発売</td>
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
                  <td>約2010万画素</td>
                  <td>約2010万画素</td>
                  <td>約2010万画素</td>
                  <td>約2010万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>Exmor RS CMOS</td>
                  <td>Exmor RS CMOS</td>
                  <td>Exmor RS CMOS</td>
                  <td>CMOS(積層型)</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>1インチ</td>
                  <td>1インチ</td>
                  <td>1インチ</td>
                  <td>1インチ</td>
                </tr>
                <tr>
                  <th>光学ズーム</th>
                  <td>8倍</td>
                  <td>8倍</td>
                  <td>2.9倍</td>
                  <td>4.2倍</td>
                </tr>
                <tr>
                  <th>レンズ焦点距離（３５mm換算）</th>
                  <td>24-200mm</td>
                  <td>24-200mm</td>
                  <td>24-70mm</td>
                  <td>24-120mm</td>
                </tr>
                <tr>
                  <th>レンズ開放F値</th>
                  <td>F2.8-4.5</td>
                  <td>F2.8-4.5</td>
                  <td>F1.8-2.8</td>
                  <td>F1.8-2.8</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約20.0コマ/秒</td>
                  <td>最高 約24.0コマ/秒</td>
                  <td>最高 約24.0コマ/秒</td>
                  <td>最高 約30.0コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/32000-30秒、バルブ</td>
                  <td>1/32000-30秒、バルブ</td>
                  <td>1/32000-30秒、バルブ</td>
                  <td>1/25600-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100-25600</td>
                  <td>125-25600</td>
                  <td>125-25600</td>
                  <td>125-12800</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>
                    位相差検出方式:357点<br />
                    コントラスト検出方式:425点
                  </td>
                  <td>
                    位相差検出方式:315点<br />
                    コントラスト検出方式:25点
                  </td>
                  <td>
                    位相差検出方式:315点<br />
                    コントラスト検出方式:25点
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>瞳検出AF</th>
                  <td>人物・動物に対応</td>
                  <td>人物のみ対応</td>
                  <td>人物のみ対応</td>
                  <td>‐</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    ファインダー使用時:約240枚 / 約120分<br />
                    モニター使用時:約260枚 / 約130分
                  </td>
                  <td>
                    ファインダー使用時:約220枚 / 約110分<br />
                    モニター使用時:約240枚 / 約120分
                  </td>
                  <td>
                    ファインダー使用時:約210枚 / 約105分<br />
                    モニター使用時:約220枚 / 約110分
                  </td>
                  <td>
                    ファインダー使用時:180枚<br />
                    モニター使用時:約230枚
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約101.6×58.1×42.8mm</td>
                  <td>約101.6×58.1×42.8mm</td>
                  <td>約101.6x58.1x42.8 mm</td>
                  <td>約110.9×60.9×46.0mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約275g</td>
                  <td>約274g</td>
                  <td>約272g</td>
                  <td>約316g</td>
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
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー DSC-RX100M7 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'ソニー DSC-RX100M7をご購入時、ソニー DSC-RX100M6を高価下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />
        </div>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ソニー DSC-RX100M7 外観画像'" />
          <p class="text-subtitle-1">ソニー DSC-RX100M7の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'https://shop.kitamura.jp/ts_rsc/1223/images'" :sm="6" />
        </div>

        <v-row justify="center mt-10">
          <v-col cols="10" sm="6">
            <v-hover v-slot="{ hover }">
              <v-btn block :elevation="hover ? 8 : 2" color="#ff0000" class="main-product-btn" height="52px" href="/ec/pd/4548736106284">
                <span class="white--text text-sm-subtitle-1 text-center">ソニー DSC-RX100M7商品購入はこちら</span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー DSC-RX100M7 作例'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/RX100M7/'" :count="4" />

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
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
export default Vue.extend({
  name: 'rx100m7',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    watchInVideo: WatchInVideo,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    exampleImages: ExampleImages,
  },
  setup: (props, context) => {
    document.title = 'SONY ソニーCyber-shot DSC-RX100M7 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー DSC-RX100M7 発売中！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー Cyber-shot DSC-RX100M6',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%E3%82%BD%E3%83%8B%E3%83%BC%20Cyber-shot%20DSC-RX100M6&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/3b5/5ae/e68/340/d5e/577/c35/0cc/74d/f4f/b4t/klb/cd2/m/L.jpg',
        txt: 'ソニー DSC-RX100M7',
        tradeInImg: '/ec/images2/special/camera/feature/sony/RX100M7/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      exampleImageList: ['/ec/images2/special/camera/feature/sony/RX100M7/4548736106284-5.jpg', '/ec/images2/special/camera/feature/sony/RX100M7/4548736106284-7.jpg', '/ec/images2/special/camera/feature/sony/RX100M7/4548736106284-6.jpg', '/ec/images2/special/camera/feature/sony/RX100M7/4548736106284-4.jpg'],
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
          href: 'ec/special/sale/shoppingcredit-campaign/',
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
        },
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
          path: 'ソニー DSC-RX100M7',
          disabled: true
        }
      ],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736106284', '4548736083264', '4548736086449', '4549292119114'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736106390',
        '4548736106284',
        '4548736105560',
        '4548736105553',
        '4905524984682',
        '4905524885903',
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
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
li.pointt {
    width: auto;
    height: auto;
    margin: 0px 0px 5px 20px;
    padding: 0px 0px 0px 0px;
    list-style-type: square;
    font-size: 14px;
    line-height: 180%;
}
</style>