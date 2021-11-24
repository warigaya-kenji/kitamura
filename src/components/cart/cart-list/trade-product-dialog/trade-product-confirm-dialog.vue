<template>
  <v-dialog v-model="openedDialog" max-width="70%" fixed class="trade-product-dialog">
    <v-card class="trade-product-dialog-body py-1" :class="{ sp: $vuetify.breakpoint.smAndDown }">
      <!-- 閉じるアイコンボタン -->
      <v-btn icon class="dialog-close-button" @click="close()" color="black">
        <v-icon>fas fa-times</v-icon>
      </v-btn>

      <!-- ヘッダー -->
      <div class="py-4 px-8">
        <div class="dialog-header-checkbox d-inline-block" v-if="readonly">
          <span class="header-label" v-if="tokutoku">
            トクトク交換
            <span class="dialog-header-checkbox-caption">※宅配限定サービス</span>
          </span>
          <span class="header-label" v-else>
            下取り申込
            <span class="dialog-header-checkbox-caption">※店頭限定サービス</span>
          </span>
        </div>
        <v-checkbox hide-details class="dialog-header-checkbox d-inline-block" v-model="checked" @click="cancel()" v-else>
          <template v-slot:label>
            <span class="px-2" v-if="tokutoku">
              トクトク交換
              <span class="dialog-header-checkbox-caption">※宅配限定サービス</span>
            </span>
            <span class="px-2" v-else>
              下取り申込
              <span class="dialog-header-checkbox-caption">※店頭限定サービス</span>
            </span>
          </template>
        </v-checkbox>
      </div>

      <!-- 商品選択 -->
      <div>
        <h1 class="dialog-section-title pl-8">下取り依頼品の確認</h1>

        <trade-product-list
          :deletable="!readonly"
          :readonly="true"
          :selectable="false"
          :items="products"
          @delete="deleteTradeProduct($event)"
        ></trade-product-list>
      </div>

      <!-- 商品検索 -->
      <div v-if="!readonly">
        <h1 class="dialog-section-title pl-8">追加する</h1>
        <div class="ma-4 text-center">
          <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="60px" @click="openDialog('search')">
            検索して選ぶ
          </v-btn>

          <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="60px" @click="openDialog('select')">
            持っている商品一覧から選ぶ
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import Vue, { PropType } from 'vue';
import TradeProductList from '../trade-product-list.vue';
import { TradeProductItem } from '@/types/trade-product-list';

export default Vue.extend({
  name: 'trade-product-confirm-dialog',
  components: {
    'trade-product-list': TradeProductList
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    tokutoku: {
      type: Boolean,
      default: false
    },
    products: {
      required: true,
      type: Array as PropType<Array<TradeProductItem>>
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const state = reactive({
      checked: true
    });

    // v-model向けのダイアログ開閉状態
    const openedDialog = computed({
      get: () => props.value as boolean,
      set: (newValue) => context.emit('change', newValue)
    });

    // ダイアログを閉じる
    const close = () => context.emit('change', false);

    // 他のダイアログを開く
    const openDialog = (type: 'select' | 'search') => context.emit('onChangeDialog', type);

    // 申込みをキャンセルする
    const cancel = () => {
      context.emit('cancel');
      context.emit('change', false);
    };

    const deleteTradeProduct = (product: TradeProductItem) => context.emit('deleteProduct', product);

    // ダイアログが開いた際に、初期化を行う。
    watch(
      () => props.value as boolean,
      (newValue, oldValue) => {
        if (newValue && !oldValue) {
          state.checked = true;
        }
      }
    );

    return {
      ...toRefs(state),
      openedDialog,
      close,
      openDialog,
      cancel,
      deleteTradeProduct
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込査定品確認ダイアログ 960px以上
------------------------------- */
.trade-product-dialog {
  z-index: 600;

  &-body {
    min-height: 200px;
  }
}

.dialog {
  &-close-button {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &-header-checkbox {
    ::v-deep .v-input--selection-controls__input .v-icon {
      font-size: 2em;
      color: $text-black;
    }

    .header-label,
    ::v-deep .v-input__slot .v-label {
      font-size: 1.8em;
      font-weight: bold;
      line-height: 1em;
      color: $text-black;
    }

    &-caption {
      font-size: 1rem;
      font-weight: normal;
    }
  }

  &-section-title {
    background-color: $bg-light-grey;
  }

  &-section-caption {
    font-size: 1rem;
    font-weight: normal;
  }
}

.action-btn {
  margin: 12px;
  width: 300px;
  font-size: 18px;
  font-weight: bold;
  text-transform: none;
  color: $text-white;
}

/** -------------------------------
  下取申込査定品確認ダイアログ 960px未満
------------------------------- */
.sp {
  .action-btn {
    margin: 12px 2px;
    width: auto;
    font-size: 1rem;
    padding: 4px;
  }
}
</style>
