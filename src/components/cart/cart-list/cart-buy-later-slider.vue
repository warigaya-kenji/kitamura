<template>
  <div>
    <v-sheet class="mx-auto" :class="{ 'font-small': $vuetify.breakpoint.smAndDown }" max-width="100%">
      <v-slide-group show-arrows :class="{ 'pa-1': $vuetify.breakpoint.smAndDown }" v-if="items">
        <v-slide-item v-for="(item, index) in items" :key="index">
          <cart-buy-later-slider-item :product="item" @addCart="addCart(index)" @removeBuyLater="removeBuyLater(index)" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import CartBuyLaterSliderItemVue from './cart-buy-later-slider-item.vue';

export default Vue.extend({
  name: 'cart-buy-later-slider',
  components: {
    'cart-buy-later-slider-item': CartBuyLaterSliderItemVue
  },
  props: {
    items: {
      required: true
    }
  },
  setup: (_, context) => {
    const state = reactive({});

    // カート投入
    const addCart = (index: number) => context.emit('addCart', index);

    // あとで買う商品を削除
    const removeBuyLater = (index: number) => context.emit('removeBuyLater', index);

    return {
      ...toRefs(state),
      addCart,
      removeBuyLater
    };
  }
});
</script>

<style lang="scss" scoped>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}

.font-small {
  font-size: 10px;
}

.button-center {
  text-align: center;
}

.button-text {
  color: white;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
}
</style>
