<template>
  <v-app>
    <div class="test">
      <!-- ↓ サンプル：パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <!-- ↑ サンプル：パンくず -->

      <div class="main-contents-wrap">

     
        <!-- ↓ サンプル：画像の読み込み -->
        <div class="text-center">
        <img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/bg_top.jpg" @error="noimage" />
        <!-- ↑ サンプル：画像の読み込み -->
        </div>

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キャノン EOS R5 キャノン EOS R6 好評発売中</span>
        </div>

        <div class="darken-2 text-left">
          <span>キャノン EOS R5 / キャノン EOS R6</span>
        </div>

        <v-container>
          <v-row>
            <v-col class="mr-0 pr-0">
              <v-btn elevation="10" block class="black white--text text-h6 ma-0 font-weight-bold" height="55px" :href="`#point`"
                ><span class="v-btn__content">特徴スペック</span></v-btn
              >
            </v-col>
            <v-col class="mr-0 pr-0">
              <v-btn elevation="10" block class="black white--text text-h6 ma-0 font-weight-bold" height="55px" :href="`#hikaku`"
                ><span class="v-btn__content">機種比較</span></v-btn
              >
            </v-col>
            <v-col class="mr-0 pr-0">
              <v-btn elevation="10" block class="black white--text text-h6 ma-0 font-weight-bold" height="55px" :href="`#price`"
                ><span class="v-btn__content">お得情報</span></v-btn
              >
            </v-col>
            <v-col class="mr-0 pr-0">
              <v-btn elevation="10" block class="black white--text text-h6 ma-0 font-weight-bold" height="55px" :href="`#images`"
                ><span class="v-btn__content">作例</span></v-btn
              >
            </v-col>
          </v-row>
        </v-container>

        <div class="text-right">
          <v-btn href="/special/sale-fair/camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'世界最高8.0段の手ブレ補正による快適な撮影を実現した次世代「EOS R」'" />
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R6レンズキット 価格・ご購入'" />

        <!--====== キヤノン EOS R5 ======-->
        <!--====== キヤノン EOS R6 ======-->
        <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in productsList" :key="product">
          <v-container>
            <v-row>
              <v-col class="text-center" cols="12" sm="5">
                <a href="/ec/pd/4549292157345"><img :src="product.img" class="mx100pr"/></a>
                 <p>
              <a href="/ec/pd/4549292157345">{{ product.name }}</a
              >
            </p>
              </v-col>
              <v-col class="text-center mt-4" cols="12" sm="6">
                 <p class="text-h6">
              価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span class="font-small">(税込)</span>
            </p>
            <v-btn
                elevation="3"
                x-large
                dark
                color="red"
                class="text-h5 font-weight-bold accent-4"
                height="55px"
                width="65%"
                :href="`/ec/pd/${mainProduct.janCode}`"
              >
                <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                ご購入はこちら
              </v-btn>
              <div class="mt-4" v-if="index === 0">
              <p><img src="https://shop.kitamura.jp/images/banner/6931.jpg" alt="電話で相談・ご注文できます" /></p>
            </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            :href="`https://cweb.canon.jp/eos/your-eos/product/eosr/`"
            >メーカーサイトで<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る キヤノン EOS R5！'" />
        <div class="product-video-wrap text-center">
          <div class="">
            <iframe
              width="70%"
              height="315"
              src="https://www.youtube.com/embed/AxJYDPGlcvw?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!--特徴-->
        <subText :textItem="'EOS R5 / EOS R6 共通の特徴'" id="point" />
        <characteristic :characteristics="commonCharacteristicList" />

        <subText :textItem="'EOS R5 の特徴'" />
        <characteristic :characteristics="eosR5CharacteristicList" />

        <subText :textItem="'EOS R6 の特徴'" />
        <characteristic :characteristics="eosR6CharacteristicList" />

        <!--特徴-->

        <!--比較-->
        <div>
          <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較'" id="hikaku" />
          <comparisonTable :comparisonDetailList="comparisonDetailList" />
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:キヤノン EOS R5｜航空写真家がスチル＆ムービーで徹底レビュー'" />
        <div class="product-shasha mb-5 float-left">
          <v-card class="product-shasha-wrap pa-4" outlined>
            <v-card-text class="black--text">
              キヤノンのミラーレス一眼 EOS R5は人気のデジタル一眼レフカメラ、EOS
              5Dシリーズの流れを汲んだ高画素機。「5」というと三脚にガッツリとカメラを据え付けじっくりと風景写真を撮る…というイメージもありましたが、今回のEOS
              R5はシャッターの秒間コマ数や手ブレ補正の段数などの秀逸さを見ても、かなり動きモノに対応してきたなという印象を持ちました。
              <br />そこで、動きモノである飛行機撮影においてEOS R5を徹底インプレッション。スチルだけでなくムービーについても、その劇的な...<a
                class="product-shasha-link"
                href="https://shasha.kitamura.jp/article/478121231.html"
                target="_blank"
                >続きを読む <img src="@/assets/special/img/sample1/shashabnr4.jpg" alt="イメージ" class="product-shasha-img mt-4"
              /></a>
            </v-card-text>
          </v-card>
        </div>
        <!-- ↑ ShaSha -->

        <subText :textItem="'キヤノン EOS R5 / EOS R6 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <subText :textItem="'キヤノン EOS R5 / EOS R6 ご購入時、高値下取り実施中！'" id="price" />
        <v-container class="mb-5">
          <v-row>
            <v-col class="text-center" cols="4">
              <a
                href="https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4549292075748&_ga=2.222765533.714669828.1626591933-721903692.1626267770&pattern=1"
                ><img src="https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg" width="80%"
              /></a>
              <br />
              キヤノン EOS 5D Mark IV ボディ
            </v-col>
            <v-col col="6" class="mt-2">
              <p>
                今なら、キヤノン EOS R5 / EOS R6をご購入時、 <br />・<v-btn
                  href="https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4549292075748&_ga=2.195977450.714669828.1626591933-721903692.1626267770&pattern=1"
                  text
                  color="#1122cc"
                  min-height="20"
                  class="x-small align-center py-1 px-2"
                  >キヤノン EOS 5D Mark IV ボディ</v-btn
                >で下取り実施中です
              </p>
              <!-- <v-img src="/ts_rsc/1354/images/bnr_shitadori_350-130.jpg" alt="高値下取り実施中" /> -->
            </v-col>
          </v-row>
        </v-container>

        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="/ec/pd/4549292157345"
              ><img src="//shopimg.kitamura.jp/images/pd/479/596/d1e/955/5c5/f28/97f/ed8/392/3a7/71f/kto/esd/p/M.jpg" width="80%"
            /></a>
            <br />
            キヤノン EOS R5 ボディ<br /><span class="red--text">455,400</span>円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2020年7月10日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'9,488'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4549292157253"
              ><img src="//shopimg.kitamura.jp/images/pd/731/a75/19f/abf/b41/d16/33c/43a/e3f/44e/b3i/o8z/04r/h/M.jpg" width="80%"
            /></a>
            <br />
            キヤノン EOS R6 ボディ<br /><span class="red--text">301,950</span>円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2020年7月10日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'6,291'" :commission="'0'" />
            <div class="text-center">
              <v-btn width="80%" color="#E53935" class="white--text font-weight-bold" href="sitemap/s_credit_01.html">
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <subText :textItem="'EOS R5 / EOS R6 作例画像'" id="images" />
        <v-container>
          <v-row>
            <v-col cols="6"><img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" width="90%"/></v-col>
            <v-col cols="6"><img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" width="90%"/></v-col>
          </v-row>
          <v-row>
            <v-col cols="6"><img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" width="90%"/></v-col>
            <v-col cols="6"><img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" width="90%"/></v-col>
          </v-row>
          <v-row>
            <v-col cols="6"><img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" width="90%"/></v-col>
            <v-col cols="6"><img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" width="90%"/></v-col>
          </v-row>
        </v-container>
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
import ComparisonTable from '@/components/common/comparison-table.vue';
import PriceAndPopular from '@/components/common/price-and-popular.vue';
import ContingencyTable from '@/components/common/contingency-table.vue';

