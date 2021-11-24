<template>
  <v-app>
    <div class="eosr">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/eosr/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/eosr/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS R'"
          :topTitleText="'EOS から EOS R へ\n待望のフルサイズミラーレス一眼\n「キヤノン EOS-R」'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :textPadding="'15px 0px 0px 0px'"
          :titleFontsize="'40px'"
          :textFontsize="'18px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">キヤノン EOS R</p>
        <naviBtn :naviList="naviList" :color="'red darken-3'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--ShaSha-->
        <subText :textItem="'ShaSha「EOS R」作例・レビュー'" />
        <div>
          <div>
            <v-card class="pa-6" outlined>
              <p>
                2018年9月、キヤノンから新しいミラーレスカメラが発表されました。名前は「EOS
                R」で、初めてフルサイズセンサーを搭載したミラーレスカメラです。名前の「R」の由来は”Reimagine optical
                excellence“(もう一度、イメージングシステムを創造する。）の頭文字から取られており、ミラーレス新時代への期待と新マウントに変更することに対する意志を感じました。
              </p>
              <p>
                ちょうどこの時期を思い返してみると、ソニーのα7III発売から半年経ち、同時にニコンからも初となるフルサイズミラーレスカメラ“Z”が発表されたタイミングだったので、カメラ市場はフルサイズミラーレスカメラの影響で、お祭りのような活気に包まれていた記憶があります。
              </p>
              <p>
                今回は去年のお祭りのような活気を思い出すべく、キヤノン初のフルサイズミラーレスカメラEOS Rを使ってみました。すでにソニーα7III、ニコンZ 7/Z
                6の記事も公開していますので、ぜひご覧ください。
              </p>
              <a href="https://shasha.kitamura.jp/article/468688716.html" target="_blank">
                <v-img class="mx-auto mt-4 hover" max-width="900px" src="/ec/images2/special/camera/feature/canon/eosr/shashabnr.jpg"> </v-img>
              </a>
            </v-card>
          </div>
        </div>
        <!--ShaSha-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'キヤノン EOS R 価格/人気アクセサリー'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--分割42回-->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'48'"
          :maximumInstallmentPayment="'48'"
          :amount="'4,810'"
          :targetDate="''"
          :isCreditBtn="true"
        />
        <!--分割42回-->

        <!--高価買取実施中-->
        <subText :textItem="'高価買取実施中'" />
        <div>
          <a
            href="https://www.net-chuko.com/ec/sell/item-list?category=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&keyword=5D%20MarkIV&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort="
            target="_blank"
          >
            <v-img class="mt-4 hover" max-width="350px" src="/ec/images2/special/camera/feature/canon/eosr/bnr_shitadori_350-130.png"> </v-img>
          </a>
        </div>
        <!--高価買取実施中-->

        <!--EOS Rとは-->
        <subText :textItem="'「EOS R」とは'" />
        <div>
          <div>
            <ul class="point">
              <li class="pointt including-line-breaks">キヤノンの光学技術を最大限に発揮させることができる、35mmフルサイズCMOSセンサー搭載のミラーレスカメラ</li>
              <li class="pointt including-line-breaks">
                OS Rシステムを象徴するRFマウントは、大口径マウント、ショートバックフォーカスを採用することで高画質を実現
              </li>
              <li class="pointt including-line-breaks">新マウント通信システムにより、カメラとレンズの通信機能が飛躍的に向上</li>
              <li class="pointt including-line-breaks">マウントアダプターを使用することで従来のEFレンズやEF-Sレンズも使用可能</li>
            </ul>
          </div>
        </div>
        <!--EOS Rとは-->

        <!--特徴-->
        <subText :textItem="'キヤノン EOS R の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS R / ニコン Z6 / SONY α7 III'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">キヤノン EOS Rと、ニコン Z6、SONY α7 IIIの性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2018年10月25日発売</td>
                  <td>2018年11月23日発売</td>
                  <td>2018年3月23日発売</td>
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
                  <td>約3030万画素</td>
                  <td>約2450万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズCMOS</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約8コマ/秒</td>
                  <td>最高 約12コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>RAW：約34枚</td>
                  <td>ロスレス圧縮RAW(12bit):約35コマ</td>
                  <td>RAW(非圧縮)：約40枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～102400</td>
                  <td>100～204800</td>
                  <td>50～204800</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>5655点</td>
                  <td>273点</td>
                  <td>693点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約370枚</td>
                  <td>ファインダー使用時:約310枚<br />モニター使用時:約380枚</td>
                  <td>ファインダー使用時:約610枚<br />モニター使用時:約710枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約135.8×98.3×84.4mm</td>
                  <td>約134×100.5×67.5mm</td>
                  <td>約126.9×95.6×62.7mm</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.80倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約580g</td>
                  <td>約585g</td>
                  <td>約565g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>シングルスロット<br />SD/SDHC/SDXCメモリーカード</td>
                  <td>シングルスロット<br />XQDカード</td>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4KUHD/フルHD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'キヤノン EOS R 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS R の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/eosr'" :count="3" :sm="6" />
        </div>

        <div class="text-center mb-12">
          <v-btn class="block" color="red darken-1" href="/ec/pd/4549292119282" x-large>
            <span class="text-h6 white--text">キヤノン EOS R ボディ 商品を見る</span>
          </v-btn>
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'eosr',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'キヤノン 待望のフルサイズミラーレス 『EOS R』 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'EOSからEOS Rへ。フルサイズミラーレス一眼 キヤノン EOS-Rの比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' },
      ],
      characteristicList: [
        {
          subtitle: '「RFレンズ」との組み合わせによる優れた画質と豊かな表現力',
          contents: [
            '約3030万画素・35mmフルサイズCMOSセンサーを採用。RFレンズに対応した光学設計の最適化を図り、高い解像力を実現',
            'レンズの収差などを補正する「デジタルレンズオプティマイザ」は、連続撮影時でも快適さを損なわずに「RFレンズ」の性能を引き出すことが可能',
            '常用ISO感度100～40000を実現しており、明るいレンズと組み合わせることで室内や夜景などの暗いシーンでも高画質な撮影が可能'
          ]
        },
        {
          subtitle: '多様なシーンに対応する「デュアルピクセルCMOS AF」',
          contents: [
            '「デュアルピクセルCMOS AF」と「RFレンズ」の駆動制御を最適化したことにより、最速約0.05秒の高速AFを実現',
            'ピントを合わせたい場所を最大5,655のポジションから選べるため、自由な構図で撮影が可能',
            'EOSシリーズで初となるEV-6の低輝度限界を達成。肉眼では被写体の判別が難しい暗い状況でも高精度なピント合わせを実現'
          ]
        },
        {
          subtitle: '手ブレ補正最大5段分のデュアルセンシングIS',
          contents: [
            '揺れ検出のアルゴリズムが一眼レフカメラのEOSから進化。',
            'レンズのジャイロセンサーに加え、カメラのCMOSセンサーの画像情報からブレ量を検出。',
            '2つの情報を比較解析することで、レンズの光学ISと合わせて最大5段分を達成'
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
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
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
          linkUrl: '/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'キヤノン EOS R',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292119282'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292119282', '4960759901484', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292115611',
        '4549292115581',
        '4549292115727',
        '4549292115642',
        '4549292119923',
        '4549292008296',
        '4549292115703',
        '4549292115710',
        '4549292141603',
        '4549292141610',
        '4549292141627',
        '4549292141634',
        '4549292141641'
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
        console.log(productListResult);
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