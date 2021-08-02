<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="4" v-for="feature in recommendedFeaturesList" :key="feature" class="ma-0 pa-0">
        <router-link :to="feature.herf"><v-img :src="feature.img" :alt="feature.alt" max-width="100%" height="auto" class="mr-2 mb-2"></v-img></router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'recommendedFeatures',
  props: {
    recommendedFeaturesList: {
      type: Object,
      required: true
    }
  }
};
</script>