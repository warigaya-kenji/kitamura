<template>
  <div
    class="step"
    :class="{
      'mb-4': $vuetify.breakpoint.mdAndUp,
      'mb-2': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      class="step-text mb-2 font-weight-bold"
      :class="{
        'text-center': $vuetify.breakpoint.mdAndUp
      }"
    >
      {{ kindName }}状況：{{ currentStep.text }}
    </div>
    <v-stepper
      class="step-bar elevation-0"
      :class="{
        'mx-4': $vuetify.breakpoint.smAndDown
      }"
      alt-labels
      v-show="currentStep.no !== 0"
      :value="currentStep.no"
      :key="currentStep.no"
    >
      <v-stepper-header>
        <template v-for="(step, index) in displayedStepList">
          <v-stepper-step :step="step.no" :key="`step-${step.no}`">{{ step.text }}</v-stepper-step>
          <v-divider
            :key="`separator-${step.no}`"
            v-if="index !== displayedStepList.length - 1"
            :class="{
              active: step.no < currentStep.no
            }"
          ></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs, watch } from '@vue/composition-api';
import { ORDER_DETAIL_TYPES } from '@/constants//mypage-order-detail-types';
import {
  BUY_DELIVERY_ORDER_STEP,
  BUY_SHOP_ORDER_STEP,
  SELL_ORDER_STEP,
  SELL_TOKUTOKU_ORDER_NEED_KIT_STEP,
  SELL_TOKUTOKU_ORDER_NO_NEED_KIT_STEP
} from '@/constants/mypage-order-step';
import UserService from '@/logic/user.service';

export default Vue.extend({
  name: 'order-step',
  props: {
    type: {
      type: Number,
      required: true
    },
    val: {
      type: [String, Number],
      required: true,
      default: ''
    },
    // 「注文」「下取」といった種類の名称
    kindName: {
      type: String,
      default: '注文'
    }
  },
  setup: (props) => {
    const state = reactive({
      stepList: [] as Array<{ no: number; codeList: Array<string>; text: string }>,
      currentStep: {} as { no: number; text: string }
    });

    watch(
      () => [props.type, props.val],
      () => {
        switch (props.type) {
          case ORDER_DETAIL_TYPES.BUY_DELIVERY:
            state.stepList = BUY_DELIVERY_ORDER_STEP;
            break;
          case ORDER_DETAIL_TYPES.BUY_SHOP:
            state.stepList = BUY_SHOP_ORDER_STEP;
            break;
          case ORDER_DETAIL_TYPES.SELL:
            state.stepList = SELL_ORDER_STEP;
            break;
          case ORDER_DETAIL_TYPES.TOKUTOKU_NEED_KIT:
            state.stepList = SELL_TOKUTOKU_ORDER_NEED_KIT_STEP;
            break;
          case ORDER_DETAIL_TYPES.TOKUTOKU_NO_NEED_KIT:
            state.stepList = SELL_TOKUTOKU_ORDER_NO_NEED_KIT_STEP;
            break;
          default:
            break;
        }
        const value = `${props.val}`;
        state.currentStep = UserService.convertStepStatus(state.stepList, value);
      },
      { immediate: true }
    );

    // 表示されるSTEPリスト
    const displayedStepList = computed(() => state.stepList.filter((step) => step.no !== 0));

    return {
      ...toRefs(state),
      displayedStepList
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  ステップ
------------------------------- */
.step {
  &-text {
    font-size: 14px;
  }

  $step-size: 30px;
  $step-primary-size: 50px;
  &-bar {
    ::v-deep .v-stepper {
      &__header {
        position: relative;
        flex-wrap: nowrap;
      }

      &__step {
        justify-content: space-between;
        flex-basis: auto;
        padding: 0;

        &__step {
          width: $step-size;
          min-width: unset;
          height: $step-size;
          margin-top: calc((#{$step-primary-size} - #{$step-size}) / 2);
          margin-bottom: 12px;
          font-size: 0;
          background-color: $bg-primary !important;
        }

        &--active {
          .v-stepper {
            &__step__step {
              width: $step-primary-size;
              min-width: unset;
              height: $step-primary-size;
              margin-top: 0 !important;
            }

            &__label {
              color: $text-primary !important;
              text-shadow: none !important;
            }
          }
        }

        &--inactive {
          .v-stepper {
            &__step__step {
              background-color: $bg-grey3 !important;
            }

            &__label {
              color: $text-black !important;
            }
          }
        }
      }

      &__label {
        height: 2rem;
        text-align: center;
        white-space: pre-line;
        color: $text-primary !important;
      }
    }

    ::v-deep .v-divider {
      flex-basis: auto;
      margin: calc(#{$step-primary-size} / 2) -40px 0 !important;

      &.active {
        border-color: $ec-primary !important;
      }
    }
  }
}

/** -------------------------------
  ステップ 960px以下
------------------------------- */
.container-narrow {
  .step {
    $step-size-sp: 12px;
    $step-primary-size-sp: 25px;
    &-bar {
      ::v-deep .v-stepper {
        &__step {
          &__step {
            width: $step-size-sp;
            height: $step-size-sp;
            margin-top: calc((#{$step-primary-size-sp} - #{$step-size-sp}) / 2);
          }

          &--active {
            .v-stepper {
              &__step__step {
                width: $step-primary-size-sp;
                height: $step-primary-size-sp;
              }
            }
          }
        }

        &__label {
          display: block !important;
          font-size: 12px;
        }
      }
    }

    ::v-deep .v-divider {
      margin: calc(#{$step-primary-size-sp} / 2) -25px 0 !important;
    }
  }
}
</style>
