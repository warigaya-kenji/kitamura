<template>
  <div :style="{ backgroundImage: `url('${backgroundImg}')` }" class="mt-12">
    <h3 class="ttl tx-i" :id="id" :style="styles">{{ txt }}</h3>
  </div>
</template>

<script>
export default {
  name: 'top-title-img',
  props: {
    txt: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    backgroundImg: {
      type: String,
      required: true
    },
    padding: {},
    color: {},
    rgba1: {},
    rgba2: {}
  },
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        '--padding': this.padding,
        '--color': this.color,
        '--rgba1': this.rgba1,
        '--rgba2': this.rgba2
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.glasses .ttl {
  /* デフォルトの値を宣言*/
  --padding: 25px 0 0 30px;
  --color: #f53770;

  padding: var(--padding);
  color: var(--color);
  margin: 0 0 5px 0;
  height: 105px;
  line-height: 1.2em;
  font-size: 200%;
  letter-spacing: 0.1em;
  text-align: center;
  font-weight: bold;
  width: 100%;
  display: block;
  box-sizing: border-box;
}

@media screen and (max-width: 509px) {
  .glasses .ttl {
    /* デフォルトの値を宣言*/
    --rgba1: 245, 55, 112, 1;
    --rgba2: 249, 129, 165, 1;

    background: linear-gradient(180deg, rgba(var(--rgba1)) 0%, rgba(var(--rgba2)) 100%);
    width: 100%;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    height: auto;
    line-height: 1.2em;
    margin: 0;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>