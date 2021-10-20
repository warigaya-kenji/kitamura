<template>
  <div class="product" :class="{ sp: $vuetify.breakpoint.smAndDown, hover: isHover }">
    <!-- 960px以上 -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <div class="product-btn-area">
        <!-- 比較する対象選択 -->
        <v-checkbox
          :style="{ visibility: isSpecial ? 'hidden' : 'visible' }"
          id="product-comparison-checkbox"
          v-model="comparisonCheck"
          label="比較する"
          :disabled="!comparisonCheck && comparison.comparisonList.length >= comparison.limit"
        ></v-checkbox>

        <!-- お気に入り登録 -->
        <v-dialog class="dialog" max-width="550px" v-model="favoriteDialog">
          <template v-slot:activator="{ attrs }">
            <v-btn class="product-fav ma-2" text icon color="rgba(216, 11, 36, 1)" v-bind="attrs" @click="clickFavorite()">
              <v-icon>{{ productFavorite ? 'fas fa-heart' : 'far fa-heart' }}</v-icon>
            </v-btn>
          </template>
          <product-favorite-dialog
            :janCode="stateProduct.itemid"
            :isFavorite="productFavorite"
            @onRegisterd="onFavoriteRegisterd()"
            @onClosed="onFavoriteDialogClosed()"
          ></product-favorite-dialog>
        </v-dialog>
      </div>
      <router-link
        class="product-link"
        :to="displayPriceType === SEARCH_STATE.option[2].value ? `/ec/list/?type=u&keyword3=${stateProduct.itemid}` : `/ec/pd/${stateProduct.itemid}`"
      >
        <div class="product-img-area" v-on:mouseover="isHover = true" v-on:mouseleave="isHover = false">
          <img class="product-img" height="160px" contain :src="stateProduct.image" @error="noimage" :alt="stateProduct.title" />
        </div>
      </router-link>
      <div class="product-maker-name">{{ stateProduct.narrow1 }}</div>
      <router-link
        class="product-link"
        :to="displayPriceType === SEARCH_STATE.option[2].value ? `/ec/list/?type=u&keyword3=${stateProduct.itemid}` : `/ec/pd/${stateProduct.itemid}`"
      >
        <div class="product-name" v-on:mouseover="isHover = true" v-on:mouseleave="isHover = false">{{ stateProduct.title }}</div>
      </router-link>
      <div class="product-price-area">
        <div class="product-text" v-show="displayPriceType === SEARCH_STATE.option[0].value || displayPriceType === SEARCH_STATE.option[1].value">
          価格:<span class="product-price">{{ isSpecial && stateProduct.isSalesEnd ? '-' : formatPrice(parseInt(stateProduct.price)) }}円</span>
        </div>
        <div
          class="product-text"
          v-show="(displayPriceType === SEARCH_STATE.option[0].value || displayPriceType === SEARCH_STATE.option[2].value) && productUsedItemCount"
        >
          中古:<span class="product-used-price">{{ productUsedMinPrice }}円</span>&nbsp;～&nbsp;<span class="product-used-conut"
            >(<router-link class="product-used-link" :to="`/ec/list/?type=u&keyword3=${stateProduct.itemid}`">{{ productUsedItemCount }}点</router-link>)</span
          >
        </div>
      </div>
      <div class="product-review-area" v-show="+stateProduct.data18 !== 0">
        <v-rating
          class="product-rating"
          color="rgba(229, 130, 35, 1)"
          background-color="rgba(229, 130, 35, 1)"
          half-increments
          readonly
          small
          :value="+stateProduct.data18"
        ></v-rating>
        <span class="product-review-count">{{ stateProduct.data18 }}</span>
      </div>
    </template>

    <!-- 960px未満 -->
    <template v-if="$vuetify.breakpoint.smAndDown">
      <div class="product-area">
        <div class="product-img-area">
          <!-- お気に入り登録 -->
          <v-dialog class="dialog" max-width="550px" v-model="favoriteDialog">
            <template v-slot:activator="{ attrs }">
              <v-btn class="product-fav" text icon color="rgba(216, 11, 36, 1)" v-bind="attrs" @click.stop="clickFavorite()">
                <v-icon>{{ productFavorite ? 'fas fa-heart' : 'far fa-heart' }}</v-icon>
              </v-btn>
            </template>
            <product-favorite-dialog
              :janCode="stateProduct.itemid"
              :isFavorite="productFavorite"
              @onRegisterd="onFavoriteRegisterd()"
              @onClosed="onFavoriteDialogClosed()"
            ></product-favorite-dialog>
          </v-dialog>
          <router-link
            class="product-link"
            :to="displayPriceType === SEARCH_STATE.option[2].value ? `/ec/list/?type=u&keyword3=${stateProduct.itemid}` : `/ec/pd/${stateProduct.itemid}`"
          >
            <img class="product-img" height="120px" contain :src="stateProduct.image" @error="noimage" :alt="stateProduct.title" />
          </router-link>
        </div>
        <div class="product-info">
          <div class="product-maker-name">{{ stateProduct.narrow1 }}</div>
          <router-link
            class="product-link"
            :to="displayPriceType === SEARCH_STATE.option[2].value ? `/ec/list/?type=u&keyword3=${stateProduct.itemid}` : `/ec/pd/${stateProduct.itemid}`"
          >
            <div class="product-name">{{ stateProduct.title }}</div>
          </router-link>
          <div class="product-price-area">
            <div class="product-text" v-show="displayPriceType === SEARCH_STATE.option[0].value || displayPriceType === SEARCH_STATE.option[1].value">
              価格:<span class="product-price">{{ isSpecial && stateProduct.isSalesEnd ? '-' : formatPrice(parseInt(stateProduct.price)) }}円</span>
            </div>
            <div
              class="product-text"
              v-show="(displayPriceType === SEARCH_STATE.option[0].value || displayPriceType === SEARCH_STATE.option[2].value) && productUsedItemCount"
            >
              中古:<span class="product-used-price">{{ productUsedMinPrice }}円</span>&nbsp;～&nbsp;<span class="product-used-conut"
                >(<router-link class="product-used-link" :to="`/ec/list/?type=u&keyword3=${stateProduct.itemid}`">{{ productUsedItemCount }}点</router-link
                >)</span
              >
            </div>
          </div>
          <div class="product-review-area" v-show="+stateProduct.data18 !== 0">
            <v-rating
              class="product-rating"
              color="rgba(229, 130, 35, 1)"
              background-color="rgba(229, 130, 35, 1)"
              half-increments
              readonly
              small
              :value="+stateProduct.data18"
            ></v-rating>
            <span class="product-review-count">{{ stateProduct.data18 }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, watch } from '@vue/composition-api';
