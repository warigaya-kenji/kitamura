<template>
  <section>
    <h2 class="text-h6 font-weight-bold mb-4"><v-icon v-if="isGoodIcon" color="red" class="mr-2" left>far fa-thumbs-up</v-icon>{{ subtitle }}</h2>
    <v-container class="pa-0">
      <v-row>
        <v-col v-if="txt" cols="12" :order="order ? 'first' : 'last'">
          <p class="including-line-breaks">{{ txt }}</p>
          <p v-if="smalltxt" class="including-line-breaks text-body-2">{{ smalltxt }}</p>
        </v-col>
        <v-col cols="12" :order="order ? 'last' : 'first'">
          <v-row dense v-if="images">
            <v-col cols="12" :sm="sm" v-for="(image, i) in images" :key="i">
              <v-img :src="image" :max-width="maxWidth" height="auto" class="mx-auto"> </v-img>
              <p v-if="i === 0 && txt2 !== ''" class="including-line-breaks">{{ txt2 }}</p>
            </v-col>
          </v-row>
          <v-img v-if="image" :src="image" :max-width="maxWidth" height="auto"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="youtubeLink">
      <p class="ml-7 caption mb-2">{{ youtubetxt }}</p>
      <v-responsive :aspect-ratio="16 / 9">
        <iframe width="100%" height="100%" :src="youtubeLink" frameborder="0" allowfullscreen></iframe>
      </v-responsive>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'content',
  props: {
    // サブタイトル
    subtitle: {
      type: String,
      required: true
    },
    // good icon を表示するかどうか
    isGoodIcon: {
      type: Boolean,
      default: true
    },
    // テキスト
    txt: {
      type: String,
      default: ''
    },
    // テキスト２
    txt2: {
      type: String,
      default: ''
    },
    // スモールテキスト
    smalltxt: {
      type: String,
      default: ''
    },
    // 画像を一つだけ渡したい時
    image: {
      type: String,
      default: null
    },
    // 画像を複数渡したい時
    images: {
      type: Array,
      default: null
    },
    // 画像のmax width
    maxWidth: {
      type: Number,
      default: 840
    },
    // youtube テキスト
    youtubetxt: {
      type: String,
      default: ''
    },
    // youtube link
    youtubeLink: {
      type: String,
      default: ''
    },
    sm: {
      type: Number,
      default: 6
    },
    order: {
      type: Boolean,
      default: true
    }
  },
});
</script>