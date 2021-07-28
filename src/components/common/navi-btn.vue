<template>
  <v-container>
    <v-row>
      <v-col :cols="cols" class="mr-0 pr-0" v-for="navi in naviList" :key="navi">
        <v-btn elevation="10" block :color="color" class="white--text ma-0 font-weight-bold" :height="height" :href="navi.herf"
          ><span class="v-btn__content">{{ navi.naviItem }}</span></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'naviBtn',
  props: {
    naviList: {
      type: Object,
      required: true
    },
    cols: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default: 55
    },
    color: {
      type: String,
      default: 'black'
    }
  }
};
</script>

