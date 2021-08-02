<template>
  <div>
    <div class="text-right">
      <v-btn :color="color" class="white--text body-2 mb-1" v-clipboard:copy="url" v-clipboard:success="onCopy">≫ このページのURLをコピーする</v-btn>
      <p class="caption">
        <a href="/special/sale-fair/page/bookmark/" target="_blank"> (?)ブラウザ別 お気に入り・ブックマーク登録方法</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'urlCopy',
  props: {
    url: {
      type: String,
      require: true
    },
    color: {
      type: String,
      default: 'red darken-2'
    }
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    }
  }
};
</script>


