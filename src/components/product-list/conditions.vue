<template>
  <v-list class="conditions" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-list v-for="(condition, condIndex) in displayConditions" :key="condition.code" class="conditions-group">
        <v-list-item class="conditions-title">
          <v-list-item-title>{{ condition.text }}</v-list-item-title>
        </v-list-item>

        <!-- 並列ボタン -->
        <!-- 「新品・中古ボタン」でのみ使用 -->
        <v-list-item v-if="condition.selectType == 'btn'" class="conditions-item conditions-type-btn">
          <v-btn
            v-for="(item, opIndex) in condition.fullOption"
            :key="`${condition.code}-${item.value}`"
            dark
            :outlined="!item.selected"
            depressed
            color="rgba(0, 113, 133, 1)"
            @click="changeNarrow18(condIndex, opIndex)"
          >
            {{ item.text }}
          </v-btn>
        </v-list-item>

        <!-- リスト表示 -->
        <template v-if="condition.selectType === 'list'">
          <template v-for="(item, opIndex) in condition.fullOption">
            <v-list-item :key="`${condition.code}-${item.value}`" class="conditions-item" v-show="opIndex < 5 || condition.isDisplayFullOption">
              <v-btn
                class="conditions-item-text"
                dark
                :outlined="!item.selected"
                depressed
                color="rgba(0, 113, 133, 1)"
                @click="add(condIndex, opIndex, condition.code, condition.text, item.value, item.text)"
              >
                {{ item.text }}&nbsp;({{ item.count }})
              </v-btn>
            </v-list-item>
          </template>

          <v-list-item class="conditions-add-btn-area" v-if="!condition.isDisplayFullOption" :ref="`${condition.code}-btn`">
            <v-btn class="conditions-add-btn" block dark depressed color="rgba(112, 112, 112, 1)" @click="condition.isDisplayFullOption = true">
              もっと見る
              <v-icon class="conditions-add-btn-icon" small color="rgba(255, 255, 255, 1)">fas fa-plus</v-icon>
            </v-btn>
          </v-list-item>
        </template>
      </v-list>
    </template>

    <!-- 960px未満 -->
    <template v-if="$vuetify.breakpoint.smAndDown">
      <!-- 新品・中古ボタン -->
      <div v-show="!isUsed" class="conditions-item conditions-type-btn">
        <v-btn
          v-for="(item, opIndex) in narrow18Conditions.fullOption"
          :key="`${narrow18Conditions.code}-${item.value}`"
          dark
          :outlined="!item.selected"
          depressed
          color="rgba(0, 113, 133, 1)"
          @click="changeNarrow18(0, opIndex)"
        >
          {{ item.text }}
        </v-btn>
      </div>

      <v-list
        v-for="(condition, condIndex) in displayConditions"
        :key="condition.code"
        class="conditions-group"
        :class="{ 'd-none': condition.code === 'narrow18' }"
      >
        <v-list-item class="conditions-title">
          <v-list-item-title>{{ condition.text }}</v-list-item-title>
        </v-list-item>

        <!-- 並列ボタン -->
        <!-- 「新品・中古ボタン」以外のボタンタイプがない限り使用しない -->
        <v-list-item v-if="condition.code !== 'narrow18' && condition.selectType == 'btn'" class="conditions-item conditions-type-btn">
          <v-btn
            v-for="(item, opIndex) in condition.fullOption"
            :key="`${condition.code}-${item.value}`"
            dark
            :outlined="!item.selected"
            depressed
            color="rgba(0, 113, 133, 1)"
            @click="changeNarrow18(condIndex, opIndex)"
          >
            {{ item.text }}
          </v-btn>
        </v-list-item>

        <!-- リスト表示 -->
        <template v-if="condition.selectType === 'list'">
          <template v-for="(item, opIndex) in condition.fullOption">
            <v-list-item :key="`${condition.code}-${item.value}`" class="conditions-item" v-show="opIndex < 5 || condition.isDisplayFullOption">
              <v-btn
                class="conditions-item-text"
                dark
                :outlined="!item.selected"
                depressed
                color="rgba(0, 113, 133, 1)"
                @click="add(condIndex, opIndex, condition.code, condition.text, item.value, item.text)"
              >
                {{ item.text }}&nbsp;({{ item.count }})
              </v-btn>
            </v-list-item>
          </template>

          <v-list-item class="conditions-add-btn-area" v-if="!condition.isDisplayFullOption" :ref="`${condition.code}-btn`">
            <v-btn class="conditions-add-btn" block dark depressed color="rgba(112, 112, 112, 1)" @click="condition.isDisplayFullOption = true">
              もっと見る
              <v-icon class="conditions-add-btn-icon" small color="rgba(255, 255, 255, 1)">fas fa-plus</v-icon>
            </v-btn>
          </v-list-item>
        </template>
      </v-list>
    </template>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, watch } from '@vue/composition-api';
