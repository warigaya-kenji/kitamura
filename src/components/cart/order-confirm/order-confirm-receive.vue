<template>
  <div class="order-contents receive">
    <div class="order-contents-title d-flex">
      受取方法
      <v-btn class="ec-link-btn ml-auto" to="/ec/order#order-receive" color="rgba(0, 0, 0, 0.12)" tile depressed>変更</v-btn>
    </div>
    <!-- 受け取り方法 960px以上 -->
    <div class="order-contents-area" v-if="$vuetify.breakpoint.mdAndUp">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">受取方法</th>
              <th class="text-center">指定詳細</th>
            </tr>
          </thead>
          <tbody class="order-product-info">
            <tr>
              <td class="text-center">
                <span v-if="`${receiveType}` === RECEIVE_TYPE.SHOP">店舗受取</span>
                <span v-else>{{ selectDeliveryType.deliveryTypeName }}</span>
              </td>
              <td>
                <!-- 店舗受取 -->
                <div v-if="`${receiveType}` === RECEIVE_TYPE.SHOP">
                  <div class="order-contents-item-value">
                    <span v-if="`${selectedShop.type}` === '1'">前回受け取った店舗</span>
                    <span v-else-if="`${selectedShop.type}` === '2'">お気に入り・登録店舗</span>
                    <span v-else>今回選んだ店舗</span>
                  </div>
                  <div>{{ selectedShop.shopName }}</div>
                  <div>{{ selectedShop.shopTel }}</div>
                </div>
                <!-- 宅配 -->
                <div v-else>
                  <div class="order-contents-item-value">
                    <span v-if="`${selectedDeliveryAddress.deliveryDiv}` === '0'">お客さまのご自宅</span>
                    <span v-else-if="`${selectedDeliveryAddress.deliveryDiv}` === '1'">
                      <span>{{ selectedDeliveryAddress.lastName }}&nbsp;{{ selectedDeliveryAddress.firstName }}&nbsp;様</span>
                    </span>
                    <span v-else>
                      <span>新規登録の住所:</span>
                      <span class="d-inline-block">{{ selectedDeliveryAddress.lastName }}&nbsp;{{ selectedDeliveryAddress.firstName }}&nbsp;様</span>
                    </span>
                  </div>
                  <div>
                    <span class="d-inline-block">{{ getPrefectureName(selectedDeliveryAddress.prefectureId) }}</span>
                    <span class="d-inline-block">{{ selectedDeliveryAddress.addr1 }}</span>
                    <span class="d-inline-block">{{ selectedDeliveryAddress.addr2 }}</span>
                    <span class="d-inline-block">{{ selectedDeliveryAddress.addr3 }}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <!-- 受け取り方法 960px未満 -->
    <div class="order-contents-area" v-else>
      <!-- 店舗で受取る -->
      <div class="receive-area shop" v-if="`${receiveType}` === RECEIVE_TYPE.SHOP">
        <div class="shop-title-area">
          <b>カメラのキタムラ店舗で受取る</b>
          <div>お近くの店舗にて受取り</div>
        </div>
        <div class="shop-sub-option-area">
          <!-- 受取店舗 -->
          <div class="shop-sub-option">
            <v-row dense>
              <v-col cols="5" class="order-contents-item-title">受取る店舗</v-col>
              <v-col cols="7">
                <div class="order-contents-item-value">
                  <span v-if="`${selectedShop.type}` === '1'">前回受け取った店舗</span>
                  <span v-else-if="`${selectedShop.type}` === '2'">お気に入り・登録店舗</span>
                  <span v-else>今回選んだ店舗</span>
                </div>
                <div>{{ selectedShop.shopName }}</div>
                <div>{{ selectedShop.shopTel }}</div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <!-- 宅配で受取る -->
      <div class="receive-area home" v-else>
        <div class="shop-title-area">
          <b>宅配で受取る</b>
          <div>ご自宅または、ご指定のお届け先で受取り</div>
        </div>
        <div class="home-sub-option-area">
          <!-- 宅配の種類 -->
          <div class="home-delivery">
            <v-row dense>
              <v-col cols="5" class="order-contents-item-title">宅配の種類</v-col>
              <v-col cols="7" class="order-contents-item-value">{{ selectDeliveryType.deliveryTypeName }}</v-col>
            </v-row>
          </div>
          <!-- 受取る場所 -->
          <div class="home-delivery-address">
            <v-row dense>
              <v-col cols="5" class="order-contents-item-title">受取る場所</v-col>
              <v-col cols="7">
                <div class="order-contents-item-value">
                  <span v-if="`${selectedDeliveryAddress.deliveryDiv}` === '0'">お客さまのご自宅</span>
                  <span v-else-if="`${selectedDeliveryAddress.deliveryDiv}` === '1'">
                    <span>{{ selectedDeliveryAddress.lastName }}&nbsp;{{ selectedDeliveryAddress.firstName }}&nbsp;様</span>
                  </span>
                  <span v-else>
                    <span>新規登録の住所:</span>
                    <span class="d-inline-block">{{ selectedDeliveryAddress.lastName }}&nbsp;{{ selectedDeliveryAddress.firstName }}&nbsp;様</span>
                  </span>
                </div>
                <div>
                  <span class="d-inline-block">{{ getPrefectureName(selectedDeliveryAddress.prefectureId) }}</span>
                  <span class="d-inline-block">{{ selectedDeliveryAddress.addr1 }}</span>
                  <span class="d-inline-block">{{ selectedDeliveryAddress.addr2 }}</span>
                  <span class="d-inline-block">{{ selectedDeliveryAddress.addr3 }}</span>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import { AddressInfo, DeliveryDivInfo, DeliveryTypeInfo, Shop } from '@/types/cash-register-info';
