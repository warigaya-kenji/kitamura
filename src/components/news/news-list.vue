<template>
  <div>
    <template v-for="item in newsList">
      <v-list-item :key="item.newsNo" class="news-item">
        <a class="news-item-link" :href="item.linkType === 1 ? `${item.linkUrl}` : `/ec/news/detail/${item.newsNo}`" :target="getLinkTarget(item.linkTab)">
          <span class="news-item-date">
            {{ formatDate(item.newsDate) }}
            <span
              class="news-item-type"
              :class="{
                'new-prod-color': item.newsType === 1,
                'recommended-color': item.newsType === 2,
                'sale-color': item.newsType === 3,
                'news-color': [4, 5].includes(item.newsType)
              }"
            >
              {{ convertNewsTypetoText(item.newsType) }}
            </span>
          </span>
          <span class="news-item-title">{{ item.newsTitle }}</span>
        </a>
      </v-list-item>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { News } from '@/types/news';
import { formatDate } from '@/logic/utils';
import { NEWS_TYPE_LIST } from '@/constants/news';

export default Vue.extend({
  name: 'news-list',
  props: {
    newsList: {
      required: true,
      type: Array as PropType<Array<News>>,
      default: []
    }
  },
  setup() {
    const convertNewsTypetoText = (type: number) => {
      return NEWS_TYPE_LIST[type - 1] ? NEWS_TYPE_LIST[type - 1] : '';
    };

    /**
     * リンクを開く際のタブの挙動方法を取得する
     * 1：別タブにする 2：同一タブ内
     */
    function getLinkTarget(linkTab: 1 | 2) {
      return linkTab === 2 ? '_self' : '_blank';
    }

    return {
      formatDate,
      convertNewsTypetoText,
      getLinkTarget
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
// お知らせタイプ
%news-type {
  display: inline-block;
  width: 80px;
  font-weight: normal;
  text-align: center;
  color: $text-white !important;
  border-radius: 5px;

  /* カテゴリで分ける */
  &.new-prod-color {
    background: $new-prod-color;
  }
  &.recommended-color {
    background: $recommended-color;
  }
  &.sale-color {
    background: $sale-color;
  }
  &.news-color {
    background: $news-color;
  }
  &.video-color {
    background: $video-color;
  }
  &.shasha-color {
    background: $shasha-color;
  }
}

/** -------------------------------
  お知らせ一覧 960px以上
------------------------------- */ // お知らせ一覧
.news {
  &-item {
    padding: 0 32px !important;

    &-link {
      display: flex;
    }

    &-date {
      display: inline-block;
      margin-right: 12px;
      flex: 0 0 auto;
    }

    &-type {
      @extend %news-type;
      margin-left: 12px;
    }

    &-title {
      @include ellipsis-lines(1);
      flex: 1 1 auto;
    }
  }
}

/** -------------------------------
  お知らせ一覧 960px未満
------------------------------- */
.container-narrow {
  // お知らせ一覧
  .news {
    &-item {
      padding: 12px !important;
      border-bottom: dashed 1px $ec-grey;

      &-link {
        flex-wrap: wrap;
      }

      &-date {
        display: block;
        margin-right: 0;
        margin-bottom: 12px;
        flex: 0 0 100%;
      }

      &-title {
        @include ellipsis-lines(2);
        flex: 1 1 100%;
      }
    }
  }
}
</style>
