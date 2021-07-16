<template>
  <div
    :class="{
      'simple-product-slider': true,
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- 960px以上・未満 兼用 -->
    <v-container class="mx-auto" max-width="100%">
      <v-slide-group v-model="model" show-arrows v-if="items" class="slider-product">
        <v-slide-item v-for="item in items" :key="item.janCode">
          <v-card class="product-item" flat>
            <div class="product-image-area">
              <router-link class="product-link ec-link-image" :to="item.isUsed ? `/ec/used/${item.janCode}` : `/ec/pd/${item.janCode}`">
                <img :src="item.images[0].imagePath" :alt="item.itemName" @error="noimage" contain class="product-image" />
              </router-link>
            </div>
            <router-link class="product-link" :to="item.isUsed ? `/ec/used/${item.janCode}` : `/ec/pd/${item.janCode}`">
              <div class="product-name">{{ item.itemName }}</div>
            </router-link>
            <div class="product-rating">
              <div v-if="$vuetify.breakpoint.mdAndUp && item.ratingTotal && +item.ratingTotal !== 0">
                <v-rating
                  :value="item.ratingTotal"
                  :color="ratingColor ? ratingColor : '#ff8400'"
                  :background-color="ratingColor ? ratingColor : '#ff8400'"
                  half-increments
                  readonly
                  dense
                  small
                  class="product-rating-star"
                ></v-rating>
                <span class="product-rating-value">{{ item.ratingTotal }}</span>
              </div>
            </div>
            <div class="product-price">
              <span>&yen;{{ formatPrice(item.price) }}</span>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'simple-product-slider',
  components: {},
  props: {
    items: {
      required: true // 必須かどうか
    },
    ratingColor: {
      type: String,
      required: false
    }
  },
  setup: () => {
    const state = reactive({
      model: null
    });

    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.simple-product-slider {
  margin: 5px;
}

.slider-product {
  a:hover * {
    color: inherit;
  }

  .product-item {
    margin: 5px 8px;
    width: 200px;
  }

  .product-image-area {
    display: flex;
    margin: auto;
    width: 160px;
    height: 160px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    font-size: 0.8rem;

    /* テキスト部分と連動 */
    &:hover + .product-link .product-name {
      color: $text-primary;
    }
  }

  .product-link {
    width: 100%;
  }

  .product-image {
    width: 100%;
    object-fit: contain;
  }

  .product-name {
    @include ellipsis(3rem);
    margin: 5px auto 2px auto;
    color: $text-secondary;
  }

  .product-rating {
    height: 1.4rem;
    font-size: 0.8rem;
  }

  .product-rating-star {
    display: inline-block;
  }

  .product-rating-value {
    margin-left: 8px;
    padding-top: 4px;
    font-size: 0.9rem;
  }

  .product-price {
    display: inline-block;
    margin: 2px 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
}
/** -------------------------------
  960px未満
------------------------------- */
.container-narrow {
  .slider-product {
    .product-item {
      margin: 5px 8px;
      width: 150px;
    }

    .product-image-area {
      display: flex;
      margin: auto;
      width: 80px;
      height: 80px;
      text-align: center;
      vertical-align: middle;
      align-items: center;
      font-size: 0.6rem;
    }

    .product-link {
      width: 100%;
    }

    .product-image {
      width: 100%;
      object-fit: contain;
    }

    .product-name {
      @include ellipsis(2.4rem);
      margin: 5px auto;
      font-size: 0.8rem;
      color: $text-secondary;
    }

    .product-price {
      display: inline-block;
      width: 100%;
      margin: 2px 0;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
    }
  }
}

.font-small {
  font-size: 10px;
}
</style>

<style>
/* FIXME: 他にいい方法がないか検討 */
/* v-slide-group:矢印のCSSを上書き */
.simple-product-slider.container-narrow .container,
.simple-product-slider.container-narrow .container {
  padding: 0;
}
.simple-product-slider.container-narrow .v-slide-group__next,
.simple-product-slider.container-narrow .v-slide-group__prev {
  min-width: auto;
}
</style>
