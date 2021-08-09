<template>
  <v-app>
    <div class="k-3mk3">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/feature/pentax/k3mk3/'" />

        <!-- ↓ 画像の読み込み -->
        <div class="newproduct top-bg-img">
          <h1 class="top-title">
            ペンタックス K-3 Mark III
            <p>最高ISO感度160万の超高感度性能を実現した<br />ボディ内手ぶれ補正機構搭載一眼レフ</p>
          </h1>
        </div>
        <!-- ↑ 画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中!</span>
        </div>

        <div class="darken-2 text-left">
          <span>ペンタックス K-3 Mark III</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="/ec/special/camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'APS-Cフラッグシップデジタル一眼レフカメラ「PENTAX K-3 MarkIII」'" />
        <p class="text-h6 font-weight-bold">高い基本性能とPENTAX STATEMENTを体現するこだわりの機能を小型堅牢ボディに凝縮</p>

        <!-- ↓ 価格・ご購入 -->
        <subText :textItem="'ペンタックス K-3 Mark III 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ キタムラなら最大48回 -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-row class="mb-10" v-if="mainProductList.length !== 0">
          <v-col class="text-center" cols="4">
            <router-link :to="`/ec/pd/${mainProductList[0].janCode}`"
              ><v-img
                src="//shopimg.kitamura.jp/images/pd/023/337/b9e/0e4/c06/996/cb6/43d/afe/a53/ffh/2fb/9fd/2/M.jpg"
                class="hover"
                width="80%"
                height="auto"
              ></v-img
            ></router-link>
            <br />
            ペンタックス K-3 MarkIII ボディキット ブラック<br /><span class="red--text">{{ mainProductList[0].price }}</span
            >円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年4月23日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'5,247'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10" v-if="mainProductList.length !== 0">
          <v-col class="text-center" cols="4">
            <router-link :to="`/ec/pd/${mainProductList[2].janCode}`"
              ><v-img
                src="//shopimg.kitamura.jp/images/pd/afa/8a8/731/90f/bf1/9d4/180/f98/078/4f4/f29/7lw/dus/w/M.jpg"
                class="hover"
                width="80%"
                height="auto"
              ></v-img
            ></router-link>
            <br />
            ペンタックス K-3 MarkIII ブラックプレミアムキット<br /><span class="red--text">{{ mainProductList[2].price }}</span
            >円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2021年4月23日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'5,997'" :commission="'0'" />
            <div class="text-center">
              <v-btn width="80%" color="#E53935" class="white--text font-weight-bold" href="/sitemap/s_credit_01.html">
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- ↓ 動画で見る -->
        <watchInVideo :src="'https://www.youtube.com/embed/dopCJI1fptc?rel=0'" />

        <!--比較-->
        <subText :textItem="'ペンタックス K-3 MarkIII / K-1 MarkII / ニコン D500 / キヤノン EOS 90D 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">ペンタックス K-3 MarkIII / K-1 MarkII / ニコン D500 / キヤノン EOS 90D を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="product in comparisonDetailList" :key="product.janCode">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年4月23日発売</td>
                <td>2018年4月20日</td>
                <td>2016年4月28日</td>
                <td>2019年9月20日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="product in comparisonDetailList" :key="product.janCode">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約2573万画素</td>
                <td>約3640万画素</td>
                <td>約2088万画素</td>
                <td>約3250万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>APS-CサイズCMOSセンサー</td>
                <td>35mmフルサイズCMOSセンサー</td>
                <td>APS-CサイズCMOSセンサー<br />（ニコンDXフォーマット）</td>
                <td>APS-CサイズCMOSセンサー</td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>最高約12コマ/秒</td>
                <td>フルサイズ時：最高約4.4コマ/秒<br />APS-Cサイズ時：最高約6.4コマ/秒</td>
                <td>最高約10コマ/秒</td>
                <td>最高約10コマ/秒<br />※ライブビュー撮影時 最高約11コマ/秒</td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>1/8000秒～30秒、バルブ</td>
                <td>1/8000秒～30秒、バルブ</td>
                <td>1/8000秒～30秒、バルブ、Time</td>
                <td>1/8000秒～30秒、バルブ</td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>ISO 100～1600000</td>
                <td>ISO 100～819200</td>
                <td>ISO 100～51200<br />（拡張時：50～1640000相当）</td>
                <td>ISO 100～25600<br />（ISO51200相当の感度拡張が可能）</td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>約100％</td>
                <td>約100％</td>
                <td>約100％</td>
                <td>約100％</td>
              </tr>
              <tr>
                <th>視野率/倍率</th>
                <td>約1.05倍</td>
                <td>約0.70倍</td>
                <td>約1.0倍</td>
                <td>約0.95倍</td>
              </tr>
              <tr>
                <th>液晶モニター</th>
                <td>3.2型/約162万ドット<br />TFTカラーLCD</td>
                <td>3.2型/約103.7万ドット<br />フレキシブルチルト式TFTカラーLCD</td>
                <td>3.2型/約236万ドット<br />チルト式TFT</td>
                <td>ワイド3.0型/約104万ドット<br />バリアングル式TFT</td>
              </tr>
              <tr>
                <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
                <td>約800枚</td>
                <td>約670枚</td>
                <td>約1240枚</td>
                <td>約1860枚</td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>5軸・5.5段</td>
                <td>5軸・5段</td>
                <td>レンズ式手振れ補正のみ</td>
                <td>レンズ式手振れ補正のみ</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>約134.5×103.5×73.5 mm</td>
                <td>約136.5×110×85.5 mm</td>
                <td>約147×115×81 mm</td>
                <td>約140.7×104.8×76.8 mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>約735g</td>
                <td>約925g</td>
                <td>約760g</td>
                <td>約619g</td>
              </tr>
              <tr>
                <th>カードスロット</th>
                <td>デュアルスロット<br />SDメモリーカード（スロット1：UHS-II規格対応）</td>
                <td>デュアルスロット<br />SDメモリーカード（UHS-I規格対応）</td>
                <td>ダブルスロット<br />XQDカード、SDメモリーカード（UHS-II規格対応）</td>
                <td>シングルスロット<br />SDメモリーカード（UHS-II規格対応）</td>
              </tr>
              <tr>
                <th>動画記録方式</th>
                <td>4K/フルHD</td>
                <td>フルHD/HD</td>
                <td>4K/フルHD/HD</td>
                <td>4K/フルHD/HD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'PENTAX K-3Mark III の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <div class="col-sm-12 text-center pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7 my-10"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('http://www.ricoh-imaging.co.jp/japan/products/new_aps-c_dslr/')"
            >メーカーサイトで<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!-- ↓ サンプル：ShaSha -->
        <div class="product-shasha mb-5">
          <h2 class="title mb-2 font-weight-bold">ShaSha:ペンタックス K-3 Mark III レビュー</h2>
          <v-card class="product-shasha-wrap pa-4" outlined>
            PENTAX（ペンタックス）ブランドのAPS-C一眼レフ フラッグシップ機K-3 Mark IIIがいよいよ登場します。
            CP+2021もオンライン開催であったため実際に機材に触れることができなかったこともあり、「待ちに待った！」と私も声をあげて喜びたいほど期待度の高いK-3
            Mark III。多機能、高性能な本機で撮影した感触をいち早く皆さんにお届けしたいと...<a
              class="product-shasha-link"
              href="https://shasha.kitamura.jp/article/480653303.html "
              target="_blank"
              >続きを読む <img src="/ec/images2/special/camera/feature/pentax/shashabnr.jpg" alt="イメージ" class="product-shasha-img mt-4"
            /></a>
          </v-card>
        </div>
        <!-- ↑ サンプル：ShaSha -->

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'キヤノン RF400mm F2.8 L IS USM / RF600mm F4 L IS USM 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ 外観画像ー-->
        <subText :textItem="'ペンタックス K-3 Mark III 外観画像'" />
        <p class="text-subtitle-1">ペンタックス K-3 Mark III の外観画像</p>
        <v-container>
          <v-row>
            <v-col v-for="n in 5" :key="n" cols="12">
              <v-img :src="`/ec/images2/special/camera/feature/pentax/k-3mk3/img_${n}.jpg`" max-width="100%" height="auto"> </v-img>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPopular from '@/components/common/price-and-popular.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/subtext.vue';
