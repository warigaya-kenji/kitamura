<template>
  <div class="d-flex mt-5">
    <!-- New -->
    <div class="flag-common-font flag-new" v-if="flags.NEW_ARRIVAL">NEW</div>

    <div class="flag-common-font flag-green linkbox" v-if="flags.TRADE_IN_ANYTHING_TARGET">
      なんでも下取り
      <a href="/sitemap/riyou_shitadori_index.html"></a>
    </div>

    <div class="flag-common-font flag-gray" v-if="flags.STORE_DELIVERY_ONLY">店舗受取限定</div>

    <div class="flag-common-font flag-gray" v-if="flags.DIRECT_SHIPMENT">メーカー直送</div>

    <div class="flag-common-font flag-red" v-if="flags.LIMITED_QUANTITY">数量限定</div>

    <div class="flag-common-font flag-red linkbox" v-if="flags.TOKUTOKU_DEFERRED">
      トクトク据置
      <a href="/special/sale-fair/general/tokutokusueoki/"></a>
    </div>

    <div class="flag-common-font flag-green linkbox" v-if="flags.TOKUTOKU_EXCHANGE_TARGET">
      トクトク交換対象
      <a href="/sitemap/faq_tokutokukoukan.html"></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'product-flags',
  components: {},
  props: {
    // フラグ
    flags: {
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

<style scoped>
.flag-common-font {
  border: solid 1px;
  padding: 0px 2px;
  margin-right: 12px;
}

.flag-new {
  border-color: #d80b24;
  color: white;
  background-color: #d80b24;
}

.flag-red {
  border-color: #d80b24;
  color: #d80b24;
}

.flag-green {
  border-color: #06a865;
  color: #06a865;
}

.flag-gray {
  border-color: #666666;
  color: #666666;
}

.linkbox {
  position: relative;
}
.linkbox a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
