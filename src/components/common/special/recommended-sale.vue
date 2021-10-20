<template>
  <v-container>
    <v-row class="text-center" dense>
      <v-col cols="6" md="3" v-for="(recommendedSale, index) in recommendedSaleList" :key="`feature-${index}`" class="pa-2">
        <a :href="recommendedSale.href" :alt="recommendedSale.alt" :target="recommendedSale.target === 'blank' ? '_blank' : ''"
          ><v-img :src="recommendedSale.img" :alt="recommendedSale.alt" max-width="220px" height="auto" class="hover"></v-img
        ></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'recommendedsale',
  props: {
    recommendedSaleList: {
      type: Array,
      required: true
    }
  }
};
</script>
