import searchStore from '@/store/search';
import categoryStore from '@/store/category';
import conditionStore from '@/store/condition';
import shopStore from '@/store/shop';
import comparisonStore from '@/store/comparison';
import authStore from '@/store/auth';
import loadStore from '@/store/load';
import headerStore from '@/store/header';
import errorStore from '@/store/error';

export default function globalStore() {
  return {
    searcher: searchStore(),
    category: categoryStore(),
    condition: conditionStore(),
    shop: shopStore(),
    comparison: comparisonStore(),
    authorizer: authStore(),
    loader: loadStore(),
    header: headerStore(),
    errorStore: errorStore()
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;
