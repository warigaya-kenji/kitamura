<template>
  <v-app>
    <div class="test">
      <!-- ↓ サンプル：パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <!-- ↑ サンプル：パンくず -->

      <div class="main-contents-wrap">
        <!-- ↓ サンプル：画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/bg_top.jpg" @error="noimage" />
        <!-- ↑ サンプル：画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キャノン　EOS　R5 キャノン　EOS R6 好評発売中</span>
        </div>

        <div class="darken-2 text-left">
          <span>キャノン　EOS　R5 / キャノン　EOS R6</span>
        </div>

        <v-container>
          <v-row>
            <v-col>
              <v-btn elevation="3" block class="v-btn--is-elevated v-btn--has-bg theme--dark white--text text-h6" height="55px" :href="`#mirrorless`"
                ><span class="v-btn__content">特徴スペック</span></v-btn
              >
            </v-col>
            <v-col>
              <v-btn elevation="3" block class="v-btn--is-elevated v-btn--has-bg theme--dark white--text text-h6" height="55px" :href="`#mirrorless`"
                ><span class="v-btn__content">機種比較</span></v-btn
              >
            </v-col>
            <v-col>
              <v-btn elevation="3" block class="v-btn--is-elevated v-btn--has-bg theme--dark white--text text-h6" height="55px" :href="`#mirrorless`"
                ><span class="v-btn__content">お得情報</span></v-btn
              >
            </v-col>
            <v-col>
              <v-btn elevation="3" block class="v-btn--is-elevated v-btn--has-bg theme--dark white--text text-h6" height="55px" :href="`#mirrorless`"
                ><span class="v-btn__content">作例</span></v-btn
              >
            </v-col>
          </v-row>
        </v-container>

        <div class="w-100 text-right">
          <a href="/special/sale-fair/camera/feature/backnumber/" class="boxx tx-wi tx-no pd10 tx-dcno">≫ 話題の新製品バックナンバー</a>
        </div>

        <subText :textItem="'世界最高8.0段の手ブレ補正による快適な撮影を実現した次世代「EOS R」'" />
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R6レンズキット 価格・ご購入'" />

        <!--====== キヤノン EOS R5 ======-->
        <!--====== キヤノン EOS R6 ======-->
        <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in productsList" :key="product">
          <div class="credit_l clearfix mt-2 mr-5 mb-20">
            <a href="/ec/pd/4549292157345"><img :src="product.img" class="mx100pr" /></a>
            <p>
              <a href="/ec/pd/4549292157345">{{ product.name }}</a
              ><br />
            </p>
          </div>
          <div class="credit_r mt30 text-center">
            <p class="text-h6">
              価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span>(税込)</span>
            </p>
            <div>
              <v-btn
                elevation="3"
                class="text-h5 font-weight-bold"
                x-large
                dark
                color="#C62828"
                height="50px"
                width="50%"
                :href="`/ec/pd/${mainProduct.janCode}`"
              >
                <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                ご購入はこちら
              </v-btn>
            </div>
            <div class="mt-5" v-if="index === 0">
              <p><img src="https://shop.kitamura.jp/images/banner/6931.jpg" alt="電話で相談・ご注文できます" /></p>
            </div>
          </div>
        </v-card>

        <div class="col-sm-12 pa-4 text-center float-left mt-10">
          <v-btn
            elevation="3"
            class="v-btn--is-elevated v-btn--has-bg black darken-4 white--text text-h6"
            height="70px"
            width="50%"
            :href="`https://cweb.canon.jp/eos/your-eos/product/eosr/`"
            ><span class="">メーカーサイトで<br />仕様・作例を詳しく見る</span></v-btn
          >
        </div>

        <subText :textItem="'動画で見る キヤノン EOS R5！'" />
        <!--動画で見る-->
        <div class="w-100 mt-20 product-video-wrap">
          <div class="">
            <iframe
              width="95%"
              height="315"
              src="https://www.youtube.com/embed/AxJYDPGlcvw?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <subText :textItem="'EOS R5 / EOS R6 共通の特徴'" />
        <characteristic :characteristics="commonCharacteristicList" />

        <subText :textItem="'EOS R5 の特徴'" />
        <characteristic :characteristics="eosR5CharacteristicList" />

        <!--比較-->
        <!-- <div tile class="mt-20 text-left" id="hikaku" width="100%">
          <h2 class="title mb-2 font-weight-bold w-100">キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III　比較</h2>
          <p class="text-body-2">キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III　比較しました。</p>
        </div> -->
        <!--比較-->

        <!-- <table class="spec w-100 text-center float-left">
          <tbody class="w-100">
            <tr v-for="item in items" :key="item.header">
              <th>{{ item.header }}</th>
              <td style="white-space: pre-wrap; word-wrap: break-word">{{ item.item1 }}</td>
              <td style="white-space: pre-wrap; word-wrap: break-word">{{ item.item2 }}</td>
              <td style="white-space: pre-wrap; word-wrap: break-word">{{ item.item3 }}</td>
              <td style="white-space: pre-wrap; word-wrap: break-word">{{ item.item4 }}</td>
              <td style="white-space: pre-wrap; word-wrap: break-word">{{ item.item5 }}</td>
            </tr>
          </tbody>
        </table> -->

        <!-- <div class="float-left">
          <SubText :textItem="'ShaSha:キヤノン EOS R5｜航空写真家がスチル＆ムービーで徹底レビュー'" />
        </div> -->
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
import SubText from '@/components/common/subtext.vue';
import Characteristic from '@/components/common/characteristic.vue';

