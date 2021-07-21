<template>
  <v-container>
    <v-row class="col-sm-12 text-center">
      <v-col xs="12" md="4" class="col-sm-4 p-2" v-for="feature in recommendedFeaturesList" :key="feature">
        <a :href="feature.herf"><img :src="feature.img" width="100%" :alt="feature.alt" /></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'recommendedFeatures',
  props: ['recommendedFeaturesList']
};
</script>