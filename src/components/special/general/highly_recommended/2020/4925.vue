<template>
  <v-app>
    <div class="highly-recommended-2020-4925">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="text-h6 font-weight-bold">開放F2.8とズーム全域での高画質な写りを兼ねそろえたソニーフルサイズミラーレス用高倍率ズームレンズ</h1>

        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4925/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4925/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <h2 class="text-body-2">夜の街中撮りも万能！</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'タムロン 28-200mm F/2.8-5.6 Di III RXD ソニーEマウント用（Model A071）'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'撮影時、荷物をできるだけ少なくしたいソニー αユーザーや、レンズ交換をする余裕のない被写体を撮影するソニー αユーザーにおすすめです！'"
          :btntxt="'商品を見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          1本で広角から望遠までカバーする、フルサイズミラーレス用オールマイティレンズ。<br />
          高倍率ズームレンズとしては初めてとなる広角側 F値2.8からの明るさと、質量575g軽量コンパクトボディで「高画質」と「便利」を両立。<br />
          旅行時、このレンズだけで様々な被写体に対応が可能です。
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          持ち運びしやすい軽量レンズでありながら、広角から望遠までをカバーする焦点距離と、高い近接撮影能力で、あらゆるシチュエーションに対応できるレンズです。
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">広角側でF2.8から使用できる明るさと、ズーム全域での高い描写性能で、これまでの高倍率ズームとは一線を画した美しさを実現しました。</p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'タムロン 28-200mm F/2.8-5.6 Di III RXD と他のレンズを比較してみました'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">
                    {{ product.itemName }}
                  </td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, i) in comparisonDetailList" :key="i">
                    <v-img :src="product.images[0].imagePath.replace(/TN/g, 'M')" max-width="174" height="auto"></v-img>
                  </td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>フィルターサイズ</th>
                  <td>67mm</td>
                  <td>62mm</td>
                  <td>67mm</td>
                  <td>72mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>575g</td>
                  <td>460g</td>
                  <td>約540g</td>
                  <td>約780g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>117mm</td>
                  <td>約96.7mm</td>
                  <td>約96mm</td>
                  <td>約118.5mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>14群18枚</td>
                  <td>13群17枚</td>
                  <td>15群19枚</td>
                  <td>12群17枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】高倍率ズームとしては初めて広角端28mm、開放2.8の明るさを実現。ズーム中間域の開放F値は50mm:F3.5、100mm:F5。150mm、望遠端200mmにおいても...<router-link
                      to="/ec/pd/4960371006703/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】ミラーレス一眼カメラ ソニー
                    NEXシリーズ「Eマウント」専用レンズ。広角18mmから望遠200mm（35mm換算：27-300mm）までの広い...<router-link to="/ec/pd/4960371005621/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】最短撮影距離0.49m 最大撮影倍率1:3.5でマクロ撮影可能。小型化を図りつつ光学を一新し高画質化/小型化を実現...<router-link
                      to="/ec/pd/4960371005713/"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】広角24mmから望遠240mmまで幅広い撮影領域をカバーする35mmフルサイズ対応の光学10倍ズームレンズ。手ブレしやすい望遠撮影時もしっかり手ブレを...<router-link
                      to="/ec/pd/4548736002012/"
                      >続きを読む</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：スタッフイチオシ！日常と旅をこれ一本で。タムロン 28-200mm F/2.8-5.6 Di III RXD レビュー'" id="r03" />
        <shasha
          :txt="'自転車や旅をテーマに雑誌の編集などをしながら仕事、プライベート問わずに写真を撮っている僕は、最高の写真を撮るために最良の機材を選ぶという選択とは少し異なる機材セレクトをしています。そんな僕が日々試行錯誤している「機材の重量と写真の良さ」について両立して・・・・'"
          :href="'https://shasha.kitamura.jp/article/477226708.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4960371006703'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4925/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="mainProductList" />

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
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
export default Vue.extend({
  name: 'highly-recommended-2020-4925',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    priceAndPurchase: PriceAndPurchase,
    tableOfContentsNavi: TableOfContentsNavi,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！タムロン 28-200mm F/2.8-5.6 Di III RXD | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！日常と旅をこれ一本で。タムロン 28-200mm F/2.8-5.6 Di III RXD のご紹介')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その2', href: '#r01' },
        { naviItem: 'タムロン 28-200mm F/2.8-5.6 Di III RXD と他のレンズを比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：日常と旅をこれ一本で。タムロン 28-200mm F/2.8-5.6 Di III RXD レビュー', href: '#r03' },
        { naviItem: '商品一覧', href: '#r04' }
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
          path: 'スタッフのイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'タムロン 28-200mm F/2.8-5.6 Di III RXD',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960371006703'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960371006703', '4960371005621', '4960371005713', '4548736002012'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
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