<template>
  <v-app>
    <div class="sel35f14gm">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/sel35f14gm/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/sel35f14gm/sp_img_top.jpg'"
          :topTitleText="'Gマスターならではの解像力と小型軽量設計で\n多様な撮影シーンに対応するオールラウンド単焦点レンズ'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ソニー FE 35mm F1.4 GM 好評発売中！</span>
        </p>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー FE 35mm F1.4 GM [SEL35F14GM]'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/products/SEL35F14GM/'"
          :height="'50px'"
        />

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'高解像性能と美しいぼけ描写を小型・軽量設計で実現したオールラウンド大口径単焦点レンズ'" />
          <characteristic :characteristics="characteristicList" />
        </div>

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー FE 35mm F1.4 GM / ソニー Distagon T* FE 35mm F1.4 ZA 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー FE 35mm F1.4 GM / ソニー Distagon T* FE 35mm F1.4 ZA 比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="product in mainProductList" :key="product.janCode">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年2月12日</td>
                  <td>2015年6月26日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="product in mainProductList" :key="product.janCode">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>10群14枚</td>
                  <td>8群12枚</td>
                </tr>
                <tr>
                  <th>非球面レンズ（枚）</th>
                  <td>XA 2</td>
                  <td>AA 1/normal 2</td>
                </tr>
                <tr>
                  <th>EDガラス（枚）</th>
                  <td>1</td>
                  <td>非採用</td>
                </tr>
                <tr>
                  <th>最短撮影距離</th>
                  <td>AF27cm/MF25cm</td>
                  <td>30cm</td>
                </tr>
                <tr>
                  <th>最大撮影倍率</th>
                  <td>AF0.23倍/MF0.26倍</td>
                  <td>0.18倍</td>
                </tr>
                <tr>
                  <th>フォーカス駆動</th>
                  <td>XDリニアモーター</td>
                  <td>ダイレクトドライブSSM</td>
                </tr>
                <tr>
                  <th>絞り羽根（枚）</th>
                  <td>11</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th>レンズコーティング</th>
                  <td>ナノARコーティングII/フッ素コーティング</td>
                  <td>T*コーティング</td>
                </tr>
                <tr>
                  <th>フィルター径</th>
                  <td>67mm</td>
                  <td>72mm</td>
                </tr>
                <tr>
                  <th>外寸 最大径ｘ長さ (mm)</th>
                  <td>76.0×96.0</td>
                  <td>78.5 x 112.0</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約524g</td>
                  <td>約630g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 高値下取りー -->
        <subText :textItem="'ソニー FE 35mm F1.4 GM [SEL35F14GM] ご購入時、高値下取り実施中！'" id="price" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'4,300'"
          :secondAmount="'3,700'"
          :targetDate="'2021年1月19日'"
          :isCreditBtn="true"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:シャープな解像感と美しいボケ味を両立する大口径単焦点レンズ'" />
        <shasha
          :txt="'従来のGMシリーズと同様の外観で、最高級ラインナップとして申し分のないしっかりとした造りになっています。絞り環と動画撮影時に便利な絞りクリックのオンオフ切替スイッチ、AF/MF切替スイッチ、他の機能に割付可能なフォーカスホールドボタンと機能的にも充実しています。\nそしてフルサイズ用35mmF1.4としては凄く小型軽量なことに最も好感を持ちました。それではここからは実写を交えて...'"
          :href="'https://shasha.kitamura.jp/article/480408349.html'"
          :src="'/ec/images2/special/camera/feature/sony/sel35f14gm/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー FE 35mm F1.4 GM [SEL35F14GM] 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/sel35f14gm/'" :count="4" />

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
import Characteristic from '@/components/common/special/characteristic.vue';
import SubText from '@/components/common/special/subtext.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import ShaSha from '@/components/common/special/shasha.vue';

export default Vue.extend({
  name: 'sel35f14gm',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    characteristic: Characteristic,
    expensiveTradeIn: ExpensiveTradeIn,
    splitContent: SplitContent,
    shasha: ShaSha
  },
  setup: (props, context) => {
    document.title = 'ソニー FE 35mm F1.4 GM [SEL35F14GM] | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー FE 35mm F1.4 GM [SEL35F14GM] 好評発売中！！比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      characteristicList: [
        {
          subtitle: '最新の光学設計とG Masterの高い設計基準により、高解像度と小型・軽量を両立',
          contents: [
            '高性能レンズと新開発「ナノARコーティングII」で画面全域での高い解像性能とヌケの良いクリアな画質を実現',
            '小型・軽量設計で、ジンバルやグリップを使用した動画撮影にも最適'
          ]
        },
        {
          subtitle: '高い近接撮影能力と美しいぼけ味で印象的な表現が可能',
          contents: [
            'G Masterならではの柔らかく自然で美しいぼけが表現可能',
            '最大撮影倍率0.23倍（MF時は0.26倍）の高い近接撮影能力で背景を大きくぼかした印象的な撮影が可能'
          ]
        },
        {
          subtitle: '高レベルな描写をサポートするAF性能とプロの要望に応える操作性・信頼性',
          contents: [
            'XDリニアモーターを2基搭し高速・高精度・高追随かつ静粛なAF駆動を実現',
            '動画撮影時も被写体を逃さず捉え続ける高いAF性能を発揮',
            'カスタマイズ可能なフォーカスホールドボタン、フォーカスモードスイッチ、クリック切り換えもできる絞りリングなど高い操作性を実現'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'ソニー Distagon T* FE 35mm F1.4 ZA [SEL35F14Z]',
        href: 'https://www.net-chuko.com/sell/item-list.do?kindName=&makerName=&goodsname=4548736001954&ecmount=&eccolor=&ectype=&eclan=&ecundai=&eczoom=&ecwater=&ecdust=&ecfilter=&echeight=&ecpixel=&ob=&lc=40&quick=&pattern=2',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/f95/250/f2c/a74/8df/29e/89b/04d/fd9/3ad/a1f/xdd/2s8/3/L.jpg',
        txt: 'ソニー FE 35mm F1.4 GM [SEL35F14GM]',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel35f14gm/bnr_shitadori_350-130.jpg',
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
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
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
          path: 'ソニー FE 35mm F1.4 GM [SEL35F14GM]',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736123151', ' 4548736001954'],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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