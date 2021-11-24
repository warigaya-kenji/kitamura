<template>
  <div class="order-contents coupon">
    <div class="order-contents-title d-flex">
      クーポンのご利用
      <v-btn class="ec-link-btn ml-auto" to="/ec/order#order-coupon" color="rgba(0, 0, 0, 0.12)" tile depressed>変更</v-btn>
    </div>
    <!-- クーポンのご利用 960px以上 -->
    <div class="order-contents-area coupon-area" v-if="$vuetify.breakpoint.mdAndUp">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">クーポンのご利用</th>
              <th class="text-center">詳細</th>
            </tr>
          </thead>
          <tbody class="order-product-info">
            <tr>
              <td class="text-center">
                <div v-if="couponList.length">クーポンのご利用あり</div>
                <div v-else>適用されている値引きはありません</div>
              </td>
              <td>
                <div v-for="coupon in couponList" :key="coupon.code">
                  <span>{{ coupon.name }}</span>
                  <span v-if="!coupon.isShippingFree">（{{ -coupon.discountPrice | price(true) }}円値引き）</span>
                </div>
                <div v-if="!couponList.length">-</div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <!-- クーポンのご利用 960px未満 -->
    <div class="order-contents-area coupon-area" v-else>
      <!-- クーポン一覧 -->
      <div class="coupon-list">
        <div class="coupon-list-item order-contents-item-value" v-for="coupon in couponList" :key="coupon.code">
          {{ coupon.name }}
        </div>
        <div class="order-contents-item-value" v-if="!couponList.length">適用されている値引きはありません</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { CouponItem } from '@/types/cart-list';

export default Vue.extend({
  name: 'order-confirm-coupon',
  components: {},
  props: {
    couponList: {
      type: Array as PropType<Array<CouponItem>>,
      default: () => []
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  クーポン
------------------------------- */
.coupon {
}
/** -------------------------------
  クーポン 960px以下
------------------------------- */
.container-narrow {
  .coupon {
    // クーポン一覧
    &-list {
      padding: 12px 18px;
    }
  }
}
</style>
