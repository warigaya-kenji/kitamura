<template>
  <div>
    <v-container>
      <v-row class="mt-30 text-center mb-5">
        <v-col cols="6" sm="3" v-for="(kitamuraService, index) in kitamuraServiceList" :key="index">
          <p class="mb-0">{{ kitamuraService.txt }}</p>
          <a :href="kitamuraService.href"><v-img :src="kitamuraService.src" max-width="201" max-height="118" class="hover mx-auto kg-usu"></v-img></a
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'kitamura-service',
  setup: () => {
    const state = reactive({
      kitamuraServiceList: [
        { txt: 'おすすめ', href: '/ec/guide/souryou.html', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/eosr5_r6/pr-01.gif' },
        { txt: '安心', href: '/ec/guide/hoshou', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/eosr5_r6/pr-02.gif' },
        { txt: '選ばれています！', href: '/ec/guide/s_credit_01', src: 'https://shopimg.kitamura.jp/images/banner/4801.png' },
        { txt: 'Tカードでお得', href: 'https://www.kitamura.jp/service/tcard/', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/eosr5_r6/pr-04.gif' },
      ]
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style scoped>
.kg-usu {
    box-shadow: 0 3px 1px 0px rgb(134 134 134 / 60%);
}
</style>