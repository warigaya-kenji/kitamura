<template>
  <div>
    <v-sheet class="mx-auto" :class="{ 'font-small': $vuetify.breakpoint.smAndDown }" max-width="100%">
      <v-slide-group v-model="model" show-arrows :class="{ 'pa-1': $vuetify.breakpoint.smAndDown }" v-if="items">
        <v-slide-item v-for="item in items" :key="item.janCode">
          <product-slider-item
            :isUsed="isUsed"
            :product="item"
            :usedProductSummary="fetchUsedProductSummary(item.janCode)"
            :isRelatedProducts="isRelatedProducts"
          />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import ProductService from '@/logic/product.service';
import productSliderItemVue from './product-slider-item.vue';
import { SliderProduct } from '@/types/product';

export default Vue.extend({
  name: 'product-slider',
  components: {
    'product-slider-item': productSliderItemVue
  },
  props: {
    // 中古商品に関連する商品かどうか
    isUsed: {
      required: true,
      type: Boolean
    },
    items: {
      required: true
    },
    isRelatedProducts: {
      type: Boolean,
      required: true
    }
  },
  setup: (props) => {
    const state = reactive({
      model: null,
      usedProductsSummary: [] as Array<{
        janCode: string;
        itemCount: number;
        minPrice: number;
      }>
    });

    const janCodeList = (props.items as Array<SliderProduct>).map((item) => item.janCode) as string[];

    // 新品用中古情報
    if (janCodeList.length) {
      ProductService.searchUsedProductsSummary(janCodeList)
        .then((result) => {
          state.usedProductsSummary = result.itemInfo;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // 指定したJANコードの新品用中古情報を取得する関数
    function fetchUsedProductSummary(janCode: string) {
      const findItem = state.usedProductsSummary.find((item) => item.janCode === janCode);
      if (findItem) {
        return findItem;
      } else {
        return {};
      }
    }

    return {
      ...toRefs(state),
      fetchUsedProductSummary
    };
  }
});
</script>

<style lang="scss" scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.font-small {
  font-size: 10px;
}

.button-center {
  text-align: center;
}

.button-text {
  color: white;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
}
</style>
