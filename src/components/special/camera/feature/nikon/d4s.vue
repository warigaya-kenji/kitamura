<template>
  <v-app>
    <div class="d4s">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/d5/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/d5/sp_img_top.jpg'"
          :topTitle="'ニコン D4S'"
          :topTitleText="'Nikon FXフォーマット\nデジタル一眼レフ 新製品'"
          :padding="'5px 0px 0px 5px'"
          :textPadding="'0px 0px 0px 25px'"
          :titleFontsize="'40px'"
          :textFontsize="'18px'"
        />

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">Nikon D4S</p>
        <naviBtn :naviList="naviList" :hoverColor="'yellow'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--特徴-->
        <subText :textItem="'｢ニコン D4S｣ Nikonデジタル一眼レフカメラ新製品 スペック'" id="point" />
        <p class="marker">プロ・現場カメラマンの意見を取り入れさらに進化したフラグシップ機｢ニコン D4S｣</p>
        <characteristic :characteristics="characteristicList" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'｢ニコン D4S｣ Nikonデジタル一眼レフカメラ新製品  価格'" id="price" />
        <product-list-by-special-id class="mb-5" :specialId="959" />

        <subText :textItem="'お得な情報'" id="price" />
        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-price'"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/nikon/d4s/bnr_shitadorid800_350-130.gif'"
        />

        <!--外観画像-->
        <div id="images">
          <subText :textItem="'｢ニコン D4S｣ Nikonデジタル一眼レフカメラ新製品 外観画像'" />
          <p class="text-subtitle-1">ニコン D4S の外観画像。正面・上部・背面</p>
          <v-img src="/ec/images2/special/camera/feature/nikon/d4s/img_a.gif" max-width="720" height="auto" class="mx-auto"></v-img>
          <v-img src="/ec/images2/special/camera/feature/nikon/d4s/img_b.gif" max-width="720" height="auto" class="mx-auto"></v-img>
        </div>

        <!--作例写真-->
        <div id="images2">
          <subText :textItem="'｢ニコン D4S｣ Nikonデジタル一眼レフカメラ新製品 作例写真'" />
          <p class="text-subtitle-1">ニコン D4Sの作例写真。※サンプル機材による撮影</p>
          <v-row>
            <v-col cols="12" sm="6" v-for="(samplePhoto, i) in samplePhotoList" :key="i">
              <a :href="samplePhoto" target="_blank">
                <v-img :src="samplePhoto" max-width="100%" height="auto" class="hover"></v-img>
              </a>
            </v-col>
          </v-row>
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'd4s',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: () => {
    document.title = 'Nikon D4S ニコンデジタル一眼レフカメラ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン デジタル一眼レフ新製品｢Nikon D4S｣特集。FXフォーマットのフラグシップ機。スペックや価格をチェック。新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' },
        { naviItem: '作例写真', href: '#images2' },
      ],
      characteristicList: [
        {
          subtitle: '高感度性能が向上',
          contents: [
            '画像処理エンジンEXPEED4搭載で常用感度ISO100～25600、拡張時ISO50～409600の幅広い感度領域を実現'
          ]
        },
        {
          subtitle: 'AF性能をさらに強化',
          contents: [
            '新機能グループエリアAFで動きの激しい被写体でも狙った瞬間を逃さない'
          ]
        },
        {
          subtitle: '連続撮影がさらに進化',
          contents: [
            'AF・AE追従での高速連続撮影約11コマ/秒を実現'
          ]
        }
      ],
      samplePhotoList: [
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d4s/D4S_DB_2573_WEB_L.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d4s/D4S_DB_3962_WEB_L.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d4s/D4S_RB_1294_WEB_L.jpg',
        process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/nikon/d4s/D4S_DB_3050_WEB_L.jpg',
      ],
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
          path: '｢ニコン D4S｣ Nikonデジタル一眼レフカメラ新製品',
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