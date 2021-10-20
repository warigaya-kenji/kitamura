<template>
  <div class="review-contents-form" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-form ref="reviewForm" @submit.prevent>
      <!-- ニックネーム -->
      <v-row v-show="nickname">
        <v-col cols="4" md="2">ニックネーム</v-col>
        <v-col>
          <div>{{ nickname }}</div>
        </v-col>
      </v-row>

      <!-- タイトル -->
      <v-row>
        <v-col cols="12" md="2" :class="{ 'pb-0': $vuetify.breakpoint.smAndDown }" v-show="!readonly">タイトル</v-col>
        <v-col cols="12" md="10" :offset-md="readonly ? 2 : 0">
          <div v-if="readonly">{{ title || '無題' }}</div>
          <v-text-field
            id="review-form-titel"
            class="review-form-input-area"
            v-model="title"
            outlined
            dense
            hide-details="auto"
            :value="value.title"
            :disabled="disabled"
            :rules="rules.titleRule"
            @change="onChange()"
            v-else
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- 良い点 -->
      <v-row>
        <v-col cols="12" md="2" class="d-flex" :class="{ 'pb-0': $vuetify.breakpoint.smAndDown }">
          <i class="fal fa-smile mr-1 review-form-header-icon"></i>良い点
        </v-col>
        <v-col cols="12" md="10" class="review-form-pros-area">
          <div class="review-form-textarea-readonly" v-if="readonly">{{ pros }}</div>
          <v-textarea
            id="review-form-pros"
            class="review-form-input-area"
            v-model="pros"
            outlined
            dense
            hide-details="auto"
            :value="value.pros"
            :disabled="disabled"
            :rules="rules.prosRule"
            @change="onChange()"
            v-else
          ></v-textarea>
        </v-col>
      </v-row>

      <!-- 悪い点 -->
      <v-row>
        <v-col cols="12" md="2" class="d-flex" :class="{ 'pb-0': $vuetify.breakpoint.smAndDown }">
          <i class="fal fa-frown mr-1 review-form-header-icon"></i>悪い点
        </v-col>
        <v-col cols="12" md="10" class="review-form-cons-area">
          <div class="review-form-textarea-readonly" v-if="readonly">{{ cons }}</div>
          <v-textarea
            id="review-form-textarea review-form-cons"
            class="review-form-input-area"
            v-model="cons"
            outlined
            dense
            hide-details="auto"
            :value="value.cons"
            :disabled="disabled"
            :rules="rules.consRule"
            @change="onChange()"
            v-else
          ></v-textarea>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, ref, watch } from '@vue/composition-api';
import ValidationService from '@/logic/validation.service';

export type ReviewContents = {
  title: string;
  pros: string; // 良い点
  cons: string; // 悪い点
};

export default Vue.extend({
  name: 'review-contents-form',
  props: {
    nickname: {
      type: String
    },
    value: {
      type: Object as PropType<ReviewContents>,
      default: () => ({})
    },
    readonly: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup: (props: any, context) => {
    const state = reactive({
      reviewForm: ref<HTMLFormElement>(),
      title: props.value.title || '',
      pros: props.value.pros || '',
      cons: props.value.cons || '',
      rules: {
        titleRule: ref<(Function | boolean | string)[]>([]),
        prosRule: ref<(Function | boolean | string)[]>([]),
        consRule: ref<(Function | boolean | string)[]>([])
      }
    });

    // バリデーションをリセット
    state.reviewForm?.resetValidation();

    /**
     * バリデーションを有効化する
     */
    const enableValidation = () => {
      state.rules = {
        titleRule: [ValidationService.required('タイトル'), ValidationService.max('タイトル', 40)],
        prosRule: [ValidationService.required('良い点'), ValidationService.max('良い点', 1200)],
        consRule: [ValidationService.max('悪い点', 1200)]
      };
    };

    /**
     * バリデーションを行う
     */
    const validate = (): boolean => {
      const valid = state.reviewForm?.validate();
      return valid;
    };

    /**
     * 評価内容が変更したら親コンポーネントに伝える
     */
    const onChange = () => {
      const reviewContents = {
        title: state.title,
        pros: state.pros,
        cons: state.cons
      };
      context.emit('change', reviewContents);
    };

    watch(
      () => props.value,
      (value) => {
        state.title = value.title || '';
        state.pros = value.pros || '';
        state.cons = value.cons || '';
      }
    );

    return {
      ...toRefs(state),
      onChange,
      enableValidation,
      validate
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  レビューフォーム
------------------------------- */
.review-form {
  padding: 16px;

  &-textarea-readonly {
    min-height: calc(5em * 1.8);
    padding: 12px;
    border-radius: 4px;
    word-break: break-word;
  }

  &-header-icon {
    font-size: 1.5em;
  }

  &-pros-area {
    .review-form-textarea-readonly {
      background-color: rgba(255, 164, 28, 0.18);
    }
  }

  &-cons-area {
    .review-form-textarea-readonly {
      background-color: rgba(207, 207, 207, 0.18);
    }
  }

  &-input-area {
    ::v-deep .v-messages__message {
      color: $ec-red;
      font-size: 1rem;
      line-height: 1rem;
    }
  }
}
/** -------------------------------
  レビュー商品 960px未満
------------------------------- */
.sp {
}
</style>
