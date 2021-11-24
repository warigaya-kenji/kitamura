<template>
  <div>
    <div
      id="order-page"
      :class="{
        'container-wide': $vuetify.breakpoint.mdAndUp,
        'container-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <div
        :class="{
          'content-area-wide': $vuetify.breakpoint.mdAndUp,
          'content-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <v-form
          class="form"
          :class="{
            'd-flex mt-5': $vuetify.breakpoint.mdAndUp,
            'mt-2': $vuetify.breakpoint.smAndDown
          }"
          ref="form"
          lazy-validation
        >
          <div class="order-main-area">
            <!-- ページタイトル -->
            <div
              class="order-page-title"
              :class="{
                'mx-5 mb-5': $vuetify.breakpoint.mdAndUp,
                'mx-3 mb-3': $vuetify.breakpoint.smAndDown
              }"
            >
              購入手続き
            </div>

            <!-- ステップ -->
            <order-step :stepNo="1" />

            <!-- 購入履歴ボタンおよび各種価格 960px未満 -->
            <div class="order-btn-area" v-if="$vuetify.breakpoint.smAndDown">
              <order-action
                :order="orderSummary"
                :nextBtn="{ label: '注文内容確認へ進む' }"
                :prevBtn="{ label: 'カートへ戻る', to: '/ec/cart' }"
                :floatable="true"
                :orderTradeSummary="orderTradeSummary"
                :tradeProducts="tradeProducts"
                @click:next="toConfirm"
              >
              </order-action>
            </div>

            <!-- 各種選択 -->
            <div class="order-contents-wrap">
              <!-- 受け取り方法の選択 -->
              <order-receive
                id="order-receive"
                :val="orderRecive"
                :restriction="cashRegister.receivingMethodRestrictions"
                :shopInfo="cashRegister.shopInfo ? cashRegister.shopInfo.shops : []"
                :deliveryTypeList="cashRegister.deliveryTypeInfo"
                :addressInfo="cashRegister.addressInfo"
                :rules="rules"
                :getErrorMessage="getErrorMessage"
                @changeReceiveType="changeReceiveType"
                @changeShop="changeShop"
                @changeDeliveryType="changeDeliveryType"
                @changeDeliveryAddress="changeDeliveryAddress"
              />
              <!-- お届け希望の日時指定 -->
              <order-delivery-date-time
                id="order-delivery-date-time"
                :receiveType="receiveType"
                :val="orderDelivery"
                :shortestDeliveryDate="cashRegister.shortestDeliveryDate"
                :arrivalDateInfo="cashRegister.arrivalDateInfo"
                :shortestDeliveryTimeZoneCd="cashRegister.shortestDeliveryTimeZoneCd"
                :timeZoneList="cashRegister.deliveryTimeZoneInfo"
                :deliveryBoxInfo="cashRegister.deliveryBoxInfo"
                :rules="rules"
                :getErrorMessage="getErrorMessage"
                @changeDeliveryDate="changeDeliveryDate"
                v-if="
                  (cashRegister.arrivalDateInfo && cashRegister.arrivalDateInfo.length) ||
                    (cashRegister.deliveryTimeZoneInfo && cashRegister.deliveryTimeZoneInfo.length) ||
                    (cashRegister.deliveryBoxInfo && cashRegister.deliveryBoxInfo.length)
                "
              />
              <!-- クーポンのご利用 -->
              <order-coupon id="order-coupon" :cartId="cart.cartId" :receiveType="receiveType" :couponList="cart.couponInfo" />
              <!-- ポイントのご利用 -->
              <order-point
                id="order-point"
                :receiveType="receiveType"
                :val="cashRegister.usePoint"
                :canUsePoint="cashRegister.canUsePoint"
                :totalPrice="total"
                :rules="rules"
                @clickUsePoint="clickUsePoint"
                @applyPoint="applyPoint"
                v-show="showPoint"
              />
              <!-- お支払い方法 -->
              <order-payment
                id="order-payment"
                :receiveType="receiveType"
                :val="orderPayment"
                :displayPaymentMethods="cashRegister.paymentMethods"
                :impossibleReasonInfo="cashRegister.impossibleReasonInfo"
                :displayShoppingCreditMethods="cashRegister.creditMethods"
                :noInterestRate="cashRegister.noInterestRate"
                :rules="rules"
                :getErrorMessage="getErrorMessage"
                @changePaymentType="changePaymentType"
                @changeCardInfo="changeCardInfo"
                @changeShoppingCredit="changeShoppingCredit"
                @changeCsvPayment="changeCsvPayment"
                @changeBankUserName="changeBankUserName"
              />
            </div>
          </div>

          <!-- 購入履歴ボタンおよび各種価格 960px以上 -->
          <div ref="orderRightAreaRef" class="order-btn-area" v-if="$vuetify.breakpoint.mdAndUp">
            <order-action
              :order="orderSummary"
              :nextBtn="{ label: '注文内容確認へ進む' }"
              :prevBtn="{ label: 'カートへ戻る', to: '/ec/cart' }"
              :floatable="true"
              :orderTradeSummary="orderTradeSummary"
              :tradeProducts="tradeProducts"
              :parentElementWidth="orderRightAreaWidth"
              @click:next="toConfirm"
            >
            </order-action>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import OrderStep from '@/components/cart/order/order-step.vue';
