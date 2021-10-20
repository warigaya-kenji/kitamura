<template>
  <div class="product" :class="{ sp: $vuetify.breakpoint.smAndDown, hover: isHover }">
    <!-- お気に入り登録 -->
    <v-dialog max-width="550px" v-model="favoriteDialog" class="dialog" v-if="canFavorite">
      <template v-slot:activator="{ attrs }">
        <v-btn id="open-favorite-dialog-btn" class="product-config-icon" large icon @click="registerFavorite()" v-bind="attrs">
          <i class="fas fa-cog"></i>
        </v-btn>
      </template>
      <product-favorite-dialog
        :isUsed="false"
        :janCode="product.janCode"
        :isFavorite="true"
        :isNoticePriceSetting="product.isNoticePriceSetting"
        :isNoticeUsedSetting="product.isNoticeUsedSetting"
        @onRegisterd="onFavoriteRegisterd()"
        @onClosed="onFavoriteDialogClosed()"
      >
      </product-favorite-dialog>
    </v-dialog>

    <!-- 通知 -->
    <div class="product-header-area">
      <slot name="header" />
    </div>

    <div class="product-contents-area">
      <!-- 商品画像 -->
      <div class="product-contents-area-left">
        <router-link class="product-link" :to="`/ec/pd/${product.janCode}`" :is="linkDisabled ? 'span' : 'router-link'">
          <div class="product-img-area" v-on:mouseover="isHover = !linkDisabled" v-on:mouseleave="isHover = false">
            <img class="product-img" contain :src="product.imagePath" @error="noimage" :alt="product.itemName" />
          </div>
        </router-link>
      </div>

      <!-- 商品情報 -->
      <div class="product-contents-area-right">
        <!-- メーカー名 -->
        <div class="product-maker-name">{{ product.makerName }}</div>

        <!-- 商品名 -->
        <router-link class="product-link" :to="`/ec/pd/${product.janCode}`" :is="linkDisabled ? 'span' : 'router-link'" :class="{ disabled: linkDisabled }">
          <div class="product-name" v-on:mouseover="isHover = !linkDisabled" v-on:mouseleave="isHover = false">{{ product.itemName }}</div>
        </router-link>

        <!-- 値段 -->
        <div class="product-price-area">
          <slot name="price" />
        </div>

        <!-- レビュー -->
        <div class="product-review-area" v-show="isShowReview && +product.rating > 0">
          <v-rating
            class="product-rating"
            color="rgba(229, 130, 35, 1)"
            background-color="rgba(229, 130, 35, 1)"
            half-increments
            readonly
            small
            :value="+product.rating"
          >
          </v-rating>
          <span class="product-review-count">{{ product.rating }}</span>
        </div>
        <div class="mb-1" v-show="canPostReview">
          <router-link :to="`/ec/mypage/review/post/${product.janCode}`"><i class="far fa-edit mr-1"></i>レビュー投稿</router-link>
        </div>

        <!-- 操作 -->
        <div class="product-operation-area">
          <slot name="operation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import ProductFavoriteDialog from '@/components/common/product-favorite-dialog.vue';

export type ProductItem = {
  janCode: string;
  makerName: string;
  itemName: string;
  imagePath: string;
  rating: string;
  isNoticePriceSetting?: boolean;
  isNoticeUsedSetting?: boolean;
};

export default Vue.extend({
  name: 'product',
  components: {
    'product-favorite-dialog': ProductFavoriteDialog
  },
  props: {
    product: {
      type: Object as PropType<ProductItem>,
      required: true,
      default: {}
    },
    canFavorite: {
      type: Boolean,
      required: false,
      default: false
    },
    canPostReview: {
      type: Boolean,
      required: false,
      default: false
    },
    isShowReview: {
      type: Boolean,
      required: false,
      default: true
    },
    linkDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup: (_, context) => {
    const state = reactive({
      // hover style制御用
      isHover: false,
      // お気に入り設定
      favoriteDialog: false
    });

    // お気に入り商品登録時
    function registerFavorite() {
      state.favoriteDialog = true;
    }

    // お気に入り登録ダイアログを閉じる
    function onFavoriteDialogClosed() {
      state.favoriteDialog = false;
    }

    // お気に入り登録完了時
    function onFavoriteRegisterd() {
      context.emit('onRegisterd');

      state.favoriteDialog = false;
    }

    return {
      ...toRefs(state),
      noimage,
      registerFavorite,
      onFavoriteDialogClosed,
      onFavoriteRegisterd
    };
  }
});
</script>

<style lang="scss" scoped>
$product-left-area-width: 35%;

.product {
  position: relative;
  background-color: $bg-white;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 100%;
  height: 100%;

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

  &-header-area {
    min-height: 1rem;
    margin: 4px 0;
    width: 100%;
  }

  &-contents-area {
    display: flex;
    flex-grow: 1;
  }

  &-contents-area-left {
    padding: 0 8px;
    max-width: $product-left-area-width;
    width: $product-left-area-width;
    min-width: 100px;
  }

  &-contents-area-right {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  &-img-area {
    display: flex;
  }

  &-img {
    width: 100%;
    max-width: 150px;
    margin: 0 auto 8px;
  }

  &-maker-name {
    margin-bottom: 8px;
  }

  &-link {
    &.disabled {
      .product-name {
        color: $ec-black;
      }
    }
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

  &-rating {
    display: inline-block;
    margin-right: 8px;
  }
  &-review-area {
    margin-bottom: 8px;
  }
  &-review-count {
    color: $text-black;
    font-size: 12px;
  }

  &-operation-area {
    margin-top: auto;
  }

  &-config-icon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5em;
  }
}

/** -------------------------------
  960px未満
------------------------------- */
.sp {
  &.product {
    padding: 8px 0;
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
