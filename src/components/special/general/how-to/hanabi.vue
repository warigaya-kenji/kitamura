<template>
  <v-app>
    <div class="hanabi">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->
        <h1 class="mt-5 text-subtitle-2 text-sm-subtitle-1 mb-2">花火撮影特集｜打ち上げ花火の撮影のコツ＆撮影に便利な商品紹介</h1>
        <!--==================== コンテンツ ====================-->
        <v-img src="/ec/images2/special/general/how-to/hanabi/bn00.gif" max-width="950" max-height="150" class="mt-6"></v-img>
        <v-img
          src="/ec/images2/special/general/how-to/hanabi/top.jpg"
          alt="花火撮影特集｜打ち上げ花火の撮影のコツ＆撮影に便利な商品紹介"
          max-width="950"
          max-height="296"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          全国各地で花火大会が始まります！ 日程チェックはお済みですか？ 花火をキレイにとりたい！
          でも撮影テクニックを覚えるのは苦手。そんな方も場所・日程・持ち物をしっかり調べておけばキレイに打ち上げ花火を撮影できるのだとか！
          そこで今回も体を張って、初心者が花火大会の撮影に同行してきました！
        </div>
        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :sm="4" :cols="10" />
        <!-- ↑ ナビボタン -->
        <!--==================== ■ ■ ■打ち上げ花火撮影経験者に聞きました！「場所・日程・持ち物をおさえておけば初心者でも安心」■ ■ ■==================== -->
        <div class="my-4 pa-6 line-g">
          <h2 class="mt-5 mb-2" id="kokoroe">打ち上げ花火撮影経験者に聞きました！「場所・日程・持ち物をおさえておけば初心者でも安心」</h2>
          <h3 class="mt-5 mb-2">花火撮影経験者に聞きました。押さえておきたい心得２つ</h3>
          <v-row>
            <v-col cols="12" sm="7">
              <h4 class="mt-5 mb-2">心得その１:計画・スケジュールチェック</h4>
              <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
                花火大会のスケジュールと開催場所をチェックし、当日は場所を早めに確保！
                まずは花火大会のスケジュールと始まる時間をチェック。大会公式サイトやクチコミで撮影可能な場所や、三脚は設置できるかなど、事前に調べておくことが肝心です。ちなみに今回は1時間前から場所取りをはじめましたが、すでに人がいっぱいで場所の確保が大変でした（汗）
              </div>
              <h4 class="mt-5 mb-2">心得その２:ラクにキレイに撮りたいなら三脚とレリーズが必要です！</h4>
              <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
                打ち上げ花火をキレイに撮影するコツは、カメラを固定することとシャッタースピード！
                そのためには三脚とレリーズは必要です。これさえあれば浴衣を着た女子でも簡単に花火撮影ができます
              </div>
            </v-col>
            <v-col cols="12" sm="5"> <v-img src="/ec/images2/special/general/how-to/hanabi/01.jpg" max-width="auto" max-height="auto"></v-img></v-col>
          </v-row>
          <!--===== 【商品リスト】花火撮影におすすめ商品はこちら==============================-->
          <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">花火撮影におすすめ商品はこちら</v-sheet>
          <product-list-by-special-id class="mb-5" :specialId="2209" />
          <!--===== 【商品リスト】花火撮影におすすめのカメラバッグ＆おすすめカメラリュック======= -->
          <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">花火撮影におすすめのカメラバッグ＆おすすめカメラリュック</v-sheet>
          <priceAndPurchase
            :mainProductList="topProductList"
            :btnColor="'red darken-2'"
            :txt="'リュックを下ろさずに素早く機材が取り出せる左右両サイドアクセス構造が便利です。'"
            :btntxt="'商品ページを見る'"
          />
          <!--====== 【商品リスト】打ち上げ花火撮影であったら便利な撮影用品 =================== -->
          <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">打ち上げ花火撮影であったら便利な撮影用品</v-sheet>
          <productAppeal :mainProductList="secondProductList" :sm="3" :maxWidth="'154'" :maxHeight="'154'"></productAppeal>
        </div>

        <!--==================== ■ 打ち上げ花火をキレイに撮影するコツは「直前準備をしっかりすること」三脚とレリーズを設置しよう ■ ■ ■=========== -->
        <div class="my-4 pa-6 line-g">
          <h2 class="mt-5 mb-2" id="kotu">打ち上げ花火をキレイに撮影するコツは「直前準備をしっかりすること」三脚とレリーズを設置しよう</h2>
          <!--====準備１==== -->
          <h3 class="mt-5 mb-2">準備その１：風向きに注意しながらカメラを三脚に設置しよう</h3>
          <p>会場に早めに到着したら、風向きに注意しながら場所取り！ さっそく準備に取り掛かります</p>
          <v-sheet :id="process.id" color="#ffffff" class="rounded-lg pa-5 mt-6" v-for="(process, index) in processList" :key="index">
            <v-row>
              <v-col cols="12" sm="8">
                <v-img :src="`https://shop.kitamura.jp/ts_rsc/1207/images/step${index + 1}.png`" max-width="70" height="70" class="float-left"></v-img>
                <p class="mt-2 px-1 w450 float-left">
                  {{ process.txt }}
                </p>
                <div style="clear: both"></div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img :src="process.src" max-width="100%" height="auto" class="mx-auto" />
              </v-col>
            </v-row>
          </v-sheet>

          <!--======【商品リスト】今回の打ち上げ花火撮影で使った三脚をレビュー＆おすすめ三脚 ======= -->
          <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">今回の打ち上げ花火撮影で使った三脚をレビュー＆おすすめ三脚</v-sheet>
          <priceAndPurchase
            :mainProductList="thirdProductList"
            :btnColor="'red darken-2'"
            :txt="'【レビュー】なにより小さくなるのがいいです。小さくなって持ち運びが便利なのに安定感が高く、使っていて安心！ デザイン性も高く、持つ喜びがあります'"
            :btntxt="'商品ページを見る'"
          />
          <!--======【商品リスト】打ち上げ花火撮影におすすめ三脚 ======= -->
          <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">打ち上げ花火撮影におすすめ三脚</v-sheet>
          <productAppeal :mainProductList="tripodProductList" :sm="3" :maxWidth="'154'" :maxHeight="'154'"></productAppeal>

          <h3 class="mt-5 mb-2">準備その２：レリーズを設置しよう</h3>
          <p>ポイントは明るいうちに取り付けること！ 暗くなると意外に取り付けが難しくなります</p>
          <!--====準備２==== -->
          <v-sheet
            :id="preparation2characteristic.id"
            color="#ffffff"
            class="rounded-lg pa-5 mt-6"
            v-for="(preparation2characteristic, index) in preparation2characteristicList"
            :key="index"
          >
            <v-row>
              <v-col cols="12" sm="8">
                <v-img :src="`https://shop.kitamura.jp/ts_rsc/1207/images/step${index + 1}.png`" max-width="70" height="70" class="float-left"></v-img>
                <p class="mt-2 px-1 w450 float-left">
                  {{ preparation2characteristic.txt }}
                </p>
                <div style="clear: both"></div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img :src="preparation2characteristic.src" max-width="100%" height="auto" class="mx-auto" />
              </v-col>
            </v-row>
          </v-sheet>
          <!--====準備３==== -->
          <h3 class="mt-5 mb-2">準備その3：ピントを合わせておこう</h3>
          <p>明るいうちにピントを合わせておくと、よりキレイな花火写真がとれますよ★</p>

          <v-sheet
            :id="preparation3characteristic.id"
            color="#ffffff"
            class="rounded-lg pa-5 mt-6"
            v-for="(preparation3characteristic, index) in preparation3characteristicList"
            :key="index"
          >
            <v-row>
              <v-col cols="12" sm="8">
                <v-img :src="`https://shop.kitamura.jp/ts_rsc/1207/images/step${index + 1}.png`" max-width="70" height="70" class="float-left"></v-img>
                <p class="mt-2 px-1 w450 float-left">
                  {{ preparation3characteristic.txt }}
                </p>
                <div style="clear: both"></div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img :src="preparation3characteristic.src" max-width="100%" height="auto" class="mx-auto hover" />
              </v-col>
            </v-row>
          </v-sheet>
        </div>
        <!--====================  ■ 打ち上げ花火撮影経験者に聞きました！「シャッターを切るときのコツは？」 ■ ================================= -->
        <div class="my-4 pa-6 line-g">
          <h2 class="mt-5 mb-2">打ち上げ花火撮影経験者に聞きました！「シャッターを切るときのコツは？」</h2>
          <p>準備ばっちり★ いよいよ打ち上げ花火の撮影本番です！ 今回は写真に心得のあるカメラ男子と、花火撮影は初心者の浴衣女子たちでチャレンジ！</p>
          <h3 class="mt-5 mb-2">実践その１：シャッターを切るタイミング＆コツ</h3>
          <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
            花火が打ちあがる直前に切るのがベスト！ そうすることで、打ちあがる光の線も写りこみ、写真に動きがでます。
            ISO感度は100に、シャッタースピードは「バルブ」に設定して花火が打ちあがる直前から花火が閉じるまでシャッターを開くと、一輪の花火をキレイにおさめることができます。
          </div>
          <h4 class="mt-5 mb-2">「バルブ撮影」とは</h4>
          <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
            シャッターボタンを押している間、ずっとシャッターが開く撮影。
            夜景撮影や星空撮影・蛍撮影などカメラに取り込む光量が少ないときによく用いられる撮影方法です。「Ｂ」や「BULB」などで表示されています。
          </div>
          <h3 class="mt-5 mb-2">実践その2：いざ、打ち上げ花火撮影にTRY！</h3>
          <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
            この日は風が強くすぐに花火は流れてしまいました。でもそれはそれでおもしろい動きが出たかなと思います。
            三脚とレリーズがあればブレることはないので、カメラの設定をオートにしておいても、シャッターを切るタイミングさえ合えばキレイに撮れます。あまり難しく考えず、一度試してみたら意外と楽しめますよ♪
          </div>

          <v-img src="/ec/images2/special/general/how-to/hanabi/img15.jpg" max-width="840" max-height="auto"></v-img>
        </div>
        <!--====================  ■ 撮影した花火写真をプリントしましょう ■ ============================================================== -->
        <div class="my-4 pa-6 line-g">
          <h2 class="mt-5 mb-2" id="print">打ち上げ花火撮影経験者に聞きました！「シャッターを切るときのコツは？」</h2>
          <p>せっかく撮影した写真はカタチにして楽しみましょう！</p>
          <v-row>
            <v-col cols="12" sm="6">
              <h3 class="mt-5 mb-2">気軽に楽しむシャッフルプリント</h3>
              <a href="https://www.kitamura-print.com/print/wonder_shuffle/" target="blank">
                <v-img src="https://www.kitamura-print.com/print/wonder_shuffle/images/bigImage.jpg" max-width="auto" max-height="auto" class="hover"></v-img
              ></a>
              <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">友達と楽しんだ花火大会の写真は一枚にギュッとまとめてプリントするのも楽しいですよ！</div>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="mt-5 mb-2">力作はクリスタルプリントに！</h3>
              <a href="https://www.kitamura-print.com/print/digitalcrystal/" target="blank"
                ><v-img src="https://www.kitamura-print.com/print/digitalcrystal/images/bigImage.jpg" max-width="auto" max-height="auto" class="hover"></v-img
              ></a>
              <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
                非常に高い光沢度とクリアな仕上がりで、ワンランク上のプリントを約束してくれます。
              </div></v-col
            >
          </v-row>
        </div>
        <!--banner-->

        <div class="mt-7 s-bnr">
          <!-- ↓ SNS -->
          <facebookAndTwitter />

          <kitamuraService />

          <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        </div>
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
import ProductAppeal from '@/components/common/special/productAppeal.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SubText from '@/components/common/special/subtext.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';

