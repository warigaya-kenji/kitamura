<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="n in count" :key="n" cols="12" :sm="sm">
        <v-img :src="`${src}/img_${n + target}.jpg`" :max-width="maxWidth" height="auto" v-if="type === 1" />
        <v-img :src="`${src}/img_0${n + target}.jpg`" :max-width="maxWidth" height="auto" v-else-if="type === 2" />
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
    },
    sm: {
      type: String,
      default: '10'
    },
    target: {
      type: Number,
      required: false,
      default: 0
    },
    maxWidth: {
      type: Number,
      required: false,
      default: 720
    },
    type: {
      type: Number,
      required: false,
      default: 1
    }
  }
};
</script>