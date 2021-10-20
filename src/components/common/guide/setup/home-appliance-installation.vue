<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-img src="https://shop.kitamura.jp/files/setup/images/img_setup_01.gif" max-width="70%" height="auto"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="text-h6 font-weight-bold mb-2">大型家電設置サービスも<br />キタムラネットショップにおまかせ</p>
        <p class="caption">ご購入商品によって、配線・設置までの流れが異なりますので、下記の項目よりご確認ください。</p>
        <v-row class="text-center caption">
          <v-col cols="3">
            <v-hover v-slot="{ hover }">
              <router-link to="television">
                <v-img :src="`https://shop.kitamura.jp/files/setup/images/btn_01_${hover ? 'on' : 'off'}.gif`" max-width="100%" height="auto"></v-img>
                テレビ
              </router-link>
            </v-hover>
          </v-col>
          <v-col cols="3">
            <v-hover v-slot="{ hover }">
              <router-link to="refrigerator">
                <v-img :src="`https://shop.kitamura.jp/files/setup/images/btn_02_${hover ? 'on' : 'off'}.gif`" max-width="100%" height="auto"></v-img>
                50L以上の<br />冷蔵庫
              </router-link>
            </v-hover>
          </v-col>
          <v-col cols="3">
            <v-hover v-slot="{ hover }">
              <router-link to="washer">
                <v-img :src="`https://shop.kitamura.jp/files/setup/images/btn_03_${hover ? 'on' : 'off'}.gif`" max-width="100%" height="auto"></v-img>
                洗濯機
              </router-link>
            </v-hover>
          </v-col>
          <v-col cols="3">
            <v-hover v-slot="{ hover }">
              <router-link to="air-conditioner">
                <v-img :src="`https://shop.kitamura.jp/files/setup/images/btn_04_${hover ? 'on' : 'off'}.gif`" max-width="100%" height="auto"></v-img>
                エアコン
              </router-link>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'home-appliance-installation',
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>