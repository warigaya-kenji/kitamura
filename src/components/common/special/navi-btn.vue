<template>
  <v-container class="v-container">
    <v-row>
      <v-col :cols="cols" v-for="(navi, index) in naviList" :key="`navi-${index}`">
        <v-hover v-slot="{ hover }">
          <v-btn block :height="height" :href="navi.href" :elevation="hover ? 12 : 2" :color="hover ? backgroundColor : 'black'"
            ><span class="v-btn-text-color text-h6 font-weight-bold">{{ navi.naviItem }}</span></v-btn
          >
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
      default: 3
    },
    height: {
      type: Number,
      required: false,
      default: 55
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'red darken-4'
    },
  },
  setup: () => {
    const state = reactive({
      activeItem: "",
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
