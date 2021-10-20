<template>
  <v-app>
    <div class="g9pro">
      <div class="main-contents-wrap">
        <!--==================== コンテンツ ====================-->
        <v-img src="/ec/images2/special/general/photo_mono/g9pro/fan-fair_01sp.jpg" max-width="640" max-height="150" class="mt-6"></v-img>
        <p class="caption text-sm-body-1">写真を中心に、話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート</p>
        <h1 class="mt-5 text-subtitle-2 text-sm-subtitle-1 mb-2">
          <b>vol.5 Panasonic LUMIX G9 PRO |【新製品実写レビュー】ドッグランを高速で駆け抜ける犬を撮影！</b>
        </h1>
        <v-img
          src="/ec/images2/special/general/photo_mono/g9pro/top.jpg"
          alt="vol.5 Panasonic LUMIX G9 PRO |【新製品実写レビュー】ドッグランを高速で駆け抜ける犬を撮影！"
          max-width="950"
          max-height="296"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          ミラーレス機が登場して10年。Panasonic LUMIX G1
          から進化を続け、静止画向けフラッグシップ機という位置付けで登場したパナソニックのハイエンド・ミラーレス一眼「LUMIX G9
          PRO」。今までは動画性能に強いGHシリーズがフラッグシップ機として君臨していましたが、今回のG9
          PROは動画・静止画の“ダブルフラッグシップ”という位置付けになっています。特に私が注目したのは撮りたい一瞬を逃さないという「連写機能」と「ＡＦ性能」です。
        </div>
        <!--==================== TOP商品==================== -->

        <productAppeal :mainProductList="topProductList" :sm="6"></productAppeal>

        <!--==================== ライバル機「OLYMPUS OM-D E-M1 MarkⅡ」と比較してみる ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">ライバル機「OLYMPUS OM-D E-M1 MarkⅡ」と比較してみる</v-sheet>
        <v-card flat class="line-g mt-2">
          <v-container>
            <v-row class="mt-sm-5">
              <v-col cols="12" sm="6" class="pa-4">
                <a href="/ec/pd/4545350050849"><b>オリンパス OM-D E-M1 MarkII</b></a>
                <p class="py-4 caption text-sm-body-1 mb-0">
                  一番のライバル機種となるのはやはり 同じマイクロフォーサーズ機の 「OLYMPUS OM-D E-M1MarkⅡ」でしょう。
                </p>
              </v-col>
              <!--====================second商品==================== -->

              <v-col cols="12" sm="6">
                <productAppeal :mainProductList="secondProductList" :type="2"></productAppeal>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          まず連写性能はオリンパス OM-D E-M1 MarkⅡのAF/AE追従最高18コマ/秒に対して、G9 PROはAF追従連写で約20コマ/秒の撮影が可能です。
          そしてこの連写性能を支えているのが、世界最速
          約0.04秒のAFを実現した「空間認識AF」と、新たに搭載された120fs対応の「LVF（ライブビューファインダー）」。動きの速い被写体を“しっかりと見ながら捉える”ことができます。
        </div>
        <v-img
          src="/ec/images2/special/general/photo_mono/g9pro/image01_pc.jpg"
          alt="G9 PROはAF追従連写で約20コマ/秒の撮影が可能"
          max-width="890"
          max-height="auto"
          class="mx-auto"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          また、OM-D
          E-M1MarkⅡに搭載されている“プロキャプチャーモード”と同様の「プリ連写機能」を搭載していることも、ライバル設定をわかりやすくしています。「プリ連写機能」は超高速連写設定時、連写撮影を始める際に⾏われるシャッターボタン半押しの動作から約20M画素での連写記録を事前に開始。シャッターボタン全押し（連写撮影開始）までの間をさかのぼって記録することができ、AFS/MF時は最⼤24枚、AFC/AFF時は最⼤8枚の連写撮影が可能になる機能です。
        </div>
        <v-img
          src="/ec/images2/special/general/photo_mono/g9pro/image04.jpg"
          alt="「プリ連写機能」を搭載"
          max-width="890"
          max-height="auto"
          class="mx-auto"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          素早く動く鳥や動物などの被写体、スポーツシーンの⼀瞬を人の反応遅延やレリーズタイムラグなどで逃しても、その瞬間をカメラが⾃動的に連写記録を⾏うので決定的瞬間を撮り逃すことなく、撮影を補助してくれるという非常に便利な機能なのです。
        </div>
        <!--==================== Panasonic LUMIX G9 Pro＋“ヨンニッパ”で、高速で駆け抜ける犬の撮影に挑戦！ ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929"
          >Panasonic LUMIX G9 Pro＋“ヨンニッパ”で、高速で駆け抜ける犬の撮影に挑戦！</v-sheet
        >
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          このG9
          PROの魅力ある連写性能とAF性能を確かめるために、今回はドックランで元気に走り回るワンちゃんを撮影してみました。使用したレンズは、2017年12月に発表されたばかりの望遠単焦点レンズ「LEICA
          DG ELMARIT 200mm F2.8 POWER O.I.S.」。
        </div>
        <!--==================== third商品==================== -->
        <productAppeal :mainProductList="thirdProductList" :sm="6"></productAppeal>
        <div class="px-1 px-sm-6 mt-7 caption text-sm-body-1 mb-6">
          35mm換算で400mmのF2.8となる、いわゆる“ヨンニッパ”。マイクロフォーサーズ規格では初めてのヨンニッパレンズです。重量も約1245gとフルサイズ機の400mmF2.8と比較すると1/3程度で、片手で持てる重さ。G9
          PROの重量がバッテリーなども含めて約658g、このレンズと組み合わせても2㎏を切るという驚異的な軽さです！
        </div>

        <v-img
          src="/ec/images2/special/general/photo_mono/g9pro/image01.jpg"
          alt="G9 PROの重量がバッテリーなども含めて約658g、このレンズと組み合わせても2㎏を切るという驚異的な軽さ"
          max-width="890"
          max-height="auto"
          class="mx-auto"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          20mほど先から走ってくるワンちゃんを撮影。高速で向かってくる被写体にピントを合わせ続けながら撮影するのは非常に難しいです。それだけにAF性能や連写性能を見るには持ってこいのシチュエーションと言えます。
        </div>

        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/g9pro/image02.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/2000 絞りF2.8 ISO200  焦点距離200mm (35mm換算400mm)'"
        />
        <v-img
          src="/ec/images2/special/general/photo_mono/g9pro/image03.jpg"
          alt="G9 PROの連写性能を活用すれば、ワンちゃんが躍動している一瞬を撮影することが可能"
          max-width="890"
          max-height="auto"
          class="mx-auto"
        ></v-img>

        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          上の写真は27コマ連写して撮影したもの。後半3コマ程度ピントが若干甘いカットもありましたが、全体的に精度の高さに驚きました。G9
          PROの連写性能を活用すれば、ワンちゃんが躍動している一瞬を撮影することが可能です。
        </div>
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/g9pro/image05.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/2000 絞りF2.8 ISO200 焦点距離200mm (35mm換算400mm)'"
        />
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/g9pro/image06.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/2500 絞りF2.8 ISO200 焦点距離200mm (35mm換算400mm)'"
        />
        <div class="px-1 px-sm-6 mt-8 caption text-sm-body-1 mb-6">
          こういったシーンがラクラク撮れるので、G9
          PROは撮影していて非常に楽しくなるカメラ。特に動く被写体を撮影する機会が多いカメラマンには間違いなくおすすめです！
          加えてマイクロフォーサーズ機なのでレンズシステムも全体的に小型で、超望遠レンズを持っても撮影場所を色々変えながら軽快に撮影できるのも良いですね。
        </div>

        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/g9pro/image07.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/4000絞りF2.8 ISO200 焦点距離200mm (35mm換算400mm)'"
        />
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          ワンちゃんの毛の描写も非常にシャープ。超望遠のF2.8開放から表現される背景の柔らかいボケは、このレンズならではの雰囲気を作り出してくれます。
        </div>

        <!--==================== やはり被写体の視認性は重要！魅力的な「大きくて見やすいファインダー」 ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">やはり被写体の視認性は重要！魅力的な「大きくて見やすいファインダー」</v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          ワンちゃん撮影の帰りに公園を歩きながらスナップ撮影も楽しみました。GH5のファインダー倍率が0.7倍なのに対して、G9
          PROは0.83倍（35mm判換算）。大型で非常に見やすく、マニュアルフォーカスで撮影した時もピント合わせが容易でした。ファインダー横にあるV.MODEボタンで被写体やメガネ装着の有無などで倍率を切り替えることも可能になっています。やはり撮影する上で視認性の良し悪しは重要なポイントです。
        </div>
        <v-img
          src="/ec/images2/special/general/photo_mono/g9pro/image08.jpg"
          alt="魅力的な「大きくて見やすいファインダー」"
          max-width="890"
          max-height="auto"
          class="mx-auto"
        ></v-img>

        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/g9pro/image09.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/800 絞りF2.8 ISO200 焦点距離200mm (35mm換算400mm)'"
        />
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/g9pro/image10.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ LUMIX G VARIO 12-60mm F3.5-5.6 ASPH. POWER O.I.S.'"
          :shootingInformation="'シャッター速度1/400 絞りF4 ISO200 焦点距離60mm (35mm換算120mm)'"
        />

        <!--==================== 【結論】Panasonic LUMIX G9 RROを使用した感想 ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">【結論】Panasonic LUMIX G9 RROを使用した感想 </v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          今回はあまり長期間撮影できませんでしたが、それでも注目していた連写性能とAF精度の高さを十分に堪能することができました。小型軽量で魅力あるレンズのラインナップも併せて、いつでもどこでもどんなシチュエーションにも対応できる魅力的なカメラだと思います。
        </div>
        <div class="px-1 px-sm-6 mt-5 mb-7 text-body-1">
          <v-card flat class="line-g">
            <v-container>
              <v-row class="mt-sm-7">
                <v-col cols="12" sm="6" class="pa-4">
                  <p>坂井田富三 -sAka-</p>
                  <p class="pl-4">
                    写真家（日本写真家協会JPS会員）<br />
                    1967年愛知県生まれ。<br />
                    現在は横浜市在住。<br />
                    スポーツ写真と愛猫（ブリティッシュショートヘア）のライカとエルマーの撮影をメインに活動中。
                  </p>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/general/photo_mono/g9pro/sakaida1.jpg"
                    alt="坂井田富三"
                    max-width="198"
                    max-height="264"
                    class="mx-auto"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
        <!--==================== 今回使用したアイテム・おすすめアクセサリー ====================-->
        <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">今回使用したアイテム・おすすめアクセサリー</v-sheet>
        <product-list-by-special-id class="mb-5" :specialId="965" />

        <!--banner-->
        <div class="mt-7 s-bnr">
          <p class="text-h6 text-sm-h4">バックナンバー</p>
          <recommendedFeatures :recommendedFeaturesList="backNumberList" />
        </div>
        <div class="mt-7 s-bnr">
          <p class="text-h6 text-sm-h4">おすすめ特集・サービス</p>
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
import ShootingInformation from '@/components/common/special/shootingInformation.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'g9pro',
  components: {
    productAppeal: ProductAppeal,
    shootingInformation: ShootingInformation,
    'product-list-by-special-id': ProductListBySpecialId,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'vol.5 Panasonic LUMIX G9 PRO |【新製品実写レビュー】ドッグランを高速で駆け抜ける犬を撮影！ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート。vol.5 Panasonic LUMIX G9 PRO |【新製品実写レビュー】ドッグランを高速で駆け抜ける犬を撮影！')

    const state = reactive({
      // ↓ ---- Top商品価格 ----
      topProductJanCode: ['4549980016695', '4549980016718',],
      topProductList: [] as Array<ProductDetail>,
      // ↓ ---- second商品価格 ----
      secondProductJanCode: ['4545350050849',],
      secondProductList: [] as Array<ProductDetail>,

      // ↓ ---- third商品価格 ----
      thirdProductJanCode: ['4549980012321', '2500000130533',],
      thirdProductList: [] as Array<ProductDetail>,


      backNumberList: [
        {
          href: '/ec/special/general/photo_mono/g9pro',
          img: 'https://shop.kitamura.jp/images/banner/5093.jpg',
          alt: 'vol.5 Panasonic LUMIX G9 PRO'
        },
        {
          href: '/ec/special/general/photo_mono/a7r3-a9',
          img: 'https://shop.kitamura.jp/images/banner/4998.jpg',
          alt: 'vol.4 SONY α7RⅢ| α7RⅡやα9と比較しながらプロカメラマンが実写レビューレポート'
        },
        {
          href: '/ec/special/general/photo_mono/omd-em1',
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

      } catch (error) {
        // トップ商品
        state.topProductList = [] as Array<ProductDetail>;
        // second商品
        state.secondProductList = [] as Array<ProductDetail>;
        // third商品
        state.thirdProductList = [] as Array<ProductDetail>;


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
.s-bnr p {
  background: rgba(0, 0, 0, 0) linear-gradient(transparent 70%, #ddd 70%) repeat scroll 0 0;
  font-family: 'ヒラギノ角ゴ Pro W3', 'メイリオ', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
  padding-left: 10px;
}
</style>