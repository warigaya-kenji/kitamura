<template>
  <div class="order-contents coupon">
    <div class="order-contents-title">クーポンのご利用</div>
    <!-- 選択コンテンツ -->
    <div class="order-contents-area coupon-area">
      <!-- クーポン一覧 -->
      <div class="coupon-list" v-show="couponList && couponList.length">
        <div class="coupon-list-item" v-for="coupon in couponList" :key="coupon.id">
          <span>
            <span>{{ coupon.name }}</span>
            <span class="d-inline-block" v-if="!coupon.isShippingFree">（{{ -coupon.discountPrice | price(true) }}円値引き）</span>
          </span>
          <v-btn v-if="coupon.canRemove" class="coupon-list-item-delete" text @click="removeCoupon(coupon.id)">削除する</v-btn>
        </div>
      </div>
      <!-- クーポン追加 -->
      <div class="coupon-add">
        <span>クーポンコードはカートページでご入力いただけます</span>
        <span>（入力は<router-link class="coupon-add-link" to="/ec/cart">こちら</router-link>）</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import { RECEIVE_TYPE } from '@/constants/order-register-type';
import { CouponItem } from '@/types/cart-list';
import CartService from '@/logic/cart.service';

export default Vue.extend({
  name: 'order-coupon',
  components: {},
  props: {
    cartId: {
      type: String,
      required: false
    },
    receiveType: {
      type: String,
      required: true
    },
    couponList: {
      type: Array as PropType<Array<CouponItem>>,
      required: false,
      default: () => []
    }
  },
  setup: (props, context) => {
    const { loader } = context.root.$store;
    const state = reactive({});

    /**
     * クーポン削除処理
     */
    const removeCoupon = async (couponId: number) => {
      loader.routeUnset();
      try {
        const cartId = props.cartId as number;
        await CartService.removeCoupon(cartId, couponId);
        context.root.$router.push({ name: 'cart-list-page' });
      } catch (error) {
        console.error(error);
      } finally {
        loader.routeLoaded();
      }
    };

    return {
      ...toRefs(state),
      RECEIVE_TYPE,
      removeCoupon
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.container-wide {
  .coupon {
    // クーポン一覧
    &-list {
      padding: 8px 12px;
      border-bottom: dashed 1px $ec-light-grey2;

      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    // クーポン追加
    &-add {
      padding: 12px;
      text-align: center;

      // クーポン入力遷移リンク
      &-link {
        color: $text-secondary;

        &:hover {
          color: $ec-primary;
        }
      }
    }
  }
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .coupon {
    &-area {
      border-bottom: solid 1px $ec-light-grey2;
    }

    // クーポン一覧
    &-list {
      padding: 8px 12px;
      border-bottom: dashed 1px $ec-light-grey2;

      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;

        &-delete {
          font-size: 14px;
        }
      }
    }

    // クーポン追加
    &-add {
      padding: 12px;
      text-align: center;

      // クーポン入力遷移リンク
      &-link {
        color: $text-secondary;
      }
    }
  }
}
</style>
