<template>
  <div
    v-if="videoId"
    :class="{
      'video-area-wide': $vuetify.breakpoint.mdAndUp,
      'video-area-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'large-text-wide': $vuetify.breakpoint.mdAndUp,
        'large-text-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      動画
    </div>
    <div class="text-center">
      <iframe
        id="product-movie-player"
        type="text/html"
        :width="$vuetify.breakpoint.mdAndUp ? '640' : '100%'"
        :height="$vuetify.breakpoint.mdAndUp ? '360' : '200'"
        :src="getYouTubeUrl(videoId)"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { getYouTubeUrl } from '@/logic/utils';

export default Vue.extend({
  name: 'product-video',
  components: {},
  props: {
    // 動画パス
    videoId: {
      required: true // 必須かどうか
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state),
      getYouTubeUrl
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  商品動画 960px以上
------------------------------- */
.large-text-wide {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 28px;
  color: rgba(0, 0, 0, 1);
}

/** -------------------------------
  商品動画 960px未満
------------------------------- */
.video-area-narrow {
  padding: 0 12px;
}

.large-text-narrow {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}
</style>
