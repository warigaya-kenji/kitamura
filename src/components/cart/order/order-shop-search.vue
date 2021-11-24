<template>
  <div class="shop-search" :class="{ 'text-right': $vuetify.breakpoint.mdAndUp }">
    <!-- 受取店舗を検索するボタン 960px以上 -->
    <v-btn class="shop-search-btn" @click="fetchShop()" v-if="$vuetify.breakpoint.mdAndUp">受取店舗を検索</v-btn>

    <!-- 受取店舗を検索するボタン 960px未満 -->
    <v-btn class="shop-search-btn" outlined depressed @click="fetchShop()" v-if="$vuetify.breakpoint.smAndDown"
      >受取店舗を検索する<v-icon class="shop-search-btn-icon" small>fas fa-chevron-right</v-icon></v-btn
    >

    <!-- 店舗一覧のダイアログ 960px以上 -->
    <v-dialog class="shop-area-search-dialog" scrollable max-width="1200" v-model="shopSearchAreaDialog" v-if="$vuetify.breakpoint.mdAndUp">
      <v-card class="shop-area-search-dialog-main">
        <div class="shop-area-search-dialog-prefecture">
          <div class="shop-area-search-dialog-title">都道府県から店舗を探す</div>
          <div class="shop-area-search-dialog-list">
            <div class="shop-area-search-dialog-item" v-for="prefecture in prefectureList" :key="prefecture.code" @click="clickPrefecture(prefecture)">
              {{ prefecture.name }}<v-icon class="shop-area-search-dialog-item-icon" small>fas fa-chevron-right</v-icon>
            </div>
          </div>
        </div>
        <div ref="shopAreaAearchDialogCity" class="shop-area-search-dialog-city">
          <div class="shop-area-search-dialog-title">{{ selectedPrefecture.name || '都道府県を選択してください' }}</div>
          <div class="shop-area-search-dialog-list">
            <div class="shop-area-search-dialog-item" v-for="city in cityList" :key="city" @click="clickCity(city)">
              {{ city }}<v-icon class="shop-area-search-dialog-item-icon" small>fas fa-chevron-right</v-icon>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>

    <!-- 都道府県リストドロワー 960px未満 -->
    <v-navigation-drawer class="drawer-layout prefecture" v-model="prefectureDrawer" fixed right hide-overlay stateless v-if="$vuetify.breakpoint.smAndDown">
      <div class="drawer-layout-wrap">
        <div class="drawer-layout-back" @click="prefectureDrawer = !prefectureDrawer">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>
        <div class="drawer-layout-main">
          <div class="drawer-layout-main-title">都道府県から店舗を探す</div>
          <div class="drawer-layout-main-list">
            <div class="drawer-layout-main-item" v-for="prefecture in prefectureList" :key="prefecture.code" @click="clickPrefecture(prefecture)">
              {{ prefecture.name }}<v-icon class="drawer-layout-main-item-icon" small>fas fa-chevron-right</v-icon>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- 市区町村リストドロワー 960px未満 -->
    <v-navigation-drawer class="drawer-layout city" v-model="cityDrawer" fixed right hide-overlay stateless v-if="$vuetify.breakpoint.smAndDown">
      <div class="drawer-layout-wrap">
        <div class="drawer-layout-back" @click="cityDrawer = !cityDrawer">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>
        <div class="drawer-layout-main">
          <div class="drawer-layout-main-title">{{ selectedPrefecture.name }}</div>
          <div class="drawer-layout-main-list">
            <div class="drawer-layout-main-item" v-for="city in cityList" :key="city" @click="clickCity(city)">
              {{ city }}<v-icon class="drawer-layout-main-item-icon" small>fas fa-chevron-right</v-icon>
            </div>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- 店舗一覧のダイアログ -->
    <v-dialog class="shop-search-dialog" max-width="640" v-model="shopSearchDialog">
      <v-card class="shop-search-dialog-area">
        <v-radio-group class="shop-search-dialog-list" v-model="selectedShopCode" column mandatory>
          <v-radio class="shop-search-dialog-radio" :value="shop.code" v-for="shop in shopList" :key="shop.code">
            <template slot="label">
              <div><img class="shop-search-dialog-radio-img mr-2" src="@/assets/company/logo-kitamura.png" width="25px" />{{ shop.name }}</div>
              <div class="shop-search-dialog-radio-sub-label">{{ shop.address }}</div>
            </template>
          </v-radio>
        </v-radio-group>
        <div class="shop-search-dialog-btn-area text-right">
          <v-btn class="shop-search-dialog-btn mr-3" text @click="shopSearchDialog = false">キャンセル</v-btn>
          <v-btn class="shop-search-dialog-btn" text @click="addShop()">決定</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, computed, ref } from '@vue/composition-api';
import CartService from '@/logic/cart.service';
import { SearchShop } from '@/types/cash-register-info';

type DisplayPrefecture = {
  code: string;
  name: string;
};

type DisplayShop = {
  code: string;
  name: string;
  address: string;
};

