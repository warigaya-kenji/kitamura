<template>
  <v-dialog v-model="openedDialog" max-width="550" fixed class="cart-inserted-dialog">
    <v-card class="cart-inserted-dialog-body d-flex flex-column" :class="{ sp: $vuetify.breakpoint.smAndDown }">
      <v-btn icon class="dialog-close-button" @click="close()" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <div class="cart-inserted-dialog-msg mt-auto mx-auto">カートに商品が追加されました。</div>

      <v-card-actions class="mb-auto mx-auto">
        <div class="d-flex">
          <v-btn class="action-btn" tile color="rgba(0, 0, 0, 0.12)" height="60px" @click="close()">
            買い物を続ける
          </v-btn>
          <v-btn class="action-btn action-btn--white-text" tile color="rgba(255, 132, 0, 1)" height="60px" @click="goCart()">
            購入手続きへ進む
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from '@vue/composition-api';
import Vue from 'vue';

export default Vue.extend({
  name: 'cart-inserted-dialog',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const state = reactive({});

    // v-model向けのダイアログ開閉状態
    const openedDialog = computed({
      get: () => {
        return props.value as boolean;
      },
      set: (newValue) => context.emit('change', newValue)
    });

    // ダイアログを閉じる
    const close = () => context.emit('change', false);

    // カートに移動する
    const goCart = () => context.root.$router.push({ name: 'cart-list-page' });

    return {
      ...toRefs(state),
      openedDialog,
      close,
      goCart
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  カート投入後ダイアログ 960px以上
------------------------------- */
.cart-inserted-dialog {
  z-index: 600;

  &-body {
    min-height: 200px;
  }

  &-msg {
    font-size: 1.3em;
    font-weight: bold;
  }
}

.dialog-close-button {
  position: absolute;
  top: 5px;
  right: 5px;
}

.action-btn {
  margin: 12px;
  width: 200px;
  font-size: 18px;
  font-weight: bold;
  text-transform: none;

  &--white-text {
    color: $text-white;
  }
}

/** -------------------------------
  カート投入後ダイアログ 960px以下
------------------------------- */
.sp {
  .cart-inserted-dialog {
    &-msg {
      font-size: 1.1em;
    }
  }

  .action-btn {
    margin: 12px 2px;
    width: auto;
    font-size: 1rem;
    padding: 4px;
  }
}
</style>
