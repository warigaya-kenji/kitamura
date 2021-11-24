<template>
  <div class="order-contents point">
    <div class="order-contents-title">ポイントのご利用</div>
    <!-- 選択コンテンツ -->
    <div class="order-contents-area point-area">
      <!-- 利用可能ポイント -->
      <div class="point-available">{{ canUsePoint | price }}円分のTポイント利用可能</div>
      <!-- ポイント利用チェック -->
      <v-checkbox class="order-contents-checkbox" :class="{ none: $vuetify.breakpoint.smAndDown }" v-model="usePointCheck" @click="clickUsePoint()">
        <template slot="label">
          <div>利用する</div>
        </template>
      </v-checkbox>
      <!-- 利用ポイント数入力 -->
      <div class="order-contents-option-area point-apply" v-show="usePointCheck">
        <v-text-field
          class="point-apply-input-text"
          v-model="usePoint"
          outlined
          dense
          type="number"
          suffix="pt"
          hide-details="auto"
          :rules="rules.point"
        ></v-text-field>
        <v-btn class="point-apply-btn" depressed tile @click="applyPoint()">適用</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';
import { RECEIVE_TYPE } from '@/constants/order-register-type';

export default Vue.extend({
  name: 'order-point',
  components: {},
  props: {
    receiveType: {
      type: String,
      required: true
    },
    // レジ情報取得値
    val: {
      type: Number,
      required: false
    },
    // 合計金額
    totalPrice: {
      type: Number,
      required: false
    },
    // 利用可能ポイント
    canUsePoint: {
      type: Number,
      required: false
    },
    // バリデーションルール
    rules: {
      type: Object,
      required: true
    }
  },
  setup: (props, context) => {
    const state = reactive({
      usePointCheck: false,
      usePoint: '' as number | string
    });

    // レジ情報の値で更新
    watch(
      () => props.val,
      () => {
        const point = props.val as number;
        state.usePointCheck = Boolean(point);
        state.usePoint = point ? `${point}` : '';
      }
    );

    // ポイントの利用押下
    const clickUsePoint = () => {
      const usePoint = props.val as number;
      const totalPrice = props.totalPrice as number;
      const canUsePoint = props.canUsePoint as number;
      if (!usePoint && state.usePointCheck && totalPrice && canUsePoint) {
        state.usePoint = totalPrice < canUsePoint ? `${totalPrice}` : `${canUsePoint}`;
      }
      context.emit('clickUsePoint', state.usePointCheck);
    };

    // 使用ポイントの適用
    const applyPoint = () => {
      context.emit('applyPoint', +state.usePoint);
    };

    return {
      ...toRefs(state),
      RECEIVE_TYPE,
      clickUsePoint,
      applyPoint
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.container-wide {
  .point {
    // 利用可能ポイント
    &-available {
      margin-bottom: 20px;
      font-size: 18px;
    }

    // 利用ポイント数入力
    &-apply {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 32px 20px !important;

      &-input-text {
        flex: 0 1 340px;
        margin-right: 60px;

        ::v-deep {
          .v-input__slot {
            margin-bottom: 0;
          }
          .v-text-field__details {
            margin: 8px 0 0;
          }
        }
      }

      &-btn {
        display: block;
        flex: 0 1 120px;
        height: 45px;
        font-weight: bold;
        background-color: $bg-light-grey;
      }
    }
  }
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .point {
    &-area {
      border-bottom: solid 1px $ec-light-grey2;
    }

    // 利用可能ポイント
    &-available {
      padding: 10px 20px;
      font-size: 18px;
      border-bottom: solid 1px $ec-light-grey2;
    }

    // 利用ポイント数入力
    &-apply {
      padding: 12px;
      border-top: dashed 1px $ec-light-grey2;

      &-input-text {
        margin-bottom: 8px;

        ::v-deep {
          .v-input__slot {
            margin-bottom: 0;
          }
          .v-text-field__details {
            margin: 8px 0 0;
          }
        }
      }

      &-btn {
        display: block;
        width: 120px;
        height: 45px;
        margin: 0 auto;
        font-weight: bold;
        background-color: $bg-light-grey;
      }
    }
  }
}
</style>
