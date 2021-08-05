<template>
  <v-container>
    <v-row>
      <v-col :cols="cols" v-for="(navi, index) in naviList" :key="`navi-${index}`">
        <v-btn elevation="6" block :color="color" class="white--text ma-0" :height="height" :href="navi.herf"
          ><span class="text-h6">{{ navi.naviItem }}</span></v-btn
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
      type: Array,
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
    // style: {
    //   type: String,
    //   default: 'text-h6'
    // }
  }
};
</script>

