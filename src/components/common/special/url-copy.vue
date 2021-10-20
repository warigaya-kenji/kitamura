<template>
  <div>
    <div class="text-right">
      <v-btn
        :color="color"
        height="30px"
        class="white--text body-2 mb-1"
        v-clipboard:copy="`https://shop.kitamura.jp${this.$route.path}`"
        v-clipboard:success="onCopy"
        >≫ このページのURLをコピーする</v-btn
      >
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


