<template>
  <v-app>
    <div class="highly_recommended-2020-4541">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />
        <h1 class="text-h6 font-weight-bold">おすすめ！かわいいカメラストラップ！サクラスリングプロジェクト</h1>
        <!-- ↓top image -->
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/highly_recommended/2020/4541/bg_top.jpg'
              : '/ec/images2/special/general/highly_recommended/2020/4541/sp_img_top.jpg'
          "
          max-width="100%"
          height="auto"
        ></v-img>
        <h2 class="text-body-2">かわいいカメラストラップです。ミラーレスカメラ・一眼レフにおすすめ</h2>

        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          カメラ女子にも、プレゼントにもおすすめ！スカーフみたいなカメラストラップ「サクラスリングプロジェクト」幅広いスカーフ生地がアイテムの重さを分散させるから、不思議とアイテムが軽く感じます。ミラーレス・一眼レフユーザーの方にイチオシです
        </v-sheet>

        <!-- ↓ 目次版ナビメニューを表示したい場合 -->
        <tableOfContentsNavi :naviList="naviList" />

        <subText :textItem="'おすすめの理由その１'" id="r00" />
        <p class="px-5 pb-5">
          おしゃれで、かわいい！上に、機能的なカメラストラップ。<br />
          柔らかくて大きいストール状の生地でできたSAKURAカメラスリングは、かけた時にカメラの重さを分散させ、首や肩にかかる負担を軽減してくれます。ミラーレスカメラや一眼レフユーザーにおすすめです
        </p>

        <subText :textItem="'おすすめの理由その2'" id="r01" />
        <p class="px-5 pb-5">
          デザイン（柄）もとても豊富です。<br />
          明るくて、かわいいデザイン柄はもちろん、男性にもおすすめシック・シンプルな柄もあります！<br />
          写真・カメラ好きな方へのプレゼントにも最適です
        </p>

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：「上着脱いだらカメラが重い！」にはサクラスリングがベストアイテム！'" id="r02" />
        <shasha
          :txt="'分厚いコートを脱いで軽装でのお出かけ。 「軽やかにいこう！」といつものカメラを身につけた時にふと、感じませんでしたか？ 「いつもよりカメラが重たい。。。。」 そう。軽装になった分、薄着の洋服の上にカメラのストラップが食い込む感じはカメラ愛好家の皆さんなら一度は体感している事だと思います。「重くて辛い！」と慢性的な肩こりに悩まれているカメラユーザーも多く見られます。・・・・'"
          :href="'https://shasha.kitamura.jp/article/466179925.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4549292152272'"
          :src="'/ec/images2/special/general/highly_recommended/2020/4541/shashabnr.png'"
        />

        <!-- ↓ 商品一覧 -->
        <subText :textItem="'デザインも豊富！サクラスリングプロジェクト商品一覧'" id="r03" />
        <priceAndPopular :productDetailList="productDetailList" />

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
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
export default Vue.extend({
  name: 'highly_recommended-2020-4541',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    kitamuraService: KitamuraService,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    tableOfContentsNavi: TableOfContentsNavi,
  },
  setup: () => {
    document.title = 'スタッフイチオシ！サクラスリング | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフイチオシ！おすすめ！かわいいカメラストラップ！サクラスリングプロジェクト')

    const state = reactive({
      naviList: [
        { naviItem: 'おすすめの理由その１', href: '#r00' },
        { naviItem: 'おすすめの理由その２', href: '#r01' },
        { naviItem: 'ShaSha：「上着脱いだらカメラが重い！」にはサクラスリングがベストアイテム！', href: '#r02' },
        { naviItem: '関連商品一覧', href: '#r03' }
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
          path: 'かわいいカメラストラップ！サクラスリングプロジェクト ・アクセサリー',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4589483083800',
        '4589483083817',
        '4589483081646',
        '4589483081653',
        '4589483083923',
        '4589483083930',
        '4589483083824',
        '4589483083831',
        '4589483083787',
        '4589483083794',
        '4589483083657',
        '4589483083664',
        '4589483083534',
        '4589483083152',
        '4589483083169',
        '4589483083398',
        '4589483083404',
        '4589483083091',
        '4589483083107',
        '4589483081387'
      ],
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
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