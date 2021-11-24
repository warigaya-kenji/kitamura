<template>
  <div class="trade-product-list" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-container class="mx-auto" max-width="100%">
      <!-- 全体ローディング表示 -->
      <div v-if="loading">
        <section-loading />
      </div>

      <template v-else-if="items && items.length">
        <!-- 960px以上 -->
        <v-slide-group show-arrows v-if="$vuetify.breakpoint.mdAndUp" class="product-list" @click:next="displayMore()">
          <v-slide-item v-for="(item, index) in displaiedProducts" :key="index">
            <v-card class="product-item pa-2" flat :class="{ selected: item.selected && selectable }">
              <v-checkbox hide-details v-model="item.selected" @change="onChangeChecked($event, item)" v-if="selectable"></v-checkbox>

              <!-- 商品画像 -->
              <div class="product-image-area my-1">
                <img :src="item.imagePath" :alt="item.itemName" @error="noimage" contain class="product-image" />
              </div>

              <!-- 数量 -->
              <div class="d-flex">
                <div class="d-flex align-baseline mx-auto">
                  数量
                  <div class="product-item-count-area ml-4">
                    <div class="product-item-count" v-if="readonly">{{ item.count }}</div>
                    <v-select hide-details :items="countList" outlined dense v-model="item.count" v-else></v-select>
                  </div>
                </div>
              </div>

              <!-- 商品情報 -->
              <div class="product-name">{{ item.itemName }}</div>
              <div class="product-price" v-if="item.tradeinPriceS">
                <div>【下取り上限価格】</div>
                <div class="red-font">
                  <b>{{ item.tradeinPriceS | price() }}円</b>
                </div>
              </div>
              <div class="text-center">
                <v-btn tile color="rgba(0, 0, 0, 0.12)" v-if="deletable" @click="deleteTradeProduct(item)">削除</v-btn>
              </div>

              <!-- 価格がない時のカバー -->
              <div class="product-item-cover" v-if="!item.tradeinPriceS">
                <span class="product-item-cover-text">
                  <span v-if="tokutoku">トクトク交換</span>
                  <span v-else>下取申込み</span>
                  <span>対象外の為</span><br />
                  <span>選択できません</span>
                </span>
              </div>

              <!-- トクトク交換対象外時のカバー -->
              <div class="product-item-cover" v-else-if="tokutoku && !item.canTokutoku">
                <span class="product-item-cover-text">
                  <span>トクトク交換対象外の為</span><br />
                  <span>選択できません</span>
                </span>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <!-- 960px未満 -->
        <div class="product-list" v-else>
          <div v-for="(item, index) in displaiedProducts" :key="index" class="product-list-item pa-2">
            <v-row>
              <v-col cols="4" class="product-list-checkbox-area">
                <v-checkbox class="px-2" hide-details v-model="item.selected" @change="onChangeChecked($event, item)" v-if="selectable"></v-checkbox>
              </v-col>
              <v-col cols="8">
                <!-- 数量 -->
                <div class="d-flex">
                  <div class="d-flex align-baseline">
                    数量
                    <div class="product-item-count-area ml-4">
                      <div class="product-item-count" v-if="readonly">{{ item.count }}</div>
                      <v-select hide-details :items="countList" outlined dense v-model="item.count" v-else></v-select>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <!-- 商品画像 -->
                <div class="product-image-area pr-2">
                  <img :src="item.imagePath" :alt="item.itemName" @error="noimage" contain class="product-image" />
                </div>
              </v-col>
              <v-col cols="8">
                <!-- 商品名 -->
                <div class="product-name">{{ item.itemName }}</div>
                <div class="product-price" v-if="item.tradeinPriceS">
                  <b>
                    下取り上限価格：<span class="red-font">{{ item.tradeinPriceS | price() }}円</span>
                  </b>
                </div>
                <div>
                  <v-btn tile color="rgba(0, 0, 0, 0.12)" v-if="deletable" @click="deleteTradeProduct(item)">削除</v-btn>
                </div>
              </v-col>
            </v-row>

            <!-- 価格がない時のカバー -->
            <div class="product-item-cover" v-if="!item.tradeinPriceS">
              <span class="product-item-cover-text">
                <span v-if="tokutoku">トクトク交換</span>
                <span v-else>下取申込み</span>
                <span>対象外の為</span><br />
                <span>選択できません</span>
              </span>
            </div>

            <!-- トクトク交換対象外時のカバー -->
            <div class="product-item-cover" v-else-if="tokutoku && !item.canTokutoku">
              <span class="product-item-cover-text">
                <span>トクトク交換対象外の為</span><br />
                <span>選択できません</span>
              </span>
            </div>
          </div>

          <!-- もっと見るボタン -->
          <more-items-button @click="displayMore()" v-if="items.length > displaiedProductsLength" />
        </div>
      </template>

      <div v-else>{{ emptyMsg }}</div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import SectionLoading from '@/components/common/section-loading.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';
