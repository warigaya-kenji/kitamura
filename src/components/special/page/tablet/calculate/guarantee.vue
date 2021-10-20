<template>
  <v-app>
    <div class="guarantee">
      <div class="main-contents-wrap">
        <h1 class="title-p">５年間保証/下取り 料金シミュレーション</h1>
        <v-sheet color="#f3f3f3" class="py-5 px-4 mt-7">
          <v-container class="pa-0">
            <v-row class="mb-2">
              <!-- ↓ 左ボックス -->
              <v-col>
                <v-sheet outlined class="pt-4 px-2 box">
                  <v-row no-gutters class="mb-4">
                    <v-col cols="4">
                      <v-subheader class="black--text pa-0">商品価格(税込)</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        outlined
                        clearable
                        label="金額入力"
                        color="blue darken-2"
                        dense
                        background-color="white"
                        v-model="inputProductPrice"
                        :error-messages="error"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="2">
                      <v-subheader class="black--text">円</v-subheader>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="4">
                      <v-subheader class="black--text pa-0">下取り価格</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        outlined
                        clearable
                        label="金額入力"
                        color="blue darken-2"
                        dense
                        background-color="white"
                        v-model="inputTradeinPrice"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="2">
                      <v-subheader class="black--text">円</v-subheader>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>

              <!-- ↓ 右矢印 -->
              <v-col cols="1">
                <v-img src="https://shop.kitamura.jp/ts_rsc/243/images/aroww.png" max-width="50" max-height="160"></v-img>
              </v-col>

              <!-- ↓ 右ボックス -->
              <v-col>
                <v-sheet outlined class="pt-4 px-2 box" color="#ffffcc">
                  <v-row no-gutters class="mb-4">
                    <v-col cols="4">
                      <v-subheader class="black--text pa-0">5年間保証金額</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field outlined color="blue darken-2" dense value="" background-color="white" readonly v-model="resultHoshouPrice"></v-text-field
                    ></v-col>
                    <v-col cols="2">
                      <v-subheader class="black--text">円</v-subheader>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="4">
                      <v-subheader class="black--text pa-0">合計金額</v-subheader>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field outlined color="blue darken-2" dense value="" background-color="white" readonly v-model="resultTotalPrice"></v-text-field
                    ></v-col>
                    <v-col cols="2">
                      <v-subheader class="black--text">円</v-subheader>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
          <div align="right">
            <a @click="doCalc">
              <img src="/ec/images2/special/page/tablet/calculate/guarantee/btn_keisan.png" width="75" height="25" class="mr-1" />
            </a>
            <a @click="initialize">
              <img src="/ec/images2/special/page/tablet/calculate/guarantee/btn_clear.png" width="75" height="25" />
            </a>
          </div>
        </v-sheet>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'guarantee',
  components: {
  },
  setup: () => {
    document.title = '５年間保証/下取り 料金シミュレーション | カメラのキタムラネットショップ';
    const state = reactive({
      inputProductPrice: '',
      inputTradeinPrice: '',
      resultHoshouPrice: null as unknown as number,
      resultTotalPrice: null as unknown as number,
      error: ''
    });

    // 計算を行う
    const doCalc = () => {

      if (state.inputProductPrice === '') {
        state.error = '入力してください。'
      } else {

        state.error = ''
        if (state.inputTradeinPrice === '') state.inputTradeinPrice = '0'
        const a = (parseInt(state.inputProductPrice) - parseInt(state.inputTradeinPrice)) * 1.05;// 合計金額
        state.resultTotalPrice = Math.floor(a) // 小数点以下切り捨て
        const b = (parseInt(state.inputProductPrice) - parseInt(state.inputTradeinPrice)) * 0.05;// 保証金額
        state.resultHoshouPrice = Math.floor(b)// 小数点以下切り捨て
      }
    };

    // 初期化
    const initialize = () => {
      state.inputProductPrice = '',
        state.inputTradeinPrice = '',
        state.resultHoshouPrice = null as unknown as number,
        state.resultTotalPrice = null as unknown as number
    }

    return {
      ...toRefs(state),
      doCalc,
      initialize
    };
  }
});
</script>

<style scoped>
.box {
    border: 2px #cccccc solid !important;
    background: #f4f4f4;
}
h1.title-p {
    height: 80px;
    padding: 30px 0px 30px 150px;
    font-size: 30px;
    font-weight: normal;
}
</style>
