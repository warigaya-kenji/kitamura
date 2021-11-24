<template>
  <v-app>
    <div class="batis">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <p class="mb-0">カールツァイス ZEISS Batisレンズ 特設ページ</p>

        <!-- ↓top image -->
        <topTitleImg :pcBackgroundImg="'/ec/images2/special/camera/lens/batis/bn00.png'" :spBackgroundImg="'/ec/images2/special/camera/lens/batis/bn00.png'" />
        <!-- ↑top image -->

        <h2 class="mt-5 mb-4 font-weight-bold tx-22 tx-zi">新しい時代のためのレンズ！</h2>

        <v-row>
          <v-col cols="12" sm="6" class="mb-5 pa-4">
            <p class="tx-16 lin18">
              ZEISS Batisレンズは、<a
                href="/ec/list?narrow18=0&keyword=&category=ミラーレス一眼%3Aセンサーサイズで選ぶ%3Aフルサイズ以上&path=ミラーレス一眼%3Aセンサーサイズで選ぶ%3Aフルサイズ以上&s1%5B%5D=ソニー"
                >ソニー フルサイズミラーレスカメラシリーズ</a
              >のために開発されました。<br />
              新時代のフルサイズミラーレスカメラに対応し、性能では妥協しない、コンパクトで軽量なレンズシリーズ。<br />
            </p>
            <v-row v-if="$vuetify.breakpoint.mdAndUp">
              <v-col cols="6">
                <v-img
                  src="https://shopimg.kitamura.jp/images/pd/c70/f4e/cb7/aa6/70d/6bb/fb3/e03/6f4/136/abw/t43/9jd/l/M.jpg"
                  alt="ソニーフルサイズミラーレスカメライメージ"
                  max-width="199px"
                  max-height="199px"
                />
              </v-col>
              <v-col cols="6">
                <v-img
                  src="https://shopimg.kitamura.jp/images/pd/578/e45/6d9/1fc/f43/a0c/101/286/cf6/387/93p/sqp/uyc/5/M.jpg"
                  alt="カールツァイスBatisレンズイメージ"
                  max-width="199px"
                  max-height="199px"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" class="mb-5 pa-4">
            <p class="tx-16 lin18">
              高速で便利なオートフォーカスに加え防塵防滴効果があり、フォトグラファーの遊び心とクリエイティビティを刺激します。<br />
              大口径 ZEISS Batisシリーズは全く新しいレンズ設計で優れた画像パフォーマンスを提供します。<br />
              125年超の経験を持つカメラレンズ製造技術と、伝説のZEISS
              T*反射防止コーティングの結晶であるBatisレンズは、ZEISSならではの描写力で一瞬一瞬を捉えます。
            </p>
          </v-col>
        </v-row>

        <h2 class="mt-5 mb-4 font-weight-bold tx-22 tx-zi">キタムラなら最大48回まで分割金利手数料0円！</h2>

        <v-row>
          <v-col cols="12" sm="6" class="mb-5 pa-4">
            <p class="tx-16 lin18">
              分割払いなら一度にかかるご負担を軽減できます♪<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
          </v-col>
          <v-col cols="12" sm="6" class="mb-5 pa-4">
            <p class="tx-16 lin18">
              <router-link to="/ec/guide/s_credit_01">
                <v-img
                  src="https://shopimg.kitamura.jp/images/banner/1486.gif"
                  alt="ショッピングクレジット"
                  max-width="350px"
                  max-height="130px"
                  class="kg-usu hover"
                ></v-img>
              </router-link>
            </p>
          </v-col>
        </v-row>

        <v-container>
          <v-row>
            <v-col class="pa-2 float-left ba-gr" cols="12">
              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="lin12e tx-18 tx-aka tx-no">分割払い例①</h4>
                <div class="s-credit mt-1">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>139,482<span>円</span></td>
                        <td>40<span>回</span></td>
                        <td class="txt-org"><span>約</span>3,488<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>

              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="lin12e tx-18 tx-aka tx-no">分割払い例②</h4>
                <div class="s-credit mt-1">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>199,260<span>円</span></td>
                        <td>48<span>回</span></td>
                        <td class="txt-org"><span>約</span>4,152<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <p class="mt-2 text-body-2">
          ※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます
        </p>
        <div style="clear: both"></div>

        <h2 class="mt-12 mb-4 font-weight-bold tx-22 tx-zi">Batisレンズラインナップ</h2>

        <!--↓ 価格・人気アクセサリー-->
        <priceAndPopular :productDetailList="productDetailList" />
        <br />
        <br />

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <p class="mb-0">おすすめの特集</p>
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';

export default Vue.extend({
  name: 'batis',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPopular: PriceAndPopular,
  },
  setup: (props, context) => {
    document.title = 'カールツァイス ZEISS Batisレンズ 特設ページ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '新しい時代のためのレンズとして、ソニーフルサイズミラーレスカメラシリーズのために開発されたカールツァイス Batisレンズをご紹介')
    const state = reactive({
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
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
          path: 'カールツァイス ZEISS Batisレンズ 特設ページ',
          disabled: true
        },
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4047865800686', '4047865800662', '4047865800648', '4047865800617', '4047865800600'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
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
.tx-zi {
    color: #141e8d;
}
.tx-22 {
    font-size: 22px;
}
.lin18 {
    line-height: 1.8em;
}
.tx-16 {
    font-size: 16px;
}
.kg-usu {
    box-shadow: 0 4px 5px 0px rgb(134 134 134 / 60%);
}
.txt-org {
    color: #dd6717;
  }
</style>