<template>
  <div>
    <div v-for="(characteristic, index) in characteristics" :key="`characteristic-${index}`">
      <ul class="point">
        <p class="pttex">
          <span class="bgtypetitle">{{ characteristic.subtitle }}</span>
        </p>
        <li class="pointt including-line-breaks" v-for="content in characteristic.contents" :key="content">
          {{ content }}
        </li>
      </ul>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  name: 'characteristic',
  props: ['characteristics']
};
</script>

<style lang="scss" scoped>
.bgtypetitle {
  background-color: #ffffcc;
}

.point {
  width: 100%;
  float: left;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}

.pttex {
  width: 100%;
  height: auto;
  margin: 10px 0px 8px 0px;
  float: left;
  padding: 0px 0px 0px 0px;
  font-size: 18px;
  font-weight: 800;
}

.pointt {
  width: 100%;
  height: auto;
  margin: 0px 0px 5px 20px;
  float: left;
  padding: 0px 0px 0px 0px;
  list-style-type: square;
  font-size: 14px;
  line-height: 180%;
}
</style>
