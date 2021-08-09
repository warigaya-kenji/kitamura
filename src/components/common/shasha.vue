<template>
  <div>
    <div class="product-shasha mb-5">
      <v-card class="product-shasha-wrap pa-4 float-left line-height" outlined>
        {{ txt }}<a class="product-shasha-link" :href="href" target="_blank">続きを読む <img :src="src" alt="イメージ" class="product-shasha-img mt-4" /></a>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shasha',
  props: {
    txt: {
      type: String,
    },
    href: {
      type: String,
    },
    src: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.product-shasha {
  &-wrap {
    background: #f8fbd1;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  &-link:hover {
    img {
      opacity: 0.7;
    }
  }
}
</style>