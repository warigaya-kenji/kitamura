<template>
  <div>
    <a :href="href" v-if="type === 1">
      <v-hover v-slot="{ hover }">
        <v-btn
          :elevation="hover ? 2 : 8"
          block
          :class="btnColor === 'orange' ? 'orange-btn rounded-lg' : btnColor === 'yellowish' ? 'soft-yellowish-red rounded-lg' : ''"
          :height="height"
        >
          <span class="white--text text-subtitle-1">{{ btntxt }}</span
          ><v-icon color="white" class="mx-2">fas fa-chevron-right</v-icon>
        </v-btn>
      </v-hover>
    </a>
    <div v-if="type === 2">
      <v-hover v-slot="{ hover }">
        <v-btn
          :elevation="hover ? 2 : 8"
          block
          :class="btnColor === 'orange' ? 'orange-btn rounded-lg' : btnColor === 'yellowish' ? 'soft-yellowish-red rounded-lg' : ''"
          :height="height"
          @click="linkToOtherWindow(href)"
        >
          <span class="white--text text-subtitle-1">{{ btntxt }}</span
          ><v-icon v-if="icon" color="white" class="mx-2">fas fa-external-link-alt</v-icon>
        </v-btn>
      </v-hover>
    </div>
    <h4 class="rounded-lg mb-4" v-if="type === 3">
      <v-hover v-slot="{ hover }">
        <a :href="href">
          <v-btn :elevation="hover ? 0 : 6" block class="bright-orange caption text-sm-subtitle-2 text-transform" :height="height">
            <span :class="$vuetify.breakpoint.smAndDown ? 'white--text including-line-breaks' : 'white--text'">{{ btntxt }}</span
            ><v-icon v-if="icon" color="white" class="mx-2" small>{{ iconItem }}</v-icon>
          </v-btn>
        </a>
      </v-hover>
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'orangeBtn',
  props: {
    btntxt: {
      type: String,
      required: false,
      default: '商品詳細を見る'
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
    btnColor: {
      type: String,
      required: false,
      default: 'orange'
    },
    icon: {
      type: Boolean,
      required: false,
      default: true
    },
    iconItem: {
      type: String,
      required: false,
      default: 'fas fa-chevron-right'
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
.orange-btn {
  background: rgba(255, 163, 59, 1);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 163, 59, 1)), to(rgba(255, 94, 0, 1)));
  background: -webkit-linear-gradient(top, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
  background: linear-gradient(to bottom, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
}

.orange-btn:hover {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 163, 59, 1)), to(rgba(255, 94, 0, 1)));
  background: -webkit-linear-gradient(bottom, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
  background: linear-gradient(to top, rgba(255, 163, 59, 1) 0%, rgba(255, 94, 0, 1) 100%);
}

.soft-yellowish-red {
   background: rgba(245,118,84,1);
  background: -webkit-gradient(linear, left top, right bottom, from(rgba(245,118,84,1)), to(rgba(245,174,84,1)));
  background: -webkit-linear-gradient(left, rgba(245,118,84,1) 0%, rgba(245,174,84,1) 100%);
  background: linear-gradient(to right, rgba(245,118,84,1) 0%, rgba(245,174,84,1) 100%);
}

.soft-yellowish-red:hover {
   background: -webkit-gradient(linear, right bottom, left top, from(rgba(245,118,84,1)), to(rgba(245,174,84,1)));
  background: -webkit-linear-gradient(right, rgba(245,118,84,1) 0%, rgba(245,174,84,1) 100%);
  background: linear-gradient(to left, rgba(245,118,84,1) 0%, rgba(245,174,84,1) 100%);
}

.bright-orange {
  background: rgba(255, 190, 131);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 190, 131)), to(rgba(255, 143, 90)));
  background: -webkit-linear-gradient(top, rgba(255, 190, 131) 0%, rgba(255, 143, 90) 100%);
  background: linear-gradient(to bottom, rgba(255, 190, 131) 0%, rgba(255, 143, 90) 100%);
}

.bright-orange:hover {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 190, 131)), to(rgba(255, 143, 90)));
  background: -webkit-linear-gradient(bottom, rgba(255, 190, 131) 0%, rgba(255, 143, 90) 100%);
  background: linear-gradient(to top, rgba(255, 190, 131) 0%, rgba(255, 143, 90) 100%);
}

</style>