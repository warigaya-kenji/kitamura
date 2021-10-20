<template>
  <v-app>
    <div class="tripod">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy :color="'#ed7f22'" />

        <!-- 960px以上 -->
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-img class="mb-5" src="/ec/images2/special/camera/tripod/bn_00.gif" max-width="100%" height="auto" />
        </div>
        <!-- 960px未満 -->
        <div v-if="$vuetify.breakpoint.smAndDown">
          <v-img class="mb-5" src="/ec/images2/special/camera/tripod/bn_sp00.webp" max-width="100%" height="auto" />
        </div>

        <p class="text-left">おすすめ三脚の選び方</p>
        <p>
          旅行や登山、花や鉄道・飛行機、夜景など、撮りたいシーンに合わせたおすすめ三脚や、ベルボン、マンフロット、スリックなどの人気メーカーのおすすめ三脚をピックアップ★
          コンパクトな小型ミニ三脚や軽量カーボン・アルミ三脚、ビデオカメラ用三脚、一脚、雲台の選び方のポイントもまとめました♪
        </p>

        <!-- ↓ ナビボタン -->
        <v-row dense>
          <v-col cols="12" sm="4" v-for="(navi, index) in naviList" :key="`navi-${index}`">
            <v-hover v-slot="{ hover }">
              <v-btn tile block :href="navi.href" :elevation="hover ? 12 : 2" :color="hover ? 'blue' : '#1A1D1F'" height="45px"
                ><span class="white--text">{{ navi.naviItem }}</span></v-btn
              >
            </v-hover>
          </v-col>
        </v-row>
        <!-- ↑ ナビボタン -->

        <subText :textItem="'種類で選ぶ♪ おすすめ三脚'" id="v001" />
        <p class="subtitle-2 font-weight-bold">
          三脚は種類によって、素材、強度、大きさ、重さが異なります。強度は、各商品ページに「推奨積載質量」を記載していますので参考にしてください。
        </p>

        <!--▼種類で選ぶ-->
        <!-- 960px以上 -->
        <v-container class="bg-color" v-if="$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col sm="4" v-for="(tripodType, index) in tripodTypeList" :key="`tripodType-${index}`" class="ma-0">
              <v-card outlined color="#E3E3E3" class="pa-2 ma-0">
                <router-link :to="`/ec/special/camera/tripod/type0${index + 1}/`">
                  <v-img :src="`/ec/images2/special/camera/tripod/type_0${index + 1}.gif`" max-width="100%" height="auto" />
                </router-link>
                <v-card-text class="caption black--text pa-0 ma-0 font-weight-medium">{{ tripodType.maintxt }} </v-card-text>
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :elevation="hover ? 6 : 2"
                    block
                    :color="hover ? 'blue' : 'orange'"
                    :href="`/ec/special/camera/tripod/type0${index + 1}`"
                    class="pa-4 ma-0 darken-2"
                    height="40px"
                    ><span class="white--text">{{ tripodType.btntxt }}</span></v-btn
                  >
                </v-hover>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!-- 960px未満 -->
        <v-row v-if="$vuetify.breakpoint.smAndDown" no-gutters>
          <v-col cols="6" v-for="(tripodType, index) in tripodTypeList" :key="`tripodType-${index}`" class="ma-0">
            <router-link :to="`/ec/special/camera/tripod/type0${index + 1}`">
              <v-img :src="`/ec/images2/special/camera/tripod/type_0${index + 1}.gif`" max-width="100%" height="auto" />
            </router-link>
          </v-col>
        </v-row>
        <!--▼種類で選ぶ-->

        <subText :textItem="'三脚を選ぶときに必須！ 用途別に必要なパーツ類をご紹介'" id="v002" />
        <p class="subtitle-2 font-weight-bold">
          三脚を選ぶときには、カメラを三脚に固定する装置「雲台」選びも重要です。雲台は主に「３ウェイ雲台」「自由雲台」があります。
        </p>

        <!--↓パーツ-->
        <!-- 960px以上 -->
        <v-container class="bg-color mb-12" v-if="$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col cols="4" v-for="(tripodPart, index) in tripodPartsList" :key="`tripodPart-${index}`" class="ma-0">
              <v-hover>
                <v-card outlined color="#E3E3E3" class="pa-2 ma-0">
                  <router-link :to="`/ec/special/camera/tripod/parts0${index + 1}`">
                    <v-img :src="`/ec/images2/special/camera/tripod/un_0${index + 1}.gif`" max-width="100%" height="auto" />
                  </router-link>
                  <v-card-text class="caption black--text pa-0 ma-0 font-weight-medium">
                    {{ tripodPart.maintxt }}
                  </v-card-text>
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      :elevation="hover ? 6 : 2"
                      block
                      :color="hover ? 'blue' : 'orange'"
                      :href="`/ec/special/camera/tripod/parts0${index + 1}`"
                      class="pa-4 ma-0 darken-2"
                      height="40px"
                      ><span class="white--text">{{ tripodPart.btntxt }}</span></v-btn
                    >
                  </v-hover>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
        <!-- 960px未満 -->
        <v-row v-if="$vuetify.breakpoint.smAndDown" no-gutters>
          <v-col cols="6" v-for="(tripodPart, index) in tripodPartsList" :key="`tripodPart-${index}`" class="ma-0">
            <router-link :to="`/ec/special/camera/tripod/parts0${index + 1}`">
              <v-img :src="`/ec/images2/special/camera/tripod/un_0${index + 1}.gif`" max-width="100%" height="auto" />
            </router-link>
          </v-col>
        </v-row>
        <!--↓パーツ-->

        <!-- ↓ 撮影シーンで選ぶ -->
        <div id="v003" class="mb20 h-1 lef w100pr"></div>

        <subText :textItem="'撮影シーンで選ぶ♪ おすすめ三脚'" id="v003" />
        <p class="subtitle-2 font-weight-bold">
          人気メーカーのベルボン、マンフロット、スリックのおすすめ三脚をピックアップ★撮りたいシーンに合わせてお選びください
        </p>

        <v-row dense>
          <v-col cols="3" v-for="(navi, index) in shootingSceneNaviList" :key="`navi-${index}`">
            <v-hover v-slot="{ hover }">
              <v-btn :href="navi.href" :elevation="hover ? 12 : 2" :color="hover ? 'blue' : '#1A1D1F'" width="100%"
                ><span class="white--text">{{ navi.naviItem }}</span></v-btn
              >
            </v-hover>
          </v-col>
        </v-row>
        <!-- ↓ 撮影シーンで選ぶ -->

        <!--↓旅行-->
        <div class="my-10">
          <h3 class="">旅行や登山、ファミリーにおすすめ！コンパクト＆軽量三脚</h3>
        </div>

        <recommendedTripod
          :itemList="mainProductList[0]"
          :name="'マンフロット MKCOMPACTACN'"
          :src="'/ec/images2/special/camera/tripod/sir_02.gif'"
          :txt="'ジョイスティック型のハンドルで、フォトもムービーも撮影可能です。'"
          :isCartBtn="false"
        />

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓ローポジ-->
        <div class="mt-12 mb-10">
          <h3 class="">花や昆虫の撮影におすすめ！ローポジション三脚</h3>
        </div>

        <recommendedTripod
          :itemList="mainProductList[1]"
          :name="'マンフロット MK290DUA3-3WK'"
          :src="'/ec/images2/special/camera/tripod/sir_05.gif'"
          :txt="'90度センターポール機構によりローポジション撮影に最適。開脚角度は4段階に調整可能。'"
        />

        <recommendedTripod
          :itemList="mainProductList[2]"
          :name="'スリック E53 ライトカーボン'"
          :src="'/ec/images2/special/camera/tripod/sir_06.gif'"
          :txt="'持ち運び重視の軽量カーボン三脚。ローポジション含め三段階の開脚調整が可能。'"
          :color="'#454545'"
        />

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓花火-->
        <div class="mt-12 mb-10">
          <h3 class="">夜景撮影・花火撮影におすすめ！ カーボン三脚</h3>
          <p class="pa-4 text-subtitle-2">夜間に撮影する花火には、振動吸収率がいいカーボン三脚が効果バツグン。</p>
        </div>

        <recommendedTripod
          :itemList="mainProductList[3]"
          :name="'マンフロット MKBFRTC4-BH befreeアドバンス カーボンT三脚キット'"
          :src="'/ec/images2/special/camera/tripod/sir_08.gif'"
          :txt="'カーボンファイバー100%の脚なので、軽量で高剛性。基本性能に優れたカーボン三脚です。'"
        />

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓風景写真-->
        <div class="mt-12 mb-10">
          <h3 class="">自然、風景写真、ネイチャーフォト撮影におすすめ！ 軽量カーボン三脚</h3>
          <p class="pa-2 text-subtitle-2">
            自然写真、風景写真の本格的な作品作りに。ネイチャーフォト撮影に必要なスペックと耐荷重が備わった、おすすめの軽量カーボン三脚です。
          </p>
        </div>

        <recommendedTripod
          :itemList="mainProductList[4]"
          :itemList2="mainProductList[5]"
          :name="'マンフロット MT190XPRO3 ＋ MHXPRO-3W'"
          :src="'/ec/images2/special/camera/tripod/sir_011a.gif'"
          :src2="'/ec/images2/special/camera/tripod/sir_011b.gif'"
          :txt="'90°センターポールや片手で簡単に伸縮操作できるクイックパワーロックを採用。撮影の可能性を広げるメインストリートモデルです。'"
          :type="2"
        />

        <recommendedTripod
          :itemList="mainProductList[6]"
          :name="'スリック E74 ライトカーボン'"
          :src="'/ec/images2/special/camera/tripod/sir_012.gif'"
          :txt="'中型25mmパイプ径の軽量デジタル一眼レフ向けカーボン三脚。航空機内持ち込みサイズ60cm未満に対応。コンパクトに持ち運べる4段三脚です'"
          :color="'#454545'"
        />

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓電車-->
        <div class="mt-12 mb-10">
          <h3>撮り鉄におすすめ！ カーボン三脚</h3>
          <p class="pa-2 text-subtitle-2">複数のカメラを載せるスペックがある三脚がおすすめです。</p>
        </div>

        <recommendedTripod
          :itemList="mainProductList[7]"
          :name="'ベルボン プロフェッショナル・ジオ V630 ＋ PHD-61 ＋ スーパーマグプレート II'"
          :images="[
            '/ec/images2/special/camera/tripod/sir_013a.gif',
            '/ec/images2/special/camera/tripod/sir_013b.gif',
            '/ec/images2/special/camera/tripod/sir_013c.gif'
          ]"
          :txt="'鉄道の撮影は広角と望遠用に2台カメラ構えが必要。1度きりのチャンスをギア付きカーボン三脚でしっかりとらえましょう。'"
          :color="'#0291d5'"
          :type="3"
        />

        <recommendedTripod
          :itemList="mainProductList[8]"
          :name="'マンフロット MK055XPRO3-3W'"
          :src="'/ec/images2/special/camera/tripod/sir_014.gif'"
          :txt="'90°センターポール機構により、最低高は9cm、最伸高183cmまでと、鉄道のさまざまな表情の撮影が可能です。'"
        />

        <recommendedTripod
          :itemList="mainProductList[9]"
          :name="'スリック カーボンマスター 923PRO N ＋ マルチアーム520'"
          :images="['	/ec/images2/special/camera/tripod/sir_015a.gif', '	/ec/images2/special/camera/tripod/sir_015b.gif']"
          :txt="'望遠レンズやフルサイズユーザーにおすすめの安定感の高い大型3段カーボン三脚です。また、マルチアーム520（通称「鉄ちゃんバー」）使用でカメラを2台載せティルトパーン操作が可能！'"
          :type="3"
          :color="'#454545'"
        />

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓飛行機-->
        <div class="mt-12 mb-10">
          <h3>飛行機の撮影におすすめ！ 一脚</h3>
          <p class="pa-2 text-subtitle-2">時速300キロで離着陸をする航空機を狙うには、大口径レンズを振り回しても問題がないスペックが必要です。</p>
        </div>

        <recommendedTripod
          :itemList="mainProductList[10]"
          :name="'ベルボン ULTRA STICK R63Q 一脚'"
          :src="'https://shopimg.kitamura.jp/images/pd/957/60b/82a/9eb/c09/10f/9e9/16f/e34/a64/fcl/4ge/ai5/i/M.jpg'"
          :txt="'脚先端を握ってひねる事で全段を一気に固定・解除する事ができるウルトラロック採用。使いやすさを徹底追求しました。'"
          :color="'#0291d5'"
        />

        <recommendedTripod
          :itemList="mainProductList[11]"
          :name="'マンフロット MVMXPROC5 XPRO'"
          :images="[
            'https://shopimg.kitamura.jp/images/pd/c7f/0ad/098/6eb/dd3/9aa/28d/32b/760/b9e/83f/gkf/tv4/o/M.jpg',
            'https://shopimg.kitamura.jp/images/pd/8bd/f98/20b/d55/7ff/c63/974/4eb/850/d79/d8v/pdb/8y2/f/TN.jpg'
          ]"
          :txt="'クイックパワーロックやレッグウォーマー採用。パン以外をロックするFLUIDTECH 機構 搭載でフォト・ムービー撮影の両方で使用が可能です。'"
          :type="3"
        />

        <recommendedTripod
          :itemList="mainProductList[12]"
          :name="'スリック 一脚 ザ プロポッドスポーツ'"
          :src="'https://shopimg.kitamura.jp/images/pd/c8a/82e/80e/e9a/4d3/8cc/e76/908/8cd/047/ecv/kao/323/7/M.jpg'"
          :txt="'スペースが狭く撮影しにくいシーンに便利な自立一脚。ザ プロポッドより細いパイプを使い、軽量化を図ったプロ用一脚の軽量モデルです。'"
          :color="'#454545'"
        />

        <v-container class="mb-12">
          <p>作例 ～飛行機写真～</p>
          <v-row class="ba-gr">
            <v-col cols="4" v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
              <img :src="src" width="100%" />
              <p class="text-right mb-0 pb-0">
                <v-icon>fas fa-search-plus</v-icon>
              </p>
            </v-col>
          </v-row>
          <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
        </v-container>

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--野鳥-->
        <div class="mt-12 mb-10">
          <h3>野鳥撮影や超望遠撮影用におすすめ！ 大型三脚</h3>
        </div>

        <recommendedTripod
          :itemList="mainProductList[13]"
          :name="'スリック マスターIII'"
          :src="'/ec/images2/special/camera/tripod/sir_021.gif'"
          :txt="'一つのハンドルで上下左右を一度にロックができる、フリーターン雲台を採用。日本製。'"
          :color="'#454545'"
        />

        <p class="text-right mb-12">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓ ショッピングクレジット-->
        <shoppingCredit :installmentPaymentExampleList="installmentPaymentExampleList" :title="'三脚'" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <!--↓特集-->
        <subText :textItem="'おすすめ特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        <!--↑特集-->
        <!-- </div> -->
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import RecommendedTripod from '@/components/common/special/recommended-tripod.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';

