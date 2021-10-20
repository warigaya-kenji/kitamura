<template>
  <div>
    <h2 class="subtitle my-6" :style="styles" v-if="type === 1">{{ txt }}</h2>
    <h1 class="heading-5 text-subtitle-2 text-sm-h6 mb-4" v-if="type === 2">{{ txt }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'subtitle',
  props: {
    txt: {
      type: String,
      required: true
    },
    fontSize: {},
    type: {
      type: Number,
      required: false,
      default: 1
    }
  },
  computed: {
    // バインドするスタイルを生成
    styles() {
      return {
        '--fontSize': this.fontSize,
      };
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
.subtitle {
  /* デフォルトの値を宣言*/
  --fontSize: 1.167em;
    padding: 9px 15px 6px;
    line-height: 1.2;
    font-weight: bold;
    font-size: var(--fontSize);
    background: url(https://shop.kitamura.jp/common/images/bg_title_04.gif) no-repeat transparent;
}

.heading-5 {
    position: relative;
    padding: .75em 1em .75em 1.5em;
    border: 1px solid #ccc;
}

.heading-5::after {
    position: absolute;
    top: .5em;
    left: .5em;
    content: '';
    width: 6px;
    height: calc(100% - 1em);
    background-color: #068664;
    border-radius: 4px;
}
</style>