<template>
  <v-app>
    <div class="7sm3">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/7sm3/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/7sm3/sp_img_top.jpg'"
          :topTitle="'ソニー α7S III'"
          :topTitleText="'最高ISO409600の高感度を実現\n4K/120p動画対応フルサイズミラーレスカメラ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー α7S III</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'圧倒的な高感度性能で映像クリエイターの感性に応える、α7Sシリーズ新世代モデル'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'α7S III の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/a-universe/movie-specialcontents/?s_pid=jp_/ichigan/_a7SM3_specialcontents'"
          :height="'70px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー α7S III / α7R IV / α7III / パナソニック GH5 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー α7S III / α7R IV / α7III / パナソニック GH5 を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年10月9日発売</td>
                  <td>2018年03月23日発売</td>
                  <td>2019年09月06日発売</td>
                  <td>2017/3/23発売</td>
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
                  <td>約1210万画素</td>
                  <td>約2420万画素</td>
                  <td>約6100万画素</td>
                  <td>約2033万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズExmor R CMOSセンサー</td>
                  <td>35mmフルサイズExmor R CMOSセンサー</td>
                  <td>35mmフルサイズExmor R CMOSセンサー</td>
                  <td>4/3型Live MOS センサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高約10コマ/秒</td>
                  <td>最高約12コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>JPEG:1000枚以上<br />RAW：1000枚以上</td>
                  <td>JPEG:約163枚<br />RAW：約89枚</td>
                  <td>JPEG:約68枚<br />RAW：約68枚</td>
                  <td>JPEG:600枚以上<br />RAW：60枚以上</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～30秒、バルブ</td>
                  <td>1／8000～60秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>80～102400<br />（拡張：下限ISO40、上限ISO409600)</td>
                  <td>100～51200<br />（拡張：下限ISO50、上限ISO204800)</td>
                  <td>ISO100～32000<br />（拡張：下限ISO50、上限ISO102400)</td>
                  <td>ISO200～25600<br />（拡張：ISO100)</td>
                </tr>
                <tr>
                  <th>測距輝度範囲</th>
                  <td>EV-3～20</td>
                  <td>EV-3～20</td>
                  <td>EV-3～20</td>
                  <td>EV-4～18</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>静止画：約600枚<br />動画合計約1時間35分</td>
                  <td>静止画：約610枚<br />動画合計約3時間20分</td>
                  <td>静止画：約530枚<br />動画:合計約2時間40分</td>
                  <td>静止画：約410枚<br />動画:合計約2時間40分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 最大5.0段</td>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 最大5.0段</td>
                </tr>
                <tr>
                  <th>液晶性能</th>
                  <td>3.0型/144万ドット<br />バリアングル式液晶モニター</td>
                  <td>3.0型/92万ドット<br />チルト式液晶モニター</td>
                  <td>3.0型/144万ドット<br />チルト式液晶モニター</td>
                  <td>3.2型/約162万ドット<br />フリーアングルモニター</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.64型/943万ドット</td>
                  <td>0.5型/236万ドット</td>
                  <td>0.5型/576万ドット</td>
                  <td>0.5型/約368万ドット</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.9倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.76倍</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約128.9×96.9×69.7mm</td>
                  <td>約126.9×95.6×62.7mm</td>
                  <td>約128.9×96.4×67.3mm</td>
                  <td>約138.5×98.1×87.4mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約614g</td>
                  <td>約565g</td>
                  <td>約580g</td>
                  <td>約645g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>デュアルスロット<br />スロット1・2ともに、CFexpress Type Aメモリーカード、SDメモリーカードUHS-II/UHS-Iの両方に対応</td>
                  <td>SDデュアルスロット<br />slot1のみUHS-II 対応</td>
                  <td>SDデュアルスロット<br />slot1/slot12:UHS-II 対応</td>
                  <td>ダブルカードスロット<br />（スロット1:UHS-I/II対応、スロット2:UHS-I/II対応）</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ソニー α7S IIIレビュー ①｜先行展示での映像や実機作例をご紹介'" />
        <shasha
          :txt="'2020年7月29日にソニーからついに、α7S III が発表になりました。前機種のα7SIIが登場してから約5年の歳月が経過しましたが、今回飛躍的な進化を遂げて満を持しての登場となりました。\n新開発の有効画素数約1210万画素の裏面照射型CMOSセンサーと新画像処理エンジンを搭載。拡張最高ISO感度409600の進化に加えて、今まで大型のシネマカメラでしかできなかった映像表現がフルサイズのミラーレスカメラで出来るようになっています。前機種のα7S IIでは暗所での野鳥、ポートレート、乗り物を静止画及び動画で撮影される方が数多くいらっしゃるかと思いますが、α7S III においても...'"
          :href="'https://shasha.kitamura.jp/article/476620957.html'"
          :src="'/ec/images2/special/camera/feature/sony/7sm3/shashabnr.jpg'"
        />

        <subText :textItem="'ShaSha:ソニー α7S IIIレビュー ②｜薄暗い空間でのムービー・スチール撮影をレビュー'" />
        <shasha
          :txt="'最新αシリーズの高機能が搭載され、更にビデオグラファーを喜ばせる撮影機能が沢山詰め込まれています。\n今回機材をお借りして薄暗い空間でのポートレートや夜のドライブシーンを、ムービーと一部スチールで撮影してレビューして...'"
          :href="'https://shasha.kitamura.jp/article/477816819.html'"
          :src="'/ec/images2/special/camera/feature/sony/7sm3/shashabnr2.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!--動画で見る-->
        <subText :textItem="'動画で見る ソニー α7sⅢのタッチ＆トライ！'" />
        <watchInVideo :src="'https://www.youtube.com/embed/KpslyCgmcmE?rel=0'" />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー α7S III 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高価下取りー -->
        <subText :textItem="'ソニー α7S III ご購入時、高値下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'8,436'" :targetDate="'2020年8月4日'" :isCreditBtn="true" />

        <!-- ↓ 外観画像ー -->
        <div id="images">
          <subText :textItem="'ソニー α7S III 外観画像'" />
          <p class="text-subtitle-1">ソニー α7S III の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/7sm3'" :count="3" />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: '7sm3',
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
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = 'ソニー α7S III | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α7S III 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー α7S II ボディ [ILCE-7SM2]',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&goodsname=4548736018808&_ga=2.175077090.1712661879.1629071621-279164427.1627285160&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/9a9/607/8a2/ded/cb8/e5c/703/dd1/ab1/9bd/45q/gw4/6nb/r/M.jpg',
        txt: 'ソニー α7S III',
        tradeInImg: '/ec/images2/special/camera/feature/sony/7sm3/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      characteristicList: [
        {
          subtitle: 'プロの映像クリエイターが求める多彩な映像表現を実現',
          contents: [
            '最高ISO409600の高感度・階調性能を生かした最高120fps(4K)のハイフレームレート撮影など、多彩な動画フォーマットへの対応',
            '新開発フルサイズイメージセンサーと新画像処理エンジン「BIONZ XR」の搭載で、画素加算のないフルサイズ領域での4K全画素読み出し等、高い映像品質を実現',
            '業務用ラージフォーマットカメラ「FX9」譲りのAF性能を搭載。動画撮影時も像面位相差AF有効等、さまざまな撮影条件下で安定したAF性能と多彩なフォーカスワークを提供',
            '新開発の放熱構造でイメージセンサーや画像処理エンジンの駆動に伴う熱を効果的に分散し放熱。動画撮影中のカメラ本体内の温度上昇を抑制し、長時間の4K連続録画をサポート',
          ]
        },
        {
          subtitle: '新開発CMOSセンサーと刷新されたシステムで圧倒的な静止画、動画撮影性能を実現',
          contents: [
            '高感度・低ノイズ・広ダイナミックレンジを継承し、像面位相差AFにも対応した、裏面照射型の新開発有効約1210万画素35mmフルサイズCMOSセンサー搭載',
            '静止画撮影では、新たにファストハイブリッドAFや非圧縮RAWフォーマットでの1000枚以上の連写スピード性能を実現',
            '動画撮影では、4:2:2 10bitの4K/120p記録に対応。4K解像度で最大5倍のなめらかなスローモーションで、印象的な映像表現が可能',
            '従来比最大約8倍の高速処理が可能な新画像処理エンジン「BIONZ XR」の採用でリアルタイム処理の負荷の大きさに関わらず、快適な操作レスポンスを実現',
          ]
        },
        {
          subtitle: 'プロに応える操作性&信頼性をコンパクトな一眼スタイルに凝縮',
          contents: [
            'α Eマウントボディ初「バリアングル液晶モニター」を採用。手持ちの動画撮影時、ジンバルに搭載時、状況記録用の自撮りや地面すれすれのローポジションでの撮影にも対応',
            '「クラス最高解像度約944万ドット高精細電子ファインダー」搭載。ファインダー内で被写体の動きがよりなめらかに表示され、動体撮影時に被写体をよりスムーズに追尾が可能',
            '高速書き込み可能な次世代メモリーカード「CFexpress Type Aメモリーカード」と、従来の「SDXCメモリーカード」の両方に対応したデュアルスロットを採用',
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
          path: 'ソニー α7S III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736121331'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736121331', '4548736079625', '4548736128477', '4549077845511'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736121331',
        '4548736064522',
        '4548736064539',
        '4548736055704',
        '4548736109520',
        '4905524929379',
        '4548736120549',
        '4548736105546',
        '4548736064621',
        '4548736100688',
        '4548736100664',
        '4548736089037',
        '4548736089044',
        '4548736067714',
        '4548736067714',
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