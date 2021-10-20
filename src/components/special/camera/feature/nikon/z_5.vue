<template>
  <v-app>
    <div class="z_5">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/z_5/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/z_5/sp_img_top.jpg'"
          :topTitle="'ニコン Z 5'"
          :topTitleText="'「ボディー内手ブレ補正・瞳AF・動物AF」搭載\n高い表現力と信頼性を兼ね備えたフルサイズミラーレス'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン Z 5</p>
        <naviBtn :naviList="naviList" :hoverColor="'#ffe100'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'本格的な画づくりと高いコストパフォーマンスを両立した、フルサイズミラーレスカメラ「Z 5」'" />

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ニコン Z 5 ボディ / ニコン Z 5 24-50 レンズキット 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'" :url="'https://www.nikon-image.com/products/mirrorless/lineup/z_5/'" />

        <!--特徴-->
        <subText :textItem="'Z 5 の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン Z 5 / Z 6 / キヤノン EOS RP / ソニー α7III 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコン Z 5 / Z 6 / キヤノン EOS RP / ソニー α7III 比較しました。</p>
            <table class="product-comparison-table spec">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年8月28日</td>
                  <td>2020年11月23日</td>
                  <td>2019年3月14日</td>
                  <td>2018年3月23日</td>
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
                  <td>約2432万画素</td>
                  <td>約2450万画素</td>
                  <td>約2620万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35.9×23.9mmフルサイズ<br />CMOSセンサー</td>
                  <td>35.9×23.9mmフルサイズ<br />裏面照射型CMOSセンサー</td>
                  <td>35.9×24.0mmフルサイズ<br />CMOSセンサー</td>
                  <td>35.6×23.8mmフルサイズ<br />裏面照射型CMOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約4.5コマ/秒</td>
                  <td>最高 約5.5コマ</td>
                  <td>最高 約5コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～51200</td>
                  <td>100～51200</td>
                  <td>100～40000</td>
                  <td>100～51200</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.5型/約369万ドット</td>
                  <td>0.5型/約369万ドット</td>
                  <td>0.39型/約236万ドット</td>
                  <td>0.5型/約236万ドット</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.80倍</td>
                  <td>約100% / 約0.80倍</td>
                  <td>約100% / 約0.70倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>3.2型/約104万ドット<br />チルト式</td>
                  <td>3.2型/約210万ドット<br />チルト式</td>
                  <td>3.0型/約104万ドット<br />バリアングル式</td>
                  <td>3.0型/約92万ドット<br />チルト式</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>静止画:約390枚<br />動画:約115分</td>
                  <td>静止画:約310枚<br />動画:約85分</td>
                  <td>静止画:約250枚<br />動画:約100分</td>
                  <td>静止画:約610枚<br />動画:約115分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>レンズ手ブレ補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約134×100.5×69.5mm</td>
                  <td>約134×100.5×67.5mm</td>
                  <td>約132.5×85.0×70.0mm</td>
                  <td>約126.9×95.6×73.7mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約590g</td>
                  <td>約585g</td>
                  <td>約440g</td>
                  <td>約565g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>デュアルスロット<br />SDメモリーカード(UHS-II 対応)</td>
                  <td>シングルスロット<br />XQDカード/CFexpressカード（Type B）</td>
                  <td>シングルスロット<br />SDメモリーカード(UHS-II 対応)</td>
                  <td>デュアルスロット<br />SDメモリーカード(UHS-II 対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4KUHD/フルHD</td>
                  <td>4KUHD/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン Z 5レビュー｜日常をドラマティックにしてくれるミラーレス！'" />
        <shasha
          :txt="'ニコンのミラーレスカメラ「ニコンZ 5」は、2018年発売のZ 7、Z 6に次ぐ、Zシリーズのフルサイズ機です。\n今回は、本機を日常使いしたレビューをお送りします。\nこれからニコンのミラーレスカメラデビューをしようとする方には、Z 5をお勧めしたいです。その理由のひとつがキットレンズです。同日発売のミラーレスカメラ用フルサイズフォーマットのズームレンズ「NIKKOR Z 24-50mm f/4-6.3」は沈胴式の形状で、約51mmと薄く、約195gと超軽量サイズなので、フルサイズ機を持ち歩くときの機材の負担を...'"
          :href="'https://shasha.kitamura.jp/article/478018215.html'"
          :src="'/ec/images2/special/camera/feature/nikon/z_5/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン Z 5 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--====== 高価下取り ======-->
        <div id="price">
          <subText :textItem="'ニコン Z 5 ボディ/ ニコン Z 5 24-50 レンズキット ご購入時、高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" />
        </div>

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'3,424'" :targetDate="'2020年7月22日'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[1]"
          :amount="'4,167'"
          :targetDate="'2020年7月22日'"
          :isCreditBtn="true"
        />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン Z 5 外観画像'" />
          <p class="text-subtitle-1">ニコン Z 5 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/z_5'" />
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
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'z_5',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    expensiveTradeIn: ExpensiveTradeIn,
    splitContent: SplitContent,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService
  },
  setup: (props, context) => {
    document.title = 'ニコン Z 5 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Z 5 好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '本格的な画づくりを実現する「ニコン Z シリーズ」ならではの高画質と表現力',
          contents: [
            '有効画素数2432万画素、ニコンFXフォーマットCMOSセンサーと画像処理エンジン「EXPEED 6」により、暗所でも質感やディテールを表現しながらノイズを抑えた描写が可能',
            'ボディー内手ブレ補正（VR）を搭載。手ブレ補正ユニットを5軸に駆動させて補正することで、シャッタースピード5.0段分の補正力'
          ]
        },
        {
          subtitle: '狙い通りの撮影を可能にする「瞳AF」「動物AF」「273点ハイブリッドAFシステム」',
          contents: [
            '像面位相差AFとコントラストAFを自動的に切り換える「ハイブリッドAFシステム」を搭載。撮像範囲の水平、垂直約90%の広範囲をフォーカスポイント273点でカバー',
            '「瞳AF」「動物AF」を搭載し、動いている人物の瞳や、犬と猫の瞳を高い精度で捕捉。ライブビュー撮影時だけでなくファインダー撮影時も複数の瞳を検出可能',
            '動画撮影時は人物の顔に加え、動物の顔を検出可能。-3EVまでのAF撮影に対応し、低輝度下でも被写体をしっかり捕捉'
          ]
        },
        {
          subtitle: '優れた操作性と多様な機能により快適な撮影をサポート',
          contents: [
            '「Z 7」「Z 6」と同等の高い防塵・防滴性能、堅牢性を備え、様々な環境下で安心して撮影が可能',
            '新開発の「Li-ionリチャージャブルバッテリー EN-EL15c」は容量が増加。従来のUSB充電に加え、新たに電源ON時のUSB給電にも対応',
            'ユーザーの要望に応え、ニコンのミラーレスカメラとして初めてSDダブルスロットを搭載し、スムーズなデータハンドリングを実現'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'ニコン D750 ボディ',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4960759143846%20&_ga=2.66452910.16120489.1628554499-279164427.1627285160&pattern=1',
        nameImg: '	https://shopimg.kitamura.jp/images/pd/009/b51/5b1/d9b/6cf/2b3/e79/7b4/a00/b9f/61y/sz7/qnw/n/M.jpg',
        txt: 'ニコン Z 5',
        tradeInImg: '/ec/images2/special/camera/feature/nikon/z_5/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
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
          path: 'ニコン Z 5',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759904485', '4960759904515'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759904485', '4960759901484', '4549292132144', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759904485',
        '4960759904515',
        '4960759904256',
        '4960759149961',
        '4960759904430',
        '4960759903310',
        '4960759126566',
        '4955478180647',
        '4960759149282',
        '4955478182665',
        '4955478182658',
        '4960759144034',
        '4523052016615'
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