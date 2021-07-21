import { reactive } from '@vue/composition-api';
import { Shop } from '@/types/product-list';
import ProductListService from '@/logic/product-list.service';
import WebStorage from '@/logic/web-storage';

export default function shopStore() {
  const KEY = 'shopList';

  const state = reactive({
    shopList: [] as Array<Shop>
  });

  return {
    get shopList(): Array<Shop> {
      if (!state.shopList || !state.shopList.length) state.shopList = WebStorage.getSessionStorage(KEY);
      return state.shopList ? state.shopList : [];
    },

    async fetchShop() {
      try {
        const shopResluts = await ProductListService.fetchShopList();
        state.shopList = shopResluts.shops;
        WebStorage.setSessionStorage(KEY, state.shopList);
      } catch (error) {
        state.shopList = [];
      }
    },

    convertToShopText(code: string): string {
      let price = '';
      if (state.shopList && state.shopList.length) {
        const target = state.shopList.filter((shop) => `${shop.shopcode}` === code)[0];
        price = target ? target.shopname : '';
      }
      return price;
    }
  };
}

export type ConditionsStore = ReturnType<typeof shopStore>;
