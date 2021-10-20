<template>
  <div>
    <div class="product-shasha">
      <v-card class="product-shasha-wrap pa-4 line-height my-2" outlined>
        <span class="text-body-2">{{ txt }}</span>
        <a class="product-shasha-link" :href="href" target="_blank"
          >続きを読む <v-img contain :src="src" alt="イメージ" class="product-shasha-img mt-4 hover"
        /></a>
        <p v-if="txt2 !== ''">{{ txt2 }}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shasha',
  props: {
    txt: {
      type: String
    },
    href: {
      type: String
    },
    src: {
      type: String
    },
    txt2: {
      type: String,
      required: false,
      default: ''
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
}
</style>