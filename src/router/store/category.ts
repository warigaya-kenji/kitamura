import { reactive } from '@vue/composition-api';
import { NewerCategory, UsedCategory } from '@/types/tsv-config';
import ProductListSysConfigsService from '@/logic/tsv/product-list-sys-configs.service';
import WebStorage from '@/logic/web-storage';

export default function categoryStore() {
  const NEWER_KEY = 'NewerCategory';
  const USED_KEY = 'UsedCategory';

  const state = reactive({
    newerCategory: [] as Array<NewerCategory>,
    usedCategory: [] as Array<UsedCategory>
  });

  return {
    get newerCategory(): Array<NewerCategory> {
      if (!state.newerCategory || !state.newerCategory.length) state.newerCategory = WebStorage.getSessionStorage(NEWER_KEY);
      return state.newerCategory ? state.newerCategory : [];
    },

    get newerCategoryOnlyParent(): Array<NewerCategory> {
      const parentCategory = state.newerCategory ? state.newerCategory.filter((cate) => cate.digit === '4') : [];
      return parentCategory.length ? parentCategory : [];
    },

    get usedCategory(): Array<UsedCategory> {
      if (!state.usedCategory || !state.usedCategory.length) state.usedCategory = WebStorage.getSessionStorage(USED_KEY);
      return state.usedCategory ? state.usedCategory : [];
    },

    async fetchNewerCategories() {
      try {
        state.newerCategory = await ProductListSysConfigsService.fetchNewerCategories();
        WebStorage.setSessionStorage(NEWER_KEY, state.newerCategory);
      } catch (error) {
        state.newerCategory = [];
      }
    },

    async fetchUsedCategories() {
      try {
        state.usedCategory = await ProductListSysConfigsService.fetchUsedCategories();
        WebStorage.setSessionStorage(USED_KEY, state.usedCategory);
      } catch (error) {
        state.usedCategory = [];
      }
    },

    searchNewerCategoryByCode(code: string): NewerCategory | {} {
      return state.newerCategory.filter((item: NewerCategory) => item.code === code)[0]
        ? state.newerCategory.filter((item: NewerCategory) => item.code === code)[0]
        : {};
    },

    searchNewerCategoryByConcatenationName(name: string): NewerCategory | {} {
      return state.newerCategory.filter((item: NewerCategory) => item.concatenationCategoryName === name)[0]
        ? state.newerCategory.filter((item: NewerCategory) => item.concatenationCategoryName === name)[0]
        : {};
    },

    searchParentCategoryByCode(code: string): NewerCategory | {} {
      const parentCode = code.substr(0, 4);
      return this.searchNewerCategoryByCode(parentCode);
    },

    searchChildrenCategoryByCode(code: string): Array<NewerCategory> {
      let children = state.newerCategory ? state.newerCategory.filter((cate: NewerCategory) => cate.code.includes(code)) : [];
      // 自身は除外
      children.splice(0, 1);
      // 親カテゴリの指定の場合は、孫カテゴリを除外
      if (code.length === 4) {
        children = children.filter((c) => c.digit === '7');
      }
      return children ? children : [];
    },

    searchUsedCategoryByCode(code: string): UsedCategory | {} {
      return state.usedCategory.filter((item: UsedCategory) => item.newerCode === code)[0]
        ? state.usedCategory.filter((item: UsedCategory) => item.newerCode === code)[0]
        : {};
    },

    searchUsedCategoryByName(name: string): UsedCategory | {} {
      return state.usedCategory.filter((item: UsedCategory) => item.categoryName === name)[0]
        ? state.usedCategory.filter((item: UsedCategory) => item.categoryName === name)[0]
        : {};
    }
  };
}

export type CategoryStore = ReturnType<typeof categoryStore>;
