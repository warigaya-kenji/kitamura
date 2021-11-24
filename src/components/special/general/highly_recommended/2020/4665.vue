<template>
  <v-app>
    <div class="highly_recommended-2020-4665">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <h1 class="text-h6 font-weight-bold">小型軽量！大口径単焦点レンズの新定番 サムヤン AF 45mm F1.8 FE</h1>
        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4665/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4665/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>
        <h2 class="text-body-2">小型軽量でも絞り開放からはっきりとした高いシャープネス</h2>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'サムヤン AF 45mm F1.8 ソニーFE用'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'小型軽量でも絞り開放からはっきりとした高いシャープネス。\n軽量コンパクトで開放F値が1.8の、ソニーフルサイズEマウン\nト用単焦点レンズが欲しい方におすすめ'"
          :btntxt="'商品ページを見る'"
        />

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          小型軽量でも絞り開放からはっきりとした高いシャープネス。<br />
          軽量コンパクトで開放F値が1.8の、ソニーフルサイズEマウント用単焦点レンズが欲しい方におすすめ
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">フルサイズEマウントに対応していながらも、重量は約162gと非常に軽量です。</p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          軽量コンパクトながらもAFが使えます！<br />
          開放F値が1.8なのでより大きなボケ感を出すことができ、常用レンズとして持っておきたいレンズです。
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'サムヤン AF 45mm F1.8 FE と他レンズと比較してみました'" />
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
                    <v-img
                      :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                      :max-width="$vuetify.breakpoint.mdAndUp ? '220' : '83'"
                      height="auto"
                      class="mx-auto"
                    ></v-img>
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
                  <td>49mm</td>
                  <td>55mm</td>
                  <td>49mm</td>
                </tr>
                <tr>
                  <th>質量</th>
                  <td>約162g</td>
                  <td>約215g</td>
                  <td>約186g</td>
                </tr>
                <tr>
                  <th>長さ</th>
                  <td>約56.1mm</td>
                  <td>約46.2mm</td>
                  <td>約59.5mm</td>
                </tr>
                <tr>
                  <th>レンズ構成</th>
                  <td>6群7枚</td>
                  <td>7群8枚</td>
                  <td>5群6枚</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】35mmレンズより周辺部の歪みが少なく、50mmレンズより広い画角で撮影でき、多様なテーマの写真に幅広く対応...<router-link
                      to="/ec/pd/8809298885922"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】あらゆるシーンで楽しめる美しいボケと描写。開放時にはクラシカルともいえる柔らかなボケ味を楽しめる一方で、絞り込めば...<router-link
                      to="/pd/0085126360658"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】コンパクトなα7シリーズにマッチする、携帯性に優れた小型軽量デザイン。非球面レンズを使用した新規光学設計により高画質を...<router-link
                      to="/pd/4548736033078"
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
        <subText :textItem="'ShaSha：小型軽量！大口径標準レンズの新定番「SAMYANG AF 45mm F1.8 FE」'" id="r03" />
        <shasha
          :txt="'今回ご紹介する SAMYANG AF 45mm F1.8 FE は、最新の35mm判フルサイズのミラーレス一眼ソニー Eマウントに対応しながら、大きさは約61.8mm×56.1mmで、質量は約162gと小型軽量の大口径標準レンズです。光学性能を追求するとレンズは基本的に大きく、重くなり、その結果として・・・・'"
          :href="'https://shasha.kitamura.jp/article/470402848.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=8809298885922'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4665/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'キヤノン RF15-35mm F2.8 L IS USM おすすめアクセサリー関連商品一覧'" id="r04" />
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
  name: 'highly_recommended-2020-4665',
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
    document.title = 'スタッフイチオシ！サムヤン AF 45mm F1.8 FE | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！SAMYANG AF 45mm F1.8 FE は小さくて軽い！ソニーαシリーズをお持ちなら、常用レンズとしておすすめします。')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その２', href: '#r01' },
        { naviItem: 'サムヤン AF 45mm F1.8 FE と他レンズと比較してみました', href: '#r02' },
        { naviItem: 'ShaSha：小型軽量！大口径標準レンズの新定番「SAMYANG AF 45mm F1.8 FE」', href: '#r03' },
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
          path: 'スタッフイチオシ！サムヤン AF 45mm F1.8 FE',
          disabled: true
        }
      ],
      mainProductJanCode: ['8809298885922'],
      mainProductList: [] as Array<ProductDetail>,
      comparisonJanCodeList: ['8809298885922', '0085126360658', '4548736033078'],
      comparisonDetailList: [] as Array<ProductDetail>,
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