import { NewerCategory } from '@/types/tsv-config';
import { ProductListCount } from '@/types/product-list';
import { Condition, ConditionItem } from '@/types/conditions';
import { SEARCH_STATE } from '@/constants/search-state';
import { convertToUsedStatesText } from '@/logic/utils';

type conditionsItem = {
  code: string;
  text: string;
  selectType: string;
  fullOption: Array<OptionItem>;
  isDisplayFullOption: boolean;
};

type OptionItem = {
  text: string;
  value: string;
  count: number;
  selected: boolean;
};

const USED_CATEGORY_LIST = ['カメラ用品', 'フィルムカメラ', '交換レンズ'];

export default Vue.extend({
  name: 'conditions',
  components: {},
  props: {
    isUsed: {
      type: Boolean,
      required: true
    },
    currentCategory: {
      type: Object as PropType<NewerCategory>,
      required: false
    },
    currentConditions: {
      type: Array as PropType<ConditionItem[]>,
      required: true
    },
    condisionCountList: {
      type: Object as PropType<ProductListCount>,
      required: true
    }
  },
  setup: (props, context) => {
    const { authorizer, category, shop, condition } = context.root.$store;
    const state = reactive({
      // 表示用条件
      displayConditions: [] as Array<conditionsItem>,
      // スマホ表示用
      narrow18Conditions: {} as conditionsItem,
      // 「新品・中古」の両選択は、「初期表示」と「押下」した際で表示を変更するため、以下フラグで制御する
      isPushNarrow18: false
    });

    /**
     * 検索条件の表示
     *
     * 以下、現状の仕様
     * 1. TSV（search_param.tsv）から「条件」を取得する
     * 2. Json（検索エンジンAPIのdecoderのcondOrderをファイル化）から「条件の選択肢」を取得する
     * 3. 検索エンジンAPIのcountから「条件選択肢の件数」を取得する
     *      親から連携「condisionCountList」
     * 4. 「1.」で取得した「件数順」で表示するものは、ソート処理をする。それ以外は、「2.」の取得順そのまま。
     */
    watch(
      () => [authorizer.isLoggedIn, props.isUsed, props.currentCategory, props.currentConditions, props.condisionCountList],
      () => {
        const isLoggedIn = authorizer.isLoggedIn;
        const displayCond = [] as Array<conditionsItem>;

        const currentCate = props.currentCategory as NewerCategory;
        const currentCond = props.currentConditions as Array<ConditionItem>;
        const opCount = props.condisionCountList as ProductListCount;

        // 新品/中古条件を追加
        const stateCond = currentCond.filter((cc) => cc.paramCode == 'narrow18');
        if (stateCond.length) {
          const stateOption = [
            {
              text: SEARCH_STATE.option[1].text,
              value: SEARCH_STATE.option[1].text,
              count: 0,
              selected: (state.isPushNarrow18 && stateCond[0].value === '0') || stateCond[0].value === '1' ? true : false
            },
            {
              text: SEARCH_STATE.option[2].text,
              value: SEARCH_STATE.option[2].text,
              count: 0,
              selected: (state.isPushNarrow18 && stateCond[0].value === '0') || stateCond[0].value === '2' ? true : false
            }
          ];
          state.narrow18Conditions = {
            code: SEARCH_STATE.key,
            text: SEARCH_STATE.text,
            selectType: 'btn',
            fullOption: stateOption,
            isDisplayFullOption: true
          };
          displayCond.push(state.narrow18Conditions);
        }

        // カテゴリーの条件を追加
        if (!props.isUsed) {
          let optionCate = [] as Array<NewerCategory>;
          if (!currentCate || !Object.entries(currentCate).length) {
            optionCate = category.newerCategoryOnlyParent;
          } else {
            optionCate = category.searchChildrenCategoryByCode(currentCate.code);
          }

          if (optionCate.length) {
            const cateOptionList = [] as Array<OptionItem>;
            optionCate.forEach((c: NewerCategory) => {
              let optionCount = 0;
              // 条件・選択肢の件数リストから、該当の件数を取得する
              Object.entries(opCount).forEach(([countListParamCode, countListOptionCountObj]) => {
                if (countListParamCode === 'category') {
                  Object.entries(countListOptionCountObj).forEach(([countListOptionVal, countListOptionCount]) => {
                    if (c.concatenationCategoryName === countListOptionVal) {
                      optionCount = countListOptionCount;
                    }
                  });
                }
              });

              // 選択肢の表示名の制御
              let optionText = '';
              if (currentCate && currentCate.digit === '4') {
                optionText = c.childCategoryName;
              } else if (currentCate && currentCate.digit === '7') {
                optionText = c.grandchildCategoryName;
              } else {
                optionText = c.parentCategoryName;
              }

              // 選択肢の結果件数が「0件」は表示しない
              if (optionCount > 0) {
                cateOptionList.push({
                  text: optionText,
                  value: c.concatenationCategoryName,
                  count: optionCount,
                  selected: false
                });
              }
            });

            // 選択肢が存在しないものは表示しない
            if (cateOptionList.length !== 0) {
              // 件数順にソート
              cateOptionList.sort((a, b) => b.count - a.count);
              const condCate = condition.searchConditionByCode('category', false);
              displayCond.push({
                code: 'category',
                text: condCate.name ? condCate.name : 'カテゴリー',
                selectType: 'list',
                fullOption: cateOptionList,
                isDisplayFullOption: cateOptionList.length > 5 ? false : true
              });
            }
          }
        } else {
          // 中古在庫一覧で、特定のカテゴリが指定されていた場合、検索条件を追加する
          if (USED_CATEGORY_LIST.includes(currentCate.parentCategoryName)) {
            const cateOptionList = [] as Array<OptionItem>;
            const parentCategoryName = currentCate.parentCategoryName;
            for (const categoryName in opCount.category) {
              if (categoryName.startsWith(parentCategoryName) && categoryName !== parentCategoryName) {
                const optionText = categoryName.replace(`${parentCategoryName}:`, '');
                cateOptionList.push({
                  text: optionText,
                  value: categoryName,
                  count: opCount.category[categoryName],
                  selected: false
                });
              }
            }

            // 選択肢が存在しないものは表示しない
            if (cateOptionList.length !== 0) {
              // 件数順にソート
              cateOptionList.sort((a, b) => b.count - a.count);
              const condCate = condition.searchConditionByCode('category', false);
              displayCond.push({
                code: 'category',
                text: condCate.name ? condCate.name : 'カテゴリー',
                selectType: 'list',
                fullOption: cateOptionList,
                isDisplayFullOption: cateOptionList.length > 5 ? false : true
              });
            }
          }
        }

        // 表示条件生成
        const storeCond = !props.isUsed ? condition.newerConditions : condition.usedConditions;
        storeCond.forEach((cond: Condition) => {
          const fullOptionList = [] as Array<OptionItem>;

          // narrow18は、上記で処理済のためスキップ
          if (cond.paramCode === 'narrow18') return;

          // 選択肢の全量
          const optionList = condition.searchOptionListByCondCode(cond.paramCode, props.isUsed);

          // 選択肢の生成
          if (optionList.length) {
            optionList.forEach((option: string) => {
              let optionCount = 0;
              // 条件・選択肢の件数リストから、該当の件数を取得する
              Object.entries(opCount).forEach(([countListParamCode, countListOptionCountObj]) => {
                if (countListParamCode === cond.paramCode) {
                  Object.entries(countListOptionCountObj).forEach(([countListOptionVal, countListOptionCount]) => {
                    if (option === countListOptionVal) {
                      optionCount = countListOptionCount;
                    }
                  });
                }
              });

              // 表示名が異なる条件
              let displayName = '';
              switch (cond.paramCode) {
                case 'price':
                case 'member_price': {
                  displayName = condition.convertToPriceText(option, props.isUsed);
                  break;
                }
                case 'n1c': {
                  const targetStateText = convertToUsedStatesText(option);
                  displayName = targetStateText;
                  break;
                }
                case 'narrow2': {
                  displayName = shop.convertToShopText(option);
                  break;
                }
                default:
                  break;
              }

              // 選択肢の結果件数が「0件」は表示しない
              if (optionCount > 0) {
                fullOptionList.push({
                  text: cond.isConvert ? displayName : option,
                  value: option,
                  count: optionCount,
                  selected: currentCond.some((cc) => cc.paramCode == cond.paramCode && cc.value == option) // 選択済判定
                });
              }
            });
          }

          // 非表示制御： ログイン状態に依存する条件
          if (isLoggedIn && !cond.isDisplayLogin) {
            return;
          } else if (!isLoggedIn && !cond.isDisplayLogout) {
            return;
          }
          // 非表示制御： 選択肢が存在しないもの
          if (fullOptionList.length === 0) return;
          // 非表示制御： 現在選択済の条件
          if (fullOptionList.some((op) => op.selected)) return;
          // 非表示制御： 店舗条件の店舗が取れていない場合
          if ((cond.paramCode === 'narrow2' && !shop.shopList) || (cond.paramCode === 'narrow2' && !shop.shopList.length)) return;
          // 非表示制御： 中古のみ選択時の価格条件
          if (stateCond.length && stateCond[0].value === '2' && (cond.paramCode === 'price' || cond.paramCode === 'member_price')) return;

          // 件数順に並び替え
          if (cond.isSortWithCount) {
            fullOptionList.sort((a, b) => b.count - a.count);
          }
          // 「中古在庫:商品の状態」のみ表示順を降順に
          if (cond.paramCode === 'n1c') {
            fullOptionList.sort((a, b) => b.count - a.count);
          }
          // 条件項目の追加
          displayCond.push({
            code: cond.paramCode,
            text: cond.name,
            selectType: 'list',
            fullOption: fullOptionList,
            isDisplayFullOption: fullOptionList.length > 5 ? false : true
          });
        });

        state.displayConditions = displayCond;
      },
      { immediate: true, deep: true }
    );

    /**
     * 条件：状態の変更
     * @param condIndex 条件インデックス
     * @param opIndex 選択肢インデックス
     */
    const changeNarrow18 = (condIndex: number, opIndex: number) => {
      // 押下した選択肢を反転
      state.displayConditions[condIndex].fullOption[opIndex].selected = !state.displayConditions[condIndex].fullOption[opIndex].selected;

      let narrow18Value = 0;
      state.displayConditions[condIndex].fullOption.forEach((op, index) => {
        if (op.selected) {
          const val = +SEARCH_STATE.option[index + 1].value;
          narrow18Value = narrow18Value + val;
        }
      });

      // リターン値生成
      switch (narrow18Value) {
        case 0:
          state.isPushNarrow18 = false;
          context.emit('change-narrow18', '0');
          break;
        case 3:
          state.isPushNarrow18 = true;
          context.emit('change-narrow18', '0');
          break;
        default:
          state.isPushNarrow18 = false;
          context.emit('change-narrow18', `${narrow18Value}`);
      }
    };

    /**
     * 条件追加・削除
     * @param condIndex 条件インデックス
     * @param opIndex 選択肢インデックス
     * @param paramCode 条件コード
     * @param paramText 条件名
     * @param value 選択肢
     * @param valueText 選択肢名
     */
    const add = (condIndex: number, opIndex: number, condCode: string, condText: string, value: string, valueText: string) => {
      const addCondItem = {
        paramCode: condCode,
        paramText: condText,
        value: value,
        valueText: valueText
      };
      context.emit('add', addCondItem);
      state.displayConditions[condIndex].fullOption[opIndex].selected = true;
      // PCのみTOPへスクロール
      if (context.root.$vuetify.breakpoint.mdAndUp) {
        context.root.$vuetify.goTo('#page-top');
      }
    };

    return {
      ...toRefs(state),
      changeNarrow18,
      add
    };
  }
});
</script>

