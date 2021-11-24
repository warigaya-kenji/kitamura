<template>
  <v-app>
    <div class="technics">
      <!-- 表示期間外の場合 -->
      <notfound :errorMessage="errorMsg" v-if="errorMsg" />
      <div class="main-contents-wrap" v-else-if="!errorMsg">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓タイトル画像は三項演算子を使い表示期間に応じて動的に画像を変更してます -->
        <topTitleImg
          :pcBackgroundImg="
            isShowFan
              ? '/ec/images2/special/camera/feature/panasonic/technics/fan/bg_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/panasonic/technics/reserve/bg_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/panasonic/technics/release/bg_top.jpg'
              : ''
          "
          :spBackgroundImg="
            isShowFan
              ? '/ec/images2/special/camera/feature/panasonic/technics/fan/sp_img_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/panasonic/technics/reserve/sp_img_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/panasonic/technics/release/sp_img_top.jpg'
              : ''
          "
          :topTitle="'Technics 完全ワイヤレスイヤホン レビュー '"
          :topTitleText="'テクニクスの音響技術と独自の通話音声処理技術を搭載\nリアルな高音質とクリアな通話音質を実現'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'170px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <!-- ↓予約か発売かでテキストを変更してます -->
          <span class="white--text text-h6 font-weight-bold">{{
            isShowFan ? '2021年9月29日13時 予約受付開始！' : isShowReserve ? 'ご予約受付中！' : isShowRelease ? '好評発売中' : ''
          }}</span>
        </p>

        <div v-if="!isShowFan">
          <!--====== 価格・ご購入 ======-->
          <subText :textItem="'Technics 完全ワイヤレスイヤホン 価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" :btntxt="isShowRelease ? 'ご購入はこちら' : 'ご予約はこちら'" />
        </div>

        <!--====== Technics 完全ワイヤレスイヤホン レビュー ======-->
        <div v-if="!isShowFan">
          <div>
            <subText :textItem="'Technics 完全ワイヤレスイヤホン EAH-AZ60/ EAH-AZ40レビュー'" />
            <p class="mt-2 pa-2">
              パナソニックから音響ブランドTechnicsを冠した完全ワイヤレス イヤホン2機種が発売されます。<br />今回、EAH-AZ60/
              EAH-AZ40を発売前に試用する機会をいただいたのでレビューをしていきます。<br />※製品版とはバージョン・仕様が異なる場合があります
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/panasonic/technics/im01.jpg"
              alt="Technics 完全ワイヤレスイヤホン "
              max-width="600"
              max-height="auto"
              class="mx-auto"
            ></v-img>

            <subText :textItem="'レビューEAH-AZ60/ EAH-AZ40'" />
            <p class="mt-2 pa-2">
              Technicsブランドの完全ワイヤレス イヤホンは新機種に加えて併売される既発売のEAH-AZ70を加えた3機種のラインナップを簡単にまとめると
            </p>
            <ol>
              <li>EAH-AZ70 ： 音質重視のフラッグシップモデル</li>
              <li>EAH-AZ60 ： 最新機能を追加した全部入りモデル</li>
              <li>EAH-AZ40 ： 機能を絞ったコンパクトモデル</li>
            </ol>
          </div>
          <!--====== EAH-AZ60/ EAH-AZ40の外観レビュー ======-->
          <div>
            <subText :textItem="'EAH-AZ60/ EAH-AZ40の外観レビュー'" />
            <h3 class="mt-6">カラーバリエーションと外観</h3>
            <p class="mt-2 pa-2">EAH-AZ60はシルバーとブラックの2色<br />EAH-AZ40はシルバーとブラックにローズゴールドを加えた３色のカラーバリエーション</p>

            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/camera/feature/panasonic/technics/im02-1.jpg"
                    alt="Technics 完全ワイヤレスイヤホン "
                    max-width="100%"
                    max-height="100%"
                  ></v-img
                ></v-col>
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/camera/feature/panasonic/technics/im02-2.jpg"
                    alt="Technics 完全ワイヤレスイヤホン "
                    max-width="100%"
                    max-height="100%"
                  ></v-img
                ></v-col>
              </v-row>
            </v-container>

            <p class="mt-2 pa-2">
              耳から外に出る表面は、金属感のある同心円状のヘアライン加工がされており、高級感があります。またこの部位がタッチセンサーになっています。<br />
              マイクは上下に２箇所と内側に１箇所、合計３個配置されています（後述)
              <br /><br />イヤーピースは耳垢防止ガードがついた専用のものが４サイズ付属しています。<br />ノズルは短くやや太いため、社外品のイヤーピースをいくつか試しましたが装着感が悪化するものもありました。付け替えて楽しむ場合は完全ワイヤレスイヤホン用のイヤーピースを選んだほうが良さそうです。
            </p>
            <v-row>
              <v-col cols="12">
                <v-img
                  src="/ec/images2/special/camera/feature/panasonic/technics/im03.jpg"
                  alt="Technics 完全ワイヤレスイヤホン "
                  max-width="600"
                  max-height="auto"
                  class="mx-auto"
                ></v-img></v-col
            ></v-row>
            <p class="mt-2 pa-2">
              大きさが異なることは見た目でわかりますが、EAH-AZ60は片側7g、EAH-AZ40は片側5gと重さにも違いがあります。<br />実際に耳に装着するとEAH-AZ60は外耳孔にうまく密着して収まるのでそれほど重さは気になりませんでしたが、長時間利用の場合は軽いEAH-AZ40の方が有利かもしれません。（そもそもイヤホンは長時間使うものではないので、耳を休めながら使いましょう）
            </p>

            <v-img
              src="/ec/images2/special/camera/feature/panasonic/technics/im04.jpg"
              alt="Technics 完全ワイヤレスイヤホン "
              max-width="600"
              max-height="auto"
              class="mx-auto"
            ></v-img>

            <h3 class="mt-6">コンパクトな充電ケース</h3>
            <p class="mt-2 pa-2">
              <br />
              充電ケースはEAH-AZ60が45g、EAH-AZ40が30gでコンパクトな形状です。<br />
              表面にブラスが吹き付けてあるような加工が施してあり滑りにくくなっています。<br />
              給電はUSB-Type Cです。ワイヤレス充電Qiには対応しません。<br />
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/panasonic/technics/im05.jpg"
              alt="Technics 完全ワイヤレスイヤホン "
              max-width="600"
              max-height="auto"
              class="mx-auto"
            ></v-img>
            <p class="mt-2 pa-2">またイヤホン収納部先端は付属品に外のイヤーピース何種類か装着してみましたが、問題なく収納できそうです。</p>
            <v-img
              src="/ec/images2/special/camera/feature/panasonic/technics/im06.jpg"
              alt="Technics 完全ワイヤレスイヤホン "
              max-width="600"
              max-height="auto"
              class="mx-auto"
            ></v-img>
            <h3 class="mt-6">■ノイズキャンセリング機能と外音取込機能</h3>
            <p class="mt-2 pa-2">
              ノイズキャンセリング機能はEAH-AZ60にのみ搭載されています。<br />
              評価機のため地下鉄や街中での使用はできませんでしたが、室内や幹線沿いのベランダでテストしてみました。<br /><br />
              室内のエアコンや換気扇・扉を1枚隔てた先のドラム式洗濯機の駆動音は気にならない程度にカットされていました。一方で、車の走行音はある程度聴こえたり、この記事を書いている際のキーボードの打鍵音は残っているので、必要十分ではあるけれども極端なカットはされていない印象です。（某メーカーのイヤホンはノイズキャンセルされすぎて外だと怖いくらいですし）<br /><br />一点気になるのは専用アプリ（Technics
              Audio Connect）を使わずに本体単体だとノイズキャンセリング機能をオフにできないことです。これはアップデートで機能追加を検討して欲しいです。
              <br />続いて外音取込機能はEAH-AZ60/ EAH-AZ40の共通機能です。<br /><br />
              マイクに力を入れているだけあって、かなりナチュラルかつイヤホンを外した時以上に周囲の音を拾ってくれます。周囲の音を拾うトランスペアレントモードと、再生中の音楽を停止して人の声に特化して周囲の音を取り込むアテンションモードが備わっており、イヤホンを外さなくても電車でアナウンスを聴いたりするのに重宝しそうです。これらの切り替え・外音取込機能もアプリ側で強度をコントロール可能です。
            </p>
            <v-row>
              <v-col cols="12">
                <v-img
                  src="/ec/images2/special/camera/feature/panasonic/technics/im07.jpeg"
                  alt="Technics 完全ワイヤレスイヤホン "
                  max-width="300"
                  max-height="auto"
                  class="mx-auto"
                ></v-img></v-col
            ></v-row>
            <h3 class="mt-6">■Just My Voice機能</h3>
            <p class="mt-2 pa-2">
              専用アプリ（Technics Audio Connect）で設定できるJust My Voice機能は他のイヤホンに比べて秀逸な機能です。
              これは言わば音声の顔認識機能みたいなもので、自分の声を覚えさせておくことで自分の声以外のノイズを低減して相手にクリアな音声を届けてくれます。
              実際にこの機能を利用してZoom・TeamsでWEB会議をして相手に音声の感想を尋ねたところ高評価でした。
            </p>
            <v-row>
              <v-col cols="12">
                <v-img
                  src="/ec/images2/special/camera/feature/panasonic/technics/im08.jpeg"
                  alt="Technics 完全ワイヤレスイヤホン "
                  max-width="300"
                  max-height="auto"
                  class="mx-auto"
                ></v-img></v-col
            ></v-row>
            <h3 class="mt-6">■テレワークに最適なBluetoothマルチペアリング・マルチポイント機能</h3>
            <p class="mt-2 pa-2">
              EAH-AZ60/ EAH-AZ40に備わっている機能の中でとりわけ素晴らしい機能が、Bluetoothマルチペアリング・マルチポイント機能です。
              これらは同時に複数の機器とBluetooth接続し、それらを切断することなく切り替えを可能にしてくれます。
              <br /><br />例えばスマホで集中力を高めるべくクラシック音楽を流している最中にWEB会議（PC）の呼び出しが鳴った時、通常であればスマホのBluetoothを切断しPCに再接続する手間がかかります。この手間を省き、WEB会議に接続するとスマホの再生は自動でOFFになりPC側の音声・通話に接続できるのがマルチポイント機能です。
              <br /><br />タブレットやスマホとPCなど複数機器を業務（もちろん業務以外でも）で使っている方にはかなり便利に使える機能です。<br /><br />なお、EAH-AZ60はLDACのBluetoothコーデックに対応していますが、LDAC接続時はマルチポイント接続できないのでご注意ください。
            </p>
          </div>
          <!--====== EAH-AZ60/ EAH-AZ40の音質レビュー ======-->
          <div>
            <subText :textItem="'EAH-AZ60/ EAH-AZ40の音質レビュー'" />
            <p class="mt-2 pa-2">
              EAH-AZ60はLotoo PAW GOLD TouchとLDAC接続<br />
              EAH-AZ40はiPhoneSE（第２世代）とAAC接続して視聴しました。Bluetoothのコーデック楽曲はmoraサイトで購入したFLAC音源もしくはALAC音源を視聴しています。<br /><br />■楽曲の視聴<br />先ずはDENIMSのmore
              localから「そばにいてほしい」<br />
              <a href="https://www.youtube.com/watch?v=5x9DJsWxz-8" target="_blank"><b>https://www.youtube.com/watch?v=5x9DJsWxz-8</b></a
              ><br />
              ベースの存在感が強く包み込むような土台を形造ります。左右から聴こえるギターもキレよく分離されている印象。ハイハットは自然な音色で嫌味がありません。
              もともとボーカルが前に来るタイプのバンドではないですが、ギターが目立つ音空間に感じました。
              <br /><br /><br />次に３人組ロックバンド リュックと添い寝ごはんの『ノーマル』<br />
              <a href="https://www.youtube.com/watch?v=0FUOUX2WvFI" target="_blank"><b>https://www.youtube.com/watch?v=0FUOUX2WvFI</b></a
              ><br />
              バスドラムの存在感が明瞭でドライバーからの空気圧がはっきり感じられます。やはりギターの音色が心地よく伸びます。ボーカルはそこまで前にきません。
              サウンドステージは前方に向けてやや狭い印象があり、セパレーションした音たちをギュッと集めたイメージでした。
              <br /><br /><br />最後に今年CMで久しぶりに聴いてテンションがあがったチャットモンチーの「きらきらひかれ」を視聴しました。><br />
              <a href="https://www.youtube.com/watch?v=icp2b1WjH0w" target="_blank"><b>https://www.youtube.com/watch?v=icp2b1WjH0w</b></a
              ><br />
              重心がかなり低いイメージでリズム隊のサウンドが支配的、疾走感というよりはもっとパワフルな聴こえ方をします。かなり演奏にフォーカスされ、特に01：00～のギターフレーズの鳴き方には唸るものがありました。
              <br /><br />EAH-AZ40ではどの楽曲もボーカルよりのチューニングになりました。<br />
              リズム隊の存在感はそのまま軽やかにスピードを上げた印象です。<br />
              ギターの輪郭はやや曖昧になるものの、情報量が多すぎず聴き疲れしにくい印象です。<br />
            </p>
          </div>
          <!--====== まとめEAH-AZ60/ EAH-AZ40はこんな方におすすめ ======-->
          <div>
            <subText :textItem="'まとめEAH-AZ60/ EAH-AZ40はこんな方におすすめ'" />
            <p class="mt-2 pa-2">
              Technicsの新しい2つのラインナップEAH-AZ60/ EAH-AZ40はスマホやタブレットなど複数機器を接続していて切り替えながら使いたい方
              WEB会議やテレビ通話などを多く使用される方に特におすすめのイヤホンです。<br /><br />LDAC対応機器をお使いの方・現代的な低音が多い楽曲が好きな方、電車での移動が多い方にはEAH-AZ60がおすすめ。
              iPhoneを使っていて軽くてシンプルなイヤホンを探している方、ボーカルメインの楽曲が好きな方はEAH-AZ40がおすすめです。
            </p>
          </div>
          <!-- ↓ 価格・人気アクセサリー -->
          <subText :textItem="'Technics 完全ワイヤレスイヤホン 価格・人気アクセサリー'" />
          <priceAndPopular :productDetailList="productDetailList" />

          <!-- ↓ 外観画像 -->
          <div id="images">
            <subText :textItem="'Technics 完全ワイヤレスイヤホン 外観画像'" />
            <p class="text-subtitle-1">Technics 完全ワイヤレスイヤホン 外観画像</p>
            <appearanceImage :src="'/ec/images2/special/camera/feature/panasonic/technics'" :sm="'6'" />
          </div>
        </div>
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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice, isDebugMode, validationPeriod } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SpecialProductService from '@/logic/special-product.service';
import dayjs from 'dayjs';
import Notfound from '@/components/common/not-found.vue';



