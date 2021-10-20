<template>
  <v-container class="pa-0" fluid>
    <v-row class="text-center" dense>
      <v-col cols="12" sm="4" md="4" v-for="(feature, index) in recommendedFeaturesList" :key="`feature-${index}`" class="pa-2">
        <a :href="feature.href" :alt="feature.alt" :target="feature.target === 'blank' ? '_blank' : ''"
          ><v-img contain :src="feature.img" :alt="feature.alt" max-width="350px" height="auto" class="hover"></v-img
        ></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'recommendedFeatures',
  props: {
    recommendedFeaturesList: {
      type: Array,
      required: true
    }
  }
};
</script>