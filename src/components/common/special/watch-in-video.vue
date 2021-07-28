<template>
  <!--動画で見る-->
  <div>
    <p class="text-center text-subtitle-2">{{ text }}</p>
    <div class="product-video-wrap text-center">
      <div>
        <iframe
          :width="width"
          :height="height"
          :src="src"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '70%'
    },
    height: {
      type: Number,
      default: 350
    },
    text: {
      type: String,
      require: false
    },
    src: {
      type: String,
      require: true
    }
  }
};
</script>
