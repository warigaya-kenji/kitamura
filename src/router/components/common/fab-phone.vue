<template>
  <div class="fab-phone">
    <!-- 電話注文 -->
    <a href="tel:050-3116-6308">
      <v-btn class="phone" fixed bottom>
        <div>
          <v-icon small>fas fa-phone</v-icon>
          <div class="phone-text">電話注文</div>
        </div>
      </v-btn>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'fab-phone',
  setup: () => {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.phone {
  margin: 0px 94px 0px 100px;
}
.v-btn .phone-text {
  font-size: 12px;
}
.v-icon {
  transform: rotate(90deg);
}
.v-btn:not(.v-btn--round).v-size--default {
  color: white;
  background-color: rgb(254, 122, 34);
  right: 0px;
  width: 94px;
  height: 60px;
  z-index: 110;

  &:hover * {
    color: white;
  }
}
</style>
