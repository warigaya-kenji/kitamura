<template>
  <div v-if="makerList.length" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <v-sheet class="maker-slider mx-auto ec-back-color">
      <v-slide-group class="maker-slider-area" show-arrows>
        <v-slide-item v-for="item in makerList" :key="item.index" class="maker-slider-item">
          <router-link :to="item.linkUrl">
            <img :src="item.imageSrc" class="maker-slider-img" />
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';
import { Maker } from '@/types/tsv-config';
import ProductListConfigsService from '@/logic/tsv/product-list-configs.service';

export default Vue.extend({
  name: 'maker-slider',
  components: {},
  props: {
    categoryCode: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    const state = reactive({
      makerList: [] as Maker[]
    });

    watch(
      () => props.categoryCode,
      (newVal) => {
        ProductListConfigsService.fetchMakers(newVal as string).then((makers) => (state.makerList = makers));
      }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
// 960px以上
.maker-slider {
  margin-bottom: 20px;
  padding: 12px 32px;
  &-item {
    width: 140px;
    position: relative;
    &::before {
      content: '';
      display: block;
      padding-top: calc(120 / 200 * 100%);
    }

    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  &-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
}

// 960px未満
.sp {
  .maker-slider {
    margin-bottom: 0;
    padding: 12px 4px;

    &-item {
      width: 80px;
      flex: 0 0 80px;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
}
</style>

<style>
/* FIXME: 他にいい方法がないか検討 */
/* v-slide-group:矢印のCSSを上書き */
.sp .maker-slider .v-slide-group__next,
.sp .maker-slider .v-slide-group__prev {
  min-width: auto;
}
</style>
