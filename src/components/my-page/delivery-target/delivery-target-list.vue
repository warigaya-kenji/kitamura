<template>
  <div
    id="my-page-delivery-target-list"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs">
      <div class="delivery-target-list">
        <v-btn id="register-delivery-target-btn" tile :to="'/ec/mypage/delivery/entry'" class="delivery-target-btn ec-link-btn">
          <i class="fas fa-plus mr-1"></i>新規追加
        </v-btn>

        <!-- ローディング -->
        <div class="loading-address-list" v-if="!loaded.address">
          <section-loading />
        </div>

        <v-simple-table class="delivery-target-table" v-show="addressList && addressList.length > 0">
          <template v-slot:default>
            <thead>
              <tr class="delivery-target-table-header-area">
                <th>お届け先名</th>
                <th>住所</th>
                <th>電話番号</th>
                <!-- ヘッダー名はないがレイアウト保持のため -->
                <th class="table-header-operation" v-if="$vuetify.breakpoint.mdAndUp"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="address in addressList">
                <tr class="delivery-target-table-body-area" :key="address.delivAddressId">
                  <td class="py-3 secondary-link">
                    <router-link :to="`/ec/mypage/delivery/${address.delivAddressId}`">
                      <span class="secondary-link-text">{{ address.lastName }}&nbsp;{{ address.firstName }}</span>
                    </router-link>
                  </td>
                  <td class="py-3">
                    <div>&#12306;{{ address.zipCode }}</div>
                    <div>{{ address.prefectureName }}{{ address.addr1 }}{{ address.addr2 }}{{ address.addr3 }}</div>
                  </td>
                  <td class="py-3">{{ address.phone }}</td>
                  <td class="table-body-operation py-3" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-btn id="remove-delivery-target-btn" tile class="delivery-target-btn mr-3" @click="removeDeliveryTarget(address)">削除</v-btn>
                    <v-btn id="edit-delivery-target-btn" tile class="delivery-target-btn ec-link-btn" :to="`/ec/mypage/delivery/${address.delivAddressId}`">
                      <i class="far fa-edit mr-1"></i>編集
                    </v-btn>
                  </td>
                </tr>
                <tr :key="address.delivAddressId" v-if="$vuetify.breakpoint.smAndDown">
                  <td colspan="3" class="table-body-operation">
                    <v-btn id="remove-delivery-target-btn" tile class="delivery-target-btn mr-3" @click="removeDeliveryTarget(address)">削除</v-btn>
                    <v-btn id="edit-delivery-target-btn" tile class="delivery-target-btn ec-link-btn" :to="`/ec/mypage/delivery/${address.delivAddressId}`">
                      <i class="far fa-edit mr-1"></i>編集
                    </v-btn>
                  </td>
                </tr>
              </template>
            </tbody>
          </template>
        </v-simple-table>

        <!-- お届け先がない場合 -->
        <div class="not-found-area" v-if="loaded.address && (!addressList || addressList.length < 1)">
          <i class="far fa-home not-found-icon"></i>
          <p>お届け先の登録はありません</p>
        </div>
      </div>
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import UserService from '@/logic/user.service';
import MyPageLayout from '../common/my-page-layout.vue';
import BackButton from '@/components/common/back-button.vue';
import { DeliveryAddressItem } from '@/types/address-list';

export default Vue.extend({
  name: 'delivery-target-list',
  components: {
    'section-loading': SectionLoading,
    'my-page-layout': MyPageLayout,
    'back-button': BackButton
  },
  setup: (props, context) => {
    const { authorizer, confirmDialogStore, errorStore } = context.root.$store;
    const state = reactive({
      // 画面タイトル
      title: 'お届け先確認・変更',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: 'お届け先確認・変更', linkUrl: '' }
      ],
      // ロード状態
      loaded: {
        address: false
      },
      // お届け先
      addressList: [] as Array<DeliveryAddressItem>
    });

    /**
     * お届け先リストを取得
     */
    const fetchAddress = async () => {
      try {
        const resultAddress = await UserService.fetchAddress();
        state.addressList = resultAddress.addrInfo;
      } catch (error) {
        console.error(error);
        state.addressList = [] as Array<DeliveryAddressItem>;
      } finally {
        state.loaded.address = true;
      }
    };

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        fetchAddress();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchAddress();
      }
    );

    // お届け先を削除
    const removeDeliveryTarget = async (address: DeliveryAddressItem) => {
      // 削除確認
      const confirm = await confirmDialogStore.open('削除してよろしいですか？', '削除');
      if (!confirm) {
        return;
      }

      try {
        await UserService.deleteAddress(address.delivAddressId);
        await fetchAddress();
      } catch (error) {
        console.error(error);
      }
    };

    return {
      ...toRefs(state),
      removeDeliveryTarget
    };
  }
});
</script>

<style lang="scss" scoped>
// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

.not-found {
  &-area {
    text-align: center;
  }

  &-icon {
    color: $ec-light-grey;
    font-size: 50px;
    margin-bottom: 4px;
  }
}

/** -------------------------------
  お届け先 960px以上
------------------------------- */
.delivery-target-table {
  margin: 16px 0;
  border: 1px solid $ec-grey;
  border-radius: 0;

  // 列の横幅を均等割り
  ::v-deep table {
    table-layout: fixed;
  }

  &-header-area {
    background-color: $bg-grey;

    th {
      border: none !important;
    }
  }
}

.table {
  &-header-operation {
    width: 200px;
  }
  &-body-operation {
    text-align: end;
  }
}

.v-btn.delivery-target-btn {
  color: $text-black;
}

/** -------------------------------
  お届け先 960px未満
------------------------------- */
.container-narrow {
  .delivery-target-table {
    &-body-area:not(:last-child) td {
      border-bottom-style: dotted !important;
    }
  }
}
</style>
