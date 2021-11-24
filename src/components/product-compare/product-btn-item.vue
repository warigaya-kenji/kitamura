<template>
  <div
    class="product-btn-item"
    :class="{
      'pa-4': $vuetify.breakpoint.mdAndUp,
      'pa-2': $vuetify.breakpoint.smAndDown,
      dashed: borderDashed
    }"
  >
    <!-- 詳細をみる -->
    <v-btn class="product-detail-btn mb-2" depressed block outlined :to="`/ec/pd/${productBtnInfo.janCode}`" target="_blank"
      >詳細をみる<v-icon class="product-detail-btn-icon" small>fas fa-chevron-right</v-icon></v-btn
    >

    <!-- カートに入れるのダイアログ 960px以上 -->
    <v-dialog id="cart-dialog" class="dialog" v-model="cartDialog" width="1000px" v-if="$vuetify.breakpoint.mdAndUp">
      <template v-slot:activator="{ attrs }">
        <v-btn
          id="product-cart-btn"
          class="product-cart-btn"
          depressed
          block
          dark
          @click="openCartOptionDialog(productBtnInfo.janCode)"
          v-bind="attrs"
          :disabled="productBtnInfo.isSalesEnd"
        >
          <span v-if="productBtnInfo.isSalesEnd">販売終了</span>
          <span v-else> <v-icon class="product-cart-btn-icon" small>fas fa-shopping-cart</v-icon>カートに入れる</span>
        </v-btn>
      </template>

      <v-card class="cart-dialog">
        <div class="cart-dialog-basic d-flex">
          <div class="cart-dialog-price">
            <v-row>
              <v-col cols="3" class="ma-auto">{{ getProductPriceLabel }}</v-col>
              <v-col cols="9">
                <span class="sell-price-font">{{ productDetail.price | price }}円</span><span class="red-font">（税込）</span><br />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">送料</v-col>
              <v-col cols="9">
                <span :class="{ 'red-font': getPostage != '有料' }">
                  {{ getPostage }}
                </span>
              </v-col>
            </v-row>
          </div>
          <div class="cart-dialog-btn-area">
            <v-btn class="cart-dialog-btn" tile block dark @click="addCart()">
              <v-icon class="cart-dialog-btn-icon" small>fas fa-shopping-cart</v-icon>カートに入れる
            </v-btn>
          </div>
        </div>

        <!-- カートに入れるオプション -->
        <product-cart-option :product="productDetail" v-model="selectedOption" />
      </v-card>
    </v-dialog>

    <!-- カートに入れる 960px未満 -->
    <v-btn
      id="product-cart-btn"
      class="product-cart-btn"
      depressed
      block
      dark
      @click="openCartOptionDialog(productBtnInfo.janCode)"
      :disabled="productBtnInfo.isSalesEnd"
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <span v-if="productBtnInfo.isSalesEnd">販売終了</span>
      <span v-else><v-icon class="product-cart-btn-icon" small>fas fa-shopping-cart</v-icon>カートに入れる</span>
    </v-btn>

    <!-- カートに入れる:ドロワー 960px未満  -->
    <v-navigation-drawer class="drawer-layout cart-drawer" v-model="cartDrawer" fixed right temporary v-if="$vuetify.breakpoint.smAndDown">
      <div class="drawer-layout-area">
        <div class="drawer-layout-back" @click="cartDrawer = !cartDrawer">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>
        <div class="drawer-layout-contents">
          <div class="cart-drawer-btn-area" @click="cartDrawer = !cartDrawer">
            <v-btn class="cart-drawer-btn" tile block dark @click="addCart()">
              <v-icon class="cart-drawer-btn-icon" small>fas fa-shopping-cart</v-icon>カートに入れる
            </v-btn>
          </div>
          <!-- カートに入れるオプション -->
          <product-cart-option :product="productDetail" v-model="selectedOption" />
        </div>
      </div>
    </v-navigation-drawer>

    <!-- カート投入後の選択ダイアログ -->
    <cart-inserted-dialog v-model="cartInsertedDialog"></cart-inserted-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, computed } from '@vue/composition-api';
import { PRODUCT_FLAG } from '@/constants/product-flag';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import ProductCartOption from '@/components/common/product-cart-option.vue';
import CartInsertedDialog from '@/components/common/cart-inserted-dialog.vue';

type ProductBtnInfo = {
  // 商品コード
  janCode: string;
  // 完了品フラク
  isSalesEnd: boolean;
};

