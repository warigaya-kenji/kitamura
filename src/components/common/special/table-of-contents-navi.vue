<template>
  <!--↓アンカー-->
  <v-container fluid>
    <ul class="cp_list" :title="title">
      <li v-for="(navi, index) in naviList" :key="index">
        <a v-scroll-to="navi.href">{{ navi.naviItem }}</a>
      </li>
    </ul>
    <div style="clear: both"></div>
  </v-container>
  <!--↑アンカー-->
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'sp-navi-menu',
  components: {},
  props: {
    naviList: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: 'MENU'
    }
  },
  setup: () => {
    const state = reactive({});

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style scoped>
ul.cp_list {
  position: relative;
  padding: 0 0.5em;
  margin-top: 2em;
  list-style-type: none;
  border: solid 2px #00796b;
}

ul.cp_list {
  position: relative;
  padding: 0 0.5em;
  margin-top: 2em;
  list-style-type: none;
  border: solid 2px #00796b;
  font-size: 18px;
  clear: both;
  float: left;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
}

ul.cp_list li {
  line-height: 1.5;
  padding: 0.5em 0 0.5em 1.4em;
  border-bottom: 1px dashed #4db6ac;
  margin-bottom: 2px;
}

ul.cp_list li::before {
  position: absolute;
  content: '\002713';
  color: #00796b;
  font-weight: bold;
  left: 0.5em;
}

ul.cp_list::after {
  position: absolute;
  content: attr(title);
  padding: 10px;
  box-sizing: border-box;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 150%;
  background: #00796b;
  color: #fff;
  bottom: 100%;
  left: -2px;
  border-radius: 4px 4px 0px 0px;
}

ul.cp_list li:last-of-type {
  border-bottom: none;
}

.cp_list li a:link {
  text-decoration: none;
  color: #1122cc;
}

.cp_list li a:hover {
  text-decoration: underline;
  color: red;
}
</style>