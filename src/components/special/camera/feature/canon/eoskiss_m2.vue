<template>
  <v-app>
    <div class="eoskissm2">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/eoskissm2/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/eoskissm2/sp_img_top.jpg'"
          :topTitle="'キヤノン'"
          :topTitleText="'AF機能と動画機能を強化した\n新型ミラーレス「EOS Kiss M2」'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キヤノン EOS Kiss M2 好評発売中！</span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>キヤノン EOS Kiss M2 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'小型・軽量と高性能を両立。AF機能と動画機能を強化した新型ミラーレス「EOS Kiss M2」'" />
        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'キヤノン EOS Kiss M2 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'" :url="'https://cweb.canon.jp/eos/lineup/kissm2/'" :height="'70px'" />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'キヤノン EOS Kiss M2特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS Kiss M2 / EOS Kiss M / ソニー α6400 / ニコン Z 50 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">キヤノン EOS Kiss M2 / EOS Kiss M / ソニー α6400 / ニコン Z 50 比較</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年11月27日</td>
                  <td>2018年3月23日</td>
                  <td>2019年2月22日</td>
                  <td>2019年11月22日</td>
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
                  <td>約2410万画素</td>
                  <td>約2410万画素</td>
                  <td>約2420万画素</td>
                  <td>約2088万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    22.3×14.9mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    22.3×14.9mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    23.5x15.6mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    23.5×15.7mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約11コマ/秒</td>
                  <td>最高 約11コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～25600</td>
                  <td>100～25600</td>
                  <td>100～32000</td>
                  <td>100～51200</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.39型/約236万ドット</td>
                  <td>0.39型/約236万ドット</td>
                  <td>0.39型/約236万ドット</td>
                  <td>0.39型/約236万ドット</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    ワイド3.0型/約104万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    ワイド3.0型/約104万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    ワイド3.0型/約92万ドット<br />
                    チルト式
                  </td>
                  <td>
                    3.2型/約104万ドット<br />
                    チルト式
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    静止画:約250枚<br />
                    動画:約85分
                  </td>
                  <td>
                    静止画:約235枚<br />
                    動画:約85分
                  </td>
                  <td>
                    静止画:約360枚<br />
                    動画:約70分
                  </td>
                  <td>
                    静止画:約280枚<br />
                    動画:約75分
                  </td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>レンズ手ブレ補正</td>
                  <td>レンズ手ブレ補正</td>
                  <td>レンズ手ブレ補正</td>
                  <td>レンズ手ブレ補正</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>116.3×88.1×58.7mm</td>
                  <td>116.3×88.1×58.7mm</td>
                  <td>約120.0x66.9x59.7mm</td>
                  <td>約126.5×93.5×60mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約350g</td>
                  <td>約351g</td>
                  <td>約359g</td>
                  <td>約395g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)<br />
                    メモリースティックデュオ
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS Kiss M2 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 36回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大36回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :maximumInstallmentPayment="'36'"
            :numberOfTimes="'36'"
            :amount="'3,163'"
            :targetDate="'2020年10月14日'"
            :isCreditBtn="true"
          />
        </div>
        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'キヤノン EOS Kiss M2 外観画像'" />
          <p class="text-subtitle-1">キヤノン EOS Kiss M2の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/canon/eoskissm2'" :sm="'6'" />
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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: 'canon-eoskissm2',
  components: {
    appearanceImage: AppearanceImage,
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    priceAndPurchase: PriceAndPurchase,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = '新製品！キヤノン EOS Kiss M2 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS Kiss M2 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: '進化した瞳AFで、写真でも動画でも撮り逃したくない表情を簡単に撮影できます',
          contents: [
          ]
        },
        {
          subtitle: 'タッチパネル対応。自分撮りも簡単にできるバリアングル液晶モニター採用で、いろいろな角度からの撮影が楽しめます',
          contents: [
          ]
        },
        {
          subtitle: 'シャッターの音がしないサイレントシャッターモード搭載で、子どもの寝顔も演奏会や発表会も安心して撮影できます',
          contents: [
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
          href: '/ec/special/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
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
          path: 'キヤノン EOS Kiss M2',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292176346', '4549292176353', '4549292180008', '4549292176339'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292176292', '4549292109184', '4548736092044', '4960759903617',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292176346',
        '4549292176346',
        '4549292176346',
        '4549292176346',
        '4549292176346',
        '4549292176346',
        '4549292176346',
        '4549292176346'
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

<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
}
</style>
