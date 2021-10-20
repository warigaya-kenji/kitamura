<template>
  <div class="list-group-head text-center" :class="{ relative: modernBrowserClass, black: bgBlack }">
    {{ title }}
    <v-btn class="list-group-head-icon" text icon @click="toggle()">
      <v-icon>{{ open ? 'fas fa-minus' : 'fas fa-plus' }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { isModernBrowser } from '@/logic/utils';

export default Vue.extend({
  name: 'list-group-head',
  props: {
    title: {
      type: String,
      required: true
    },
    bgBlack: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup: (props, context) => {
    const state = reactive({
      open: true,
      modernBrowserClass: !isModernBrowser()
    });

    /**
     * 開閉処理
     */
    const toggle = () => {
      state.open = !state.open;
      context.emit('toggle');
    };

    return {
      ...toRefs(state),
      toggle
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
$compare-border: solid 1px $ec-light-grey2;

/** -------------------------------
  比較リストのヘッダー 960px以上
------------------------------- */
$head-height: 40px;
$head-height-black: 50px;

.list-group-head {
  position: sticky;
  left: 0;
  width: 100%;
  background: $bg-light-grey2;
  border-top: $compare-border;
  border-bottom: $compare-border;
  line-height: $head-height;

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: $head-height-black;
    height: $head-height;
    color: $ec-grey;
    background: $bg-grey;
    border-left: $compare-border;
    border-radius: 0px;
  }

  &.black {
    color: $text-white;
    background: $bg-black;
    border-top-color: $ec-black;
    border-bottom-color: $ec-black;
    line-height: $head-height-black;

    .list-group-head-icon {
      width: $head-height-black;
      height: $head-height-black;
      color: $text-white;
      background: $bg-black;
      border-left-color: $ec-white;
    }
  }

  // IE一時対応
  &.relative {
    position: relative;
  }
}

/** -------------------------------
  比較リストのヘッダー 960px未満
------------------------------- */
.container-narrow {
  .list-group-head {
  }
}
</style>
