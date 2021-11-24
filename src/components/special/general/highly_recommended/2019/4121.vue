<template>
  <v-app>
    <div class="4121">
      <div class="main-contents-wrap text-body-2">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">初心者・入門編のカメラ女子におすすめカメラ</h1>
        <router-link to="ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2019/4121/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>
        <p class="pt-4">カメラ初心者にSONY α6400がおすすめの理由をご紹介</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'初心者・入門編のカメラ女子におすすめカメラ ソニー α6400 高倍率ズームレンズキット'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <div class="mt-8 pa-4">
          <!-- ↓ トピック -->
          <subText :textItem="'トピック＆まとめ'" />
          <v-sheet color="#F8FBD1" class="pa-5">
            α6400はオート機能や、チルトモニターがあるためデジカメ初心者にも使いやすく、初心者からハイエンドユーザーまで虜にすること間違いなし！
            スマホにもダイレクトで接続できるので、撮ったその場でSNSに投稿やシェアが簡単に出来ます。
            チルトモニターで自撮りも出来るので、初めてカメラを持つ女性にもおすすめです♪
          </v-sheet>

          <!-- ↑ トピック -->
        </div>

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓おすすめ理由１ -->
        <subText :textItem="'おすすめの理由１：小型軽量！手が小さい方でも握りやすいグリップ'" id="no1" />
        <p class="my-2 pa-2">
          α6400のグリップは握りこみやすく、長時間持っていても疲れない設計になっています。
          手が小さい方でも握りやすいのでカメラが軽く感じるため、女性の方にも安心してお使いいただけます。
        </p>
        <v-row>
          <v-col cols="12" sm="6">
            <v-img
              src="/ec/images2/special/general/highly_recommended/2019/4121/IMG_2353.JPG"
              alt="ソニーSONY α6400 作例 "
              max-width="100%"
              max-height="auto"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              src="/ec/images2/special/general/highly_recommended/2019/4121/IMG_2352.JPG"
              alt="ソニーSONY α6400 作例 "
              max-width="100%"
              max-height="auto"
            ></v-img>
          </v-col>
        </v-row>
        <!-- ↓おすすめ理由２ -->
        <subText :textItem="'おすすめの理由2：α6400最大の魅力、高速AFと瞳AF'" id="no2" />
        <p class="my-2 pa-2">
          α6400の最大の魅力であるオートフォーカス機能。 瞳AFの先駆けであるSONYの技術が集約されており、人物のみならず動物の瞳AFにも対応しています。※
          メーカーサイトにもあるように、高密度425点全面位相差検出AFセンサーと、高速レスポンス、「高密度AF追従テクノロジー」搭載で、高いAF精度と動体追随性能を実現。
          複雑な動きで捕捉が難しい動体でも、より高速に、より精度高く捉えつづけます。 ＊
          ソフトウェアアップデートVer.2.0以降で対応。人物と動物ではモードの切り換えが必要です。すべての動物が対象ではありません
        </p>
        <v-row>
          <v-col cols="12">
            <v-img
              src="/ec/images2/special/general/highly_recommended/2019/4121/y_ILCE-6400_img_02.jpg"
              alt="ソニーSONY α6400 作例"
              max-width="600"
              max-height="auto"
              class="mx-auto"
            ></v-img>
          </v-col>
        </v-row>

        <!-- ↓おすすめ理由３ -->
        <subText :textItem="'おすすめの理由3：オートで簡単綺麗に撮れる！幅広いダイナミックレンジ'" id="no3" />
        <p class="my-4 pa-6">
          写真を撮る際も、α6400はカメラの難しい設定などを覚える必要はありません。 初心者～中級者向けに、オートで綺麗に撮れるようになっています。
          自動で最適な設定に合わせてくれるオートモードや、シーンを選ぶと自動で設定をしてくれるSCN(シーンセレクションモード）など
          充実の機能で、テンポよく撮影することができます
        </p>
        <v-row>
          <v-col cols="12" sm="6">
            <v-img
              src="/ec/images2/special/general/highly_recommended/2019/4121/IMG_2355.JPG"
              alt="ソニーSONY α6400 作例 "
              max-width="100%"
              max-height="auto"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              src="/ec/images2/special/general/highly_recommended/2019/4121/IMG_2354.JPG"
              alt="ソニーSONY α6400 作例"
              max-width="100%"
              max-height="auto"
            ></v-img>
          </v-col>
        </v-row>
        <!-- ↓おすすめ理由4 -->
        <subText :textItem="'追加レンズを買うときは「OSS」表記があるレンズを選びましょう！'" id="no4" />
        <p class="my-4 pa-6">
          α6400は、ボディ内に手ブレ補正機能がないため、手ブレ補正機能付きレンズを選ばないと手ブレしやすいというところ。
          もちろん最初からついているレンズキットは手ブレ補正機能がついているのですが、 追加でレンズを買うときは注意が必要。
          レンズの品番に「OSS」という表記があるものを選べば大丈夫です。
        </p>
        <div :class="$vuetify.breakpoint.mdUndUp ? 'w50 mx-auto' : ''">
          <v-btn
            block
            color="#ff0000"
            dark
            height="52"
            href="/ec/list?narrow18=0&keyword=OSS&category=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&r=https://shop.kitamura.jp/special/sale-fair/general/highly_recommended/2019/4121/&index=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&searchbox=1&sort=number20%2CNumber17%2CScore&s1%5B%5D=%E3%82%BD%E3%83%8B%E3%83%BC&q=OSS&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA"
            ><span class="white--text">対象レンズ一覧はこちらをチェック</span>
          </v-btn>
        </div>
        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'α6400商品・関連商品一覧'" id="no5" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!-- ↓ 48回まで分割を表示したい場合 -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！ショッピングクレジットで上手に買い物！'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[0]"
          :amount="'3,024'"
          :targetDate="''"
          :isMax60Txt="true"
          :isCreditBtn="true"
        />
        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'初心者・入門編のカメラ女子におすすめカメラ ソニー α6400 高倍率ズームレンズキット'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" :isConsultationOrder="true" />
        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集を表示したい場合 -->
        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SubText from '@/components/common/special/subtext.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';


export default Vue.extend({
  name: '4121',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'カメラ初心者にSONY α6400がおすすめの理由をご紹介 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'カメラ初心者にSONY α6400がおすすめの理由をご紹介')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: 'カメラ初心者にSONY α6400がおすすめの理由をご紹介 ',
          disabled: true
        }

      ],
      // ↓ ---- 話題の新製品バックナンバー＆おすすめの特集 ----
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4722',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
        },
        {
          href: '/ec/special/',
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
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: '理由その１：小型軽量！手が小さい方でも握りやすいグリップ', href: '#no1' },
        { naviItem: '理由その２：α6400最大の魅力、高速AFと瞳AF', href: '#no2' },
        { naviItem: '理由その３：オートで簡単綺麗に撮れる！幅広いダイナミックレンジ', href: '#no3' },
        { naviItem: '追加レンズを買うときは「OSS」表記があるレンズを選びましょう！', href: '#no4' },
        { naviItem: 'ソニー α6400 商品一覧', href: '#no5' }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4961607728406',
        '4548736092372',
        '4548736092365',
        '4548736100503',
        '4548736100497',
        '4548736092204',
        '4548736092051',
        '4548736092044',
        '4975981730597',

      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,

      mainProductJanCode: ['4548736092204',],
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

<style scoped>
.line-g {
  background: url(/ec/images2/special/general/highly_recommended/2019/4121/bk_line.gif);
}
.product-waku {
    background: #f8fbd1;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.w50{
  width:50%;
}
</style>
