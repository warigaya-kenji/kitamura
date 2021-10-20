<template>
  <v-app>
    <div class="x-e4">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x-e4/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x-e4/sp_img_top.jpg'"
          :topTitle="'フジフイルム X-E4'"
          :topTitleText="'最短約0.02秒の高速・高精度AF搭載\n小型軽量クラシカルデザインミラーレス'"
          :textColor="'#FFFFFF'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">フジフイルム X-E4</p>
        <naviBtn :naviList="naviList" :hoverColor="'#00A080'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'最短約0.02秒の高速・高精度AF搭載 小型軽量クラシカルデザインミラーレス「X-E4」'" />
        <p class="text-h6 font-weight-bold">「Xシリーズ」第四世代のセンサー・画像処理エンジンを搭載し、独自の色再現による高画質な写真を快適に撮影可能</p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'フジフイルム X-E4 ボディ・レンズキット 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'フジフイルム X-E4 メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/x-e4/'"
        />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大36回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'3,267'"
            :targetDate="'2021年2月25日'"
            :numberOfTimes="'30'"
            :maximumInstallmentPayment="'36'"
          />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[2]"
            :amount="'3,025'"
            :targetDate="'2021年2月25日'"
            :isText="false"
            :numberOfTimes="'36'"
          />
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る フジフイルム X-E4'" />
        <p class="text-center caption">
          フジフイルム X-E4 開発担当インタビュー【前編】<br />
          ～なぜこのようなデザインに？ターゲットユーザーは？～
        </p>
        <watchInVideo :src="'https://www.youtube.com/embed/8K6pIjzJRxE?rel=0'" :height="315" />
        <p class="text-center caption">
          フジフイルム X-E4 開発担当インタビュー【後編】<br />
          ～奥が深いグリップの話、アクセサリーや新製品レンズの説明も！～
        </p>
        <watchInVideo :src="'https://www.youtube.com/embed/g4nS6d_-OaI?rel=0'" :height="315" />
        <watchInVideo :src="'https://www.youtube.com/embed/SzGCXWylZTg?rel=0'" :height="315" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'フジフイルム X-E4 / X-E3 / ソニー α6400 / キヤノン EOS M6 Mark II 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">フジフイルム X-E4 / X-E3 / ソニー α6400 / キヤノン EOS M6 Mark II を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr></tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年2月25日発売</td>
                  <td>2017年9月28日発売</td>
                  <td>2019年2月22日発売</td>
                  <td>2019年9月27日発売</td>
                </tr>

                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2610万画素</td>
                  <td>約2430万画素</td>
                  <td>約2420万画素</td>
                  <td>約3250万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>APS-C</td>
                  <td>APS-C</td>
                  <td>APS-C</td>
                  <td>APS-C</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>メカニカルシャッター:約8.0コマ/秒<br />電子シャッター:約30コマ/秒</td>
                  <td>メカニカルシャッター:約8.0コマ/秒<br />電子シャッター:約14コマ/秒</td>
                  <td>約11コマ/秒</td>
                  <td>約14コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>メカニカルシャッター:1/4000秒-15分、バルブ<br />電子シャッター:1/32000秒-15分、バルブ</td>
                  <td>メカニカルシャッター:1/4000秒-15分、バルブ<br />電子シャッター:1/32000秒-15分、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>メカニカルシャッター:1/4000-30秒、バルブ<br />電子シャッター:1/16000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO160-12800<br />拡張モード ISO80/100/125/25600/51200</td>
                  <td>ISO200-12800<br />拡張モード ISO100/125/160/25600/51200</td>
                  <td>ISO100-32000<br />拡張：上限ISO102400</td>
                  <td>ISO100-25600<br />ISO51200相当の感度拡張が可能</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>約236万ドット/0.39型有機EL</td>
                  <td>約236万ドット/0.39型有機EL</td>
                  <td>約236万ドット/0.39型</td>
                  <td>別売りEVF</td>
                </tr>
                <tr>
                  <th>視野率/倍率</th>
                  <td>100%/0.62倍</td>
                  <td>100%/0.62倍</td>
                  <td>100%/0.70倍</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>約162万ドット/3.0型チルト式TFT</td>
                  <td>約104万ドット/3.0型TFT（非可動）</td>
                  <td>約92万ドット/ワイド3.0型チルト式TFT</td>
                  <td>約104万ドット/ワイド3.0型チルト式TFT</td>
                </tr>
                <tr>
                  <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
                  <td>約460枚</td>
                  <td>約350枚</td>
                  <td>ファインダー使用時：約360枚<br />液晶モニター使用時：約410枚</td>
                  <td>約305枚</td>
                </tr>
                <tr>
                  <th>連続動画撮影時</th>
                  <td>約60分</td>
                  <td>約70分</td>
                  <td>約125分</td>
                  <td>約80分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>手ブレ補正機能付きレンズで対応</td>
                  <td>手ブレ補正機能付きレンズで対応</td>
                  <td>手ブレ補正機能付きレンズで対応</td>
                  <td>手ブレ補正機能付きレンズで対応</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>121.3×72.9×32.7 mm</td>
                  <td>121.3×73.9×42.7 mm</td>
                  <td>120.0x66.9x59.7 mm</td>
                  <td>119.6×70.0×49.2 mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約315g</td>
                  <td>約287g</td>
                  <td>約359g</td>
                  <td>約361g</td>
                </tr>
                <tr>
                  <th>動画</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'フジフイルム X-E4 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:フジフイルム X-E4｜写真を撮るためのカメラ X-Eシリーズ待望の新モデル'" />
        <shasha
          :txt="'レンジファインダー型のミラーレスカメラとしてはX Proシリーズに並び人気の高いEシリーズ待望の新モデル。そのファーストインプレッションとキットレンズの魅力を併せてお伝えいたします...'"
          :href="'https://shasha.kitamura.jp/article/480385592.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/x-e4/shashabnr2.jpg'"
        />

        <subText :textItem="'ShaSha:フジフイルム X-E4｜携帯性をアップしたXシリーズ最小最軽量カメラ'" />
        <shasha
          :txt="'X-E3の後継機として開発されたモデルであり、“MINIMALISM（ミニマリズム）”のコンセプトを引き継ぎつつ、さらにシンプルで洗練されたデザインへと変更されました。携帯性にこだわって作られたカメラであり、カバンやポケットに忍ばせやすいサイズ感とデザインになっています。\n今回は富士フイルムイメージングプラザ東京にてX-E4の先行展示品を触ってきましたので、開発担当者への取材内容も交えつつ...'"
          :href="'https://shasha.kitamura.jp/article/479865060.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/x-e4/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'フジフイルム X-E4 外観画像'" />
          <p class="text-subtitle-1">フジフイルム X-E4の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/x-e4'" :count="7" />
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SplitContent from '@/components/common/special/split-content.vue';

