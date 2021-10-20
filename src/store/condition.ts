import { reactive } from '@vue/composition-api';
import { Condition, ConditionItem, ConditionOption } from '@/types/conditions';
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
  const RECENT_CONDITION_KEY = 'recentNsCondition';
  const RECENT_SORT_KEY = 'recentNsSort';
  const RECENT_DISPLAY_COUNT_KEY = 'recentNsDisplayCount';

  const state = reactive({
    // 検索条件
    newerConditions: [] as Array<Condition>,
    usedConditions: [] as Array<Condition>,
    // 検索条件の選択肢
    newerConditionOptions: {} as ConditionOption,
    usedConditionOptions: {} as ConditionOption,
    // 価格の表示用情報
    newerPrice: [] as Array<DisplayPrice>,
    usedPrice: [] as Array<DisplayPrice>,
    // 直近の検索条件（比較ページ用）
    recentCondition: {} as { [key: string]: string },
    recentSort: '',
    recentDisplayCount: 0
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
        console.error(error);
        state.newerConditions = [];
      }
    },

    async fetchUsedConditions() {
      try {
        state.usedConditions = await ProductListSysConfigsService.fetchUsedConditions();
        WebStorage.setSessionStorage(USED_COND_KEY, state.usedConditions);
      } catch (error) {
        console.error(error);
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
        console.error(error);
        state.newerConditionOptions = {};
      }
    },

    async fetchUsedConditionOptions() {
      try {
        state.usedConditionOptions = await ConditionsService.fetchUsedConditionOption();
        WebStorage.setSessionStorage(USED_OP_KEY, state.usedConditionOptions);
      } catch (error) {
        console.error(error);
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
        console.error(error);
        state.newerPrice = [];
      }
    },

    async fetchUsedPrice() {
      try {
        state.usedPrice = await ProductListSysConfigsService.fetchUsedDisplayPrice();
        WebStorage.setSessionStorage(USED_PRICE_KEY, state.usedPrice);
      } catch (error) {
        console.error(error);
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
    },

    /**
     * 直近の条件（詳細画面からのページネーション用）
     */
    get recentCondition(): { [key: string]: string } {
      const storageRecentCondition = WebStorage.getSessionStorage(RECENT_CONDITION_KEY);
      state.recentCondition = storageRecentCondition ? storageRecentCondition : {};
      return state.recentCondition;
    },

    get recentSort(): string {
      const storageRecentSort = WebStorage.getSessionStorage(RECENT_SORT_KEY);
      state.recentSort = storageRecentSort ? storageRecentSort : '';
      return state.recentSort;
    },

    get recentDisplayCount(): number {
      const storageRecentDisplayCount = WebStorage.getSessionStorage(RECENT_DISPLAY_COUNT_KEY);
      state.recentDisplayCount = storageRecentDisplayCount ? storageRecentDisplayCount : 0;
      return state.recentDisplayCount;
    },

    saveRecentCondtion(condtions: Array<ConditionItem>, sort: string, displayCount: number) {
      const convertConditions = {} as { [key: string]: string };
      condtions.forEach((cond) => {
        convertConditions[cond.paramCode] = cond.paramCode === 'category' ? cond.valueText : cond.value;
      });
      state.recentCondition = convertConditions;
      WebStorage.setSessionStorage(RECENT_CONDITION_KEY, state.recentCondition);
      state.recentSort = sort;
      WebStorage.setSessionStorage(RECENT_SORT_KEY, state.recentSort);
      state.recentDisplayCount = displayCount;
      WebStorage.setSessionStorage(RECENT_DISPLAY_COUNT_KEY, state.recentDisplayCount);
    }
  };
}

export type ConditionsStore = ReturnType<typeof conditionStore>;
