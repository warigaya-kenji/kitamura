<template>
  <v-app>
    <div class="xpro3">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'フジフイルム X-Pro3'"
          :topTitleText="'軽量・高強度なチタンを採用！\n高級感溢れるボディで優れた機動性・耐久性を実現'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :titleFontsize="'200%'"
          :textFontsize="'16px'"
        />

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">フジフイルム X-Pro3 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">フジフイルム X-Pro3</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'ファインダーを覗いて撮影する。写真撮影の原点を追求したミラーレス一眼「X-Pro3」'" />
        <p class="mt-2 txet-subtitle-1 font-weight-bold">世界唯一、光学式・電子式の切り替えが可能なファインダーがさらに進化</p>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'フジフイルム X-Pro3ご購入はこちら'"
          :url="'/ec/special/page/news/2019/10/4280'"
          :height="'52px'"
          :color="'#ff0000'"
        />
        <v-img src="/ec/images2/special/camera/feature/fujifilm/xpro3/item.jpg" max-width="928" max-height="250" class="mx-auto mt-4"></v-img>

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'フジX-Pro3 /X-Pro2 /オリンパスOM-D E-M1 MarkII /ソニーα6600比較比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">フジX-Pro3 /X-Pro2 /オリンパスOM-D E-M1 MarkII /ソニーα6600の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年11月28日発売予定<br /></td>
                  <td>2019年12月中旬発売予定</td>
                  <td>2016年3月3日</td>
                  <td>2016年12月22日</td>
                  <td>2019年11月1日発売予定</td>
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
                  <td colspan="2">約2,610万画素</td>
                  <td>約2,430万画素</td>
                  <td>約2,037万画素</td>
                  <td>約2,420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td colspan="2">
                    APS-Cサイズ<br />
                    X-Trans CMOS 4センサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    X-Trans CMOS 3センサー
                  </td>
                  <td>
                    4/3型<br />
                    Live MOS センサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    Exmor CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td colspan="2">最高約11コマ/秒</td>
                  <td>最高約8コマ/秒</td>
                  <td>最高約10コマ／秒</td>
                  <td>最高約11コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td colspan="2">
                    RAW(非圧縮)：約36枚 <br />
                    JPEG：約145枚
                  </td>
                  <td>
                    RAW(非圧縮)：約27枚 <br />
                    JPEG：約83枚
                  </td>
                  <td>
                    RAW(非圧縮)：約148枚 <br />
                    JPEG：カード容量まで
                  </td>
                  <td>
                    RAW(非圧縮)：約46枚 <br />
                    JPEG：約99枚
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td colspan="2">1/8000-15分、バルブ</td>
                  <td>1/8000-15分、バルブ</td>
                  <td>1/8000-60秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td colspan="2">
                    ISO160-12800<br />
                    (拡張：下限ISO80、上限ISO51200)
                  </td>
                  <td>
                    ISO200-12800<br />
                    (拡張：下限ISO100、上限ISO51200)
                  </td>
                  <td>
                    ISO200-6400<br />
                    (拡張：下限ISO64、上限ISO25600)
                  </td>
                  <td>
                    ISO100-32000<br />
                    (拡張：下限ISO50、上限ISO102400)
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td colspan="2">最大425点</td>
                  <td>最大325点</td>
                  <td>
                    121点（クロスタイプ位相差AF）<br />
                    121点（コントラストAF）
                  </td>
                  <td>
                    425点（位相差検出方式）<br />
                    /425点（コントラスト検出方式）
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td colspan="2">
                    EVF使用時：約370枚<br />
                    OVF使用時：約440枚
                  </td>
                  <td>
                    EVF使用時：約250枚<br />
                    OVF使用時：約350枚
                  </td>
                  <td>約440枚</td>
                  <td>
                    ファインダー使用時：約720枚<br />
                    液晶モニター使用時：約810枚
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td colspan="2">約140.5×82.8×46.1mm</td>
                  <td>約140.5×82.8×45.9mm</td>
                  <td>約134.1×90.9×68.9ｍｍ</td>
                  <td>約120.0×66.9×69.3mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td colspan="2">レンズ内手振れ補正</td>
                  <td>レンズ内手振れ補正</td>
                  <td>5軸シンクロ補正 5.5段</td>
                  <td>5軸補正 最大5.0段</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td colspan="2">
                    EVF：約369万ドット/約100%/0.66倍<br />
                    OVF：約95%/0.52倍
                  </td>
                  <td>
                    EVF：約236万ドット/約100%/0.59倍<br />
                    OVF:約92%/0.60倍
                  </td>
                  <td>約236万ドット/約100% / 約1.3倍</td>
                  <td>約236万ドット/約100% / 約0.7倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td colspan="2">約447g</td>
                  <td>約445g</td>
                  <td>約498ｇ</td>
                  <td>約418g</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td colspan="2">
                    SD/SDHC/SDXCデュアルスロット<br />
                    (UHS-I／UHS-II 対応)
                  </td>
                  <td>
                    SD/SDHC/SDXC デュアルスロット<br />
                    (UHS-I／UHS-II 対応)
                  </td>
                  <td>
                    SD/SDHC/SDXC デュアルスロット<br />
                    (UHS-I／UHS-II 対応)
                  </td>
                  <td>SD／SDHC／SDXCメモリーカード(UHS-I 対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td colspan="2">DCI4K/4K/フルHD</td>
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

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'フジフイルム X-Pro3 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーHPで詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/x-pro3/'"
          :height="'52px'"
          :color="'#ff0000'"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha｜富士フイルムX-Pro3開封レビュー|“写真を撮る喜び”を感じるカメラ'" />
        <shasha
          :txt="'2019年10月に富士フイルムから、新しいミラーレスカメラX-Pro3が発表されました。前モデルのX－Pro2が発表されたのが、2016年のため3年ぶりに発売される後継機となるのですが、あまりにも濃すぎる特徴が発表前から噂に上がり、とても話題になりました。 初めてその噂を知った時は、「え？本当にこんな感じのカメラが発売されるの？」と思った方も多いのではないでしょうか？私もその一人でしたが、富士フイルムから公式情報がリリースされてその噂が真実だと知った時は驚きました...'"
          :href="'https://shasha.kitamura.jp/article/471978997.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/xpro3/2shashabnr.jpg'"
        />
        <shasha
          :txt="'上野の東京国立博物館敷地内にある“表慶館”にて、富士フイルムが主催するイベント“FUJI FEST GLOCAL2019”が開催されました\n今までのGFXの弱点でもあったAFについても、瞳AF・顔検出など大幅に性能が上がっており、ストレスを感じることがありません。 本イベントの目玉といえば、なんといっても2019年10月23日に発表されたばかりの新製品、X-Pro3ですよね！ 今回はFUJI FEST GLOCAL 2019に参加してみてのレビューです。ぜひご覧ください...'"
          :href="'https://shasha.kitamura.jp/article/471124686.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/xpro3/shashabnr.jpg'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る！フジフイルム X-Pro3'" />
        <v-row class="text-center caption text-sm-body-1">
          <v-col cols="12" sm="6">
            <p class="mb-0">作例と共にX-Pro3の機能をご紹介</p>
            <watchInVideo :src="'https://www.youtube.com/embed/qM7WJGl9bGU?rel=0'" :height="250" :sm="12" />
          </v-col>
          <v-col cols="12" sm="6">
            <p class="mb-0">富士フイルム ファンミーティングでのX-Pro3取材動画</p>
            <watchInVideo :src="'https://www.youtube.com/embed/ahT3e98EFxo?rel=0'" :height="250" :sm="12" />
          </v-col>
        </v-row>

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'フジフイルム X-Pro3 価格/人気アクセサリー/お得な情報'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'5,500'" :secondAmount="'約4,400'" :targetDate="''" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[1]"
          :amount="'6,800'"
          :secondAmount="'約4,900'"
          :targetDate="''"
          :isMax60Txt="true"
          :isCreditBtn="true"
        />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'フジフイルム X-Pro3をご購入時、フジフイルム X-Pro2高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
        </div>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'フジフイルム X-Pro3 外観画像'" />
          <p>フジフイルム X-Pro3の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="appearanceImagePath" :count="3" :sm="6" :maxWidth="400" />
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'フジフイルム X-Pro3ご購入はこちら'"
          :url="'/ec/special/page/news/2019/10/4280'"
          :height="'52px'"
          :color="'#ff0000'"
        />
        <br />

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
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
export default Vue.extend({
  name: 'xpro3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    watchInVideo: WatchInVideo,
    appearanceImage: AppearanceImage,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    shasha: ShaSha,
    expensiveTradeIn: ExpensiveTradeIn,
  },
  setup: (props, context) => {
    document.title = 'フジフイルム X-Pro3 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム X-Pro3 好評発売中！までまもなく！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/fujifilm/xpro3/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/fujifilm/xpro3/sp_img_top.jpg',
      exampleImagesPath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/fujifilm/xpro3/',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/fujifilm/xpro3',
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
          path: 'フジフイルム X-Pro3',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '世界唯一、光学式・電子式の切り替えが可能な「アドバンスドハイブリッドビューファインダー」を搭載',
          contents: [
            '光学ファインダー（OVF）と電子ビューファインダー（EVF）を、レバー操作で瞬時に切り替え可能',
            '光学ファインダー（OVF）では、被写体をありのままに捉え、直感的に撮影が可能',
            '電子ビューファインダー（EVF）は、高解像約369万ドットの有機ELパネル採用。露出などの撮影条件を確認しながらの撮影が可能'
          ]
        },
        {
          subtitle: 'フィルムの発色に近い仕上がりを追求。人間の記憶に残る鮮やかな色「記憶色」を実現',
          contents: [
            '「Xシリーズ」第4世代のセンサー・画像処理エンジンを搭載。白飛びや黒つぶれの少ない、自然な色の写真を撮影可能',
            '多彩な色調を可能とする「フィルムシミュレーション」を17モード搭載。「クラシックネガ」モードも新たに追加',
            'フィルムで撮った写真が持つ独特の粒状感を再現する「グレイン・エフェクト」機能をさらに進化。グレインの濃さ・粗さを調整可能'
          ]
        },
        {
          subtitle: '優れた機動性・耐久性に加え、高級感＋快適な操作を実現',
          contents: [
            'マグネシウム合金をボディ内部のフレームに加え、ボディ外装に軽量・高強度で耐食性にも優れたチタンを採用',
            '高解像や広い視野角、高いコントラストを備えた 約162万ドット・チルト式タッチパネル液晶モニターを搭載で撮影をサポート',
            '電源のON/OFFに関わらず、撮影情報を確認することが可能なカラーメモリ液晶モニターをボディ背面に新たに採用'
          ]
        },
      ],
      expensiveTradeInList: {
        name: 'フジフイルム X-Pro2',
        href: '/ec/sell/item-list?category=ミラーレス一眼&keyword=フジフイルム%20X-Pro2&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=40&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/ca4/224/44a/785/1d6/17f/b8e/31c/0d0/613/c34/2cl/fc5/z/L.jpg',
        txt: 'FUJIFILM X-Pro3',
        tradeInImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/fujifilm/xpro3/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
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
      mainProductJanCode: ['4547410421767', '4547410421774'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410421767', '4547410421774', '4547410311914', '4545350053000', '4548736108417'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410421767',
        '4547410421774',
        '4547410421781',
        '4547410426045',
        '4547410426038',
        '4547410334128',
        '4547410242539',
        '4547410378122',
        '4547410263923',
        '4547410289879',
        '4547410416572',
        '4547410397314',
        '4547410397307',
        '4547410206142',
        '4547410328820',
        '4547410328813',
        '4547410206159',
        '4547410341003',
        '4547410340990',
        '4547410266627',
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