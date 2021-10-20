<template>
  <v-container class="v-container">
    <v-row justify="center">
      <v-col :cols="cols" :sm="sm" v-for="(navi, index) in naviList" :key="`navi-${index}`">
        <v-hover v-slot="{ hover }">
          <a v-scroll-to="{ el: navi.href }">
            <v-btn block :height="height" :elevation="hover ? 12 : 2" :color="hover ? hoverColor : color"
              ><span class="v-btn-text-color text-h6">{{ navi.naviItem }}</span></v-btn
            >
          </a>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
export default {
  name: 'naviBtn',
  props: {
    naviList: {
      type: Array,
      required: true
    },
    cols: {
      type: Number,
      required: false,
      default: 6
    },
    sm: {
      type: Number,
      required: false,
      default: 3
    },
    height: {
      type: Number,
      required: false,
      default: 55
    },
    hoverColor: {
      type: String,
      required: false,
      default: 'red darken-4'
    },
    color: {
      type: String,
      required: false,
      default: 'black'
    }
  },
  setup: () => {
    const state = reactive({
      activeItem: ''
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>

 <style lang="scss" scoped>
.v-container {
  a:hover .v-btn-text-color {
    color: $text-white;
  }

  a .v-btn-text-color {
    color: $text-white;
  }
}
</style>
