<template>
  <div class="order-contents point">
    <div class="order-contents-title d-flex">
      ご注文内容
      <v-btn class="ec-link-btn ml-auto" to="/ec/cart" color="rgba(0, 0, 0, 0.12)" tile depressed>カートに戻る</v-btn>
    </div>
    <div
      class="order-contents-area"
      :class="{
        'pa-2': $vuetify.breakpoint.smAndDown
      }"
    >
      <!-- 商品情報 960px以上 -->
      <div class="order-product-area" v-if="$vuetify.breakpoint.mdAndUp">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th colspan="2" class="col-width-auto text-center">商品名</th>
                <th class="text-center">単価</th>
                <th class="text-center">数量</th>
                <th class="text-center">小計</th>
              </tr>
            </thead>
            <tbody class="order-product-info">
              <template v-for="(product, index) in products">
                <tr :key="`${index}-1`">
                  <!-- 画像 -->
                  <td :rowspan="getMaxTableRowSize(product)">
                    <div class="order-product-img-area pa-2">
                      <img class="order-product-img" contain :src="product.imagePath" @error="noimage" />
                    </div>
                  </td>
                  <!-- 商品名 -->
                  <td>
                    <div class="order-product-name">{{ product.itemName }}</div>
                  </td>
                  <!-- 単価 -->
                  <td class="text-right">{{ product.unitPrice | price() }}円</td>
                  <!-- 数量 -->
                  <td class="text-center">
                    <span v-if="product.count <= 0">-</span>
                    <span v-else>{{ product.count | price() }}点</span>
                  </td>
                  <!-- 小計 -->
                  <td class="text-right">
                    <span v-if="product.price <= 0">-</span>
                    <span v-else>{{ product.price | price() }}円</span>
                  </td>
                </tr>
                <tr :key="`${index}-2`" v-if="product.isWarranty">
                  <!-- 商品名 -->
                  <td>延長保証料</td>
                  <!-- 単価 -->
                  <td class="text-right">{{ product.warrantyPrice | price() }}円</td>
                  <!-- 数量 -->
                  <td class="text-center">-</td>
                  <!-- 小計 -->
                  <td class="text-right">{{ product.warrantyPrice | price() }}円</td>
                </tr>
                <tr :key="`${index}-3`" v-if="product.isWrapping">
                  <!-- 商品名 -->
                  <td>ラッピング金額</td>
                  <!-- 単価 -->
                  <td class="text-right">{{ product.wrappingPrice | price() }}円</td>
                  <!-- 数量 -->
                  <td class="text-center">-</td>
                  <!-- 小計 -->
                  <td class="text-right">{{ product.wrappingPrice | price() }}円</td>
                </tr>
                <tr :key="`${index}-4`" v-if="product.bulkDiscountPrice">
                  <!-- 商品名 -->
                  <td>まとめ買い割引</td>
                  <!-- 単価 -->
                  <td class="text-right">{{ product.bulkDiscountPrice | price(true) }}円</td>
                  <!-- 数量 -->
                  <td class="text-center">-</td>
                  <!-- 小計 -->
                  <td class="text-right">{{ product.bulkDiscountPrice | price(true) }}円</td>
                </tr>
                <tr :key="`${index}-5`" v-if="product.bundleDiscountPrice">
                  <!-- 商品名 -->
                  <td>ついで買い割引</td>
                  <!-- 単価 -->
                  <td class="text-right">{{ product.bundleDiscountPrice | price(true) }}円</td>
                  <!-- 数量 -->
                  <td class="text-center">-</td>
                  <!-- 小計 -->
                  <td class="text-right">{{ product.bundleDiscountPrice | price(true) }}円</td>
                </tr>
                <tr :key="`${index}-6`" v-if="product.isTrade">
                  <!-- 商品名 -->
                  <td>なんでも下取り</td>
                  <!-- 単価 -->
                  <td class="text-right">{{ product.tradePrice | price(true) }}円</td>
                  <!-- 数量 -->
                  <td class="text-center">-</td>
                  <!-- 小計 -->
                  <td class="text-right">{{ product.tradePrice | price(true) }}円</td>
                </tr>
                <!-- 商品小計 -->
                <tr :key="`${index}-7`">
                  <td colspan="5" class="footer text-right">
                    <span>商品小計：</span>
                    <span v-if="product.subTotal < 0">-</span>
                    <span v-else>
                      <span class="order-product-sub-total-price">{{ product.subTotal | price() }}</span>
                      <span><b>円</b>（税込）</span>
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <!-- 商品情報 960px未満 -->
      <template v-else>
        <div class="order-product-area" v-for="(product, index) in products" :key="index">
          <div class="order-product-info d-flex pa-2">
            <div class="order-product-info-1 text-center">
              <!-- 商品画像 -->
              <div class="order-product-img-area mb-3">
                <img class="order-product-img" contain :src="product.imagePath" @error="noimage" />
              </div>
            </div>
            <div class="order-product-info-2 justify-space-between">
              <!-- 商品名 -->
              <div
                class="order-product-name mt-10"
                :class="{
                  'mb-4': $vuetify.breakpoint.mdAndUp,
                  'mb-6': $vuetify.breakpoint.smAndDown
                }"
              >
                {{ product.itemName }}
              </div>

              <!-- 数量 -->
              <div
                :class="{
                  'text-right': $vuetify.breakpoint.smAndDown
                }"
                v-if="product.count !== undefined && product.count !== null"
              >
                <span>数量：</span>
                <span
                  :class="{
                    'order-product-info-val': $vuetify.breakpoint.smAndDown
                  }"
                >
                  <span v-if="product.count <= 0">-</span>
                  <span v-else>{{ product.count }}点</span>
                </span>
              </div>

              <!-- 単価 -->
              <div
                :class="{
                  'text-right': $vuetify.breakpoint.smAndDown
                }"
                v-if="product.unitPrice"
              >
                <span>単価：</span>
                <span
                  :class="{
                    'order-product-info-val': $vuetify.breakpoint.smAndDown
                  }"
                  >{{ product.unitPrice | price() }}円</span
                >
              </div>

              <!-- オプション -->
              <div class="text-right">
                <div v-if="product.isWarranty">
                  <span>延長保証料：</span>
                  <span class="order-product-info-val">{{ product.warrantyPrice | price() }}円</span>
                </div>
                <div v-if="product.isWrapping">
                  <span>ラッピング金額：</span>
                  <span class="order-product-info-val">{{ product.wrappingPrice | price() }}円</span>
                </div>
                <div v-if="product.discountedValueByCoupon">
                  <span>クーポン利用：</span>
                  <span class="order-product-info-val">{{ product.discountedValueByCoupon | price(true) }}円</span>
                </div>
                <div v-if="product.bulkDiscountPrice">
                  <span>まとめ買い割引：</span>
                  <span class="order-product-info-val">{{ product.bulkDiscountPrice | price(true) }}円</span>
                </div>
                <div v-if="product.bundleDiscountPrice">
                  <span>ついで買い割引：</span>
                  <span class="order-product-info-val">{{ product.bundleDiscountPrice | price(true) }}円</span>
                </div>
                <div v-if="product.isTrade">
                  <span>なんでも下取り：</span>
                  <span class="order-product-info-val">{{ product.tradePrice | price(true) }}円</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="order-product-total-info"
            :class="{
              'pa-4': $vuetify.breakpoint.mdAndUp,
              'pa-2': $vuetify.breakpoint.smAndDown
            }"
          >
            <!-- 小計 -->
            <div class="order-product-sub-total text-right" v-if="product.subTotal !== undefined || product.subTotal !== null">
              小計：
              <span v-if="product.subTotal < 0">-</span>
              <span v-else>{{ product.subTotal | price() }}円</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import { CartItem } from '@/types/cart-list';

