<template>
  <v-app>
    <div class="xt4">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xt4/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xt4/sp_img_top.jpg'"
          :topTitle="'富士フイルム X-T4'"
          :topTitleText="'「X-Tシリーズ」初の5軸ボディ内手ブレ補正機能を\n採用したフラッグシップミラーレス'"
          :textColor="'#ffffff'"
          :titleColor="'#ffffff'"
          :padding="'140px 0px 15px 30px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">富士フイルム X-T4 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-subtitle-2 mb-0">富士フイルム X-T4</p>
        <naviBtn :naviList="naviList" :hoverColor="'#00A080'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'卓越した写真画質で好評の「X-Tシリーズ」にボディ内手ブレ補正を新搭載'" />
        <p class="text-h6 font-weight-bold">15コマ/秒の高速連写と最短約0.02秒の高精度AFと新ボディ内手ブレ補正で決定的な瞬間も逃さない</p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'富士フイルム X-T4 価格・ご購入'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :txt="'15コマ/秒の高速連写と最短約0.02秒の高精度AFと新ボディ内手ブレ補正で決定的な瞬間も逃さない'"
          :btnColor="'red darken-2'"
        />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'富士フイルム X-T4 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/x-t4/'"
          :height="'70px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'富士フイルム X-T4/X-T3/X-H1/ソニーα6600 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">富士フイルム X-T4/X-T3/X-H1/α6600の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr></tr>
                <tr>
                  <th>発売日</th>
                  <td>ブラック：2020年4月28日<br />シルバー：2020年5月21日発売</td>
                  <td>2018年9月20日発売</td>
                  <td>2018年3月1日発売</td>
                  <td>2019年11月1日発売</td>
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
                  <td>約2610万画素</td>
                  <td>約2430万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>X-Trans CMOS 4センサー</td>
                  <td>X-Trans CMOS 4センサー</td>
                  <td>X-Trans CMOS IIIセンサー</td>
                  <td>Exmor CMOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>約15コマ/秒</td>
                  <td>約11コマ/秒</td>
                  <td>約11コマ/秒</td>
                  <td>約11コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>非圧縮RAW：35枚<br />JPEG：110枚</td>
                  <td>非圧縮RAW：36枚<br />JPEG：145枚</td>
                  <td>非圧縮RAW：24枚<br />JPEG：70枚</td>
                  <td>RAW：46枚<br />JPEG：約116枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>15分～1/8000秒、 バルブ(最長60分)</td>
                  <td>15分～1/8000秒、 バルブ(最長60分)</td>
                  <td>15分～1/8000秒、 バルブ(最長60分)</td>
                  <td>30秒～1/4000秒、 バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO160～12800<br />拡張時80~51200</td>
                  <td>ISO160～12800<br />拡張時80~51200</td>
                  <td>ISO200～12800<br />拡張時100~51200</td>
                  <td>ISO100～32000<br />拡張時50～102400</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約500枚</td>
                  <td>約390枚</td>
                  <td>約310枚</td>
                  <td>約720枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>134.6×92.8×63.8mm</td>
                  <td>132.5×92.8×58.8mm</td>
                  <td>139.8×97.3×85.5mm</td>
                  <td>120.0×66.9×69.3mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>ボディ内5軸補正<br />最大6.5段</td>
                  <td>X<br />(レンズ内手振れ補正)</td>
                  <td>ボディ内5軸補正<br />最大5.5段</td>
                  <td>ボディ内5軸補正<br />最大5.0段</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.5型有機ELファインダー 約369万ドット（視野率約100%）</td>
                  <td>0.5型有機ELファインダー 約369万ドット（視野率約100%）</td>
                  <td>0.5型有機ELファインダー 約369万ドット（視野率約100%）</td>
                  <td>0.39型電子式ビューファインダー約236万ドット(視野率約100%)</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>3.0型 バリアングル式タッチパネル付 約162万ドット</td>
                  <td>3.0型 チルト式タッチパネル付 約104万ドット</td>
                  <td>3.0型 チルト式タッチパネル付 約104万ドット</td>
                  <td>3.0型 ワイド TFT駆動</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約526g</td>
                  <td>約489g</td>
                  <td>約623g</td>
                  <td>約418g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>デュアルスロット<br />SDカードUHS-II 対応</td>
                  <td>デュアルスロット<br />SDカードUHS-II 対応</td>
                  <td>デュアルスロット<br />SDカードUHS-II 対応</td>
                  <td>シングルスロット<br />SDカードUHS-I 対応</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD</td>
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
        <subText :textItem="'ShaSha:富士フイルム X-T4レビュー｜抜群の安定感でどこにでも連れて行きたくなるパワフルなカメラ'" />
        <shasha
          :txt="'今回はX-T4購入から1年半以上で撮影し続けてきたからこそ分かった、このカメラの良さをレビューさせていただきたいと思います。\n「色」はフジフィルムを使い続ける理由のひとつ。富士フイルムが長年培ってきた色再現の技術を簡単に作品に取り入れることができます。それをより実感するひとつは「空の色」。\n自然が織りなす美しい色が移り変わる時間「マジックアワー」は、薄オレンジの「鴇色」から、紫がかった「紺色の花紺青」へと刻一刻と変化する薄明の時。「何色」とは一言で言い表せないほど壮大に広がる空のパレットを、見たままの色・残したい色で表現できるのが富士フイルムの素晴らしいところ ...'"
          :href="'https://shasha.kitamura.jp/article/480051808.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/xt4/shashabnr2.gif'"
        />

        <subText :textItem="'ShaSha:富士フイルム X-T4レビュー｜ボディ内手ブレ補正など新機能満載！'" />
        <shasha
          :txt="'2020年2月26日、富士フイルムより新製品の発表がありました。「小型・軽量で、プロユースに使えるミラーレスデジタルカメラ」をコンセプトとして発売されているXシリーズの最新モデルX-T4です。\n2020年2月5日にロンドンで行われたイベント「X Summit LONDON 2020」において開発発表した本機種に関して、予告通り2020年2月26日14:00に製品詳細の発表となりました。\n\n2020年2月27日より開催予定だったCP+が残念ながら中止となり、発表後に触れる機会がないかと思われましたが、2020年2月26日の14時より、FUJIFILM Imaging Plaza東京・FUJIFILM Imaging Plaza大阪でX-T4のデモ機先行展示を実施しているということで、早速触ってきました。\n\n前機種X-T3を愛用している筆者が、メーカー担当者の方に聞かないと分からないであろう、新機能の詳細を確認してきました。\n...'"
          :href="'https://shasha.kitamura.jp/article/473764072.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/xt4/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'キヤノン EOS R5 / EOS R6 ご購入時、高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
        </div>

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'4,217'"
            :targetDate="'2020年5月21日'"
            :isMax60Txt="true"
            :isCreditBtn="true"
          />
        </div>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'富士フイルム X-T4 外観画像'" />
          <p class="text-subtitle-1">富士フイルム X-T4の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/xt4'" />
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
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
export default Vue.extend({
  name: 'xt4',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    appearanceImage: AppearanceImage,
    splitContent: SplitContent,
    expensiveTradeIn: ExpensiveTradeIn
  },
  setup: (props, context) => {
    document.title = '富士フイルム X-T4 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '富士フイルム X-T4 好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: 'ボディ内手ブレ補正と高速AF・高速連写で快適な撮影を実現',
          contents: [
            '「X-T シリーズ」初。5軸・最大6.5段のボディ内に手ぶれ補正機構搭載し快適な手持ち撮影を実現',
            '新開発フォーカルプレーンシャッターの採用と、アルゴリズムのさらなる進化で、最速15 コマ/秒の高速連写と最短約0.02 秒のAFを実現',
            '顔・瞳AF 性能が向上。優れた動体追従AF を備えカメラに向かって来る被写体だけでなく、離れていく被写体も正確に捕捉可能'
          ]
        },
        {
          subtitle: '独自の色再現技術などにより卓越した写真画質を実現',
          contents: [
            '80年以上にわたり培った色再現技術と、2610万画素「X-TransCMOS4」センサー＆画像処理エンジン「X-Processor4」の組み合わせで、記憶に残る鮮やかな色を再現',
            '「オートホワイトバランス」に、「ホワイト優先」と「雰囲気優先」を追加。難しい光源でもイメージに近い色味を再現可能',
            '「フィルムシミュレーション」に、「ETERNAブリーチバイパス」モードを新搭載。低彩度・高コントラストで重厚感のある写真・映像の撮影が可能'
          ]
        },
        {
          subtitle: 'より撮影に集中できるように進化したバッテリー＆ファインダー',
          contents: [
            '新開発の大容量バッテリー「NP-W235」を採用。ノーマルモードで約500枚、エコノミーモードで約600枚の連続撮影が可能',
            '撮影シーンや被写体に応じて3つのブーストモードを選択できる369万ドット高精細有機ELファインダー採用で、難しいシーンでも撮影しやすいように進化',
            '3.0インチ・約162万ドット・タッチパネル式の大型LCDモニターは新たにバリアングル式を採用。多彩なアングルでの撮影が可能'
          ]
        },
        {
          subtitle: '充実の動画撮影機能を搭載',
          contents: [
            'SDカード記録が可能な4K/60Pの動画撮影に対応。ボディ天面に静止画/動画切換ダイヤルを新搭載し、静止画と動画の設定を独立して行うことが可能',
            '電子式手ブレ補正機能を新搭載。手ブレに合わせてフレーミングを微調整することで、手持ちによる動画撮影で生じるブレを徹底的に補正',
            'フルHD・240Pのハイスピード動画撮影が可能。素早く動く被写体の一瞬のアクションも、最大10倍のスローモーション映像で再生可能'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'フジフイルム X-T3 ボディ',
        href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4547410378030&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&_ga=2.171423328.1712661879.1629071621-279164427.1627285160&pattern=1',
        nameImg: 'https://shop.kitamura.jp/images/pd/f71/5e1/a86/183/6d7/70e/436/dc8/03f/090/b0x/wwt/61t/a/L.jpg',
        txt: '富士フイルム X-T4',
        tradeInImg: '/ec/images2/special/camera/feature/fujifilm/xt4/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          {
            name: 'フジフイルム X-T3 ボディ',
            href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4547410378030&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&_ga=2.197098348.1712661879.1629071621-279164427.1627285160&pattern=1'
          },
          {
            name: 'フジフイルム X-T2 ボディ',
            href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4547410325287&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&_ga=2.197098348.1712661879.1629071621-279164427.1627285160&pattern=1'
          },
          {
            name: 'フジフイルム X-Pro2 ボディ',
            href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4547410311914&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&_ga=2.95714012.1712661879.1629071621-279164427.1627285160&pattern=1'
          }
        ]
      },
      recommendedFeaturesList: [
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
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shop.kitamura.jp/images/banner/8422.png',
          alt: 'カメラのメンテナンスサービス'
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
          path: '富士フイルム X-T4',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410427875'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410427875', '4547410378030', '4547410365801', '4548736108417'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410427875',
        '4547410427936',
        '4547410428032',
        '4547410428056',
        '4547410428131',
        '4547410428070',
        '4547410428155',
        '4547410378122',
        '4547410428124',
        '4547410428179'
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
