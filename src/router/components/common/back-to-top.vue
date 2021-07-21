<template>
  <div :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <!-- 960px以上 -->
    <div class="back-to-top" @click="$vuetify.goTo(target)" v-if="$vuetify.breakpoint.mdAndUp">
      <v-icon class="back-to-top-icon">fas fa-chevron-up</v-icon>
      <div class="back-to-top-text">トップへ戻る</div>
    </div>

    <!-- 960px未満 -->
    <div class="back-to-top" v-else>
      <v-btn @click="$vuetify.goTo(target)" fixed bottom>
        <div>
          <v-icon small>fas fa-chevron-up</v-icon>
          <div class="back-to-top-text">トップへ</div>
        </div>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'back-to-top',
  setup: () => {
    const state = reactive({
      target: '#page-top',
      offset: {
        duration: 100,
        offset: 0,
        easing: 'linear'
      }
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  トップへ戻る 960px以上
------------------------------- */
:not(.sp) > .back-to-top {
  border-top: solid 1px rgba(187, 187, 187, 1);
  padding: 8px 0;
  text-align: center;
  cursor: pointer;
}

/** -------------------------------
  トップへ戻る 960px未満
------------------------------- */
.sp > .back-to-top {
  margin-bottom: 50px;

  .back-to-top-text {
    font-size: 12px;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    background-color: white;
    right: 0px;
    width: 94px;
    height: 60px;
    z-index: 110;
  }
}
</style>
