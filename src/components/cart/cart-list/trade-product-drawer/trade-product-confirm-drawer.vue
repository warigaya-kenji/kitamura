<template>
  <div :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-navigation-drawer class="drawer-layout" v-model="openedDrawer" fixed right temporary>
      <div class="drawer-layout-area">
        <div class="drawer-layout-back" @click="close()">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>

        <div class="drawer-layout-contents ec-back-color">
          <div class="drawer-layout-action-btn-area pa-4" v-if="!readonly">
            <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="50px" @click="openDrawer('search')">
              検索で追加
            </v-btn>
            <v-btn class="action-btn" tile color="rgba(255, 132, 0, 1)" height="50px" @click="openDrawer('select')">持っている商品一覧<br />から追加</v-btn>
          </div>

          <div class="pa-1">
            <h3 class="drawer-layout-section-title">下取り依頼品の確認</h3>

            <trade-product-list :deletable="!readonly" :selectable="false" :readonly="true" :items="products" @delete="deleteTradeProduct($event)" />
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import Vue, { PropType } from 'vue';
import TradeProductList from '../trade-product-list.vue';
import { TradeProductItem } from '@/types/trade-product-list';

export default Vue.extend({
  name: 'trade-product-confirm-drawer',
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
    const openedDrawer = computed({
      get: () => props.value as boolean,
      set: (newValue) => context.emit('change', newValue)
    });

    // ダイアログを閉じる
    const close = () => context.emit('change', false);

    // 他のダイアログを開く
    const openDrawer = (type: 'select' | 'search') => context.emit('onChangeDialog', type);

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
      openDrawer,
      close,
      openedDrawer,
      deleteTradeProduct
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込査定品選択ドロワー 960px未満
------------------------------- */
.sp {
  // 共通：ドロワー
  .drawer-layout {
    z-index: 510;
    width: 100% !important;

    &-area {
      height: 100%;
    }

    $drawer-back-height: 45px;
    $drawer-back-border-b: 1px;
    &-back {
      padding: 0 12px;
      height: $drawer-back-height;
      line-height: calc(#{$drawer-back-height} - #{$drawer-back-border-b});
      border-bottom: solid $drawer-back-border-b $ec-light-grey2;

      &-icon {
        color: $ec-grey;
        margin-right: 8px;
      }

      &-text {
        vertical-align: middle;
      }
    }

    &-action-btn-area {
      display: flex;
      justify-content: space-between;

      .action-btn {
        margin: 0;
        width: 48%;
      }
    }

    &-contents {
      min-height: calc(100% - #{$drawer-back-height});
    }

    &-section-caption {
      font-size: 0.8em;
      font-weight: normal;
    }
  }

  .action-btn {
    margin: 12px;
    font-weight: bold;
    text-transform: none;
    color: $text-white;
  }
}
</style>