import { RECEIVE_TYPE } from '@/constants/order-register-type';
import { getPrefectureName } from '@/logic/utils';

// 店舗受取
type Delivery = {
  deliveryTypeInfo: DeliveryTypeInfo[];
  selectDeliveryTypeCd: number;
  addressInfo: AddressInfo[];
  deliveryDivInfo: DeliveryDivInfo;
};

export default Vue.extend({
  name: 'order-confirm-receive',
  components: {},
  props: {
    receiveType: {
      type: Number,
      required: true
    },
    shops: {
      type: Array as PropType<Array<Shop>>,
      default: () => []
    },
    delivery: {
      type: Object as PropType<Delivery>,
      default: {}
    }
  },
  setup: (props) => {
    const state = reactive({});

    /**
     * 選択された受取店舗
     */
    const selectedShop = computed(() => {
      const shop = (props.shops as Shop[]).find((item) => item.selectShop);
      return shop || {};
    });

    /**
     * 選択された宅配の種類
     */
    const selectDeliveryType = computed(() => {
      const delivery = props.delivery as Delivery;
      const deliveryType = delivery.deliveryTypeInfo.find((item) => item.deliveryTypeCd === delivery.selectDeliveryTypeCd);
      return deliveryType || {};
    });

    /**
     * 選択された受取る場所
     */
    const selectedDeliveryAddress = computed(() => {
      const delivery = props.delivery as Delivery;

      let address;
      if (`${delivery.deliveryDivInfo.deliveryDiv}` === '1') {
        // お届け先区分が1であれば、お届け先IDも一致するものを選択する
        address = delivery.addressInfo?.find(
          (item) => item.deliveryDiv === delivery.deliveryDivInfo.deliveryDiv && item.delivAddressId === delivery.deliveryDivInfo?.delivAddressId
        );
      } else {
        address = delivery.addressInfo?.find((item) => item.deliveryDiv === delivery.deliveryDivInfo.deliveryDiv);
      }

      return address || {};
    });

    return {
      RECEIVE_TYPE,
      ...toRefs(state),
      selectedShop,
      selectDeliveryType,
      selectedDeliveryAddress,
      getPrefectureName
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  受取方法確認 960px以下
------------------------------- */
.container-narrow {
  .receive {
    // 店舗受け取り
    .shop {
      &-title-area {
        padding: 12px 18px;
        border-bottom: dashed 1px $ec-light-grey2;
      }

      // 受取店舗を選択
      &-sub-option {
        &-area {
          padding: 12px 18px 24px;
        }
      }
    }

    // 宅配受け取り
    .home {
      &-sub-option {
        &-title,
        &-value {
          font-weight: bold;
        }
      }

      // 宅配の種類を選択
      &-delivery {
        padding: 12px 18px;
      }

      // 受取る場所を選択
      &-delivery-address {
        padding: 12px 18px;

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
