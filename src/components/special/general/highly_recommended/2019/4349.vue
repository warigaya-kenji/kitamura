<template>
  <v-app>
    <div class="highly-recommended-2019-4349">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">おすすめミラーレス キヤノン EOS M6 Mark II</h1>
        <router-link to="/ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2019/4357/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>
        <p class="pt-4">カメラ初心者～中級者におすすめ！ミラーレスカメラです</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン EOS M6 Mark II'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'本格的な撮影が可能な小型・軽量オールラウンドミラーレス'"
          :btntxt="'商品ページを見る'"
        />

        <div class="mt-8 pa-4">
          <!-- ↓ トピック -->
          <subText :textItem="'トピック＆まとめ'" />
          <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl">
            小型軽量ながら約3250万画素を誇る、本格APS-Cセンサーの新しい定番カメラ！<br />
            高画素でありながら最高14コマ/秒の高速連写で動く被写体にも最適!
            瞳AFやサイレントシャッターも搭載しているため、上級者もメインで使えるミラーレスカメラです
          </v-sheet>
        </div>
        <br />

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓おすすめ理由１ -->
        <subText :textItem="'おすすめの理由その１'" id="r01" />
        <p class="my-2 pa-2">高速連写や瞳AFなどEOSならではの本格的な撮影機能を備えながらも軽量コンパクトなボディなので、お出かけ時のお供に最適です</p>

        <!-- ↓おすすめ理由２ -->
        <subText :textItem="'おすすめの理由その2'" id="r02" />
        <p class="my-2 pa-2">高精細はもちろん高感度撮影にも強いので夜景やイルミネーションなどの暗いシーンでの撮影でもノイズの少ないクリアな撮影が可能です</p>

        <!--比較-->
        <div id="r03">
          <subText :textItem="'キヤノン EOS M6 Mark II と他比較してみました'" />
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
                  <th>撮像素子</th>
                  <td>CMOS</td>
                  <td>DXフォーマットCMOS</td>
                  <td>Exmor CMOSセンサー</td>
                  <td>X-Trans CMOS 4</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>APS-C</td>
                  <td>APS-C</td>
                  <td>APS-C</td>
                  <td>APS-C</td>
                </tr>
                <tr>
                  <th>マウント</th>
                  <td>キヤノン EF-Mマウント</td>
                  <td>ニコン Zマウント</td>
                  <td>ソニー Eマウント</td>
                  <td>フジフイルム Xマウント</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td>約14コマ/秒</td>
                  <td>約11コマ/秒</td>
                  <td>約11コマ/秒</td>
                  <td>約30コマ/秒</td>
                </tr>

                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 約3250万画素のCMOSセンサーと、映像エンジンDIGIC 8の組み合わせにより、高画質を実現。従来機種と比較して、...<router-link
                      to="/ec/pd/4549292136876"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 小型・軽量ボディーで高い描写力と多彩な表現力を実現しながら、小型・軽量ボディーの中にも使いやすさ.<router-link
                      to="/ec/pd/4960759903617"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 像面位相差検出AFとコントラスト検出AFを併用するファストハイブリッドAFシステムに加え、高速処理を...<router-link
                      to="/ec/pd/4548736092051"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 383gの小型軽量ボディに、最新の「X-Trans CMOS 4」センサー(APS-Cサイズ、ローパスフィルターレス)と....<router-link
                      to="/ec/pd/4548736092051"
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
        <subText :textItem="'ShaSha：実際に使ってみました！キヤノン EOS M6 Mark II'" id="r04" />
        <shasha
          :txt="'最高の光学性能を誇るレンズなので、より良さをお伝えできるように、ボディも最高クラスのカメラα9につけて試してきました。・・・・...'"
          :href="'https://shasha.kitamura.jp/article/469262395.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=8809298883683'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4349/shashabnr.jpg'"
        />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS M6 Mark II 関連商品一覧'" id="r05" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ キタムラなら最大48回 -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'3,558'" :targetDate="''" :isCreditBtn="true" />

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン EOS M6 Mark II'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'本格的な撮影が可能な小型・軽量オールラウンドミラーレス'"
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

export default Vue.extend({
  name: 'highly-recommended-2019-4349',
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
  },
  setup: () => {
    document.title = 'イチオシ！キヤノン EOS M6 MarkII | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！カメラ初心者・中級者におすすめなミラーレスカメラ、キヤノンEOS M6 MarkII')
    const state = reactive({
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
          path: 'キヤノン EOS M6 Mark II',
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
        { naviItem: 'キヤノン EOS M6 Mark II とキヤノン EF600mm F4L IS III USM他比較', href: '#r03' },
        { naviItem: 'ShaSha：実際に使ってみました！キヤノン EOS M6 Mark II 作例', href: '#r04' },
        { naviItem: '関連商品一覧', href: '#r05' }
      ],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292136876', '4960759903617', '4548736092051', '4547410399660'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      productJanCodeList: [
        '4961607734100',
        '4549292136944',
        '4549292136876',
        '4549292136999',
        '4549292136494',
        '4957792149249',
        '4957792149270',
        '4957792149232',
        '4957792149263',
        '4549292136913',
        '4549292136401',
        '4957638817080',
        '4549292125405',
        '4975981735394',
        '4961607255339',
        '4549292087864',
        '4549292059434',
        '4549292063127',
        '4549292065800',
        '4549292065732'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      mainProductJanCode: ['4549292136876'],
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
