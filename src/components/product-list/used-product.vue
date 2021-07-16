<template>
  <div class="product" :class="{ sp: $vuetify.breakpoint.smAndDown, hover: isHover }">
    <!-- 960px以上 -->
    <div class="product-area" v-if="$vuetify.breakpoint.mdAndUp">
      <div class="product-img-area" v-on:mouseover="isHover = true" v-on:mouseleave="isHover = false">
        <router-link class="product-link product-img-area-link" :to="`/ec/used/${stateProduct.itemid}`">
          <img class="product-img" contain :src="stateProduct.image" @error="noimage" :alt="stateProduct.title" />
          <div
            class="product-img-cover"
            :class="{ 'comming-soon': stateProduct.n7c === '2', 'sold-out': stateProduct.n7c === '3' }"
            v-if="stateProduct.n7c === '2' || stateProduct.n7c === '3'"
          >
            <span class="product-img-cover-text">{{ convertToStatusText(stateProduct.n7c) }}</span>
          </div>
        </router-link>
      </div>
      <div class="product-l-area">
        <div class="product-maker-name">{{ stateProduct.narrow1 }}</div>
        <router-link class="product-link" :to="`/ec/used/${stateProduct.itemid}`">
          <div class="product-name" v-on:mouseover="isHover = true" v-on:mouseleave="isHover = false">
            <span v-show="isKeyword3">【中古】&emsp;</span>{{ stateProduct.title }}
          </div>
        </router-link>
        <div class="product-price-text">
          <span class="product-price">{{ formatPrice(parseInt(stateProduct.price)) }}円</span>
        </div>
      </div>
      <div class="product-r-area">
        <div class="product-state">
          <span class="product-state-label">状態:</span>
          <span class="product-state-val">{{ USED_STATES.filter((item) => item.value === stateProduct.number1)[0].text }}</span>
        </div>
        <div class="product-note">
          <span class="product-note-label">備考:</span>
          <span class="product-note-val">{{ stateProduct.description }}</span>
        </div>
        <router-link class="product-btn-area" :to="`/ec/list/?type=u&keyword3=${stateProduct.keyword3}`" v-show="!isKeyword3">
          <v-btn class="product-btn" tile outlined color="rgb(0, 0, 0, 1)">
            同型商品を見る
            <v-icon class="product-btn-icon" small color="rgba(216, 11, 36, 1)">fas fa-chevron-right</v-icon>
          </v-btn>
        </router-link>
      </div>
    </div>

    <!-- 960px未満 -->
    <div class="product-area" v-if="$vuetify.breakpoint.smAndDown">
      <div class="product-t-area">
        <div class="product-img-area">
          <router-link class="product-link product-img-area-link" :to="`/ec/used/${stateProduct.itemid}`">
            <img class="product-img" contain :src="stateProduct.image" @error="noimage" :alt="stateProduct.title" />
            <div
              class="product-img-cover"
              :class="{ 'comming-soon': stateProduct.n7c === '2', 'sold-out': stateProduct.n7c === '3' }"
              v-if="stateProduct.n7c === '2' || stateProduct.n7c === '3'"
            >
              <span class="product-img-cover-text">{{ convertToStatusText(stateProduct.n7c) }}</span>
            </div>
          </router-link>
        </div>
        <div class="product-info">
          <div class="product-maker-name">{{ stateProduct.narrow1 }}</div>
          <router-link class="product-link" :to="`/ec/used/${stateProduct.itemid}`">
            <div class="product-name"><span v-show="isKeyword3">【中古】&emsp;</span>{{ stateProduct.title }}</div>
          </router-link>
          <div class="product-price-text">
            <span class="product-price">{{ formatPrice(parseInt(stateProduct.price)) }}円</span>
          </div>
        </div>
      </div>
      <div class="product-b-area">
        <div class="product-state">
          <span class="product-state-label">状態:</span>
          <span class="product-state-val">{{ USED_STATES.filter((item) => item.value === stateProduct.number1)[0].text }}</span>
        </div>
        <div class="product-note">
          <span class="product-note-label">備考:</span>
          <span class="product-note-val">{{ stateProduct.description }}</span>
        </div>
        <router-link class="product-btn-area" :to="`/ec/list/?type=u&keyword3=${stateProduct.keyword3}`" v-show="!isKeyword3">
          <v-btn class="product-btn" tile outlined color="rgb(0, 0, 0, 1)">
            同型商品を見る
            <v-icon class="product-btn-icon" small color="rgba(216, 11, 36, 1)">fas fa-chevron-right</v-icon>
          </v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { ProductItem } from '@/types/product-list';
