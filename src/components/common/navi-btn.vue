<template>
  <v-container>
    <v-row>
      <v-col class="mr-0 pr-0" v-for="navi in naviList" :key="navi">
        <v-btn elevation="10" block class="black white--text ma-0 font-weight-bold" :height="height" :href="navi.herf"
          ><span class="v-btn__content">{{ navi.naviItem }}</span></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'naviBtn',
  props: ['naviList', 'height']
};
</script>
