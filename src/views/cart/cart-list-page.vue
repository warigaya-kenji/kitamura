<template>
  <div>
    <div
      id="cart-list-page"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
      v-if="loaded.cart"
    >
      <div
        :class="{
          'content-area-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <div class="d-flex" :class="{ 'mt-10': $vuetify.breakpoint.mdAndUp }">
          <div class="cart-list-main-area">
            <!-- ページタイトル -->
            <div class="mx-5 d-flex">
              <span class="cart-list-page-title" :class="{ 'mb-6': $vuetify.breakpoint.mdAndUp }">カートの中身</span>
              <v-btn
                tile
                color="rgba(0, 0, 0, 0.12)"
                class="ml-auto mt-auto mb-4 cart-list-clear-btn"
                @click="clearCartItems()"
                v-if="cart.cartItemInfo.length && $vuetify.breakpoint.mdAndUp"
              >
                カートを空にする
              </v-btn>
            </div>

            <!-- 操作ボタン系 960px未満 -->
            <div v-if="cart.cartItemInfo.length && $vuetify.breakpoint.smAndDown">
              <cart-action
                :cart="cart"
                :tradeProducts="tradeProducts"
                :tradeOptions="tradeOptions"
                @openDialog="openDialog($event)"
                @onChnageOptions="onChnageTradeOptions($event)"
                @onChnageProducts="onChangeTradeProducts($event)"
                @toNextStep="toOrderPage($event)"
              ></cart-action>
            </div>

            <!-- 商品情報表示 -->
            <div class="cart-list-items-area py-5" v-if="cart.cartItemInfo.length">
              <div v-for="cartItem in cart.cartItemInfo" :key="cartItem.janCode">
                <cart-item
                  :cartItem="cartItem"
                  :undeletable="isUndeletableCartItem(cartItem)"
                  :disabledTrade="tradeOptions.tokutoku"
                  @delete="deleteCartItems([cartItem])"
                  @buyLater="addBuyLater(cartItem)"
                  @change="updateCartItem($event)"
                ></cart-item>
              </div>

              <!-- クーポン表示 -->
              <cart-coupon-list class="mb-5" :couponList="cart.couponInfo" />

              <!-- トクトク交換の下取り査定依頼品 -->
              <template v-if="tradeOptions.tokutoku && tradeProducts.length">
                <v-row class="cart-list-trade-products-area">
                  <v-col cols="12" md="3" class="cart-list-trade-products-checkbox-area">
                    <v-checkbox
                      hide-details
                      :label="`トクトク交換申込みあり（${tradeProductCount}点）`"
                      class="cart-list-trade-products-checkbox mb-2"
                      v-model="tradeOptions.tokutoku"
                    ></v-checkbox>
                    <v-btn tile color="rgba(0, 0, 0, 0.12)" @click="openDialog('confirm')" v-if="$vuetify.breakpoint.mdAndUp">下取り依頼品の確認</v-btn>
                    <div class="text-right red-font" v-else>{{ cart.upperPrice | price(true) }}円値引</div>
                  </v-col>
                  <v-col cols="9" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-row v-for="(product, index) in tradeProducts" :key="index">
                      <v-col cols="9" class="d-flex">
                        <div class="cart-list-trade-products-name-area">{{ product.itemName }}</div>
                        <div class="my-auto ml-auto pl-4 cart-list-trade-products-count-area">
                          数量
                          <div class="cart-list-trade-products-count px-3 py-2 ml-2">{{ product.count }}</div>
                        </div>
                        <div class="my-auto pl-4">
                          <v-btn tile color="rgba(0, 0, 0, 0.12)" @click="removeTradeProduct(product)"> 削除 </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="3" class="cart-list-trade-products-price-area red-font">{{ product.tradeinPriceS | price() }}円</v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <div class="d-flex pa-4 cart-list-trade-products-confirm-area" v-if="$vuetify.breakpoint.smAndDown">
                  <a class="ml-auto" @click="openDialog('confirm')">下取り依頼品の確認<v-icon right>fas fa-angle-right</v-icon></a>
                </div>
              </template>

              <!-- トクトク交換小計 960px以上 -->
              <v-row class="cart-list-tokutoku-subtotal-area" v-if="tradeOptions.tokutoku && tradeProducts.length && $vuetify.breakpoint.mdAndUp">
                <v-col cols="9" class="text-right">トクトク交換小計（{{ tradeProductCount }}点）</v-col>
                <v-col cols="3" class="text-center">
                  <span class="cart-list-tokutoku-subtotal">{{ cart.upperPrice | price(true) }}</span>
                  <span>円</span>
                </v-col>
              </v-row>

              <!-- 下取り申込みの下取り査定依頼品 -->
              <template v-if="tradeOptions.tradeIn && tradeProducts.length">
                <v-row class="cart-list-trade-products-area">
                  <v-col cols="12" md="3" class="cart-list-trade-products-checkbox-area">
                    <v-checkbox
                      hide-details
                      :label="`下取り申込みあり（${tradeProductCount}点）`"
                      class="cart-list-trade-products-checkbox mb-2"
                      v-model="tradeOptions.tradeIn"
                    ></v-checkbox>
                    <v-btn tile color="rgba(0, 0, 0, 0.12)" @click="openDialog('confirm')" v-if="$vuetify.breakpoint.mdAndUp">下取り依頼品の確認</v-btn>
                  </v-col>
                  <v-col cols="12" md="9" class="pa-0">
                    <v-row v-for="(product, index) in tradeProducts" :key="index" class="cart-list-trade-products-item-area">
                      <!-- 商品画像 960px未満のみ -->
                      <v-col cols="4" v-if="$vuetify.breakpoint.smAndDown">
                        <div class="cart-list-trade-products-img-area">
                          <img class="cart-list-trade-products-img" contain :src="product.imagePath" @error="noimage" :alt="product.itemName" />
                        </div>
                      </v-col>
                      <v-col cols="8" md="9" :class="{ 'd-flex': $vuetify.breakpoint.mdAndUp }">
                        <!-- 商品名 960px以上 -->
                        <div class="cart-list-trade-products-name-area" v-if="$vuetify.breakpoint.mdAndUp">{{ product.itemName }}</div>
                        <!-- 数量 兼用 -->
                        <div class="my-auto ml-auto cart-list-trade-products-count-area" :class="{ 'pl-4': $vuetify.breakpoint.mdAndUp }">
                          数量
                          <div class="cart-list-trade-products-count ml-2">{{ product.count }}</div>
                        </div>
                        <!-- 削除 960px以上のみ -->
                        <div class="my-auto pl-4" v-if="$vuetify.breakpoint.mdAndUp">
                          <v-btn tile color="rgba(0, 0, 0, 0.12)" @click="removeTradeProduct(product)"> 削除 </v-btn>
                        </div>
                        <!-- 商品名、価格 960px未満 -->
                        <div v-else>
                          <div class="cart-list-trade-products-name-area my-2">{{ product.itemName }}</div>
                          <div class="cart-list-trade-products-price-area">
                            下取り上限価格：
                            <span class="red-font">{{ product.tradeinPriceS | price() }}円</span>
                          </div>
                        </div>
                      </v-col>
                      <!-- 価格 960px以上 -->
                      <v-col cols="3" class="cart-list-trade-products-price-area" v-if="$vuetify.breakpoint.mdAndUp">
                        <div>[下取り上限価格]</div>
                        <div>{{ product.tradeinPriceS | price() }}円</div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <div class="d-flex pa-4 cart-list-trade-products-confirm-area" v-if="$vuetify.breakpoint.smAndDown">
                  <a class="ml-auto" @click="openDialog('confirm')">下取り依頼品の確認<v-icon right>fas fa-angle-right</v-icon></a>
                </div>
              </template>
            </div>

            <div class="mb-10 mx-5" v-else>
              <div class="red-font">カートに商品が格納されていません。</div>
              <v-btn class="action-btn my-4" tile color="rgba(0, 0, 0, 0.12)" to="/">
                <b>ネットショップTOPに戻る</b>
              </v-btn>
            </div>
          </div>

          <!-- 操作ボタン系 960px以上 -->
          <div ref="cartRightAreaRef" class="cart-list-action-area" v-if="cart.cartItemInfo.length && $vuetify.breakpoint.mdAndUp">
            <!-- 1280x720の画面サイズだと表示枠がはみ出るため、フローティングは無効となった -->
            <cart-action
              :cart="cart"
              :tradeProducts="tradeProducts"
              :tradeOptions="tradeOptions"
              :parentElementWidth="cartRightAreaWidth"
              :floatable="false"
              @openDialog="openDialog($event)"
              @onChnageOptions="onChnageTradeOptions($event)"
              @onChnageProducts="onChangeTradeProducts($event)"
              @toNextStep="toOrderPage($event)"
            ></cart-action>
          </div>
        </div>
      </div>
    </div>

    <!-- 全体ローディング表示 -->
    <div class="loading-cart-list" v-else>
      <section-loading />
    </div>

    <!-- あとで買う・関連商品・閲覧履歴・よく一緒に買われている商品 -->
    <div
      id="related-products-area"
      class="ec-back-color"
      :class="{
        'related-area-wide': $vuetify.breakpoint.mdAndUp,
        'related-area-narrow': $vuetify.breakpoint.smAndDown
      }"
      v-if="buyLaterProducts.length !== 0 || relatedItems.length !== 0 || revisionHistory.length !== 0 || itemsBoughtTogether.length !== 0"
    >
      <!-- あとで買う商品 -->
      <div
        :class="{
          'slider-area-wide': $vuetify.breakpoint.mdAndUp,
          'slider-area-narrow': $vuetify.breakpoint.smAndDown
        }"
        v-if="!loaded.buyLater || buyLaterProducts.length !== 0"
      >
        <span
          :class="{
            'large-text-wide': $vuetify.breakpoint.mdAndUp,
            'large-text-narrow': $vuetify.breakpoint.smAndDown
          }"
          >あとで買う商品</span
        >
        <template v-if="loaded.buyLater">
          <cart-buy-later-slider :items="buyLaterProducts" @addCart="returnBuyLaterProduct($event)" @removeBuyLater="removeBuyLaterProduct($event)" />
        </template>
        <div class="loading-relative-list" v-if="!loaded.buyLater">
          <section-loading />
        </div>
      </div>

      <!-- 関連商品 -->
      <div
        :class="{
          'slider-area-wide': $vuetify.breakpoint.mdAndUp,
          'slider-area-narrow': $vuetify.breakpoint.smAndDown
        }"
        v-if="!loaded.relatedItems || relatedItems.length !== 0"
      >
        <span
          :class="{
            'large-text-wide': $vuetify.breakpoint.mdAndUp,
            'large-text-narrow': $vuetify.breakpoint.smAndDown
          }"
          >関連商品</span
        >
        <template v-if="loaded.relatedItems">
          <product-slider :isUsed="false" :items="relatedItems" :isRelatedProducts="true" @addCart="onAddCart()" />
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
          <product-slider :isUsed="false" :items="revisionHistory" :isRelatedProducts="false" @addCart="onAddCart()" />
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
          <product-slider :isUsed="false" :items="itemsBoughtTogether" :isRelatedProducts="false" @addCart="onAddCart()" />
        </template>
        <div class="loading-relative-list" v-if="!loaded.itemsBoughtTogether">
          <section-loading />
        </div>
      </div>
    </div>

    <!-- 下取り商品選択ダイアログ 960px以上 -->
    <trade-product-select-dialog
      v-model="tradeProductDialog.select"
      :tokutoku="selectedTokutoku"
      @onChangeDialog="openDialog($event, false)"
      @onSelected="addTradeProducts($event)"
      @cancel="cancelSelectingTradeProducts()"
      v-if="$vuetify.breakpoint.mdAndUp"
    />

    <!-- 下取り商品選択ドロワー 960px未満 -->
    <trade-product-select-drawer
      v-model="tradeProductDialog.select"
      :tokutoku="selectedTokutoku"
      @onChangeDrawer="openDialog($event, false)"
      @onSelected="addTradeProducts($event)"
      @cancel="cancelSelectingTradeProducts()"
      v-else
    />

    <!-- 下取り商品検索ダイアログ 960px以上 -->
    <trade-product-search-dialog
      v-model="tradeProductDialog.search"
      :tokutoku="selectedTokutoku"
      @onSelected="addTradeProducts($event)"
      v-if="$vuetify.breakpoint.mdAndUp"
    />

    <!-- 下取り商品検索ドロワー 960px未満 -->
    <trade-product-search-drawer v-model="tradeProductDialog.search" :tokutoku="selectedTokutoku" @onSelected="addTradeProducts($event)" v-else />

    <!-- 下取り商品確認ダイアログ 960px以上 -->
    <trade-product-confirm-dialog
      v-model="tradeProductDialog.confirm"
      :products="tradeProducts"
      :tokutoku="selectedTokutoku"
      @onChangeDialog="openDialog($event, false)"
      @deleteProduct="removeTradeProduct($event)"
      @cancel="cancelSelectingTradeProducts()"
      v-if="$vuetify.breakpoint.mdAndUp"
    />

    <!-- 下取り商品確認ドロワー 960px未満 -->
    <trade-product-confirm-drawer
      v-model="tradeProductDialog.confirm"
      :products="tradeProducts"
      :tokutoku="selectedTokutoku"
      @onChangeDialog="openDialog($event, false)"
      @deleteProduct="removeTradeProduct($event)"
      v-else
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import SectionLoading from '@/components/common/section-loading.vue';
import CartAction, { TradeOption } from '@/components/cart/cart-list/cart-action.vue';
import { CartItem, CartList, DeletingAssessmentItem, UpdatingAssessmentItem, UpdatingCartItem } from '@/types/cart-list';
import CartItemVue from '@/components/cart/cart-list/cart-item.vue';
import TradeProductSelectDialog from '@/components/cart/cart-list/trade-product-dialog/trade-product-select-dialog.vue';
import TradeProductSearchDialog from '@/components/cart/cart-list/trade-product-dialog/trade-product-search-dialog.vue';
import TradeProductConfirmDialog from '@/components/cart/cart-list/trade-product-dialog/trade-product-confirm-dialog.vue';
import TradeProductSelectDrawer from '@/components/cart/cart-list/trade-product-drawer/trade-product-select-drawer.vue';
import TradeProductSearchDrawer from '@/components/cart/cart-list/trade-product-drawer/trade-product-search-drawer.vue';
import TradeProductConfirmDrawer from '@/components/cart/cart-list/trade-product-drawer/trade-product-confirm-drawer.vue';
import { TradeProductItem } from '@/types/trade-product-list';
import CartService from '@/logic/cart.service';
import ProductService from '@/logic/product.service';
import { RelatedProduct, SimpleProduct, SliderProduct } from '@/types/product';
import ProductSlider from '@/components/product-detail/product-slider.vue';
import CartBuyLaterSliderVue from '@/components/cart/cart-list/cart-buy-later-slider.vue';
import CartCouponList from '@/components/cart/cart-list/cart-coupon-list.vue';
import AuthService from '@/logic/auth.service';