export default Vue.extend({
  name: 'product-btn-item',
  components: {
    'product-cart-option': ProductCartOption,
    'cart-inserted-dialog': CartInsertedDialog
  },
  props: {
    productBtnInfo: {
      type: Object as PropType<ProductBtnInfo>,
      required: true
    },
    borderDashed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup: (_, context) => {
    const state = reactive({
      productDetail: {} as ProductDetail,
      cartDialog: false,
      cartDrawer: false,
      // 購入時のオプション
      selectedOption: {
        warranty: false,
        tradeInHope: false
      },
      cartInsertedDialog: false
    });

    // フラグ
    function includeFlag(flagNum: number): boolean {
      return ProductService.includeFlag(state.productDetail.flags, flagNum);
    }

    // カート投入
    function addCart() {
      const displayPrice = state.productDetail.price;
      const options = state.selectedOption;
      ProductService.addCart(state.productDetail.janCode, false, options, displayPrice, 1).then(() => {
        // 買い物を続けるかを確認する
        state.cartInsertedDialog = true;

        // オプションを閉じる
        state.cartDialog = false;
        state.cartDrawer = false;
      });
    }

    // 商品詳細取得
    const openCartOptionDialog = (jancode: string) => {
      ProductService.fetchProducts([jancode], false).then((result) => {
        state.productDetail = result.items[0];

        // オプション（5年保証、下取り）が有効か
        // 比較ページは新品のみである前提の条件
        const enabledCartOption =
          includeFlag(PRODUCT_FLAG.FIVE_YEAR_WARRANTY_COVERAGE) ||
          includeFlag(PRODUCT_FLAG.TOKUTOKU_EXCHANGE_TARGET) ||
          includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) ||
          includeFlag(PRODUCT_FLAG.TRADE_IN_ASSESSMENT_TARGET);

        if (enabledCartOption) {
          // オプション（5年保証、下取り）が出来る場合にオプションダイアログを表示する
          state.cartDialog = true;
          state.cartDrawer = true;
        } else {
          addCart();
        }
      });
    };

    // 商品価格ラベル
    const getProductPriceLabel = computed((): string => {
      if (state.productDetail.templateId === 468) {
        return 'アウトレット価格';
      } else {
        switch (state.productDetail.priceDiv) {
          case 2:
            return '会員価格';
          case 3:
            return '特別価格';
          case 4:
            return '限定価格';
          default:
            return '価格';
        }
      }
    });

    // 送料
    const getPostage = computed((): string => {
      if (includeFlag(PRODUCT_FLAG.FREE_SHIPPING)) {
        if (includeFlag(PRODUCT_FLAG.NEKOPOSU_TARGET)) {
          return 'ネコポスなら送料無料';
        } else {
          return '送料無料';
        }
      } else if (includeFlag(PRODUCT_FLAG.STORE_DELIVERY_AVAILABLE)) {
        return '店舗受取りなら送料無料';
      } else {
        return '有料';
      }
    });

    return {
      PRODUCT_FLAG,
      ...toRefs(state),
      openCartOptionDialog,
      getProductPriceLabel,
      includeFlag,
      getPostage,
      addCart
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
$compare-border: solid 1px $ec-light-grey2;
$compare-border-dash: dashed 1px $ec-light-grey2;

.dialog {
  z-index: 600;
}

.red-font {
  color: $text-red;
}

.sell-price-font {
  font-size: 28px;
  color: $text-red;
  font-weight: bold;
}

@at-root %compare-btn {
  position: relative;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}

/** -------------------------------
  商品ボタン群 960px以上
------------------------------- */
.product-btn-item {
  border-top: $compare-border;

  &.dashed {
    border-top: $compare-border-dash;
  }

  .product {
    &-detail-btn {
      @extend %compare-btn;
      background-color: $bg-white;
      border-color: $ec-grey;

      &-icon {
        @extend %compare-btn-icon;
        right: 0;
      }
    }

    &-cart-btn {
      @extend %compare-btn;
      background-color: $bg-orange;

      &-icon {
        @extend %compare-btn-icon;
        left: 0;
      }
    }
  }
}

// カートに入れるダイアログ
.cart-dialog {
  &-basic {
    padding: 20px 40px;
  }

  &-price {
    width: 500px;
    margin-left: 150px;
  }

  &-btn-area {
    width: 300px;
  }

  &-btn {
    @extend %compare-btn;
    font-size: 18px;
    height: 60px !important;
    background-color: $bg-orange !important;

    &-icon {
      @extend %compare-btn-icon;
      left: 0;
    }
  }
}

/** -------------------------------
  商品ボタン群 960px未満
------------------------------- */
.container-narrow {
  .product-btn-item {
    .product {
      &-cart-btn {
        padding: 0 8px;

        &-icon {
          position: relative;
          margin-right: 4px;
        }
      }
    }
  }

  // 共通：ドロワー
  .drawer-layout {
    z-index: 510;
    width: 100% !important;

    &-area {
      height: 100%;
    }

    $drawer-back-height: 45px;
    $drawer-back-border-b: 1px;
    &-back {
      padding: 0 12px;
      height: $drawer-back-height;
      line-height: calc(#{$drawer-back-height} - #{$drawer-back-border-b});
      border-bottom: solid $drawer-back-border-b $ec-light-grey2;

      &-icon {
        color: $ec-grey;
        margin-right: 8px;
      }

      &-text {
        vertical-align: middle;
      }
    }

    &-contents {
      min-height: calc(100% - #{$drawer-back-height});
    }
  }

  // カートに入れるドロワー
  .cart-drawer {
    &-btn-area {
      padding: 12px;
    }

    &-btn {
      @extend %compare-btn;
      font-size: 18px;
      height: 60px !important;
      background-color: $bg-orange !important;

      &-icon {
        @extend %compare-btn-icon;
        left: 0;
      }
    }
  }
}
</style>
