<template>
  <div class="cart-item" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-row class="cart-item-content-area">
      <!-- 商品画像 -->
      <v-col cols="4" md="2">
        <div class="cart-item-img-area">
          <img class="cart-item-img" contain :src="cartItem.imagePath" @error="noimage" :alt="cartItem.itemName" />
        </div>
      </v-col>

      <!-- 商品情報 -->
      <v-col cols="8" md="7">
        <!-- 商品名 -->
        <span class="cart-item-name-area">
          <router-link class="cart-item-link" :to="cartItem.isChuko ? `/ec/used/${cartItem.janCode}` : `/ec/pd/${cartItem.janCode}`">
            <span class="cart-item-name">{{ cartItem.itemName }}</span>
          </router-link>
        </span>

        <!-- 数量・削除・あとで買う 960px以上 -->
        <div class="d-flex align-baseline" v-if="$vuetify.breakpoint.mdAndUp">
          数量
          <div class="cart-item-count-area mx-4">
            <v-select :items="countList" outlined dense v-model="count" @change="onChangeCartOptions"></v-select>
          </div>
          <v-btn class="px-6 mx-4" tile color="rgba(0, 0, 0, 0.12)" @click="deleteItem()">削除</v-btn>
          <v-btn class="mx-4" tile color="rgba(0, 0, 0, 0.12)" @click="buyLater()" v-show="!undeletable">あとで買う</v-btn>
        </div>

        <!-- オプション 960px以上 -->
        <v-row v-if="$vuetify.breakpoint.mdAndUp">
          <v-col cols="6" class="pa-1" v-if="cartItem.canWarranty">
            <div class="d-flex cart-item-option" :class="{ checked: isWarranty }">
              <v-checkbox hide-details class="cart-item-option-checkbox my-auto" v-model="isWarranty" @change="onChangeCartOptions">
                <template v-slot:label>
                  <b class="ma-auto cart-item-option-checkbox-label">
                    5年間保証に加入する<br />
                    （保証料金：<span class="red-font">{{ cartItem.warrantyPrice | price() }}円</span>）
                  </b>
                  <a href="/sitemap/riyou_hoshou_index.html" class="d-flex" target="_blank" @click.stop>
                    <v-icon>far fa-question-circle</v-icon>
                  </a>
                </template>
              </v-checkbox>
            </div>
          </v-col>
          <v-col cols="6" class="pa-1" v-if="cartItem.canTrade">
            <div class="d-flex cart-item-option" :class="{ checked: isTrade, disabled: disabledTrade }">
              <v-checkbox hide-details class="cart-item-option-checkbox my-auto" v-model="isTrade" :disabled="disabledTrade" @change="onChangeCartOptions">
                <template v-slot:label>
                  <b class="ma-auto cart-item-option-checkbox-label">
                    なんでも下取り申込み<br />
                    <span v-if="cartItem.tradePrice">
                      （<span class="red-font">{{ Math.abs(cartItem.tradePrice) | price() }}円値引</span>）
                    </span>
                  </b>
                  <a href="/sitemap/riyou_shitadori_index.html" class="d-flex" target="_blank" @click.stop>
                    <v-icon> far fa-question-circle </v-icon>
                  </a>
                </template>
              </v-checkbox>
            </div>
          </v-col>
          <v-col cols="6" class="pa-1" v-if="cartItem.canWrapping">
            <div class="d-flex cart-item-option" :class="{ checked: isWrapping }">
              <v-checkbox hide-details class="cart-item-option-checkbox my-auto" v-model="isWrapping" @change="onChangeCartOptions">
                <template v-slot:label>
                  <b class="ma-auto cart-item-option-checkbox-label">
                    ラッピング(<span class="red-font">{{ CART_OPTIONS.WRAPPING_PRICE | price() }}円</span>)<br />
                    ※宅配限定
                  </b>
                  <a href="/special/sale-fair/page/wrapping-gift/" class="d-flex" target="_blank" @click.stop>
                    <v-icon> far fa-question-circle </v-icon>
                  </a>
                </template>
              </v-checkbox>
            </div>
          </v-col>
        </v-row>

        <!-- 値段 960px未満 -->
        <div class="cart-item-price-area" v-if="$vuetify.breakpoint.smAndDown">
          <div class="cart-item-text">
            <b>単価：</b>
            <span class="red-font">
              <span class="cart-item-price">{{ cartItem.unitPrice | price() }}</span>
              <span>円</span>
            </span>
            <span class="d-inline-block">（税込）</span>
          </div>
        </div>
      </v-col>

      <!-- 値段 960px以上 -->
      <v-col cols="3" class="text-center" v-if="$vuetify.breakpoint.mdAndUp">
        <div class="cart-item-price-area">
          <div class="cart-item-text">
            <b>単価：</b>
            <span class="red-font">
              <span class="cart-item-price">{{ cartItem.unitPrice | price() }}</span>
              <span>円</span>
            </span>
            <span class="d-inline-block">（税込）</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- 数量 960px未満 -->
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col>
        <div class="d-flex align-baseline">
          数量
          <div class="cart-item-count-area mx-4">
            <v-select :items="countList" outlined dense hide-details v-model="count" @change="onChangeCartOptions"></v-select>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- 削除・あとで買う 960px未満 -->
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col>
        <div class="d-flex justify-end">
          <v-btn class="px-6 mx-4" tile color="rgba(0, 0, 0, 0.12)" @click="deleteItem()">削除</v-btn>
          <v-btn class="mx-4" tile color="rgba(0, 0, 0, 0.12)" @click="buyLater()" v-show="!undeletable">あとで買う</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- オプション 960px未満 -->
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="12" class="pa-0" v-if="cartItem.canWarranty">
        <div class="d-flex cart-item-option" :class="{ checked: isWarranty }">
          <v-checkbox hide-details class="cart-item-option-checkbox my-auto" v-model="isWarranty" @change="onChangeCartOptions">
            <template v-slot:label>
              <b class="ma-auto cart-item-option-checkbox-label">
                5年間保証に加入する<br />
                （保証料金：<span class="red-font">{{ cartItem.warrantyPrice | price() }}円</span>）
              </b>
              <a href="/sitemap/riyou_hoshou_index.html" class="d-flex" target="_blank" @click.stop>
                <v-icon>far fa-question-circle</v-icon>
              </a>
            </template>
          </v-checkbox>
        </div>
      </v-col>
      <v-col cols="12" class="pa-0" v-if="cartItem.canTrade">
        <div class="d-flex cart-item-option" :class="{ checked: isTrade, disabled: disabledTrade }">
          <v-checkbox hide-details class="cart-item-option-checkbox my-auto" v-model="isTrade" :disabled="disabledTrade" @change="onChangeCartOptions">
            <template v-slot:label>
              <b class="ma-auto cart-item-option-checkbox-label">
                なんでも下取り申込み<br />
                <span v-if="cartItem.tradePrice">
                  （<span class="red-font">{{ cartItem.tradePrice | price(true) }}円値引</span>）
                </span>
              </b>
              <a href="/sitemap/riyou_shitadori_index.html" class="d-flex" target="_blank" @click.stop>
                <v-icon> far fa-question-circle </v-icon>
              </a>
            </template>
          </v-checkbox>
        </div>
      </v-col>
      <v-col cols="12" class="pa-0" v-if="cartItem.canWrapping">
        <div class="d-flex cart-item-option" :class="{ checked: isWrapping }">
          <v-checkbox hide-details class="cart-item-option-checkbox my-auto" v-model="isWrapping" @change="onChangeCartOptions">
            <template v-slot:label>
              <b class="ma-auto cart-item-option-checkbox-label">
                ラッピング(<span class="red-font">{{ CART_OPTIONS.WRAPPING_PRICE | price() }}円</span>)<br />
                ※宅配限定
              </b>
              <a href="/special/sale-fair/page/wrapping-gift/" class="d-flex" target="_blank" @click.stop>
                <v-icon> far fa-question-circle </v-icon>
              </a>
            </template>
          </v-checkbox>
        </div>
      </v-col>
    </v-row>

    <!-- 小計 -->
    <v-row class="cart-item-subtotal-area mb-5">
      <v-col cols="12" md="3" offset-md="9" class="pa-0">
        <div class="cart-item-subtotal">
          <b>
            <span>小計：</span>
            <span class="red-font">
              <span class="cart-item-price">{{ cartItem.subTotal | price() }}</span>
              <span>円</span>
            </span>
          </b>
          <span class="d-inline-block">（税込）</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, computed, watch } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import { CartItem, UpdatingCartItem } from '@/types/cart-list';