// フィルム貼り付けサービスのJANコード
const FILM_ATTACHMENT_SERVICE_JAN_CODE = '2500000117411';

export default Vue.extend({
  name: 'cart-list-page',
  components: {
    'section-loading': SectionLoading,
    'cart-item': CartItemVue,
    'cart-action': CartAction,
    'product-slider': ProductSlider,
    'cart-buy-later-slider': CartBuyLaterSliderVue,
    'trade-product-select-dialog': TradeProductSelectDialog,
    'trade-product-search-dialog': TradeProductSearchDialog,
    'trade-product-confirm-dialog': TradeProductConfirmDialog,
    'trade-product-select-drawer': TradeProductSelectDrawer,
    'trade-product-search-drawer': TradeProductSearchDrawer,
    'trade-product-confirm-drawer': TradeProductConfirmDrawer,
    'cart-coupon-list': CartCouponList
  },
  setup: (_, context) => {
    const { errorStore, loader, confirmDialogStore } = context.root.$store;

    const state = reactive({
      // カート情報
      cart: {} as CartList,
      // 下取り査定商品
      tradeProducts: [] as Array<TradeProductItem>,
      // 下取りオプション
      tradeOptions: {
        enable: false,
        tradeInAnything: false,
        tradeIn: false,
        tokutoku: false
      },
      // トクトク交換を選択しているかを保持する
      // カート一覧更新に影響されないようにするため
      selectedTokutoku: false,
      // 下取り商品選択ダイアログ
      tradeProductDialog: {
        select: false,
        search: false,
        confirm: false
      } as { [key: string]: boolean },
      // ダイアログ表示のためのログイン中
      loggingInForDialog: false,
      // あとで買う商品
      buyLaterProducts: [] as CartItem[],
      // 関連商品
      relatedItems: [] as RelatedProduct[],
      // 閲覧履歴
      revisionHistory: [] as SliderProduct[],
      // よく一緒に買われている商品
      itemsBoughtTogether: [] as SliderProduct[],
      // 960px以上表示の際の右側要素（フローティング用）
      cartRightAreaRef: ref<HTMLElement>(),
      cartRightAreaWidth: '100%',
      // ロード状態
      loaded: {
        cart: false,
        buyLater: false,
        relatedItems: false,
        revisionHistory: false,
        itemsBoughtTogether: false
      }
    });

    /**
     * カートを取得する
     */
    const searchCart = async () => {
      // 初期表示時はセクションローディングだけを表示する
      if (state.loaded.cart) {
        loader.routeUnset();
      }

      try {
        // カート一覧を取得する
        const result = await CartService.searchCartList();
        state.cart = result;

        // 下取りオプション
        state.tradeOptions.enable = !!state.cart.tradeInHope;
        state.tradeOptions.tradeIn = !!state.cart.selectTrade;
        state.tradeOptions.tokutoku = !!state.cart.selectTokutoku;

        if (state.cart?.cartItemInfo) {
          // フィルム貼付けサービス
          const filtAttchmentServiceIndex = state.cart.cartItemInfo.findIndex((item) => item.janCode === FILM_ATTACHMENT_SERVICE_JAN_CODE);
          if (filtAttchmentServiceIndex !== -1) {
            state.cart.cartItemInfo[filtAttchmentServiceIndex].imagePath = require('@/assets/cart/film-attachment-service.svg');
          }

          // カート内詳細の「なんでも下取り」によって、全体のオプションを切り替える
          if (state.cart.cartItemInfo.every((item) => item.isTrade)) {
            state.tradeOptions.enable = true;
            state.tradeOptions.tradeInAnything = true;
          } else if (state.cart.cartItemInfo.every((item) => !item.isTrade)) {
            state.tradeOptions.tradeInAnything = false;
          }
        }

        // 査定情報
        state.tradeProducts = CartService.convertToTradeProducts(state.cart.assessmentInfo || []);
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.cart = true;
        loader.routeLoaded();
      }
    };

    /**
     * 削除不可のカート内容かどうか
     */
    const isUndeletableCartItem = (cartItem: CartItem) => {
      return cartItem.janCode === FILM_ATTACHMENT_SERVICE_JAN_CODE;
    };

    /**
     * あとで買う商品を取得する
     */
    const getBuyLateProducts = () => {
      const products = CartService.getBuyLaterItems();
      state.buyLaterProducts = products;
      state.loaded.buyLater = true;
    };

    /**
     * 商品詳細APIから関連商品を取得する
     */
    const searchRelatedProducts = async () => {
      try {
        const janCodes = state.cart.cartItemInfo.map((item) => item.janCode);
        let relatedItems: RelatedProduct[] = [];
        for (const janCode of janCodes) {
          const result = await ProductService.fetchProducts([janCode], false);
          relatedItems = relatedItems.concat(result.items[0].relatedItems);
        }
        state.relatedItems = relatedItems;
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.relatedItems = true;
      }
    };

    /**
     * リコメンドエンジンから「閲覧履歴」を取得する
     */
    const searchRevisionHistory = async () => {
      state.revisionHistory = [];

      const customerId = '35007';
      const recommendId = '8'; // 閲覧履歴

      try {
        const recResult = await ProductService.searchRecommendProducts(customerId, recommendId, '', 'fetchViewHistories');
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
      } catch (error) {
        console.log(error);
      } finally {
        state.loaded.revisionHistory = true;
      }
    };

    /**
     * カート商品の値段を比較する
     */
    const compareCartItemPrice = (a: CartItem, b: CartItem) => {
      if (a.price - b.price) {
        return a;
      } else {
        return b;
      }
    };

    /**
     * リコメンドエンジンから「よく一緒に買われている商品」を取得する
     * 複数商品がある場合、一番高い商品のJANコードを渡す
     */
    const searchitemsBoughtTogether = async () => {
      // 初期化
      state.itemsBoughtTogether = [];

      // 値段が一番高い商品を検索
      if (!state.cart?.cartItemInfo?.length) {
        state.loaded.itemsBoughtTogether = true;
        return;
      }
      const cartItem = state.cart?.cartItemInfo.reduce(compareCartItemPrice);
      if (!cartItem?.janCode) {
        state.loaded.itemsBoughtTogether = true;
        return;
      }

      const customerId = '35007';
      const recommendId = '20'; // よく一緒に買われている商品

      try {
        const recResult = await ProductService.searchRecommendProducts(customerId, recommendId, cartItem.janCode, 'fetchBoughtTogetherProducts');
        // ロード完了フラグ (レスポンス正常でlength === 0 の場合もありうるため)
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
      } catch (error) {
        console.log(error);
      } finally {
        state.loaded.itemsBoughtTogether = true;
      }
    };

    /**
     * 初期化
     */
    const init = async () => {
      // カート情報を取得する
      await searchCart();

      // あとで買う商品を取得する
      getBuyLateProducts();

      // 関連商品を取得する
      searchRelatedProducts();

      // 閲覧履歴を取得する
      searchRevisionHistory();

      // よく一緒に買われる商品を取得する
      searchitemsBoughtTogether();
    };

    /**
     * 初期表示
     */
    onMounted(() => {
      document.title = '【カメラのキタムラ】カートの中身';

      // 初期化
      init();
    });

    // ログイン状況を監視する
    const { authorizer } = context.root.$store;
    watch(
      () => authorizer.isLoggedIn,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          init();
        }
      }
    );

    /** -------------------------------------------------------------
     * カート商品
     ------------------------------------------------------------- */
    /**
     * カートに商品が追加されたとき
     */
    const onAddCart = () => {
      init();
    };

    /**
     * カートを更新する
     */
    const updateCartItem = async (updatingCartItem: UpdatingCartItem | UpdatingCartItem[]) => {
      loader.routeUnset();
      try {
        // 下取り希望あり
        const tradeIn = state.tradeOptions.enable;

        const updatingCartItems = Array.isArray(updatingCartItem) ? updatingCartItem : [updatingCartItem];
        await CartService.updateCartList(state.cart.cartId, tradeIn, updatingCartItems);
      } catch (error) {
        console.error(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /**
     * カートを削除する
     */
    const deleteCartItems = async (cartItems: CartItem[]) => {
      const confirm = await confirmDialogStore.open('削除してもよろしいですか？');
      if (!confirm) {
        return;
      }

      loader.routeUnset();
      try {
        const janCodes = cartItems.map((item) => item.janCode);
        await CartService.deleteCartItems(state.cart.cartId, janCodes);
      } catch (error) {
        console.log(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /**
     * カートを空にする
     */
    const clearCartItems = () => {
      deleteCartItems(state.cart.cartItemInfo);
    };

    /** -------------------------------------------------------------
     * あとで買う
     ------------------------------------------------------------- */
    /**
     * 「あとで買う」に追加する
     */
    const addBuyLater = async (cartItem: CartItem) => {
      loader.routeUnset();
      try {
        await CartService.addBuyLater(state.cart.cartId, cartItem);
      } catch (error) {
        console.log(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /**
     * あとで買う商品を削除する
     */
    const removeBuyLaterProduct = (index: number) => {
      state.buyLaterProducts.splice(index, 1);
      CartService.updateBuyLaterAll(state.buyLaterProducts);
    };

    /**
     * あとで買う商品をカートに戻す
     */
    const returnBuyLaterProduct = async (index: number) => {
      loader.routeUnset();
      try {
        // カートに投入
        const product = state.buyLaterProducts[index];
        await ProductService.addCart(product.janCode, product.isChuko, null, product.unitPrice, 1);

        // あとで買う商品から削除
        removeBuyLaterProduct(index);
      } catch (error) {
        console.log(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /** -------------------------------------------------------------
     * ダイアログ
     ------------------------------------------------------------- */
    /**
     * ダイアログを開く
     */
    const openDialog = (type: string, init = true, notLoginSelect = false) => {
      if (init) {
        state.selectedTokutoku = state.tradeOptions.tokutoku;
      }

      for (const key in state.tradeProductDialog) {
        state.tradeProductDialog[key] = false;
      }

      if (type === 'select' && !authorizer.isLoggedIn && !notLoginSelect) {
        authorizer.openLoginMenu();
        state.loggingInForDialog = true;
        return;
      }

      state.tradeProductDialog[type] = true;
      state.loggingInForDialog = false;
    };

    /** -------------------------------------------------------------
     * 下取申込
     ------------------------------------------------------------- */
    /**
     * 下取り査定の設定が変化した場合、更新する
     */
    const onChnageTradeOptions = (tradeOptions: TradeOption) => {
      state.tradeOptions = tradeOptions;
    };

    /**
     * 下取り査定商品が変化した場合、更新する
     */
    const onChangeTradeProducts = (tradeProducts: Array<TradeProductItem>) => {
      state.tradeProducts = tradeProducts;
    };

    /**
     * 下取り希望を更新する
     */
    const updateTradeInHope = async (tradeInHope: boolean) => {
      loader.routeUnset();
      try {
        await CartService.updateCartList(state.cart.cartId, tradeInHope);
      } catch (error) {
        console.error(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /**
     * 下取り査定商品を追加する
     */
    const addTradeProducts = async (products: Array<TradeProductItem>) => {
      loader.routeUnset();

      try {
        const assessmentCd = state.selectedTokutoku ? 1 : 2;
        const assessmentItems: UpdatingAssessmentItem[] = [];
        for (const product of products) {
          for (let i = 0; i < product.count; i++) {
            assessmentItems.push({
              command: 1,
              janCode: product.janCode,
              usedQuotesCode: product.usedQuotesCode,
              itemName: product.itemName,
              tradeinPriceS: product.tradeinPriceS,
              tradeinPriceC: product.tradeinPriceC || 0,
              assessPriceS: product.assessPriceS || 0,
              assessPriceC: product.assessPriceC || 0,
              isPriceGuarantee: !!product.isPriceGuarantee
            });
          }
        }

        await CartService.updateAssessment(state.cart.cartId, assessmentCd, assessmentItems);
      } catch (error) {
        console.error(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /**
     * 下取り査定依頼品を削除する
     */
    const removeTradeProduct = async (product: TradeProductItem | TradeProductItem[]) => {
      loader.routeUnset();
      try {
        const products = Array.isArray(product) ? product : [product];

        const assessmentCd = state.cart.selectTokutoku ? 1 : 2;
        const assessmentItems: DeletingAssessmentItem[] = [];
        for (const item of products) {
          for (const rowNo of item.rowNo || []) {
            assessmentItems.push({
              command: 2,
              rowNo
            });
          }
        }

        await CartService.deleteAssessment(state.cart.cartId, assessmentCd, assessmentItems);
      } catch (error) {
        console.error(error);
      } finally {
        loader.routeLoaded();
        // 初期化する
        init();
      }
    };

    /**
     * 下取り査定商品の選択をキャンセルする
     */
    const cancelSelectingTradeProducts = () => {
      state.tradeOptions.tradeIn = false;
      state.tradeOptions.tokutoku = false;
    };

    // 下取申込査定品の数
    const tradeProductCount = computed(() => state.tradeProducts.reduce((sum, item) => sum + item.count, 0));

    /**
     * カート内の「なんでも下取り」を設定する
     */
    const setTradeInAnyInCartAll = (tradeInAny: boolean) => {
      const tradableInItems = state.cart.cartItemInfo.filter((cartItem) => cartItem.canTrade);
      const updatingCartItems = tradableInItems.map((cartItem) => {
        const updatingCartItem: UpdatingCartItem = {
          janCode: cartItem.janCode,
          command: 2,
          count: cartItem.count,
          isTrade: tradeInAny,
          isWrapping: !!cartItem.isWrapping,
          isWarranty: cartItem.isWarranty
        };

        // ラッピングをする場合、ラッピングのJANコードを返す
        if (cartItem.isWrapping) {
          updatingCartItem.wrappingJanCode = cartItem.wrappingJanCode;
        }

        return updatingCartItem;
      });

      // カートを更新
      updateCartItem(updatingCartItems);
    };

    /** -------------------------------------------------------------
     * 購入手続き
     ------------------------------------------------------------- */
    /**
     * 購入手続きに進む
     */
    const toOrderPage = async (couponCode: string) => {
      if (authorizer.isLoggedIn) {
        try {
          // ログインしたままセッションが切れていないか確認し、切れていたら警告する
          await AuthService.checkLoginStatus();
          if (!authorizer.user?.cartItemCount || authorizer.user.cartItemCount < 1) {
            init();
            errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
            return;
          }

          // ラッピングの指定が１つ以上あって、下取り申込があるとき、警告する
          const existEnabledWrapping = state.cart.cartItemInfo.some((item) => item.isWrapping);
          if (existEnabledWrapping && state.tradeOptions.tradeIn) {
            errorStore.errorMessage = '店舗限定サービスの下取りのお申し込みがある場合、ラッピングは承ることができません。';
            return;
          }

          // クーポン適用
          if (couponCode) {
            await CartService.applyCoupon(state.cart.cartId, couponCode);
          }

          // レジ情報をクリア
          await CartService.clearCashRegisterInfo();

          // トクトク交換が適用されている場合、事前チェックページに遷移させる
          if (state.tradeOptions.tokutoku) {
            context.root.$router.push({ name: 'order-precheck-page', query: { step: 'precheck' } });
          } else {
            context.root.$router.push({ name: 'order-page' });
          }
        } catch (error) {
          console.error(error);

          // カートIDが更新されている可能性があるため、カート一覧を更新する
          init();
        }
      } else {
        alert('購入手続きに進むにはログインが必要です。');
        authorizer.openLoginMenu();
      }
    };

    /** -------------------------------------------------------------
     * 監視対象
     ------------------------------------------------------------- */
    // 下取りオプションを監視する
    watch(
      () => [state.tradeOptions.tradeInAnything, state.tradeOptions.tradeIn, state.tradeOptions.tokutoku],
      async ([newTradeInAny, newTradeIn, newTokutoku], [oldTradeInAny, oldTradeIn, oldTokutoku]) => {
        // カートの中身が空の場合は以下の処理をスルーする。
        // カートの中身を削除した際に全体が非表示となり、監視対象の値が更新されてしまい、不要な動作が起きるため。
        if (state.cart.cartItemInfo.length <= 0) {
          return;
        }

        if (newTradeInAny !== oldTradeInAny) {
          // 商品ごとのなんでも下取りを切替る
          setTradeInAnyInCartAll(newTradeInAny);
        } else if (newTradeIn && !oldTradeIn && !state.tradeProducts.length) {
          const existEnabledWrapping = state.cart.cartItemInfo.some((item) => item.isWrapping);
          if (existEnabledWrapping) {
            const confirm = await confirmDialogStore.open('下取りのお申込みは店舗受取り限定サービスのため、ラッピングはご指定いただけません');
            if (!confirm) {
              state.tradeOptions.tradeIn = false;
              return;
            }
          }

          // 下取りがONになった際にトクトク交換をOFFにする
          state.tradeOptions.tokutoku = false;
          state.selectedTokutoku = state.tradeOptions.tokutoku;
          updateTradeInHope(true);

          // ダイアログを開く
          openDialog('select');
        } else if (newTokutoku && !oldTokutoku && !state.tradeProducts.length) {
          // トクトク交換がONになった際に下取りをOFFにする
          state.tradeOptions.tradeIn = false;
          state.selectedTokutoku = state.tradeOptions.tokutoku;
          updateTradeInHope(true);

          // ダイアログを開く
          openDialog('select');
        } else if (((!newTradeIn && oldTradeIn) || (!newTokutoku && oldTokutoku)) && state.tradeProducts.length) {
          // 下取りまたはトクトク交換がOFFになった際に選択していた査定依頼品を空にする
          removeTradeProduct(state.tradeProducts);
        }
      }
    );

    // 下取りオプションの有効/無効を監視する
    watch(
      () => state.tradeOptions.enable as boolean,
      (newEnableValue, oldEnableValue) => {
        // カートの中身が空の場合は以下の処理をスルーする。
        // カートの中身を削除した際に全体が非表示となり、監視対象の値が更新されてしまい、不要な動作が起きるため。
        if (state.cart.cartItemInfo.length <= 0) {
          return;
        }

        // 下取り査定希望がOFFの場合、その中の選択もOFFにする
        if (!newEnableValue && oldEnableValue) {
          // 下取り品が指定されている場合
          if (state.tradeProducts.length) {
            const optionType = state.cart.selectTrade ? '下取り' : 'トクトク交換';
            errorStore.errorMessage = `下取り品が指定されています。${optionType}を希望しない場合は登録を削除してください。`;
          }

          state.tradeOptions.tradeInAnything = false;
          state.tradeOptions.tradeIn = false;
          state.tradeOptions.tokutoku = false;
        }
      }
    );

    // ログイン状況を監視する
    watch(
      () => [authorizer.isLoggedIn, authorizer.loginMenuOpenState],
      ([isLoggedIn, loginMenuOpenState]) => {
        if (state.loggingInForDialog && isLoggedIn) {
          // ログインされたら下取申込査定依頼品選択モーダルを開く
          openDialog('select', false);
        } else if (state.loggingInForDialog && !loginMenuOpenState) {
          // ログインダイアログが綴じたのにログインが完了していない場合、選択モーダルを開く
          openDialog('select', false, true);
        }
      }
    );

    // ダイアログの開閉状態を監視する
    watch(
      () => state.tradeProductDialog,
      (newDialogValue) => {
        setTimeout(() => {
          // ダイアログが閉じられた時、依頼品が選択されていなければ、申込みはキャンセルとみなす
          const isClosedAll = Object.values(newDialogValue).every((value) => !value);
          if (isClosedAll && !state.tradeProducts.length) {
            cancelSelectingTradeProducts();
          }
        });
      },
      { deep: true }
    );

    // カートの中身を監視し、なんでも下取りのフラグを制御する
    watch(
      () => state.cart.cartItemInfo as CartItem[],
      (cartItemInfo) => {
        const tradableInItems = cartItemInfo.filter((item) => item.canTrade);
        if (!tradableInItems.length) {
          return;
        }

        const selectedAll = tradableInItems.every((item) => item.isTrade);
        if (selectedAll && !state.tradeOptions.tradeInAnything) {
          state.tradeOptions.tradeInAnything = true;
        }

        const notSelectedAll = tradableInItems.every((item) => !item.isTrade);
        if (notSelectedAll && state.tradeOptions.tradeInAnything) {
          state.tradeOptions.tradeInAnything = false;
        }
      },
      { deep: true }
    );

    /** -------------------------------------------------------------
     * フローティング
     ------------------------------------------------------------- */
    // 要素が生成されたことを検知する
    watch(
      () => state.cartRightAreaRef?.clientWidth,
      (width) => {
        state.cartRightAreaWidth = width ? `${width}px` : '100%';
      }
    );

    // 画面のリサイズはwatchでは検知できないので、resizeイベントで更新する
    window.addEventListener('resize', () => {
      state.cartRightAreaWidth = state.cartRightAreaRef ? `${state.cartRightAreaRef.clientWidth}px` : '100%';
    });

    return {
      ...toRefs(state),
      init,
      clearCartItems,
      onChnageTradeOptions,
      onChangeTradeProducts,
      removeTradeProduct,
      addTradeProducts,
      openDialog,
      cancelSelectingTradeProducts,
      addBuyLater,
      deleteCartItems,
      removeBuyLaterProduct,
      returnBuyLaterProduct,
      onAddCart,
      updateCartItem,
      noimage,
      isUndeletableCartItem,
      toOrderPage,
      tradeProductCount
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// ローディング
.loading-cart-list,
.loading-relative-list {
  height: 20vh;
  width: 100%;
}
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

/** -------------------------------
  カート一覧
------------------------------- */
$left-area-width: 70%;

.cart-list {
  &-page-title {
    font-size: 2em;
    font-weight: bold;
  }

  &-clear-btn {
    font-size: 1.1em;
    font-weight: bold;
    text-transform: none;

    &.v-btn {
      height: 48px;
      padding: 0 32px;
    }
  }

  &-main-area {
    width: $left-area-width;
  }

  &-action-area {
    margin-left: 5px;
    width: calc(100% - #{$left-area-width} - 5px);
  }

  &-items-area {
    border-top: 1px solid $ec-grey;

    .row {
      margin: 0;
    }
  }

  &-product-price {
    font-size: 1.4em;

    &-area {
      background-color: $bg-light-grey3;
    }
  }

  &-payment-price {
    font-size: 1.5em;

    &-title {
      font-weight: bold;
      font-size: 1.5em;
    }

    &-title-area {
      text-align: right;
    }

    &-area {
      background-color: $bg-light-red3;
    }
  }

  &-shipping-chage {
    text-align: center;
    &-title {
      text-align: right;
    }
  }

  &-tokutoku-subtotal {
    font-size: 1.2em;

    &-area {
      background-color: $bg-light-grey3;
    }
  }

  &-trade-products {
    &-checkbox {
      ::v-deep .v-label {
        font-size: 1.2em;
        color: $text-black;
        font-weight: bold;
      }
    }

    &-name-area {
      @include ellipsis(48px);
    }

    &-img-area {
      display: flex;
    }

    &-img {
      width: 100%;
      max-width: 150px;
      margin: 0 auto 8px;
    }

    &-count {
      min-width: 60px;
      border: 1px solid $ec-black;
      border-radius: 4px;
      text-align: center;
      padding: 8px 12px;

      &-area {
        white-space: nowrap;
        display: flex;
        align-items: center;
      }
    }

    &-price-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

/** -------------------------------
  あとで買う・関連商品・閲覧履歴
  よく一緒に買われている商品 960px以上
------------------------------- */
.related-area-wide {
  max-width: 100%;
  padding: 20px 50px;
  position: relative;
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

/** -------------------------------
  カート一覧 960px未満
------------------------------- */
.container-narrow {
  .cart-list {
    &-page-title {
      font-size: 1.5em;
    }

    &-main-area {
      width: 100%;
    }

    &-product-price {
      font-size: 1.2em;

      &-title {
        font-weight: bold;
      }

      &-title-area {
        display: flex;
        align-items: baseline;
        text-align: left;
      }
    }

    &-payment-price {
      font-size: 1.3em;

      &-title {
        font-size: 1.3em;
      }

      &-title-area {
        display: flex;
        align-items: baseline;
        text-align: left;
      }
    }

    &-shipping-chage {
      text-align: right;
      &-title {
        text-align: left;
      }
    }

    &-trade-products {
      &-checkbox-area {
        background-color: $bg-light-grey3;
        border-bottom: 1px dotted $ec-light-grey2;
      }

      &-item-area {
        border-bottom: 1px dotted $ec-light-grey2;
      }

      &-name-area {
        @include ellipsis(40px);
        font-size: 0.9em;
      }

      &-count {
        padding: 4px 12px;
      }

      &-price-area {
        font-size: 0.9em;
        flex-direction: row;
        justify-content: flex-start;
        font-weight: bold;
      }

      &-confirm-area {
        background-color: $bg-light-grey3;
        border-bottom: 1px solid $ec-light-grey2;
      }
    }
  }
}

/** -------------------------------
  あとで買う・関連商品・閲覧履歴
  よく一緒に買われている商品 960px未満
------------------------------- */
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
</style>
