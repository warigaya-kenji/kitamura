<template>
  <div class="delivery-target-editor">
    <v-form class="form" ref="form" lazy-validation>
      <!-- 氏名 -->
      <v-row class="form-item">
        <v-col cols="12" md="2" class="form-item-name">
          <span class="d-flex align-center">氏名<v-chip class="chip-requierd" color="primary" label>必須</v-chip></span>
        </v-col>
        <v-col>
          <v-row v-show="!formConfirming">
            <v-col cols="12" md="6" class="form-item-input-area">
              <div class="mr-5">姓&nbsp;&nbsp;</div>
              <v-text-field
                id="delivery-target-last-name"
                class="form-input-text"
                v-model="lastName"
                :rules="rules.lastNameRule"
                placeholder="例：北村"
                required
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="form-item-input-area">
              <div class="mr-5">名&nbsp;</div>
              <v-text-field
                id="delivery-target-first-name"
                class="form-input"
                v-model="firstName"
                :rules="rules.firstNameRule"
                placeholder="例：太郎"
                required
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <!-- エラー表示 -->
            <div class="form-error px-3">
              {{ getErrorMessage('delivery-target-last-name') }}
            </div>
            <div class="form-error px-3">
              {{ getErrorMessage('delivery-target-first-name') }}
            </div>
          </v-row>

          <!-- 確認表示 -->
          <div v-if="formConfirming">{{ lastName }}&nbsp;{{ firstName }}</div>
        </v-col>
      </v-row>

      <!-- フリガナ -->
      <v-row class="form-item">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>フリガナ</span>
            <span v-show="!formConfirming && $vuetify.breakpoint.smAndDown">（全角カタカナのみ）</span>
            <v-chip class="chip-requierd" color="primary" label>必須</v-chip>
          </div>
          <div v-show="!formConfirming && $vuetify.breakpoint.mdAndUp">全角カタカナのみ</div>
        </v-col>
        <v-col>
          <v-row v-show="!formConfirming">
            <v-col cols="12" md="6" class="form-item-input-area">
              <div class="mr-1">セイ</div>
              <v-text-field
                id="delivery-target-last-name-kana"
                class="form-input-text"
                v-model="lastNameKana"
                :rules="rules.lastNameKanaRule"
                placeholder="例：キタムラ"
                required
                outlined
                dense
                :error="false"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="form-item-input-area">
              <div class="mr-1">メイ</div>
              <v-text-field
                id="delivery-target-first-name-kana"
                class="form-input"
                v-model="firstNameKana"
                :rules="rules.firstNameKanaRule"
                placeholder="例：タロウ"
                required
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <!-- エラー表示 -->
            <div class="form-error px-3">
              {{ getErrorMessage('delivery-target-last-name-kana') }}
            </div>
            <div class="form-error px-3">
              {{ getErrorMessage('delivery-target-first-name-kana') }}
            </div>
          </v-row>

          <!-- 確認表示 -->
          <div v-if="formConfirming">{{ lastNameKana }}&nbsp;{{ firstNameKana }}</div>
        </v-col>
      </v-row>

      <!-- 郵便番号 -->
      <v-row class="form-item form-item-address">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>郵便番号</span>
            <span v-show="!formConfirming && $vuetify.breakpoint.smAndDown">（半角数字のみ）</span>
            <v-chip class="chip-requierd" color="primary" label v-if="$vuetify.breakpoint.smAndDown">必須</v-chip>
          </div>
          <div v-show="!formConfirming && $vuetify.breakpoint.mdAndUp">半角数字のみ</div>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-text-field
              id="delivery-target-zipcode-front"
              class="form-input-text form-input-zipcode"
              v-model="zipCode[0]"
              :rules="rules.frontZipcodeRule"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ zipCode[0] }}</div>
            <span class="mx-1">&ndash;</span>
            <v-text-field
              id="delivery-target-zipcode-back"
              class="form-input-text form-input-zipcode"
              v-model="zipCode[1]"
              :rules="rules.backZipcodeRule"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ zipCode[1] }}</div>
            <v-btn dark depressed color="rgba(112, 112, 112, 1)" class="ml-2" @click="searchAddress()" v-if="!formConfirming" :loading="!loaded.address">
              住所検索
            </v-btn>
          </div>

          <!-- エラー表示 -->
          <div class="form-error">
            {{ getErrorMessage('delivery-target-zipcode-front') }}
          </div>
          <div class="form-error">
            {{ getErrorMessage('delivery-target-zipcode-back') }}
          </div>
        </v-col>
      </v-row>

      <!-- 都道府県 -->
      <v-row class="form-item form-item-address">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>都道府県</span>
            <v-chip class="chip-requierd" color="primary" label v-if="$vuetify.breakpoint.smAndDown">必須</v-chip>
          </div>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-select
              id="delivery-target-prefecture"
              class="form-input-select"
              v-model="selectPrefectures"
              :rules="rules.prefectureRule"
              :items="prefectures"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-select>
            <div v-if="formConfirming">{{ getPrefectureText }}</div>
          </div>

          <!-- エラー表示 -->
          <div class="form-error">
            {{ getErrorMessage('delivery-target-prefecture') }}
          </div>
        </v-col>
      </v-row>

      <!-- 市区群 -->
      <v-row class="form-item form-item-address">
        <v-col cols="12" md="2" class="form-item-name">
          <span class="d-flex align-center">市区群<v-chip class="chip-requierd" color="primary" label>必須</v-chip></span>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-text-field
              id="delivery-target-region"
              class="form-input-text"
              v-model="address1"
              :rules="rules.address1Rule"
              placeholder="例：新宿区"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ address1 }}</div>
          </div>

          <!-- エラー表示 -->
          <div class="form-error">
            {{ getErrorMessage('delivery-target-region') }}
          </div>
        </v-col>
      </v-row>

      <!-- 町村名 -->
      <v-row class="form-item form-item-address">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>町村名</span>
            <v-chip class="chip-requierd" color="primary" label v-if="$vuetify.breakpoint.smAndDown">必須</v-chip>
          </div>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-text-field
              id="delivery-target-city"
              class="form-input-text"
              v-model="address2"
              :rules="rules.address2Rule"
              placeholder="例：西新宿"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ address2 }}</div>
          </div>

          <!-- エラー表示 -->
          <div class="form-error">
            {{ getErrorMessage('delivery-target-city') }}
          </div>
        </v-col>
      </v-row>

      <!-- 番地・建物名 -->
      <v-row class="form-item form-item-address last-address-item">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>番地・建物名</span>
            <v-chip class="chip-requierd" color="primary" label v-if="$vuetify.breakpoint.smAndDown">必須</v-chip>
          </div>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-text-field
              id="delivery-target-address-line"
              class="form-input-text"
              v-model="address3"
              :rules="rules.address3Rule"
              placeholder="例：６－１６－６北村ハイツ201"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ address3 }}</div>
          </div>

          <!-- エラー表示 -->
          <div class="form-error">
            {{ getErrorMessage('delivery-target-address-line') }}
          </div>
        </v-col>
      </v-row>

      <!-- 電話番号 -->
      <v-row class="form-item">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>電話番号</span>
            <span v-show="!formConfirming && $vuetify.breakpoint.smAndDown">（半角数字のみ）</span>
            <v-chip class="chip-requierd" color="primary" label>必須</v-chip>
          </div>
          <div v-show="!formConfirming && $vuetify.breakpoint.mdAndUp">半角数字のみ</div>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-text-field
              id="delivery-target-phone-area-code"
              class="form-input-text form-input-phone"
              v-model="phoneNumber[0]"
              :rules="rules.phoneAreaCodeRule"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ phoneNumber[0] }}</div>
            <span class="mx-1">&ndash;</span>
            <v-text-field
              id="delivery-target-phone-city-code"
              class="form-input-text form-input-phone"
              v-model="phoneNumber[1]"
              :rules="rules.phoneCityCodeRule"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ phoneNumber[1] }}</div>
            <span class="mx-1">&ndash;</span>
            <v-text-field
              id="delivery-target-phone-subscriber-code"
              class="form-input-text form-input-phone"
              v-model="phoneNumber[2]"
              :rules="rules.phoneSubscriberCodeRule"
              outlined
              dense
              hide-details
              v-show="!formConfirming"
            ></v-text-field>
            <div v-if="formConfirming">{{ phoneNumber[2] }}</div>
          </div>

          <!-- エラー表示 -->
          <div class="form-error">
            {{ getErrorMessage('delivery-target-phone-area-code') }}
          </div>
          <div class="form-error">
            {{ getErrorMessage('delivery-target-phone-city-code') }}
          </div>
          <div class="form-error">
            {{ getErrorMessage('delivery-target-phone-subscriber-code') }}
          </div>
        </v-col>
      </v-row>

      <!-- 保存有無 -->
      <v-row class="form-item form-item-save" v-if="displaySave">
        <v-col cols="12" md="2" class="form-item-name">
          <div class="d-flex align-center">
            <span>お届け先の保存有無</span>
          </div>
        </v-col>
        <v-col>
          <div class="form-item-input-area">
            <v-checkbox
              id="delivery-target-save"
              class="form-input-check"
              dense
              hide-details
              label="保存する"
              v-model="save"
              v-show="!formConfirming"
            ></v-checkbox>
            <div v-if="formConfirming">{{ save ? '保存する' : '保存しない' }}</div>
          </div>
        </v-col>
      </v-row>

      <!-- ローディング -->
      <overlay-loading v-if="!loaded.deliveryTarget" />
    </v-form>

    <div class="form-footer-area" v-if="formConfirming">
      <v-btn class="form-footer-btn" depressed @click="swithFormConfirming()"><v-icon left>fas fa-angle-left</v-icon>戻る</v-btn>
      <v-btn class="form-footer-btn" depressed @click="registerAddress()">確定<v-icon right>fas fa-angle-right</v-icon></v-btn>
    </div>
    <div class="form-footer-area" v-else>
      <v-btn class="form-footer-btn" depressed @click="back()"><v-icon left>fas fa-angle-left</v-icon>戻る</v-btn>
      <v-btn class="form-footer-btn" depressed @click="confirmForms()">確認<v-icon right>fas fa-angle-right</v-icon></v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, ref, computed, watch } from '@vue/composition-api';
