<template>
  <div class="order-contents receive">
    <div class="order-contents-title">受取方法の選択</div>
    <!-- 選択コンテンツ 960px以上 -->
    <div class="order-contents-area" v-if="$vuetify.breakpoint.mdAndUp">
      <!-- エラーメッセージ -->
      <div v-if="getErrorMessage('order-receive-type')" class="order-contents-error">
        {{ getErrorMessage('order-receive-type') }}
      </div>
      <div class="order-contents-check-area">
        <!-- 店舗で受取る -->
        <v-checkbox
          id="order-receive-type"
          class="order-contents-checkbox"
          :class="{ 'disabled-check': !!restriction }"
          v-model="selectedReceiveType"
          :value="RECEIVE_TYPE.SHOP"
          :hide-details="true"
          :rules="rules.receiveType"
          :disabled="!!restriction"
          @click="changeReceiveType()"
          v-show="!restriction || restriction !== +RECEIVE_TYPE.SHOP"
        >
          <template slot="label">
            <div>カメラのキタムラ店舗で受取る</div>
            <div class="order-contents-checkbox-sub-label">お近くの店舗にて受取り</div>
          </template>
        </v-checkbox>
        <!-- 宅配で受取る -->
        <v-checkbox
          class="order-contents-checkbox"
          :class="{ 'disabled-check': !!restriction }"
          v-model="selectedReceiveType"
          :value="RECEIVE_TYPE.HOME"
          :hide-details="true"
          :rules="rules.receiveType"
          :disabled="!!restriction"
          @click="changeReceiveType()"
          v-show="!restriction || restriction !== +RECEIVE_TYPE.HOME"
        >
          <template slot="label">
            <div>宅配で受取る</div>
            <div class="order-contents-checkbox-sub-label">ご自宅または、ご指定のお届け先で受取り</div>
          </template>
        </v-checkbox>
      </div>
      <!-- 店舗で受取る -->
      <div class="order-contents-option-area shop" v-show="selectedReceiveType === RECEIVE_TYPE.SHOP">
        <!-- エラーメッセージ -->
        <div v-if="getErrorMessage('order-receive-shop')" class="order-contents-error">
          {{ getErrorMessage('order-receive-shop') }}
        </div>
        <!-- 受取店舗を選択 -->
        <div class="shop-sub-option">
          <v-checkbox
            id="order-receive-shop"
            class="order-contents-checkbox pa-3 none"
            v-for="shop in shopList"
            :key="shop.id"
            v-model="selectedShop"
            :value="shop.id"
            v-show="shop.show"
            :disabled="!shop.show"
            :hide-details="true"
            :rules="rules.shop"
            @click="changeShop()"
          >
            <template slot="label">
              <div>{{ shop.mainLabel }}</div>
              <div class="order-contents-checkbox-sub-label">{{ shop.shopNm }}</div>
              <div class="order-contents-checkbox-sub-label">電話番号：{{ shop.shopTel }}</div>
            </template>
          </v-checkbox>
        </div>
        <!-- 受取店舗を検索 -->
        <order-shop-search @addShop="addShop" />
      </div>
      <!-- 宅配で受取る -->
      <div class="order-contents-option-area home" v-show="selectedReceiveType === RECEIVE_TYPE.HOME">
        <!-- 宅配の種類を選択 -->
        <div class="home-delivery">
          <div class="home-delivery-text">宅配の種類を選択</div>
          <v-select
            class="home-delivery-select"
            :items="deliveryTypeList"
            item-text="deliveryTypeName"
            item-value="deliveryTypeCd"
            v-model="selectedDeliveryType"
            placeholder="選択してください"
            append-icon="far fa-angle-down"
            outlined
            dense
            hide-details="auto"
            :rules="rules.deliveryType"
            @change="changeDeliveryType()"
          ></v-select>
        </div>
        <!-- 受取る場所を選択 -->
        <div class="home-delivery-address">
          <!-- エラーメッセージ -->
          <div v-if="getErrorMessage('order-address')" class="order-contents-error">
            {{ getErrorMessage('order-address') }}
          </div>
          <div class="home-delivery-address-options">
            <v-checkbox
              id="order-address"
              class="order-contents-checkbox pa-3 none"
              v-for="address in addressList"
              :key="address.id"
              v-model="selectedAddress"
              :value="address.id"
              :hide-details="true"
              :rules="rules.deliveryAddress"
              @click="changeDeliveryAddress()"
            >
              <template slot="label">
                <div>{{ address.mainLabel }}</div>
                <div class="order-contents-checkbox-sub-label">{{ address.addressText }}</div>
              </template>
            </v-checkbox>
          </div>
          <!-- 新しいお届け先を指定 -->
          <order-add-address @addAddress="addAddress" />

          <div class="mt-5">
            <span v-if="`${selectedDeliveryType}` === '10'">
              【送料】
              <br />新品商品：購入金額が税込8,000円以上の場合無料。&emsp;8,000円未満の場合550円（税込）<br />中古商品：一律550円（税込）
            </span>
            <span v-else-if="`${selectedDeliveryType}` === '20'">【送料】無料</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 選択コンテンツ 960px未満 -->
    <div class="order-contents-area" v-if="$vuetify.breakpoint.smAndDown">
      <!-- エラーメッセージ -->
      <div v-if="getErrorMessage('order-receive-type')" class="order-contents-error">
        {{ getErrorMessage('order-receive-type') }}
      </div>
      <!-- 店舗で受取る -->
      <div class="receive-area shop" v-show="!restriction || restriction !== +RECEIVE_TYPE.SHOP">
        <v-checkbox
          id="order-receive-type"
          class="order-contents-checkbox"
          :class="{ 'disabled-check': !!restriction }"
          v-model="selectedReceiveType"
          :value="RECEIVE_TYPE.SHOP"
          :hide-details="true"
          :rules="rules.receiveType"
          :disabled="!!restriction"
          @click="changeReceiveType()"
        >
          <template slot="label">
            <div>カメラのキタムラ店舗で受取る</div>
            <div class="order-contents-checkbox-sub-label">お近くの店舗にて受取り</div>
          </template>
        </v-checkbox>
        <div class="shop-sub-option-area" v-show="selectedReceiveType === RECEIVE_TYPE.SHOP">
          <!-- エラーメッセージ -->
          <div v-if="getErrorMessage('order-receive-shop')" class="order-contents-error">
            {{ getErrorMessage('order-receive-shop') }}
          </div>
          <!-- 受取店舗を選択 -->
          <div class="shop-sub-option">
            <v-checkbox
              id="order-receive-shop"
              class="order-contents-checkbox pa-3 none"
              v-for="shop in shopList"
              :key="shop.id"
              v-model="selectedShop"
              :value="shop.id"
              v-show="shop.show"
              :disabled="!shop.show"
              :hide-details="true"
              :rules="rules.shop"
              @click="changeShop()"
            >
              <template slot="label">
                <div>{{ shop.mainLabel }}</div>
                <div class="order-contents-checkbox-sub-label">{{ shop.shopNm }}</div>
                <div class="order-contents-checkbox-sub-label">電話番号：{{ shop.shopTel }}</div>
              </template>
            </v-checkbox>
          </div>
          <!-- 受取店舗を検索 -->
          <order-shop-search @addShop="addShop" />
        </div>
      </div>
      <!-- 宅配で受取る -->
      <div class="receive-area home" v-show="!restriction || restriction !== +RECEIVE_TYPE.HOME">
        <v-checkbox
          class="order-contents-checkbox"
          :class="{ 'disabled-check': !!restriction }"
          v-model="selectedReceiveType"
          :value="RECEIVE_TYPE.HOME"
          :hide-details="true"
          :rules="rules.receiveType"
          :disabled="!!restriction"
          @click="changeReceiveType()"
        >
          <template slot="label">
            <div>宅配で受取る</div>
            <div class="order-contents-checkbox-sub-label">ご自宅または、ご指定のお届け先で受取り</div>
          </template>
        </v-checkbox>
        <div class="home-sub-option-area" v-show="selectedReceiveType === RECEIVE_TYPE.HOME">
          <!-- 宅配の種類を選択 -->
          <div class="home-delivery">
            <div class="home-delivery-text">宅配の種類を選択</div>
            <v-select
              class="home-delivery-select"
              :items="deliveryTypeList"
              item-text="deliveryTypeName"
              item-value="deliveryTypeCd"
              v-model="selectedDeliveryType"
              placeholder="選択してください"
              append-icon="far fa-angle-down"
              outlined
              dense
              hide-details="auto"
              :rules="rules.deliveryType"
              @change="changeDeliveryType()"
            ></v-select>
          </div>
          <!-- 受取る場所を選択 -->
          <div class="home-delivery-address">
            <div class="home-delivery-address-text">受取る場所を選択</div>
            <div class="home-delivery-address-options">
              <!-- エラーメッセージ -->
              <div v-if="getErrorMessage('order-address')" class="order-contents-error">
                {{ getErrorMessage('order-address') }}
              </div>
              <v-checkbox
                id="order-address"
                class="order-contents-checkbox pa-3 none"
                v-for="address in addressList"
                :key="address.id"
                v-model="selectedAddress"
                :value="address.id"
                :hide-details="true"
                :rules="rules.deliveryAddress"
                @click="changeDeliveryAddress()"
              >
                <template slot="label">
                  <div>{{ address.mainLabel }}</div>
                  <div class="order-contents-checkbox-sub-label">{{ address.addressText }}</div>
                </template>
              </v-checkbox>
            </div>
            <!-- 新しいお届け先を指定 -->
            <order-add-address @addAddress="addAddress" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, PropType, watch, computed } from '@vue/composition-api';
