<template>
  <div
    class="step"
    :class="{
      'mb-4': $vuetify.breakpoint.mdAndUp,
      'mb-2': $vuetify.breakpoint.smAndDown
    }"
  >
    <v-stepper
      class="step-bar elevation-0"
      :class="{
        'mx-4': $vuetify.breakpoint.smAndDown
      }"
      alt-labels
      :value="stepNo"
      :key="stepNo"
    >
      <v-stepper-header>
        <template v-for="(step, index) in ORDER_STEP_LIST">
          <v-stepper-step :step="step.no" :key="`step-${step.no}`">{{ step.text }}</v-stepper-step>
          <v-divider
            :key="`separator-${step.no}`"
            v-if="index !== ORDER_STEP_LIST.length - 1"
            :class="{
              active: step.no < stepNo
            }"
          ></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { ORDER_STEP_LIST } from '@/constants/order-step';

export default Vue.extend({
  name: 'order-step',
  props: {
    stepNo: {
      type: Number,
      required: true
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state),
      ORDER_STEP_LIST
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
