<template>
  <v-breadcrumbs :items="breadcrumbs" class="breadcrumbs" :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :href="item.linkUrl">
        <span class="breadcrumbs-text">{{ item.path }}</span>
      </v-breadcrumbs-item>
    </template>
    <template v-slot:divider>
      <v-icon>fas fa-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'breadcrumbs',
  components: {},
  props: {
    breadcrumbs: {
      required: true
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

<style lang="scss" scoped>
.breadcrumbs {
  a:hover .breadcrumbs-text {
    color: inherit;
  }

  a .breadcrumbs-text {
    color: $text-secondary;
  }
}

// 960px未満
.sp.breadcrumbs {
  padding: 8px;
}
</style>