export default Vue.extend({
  name: 'test',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    characteristic: Characteristic,
    comparisonTable: ComparisonTable,
    priceAndPopular: PriceAndPopular,
    contingencyTable: ContingencyTable
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
      ],
      eosR6CharacteristicList: [
        {
          subtitle: '約2010万画素35mmフルサイズCMOSセンサーと映像エンジン「DIGIC X」搭載により⾼感度性能・⾼速性能を実現',
          contents: [
            'EOS-1D X MarkIII搭載センサーをベースにEOS R6用にカスタマイズされた35mmフルサイズCMOSセンサーにより⾼感度撮影時もクリアな映像表現が可能',
            '静止画⾼感度性能：常用ISO 102400（拡張ISO 204800相当）動画⾼感度性能：常用ISO 51200（拡張ISO 102400相当）に対応'
          ]
        },
        {
          subtitle: 'その他、高度な撮影をサポートする充実の仕上がり',
          contents: [
            'SDカード（UHS-II）に対応した2つのスロットを搭載。どちらのスロットでも最高約20コマ/秒の連続撮影4K/60P動画の内部記録が可能',
            'EOSシリーズ初の静⽌画測距輝度範囲EV-6.5の実現で、肉眼では被写体の認識が難しい暗い環境下でも高精度なピント合わせが可能',
            '直感的に撮影モードが切り替えられるモードダイヤルを搭載。静止画と動画の切り替えもスムーズに行えます'
          ]
        }
      ]
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

      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736130678', '4548736108288', '4549292146851', '4960759903402'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292157345',
        '4549292157253',
        '4549292157512',
        '4549292157222',
        '4549292162813',
        '4549292162837',
        '4549292115710',
        '4549292115703',
        '4549292148381',
        '4549292115611',
        '4549292156263',
        '4549292168037',
        '4960999581569',
        '4960999581576',
        '4549292125405',
        '4960999530383',
        '4523052023392',
        '4523052023408',
        '4523052016639'
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
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        state.mainProduct = mainResult.items[0];
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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
    width: 100%;
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
  .kg-in {
    box-shadow: 0px 9px 5px 1px rgb(176 126 164 / 60%) inset;
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
