<template>
  <v-app>
    <div class="nikon-d810">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'5px 0px 0px 5px'"
          :topTitle="'Nikon D810'"
          :topTitleText="'ニコンフルサイズ\nデジタル一眼レフカメラ新製品'"
          :titleFontsize="'300%'"
          :textFontsize="'18px'"
        />

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :cols="10" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--比較レビュー-->
        <div id="revue">
          <subText :textItem="'ニコン D810 D800 比較レビュー'" />
          <characteristic :characteristics="revueList" />
        </div>

        <subText :textItem="'ニコン D810 価格/お得な情報'" id="price" />
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1140" />

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-list?category=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&keyword=%CE%B17&maker=%E3%82%BD%E3%83%8B%E3%83%BC%EF%BC%88SONY%EF%BC%89&s2=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s3=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s4=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s5=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s7=&n2c=&n3c=&n4c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort='"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/sony/a9/bnr_shitadori_350-130.gif'"
        />

        <subText :textItem="'ニコン D810 ３大特徴'" />
        <characteristic :characteristics="characteristicList" />

        <subText :textItem="'ニコン D810 スペック'" />
        <characteristic :characteristics="specList" />

        <subText :textItem="'ニコン D810 アクセサリー・レンズ ★人気BEST5★'" id="acc" />
        <p class="pttexb">
          ★人気No.1＞＞＞【【 予備バッテリー 】】<br />
          <span class="bgtypetitle">電池残量を気にせず、撮影に集中できる！<br /> </span>
          <a href="/ec/pd/4960759127457">ニコン Li-ionリチャージャブルバッテリー EN-EL15</a>
        </p>
        <p class="pttexb">
          ★人気No.2＞＞＞【【 バッテリーグリップ 】】<br />
          <span class="bgtypetitle">撮影可能枚数をかなり増やせ、縦位置撮影にも便利！ </span><br />
          <a href="/ec/pd/4960759128720">ニコン マルチパワーバッテリーパック MB-D12</a>
        </p>
        <p class="pttexb">
          ★人気No.3＞＞＞【【 信頼のサンディスク製 CFメモリーカード 】】<br />
          <a href="/ec/pd/4523052010132">サンディスク Extreme PRO UDMA 7 コンパクトフラッシュ カード 64GB</a>
        </p>
        <p class="pttexb">
          ★人気No.4＞＞＞【【 液晶保護フィルム 】】<br />
          <span class="bgtypetitle">背面モニター保護の必需品！ </span><br />
          <a href=" /ec/pd/4975981733192">エツミ E-7331 デジタルカメラ用保護フィルムZERO ニコン D810専用</a>
        </p>
        <p class="pttexb">
          ★人気No.5＞＞＞【【 交換レンズ 】】<br />
          <span class="bgtypetitle">使いやすい広角～5倍ズーム！</span>
          <a href="/ec/pd/4960759026057">ニコン AF-S NIKKOR 24-120mm F4G ED VR</a> <br />
          <span class="bgtypetitle">10.7倍の超高倍率ズーム！</span>
          <a href="/ec/pd/4960759026002">ニコン AF-S NIKKOR 28-300mm F3.5-5.6G ED VR</a>
        </p>
        <p class="pttexb">
          ★番外編＞＞＞【【 おすすめカメラバッグ 】】<br />
          <span class="bgtypetitle">おしゃれなデザインでセンスが光る</span>
          <a
            href="/ec/pd/list.html?searchbox=1&sort=number20%2Crank%2CScore&index=all&path=&q=%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%97%E3%83%A9%E3%83%BC++7%E3%83%9F%E3%83%AA%E3%82%AA%E3%83%B3%E3%83%80%E3%83%A9%E3%83%BC%E3%83%BB%E3%83%9B%E3%83%BC%E3%83%A0&x=0&y=0"
            >クランプラー MD7003 7ミリオンダラー・ホーム</a
          >
          <br />
          <span class="bgtypetitle">カメラや機材を素早く取り出せる</span>
          <a
            href="/ec/pd/list.html?searchbox=1&sort=number20%2Crank%2CScore&index=all&path=&q=%E3%83%8B%E3%82%B3%E3%83%B3+%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%AA%E3%83%A5%E3%83%83%E3%82%AF&x=0&y=0"
            >ニコン スマートカメラリュック</a
          >
        </p>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン D810 外観画像'" />
          <p class="text-subtitle-1">ニコン D810 の外観画像。正面・側面・背面・上下面</p>
          <appearanceImage :src="appearanceImagePath" :count="3" :type="2" />
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';

export default Vue.extend({
  name: 'nikon-d810',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    naviBtn: NaviBtn,
    'product-list-by-special-id': ProductListBySpecialId,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
  },
  setup: () => {
    document.title = 'Nikon D810 ニコンデジタル一眼レフカメラ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン デジタル一眼レフ新製品｢Nikon D810｣特集。ニコン史上最高画質「Nikon D810」。D800との比較レビューや価格・スペックをチェック！全国1000店舗のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d810/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d810/img_top.jpg',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d810',
      naviList: [
        { naviItem: '比較レビュー', href: '#revue' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '人気アクセサリー', href: '#acc' },
        { naviItem: '外観画像', href: '#images' }
      ],
      revueList: [
        {
          subtitle: 'ニコン史上最高画質「Nikon D810」D800Eより、D4sより高画質と言われる理由は・・・',
          contents: [
            'ニコンのフラグシックモデルD4sと同じ画像処理エンジンEXPEED 4を搭載し、ローパスフィルターの低減機能を搭載したD800Eとちがって、はじめから光学ローパスフィルターレス仕様',
            'ニコンのサイトから無料でダウンロードできる新しいRAW現像ソフトCapture NX-Dで、明暗、色ともに階調性豊かに仕上げられ、写真をご自分で調整して仕上げることにこだわる上級ユーザーにおすすめ',
          ]
        },
        {
          subtitle: 'さらに進化したISO・機能「Nikon D810」',
          contents: [
            '高画素のカメラに禁物なブレは、電子先幕シャッターで防ぎます。3635万画素の鮮鋭感を活かせます',
            'ISO感度が64～12800になり、特に低感度での撮影の幅が広がりそうです。明るい環境でも、白飛びを抑えた階調豊かな写真が残せます',
          ]
        },
      ],
      characteristicList: [
        {
          subtitle: 'ニコン史上最高画質のフルサイズデジタル一眼レフ「Nikon D810」',
          contents: [
            '圧倒的に鮮鋭感が高く階調性が豊かなニコン史上最高の画質',
            '撮影の確実性を高め撮影領域を拡大した高い信頼性と優れた操作性',
            '1080/60pの高鮮鋭・高画質動画'
          ]
        },
      ],
      specList: [
        {
          subtitle: '',
          contents: [
            'ローパスフィルターレス仕様により3635万画素の鮮鋭感をさらに高めて高画質を実現',
            'EXPEED 4搭載で常用感度ISO64～12800を実現',
            '機構ブレを極力低減する電子先幕シャッター搭載',
            '撮影の確実性を高め撮影領域を拡大した高い信頼性と優れた操作性'
          ]
        },
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ニコン D810',
          disabled: true
        }
      ],
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
td.point {
    background-color: #FFBFC0;
    font-weight: bold;
}
.pttexb {
  margin: 0px 0px 10px 10px;
}
.bgtypetitle {
    background-color: #ffffcc;
    margin-left: 0.3em;
    margin-right: 0.3em;
}
</style>