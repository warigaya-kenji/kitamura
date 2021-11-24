<template>
  <v-app>
    <div class="sony-a99ii">
      <div class="w720">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'20px 0px 0px 20px'"
          :topTitle="'SONY α99 II'"
          :topTitleText="'フルサイズ デジタル一眼カメラ\nソニー 新製品'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>
        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'SONY α99 II 価格・お得な情報'" id="price" />
        <p class="text-subtitle-1 font-weight-black marker">SONY α99 II 商品一覧</p>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="2397" />

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <p class="text-subtitle-1 font-weight-black marker">SONY α99 II お得な情報</p>
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%CE%B199&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=30&tokutoku=0&sort=add_date'"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/sony/a99ii/bnr_shitadori_350-130.gif'"
        />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'SONY α99 II ３大特徴'" />
          <p class="text-body-1 font-weight-bold">
            前モデルα99の発売から約4年。<br />多くのユーザーが待ち望んだフルサイズセンサー搭載Aマウントフラッグシップモデルが登場。<br />
            「α史上最高傑作」と呼ぶにふさわしい高性能なカメラへ進化しました。
          </p>
          <characteristic :characteristics="characteristicList" />
        </div>

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'SONY α99 II/ EOS-5D MarkIV /SONY α99 比較'" />
          <span class="text-body-1 marker mb-2"
            ><strong>待ちに待ったAマウントのフラッグシップ機「SONY α99 II」と「SONY α99」、「SONY α7RII」、「キヤノン 5D MarkIV」を比較しました。</strong></span
          >
          <v-img src="https://shop.kitamura.jp/ts_rsc/803/images/table_hikaku.gif" alt="SONY α99 II 新旧比較 ライバル機種"></v-img>
        </div>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'SONY α99 II 外観画像'" />
          <p class="text-subtitle-1">SONY α99 II の外観画像。SAL2470ZII装着イメージ</p>
          <appearanceImage :src="appearanceImagePath" :count="2" />
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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'sony-a99ii',
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
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'SONY α99 II ソニー フルサイズデジタル一眼カメラ 新製品 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'SONY デジタル一眼新製品｢α99 II｣特集。スピードと解像度を追求したAマウントフラッグシップ一眼がついに登場。前機種「α99」と「ニコン D810」との比較や価格・スペック・お得な情報をチェック！新製品ならカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')
    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a99ii/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a99ii/sp_img_top.jpg',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a99ii',
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
          path: 'SONY α99 II ソニー フルサイズ一眼カメラ',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'Aマウント史上最速のAFと連写性能を実現する、新開発ハイブリッド位相差検出AFシステム',
          contents: [
            '新開発ハイブリッド位相差検出AFシステムを採用することにより実現した、Aマウント史上最速のAFと連写性能。',
            'AF・AE追従最高約12コマ/秒の高速連写を実現。圧倒的なスピードで、撮影者の表現領域を拡大。',
            '全点選択可能な79点のハイブリッドクロス測距点採用で、優れた被写体捕捉能力を発揮。',
          ]
        },
        {
          subtitle: '有効約4240万画素の高解像度と、最高ISO102400の高感度・低ノイズを実現。',
          contents: [
            '有効約4240万画素の高解像度と最高ISO102400の高感度・低ノイズを実現する「Exmor R（エクスモア アール）」CMOSセンサー搭載。',
            '高速画像処理エンジン「BIONZ X（ビオンズ エックス）」と、その画像処理をサポートする新開発フロントエンドLSIの組み合わせで圧倒的な解像感と質感描写力を実現。',
            '有効4240万画素がもたらす圧倒的な解像性能を実現するために、光学ローパスフィルターレス仕様を採用。'
          ]
        },
        {
          subtitle: '有効約4240万画素の性能を最大限に引き出す、光学式5軸ボディ内手ブレ補正機構',
          contents: [
            'Aマウント用に新開発したフルサイズ対応5軸手ブレ補正機構を搭載。\n望遠撮影時の角度ブレ、マクロ撮影時のシフトブレ、夜景撮影時や動画撮影時の回転ブレを検出し補正。',
            '高精度ジャイロセンサーが細かいブレを正確に検出して補正を行い、最高4.5段分の補正効果を実現。',
            '静止画撮影中の手ブレ補正効果は、シャッターボタン半押し中やピント拡大表示中にライブビュー映像で確認可能。\n安定したライブビュー映像を確認しながらフレーミングやピント合わせが可能。'
          ]
        }
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