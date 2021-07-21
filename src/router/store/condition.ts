import { reactive } from '@vue/composition-api';
import { Condition, ConditionOption } from '@/types/conditions';
import { DisplayPrice } from '@/types/tsv-config';
import ProductListSysConfigsService from '@/logic/tsv/product-list-sys-configs.service';
import ConditionsService from '@/logic/conditions.service';
import WebStorage from '@/logic/web-storage';

export default function conditionStore() {
  const NEWER_COND_KEY = 'NewerConditions';
  const USED_COND_KEY = 'UsedConditions';
  const NEWER_OP_KEY = 'NewerConditionOptions';
  const USED_OP_KEY = 'UsedConditionOptions';
  const NEWER_PRICE_KEY = 'NewerPrice';
  const USED_PRICE_KEY = 'UsedPrice';

  const state = reactive({
    // 検索条件
    newerConditions: [] as Array<Condition>,
    usedConditions: [] as Array<Condition>,
    // 検索条件の選択肢
    newerConditionOptions: {} as ConditionOption,
    usedConditionOptions: {} as ConditionOption,
    // 価格の表示用情報
    newerPrice: [] as Array<DisplayPrice>,
    usedPrice: [] as Array<DisplayPrice>
  });

  return {
    /**
     * 検索条件
     */
    get newerConditions(): Array<Condition> {
      if (!state.newerConditions || !state.newerConditions.length) state.newerConditions = WebStorage.getSessionStorage(NEWER_COND_KEY);
      return state.newerConditions ? state.newerConditions : [];
    },

    get usedConditions(): Array<Condition> {
      if (!state.usedConditions || !state.usedConditions.length) state.usedConditions = WebStorage.getSessionStorage(USED_COND_KEY);
      return state.usedConditions ? state.usedConditions : [];
    },

    async fetchNewerConditions() {
      try {
        state.newerConditions = await ProductListSysConfigsService.fetchNewerConditions();
        WebStorage.setSessionStorage(NEWER_COND_KEY, state.newerConditions);
      } catch (error) {
        state.newerConditions = [];
      }
    },

    async fetchUsedConditions() {
      try {
        state.usedConditions = await ProductListSysConfigsService.fetchUsedConditions();
        WebStorage.setSessionStorage(USED_COND_KEY, state.usedConditions);
      } catch (error) {
        state.usedConditions = [];
      }
    },

    searchConditionByCode(code: string, isUsed: boolean): Condition | {} {
      let searchResult = {};
      if (!isUsed) {
        if (state.newerConditions) searchResult = state.newerConditions.filter((item) => item.paramCode === code)[0];
      } else {
        if (state.usedConditions) searchResult = state.usedConditions.filter((item) => item.paramCode === code)[0];
      }
      return searchResult ? searchResult : {};
    },

    /**
     * 検索条件の選択肢
     */
    get newerConditionOptions(): ConditionOption {
      if (!state.newerConditionOptions || !Object.keys(state.newerConditionOptions).length)
        state.newerConditionOptions = WebStorage.getSessionStorage(NEWER_OP_KEY);
      return state.newerConditionOptions ? state.newerConditionOptions : {};
    },

    get usedConditionOptions(): ConditionOption {
      if (!state.usedConditionOptions || !Object.keys(state.usedConditionOptions).length)
        state.usedConditionOptions = WebStorage.getSessionStorage(USED_OP_KEY);
      return state.usedConditionOptions ? state.usedConditionOptions : {};
    },

    async fetchNewerConditionOptions() {
      try {
        state.newerConditionOptions = await ConditionsService.fetchNewerConditionOption();
        WebStorage.setSessionStorage(NEWER_OP_KEY, state.newerConditionOptions);
      } catch (error) {
        state.newerConditionOptions = {};
      }
    },

    async fetchUsedConditionOptions() {
      try {
        state.usedConditionOptions = await ConditionsService.fetchUsedConditionOption();
        WebStorage.setSessionStorage(USED_OP_KEY, state.usedConditionOptions);
      } catch (error) {
        state.usedConditionOptions = {};
      }
    },

    searchOptionListByCondCode(condCode: string, isUsed: boolean): Array<string> | [] {
      let condOp = {} as ConditionOption;
      let optionList = [] as Array<string>;
      if (!isUsed) {
        if (state.newerConditionOptions) condOp = state.newerConditionOptions;
      } else {
        if (state.usedConditionOptions) condOp = state.usedConditionOptions;
      }
      Object.entries(condOp).forEach(([key, val]) => {
        if (key === condCode) {
          optionList = val;
        }
      });
      return optionList.length ? optionList : [];
    },

    /**
     * 価格の表示用情報
     */
    get newerPrice(): Array<DisplayPrice> {
      if (!state.newerPrice || !state.newerPrice.length) state.newerPrice = WebStorage.getSessionStorage(NEWER_PRICE_KEY);
      return state.newerPrice ? state.newerPrice : [];
    },

    get usedPrice(): Array<DisplayPrice> {
      if (!state.usedPrice || !state.usedPrice.length) state.usedPrice = WebStorage.getSessionStorage(USED_PRICE_KEY);
      return state.usedPrice ? state.usedPrice : [];
    },

    async fetchNewerPrice() {
      try {
        state.newerPrice = await ProductListSysConfigsService.fetchNewerDisplayPrice();
        WebStorage.setSessionStorage(NEWER_PRICE_KEY, state.newerPrice);
      } catch (error) {
        state.newerPrice = [];
      }
    },

    async fetchUsedPrice() {
      try {
        state.usedPrice = await ProductListSysConfigsService.fetchUsedDisplayPrice();
        WebStorage.setSessionStorage(USED_PRICE_KEY, state.usedPrice);
      } catch (error) {
        state.usedPrice = [];
      }
    },

    convertToPriceText(val: string, isUsed: boolean): string {
      let price = {} as DisplayPrice;
      if (!isUsed) {
        if (state.newerPrice) price = state.newerPrice.filter((item) => item.value === val)[0];
      } else {
        if (state.usedPrice) price = state.usedPrice.filter((item) => item.value === val)[0];
      }
      return price ? price.text : '';
    }
  };
}

export type ConditionsStore = ReturnType<typeof conditionStore>;
