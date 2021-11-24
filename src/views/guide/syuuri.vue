<template>
  <v-app>
    <div class="syuuri">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-img src="/ec/images2/guide/syuuri/title_syuuri_top.gif" max-width="100%" height="auto" alt="修理のご案内"></v-img>

        <div class="w760 text-subtitle-2">
          <p class="mt-6">
            カメラのキタムラネットショップでは、 店舗とオンラインの二つの修理窓口をご用意させていただいております。 お好きな方のボタンを押して、お進み下さい。
          </p>

          <v-row class="mb-8">
            <v-col cols="12" sm="6" md="6">
              <router-link to="/ec/guide/syuuri/tenpo">
                <v-img src="/ec/images2/guide/syuuri/img_shop.gif" max-width="auto" height="auto"></v-img>
              </router-link>
              <p class="mt-2">【対象製品】</p>
              <v-row no-gutters>
                <v-col cols="2" v-for="(product, index) in products" :key="index">
                  <v-img :src="product" max-width="100%" height="auto"></v-img>
                </v-col>
              </v-row>
              <p class="mt-2 mb-10 caption h60">コンパクトデジカメ／一眼デジカメ／ ビデオカメラ／レンズ系／フィルムカメラ／プリンター</p>

              <router-link to="/ec/guide/syuuri/tenpo">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img src="/ec/images2/guide/syuuri/btn_shop.gif" max-width="340px" max-height="60px"></v-img>
                </div>
              </router-link>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <router-link to="/ec/guide/syuuri/online">
                <v-img src="/ec/images2/guide/syuuri/img_online.gif" max-width="auto" height="auto" alt="近くのお店で修理受付する"></v-img>
              </router-link>
              <p class="mt-2">【対象製品】</p>
              <v-row no-gutters>
                <v-col cols="2" v-for="(product, index) in products2" :key="index">
                  <v-img :src="product" max-width="100%" height="auto"></v-img>
                </v-col>
              </v-row>
              <p class="mt-2 mb-10 caption h60">
                コンパクトデジカメ／一眼デジカメ／ ビデオカメラ／レンズ系／フィルムカメラ※中古カメラの修理はお店での受付となります<br />保証修理について詳しくは<a
                  href="https://ecfaq.kitamura.jp/s/#faq30"
                  >コチラ</a
                >
              </p>

              <router-link to="/ec/guide/syuuri/online">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img src="/ec/images2/guide/syuuri/btn_online.gif" max-width="340px" max-height="60px" alt="ネットで受付ご希望の方はコチラ"></v-img>
                </div>
              </router-link>
            </v-col>
          </v-row>
          <userguide />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import Userguide from '@/components/common/guide/user-guide.vue';
export default Vue.extend({
  name: 'syuuri',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = '修理のご案内｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '修理のご案内',
          disabled: true
        }
      ],
      products: ['/ec/images2/guide/syuuri/img_condegi.jpg', '/ec/images2/guide/syuuri/img_degiichi.jpg', '/ec/images2/guide/syuuri/img_videocamera.jpg', '	/ec/images2/guide/syuuri/img_lens.jpg', '/ec/images2/guide/syuuri/img_printer.jpg'],
      products2: ['/ec/images2/guide/syuuri/img_condegi.jpg', '/ec/images2/guide/syuuri/img_degiichi.jpg', '/ec/images2/guide/syuuri/img_videocamera.jpg', '	/ec/images2/guide/syuuri/img_lens.jpg']

    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style scoped>
.h60 {
  height: 60px;
}

</style>