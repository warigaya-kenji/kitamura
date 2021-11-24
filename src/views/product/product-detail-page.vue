<template>
  <div>
    <!-- 商品情報 -->
    <div
      id="product-detail-page"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown,
        sp: $vuetify.breakpoint.smAndDown
      }"
      v-if="loaded.product && loaded.usedProduct && existProduct"
    >
      <!-- パンくず（パンくずの末尾に商品名を追加する） -->
      <breadcrumbs :breadcrumbs="breadcrumbsList" />

      <script type="application/ld+json">
        {{ jsonLd }}
      </script>

      <product-info
        :routeItemCode="routeItemCode"
        :isUsed="isUsed"
        :product="product"
        :usedProduct="usedProduct"
        :usedProductsSummary="usedProductsSummary"
        :productImageList="productImageList"
        :cartOption="cartOption"
        :specialId="specialId"
      ></product-info>

      <!-- 中古商品情報 960px以上 -->
      <div id="used-product-info" class="used-info" v-if="isUsed && $vuetify.breakpoint.mdAndUp">
        <div class="used-info-title">中古商品情報</div>
        <div class="used-info-area">
          <v-row class="used-info-row">
            <v-col cols="2" class="used-info-term">状態</v-col>
            <v-col cols="4" class="used-info-value">{{ usedProduct.grade }}</v-col>
            <v-col cols="2" class="used-info-term">問い合わせNo.</v-col>
            <v-col cols="4" class="used-info-value">{{ usedProduct.itemCode }}</v-col>
          </v-row>
          <v-row class="used-info-row">
            <v-col cols="2" class="used-info-term">備考</v-col>
            <v-col cols="10" class="used-info-value">{{ usedProduct.note }}</v-col>
          </v-row>
          <v-row class="used-info-row">
            <v-col cols="2" class="used-info-term">付属品</v-col>
            <v-col cols="10" class="used-info-value">{{ usedProduct.accessory }}</v-col>
          </v-row>
          <v-row class="used-info-row">
            <v-col cols="2" class="used-info-term">取扱店舗</v-col>
            <v-col cols="4" class="used-info-value">{{ usedProduct.stockShopName }}</v-col>
            <v-col cols="2" class="used-info-term">店舗電話番号</v-col>
            <v-col cols="4" class="used-info-value">{{ shop.tel }}</v-col>
          </v-row>
          <v-row class="used-info-row">
            <v-col cols="2" class="used-info-term">店舗住所</v-col>
            <v-col cols="10" class="used-info-value">
              {{ shop.address }}
              <v-btn class="used-info-btn" tile outlined :href="netChukoUrl + 'common-pop/map.do?shopCode=' + usedProduct.stockShopCd">
                <v-icon small class="mr-2">fas fa-map-marker-alt</v-icon>
                <span class="font-weight-bold">地図を表示する</span>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <!-- 中古商品情報 960px未満 -->
      <div id="used-product-info" class="used-info" v-if="isUsed && $vuetify.breakpoint.smAndDown">
        <div class="used-info-title">中古商品情報</div>
        <div class="used-info-area">
          <div class="used-info-term">状態</div>
          <div class="used-info-value">{{ usedProduct.grade }}</div>
          <div class="used-info-term">問い合わせNo.</div>
          <div class="used-info-value">{{ usedProduct.itemCode }}</div>
          <div class="used-info-term">備考</div>
          <div class="used-info-value">{{ usedProduct.note }}</div>
          <div class="used-info-term">付属品</div>
          <div class="used-info-value">{{ usedProduct.accessory }}</div>
          <div class="used-info-term">取扱店舗</div>
          <div class="used-info-value">{{ usedProduct.stockShopName }}</div>
          <div class="used-info-term">店舗電話番号</div>
          <div class="used-info-value">{{ shop.tel }}</div>
          <div class="used-info-term">店舗住所</div>
          <div class="used-info-value">{{ shop.address }}</div>
          <v-btn class="used-info-btn" block tile outlined :href="netChukoUrl + 'common-pop/map.do?shopCode=' + usedProduct.stockShopCd">
            <v-icon small class="mr-2">fas fa-map-marker-alt</v-icon>
            <span class="font-weight-bold">地図を表示する</span>
          </v-btn>
        </div>
      </div>

      <!-- 中古の場合の商品詳細位置 -->
      <product-tabs :isUsed="isUsed" :product="product" v-if="isUsed && product.janCode" />

      <!-- 関連商品・閲覧履歴・よく一緒に買われている商品・バナー -->
      <div
        id="related-products-area"
        class="ec-back-color"
        :class="{
          'related-area-wide': $vuetify.breakpoint.mdAndUp,
          'related-area-narrow': $vuetify.breakpoint.smAndDown
        }"
        v-if="
          (product.relatedItems && product.relatedItems.length !== 0) ||
            revisionHistory.length !== 0 ||
            itemsBoughtTogether.length !== 0 ||
            (bannerList.length !== 0 && $vuetify.breakpoint.mdAndUp)
        "
      >
        <!-- 関連商品 -->
        <div
          :class="{
            'slider-area-wide': $vuetify.breakpoint.mdAndUp,
            'slider-area-narrow': $vuetify.breakpoint.smAndDown
          }"
          v-if="!loaded.relatedItems || (product.relatedItems && product.relatedItems.length !== 0)"
        >
          <span
            :class="{
              'large-text-wide': $vuetify.breakpoint.mdAndUp,
              'large-text-narrow': $vuetify.breakpoint.smAndDown
            }"
            >関連商品</span
          >
          <template v-if="loaded.relatedItems">
            <product-slider :isUsed="isUsed" :items="product.relatedItems" :isRelatedProducts="true" />
          </template>
          <div class="loading-relative-list" v-if="!loaded.relatedItems">
            <section-loading />
          </div>
        </div>

        <!-- 閲覧履歴 -->
        <div
          :class="{
            'slider-area-wide': $vuetify.breakpoint.mdAndUp,
            'slider-area-narrow': $vuetify.breakpoint.smAndDown
          }"
          v-if="!loaded.revisionHistory || revisionHistory.length !== 0"
        >
          <span
            :class="{
              'large-text-wide': $vuetify.breakpoint.mdAndUp,
              'large-text-narrow': $vuetify.breakpoint.smAndDown
            }"
            >閲覧履歴</span
          >
          <template v-if="loaded.revisionHistory">
            <product-slider :isUsed="isUsed" :items="revisionHistory" :isRelatedProducts="false" />
          </template>
          <div class="loading-relative-list" v-if="!loaded.revisionHistory">
            <section-loading />
          </div>
        </div>

        <!-- よく一緒に買われている商品 -->
        <div
          :class="{
            'slider-area-wide': $vuetify.breakpoint.mdAndUp,
            'slider-area-narrow': $vuetify.breakpoint.smAndDown
          }"
          v-if="!loaded.itemsBoughtTogether || itemsBoughtTogether.length !== 0"
        >
          <span
            :class="{
              'large-text-wide': $vuetify.breakpoint.mdAndUp,
              'large-text-narrow': $vuetify.breakpoint.smAndDown
            }"
            >よく一緒に買われている商品</span
          >
          <template v-if="loaded.itemsBoughtTogether">
            <product-slider :isUsed="isUsed" :items="itemsBoughtTogether" :isRelatedProducts="false" />
          </template>
          <div class="loading-relative-list" v-if="!loaded.itemsBoughtTogether">
            <section-loading />
          </div>
        </div>

        <!-- バナー 960px以上 -->
        <div class="banner-area-wide" v-if="bannerList.length !== 0 && $vuetify.breakpoint.mdAndUp">
          <a class="banner-area-wide-item" v-for="(banner, i) in bannerList" :key="i" :href="banner.linkUrl" :target="getLinkTarget(banner.linkType)">
            <v-img class="banner-area-wide-img" :src="banner.imagePath" />
          </a>
        </div>

        <!-- バナー 960px未満 -->
        <div class="banner-area-narrow" v-if="bannerList.length !== 0 && $vuetify.breakpoint.smAndDown">
          <a class="banner-area-narrow-item" v-for="(banner, i) in bannerList" :key="i" :href="banner.linkUrl" :target="getLinkTarget(banner.linkType)">
            <v-img class="banner-area-narrow-img" :src="banner.imagePath" />
          </a>
          <template v-if="product.templateId != 1363">
            <!-- 電話注文 -->
            <fab-phone />
          </template>
        </div>
      </div>

      <!-- 新品の場合の商品詳細位置 -->
      <product-tabs id="product-tabs-scroll" :isUsed="isUsed" :product="product" :firstTabNum="tab" v-if="!isUsed" />
    </div>

    <!-- 商品が存在しない場合 -->
    <not-found errorMessage="この商品は販売が終了しているか、掲載がございません。" v-else-if="loaded.product && loaded.usedProduct" />

    <!-- ローディング表示 -->
    <div class="loading-relative-list" v-else>
      <section-loading />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs, onUpdated, watch } from '@vue/composition-api';
