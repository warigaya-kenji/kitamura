<template>
  <v-app>
    <div class="vlogcam_zv1_zv1g">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/vlogcam_zv1_zv1g/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/vlogcam_zv1_zv1g/sp_img_top.jpg'"
          :topTitle="'VLOGCAM ZV-1/ZV-1G'"
          :topTitleText="'世界各国のVloggerの声を集めて、\nVlogに求められる機能と使い勝手を備えたカメラがついに誕生'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </p>

        <subText :textItem="'見せたいものや伝えたいことをかんたん操作で映える動画に。\nVlog撮影向け「VLOGCAM ZV-1」登場！'" />

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'VLOGCAM ZV-1/ZV-1G 価格・購入'" />
        <v-container>
          <v-card :id="index" class="line-g mt-10">
            <v-row justify="center">
              <v-col class="text-center" cols="12" sm="4">
                <a href="https://shop.kitamura.jp/ec/special/camera/feature/sony/vlogcam_zv1_zv1g/4709/?display=detail"
                  ><v-img :src="mainProductList[0].images[0].imagePath" max-width="80%" height="auto"></v-img>
                  <p class="main-product-name">{{ mainProductList[0].itemName }}</p>
                  <v-img :src="mainProductList[1].images[0].imagePath" max-width="80%" height="auto"></v-img>
                  <p class="main-product-name">{{ mainProductList[1].itemName }}</p>
                </a>
              </v-col>
              <v-col class="mt-4" cols="12" sm="8">
                <p class="mb-0 pa-4">世界各国のVloggerの声を集めて、Vlogに求められる機能と使い勝手を備えたカメラがついに誕生</p>
                <v-container class="text-center">
                  <p class="text-h6">
                    価格<span class="text-h4 red--text">{{ formatPrice(parseInt(mainProductList[0].price)) }}&nbsp;</span><span class="font-small">(円)</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-h5 font-weight-bold mb-10"
                    dark
                    color="red darken-2"
                    width="300px"
                    height="60px"
                    href="/ec/special/camera/feature/sony/vlogcam_zv1_zv1g/4709/?display=detail"
                  >
                    <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                    ご購入はこちら
                  </v-btn>
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'作例・メーカーサイトはこちら'" :url="'https://www.sony.jp/vlogcam/products/ZV-1/'" :height="'60px'" />

        <!--特徴-->
        <subText :textItem="'ソニー VLOGCAM ZV-1/ZV-1G の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />

        <!--同梱物-->
        <subText :textItem="'同梱物'" />
        <table class="spec">
          <tr>
            <th>商品名</th>
            <td>ZV-1</td>
            <td>ZV-1G</td>
          </tr>
          <tr>
            <th>同梱物</th>
            <td>
              リチャージャブルバッテリーパック (NP-BX1) <br />
              マイクロUSBケーブル <br />
              ウインドスクリーン <br />
              ウインドスクリーンアダプター <br />
              シューキャップ
            </td>
            <td>
              リチャージャブルバッテリーパック (NP-BX1)×2 (本体同梱含む) <br />
              マイクロUSBケーブル<br />
              ウインドスクリーン<br />
              ウインドスクリーンアダプター<br />
              シューキャップ<br />
              シューティンググリップ（GP-VPT2BT）
            </td>
          </tr>
        </table>

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ソニー VLOGCAM ZV-1｜動画も静止画もこれ1台で大満足！'" />
        <shasha
          :txt="'同じソニーコンパクトデジカメで気になるところのZV-1とRX100M 7との違いですが、大きく言えばコンセプトの違いによるもので、レンズの画角などは大きく違っていますが、センサーや画素数などは同じで動画重視か静止画重視の違いと言えます。ともに静止画も動画撮影もコンパクトカメラとは思えないほどの高スペックのカメラですが、RX100をベースに動画撮影をよりしやすくしたものがZV-1と言ってもいいでしょう。そのためにRX100シリーズでは無かったバリアングル...'"
          :href="'https://shasha.kitamura.jp/article/476958678.html'"
          :src="'/ec/images2/special/camera/feature/sony/vlogcam_zv1_zv1g/shashabnr.jpg'"
        />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー VLOGCAM ZV-1/ZV-1G 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <kitamuraService />

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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'vlogcam_zv1_zv1g',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService
  },
  setup: (props, context) => {
    document.title = 'ソニー VLOGCAM ZV-1/ZV-1G | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー VLOGCAM ZV-1/ZV-1G 好評発売中！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      characteristicList: [
        {
          subtitle: 'Vlogに適したユニークなワンプッシュ機能搭載。本格的で高画質な映像を、スマートフォンのようなかんたん操作で実現',
          contents: [
            'ボタンひとつで自撮り時の背景を「ぼけ」または「くっきり」に切り替えられる「背景ボケ切り換え」機能搭載\n背景をぼかして主役を引き立たせた印象的な映像にしたい時や、旅行中の景色など、主役に加えて背景情報もくっきりと見せたい時、それぞれ撮影中でも瞬時に表現の切り替えが可能',
            '顔と商品の間のスムーズなフォーカスの移動を、ボタンひとつで設定可能な「商品レビュー用設定」搭載\n商品などを動画で紹介する際に求められる、話の流れに沿って顔から商品へ、スムーズなフォーカスを切り替えを、ボタンひとつで実現可能'
          ]
        },
        {
          subtitle: '話し手の表情・声を際立たせる、映像・音声収録、主役を引き立てる動画性能を実現',
          contents: [
            '有効約2010万画素のメモリー一体1.0型積層型CMOSイメージセンサーExmor RS®（エクスモアアールエス）を搭載。暗所から明るい場所まで、解像感が高い画質を実現',
            '動画撮影に最適化したAF性能で、高速かつ高精度に、自撮り撮影時の顔や商品など、動く被写体を捕捉。リアルタイム瞳AFとリアルタイムトラッキングで被写体の状況に応じて顔や瞳をシームレスに捉え追従してくれます',
            '被写体の肌の色合いが健康的で自然な印象になるようVlogに合わせた画質設計。スキントーン（肌色）と顔の明るさを自動で最適化してくれます',
            '音声を高音質に収録する指向性3カプセルマイクを搭載。前方の集音性の向上とノイズの低減を実現し、話し手の声をクリアに捉えます'
          ]
        },
        {
          subtitle: 'その他毎日撮影が楽しくなる機能が満載',
          contents: [
            '横方向に開くバリアングル液晶モニター搭載や自撮り時に握りやすいグリップの採用。さらにカメラ前面に録画ランプの搭載で、今までよりも自撮りがスムーズに行えます',
            '約294gの小型・軽量設計に、歩きながらの手持ち撮影時の手ブレも低減してくれる手振れ補正の搭載で、簡単に高画質な動画の撮影が可能',
            'パソコンにUSBで接続することにより、ウェブカメラとして使用できるようなソフトウエアを準備中。※2020年7月頃に公開予定',
            'VLOGCAM ZV-1G同梱品のGP-VPT2BTを使えば、「自撮り」「ハイアングルやローアングル」の簡単撮影。カスタムボタンで背景ボケ切り換え等、さらに簡単に使いやすくなります'
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
          href: '/ec/special/sale/shoppingcredit-campaign',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニー VLOGCAM ZV-1/ZV-1G',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736118584', '4548736122574'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736118584',
        '4546821920890',
        '4548736122574',
        '4546821921965',
        '4905524899054',
        '4905524885903',
        '4548736109520',
        '4905524885910',
        '4905524929379',
        '4548736100664',
        '4905524846980',
        '4905524760866',
        '4905524973341',
        '4905524956009'
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

<style scoped>
table.spec {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 80%;
  float: left;
  box-sizing: border-box;
  word-break: break-all;
}

table.spec tr th {
  width: 16%;
  color: #151515;
  background-color: #eee;
  border: 1px solid #b9b9b9;
  box-sizing: border-box;
  vertical-align: middle;
}

table.spec tr td {
  width: 16%;
  border: 1px solid #b9b9b9;
  box-sizing: border-box !important;
  padding: 10px 6px;
  vertical-align: middle;
}
</style>