<template>
  <div>
    <div class="product-shasha mb-5">
      <v-card class="product-shasha-wrap pa-4" outlined>
        <v-card-text class="black--text">
          {{ shashaData.text
          }}<a class="product-shasha-link" :href="shashaData.herf" target="_blank"
            >続きを読む <img :src="shashaData.src" alt="イメージ" class="product-shasha-img mt-4"
          /></a>
        </v-card-text>
      </v-card>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'shasha',
  props: ['shashaData']
};
</script>

<style lang="scss" scoped>
.product-shasha {
  &-wrap {
    background: #f8fbd1;
  }
  &-link:hover {
    img {
      opacity: 0.7;
    }
  }
}
</style>