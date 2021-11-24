<template>
  <div class="order-contents delivery-datetime">
    <div class="order-contents-title d-flex">
      お届け希望の日時指定
      <v-btn class="ec-link-btn ml-auto" to="/ec/order#order-delivery-date-time" color="rgba(0, 0, 0, 0.12)" tile depressed>変更</v-btn>
    </div>
    <!-- 選択コンテンツ -->
    <div class="order-contents-area">
      <!-- 希望日時 960px以上 -->
      <div class="delivery-datetime-option-area" v-if="$vuetify.breakpoint.mdAndUp">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">お届け希望の日時指定</th>
                <th class="text-center">指定詳細</th>
              </tr>
            </thead>
            <tbody class="order-product-info">
              <tr>
                <td class="text-center">
                  <span v-if="useArrivalDatetimeOptions">受取指定あり</span>
                  <span v-else>受取指定なし</span>
                </td>
                <td>
                  <!-- 受取指定あり -->
                  <div v-if="useArrivalDatetimeOptions">
                    <div>
                      <span>お届け希望日：</span>
                      <span v-if="selectArrivalDate">{{ selectArrivalDate }}</span>
                      <span v-else>指定なし</span>
                    </div>
                    <div>
                      <span>お届け希望時間帯：</span>
                      <span v-if="selectedDeliveryTimeZone">{{ selectedDeliveryTimeZone }}</span>
                      <span v-else>指定なし</span>
                    </div>
                    <div>
                      <span>宅配ボックスの利用：</span>
                      <span v-if="useDeliverybox && `${useDeliverybox}` !== '0'">{{ useDeliverybox }}</span>
                      <span v-else>指定なし</span>
                    </div>
                  </div>
                  <div v-else>-</div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <!-- 希望日時 960px未満 -->
      <div class="delivery-datetime-option-area" v-else>
        <v-row dense v-if="useArrivalDatetimeOptions">
          <v-col cols="5" class="order-contents-item-title">お届け希望日</v-col>
          <v-col cols="7" class="order-contents-item-value">
            <div v-if="selectArrivalDate">{{ selectArrivalDate }}</div>
            <div v-else>指定なし</div>
          </v-col>

          <v-col cols="5" class="order-contents-item-title">お届け希望時間帯</v-col>
          <v-col cols="7" class="order-contents-item-value">
            <div v-if="selectedDeliveryTimeZone">{{ selectedDeliveryTimeZone }}</div>
            <div v-else>指定なし</div>
          </v-col>

          <v-col cols="5" class="order-contents-item-title">宅配ボックス</v-col>
          <v-col cols="7" class="order-contents-item-value">
            <div v-if="useDeliverybox && `${useDeliverybox}` !== '0'">{{ useDeliverybox }}</div>
            <div v-else>指定なし</div>
          </v-col>
        </v-row>
        <div class="order-contents-item-value" v-else>指定なし</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import { DeliveryBoxInfo, DeliveryTimeZoneInfo } from '@/types/cash-register-info';

// 時間帯
type DeliveryTimeZone = {
  deliveryTimeZoneInfo: Array<DeliveryTimeZoneInfo>;
  selectDeliveryTimeZoneCd: string;
};

// 宅配Box
type Deliverybox = {
  useDeliverybox: number;
  deliveryBoxInfo: DeliveryBoxInfo[];
};

export default Vue.extend({
  name: 'order-confirm-delivery-date-time',
  components: {},
  props: {
    selectArrivalDate: {
      type: String,
      default: ''
    },
    deliveryTimeZone: {
      type: Object as PropType<DeliveryTimeZone>,
      default: {}
    },
    deliverybox: {
      type: Object as PropType<Deliverybox>,
      default: {}
    }
  },
  setup: (props) => {
    const state = reactive({});

    /**
     * 選択されたお届け時間帯
     */
    const selectedDeliveryTimeZone = computed(() => {
      const deliveryTimeZone = props.deliveryTimeZone as DeliveryTimeZone;
      const timeZone = deliveryTimeZone.deliveryTimeZoneInfo?.find((item) => item.deliveryTimeZoneCd === deliveryTimeZone.selectDeliveryTimeZoneCd);
      return timeZone?.deliveryTimeZone;
    });

    /**
     * 宅配ボックスの利用
     */
    const useDeliverybox = computed(() => {
      const deliverybox = props.deliverybox as Deliverybox;
      const box = deliverybox.deliveryBoxInfo?.find((item) => item.deliveryBoxCd === deliverybox.useDeliverybox);
      return box?.deliveryBoxSelectName;
    });

    /**
     * お届け希望日時の指定をしているか
     */
    const useArrivalDatetimeOptions = computed(() => {
      const selectArrivalDate = props.selectArrivalDate as string;
      const deliveryTimeZone = props.deliveryTimeZone as DeliveryTimeZone;
      const deliverybox = props.deliverybox as Deliverybox;
      return selectArrivalDate || deliveryTimeZone.selectDeliveryTimeZoneCd || (deliverybox.useDeliverybox && `${deliverybox.useDeliverybox}` !== '0');
    });

    return {
      ...toRefs(state),
      selectedDeliveryTimeZone,
      useDeliverybox,
      useArrivalDatetimeOptions
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.delivery-datetime {
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .delivery-datetime {
    &-option-area {
      padding: 12px 18px;
    }
  }
}
</style>
