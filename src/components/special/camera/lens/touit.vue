<template>
  <v-app>
    <div class="touit">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->
        <!--カルーセルを表示したい場合-->
        <carousels :carousels="carousels2" :type="2" />

        <v-container>
          <v-row>
            <v-col cols="12" class="mb-5">
              <h2 class="mt-5 mb-4 font-weight-bold indigo--text text--darken-4 text-h6">
                カールツァイスからソニー、フジフイルムのミラーレス用レンズを2種類リリース
              </h2>
              <p class="mb-6">
                カールツァイスからフジフイルムＸマウントとSONY Eマウント用にレンズをリリース。<br />
                オートフォーカス機能を搭載で、クオリティの高いZEISSのレンズを気軽に楽しむことができる。<br />
                また、従来のSLRレンズに比べ小型軽量を実現。よりミラーレス向きのデザインに仕上がっている。<br />
                リリースされたレンズは「Touit」の第一弾シリーズ「<router-link to="/ec/list?keyword=Touit%202.8/12&narrow18=1&sort=popularity&limit=40"
                  >Touit 2.8/12</router-link
                >」「<router-link to="/ec/list?keyword=Touit%201.8/32&narrow18=1&sort=popularity&limit=40">Touit 1.8/32</router-link>」の2本で、
                それぞれ特徴的なレンズに仕上がっている。
              </p>
              <v-col cols="12" sm="3" class="float-left">
                <h3 class="text-center text-body-1 font-weight-bold">Carl Zeiss Touit 2.8/12</h3>
                <v-img
                  src="/ec/images2/special/camera/lens/touit/touit_03.jpg"
                  alt="Carl Zeiss Touit 1.8/32"
                  class="mx-auto mt-4"
                  max-width="175px"
                  max-height="180px"
                ></v-img></v-col
              ><v-col cols="12" sm="3" class="float-left">
                <p class="text-center">
                  <router-link to="/ec/pd/4047865500128">Xマウント用</router-link> / <router-link to="/ec/pd/4047865500111">Eマウント用</router-link>
                </p>
                <router-link to="/ec/pd/list.html?searchbox=1&sort=Rank&index=all&path=&q=Touit+2.8%2F12&x=0&y=0"
                  ><v-img
                    src="/ec/images2/special/camera/lens/touit/touit_06.gif"
                    class="mx-auto mt-4 mb-4"
                    max-width="210px"
                    max-height="35px"
                    alt="詳細・ご購入はこちら"
                  ></v-img
                ></router-link>
              </v-col>
              <v-col cols="12" sm="3" class="float-left">
                <h3 class="text-center text-body-1 font-weight-bold">Carl Zeiss Touit 1.8/32</h3>
                <v-img
                  src="/ec/images2/special/camera/lens/touit/touit_05.jpg"
                  alt="Carl Zeiss Touit 1.8/32"
                  class="mx-auto mt-4"
                  max-width="150px"
                  max-height="180px"
                ></v-img></v-col
              ><v-col cols="12" sm="3" class="float-left">
                <p class="text-center">
                  <router-link to="/ec/pd/4047865500142">Xマウント用</router-link> / <router-link to="/ec/pd/4047865500135">Eマウント用</router-link>
                </p>
                <router-link to="/ec/pd/list.html?searchbox=1&sort=Rank&index=all&path=&q=Touit+1.8%2F32&x=30&y=16"
                  ><v-img
                    src="/ec/images2/special/camera/lens/touit/touit_06.gif"
                    class="mx-auto mt-4"
                    max-width="210px"
                    max-height="35px"
                    alt="詳細・ご購入はこちら"
                  ></v-img
                ></router-link> </v-col></v-col></v-row
        ></v-container>

        <v-container>
          <v-row>
            <v-col cols="12" class="mb-5"
              ><h2 class="mt-5 mb-4 font-weight-bold indigo--text text--darken-4 text-h6">世界的に最も権威のあるデザイン賞の一つ「iFデザイン賞」受賞</h2>
              <v-col cols="12" sm="6" class="mb-5 float-left">
                <p class="mb-4">
                  「デザイン界におけるオスカー賞」を自称し、世界的に最も権威のあるデザイン賞の一つ「iFデザイン賞」、そして「レッド・ドットデザイン賞」を受賞。<br /><br />
                  ユニークな新プロダクトデザインは、統合コンセプトをベースとし、本質的で機能性を備えた要素に凝縮されているのが特徴。<br /><br />
                  レンズフードはもちろん、さらにアクセサリーパーツも、全体のフォルムにシームレスに統合。金属製のマウントは高い安定性を保証し、ラバー製設定リングは正確なマニュアル操作を実現。<br />
                  しっかりとした、光沢のある表面は、このレンズの光学的・機械的精密性をビジュアルに主張している。<br /><br />
                  これこそ、高い操作性と美観を備えた革新的プロダクトデザインと言えるでしょう。<br />
                  また、「カールツァイス Touit 2.8/12」は、ヨーロッパのカメラ・映像・オーディオ関連専門誌で構成されるEISAアワードで、「ヨーロピアン
                  コンパクトシステムレンズ<br />
                  2013-2014」（European Compact System Lens of Year 2013-2014）を受賞。
                </p>
              </v-col>
              <v-col cols="12" sm="6" class="float-left">
                <v-img
                  src="/ec/images2/special/camera/lens/touit/touit_08.gif"
                  alt="Carl Zeiss Touit 1.8/32"
                  class="mx-auto"
                  max-width="310px"
                  max-height="420px"
                ></v-img>
              </v-col>
            </v-col> </v-row
        ></v-container>

        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="float-left">
              <div class="wk">
                <h4 class="grey darken-4 white--text pa-2">Carl Zeiss Touit 2.8/12</h4>
                <div>
                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_09.jpg"
                    alt="構成 | Carl Zeiss Touit 2.8/12"
                    class="mx-auto"
                    max-width="415px"
                    max-height="400px"
                  ></v-img>
                  <table class="mt-4">
                    <tr>
                      <th><span class="st01"></span></th>
                      <td>11枚のレンズを8のグループに搭載したディスタゴン</td>
                    </tr>
                    <tr>
                      <th><span class="st02"></span></th>
                      <td>非球面レンズ</td>
                    </tr>
                    <tr>
                      <th><span class="st03"></span></th>
                      <td>異常部分分散性の特殊ガラス製レンズ</td>
                    </tr>
                    <tr>
                      <th><span class="st04"></span></th>
                      <td>"Floating Elements"設計</td>
                    </tr>
                  </table>

                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_10.jpg"
                    class="mx-auto mt-3"
                    max-width="415px"
                    max-height="270px"
                    alt="装着イメージ"
                  ></v-img>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="6" class="float-left">
              <div class="wk">
                <h4 class="grey darken-4 white--text pa-2">Carl Zeiss Touit 1.8/32</h4>
                <div>
                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_11.jpg"
                    alt="構成 | Carl Zeiss Touit 1.8/32"
                    class="mx-auto"
                    max-width="415px"
                    max-height="400px"
                  ></v-img>
                  <table class="mt-4 pt-6 pb-6">
                    <tr>
                      <th><span class="st01"></span></th>
                      <td>8枚のレンズを5つのグループに搭載したプラナー</td>
                    </tr>
                  </table>

                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_12.jpg"
                    class="mx-auto mt-3"
                    max-width="415px"
                    max-height="270px"
                    alt="装着イメージ"
                  ></v-img>
                </div>
              </div>
            </v-col> </v-row
        ></v-container>

        <v-container class="mb-12">
          <h4 class="table-k whight--text mt-5 mb-6">カール ツァイス Touit 2.8/12</h4>
          <v-row v-for="(gallery, index) in galleryList" :key="index">
            <v-col cols="12" sm="6">
              <div class="pointer" @click="() => showGalleryImg(index)">
                <v-img :src="gallery.src" max-width="80%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'ml-auto hover' : 'mx-auto'"></v-img>
                <v-img src="/ec/images2/special/camera/polarie/acc/megane.png" max-width="23px" height="23px" class="ml-auto hover"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-h6 font-weight-bold mb-2">{{ gallery.title }}</p>
              <p class="mb-2 including-line-breaks">
                {{ gallery.txt }}
              </p>
            </v-col>
          </v-row>
          <vue-easy-lightbox :visible="visibleGallery" :imgs="galleryList[index].src" :index1="index" @hide="handleHide"></vue-easy-lightbox>

          <v-row>
            <v-col cols="12" sm="6" class="mb-5 pa-4">
              <p class="tx-16 lin18">
                <router-link to="/ec/pd/4047865500111">
                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_16.jpg"
                    alt="ソニーNEXシリーズ(Eマウント)用はこちら"
                    max-width="435px"
                    max-height="110px"
                    class="hover"
                  ></v-img>
                </router-link>
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="mb-5 pa-4">
              <p class="tx-16 lin18">
                <router-link to="/ec/pd/4047865500128">
                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_17.jpg"
                    alt="フジフイルムXシリーズ(Xマウント)用はこちら"
                    max-width="435px"
                    max-height="110px"
                    class="hover"
                  ></v-img>
                </router-link>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="mb-12">
          <h4 class="table-k whight--text mt-5 mb-6">カール ツァイス Touit 1.8/32</h4>
          <v-row v-for="(gallery2, index2) in galleryList2" :key="index2">
            <v-col cols="12" sm="6">
              <div class="pointer" @click="() => showGalleryImg2(index2)">
                <v-img :src="gallery2.doosrc" max-width="80%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'ml-auto hover' : 'mx-auto'"></v-img>
                <v-img src="/ec/images2/special/camera/polarie/acc/megane.png" max-width="23px" height="23px" class="ml-auto hover"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-h6 font-weight-bold mb-2">{{ gallery2.dootitle }}</p>
              <p class="mb-2 including-line-breaks">
                {{ gallery2.dootxt }}
              </p>
            </v-col>
          </v-row>
          <vue-easy-lightbox :visible="visibleGallery2" :imgs="galleryList2[index2].doosrc" :index2="index2" @hide="handleHide2"></vue-easy-lightbox>

          <v-row>
            <v-col cols="12" sm="6" class="mb-5 pa-4">
              <p class="tx-16 lin18">
                <router-link to="/ec/pd/4047865500135">
                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_16.jpg"
                    alt="ソニーNEXシリーズ(Eマウント)用はこちら"
                    max-width="435px"
                    max-height="110px"
                    class="hover"
                  ></v-img>
                </router-link>
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="mb-5 pa-4">
              <p class="tx-16 lin18">
                <router-link to="/ec/pd/4047865500142">
                  <v-img
                    src="/ec/images2/special/camera/lens/touit/touit_17.jpg"
                    alt="フジフイルムXシリーズ(Xマウント)用はこちら"
                    max-width="435px"
                    max-height="110px"
                    class="hover"
                  ></v-img>
                </router-link>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <h4 class="table-k whight--text mb-5">カールツァイス Touit 2.8/12mm・Touit 1.8/32mm</h4>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="526" />
        <!--↓ SNSー-->
        <facebookAndTwitter />

        <h4 class="table-k whight--text mb-5">おすすめの特集</h4>
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
import Carousels from '@/components/common/special/carousels.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'touit',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    'product-list-by-special-id': ProductListBySpecialId,
    carousels: Carousels
  },
  setup: (props, context) => {
    document.title = 'カールツァイス Touit 2.8/12mm 1.8/32mm レビュー | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute('content', 'Carl Zeiss(カールツァイス) Touit2.8/12mmと1.8/32mm Eマウント・Xマウント用レンズをレビュー【カメラのキタムラ】');
    const state = reactive({
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.png',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/ec/service/tokutoku-kaitori.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取',
          target: 'blank'
        }
      ],
      carousels2: [
        {
          src: '/ec/images2/special/camera/lens/touit/touit-slide_01.jpg',
          txt: 'FUJIFILM X-E1 × Carl Zeiss Touit 2.8/12 （ f/11 ISO/200 1/500秒 ）'
        },
        {
          src: '/ec/images2/special/camera/lens/touit/touit-slide_02.jpg',
          txt: 'FUJIFILM X-Pro1 × Carl Zeiss Touit 2.8/12 （ f/16 ISO/200 4秒 ）'
        },
        {
          src: '/ec/images2/special/camera/lens/touit/touit-slide_03.jpg',
          txt: 'FUJIFILM X-E1 × Carl Zeiss Touit 2.8/12 （ f/13 ISO/640 18秒 ）'
        },
        {
          src: '/ec/images2/special/camera/lens/touit/touit-slide_04.jpg',
          txt: 'SONY NEX-7 × Carl Zeiss Touit 1.8/32 （ f/1.8 ISO/100 1/640秒 ）'
        },
        {
          src: '/ec/images2/special/camera/lens/touit/touit-slide_05.jpg',
          txt: 'SONY NEX-7 × Carl Zeiss Touit 1.8/32 （ f/1.8 ISO/100 1/2500秒 ）'
        }
      ],
      visible: false,
      isReinforcedParts: false,
      visibleGallery: false,
      index: 0,
      galleryList: [
        {
          src: '/ec/images2/special/camera/lens/touit/photo_1.jpg',
          title: '歪みが少なく、どこまでも美しい直線',
          txt:
            'APS-Cミラーレス用としては最広角となるレンズでありながら、広角レンズ特有の歪みが少なく、写真の端から端までどこまでも美しい直線の描写が可能。\n\n超広角を活かして広大な風景写真を撮るもよし、被写体まで距離が取りづらい直線的な都会の風景を撮るもよし。このレンズなら今までにない表現を楽しむことができる。'
        },
        {
          src: '/ec/images2/special/camera/lens/touit/photo_2.jpg',
          title: 'ヌケが良く、夜景撮影もシャープ',
          txt:
            ' 非常にヌケが良く、シャープでノイズも少ない印象を受けた。\n\nシャープと言っても立体感が損なわれないので、被写体の角度など、あれこれ考えずに気軽にシャッターを切れる。\n\n 開放時の明るさを活かして、広角で撮影する夜景写真も面白い。'
        }
      ],
      visibleGallery2: false,
      index2: 0,
      galleryList2: [
        {
          doosrc: '/ec/images2/special/camera/lens/touit/photo_3.jpg',
          dootitle: 'カールツァイス伝統のプラナー\n愛され続ける、柔らかいボケ味',
          dootxt:
            '先に紹介したTouit 2.8/12とは打って変わって、Touit 1.8/32はカールツァイス伝統のPlanarで、なんとも言えない柔らかいボケ味が魅力だ。\nミラーレス機×Planarの組み合わせは、なんとも魅力的で贅沢にさえ思える。'
        },
        {
          doosrc: '/ec/images2/special/camera/lens/touit/photo_6.jpg',
          dootitle: '異なったイメージの画作りが可能',
          dootxt: 'F1.8と明るいレンズのため、解放時と絞り時で仕上がりのイメージが大きく変わる。\nシーンに合わせて自分なりの表現を楽しむことができる。'
        },
        {
          doosrc: '/ec/images2/special/camera/lens/touit/photo_7.jpg'
        },
        {
          doosrc: '/ec/images2/special/camera/lens/touit/photo_4.jpg',
          dootitle: 'さまざまなシーンに使えます',
          dootxt: '先ほど説明した絞りによる変化と、使いやすい焦点距離で風景写真からポートレートまでさまざまなシーンで活躍。'
        },
        {
          doosrc: '/ec/images2/special/camera/lens/touit/photo_5.jpg'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'カールツァイス Touit 2.8/12mm 1.8/32mm レビュー',
          disabled: true
        }
      ],

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4047865800686'],
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
    const handleHide = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery = false;
    };
    const showGalleryImg = (index: number) => {
      state.index = index;
      state.visibleGallery = true;
    };
    const handleHide2 = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery2 = false;
    };
    const showGalleryImg2 = (index2: number) => {
      state.index2 = index2;
      state.visibleGallery2 = true;
    };
    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      handleHide,
      showGalleryImg,
      handleHide2,
      showGalleryImg2,
      formatPrice
    };
  }
});
</script>
<style lang="scss" scoped>
.wk {
  padding: 19px;
  border: 1px #bbb solid;
  box-sizing: border-box;
}
.table-k {
  font-size: 120%;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0 5px 15px;
  border-left: 5px #000 solid;
  border-bottom: 1px #000 solid;
  font-weight: bold;
}
.wk table {
  height: 150px;
  width: 100%;
}
.wk table th {
  border: 1px #bbb solid;
  padding: 10px;
  box-sizing: border-box;
}
.wk table td {
  border: 1px #bbb solid;
  padding: 10px;
  box-sizing: border-box;
}
span.st01 {
  background: #669ad3;
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 1px #bbb solid;
  box-sizing: border-box;
}
span.st02 {
  background: #62c3ce;
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 1px #bbb solid;
  box-sizing: border-box;
}
span.st03 {
  background: #bc8ec0;
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 1px #bbb solid;
  box-sizing: border-box;
}
span.st04 {
  background: #000;
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 1px #bbb solid;
  box-sizing: border-box;
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
