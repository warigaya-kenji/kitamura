<template>
  <v-container :class="ismb ? 'mb-8' : ''">
    <v-row dense>
      <v-col :cols="cols" :sm="sm" v-for="n in count" :key="n">
        <a :href="`${path}pic_0${n + target}.jpg`">
          <v-img v-if="type === 1" class="mb-1 hover" :src="`${path}pic_0${n + target}s.jpg`" max-width="100%" height="auto" />
          <v-img v-if="type === 2" class="mb-1 hover" :src="`${path}pic_0${n + target}.jpg`" max-width="100%" height="auto" />
        </a>
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
    },
    target: {
      type: Number,
      default: 0
    },
    type: {
      type: Number,
      default: 2
    },
    ismb: {
      type: Boolean,
      default: true
    }
  }
};
</script>