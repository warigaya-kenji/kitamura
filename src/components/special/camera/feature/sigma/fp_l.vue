<template>
  <v-app>
    <div class="fp-l">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/feature/sigma/fpl/'" />

        <!-- ↓ 画像の読み込み -->
        <!-- 960px以上 -->
        <div class="newproduct pc top-img" v-if="$vuetify.breakpoint.mdAndUp">
          <h1 class="top-title white--text">
            シグマ fp L
            <p class="white--text">約6100万画素センサー搭載<br />世界最小・最軽量フルサイズミラーレス一眼</p>
          </h1>
        </div>
        <!-- 960px未満 -->
        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          class="mb-5"
          src="/ec/images2/special/camera/feature/sigma/fpl/sp_img_top.jpg"
          width="100%"
          height="auto"
          @error="noimage"
        />
        <!-- ↑ 画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <p class="darken-2 text-left">シグマ fp L</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right mb-2">
          <v-btn href="camera/feature/backnumber/" text class="black white--text kg-in" height="40px">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'「世界最小・最軽量」ポケッタブル・フルフレームのコンセプトはそのままに高解像度約6100万画素を実現'" />

        <subText :textItem="'シグマ fp L ボディ・ファインダーキット 価格・ご購入'" />

        <!--====== 価格・ご購入 ======-->
        <priceAndPurchase :mainProductList="mainProductList" />

        <!--====== 高価下取り ======-->
        <subText :textItem="'シグマ fp L ご購入時、高価下取り実施中！'" />

        <v-container class="credit mb-6">
          <v-row>
            <v-col class="text-center" cols="12" sm="4">
              <a href="https://www.net-chuko.com/sell/item-list.do?kind=&maker=&goodsname=0085126937300&pattern=2" target="_brank"
                ><v-img
                  src="https://shopimg.kitamura.jp/images/pd/acf/1eb/e9e/696/1d5/94b/578/c1a/843/2e2/90x/7ch/kkm/8/L.jpg"
                  max-width="100%"
                  height="auto"
                ></v-img
              ></a>
              <p>シグマ fp ボディ</p>
            </v-col>
            <v-col class="text-center mt-4" cols="12" sm="8">
              <p class="ma-0 pa-0 text-left font-small">
                シグマ fp Lをご購入時、<br />
                <a
                  href="https://www.net-chuko.com/sell/item-list.do?kind=&maker=&goodsname=0085126937300&pattern=2&_ga=2.79285718.330135400.1628123922-279164427.1627285160"
                  target="_blank"
                  >・シグマ fp ボディ</a
                ><br />
                を高価下取り実施中です
              </p>
              <a
                href="https://www.net-chuko.com/sell/item-list.do?kind=&maker=&goodsname=0085126937300&pattern=2&_ga=2.209422544.330135400.1628123922-279164427.1627285160"
              >
                <v-img src="/ec/images2/special/camera/feature/sigma/fp_l/bnr_shitadori_350-130.png" alt="高値下取り実施中" @error="noimage"></v-img>
              </a>
              <p></p>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ショッピングクレジット -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-container v-if="mainProductList.length != 0">
          <v-row class="mb-10">
            <v-col class="text-center" cols="4">
              <a :href="`/ec/pd/${mainProductList[0].janCode}`"
                ><img src="//shopimg.kitamura.jp/images/pd/a14/e5a/3b5/8c5/715/c61/596/1ee/140/2a4/653/nrh/iwd/r/M.jpg" width="80%"
              /></a>
              <br />
              <a :href="`/ec/pd/${mainProductList[0].janCode}`">{{ mainProductList[0].itemName }}</a
              ><br /><span class="red--text">{{ mainProductList[0].price }}</span
              >円(税込)
            </v-col>
            <v-col col="6">
              <p>
                分割払いなら一度にかかるご負担を軽減する事ができます。<br />
                ショッピングクレジットの分割払いなら、最大24回分割払いまで分割金利手数料を当店が負担致します。
              </p>
              <font size="-1">※2021年3月26日時点の価格です</font>
              <contingencyTable :numberOfTimes="'48'" :amount="'5,157'" :commission="'0'" />
            </v-col>
          </v-row>
          <v-row class="mb-10">
            <v-col class="text-center" cols="4">
              <a :href="`/ec/pd/${mainProductList[1].janCode}`"
                ><img src="//shopimg.kitamura.jp/images/pd/d32/dc5/4ec/dc2/621/c83/ccd/f6a/380/475/a8w/mxv/a9x/3/M.jpg" width="80%"
              /></a>
              <br />
              <a :href="`/ec/pd/${mainProductList[1].janCode}`">{{ mainProductList[1].itemName }}</a
              ><br /><span class="red--text">{{ mainProductList[1].price }}</span
              >円(税込)
            </v-col>
            <v-col col="6">
              <contingencyTable :numberOfTimes="'48'" :amount="'6,188'" :commission="'0'" />
              <div class="text-center">
                <v-btn color="#D73500" class="white--text" href="https://shop.kitamura.jp/sitemap/s_credit_01.html">
                  ショッピングクレジットについて詳細はこちら
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <!--比較-->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較しました。</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年4月16日</td>
                <td>2019年10月25日</td>
                <td>2020年9月25日</td>
                <td>2020年10月23日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約6100万画素</td>
                <td>約2460万画素</td>
                <td>約2420万画素</td>
                <td>約2420万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>35mm フルサイズ<br />裏面照射型ベイヤーCMOSセンサー</td>
                <td>35mm フルサイズ<br />裏面照射型ベイヤーCMOSセンサー</td>
                <td>35mm フルサイズ<br />CMOSセンサー</td>
                <td>35mmフルサイズ<br />Exmor R CMOSセンサー</td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>最高約10コマ/秒（電子シャッター）</td>
                <td>最高約18コマ/秒（電子シャッター）</td>
                <td>最高約7コマ/秒</td>
                <td>最高約10コマ/秒</td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>1/8000-30秒、バルブ</td>
                <td>1/8000-30秒、バルブ</td>
                <td>1/8000-60秒、バルブ</td>
                <td>1/4000-30秒、バルブ<br />※電子シャッター時1/8000-30秒</td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>ISO100-25600<br />（拡張感度ISO 6, 12, 25, 50, 51200, 102400）</td>
                <td>ISO100-25600<br />（拡張感度ISO 6, 12, 25, 50, 51200, 102400）</td>
                <td>ISO100-51200<br />（拡張感度ISO 50,102400,204800）</td>
                <td>ISO100-51200<br />（拡張: 下限ISO50、上限ISO204800）</td>
              </tr>
              <tr>
                <th>AF方式</th>
                <td>ハイブリッドAF（位相差AF+コントラストAF）</td>
                <td>コントラストAF</td>
                <td>コントラストAF</td>
                <td>ハイブリッドAF（位相差AF+コントラストAF）</td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>ビューファインダー別売り（EVF-11）※付属キットあり</td>
                <td>ビューファインダー別売り（LVF-11）</td>
                <td>0.39型 / 約236万ドット</td>
                <td>0.39型 / 約236万ドット</td>
              </tr>
              <tr>
                <th>液晶モニター</th>
                <td>3.15型 / 約210万ドット</td>
                <td>3.15型 / 約210万ドット</td>
                <td>3.0型 / 約184万ドット</td>
                <td>3.0型 / 約92万ドット</td>
              </tr>
              <tr>
                <th>静止画撮影可能枚数<br />(CIPA規格基準)</th>
                <td>約240枚</td>
                <td>約280枚</td>
                <td>約440枚</td>
                <td>約740枚</td>
              </tr>
              <tr>
                <th>連続動画撮影時</th>
                <td>約60分</td>
                <td>約70分</td>
                <td>約70分</td>
                <td>約140分</td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>電子式</td>
                <td>電子式</td>
                <td>撮像素子シフト方式5軸補正</td>
                <td>イメージセンサーシフト方式5軸補正</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>112.6×69.9×45.3mm</td>
                <td>112.6×69.9×45.3mm</td>
                <td>132.6×97.1×81.9mm</td>
                <td>124.0×71.1×59.7mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>約375g</td>
                <td>約370g</td>
                <td>約630g</td>
                <td>約424g</td>
              </tr>
              <tr>
                <th>カードスロット</th>
                <td>SDメモリーカード(UHS-II対応)</td>
                <td>SDメモリーカード(UHS-II対応)</td>
                <td>ダブルカードスロット<br />SDメモリーカード<br />(slot1:UHS-II対応)</td>
                <td>SDメモリーカード(UHS-II対応)</td>
              </tr>
              <tr>
                <th>動画記録方式</th>
                <td>4K/フルHD</td>
                <td>4K/フルHD</td>
                <td>4K/フルHD</td>
                <td>4K/フルHD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'シグマ fp L の特徴'" />
          <characteristic :characteristics="CharacteristicList" />
        </div>

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'シグマ fp L 価格・人気アクセサリー'" />
        <v-container>
          <v-row>
            <v-col cols="6" sm="4" md="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
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

        <!--↓ 外観画像ー-->
        <div id="images">
          <subText :textItem="'シグマ fp L 外観画像'" />
          <p class="text-subtitle-1">シグマ fp L の外観画像</p>
          <v-container>
            <v-row>
              <v-col cols="12" align="center">
                <v-img :src="`/ec/images2/special/camera/feature/sigma/fp_l/img_1.jpg`" max-width="100%" height="auto"> </v-img>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!--↓ SNSー-->
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import NaviBtn from '@/components/common/navi-btn.vue';
import SubText from '@/components/common/subtext.vue';
import Characteristic from '@/components/common/characteristic.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';

