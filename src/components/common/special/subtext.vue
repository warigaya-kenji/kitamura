<template>
  <div>
    <h2 class="title sbtext">
      {{ textItem }}<span v-if="smallTxt !== ''" class="text-subtitle-2 font-weight-bold">{{ smallTxt }}</span>
    </h2>
    <div style="clear: both"></div>
  </div>
</template>
<script>
export default {
  name: 'subtext',
  props: {
    textItem: {
      type: String,
      required: true
    },
    smallTxt: {
      type: String,
      required: false,
      default: ''
    },
  }
};
</script>
<style scoped>
.sbtext {
  width: 100%;
  height: auto;
  margin: 50px 0px 10px 0px;
  padding: 0px 0px 0px 10px;
  box-sizing: border-box;
  float: left;
  font-size: 20px;
  font-weight: 800;
  background-repeat: no-repeat;
  clear: both;
  color: #151515;
  line-height: 1.3em;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>