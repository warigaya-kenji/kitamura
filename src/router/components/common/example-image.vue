<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" class="ma-0 pa-0" v-for="image in imagesData" :key="image"><img class="mb-5" :src="image" width="90%" /></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'exampleImage',
  props: ['imagesData']
};
</script>