<template>
  <v-container>
    <v-row class="text-center" dense>
      <v-col cols="12" md="4" v-for="(feature, index) in recommendedFeaturesList" :key="`feature-${index}`" class="pa-2">
        <a :href="feature.href"><v-img :src="feature.img" :alt="feature.alt" max-width="100%" height="auto" class="hover"></v-img></a>
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