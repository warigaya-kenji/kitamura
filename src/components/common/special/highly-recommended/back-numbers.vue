<template>
  <div>
    <h2 class="text-h6 white--text font-weight-bold pa-2 red darken-2">カメラ用品バックナンバー</h2>
    <v-container class="pa-0 mt-4">
      <v-row class="pa-2">
        <v-col cols="12" sm="6" v-for="(item, i) in list" :key="i">
          <v-row class="line-g">
            <v-col cols="4">
              <a :href="item.href">
                <v-img :src="item.src" max-width="150" height="auto" class="hover"></v-img>
              </a>
            </v-col>
            <v-col cols="8">
              <h3 class="text-subtitle-1 font-weight-bold">
                <a :href="item.href"> {{ item.productName }} </a>
              </h3>
              <p class="text-body-2 including-line-breaks">
                {{ item.txt }}
              </p>
              <p class="text-right">
                <v-btn text :href="item.href"> 商品を詳しく見る </v-btn>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-btn text href="/ec/special/general/highly_recommended" class="mt-4">
      <v-icon left small color="red">fal fa-long-arrow-right</v-icon>その他バックナンバーを見る
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'back-numbers',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
});
</script>