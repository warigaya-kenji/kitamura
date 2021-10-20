<template>
  <!--動画で見る-->
  <v-container fluid>
    <v-row justify="center" align-content="center" v-if="type === 1">
      <v-col cols="12" :sm="sm">
        <div class="product-video-wrap">
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
      </v-col>
    </v-row>

    <v-row v-if="type === 2">
      <v-col cols="12" :sm="sm" v-for="(src, index) in srcList" :key="index">
        <div class="product-video-wrap">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: Number,
      default: 350
    },
    src: {
      type: String,
      require: true
    },
    sm: {
      type: Number,
      default: 8
    },
    type: {
      type: Number,
      default: 1
    },
    srcList: {
      type: Array,
      required: false
    }
  }
};
</script>