import OrderAction, { OrderSummary, OrderTradeSummary } from '@/components/cart/order/order-action.vue';
import OrderReceive, { OrderReciveVal } from '@/components/cart/order/order-receive.vue';
import OrderDeliveryDateTime, { OrderDeliveryVal } from '@/components/cart/order/order-delivery-date-time.vue';
import OrderCoupon from '@/components/cart/order/order-coupon.vue';
import OrderPoint from '@/components/cart/order/order-point.vue';
import OrderPayment, { CardInfo, OrderPaymentVal } from '@/components/cart/order/order-payment.vue';
import { RECEIVE_TYPE, DELIVERY_ADDRESS_TYPE, PAYMENT_TYPE } from '@/constants/order-register-type';
import CartService from '@/logic/cart.service';
import ValidationService from '@/logic/validation.service';
import { CartList } from '@/types/cart-list';
import { RegisterDeliveryTarget } from '@/components/common/delivery-target-form.vue';
import { CashRegisterInfo, CreditCardInfo, DeliveryDivInfo } from '@/types/cash-register-info';
import { ConfirmCreditCardInfo } from '@/store/order';
import { TradeProductItem } from '@/types/trade-product-list';
import AuthService from '@/logic/auth.service';

type DeliveryDateParam = {
  arrivalDate?: string;
  deliveryTimeZoneCd: string;
  useDeliverybox: number;
};

type DeliveryAddressParam = {
  deliveryDivInfo: DeliveryDivInfo;
  newAddressInfo?: {
    lastName: string;
    firstName: string;
    lastNameKana: string;
    firstNameKana: string;
    zipcode: string;
    prefectureId: string;
    addr1: string;
    addr2: string;
    addr3: string;
    phone: string;
    isSave: boolean;
  };
};

type PaymentParam = {
  paymentMethod: number;
  token?: Array<string>;
  cardPaymentMethod?: number;
  cardPaymentCount?: number;
  maskedCreditNumber?: string;
  creditMethod?: number;
  transferSourceHolder?: string;
  paymentDestinationCVS?: string;
};

