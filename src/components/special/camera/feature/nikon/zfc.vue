<template>
  <v-app>
    <div class="zfc">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ サンプル：画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/nikon/zfc/bg_top.jpg" @error="noimage" />

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold"
            >Z fc ボディ・Z fc 16-50 VR SLレンズキット好評発売中！<br />Z fc 28mm f/2.8 Special Edition キットご予約受付中！</span
          >
        </div>

        <div class="darken-2 text-left">
          <span>ニコン Z fc</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'撮っている時間も持っている時間も楽しくなるクラシックデザインミラーレスカメラ「Z fc」'" />
        <p class="caption">多くの人々に愛されたニコンFM2にインスパイアされた、精緻に作り込まれた外観デザインを身にまとったDXフォーマットミラーレスカメラ</p>

        <subText :textItem="'ニコン Z fc 価格・ご購入'" />

        <!--====== ニコン Z fc ボディ ======-->
        <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in mainProductList" :key="product">
          <v-container>
            <v-row>
              <v-col class="text-center" cols="12" sm="5">
                <router-link :to="`/ec/pd/${product.janCode}`"><img :src="product.images[0].imagePath" class="mx100pr" /></router-link>
                <p>
                  <a :href="`/ec/pd/${product.janCode}`">{{ product.itemName }}</a>
                </p>
              </v-col>
              <v-col class="text-center mt-4" cols="12" sm="6">
                <p class="text-h6">
                  価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span class="font-small">(税込)</span>
                </p>
                <v-btn
                  elevation="3"
                  x-large
                  dark
                  color="orange lighten-1"
                  class="text-h5 font-weight-bold accent-4"
                  height="55px"
                  width="65%"
                  :href="`/ec/pd/${product.janCode}`"
                >
                  <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                  ご購入はこちら
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <a href="https://www.nikon-image.com/event/campaign/zfc_premiumexterior/">
          <img src="https://shopimg.kitamura.jp/images/banner/8504.jpg" />
        </a>

        <!--====== 高価下取り ======-->
        <subText :textItem="'ニコン Z fc 28mm f/2.8 Special Edition キット ご購入時、高価下取り実施中！'" />

        <v-container class="credit mt-2 mb-4 float-left">
          <v-row>
            <v-col class="text-center" cols="12" sm="5">
              <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759141002&pattern=1">
                <img src="https://shopimg.kitamura.jp/images/pd/bb7/625/a35/d8f/953/5c6/1a5/27e/9b7/e04/f9e/7wu/vmp/d/M.jpg" width="70%"
              /></a>
              <p>
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759141002&pattern=1">ニコン Df ボディ</a>
              </p>
            </v-col>
            <v-col class="text-center mt-4" cols="12" sm="7">
              <p class="ma-0 pa-0 text-left font-small">
                ニコン Z fc 28mm f/2.8 Special Edition キット をご購入時、<br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759141002&pattern=1" target="_blank">・ニコン Df ボディ</a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759903617&pattern=1" target="_blank">・ニコン Z 50 ボディD</a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759146441&pattern=1" target="_blank">・ニコン D500 ボディ</a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759149084&pattern=1" target="_blank">・ニコン D7500 ボディ</a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759145604&pattern=1" target="_blank">・ニコン D7200 ボディ</a><br />
                を買取査定額より<b
                  ><font color="#bf1a20"><font size="+2">20％UP</font></font></b
                >で下取り実施中です<br />
                ※店頭買取のみが対象です
              </p>
              <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960759141002&pattern=1">
                <img src="/ec/images2/special/camera/feature/nikon/zfc/bnr_shitadori_350-130" alt="高値下取り実施中" @error="noimage" />
              </a>
              <p></p>
            </v-col>
          </v-row>
        </v-container>
        <!--====== 高価下取り ======-->

        <subText :textItem="'キタムラなら48回まで分割金利手数料0円！'" />
        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4960759906311"
              ><img src="//shopimg.kitamura.jp/images/pd/a7b/80f/e63/346/a73/53a/3a7/2e5/cb0/55c/e95/g52/57m/2/M.jpg" width="80%"
            /></a>
            <br />
            <a href="ec/pd/4960759906311">ニコン Z fc ボディ</a><br /><span class="red--text">{{}}</span>円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年7月1日時点の価格です</font>
            <contingencyTable :numberOfTimes="'36'" :amount="'3,245'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4960759906335"
              ><img src="//shopimg.kitamura.jp/images/pd/ef5/034/215/d4e/e54/ad6/c8d/fbf/065/9ff/c88/9qe/7n1/l/M.jpg" width="80%"
            /></a>
            <br />
            <a href="ec/pd/4960759906335">ニコン Z fc 16-50 VR SLレンズキット</a><br /><span class="red--text">{{}}</span>円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2021年7月1日時点の価格です</font>
            <contingencyTable :numberOfTimes="'42'" :amount="'3,206'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4960759906328"
              ><img src="//shopimg.kitamura.jp/images/pd/618/afd/c16/e2f/37c/450/60b/b22/0f3/058/d00/1ft/31q/r/M.jpg" width="80%"
            /></a>
            <br />
            <a href="ec/pd/4960759906328">ニコン Z fc 28mm f/2.8 Special Edition キット</a><br /><span class="red--text">{{}}</span>円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2021年7月1日時点の価格です</font>
            <contingencyTable :numberOfTimes="'42'" :amount="'3,418'" :commission="'0'" />
            <div class="text-center">
              <v-btn
                elevation="3"
                x-large
                dark
                color="red"
                class="accent-4"
                height="40px"
                width="85%"
                :href="`https://shop.kitamura.jp/sitemap/s_credit_01.html`"
              >
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!--比較-->
        <subText :textItem="'ニコン Z fc/ Z 50 / オリンパス PEN E-P7 / フジフイルム X-S10'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">ニコン Z fc/ Z 50 / オリンパス PEN E-P7 / フジフイルム X-S10 を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td>ニコン Z fc</td>
                <td>ニコン Z 50</td>
                <td>オリンパス PEN E-P7</td>
                <td>フジフイルム X-S10</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年7月23日<br />28mm f/2.8 Special Edition キット発売日未定</td>
                <td>2019年11月22日</td>
                <td>2021年6月25日</td>
                <td>2020年11月19日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td class="price red--text">&yen;116,820<span class="tx-10p">（税込）</span></td>
                <td class="price red--text">&yen;104,670<span class="tx-10p">（税込）</span></td>
                <td class="price red--text">&yen;84,150<span class="tx-10p">（税込）</span></td>
                <td class="price red--text">&yen;117,594<span class="tx-10p">（税込）</span></td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約2088万画素</td>
                <td>約2088万画素</td>
                <td>約2030万画素</td>
                <td>約2610万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>23.5×15.7mm（ニコンDXフォーマット）<br />CMOSセンサー</td>
                <td>23.5×15.7mm（ニコンDXフォーマット）<br />CMOSセンサー</td>
                <td>17.3×13.0mm4/3型（4/3型 ）<br />Live MOSセンサー</td>
                <td>23.5mm×15.6mm（APS-Cサイズ）<br />X-Trans CMOS 4センサー</td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>約5コマ/秒</td>
                <td>約5コマ/秒</td>
                <td>約8.7コマ/秒</td>
                <td>約8コマ/秒</td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>1/4000秒～30秒、バルブ</td>
                <td>1/4000秒～30秒、バルブ</td>
                <td>1/4000～60秒、バルブ、ライブタイム、ライブコンポジット</td>
                <td>1/4000秒～15分、バルブ</td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>ISO100～51200<br />(拡張時ISO204800)</td>
                <td>ISO100～51200<br />(拡張時ISO204800)</td>
                <td>LOW（約100相当）～25600</td>
                <td>ISO160～12800<br />拡張ISO80/100/125/25600/51200</td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>0.39型/約236万ドット（視野率約100%）</td>
                <td>0.39型/約236万ドット（視野率約100%）</td>
                <td>－</td>
                <td>0.39型/約236万ドット（視野率約100%）</td>
              </tr>
              <tr>
                <th>液晶モニター</th>
                <td>3.0型/約104万ドット<br />バリアングル式</td>
                <td>3.2型/約104万ドット<br />チルト式</td>
                <td>3.0型/約104万ドット<br />チルト式</td>
                <td>3.0型/約104万ドット<br />バリアングル式</td>
              </tr>
              <tr>
                <th>静止画撮影可能枚数<br />(CIPA規格基準)</th>
                <td>ファインダー使用時：約310コマ<br />画像モニター使用時：約360コマ</td>
                <td>ファインダー使用時：約280コマ<br />画像モニター使用時：約320コマ</td>
                <td>約360枚</td>
                <td>約325枚</td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>レンズ内手振れ補正</td>
                <td>レンズ内手振れ補正</td>
                <td>センサーシフト方式5軸補正</td>
                <td>センサーシフト方式5軸補正</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>約134.5×93.5×43.5mm</td>
                <td>約126.5ｘ93.5ｘ60.0mm</td>
                <td>約118.3ｘ68.5ｘ38.1mm</td>
                <td>約126.0ｘ85.1ｘ65.4mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>約390g</td>
                <td>約395g</td>
                <td>289g</td>
                <td>415g</td>
              </tr>
              <tr>
                <th>カードスロット</th>
                <td>シングルスロット<br />SDメモリーカード</td>
                <td>シングルスロット<br />SDメモリーカード</td>
                <td>シングルスロット<br />SDメモリーカード</td>
                <td>シングルスロット<br />SDメモリーカード(UHS-I 対応)</td>
              </tr>
              <tr>
                <th>動画記録方式</th>
                <td>4K/フルHD</td>
                <td>4K/フルHD</td>
                <td>4K/フルHD/HD</td>
                <td>4K/フルHD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn elevation="3" class="black darken-4 white--text" height="70px" width="50%" :href="`https://www.nikon-image.com/sp/zfc/`"
            >ニコン Z fc<br />メーカーサイトで詳しく見る</v-btn
          >
        </div>

        <!--特徴-->
        <subText :textItem="'ニコン Z fc の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'ニコン Z fc 価格/人気アクセサリー'" />
        <v-container>
          <v-row>
            <v-col cols="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
              <a :href="`/ec/pd/${productDetail.janCode}`"><img :src="productDetail.images[0].imagePath" class="mx100pr" /></a>
              <p class="font-small blue--text mb-2 height-20">
                <a :href="`/ec/pd/${productDetail.janCode}`">{{ productDetail.itemName }}</a>
              </p>
              <p class="mt-2">
                価格:<span class="red--text font-small">&yen;{{ productDetail.price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
            </v-col>
          </v-row>
        </v-container>
        <!--価格・人気アクセサリー-->

        <!--外観画像ー-->
        <subText :textItem="'ニコン Z fc 外観画像'" />
        <p class="text-subtitle-1">ニコン Z fc の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 4" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/nikon/zfc/img_${n}.jpg`"> </v-img>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ニコン Z fc 作例画像'" />
        <p class="text-subtitle-1">▼ニコン Z fc 作例</p>
        <!-- <exampleImages :imagesData="exampleImageList" /> -->
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="ma-0 pa-0" v-for="n in 10" :key="n">
              <a :href="`/ec/images2/special/camera/feature/nikon/zfc/pic_${n}.jpg`"
                ><img class="mb-5" :src="`/ec/images2/special/camera/feature/nikon/zfc/pic_${n}.jpg`" width="90%"
              /></a>
            </v-col>
          </v-row>
        </v-container>

        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import ContingencyTable from '@/components/common/special/contingency-table.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'zfc',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    contingencyTable: ContingencyTable,
    characteristic: Characteristic,
    // exampleImages: ExampleImages
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' },
        { naviItem: '作例画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'ミラーレスとニコンの伝統的なデザインの融合',
          contents: [
            'ボディーのサイズだけでなく、ペンタプリズム部のデザインや黒とシルバーの色バランスなどもFM2に近い印象で再現',
            'モニター背面にはフィルムカメラを想起させる革シボ風の加工を採用。一つ一つのダイヤルは、アルミ削りだしで丁寧に作り込み、天面の表示は全て刻印',
            '1970-80年代のカメラに使用されていたNikonの刻印文字や、円形の接眼目当てを採用。細部までこだわり抜いたデザイン'
          ]
        },
        {
          subtitle: '指先に機械の感触を感じながら楽しみながら撮影できる操作感',
          contents: [
            'ボディーの天面にシャッタースピード、ISO感度、露出補正の３つのダイヤル、そしてF値を表示する小窓を搭載。一目で基本的なカメラ設定を視認することが可能',
            '手応えのあるダイヤルで、一つ一つの設定を丁寧に調節し、シャッターをきるという撮影スタイルが楽しめる操作感を実現'
          ]
        },
        {
          subtitle: '薄型・⼩型軽量システムに充実した基本性能と高画質を凝縮',
          contents: [
            '標準キットレンズで600mlのペットボトルと、ほぼ同等の重さ。いつでも持ち歩けるので、より気軽に、特別な瞬間を切り取ることが可能',
            '動画撮影時にも人物、犬、猫の顔や瞳を検出する瞳AFと動物AFが可能。静止画同様［オートエリアAF］［ワイドエリアAF］に対応',
            '高感度性能が優れた撮像素子と、上位機種にも採用している画像処理エンジン EXPEED 6のノイズ低減よって、静止画、動画を問わずノイズを効果的に抑制。細部や質感も鮮明に描写が可能'
          ]
        }
      ],
      exampleImageList: {
        path: '/ec/images2/special/camera/feature/nikon/zfc/',
        numberOfTimes: 10
      },
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/sitemap/s_credit_01.htm',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ]
    };
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
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
          path: 'ニコン Z fc',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759906311', '4960759906335', '4960759906328'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759906311',
        '4960759906328',
        '4960759906335',
        '4960759909268',
        '4960759909275',
        '4960759903969',
        '4955478183037',
        '4960759148940',
        '4955478182603',
        '4960759909053',
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