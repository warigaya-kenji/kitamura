<template>
  <v-app>
    <div class="eos90d">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/eos90d/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/eos90d/sp_img_top.jpg'"
          :topTitle="'キヤノン EOS 90D'"
          :topTitleText="'有効画素数約3250万画素CMOSセンサー搭載\n最高レベルの画質と動きの速い被写体を快適に撮影できる高速性を実現'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'40px 0px 15px 30px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キヤノン EOS 90D 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">キヤノン EOS 90D</p>
        <naviBtn :naviList="naviList" :hoverColor="'grey'" :color="'#D50003'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--特徴-->
        <div id="point">
          <subText :textItem="'光学ファインダーによる最高約10コマ/秒の高速連写'" />
          <characteristic :characteristics="characteristicList1" />
          <subText :textItem="'約3250万画素CMOSセンサーとDIGIC 8による高画質を実現'" />
          <characteristic :characteristics="characteristicList2" />
          <subText :textItem="'高速連写や高速AFの性能を引き出す優れた操作性'" />
          <characteristic :characteristics="characteristicList3" />
        </div>
        <!--特徴-->

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'キヤノン EOS 90D商品購入はこちら'" :url="'/ec/pd/4549292138313'" :color="'red darken-3'" :height="'60px'" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS 90D / EOS 80D / EOS 7D MarkII / ニコン D7500比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">キヤノン EOS 90D / EOS 80D / EOS 7D MarkII / ニコン D7500比較しました</p>
            <table class="product-comparison-table spec">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年9月20日</td>
                  <td>2016年3月25日</td>
                  <td>2014年10月30日</td>
                  <td>2017年6月9日</td>
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
                  <td>約3250万画素</td>
                  <td>約2420万画素</td>
                  <td>約2020万画素</td>
                  <td>約2088万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>CMOSセンサー<br />（デュアルピクセルCMOS AF対応）</td>
                  <td>CMOSセンサー</td>
                  <td>CMOSセンサー</td>
                  <td>23.5×15.7mmサイズCMOSセンサー<br />ニコンDXフォーマット</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>
                    最高約10コマ／秒(ファインダー撮影時)<br />
                    最高約11コマ／秒(ライブビュー撮影時)
                  </td>
                  <td>最高 約7コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約8コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>RAW：約24枚<br />JPEG：約57枚</td>
                  <td>RAW：約20枚<br />JPEG：約77枚</td>
                  <td>RAW：約31枚<br />JPEG：約1090枚</td>
                  <td>RAW （ロスレス圧縮RAW/12ビット記録）：74コマ<br />JPEG：約100枚</td>
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
                  <td>ISO100-25600 (拡張51200)</td>
                  <td>ISO100-16000 (拡張25600)</td>
                  <td>ISO100-16000 (拡張51200)</td>
                  <td>ISO 100～51200<br />（拡張時50～1640000）</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>45点<br />（クロス測距点：最大45点）</td>
                  <td>45点<br />（クロス測距点：最大45点）</td>
                  <td>65点<br />（クロス測距点：最大65点）</td>
                  <td>51点<br />（クロス測距点：15点）</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>ファインダー使用時:1850枚<br />モニター使用時:約500枚</td>
                  <td>ファインダー使用時:約960枚<br />モニター使用時:約300枚</td>
                  <td>ファインダー使用時:約640枚<br />モニター使用時:約240枚</td>
                  <td>ファインダー使用時:約950コマ</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約140.7ｘ104.8ｘ76.8mm</td>
                  <td>約139.0×105.2×78.5mm</td>
                  <td>約148.6×112.4×78.2mm</td>
                  <td>約135.5×104×72.5mm</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>バリアングル3.0型<br />（タッチパネル）</td>
                  <td>バリアングル3.0型<br />（タッチパネル）</td>
                  <td>ワイド3.0型</td>
                  <td>チルト式3.2型<br />（タッチパネル）</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>100%/約0.95倍</td>
                  <td>100%/約0.95倍</td>
                  <td>100%/約1.00倍</td>
                  <td>100%/約0.94倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約619g</td>
                  <td>650g</td>
                  <td>約820g</td>
                  <td>約640g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>シングルスロット <br />UHS-I 対応</td>
                  <td>シングルスロット <br />UHS-I 対応</td>
                  <td>デュアルスロット<br />CFカード（タイプI準拠、UDMAモード7対応） SDカード(UHS-I対応)</td>
                  <td>シングルスロット <br />UHS-I 対応</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>フルHD/HD</td>
                  <td>フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：キヤノンEOS 90D レビュー | ケニアサバンナの野生動物を撮る！'" />
        <shasha
          :txt="'アフリカの大草原サバンナで野生動物を撮影するのにメインのEOS-1D X MarkIIのサブ機として連れて行きました。今までのスーパーサブ機EOS 7D MarkIIの代わりになるか？というところが注目です。  EOS80Dの後継機として登場しましたESO90Dはスペック上ではかなりの進化が見られます。連写スピードが約10コマ／秒になり、速い動きを狙う動物撮影では絶対条件である機動力が期待できます。映像エンジンDIGIC8の搭載により3250万画素という高画素数にも関わらず、ライブビュー時には最高１１コマ／秒の高速連写を実現、書き込みスピードが格段にパワーアップ。さらに、APS-Cサイズカメラでありながら常用ISO感度が25600と、フルサイズにせまる高感度性能をうたっているEOS90Dはどれだけの逸材なのか、取材に行く前から試すのが楽しみで仕方ありませんでした。…'"
          :href="'https://shasha.kitamura.jp/article/471938945.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549292138313'"
          :src="'/ec/images2/special/camera/feature/canon/eos90d/2shashabnr.jpg'"
        />
        <shasha
          :txt="'2019年8月28日、キヤノンから新しいカメラ2機種とRF用のレンズ2本が発表されました。\nボディ2機種はどちらもAPS-Cセンサーを搭載しており、1つは一眼レフカメラEOS 80Dの後継機種であるEOS 90D、もう1機種はミラーレスカメラEOS M6の後継機種であるEOS M6 MarkIIです。EOS 90Dの前モデルであるEOS 80D は発売されたのが2016年で、2機種を比較すると大きな進化を遂げていました。スペック表を見て「これは触りにいかなければ…！」と、少しでも早く使ってみたい一心で、今回も品川のキヤノンプラザに行って参りました。本編では発表となったカメラ2機種を取り上げ、次回はEOS Rで採用されている“RFレンズ”2本について紹介したいと思います。RFレンズ編が公開されましたら、是非こちらも併せてご覧ください！'"
          :href="'https://shasha.kitamura.jp/article/469262395.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549292138313'"
          :src="'/ec/images2/special/camera/feature/canon/eos90d/bnr_shasha.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'キヤノン EOS 90D 価格/人気アクセサリー/お得な情報'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <!--====== 高価下取り ======-->
        <subText :textItem="'キヤノン EOS 90Dをご購入時、キヤノン EOS80Dを高価下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'キヤノン EOS 90D 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS 90Dの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/eos90d'" :sm="'6'" />
        </div>

        <specificationsExamplesBtn :btntxt="'キヤノン EOS 90D商品購入はこちら'" :url="'/ec/pd/4549292138313'" :color="'red darken-3'" :height="'60px'" />

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
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';

