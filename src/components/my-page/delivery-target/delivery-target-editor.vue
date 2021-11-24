<template>
  <div
    id="my-page-delivery-target-editor"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <delivery-target-form
        :loadedDeliveryTarget="loaded.deliveryTarget"
        :editDeliveryTarget="editDeliveryTarget"
        @registerAddress="registerAddress"
        @back="backToDeliveryList"
      />
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch } from '@vue/composition-api';
import DeliveryTargetForm, { RegisterDeliveryTarget } from '@/components/common/delivery-target-form.vue';
import UserService from '@/logic/user.service';
import MyPageLayout from '../common/my-page-layout.vue';
import BackButton from '@/components/common/back-button.vue';

export default Vue.extend({
  name: 'delivery-target',
  components: {
    'delivery-target-form': DeliveryTargetForm,
    'my-page-layout': MyPageLayout,
    'back-button': BackButton
  },
  setup: (_, context) => {
    const { authorizer, errorStore } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: 'お届け先登録・編集',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: 'お届け先登録・編集', linkUrl: '' }
      ],
      // お届け先ID
      delivAddressId: '',
      // 編集用データ
      editDeliveryTarget: {} as RegisterDeliveryTarget,
      // ロード状態
      loaded: {
        deliveryTarget: true
      }
    });

    // URLからお届け先IDを取得する
    state.delivAddressId = context.root.$route.params.addressId;

    /**
     * お届け先リストを取得
     */
    const fetchAddress = async () => {
      state.loaded.deliveryTarget = false;
      try {
        const resultAddressList = await UserService.fetchAddress();
        const address = resultAddressList.addrInfo.find((adr) => String(adr.delivAddressId) === state.delivAddressId);
        if (address) {
          state.editDeliveryTarget = {
            zipCode: address.zipCode,
            prefectureId: String(address.prefectureId),
            addr1: address.addr1,
            addr2: address.addr2,
            addr3: address.addr3,
            lastName: address.lastName,
            firstName: address.firstName,
            lastNameKn: address.lastNameKn,
            firstNameKn: address.firstNameKn,
            phone: address.phone
          };
        } else if (state.delivAddressId) {
          errorStore.errorMessage = '指定されましたお届け先情報の取得に失敗致しました。再度、お届け先一覧よりお試しください。';
          context.root.$router.push({ name: 'my-page-delivery-list' });
        }
      } catch (error) {
        console.error(error);
        errorStore.errorMessage = '指定されましたお届け先情報の取得に失敗致しました。再度、お届け先一覧よりお試しください。';
        context.root.$router.push({ name: 'my-page-delivery-list' });
      } finally {
        state.loaded.deliveryTarget = true;
      }
    };

    onMounted(() => {
      if (authorizer.isLoggedIn && state.delivAddressId) {
        fetchAddress();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn && state.delivAddressId) fetchAddress();
      }
    );

    /**
     * お届け先の登録
     */
    const registerAddress = async (deliveryTarget: RegisterDeliveryTarget) => {
      state.loaded.deliveryTarget = false;
      try {
        if (state.delivAddressId) {
          await UserService.updateAddress(state.delivAddressId, deliveryTarget);
        } else {
          await UserService.registerAddress(deliveryTarget);
        }

        // 登録が完了したら一覧画面に戻る
        context.root.$router.push({ name: 'my-page-delivery-list' });
      } catch (error) {
        console.log(error);
      } finally {
        state.loaded.deliveryTarget = true;
      }
    };

    /**
     * お届け先一覧へ戻る
     */
    const backToDeliveryList = () => {
      context.root.$router.push({ name: 'my-page-delivery-list' });
    };

    return {
      ...toRefs(state),
      registerAddress,
      backToDeliveryList
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  お届け先 960px以上
------------------------------- */

/** -------------------------------
  お届け先 960px未満
------------------------------- */
.container-narrow {
}
</style>