import ProductService from '@/logic/product.service';
import { ProductItem } from '@/types/product-list';
import { SEARCH_STATE } from '@/constants/search-state';
import { noimage, formatPrice } from '@/logic/utils';
import productFavoriteDialog from '../common/product-favorite-dialog.vue';

// TODO: searchUsedProductsSummaryのリターンがanyではなくなったら、修正
type usedProductsSummary = {
  janCode: string;
  itemCount: number;
  minPrice: number;
};

export default Vue.extend({
  name: 'product',
  components: {
    'product-favorite-dialog': productFavoriteDialog
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    displayPriceType: {
      type: String,
      required: true
    },
    usedProductsSummary: {
      type: Object as PropType<usedProductsSummary>,
      required: false
    },
    isSpecial: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup: (props, context) => {
    const { authorizer, comparison } = context.root.$store;

    const state = reactive({
      stateProduct: props.product as ProductItem,
      productFavorite: false,
      productMakerName: '',
      comparisonCheck: false,
      favoriteDialog: false,
      // 中古情報
      productUsedMinPrice: '0',
      productUsedItemCount: 0,
      // hover style制御用
      isHover: false
    });

    // 比較チェック処理
    watch(
      () => comparison.comparisonList,
      (list) => {
        state.comparisonCheck = list.includes(state.stateProduct.itemid);
      },
      { immediate: true }
    );
    watch(
      () => state.comparisonCheck,
      (newVal) => {
        newVal ? comparison.add(state.stateProduct.itemid) : comparison.remove(state.stateProduct.itemid);
      }
    );

    // 新品用中古情報チェック処理
    watch(
      () => props.usedProductsSummary,
      () => {
        // 新品中古情報の格納
        if (props.usedProductsSummary) {
          const usedProductsSummary = props.usedProductsSummary as usedProductsSummary;
          state.productUsedMinPrice = formatPrice(usedProductsSummary.minPrice);
          state.productUsedItemCount = usedProductsSummary.itemCount;
        }
      }
    );

    // お気に入り商品登録
    const clickFavorite = async () => {
      const isLoggedIn = authorizer.isLoggedIn;
      if (isLoggedIn) {
        state.favoriteDialog = true;
      } else {
        alert('お気に入り登録はログインが必要です。');
        authorizer.openLoginMenu();
      }
    };

    // お気に入り登録ダイアログを閉じる
    function onFavoriteDialogClosed() {
      state.favoriteDialog = false;
    }

    // お気に入り登録時
    async function onFavoriteRegisterd() {
      try {
        const memberProduct = await ProductService.fetchMemberProduct(state.stateProduct.itemid);
        state.productFavorite = memberProduct.isFavorite;
      } catch (error) {
        console.error(error);
      }
      state.favoriteDialog = false;
    }

    return {
      ...toRefs(state),
      SEARCH_STATE,
      authorizer,
      comparison,
      clickFavorite,
      onFavoriteRegisterd,
      onFavoriteDialogClosed,
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.dialog {
  z-index: 600;
}

.product {
  width: calc((100% - (12px * 3)) / 4);

  &:not(:nth-child(4n)) {
    margin-right: 12px;
  }

  &:not(:nth-last-child(-n + 4)) {
    margin-bottom: 20px;
  }

  &.hover {
    .product {
      &-img {
        opacity: 0.75;
      }
      &-name {
        color: $text-primary;
      }
    }
  }

  &-btn-area {
    display: flex;
    justify-content: space-between;
  }

  &-img-area {
    display: flex;
  }

  &-img {
    margin: 0 auto 8px;
  }

  &-maker-name {
    margin-bottom: 8px;
  }

  &-name {
    @include ellipsis(48px);
    margin-bottom: 8px;
    color: $text-blue;
  }

  &-price-area {
    margin-bottom: 8px;
  }
  &-used-link {
    color: $text-blue;
  }
  &-price,
  &-used-price {
    color: $text-red;
  }
  &-used-conut {
    margin-left: 8px;
  }

  &-rating {
    display: inline-block;
    margin-right: 8px;
  }
  &-review-count {
    color: $text-black;
    font-size: 12px;
  }
}
/** -------------------------------
  960px未満
------------------------------- */
.sp {
  &.product {
    flex: 1 1 100%;
    margin-bottom: 4px;
    margin-right: 0;
    padding: 12px 0;
    background: $bg-white;
  }
  $img-area-w: 120px;
  $img-area-mr: 8px;
  .product {
    &-area {
      display: flex;
      padding: 0 8px;
    }
    &-img-area {
      position: relative;
      flex: 1 1 $img-area-w;
      margin-right: $img-area-mr;
    }
    &-fav {
      z-index: 1;
      position: absolute;
      top: 0;
      right: 0;
      width: unset;
      height: unset;
    }
    &-img {
      margin: auto;
    }

    &-info {
      flex: 1 1 calc(100% - #{$img-area-w} - #{$img-area-mr});
    }
    &-maker-name {
      font-size: 12px;
      margin-bottom: 4px;
    }
    &-name {
      font-size: 16px;
      margin-bottom: 4px;
    }
    &-price-area {
      font-size: 14px;
      margin-bottom: 4px;
    }
    &-used-conut {
      margin-left: 4px;
    }
    &-rating {
      margin-right: 4px;
    }
  }
}
</style>
<style>
/* FIXME: 他にいい方法がないか検討 */
/* v-ratingで生成されるiconのCSSを上書き */
.product .product-rating .v-icon {
  padding: 0;
}
</style>
