<template>
  <div class="review-rating-table" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <div class="rating-header-area" v-if="!readonly">
      <v-btn @click="ckearRating()">評価をクリアする</v-btn>
    </div>
    <div>
      <v-row class="rating-total-area " :class="{ 'rating-table-combined': combined, 'rating-table-error': !valid.totalRating }">
        <v-col cols="3" class="rating-item-title">総合評価</v-col>
        <v-col cols="3" class="rating-item-rating-number center">
          <b v-if="rating.totalRating != null">{{ rating.totalRating }}</b>
        </v-col>
        <v-col cols="6" class="rating-item-rating center">
          <v-rating
            class="rating"
            color="rgba(229, 130, 35, 1)"
            background-color="rgba(229, 130, 35, 1)"
            size="20"
            :readonly="readonly"
            dense
            v-model="rating.totalRating"
            @input="onChange()"
          >
          </v-rating>

          <!-- エラー表示 -->
          <div class="rating-error" v-show="!valid.totalRating">総合評価を1以上5以下で選択してください。</div>
        </v-col>
      </v-row>
      <v-row class="rating-detail-area" v-for="item in tableItems" :key="item.key" :class="{ 'rating-table-combined': combined }">
        <v-col cols="3" class="rating-item-title">{{ item.title }}</v-col>
        <v-col cols="3" class="rating-item-rating-number center">
          <b v-if="rating[item.key] != null">{{ rating[item.key] }}</b>
        </v-col>
        <v-col cols="6" class="rating-item-rating center">
          <v-rating
            class="rating"
            color="rgba(229, 130, 35, 1)"
            background-color="rgba(229, 130, 35, 1)"
            :readonly="readonly"
            small
            dense
            v-model="rating[item.key]"
            @input="onChange()"
          >
          </v-rating>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, watch } from '@vue/composition-api';

export type Rating = {
  totalRating: number;
  designRating: number;
  priceRating: number;
  operationRating: number;
  imageRating: number;
};

export default Vue.extend({
  name: 'review-rating-table',
  props: {
    value: {
      type: Object as PropType<Rating>,
      required: true,
      default: {}
    },
    readonly: {
      type: Boolean,
      default: true
    },
    // 他のテーブル要素を組み合わせるか
    combined: {
      type: Boolean,
      default: false
    }
  },
  setup: (props: any, context) => {
    const state = reactive({
      tableItems: [
        {
          title: 'デザイン',
          key: 'designRating'
        },
        {
          title: '価格',
          key: 'priceRating'
        },
        {
          title: '操作性',
          key: 'operationRating'
        },
        {
          title: '画質',
          key: 'imageRating'
        }
      ],
      rating: {
        totalRating: props.value.totalRating || 0,
        designRating: props.value.designRating || 0,
        priceRating: props.value.priceRating || 0,
        operationRating: props.value.operationRating || 0,
        imageRating: props.value.imageRating || 0
      },
      validationEnabled: false,
      valid: {
        totalRating: true
      }
    });

    /**
     * バリデーションを有効化する
     */
    const enableValidation = () => {
      state.validationEnabled = true;
    };

    /**
     * バリデーションを行う
     */
    const validate = (): boolean => {
      // 総合評価は選択必須
      state.valid.totalRating = +state.rating.totalRating > 0;

      const valid = Object.values(state.valid).every((val) => val);
      return valid;
    };

    /**
     * 評価が変化したらバリデーションチェックをし、親コンポーネントに伝える
     */
    const onChange = () => {
      if (state.validationEnabled) {
        validate();
      }

      context.emit('change', state.rating);
    };

    /**
     * 評価をクリアする
     */
    const ckearRating = () => {
      state.rating = {
        totalRating: 0,
        designRating: 0,
        priceRating: 0,
        operationRating: 0,
        imageRating: 0
      };
    };

    watch(
      () => props.value,
      (value) => {
        state.rating.totalRating = value.totalRating || 0;
        state.rating.designRating = value.designRating || 0;
        state.rating.priceRating = value.priceRating || 0;
        state.rating.operationRating = value.operationRating || 0;
        state.rating.imageRating = value.imageRating || 0;
      }
    );

    return {
      ...toRefs(state),
      onChange,
      enableValidation,
      validate,
      ckearRating
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  評価テーブル
------------------------------- */
.rating {
  margin-left: auto;

  &-total-area {
    border: 1px solid $ec-grey;
    font-size: 1.1em;
  }

  &-detail-area {
    border-bottom: 1px dashed $ec-grey;
    border-top: none;
    border-right: 1px solid $ec-grey;
    border-left: 1px solid $ec-grey;
    font-size: 0.9em;

    &:last-child {
      border-bottom: 1px solid $ec-grey;
    }
  }

  &-header-area {
    padding: 8px 0;
    display: flex;
    justify-content: flex-end;
  }

  &-total-area,
  &-detail-area {
    margin: 0;
    padding: 8px 16px;

    .col {
      margin-top: auto;
      margin-bottom: auto;
      padding: 0;
    }

    .center {
      text-align: center;
    }

    .no-rating {
      padding: 4px;
      background-color: $bg-grey;
      font-size: 0.9rem;
    }

    &.rating-table-combined {
      border-right: none;
      border-left: none;
    }

    &.rating-table-error {
      border-width: 2px;
      border-color: #ff5252;
    }
  }

  &-item-title {
    max-width: 300px;
  }

  &-item-rating-number {
    max-width: 100px;
  }

  &-item-rating {
    max-width: 400px;
  }

  &-error {
    padding: 0 12px;
    color: $ec-red;
  }
}
/** -------------------------------
  960px未満
------------------------------- */
.sp {
}
</style>
