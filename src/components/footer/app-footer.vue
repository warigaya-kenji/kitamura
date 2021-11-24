<template>
  <v-footer id="footer-common" class="footer">
    <!-- 960px以上 -->
    <div class="footer-area-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="footer-contents">
        <back-to-top />
      </div>
      <div class="footer-sns" v-show="!simpleFooter">
        <div class="footer-contents">
          <sns-link />
        </div>
      </div>
      <div class="footer-contents">
        <service-link v-show="!simpleFooter" />
        <product-link v-show="!simpleFooter" />
        <copy-right :simpleFooter="simpleFooter" />
      </div>
    </div>

    <!-- 960px未満 -->
    <div class="footer-area-narrow" v-if="$vuetify.breakpoint.smAndDown">
      <sns-link v-show="!simpleFooter" />
      <service-link v-show="!simpleFooter" />
      <copy-right :simpleFooter="simpleFooter" />
      <back-to-top />
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';

import BackToTop from '@/components/common/back-to-top.vue';
import SnsLink from '@/components/footer/sns-link.vue';
import ServiceLink from '@/components/footer/service-link.vue';
import ProductLink from '@/components/footer/product-link.vue';
import CopyRight from '@/components/footer/copyright.vue';

export default Vue.extend({
  name: 'app-footer',
  components: {
    'back-to-top': BackToTop,
    'sns-link': SnsLink,
    'service-link': ServiceLink,
    'product-link': ProductLink,
    'copy-right': CopyRight
  },
  setup: (_, context) => {
    const state = reactive({
      simpleFooter: false
    });

    watch(
      () => context.root.$route.meta,
      () => {
        const meta = context.root.$route.meta;
        state.simpleFooter = meta?.simpleFooter != null ? meta.simpleFooter : false;
      },
      { immediate: true }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.footer {
  padding: 12px 0 0 0;
  width: 100%;
  background-color: #fff !important;
}

.footer-contents {
  margin: $ec-contents-margin;
  max-width: $ec-contents-max-width;
}

.footer-area-wide {
  margin: auto;
  width: 100%;
}

.footer-area-narrow {
  width: 100%;
  margin: 10px auto;
}

.footer-sns {
  padding: 12px 0;
  background-color: $bg-light-grey2;
  border-top: 1px solid #bbb;
}
</style>
