<template>
  <div class="order-contents delivery-datetime" v-show="receiveType === RECEIVE_TYPE.HOME">
    <div class="order-contents-title">お届け希望の日時指定</div>
    <!-- 選択コンテンツ -->
    <div class="order-contents-area">
      <!-- お届け目安 -->
      <div class="delivery-datetime-shortest">
        <span v-if="shortestDeliveryDate">お届け目安:&nbsp;{{ shortestDeliveryDate | date('YYYY/MM/DD') }}</span>
        <span v-else>お届け目安:&nbsp;商品入荷次第お届けいたします</span>
      </div>
      <!-- 希望日時 -->
      <div class="order-contents-option-area delivery-datetime-sub-option">
        <div class="delivery-datetime-select-area">
          <v-select
            class="delivery-datetime-select"
            :items="arrivalDateList"
            item-text="arrivalDate"
            item-value="arrivalDate"
            v-model="selectedArrivalDate"
            label="お届け希望日"
            append-icon="far fa-angle-down"
            outlined
            dense
            hide-details="auto"
            :rules="rules.deliveryArrivalDate"
            @change="changeDeliveryDate()"
          ></v-select>
          <v-select
            class="delivery-datetime-select"
            :items="arrivalTimeList"
            item-text="deliveryTimeZone"
            item-value="deliveryTimeZoneCd"
            v-model="selectedArrivalTime"
            label="お届け希望時間帯"
            append-icon="far fa-angle-down"
            outlined
            dense
            hide-details="auto"
            :rules="rules.deliveryArrivalTime"
            @change="changeDeliveryDate()"
          ></v-select>
          <v-select
            class="delivery-datetime-select"
            :items="deliveryBoxList"
            item-text="deliveryBoxSelectName"
            item-value="deliveryBoxCd"
            v-model="selectedDeliveryBox"
            label="宅配ボックスの利用について"
            append-icon="far fa-angle-down"
            outlined
            dense
            hide-details="auto"
            :rules="rules.deliveryBox"
            @change="changeDeliveryDate()"
          ></v-select>
        </div>
        <div class="delivery-datetime-none">
          以下の場合、宅配BOXのご利用はできません<br />
          ・お支払い方法「代金引換」をご利用になる場合<br />
          ・配送方法「ネコポス」「ヤマト便」をご利用になる場合<br />
          ・なんでも下取りをご利用の場合<br />
          （最短お届けは発送から翌々日の予定です）
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, computed, watch } from '@vue/composition-api';
import { RECEIVE_TYPE } from '@/constants/order-register-type';
import { ArrivalDateInfo, DeliveryBoxInfo, DeliveryTimeZoneInfo } from '@/types/cash-register-info';

export type OrderDeliveryVal = {
  selectArrivalDate?: string;
  selectDeliveryTimeZoneCd?: string;
  useDeliverybox?: number;
};