export default Vue.extend({
  name: 'order-page',
  components: {
    'order-step': OrderStep,
    'order-action': OrderAction,
    'order-receive': OrderReceive,
    'order-delivery-date-time': OrderDeliveryDateTime,
    'order-coupon': OrderCoupon,
    'order-point': OrderPoint,
    'order-payment': OrderPayment
  },
  setup: (_, context) => {
    const { loader, order, authorizer, errorStore, confirmDialogStore } = context.root.$store;
    const state = reactive({
      // カート情報
      cart: {} as CartList,
      // レジ情報
      cashRegister: {} as CashRegisterInfo,
      // 下取り査定商品
      tradeProducts: [] as Array<TradeProductItem>,
      // ----------- コンポーネント値 -----------
      // 合計価格情報
      orderSummary: {} as OrderSummary,
      // 下取り情報
      orderTradeSummary: {} as OrderTradeSummary,
      // 受け取り方法情報
      orderRecive: {} as OrderReciveVal,
      // お届け日情報
      orderDelivery: {} as OrderDeliveryVal,
      // お支払い方法情報
      orderPayment: {} as OrderPaymentVal,
      // ----------- レジ更新パラメータ -----------
      // パターン１（受け取り方法)
      receiveType: '',
      // パターン2（宅配種類)
      deliveryTypeParam: {
        deliveryTypeCd: 0
      },
      // パターン3（お届け日時)
      deliveryDateParam: {
        deliveryTimeZoneCd: '0',
        useDeliverybox: 0
      } as DeliveryDateParam,
      // パターン4（お届け先情報)
      deliveryAddressParam: {
        deliveryDivInfo: { deliveryDiv: 0 }
      } as DeliveryAddressParam,
      // パターン5（利用ポイント)
      pointParam: {
        usePoint: 0
      },
      // パターン6（支払い方法)
      paymentParam: {
        paymentMethod: 0
      } as PaymentParam,
      // パターン7（受け取り店舗)
      shopParam: {
        shopInfo: { shopCd: '' }
      },
      // クレジットカード トークン発行用パラメータ
      creditCardParam: {} as CreditCardInfo,
      // ----------- バリデーション -----------
      form: ref<HTMLFormElement>(),
      // バリデーションルール（確認ボタンが押された際にルールを適用する）
      rules: {
        // 受け取り方法
        receiveType: ref<(Function | boolean | string)[]>([]),
        // 受け取り店舗
        shop: ref<(Function | boolean | string)[]>([]),
        // 宅配種類
        deliveryType: ref<(Function | boolean | string)[]>([]),
        // お届け先情報
        deliveryAddress: ref<(Function | boolean | string)[]>([]),
        // お届け希望日
        deliveryArrivalDate: ref<(Function | boolean | string)[]>([]),
        // お届け希望時間帯
        deliveryArrivalTime: ref<(Function | boolean | string)[]>([]),
        // 宅配ボックス利用
        deliveryBox: ref<(Function | boolean | string)[]>([]),
        // ポイント
        point: ref<(Function | boolean | string)[]>([]),
        // お支払い方法
        paymentType: ref<(Function | boolean | string)[]>([]),
        // クレジットカード
        creditCardCount: ref<(Function | boolean | string)[]>([]),
        creditCardNumber: ref<(Function | boolean | string)[]>([]),
        creditCardMonth: ref<(Function | boolean | string)[]>([]),
        creditCardYear: ref<(Function | boolean | string)[]>([]),
        creditCardCode: ref<(Function | boolean | string)[]>([]),
        // ショッピングクレジット
        shoppingCredit: ref<(Function | boolean | string)[]>([]),
        // ショッピングクレジット
        csv: ref<(Function | boolean | string)[]>([]),
        // 銀行振込先名
        bankUserName: ref<(Function | boolean | string)[]>([])
      },
      // 960px以上表示の際の右側要素（フローティング用）
      orderRightAreaRef: ref<HTMLElement>(),
      orderRightAreaWidth: '100%'
    });

    /**
     * カートを取得する
     */
    const searchCart = async () => {
      try {
        // カート一覧を取得する
        const result = await CartService.searchCartList();
        state.cart = result;

        // 査定情報
        state.tradeProducts = CartService.convertToTradeProducts(state.cart.assessmentInfo || []);
      } catch (error) {
        console.error(error);
      }
    };

    /**
     * レジ情報を取得する
     */
    const fetchCashRegister = async () => {
      loader.routeUnset();
      try {
        const result = await CartService.fetchCashRegisterInfo();
        state.cashRegister = result;
        // 代理アカウントの情報
        order.setProxyAccount(Boolean(state.cashRegister.isProxyAccount));
      } catch (error) {
        console.error(error);
        const errorCode = (error as any).response?.data?.details?.length ? (error as any).response?.data?.details[0].errorCode : '';
        if (errorCode === 'EN003') {
          context.root.$router.push({ name: 'cart-list-page' });
          errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
        }
      } finally {
        loader.routeLoaded();
      }
    };

    /**
     * レジ情報を更新する
     * @param ptnNo 更新パターン
     * @param param リクエストパラメータ
     */
    const updateCashRegister = async (ptnNo: number, param: any) => {
      loader.routeUnset();
      try {
        const reqParam = {
          registerId: state.cashRegister.registerId,
          ptnNo: ptnNo,
          ...param
        };
        await CartService.updateCashRegisterInfo(reqParam);
      } catch (error) {
        loader.routeLoaded();

        if (ptnNo === 6) {
          // 確定時は遷移しないようにエラーをなげる
          throw error;
        } else {
          console.error(error);
          const errorCode = (error as any).response?.data?.details?.length ? (error as any).response?.data?.details[0].errorCode : '';
          if (errorCode === 'EN003') {
            context.root.$router.push({ name: 'cart-list-page' });
            errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
          }
        }
      }
    };

    /**
     * 初期表示
     */
    onMounted(async () => {
      document.title = '【カメラのキタムラ】購入手続き';
      // カート情報を取得する
      await searchCart();

      // カート一覧ページへの遷移：追加商品ない場合
      if (state.cart?.cartItemInfo?.length < 1) {
        context.root.$router.push({ name: 'cart-list-page' });
        errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
        return;
      }

      // レジ情報を取得する
      await fetchCashRegister();

      // カート一覧ページへの遷移：クーポン利用でお支払合計が０円になる場合
      if (
        (!state.cashRegister.totalPrice || state.cashRegister.totalPrice <= 0) &&
        state.cashRegister.discountCoupon > 0 &&
        (!state.cashRegister.usePoint || state.cashRegister.usePoint <= 0) &&
        !state.cart.selectTokutoku
      ) {
        context.root.$router.push({ name: 'cart-list-page' });
        errorStore.errorMessage =
          '値引き額と商品価格が同額になる場合、クーポンはご利用いただけません。クーポンをご利用になる場合はカートに商品を追加してからご購入手続きをお願いいたします。';
        return;
      }
    });

    /** -------------------------------------------------------------
     * 監視対象
     ------------------------------------------------------------- */
    // 各種データを更新
    watch(
      () => [state.cart, state.cashRegister],
      () => {
        // 受け取り方法
        state.receiveType = `${state.cashRegister.receivingMethodDiv}`;
        // サマリーデータ
        state.orderSummary = {
          productCount: state.cart.cartItemInfo.reduce((sum, item) => sum + item.count, 0),
          productPrice: state.cashRegister.productPrice,
          paymentPrice: state.cashRegister.totalPrice,
          pickUpPrice: state.cashRegister.pickUpPrice,
          tax: state.cashRegister.internalTax,
          shippingCharge: state.cashRegister.shippingCharge,
          usePoint: state.cashRegister.usePoint,
          gainedPoint: state.cashRegister.gainedPoint
        };
        // 下取りサマリーデータ
        state.orderTradeSummary = {
          type: state.cart.assessmentCd,
          subTotal: state.cart.upperPrice,
          count: state.cart.assessmentInfo?.length || 0
        };
        // 受け取り方法情報
        state.orderRecive = {
          receivingMethodDiv: state.cashRegister.receivingMethodDiv,
          selectDeliveryTypeCd: state.cashRegister.selectDeliveryTypeCd,
          deliveryDivInfo: state.cashRegister.deliveryDivInfo
        };
        // お届け日情報
        state.orderDelivery = {
          selectArrivalDate: state.cashRegister.selectArrivalDate,
          selectDeliveryTimeZoneCd: state.cashRegister.selectDeliveryTimeZoneCd,
          useDeliverybox: state.cashRegister.useDeliverybox
        };
        // お支払い情報
        state.orderPayment = {
          selectPaymentMethod: state.cashRegister.selectPaymentMethod,
          selectShoppingCredit: state.cashRegister.selectShoppingCredit,
          paymentDestinationCVS: state.cashRegister.paymentDestinationCVS,
          transferSourceHolder: state.cashRegister.transferSourceHolder
        };
      }
    );

    // ハッシュタグで指定されたidまでスクロールする
    watch(
      () => loader.isRouteLoaded,
      (value) => {
        if (value) {
          context.root.$nextTick(() => {
            const hash = context.root.$route.hash;
            if (hash) {
              const offset = context.root.$vuetify.breakpoint.mdAndUp ? 70 : 250;
              context.root.$vuetify.goTo(hash, { offset: offset });
            }
          });
        }
      }
    );

    /**
     * 合計金額（ポイント以外）
     */
    const total = computed(() => {
      const productTotal = state.cashRegister.productPrice || 0;
      const shippingCharge = state.cashRegister.shippingCharge || 0;
      return productTotal + shippingCharge;
    });

    /**
     * ポイント表示
     */
    const showPoint = computed(() => {
      return (state.receiveType === RECEIVE_TYPE.HOME &&
        state.cashRegister.canUsePoint &&
        state.cashRegister.canUsePoint > 0 &&
        state.cashRegister.totalPrice &&
        state.cashRegister.totalPrice > 0) ||
        (state.receiveType === RECEIVE_TYPE.HOME && `${state.cashRegister.selectPaymentMethod}` === PAYMENT_TYPE.T_POINT)
        ? true
        : false;
    });

    /** -------------------------------------------------------------
 * バリデーション関連の設定
 ------------------------------------------------------------- */
    /**
     * 設定しているバリデーションをクリア
     */
    const resetValidation = async () => {
      state.rules = {
        receiveType: [],
        shop: [],
        deliveryType: [],
        deliveryAddress: [],
        deliveryArrivalDate: [],
        deliveryArrivalTime: [],
        deliveryBox: [],
        point: [],
        paymentType: [],
        creditCardCount: [],
        creditCardNumber: [],
        creditCardMonth: [],
        creditCardYear: [],
        creditCardCode: [],
        shoppingCredit: [],
        csv: [],
        bankUserName: []
      };
    };

    /**
     * ポイントのバリデーションの設定
     */
    const setPointValidation = async () => {
      await resetValidation();

      state.rules.point = [
        ValidationService.required('ご利用ポイント'),
        ValidationService.number('ご利用ポイント'),
        ValidationService.point('利用可能ポイント', state.cashRegister.canUsePoint),
        ValidationService.point('合計金額', total.value)
      ];
    };

    /**
     * バリデーションの設定（ポイント以外）
     */
    const setValidation = async () => {
      await resetValidation();

      state.rules.receiveType = [ValidationService.select('受け取り方法')];
      if (state.receiveType === RECEIVE_TYPE.SHOP) {
        state.rules.shop = [ValidationService.select('受け取り店舗')];
      } else if (state.receiveType === RECEIVE_TYPE.HOME) {
        state.rules.deliveryType = [ValidationService.select('宅配の種類')];
        state.rules.deliveryAddress = [ValidationService.select('受取る場所')];
        // お届け希望の日時
        state.rules.deliveryArrivalDate = [ValidationService.required('お届け希望日')];
        state.rules.deliveryArrivalTime = [ValidationService.required('お届け希望時間帯')];
        state.rules.deliveryBox = [ValidationService.deliveryBox('宅配ボックスの利用')];
        // 支払い方法
        state.rules.paymentType = [ValidationService.select('お支払い方法')];
        switch (`${state.paymentParam.paymentMethod}`) {
          case PAYMENT_TYPE.CREDIT_CARD:
            state.rules.creditCardCount = [ValidationService.select('支払い方法')];
            state.rules.creditCardNumber = [ValidationService.number('カード番号'), ValidationService.range('カード番号', 10, 16)];
            state.rules.creditCardMonth = [ValidationService.select('有効期限（月）')];
            state.rules.creditCardYear = [ValidationService.select('有効期限（年）')];
            state.rules.creditCardCode = [ValidationService.number('カード番号'), ValidationService.range('セキュリティコード', 3, 4)];
            break;
          case PAYMENT_TYPE.SHOPPING_CREDIT:
            state.rules.shoppingCredit = [ValidationService.select('ショッピングクレジット')];
            break;
          case PAYMENT_TYPE.CSV:
            state.rules.csv = [ValidationService.select('支払い先コンビニ')];
            break;
          case PAYMENT_TYPE.BANK_TRANSFER:
            state.rules.bankUserName = [ValidationService.required('お客さま名'), ValidationService.kana('お客さま名')];
            break;
          default:
            break;
        }
      }
    };

    /**
     * input要素を取得する
     *
     * @param elementId 要素ID
     */
    const getInputElement = (elementId: string): HTMLFormElement => {
      const inputElement = state.form?.inputs.find((element: HTMLElement) => element.id === elementId);
      return inputElement;
    };

    /**
     * input要素からエラーメッセージを取得する
     *
     * @param elementId 要素ID
     */
    const getErrorMessage = (elementId: string): string => {
      const inputElement = getInputElement(elementId);
      const exitError = inputElement?.errorBucket && inputElement.errorBucket.length;
      return exitError ? inputElement.errorBucket[0] : '';
    };

    /** -------------------------------------------------------------
 * イベント(コンポーネント)
 ------------------------------------------------------------- */
    /**
     * 受け取り方法の更新
     */
    const changeReceiveType = async (type: string) => {
      await updateCashRegister(1, { receivingMethodDiv: +type });
      await fetchCashRegister();
    };

    /**
     * 受け取り店舗の更新
     */
    const changeShop = async (shopCd: string) => {
      state.shopParam.shopInfo.shopCd = shopCd;
      await updateCashRegister(7, state.shopParam);
      await fetchCashRegister();
    };

    /**
     * 宅配種類の更新
     */
    const changeDeliveryType = async (deliveryType: string) => {
      state.deliveryTypeParam.deliveryTypeCd = +deliveryType;
      await updateCashRegister(2, state.deliveryTypeParam);
      await fetchCashRegister();
    };

    /**
     * お届け先情報の更新
     */
    const changeDeliveryAddress = async (addressId: string, newAddress: RegisterDeliveryTarget) => {
      // リセット
      state.deliveryAddressParam = { deliveryDivInfo: { deliveryDiv: 0 } };

      if ([DELIVERY_ADDRESS_TYPE.HOME, DELIVERY_ADDRESS_TYPE.NEW_ADDRESS].includes(addressId)) {
        state.deliveryAddressParam.deliveryDivInfo.deliveryDiv = +addressId as 0 | 2;
      } else {
        state.deliveryAddressParam.deliveryDivInfo = {
          deliveryDiv: +DELIVERY_ADDRESS_TYPE.REGISTERED_ADDRESS as 1,
          delivAddressId: addressId
        };
      }

      if (Object.keys(newAddress).length) {
        state.deliveryAddressParam.newAddressInfo = {
          lastName: newAddress.lastName,
          firstName: newAddress.firstName,
          lastNameKana: newAddress.lastNameKn,
          firstNameKana: newAddress.firstNameKn,
          zipcode: newAddress.zipCode,
          prefectureId: newAddress.prefectureId,
          addr1: newAddress.addr1,
          addr2: newAddress.addr2,
          addr3: newAddress.addr3,
          phone: newAddress.phone,
          isSave: newAddress.save || false
        };
      }

      await updateCashRegister(4, state.deliveryAddressParam);
      await fetchCashRegister();
    };

    /**
     * お届け日時情報の更新
     */
    const changeDeliveryDate = async (deliveryDate: string, deliveryTimeCd: string, useDeliveryBox: number) => {
      state.deliveryDateParam = {
        arrivalDate: deliveryDate,
        deliveryTimeZoneCd: deliveryTimeCd,
        useDeliverybox: useDeliveryBox
      };
      if (deliveryDate === '指定なし') delete state.deliveryDateParam.arrivalDate;
      await updateCashRegister(3, state.deliveryDateParam);
      await fetchCashRegister();
    };

    /**
     * ポイント利用押下
     */
    const clickUsePoint = async (check: boolean) => {
      // チェック解除でポイント利用を0に
      if (!check) {
        state.pointParam.usePoint = 0;
        await updateCashRegister(5, state.pointParam);
        await fetchCashRegister();
      }
    };

    /**
     * 利用ポイントの更新
     */
    const applyPoint = async (point: number) => {
      await setPointValidation();
      if (await state.form?.validate()) {
        state.pointParam.usePoint = point;
        await updateCashRegister(5, state.pointParam);
        await fetchCashRegister();
        state.rules.point = [];
      }
    };

    /**
     * お支払い方法の更新
     */
    const changePaymentType = (type: string) => {
      // リセット
      state.paymentParam = {
        paymentMethod: 0
      };

      // パラメータの設定のみ
      state.paymentParam.paymentMethod = +type;
    };

    /**
     * クレジットカード情報の更新
     */
    const changeCardInfo = (cardInfo: CardInfo) => {
      // トークンパラメーター
      state.creditCardParam = {
        cardno: cardInfo.number,
        expire: cardInfo.expiration,
        securitycode: cardInfo.code
      };

      // レジ更新用パラメーター
      state.paymentParam.cardPaymentMethod = +cardInfo.method;
      if (cardInfo.count) state.paymentParam.cardPaymentCount = cardInfo.count;
    };

    /**
     * ショッピングクレジットの更新
     */
    const changeShoppingCredit = (id: string) => {
      state.paymentParam.creditMethod = +id;
    };

    /**
     * コンビニ決済先の更新
     */
    const changeCsvPayment = (code: string) => {
      state.paymentParam.paymentDestinationCVS = code;
    };

    /**
     * 銀行振込名義の更新
     */
    const changeBankUserName = (name: string) => {
      state.paymentParam.transferSourceHolder = name;
    };

    /**
     * 確認へ進む押下
     */
    const toConfirm = async () => {
      // トクトク交換かつ梱包キット申し込みを希望していない
      if (state.cart.selectTokutoku && state.cashRegister.usePacking === 0) {
        const confirm = await confirmDialogStore.open(
          'トクトク交換の場合、お届け先住所と身分証明書の住所が同一の必要があります。異なる場合は、お届け先の選択をご変更ください。続けますか？'
        );
        if (!confirm) return;
      }

      try {
        // ログインしたままセッションが切れていないか確認し、切れていたら警告してカート一覧に戻す
        await AuthService.checkLoginStatus();
        if (!authorizer.user?.cartItemCount || authorizer.user.cartItemCount < 1) {
          context.root.$router.push({ name: 'cart-list-page' });
          errorStore.errorMessage = '最後に操作してから一定時間が経過したため、カートの情報はクリアされました。';
          return;
        }

        // バリデーションチェック
        await setValidation();
        if (await state.form?.validate()) {
          if (state.receiveType === RECEIVE_TYPE.HOME) {
            // クレジットカード決済処理
            if (`${state.paymentParam.paymentMethod}` === PAYMENT_TYPE.CREDIT_CARD) {
              // トークン取得
              const result = await CartService.getTokenForCreditCard(state.creditCardParam);
              state.paymentParam.token = result.tokenObject.token;
              state.paymentParam.maskedCreditNumber = result.tokenObject.maskedCardNo;

              // クッキーに保存
              const creditCardInfo = {
                cardNo: state.creditCardParam.cardno.slice(-4),
                expiration: `${state.creditCardParam.expire.substr(4, 2)}/${state.creditCardParam.expire.substr(2, 2)}`
              } as ConfirmCreditCardInfo;
              await order.setCreditCardInfo(creditCardInfo);
            }

            // レジ更新
            await updateCashRegister(6, state.paymentParam);
          }

          // 確認ページに遷移
          context.root.$router.push({ name: 'order-confirm-page', query: { step: 'confirm' } });
        } else {
          // バリデーションエラーになったらその項目にスクロールする
          const offset = context.root.$vuetify.breakpoint.mdAndUp ? 120 : 300;
          context.root.$vuetify.goTo('.error--text:first-of-type', { offset: offset });
        }
      } catch (error) {
        console.error(error);
      }
    };

    /** -------------------------------------------------------------
 * フローティング
 ------------------------------------------------------------- */
    // 要素が生成されたことを検知する
    watch(
      () => state.orderRightAreaRef?.clientWidth,
      (width) => {
        state.orderRightAreaWidth = width ? `${width}px` : '100%';
      }
    );

    // 画面のリサイズはwatchでは検知できないので、resizeイベントで更新する
    window.addEventListener('resize', () => {
      state.orderRightAreaWidth = state.orderRightAreaRef ? `${state.orderRightAreaRef.clientWidth}px` : '100%';
    });

    return {
      ...toRefs(state),
      total,
      showPoint,
      changeReceiveType,
      changeDeliveryType,
      changeDeliveryAddress,
      changeDeliveryDate,
      clickUsePoint,
      applyPoint,
      changePaymentType,
      changeShop,
      changeCardInfo,
      changeShoppingCredit,
      changeCsvPayment,
      changeBankUserName,
      toConfirm,
      getErrorMessage
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// ローディング
.loading-order {
  height: 20vh;
  width: 100%;
}

// 960px以上
.container-wide {
  .order-contents-wrap {
    ::v-deep .order-contents {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &-title {
        padding: 0 1em;
        font-size: 21px;
        font-weight: bold;
        line-height: 2;
        border-bottom: solid 2px $ec-primary;
      }

      &-area {
        padding: 20px;
      }

      &-option-area {
        padding: 12px 20px;
        border: solid 5px $ec-light-grey3;
      }

      &-check-area {
        display: flex;
        justify-content: space-between;
      }

      $pc-check-mr: 20px;
      &-checkbox {
        width: calc((100% - #{$pc-check-mr}) / 2);
        margin-top: 0;
        padding: 20px;
        border: solid 1px $ec-light-grey2;

        &:first-child {
          margin-right: $pc-check-mr;
        }

        &.none {
          border: none;

          &.v-input--is-label-active {
            border-color: unset;
            background-color: unset;
          }
        }

        // disabledでのチェック状態
        &.disabled-check {
          .v-input--selection-controls__input .v-icon {
            color: $ec-primary !important;
          }
        }

        &.v-input--is-label-active {
          border-color: $ec-light-grey3;
          background-color: $bg-light-grey3;
        }

        .v-input {
          &__slot {
            margin: 0;
          }
          &--selection-controls__input .v-icon {
            font-size: 30px;
          }
        }
        .v-label {
          display: block;
          margin-left: 12px;
          font-weight: bold;
          color: $ec-black;
        }
        &-sub-label {
          margin-top: 4px;
          font-size: 14px;
          font-weight: normal;
        }
        .v-messages {
          display: none;
        }
      }

      &-error {
        padding: 8px;
        font-size: 12px;
        color: $ec-from-error;
      }
    }
  }
}

// 960px未満
.container-narrow {
  .order-contents-wrap {
    ::v-deep .order-contents {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &-title {
        padding: 0 1em;
        font-size: 21px;
        font-weight: bold;
        line-height: 2;
        border-bottom: solid 2px $ec-primary;
      }

      &-checkbox {
        margin: 0;
        padding: 20px;
        border-bottom: solid 1px $ec-light-grey2;
        &.dashed {
          border-bottom-style: dashed;
        }
        &.none {
          border-bottom: none;
        }

        // disabledでのチェック状態
        &.disabled-check {
          .v-input--selection-controls__input .v-icon {
            color: $ec-primary !important;
          }
        }

        .v-input__slot {
          margin: 0;
        }
        .v-input--selection-controls__input .v-icon {
          font-size: 30px;
        }
        .v-label {
          display: block;
          margin-left: 12px;
          font-weight: bold;
          color: $ec-black;
        }
        &-sub-label {
          margin-top: 4px;
          font-size: 14px;
          font-weight: normal;
        }
        .v-messages {
          display: none;
        }
      }

      &-error {
        padding: 8px 20px 0;
        font-size: 12px;
        color: $ec-from-error;
      }
    }
  }
}

/** -------------------------------
  カート一覧
------------------------------- */
$left-area-width: 70%;

.order {
  // タイトル
  &-page-title {
    font-size: 36px;
    font-weight: bold;
  }

  // レイアウト
  &-main-area {
    width: $left-area-width;
  }
  &-btn-area {
    margin-left: 20px;
    width: calc(100% - #{$left-area-width} - 20px);
  }
}

/** -------------------------------
  カート一覧 960px以下
------------------------------- */
.container-narrow {
  .order {
    // タイトル
    &-page-title {
      font-size: 20px;
    }

    // レイアウト
    &-main-area {
      width: 100%;
    }
    &-btn-area {
      width: 100%;
      margin: 0 0 40px;
      border-bottom: dashed 1px $ec-light-grey2;
    }
  }
}
</style>
