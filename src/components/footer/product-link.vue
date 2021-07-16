<template>
  <div class="product-link">
    <div class="product-link-area">
      <div class="d-flex flex-row">
        <div class="d-flex flex-column">
          <div v-for="categoryLink in usedLinks" :key="categoryLink.categoryName">
            <div class="d-flex flex-row">
              <router-link :to="categoryLink.url">
                {{ categoryLink.categoryName }}
              </router-link>
              <span class="px-1">(</span>
              <div v-for="link in categoryLink.makers" :key="link.makerName">
                <router-link :to="link.url" class="pr-2">
                  {{ link.makerName }}
                </router-link>
              </div>
              <span>)</span>
            </div>
          </div>
          <div v-for="(links, index) in otherLinks" :key="index">
            <div class="d-flex flex-row">
              <div v-for="categoryLink in links" :key="categoryLink.categoryName">
                <router-link :to="categoryLink.url" class="pr-2">
                  {{ categoryLink.categoryName }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FREQUENTLY_USED_LINKS, FREQUENTLY_USED_OTHER_LINKS } from '@/constants/frequently-used-links';

export default Vue.extend({
  name: 'product-link',
  setup: () => {
    return {
      usedLinks: FREQUENTLY_USED_LINKS,
      otherLinks: FREQUENTLY_USED_OTHER_LINKS
    };
  }
});
</script>

<style lang="scss" scoped>
.product-link {
  margin: auto;
}

.product-link-area {
  max-width: 1000px;
  margin: auto;
  font-size: 12px;

  a {
    color: $text-secondary;
  }

  a:hover {
    font-weight: bold;
  }
}

v-divider {
  color: #dbdbdb;
}

hr {
  border-top: 1px dashed #dbdbdb;
  margin: 4px 0px;
}
</style>
