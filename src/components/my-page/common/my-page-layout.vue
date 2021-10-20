<template>
  <div
    id="my-page-layout"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'content-area-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <!-- パンくず -->
      <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />

      <div class="my-page-layout">
        <!-- メニューエリア 960px以上 -->
        <div id="menu-list" class="my-page-layout-menu" v-if="$vuetify.breakpoint.mdAndUp">
          <my-page-menu :requireFetchOwned="requireFetchOwned" :requireFetchCoupon="requireFetchCoupon" />
        </div>

        <!-- マイページエリア -->
        <div id="my-page-contents-area" class="my-page-layout-contents">
          <my-page-title>{{ title }}</my-page-title>

          <!-- ページコンテンツ -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { watch } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import MyPageMenu from '@/components/my-page/common/my-page-menu.vue';
import MyPageTitle from '@/components/my-page/common/my-page-title.vue';

type BreadcrumbItem = {
  path: string;
  linkUrl: string;
};

export default Vue.extend({
  name: 'my-page',
  props: {
    title: {
      required: true,
      type: String
    },
    breadcrumbs: {
      required: true,
      type: Array as PropType<Array<BreadcrumbItem>>,
      default: []
    },
    requireFetchOwned: {
      type: Boolean,
      default: true
    },
    requireFetchCoupon: {
      type: Boolean,
      default: true
    }
  },
  components: {
    breadcrumbs: Breadcrumbs,
    'my-page-menu': MyPageMenu,
    'my-page-title': MyPageTitle
  },
  setup: (props) => {
    // 画面タイトル設定
    document.title = `【カメラのキタムラ】${props.title} | マイページ`;
    watch(
      () => props.title,
      (title) => (document.title = `【カメラのキタムラ】${title} | マイページ`)
    );

    return {};
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */

/** -------------------------------
  マイページ 960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// レイアウト
$search-condition-width: 330px;
$search-condition-mr: 20px;
.my-page-layout {
  display: flex;
  max-width: calc(100vw - 20px);
  margin: 20px 0;
  padding: 0 16px;

  &-menu {
    width: calc(25% - #{$search-condition-mr});
    max-width: $search-condition-width;
    margin-right: $search-condition-mr;
  }

  &-contents {
    width: 75%;
    flex: 1;
  }
}

/** -------------------------------
  マイページ 960px未満
------------------------------- */
.container-narrow {
  // レイアウト
  .my-page-layout {
    display: block;
    margin-top: 8px;
    margin-bottom: 0;
    padding: 0 8px;
    max-width: 100%;

    &-contents {
      display: block;
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
