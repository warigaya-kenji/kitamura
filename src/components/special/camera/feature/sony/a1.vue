<template>
  <v-app>
    <div class="a1">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/a1/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/a1/sp_img_top.jpg'"
          :topTitle="'ソニー α1'"
          :topTitleText="'進化するプロの創造性に応える\n有効約5010万画素フルサイズミラーレス一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー a1</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'進化するプロの創造性に最先端技術で応える、フルサイズミラーレス一眼カメラ「α1」登場！'" />
        <p class="text-subtitle-1 font-weight-black">有効約5010万画素の高解像で最高30枚/秒の高速連続撮影、8K30p動画撮影に対応</p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー α1 ボディ [ILCE-1]'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'16,500'" :targetDate="'2021年3月19日'" :isCreditBtn="true" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー α1 / α9II / キヤノン EOS-1D X Mark III / ニコン D6 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー α1 / α9II / キヤノン EOS-1D X Mark III / ニコン D6 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年3月19日発売</td>
                  <td>2019年11月1日発売</td>
                  <td>2020年2月14日発売</td>
                  <td>2020年6月5日発売</td>
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
                  <td>約5010万画素</td>
                  <td>約2420万画素</td>
                  <td>約2010万画素</td>
                  <td>約2082万画素</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>759点 (位相差検出方式)/425点 (コントラスト検出方式)</td>
                  <td>693点（位相差検出方式）/425点（コントラスト検出方式）</td>
                  <td>191点（クロス測距点：最大155点）</td>
                  <td>105点（105点クロスセンサー）</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズ<br />積層型CMOSセンサー</td>
                  <td>35mmフルサイズ<br />積層型CMOSセンサー</td>
                  <td>35mmフルサイズ<br />CMOSセンサー</td>
                  <td>35mmフルサイズ(ニコンFXフォーマット)<br />CMOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>メカシャッター:最高約10コマ/秒<br />電子シャッター:最高約30コマ/秒</td>
                  <td>メカシャッター:最高約10コマ/秒<br />電子シャッター:最高約20コマ/秒</td>
                  <td>ファインダー：最高約16コマ/秒<br />ライブビュー：最高約20コマ/秒</td>
                  <td>最高約14コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/32000-30秒</td>
                  <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/32000-30秒</td>
                  <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/8000-0.5秒</td>
                  <td>1/8000-30秒、バルブ、Time</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO100-32000 (拡張: 下限ISO50、上限ISO102400)</td>
                  <td>ISO100-51200 (拡張：下限ISO50、上限ISO204800)</td>
                  <td>ISO100-102400(拡張：下限ISO50、上限ISO819200)</td>
                  <td>ISO100-102400(拡張：下限ISO50、上限ISO3280000)</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>943万ドット<br />1.6cm (0.64型) 電子式ビューファインダー</td>
                  <td>368万ドット<br />1.3cm (0.5型) 電子式ビューファインダー</td>
                  <td>ペンタプリズム使用、アイレベル式</td>
                  <td>ペンタプリズム使用、アイレベル式</td>
                </tr>
                <tr>
                  <th>視野率/倍率</th>
                  <td>100%/約0.90倍</td>
                  <td>100%/約0.78倍</td>
                  <td>100%/約0.76倍</td>
                  <td>100%/約0.72倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>約144万ドット<br />3.0型チルト式TFT駆動</td>
                  <td>約144万ドット<br />3.0型チルト式TFT駆動</td>
                  <td>約210万ドット<br />3.2型TFT式(非可動)</td>
                  <td>約236万ドット<br />3.2型TFT式(非可動)</td>
                </tr>
                <tr>
                  <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
                  <td>ファインダー使用時: 約430枚<br />液晶モニター使用時: 約530枚</td>
                  <td>ファインダー使用時：約500枚<br />液晶モニター使用時：約690枚</td>
                  <td>ファインダー撮影：約2850枚<br />ライブビュー撮影：約610枚</td>
                  <td>撮影可能コマ数：約3580コマ<br /></td>
                </tr>
                <tr>
                  <th>連続動画撮影時</th>
                  <td>ファインダー使用時: 約145分<br />液晶モニター使用時: 約150分</td>
                  <td>ファインダー使用時：約195分<br />液晶モニター使用時：約200分</td>
                  <td>約4時間40分</td>
                  <td>約105分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>5.5段<br />センサーシフト方式5軸補正</td>
                  <td>5.5段<br />センサーシフト方式5軸補正</td>
                  <td>静止画:レンズ内手振れ補正のみ<br />動画:電子IS可能</td>
                  <td>静止画:レンズ内手振れ補正のみ<br />動画:電子手ブレ補正あり</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約128.9 x 96.9 x 80.8 mm</td>
                  <td>約128.9ｘ96.4ｘ77.5 mm</td>
                  <td>約158.0×167.6×82.6 mm</td>
                  <td>約160×163×92mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約652g</td>
                  <td>約593g</td>
                  <td>約1250g</td>
                  <td>約1270g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>両対応デュアルスロット<br />CFexpress(タイプA)<br />SDカード</td>
                  <td>デュアルスロット<br />SDカード<br />(slot1:UHS-II support)</td>
                  <td>デュアルスロット<br />CFexpressメモリーカード(タイプB)</td>
                  <td>デュアルスロット<br />CFexpressメモリーカード(タイプB)<br />XQDカード</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>8K/4K/フルHD</td>
                  <td>4K/フルHD</td>
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
        <div id="spec">
          <subText :textItem="'ソニー α1 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/ILCE-1/?s_pid=jp_/top_/ichigan/_main_210126_ichjrny'"
          :height="'70px'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る ソニー α1'" />
        <p class="text-center mb-0">SONYのフラッグシップ機・ソニー α1を先行体験</p>
        <watchInVideo :src="'https://www.youtube.com/embed/2CFa12pvTu4#?rel=0'" />
        <p class="text-center mt-4 mb-0">ソニー α1</p>
        <watchInVideo :src="'https://www.youtube.com/embed/H0om2qHS1o4'" />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ソニー α1 レビュー｜スポーツ撮影現場で使ってみました！'" />
        <shasha
          :txt="'新しい型番の「α1」。発表されたスペックをみている段階では、すぐの導入を見送ろうと考えていました。しかし実際に手に取って触ってみると、その思いはすぐに変わりました。\n今回は筆者が今まで使ってきたα9との比較を交えて、スポーツ撮影などの動体撮影をメインにα1を紹介します。...'"
          :href="'https://shasha.kitamura.jp/article/480653303.html'"
          :src="'/ec/images2/special/camera/feature/sony/a1/shashabnr4.jpg'"
        />

        <subText :textItem="'ShaSha:ソニー α1 レビュー（後編：風景・ステージ撮影）'" />
        <shasha
          :txt="'α1はSONYが満を持して送り出したフラッグシップ機だけの事は有り、あえて一言で言わせて頂くとすれば「高性能機能全部入りと呼べるカメラ」です。\nあまりにも、お伝えしたい事が多すぎるので今回は前編と後編に分けた全２回でレビューさせて頂きます。\n前半は主に滋賀県高島市でのコハクチョウ撮影と名古屋港でのポートレート撮影の作例を使用しα1の特性についてレビュー'"
          :href="'https://shasha.kitamura.jp/article/480649337.html'"
          :src="'/ec/images2/special/camera/feature/sony/a1/shashabnr3.jpg'"
        />

        <subText :textItem="'ShaSha:ソニー α1 レビュー（前編：野鳥・ポートレート）'" />
        <shasha
          :txt="'前編では秒間30コマ、8K動画、鳥瞳AF、1/400シンクロをメインにお話させて頂きましたが、今回は風景写真やステージ撮影について作例と機能説明を交えてレビューさせて頂きたいと思います。\n先ずは風景撮影から。夕暮れ時のびわ湖と空が淡い色に包まれるシャッタータイムに撮影。前編でも触れましたがα1の発色は本当に良くて...'"
          :href="'https://shasha.kitamura.jp/article/480563123.html'"
          :src="'/ec/images2/special/camera/feature/sony/a1/shashabnr2.jpg'"
        />

        <subText :textItem="'ShaSha:ソニー α1'" />
        <shasha
          :txt="'2021年1月27日にソニーからフルサイズミラーレスカメラのフラグシップ機「α1」が発表されました。\nこれまでのフルサイズのフラグシップ機は画素数を低く抑えたモデルになっていましたが、α1はそれとは一線を画し有効約5010万画素の高画素のミラーレスカメラで...'"
          :href="'https://shasha.kitamura.jp/article/479818915.html'"
          :src="'/ec/images2/special/camera/feature/sony/a1/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー α1 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ソニー α1 外観画像'" />
          <p class="text-subtitle-1">ソニー α1 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/a1'" :count="3" />
        </div>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー α1 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/a1/'" :count="3" :type="2" />

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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'a1',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'ソニー α1 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α1 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: 'a1 外観', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '圧倒的な解像力に加え、次世代を見据えた動画性能・AF性能',
          contents: [
            '新開発有効約5010万画素メモリー内蔵フルサイズ積層型CMOSイメージセンサーと新画像処理エンジン「BIONZ XR（ビオンズ エックスアール）」を採用。高解像と圧倒的なスピードを両立',
            '新開発フルサイズイメージセンサーの高速読み出しと大容量データのリアルタイム処理により、αシリーズ初、4:2:0 10bitでの8K 30pの動画記録が可能',
            'ブラックアウトフリーでの最高約30コマ/秒のAF/AE追随高速連写を実現。視野を遮られることなく被写体を肉眼で追い続けるように撮影することが可能',
            '撮像エリアの約92％をカバーする高密度かつ広範囲に配置された759点の像面位相差AFセンサーを搭載。高速・高精度な被写体追随を実現',
            '動体歪みを極限まで抑える最高1/32000秒のアンチディストーションシャッター。人物、動物に加え新たに「鳥」にも対応したリアルタイム瞳AF。世界最速フラッシュ同調速度1/400秒のデュアル駆動式シャッター等、新時代の性能を実現'
          ]
        },
        {
          subtitle: 'プロの撮影現場を支える信頼性、操作性',
          contents: [
            'クラス最高解像度の約944万ドットの広視野・高精細OLED電子ファインダー採用。世界初240fpsのリフレッシュレートの実現で、速く動く被写体も快適に撮影可能',
            'CFexpress Type AメモリーカードとSDXCメモリーカードに対応した両対応デュアルスロットを採用。静止画・動画の膨大なデータ処理においてもゆとりある撮影を実現',
            '外付けのWi-Fiアダプターが不要な本体内蔵Wi-Fi 802.11ac 2×2 MIMOに対応。業界トップクラスの転送速度を実現',
            'トップカバーやフロントカバー、内部フレーム、リアカバーなどに軽量かつ剛性の高いマグネシウム合金を使用。強化したセンサークリーニング機能と防塵防滴に配慮した設計',
            'PCリモート撮影や画像バックアップが可能なUSB 3.2対応Type-C端子と耐久性や汎用性の高いHDMI Type-A端子を搭載'
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
          path: 'ソニー α1',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736130678'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736130678', '4548736108288', '4549292146851', '4960759903402'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736130678',
        '4548736064522',
        '4548736105546',
        '4548736064539',
        '4548736064621',
        '4548736055704',
        '4548736109520',
        '4548736121249',
        '4548736083998',
        '4548736123151',
        '4548736099876',
        '4548736019515',
        '4548736038400',
        '4548736058415',
        '4548736099852',
        '4548736074125',
        '4548736089037',
        '4548736089044',
        '4548736067714',
        '4548736067738'
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