export default Vue.extend({
  name: 'order-confirm-products',
  components: {},
  props: {
    products: {
      type: Array as PropType<Array<CartItem>>,
      required: true,
      default: () => []
    }
  },
  setup: () => {
    const state = reactive({
      availablePoint: 0,
      usePoint: false,
      applyPoint: ''
    });

    /**
     * テーブルの最大行数を取得
     */
    const getMaxTableRowSize = (product: CartItem) => {
      const option = [product.isWarranty, product.isWrapping, product.bulkDiscountPrice, product.bundleDiscountPrice, product.isTrade];
      const enabledOptionCount = option.filter((item) => item).length;
      return enabledOptionCount + 1;
    };

    return {
      ...toRefs(state),
      noimage,
      getMaxTableRowSize
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  ご注文内容確認
------------------------------- */
.order-product {
  font-size: 14px;
  border-color: $ec-grey;

  &-sub-total-price {
    font-weight: bold;
    font-size: 1.2em;
  }

  $img-size: 150px;
  $info-1-mr: 40px;
  &-info {
    &-1 {
      flex: 0 0 $img-size;
      margin-right: $info-1-mr;
    }

    &-2 {
      flex-basis: calc(100% - #{$img-size} - #{$info-1-mr});
      line-height: 2;
      display: flex;
      flex-direction: column;
    }

    &-val {
      display: inline-block;
      width: 6em;
    }
  }

  &-img-area {
    height: $img-size;
    max-width: $img-size;
  }
  &-img {
    width: 100%;
    margin: auto;
    object-fit: contain;
  }

  &-name {
    @include ellipsis-lines(2);
  }

  &-total-info {
    border-top: dashed 1px $ec-grey;
  }
}

/** -------------------------------
  ご注文内容確認 960px以下
------------------------------- */
.container-narrow {
  .order-product {
    font-size: 12px;

    &-area {
      border: 1px solid $ec-grey;
    }

    $img-size-sp: 100px;
    $info-1-mr: 8px;
    &-info {
      &-1 {
        flex: 0 0 $img-size-sp;
        margin-right: $info-1-mr;
      }

      &-2 {
        flex-basis: calc(100% - #{$img-size-sp} - #{$info-1-mr});
        line-height: 1.5;
      }
    }

    &-img-area {
      height: $img-size-sp;
      max-width: $img-size-sp;
    }

    &-name {
      @include ellipsis-lines(3);
    }
  }
}
</style>
