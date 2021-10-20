<template>
  <v-app>
    <div class="ordermade">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <v-container fluid class="w760 feature">
          <p>ココで見つかります！お探しの額縁・フォトフレーム・オーダーメイド額・写真展やインテリア、贈り物に最適な額縁が揃っています</p>
          <v-row class="pa-2">
            <v-col cols="12" sm="6">
              <a href="https://fremia.com/kitamura/" target="blank">
                <v-img
                  src="https://ns-stg.kitamura.shop/ec/images2/special/camera/frame/ordermade/btn_fremia-gaku_02_off.jpg"
                  alt="オーダーメイド額フレミア"
                  max-width="100%"
                  max-height="auto"
                  class="mx-auto"
                ></v-img>
                <p>オーダーメイド額フレミアはコチラから</p></a
              >
            </v-col>
            <v-col cols="12" sm="6">
              <a href="/ec/special/camera/frame">
                <v-img
                  src="https://ns-stg.kitamura.shop/ec/images2/special/camera/frame/ordermade/btn_fremia-gaku_01_off.jpg"
                  alt="見て選ぶ額縁・フォトフレーム"
                  max-width="100%"
                  max-height="auto"
                  class="mx-auto"
                ></v-img>
                <p>見て選ぶ見て探す額フレームコーナーはコチラから</p></a
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';


export default Vue.extend({
  name: 'ordermade',
  components: {
    breadcrumbs: Breadcrumbs,

  },
  setup: (props, context) => {
    document.title = 'オーダーメイド額フレミア | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'オーダーメイド額フレミア。オリジナルのフォトフレームはカメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'オーダーメイド額フレミア',
          disabled: true
        }
      ]
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.w760 {
  max-width: 760px;
  margin: 0 auto;
}

div.feature h2 {
  margin-top: 10px;
  padding-right: 11px;
  padding-left: 10px;
  border-left-width: 6px;
  border-left-style: solid;
  border-right-color: #d6d6d6;
  border-bottom-color: #fff;
  border-left-color: #333;
  font-size: 16pt;
  font-weight: 600;
  margin-right: 0px;
  margin-left: 5px;
  letter-spacing: 2pt;
  padding-top: 7px;
  padding-bottom: 7px;
  color: #333;
}

div.feature h4,
div.feature h5 {
  border-bottom: 3px solid #ed3190;
  border-right-color: #d6d6d6;
  color: #ed3190;
  font-size: 13pt;
  font-weight: 600;
  margin-left: 0;
  margin-right: 15px;
  margin-top: 30px;
  padding-bottom: 5px;
  padding-left: 0;
  padding-right: 10px !important;
}
</style>
