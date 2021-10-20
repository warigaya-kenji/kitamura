<template>
  <div>
    <h4 class="rounded-lg mb-4">
      <v-hover v-slot="{ hover }">
        <a :href="href" v-if="type === 1">
          <v-btn :elevation="hover ? 0 : 6" block class="intense-red caption text-sm-subtitle-2" :height="height">
            <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ btntxt }}</span
            ><v-icon color="white" class="mx-2" small>{{ iconItem }}</v-icon>
          </v-btn>
        </a>
      </v-hover>
    </h4>
    <div v-if="type === 2" class="text-center pa-3">
      <a :href="href">
        <v-btn
          elevation="4"
          class="caption text-sm-subtitle-1 rounded-lg text-transform"
          :width="$vuetify.breakpoint.smAndDown ? '100%' : width"
          :height="height"
          :color="'#ff0000'"
        >
          <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ btntxt }}</span>
        </v-btn>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'momoBtn',
  props: {
    btntxt: {
      type: String,
      required: false,
      default: '商品一覧を見る'
    },
    href: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: false,
      default: '55px'
    },
    width: {
      type: String,
      required: false,
      default: '447'
    },
    type: {
      type: Number,
      default: 1
    },
    iconItem: {
      type: String,
      required: false,
      default: 'fas fa-chevron-circle-right'
    }
  },
  setup: () => {
    const state = reactive({});

    const linkToOtherWindow = (url: string | undefined) => {
      window.open(url, '_blank');
    };

    return {
      ...toRefs(state),
      linkToOtherWindow
    };
  }
});
</script>

<style scoped>
.intense-red {
  background: rgba(255,131,131,1);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,131,131,1)), to(rgba(255,89,89,1)));
  background: -webkit-linear-gradient(top, rgba(255,131,131,1) 0%, rgba(255,89,89,1) 100%);
  background: linear-gradient(to bottom, rgba(255,131,131,1) 0%, rgba(255,89,89,1) 100%);
}

.intense-red:hover {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255,131,131,1)), to(rgba(255,89,89,1)));
  background: -webkit-linear-gradient(bottom, rgba(255,131,131,1) 0%, rgba(255,89,89,1) 100%);
  background: linear-gradient(to top, rgba(255,131,131,1) 0%, rgba(255,89,89,1) 100%);
}
</style>