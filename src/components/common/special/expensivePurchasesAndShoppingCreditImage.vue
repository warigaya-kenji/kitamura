<template>
  <v-container class="my-6">
    <v-row>
      <v-col cols="12" sm="6">
        <a :href="expensivePurchaseHref">
          <v-img :src="expensivePurchaseSrc" alt="高価買取実施中" max-width="350" max-height="130" class="hover mx-auto"> </v-img>
        </a>
      </v-col>
      <v-col cols="12" sm="6">
        <a href="/ec/guide/s_credit_01">
          <v-img src="https://shopimg.kitamura.jp/images/banner/1486.gif" alt="ショッピングクレジット" max-width="350" max-height="130" class="hover"> </v-img>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'expensivePurchasesAndShoppingCreditImage',
  components: {},
  props: {
    expensivePurchaseHref: {
      type: String,
      required: true
    },
    expensivePurchaseSrc: {
      type: String,
      required: true
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
.breadcrumbs {
  a:hover .breadcrumbs-text {
    color: inherit;
  }

  a .breadcrumbs-text {
    color: $text-secondary;
  }
}

// 960px未満
.sp.breadcrumbs {
  padding: 8px;
}
</style>