import OverlayLoading from '@/components/common/overlay-loading.vue';
import UserService from '@/logic/user.service';
import { prefectureList } from '@/constants/prefecture-list';
import ValidationService from '@/logic/validation.service';

export type RegisterDeliveryTarget = {
  zipCode: string;
  prefectureId: string;
  addr1: string;
  addr2: string;
  addr3: string;
  lastName: string;
  firstName: string;
  lastNameKn: string;
  firstNameKn: string;
  phone: string;
  save?: boolean;
};

const NOT_FOUND_SEARCH_ADDRESS_MSG = '住所が見つかりませんでした。郵便番号が正しいかご確認ください。';

export default Vue.extend({
  name: 'delivery-target-form',
  components: {
    'overlay-loading': OverlayLoading
  },
  props: {
    loadedDeliveryTarget: {
      required: true,
      type: Boolean
    },
    editDeliveryTarget: {
      required: false,
      type: Object as PropType<RegisterDeliveryTarget>
    },
    // 保存有無（レジページにて使用）
    displaySave: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const { order, errorStore } = context.root.$store;
    const state = reactive({
      // ロード状態
      loaded: {
        deliveryTarget: true,
        address: true
      },
      // フォームの確認状態
      formConfirming: false,
      // お届け先 ダミーデータ
      enableValidation: false,
      // バリデーションルール（確認ボタンが押された際にルールを適用する）
      rules: {
        lastNameRule: ref<(Function | boolean | string)[]>([]),
        firstNameRule: ref<(Function | boolean | string)[]>([]),
        lastNameKanaRule: ref<(Function | boolean | string)[]>([]),
        firstNameKanaRule: ref<(Function | boolean | string)[]>([]),
        frontZipcodeRule: ref<(Function | boolean | string)[]>([]),
        backZipcodeRule: ref<(Function | boolean | string)[]>([]),
        prefectureRule: ref<(Function | boolean | string)[]>([]),
        address1Rule: ref<(Function | boolean | string)[]>([]),
        address2Rule: ref<(Function | boolean | string)[]>([]),
        address3Rule: ref<(Function | boolean | string)[]>([]),
        phoneAreaCodeRule: ref<(Function | boolean | string)[]>([]),
        phoneCityCodeRule: ref<(Function | boolean | string)[]>([]),
        phoneSubscriberCodeRule: ref<(Function | boolean | string)[]>([])
      },
      prefectures: [{ text: '指定なし', value: null }, ...prefectureList],
      firstName: '',
      lastName: '',
      firstNameKana: '',
      lastNameKana: '',
      selectPrefectures: ref<number | null>(null),
      address1: '',
      address2: '',
      address3: '',
      phoneNumber: ['', '', ''] as string[],
      zipCode: ['', ''] as string[],
      save: true,
      form: ref<HTMLFormElement>()
    });

    // バリデーションを初期化する
    state.form?.resetValidation();

    // レジページ処理：代理アカウント制御
    watch(
      () => [props.displaySave, order.proxyAccount],
      () => {
        if (props.displaySave) state.save = !order.proxyAccount;
      },
      { immediate: true }
    );

    // ローディング
    watch(
      () => props.loadedDeliveryTarget,
      (loadedDeliveryTarget) => {
        state.loaded.deliveryTarget = loadedDeliveryTarget as boolean;
      },
      { immediate: true }
    );

    // 編集用データ
    watch(
      () => props.editDeliveryTarget,
      (editDeliveryTarget) => {
        const editDate = editDeliveryTarget as RegisterDeliveryTarget;
        if (editDate && Object.keys(editDate).length) {
          state.zipCode = editDate.zipCode.split('-');
          state.selectPrefectures = +editDate.prefectureId;
          state.address1 = editDate.addr1;
          state.address2 = editDate.addr2;
          state.address3 = editDate.addr3;
          state.lastName = editDate.lastName;
          state.firstName = editDate.firstName;
          state.lastNameKana = editDate.lastNameKn;
          state.firstNameKana = editDate.firstNameKn;
          state.phoneNumber = editDate.phone.split('-');
        }
      },
      { immediate: true }
    );

    /**
     * お届け先の登録
     */
    const registerAddress = () => {
      const deliveryTarget = {
        zipCode: state.zipCode.join('-'),
        prefectureId: String(state.selectPrefectures),
        addr1: state.address1,
        addr2: state.address2,
        addr3: state.address3,
        lastName: state.lastName,
        firstName: state.firstName,
        lastNameKn: state.lastNameKana,
        firstNameKn: state.firstNameKana,
        phone: state.phoneNumber.join('-')
      } as RegisterDeliveryTarget;
      if (props.displaySave) deliveryTarget.save = state.save;
      context.emit('registerAddress', deliveryTarget);
    };

    /**
     * 戻るボタン押下
     */
    const back = () => {
      context.emit('back');
    };

    /**
     * input要素を取得する
     *
     * @param elementId 要素ID
     */
    const getInputElement = (elementId: string): HTMLFormElement => {
      const inputElement = state.form?.inputs.find((element: HTMLElement) => element.id === elementId);
      return inputElement;
    };

    /**
     * 確認状態を切り替える
     * 切替の際にページトップにスクロールする
     */
    const swithFormConfirming = () => {
      context.root.$vuetify.goTo('#page-top', { duration: 0 });
      state.formConfirming = !state.formConfirming;
    };

    /**
     * 登録フォームの確認を実行する
     */
    const confirmForms = () => {
      state.loaded.deliveryTarget = false;
      state.rules = {
        lastNameRule: [ValidationService.range('氏名(姓)', 1, 42)],
        firstNameRule: [ValidationService.range('氏名(名)', 1, 42)],
        lastNameKanaRule: [ValidationService.kana('氏名フリガナ(セイ)'), ValidationService.range('フリガナ(セイ)', 1, 42)],
        firstNameKanaRule: [ValidationService.kana('氏名フリガナ(メイ)'), ValidationService.range('フリガナ(メイ)', 1, 42)],
        frontZipcodeRule: [ValidationService.number('郵便番号前３桁'), ValidationService.length('郵便番号前３桁', 3)],
        backZipcodeRule: [ValidationService.number('郵便番号前４桁'), ValidationService.length('郵便番号前４桁', 4)],
        prefectureRule: [ValidationService.select('都道府県')],
        address1Rule: [ValidationService.range('市区郡', 1, 30)],
        address2Rule: [ValidationService.range('町村名', 1, 32)],
        address3Rule: [ValidationService.range('番地・建物名', 1, 32)],
        phoneAreaCodeRule: [ValidationService.number('市外局番'), ValidationService.range('市外局番', 2, 5)],
        phoneCityCodeRule: [ValidationService.number('市内局番'), ValidationService.range('市内局番', 1, 4)],
        phoneSubscriberCodeRule: [ValidationService.number('加入者番号'), ValidationService.length('加入者番号', 4)]
      };

      // rulesの内容が画面に適用されてからバリデーションチェックする
      setTimeout(async () => {
        try {
          if (state.form?.validate()) {
            // 郵便番号の有無チェック
            const addressResult = await UserService.searchAddress(state.zipCode.join(''));
            if (!addressResult.result) {
              errorStore.errorMessage = NOT_FOUND_SEARCH_ADDRESS_MSG;
            } else {
              swithFormConfirming();
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          state.loaded.deliveryTarget = true;
        }
      });
    };

    /**
     * input要素からエラーメッセージを取得する
     *
     * @param elementId 要素ID
     */
    const getErrorMessage = (elementId: string): string => {
      const inputElement = getInputElement(elementId);
      const exitError = inputElement?.errorBucket && inputElement.errorBucket.length;
      return exitError ? inputElement.errorBucket[0] : '';
    };

    /**
     * 住所の検索
     */
    const searchAddress = async () => {
      state.loaded.address = false;

      // バリデーションチェック
      state.rules.frontZipcodeRule = [ValidationService.number('郵便番号前３桁'), ValidationService.length('郵便番号前３桁', 3)];
      state.rules.backZipcodeRule = [ValidationService.number('郵便番号前４桁'), ValidationService.length('郵便番号前４桁', 4)];

      // rulesの内容が画面に適用されてからバリデーションチェックして進行する
      await new Promise<void>((resolve) => setTimeout(() => resolve()));

      const frontInputElement = getInputElement('delivery-target-zipcode-front');
      const backInputElement = getInputElement('delivery-target-zipcode-front');
      if (!frontInputElement.validate() || !backInputElement.validate()) {
        state.loaded.address = true;
        return;
      }

      try {
        const addressResult = await UserService.searchAddress(state.zipCode.join(''));
        const address = addressResult.result;
        // 郵便番号の有無チェック
        if (address) {
          state.selectPrefectures = address?.prefecture_id || '';
          state.address1 = address?.addr1 || '';
          state.address2 = address?.addr2 || '';
        } else {
          errorStore.errorMessage = NOT_FOUND_SEARCH_ADDRESS_MSG;
        }
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.address = true;
      }
    };

    /**
     * 選択した都道府県のテキストを取得する
     */
    const getPrefectureText = computed((): string => {
      const prefecture = state.prefectures.find((p) => p.value === state.selectPrefectures);
      return prefecture?.text || '指定なし';
    });

    return {
      ...toRefs(state),
      registerAddress,
      back,
      searchAddress,
      confirmForms,
      getErrorMessage,
      swithFormConfirming,
      getPrefectureText
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  お届け先 960px以上
------------------------------- */
.delivery-target-editor {
  .form {
    padding: 12px;
    border: 1px solid $ec-black;

    &-item {
      &:not(:last-child) {
        border-bottom: 1px dashed $ec-grey;
      }

      &-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(207, 207, 207, 1);
      }

      &-input-area {
        display: flex;
        align-items: center;
      }
    }

    &-item-address:not(.last-address-item) {
      border: none;
    }

    &-input {
      &-select {
        max-width: fit-content;
      }

      &-zipcode {
        max-width: 6em;
      }

      &-phone {
        max-width: 5em;
      }

      &-check {
        margin: 0;
        padding: 0;

        &::v-deep {
          &.v-input__slot {
            margin-bottom: 0;
          }
        }
      }
    }

    &-error {
      width: 100%;
      color: $ec-red;
    }

    &-footer-area {
      display: flex;
      justify-content: center;
    }

    &-footer-btn {
      background-color: rgba(207, 207, 207, 1);
      font-size: 1.2em;
      font-weight: bold;
      height: 80px;
      width: 150px;
      margin: 24px;
    }
  }

  .chip-requierd {
    margin-left: auto;
    padding: 2px 4px;
    height: auto;
  }
}

/** -------------------------------
  お届け先 960px未満
------------------------------- */
.container-narrow {
  .delivery-target-editor {
    .form {
      &-input {
        &-select {
          width: 100%;
        }
      }
      &-item {
        &:not(:last-child) {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
