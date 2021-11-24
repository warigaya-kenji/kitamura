<template>
  <v-app>
    <div class="canon-1dxmk2">
      <div class="w720 px-2 px-sm-0">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'20px 0px 0px 20px'"
          :topTitle="'EOS-1D X MarkII'"
          :topTitleText="'フルサイズ デジタル一眼レフカメラ\nキヤノン 新製品'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'キヤノン EOS-1D X MarkII/ EOS-1D X /ニコン D5 比較'" id="hikaku" />
        <p class="marker">
          <strong>"革新と熟成"新設計のフラッグシップ EOS「Canon EOS-1D X MarkII」と<br />「EOS-1D X」、「Nikon D5」を比較しました。</strong>
        </p>
        <router-link to="/ec/pd/compareproducts?prd=4549292060485-4960999819846-4960759146205">
          <v-img
            :src="
              $vuetify.breakpoint.mdAndUp
                ? 'https://shop.kitamura.jp/ts_rsc/730/images/btn_comparison.gif'
                : 'https://shop.kitamura.jp/ts_rsc/730/images/btnsp_comparison.gif'
            "
            alt="Canon EOS-1D X MarkII、EOS-1D X、ニコン D5の機能を比較する"
            class="hover"
          >
          </v-img>
        </router-link>

        <subText :textItem="'キヤノン EOS-1D X MarkII 価格・お得な情報'" id="price" />
        <p class="text-subtitle-1 font-weight-black marker">キヤノン EOS-1D X MarkII 商品一覧</p>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="2004" />

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <p class="text-subtitle-1 font-weight-black marker">キヤノン EOS-1D X MarkII お得な情報</p>
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=EOS-1D%20X&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=30&tokutoku=0&sort=keyword'"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/canon/1dxmk2/bnr_shitadori_350-130.gif'"
        />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'キヤノン EOS-1D X MarkII ３大特徴'" />
          <p>従来機種より、さらなる高画質化と高速連写を実現。さらに動画撮影機能と通信機能も強化された「Canon EOS-1D X MarkII」</p>
          <characteristic :characteristics="characteristicList" />
          <subText :textItem="'キヤノン EOS-1D X MarkII スペック'" />
          <characteristic :characteristics="characteristicList2" />
        </div>

        <!--外観画像ー-->
        <div id="images" class="mb-4">
          <subText :textItem="'キヤノン EOS-1D X MarkII 外観画像'" />
          <p class="text-subtitle-1">
            キヤノン EOS-1D X MarkII の外観画像。正面・背面・上面・キヤノン EF24-70mm F2.8L II USM、キヤノン EF400mm F2.8L IS II USM装着イメージ
          </p>
          <v-row>
            <v-col cols="12" v-for="(appearanceImage, i) in appearanceImageList" :key="i">
              <v-img :src="appearanceImage.src" :alt="appearanceImage.alt" max-width="710" height="auto" class="mx-auto"> </v-img>
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
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'canon-1dxmk2',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    naviBtn: NaviBtn,
    'product-list-by-special-id': ProductListBySpecialId,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'Canon EOS-1D X MarkII キヤノン フルサイズデジタル一眼レフカメラ 新製品 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン デジタル一眼レフ新製品｢Canon EOS-1D X MarkII｣特集。さらなる高速連写機能の開発と高感度性能を追及し、今まで撮影出来なかった「一瞬」を捉える”革新と熟成”をコンセプトに基づき開発された、新設計のフラッグシップEOS。「EOS-1D X」と「ニコン D5」との比較や価格・スペック・お得な情報をチェック！新製品ならカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')
    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk2/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk2/sp_img_top.jpg',
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
          path: 'Canon EOS-1D X MarkII キヤノン フルサイズ一眼レフカメラ',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '自社開発CMOSセンサーや新映像エンジンによる高画質',
          contents: [
            '5mmフルサイズ、約2,020万画素のCMOSセンサー搭載&高性能な新映像エンジン「DIGIC 6+」を2基搭載した「デュアルDIGIC 6+」の採用で高画質と高速連写性能を両立。さらに、静止画撮影時において常用ISO51200（拡張ISO409600相当）の高感度を実現しました。',
          ]
        },
        {
          subtitle: '高精度のAFと最高約14コマ/秒の高速連写を両立',
          contents: [
            '新開発のミラー駆動機構と新映像エンジン「デュアルDIGIC 6+」の組み合わせによりAF・AE追従で最高約14コマ/秒の高速連写を実現。 さらに従来機種と比べて左右の周辺測距エリアは縦方向に約24％、中央測距エリアでは縦方向に約8.6％拡大し、被写体捕捉性能が向上しました。',
          ]
        },
        {
          subtitle: 'キヤノン独自の撮像面位相差AF技術などによる動画撮影性能の強化',
          contents: [
            '「デュアルピクセルCMOS AF」の採用で、素早く追従性の高いAFを実現。新規格のCFast2.0に対応しており、4K／60pによる高精細で滑らかな動画撮影が可能です。さらに4K動画から任意のフレームを選択し、約880万画素の静止画（JPEG画像）として保存することができる「4Kフレームキャプチャー機能」を新たに搭載。',
          ]
        }
      ],
      characteristicList2: [
        {
          subtitle: '”革新と熟成”をコンセプトに基づき開発された、新設計のフラッグシップEOS',
          contents: [
            '自社開発の35mmフルサイズ、約2020万画素のCMOSセンサーや新映像エンジンによる高画質',
            '高精度のAF・AE(自動露出制御)と最高約14コマ/秒の高速連写性能を両立',
            'キヤノン独自の撮像面位相差AF技術などによる動画撮影性能の強化',
            'GPSユニット内蔵で位置情報を画像に記録可能。プロのニーズに応える通信機能の強化',
            '過酷な環境下にも対応する防塵・防滴性能と堅牢性。本体から発生する熱をヒートパイプを通して拡散',
          ]
        },
      ],
      appearanceImageList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk2/img_a.jpg', alt: 'キヤノン EOS-1D X MarkIIの正面・背面画像' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk2/img_b.jpg', alt: 'キヤノン EOS-1D X MarkIIの上面・キヤノン EF24-70mm F2.8L II USMレンズ装着画像' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk2/img_c.jpg', alt: 'キヤノン EF400mm F2.8L IS II レンズ装着イメージ' },
      ],
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
          href: '/ec/guide/s_credit_01l',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
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
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>