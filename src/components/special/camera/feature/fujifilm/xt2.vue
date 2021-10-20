<template>
  <v-app>
    <div class="xt2">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--看板・ナビ-->
        <div class="inner mt-6">
          <v-img src="/ec/images2/special/camera/feature/fujifilm/xt2/mainv.png"></v-img>
          <div class="navi">
            <a v-scroll-to="'#sec01'" class="hover">
              <v-img src="/ec/images2/special/camera/feature/fujifilm/xt2/nav01.png"></v-img>
            </a>
            <a v-scroll-to="'#sec02'" class="hover">
              <v-img src="/ec/images2/special/camera/feature/fujifilm/xt2/nav02.png"></v-img>
            </a>
            <a v-scroll-to="'#sec03'" class="hover">
              <v-img src="/ec/images2/special/camera/feature/fujifilm/xt2/nav03.png"></v-img>
            </a>
            <a v-scroll-to="'#sec04'" class="hover">
              <v-img src="/ec/images2/special/camera/feature/fujifilm/xt2/nav04.png"></v-img>
            </a>
            <a v-scroll-to="'#sec05'" class="hover">
              <v-img src="/ec/images2/special/camera/feature/fujifilm/xt2/nav05.png"></v-img>
            </a>
          </div>
        </div>
        <!--看板・ナビ-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'フジフイルム X-T2 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--コンテンツ-->
        <div class="inner">
          <div class="sec" id="sec01">
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_ttl.png"
              alt="進化その1 動体追従性が向上した新AF"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              max-width="400px"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_txt01.png"
              alt="静物から動体まで、被写体に合わせて最適なAF設定を選べる。"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_sub01.png"
              alt="より動きに強く進化した新AFシステム"
            ></v-img>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont01.png" alt="AFサーチ回数アップ"></v-img>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont02.png" alt="測距点91点（最大325点）に拡大"></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont03_ttl.png"
              alt="被写体の追従精度を高める3つのパラメータ"
            ></v-img>
            <v-row>
              <v-col col="4">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont03_img01.png"
                  alt="「1.被写体保持特性」ピントが合った被写体にねばる⇔すぐ変える"
                ></v-img>
              </v-col>
              <v-col col="4">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont03_img02.png"
                  alt="「2.速度変化特性」被写体のスピードが一定⇔不規則"
                ></v-img>
              </v-col>
              <v-col col="4">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont03_img03.png"
                  alt="「3.ゾーンエリア特性」設定したゾーン内の中央・手前優先/オート"
                ></v-img>
              </v-col>
            </v-row>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_ttl.png" alt="全6種類のAF-Cカスタム設定"></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              max-width="400px"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_txt01.png"
              alt="被写体の動きに合わせて5つのプリセットから選べる。また、3つのパラメータを好みで設定し、「ユーザーカスタム」に登録することも可能。"
            ></v-img>
            <v-row>
              <v-col col="12" sm="6">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_img01.png"
                  alt="SET1 基本 動きが一定で予測しやすい被写体"
                ></v-img>
              </v-col>
              <v-col col="12" sm="6">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_img02.png"
                  alt="SET2 障害物に強い 動物/鉄道/飛行機/サッカー等"
                ></v-img>
              </v-col>
              <v-col col="12" sm="6">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_img03.png"
                  alt="SET3 加速減速に強い モータースポーツ/バスケットボール等"
                ></v-img>
              </v-col>
              <v-col col="12" sm="6">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_img04.png"
                  alt="SET4 急出現に強い 野鳥や急に現れる被写体"
                ></v-img>
              </v-col>
              <v-col col="12" sm="6">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_img05.png"
                  alt="SET5 激しい動きに強い テニスやダンス等の被写体"
                ></v-img>
              </v-col>
              <v-col col="12" sm="6">
                <v-img
                  class="mx-auto mb-4 mt-4"
                  src="/ec/images2/special/camera/feature/fujifilm/xt2/sec01_cont04_img06.png"
                  alt="SET6 ユーザーカスタム 3つのパラメーターを自由に設定"
                ></v-img>
              </v-col>
            </v-row>
          </div>
          <div class="sec" id="sec02">
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec02_ttl.png"
              alt="進化その2 専用グリップでパフォーマンス向上"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              max-width="400px"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec02_txt01.png"
              alt="X-T2の性能を最大限に引き出すブーストモード搭載の専用グリップ。"
            ></v-img>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec02_sub01.png" alt="縦位置パワーブースターグリップ"></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec02_cont01.png"
              alt="「撮影枚数アップ」「操作性も向上」"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec02_cont02_ttl.png"
              alt="「ブースト」モードで最高のパフォーマンスを発揮"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec02_cont02_img01.png"
              alt="ブーストモードのパフォーマンス比較表"
            ></v-img>
          </div>
          <div class="sec" id="sec03">
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec03_ttl.png"
              alt="進化その3 快適な撮影を支える確かな操作性"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              max-width="400px"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec03_txt01.png"
              alt="ユーザーの声を取り入れて、直感的で実用性の高い操作性を実現。"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec03_sub01.png"
              alt="方向チルト式プレミアムクリア液晶 従来の上下方向のチルトに加え、縦位置撮影に有用な横方向のチルトができる３方向チルト式液晶を搭載。"
            ></v-img>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec03_cont01.png" alt="3.0型104万ドット強化ガラス"></v-img>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec03_sub02.png" alt="ダイヤルの操作性が向上"></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec03_cont02.png"
              alt="クリック感にこだわったダイヤル。ロック＆リリースボタンで誤操作を防ぎ、操作性がさらに向上。"
            ></v-img>
          </div>
          <div class="sec" id="sec04">
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_ttl.png"
              alt="進化その3 快適な撮影を支える確かな操作性"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              max-width="400px"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_txt01.png"
              alt="ユーザーの声を取り入れて、直感的で実用性の高い操作性を実現。"
            ></v-img>
            <div class="youtube">
              <iframe class="mx-auto d-block" width="560" height="315" src="https://www.youtube.com/embed/Vp57Zg7FGBY" frameborder="0"></iframe>
            </div>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_sub01.png"
              alt="オーバーサンプリングで4KもフルHDも高画質"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_cont01.png"
              alt="4K動画：必要な画素数の約1.8倍の情報量を圧縮 フルHD：必要な画素数の約2.4倍の情報量を圧縮 しかも、データ量の多い100Mbpsだから、4KもフルHDもキレイ！"
            ></v-img>
            <v-img
              class="mx-auto mb-4 mt-4"
              src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_sub02.png"
              alt="全15種のフィルムシミュレーション"
            ></v-img>
            <v-row>
              <v-col col="4">
                <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_cont02_img01.png" alt="クラシッククローム"></v-img>
              </v-col>
              <v-col col="4">
                <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_cont02_img02.png" alt="ACROS(+R,G,Ye)"></v-img>
              </v-col>
              <v-col col="4">
                <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec04_cont02_img03.png" alt="Velvia/ビビッド"></v-img>
              </v-col>
            </v-row>
          </div>
          <div class="sec" id="sec05">
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec05_ttl.png" alt="主要スペック比較"></v-img>
            <v-img class="mx-auto mb-4 mt-4" src="/ec/images2/special/camera/feature/fujifilm/xt2/sec05_cont.png" alt="X-T2/X-T1主要スペック比較表"></v-img>
          </div>
          <v-img
            class="mx-auto mb-4 mt-4"
            max-width="353px"
            src="/ec/images2/special/camera/feature/fujifilm/xt2/link/ttl.png"
            alt="富士フィルムのその他の製品"
          ></v-img>
          <v-row>
            <v-col col="6" sm="4">
              <a href="/%E6%A8%99%E6%BA%96%E3%82%BA%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%B3%E3%82%BA/ct/C004015001/">
                <v-img class="mx-auto" src="/ec/images2/special/camera/feature/fujifilm/xt2/link/btn1.png" alt="標準ズームレンズ一覧"></v-img>
              </a>
            </v-col>
            <v-col col="6" sm="4">
              <a href="/%E6%9C%9B%E9%81%A0%E3%82%BA%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%B3%E3%82%BA/ct/C004015002/">
                <v-img class="mx-auto hover" src="/ec/images2/special/camera/feature/fujifilm/xt2/link/btn2.png" alt="望遠ズームレンズ一覧"></v-img>
              </a>
            </v-col>
            <v-col col="6" sm="4">
              <a href="/%E5%BA%83%E8%A7%92%E3%83%AC%E3%83%B3%E3%82%BA/ct/C004015003/">
                <v-img class="mx-auto hover" src="/ec/images2/special/camera/feature/fujifilm/xt2/link/btn3.png" alt="広角レンズ一覧"></v-img>
              </a>
            </v-col>
            <v-col col="6" sm="4">
              <a href="/%E6%A8%99%E6%BA%96%EF%BC%8F%E4%B8%AD%E6%9C%9B%E9%81%A0%E3%83%AC%E3%83%B3%E3%82%BA/ct/C004015004/">
                <v-img class="mx-auto hover" src="/ec/images2/special/camera/feature/fujifilm/xt2/link/btn4.png" alt="標準・中望遠ズームレンズ一覧"></v-img>
              </a>
            </v-col>
            <v-col col="6" sm="4">
              <a href="/%E3%83%9E%E3%82%AF%E3%83%AD%E3%83%AC%E3%83%B3%E3%82%BA/ct/C004015007/">
                <v-img class="mx-auto hover" src="/ec/images2/special/camera/feature/fujifilm/xt2/link/btn5.png" alt="マクロレンズ一覧"></v-img>
              </a>
            </v-col>
            <v-col col="6" sm="4">
              <a href="/%E3%83%95%E3%82%B8%E3%83%95%E3%82%A4%E3%83%AB%E3%83%A0/ct/C002001007/">
                <v-img class="mx-auto hover" src="/ec/images2/special/camera/feature/fujifilm/xt2/link/btn6.png" alt="その他ミラーレス一覧"></v-img>
              </a>
            </v-col>
          </v-row>
        </div>
        <!--コンテンツ-->

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'xt2',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'フジフイルム X-T2！富士フイルム Xシリーズ史上最高画質ミラーレス一眼カメラ| カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム X-T2ミラーレス一眼カメラ新製品特集！進化したAFと3方向チルト式液晶搭載のXシリーズ史上最高画質。価格・おすすめポイント・お得な情報をチェック！新製品ならカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')

    const state = reactive({
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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
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
          linkUrl: '/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'フジフイルム X-T2',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410325287'],
      mainProductList: [] as Array<ProductDetail>,
      // 取得するJancode
      productJanCodeList: [
        '4547410325287',
        '4547410325300',
        '4547410334128'
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

<style lang="scss" scoped>
.xt2 {
  .inner {
    background: #000;
    max-width: 720px;
    margin: auto;
    padding: 10px;
  }
  .sec {
    background: #fff;
    margin-top: 40px;
    padding: 10px;
  }
  .navi {
    display: flex;
    flex-wrap: wrap;
  }
  .navi a {
    display: block;
    width: 20%;
    @media screen and (max-width: 768px) {
      width: 33.3%;
    }
  }
}
</style>