export default Vue.extend({
  name: 'sigma-fp_l',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: 'fp L 外観', href: '#images' }
      ],
      CharacteristicList: [
        {
          subtitle: '約6100万画素センサー搭載により高精細な描写と色彩表現を実現',
          contents: [
            'シグマ史上最高画素数となる約6100万画素裏面照射型ベイヤーセンサーを搭載。高画素ならではの高精細な描写と豊かな色彩表現を実現',
            'ローパスフィルターを搭載することで、モアレの発生を極小まで抑制',
            '高画素を活かし、静止画・動画共通で使えるクロップズーム機能を搭載。最大の5倍ズーム時でもデジタル補完による画像劣化無しのFHD解像度記録が可能'
          ]
        },
        {
          subtitle: '高精度コントラストAFに加え像面位相差AFも搭載し、快適なオートフォーカスを実現',
          contents: [
            '現行の高精度なコントラストAFに加え、速度に優れた像面位相差AFを採用',
            '静止画、動画ともにハイブリットAFにより高精度・高速かつ動体への追従も高い快適なAF撮影が可能'
          ]
        },
        {
          subtitle: 'カメラ起動中のUSB給電に対応。様々なシーンで長時間の使用が可能',
          contents: [
            '屋外などのコンセントがない環境でもモバイルバッテリーなどを使い給電しながら途切れなく撮影が可能',
            'Webカメラとして使用の際には、PCとUSB接続で映像・音声と同時に給電供給されるためACアダプター無しで長時間の使用が可能'
          ]
        }
      ],
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
          href: 'https://shop.kitamura.jp/sitemap/s_credit_01.html',
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
          path: 'SIGMA シグマ fp L',
          disabled: true
        }
      ],
      mainProductJanCode: ['0085126939038', '0085126939076'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['0085126939038', '0085126937300', '4549980624180', '4548736121614', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '0085126939038',
        '0085126939076',
        '0085126930394',
        '0085126937331',
        '0085126937348',
        '0085126937379',
        '0085126937355',
        '0085126937362',
        '4975981737596',
        '4975981756498',
        '4523052016639'
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

<style lang="scss">
.top-img {
  background-image: url(/ec/images2/special/camera/feature/fp_l/bg_top.jpg);
}
</style>