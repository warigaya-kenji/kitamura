<template>
  <v-app>
    <div class="telescope">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <div class="text-right">
          <v-btn
            color="orange darken-2"
            class="white--text body-2 mb-1"
            v-clipboard:copy="'https://shop.kitamura.jp/ec/special/camera/feature/canon/tripod'"
            v-clipboard:success="onCopy"
            height="30px"
            >≫ このページのURLをコピーする</v-btn
          >
          <p class="caption">
            <a href="/special/sale-fair/page/bookmark/" target="_blank"> (?)ブラウザ別 お気に入り・ブックマーク登録方法</a>
          </p>
        </div>

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

        <!--↓アンカー-->
        <v-container class="mb-10">
          <v-row class="">
            <v-col v-for="navi in naviList" :key="navi">
              <v-btn block color="indigo" class="white--text text-center pa-4 newline" :href="navi.href">
                {{ navi.naviItem }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!--↓天体望遠鏡の種類-->
        <div class="mb-12">
          <h2 class="page-color">天体望遠鏡の種類</h2>
          <v-divider></v-divider>
          <p class="my-4">
            <span class="red--text yellow lighten-3">天体望遠鏡は、主に2つの種類</span>に分けられます。<span class="red--text yellow lighten-3"
              >屈折式と反射式の2種類</span
            >です。まずは、それぞれの特徴をおさえましょう。
          </p>
          <v-row class="mt-2">
            <v-col cols="12" sm="6">
              <h3 class="page-color">
                <v-img src="/ec/images2/special/camera/astronomical/telescope/point_01.png"></v-img
                ><span class="text-subtitle-2">使い方がカンタン♪</span>屈折式天体望遠鏡
              </h3>
              <div>
                <v-img
                  src="https://shopimg.kitamura.jp/images/pd/679/6ac/2fd/dae/166/c87/152/5d0/58c/069/d3q/3xd/9e2/4/M.jpg"
                  max-width="60%"
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
                <v-img src="/ec/images2/special/camera/astronomical/telescope/point_01.png"></v-img
                ><span class="text-subtitle-2">高倍率を楽める本格派！</span>反射式天体望遠鏡
              </h3>
              <div>
                <v-img
                  src="https://shopimg.kitamura.jp/images/pd/db7/6ff/f9e/465/cfe/910/5a6/818/77d/f23/d20/f6k/ikr/j/M.jpg"
                  max-width="60%"
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
        <div>
          <h2 class="page-color">おすすめの天体望遠鏡</h2>
          <v-divider></v-divider>
          <p class="text-left line-height py-6">
            おすすめの天体望遠鏡は、ずばり、
            <span class="red--text yellow lighten-3">ビクセンのポルタシリーズ</span>です。
            です。見たい天体の方向へ、望遠鏡を縦・横に自由に動かせるフリーストップ式で、<span class="red--text yellow lighten-3"
              >初心者さんや、お子様との観測でも使いやすいシリーズ</span
            >です◎<br />お手頃価格なスペースアイ600も人気です☆
          </p>
          <v-row class="mb-6">
            <v-col cols="12" sm="4" class="bd-rgr">
              <h3 class="ossm page-color">
                初心者でも安心♪<br />
                撮影もできる天体望遠鏡
              </h3>
              <v-img src="/ec/images2/special/camera/astronomical/telescope/img_01.jpg" max-width="60%" height="auto"></v-img>
              <p class="text-left line-height">
                初心者でも扱いやすい屈折式で、<span class="red--text yellow lighten-3">ゆくゆくはデジカメや小型一眼で写真を撮ってみたい人は、迷わずコレ</span
                >！<br />
                使いやすさはもちろん、APS-Cのデジタル一眼レフくらいまでなら、撮影が可能です。<br />
                耐加重があり、カメラを付けたときの「たわみ」や強度・風ブレの影響を、受けにくいです。
              </p>
              <a
                href="/ec/pd/list_dtl.html?index=all&searchbox=1&sort=number20%2CScore&q=%E3%83%93%E3%82%AF%E3%82%BB%E3%83%B3+%E3%83%9D%E3%83%AB%E3%82%BFII+A80Mf&path=&y=0%3Fref%3Dtelescope&x=0"
              >
                <v-btn block class="bg-buru pa-4"> おすすめ天体望遠鏡<br />ビクセン ポルタII A80Mf</v-btn></a
              >
            </v-col>

            <v-col cols="12" sm="4" class="bd-rgr">
              <h3 class="ossm page-color">高倍率を楽しみたい！br /> 本格派の天体望遠鏡</h3>
              <v-img src="/ec/images2/special/camera/astronomical/telescope/img_02.jpg" max-width="60%" height="auto"></v-img>
              <p class="text-left line-height">
                本格的に天体観測をしたい人向け。<span class="red--text yellow lighten-3">別売の接眼レンズを使えば、20倍～260倍と幅広い倍率で観測ができます</span
                >。<br />
                外に出してから30～40分くらいは筒の内外で気温差が発生するため、もやもやと見えたり、大気の状況に見え方が左右されやすかったりと、扱いが少し難しい部分もあります。
              </p>
              <a
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%83%93%E3%82%AF%E3%82%BB%E3%83%B3%20%20%E3%83%9D%E3%83%AB%E3%82%BFII%20R130Sf&category=&index=all&searchbox=1&sort=number20,Score&q=%E3%83%93%E3%82%AF%E3%82%BB%E3%83%B3%20%20%E3%83%9D%E3%83%AB%E3%82%BFII%20R130Sf&path=&y=0%3Fref%3Dtelescope&x=0"
              >
                <v-btn block class="bg-buru pa-4"> おすすめ天体望遠鏡<br />ビクセン ポルタII R130Sf</v-btn></a
              >
            </v-col>

            <v-col cols="12" sm="4" class="bd-rgr">
              <h3 class="ossm page-color">
                簡単操作で<br />
                お手頃価格な天体望遠鏡
              </h3>
              <v-img src="/ec/images2/special/camera/astronomical/telescope/img_03.jpg" max-width="60%" height="auto"></v-img>
              <p class="text-left line-height">
                ビクセン スペースアイ600は、お子様へのプレゼントや、これから天体観測を始めたい初心者さんにピッタリの、お手頃価格がうれしい天体望遠鏡です。<br />
                月のクレーターから木星の衛星、土星のリングまで幅広く観測できます。 また、3.3kgと軽量・コンパクトなので、<span class="red--text yellow lighten-3"
                  >組立や操作がとても簡単です</span
                >!
              </p>
              <a
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%82%A2%E3%82%A4&category=&r=&q=%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%82%A2%E3%82%A4&path=&index=all&sort=number20,Number17,Score&searchbox=1"
              >
                <v-btn block class="bg-buru pa-4"> おすすめ天体望遠鏡<br />ビクセン ビクセン スペースアイ600</v-btn></a
              >
            </v-col>
          </v-row>
        </div>

        <!--↓月や惑星の見え方 倍率による違い-->
        <h2 class="page-color">月や惑星の見え方 倍率による違い</h2>
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

        <div class="blloon">
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
          例②<br />ポルタII A80Mf(焦点距離910mm)と、<a href="/ec/pd/4955295372072" class="indigo--text">接眼レンズSLV10mm(焦点距離 10mm)</a
          >を組み合わせた場合・・・<br />910 ÷ 10 =<span class="red--text mx-4">91倍</span>となります。
        </p>

        <h4 class="imgtitle my-8">適正倍率で見ることがポイント</h4>
        <v-row>
          <v-col cols="12" sm="7">
            <p>
              天体望遠鏡は理論上いくらでも高倍率にできますが、<span class="red--text mx-4">倍率が大きいほど、よく見えるわけではありません</span>。<span
                class="red--text mx-4"
                >適正倍率までで見ることがポイント</span
              >です。適正倍率以上で見ると、星がぼやけてしまいます。 適正倍率の求め方は、<span class="red--text mx-4">対物レンズ（鏡）有効径の約2.5倍</span
              >です。
            </p>
          </v-col>
          <v-col cols="12" sm="5"><v-img src="/ec/images2/special/camera/astronomical/telescope/mg-stn1.jpg" max-width="100%" height="auto"></v-img></v-col>
        </v-row>

        <!--↓ 価格・人気アクセサリー-->
        <h2 class="page-color mt-10">おすすめ天体望遠鏡 商品・価格一覧</h2>
        <v-divider></v-divider>
        <v-container class="mb-10">
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
        <!--↓ 価格・人気アクセサリー-->

        <div>
          <span>天体望遠鏡を買うなら、お支払いラクラク♪</span><br />
          <h4 class="my-4"><v-icon color="red">fas fa-chevron-double-down</v-icon>ショッピングクレジット</h4>
          <p>
            カメラのキタムラおすすめの『ショッピングクレジット』なら<span class="red--text">最長48回払いまで金利手数料が「0円」</span
            >!<br />ショッピングクレジットをぜひご利用ください！
          </p>

          <h3>分割払い例</h3>
          <v-container class="ba-gr">
            <v-row class="mb-4">
              <v-col cols="6">
                <h4 class="red--text">分割払い例①</h4>
                <div class="s-credit text-center">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>109,962<span>円</span></td>
                        <td>30<span>回</span></td>
                        <td class="txt-org"><span>約</span>3,666<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
              <v-col cols="6">
                <h4 class="red--text">分割払い例②</h4>
                <div class="s-credit text-center">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>33,174円<span>円</span></td>
                        <td>10<span>回</span></td>
                        <td class="txt-org"><span>約</span>3,318<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <p class="my-2">※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます</p>
          <div class="text-right mb-8">
            <v-btn
              elevation="6"
              color="#0972c0"
              :href="'https://shop.kitamura.jp/sitemap/s_credit_01.html'"
              class="white--text font-weight-bold pa-4"
              width="50%"
            >
              → ショッピングクレジットを詳しく見る</v-btn
            >
          </div>
        </div>

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
                color="yellow"
                :href="'https://www.kitamura-print.com/print/design_collage/'"
                class="lime--text darken-4 font-weight-bold pa-4 my-4"
              >
                お店で注文</v-btn
              >
              <v-btn
                block
                elevation="6"
                color="orange"
                :href="'https://www.kitamura-print.com/print/design_collage/?_ga=2.198533999.1902037495.1627264363-279164427.1627285160'"
                class="white--text font-weight-bold pa-4 my-4"
              >
                ネットで注文</v-btn
              >
            </v-col>
          </v-row>
        </v-container>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <h2 class="page-color mt-8">関連おすすめ特集・アプリ</h2>
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
export default Vue.extend({
  name: 'telescope',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: '天体望遠鏡の\n種類 ', href: '#select' },
        { naviItem: 'おすすめの\n天体望遠鏡 ', href: '#pickup' },
        { naviItem: '月や惑星の\n見え方', href: '#magnification' },
        { naviItem: '天体望遠鏡\n価格一覧 ', href: '#list' },
        { naviItem: '関連おすすめ\n特集一覧', href: '#tokusyu' }
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
      index: 0 // default: 0
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    },
    showImg(index: number) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '天体観測スケジュール',
          linkUrl: 'https://shop.kitamura.jp/special/sale-fair/camera/astronomical/',
          disabled: false
        },
        {
          path: 'おすすめ天体望遠鏡の選び方',
          disabled: true
        }
      ],
      // 取得するJancode
      productJanCodeList: [
        '4955295327539',
        '4955295399529',
        '4955295399543',
        '4955295880003',
        '4955295399697',
        '4955295372072',
        '4955295372058',
        '4955295372027',
        '4955295372034',
        '4955295372225'
      ],
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
}
.page-color {
  color: #000066;
}

.ossm {
  width: 100%;
  height: auto;
  padding: 5px 0px;
  box-sizing: border-box;
  background-image: url(/ec/images2/special/camera/astronomical/telescope/bg_mst.jpg);
  background-repeat: no-repeat;
  background-position: top center;
}
.bg-buru {
  line-height: 1.2em;
  color: #ffffff !important;
  padding: 10px 0;
  background: rgb(61, 83, 150);
  background: linear-gradient(90deg, rgba(61, 83, 150, 1) 0%, rgba(115, 132, 203, 1) 100%);
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
  padding: 0px 0px 0px 30px;
  font-weight: 800;
  color: #313131;
  background-image: url(/ec/images2/special/camera/astronomical/telescope/bg_imgtitle.gif);
  background-repeat: no-repeat;
  box-sizing: border-box;
  line-height: 1.2em;
}
</style>