export default Vue.extend({
  name: 'test',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    characteristic: Characteristic
  },
  data() {
    return {
      productsList: [
        {
          name: 'キヤノン EOS R5 ボディ',
          price: '455,400',
          img: '//shopimg.kitamura.jp/images/pd/479/596/d1e/955/5c5/f28/97f/ed8/392/3a7/71f/kto/esd/p/M.jpg'
        },
        {
          name: 'キヤノン EOS R6 ボディ',
          price: '301,950',
          img: '//shopimg.kitamura.jp/images/pd/731/a75/19f/abf/b41/d16/33c/43a/e3f/44e/b3i/o8z/04r/h/M.jpg'
        },
        {
          name: 'キヤノン EOS R6 RF24-105 IS STM レンズキット',
          price: '341,550',
          img: '//shopimg.kitamura.jp/images/pd/7bf/88f/fd4/a3a/636/3a6/2e9/2e9/f13/391/03a/ioc/hf3/n/M.jpg'
        }
      ],
      commonCharacteristicList: [
        {
          subtitle: 'ボディ内5軸手ブレ補正機構搭載RFレンズ使用時最大8.0段の補正効果',
          contents: [
            'EOSシリーズで初めて、手ブレに連動して撮像素子を動かす補正機構をボディー内に採用。手ブレ補正機構が搭載されていないレンズでも手振れ補正が可能',
            'さらにIS（手振れ補正機構）搭載RFレンズなら最大8.0段分の手ブレ補正を実現。望遠撮影や手持ち撮影といった手ブレの発生しやすい撮影環境でも快適な撮影が可能',
            '動画撮影時には、ボディー内とレンズ内の手ブレ補正機構の協調制御に加え、動画電子ISの併用も可能で作品作りを強力にサポート'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ],
      eosR5CharacteristicList: [
        {
          subtitle: '約4500万画素35mmフルサイズCMOSセンサーと映像エンジン「DIGIC X」搭載によりEOSシリーズ史上最高画質と高速連写を両立',
          contents: [
            '電子シャッター撮影時は、AF/AE追従で最高約20コマ/秒の高速連写を実現。音の気になるシーンであってもシャッター音を気にせず撮影が可能',
            '「DIGIC X」により、静止画撮影時に常用で最高ISO 51200（拡張ISO 102400相当）を実現'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ]
      // items: [
      //   {
      //     header: '商品名',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '発売日',
      //     item1: '2020年7月30日',
      //     item2: '2020年8月27日',
      //     item3: '2018年10月25日',
      //     item4: '2019年9月6日',
      //     item5: '2018年3月23日'
      //   },
      //   {
      //     header: '価格',
      //     item1: '¥455,400',
      //     item2: '¥301,950',
      //     item3: '¥193,050',
      //     item4: '¥345,510',
      //     item5: '¥227,500'
      //   },
      //   {
      //     header: '有効画素数',
      //     item1: '約4500万画素',
      //     item2: '約2010万画素',
      //     item3: '約3030万画素',
      //     item4: '約6100万画素',
      //     item5: '約2420万画素'
      //   },
      //   {
      //     header: '撮像素子 ',
      //     item1: '35mmフルサイズ\nCMOSセンサー（デュアルピクセルCMOS AF II対応',
      //     item2: '35mmフルサイズ\nCMOSセンサー（デュアルピクセルCMOS AF II対応',
      //     item3: '35mmフルサイズ\nCMOSセンサー（デュアルピクセルCMOS AF II対応',
      //     item4: '35mmフルサイズ\nExmor R CMOSセンサー',
      //     item5: '35mmフルサイズ\nExmor R CMOSセンサー'
      //   },
      //   {
      //     header: '連続撮影速度',
      //     item1: '最高約12コマ/秒',
      //     item2: '最高約12コマ/秒',
      //     item3: '最高約8.0コマ／秒',
      //     item4: '最高約10コマ/秒',
      //     item5: '最高約10コマ/秒'
      //   },
      //   {
      //     header: '連続撮影可能枚数',
      //     item1: 'JPEG:約350枚\nRAW：約87枚',
      //     item2: 'JPEG:約1000枚以上\nRAW：約240枚',
      //     item3: 'JPEG:約100枚\nRAW：約34枚',
      //     item4: 'JPEG:約68枚\nRAW：約68枚',
      //     item5: 'JPEG:約163枚\nRAW：約89枚'
      //   },
      //   {
      //     header: 'シャッタースピード',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: 'ストロボ同調速度',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: 'ISO感度',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '測距輝度範囲',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '撮影可能枚数',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '液晶性能',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: 'ファインダー',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '視野率',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '外形寸法',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '質量（本体のみ）',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '記録メディア/スロット',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   },
      //   {
      //     header: '動画記録方式',
      //     item1: 'キヤノン EOS R5',
      //     item2: 'キヤノン EOS R6',
      //     item3: 'キヤノン EOS R',
      //     item4: 'ソニー α7R IV',
      //     item5: 'ソニー α7III'
      //   }
      // ]
    };
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '好評発売中！キヤノンEOS R5 R6',
          linkUrl: '/ec/special/camera/filmcamera/test',
          disabled: false
        }
      ],
      mainProductJanCode: '4549292157345',
      mainProduct: {} as ProductDetail,
      productJanCodeList: ['4549292157345', '4549292157253', '4549292157512'],
      productDetailList: [] as Array<ProductDetail>
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        state.mainProduct = mainResult.items[0];
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProduct = {} as ProductDetail;
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
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  h2.spec {
    width: 100%;
    height: auto;
    margin: 0px 0 10px 0;
    padding: 0 10px 5px 55px;
    font-size: 20px;
    font-weight: 800;
    background-image: url(/ec/images2/special/camera/dslr/bg_cameratitle.gif);
    background-repeat: no-repeat;
    float: left;
    color: #46280c;
    box-sizing: border-box;
    line-height: 1.2em;
    border-bottom: 2px solid #ffcc00;
  }
  /*背景画像*/
  .cameratitle {
    background-image: url(/ec/images2/special/camera/dslr/bg_cameratitle.gif);
    background-repeat: no-repeat;
    line-height: 1.3em;
    padding: 5px 0 0 65px;
    box-sizing: border-box;
    color: #46280c;
    font-weight: bold;
    font-size: 17px;
  }
  .youhintitle {
    background-image: url(/ec/images2/special/camera/dslr/bg_youhintitle.gif);
    background-repeat: no-repeat;
    line-height: 1.3em;
    padding: 5px 0 5px 65px;
    box-sizing: border-box;
    color: #46280c;
    font-weight: bold;
    font-size: 16px;
  }

  .dslr ul {
    list-style: none;
  }
  ul.ssz {
    padding: 0 !important;
  }
  ul.ssz li {
    width: 50%;
    list-style: none;
    float: left;
    line-height: 1.3em;
    padding: 3px;
    box-sizing: border-box;
    border-bottom: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
  ul.ssz ol {
    padding: 0px;
  }
  .dslr p {
    line-height: 1.8em;
  }
  .txt-org {
    color: #dd6717;
  }
  .tx-aka {
    color: #d80b24;
  }
  .tx-tya {
    color: #46280c !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
  }
  .tx-14 {
    font-size: 14px;
  }
  .tx-12 {
    font-size: 12px;
  }
  .h-1 {
    height: 1px;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  /*●品*/
  .maru {
    border-radius: 150px;
    border: 1px solid #999999;
  }
  /*ショックレ*/
  .w50pr-re {
    width: 50%;
    padding: 12px;
    box-sizing: border-box;
  }
  div.s-credit {
    display: block;
    width: 100%;
  }
  div.s-credit table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
  }
  div.s-credit table th,
  div.s-credit table td {
    padding: 2px 0;
    vertical-align: middle;
    border: solid 1px #ffffff;
    box-sizing: border-box;
  }
  div.s-credit table th {
    background: #389c88 none repeat scroll 0 0;
    color: #ffffff;
    font-size: 13px;
    font-weight: normal;
    box-sizing: border-box;
  }
  div.s-credit table td {
    background: #eee none repeat scroll 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0em;
    box-sizing: border-box;
  }
  div.s-credit table td span {
    font-size: 13px;
    margin-left: 3px;
  }

  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }

  .credit_l {
    width: 35%;
    float: left;
    display: block;
    text-align: center;
    margin: 10px 10px 20px 0;
  }

  .credit_r {
    width: 60%;
    float: left;
    font-size: 14px;
  }
  .mt30 {
    margin-top: 30px;
  }

  .bgtypetitle {
    background-color: #ffffcc;
  }

  table.spec {
    font-size: 80%;
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

  .product-video {
    &-contents {
      height: 520px;
    }
  }

  .product-shasha {
    &-wrap {
      background: #f8fbd1;
    }

    &-link:hover {
      img {
        opacity: 0.7;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.test {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
</style>