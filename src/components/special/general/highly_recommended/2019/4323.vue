<template>
  <v-app>
    <div class="highly-recommended-2019-4323">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">おすすめ交換レンズ ソニー FE 600mm F4 GM OSS [SEL600F40GM]</h1>
        <titleImage></titleImage>
        <p class="pt-4">スポーツ・野生動物などのプロ向け交換レンズ！</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ソニー FE 600mm F4 GM OSS [SEL600F40GM]'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'クラス世界最軽量を実現 スポーツ・野生動物などのプロ向け 大口径超望遠単焦点レンズGマスター'"
          :btntxt="'商品ページを見る'"
        />

        <div class="mt-8 pa-4">
          <!-- ↓ トピック -->
          <subText :textItem="'トピック＆まとめ'" />
          <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl">
            見た目の存在感とは裏腹に新規の光学設計でクラス最軽量を実現<br />
            高い機動力に加え、防塵・防滴に配慮した設計で過酷な屋外撮影でも安心して使用可能な超望遠レンズです
          </v-sheet>
        </div>
        <br />

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓おすすめ理由１ -->
        <subText :textItem="'おすすめの理由その１'" id="r01" />
        <p class="my-2 pa-2">クラス最軽量の重量と最適な重量バランスで大口径超望遠レンズでありながらも軽快、俊敏な撮影が可能です</p>

        <!-- ↓おすすめ理由２ -->
        <subText :textItem="'おすすめの理由その2'" id="r02" />
        <p class="my-2 pa-2">最新カメラボディのスピード性能を最大限発揮するXD (extreme dynamic) リニアモーターを搭載し、高速かつ高精度なAFを実現！</p>

        <!--比較-->
        <div id="r03">
          <subText :textItem="'ソニー FE 600mm F4 GM OSS [SEL600F40GM]とキヤノン EF600mm F4L IS III USM他比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">
                    <router-link :to="`/ec/pd/${product.janCode}`">
                      {{ product.itemName }}
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <router-link :to="`/ec/pd/${product.janCode}`">
                      <v-img
                        :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                        :max-width="$vuetify.breakpoint.mdAndUp ? '174' : '59'"
                        height="auto"
                        class="hover"
                      ></v-img>
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>レンズ焦点距離（３５mm換算）</th>
                  <td>600mm</td>
                  <td>600mm</td>
                  <td>600mm</td>
                </tr>
                <tr>
                  <th>レンズF値</th>
                  <td>F4</td>
                  <td>F4</td>
                  <td>F4</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>450cm</td>
                  <td>420cm</td>
                  <td>440cm</td>
                </tr>
                <tr>
                  <th>フィルターサイズ</th>
                  <td>40.5mm</td>
                  <td>52mm</td>
                  <td>40.5mm</td>
                </tr>
                <tr>
                  <th>マウント</th>
                  <td>ソニー FEマウント</td>
                  <td>キヤノン EFマウント</td>
                  <td>ニコン Fマウント</td>
                </tr>
                <tr>
                  <th>質量（バッテリー、キットレンズ含む）</th>
                  <td>3040g</td>
                  <td>3050g</td>
                  <td>3810g</td>
                </tr>
                <tr>
                  <th>タイプ</th>
                  <td>望遠レンズ</td>
                  <td>望遠レンズ</td>
                  <td>望遠レンズ</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 XDリニアモーターによる高速・高精度・高追従かつ静粛・低振動なAF駆動...<router-link to="/ec/pd/4548736099685"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 定評のある従来機種同等の高画質や耐久性・堅牢性を維持しながら従来機種と比べて、大幅な軽量化を.<router-link
                      to="/ec/pd/4549292136364"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 蛍石レンズ2枚を採用し従来製品の「AF-S NIKKOR 600mm f/4G ED VR」よりも約25％(約1,250g)軽量化...<router-link
                      to="/ec/pd/4960759029287"
                      >続きを読む</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：実際に使ってみました！ソニー FE 600mm F4 GM OSS [SEL600F40GM]'" id="r04" />
        <shasha
          :txt="'最高の光学性能を誇るレンズなので、より良さをお伝えできるように、ボディも最高クラスのカメラα9につけて試してきました。・・・・...'"
          :href="'https://shasha.kitamura.jp/article/467453923.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=8809298883683'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4323/shashabnr.jpg'"
        />

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'ShaSha：ソニー FE 600mm F4 GM OSS [SEL600F40GM]作例'" />
          <v-container class="pa-0">
            <v-row>
              <v-col cols="12" sm="6" v-for="(n, i) in 4" :key="i">
                <v-img :src="`${exampleImagesPath}photo_${n}.jpg`" max-width="100%" height="auto"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー FE 600mm F4 GM OSS [SEL600F40GM]関連商品一覧'" id="r05" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ キタムラなら最大60回 -->
        <subText :textItem="'キタムラなら最大60回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'26,895'"
          :targetDate="''"
          :numberOfTimes="'60'"
          :maximumInstallmentPayment="'60'"
          :isMax60Txt="true"
          :isCreditBtn="true"
        />

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ソニー FE 600mm F4 GM OSS [SEL600F40GM]'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'クラス世界最軽量を実現 スポーツ・野生動物などのプロ向け 大口径超望遠単焦点レンズGマスター'"
          :btntxt="'商品ページを見る'"
        />

        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集を表示したい場合 -->
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SubText from '@/components/common/special/subtext.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';

export default Vue.extend({
  name: 'highly-recommended-2019-4323',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha,
    urlcopy: Urlcopy,
    splitContent: SplitContent,
    titleImage: TitleImage,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！ソニー FE 600mm F4 GM OSS | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！APS-Cミラーレスカメラユーザー・星景撮影や風景撮影におすすめの交換レンズです')
    const state = reactive({
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2019/4323/',
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'ソニー FE 600mm F4 GM OSS [SEL600F40GM]',
          disabled: true
        }

      ],
      // ↓ ---- 話題の新製品バックナンバー＆おすすめの特集 ----
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
          alt: 'トクトク買取',
          target: 'blank'
        }
      ],
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r01' },
        { naviItem: 'おすすめの理由その２', href: '#r02' },
        { naviItem: 'ソニー FE 600mm F4 GM OSS [SEL600F40GM]とキヤノン EF600mm F4L IS III USM他比較', href: '#r03' },
        { naviItem: 'ShaSha：実際に使ってみました！ソニー FE 600mm F4 GM OSS [SEL600F40GM]作例', href: '#r04' },
        { naviItem: '関連商品一覧', href: '#r05' }
      ],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736099685', '4549292136364', '4960759029287'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      productJanCodeList: [
        '4548736100626',
        '4549292136364',
        '4548736084360',
        '4548736038615',
        '4548736038462',
        '4960759029287',
        '4902520009609',
        '4977187330045'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      mainProductJanCode: ['4548736099685'],
      mainProductList: [] as Array<ProductDetail>
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