import OrderShopSearch from '@/components/cart/order/order-shop-search.vue';
import OrderAddAddress from '@/components/cart/order/order-add-address.vue';
import { RECEIVE_TYPE, DELIVERY_SHOP_TYPE, DELIVERY_ADDRESS_TYPE } from '@/constants/order-register-type';
import { DeliveryTypeInfo, AddressInfo, DeliveryDivInfo, Shop } from '@/types/cash-register-info';
import { getPrefectureName } from '@/logic/utils';
import { RegisterDeliveryTarget } from '@/components/common/delivery-target-form.vue';

export type OrderReciveVal = {
  receivingMethodDiv?: number;
  selectDeliveryTypeCd?: number;
  deliveryDivInfo?: DeliveryDivInfo;
};

type DisplayShop = {
  id: string;
  mainLabel: string;
  shopNm: string;
  shopTel: string;
  show: boolean;
};

type DisplayAddress = {
  id: string;
  mainLabel: string;
  addressText: string;
};

export default Vue.extend({
  name: 'order-receive',
  components: {
    'order-shop-search': OrderShopSearch,
    'order-add-address': OrderAddAddress
  },
  props: {
    // レジ情報取得値
    val: {
      type: Object as PropType<OrderReciveVal>,
      required: false
    },
    // 受け取り方法の制約
    restriction: {
      type: Number,
      required: false
    },
    // 店舗情報
    shopInfo: {
      type: Array as PropType<Array<Shop>>,
      required: false,
      default: () => []
    },
    // 宅配の種類
    deliveryTypeList: {
      type: Array as PropType<Array<DeliveryTypeInfo>>,
      required: false,
      default: () => []
    },
    // お届け先情報
    addressInfo: {
      type: Array as PropType<Array<AddressInfo>>,
      required: false,
      default: () => []
    },
    // バリデーションルール
    rules: {
      type: Object,
      required: true
    },
    // チェックボックス用の表通エラーメッセージ
    getErrorMessage: {
      type: Function,
      required: true
    }
  },
  setup: (props, context) => {
    const state = reactive({
      selectedReceiveType: '',
      // 店舗受け取りデータ
      selectedShop: '',
      // 宅配受け取りデータ
      selectedDeliveryType: 0,
      selectedAddress: ''
    });

    // 受け取り方法の制約制御
    watch(
      () => props.restriction,
      () => {
        if (props.restriction) state.selectedReceiveType = props.restriction === 1 ? RECEIVE_TYPE.SHOP : RECEIVE_TYPE.HOME;
      }
    );

    // レジ情報の値で更新
    watch(
      () => props.val,
      () => {
        const reciveVal = props.val as OrderReciveVal;
        state.selectedReceiveType = reciveVal.receivingMethodDiv ? `${reciveVal.receivingMethodDiv}` : '';
        // 宅配受け取り
        if (state.selectedReceiveType === RECEIVE_TYPE.HOME) {
          state.selectedDeliveryType = reciveVal.selectDeliveryTypeCd || 0;
          if (reciveVal.deliveryDivInfo) {
            state.selectedAddress = reciveVal.deliveryDivInfo.delivAddressId
              ? `${reciveVal.deliveryDivInfo.delivAddressId}`
              : `${reciveVal.deliveryDivInfo.deliveryDiv}`;
          }
        }
      }
    );

    // 受け取り方法の選択
    const changeReceiveType = () => {
      // チェックが外された場合、もう1つの選択肢を選ぶ
      if (!state.selectedReceiveType) {
        const reciveVal = props.val as OrderReciveVal;
        state.selectedReceiveType =
          reciveVal.receivingMethodDiv && `${reciveVal.receivingMethodDiv}` === RECEIVE_TYPE.SHOP ? RECEIVE_TYPE.HOME : RECEIVE_TYPE.SHOP;
      }

      context.emit('changeReceiveType', state.selectedReceiveType);
    };

    /** -------------------------------------------------------------
     * 店舗受け取り
     ------------------------------------------------------------- */
    // 店舗リストの生成（例外：選択肢と設定値が同じレスポンス内にあるためレジ情報の値で更新処理も含む）
    const shopList = computed(() => {
      const shopInfo = props.shopInfo as Array<Shop>;
      const displayShopList = [] as Array<DisplayShop>;

      if (shopInfo && shopInfo.length) {
        let label = '';
        shopInfo.forEach((info) => {
          // 選択済店舗を設定
          if (info.selectShop) state.selectedShop = info.shopCd;

          // ラベルの設定
          switch (`${info.type}`) {
            case DELIVERY_SHOP_TYPE.LAST_RECEIVED_SHOP:
              label = '前回受け取った店舗で受取る';
              break;
            case DELIVERY_SHOP_TYPE.FAVORITE_SHOP:
              label = 'お気に入り・登録店舗で受取る';
              break;
            case DELIVERY_SHOP_TYPE.NEW_SHOP:
              label = '';
              break;
            default:
              break;
          }

          // 受け取り不可を除外
          if (!info.acceptability)
            displayShopList.push({
              id: info.shopCd,
              mainLabel: label,
              shopNm: info.shopName,
              shopTel: info.shopTel,
              show: true
            });
        });
      } else {
        displayShopList.push({
          id: 'xxxxx',
          mainLabel: '',
          shopNm: '',
          shopTel: '',
          show: false
        });
      }

      return displayShopList;
    });

    // 店舗
    const changeShop = () => {
      context.emit('changeShop', state.selectedShop);
    };

    // 店舗検索追加
    const addShop = (shopCd: string) => {
      context.emit('changeShop', shopCd);
    };

    /** -------------------------------------------------------------
     * 宅配受け取り
     ------------------------------------------------------------- */

    // 宅配の受け取り場所の生成
    const addressList = computed(() => {
      const addressInfo = props.addressInfo as Array<AddressInfo>;
      const displayAddressList = [] as Array<DisplayAddress>;

      if (addressInfo && addressInfo.length) {
        let label = '';
        addressInfo.forEach((info) => {
          // ラベルの設定
          switch (`${info.deliveryDiv}`) {
            case DELIVERY_ADDRESS_TYPE.HOME:
              label = 'お客さまのご自宅';
              break;
            case DELIVERY_ADDRESS_TYPE.REGISTERED_ADDRESS:
              label = `${info.lastName} ${info.firstName} 様`;
              break;
            case DELIVERY_ADDRESS_TYPE.NEW_ADDRESS:
              label = `新しい届け先:${info.lastName} ${info.firstName} 様`;
              break;
            default:
              break;
          }

          displayAddressList.push({
            id: info.delivAddressId ? `${info.delivAddressId}` : `${info.deliveryDiv}`,
            mainLabel: label,
            addressText: `${getPrefectureName(+info.prefectureId)}${info.addr1}${info.addr2}${info.addr3}`
          });
        });
      }

      return displayAddressList;
    });

    // 宅配種類
    const changeDeliveryType = () => {
      if (state.selectedDeliveryType) context.emit('changeDeliveryType', state.selectedDeliveryType);
    };

    // お届け先情報情報
    const changeDeliveryAddress = () => {
      if (state.selectedAddress) {
        // 新規登録データのみ、再度情報を送る
        if (state.selectedAddress === DELIVERY_ADDRESS_TYPE.NEW_ADDRESS) {
          const target = (props.addressInfo as Array<AddressInfo>).find((address) => `${address.deliveryDiv}` === DELIVERY_ADDRESS_TYPE.NEW_ADDRESS);
          const deliveryInfo = {
            zipCode: target?.zipcode,
            prefectureId: target?.prefectureId,
            addr1: target?.addr1,
            addr2: target?.addr2,
            addr3: target?.addr3,
            lastName: target?.lastName,
            firstName: target?.firstName,
            lastNameKn: target?.lastNameKana,
            firstNameKn: target?.firstNameKana,
            phone: target?.phone,
            save: target?.isSave
          } as RegisterDeliveryTarget;
          context.emit('changeDeliveryAddress', DELIVERY_ADDRESS_TYPE.NEW_ADDRESS, deliveryInfo);
        } else {
          context.emit('changeDeliveryAddress', state.selectedAddress, {});
        }
      }
    };

    // 新しいお届け先追加
    const addAddress = (deliveryTarget: RegisterDeliveryTarget) => {
      context.emit('changeDeliveryAddress', DELIVERY_ADDRESS_TYPE.NEW_ADDRESS, deliveryTarget);
    };

    return {
      ...toRefs(state),
      RECEIVE_TYPE,
      changeReceiveType,
      shopList,
      changeShop,
      addShop,
      addressList,
      changeDeliveryType,
      changeDeliveryAddress,
      addAddress
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法の選択
------------------------------- */
.container-wide {
  .receive {
    // 店舗受け取り
    .shop {
      // 受取店舗を選択
      &-sub-option {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 12px;
        padding: 0 5%;
      }
    }

    // 宅配受け取り
    .home {
      // 宅配の種類を選択
      &-delivery {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding: 0 24px 20px;
        border-bottom: dashed 2px $ec-grey;

        &-text {
          margin-right: 60px;
          font-weight: bold;
        }

        &-select {
          flex: 0 1 340px;

          ::v-deep {
            .v-input__slot {
              margin-bottom: 0;
            }
            .v-text-field__details {
              margin: 8px 0 0;
            }
          }
        }
      }

      // 受取る場所を選択
      &-delivery-address {
        margin-bottom: 12px;
        padding: 0 5%;

        &-options {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 12px;
        }
      }
    }
  }
}
/** -------------------------------
  受取方法の選択 960px以下
------------------------------- */
.container-narrow {
  .receive {
    // 店舗受け取り
    .shop {
      // 受取店舗を選択
      &-sub-option-area {
        padding: 12px 0 24px;
        border-bottom: solid 1px $ec-light-grey2;
      }

      &-sub-option {
        margin-bottom: 12px;
        padding-left: 10%;
      }
    }

    // 宅配受け取り
    .home {
      // 宅配の種類を選択
      &-delivery {
        margin-bottom: 12px;
        padding: 8px 20px;

        &-text {
          margin-bottom: 8px;
          font-weight: bold;
        }

        &-select {
          ::v-deep {
            .v-input__slot {
              margin-bottom: 0;
            }
            .v-text-field__details {
              margin: 8px 0 0;
            }
          }
        }
      }

      // 受取る場所を選択
      &-delivery-address {
        padding: 12px 0 24px;

        &-text {
          padding: 8px 20px;
          font-weight: bold;
          border-bottom: solid 1px $ec-light-grey2;
        }

        &-options {
          margin-bottom: 12px;
          padding-left: 10%;
        }
      }
    }
  }
}
</style>
