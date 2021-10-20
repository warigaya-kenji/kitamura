<template>
  <div class="shooting-information">
    <v-img :src="src" max-width="100%" height="auto"></v-img>
    <p class="mt-1">【撮影機材】{{ photographicEquipment }}</p>
    <p>【撮影情報】{{ shootingInformation }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'shootinginformation',
  components: {},
  props: {
    src: {
      type: String,
      required: true
    },
    photographicEquipment: {
      type: String,
      required: true
    },
    shootingInformation: {
      type: String,
      required: true
    },
  },

});
</script>

<style lang="scss" scoped>
.shooting-information p {
  font-size: 12px;
  line-height: 160%;
  color: #3d3c3c;
  margin: 0px 20px 0px 20px;
  font-weight: 600;
}
</style>