export default Vue.extend({
  name: 'hanabi',
  components: {
    breadcrumbs: Breadcrumbs,
    productAppeal: ProductAppeal,
    'product-list-by-special-id': ProductListBySpecialId,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    subText: SubText,
    urlcopy: Urlcopy,

  },
  setup: (props, context) => {
    document.title = '花火撮影特集 打ち上げ花火の撮影方法 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '花火撮影特集 打ち上げ花火の撮影方法')

    const state = reactive({
      naviList: [
        { naviItem: '花火撮影の２つの心得', href: '#kokoroe' },
        { naviItem: '花火撮影のコツ', href: '#kotu' },
        { naviItem: '花火写真をプリントしよう', href: '#print' }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },

        {
          path: '花火撮影特集 打ち上げ花火の撮影方法  ',
          disabled: true
        }

      ],
      processList: [
        {
          id: 'step1',
          txt: '三脚からはずしたクイックシューをカメラに設置します。ブレの原因になるので、ねじ部分はコインを使ってしっかりしめましょう',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/hanabi/img04.jpg',

        },
        {
          id: 'step2',
          txt: '三脚にカメラをセットします',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/hanabi/img05.jpg',

        },
        {
          id: 'step3',
          txt: '高さと角度を調整して完成。簡単に設置できました！低い位置にセットできるコンパクトな三脚がオススメです★ 傾斜があるところでは、三脚の脚の長さを同じにして立てると、重心がぶれて倒れてしまいます。なので、傾斜の低いほうは三脚の脚を長く、傾斜の高いほうは三脚の脚を短くセットすると重心がぶれないので◎',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/hanabi/img06.jpg',
        },
        {
          id: 'step4',
          txt: '撮影前にレンズのホコリを払うこともキレイな写真を撮るコツです',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/hanabi/img07.jpg',
        },
      ],
      preparation2characteristicList: [
        {
          txt: 'レリーズを取り付けたら、きちんとシャッターが切れるかテストしましょう',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/hanabi/img12.jpg',
        },
        {
          txt: 'ロック機能があるものは、レリーズが外れないようにロックの確認も忘れずにチェックしましょう',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/hanabi/img13.jpg',
        },
      ],
      preparation3characteristicList: [
        {
          txt: 'ボディのモードダイヤルをAFに切り替えます。遠くにあるものにピントを合わせましょう。今回は“雲”に合わせてみました',
        },
        {
          txt: 'ボディのモードダイヤルをMに切り替える。ピントリングを回さない限り、ピントがずれることはありません',
        },
      ],
      // ↓ ---- Top商品価格 ----
      topProductJanCode: ['8024221660685',],
      topProductList: [] as Array<ProductDetail>,
      // ↓ ---- second商品価格 ----
      secondProductJanCode: ['4961607382424', '/4961607722824', '4961607362617', '4961607722626', '4977187325829',],
      secondProductList: [] as Array<ProductDetail>,

      // ↓ ---- third商品価格 ----
      thirdProductJanCode: ['8024221668315',],
      thirdProductList: [] as Array<ProductDetail>,

      // ↓ ---- tripod商品価格 ----
      tripodProductJanCode: ['8024221631173', '4907990437006', '4560376576838',],
      tripodProductList: [] as Array<ProductDetail>,


      backNumberList: [
        {
          href: '/ec/special/general/how-to/hanabi',
          img: 'https://shop.kitamura.jp/images/banner/5093.jpg',
          alt: 'vol.5 Panasonic LUMIX G9 PRO'
        },
        {
          href: '/ec/special/general/how-to/a7r3-a9',
          img: 'https://shop.kitamura.jp/images/banner/4998.jpg',
          alt: 'vol.4 SONY α7RⅢ| α7RⅡやα9と比較しながらプロカメラマンが実写レビューレポート'
        },
        {
          href: '/ec/special/general/how-to/omd-em1',
          img: 'https://shop.kitamura.jp/images/banner/4841.jpg',
          alt: 'vol.3 OLYMPUS OM-D E-M1 MarkⅡ| 最強の手ぶれ補正性能！手持ちでも本格的な夜景撮影を可能に'
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/list?category=&narrow1=&narrow2=&type=u&r=',
          img: 'https://shop.kitamura.jp/images/banner/4637.gif',
          alt: '新着中古'
        }
      ],
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // トップ商品
        const topResult = await ProductService.fetchProducts(state.topProductJanCode, true);
        state.topProductList = topResult.items;
        // second商品
        const secondResult = await ProductService.fetchProducts(state.secondProductJanCode, true);
        state.secondProductList = secondResult.items;
        // third商品
        const thirdResult = await ProductService.fetchProducts(state.thirdProductJanCode, true);
        state.thirdProductList = thirdResult.items;
        // tripod商品
        const tripodResult = await ProductService.fetchProducts(state.tripodProductJanCode, true);
        state.tripodProductList = tripodResult.items;


      } catch (error) {
        // トップ商品
        state.topProductList = [] as Array<ProductDetail>;
        // second商品
        state.secondProductList = [] as Array<ProductDetail>;
        // third商品
        state.thirdProductList = [] as Array<ProductDetail>;
        // micro商品
        state.tripodProductList = [] as Array<ProductDetail>;



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
.hanabi {
  .s-bnr p {
    background: rgba(0, 0, 0, 0) linear-gradient(transparent 70%, #ddd 70%) repeat scroll 0 0;
    font-family: 'ヒラギノ角ゴ Pro W3', 'メイリオ', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
    padding-left: 10px;
  }

  h2 {
    padding: 7px 10px;
    border-left-width: 6px;
    border-left-style: solid;
    border-right-color: #d6d6d6;
    border-bottom-color: #fff;
    border-left-color: #333;
    font-size: 170%;
    font-weight: 300;
    letter-spacing: 2pt;
    line-height: 1.3em;
    box-sizing: border-box;
  }

  h3 {
    border-bottom: 3px solid #09c;
    color: #09c;
    font-size: 150%;
    font-weight: 300;
    margin: 20px 0 10px 0;
    padding: 5px;
    box-sizing: border-box;
  }

  h4 {
    border-bottom: 1px solid #333;
    color: #333;
    font-size: 110%;
    font-weight: 600;
    padding: 0px;
    box-sizing: border-box;
    line-height: 1.8em;
  }
  .w450 {
    width: 450px;
  }

  @media screen and (max-width: 509px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 18px;
    }
    h4 {
      font-size: 14px;
    }
  }
}
</style>