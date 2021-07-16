<template>
  <div class="news-item-card-area">
    <v-card class="card-layout">
      <div class="card-header">
        <div class="float-clear">
          <div
            class="float-left news-type"
            :class="{
              'video-color': item.newsType === '動画',
              'shasha-color': item.newsType === 'ShaSha',
              'recommended-color': item.newsType === 'おすすめ',
              'new-prod-color': item.newsType === '新製品',
              'special-color': item.newsType === '特集',
              'sale-color': item.newsType === 'セール'
            }"
          >
            {{ item.newsType }}
          </div>
          <div class="float-right news-date">{{ formatDate(item.newsDate) }}</div>
        </div>
      </div>
      <hr />
      <div class="card-main">
        <div class="card-thumbnail" v-if="item.newsType === '動画'">
          <iframe id="ytplayer" type="text/html" class="media-size" :src="item.linkUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="card-thumbnail" v-else>
          <a :href="item.linkUrl" :target="getLinkTarget(item.linkTab)" class="ec-link-image">
            <img v-if="item.newsType === '新製品'" class="media-size" @error="noimageNew" :src="item.thumbnailUrl" />
            <img v-else-if="item.newsType === 'おすすめ'" class="media-size" @error="noimageRecommend" :src="item.thumbnailUrl" />
            <img v-else-if="item.newsType === '特集'" class="media-size" @error="noimageTokushu" :src="item.thumbnailUrl" />
            <img v-else-if="item.newsType === 'セール'" class="media-size" @error="noimageSale" :src="item.thumbnailUrl" />
            <img v-else class="media-size" @error="noimage" :src="item.thumbnailUrl" />
          </a>
        </div>
        <div class="card-text">
          <a :href="item.linkUrl" :target="getLinkTarget(item.linkTab)">
            <span>{{ item.newsTitle }}</span>
          </a>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';
import { reactive, toRefs, PropType } from '@vue/composition-api';
import { NewsOnScreen } from '@/types/news';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'news-item',
  components: {},
  props: {
    item: {
      type: Object as PropType<NewsOnScreen>,
      required: true
    }
  },
  setup() {
    const state = reactive({});

    function formatDate(date: Date) {
      return dayjs(date).format('YYYY/MM/DD');
    }

    /**
     * リンクを開く際のタブの挙動方法を取得する
     * 1：別タブにする 2：同一タブ内
     */
    function getLinkTarget(linkTab: 1 | 2) {
      return linkTab === 2 ? '_self' : '_blank';
    }

    /**
     * 新製品の画像がエラーだった場合、NoImageの画像を表示する
     * @param elem
     */
    function noimageNew(elem: any) {
      if (elem) {
        elem.target.src = require('@/assets/news-item/no-image-new.jpg');
      }
    }

    /**
     * 特集の画像がエラーだった場合、NoImageの画像を表示する
     * @param elem
     */
    function noimageTokushu(elem: any) {
      if (elem) {
        elem.target.src = require('@/assets/news-item/no-image-tokushu.jpg');
      }
    }

    /**
     * セールの画像がエラーだった場合、NoImageの画像を表示する
     * @param elem
     */
    function noimageSale(elem: any) {
      if (elem) {
        elem.target.src = require('@/assets/news-item/no-image-sale.jpg');
      }
    }

    /**
     * おすすめの画像がエラーだった場合、NoImageの画像を表示する
     * @param elem
     */
    function noimageRecommend(elem: any) {
      if (elem) {
        elem.target.src = require('@/assets/news-item/no-image-recommend.jpg');
      }
    }

    return {
      ...toRefs(state),
      formatDate,
      getLinkTarget,
      noimage,
      noimageNew,
      noimageTokushu,
      noimageSale,
      noimageRecommend
    };
  }
});
</script>

<style lang="scss" scoped>
.news-item-card-area {
  height: 100%;
}

.float-clear {
  overflow: hidden;
}

.news-type {
  color: $text-white;
  border-radius: 5px;
  width: 90px;
  text-align: center;

  /* カテゴリで分ける */
  &.video-color {
    background: $video-color;
  }
  &.shasha-color {
    background: $shasha-color;
  }
  &.recommended-color {
    background: $recommended-color;
  }
  &.new-prod-color {
    background: $new-prod-color;
  }
  &.special-color {
    background: $special-color;
  }
  &.sale-color {
    background: $sale-color;
  }
}

.card-layout {
  border: 2px solid rgba(183, 178, 178, 1);
  height: 100%;

  .card-header {
    margin: 8px 12px;
  }

  .card-main {
    margin: 12px;

    img {
      object-fit: contain;
    }

    /* 新着情報の画像・動画の表示サイズ */
    .media-size {
      margin: auto;
      max-width: 100%;
      height: 200px;
    }

    // スマホの場合
    @media screen and (max-width: 600px) {
      .media-size {
        margin: auto;
        max-width: 100%;
        height: 100px;
      }
    }
  }

  .card-thumbnail {
    margin: 0 auto;
    text-align: center;

    /* テキスト部分と連動 */
    &:hover + .card-text span {
      color: $text-primary;
    }
  }

  .card-text {
    /* 最大4行まで表示 */
    @include ellipsis-lines(4);
    margin: 5px 0 0 0;
    word-break: break-all;
  }
}
</style>
