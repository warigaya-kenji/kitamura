<template>
  <v-footer id="footer-common" class="footer">
    <!-- 960px以上 -->
    <div class="footer-area-wide" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="footer-contents">
        <back-to-top />
      </div>
      <div class="footer-sns">
        <div class="footer-contents">
          <sns-link />
        </div>
      </div>
      <div class="footer-contents">
        <service-link />
        <product-link />
        <copy-right />
      </div>
    </div>

    <!-- 960px未満 -->
    <div class="footer-area-narrow" v-if="$vuetify.breakpoint.smAndDown">
      <sns-link />
      <service-link />
      <copy-right />
      <back-to-top />
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

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
