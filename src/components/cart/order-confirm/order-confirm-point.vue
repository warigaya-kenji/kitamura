<template>
  <div class="order-contents point">
    <div class="order-contents-title d-flex">
      ポイントのご利用
      <v-btn class="ec-link-btn ml-auto" to="/ec/order#order-point" color="rgba(0, 0, 0, 0.12)" tile depressed>変更</v-btn>
    </div>
    <!-- ポイントのご利用 960px以上 -->
    <div class="order-contents-area point-area" v-if="$vuetify.breakpoint.mdAndUp">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ポイントのご利用</th>
              <th class="text-center">指定詳細</th>
            </tr>
          </thead>
          <tbody class="order-product-info">
            <tr>
              <td class="text-center">
                <div v-if="usePoint">ポイントのご利用あり</div>
                <div v-else>ポイントのご利用はありません</div>
              </td>
              <td>
                <div v-if="usePoint">{{ usePoint | price }}ポイント</div>
                <div v-else>-</div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <!-- ポイントのご利用 960px未満 -->
    <div class="order-contents-area point-area" v-else>
      <!-- 利用可能ポイント -->
      <div class="order-contents-item-value" v-if="usePoint">{{ usePoint | price }}pt分利用</div>
      <div class="order-contents-item-value" v-else>ポイントのご利用はありません</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'order-confirm-point',
  components: {},
  props: {
    usePoint: {
      type: Number,
      default: 0
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
  受取方法の選択
------------------------------- */
.point {
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .point {
    &-area {
      padding: 12px 18px;
    }
  }
}
</style>
