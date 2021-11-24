<template>
  <v-app>
    <div class="telescope">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy :color="'#e49512'" />

        <!-- ↓ 画像の読み込み -->
        <v-card class="mb-4">
          <v-img
            src="/ec/images2/special/camera/astronomical/telescope/bg_top.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="auto"
            max-width="950px"
          >
            <v-card-title>初心者にもおすすめ♪ 天体望遠鏡の選び方</v-card-title>
            <v-card-text
              >天体望遠鏡で月や星を天体観測してみたいけど…どんなものがいいの？<br />
              初心者にもおすすめの天体望遠鏡とその選び方をビクセンの担当者さんに聞いてみました！<br />
              冬の夜空は空気が澄んで綺麗です。たまにはゆっくり、夜空を見上げて家族と天体観測をしてみませんか♪</v-card-text
            >
          </v-img>
        </v-card>
        <!-- ↑ 画像の読み込み -->

        <!--↓アンカー--><!-- 960px以上 -->
        <v-container class="mb-10 pa-0" id="ankrbo" v-if="$vuetify.breakpoint.mdAndUp">
          <v-row no-gutters>
            <v-col v-for="(navi, index) in naviList" :key="index">
              <a :href="navi.href">
                <h2 class="white--text newline nbtna">
                  {{ navi.naviItem }}
                </h2>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!-- 960px未満 -->
        <tableOfContentsNavi :naviList="naviList" v-if="$vuetify.breakpoint.smAndDown" />

        <!--↓天体望遠鏡の種類-->
        <div class="mb-12" id="select">
          <h2 class="subtitle">天体望遠鏡の種類</h2>
          <p class="my-4">
            <span class="red--text yellow lighten-3">天体望遠鏡は、主に2つの種類</span>に分けられます。<span class="red--text yellow lighten-3"
              >屈折式と反射式の2種類</span
            >です。まずは、それぞれの特徴をおさえましょう。
          </p>
          <v-row class="mt-2">
            <v-col cols="12" sm="6">
              <h3 class="page-color">
                <v-img src="/ec/images2/special/camera/astronomical/telescope/point_01.png" max-width="10%" height="auto" class="float-left"></v-img
                ><span class="text-subtitle-1 font-weight-bold mx-2">使い方がカンタン♪</span>屈折式天体望遠鏡
              </h3>
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img
                  src="https://shopimg.kitamura.jp/images/pd/679/6ac/2fd/dae/166/c87/152/5d0/58c/069/d3q/3xd/9e2/4/M.jpg"
                  max-width="50%"
                  height="auto"
                ></v-img>
              </div>
              <p class="text-left line-height">
                大きなレンズを利用して星を見るのが、屈折式望遠鏡。<br />
                <span class="red--text yellow lighten-3">扱いやすく、特別なメンテナンスが不要なので、初心者におすすめ</span>です。<br />
                上下・左右に望遠鏡を動かして星を見つける経緯台タイプで、軽くて組み立てや操作も初めてでも安心。ベランダに出して観測、家族や友人と<span
                  class="red--text yellow lighten-3"
                  >気軽に星空を見たい人にぴったり</span
                >です♪
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="page-color">
                <v-img src="/ec/images2/special/camera/astronomical/telescope/point_01.png" class="float-left"></v-img
                ><span class="text-subtitle-1 font-weight-bold mx-2">高倍率を楽める本格派！</span>反射式天体望遠鏡
              </h3>
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img
                  src="https://shopimg.kitamura.jp/images/pd/db7/6ff/f9e/465/cfe/910/5a6/818/77d/f23/d20/f6k/ikr/j/M.jpg"
                  max-width="50%"
                  height="auto"
                ></v-img>
              </div>
              <p class="text-left line-height">
                大きな鏡（反射鏡）を利用して星を見るのが、反射式望遠鏡。<br />
                <span class="red--text yellow lighten-3">暗い星までよく見えますが、メンテナンスも必要なので、中上級者向き</span>です。<br />
                扱いが少し難しいですが、別売の接眼レンズを使えば、屈折式天体望遠鏡より<span class="red--text yellow lighten-3"
                  >低倍率～高倍率の広い範囲で使用することができ、本格的な天体観測におすすめ</span
                >です♪
              </p>
            </v-col>
          </v-row>
        </div>

        <!--↓天体望遠鏡の種類-->
        <div id="pickup">
          <h2 class="subtitle">おすすめの天体望遠鏡</h2>
          <p class="text-left line-height py-6">
            おすすめの天体望遠鏡は、ずばり、
            <span class="red--text yellow lighten-3">ビクセンのポルタシリーズ</span>です。
            です。見たい天体の方向へ、望遠鏡を縦・横に自由に動かせるフリーストップ式で、<span class="red--text yellow lighten-3"
              >初心者さんや、お子様との観測でも使いやすいシリーズ</span
            >です◎<br />お手頃価格なスペースアイ600も人気です☆
          </p>

          <v-row class="mb-6">
            <v-col cols="12" sm="6" class="bd-rgr mb-4">
              <h3 class="ossm page-color text-center">おすすめ天体望遠鏡 ビクセン ポルタII A80Mf</h3>
              <div class="d-flex flex-column justify-space-between align-center">
                <router-link to="/ec/pd/4955295399529"
                  ><v-img
                    src="https://shopimg.kitamura.jp/images/pd/45f/b5f/99d/27b/674/30b/cbf/4a7/bae/3fd/7f0/p7e/zwr/1/L.jpg"
                    max-width="350px"
                    height="auto"
                    class="mx-auto"
                  ></v-img
                ></router-link>
              </div>
              <p class="text-left line-height">
                初心者でも扱いやすい屈折式で、<span class="red--text yellow lighten-3">ゆくゆくはデジカメや小型一眼で写真を撮ってみたい人は、迷わずコレ</span
                >！<br />
                使いやすさはもちろん、APS-Cのデジタル一眼レフくらいまでなら、撮影が可能です。耐加重があり、カメラを付けたときの「たわみ」や強度・風ブレの影響を、受けにくいです。
              </p>
              <v-hover v-slot="{ hover }">
                <v-sheet :elevation="hover ? 6 : 2" class="bg-buru text-subtitle-1 text-center rounded-lg">
                  <router-link to="/ec/pd/4955295399529"> <span class="white--text">商品ページを見る</span></router-link>
                </v-sheet>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="6" class="bd-rgr mb-4">
              <h3 class="ossm page-color text-center">おすすめ天体望遠鏡 ビクセン ポルタII R130Sf</h3>
              <div class="d-flex flex-column justify-space-between align-center">
                <router-link to="/ec/pd/4955295399543"
                  ><v-img src="/ec/images2/special/camera/astronomical/telescope/img_02.jpg" max-width="350px" height="auto" class="mx-auto"></v-img
                ></router-link>
              </div>
              <p class="text-left line-height">
                本格的に天体観測をしたい人向け。<span class="red--text yellow lighten-3"
                  >別売の接眼レンズを使えば、20倍～260倍と幅広い倍率で観測ができます。</span
                ><br />
                外に出してから30～40分くらいは筒の内外で気温差が発生するため、もやもやと見えたり、大気の状況に見え方が左右されやすかったりと、扱いが少し難しい部分もあります。
              </p>
              <v-hover v-slot="{ hover }">
                <v-sheet :elevation="hover ? 6 : 2" class="bg-buru text-subtitle-1 text-center rounded-lg">
                  <router-link to="/ec/pd/4955295399543"><span class="white--text">商品ページを見る</span></router-link>
                </v-sheet>
              </v-hover>
            </v-col>

            <v-col cols="12" sm="6" class="bd-rgr mb-4">
              <h3 class="ossm page-color text-center">おすすめ天体望遠鏡 セレストロン 天体望遠鏡 StarSense Explorer LT 70AZ</h3>
              <div class="d-flex flex-column justify-space-between align-center">
                <router-link to="/ec/pd/4955295361557"
                  ><v-img
                    src="https://shopimg.kitamura.jp/images/pd/ca0/3b2/b89/095/c91/56c/1db/eed/1fe/8ee/c3g/fga/slq/y/L.jpg"
                    max-width="350px"
                    height="auto"
                    class="mx-auto"
                  ></v-img
                ></router-link>
              </div>
              <p class="text-left line-height">
                セレストロン StarSense Explorer LT70AZは<span class="red--text yellow lighten-3"
                  >星の知識に自信がない方でも、星を探して見ることができる天体望遠鏡</span
                >です。<br />土星や木星などの惑星はもちろん、オリオン大星雲や二重星など、初心者には難易度の高い星雲や星団までスマートフォンがナビゲートします。<br />
                ビクセンのYouTube公式チャンネルでは組み立て、ファインダー合わせ、アプリの設定方法など、動画で解説しています。
              </p>
              <v-hover v-slot="{ hover }">
                <v-sheet :elevation="hover ? 6 : 2" class="bg-buru text-subtitle-1 text-center rounded-lg">
                  <router-link to="/ec/pd/4955295361557"><span class="white--text">商品ページを見る</span></router-link>
                </v-sheet>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="6" class="bd-rgr mb-4">
              <h3 class="ossm page-color text-center">おすすめ天体望遠鏡 ビクセン 天体望遠鏡 スペースアイ600</h3>
              <div class="d-flex flex-column justify-space-between align-center">
                <router-link to="/ec/pd/4955295327539"
                  ><v-img
                    src="https://shopimg.kitamura.jp/images/pd/614/a24/7ad/8c1/009/138/24d/978/27b/086/443/0ah/l85/2/L.jpg"
                    max-width="350px"
                    height="auto"
                    class="mx-auto"
                  ></v-img
                ></router-link>
              </div>
              <p class="text-left line-height">
                ビクセン スペースアイ600は、お子様へのプレゼントや、これから天体観測を始めたい初心者さんにピッタリの、お手頃価格がうれしい天体望遠鏡です。<br />月のクレーターから木星の衛星、土星のリングまで幅広く観測できます。<br />また、3.3kgと軽量・コンパクトなので、<span
                  class="red--text yellow lighten-3"
                  >組立や操作がとても簡単</span
                >です！
              </p>
              <v-hover v-slot="{ hover }">
                <v-sheet :elevation="hover ? 6 : 2" class="bg-buru text-subtitle-1 text-center rounded-lg">
                  <router-link to="/ec/pd/4955295327539"> <span class="white--text">商品ページを見る</span></router-link>
                </v-sheet>
              </v-hover>
            </v-col>
          </v-row>
        </div>

        <!--↓月や惑星の見え方 倍率による違い-->
        <h2 class="subtitle" id="magnification">月や惑星の見え方 倍率による違い</h2>
        <v-divider></v-divider>
        <p class="my-4">
          接眼レンズを変えることで、倍率を変えることができます。<br />上記、<a href="#pickup" class="indigo--text">おすすめの3機種</a
          >であれば、どの天体望遠鏡でも<span class="red--text yellow lighten-3">月のクレーター、木星の縞模様や土星の環を見ることができます</span
          >。倍率にすると、<span class="red--text yellow lighten-3">100～150倍。このあたりの倍率が一番使うことが多い</span
          >です。それ以上になるとスカッと晴れた日以外は、空の気流が安定せず、もやっとしてよく見えないからです。
        </p>
        <h4 class="imgtitle">天体望遠鏡の倍率と月や惑星の見え方</h4>
        <ul class="squ mb-6">
          <li>月は、50倍で全体がはっきり見え、100倍になるとクレーターの様子がわかります</li>
          <li>土星は、100倍程度で環が見え、環の濃淡がわかります</li>
          <li>木星は、50倍くらいで4つの衛星が見え、100倍くらいからおおよその縞模様がわかります</li>
        </ul>

        <v-container>
          <p class="page-color font-weight-bold">▼倍率別 月の見え方</p>
          <v-row>
            <v-col cols="12">
              <v-img src="/ec/images2/special/camera/astronomical/telescope/img_04.jpg" max-width="100%" height="auto"> </v-img>
            </v-col>
          </v-row>
          <p class="page-color font-weight-bold">▼150倍で月・金星・木星・土星を見たイメージ</p>
          <v-row>
            <v-col cols="12">
              <v-img src="/ec/images2/special/camera/astronomical/telescope/img_12.jpg" max-width="100%" height="auto"> </v-img>
            </v-col>
          </v-row>
          <p class="page-color font-weight-bold">▼50倍と150倍で見た、月と惑星（金星・火星・木星・土星）の大きさ比率イメージ</p>
          <v-row>
            <v-col cols="12">
              <v-img src="/ec/images2/special/camera/astronomical/telescope/img_07.jpg" max-width="100%" height="auto"> </v-img>
            </v-col>
          </v-row>
        </v-container>

        <div class="balloon">
          <h4 class="imgtitle my-4">担当者おすすめの倍率★</h4>
          <p>
            <span class="red--text yellow lighten-3">50倍前後の低倍率で見る土星や木星は、アクセサリーみたいでとってもかわいい</span
            >です♪<br />ぜひ、女性と一緒に見てみてください★
          </p>
        </div>

        <h4 class="imgtitle my-4">天体望遠鏡の倍率について</h4>
        <p class="text-justify text-h6">
          天体望遠鏡の倍率の求め方は、<br /><span class="red--text mr-4">対物レンズの焦点距離÷接眼レンズの焦点距離＝倍率</span>です。
        </p>
        <p class="text-justify text-h6">
          例①<br />ポルタII A80Mf(焦点距離 910mm)と、接眼レンズPL20mm(焦点距離 20mm)を組み合わせた場合・・・<br />910 ÷ 20 =<span class="red--text mx-4"
            >45.5倍 (約46倍)</span
          >となります。
        </p>
        <p class="text-justify text-h6">
          例②<br />ポルタII A80Mf(焦点距離910mm)と、<router-link to="/ec/pd/4955295372072" class="indigo--text">接眼レンズSLV10mm(焦点距離 10mm)</router-link
          >を組み合わせた場合・・・<br />910 ÷ 10 =<span class="red--text mx-4">91倍</span>となります。
        </p>

        <h4 class="imgtitle my-8">適正倍率で見ることがポイント</h4>
        <v-row>
          <v-col cols="12" sm="7">
            <p>
              天体望遠鏡は理論上いくらでも高倍率にできますが、<span class="red--text yellow lighten-3 mx-4">倍率が大きいほど、よく見えるわけではありません</span
              >。<span class="red--text yellow lighten-3 mx-4">適正倍率までで見ることがポイント</span>です。適正倍率以上で見ると、星がぼやけてしまいます。
              適正倍率の求め方は、<span class="red--text yellow lighten-3 mx-4">対物レンズ（鏡）有効径の約2.5倍</span>です。
            </p>
          </v-col>
          <v-col cols="12" sm="5"><v-img src="/ec/images2/special/camera/astronomical/telescope/mg-stn1.jpg" max-width="100%" height="auto"></v-img></v-col>
        </v-row>

        <!--↓ 価格・人気アクセサリー-->
        <h2 class="page-color mt-10 mb-7" id="list">おすすめ天体望遠鏡 商品・価格一覧</h2>
        <v-divider></v-divider>
        <!-- ↓ サンプル：特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="my-5" :specialId="1379" />
        <!-- ↑ サンプル：特集IDでの商品一覧表示 -->
        <!--↓ 価格・人気アクセサリー-->

        <!--↓ ショッピングクレジット-->
        <shoppingCredit :installmentPaymentExampleList="installmentPaymentExampleList" :title="'天体望遠鏡'" :isMomoBtn="false" />

        <v-row class="mb-8" justify="end">
          <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }">
              <v-btn block height="50px" :elevation="hover ? 12 : 2" :color="hover ? '#119ce3' : '#0972c0'" :href="'/ec/guide/s_credit_01'">
                <span class="white--text font-weight-bold text-subtitle-1">→ ショッピングクレジットを詳しく見る</span></v-btn
              >
            </v-hover>
          </v-col>
        </v-row>

        <!--↓ 価格・人気アクセサリー-->
        <h2 class="page-color mt-4">月・惑星の写真をおしゃれにプリント♪</h2>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="pa-4">
              <v-img src="/ec/images2/special/camera/astronomical/telescope/corajyu.jpg" max-width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="pa-4">
              <h4 class="imgtitle mb-4">デザインコラージュプリント</h4>
              <p class="mb-4">月食やスーパームーン、かわいい土星を撮影したら、コレ♪<br />デザイン性の高いおしゃれなテンプレートで、天体写真が作れます。</p>
              <v-btn
                block
                elevation="6"
                height="45px"
                color="#FAD516"
                :href="'https://www.kitamura-print.com/print/design_collage/'"
                class="brown--text text-subtitle-1 font-weight-bold my-4"
              >
                お店で注文</v-btn
              >
              <v-btn
                block
                elevation="6"
                height="45px"
                color="#FFA600"
                :href="'https://www.kitamura-print.com/print/design_collage/?_ga=2.198533999.1902037495.1627264363-279164427.1627285160'"
                class="white--text text-subtitle-1 font-weight-bold my-4"
              >
                ネットで注文</v-btn
              >
            </v-col>
          </v-row>
        </v-container>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <h2 class="page-color mt-8" id="tokusyu">関連おすすめ特集・アプリ</h2>
        <v-divider></v-divider>
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
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'telescope',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    tableOfContentsNavi: TableOfContentsNavi,
    shoppingCredit: ShoppingCredit,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'おすすめ天体望遠鏡の選び方 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '初心者にもおすすめ♪天体望遠鏡の選び方をまとめました★ビクセン天体望遠鏡のおすすめ理由や月や木星・土星の倍率イメージなど！天体望遠鏡はカメラのキタムラへおまかせください。'
    )
    const state = reactive({
      naviList: [
        { naviItem: '天体望遠鏡の\n種類 ', href: '#select' },
        { naviItem: 'おすすめの\n天体望遠鏡 ', href: '#pickup' },
        { naviItem: '月や惑星の\n見え方', href: '#magnification' },
        { naviItem: '天体望遠鏡\n価格一覧 ', href: '#list' },
        { naviItem: '関連おすすめ\n特集一覧', href: '#tokusyu' }
      ],
      installmentPaymentExampleList: [
        { productPrice: '109,962', numberOfDivisions: '30', monthlyPayment: '3,666' },
        { productPrice: '33,174', numberOfDivisions: '10', monthlyPayment: '3,318' },
      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/hosizora/',
          img: 'https://shopimg.kitamura.jp/images/banner/5032.png',
          alt: '星空総合ページ'
        },
        {
          href: 'https://www.vixen.co.jp/app/nebulabook/',
          img: 'https://shopimg.kitamura.jp/images/banner/3439.gif',
          alt: '星雲・星団・銀河等の天体撮影を支援するアプリ「Nebula Book」'
        },
        {
          href: 'https://www.vixen.co.jp/app/planet-book/',
          img: '/ec/images2/special/camera/astronomical/telescope/bnr_planetbook350-130.jpg',
          alt: '惑星の方角を調べるアプリ「Planet Book」'
        }
      ],
      visible: false,
      index: 0, // default: 0
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '天体観測スケジュール',
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/astronomical',
          disabled: false
        },
        {
          path: 'おすすめ天体望遠鏡の選び方',
          disabled: true
        }
      ],
      // 取得するJancode
      productJanCodeList: ['4955295327539'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
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
.newline {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.page-color {
  color: #000066;
}
.ossm {
  width: 100%;
  height: auto;
  padding: 5px 0px;
  box-sizing: border-box;
}
.bg-buru {
  height: auto;
  color: #ffffff !important;
  padding: 10px 0;
  background: rgb(61, 83, 150);
  background: linear-gradient(90deg, rgba(61, 83, 150, 1) 0%, rgba(115, 132, 203, 1) 100%);
}
.bg-buru a {
  display: block;
  width: 100%;
  height: 100%;
}
.bd-rgr {
  border-right: 1px dashed #cccccc;
}

ul.squ li {
  list-style-type: square;
}

.balloon {
  height: 150px;
  background-image: url(/ec/images2/special/camera/astronomical/telescope/bg_balloon.jpg);
  background-repeat: no-repeat;
  background-position: right bottom;
}

.imgtitle {
  width: 100%;
  height: auto;
  padding: 10px 0px 10px 30px;
  font-weight: 800;
  color: #313131;
  background-image: url(/ec/images2/special/camera/astronomical/telescope/bg_imgtitle.gif);
  background-repeat: no-repeat;
  box-sizing: border-box;
  line-height: 1.2em;
}

.nbtna {
  height: 60px;
  font-size: 14px;
  background-image: url(/ec/images2/special/camera/astronomical/telescope/bg_btn.jpg);
  background-repeat: no-repeat;
  text-align: center;
  font-weight: normal;
  line-height: 1.5em;
  text-decoration: none;
  padding: 5% 0;
  box-sizing: border-box;
}

.nbtna:hover {
  text-decoration: underline;
}

.subtitle {
  width: 100%;
  height: auto;
  color: #000066;
  background-image: url(/ec/images2/special/camera/astronomical/telescope/bg_subtitle.jpg);
  background-repeat: no-repeat;
  border-bottom: 1px #000066 solid;
  padding: 0 0 5px 30px;
  box-sizing: border-box;
  line-height: 1.3em;
  font-weight: bold;
  font-size: 20px;
}
</style>