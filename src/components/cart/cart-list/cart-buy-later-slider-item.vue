<template>
  <div class="product-slider" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <!-- 960px以上・未満 兼用 -->
    <v-card tile class="slider-product-item">
      <!-- 商品画像 -->
      <div class="product-image-area">
        <router-link :to="productLink" class="ec-link-image">
          <img v-if="product.imagePath" @error="noimage" :src="product.imagePath" :alt="product.itemName" />
        </router-link>
      </div>

      <!-- 商品名 -->
      <div class="product-link">
        <router-link :to="productLink">
          <span class="product-name">{{ product.itemName }}</span>
        </router-link>
      </div>

      <!-- 商品価格 -->
      <div class="price-area">
        <div class="price-nomarl">
          <span>価格：</span>
          <span class="price-text">{{ formatPrice(product.unitPrice) }}円</span>
        </div>
      </div>

      <!-- 購入ボタン -->
      <v-card-actions class="purchase-area">
        <div>
          <v-btn color="#ff8400" class="cart-button" @click="addCart()">
            <i class="fas fa-shopping-cart mr-1"></i>
            カートに入れる
          </v-btn>
          <v-btn text class="remove-text-btn mt-2" @click="removeBuyLater()">
            削除
            <v-icon class="remove-text-btn-icon" small>far fa-times</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, computed } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import { CartItem } from '@/types/cart-list';

export default Vue.extend({
  name: 'cart-buy-later-slider-item',
  components: {},
  props: {
    // カート商品情報
    product: {
      required: true,
      type: Object as PropType<CartItem>
    }
  },
  setup: (props: any, context) => {
    const state = reactive({});

    // カート投入
    const addCart = () => context.emit('addCart');

    // あとで買う商品を削除
    const removeBuyLater = () => context.emit('removeBuyLater');

    // 商品詳細ページへのリンク
    const productLink = computed(() => {
      if (props.product.isChuko) {
        return `/ec/used/${props.product.janCode}`;
      } else {
        return `/ec/pd/${props.product.janCode}`;
      }
    });

    return {
      ...toRefs(state),
      addCart,
      removeBuyLater,
      formatPrice,
      noimage,
      productLink
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

  // 削除ボタン
  .remove-text-btn {
    color: $text-grey;

    &-icon {
      margin-left: 12px;
    }
  }
}

/** -------------------------------
  960px未満
------------------------------- */
.sp {
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