import ProductSlider from '@/components/product-detail/product-slider.vue';
import ProductTabs from '@/components/product-detail/product-tabs.vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductInfo from '@/components/product-detail/product-info.vue';
import SectionLoading from '@/components/common/section-loading.vue';

import { getYouTubeThumbnailUrl, getYouTubeUrl } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { Banner, ProductDetail, SimpleProduct, SliderProduct, UsedProductDetail, UsedProductsSummary } from '@/types/product';
import FabPhone from '@/components/common/fab-phone.vue';
import NotFound from '@/components/common/not-found.vue';
import { CART_STATUS } from '@/constants/cart-status';
import { PRODUCT_FLAG } from '@/constants/product-flag';
import { Route } from 'vue-router';
import SpecialProductService from '@/logic/special-product.service';

export default Vue.extend({
  name: 'product-detail-page',
  components: {
    'product-slider': ProductSlider,
    'product-info': ProductInfo,
    'product-tabs': ProductTabs,
    breadcrumbs: Breadcrumbs,
    'section-loading': SectionLoading,
    'fab-phone': FabPhone,
    'not-found': NotFound
  },
  setup(props, context) {
    const { product } = context.root.$store;
    const state = reactive({
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      routeItemCode: '',
      janCode: '',
      isUsed: false,
      breadcrumbsList: [] as Array<{
        no: number;
        path: string;
        linkUrl?: string | undefined;
      }>,
      // 商品画像リスト(サンプル画像は含まない)
      productImageList: [] as Array<{
        rowNo: number;
        imageType?: string;
        imagePath: string;
      }>,
      // 店舗情報（中古商品の時のみ）
      shop: {} as {
        address: string;
        tel: string;
      },
      product: {} as ProductDetail,
      usedProduct: {} as UsedProductDetail | null,
      usedProductsSummary: {} as UsedProductsSummary,
      cartMaxCount: 0,
      bannerList: [] as Array<Banner>,
      revisionHistory: [] as Array<SliderProduct>,
      itemsBoughtTogether: [] as Array<SliderProduct>,
      // ロード状態
      loaded: {
        product: false,
        usedProduct: false,
        relatedItems: false,
        revisionHistory: false,
        itemsBoughtTogether: false
      },
      /** カートボタンオプション */
      cartOption: {
        /** 購入不可理由 */
        cannotBuyReason: '',
        /** 商品購入可能数 */
        canBuyNum: 0,
        /** ボタン表示文字 */
        text: CART_STATUS.ADD_CART as string,
        /** ボタン無効化 */
        disabled: false,
        /** ボタン表示 */
        isShow: true,
        /**  */
        isFavoriteOperation: false
      },
      /** JSON-LD */
      jsonLd: '',
      // 内部スクロール用：tab指定
      tab: 0,
      // 特集ID
      specialId: undefined as string | undefined
    });

    function sanitize(text: string) {
      if (!text) {
        return '';
      }
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replaceAll(/[\r\n]/g, '');
    }

    function createJsonLd(product: ProductDetail) {
      const jsonLdImages = state.productImageList?.map((image) => `"${image.imagePath}"`)?.join(', ') || '';
      const description = sanitize(product.itemFeatures) + sanitize(product.itemSpecifications);
      const makerName = product.makerName;
      const review =
        product.reviewInfo
          ?.map(
            (review) => `
        {
          "@type": "Review",
          "description": "${review.comment}",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "${review.rating || ''}"
          },
          "author": {
            "@type": "Person",
            "name": "${review.reviewer}"
          }
        }
      `
          )
          ?.join(', ') || '';
      const minItemCount = Math.min(product.quantityParUnit || 0, product.realSalesLimitNum || 0);
      return `
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "gtin13": "${state.product.janCode}",
            "name": "${state.product.itemName}",
            "image": [${jsonLdImages}],
            "description": "${description}",
            "brand": {"@type": "Thing",	"name": "${makerName}"},
            "review": [${review}],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${product.ratingTotal || ''}",
              "reviewCount": "${product.reviewNum}"
            }
            "offers": [
              {
                "@type": "Offer",
                "url": "http://shop.kitamura.jp/pd/${product.janCode}/",
                "priceCurrency": "JPY",
                "price": "${product.price}",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/${minItemCount > 0 ? 'InStock' : 'SoldOut'}",
                "seller": {"@type": "Organization", "name": "カメラのキタムラ"}
              }
            ]
          }
        `;
    }

    /**
     * 新品用商品詳細を取得する
     */
    function fetchNewProduct() {
      ProductService.fetchProducts([state.janCode], false, undefined, undefined, state.specialId)
        .then((result) => {
          state.cartMaxCount = result.cartMaxCount;
          state.product = result.items[0];

          // 表示するバナーを取得
          if (state.product.upperBannerInfo) {
            state.bannerList = state.bannerList.concat(state.product.upperBannerInfo);
          }
          if (state.product.underBannerInfo) {
            state.bannerList = state.bannerList.concat(state.product.underBannerInfo);
          }

          // 中古商品でない場合
          if (!state.isUsed) {
            // 画像登録
            state.productImageList = state.product.images;

            // パンくずリスト作成
            state.breadcrumbsList = state.product.breadcrumbs.concat({
              no: (state.product.breadcrumbs[state.product.breadcrumbs?.length - 1]?.no || 0) + 1,
              path: state.product.itemName
            });

            // カートに入れるオプション
            if (ProductService.includeFlag(state.product.flags, PRODUCT_FLAG.PRICE_NOT_SHOWN)) {
              // 価格表示対象外商品
              state.cartOption.text = CART_STATUS.PRICE_NOT_SHOWN;
              state.cartOption.disabled = true;
              state.cartOption.canBuyNum = 0;
            } else if (ProductService.includeFlag(state.product.flags, PRODUCT_FLAG.FINISHED_PRODUCT) || state.product.isSalesEnd) {
              // 完了商品
              state.cartOption.isShow = false;
              state.cartOption.canBuyNum = 0;
            } else if (state.product.realSalesLimitNum < 1) {
              state.cartOption.text = CART_STATUS.SOLD_OUT;
              state.cartOption.disabled = true;
              state.cartOption.canBuyNum = 0;
            } else if (state.product.isAlert || [632, 1363].includes(state.product.templateId)) {
              state.cartOption.text = CART_STATUS.NO_ONLINE_ORDER;
              state.cartOption.disabled = true;
              state.cartOption.canBuyNum = 0;
            } else if (ProductService.includeFlag(state.product.flags, 23) || ProductService.includeFlag(state.product.flags, 24)) {
              // キャリア
              state.cartOption.isShow = false;
              state.cartOption.canBuyNum = 0;
            } else if (ProductService.includeFlag(state.product.flags, PRODUCT_FLAG.RESERVED_PRODUCT)) {
              state.cartOption.text = CART_STATUS.RESERVATE;
              state.cartOption.canBuyNum = 0;
            } else {
              state.cartOption.text = CART_STATUS.ADD_CART;
            }

            /**
             * 商品購入可能数計算
             * １から以下３つの数値の最小値までをリスト化（１しかリストになくなるときは非表示）
             * ※「購入可能数」「販売可能数残」「カート投入可能商品数」
             */
            // 「購入可能数」「販売可能数残」「カート投入可能商品数」の中でundefined/nullを除外し数値のみ配列に残す
            let _purchaseNnumList = [state.product.quantityParUnit, state.product.realSalesLimitNum, state.cartMaxCount];
            _purchaseNnumList = _purchaseNnumList.filter((n) => n != null).map((n) => Number(n));
            // 最小値計算
            if (_purchaseNnumList.length !== 0) {
              state.cartOption.canBuyNum = _purchaseNnumList.reduce((a, b) => Math.min(a, b));
            }

            // タイトルを設定する
            let title = state.product.itemName;
            if (state.product.breadcrumbs?.length > 0) {
              title += ' | ' + state.product.breadcrumbs[0].path;
            }
            document.title = title;
          }

          // JSON-LDを設定する
          state.jsonLd = createJsonLd(state.product);
        })
        .catch((error) => {
          console.log(error);

          // 商品情報が取得でいない場合、お気に入り登録が出来ないため、
          // 「入荷のお知らせ」でお気に入り登録するカートオプションの場合、非表示に設定する
          if (state.cartOption.isFavoriteOperation) {
            state.cartOption.isShow = false;
          }

          // オプション情報として取得する中古情報も処理済みとする
          state.loaded.usedProduct = true;
        })
        .finally(() => {
          state.loaded.product = true;
          state.loaded.relatedItems = true;
        });
    }

    /**
     * 新品用中古情報を取得する
     */
    function searchUsedProductsSummary() {
      // 新品用中古情報
      ProductService.searchUsedProductsSummary([state.janCode])
        .then((result) => {
          state.usedProductsSummary = result.itemInfo[0];
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (state.loaded.usedProduct = true));
    }

    /**
     * リコメンドエンジンから「閲覧履歴」を取得する
     */
    function searchRevisionHistory() {
      const customerId = '35007';
      const recommendId = '5'; // 閲覧履歴
      ProductService.searchRecommendProducts(customerId, recommendId, '', 'fetchViewHistories')
        .then((recResult) => {
          // ロード完了フラグ (レスポンス正常でlength === 0 の場合もありうるため)
          state.loaded.revisionHistory = true;
          if (!recResult.items) {
            return;
          }
          recResult.items.forEach((product: SimpleProduct) => {
            state.revisionHistory.push({
              janCode: product.janCode,
              itemName: product.itemName,
              imagePath: product.images[0].imagePath,
              price: product.price,
              priceDiv: product.priceDiv,
              ratingTotal: product.ratingTotal
            });
          });
        })
        .catch((error) => {
          state.loaded.revisionHistory = true;
          console.log(error);
        });
    }

    /**
     * リコメンドエンジンから「よく一緒に買われている商品」を取得する
     */
    function searchitemsBoughtTogether() {
      const customerId = '35007';
      const recommendId = '7'; // よく一緒に買われている商品
      ProductService.searchRecommendProducts(customerId, recommendId, state.janCode, 'fetchBoughtTogetherProducts')
        .then((recResult) => {
          // ロード完了フラグ (レスポンス正常でlength === 0 の場合もありうるため)
          state.loaded.itemsBoughtTogether = true;
          if (!recResult.items) {
            return;
          }
          recResult.items.forEach((product: SimpleProduct) => {
            state.itemsBoughtTogether.push({
              janCode: product.janCode,
              itemName: product.itemName,
              imagePath: product.images[0].imagePath,
              price: product.price,
              priceDiv: product.priceDiv,
              ratingTotal: product.ratingTotal
            });
          });
        })
        .catch((error) => {
          state.loaded.itemsBoughtTogether = true;
          console.log(error);
        });
    }

    /**
     * 店舗を検索する
     */
    function searchShopAdress() {
      if (state.usedProduct !== null) {
        ProductService.searchShop(state.usedProduct.stockShopCd)
          .then((result) => {
            state.shop = {
              address: result.shops[0].address,
              tel: result.shops[0].tel
            };
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    /**
     * 中古商品詳細を取得する
     */
    function fetchUsedProduct() {
      ProductService.fetchUsedProducts(state.routeItemCode)
        .then((result) => {
          state.usedProduct = result;
          state.janCode = state.usedProduct.janCode;

          // 画像設定
          if (state.usedProduct.imageUrl1) {
            state.productImageList.push({
              rowNo: 1,
              imagePath: state.usedProduct.imageUrl1
            });

            if (state.usedProduct.imageUrl2) {
              state.productImageList.push({
                rowNo: 2,
                imagePath: state.usedProduct.imageUrl2
              });

              if (state.usedProduct.imageUrl2) {
                state.productImageList.push({
                  rowNo: 3,
                  imagePath: state.usedProduct.imageUrl3
                });
              }
            }
          }

          // パンくずリスト作成
          const itemName = state.usedProduct.itemName.replace('【中古】', '');
          state.breadcrumbsList = [
            { no: 1, path: 'TOP', linkUrl: '/' },
            { no: 2, path: state.usedProduct.prdType, linkUrl: `/ec/list?type=u&category=${state.usedProduct.prdType}` },
            {
              no: 3,
              path: state.usedProduct.makerName,
              linkUrl: `/ec/list?type=u&category=${state.usedProduct.prdType}&keyword=${state.usedProduct.makerName}`
            },
            { no: 4, path: itemName, linkUrl: `/ec/pd/${state.usedProduct.janCode}` },
            { no: 5, path: '中古在庫', linkUrl: '' }
          ];

          // タイトルを設定する
          document.title = `【中古：${state.usedProduct.grade}】${itemName} | ${state.usedProduct.itemCode}`;

          // カートに入れるオプション
          // 中古在庫商品の場合
          switch (state.usedProduct.status) {
            case -2:
            case 0:
              // インターネット掲載フラグ
              if (state.usedProduct.isInetDisp) {
                state.cartOption.text = CART_STATUS.NOTIFY_ARRIVAL;
                state.cartOption.isFavoriteOperation = true;
              } else {
                // 中古商品情報を削除して、404の状態にする
                state.usedProduct = null;
              }
              break;
            case 3:
              // 予約可能フラグ
              if (state.usedProduct.isAvailable) {
                state.cartOption.text = CART_STATUS.RESERVATE;
              } else {
                state.cartOption.text = CART_STATUS.NOTIFY_ARRIVAL;
                state.cartOption.isFavoriteOperation = true;
              }
              break;
            case 1:
            case 4:
            case 5:
              // インターネット掲載フラグ
              if (state.usedProduct.isInetDisp) {
                state.cartOption.text = CART_STATUS.SOLD_OUT;
                state.cartOption.disabled = true;
              } else {
                // 中古商品情報を削除して、404の状態にする
                state.usedProduct = null;
              }
              break;
            default:
              // 中古商品情報を削除して、404の状態にする
              state.usedProduct = null;

              break;
          }

          fetchNewProduct();
          searchUsedProductsSummary();
          searchRevisionHistory();
          searchitemsBoughtTogether();
          searchShopAdress();
        })
        .catch((error) => {
          console.log(error);

          // オプション情報として取得する新品情報も処理済みとする
          state.loaded.product = true;
        })
        .finally(() => (state.loaded.usedProduct = true));
    }

    /**
     * 製品情報があるかどうか
     */
    const existProduct = computed(function(): boolean {
      if (state.isUsed) {
        return !!state.usedProduct?.itemName;
      } else {
        return !!state.product?.itemName;
      }
    });

    /**
     * ページ状態の初期化
     * 一度値を定義したページ状態変数の値を初期化する
     */
    function initState() {
      state.routeItemCode = '';
      state.janCode = '';
      state.isUsed = false;
      state.breadcrumbsList = [];
      // 商品画像リスト(サンプル画像は含まない)
      state.productImageList = [];
      // 店舗情報（中古商品の時のみ）
      state.shop = {} as {
        address: string;
        tel: string;
      };
      state.product = {} as ProductDetail;
      state.usedProduct = {} as UsedProductDetail | null;
      state.usedProductsSummary = {} as UsedProductsSummary;
      state.cartMaxCount = 0;
      state.bannerList = [] as Array<Banner>;
      state.revisionHistory = [] as Array<SliderProduct>;
      state.itemsBoughtTogether = [] as Array<SliderProduct>;
      // ロード状態
      state.loaded = {
        product: false,
        usedProduct: false,
        relatedItems: false,
        revisionHistory: false,
        itemsBoughtTogether: false
      };
      /** カートボタンオプション */
      state.cartOption = {
        /** 購入不可理由 */
        cannotBuyReason: '',
        /** 商品購入可能数 */
        canBuyNum: 0,
        /** ボタン表示文字 */
        text: CART_STATUS.ADD_CART as string,
        /** ボタン無効化 */
        disabled: false,
        /** ボタン表示 */
        isShow: true,
        /**  */
        isFavoriteOperation: false
      };
      /** JSON-LD */
      state.jsonLd = '';
      /** 特集ID */
      state.specialId = undefined;
    }

    /**
     * 限定商品のパスコードチェック
     */
    const checkSecretPass = async () => {
      let secretId = '';
      let passcode = '';

      // 「URLParamでの直アクセス」か「特集ページからの遷移」かを判定
      const query = context.root.$route.query;
      if (query.secret && query.passcode) {
        secretId = `${query.secret}`;
        passcode = `${query.passcode}`;
      } else if (Object.keys(product.secretInfo).length) {
        secretId = product.secretInfo.secret;
        passcode = product.secretInfo.passcode;
        product.resetSecretInfo();
      }

      // 以下、TODOコメントアウト解除時に削除
      if (secretId) state.specialId = secretId;

      // TODO: 限定販売対象商品APIにて、パスコードのチェックができるようになり次第、コメントアウト解除
      // if (secretId && passcode) {
      //   try {
      //     const results = await SpecialProductService.getSaleSecretProduct(secretId, passcode);
      //     if (results.length) state.specialId = secretId;
      //   } catch (error) {
      //     console.error(error);
      //   }
      // }
    };

    /**
     * 商品詳細情報を取得して設定する
     */
    async function setProduct(route: Route) {
      // ページ内状態を初期化
      initState();

      // ルートパスから、新品か中古かを判断する
      const pathSplitList = route.path.split('/');
      state.isUsed = pathSplitList[pathSplitList?.length - 2] === 'pd' ? false : true;
      state.routeItemCode = route.params.id;

      // 中古の場合
      if (state.isUsed) {
        // 中古商品詳細情報取得
        fetchUsedProduct();
      } else {
        // 新品の場合は、ルートパスがJANコード
        state.janCode = state.routeItemCode;

        // 限定価格表示チェック
        await checkSecretPass();

        // 各種情報取得
        fetchNewProduct();
        searchUsedProductsSummary();
        searchRevisionHistory();
        searchitemsBoughtTogether();
      }
    }

    // 初期化
    setProduct(context.root.$route);

    onUpdated(() => {
      // ページ内スクロール
      const query = context.root.$route.query;
      const { header } = context.root.$store;
      if (query.tab && state.loaded.product) {
        state.tab = +(query.tab as string);

        context.root.$vuetify.goTo('#product-tabs-scroll', {
          duration: 100,
          offset: header.headerHeight,
          easing: 'linear'
        });
      }
    });

    /**
     * 画面が切り替わった際に再度商品詳細情報を再設定する
     */
    watch(
      () => context.root.$route,
      (route) => {
        if (route.params.id !== state.routeItemCode) {
          setProduct(route);
        }
      }
    );

    /**
     * リンクを開く際のタブの挙動方法を取得する
     * 1：別タブにする 2：同一タブ内
     */
    function getLinkTarget(linkType: 1 | 2) {
      return linkType === 2 ? '_self' : '_blank';
    }

    return {
      ...toRefs(state),
      existProduct,
      getYouTubeThumbnailUrl,
      getYouTubeUrl,
      getLinkTarget
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// ローディング
.loading-relative-list {
  height: 20vh;
  width: 100%;
}

/** -------------------------------
  商品詳細 960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// 中古商品情報
$used-info-border: solid 1px $ec-grey;
.used-info {
  margin-bottom: 20px;
  padding: 0 50px;

  &-title {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
    color: $text-black;
  }

  &-area {
    border: $used-info-border;
  }

  &-row {
    margin: 0;

    &:not(:last-child) {
      border-bottom: $used-info-border;
    }
  }

  @at-root %used-item {
    line-height: 70px;
    padding: 0 12px;
  }

  &-term {
    @extend %used-item;
    background-color: $bg-grey;
    text-align: center;

    &:nth-child(n + 3) {
      border-left: $used-info-border;
    }
  }

  &-value {
    @extend %used-item;
  }

  &-btn {
    margin-left: 20px;
  }
}

// 関連商品・閲覧履歴・よく一緒に買われている商品・バナー
.related-area-wide {
  max-width: 100%;
  padding: 20px 50px;
}

.slider-area-wide {
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: $bg-white;
}

.large-text-wide {
  font-size: 28px;
  font-weight: bold;
  color: $text-black;
}

.banner-area-wide {
  display: flex;
  flex-wrap: wrap;
  padding: 12px 8px;
  background-color: $bg-white;

  &-item {
    width: calc(100% / 4);
    align-self: stretch;
  }
  &-img {
    max-width: 100%;
    margin: auto;
  }
}

/** -------------------------------
  商品詳細 960px未満
------------------------------- */
.sp {
  // 中古商品情報
  .used-info {
    margin-bottom: 20px;
    padding: 0 8px;

    &-title {
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: normal;
    }

    &-area {
      border: none;
    }

    &-term {
      line-height: 45px;
      padding: 0 12px;
      text-align: left;
      border: none;
    }

    &-value {
      line-height: 1.5;
      padding: 20px 12px;
    }

    &-btn {
      margin-top: 12px;
      margin-left: 0;
    }
  }
}

// 関連商品・閲覧履歴・よく一緒に買われている商品・バナー
.related-area-narrow {
  width: 100%;
  padding: 16px 0;
}

.slider-area-narrow {
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  padding: 10px;
  background-color: $bg-white;
}

.large-text-narrow {
  font-size: 18px;
  color: $text-black;
}

.banner-area-narrow {
  display: flex;
  flex-wrap: wrap;
  padding: 12px 8px;
  background-color: $bg-white;

  &-item {
    width: calc(100% / 2);
    align-self: stretch;
  }
  &-img {
    max-width: 100%;
    margin: auto;
  }
}
</style>

<style>
/* FIXME: 他にいい方法がないか検討 */
/* v-slide-group:矢印のCSSを上書き */
.related-area-narrow .v-slide-group__next,
.related-area-narrow .v-slide-group__prev {
  min-width: auto;
}
</style>
