<template>
  <div>
    <h4 class="bg-shadow rounded-lg mb-4">
      <a :href="href" v-if="type === 1">
        <v-btn block class="momo caption text-sm-subtitle-2" :height="height">
          <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ btntxt }}</span
          ><v-icon color="white" class="mx-2" small>fas fa-chevron-right</v-icon>
        </v-btn>
      </a>
    </h4>
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
      required: true,
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
    type: {
      type: Number,
      default: 1
    },
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
.momo {
  background: rgba(255, 131, 131);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 131, 131)), to(rgba(255, 91, 91)));
  background: -webkit-linear-gradient(top, rgba(255, 131, 131) 0%, rgba(255, 91, 91) 100%);
  background: linear-gradient(to bottom, rgba(255, 131, 131) 0%, rgba(255, 91, 91) 100%);
}

.momo:hover {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 131, 131)), to(rgba(255, 91, 91)));
  background: -webkit-linear-gradient(bottom, rgba(255, 131, 131) 0%, rgba(255, 91, 91) 100%);
  background: linear-gradient(to top, rgba(255, 131, 131) 0%, rgba(255, 91, 91) 100%);
}

.bg-shadow {
  border: 3px solid #ffffff;
    font-weight: bold;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0px 0px 5px 0 rgb(166 166 166);
}
</style>