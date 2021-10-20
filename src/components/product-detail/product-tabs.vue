<template>
  <div
    id="product-detail-area"
    :class="{
      'detail-info-area-wide': $vuetify.breakpoint.mdAndUp,
      'detail-info-area-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <template>
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow hide-slider class="tabs" height="auto">
        <v-tab class="tabs-item">
          <v-icon medium class="tabs-item-icon" :class="{ 'mr-1': $vuetify.breakpoint.mdAndUp }">far fa-copy</v-icon>
          <span class="tabs-item-text">全て表示</span>
        </v-tab>
        <v-tab class="tabs-item">
          <v-icon medium class="tabs-item-icon" :class="{ 'mr-1': $vuetify.breakpoint.mdAndUp }">far fa-file-alt</v-icon>
          <span class="tabs-item-text">商品説明</span>
        </v-tab>
        <v-tab class="tabs-item" v-if="product.videoId">
          <v-icon medium class="tabs-item-icon" :class="{ 'mr-1': $vuetify.breakpoint.mdAndUp }">far fa-play-circle</v-icon>
          <span class="tabs-item-text">動画</span>
        </v-tab>
        <v-tab class="tabs-item">
          <v-icon medium class="tabs-item-icon" :class="{ 'mr-1': $vuetify.breakpoint.mdAndUp }">far fa-edit</v-icon>
          <span class="tabs-item-text">レビュー</span>
        </v-tab>
        <v-tab class="tabs-item" href="https://ecfaq.kitamura.jp/s/" target="_blank">
          <v-icon medium class="tabs-item-icon" :class="{ 'mr-1': $vuetify.breakpoint.mdAndUp }">far fa-question-circle</v-icon>
          <span class="tabs-item-text">FAQ</span>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="tab-details">
        <!-- 全て表示 -->
        <v-tab-item class="tab-details-item">
          <v-card flat>
            <product-description
              v-if="product.janCode"
              :isUsed="isUsed"
              :janCode="product.janCode"
              :templateId="product.templateId"
              :features="product.itemFeatures"
              :specifications="product.itemSpecifications"
              :freeHtml="product.freeHtml"
              :makerLinkUrl="product.makerLinkUrl"
            />
            <hr />
            <product-video :videoId="product.videoId" v-if="product.videoId" />
            <hr v-if="product.videoId" />
            <product-reviews :jan-code="product.janCode" :reviewInfo="product.reviewInfo" :ratingTotal="product.ratingTotal" :reviewNum="product.reviewNum" />
          </v-card>
        </v-tab-item>
        <!-- 商品説明 -->
        <v-tab-item class="tab-details-item">
          <v-card flat>
            <product-description
              v-if="product.janCode"
              :isUsed="isUsed"
              :janCode="product.janCode"
              :templateId="product.templateId"
              :features="product.itemFeatures"
              :specifications="product.itemSpecifications"
              :freeHtml="product.freeHtml"
              :makerLinkUrl="product.makerLinkUrl"
            />
          </v-card>
        </v-tab-item>
        <!-- 動画 -->
        <v-tab-item class="tab-details-item" v-if="product.videoId">
          <v-card flat>
            <product-video :videoId="product.videoId" />
          </v-card>
        </v-tab-item>
        <!-- レビュー -->
        <v-tab-item class="tab-details-item">
          <v-card flat>
            <product-reviews :jan-code="product.janCode" :reviewInfo="product.reviewInfo" :ratingTotal="product.ratingTotal" :reviewNum="product.reviewNum" />
          </v-card>
        </v-tab-item>
        <!-- FQA -->
        <v-tab-item class="tab-details-item" href="https://ecfaq.kitamura.jp/s/" target="_blank">
          <v-card flat> FQA </v-card>
          FAQサイトに移動します
        </v-tab-item>
      </v-tabs-items>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, watch } from '@vue/composition-api';
import ProductDescription from '@/components/product-detail/product-description.vue';
import ProductReviews from '@/components/product-detail/product-reviews.vue';
import ProductVideo from '@/components/product-detail/product-video.vue';

export default Vue.extend({
  name: 'product-tabs',
  components: {
    'product-description': ProductDescription,
    'product-reviews': ProductReviews,
    'product-video': ProductVideo
  },
  props: {
    // 中古かどうか
    isUsed: {
      required: true,
      type: Boolean
    },
    // 商品情報
    product: {
      required: true // 必須かどうか
    },
    firstTabNum: {
      type: Number,
      required: false
    }
  },
  setup: (props) => {
    const state = reactive({
      tab: 0
    });

    watch(
      () => props.firstTabNum,
      () => {
        if (props.firstTabNum) state.tab = props.firstTabNum as number;
      }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
.v-tabs > .v-tabs-bar .v-tab {
  border: 1px solid $ec-grey;

  &:not(.v-tab--active),
  &:not(.v-tab--active) .v-icon {
    color: $text-black;
  }

  &.v-tab--active {
    color: $text-white;
    background-color: $ec-red;
    border: 1px solid $ec-red;
  }
}

/** -------------------------------
  タブ 960px以上
------------------------------- */
.detail-info-area-wide {
  width: 100%;
  padding: 10px 50px;

  .tabs {
    &-item {
      padding: 12px 0;
    }
  }
  .tab-details {
    padding-top: 20px;
  }
}

hr {
  margin: 20px 0px;
}

/** -------------------------------
  タブ 960px未満
------------------------------- */
// 商品説明
.detail-info-area-narrow {
  width: 100%;
  padding: 12px 0;

  .tabs {
    &-item {
      display: block;
      width: 20%;
      min-width: unset;
      padding: 8px 4px;
      box-sizing: border-box;

      &-icon {
        display: block;
        margin-bottom: 4px;
      }
      &-text {
        display: block;
        font-size: 14px;
      }
    }
  }
  .tab-details {
    padding-top: 20px;
  }
}
</style>
