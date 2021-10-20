<template>
  <div>
    <!-- 960px以上 -->
    <div class="newproduct" :style="{ backgroundImage: `url('${pcBackgroundImg}')` }" v-if="$vuetify.breakpoint.mdAndUp && type === 1">
      <h1 class="top-title" :style="styles">
        {{ topTitle }}
        <p :style="styles">{{ topTitleText }}</p>
      </h1>
    </div>

    <div v-if="$vuetify.breakpoint.mdAndUp && type === 2">
      <v-img class="mb-5" :src="pcBackgroundImg" max-width="100%" :height="height" />
    </div>

    <!-- 960px未満 -->
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-img class="mb-5" :src="spBackgroundImg" max-width="100%" height="auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-title-img',
  props: {
    pcBackgroundImg: {
      type: String,
      required: true
    },
    spBackgroundImg: {
      type: String,
      required: false
    },
    topTitle: {
      type: String,
      required: false,
      default: ''
    },
    topTitleText: {
      type: String,
      required: false,
      default: ''
    },
    padding: {},
    textPadding: {},
    titleColor: {},
    textColor: {},
    titleFontsize: {},
    textFontsize: {},
    type: {
      type: Number,
      required: false,
      default: 1
    },
    height: {
      type: String,
      required: false,
      default: '150px'
    }
  },
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        '--padding': this.padding,
        '--titleColor': this.titleColor,
        '--textColor': this.textColor,
        '--textPadding': this.textPadding,
        '--titleFontsize': this.titleFontsize,
        '--textFontsize': this.textFontsize
      };
    }
  }
};
</script>

<style scoped>
.newproduct {
  width: 100%;
  height: 290px;
  margin: 0px 0px 15px 0px;
  padding: 0px 0px 0px 0px;
  background-repeat: no-repeat;
  background-position: top right;
}

h1.top-title {
  /* デフォルトの値を宣言*/
  --padding: 145px 0px 15px 30px;
  --titleColor: #000000;
  --titleFontsize: 115%;

  /* CSS変数をpaddingに割り当て */
  padding: var(--padding);
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  color: var(--titleColor);
  font-size: var(--titleFontsize);
  font-weight: bold;
  white-space: pre-wrap;
  word-wrap: break-word;
}

h1.top-title p {
  /* デフォルトの値を宣言*/
  --textColor: #000000;
  --textPadding: 30px 0px 0px 0px;
  --textFontsize: 90%;

  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: var(--textPadding);
  /* CSS変数をcolorに割り当て */
  color: var(--textColor);
  font-size: var(--textFontsize);;
  font-weight: 400;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>