import { CART_OPTIONS } from '@/constants/cart-options';

/** デフォルトの数量の最大値 */
const DEFAULT_MAX_COUNT = 150;

export default Vue.extend({
  name: 'cart-item',
  props: {
    cartItem: {
      type: Object as PropType<CartItem>,
      required: true,
      default: {}
    },
    undeletable: {
      type: Boolean,
      default: false
    },
    disabledTrade: {
      type: Boolean,
      default: false
    }
  },
  setup: (props: any, context) => {
    const state = reactive({
      /** ５年保証付き */
      isWarranty: !!props.cartItem.isWarranty,
      /** なんでも下取り */
      isTrade: !!props.cartItem.isTrade,
      /** ラッピング */
      isWrapping: !!props.cartItem.isWrapping,
      /** 数量 */
      count: props.cartItem.count || 0
    });

    // 初期値指定
    watch(
      () => props.cartItem,
      (newValue) => {
        state.isWarranty = !!newValue.isWarranty;
        state.isTrade = !!newValue.isTrade;
        state.isWrapping = !!newValue.isWrapping;
        state.count = newValue.count || 0;
      }
    );

    // オプションの値が更新されたので、カートを更新する
    const onChangeCartOptions = () => {
      const cartItem = props.cartItem as CartItem;
      const updatingCartItem: UpdatingCartItem = {
        janCode: cartItem.janCode,
        command: 2,
        count: state.count,
        isTrade: state.isTrade,
        isWrapping: state.isWrapping,
        isWarranty: state.isWarranty
      };

      // ラッピングをする場合、ラッピングのJANコードを返す
      if (state.isWrapping) {
        updatingCartItem.wrappingJanCode = CART_OPTIONS.WRAPPING_JAN_CODE;
      }

      context.emit('change', updatingCartItem);
    };

    /**
     * 数量の選択肢
     */
    const countList = computed(() => {
      const maxCount = props.cartItem.quantityParUnit && props.cartItem.quantityParUnit !== -1 ? props.cartItem.quantityParUnit : DEFAULT_MAX_COUNT;
      const countList = [...Array(maxCount).keys()].map((i) => ++i); // 1, 2,..., maxCountの配列

      if (props.undeletable) {
        countList.unshift(0); // 0, 1, 2,..., maxCountの配列
      }

      return countList;
    });

    /**
     * 商品を削除する
     */
    const deleteItem = () => {
      if (props.undeletable) {
        state.count = 0;
      } else {
        context.emit('delete');
      }
    };

    /**
     * あとで買う
     */
    const buyLater = () => context.emit('buyLater');

    return {
      CART_OPTIONS,
      ...toRefs(state),
      noimage,
      countList,
      buyLater,
      deleteItem,
      onChangeCartOptions
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  カート内容 960px以上
------------------------------- */
.cart-item {
  .row {
    margin: 0;
  }

  &-img-area {
    display: flex;
  }

  &-img {
    width: 100%;
    max-width: 150px;
    margin: 0 auto 8px;
  }

  &-name-area {
    @include ellipsis(48px);
    margin-bottom: 8px;
  }

  &-name {
    color: $text-blue;
  }

  &-price-area {
    margin-bottom: 8px;
  }

  &-price {
    font-size: 1.3em;
  }

  &-option {
    border: 1px solid $ec-black;
    padding: 6px 2px 6px 12px;
    min-height: 3.6em;

    &.disabled {
      border-color: rgba($color: $ec-black, $alpha: 0.38);
      .red-font {
        opacity: 0.38;
      }
    }

    &.checked {
      border-color: $bg-light-red;
      background-color: $bg-light-red;
    }

    &-checkbox {
      width: 100%;

      &-label {
        font-size: 0.9em;
      }
    }
  }

  &-count-area {
    width: 100px;
  }

  &-delete-btn {
    padding: 0 24px;
  }

  &-subtotal-area {
    border-top: 1px dotted $ec-grey;
    border-bottom: 1px solid $ec-grey;
  }

  &-subtotal {
    padding: 12px;
    text-align: center;
    background-color: $bg-light-grey3;
  }
}

/** -------------------------------
  カート内容 960px未満
------------------------------- */
.sp {
  .cart-item {
    &-price {
      font-size: 1em;
    }

    &-option {
      border: none;
      border-top: 1px dotted $ec-grey;
    }

    &-subtotal {
      padding: 15px;
      text-align: end;
      margin-left: 0;
      background-color: inherit;
    }
  }
}
</style>