export default Vue.extend({
  name: 'tripod',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    recommendedFeatures: RecommendedFeatures,
    recommendedTripod: RecommendedTripod,
    facebookAndTwitter: FacebookAndTwitter,
    shoppingCredit: ShoppingCredit
  },
  setup: (props, context) => {
    document.title = 'おすすめ三脚の選び方 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'おすすめ三脚の選び方')
    const state = reactive({
      naviList: [
        { naviItem: '種類で選ぶ おすすめ三脚 ▼', href: '#v001' },
        { naviItem: '必要なパーツ類のご紹介 ▼', href: '#v002' },
        { naviItem: '撮影シーンで選ぶ おすすめ三脚 ▼', href: '#v003' }
      ],
      tripodTypeList: [
        { maintxt: '風景写真が好きで作品作りを考えてる方には最適。軽くて丈夫なので大口径レンズも対応！', btntxt: 'カーボン三脚を見る ≫' },
        { maintxt: '小さく畳める携帯性の高い三脚。\n使用時に標準的な高さになるので旅行におすすめ', btntxt: 'トラベラー三脚を見る ≫' },
        { maintxt: 'ピントあわせがシビアなマクロレンズと相性バッチリ！ローポジションで花に近づけます', btntxt: 'ローポジション三脚を見る ≫' },
        { maintxt: '家族の集合写真には三脚が必須。軽くて使いやすい三脚で大切な記録を残しましょう', btntxt: 'ファミリー三脚を見る ≫' },
        { maintxt: 'ミニサイズの三脚なら、持ち運びラクラク♪ 気軽にどこでも記念撮影', btntxt: 'ミニサイズ三脚を見る ≫' },
        { maintxt: 'お子様の大切な学校行事や誕生日会。成長の記録の共に', btntxt: 'ビデオ撮影用三脚を見る ≫' }
      ],
      tripodPartsList: [
        { maintxt: '風景の作品作りにはこれ。水平をしっかり確保し構図を決め、チャンスを逃さないようにしましょう', btntxt: '3ウェイ三脚を見る ≫' },
        { maintxt: '雲台が自由に動くので、スポーツやF1など動きのある被写体の撮影におすすめ。軽量なのもポイント！', btntxt: '自由雲台を見る ≫' },
        {
          maintxt: 'クイックシューで三脚へのセットが楽々♪とっさの手持ち撮影にも便利。またカメラのネジ山を傷めないためにもおすすめ！',
          btntxt: 'クイックシューを見る ≫'
        }
      ],
      shootingSceneNaviList: [
        { naviItem: '家族旅行', href: '#si01' },
        { naviItem: '花や昆虫', href: '#si02' },
        { naviItem: '夜景花火', href: '#si03' },
        { naviItem: '自然風景', href: '#si04' },
        { naviItem: '鉄道電車', href: '#si05' },
        { naviItem: '飛行機', href: '#si06' },
        { naviItem: '野鳥動物', href: '#si07' }
      ],
      visible: false,
      index: 0, // default: 0
      imgs: [
        '/ec/images2/special/camera/tripod/hikouki01.jpg',
        '/ec/images2/special/camera/tripod/hikouki02.jpg',
        '/ec/images2/special/camera/tripod/hikouki03.jpg'
      ],
      installmentPaymentExampleList: [
        { productPrice: '168,552', numberOfDivisions: '48', monthlyPayment: '3,512' },
        { productPrice: '35,730', numberOfDivisions: '10', monthlyPayment: '3,573' },
      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/okamoto-yutaka/',
          img: 'https://shopimg.kitamura.jp/images/banner/7678.jpg',
          alt: '空写真家 岡本豊先生のレオフォト三脚講座'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/bag/trial/',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/special/sale-fair/camera/lensfilter/',
          img: 'https://shopimg.kitamura.jp/images/banner/1342.jpg',
          alt: 'カメラレンズフィルター'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/general/how-to/hanabi/',
          img: 'https://shopimg.kitamura.jp/images/banner/3043.jpg',
          alt: '花火特集'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'おすすめ三脚の選び方',
          disabled: true
        }
      ],
      mainProductJanCode: [
        '8024221631142',
        '8024221647822',
        '4906752106969',
        '8024221668315',
        '8024221623178',
        '8024221623314',
        '4906752108345',
        '4907990473387',
        '8024221623291',
        '4906752201688',
        '4907990407856',
        '8024221667189',
        '4906752204238',
        '4906752100448'
      ],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
      }
    };

    const showImg = (index: number) => {
      state.index = index;
      state.visible = true;
    }

    const handleHide = () => {
      state.visible = false;
    }

    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      showImg,
      handleHide
    };
  }
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 952px) {
  .ba-gr {
    border: #626262 dashed 1px;
  }
}

@media screen and (min-width: 952px) {
  div.s-credit table {
    width: 100%;
    border-collapse: collapse;
  }
}

@media screen and (min-width: 952px) {
  div.s-credit table th {
    background: #1abc9c none repeat scroll 0 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
