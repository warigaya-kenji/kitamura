<template>
  <a href="/ec/special/general/highly_recommended">
    <v-hover v-slot="{ hover }">
      <v-img :src="hover ? onImage : offImage" max-width="100%" height="auto"></v-img>
    </v-hover>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'title-image',
  setup: () => {
    const state = reactive({
      onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0327/rec_gotop_on.gif',
      offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/highly_recommended/2015/0327/rec_gotop_off.gif'
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
