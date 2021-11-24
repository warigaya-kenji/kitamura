<template>
  <div class="exus">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!--section-->
        <section>
          <div class="kanban">
            <h1>紅葉の撮影におすすめレンズフィルター</h1>
            <div>
              風景写真で空の透き通るような青さや雲の白さを表現したい方<br />
              紅葉や新緑などを色鮮やかに描写したい方におすすめです
            </div>
          </div>
          <div class="mt-4">
            <a v-scroll-to="'#feature'" class="hover">
              <v-img
                class="mx-auto"
                alt="風景写真「秋の表現の決め手はPLフィルター。写真家の思いを満たすEXUS」辰野 清"
                src="/ec/images2/special/camera/lensfilter/exus/bnr_720-.jpg"
              >
              </v-img>
            </a>
          </div>
          <p class="mt-4">
            紅葉撮影・風景撮影におすすめなレンズフィルターはPLレンズフィルターです。PLフィルターの効果には、色彩コントラスト効果と反射除去効果があります。フィルター使用の作例と共にその効果・基本的な使い方のご紹介。PLフィルターをもってお気に入りの写真を撮影しましょう
          </p>
          <v-row class="nbtn">
            <v-col class="text-center white--text" cols="12" sm="4">
              <a v-scroll-to="'#caa'" class="hover">
                紅葉撮影におすすめPLフィルター
                <span class="d-block">色彩コントラスト効果</span>
              </a>
            </v-col>
            <v-col class="text-center white--text" cols="12" sm="4">
              <a v-scroll-to="'#cab'" class="hover">
                紅葉撮影におすすめPLフィルター
                <span class="d-block">反射除去効果</span>
              </a>
            </v-col>
            <v-col class="text-center white--text" cols="12" sm="4">
              <a v-scroll-to="'#cac'" class="hover">
                紅葉撮影におすすめPLフィルター
                <span class="d-block">おすすめ商品一覧</span>
              </a>
            </v-col>
          </v-row>
        </section>
        <!--section-->
        <section id="caa">
          <h2>紅葉撮影におすすめPLフィルター 色彩コントラスト効果</h2>
          <v-sheet class="pa-4 rounded-lg" outlined>
            <p>
              PLフィルターを使用した写真のほうが青空が濃いブルーになり、樹葉の色もくっきりと浮かび上がり、メリハリのある写真になります。空気中のチリやホコリによる乱反射で空が白っぽく写ってしまうのですが、PLフィルターの効果で、乱反射を押さえることができ、コントラストがはっきりとした写真が撮れます。
            </p>
          </v-sheet>
          <h3>PLフィルタ作例</h3>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="PLフィルタ | 作例" src="/ec/images2/special/camera/lensfilter/exus/image02.jpg"> </v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="PLフィルタ | 作例" src="/ec/images2/special/camera/lensfilter/exus/image03.jpg"> </v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="PLフィルタ | 作例" src="/ec/images2/special/camera/lensfilter/exus/image06.jpg"> </v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="PLフィルタ | 作例" src="/ec/images2/special/camera/lensfilter/exus/image07.jpg"> </v-img>
            </v-col>
          </v-row>
          <h3>PLフィルターの使い方。フィルターを付けただけでは効果ゼロ！？</h3>
          <v-row>
            <v-col cols="12" sm="6">
              <p>
                PLフィルターは付けただけでは効果は発揮しませんのでお気をつけください。そして、レンズに保護フィルターをつけている場合は外してから、PLフィルターを付けましょう。PLフィルターは独自に回転する「回転構造」になっているので他のフィルターと重ね付けするとうまく外せなくなる可能性もあるそうです。
              </p>
              <p>
                PLフィルターはレンズに取り付けた後、前枠だけを回転させることで、PLフィルターの効果を強めたり弱めたりすることができます。PLフィルターの効果を発揮して、色彩コントラストを高めてください。<br />
                空をより青く撮影するには太陽の位置が重要です。太陽に対して９０°の方向が最も効果が高いといわれています。
              </p>
              <p>【９０°の方向出し方】</p>
              <ol>
                <li>まず太陽を背にしましょう。</li>
                <li>逆光や曇天時の撮影では効果はわずかです。</li>
                <li>太陽の位置を確認しましょう</li>
                <li>カメラの角度を調整しましょう</li>
              </ol>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="90度撮影 | 図" src="/ec/images2/special/camera/lensfilter/exus/image08.jpg"> </v-img>
            </v-col>
          </v-row>
        </section>
        <!--section-->
        <section id="cab">
          <h2>紅葉撮影におすすめPLフィルター 反射除去効果</h2>
          <v-sheet class="pa-4 rounded-lg" outlined>
            <p>
              PLフィルターは反射をコントロールするフィルターですので、水面越しの水中や水面に映る風景、水に濡れた葉の透明感も表現できます。水面越しの表現のほかに、ショーウィンドーの反射を抑え、中にある展示物をスッキリと写せるという効果もあるので、テーマパークなどに行くときにも活躍します。
            </p>
          </v-sheet>
          <h3>PLフィルタ作例</h3>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="PLフィルタ | 作例" src="/ec/images2/special/camera/lensfilter/exus/image04.jpg"> </v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="PLフィルタ | 作例" src="/ec/images2/special/camera/lensfilter/exus/image05.jpg"> </v-img>
            </v-col>
          </v-row>
          <h3>PLフィルターの使い方。撮影の角度がポイント。</h3>
          <v-row>
            <v-col cols="12" sm="6">
              <p>
                水面や葉の表面の反射を取り除くには、平面に対して30度～40度の斜めの位置から撮影するのが効果的といわれていますが、適度に反射を残したほうが、みずみずしさを表現できたりします。自身の感性を優先させましょう♪
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" alt="30度～40度撮影 | 図" src="/ec/images2/special/camera/lensfilter/exus/image09.jpg"> </v-img>
            </v-col>
          </v-row>
        </section>
        <!--section-->
        <section>
          <h2>紅葉撮影におすすめのレンズ・撮影のコツ</h2>
          <v-sheet class="pa-4 rounded-lg" outlined>
            <p>
              全体を撮るか気に入った部分だけを撮るかでは、かなり違った写真に。広角レンズやフィッシュアイで風景を、マクロや望遠レンズでボケを楽しむ写真を。
              全体と寄りの両方を撮って楽しさ倍増♪ おすすめのレンズを集めました。<br />
              <a href="/ec/special/general/how-to/redleaves">くわしくはコチラをクリック</a>
            </p>
          </v-sheet>
        </section>
        <!--section-->
        <section id="cac">
          <h2>紅葉撮影におすすめPLフィルター 商品一覧</h2>
          <!-- ↓ 特集IDでの商品一覧表示 -->
          <product-list-by-special-id class="mb-5" :specialId="596" />
        </section>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <kitamuraService />

        <h2>関連おすすめ特集・プリントサービス</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />

        <!--section-->
        <section id="feature">
          <h2>風景写真</h2>
          <v-img
            class="mx-auto"
            alt="風景写真「秋の表現の決め手はPLフィルター。写真家の思いを満たすEXUS」辰野 清"
            src="/ec/images2/special/camera/lensfilter/exus/950-a.jpg"
          >
          </v-img>
        </section>

        <!--固定ボタン-->
        <div class="floating-btn">
          <a v-scroll-to="'#caa'" class="hover">色彩コントラスト<br />効果</a>
          <a v-scroll-to="'#cab'" class="hover">反射除去<br />効果</a>
          <a v-scroll-to="'#cac'" class="hover">おすすめ<br />商品一覧</a>
        </div>
        <!--固定ボタン-->
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'exus',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '紅葉撮影におすすめレンズフィルター・PLフィルター | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '紅葉撮影におすすめ、レンズフィルター。PLフィルターの効果と作例のご紹介'
      );
    const state = reactive({
      recommendedFeaturesList: [
        {
          href: '/ec/special/sale-fair/camera/lensfilter',
          img: 'https://shopimg.kitamura.jp/images/banner/1342.gif',
          alt: '効果・種類が分かる！レンズフィルター特集'
        },
        {
          href: '/ec/special/sale-fair/camera/bag',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: 'カメラバッグ・カメラケース特集'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/page/tell_me_chuuban.html',
          img: 'https://shopimg.kitamura.jp/images/banner/3498.jpg',
          alt: '今こそ使いたいフィルムカメラ',
          target: 'blank'
        }
      ],
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'フィルター特集',
          linkUrl: '/ec/special/camera/lensfilter',
          disabled: false
        },
        {
          path: '紅葉撮影におすすめレンズフィルター・PLフィルター',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759174680'],
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
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
    };

  }
});
</script>