export default Vue.extend({
  name: 'eos90d',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    expensiveTradeIn: ExpensiveTradeIn,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular
  },
  setup: (props, context) => {
    document.title = '新製品！キヤノン EOS 90D | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS 90D 発売中！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList1: [
        {
          subtitle: '',
          contents: [
            '視野率約100％の光学ファインダーにより、リアルタイムに被写体の確認が可能',
            '動く被写体に対しても優れた追従性能を発揮する「オールクロス45点AF」を採用',
            'ライブビュー撮影時に加えて光学ファインダーでも活用できる「流し撮りアシスト」機能を搭載'
          ]
        }
      ],
      characteristicList2: [
        {
          subtitle: '',
          contents: [
            'キヤノンのAPS-CサイズCMOSセンサー搭載のデジタルカメラにおいて、最高となる有効画素数約3250万画素のCMOSセンサー搭載',
            '加えてDIGIC 8の組み合わせにより、ノイズの少ない高い解像感を実現',
            '静止画撮影時に、最高ISO25600の常用ISO感度（拡張時：51200相当）を実現。室内や夜景などの暗いシーンでも高画質な撮影が可能'
          ]
        }
      ],
      characteristicList3: [
        {
          subtitle: '',
          contents: [
            '現行機種でも好評のAFフレーム選択などの各種設定がより直感的に行える「マルチコントローラー」を搭載',
            'シャッターボタンは、上位機種に搭載されている機構を採用。より直感的なレリーズ感覚をサポート',
            'EOS 80Dと同じバッテリーグリップ「BG-E14」（別売り）に対応。縦位置で撮影する際も、より安定した姿勢での撮影が可能'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'EOS 90D',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=EOS%2080D%20%E3%83%9C%E3%83%87%E3%82%A3&_ga=2.37172640.16120489.1628554499-279164427.1627285160&pattern=1',
        nameImg: '/ec/images2/special/camera/feature/canon/eos90d/img_1.jpg',
        txt: 'EOS 90D',
        tradeInImg: '/ec/images2/special/camera/feature/canon/eos90d/bnr_shitadori_350-130.jpg',
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
          path: 'キヤノン EOS 90D',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759904485', '4960759904515'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292138313', '4549292060935', '4549292001617', '4960759149084'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292138313', '4549292138436', '4960999981000', '4549292087864', '4960999669304', '4960999581354'],
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