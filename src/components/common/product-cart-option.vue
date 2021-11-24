<template>
  <div id="cart-dialog-options" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <div class="cart-options">
      <div class="cart-options-title">オプション選択</div>
      <div class="cart-options-area">
        <div class="cart-options-item" v-if="!isUsed && includeFlag(PRODUCT_FLAG.FIVE_YEAR_WARRANTY_COVERAGE)">
          <v-checkbox v-model="warranty">
            <template v-slot:label>
              <div class="cart-options-item-text">
                5年間保証に加入する<br v-if="$vuetify.breakpoint.smAndDown" />
                (保証料金： <span class="red-font">{{ product.extWarrantyCharge | price() }}円 </span>)
                <a href="/sitemap/riyou_hoshou_index.html" target="_blank" @click.stop v-if="$vuetify.breakpoint.mdAndUp">
                  <v-icon class="ml-6"> far fa-question-circle </v-icon>
                </a>
              </div>
              <a href="/sitemap/riyou_hoshou_index.html" target="_blank" @click.stop v-if="$vuetify.breakpoint.smAndDown">
                <v-icon class="cart-options-item-icon"> far fa-question-circle </v-icon>
              </a>
            </template>
          </v-checkbox>
          <div class="cart-options-item-sub-text" v-if="$vuetify.breakpoint.mdAndUp">
            自然故障の際、メーカー保証1年に加え、カメラのキタムラの保証で最長4年間、合計5年間メーカー保証と同等の保証が受けられます
          </div>
        </div>
        <div class="cart-options-item" v-if="tradeInApplicable">
          <v-checkbox v-model="tradeInHope">
            <template v-slot:label>
              <div class="cart-options-item-text">
                持っているカメラ・レンズを下取りに出す<br v-if="$vuetify.breakpoint.smAndDown" />
                <span v-if="product.tradeInPrice">
                  (<span class="red-font">{{ product.tradeInPrice | price(true) }}円値引～</span>)
                </span>
                <a href="/sitemap/riyou_shitadori_index.html" target="_blank" @click.stop v-if="$vuetify.breakpoint.mdAndUp">
                  <v-icon class="ml-6"> far fa-question-circle </v-icon>
                </a>
              </div>
              <a href="/sitemap/riyou_shitadori_index.html" target="_blank" @click.stop v-if="$vuetify.breakpoint.smAndDown">
                <v-icon class="cart-options-item-icon"> far fa-question-circle </v-icon>
              </a>
            </template>
          </v-checkbox>
          <div class="cart-options-item-sub-text" v-if="$vuetify.breakpoint.mdAndUp">
            ご不要なカメラ・レンズ・ビデオカメラ等をご用意頂くと、販売価格からさらにお安くお求めいただけます
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { PRODUCT_FLAG } from '@/constants/product-flag';
import ProductService from '@/logic/product.service';

type CartOption = {
  warranty: boolean;
  tradeInHope: boolean;
};

export default Vue.extend({
  name: 'product-cart-option',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object as PropType<CartOption>,
      required: true,
      default: {}
    },
    product: {
      type: Object as PropType<ProductDetail>,
      required: true,
      default: {}
    },
    isUsed: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const state = reactive({});

    // フラグが含まれているか確認
    const includeFlag = (flagNum: number): boolean => {
      return ProductService.includeFlag((props.product as ProductDetail).flags, flagNum);
    };

    /**
     * カートオプションの下取りが適用可能かどうか
     */
    const tradeInApplicable = computed(() => {
      if (props.isUsed) {
        // 中古商品の場合、各種フラグ 26 か存在するなら表示
        return includeFlag(PRODUCT_FLAG.TRADE_IN_ASSESSMENT_TARGET);
      } else {
        // 新品商品の場合、各種フラグ 3、21、26 のいずれか存在するなら表示
        return (
          includeFlag(PRODUCT_FLAG.TOKUTOKU_EXCHANGE_TARGET) ||
          includeFlag(PRODUCT_FLAG.TRADE_IN_ANYTHING_TARGET) ||
          includeFlag(PRODUCT_FLAG.TRADE_IN_ASSESSMENT_TARGET)
        );
      }
    });

    // 5年間保証
    const warranty = computed({
      get: () => (props.value as CartOption).warranty,
      set: (value) => {
        const option = { ...(props.value as CartOption), warranty: value };
        context.emit('change', option);
      }
    });

    // 下取り希望
    const tradeInHope = computed({
      get: () => (props.value as CartOption).tradeInHope,
      set: (value) => {
        const option = { ...(props.value as CartOption), tradeInHope: value };
        context.emit('change', option);
      }
    });

    return {
      ...toRefs(state),
      PRODUCT_FLAG,
      includeFlag,
      tradeInApplicable,
      warranty,
      tradeInHope
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  カートオプション 960px以上
------------------------------- */
.cart-options {
  &-title {
    padding: 0 20px;
    font-size: 28px;
    font-weight: bold;
    line-height: 60px;
    background-color: $bg-grey;
  }

  &-area {
    padding: 20px;
  }

  &-item {
    &-text {
      font-weight: bold;
      color: $text-black;
      font-size: 18px;
      margin-top: 3px;
    }

    &-sub-text {
      margin-top: -15px;
      margin-left: 30px;
      font-size: 16px;
    }
  }
}

/** -------------------------------
  カートオプション 960px未満
------------------------------- */
.sp {
  .cart-options {
    &-title {
      padding: 0 12px;
      font-size: 18px;
      line-height: 48px;
    }

    &-area {
      padding: 0;
    }

    &-item {
      padding: 0 12px;
      border-bottom: solid 1px $ec-light-grey2;

      &-text {
        margin-top: 0;
        font-size: 15px;
        line-height: 1.2;
      }

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