export default Vue.extend({
  name: 'order-delivery-date-time',
  components: {},
  props: {
    receiveType: {
      type: String,
      required: true
    },
    // レジ情報取得値
    val: {
      type: Object as PropType<OrderDeliveryVal>,
      required: false
    },
    // お届け日目安
    shortestDeliveryDate: {
      type: String,
      required: false,
      default: ''
    },
    // お届け希望日
    arrivalDateInfo: {
      type: Array as PropType<Array<ArrivalDateInfo>>,
      required: false,
      default: () => []
    },
    // 最短お届け時間帯コード
    shortestDeliveryTimeZoneCd: {
      type: String,
      required: false,
      default: ''
    },
    // お届け希望時間帯
    timeZoneList: {
      type: Array as PropType<Array<DeliveryTimeZoneInfo>>,
      required: false,
      default: () => []
    },
    // 宅配ボックス利用有無
    deliveryBoxInfo: {
      type: Array as PropType<Array<DeliveryBoxInfo>>,
      required: false,
      default: () => []
    },
    // バリデーションルール
    rules: {
      type: Object,
      required: true
    },
    // チェックボックス用の表通エラーメッセージ
    getErrorMessage: {
      type: Function,
      required: true
    }
  },
  setup: (props, context) => {
    const state = reactive({
      // お届け希望日
      selectedArrivalDate: '指定なし',
      // お届け希望時間帯
      selectedArrivalTime: '0',
      // 宅配ボックス利用有無
      selectedDeliveryBox: 0
    });

    /**
     * 希望日の表示制御
     */
    const arrivalDateList = computed(() => {
      const displayDateList = [{ arrivalDate: '指定なし' }];
      const arrivalDateInfo = (props.arrivalDateInfo as Array<ArrivalDateInfo>) || [];
      return arrivalDateInfo.length ? displayDateList.concat(arrivalDateInfo) : displayDateList;
    });

    /**
     * 希望時間帯の表示制御
     */
    const arrivalTimeList = computed(() => {
      const timeZoneList = (props.timeZoneList as Array<DeliveryTimeZoneInfo>) || [];
      const shortestTimeZoneCd = props.shortestDeliveryTimeZoneCd as string;
      const displayTimeZoneList =
        shortestTimeZoneCd && arrivalDateList.value[1] && state.selectedArrivalDate === arrivalDateList.value[1].arrivalDate
          ? timeZoneList.filter((time) => +time.deliveryTimeZoneCd >= +shortestTimeZoneCd)
          : timeZoneList;
      displayTimeZoneList.unshift({ deliveryTimeZoneCd: '0', deliveryTimeZone: '指定なし' });
      return displayTimeZoneList;
    });

    /**
     * 宅配ボックス利用の表示制御
     */
    const deliveryBoxList = computed(() => {
      const deliveryBoxInfo = (props.deliveryBoxInfo as Array<DeliveryBoxInfo>) || [];
      return deliveryBoxInfo.length ? deliveryBoxInfo : [{ deliveryBoxCd: 0, deliveryBoxSelectName: '指定なし' }];
    });

    // レジ情報の値で更新
    watch(
      () => props.val,
      () => {
        const deliveryVal = props.val as OrderDeliveryVal;
        state.selectedArrivalDate = deliveryVal.selectArrivalDate ? deliveryVal.selectArrivalDate : '指定なし';
        state.selectedArrivalTime = deliveryVal.selectDeliveryTimeZoneCd ? deliveryVal.selectDeliveryTimeZoneCd : '0';
        state.selectedDeliveryBox = deliveryVal.useDeliverybox ? deliveryVal.useDeliverybox : 0;
      },
      { immediate: true }
    );

    // お届け日指定
    const changeDeliveryDate = () => {
      context.emit('changeDeliveryDate', state.selectedArrivalDate, state.selectedArrivalTime, +state.selectedDeliveryBox);
    };

    return {
      ...toRefs(state),
      RECEIVE_TYPE,
      arrivalDateList,
      arrivalTimeList,
      deliveryBoxList,
      changeDeliveryDate
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.container-wide {
  .delivery-datetime {
    // お届け目安
    &-shortest {
      margin-bottom: 20px;
      font-size: 18px;
    }

    // 希望日時
    &-select-area {
      display: flex;
      justify-content: space-between;
      padding: 16px 0;
      border-bottom: dashed 1px $ec-grey;
    }

    &-select {
      flex: 0 1 calc((100% - (40px * 2)) / 3);

      &:not(:last-child) {
        margin-right: 40px;
      }
    }

    &-none {
      margin-top: 8px;
    }
  }
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .delivery-datetime {
    // お届け目安
    &-shortest {
      padding: 10px 20px;
      font-size: 18px;
      color: $text-primary;
      border-bottom: dashed 1px $ec-grey;
    }

    // 希望日時
    &-sub-option {
      padding: 16px 20px;
    }

    &-select {
      margin-bottom: 12px;

      ::v-deep {
        .v-input__slot {
          margin-bottom: 0;
        }
        .v-text-field__details {
          margin: 8px 0 0;
        }
      }
    }

    &-none {
      font-size: 12px;
    }
  }
}
</style>
