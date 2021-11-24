<template>
  <v-card class="product-favorite-dialog">
    <v-btn icon class="dialog-close-button" @click="close()" color="black">
      <v-icon>fas fa-times</v-icon>
    </v-btn>

    <v-card-title>お気に入り設定</v-card-title>

    <v-card-text>
      <v-checkbox v-if="!isUsed" dense hide-details v-model="noticePrice" label="販売価格が今より安くなったらメールでお知らせ"></v-checkbox>
      <v-checkbox dense hide-details v-model="noticeUsed" label="同型の中古商品が新たに販売開始されたらメールでお知らせ"></v-checkbox>
      <div class="mt-5 ml-8">メールは1日に1回のみ配信</div>
    </v-card-text>

    <v-card-actions class="d-flex">
      <v-btn color="primary" @click="registerFavorite()">
        <span v-if="isFavorite">設定</span>
        <span v-else>登録</span>
      </v-btn>
      <v-btn class="ml-auto" @click="registerFavorite(true)">削除</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import ProductService from '@/logic/product.service';

export default Vue.extend({
  name: 'product-favorite-dialog',
  props: {
    // 中古かどうか
    isUsed: {
      required: false,
      type: Boolean,
      default: false
    },
    janCode: {
      required: true,
      type: String
    },
    isFavorite: {
      required: true,
      type: Boolean
    },
    isNoticePriceSetting: {
      required: false,
      type: Boolean,
      default: true
    },
    isNoticeUsedSetting: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  setup(props: any, context) {
    const { errorStore, confirmDialogStore } = context.root.$store;

    const state = reactive({
      noticePrice: props.isNoticePriceSetting,
      noticeUsed: props.isNoticeUsedSetting
    });

    const registerFavorite = async (isDelete?: boolean) => {
      if (typeof isDelete === 'undefined') {
        isDelete = false;
      } else if (isDelete) {
        // 削除確認
        const confirm = await confirmDialogStore.open('削除してよろしいですか？', '削除');
        if (!confirm) {
          return;
        }
      }

      try {
        await ProductService.registerFavorite(props.janCode, state.noticePrice, state.noticeUsed, isDelete);
        context.emit('onRegisterd');
      } catch (error) {
        console.error(error);
        errorStore.errorMessage =
          'ただいまシステムが混みあっている可能性があります。しばらくお待ちいただきますようお願い申し上げます。ご迷惑をおかけして申し訳ございません。';
      }
    };

    const close = () => {
      context.emit('onClosed');
    };

    return { ...toRefs(state), registerFavorite, close };
  }
});
</script>

<style lang="scss" scoped>
.dialog-close-button {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
