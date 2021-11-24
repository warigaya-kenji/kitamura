import searchStore from '@/store/search';
import categoryStore from '@/store/category';
import conditionStore from '@/store/condition';
import shopStore from '@/store/shop';
import comparisonStore from '@/store/comparison';
import productStore from '@/store/product';
import authStore from '@/store/auth';
import loadStore from '@/store/load';
import headerStore from '@/store/header';
import errorStore from '@/store/error';
import confirmDialogStore from '@/store/confirm-dialog';
import mypageMenuStore from '@/store/mypage-menu';
import orderStore from '@/store/order';

export default function globalStore() {
  return {
    searcher: searchStore(),
    category: categoryStore(),
    condition: conditionStore(),
    shop: shopStore(),
    comparison: comparisonStore(),
    product: productStore(),
    authorizer: authStore(),
    loader: loadStore(),
    header: headerStore(),
    errorStore: errorStore(),
    confirmDialogStore: confirmDialogStore(),
    mypageMenuStore: mypageMenuStore(),
    order: orderStore()
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;
