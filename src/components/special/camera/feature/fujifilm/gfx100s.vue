<template>
  <v-app>
    <div class="gfx100s">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/gfx100s/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/gfx100s/sp_img_top.jpg'"
          :topTitle="'フジフイルム GFX100S'"
          :topTitleText="'高性能手ブレ補正機構 高速・高精度AF機能搭載\n世界最高1億2百万画素ラージフォーマットセンサーミラーレス'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="mb-0 text-subtitle-2">フジフイルム GFX100S</p>
        <naviBtn :naviList="naviList" :hoverColor="'#00A080'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'高い機動力を発揮する1億2百万画素ラージフォーマットセンサー搭載 ミラーレスデジタルカメラ「GFX100S」'" />

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'フジフイルム GFX100S 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'フジフイルム GFX100S メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/gfx100s/'"
          :height="'70px'"
        />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'15,210'"
            :targetDate="'2021年２月１日'"
            :isCreditBtn="true"
          />
        </div>

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'フジフイルム GFX 100S / GFX 100 / ソニー α7RIV / ニコン D850 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">フジフイルム GFX 100S / GFX 100 / ソニー α7RIV / ニコン D850 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年2月25日発売</td>
                  <td>2019年6月28日発売</td>
                  <td>2019年9月6日発売</td>
                  <td>2017年9月8日発売</td>
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
                  <td>約1億200万画素</td>
                  <td>約1億200万画素</td>
                  <td>約6100万画素</td>
                  <td>約4575万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>43.8mm×32.9mm <br />裏面照射型ベイヤーCMOSセンサー</td>
                  <td>43.8mm×32.9mm <br />裏面照射型ベイヤーCMOSセンサー</td>
                  <td>35mmフルサイズ（35.7×23.8mm）<br />裏面照射型CMOSセンサー</td>
                  <td>35mmフルサイズ（35.9×23.9mm）<br />裏面照射型CMOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>約5.0コマ/秒</td>
                  <td>約5.0コマ/秒</td>
                  <td>約10コマ/秒</td>
                  <td>約7コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>メカニカルシャッター:1/4000秒-60分、バルブ<br />電子シャッター:1/16000秒-60分、バルブ</td>
                  <td>メカニカルシャッター:1/4000秒-60分、バルブ<br />電子シャッター:1/16000秒-60分、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000～30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100-12800<br />
                    拡張モードISO50/25600/51200/102400
                  </td>
                  <td>
                    ISO100-12800<br />
                    拡張モードISO50/25600/51200/102400
                  </td>
                  <td>ISO100-32000<br />拡張：下限ISO50、上限ISO102400</td>
                  <td>ISO64-25600<br />拡張：下限ISO32、上限ISO102400</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>約369万ドット<br />0.5型有機EL電子式ビューファインダー</td>
                  <td>約576万ドット<br />0.5型有機EL電子式ビューファインダー</td>
                  <td>約576万ドット<br />0.5型電子式ビューファインダー</td>
                  <td>ペンタプリズム使用、アイレベル式</td>
                </tr>
                <tr>
                  <th>視野率/倍率</th>
                  <td>100%/0.77倍</td>
                  <td>100%/0.86倍</td>
                  <td>100%/0.78倍</td>
                  <td>100%/0.75倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>236万ドット<br />3.2型3方向チルト式TFT</td>
                  <td>236万ドット<br />3.2型3方向チルト式TFT</td>
                  <td>144万ドット<br />3型チルト式TFT</td>
                  <td>約236万ドット<br />3.2型チルト式TFT</td>
                </tr>
                <tr>
                  <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
                  <td>約460枚</td>
                  <td>約800枚<br />（バッテリー2個使用）</td>
                  <td>ファインダー使用時：約530枚<br />液晶モニター使用時：約670枚</td>
                  <td>約1840コマ</td>
                </tr>
                <tr>
                  <th>連続動画撮影時</th>
                  <td>約95分</td>
                  <td>約170分<br />（バッテリー2個使用）</td>
                  <td>約170分</td>
                  <td>約70分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>6.0段<br />センサーシフト方式5軸補正</td>
                  <td>5.5段<br />センサーシフト方式5軸補正</td>
                  <td>5.5段<br />センサーシフト方式5軸補正</td>
                  <td>静止画:レンズ内手振れ補正のみ<br />動画:電子手ブレ補正あり</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>150.0×104.2×87.2 mm</td>
                  <td>156.2×163.6×102.9 mm<br />EVF装着時</td>
                  <td>128.9ｘ96.4ｘ77.5 mm</td>
                  <td>146×124×78.5 mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約900g</td>
                  <td>約1,400g<br />EVF装着時</td>
                  <td>約665g</td>
                  <td>約1005g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>SDカード/デュアルスロット</td>
                  <td>SDカード/デュアルスロット</td>
                  <td>SDカード/デュアルスロット</td>
                  <td>XQD、SDカード/ダブルスロット</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'フジフイルム GFX 100S の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--動画で見る-->
        <subText :textItem="'動画で見る フジフイルム GFX100S'" />
        <p class="text-center mb-0 text-subtitle-2">フジフイルム GFX100S 開発担当インタビュー【前編】<br />～開発秘話…ラージフォーマットの魅力とは？～</p>
        <watchInVideo :src="'https://www.youtube.com/embed/rF3IZgyve2k?rel=0'" :height="400" />
        <p class="text-center mb-0 text-subtitle-2 mt-6">フジフイルム GFX100S 開発担当インタビュー【後編】<br />～操作性や機能面…GFX100との違いとは？～</p>
        <watchInVideo :src="'https://www.youtube.com/embed/LctMY70c5bg?rel=0'" :height="400" />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:フジフイルム GFX100S'" />
        <shasha
          :txt="'フルサイズセンサーを超える対角55mmのラージフォーマットセンサーを搭載した同社の「GFX」シリーズ最新作であり、モデル名の通りGFX100をベースとしつつ大幅な軽量小型化を実現した機種になります。\n今回は富士フイルムイメージングプラザ東京にてGFX100Sの先行展示品を触ってきましたので、開発担当者への取材内容も交えつつ製品をご紹介...'"
          :href="'https://shasha.kitamura.jp/article/479848507.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/gfx100s/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'フジフイルム GFX100S 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'フジフイルム GFX100S 外観画像'" />
          <p class="text-subtitle-1">フジフイルム GFX100S の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/gfx100s'" :count="3" />
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
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'gfx100s',
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
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = 'フジフイルム GFX100S | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム GFX100S 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー Planar T* FE 50mm F1.4 ZA [SEL50F14Z]',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&goodsname=4548736028357&pattern=1&_ga=2.134607473.16120489.1628554499-279164427.1627285160',
        nameImg: '//shopimg.kitamura.jp/images/pd/8d9/c63/bad/3e3/cdc/d99/030/9c8/ca4/9f3/07x/uhq/owi/6/M.jpg',
        txt: 'ソニー FE 50mm F1.2 GM',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel50f12gm/bnr_shitadori_350-130.jpg'
      },
      characteristicList: [
        {
          subtitle: '異次元の高画質を実現した、1億2百万画素裏面照射型ラージフォーマットセンサー',
          contents: [
            '「GFX100」で採用している1億2百万画素ラージフォーマットセンサーを搭載。写真の一部を切り出し拡大した画像でも、細部にわたるまで緻密な描写が可能',
            '長年培った色再現技術と、高速画像処理エンジン「X-Processor 4」、圧倒的な解像力を引き出す「フジノン GFレンズ」の組み合わせにより、異次元の高画質を実現',
            '独自の「フィルムシミュレーション」に、高彩度かつ柔らかい階調表現が可能な「ノスタルジックネガ」モードを新搭載。カラー写真を定着させた「アメリカンニューカラー」の色調を再現'
          ]
        },
        {
          subtitle: '手持ち撮影を強力にサポートする新開発のボディ内手ブレ補正機構と機動力に優れたコンパクトボディ',
          contents: [
            '新開発の5軸・最大6.0段のボディ内手ブレ補正機構を搭載。振動検出のアルゴリズムを刷新し「GFX100」と比べ手ブレ補正効果を向上。手持ちによる静止画・動画撮影を強力にサポート',
            'ボディ内手ブレ補正機構・シャッターユニットの小型化や各種デバイスの配置最適化により、ラージフォーマットセンサーながら、質量約900g・高さ約104mm・奥行約87mmのコンパクトボディを実現',
            '3.2インチ/約236万ドット/視野率100％の上90°下45°右60°に可動する3方向チルト式静電式タッチパネル液晶モニター搭載。ハイアングル/ローアングルの撮影もスムーズに対応可能'
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
          href: 'ec/special/sale/shoppingcredit-campaign/',
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
          path: 'フジフイルム GFX100S',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410442861'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410442861', '4547410415230', '4548736108264', '4960759149336'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410442861',
        '4547410449297',
        '4547410449297',
        '4547410428155',
        '4547410378122',
        '4547410433531',
        '4547410342963',
        '4547410437775',
        '4547410341034',
        '4547410420333',
        '4547410345445',
        '4547410322040',
        '4547410433524',
        '4523052016639'
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