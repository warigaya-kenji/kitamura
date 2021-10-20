<template>
  <div
    id="newer-product-slider"
    class="ec-back-color"
    :class="{
      'content-area-outer-wide': $vuetify.breakpoint.mdAndUp,
      'content-area-outer-narrow full-width': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'content-wide': $vuetify.breakpoint.mdAndUp,
        'content-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <span
        class="content-title"
        :class="{
          'content-title-large': $vuetify.breakpoint.mdAndUp,
          'content-title-small': $vuetify.breakpoint.smAndDown
        }"
      >
        新入荷情報
      </span>

      <v-sheet class="mx-auto newer-product-slider">
        <v-slide-group show-arrows v-if="loaded.products">
          <v-slide-item v-for="item in productList" :key="item.jan_code">
            <v-card class="newer-product-slider-area" flat>
              <router-link class="newer-product-slider-link ec-link-image" :to="`/ec/used/${item.itemid}`">
                <div class="newer-product-slider-img-area">
                  <img class="newer-product-slider-img" @error="noimage" contain :src="item.image" />
                </div>
                <div class="newer-product-slider-name">
                  <span>{{ item.title }}</span>
                </div>
              </router-link>
              <div class="newer-product-slider-price">
                <span>&yen;{{ Number(item.price) | price() }}</span>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <!-- ローディング -->
        <div class="newer-product-slider-loading-area" v-else>
          <section-loading />
        </div>
      </v-sheet>

      <!-- 960px以上 -->
      <div class="mx-2 d-none d-md-block">
        <v-card>
          <v-tabs fixed-tabs hide-slider color="#06a865" :value="initTabKey">
            <!-- 交換レンズ -->
            <v-tab class="tab-footer" @click="updateIndex(1, '交換レンズ', '交換レンズ')">
              <div v-if="tagIndex == 1">
                <img class="tab-icon" src="@/assets/newer-product-slider/interchang_lens_camera.svg" />
              </div>
              <div v-else>
                <img class="tab-icon" src="@/assets/newer-product-slider/interchang_lens_camera_off.svg" />
              </div>
              交換レンズ
            </v-tab>

            <!-- デジタル一眼レフ -->
            <v-tab class="tab-footer" @click="updateIndex(2, 'デジタル一眼レフ,ミラーレス一眼', 'デジタル一眼レフ')">
              <v-icon :color="getIconColor(2)" class="tab-icon">fa fa-camera</v-icon>デジタル一眼レフ
            </v-tab>

            <!-- コンパクトデジタルカメラ -->
            <v-tab class="tab-footer" @click="updateIndex(3, 'コンパクトデジタルカメラ', 'コンパクトデジタルカメラ')">
              <div v-if="tagIndex == 3">
                <img class="tab-icon" src="@/assets/newer-product-slider/compact_digital_camera.svg" />
              </div>
              <div v-else>
                <img class="tab-icon" src="@/assets/newer-product-slider/compact_digital_camera_off.svg" />
              </div>
              コンパクトデジタルカメラ
            </v-tab>

            <!-- フィルムカメラ -->
            <v-tab @click="updateIndex(4, 'フィルムカメラ', 'フィルムカメラ')">
              <div v-if="tagIndex == 4">
                <img class="tab-icon" src="@/assets/newer-product-slider/film_camera.svg" />
              </div>
              <div v-else>
                <img class="tab-icon" src="@/assets/newer-product-slider/film_camera_off.svg" />
              </div>
              フィルムカメラ
            </v-tab>
          </v-tabs>
        </v-card>
      </div>

      <!-- 960px未満 -->
      <v-container class="mx-auto d-md-none font-small">
        <v-card>
          <v-row justify="center">
            <v-btn-toggle v-model="toggleExclusive" class="newer-product-btn-group" mandatory>
              <v-row>
                <!-- 交換レンズ -->
                <v-col cols="3" class="cols-data">
                  <v-btn @click="updateIndex(1, '交換レンズ', '交換レンズ')" class="newer-product-category-btn">
                    <div v-if="toggleExclusive === 0">
                      <img class="tab-icon" src="@/assets/newer-product-slider/interchang_lens_camera.svg" />
                    </div>
                    <div v-else>
                      <img class="tab-icon" src="@/assets/newer-product-slider/interchang_lens_camera_off.svg" />
                    </div>
                  </v-btn>
                </v-col>

                <!-- デジタル一眼レフ -->
                <v-col cols="3" class="cols-data">
                  <v-btn @click="updateIndex(2, 'デジタル一眼レフ,ミラーレス一眼', 'デジタル一眼レフ')" class="newer-product-category-btn">
                    <div v-if="toggleExclusive === 1">
                      <v-icon color="#06a865" class="tab-icon">fa fa-camera</v-icon>
                    </div>
                    <div v-else>
                      <v-icon color="#222" class="tab-icon">fa fa-camera</v-icon>
                    </div>
                  </v-btn>
                </v-col>

                <!-- コンパクトデジタルカメラ -->
                <v-col cols="3" class="cols-data">
                  <v-btn @click="updateIndex(3, 'コンパクトデジタルカメラ', 'コンパクトデジタルカメラ')" class="newer-product-category-btn">
                    <div v-if="toggleExclusive === 2">
                      <img class="tab-icon" src="@/assets/newer-product-slider/compact_digital_camera.svg" />
                    </div>
                    <div v-else>
                      <img class="tab-icon" src="@/assets/newer-product-slider/compact_digital_camera_off.svg" />
                    </div>
                  </v-btn>
                </v-col>

                <!-- フィルムカメラ -->
                <v-col cols="3" class="cols-data-last">
                  <v-btn @click="updateIndex(4, 'フィルムカメラ', 'フィルムカメラ')" class="newer-product-category-btn">
                    <div v-if="toggleExclusive === 3">
                      <img class="tab-icon" src="@/assets/newer-product-slider/film_camera.svg" />
                    </div>
                    <div v-else>
                      <img class="tab-icon" src="@/assets/newer-product-slider/film_camera_off.svg" />
                    </div>
                  </v-btn>
                </v-col>
              </v-row>
            </v-btn-toggle>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import ProductListService from '@/logic/product-list.service';