export default Vue.extend({
  name: 'x-e4',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    watchInVideo: WatchInVideo,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    appearanceImage: AppearanceImage,
    splitContent: SplitContent
  },
  setup: (props, context) => {
    document.title = 'フジフイルム X-E4 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム X-E4 ミラーレス一眼 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'クラシカルデザインのボディに最短約0.02秒の高速・高精度AF機能を搭載',
          contents: [
            '天面に高強度なマグネシウム合金を採用。往年のフィルムカメラを彷彿とさせるクラシカルで美しいデザインと、質量約364gのコンパクトボディを両立。気軽にいつでも持ち歩きたいカメラ',
            '「Xシリーズ」のフラッグシップモデル「FUJIFILM X-T4」などで採用している2610万画素「X-Trans CMOS 4」センサー・高速画像処理エンジン「X-Processor 4」を搭載。最短約0.02秒の高速AFで決定的瞬間も逃さない',
            '高精度な動体追従AF機能を搭載。カメラに向かってくる被写体だけでなく、カメラから離れていく被写体も正確に捕捉。加えて優れた「顔・瞳検出AF」により、ピントの合った写真が気軽に撮影可能'
          ]
        },
        {
          subtitle: '気軽に高画質な撮影を楽しめる独自のフィルムシミュレーションと優れた操作性',
          contents: [
            '80年以上にわたり培った色再現による多彩な表現が可能な独自のフィルムシミュレーションにより、被写体や撮影シーンにあわせて、写真フィルムを取り換える感覚で多彩な表現が可能',
            'フィルムシミュレーションは静止画だけでなく、動画撮影時にも効果を発揮。手軽にオリジナリティのある美しい4K動画の撮影も可能',
            '「自分撮り」も簡単に行うことが出来るチルト式背面液晶モニターを採用。ハイアングルからローアングルまで様々なスタイルで撮影を楽しめます'
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
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'フジフイルム X-E4',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410442632', '4547410442625', '4547410457629', '4547410457636'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410442632', '4547410357363', '4548736092044', '4549292136401'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410442632',
        '4547410442625',
        '4547410457629',
        '4547410457636',
        '4547410334128',
        '4547410449327',
        '4547410449334',
        '4547410449310',
        '4547410449303',
        '4523052022715',
        '4523052022722',
        '4523052022739',
        '4523052016615',
        '4523052016639',
        '4547410440386',
        '4547410206142',
        '4547410206159',
        '4547410310412',
        '4547410310405',
        '4547410397314'
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
