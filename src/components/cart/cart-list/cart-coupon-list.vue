<template>
  <div class="cart-coupon-list" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-row class="cart-coupon-area" no-gutters v-for="coupon in couponList" :key="coupon.id">
      <v-col cols="8" md="7" offset-md="2" class="cart-coupon-name-area pa-3" :class="{ 'pr-0': $vuetify.breakpoint.smAndDown }" align-self="center">
        <router-link to="/ec/mypage/coupon/list">
          <span class="cart-coupon-name">
            <span>クーポン値引き</span>
            <span class="d-inline-block">（{{ coupon.name }}）</span>
          </span>
        </router-link>
      </v-col>
      <v-col cols="4" md="3" class="pa-0" align-self="center">
        <div class="cart-coupon-price-area pa-3">
          <b>
            <span class="red-font">
              <span v-if="coupon.isShippingFree">送料無料</span>
              <span v-else>
                <span class="cart-coupon-price">{{ coupon.discountPrice | price(true) }}</span>
                <span>円</span>
              </span>
            </span>
          </b>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import { CouponItem } from '@/types/cart-list';

export default Vue.extend({
  name: 'cart-coupon-list',
  props: {
    couponList: {
      type: Array as PropType<Array<CouponItem>>,
      required: true,
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
  カート内容 960px以上
------------------------------- */
.cart-coupon {
  &-list {
    .row + .row {
      margin: 0;
    }
  }

  &-name-area {
    a:hover .cart-coupon-name {
      color: inherit;
    }

    a .cart-coupon-name {
      color: $text-secondary;
    }
  }

  &-area {
    border-top: 1px dotted $ec-grey;

    &:last-child {
      border-bottom: 1px solid $ec-grey;
    }
  }

  &-price-area {
    text-align: center;
    background-color: $bg-light-grey3;
  }

  &-price {
    font-size: 1.3em;
  }
}

/** -------------------------------
  カート内容 960px未満
------------------------------- */
.sp {
  .cart-coupon {
    &-price-area {
      text-align: end;
      margin-left: 0;
      background-color: inherit;
    }

    &-price {
      font-size: 1em;
    }
  }
}
</style>
