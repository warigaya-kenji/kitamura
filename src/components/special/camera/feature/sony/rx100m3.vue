<template>
  <div class="1067">
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
                <v-list-item-title class="pa-2 text-center white--text deep-orange rounded-t-xl">話題の新製品</v-list-item-title>
                <v-list-item v-for="(newProduct, index) in newProductList" :key="index" link class="tbnrbox">
                  <v-list-item-content class="pb-0">
                    <a :href="newProduct.href"><v-img :src="newProduct.src"></v-img></a>
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
              <!-- ↓ 看板：画像の読み込み -->
              <div class="kanban">
                <h1>ソニー Cyber-shot DSC-RX100M3</h1>
                <p>SONY 高画質スチルデジタルカメラ新製品 RX100MIII</p>
              </div>
              <a v-scroll-to="'#spec'" class="hover">
                <img src="/ec/images2/special/camera/feature/sony/rx100m3/img_top.jpg" alt="ソニーCyber-shot DSC-RX100M3" />
              </a>
              <!-- ↑ 看板：画像の読み込み -->

              <!--ソニー RX100M3の価格-->
              <subText :textItem="'ソニー RX100M3の価格'" />
              <div>
                <ul class="point">
                  <p class="pttex">
                    <span class="bgtypetitle">お得な情報</span>
                  </p>
                </ul>
              </div>
              <div class="mb-6">
                <a
                  href="https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4905524893878&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort="
                  target="_blank"
                >
                  <v-img
                    class="mt-4 hover"
                    max-width="350px"
                    src="/ec/images2/special/camera/feature/sony/rx100m3/bnr_rx100350-130.gif"
                  >
                  </v-img>
                </a>
              </div>
              <!--ソニー RX100M3の価格-->

              <!-- ↓ 特集IDでの商品一覧表示 -->
              <product-list-by-special-id class="mb-5" :specialId="1067" />

              <!--スペック-->
              <div class="mb-6" id="spec">
                <subText :textItem="'ソニー Cyber-shot DSC-RX100M3のスペック・商品特徴をご紹介'" />
                <p>ソニー Cyber-shot DSC-RX100M3のスペック・商品特徴をご紹介</p>
                <img width="100%" src="/ec/images2/special/camera/feature/sony/rx100m3/img_a.jpg" />
              </div>
              <!--スペック-->
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
import SubText from '@/components/common/special/subtext.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: '1067',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '1.0型の高画質『ソニーCyber-shot DSC-RX100M3』 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'ソニー高画質デジタルカメラRX100 III新製品特集。SONY RX100M3の価格・スペックやお得な情報をチェック！全国1000店舗のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。'
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
          path: '1.0型の高画質『ソニーCyber-shot DSC-RX100M3』',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----

      newProductList: [
        {
          src: 'https://shopimg.kitamura.jp/images/banner/554.jpg',
          href: '/special/sale-fair/camera/feature/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/713.gif',
          href: '/special/sale-fair/camera/feature/nikon/df/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/1042.gif',
          href: '/special/sale-fair/camera/feature/olympus/em10/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/1193.gif',
          href: '/special/sale-fair/camera/feature/sony/a7s/'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/945.jpg',
          href: '/special/sale-fair/camera/feature/sony/4k/'
        },
        {
          src: 'http://shopimg.kitamura.jp/images/banner/1016.jpg',
          href: '/special/sale-fair/camera/feature/sony/actioncam/'
        }
      ],

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4905524985917'],
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
  .kanban {
    background: url(/ec/images2/special/camera/feature/sony/rx100m3/bg_topimg.gif) center top / contain no-repeat #000;
    color: #fff;
    padding: 20px;
    h1 {
      font-size: 140%;
    }
    p {
      font-size: 100%;
    }
  }
  img {
    max-width: 100%;
  }
  .tbnrbox {
    background-color: #ffffcc;
    box-sizing: border-box;
    margin: 0;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 960px) {
    .side-col{
      display: none;
    }
  }
}
</style>