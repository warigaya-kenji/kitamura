<template>
  <v-app>
    <div class="wf-c500">
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
              ? '/ec/images2/special/camera/feature/sony/wf-c500/fan/bg_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/sony/wf-c500/reserve/bg_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/sony/wf-c500/release/bg_top.jpg'
              : ''
          "
          :spBackgroundImg="
            isShowFan
              ? '/ec/images2/special/camera/feature/sony/wf-c500/fan/sp_img_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/sony/wf-c500/reserve/sp_img_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/sony/wf-c500/release/sp_img_top.jpg'
              : ''
          "
          :topTitle="'ソニー 完全ワイヤレスイヤホン WF-C500 '"
          :topTitleText="'音楽鑑賞にもテレワークにも\nコンパクトかつカラフルでいい音を'"
          :titleColor="'#000000'"
          :textColor="'#000000'"
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
          <subText :textItem="'ソニー 完全ワイヤレスイヤホン WF-C500 価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" :btntxt="isShowRelease ? 'ご購入はこちら' : 'ご予約はこちら'" />
        </div>
        <!--====== キャンペーン ======-->
        <div v-if="isShowReserve">
          <subText :textItem="'Twitterキャンペーン実施中'" />
          <div>
            <v-img
              src="/ec/images2/special/camera/feature/sony/wf-c500/reserve/twittercam.jpg"
              alt="Twitterキャンペーン実施中"
              max-width="861"
              max-height="1148"
            ></v-img>
          </div>
        </div>
        <!--====== ソニー 完全ワイヤレスイヤホン WF-C500 レビュー ======-->
        <div v-if="!isShowFan">
          <div>
            <subText :textItem="'ソニー 完全ワイヤレスイヤホン WF-C500 レビュー'" />
            <p class="mt-2">
              WF-1000XM4が好評なSONYから早くも完全ワイヤレスイヤホンの新製品が発表されました。<br />発売前に試用する機会をいただいたのでレビューをしていきます。<br />※製品版とはバージョン・仕様が異なる場合があります
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/sony/wf-c500/im01.jpg"
              alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
              max-width="960"
              max-height="633"
            ></v-img>

            <subText :textItem="'音楽鑑賞にもテレワークにも最適なカジュアルモデル WF-C500'" />
            <p class="mt-2">
              完全ワイヤレスイヤホンの普及も進み、WF-1000XM4のような高機能なイヤホンが登場しました。一方で高機能モデルはおおよそ3万円前後と高価なのも事実。<br />そこで低価格に抑えつつ必要な機能が備わったエントリーモデルがWF-C500です。<br />今回1週間ほど試用しましたので上位機種との違いも含めレビューしていきます。
            </p>
          </div>
          <!--====== WF-C500の外観と仕様レビュー ======-->
          <div>
            <subText :textItem="'WF-C500の外観と仕様レビュー'" />
            <h3>■選べる４色完全 WF-C500</h3>
            <p class="mt-2">
              カラーバリエーションは４色。ホワイトとブラック、コーラルオレンジとアイスグリーンです。<br />本体はつや消しでWF-1000XM4と同じく石のような吹付け塗装で高級感があります。<br />淡いアイスグリーンは完全ワイヤレスイヤホンでは珍しい色ですね。
            </p>

            <v-container>
              <v-row>
                <v-col class="" sm="3" xs="6"
                  ><v-img
                    src="/ec/images2/special/camera/feature/sony/wf-c500/im02-1.jpg"
                    alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
                    max-width="100%"
                    max-height="100%"
                  ></v-img
                ></v-col>
                <v-col class="" sm="3" xs="6"
                  ><v-img
                    src="/ec/images2/special/camera/feature/sony/wf-c500/im02-2.jpg"
                    alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
                    max-width="100%"
                    max-height="100%"
                  ></v-img
                ></v-col>
                <v-col class="" sm="3" xs="6"
                  ><v-img
                    src="/ec/images2/special/camera/feature/sony/wf-c500/im02-3.jpg"
                    alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
                    max-width="100%"
                    max-height="100%"
                  ></v-img
                ></v-col>
                <v-col class="" sm="3" xs="6"
                  ><v-img
                    src="/ec/images2/special/camera/feature/sony/wf-c500/im02-4.jpg"
                    alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
                    max-width="100%"
                    max-height="100%"
                  ></v-img
                ></v-col>
              </v-row>
            </v-container>
            <h3>■コンパクトな充電ケース</h3>
            <p class="mt-2">
              充電ケースは細長いカプセル状。35gと非常に軽いです。<br />
              蓋上部がスケルトンになっており、中にイヤホンが入っているのか開けなくても確認できるようになっています。（ブラックは少しわかりにくいかもしれません）
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/sony/wf-c500/im03.jpg"
              alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
              max-width="960"
              max-height="633"
            ></v-img>
            <p class="mt-2">
              給電はUSB-Type Cです。ワイヤレス充電Qiには対応していません。<br />
              またイヤホン収納部先端は余裕のある作りになっているため、付属以外のイヤーピースを装着した際でも問題なく収納できそうです。
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/sony/wf-c500/im04.jpg"
              alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
              max-width="960"
              max-height="633"
            ></v-img>
            <h3>■軽量コンパクトな本体と物理ボタン</h3>
            <p class="mt-2">
              <br />
              本体はエルゴノミック・サーフェース・デザインを採用。コンパクトながら耳介にピタッと吸い付くように密着します。<br />
              装着した状態でヘッドバンキングしてみましたがピクリともしませんでした。
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/sony/wf-c500/im05.jpg"
              alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
              max-width="960"
              max-height="633"
            ></v-img>
            <p class="mt-2">
              本体の側部はタッチセンサーではなく物理ボタンになっています。<br />
              押し心地は、ちょうどかつてのiPhoneのホームボタンと似ています。<br />
              タッチセンサーではなく物理ボタンになっているのは、耳にかかる髪の毛によっての誤作動を防ぐ目的があります。<br /><br />
              ノズル形状は完全ワイヤレス用ではないイヤーピースも問題なく付けられるサイズなので、イヤーピースの付替による音質変化も色々試せそうです。
            </p>
            <v-img
              src="/ec/images2/special/camera/feature/sony/wf-c500/im06.jpg"
              alt="ソニー 完全ワイヤレスイヤホン WF-C500 "
              max-width="960"
              max-height="633"
            ></v-img>
            <h3>■ノイズキャンセリング機能と外音取込機能はなし</h3>
            <p class="mt-2">
              ノイズキャンセリング機能はありませんが、密着性能が良いので遮音性は高いです。<br />
              また外音取込機能はありません。
            </p>
          </div>
          <!--====== WF-C500の音質レビュー ======-->
          <div>
            <subText :textItem="'WF-C500の音質レビュー'" />
            <p class="mt-2">
              WF-C500はDSEEに対応。BluetoothのコーデックはSBCとAAC（iPhoneの場合）です。<br />
              今回はWALKMAN NW-ZX300を使い楽曲はmoraサイトで購入したFLAC・AAC音源で視聴しました。<br /><br /><b>■ノイズキャンセリング機能と外音取込機能はなし</b
              ><br /><br />先ずは今年フジロックにも出演した3人組オルタナティヴ・ロックバンド 羊文学のNEWアルバムから「あの街に風吹けば」<br />
              <a href="https://www.youtube.com/watch?v=jt2ZI7vZTQs" target="_blank">https://www.youtube.com/watch?v=jt2ZI7vZTQs</a><br />
              （YouTube：羊文学「you love」ep teaser）<br />
              冒頭のイントロからベースが1音1音明瞭にラインを作り、中域のギターも小気味よく主張してきます。塩塚モエカさんの声はサウンドステージのセンターにあって押し出しは強くないですが伸びやかです。安価なイヤホンにありがちな抜ける音がなく、構成がシンプルなバンドサウンドには合います。<br /><br />
              次にソニーαのCMでもおなじみのadieuの新譜から『シンクロナイズ』<br />
              <a href="https://www.youtube.com/watch?v=SHgRcacfHQE" target="_blank">https://www.youtube.com/watch?v=SHgRcacfHQE</a><br />
              （YouTube：adieu [ adieu 2 ] all songs preview）<br />
              バスドラムの存在感が印象的で上白石萌歌さんの声と同量の低音成分が響きます。低音が目立ちますが嫌味のないチューニングになっています。各パートのセパレーションは満足度が高いです。WF-C500もまさにソニーらしい音作りをしていると感じられました。<br /><br />
              最後にKOTORIのNEWアルバムから表題曲「We Are The Future」を視聴しました。<br />
              <a href="https://www.youtube.com/watch?v=j8BsJUAoyq4" target="_blank">https://www.youtube.com/watch?v=j8BsJUAoyq4</a><br />
              （YouTube：KOTORI 「We Are The Future」Official Music Video）<br />
              KOTORIらしい左右に別れたギターリフも美しく響いてきます。<br />
              こちらもリズム隊がインパクトが有り、低音が多めのため高域がややマスキングされハイハットが伸び切らないかなという印象がありましたが、最近ありがちなボーカルばかりをフィーチャーした音作りではなく、演奏そのものを聴かせる良いチューニングだと感じます。
            </p>
            <h3>■WEB会議での通話で試用</h3>
            <p class="mt-2">
              ZOOM・Microsoft Teamsで使用しました。<br />
              通話では相手に自分の声がクリアに届くかが重要事項です。<br />
              WF-C500は周囲のノイズを抑えて集音するノイズサプレッションを搭載しています。<br />
              テストに参加してくれた同僚へ明瞭に音声が届いていたとのことでした。一方で前方に集中しているのでキーボードの打鍵音も大きく聞こえていたようなので、打鍵音の大きなキーボードを使っている方は注意が必要です。
            </p>
          </div>
          <!--====== まとめ！WF-C500はこんな方におすすめ ======-->
          <div>
            <subText :textItem="'まとめ！WF-C500はこんな方におすすめ'" />
            <p class="mt-2">
              WF-C500はコンパクトな形状と妥協しない音質のエントリーモデルです。<br />
              音質にも妥協なく、ソニーらしい元気で低音を引き上げたサウンドが魅力的です。現代的なHIP HOPやK-POP、打ち込み系の楽曲に最適です。<br /><br />
              ノイズキャンセリングが苦手な方、全部入りのTWSでは重くて大きいと感じている方、テレワークで長時間イヤホンを装着する方（セーフリスニングのために時折休息しましょう）におすすめのイヤホンです。
            </p>
          </div>
          <!-- ↓ 価格・人気アクセサリー -->
          <subText :textItem="'ソニー 完全ワイヤレスイヤホン WF-C500 価格・人気アクセサリー'" />
          <priceAndPopular :productDetailList="productDetailList" />

          <!-- ↓ 外観画像 -->
          <div id="images">
            <subText :textItem="'ソニー 完全ワイヤレスイヤホン WF-C500 外観画像'" />
            <p class="text-subtitle-1">ソニー 完全ワイヤレスイヤホン WF-C500 外観画像</p>
            <appearanceImage :src="'/ec/images2/special/camera/feature/sony/wf-c500'" :sm="'6'" />
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
  name: 'wf-c500',
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
    document.title = 'ソニー 完全ワイヤレスイヤホン WF-C500  | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー 完全ワイヤレスイヤホン WF-C500  価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({

      // ↓ ---- プレ掲載期間 ----
      fanValidFrom: '2021/10/04 14:00',
      fanValidTo: '2021/10/04 14:15',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/10/04 14:15',
      reserveValidTo: '2021/10/07 23:59',
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/10/08 00:00',
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
          href: '/ec/special/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },

        {
          path: 'ソニー 完全ワイヤレスイヤホン WF-C500',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736130876', '4548736130920', '4548736130975', '4548736131026'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736121614', '4960759904485', '4548736079625', '4548736108417'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736130876',
        '4548736130975',
        '4548736130920',
        '4548736131026',

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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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