import NaviBtn from '@/components/common/navi-btn.vue';
import Characteristic from '@/components/common/characteristic.vue';
import ContingencyTable from '@/components/common/contingency-table.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
export default Vue.extend({
  name: 'k-3mk3',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    contingencyTable: ContingencyTable,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '視野率約100％・ファインダー倍率約1.05倍の光学ファインダー搭載一眼レフ',
          contents: [
            '「PENTAX K-3II」と比較して約10%明るさがアップした新開発の高屈折率ガラスペンタプリズムを採用。アイレリーフを確保しつつ、フルサイズ機に匹敵する大きな視野を実現',
            'フォーカシングスクリーンには、マニュアルフォーカス時のピント合わせのしやすさで定評あるナチュラルブライトマットIIIを採用。ボケ味の再現性にも優れた高品位な見え味を実現',
            'さまざまな撮影情報を画面上に表示させることが可能な透過型ファインダー内表示を採用し、さまざまな撮影情報がファインダーで確認可能'
          ]
        },
        {
          subtitle: '有効約2573万画素の高精細画像と最高ISO感度160万の超高感度性能を実現',
          contents: [
            'ローパスフィルターレス仕様の裏面照射型CMOSイメージセンサーを新採用。APS-Cサイズ相当で有効約2573万画素の高精細な画像を実現',
            '新開発の高性能画像処理エンジン「PRIMEV」「アクセラレーターユニットII」を搭載。低感度域から超高感度域まで高い解像感を維持しながら、徹底的にノイズを抑えた高画質画像を実現',
            '高感度ノイズの低減処理性能を飛躍的に高めることで、最高ISO感度160万の超高感度性能を実現し、撮影可能領域を大幅に拡大'
          ]
        },
        {
          subtitle: '5軸・5.5段の高性能手ぶれ補正機構「SR II」採用。装着可能な全てのレンズで手ぶれを効果的に補正',
          contents: [
            '5軸・5.5段の高性能手ぶれ補正機構「SR II」採用。装着可能な全てのレンズで手ぶれを効果的に補正',
            '真の解像力を引き出した超高精細な画像が得られる、イメージセンサーユニットを1画素ずつ微細にずらしながら4回撮影した画像を1枚の画像に合成する超解像技術「リアル・レゾリューション・システム」を搭載',
            '光学ローパスフィルターと同様のモアレ軽減効果が得られる「ローパスセレクター」機能には効果の「ON/OFF」や「強弱」の選択が可能。偽色・モアレの発生を大幅に軽減可能'
          ]
        }
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ]
    };
  },
  methods: {
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'ペンタックス K-3 Mark III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549212302336', '4549212302565', '4549212303043'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549212302336',
        '4549212302565',
        '4549212303043',
        '4549212302664',
        '4549212302527',
        '4549212214042',
        '4549212213694',
        '4961333057955',
        '4549212276804',
        '4549212301254',
        '4549212296642',
        '4549212273728',
        '4549212273742',
        '4549212274756',
        '4549212274749',
        '4523052022722'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----
      // ↓ ---- 比較 ----
      // 取得するJancode
      comparisonJanCodeList: ['4549212302336', '4549212299896', '4960759146441', '4549292138313'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>
      // ↑ ---- 比較 ----
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
        // 比較
        state.comparisonDetailList = [] as Array<ProductDetail>;
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

<style lang="scss" scoped>
.top-bg-img {
  background-image: url(https://shop.kitamura.jp/ec/images2/special/camera/feature/pentax/k-3mk3/bg_top.jpg);
}

h1.top-title {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 190px 0px 15px 30px;
  color: #ffffff;
  font-size: 115%;
  font-weight: bold;
}

h1.top-title p {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 0px 0px;
  color: #ffffff;
  font-size: 100%;
  font-weight: 400;
}

// サンプル：ShaSha
.product-shasha {
  &-wrap {
    background: #f8fbd1;
  }

  &-link:hover {
    img {
      opacity: 0.7;
    }
  }
}
</style>