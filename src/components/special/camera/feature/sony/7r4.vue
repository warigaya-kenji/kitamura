<template>
  <v-app>
    <div class="7r4">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/7r4/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/7r4/sp_img_top.jpg'"
          :topTitle="'ソニーα7R IV'"
          :topTitleText="'有効約6100万画素裏面照射型CMOSセンサー搭載\n高速・高追従AF、高速連写を実現したハイスペックフルサイズミラーレス'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'50px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニーα7R IV</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'「α7R IV」第4世代の革新'" />
        <characteristic :characteristics="topcharacteristicList" />
        <p class="mb-2">＊ 35mmフルサイズイメージセンサー搭載デジタルカメラとして。2019年7月時点。ソニー調べ</p>
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'α7S III の特徴'" />
          <characteristic :characteristics="characteristicList" />
          <p class="mb-2">
            ※1：35mmフルサイズセンサー搭載デジタルカメラとして。2019年7月17日広報発表時点。ソニー調べ<br />※2：連続撮影モード「Hi+」時に最高約10コマ/秒、連続撮影モード「Hi」時に最高約8コマ/秒の高速連写が可能です<br />
            設定によって最高連写速度が異なります。装着レンズによってソフトウェアアップデートが必要になる場合があります。<br />
            詳細は<a href="https://www.sony.jp/support/" target="blank">サポートサイト</a>をご覧ください
          </p>
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー α7R IV / α7R III / α9 / ニコン Z 7比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー α7R IV / α7R III / α9 / ニコン Z 7を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年9月6日発売</td>
                  <td>2017年11月25日発売</td>
                  <td>2017年5月26日発売</td>
                  <td>2018年09月28日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約6100万画素</td>
                  <td>約4240万画素</td>
                  <td>約2420万画素</td>
                  <td>約4575万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                  <td>35mmフルサイズ積層型CMOS</td>
                  <td>35.9×23.9mmサイズCMOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約20コマ/秒</td>
                  <td>最高 約9コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    RAW(非圧縮)：約30枚<br />
                    JPEG：約68枚
                  </td>
                  <td>
                    RAW(非圧縮)：約28枚<br />
                    JPEG：約76枚
                  </td>
                  <td>
                    RAW(非圧縮)：約128枚<br />
                    JPEG：約362枚
                  </td>
                  <td>
                    ロスレス圧縮RAW(12bit):約23コマ<br />
                    JPEG(FINE)：約25コマ
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>50～102400</td>
                  <td>50～102400</td>
                  <td>50～204800</td>
                  <td>64～102400</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>
                    位相差検出方式:567点<br />
                    コントラスト検出方式:425点
                  </td>
                  <td>
                    位相差検出方式:399点<br />
                    コントラスト検出方式:425点
                  </td>
                  <td>
                    位相差検出方式:693点<br />
                    コントラスト検出方式:425点
                  </td>
                  <td>493点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    ファインダー使用時:約530枚<br />
                    モニター使用時:約670枚
                  </td>
                  <td>
                    ファインダー使用時:約530枚<br />
                    モニター使用時:約650枚
                  </td>
                  <td>
                    ファインダー使用時:約480枚<br />
                    モニター使用時:約650枚
                  </td>
                  <td>
                    ファインダー使用時:約330枚<br />
                    モニター使用時:約400枚
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約128.9×96.4×67.3mm</td>
                  <td>約126.9×95.6×62.7mm</td>
                  <td>約126.9×95.6×63.0mm</td>
                  <td>約134×100.5×67.5mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 最大5.0段</td>
                  <td>イメージセンサーシフト方式5軸補正 約5.0段</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.80倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約580g</td>
                  <td>約572g</td>
                  <td>約588g</td>
                  <td>約585g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    デュアルスロット<br />
                    slot1/slot12:UHS-II support
                  </td>
                  <td>
                    デュアルスロット<br />
                    slot1:UHS-II support
                  </td>
                  <td>
                    デュアルスロット<br />
                    slot1:UHS-II support
                  </td>
                  <td>
                    シングルスロット<br />
                    XQDカード
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4KUHD/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha 9月9日更新【レビュー】待望のソニー新機種は何が凄い？'" />
        <shasha
          :txt="'2019年9月6日ソニーから、フルサイズミラーレスカメラα7R IVが発売されました。ご存知の方も多いかと思いますが、ソニーのフルサイズミラーレスカメラ“αシリーズ”には4種類のモデルが存在し、α7シリーズだけ見ると3種類のモデルがあります。今回は多くのカメラマンから支持されて4代目になったα7R IVをレビューします...'"
          :href="'https://shasha.kitamura.jp/article/469956494.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4548736108264'"
          :src="'/ec/images2/special/camera/feature/sony/7r4/bnr_shasha.jpg'"
        />

        <subText :textItem="'ShaSha 有効約6100万画素！α7R IVのタッチ&トライに行ってきました'" />
        <shasha
          :txt="'7月19日よりソニーストア銀座でタッチ&トライができるとのことで、さっそく行ってきました！ソニーストア銀座では列ができており大盛況でした。1人5分と制限時間があり試せなかった機能がまだまだたくさんありました。 特にピクセルシフトマルチ撮影機能の約2億4千万画素の描写や、動画撮影時のリアルタイム瞳AFは試してみたかったです。また故障時など設定が初期化された場合でも以前の設定を呼び出しできる、カメラ設定の保存と反映機能は気になりました。 使用レビューできる日が楽しみです！...'"
          :href="'https://shasha.kitamura.jp/article/468104188.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4548736108264'"
          :src="'/ec/images2/special/camera/feature/sony/7r4/bnr_shasha2.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!--動画で見る-->
        <subText :textItem="'動画で見る！ソニーα7R IV機能紹介'" />
        <watchInVideo :src="'https://www.youtube.com/embed/ralrcqpHWw4?rel=0'" />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニーα7R IV 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高価下取りー -->
        <subText :textItem="'ソニーα7R IV ご購入時、高値下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'8,079'" :targetDate="'2020年8月'" :isCreditBtn="true" />

        <!-- ↓ 外観画像ー -->
        <div id="images">
          <subText :textItem="'ソニーα7R IV 外観画像'" />
          <p class="text-subtitle-1">ソニーα7R IV の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/7r4'" :count="2" />
        </div>
        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー α7III 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/7r4/'" :count="4" />
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
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: '7r4',
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
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = 'ソニーα7R IV | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニーα7R IV 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー α7R III',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%CE%B17RIII&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/d1c/dc4/57f/edf/af1/9fc/d49/8bb/a0a/949/057/c63/gt4/s/L.jpg',
        txt: 'ソニー α7R III',
        tradeInImg: '/ec/images2/special/camera/feature/sony/7r4/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },

      characteristicList: [
        {
          subtitle: '被写体を圧倒的な臨場感で写し出す高解像・高画質',
          contents: [
            '世界初(*１)有効約6100万画素の新開発35mmフルサイズ裏面照射型センサーExmor Rを搭載。α7R III比で約1.5倍の高画素を実現',
            '最新の画像処理エンジンBIONZ Xにより高感度・低ノイズ性能を維持したまま、高い解像度と豊かな階調性を、小型軽量ボディに凝縮',
            '手ブレ補正アルゴリズムを強化し最高5.5段のボディ内5軸手ブレ補正効果を実現。微細な振動にも敏感な高解像撮影をサポート',
          ]
        },
        {
          subtitle: '最高10コマ/秒の高速連写(*2)と、リアルタイムトラッキング、リアルタイム瞳AFなどの高いAF性能',
          contents: [
            'α7R III比で約1.5倍の高画素にもかかわらず、AF/AE追従 最高約10コマ/秒※2の高速連写を実現',
            '色や模様、被写体との距離などの空間情報を高速に検出し、複雑な動きやスピードに緩急のある動体を高精度に認識し追尾し続けるリアルタイムトラッキング搭載',
            '動画にも対応した高い検出精度・速度をもつリアルタイム瞳AF搭載。正面からうつむき顔になった場合や、振り向いた瞬間、逆光で顔が暗いシーンなど、ピント合わせが難しい状況でも、瞬時に瞳を検出し追従します',
          ]
        },
        {
          subtitle: 'さらに進化した操作性・堅牢性ですべてのカメラマンをサポート',
          contents: [
            'ピントの山をつかみやすい高精細な約576万ドット電子ファインダー「UXGA OLED Tru-Finder」で、微細なピント合わせを強力にサポートします',
            '重量レンズ装着時や長時間の使用でも、撮影者の負担になりにくいグリップ形状を実現。新開発の縦位置グリップ『VG-C4EM』にも対応',
            'α7R III同等のボディサイズで、フィールドでの使用に向けさらに強化した防塵防滴に配慮した設計を採用',
          ]
        },
        {
          subtitle: '高解像4K動画とプロフェッショナルの映像制作に対応する多彩な動画関連機能',
          contents: [
            '高解像度4K動画の本体内記録に対応。業務用映像制作に使用されているXAVC®を民生用に拡張したXAVC S®を採用。最大100Mbpsの高ビットレートで高画質記録が可能です',
            '動画撮影時のAF性能が大幅に進化し、動画撮影時に求められるスムーズかつ安定したAFが可能になりました',
            '業務用カメラで採用の高音質な音声伝送を実現するデジタルオーディオインターフェースを追加したMIシューを搭載',
          ]
        }

      ],
      topcharacteristicList: [
        {
          subtitle: '世界初（＊）有効約6100万画素、最高約10コマ/秒高速連写、高速・高精度AFを小型ボディに凝縮',
          contents: [
            '35mmフルサイズ初の有効約6100万画素裏面照射型CMOSセンサーを新開発。圧倒的な描写力をフルサイズミラーレスで実現',
            '有効約6100万画素の高解像で、AF/AE追随。最高約10コマ/秒の高速連写。人物にも動物にも動画にも対応する、進化した「リアルタイム瞳AF」搭載',
          ]
        },


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
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニーα7R IV',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736108264',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736108264', '4548736075139', '4548736063945', '4960759901088'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736108264',
        '4548736064522',
        '4548736064539',
        '4548736105546',
        '4548736100688',
        '4548736100671',
        '4905524929379',
        '4548736100664',
        '4548736038431',
        '4548736019515',
        '4548736038400',
        '4905524935493',
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