import { TradeProductItem } from '@/types/trade-product-list';

export default Vue.extend({
  name: 'trade-product-list',
  components: {
    'section-loading': SectionLoading,
    'more-items-button': MoreItemsButton
  },
  props: {
    items: {
      required: true,
      type: Array as PropType<Array<TradeProductItem>>
    },
    loading: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: false
    },
    tokutoku: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    emptyMsg: {
      type: String,
      default: '選択された依頼品はありません'
    }
  },
  setup: (props, context) => {
    const state = reactive({
      // 数量のリスト（1-9）
      countList: [...Array(9)].map((_, i) => i + 1),
      // ページ数
      page: 1
    });

    /**
     * 査定品のチェックが変更されたとき
     */
    const onChangeChecked = (checked: boolean, product: TradeProductItem) => {
      if (checked) context.emit('select', product);
      else context.emit('unselect', product);
    };

    /**
     * 査定品を削除する
     */
    const deleteTradeProduct = (product: TradeProductItem) => {
      product.selected = false;
      context.emit('delete', product);
    };

    /**
     * 表示する商品の数
     */
    const displaiedProductsLength = computed(() => {
      const length = context.root.$vuetify.breakpoint.smAndDown ? 3 * state.page : (props.items as Array<TradeProductItem>).length;
      return length;
    });

    /**
     * 表示する商品
     */
    const displaiedProducts = computed(() => {
      if (context.root.$vuetify.breakpoint.smAndDown) {
        const length = 3 * state.page;
        const products = (props.items as Array<TradeProductItem>).slice(0, length);
        return products;
      } else {
        return props.items;
      }
    });

    /**
     * もっと見る
     */
    const displayMore = () => {
      state.page++;
      context.emit('onDisplayMore');
    };

    watch(
      () => props.loading,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          state.page = 1;
        }
      }
    );

    return {
      ...toRefs(state),
      noimage,
      onChangeChecked,
      deleteTradeProduct,
      displaiedProductsLength,
      displaiedProducts,
      displayMore
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  960px以上
------------------------------- */
.trade-product-list {
  margin: 5px;
}

.product-list {
  .product-item {
    position: relative;
    margin: 5px 8px;
    width: 200px;

    &.selected {
      background-color: $bg-light-grey3;
    }

    ::v-deep .v-input--selection-controls {
      margin: 0;
    }

    &-cover {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: auto;
      z-index: 2;
      background: $bg-black-transparent-3;

      &-text {
        font-size: 18px;
        font-weight: bold;
        color: $text-white !important;
        text-align: center;
      }
    }
  }

  .product-image-area {
    display: flex;
    margin: auto;
    width: 160px;
    height: 160px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    font-size: 0.8rem;
  }

  .product-image {
    width: 100%;
    object-fit: contain;
  }

  .product-name {
    @include ellipsis(3rem);
    margin: 5px auto 2px auto;
  }

  .product-price {
    display: inline-block;
    margin: 2px 0 4px;
    width: 100%;
    text-align: center;
  }

  .product-item-count {
    min-width: 60px;
    border: 1px solid $ec-black;
    border-radius: 4px;
    text-align: center;
    padding: 4px 0px;

    &-area {
      min-width: 70px;
      width: 50%;
    }
  }
}

/** -------------------------------
  960px未満
------------------------------- */
.trade-product-list.sp {
  margin: 5px 0;
}

.sp {
  .product-list {
    background-color: $bg-white;

    &-item {
      border: 1px solid $ec-grey;
      position: relative;

      .row {
        margin: 0;
      }

      .col {
        padding: 0;
      }
    }

    &-checkbox-area {
      display: flex;
      align-items: center;

      &::v-deep .v-input--checkbox {
        margin: 0;

        .v-icon {
          font-size: 40px;
        }
      }
    }

    .product-image-area {
      width: 100%;
      height: auto;
    }

    .product-price {
      text-align: left;
    }
  }
}

.font-small {
  font-size: 10px;
}
</style>

<style>
/* FIXME: 他にいい方法がないか検討 */
/* v-slide-group:矢印のCSSを上書き */
.trade-product-list.sp .container,
.trade-product-list.sp .container {
  padding: 0;
}
.trade-product-list.sp .v-slide-group__next,
.trade-product-list.sp .v-slide-group__prev {
  min-width: auto;
}
</style>