<style lang="scss" scoped>
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
  .kanban {
    background: url(/ec/images2/special/camera/lensfilter/exus/bg_title-box.jpg) no-repeat;
    color: #fff;
    padding: 10px 0;
    text-align: center;
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
  }
  h1 {
    font-size: 160%;
  }
  h2,
  h3 {
    color: #603813;
    font-size: 120%;
    margin: 32px 0 16px;
    padding: 5px 0 5px 40px;
  }
  h2 {
    background: url(/ec/images2/special/camera/lensfilter/exus/bg_spec.gif) no-repeat left;
    border-bottom: 1px #333 solid;
  }
  h3 {
    position: relative;
  }
  h3:before {
    position: absolute;
    font-family: 'Font Awesome 5 Free';
    content: '\f0eb';
    background: #ffca2c;
    color: white;
    font-weight: normal;
    font-size: 15px;
    border-radius: 50%;
    left: 0;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    top: 50%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  p {
    color: #603813;
  }
  .nbtn a {
    padding: 8px;
    box-sizing: border-box;
    background-image: url(/ec/images2/special/camera/lensfilter/exus/bg_nbtn.gif);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: block;
    color: #fff !important;
    text-decoration: none;
    font-size: 80%;
    span {
      color: #fff !important;
      font-size: 120%;
      font-weight: bold;
    }
  }
  .floating-btn {
    bottom: 16px;
    font-size: 90%;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    right: 0;
    z-index: 9999;
    width: 80%;
    @media screen and (max-width: 768px) {
      justify-content: flex-start;
      left: 0;
    }
    a {
      background: #990000;
      border: 1px #fff solid;
      color: #fff !important;
      display: inline-block;
      padding: 10px;
      text-align: center;
    }
  }
}
</style>