export default Vue.extend({
  name: 'order-shop-search',
  props: {},
  setup: (props, context) => {
    const state = reactive({
      shopSearchAreaDialog: false,
      prefectureDrawer: false,
      cityDrawer: false,
      shopSearchDialog: false,
      // 店舗一覧(全量)
      allShop: [] as Array<SearchShop>,
      // 選択値
      selectedPrefecture: {} as DisplayPrefecture,
      selectedCity: '',
      selectedShopCode: '',
      shopAreaAearchDialogCity: ref<HTMLElement>()
    });

    /**
     * 店舗一覧の取得
     */
    const fetchShop = async () => {
      try {
        const result = await CartService.fetchShop();
        state.allShop = result.shopInfo;
        if (context.root.$vuetify.breakpoint.mdAndUp) {
          state.shopSearchAreaDialog = true;
        } else {
          state.prefectureDrawer = true;
        }
      } catch (error) {
        console.error(error);
      }
    };

    /**
     * 都道府県リスト
     */
    const prefectureList = computed(() => {
      const prefectureList = [] as Array<DisplayPrefecture>;

      if (state.allShop.length) {
        state.allShop.forEach((shop) => {
          if (!prefectureList.some((prefecture) => prefecture.code === shop.prefectureCd)) {
            prefectureList.push({ code: shop.prefectureCd, name: shop.prefectureName });
          }
          return;
        });
      }

      return prefectureList;
    });

    /**
     * 市区町村リスト
     */
    const cityList = computed(() => {
      const cityList = [] as Array<string>;

      if (state.allShop.length && Object.keys(state.selectedPrefecture).length) {
        const targetShop = state.allShop.filter((shop) => shop.prefectureCd === state.selectedPrefecture.code);
        targetShop.forEach((shop) => {
          if (!cityList.some((city) => city === shop.addr1)) {
            cityList.push(shop.addr1);
          }
          return;
        });
      }

      return cityList;
    });

    /**
     * 店舗リスト
     */
    const shopList = computed(() => {
      const displayShopList = [] as Array<DisplayShop>;

      if (state.allShop.length && Object.keys(state.selectedPrefecture).length && state.selectedCity) {
        const targetShop = state.allShop.filter((shop) => shop.prefectureCd === state.selectedPrefecture.code && shop.addr1 === state.selectedCity);
        targetShop.forEach((shop) => {
          if (!displayShopList.some((displayShop) => displayShop.code === shop.shopCd)) {
            displayShopList.push({
              code: shop.shopCd,
              name: shop.shopName,
              address: shop.address
            });
          }
          return;
        });
      }

      return displayShopList;
    });

    /**
     * 都道府県押下
     */
    const clickPrefecture = (prefecture: DisplayPrefecture) => {
      state.selectedPrefecture = prefecture;
      if (context.root.$vuetify.breakpoint.smAndDown) state.cityDrawer = true;
      else if (state.shopAreaAearchDialogCity) state.shopAreaAearchDialogCity.scrollTop = 0;
    };

    /**
     * 店舗一覧の取得
     */
    const clickCity = (city: string) => {
      state.selectedCity = city;
      state.shopSearchDialog = true;
    };

    /**
     * 店舗を追加する
     */
    const addShop = () => {
      context.emit('addShop', state.selectedShopCode);
      state.shopSearchAreaDialog = false;
      state.prefectureDrawer = false;
      state.cityDrawer = false;
      state.shopSearchDialog = false;
    };

    return {
      ...toRefs(state),
      fetchShop,
      prefectureList,
      cityList,
      shopList,
      clickPrefecture,
      clickCity,
      addShop
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// 店舗リスト
.shop-search {
  &-dialog {
    z-index: 600;

    &-list {
      padding: 20px;
      border-bottom: solid 1px $ec-grey;
    }
    &-radio {
      align-items: normal;

      ::v-deep {
        .v-label {
          display: block;
          margin-left: 12px;
          color: $ec-black;
        }

        .v-input--selection-controls__input .v-icon {
          font-size: 30px;
        }
      }

      &-img {
        vertical-align: middle;
      }

      &-sub-label {
        margin-top: 4px;
        font-size: 12px;
        font-weight: normal;
      }
    }

    &-btn-area {
      padding: 8px 12px;
    }
    &-btn {
      color: $ec-primary;
    }
  }
}
/** -------------------------------
  店舗検索
------------------------------- */
.container-wide {
  .shop-search {
    // 受取店舗を検索するボタン
    &-btn {
      width: 256px;
      background-color: $bg-light-grey3;
    }
  }
}

.shop-area-search-dialog {
  z-index: 600;

  &-prefecture,
  &-city {
    flex: 1 1 50%;
    padding: 0 12px;
    overflow-y: auto;
  }

  &-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }

  &-title {
    padding: 0 12px;
    font-size: 18px;
    line-height: 3;
  }

  $list-item-px: 20px;
  &-item {
    position: relative;
    padding: 0 $list-item-px;
    font-size: 12px;
    line-height: 50px;
    border-bottom: dashed 1px $ec-grey;
    cursor: pointer;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: $list-item-px;
      color: $text-light-grey2;
    }
  }
}
/** -------------------------------
  店舗検索 960px以下
------------------------------- */
// ドロワーのサイズ 共通
.drawer-layout {
  width: 100% !important;

  &.prefecture {
    z-index: 510;
  }

  &.city {
    z-index: 520;
  }

  &-back {
    padding: 0 12px;
    font-size: 18px;
    line-height: 45px;
    background: $bg-white;
    border-bottom: solid 1px $ec-light-grey2;

    &-icon {
      margin-right: 8px;
      color: $text-black;
    }

    &-text {
      vertical-align: middle;
    }
  }

  &-main {
    &-title {
      padding: 0 12px;
      font-size: 18px;
      line-height: 3;
    }

    $list-item-px: 20px;
    &-item {
      position: relative;
      padding: 0 $list-item-px;
      font-size: 12px;
      line-height: 50px;
      border-bottom: dashed 1px $ec-grey;

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: $list-item-px;
        color: $text-light-grey2;
      }
    }
  }
}

.container-narrow {
  .shop-search {
    // 受取店舗を検索するボタン
    &-btn {
      position: relative;
      display: block;
      width: calc(100% - 24px);
      max-width: 340px;
      margin: 0 auto;
      font-weight: bold;
      border-color: $ec-grey;

      &-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        color: $ec-primary;
      }
    }
  }
}
</style>
