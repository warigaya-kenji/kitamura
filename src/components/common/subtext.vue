<template>
  <h2 class="title sbtext">{{ textItem }}</h2>
</template>
<script>
export default {
  name: 'subtitle',
  props: ['textItem']
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
}
</style>