export default Vue.extend({
  name: 'technics',
  components: {
    breadcrumbs: Breadcrumbs,
    appearanceImage: AppearanceImage,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    kitamuraService: KitamuraService,
    notfound: Notfound,

  },
  setup: (props, context) => {
    const query = context.root.$route.query;
    document.title = 'Technics 完全ワイヤレスイヤホン EAH-AZ60/EAH-AZ40| カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'Technics 完全ワイヤレスイヤホン EAH-AZ60/EAH-AZ40  価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({

      // ↓ ---- プレ掲載期間 ----
      fanValidFrom: '2021/10/10 14:00',
      fanValidTo: '2021/10/10 14:15',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/10/10 14:15',
      reserveValidTo: '2021/10/15 00:00',
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/10/15 00:00',
      releaseValidTo: '2999/10/20 23:59',
      // ↓ ---- プレコンテンツを表示するかどうか ----
      isShowFan: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,
      // 表示期間外メッセージ
      errorMsg: '',


      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
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
          path: 'Technics 完全ワイヤレスイヤホン',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549980486405', '4549980486436',],
      mainProductList: [] as Array<ProductDetail>,

      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549980486405',
        '4549980486412',
        '4549980486429',
        '4549980486443',
        '4549980486436',

      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 今日の日付が広告掲載期間よりも前かチェックする
     */
    const checkBeforePreperiod = async () => {
      const fanValidFrom = dayjs(state.fanValidFrom);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isBefore(fanValidFrom)) {
          state.errorMsg = '掲載準備中\n大変ご迷惑おかけしますが開始時間までお待ちください。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
    * 今日の日付が発売掲載期間よりも後かチェックする
    */
    const checkAfterReleaseperiod = async () => {
      const releaseValidTo = dayjs(state.releaseValidTo);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isAfter(releaseValidTo)) {
          state.errorMsg = '該当ページは掲載期間が終了いたしました。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async () => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        if (validationPeriod(today, state.fanValidFrom, state.fanValidTo)) {
          state.isShowFan = true
        }
        if (validationPeriod(today, state.reserveValidFrom, state.reserveValidTo)) {
          state.isShowReserve = true
        }
        if (validationPeriod(today, state.releaseValidFrom, state.releaseValidTo)) {
          state.isShowRelease = true
        }
      } catch (error) {
        console.error(error);
        today = dayjs().toString();
      }
    };

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
    onMounted(async () => {
      await checkBeforePreperiod();
      if (!state.errorMsg) await checkAfterReleaseperiod();
      if (!state.errorMsg) {
        verifyDate();
        fetchProduct();
      }
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>