import { USED_STATES } from '@/constants/used-states';
import { USED_SALES_STATUS } from '@/constants/used-sales-status';
import { noimage, formatPrice } from '@/logic/utils';

export default Vue.extend({
  name: 'product',
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    },
    isKeyword3: {
      type: Boolean,
      required: true
    }
  },
  setup: (props) => {
    const state = reactive({
      stateProduct: props.product as ProductItem,
      // hover style制御用
      isHover: false
    });

    const convertToStatusText = (status: string): string => {
      return USED_SALES_STATUS.filter((item) => item.value === status)[0].text;
    };

    return {
      ...toRefs(state),
      USED_STATES,
      noimage,
      formatPrice,
      convertToStatusText
    };
  }
});
</script>

<style lang="scss" scoped>
$img-area-size: 160px;
$note-area-size: 400px;
$info-marign-r: 12px;
$r-flex: 0 0 auto;
.product {
  flex: 1 1 100%;
  padding: 12px 0;
  border-bottom: solid 1px $ec-grey;

  &:first-child {
    border-top: solid 1px $ec-grey;
  }

  &-area {
    display: flex;
    color: $text-black;
  }

  &.hover {
    .product {
      &-img {
        opacity: 0.75;
      }
      &-name {
        color: $text-primary;
      }
    }
  }

  &-img-area {
    display: flex;
    flex: 0 0 $img-area-size;
    height: $img-area-size;
    margin-right: $info-marign-r;

    &-link {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  &-l-area {
    flex: 1 1 calc(100% - (#{$img-area-size} + #{$note-area-size} + (#{$info-marign-r} * 2)));
    margin-right: $info-marign-r;
  }

  &-r-area {
    flex: 0 0 $note-area-size;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-img {
    width: 100%;
    margin: auto;
    object-fit: contain;
  }

  &-img-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: auto;
    z-index: 2;

    &-text {
      font-size: 18px;
      font-weight: bold;
      color: $text-white !important;
      text-align: center;
    }

    &.comming-soon {
      background: $bg-black-transparent-3;
    }

    &.sold-out {
      background: $bg-black-transparent-6;
    }
  }

  // -l-area
  &-maker-name {
    margin-bottom: 8px;
  }
  &-name {
    @include ellipsis(48px);
    margin-bottom: 8px;
    color: $text-green;
  }
  &-price {
    font-size: 22px;
    color: $text-red;
  }

  // -r-area
  &-state,
  &-note {
    flex: $r-flex;
    display: flex;
    margin-bottom: 8px;

    &-label {
      flex: 0 0 3em;
      align-self: stretch;
    }
    &-val {
      @include ellipsis(48px);
      flex: 0 0 calc(100% - 3em);
      align-self: stretch;
    }
  }
  &-btn-area {
    flex: $r-flex;
    text-decoration: none;
    color: $text-black;
  }
  &-btn {
    position: relative;
    width: 100%;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto;
    }
  }
}
/** -------------------------------
  960px未満
------------------------------- */
$sp-img-area-size: 110px;
.sp {
  &.product {
    padding: 16px 8px;
    background: $bg-white;
    border-bottom: solid 4px $ec-light-grey;

    &:first-child {
      border-top: solid 4px $ec-light-grey;
    }
  }
  .product {
    &-area {
      flex-direction: column;
    }

    &-t-area {
      display: flex;
      flex: 1 1 auto;
      margin-bottom: 8px;
    }

    &-b-area {
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    // -t-area
    &-img-area {
      flex: 0 0 $sp-img-area-size;
      margin-right: $info-marign-r;
    }

    &-info {
      flex: 1 1 calc(100% - (#{$sp-img-area-size} + #{$info-marign-r}));
    }
    &-maker-name {
      font-size: 12px;
      margin-bottom: 4px;
    }
    &-name {
      margin-bottom: 4px;
    }
    &-price {
      font-size: 28px;
    }

    // -b-area&-state,
    &-state,
    &-note {
      font-size: 14px;
      &-val {
        @include ellipsis(38px);
      }
    }
    &-btn-area {
      flex: $r-flex;
      text-decoration: none;
      color: $text-black;
    }
    &-btn {
      font-size: 14px;
    }
  }
}
</style>
