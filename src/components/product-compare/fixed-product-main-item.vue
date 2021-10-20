<template>
  <div class="product-main-item">
    <!-- 960px以上 -->
    <div class="d-flex justify-space-between pa-4" v-if="$vuetify.breakpoint.mdAndUp">
      <router-link class="d-inline-block" :to="`/ec/pd/${fixedProductMainInfo.janCode}`">
        <div class="product-name">{{ fixedProductMainInfo.itemName }}</div>
      </router-link>
      <v-btn class="product-delete-btn" text icon @click="clickRemove()">
        <v-icon>fas fa-times-circle</v-icon>
      </v-btn>
    </div>
    <!-- 960px未満 -->
    <div class="pa-2" v-else>
      <div class="d-flex justify-space-between mb-2">
        <!-- お気に入り登録 -->
        <v-dialog class="dialog" max-width="550px" v-model="favoriteDialog">
          <template v-slot:activator="{ attrs }">
            <v-btn text icon color="rgba(216, 11, 36, 1)" v-bind="attrs" @click="clickFavorite()">
              <v-icon>{{ favorited ? 'fas fa-heart' : 'far fa-heart' }}</v-icon>
            </v-btn>
          </template>
          <product-favorite-dialog
            :janCode="fixedProductMainInfo.janCode"
            :isFavorite="favorited"
            @onRegisterd="onFavoriteRegisterd()"
            @onClosed="onFavoriteDialogClosed()"
          ></product-favorite-dialog>
        </v-dialog>
        <div class="product-img-area">
          <img class="product-img" :src="fixedProductMainInfo.imagePath" @error="noimage" :alt="fixedProductMainInfo.itemName" />
        </div>
        <v-btn class="product-delete-btn" text icon @click="clickRemove()">
          <v-icon>fas fa-times-circle</v-icon>
        </v-btn>
      </div>
      <router-link class="d-block" :to="`/ec/pd/${fixedProductMainInfo.janCode}`">
        <div class="product-name">{{ fixedProductMainInfo.itemName }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import productFavoriteDialog from '../common/product-favorite-dialog.vue';
import ProductService from '@/logic/product.service';

type FixedProductMainInfo = {
  // 商品コード
  janCode: string;
  // 画像PATH
  imagePath: string;
  // 商品名
  itemName: string;
};

export default Vue.extend({
  name: 'product-main-item-fixed',
  components: {
    'product-favorite-dialog': productFavoriteDialog
  },
  props: {
    fixedProductMainInfo: {
      type: Object as PropType<FixedProductMainInfo>,
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
        const product = props.fixedProductMainInfo as FixedProductMainInfo;
        const memberProduct = await ProductService.fetchMemberProduct(product.janCode);
        context.emit('clickFavorited', product.janCode, memberProduct.isFavorite);
      } catch (error) {
        console.error(error);
      }
      state.favoriteDialog = false;
    }

    // 商品削除
    const clickRemove = () => {
      const product = props.fixedProductMainInfo as FixedProductMainInfo;
      context.emit('clickRemove', product.janCode);
    };

    return {
      ...toRefs(state),
      noimage,
      clickFavorite,
      onFavoriteDialogClosed,
      onFavoriteRegisterd,
      clickRemove
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
      @include ellipsis-lines(2);
    }
  }
}

/** -------------------------------
  商品情報 960px未満
------------------------------- */
.container-narrow {
  .product-main-item {
    .product {
      &-img-area {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
      }

      &-img {
        width: 100%;
        max-width: 200px;
        margin: auto;
        object-fit: contain;
      }
    }
  }
}
</style>
