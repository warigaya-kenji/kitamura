<template>
  <div class="product-main-item">
    <div class="d-flex justify-space-between pa-2">
      <!-- お気に入り登録 -->
      <v-dialog class="dialog" max-width="550px" v-model="favoriteDialog">
        <template v-slot:activator="{ attrs }">
          <v-btn text icon color="rgba(216, 11, 36, 1)" v-bind="attrs" @click="clickFavorite()">
            <v-icon>{{ favorited ? 'fas fa-heart' : 'far fa-heart' }}</v-icon>
          </v-btn>
        </template>
        <product-favorite-dialog
          :janCode="productMainInfo.janCode"
          :isFavorite="favorited"
          @onRegisterd="onFavoriteRegisterd()"
          @onClosed="onFavoriteDialogClosed()"
        ></product-favorite-dialog>
      </v-dialog>
      <v-btn class="product-delete-btn" text icon @click="clickRemove()">
        <v-icon>fas fa-times-circle</v-icon>
      </v-btn>
    </div>
    <router-link
      :class="{
        'pa-4': $vuetify.breakpoint.mdAndUp,
        'pa-2': $vuetify.breakpoint.smAndDown
      }"
      class="d-block"
      :to="`/ec/pd/${productMainInfo.janCode}`"
    >
      <div class="product-img-area mb-2">
        <img class="product-img" :src="productMainInfo.imagePath" @error="noimage" :alt="productMainInfo.itemName" />
      </div>
      <div class="product-name mx-3">{{ productMainInfo.itemName }}</div>
    </router-link>
    <div class="product-move d-flex justify-space-between align-center pa-2">
      <v-btn
        class="product-move-btn"
        :class="{
          hidden: index === 0
        }"
        text
        icon
        @click="swap(index, index - 1)"
      >
        <v-icon>fas fa-chevron-left</v-icon>
      </v-btn>
      <div>移動</div>
      <v-btn
        class="product-move-btn"
        :class="{
          hidden: index === listLength - 1
        }"
        text
        icon
        @click="swap(index, index + 1)"
      >
        <v-icon>fas fa-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import productFavoriteDialog from '../common/product-favorite-dialog.vue';
import ProductService from '@/logic/product.service';

type ProductMainInfo = {
  // 商品コード
  janCode: string;
  // 画像PATH
  imagePath: string;
  // 商品名
  itemName: string;
};

export default Vue.extend({
  name: 'product-main-item',
  components: {
    'product-favorite-dialog': productFavoriteDialog
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    listLength: {
      type: Number,
      required: true
    },
    productMainInfo: {
      type: Object as PropType<ProductMainInfo>,
      required: true
    },
    favorited: {
      type: Boolean,
      required: true
    }
  },
  setup: (props, context) => {
    const { authorizer } = context.root.$store;
    const state = reactive({
      favoriteDialog: false
    });

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
        const product = props.productMainInfo as ProductMainInfo;
        const memberProduct = await ProductService.fetchMemberProduct(product.janCode);
        context.emit('clickFavorited', product.janCode, memberProduct.isFavorite);
      } catch (error) {
        console.error(error);
      }
      state.favoriteDialog = false;
    }

    // 商品削除
    const clickRemove = () => {
      const product = props.productMainInfo as ProductMainInfo;
      context.emit('clickRemove', product.janCode);
    };

    // 移動
    const swap = (index1: number, index2: number) => {
      context.emit('swap', index1, index2);
    };

    return {
      ...toRefs(state),
      noimage,
      clickFavorite,
      onFavoriteDialogClosed,
      onFavoriteRegisterd,
      clickRemove,
      swap
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
$compare-border: solid 1px $ec-light-grey2;

.dialog {
  z-index: 600;
}

/** -------------------------------
  商品情報 960px以上
------------------------------- */
.product-main-item {
  .product {
    &-delete-btn {
      color: $ec-light-grey2;
    }

    &-img-area {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    &-img {
      width: 100%;
      max-width: 200px;
      margin: auto;
      object-fit: contain;
    }

    &-name {
      @include ellipsis-lines(3);
      height: 72px;
    }

    &-move {
      border-top: $compare-border;

      &-btn.hidden {
        visibility: hidden;
      }
    }
  }
}

/** -------------------------------
  商品情報 960px未満
------------------------------- */
.container-narrow {
  .product-main-item {
  }
}
</style>
