<template>
  <div
    :class="{
      'product-slider': true,
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- 960px以上・未満 兼用 -->
    <v-card tile class="slider-product-item">
      <!-- 商品画像 -->
      <div class="product-image-area">
        <v-avatar class="badge" v-if="product.iconCode === 1 || product.iconCode === 2 || product.isSetDiscount">
          <img src="@/assets/product-slider-item/icon_item_essential.png" v-if="product.iconCode === 1" />
          <img src="@/assets/product-slider-item/icon_item_popular.png" v-else-if="product.iconCode === 2" />
          <img src="@/assets/product-slider-item/icon_item_plus.png" v-else-if="!isUsed && product.isSetDiscount" />
        </v-avatar>
        <router-link :to="'/ec/pd/' + product.janCode" class="ec-link-image">
          <img v-if="product.imagePath" @error="noimage" :src="product.imagePath" :alt="product.itemName" />
        </router-link>
      </div>

      <!-- 商品名 -->
      <div class="product-link">
        <router-link :to="'/ec/pd/' + product.janCode">
          <span class="product-name">{{ product.itemName }}</span>
        </router-link>
      </div>

      <!-- 商品評価 -->
      <div class="product-rating">
        <div v-if="product.ratingTotal && +product.ratingTotal !== 0">
          <v-rating
            :value="product.ratingTotal"
            half-increments
            readonly
            dense
            small
            color="#ff8400"
            background-color="#ff8400"
            class="product-rating-star"
          ></v-rating>
          <span class="product-rating-value">{{ product.ratingTotal }}</span>
        </div>
      </div>

      <!-- 商品価格 -->
      <div class="price-area">
        <!-- 関連商品以外の時 -->
        <div class="price-nomarl" v-if="!isRelatedProducts">
          <span>価格：</span>
          <span class="price-text">{{ formatPrice(product.price) }}円</span>
        </div>
        <!-- 関連商品の時 -->
        <div class="price-related" v-if="isRelatedProducts">
          <div v-if="!isUsed && product.isSetDiscount">
            <span class="price-emphasis">同時購入で：</span>
            <span class="price-text">{{ formatPrice(product.setDiscountPrice) }}円</span>
          </div>
          <div v-else>
            <span v-if="product.priceDiv === 3" class="price-emphasis">特別価格：</span>
            <span v-else-if="product.priceDiv === 2" class="price-emphasis">会員価格：</span>
            <span v-else-if="product.priceDiv === 1">価格：</span>
            <span class="price-text">{{ formatPrice(product.price) }}円</span>
          </div>
        </div>
        <div class="price-used" v-if="usedProductSummary.itemCount && usedProductSummary.itemCount > 0">
          <span>中古：</span>
          <span class="price-text">{{ formatPrice(usedProductSummary.minPrice) }}円</span>～
          <a :href="'/ec/list?keyword3=' + product.janCode + '&type=u'">
            <span class="price-text-used">({{ usedProductSummary.itemCount }}点)</span>
          </a>
        </div>
      </div>

      <!-- 購入ボタン -->
      <v-card-actions class="purchase-area">
        <v-tooltip top v-model="showAddingCart">
          <template v-slot:activator="{ attrs }">
            <v-btn color="#ff8400" class="cart-button" v-on:click="addCart()" v-bind="attrs">
              <i class="fas fa-shopping-cart mr-1"></i>
              {{ cartButtonText }}
            </v-btn>
          </template>
          <span>カートに投入しました</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import ProductService from '@/logic/product.service';
import { noimage, formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'product-slider-item',
  components: {},
  props: {
    // 中古商品に関連する商品かどうか
    isUsed: {
      required: true,
      type: Boolean
    },
    // 商品詳細情報
    // 関連商品と、関連商品以外で型が違う。
    product: {
      required: true
    },
    // 中古商品サマリ（JANコード、中古商品数、最小値）
    usedProductSummary: {
      type: Object as PropType<{
        janCode: string;
        itemCount: number;
        minPrice: number;
      }>,
      required: true
    },
    // 関連商品かどうか
    isRelatedProducts: {
      type: Boolean,
      required: true
    },
    // カートボタンテキスト
    cartButtonText: {
      type: String,
      default: 'あわせて買う'
    }
  },
  setup: (props: any, context) => {
    const state = reactive({
      model: null,
      showAddingCart: false
    });

    // カート投入
    function addCart() {
      ProductService.addCart(props.product.janCode, props.product.isChuko, null, props.product.price, 1).then(() => {
        state.showAddingCart = true;
        context.emit('addCart');
        setTimeout(() => {
          // 3秒後に結果を非表示にする
          state.showAddingCart = false;
        }, 3000);
      });
    }

    return {
      ...toRefs(state),
      addCart,
      formatPrice,
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.slider-product-item {
  margin: 5px 8px;
  width: 240px;

  a:hover * {
    color: inherit;
  }

  .product-image-area {
    position: relative;
    margin: auto;
    width: 160px;
    height: 160px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    font-size: 0.8rem;

    a {
      width: 100%;
    }

    img {
      width: 100%;
      object-fit: contain;
    }

    /* v-avatar */
    .badge {
      position: absolute;
      display: inline;
      width: 50px;
      top: -5px;
      left: -25px;
      z-index: 1;
    }

    /* テキスト部分と連動 */
    &:hover + .product-link span {
      color: $text-primary;
    }
  }

  .product-name {
    @include ellipsis(3rem);
    margin: 5px auto 2px auto;
    text-align: left;
    font-size: 1rem;
    color: $text-secondary;
  }

  .product-rating {
    height: 1.4rem;
    font-size: 0.8rem;
  }

  .product-rating-star {
    display: inline-block;
  }

  .product-rating-value {
    margin-left: 8px;
    padding-top: 4px;
    font-size: 0.9rem;
  }

  .price-area {
    text-align: left;
    height: 3rem;

    .price-used {
      font-size: 0.9rem;
    }
  }

  .price-emphasis {
    font-weight: bold;
  }

  .price-text {
    color: $text-primary;
  }

  .price-text-used {
    color: $text-secondary;
  }

  .purchase-area {
    text-align: center;
  }

  .cart-button {
    margin: 0 auto;
    width: 90%;
    color: #fff;
    font-weight: bold;
  }
}

/** -------------------------------
  960px未満
------------------------------- */
.container-narrow {
  .slider-product-item {
    margin: 5px 8px;
    width: 180px;

    .product-image-area {
      display: flex;
      margin: auto;
      width: 100px;
      height: 100px;
      text-align: center;
      vertical-align: middle;
      align-items: center;
      font-size: 0.6rem;
    }

    .product-name {
      @include ellipsis(2.4rem);
      margin: 5px auto;
      font-size: 0.8rem;
      color: $text-secondary;
    }

    .price-area {
      font-size: 0.9rem;
    }

    .cart-button {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
}
</style>
