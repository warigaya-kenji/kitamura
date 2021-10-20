<template>
  <div class="nikon1">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <v-row>
          <!--==================== サイドカラム ====================-->
          <v-col class="side-col" cols="12" md="3">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item-title class="pa-2 text-center">▼関連おすすめ特集</v-list-item-title>
                <v-list-item v-for="(newProduct, index) in newProductList" :key="index" link class="tbnrbox">
                  <v-list-item-content class="pb-0">
                    <a :href="newProduct.href"><img :src="newProduct.src" /></a>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <!--==================== サイドカラム ====================-->

          <!--==================== メインカラム ====================-->
          <v-col cols="12" md="9" class="text-left">
            <!--inner-->
            <div class="inner">
              <h1>
                <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/title.gif" alt=""></v-img>
              </h1>

              <h2>“ぼかす”ことで、いつもの風景を作品に</h2>
              <p>
                見せたい部分を強調したり、やわらかい雰囲気にしたり。ぼけを活かした演出ができれば、雑誌などで見かける雰囲気の写真が撮影できます。<br />
                そのポイントとなるのが使用するレンズの種類。<br />
                開放F値1. 8の明るい単焦点レンズをセットにしたダブルレンズキットなら、ぼかした写真を手軽に撮れます。
              </p>

              <v-row>
                <v-col col="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/01.jpg" alt="カメラ女子×Nikon1 Nikon1 J5ではじめるミラーレス一眼"></v-img>
                </v-col>
                <v-col col="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/02.jpg" alt="サンプル画像"></v-img>
                </v-col>
              </v-row>

              <h2>自分撮りがかんたんなのにキレイ。Nikon1 初の機能</h2>
              <v-row>
                <v-col col="12" sm="6">
                  <p>
                    自分撮りに便利なチルト式液晶モニターをNikon1で初めて採用。ひとりのときはもちろん、友だちとの記念撮影などにも便利です。<br />
                    美肌効果やタイマーもタッチ操作で。充実の自分撮りモード液晶モニターを自分撮りの位置にセットするだけでモードが切り替わります。<br />
                    「美肌効果」「セルフタイマー」「露出補正」からタッチ操作で設定を選ぶことができ、思うままに自分撮りを楽しめます。
                  </p>
                </v-col>
                <v-col col="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/03.jpg" alt="サンプル画像"></v-img>
                </v-col>
              </v-row>
              <hr />
              <v-row>
                <v-col col="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/04.jpg" alt="サンプル画像"></v-img>
                </v-col>
                <v-col col="12" sm="6">
                  <p>
                    自分撮りをさらに楽しくする8つのメイクアップ効果。<br />
                    撮影後にメイクアップ効果を加えることもできます。<br />
                    効果は「美肌」「小顔」「ビッグアイ」「チーク」など8種類。画面で確認しながら、なりたいイメージに近づけましょう。
                  </p>
                </v-col>
              </v-row>

              <h2>全19種類の効果とシーンが表現の楽しさをさらに拡げます</h2>
              <p>クリエイティブモードを使えば、誰でもカンタンにアーティスティックな作品をつくれます。</p>
              <v-row>
                <v-col col="12" sm="6">
                  <p>
                    《クロススクリーン》<br />
                    光源を放射状に伸ばすことで、キラキラとした華やかな雰囲気をつくります
                  </p>
                </v-col>
                <v-col col="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/05.jpg" alt="サンプル画像"></v-img>
                </v-col>
              </v-row>
              <hr />
              <v-row class="mb-8">
                <v-col col="12" sm="6">
                  <p>
                    《ミニチュア効果》<br />
                    普段の見慣れた景色がジオラマに一変。 おもちゃの世界を表現したような写真を撮る ことができます。
                  </p>
                </v-col>
                <v-col col="12" sm="6">
                  <v-img src="/ec/images2/special/camera/feature/nikon/nikon1/06.jpg" alt="サンプル画像"></v-img>
                </v-col>
              </v-row>

              <!-- ↓ 特集IDでの商品一覧表示 -->
              <product-list-by-special-id class="mb-5" :specialId="214" />
            </div>
            <!--inner-->
          </v-col>
          <!--==================== メインカラム ====================-->
        </v-row>
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'nikon1',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'カメラ女子×Nikon１ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'カメラ女子におすすめ！Nikon×カメラのキタムラ特別企画「カメラ女子 × Nikon１」。人気のNikon J5の魅力を当店女性バイヤーが紹介します。'
      );
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'カメラ女子×Nikon１',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----

      newProductList: [
        {
          src: 'https://shop.kitamura.jp/images/banner/1390.jpg',
          href: '/special/sale-fair/camera/girlscamera/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          href: '/special/sale-fair/camera/bag/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/1392.gif',
          href: '/special/sale-fair/camera/strap/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          href: '/special/sale-fair/general/pet/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/3498.jpg',
          href: 'https://www.net-chuko.com/static/contents/page/tell_me_chuuban.html',
          target: '_blank'
        }
      ],

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759174680'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
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
  .main-contents-wrap {
    max-width: 950px;
    margin: 0 auto;
    padding: 0 12px;
  }
  .inner {
    max-width: 720px;
    margin: auto;
  }
  h2 {
    background: #eee;
    border: 1px #bbb solid;
    border-radius: 4px;
    margin: 48px auto 24px;
    padding: 10px 20px;
  }
  hr {
    border: 1px #bbb dashed;
    margin: 48px auto 24px;
  }
  .tbnrbox {
    box-sizing: border-box;
    margin: 0;
    padding-bottom: 10px;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 960px) {
    .side-col {
      display: none;
    }
  }
}
</style>