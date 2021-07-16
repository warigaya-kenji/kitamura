<template>
  <div
    :class="{
      'description-area-wide': $vuetify.breakpoint.mdAndUp,
      'description-area-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <span
      :class="{
        'large-text-wide': $vuetify.breakpoint.mdAndUp,
        'large-text-narrow': $vuetify.breakpoint.smAndDown
      }"
      >商品説明</span
    >
    <div
      class="my-5"
      :class="{
        'ml-5': $vuetify.breakpoint.mdAndUp
      }"
    >
      <div v-html="features" v-if="features"></div>
      <div class="my-5" v-html="specifications" v-if="specifications"></div>
      <div class="my-5" v-html="freeHtml" v-if="freeHtml"></div>
      <div class="my-5" v-if="isUsed">上記の【付属品】はメーカー出荷時の情報です。<br />（中古商品の付属品は「中古商品情報」に記載しています）</div>
      <div class="my-5">
        <div>【商品コード】</div>
        <div class="secondary-link" v-if="isUsed">
          <router-link :to="'/ec/pd/' + janCode">
            <span class="secondary-link-text">{{ janCode }}</span>
          </router-link>
        </div>
        <div v-else>{{ janCode }}</div>
      </div>
      <span v-if="makerLinkUrl">詳細はメーカーサイトでご確認ください。</span>
    </div>
    <v-btn
      :class="{
        'maker-btn': $vuetify.breakpoint.mdAndUp,
        'maker-btn-wide': $vuetify.breakpoint.smAndDown
      }"
      v-if="makerLinkUrl"
      @click="goMakerLink()"
      outlined
      tile
    >
      メーカーサイト
      <v-icon
        :class="{
          'maker-btn-icon': $vuetify.breakpoint.mdAndUp,
          'maker-btn-wide-icon': $vuetify.breakpoint.smAndDown
        }"
        small
        color="rgba(0, 0, 0, 1)"
        >fas fa-chevron-right</v-icon
      >
    </v-btn>

    <div v-if="productHtml">
      <span v-html="productHtml"></span>
    </div>
    <div v-if="templateHtml">
      <span v-html="templateHtml"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import IncludeFileService from '@/logic/include-file.service';

export default Vue.extend({
  name: 'product-description',
  components: {},
  props: {
    // 中古かどうか
    isUsed: {
      required: true,
      type: Boolean
    },
    // JANコード
    janCode: {
      required: true
    },
    // テンプレートID
    templateId: {
      required: true
    },
    // 商品特徴
    features: {
      required: true // 必須かどうか
    },
    // 商品仕様
    specifications: {
      required: true // 必須かどうか
    },
    // フリーHTML
    freeHtml: {
      required: true // 必須かどうか
    },
    // メーカーリンク
    makerLinkUrl: {
      required: true // 必須かどうか
    }
  },
  setup: (props) => {
    const state = reactive({
      productHtml: '' as string,
      templateHtml: '' as string
    });

    if (props.janCode) {
      IncludeFileService.fetchIncludeFile('product_jan/' + props.janCode + '.html')
        .then((result) => {
          state.productHtml = result;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (props.templateId) {
      IncludeFileService.fetchIncludeFile('product/' + props.templateId + '_1.html')
        .then((result) => {
          state.templateHtml = result;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /**
     * メーカーサイトにリンクする
     */
    const goMakerLink = () => {
      window.open(props.makerLinkUrl as string, '_blank');
    };

    return {
      ...toRefs(state),
      goMakerLink
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

/** -------------------------------
  商品説明 960px以上
------------------------------- */
.large-text-wide {
  font-weight: bold;
  font-size: 28px;
  color: rgba(0, 0, 0, 1);
}

.maker-btn {
  position: relative;
  padding: 12px 0 !important;
  width: 300px;
  height: unset !important;

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
  }
}

/** -------------------------------
  商品説明 960px未満
------------------------------- */
.description-area-narrow {
  padding: 0 12px;
}
.large-text-narrow {
  font-size: 18px;
  color: rgba(0, 0, 0, 1);
}

.maker-btn-wide {
  width: 100% !important;
  max-width: unset !important;
  position: relative;

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
  }
}
</style>
