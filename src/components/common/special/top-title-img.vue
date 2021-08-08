<template>
  <div>
    <!-- 960px以上 -->
    <div class="newproduct" :style="{ backgroundImage: `url('${pcBackgroundImg}')` }" v-if="$vuetify.breakpoint.mdAndUp">
      <h1 class="top-title" :style="styles">
        {{ topTitle }}
        <p>{{ topTitleText }}</p>
      </h1>
    </div>

    <!-- 960px未満 -->
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-img class="mb-5" src="https://shop.kitamura.jp/ts_rsc/1354/images/sp_img_top.jpg" max-width="100%" height="auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-title-img',
  props: {
    pcBackgroundImg: {
      type: String,
      required: true,
    },
    spBackgroundImg: {
      type: String,
      required: false,
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
  },
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        '--padding': this.padding,
      }
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
    /* background-position: top right; */
}

h1.top-title {
  /* デフォルトの値を宣言*/
  --padding: 145px 0px 15px 30px;
  /* CSS変数をpaddingに割り当て */
    padding: var(--padding);
    width: 100%;
    box-sizing: border-box;
    height: auto;
    margin: 0px 0px 0px 0px;
    color: #000000;
    font-size: 115%;
    font-weight: bold;
}

h1.top-title p {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 30px 0px 0px 0px;
  color: #000000;
  font-size: 100%;
  font-weight: 400;
  white-space:pre-wrap; word-wrap:break-word;
}
</style>


