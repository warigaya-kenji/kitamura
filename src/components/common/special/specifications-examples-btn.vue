<template>
  <v-container fluid class="pa-0 mt-12">
    <v-row justify="center" no-gutters>
      <v-col cols="12" sm="6">
        <v-hover v-slot="{ hover }">
          <v-btn
            block
            :elevation="hover ? 12 : 2"
            :color="color"
            class="main-product-btn text-subtitle-2 pa-0 including-line-breaks rounded-lg"
            :height="height"
            @click="linkToOtherWindow(url)"
          >
            <span class="white--text text-sm-subtitle-1 w100">{{ btntxt }}</span>
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'specifications-examples-btn',
  components: {},
  props: {
    btntxt: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black darken-4'
    },
    height: {
      type: String,
      default: '90px'
    }
  },
  setup: () => {
    const state = reactive({});

    function linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }

    return {
      ...toRefs(state),
      linkToOtherWindow
    };
  }
});
</script>

<style scoped>
.w100 {
  width: 100%;
}
</style>