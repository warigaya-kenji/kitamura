<template>
  <v-app>
    <div class="x-t200">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x-t200/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x-t200/sp_img_top.jpg'"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'富士フイルム x-t200'"
          :topTitleText="'「優れた動体追従AFや顔・瞳AFを実現した\n小型軽量ミラーレスデジタルカメラ'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">富士フイルム x-t200<br />好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">富士フイルム x-t200</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'小型軽量ボディに高性能な画像処理エンジンを搭載した「X-T200」登場！'" />
        <p class="font-weight-bold mt-2 mb-6 text-h6">小型・軽量ボディに、動体や顔・瞳を素早く正確にとらえるAF、4K動画撮影機能を搭載</p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'富士フイルム x-t200価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'富士フイルム x-t200の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/x-t200/'"
          :height="'52px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'富士フイルム X-T200 / X-T100 / キヤノン EOS Kiss M / オリンパス PEN E-PL10 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">富士フイルム X-T200 / X-T100 / キヤノン EOS Kiss M / オリンパス PEN E-PL10 の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年2月27日発売</td>
                  <td>2018年6月21日発売</td>
                  <td>2018年3月23日発売</td>
                  <td>2019年11月22日発売</td>
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
                  <td>約2424万画素</td>
                  <td>約2424万画素</td>
                  <td>約2410万画素</td>
                  <td>約1605万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    APS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>4/3型Live MOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約8コマ/秒</td>
                  <td>最高 約6コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約8.6コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>確認中</td>
                  <td>JPEG：約26コマ</td>
                  <td>JPEG：約33枚</td>
                  <td>JPEG：約21コマ</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ、TIME</td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/4000-60秒、バルブ、TIME</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO200-12800<br />
                    （拡張ISO100相当、51200相当）
                  </td>
                  <td>
                    ISO200-12800<br />
                    （拡張ISO100相当、51200相当）
                  </td>
                  <td>
                    ISO100～25600<br />
                    （拡張51200相当）
                  </td>
                  <td>
                    ISO200～25600<br />
                    LOW（約100相当）
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>確認中</td>
                  <td>91点</td>
                  <td>最大143点</td>
                  <td>121点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約270枚</td>
                  <td>約430枚</td>
                  <td>約235枚</td>
                  <td>約350枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>121.0x83.7x55.1mm</td>
                  <td>約121.0×83.0×47.4mm</td>
                  <td>約116.3×88.1×58.7mm</td>
                  <td>約117.1×68×39mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>デュアルセンシングIS</td>
                  <td>撮像センサーシフト式３軸手ぶれ補正</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.39型有機ELファインダー約236万ドット</td>
                  <td>0.39型有機ELファインダー約236万ドット</td>
                  <td>0.39型／画素数：約236万ドット</td>
                  <td>なし</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>ワイド3.5型/バリアングル式/約276万ドット</td>
                  <td>3.0型/3方向チルト式/約104万ドット</td>
                  <td>ワイド3.0型/バリアングル式/約104万ドット</td>
                  <td>3.0型/可動式/約104万ドット</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約321g</td>
                  <td>約399</td>
                  <td>約351g</td>
                  <td>約332g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>SDカード(UHS-I対応)</td>
                  <td>SDカード(UHS-I対応)</td>
                  <td>SDカード(UHS-I対応)</td>
                  <td>SDカード(UHS-I対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'富士フイルム x-t200 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'富士フイルム x-t200をご購入時、富士フイルム X100F高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />
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
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
export default Vue.extend({
  name: 'x-t200',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = '好評発売中！富士フイルム x-t200 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '富士フイルム x-t200 ご好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！ x-t200をご購入時、富士フイルム X100F高値下取り実施中')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
      ],
      expensiveTradeInList: {
        name: 'フジフイルム X-T100 レンズキット',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=%E3%83%95%E3%82%B8%E3%83%95%E3%82%A4%E3%83%AB%E3%83%A0%20X-T100%20%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%AD%E3%83%83%E3%83%88&maker=&s2=&s3=&s4=%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%AD%E3%83%83%E3%83%88&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=40&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/67d/490/ceb/290/dfa/4bb/a7d/a61/e13/866/4dk/iv9/ib6/o/L.jpg',
        txt: '富士フイルム x-t200',
        tradeInImg: ' /ec/images2/special/camera/feature/fujifilm/x-t200/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: 'フジフイルム X-T100 レンズキット', href: '' },

        ]
      },
      characteristicList: [
        {
          subtitle: '小型軽量ボディ、独自の色再現、優れたAF性能などを実現し、簡単に高画質な写真撮影が可能',
          contents: [
            '前モデルのX-T100から約80g軽量化した約370gの小型軽量ボディに高性能な画像処理エンジンを搭載。人間の記憶に残る「記憶色」を実現',
            'センサー全面における像面位相差画素の配置とアルゴリズムのさらなる進化により、AF性能を向上。優れた動体追従AFや顔・瞳AFを実現',
            '8コマ/秒の高速連写が可能。高速・高精度AFとの組み合わせにより、決定的な瞬間を逃しません',
          ]
        },
        {
          subtitle: '多彩な色調やアート表現などを可能とする撮影機能を搭載',
          contents: [
            '人気の「フィルムシミュレーション」に全11種類のモードを搭載。写真フィルムを取り換える感覚で、様々な色再現を楽しめます ',
            'アートのような写真表現を手軽に楽しめる「アドバンストフィルター」に「クリアフィルター」を追加。全20種類のモードで写真表現の幅を広げます'
          ]
        },
        {
          subtitle: '明るい大型ワイド液晶モニターなどにより優れた操作性を発揮',
          contents: [
            '3.5インチ・縦横比16：9の大型ワイド液晶モニターを搭載。一般的なスマートフォンと同等以上のタッチレスポンス性能を備え、直感的な操作が可能',
            'モニターを自在なアングルに調整できる「バリアングル構造」を採用。「自分撮り」も簡単に行うことができます',
            '握りやすいグリップ形状を採用することで、小型軽量ながら優れたホールド性を発揮。安定した写真撮影を実現',
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
        },
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
          path: '富士フイルム x-t200',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410425345'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410425345', '4547410374278', '4549292109191', '4545350052942'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410425345',
        '4547410425062',
        '4547410425086',
        '4547410433906',
        '4547410433883',
        '4547410433890',
        '4547410425604',
        '4562131647951',
        '4562131647944',
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