import { ConditionItem } from '@/types/conditions';
import { ProductItem } from '@/types/product-list';
import SectionLoading from '@/components/common/section-loading.vue';

export default Vue.extend({
  name: 'newer-product-slider',
  components: {
    'section-loading': SectionLoading
  },
  setup: () => {
    const state = reactive({
      initTabKey: 0, //初期表示時のタブキー
      tagIndex: 1,
      selectedTabName: '交換レンズ',
      toggleExclusive: 0,
      productList: [] as ProductItem[],
      loaded: {
        products: false
      }
    });

    /** 商品一覧を取得 */
    async function setProductList(category: string[]) {
      state.loaded.products = false;
      try {
        const tempString = category.toString();
        const condition: ConditionItem = { paramCode: 'category', paramText: 'カテゴリー', value: tempString, valueText: tempString };
        const productList = await ProductListService.searchUsedItem([condition], 'newer', 10, 1);
        state.productList = productList.items;
      } catch (error) {
        state.productList = [] as ProductItem[];
      } finally {
        state.loaded.products = true;
      }
    }

    /** タブ位置を更新 */
    function updateIndex(index: number, category: string, tabName: string): void {
      state.tagIndex = index;
      setProductList([category]);
      state.selectedTabName = tabName;
    }

    /** アイコンの色を取得 */
    function getIconColor(index: number): string {
      if (state.tagIndex == index) return '#06a865';
      return '#222';
    }

    /** 初期化 */
    setProductList(['交換レンズ']);

    return {
      ...toRefs(state),
      setProductList,
      updateIndex,
      getIconColor,
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
// IE11対応
.content-wide {
  max-width: $ec-contents-max-width;
  background-color: $bg-white;
  padding: 10px;
}

.newer-product-category-btn::before {
  background: transparent;
}

.newer-product-btn-group {
  width: 100%;
  padding: 3px;
}

.newer-product-category-btn {
  width: 100%;
  box-shadow: none;
  border-radius: 0px;
  background: white !important;
}

.cols-data {
  padding: 0px;
  border-right: 1px solid rgba(112, 112, 112, 1);
  height: 48px;
  margin-top: 10px;
}

.cols-data-last {
  padding: 0px;
  height: 48px;
  margin-top: 10px;
}

.tab-icon {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.tab-footer {
  border-right: solid 1px gray;
}

.newer-product-slider {
  box-shadow: none !important;

  &-area {
    margin: 5px 8px;
    width: 200px;
  }

  &-img-area {
    display: flex;
    margin: auto;
    width: 160px;
    height: 160px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    font-size: 0.8rem;
  }

  &-img {
    width: 100%;
    object-fit: contain;
  }

  &-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 3rem;
    font-size: 1rem;
    margin: 5px auto;
    color: $text-secondary;
  }

  &-price {
    display: inline-block;
    margin: 2px 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
}

/** -------------------------------
  960px未満
------------------------------- */
.content-narrow {
  background-color: $bg-white;
  padding: 10px;

  .newer-product-slider {
    &-area {
      margin: 5px 8px;
      width: 150px;
    }

    &-img-area {
      display: flex;
      margin: auto;
      width: 80px;
      height: 80px;
      text-align: center;
      vertical-align: middle;
      align-items: center;
      font-size: 0.6rem;
    }

    &-name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      height: 2.4rem;
      font-size: 0.8rem;
      margin: 5px auto;
      color: $text-secondary;
    }

    &-price {
      display: inline-block;
      margin: 2px 0;
      width: 100%;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
    }

    &-loading-area {
      min-height: 166px;
      display: flex;
      align-items: center;
    }
  }
}
</style>

<style lang="scss">
/* 無駄に余白ができるため、v-slideで生成されるDOMのCSSを上書き */
.content-narrow {
  .newer-product-slider {
    .v-slide-group {
      .v-slide-group__prev,
      .v-slide-group__next {
        min-width: 18px;
      }
    }
  }
}
</style>
