<template>
  <v-container>
    <v-row>
      <v-col v-for="n in count" :key="n" cols="12">
        <v-img :src="`${src}/img_${n}.jpg`" max-width="100%" height="auto" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'appearance-image',
  props: {
    src: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: false,
      default: 4
    }
  }
};
</script>