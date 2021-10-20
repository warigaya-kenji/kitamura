<template>
  <v-container fluid>
    <v-carousel :height="$vuetify.breakpoint.smAndDown ? '235' : ''" v-if="type === 1">
      <v-carousel-item
        v-for="(carousel, i) in carousels"
        :key="i"
        :src="carousel"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-layout row wrap justify-center v-if="type === 2">
      <v-flex xs12>
        <v-carousel :height="$vuetify.breakpoint.smAndDown ? '235' : ''" hide-delimiters>
          <v-carousel-item v-for="(carousel, i) in carousels" :key="i" :src="carousel.src" reverse-transition="fade-transition" transition="fade-transition">
            <v-container fill-height fluid pa-0 ma-0>
              <v-layout fill-height align-end mb-4>
                <v-flex xs12>
                  <v-card color="rgba(80, 80, 80, 0.75)" class="pa-2">
                    <span class="caption text-sm-body-2 white--text" v-text="carousel.txt"> </span>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'carousels',
  components: {},
  props: {
    carousels: {
      required: true
    },
    type: {
      type: Number,
      required: false,
      default: 1
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
