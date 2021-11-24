<template>
  <v-app>
    <div class="highly_recommended-2019-4261">
      <div class="main-contents-wrap line-height">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">おすすめ交換レンズ ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G]</h1>
        <v-img src="/ec/images2/special/general/highly_recommended/2019/4261/bg_top.jpg" max-width="100%" height="auto"></v-img>
        <p class="pt-4">手ブレに悩む望遠レンズ・Eマウントユーザーにおすすめです</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G]'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'ズーム全域で高い描写性能と高速AFを実現した超望遠ズームレンズ'"
          :btntxt="'商品ページを見る'"
        />

        <!-- ↓ トピック -->
        <subText :textItem="'トピック＆まとめ'" />
        <v-sheet color="#F8FBD1" class="text-body-2 pa-5 line-height rounded-lg sen-gl mb-10" outlined>
          動体の撮影に最適な"mode3"手振れ補正を搭載！ファインダー像が安定するためフレームアウトしにくく、撮影がスムーズに行えます
        </v-sheet>
        <br />

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" :title="'目次'" />

        <!-- ↓望遠ズームレンズとは -->
        <subText :textItem="'望遠ズームレンズとは'" id="r00" />
        <p class="pa-5">
          「望遠」レンズとは遠くの被写体を大きく写すことができるレンズの種類で<br />
          「望遠ズーム」とはその名の通り、望遠側で写る範囲をズームで調整できるレンズのことです<br />
          一般的にはその用途で使われることが多いですが、望遠ズームレンズにはその他にも<br /><br />

          ■標準ズームレンズと比べて背景をボカした写真が撮りやすい<br />
          ■写る範囲が狭くなるので、撮りたいものを目立たせることができる<br /><br />といった効果もありますので、とても幅広い使い方ができるレンズです！
        </p>

        <!-- ↓望遠ズームレンズの選び方のポイント -->
        <subText :textItem="'望遠ズームレンズの選び方のポイント'" id="r01" />
        <p class="pa-5">
          望遠ズームを選ぶ時には、まず「焦点距離」を確認しましょう！<br />
          焦点距離の数字が大きいほど遠くのものを大きく写すことができます<br /><br />また、写る範囲が狭くなるため手ブレが目立ちやすくなります。<br />
          カメラ側についていることも多いですが、望遠ズームレンズにも手ブレ補正がついていると◎ <br />
          最近はカメラ側＋レンズ側でさらに強力な手ブレ補正が効くことが多いので<br />
          レンズ側に手ブレ補正があればさらに失敗写真が減りますね！<br /><br />背景のボケを活かした写真を撮りたい場合はレンズの明るさや最短撮影距離を確認すると<br />より使いやすい望遠ズームレンズを選ぶことができますよ
        </p>

        <!--比較-->
        <div id="r02">
          <subText :textItem="'ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G] と他おすすめレンズ比較'" />
          <div class="product-comparison mb-5">
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`product-${index}`">
                    <router-link :to="`/ec/pd/${product.janCode}`">{{ product.itemName }}</router-link>
                  </td>
                </tr>
                <tr>
                  <th>商品イメージ</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`image-${index}`">
                    <router-link :to="`/ec/pd/${product.janCode}`"
                      ><v-img
                        :src="product.images[0].imagePath.replace(/TN/g, 'M')"
                        :max-width="$vuetify.breakpoint.mdAndUp ? '174' : '59'"
                        height="auto"
                        class="hover"
                      ></v-img
                    ></router-link>
                  </td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`price-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>フィルターサイズ</th>
                  <td>95mm</td>
                  <td>77mm</td>
                  <td class="point-c">67mm</td>
                  <td class="point-c">-</td>
                </tr>
                <tr>
                  <th>マウント</th>
                  <td>ソニー FEマウント</td>
                  <td>ソニー FEマウント</td>
                  <td class="point-c">キヤノン EFマウント</td>
                  <td class="point-c">-</td>
                </tr>
                <tr></tr>
                <tr>
                  <th>タイプ</th>
                  <td>望遠ズームレンズ</td>
                  <td>望遠ズームレンズ</td>
                  <td class="point-c">望遠ズームレンズ</td>
                  <td class="point-c">テレコンバーター</td>
                </tr>
                <tr>
                  <th>重さ</th>
                  <td>2115g</td>
                  <td>1395g</td>
                  <td class="point-c">1160g</td>
                  <td class="point-c">-</td>
                </tr>
                <tr>
                  <th>焦点距離</th>
                  <td>240cm</td>
                  <td>98cm</td>
                  <td class="point-c">160cm</td>
                  <td class="point-c">-</td>
                </tr>
                <tr>
                  <th>商品情報（製品特徴）</th>
                  <td>
                    【製品特徴】 Eマウント初の望遠端600mmの超望遠ズーム。テレコンバーターにも対応し光学式手ブレ補正も搭載...<router-link
                      to="/ec/pd/4548736099791"
                      >続きを読む</router-link
                    >
                  </td>
                  <td>
                    【製品特徴】 G Masterの高い設計基準を満たす新規光学設計により、ズーム・フォーカス全域での高い解像性能を実現...<router-link
                      to="/ec/pd/4548736058415"
                      >続きを読む</router-link
                    >
                  </td>
                  <td class="point-c">
                    【製品特徴】 小型軽量ボディに、加速度センサーを利用した手ブレ補正OS機構、最新のアルゴリズムで高速なオートフ...<router-link
                      to="/ec/pd/0085126729547"
                      >続きを読む</router-link
                    >
                  </td>
                  <td class="point-c">
                    【製品特徴】 特殊硝材LDレンズ1枚と更に高度なレベルで分散性を補正するXLDレンズ2枚を贅沢に採用...<router-link to="/ec/pd/0085126932503"
                      >続きを読む</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style="clear: both"></div>
        <!--比較-->

        <!-- ↓ShaSha -->
        <subText :textItem="'ShaSha：実際に使ってみました！ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G] 作例'" id="r03" />
        <shasha
          :txt="'今までのソニーEマウントレンズラインナップでは”FE100－400㎜ F4.5-F5.6 GM OSS”と”FE400㎜F2.8 GM OSS”の400㎜が最長の焦点距離でした。  焦点距離が200㎜増えたことによって、遠くを撮影するすべての環境・場面で恩恵が得られます。 例えばスポーツや乗り物は撮影しても良い区画が決められていることが多く、動物の撮影では近づけば近づくほど逃げられてしまうリスクがあります。  あと数メートル近づければ・・・と思っていた皆様のそのお気持ち、このレンズが解決してくれそうです。……'"
          :href="'https://shasha.kitamura.jp/article/467347860.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4548736099791'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4261/shashabnr.jpg'"
        />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G] 関連商品一覧'" id="r04" />
        <priceAndPopular :productDetailList="productDetailList" />

        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集 -->
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';

export default Vue.extend({
  name: 'highly_recommended-2019-4261',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha,
  },
  setup: () => {
    document.title = 'スタッフイチオシ 超望遠ズームレンズ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー FE 200-600mm F5.6-6.3 G OSS は手ブレに悩む望遠レンズ・Eマウントユーザーにおすすめ')
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
          path: 'ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G]',
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
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: '望遠ズームレンズとは', href: '#r00' },
        { naviItem: '望遠ズームレンズの選び方のポイント', href: '#r01' },
        { naviItem: 'ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G] と他おすすめレンズ比較', href: '#r02' },
        { naviItem: 'ShaSha：実際に使ってみました！ソニー FE 200-600mm F5.6-6.3 G OSS [SEL200600G]  作例', href: '#r03' },
        { naviItem: '関連商品一覧', href: '#r04' }
      ],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736099791', '4548736058415', '0085126729547', '0085126729547',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736099791',
        '4548736056701',
        '4548736038615',
        '4548736038462',
        '4905524731200',
        '4977187330878',
        '4902520009609',
        '4977187330045'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,

      mainProductJanCode: ['4548736099791',],
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;


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