<style lang="scss" scoped>
$item-bg-color: $bg-white;
.conditions {
  background: transparent;

  &-group {
    margin-bottom: 12px;
    padding: 0;
    background: $bg-grey;
  }
  &-title {
    padding: 0 32px;
    font-weight: bold;
  }
  &-item {
    position: relative;
    min-height: unset;
    padding: 8px 20px !important;
    background: $item-bg-color;
    font-size: 16px;
  }
  &-item-text {
    width: 100%;
  }

  &-type-btn {
    display: flex;

    .v-btn {
      flex: 1;
      &:first-child {
        margin-right: 20px;
      }
    }
  }
  // もっと見る
  &-add-btn-area {
    padding: 0 12px !important;
    background: $item-bg-color;
    text-align: center;
  }
  &-add-btn {
    position: relative;
    margin: 0 auto;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto;
    }
  }
}
/** -------------------------------
  960px未満
------------------------------- */
.sp {
  &.conditions {
    margin-top: 113px; // 固定部分のheight stickyが使用できないため
    padding: 0;
  }
  .conditions {
    &-group {
      margin-top: -1px;
      margin-bottom: 0;
    }

    &-title {
      background: $bg-light-grey;
      border-top: solid 1px $ec-light-grey;
      border-bottom: solid 1px $ec-light-grey;
    }
  }
}
</style>
<style>
/* FIXME: 他にいい方法がないか検討 */
/* 960px以上 */
/* v-btnのCSSを上書き */
.conditions .conditions-item .v-btn {
  height: unset !important;
  padding: 4px 8px;
}
.conditions .conditions-item .v-btn__content {
  display: inline-block;
  line-height: 1.5;
  white-space: normal;
}
.conditions .conditions-item-text .v-btn__content {
  width: 100%;
}
</style>
