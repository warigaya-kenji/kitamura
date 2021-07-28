<template>
  <v-container>
    <v-row>
      <v-col :cols="cols" :sm="sm" class="ma-0 pa-0" v-for="n in count" :key="n">
        <a :href="`${path}pic_0${n}.jpg`"><img class="mb-5" :src="`${path}pic_0${n}.jpg`" width="90%" /></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'exampleImage',
  props: {
    path: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    cols: {
      type: Number,
      default: 12
    },
    sm: {
      type: Number,
      default: 6
    }
  }
};
</script>