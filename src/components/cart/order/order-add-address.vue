<template>
  <div class="add-address" :class="{ 'text-right': $vuetify.breakpoint.mdAndUp }">
    <!-- 新しいお届け先を指定ボタン 960px以上 -->
    <v-btn class="add-address-btn" @click="formDialog = true" v-if="$vuetify.breakpoint.mdAndUp">新しいお届け先を指定</v-btn>
    <!-- 新しいお届け先を指定ボタン 960px未満 -->
    <v-btn class="add-address-btn" outlined depressed @click="formDrawer = true" v-if="$vuetify.breakpoint.smAndDown"
      >新しいお届け先を指定<v-icon class="add-address-btn-icon" small>fas fa-chevron-right</v-icon></v-btn
    >

    <!-- 新しいお届け先追加フォームダイアログ 960px以上 -->
    <v-dialog class="add-address-dialog" max-width="1200" v-model="formDialog" v-if="$vuetify.breakpoint.mdAndUp">
      <v-card class="add-address-dialog-main">
        <delivery-target-form :loadedDeliveryTarget="loaded.deliveryTarget" :displaySave="true" @registerAddress="registerAddress" @back="formDialog = false" />
      </v-card>
    </v-dialog>

    <!-- 新しいお届け先追加フォームドロワー 960px未満 -->
    <v-navigation-drawer class="drawer-layout" v-model="formDrawer" fixed right hide-overlay stateless v-if="$vuetify.breakpoint.smAndDown">
      <div class="drawer-layout-wrap">
        <div class="drawer-layout-back" @click="formDrawer = !formDrawer">
          <v-icon class="drawer-layout-back-icon" small>fas fa-chevron-left</v-icon>
          <span class="drawer-layout-back-text">戻る</span>
        </div>
        <div class="drawer-layout-main">
          <delivery-target-form
            :loadedDeliveryTarget="loaded.deliveryTarget"
            :displaySave="true"
            @registerAddress="registerAddress"
            @back="formDrawer = false"
          />
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import DeliveryTargetForm, { RegisterDeliveryTarget } from '@/components/common/delivery-target-form.vue';

export default Vue.extend({
  name: 'order-add-address',
  components: {
    'delivery-target-form': DeliveryTargetForm
  },
  setup: (_, context) => {
    const state = reactive({
      formDialog: false,
      formDrawer: false,
      // ロード状態
      loaded: {
        deliveryTarget: true
      }
    });

    /**
     * 新しいお届け先の追加
     */
    const registerAddress = (deliveryTarget: RegisterDeliveryTarget) => {
      context.emit('addAddress', deliveryTarget);
      state.formDialog = false;
      state.formDrawer = false;
    };

    return {
      ...toRefs(state),
      registerAddress
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  新しいお届け先を指定
------------------------------- */
.container-wide {
  .add-address {
    // 新しいお届け先を指定ボタン
    &-btn {
      width: 256px;
      background-color: $bg-light-grey3;
    }

    // 入力フォーム
    &-dialog {
      z-index: 600;

      &-main {
        padding: 20px;
      }
    }
  }
}
// 入力フォーム
.add-address {
  &-dialog {
    z-index: 600;

    &-main {
      background-color: $bg-white;
      padding: 12px;
    }
  }
}
/** -------------------------------
  新しいお届け先を指定 960px以下
------------------------------- */
.container-narrow {
  .add-address {
    // 新しいお届け先を指定ボタン
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

    // 入力フォーム
    .drawer-layout {
      width: 100% !important;
      z-index: 510;

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
        padding: 8px;
      }
    }
  }
}
</style>
