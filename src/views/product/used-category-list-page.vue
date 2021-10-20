<template>
  <div
    id="used-category-list-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <div
      :class="{
        'content-area-wide': $vuetify.breakpoint.mdAndUp,
        'content-area-narrow': $vuetify.breakpoint.smAndDown
      }"
    >
      <div class="category-list-container">
        <!-- パンくず -->
        <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />

        <!-- タイトル -->
        <h1>中古カテゴリ一覧</h1>
        <hr />

        <v-row class="my-8">
          <v-col cols="12" md="4" class="category-item-area" v-for="category in categories" :key="category.categoryName">
            <v-list class="category-item">
              <!-- サブカテゴリがある場合 -->
              <v-list-group v-if="category.children.length">
                <template v-slot:activator>
                  <img :src="category.imagePath" />
                  <v-list-item-title class="category-item-title">
                    {{ category.categoryName }}
                  </v-list-item-title>
                </template>

                <!-- サブカテゴリ -->
                <v-list-item
                  class="sub-category-item"
                  v-for="childCategory in category.children"
                  :key="childCategory.category"
                  :to="`/ec/list?type=u&category=${childCategory.categoryName}`"
                >
                  <v-list-item-title class="category-text">{{ childCategory.dispalyedName }}({{ childCategory.count | price }})</v-list-item-title>
                </v-list-item>

                <!-- すべて表示 -->
                <v-list-item class="sub-category-item" :to="`/ec/list?type=u&category=${category.categoryName}`">
                  <v-list-item-title>すべて表示</v-list-item-title>
                </v-list-item>
              </v-list-group>

              <!-- サブカテゴリがない場合 -->
              <v-list-item :to="`/ec/list?type=u&category=${category.categoryName}`" v-else>
                <img :src="category.imagePath" />
                <v-list-item-title class="category-item-title">
                  {{ category.categoryName }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <div>
          <v-btn
            outlined
            block
            class="search-shop-link-btn ec-link-btn pa-6"
            :href="netChukoUrl + 'searchshop/index.do?bt=中古カメラ・中古レンズ+商品検索&bu=%2Fbuy%2Findex.do&cu=%2Fbuy%2Flist.do'"
          >
            店舗を指定して検索
            <v-icon right>fas fa-angle-right</v-icon>
          </v-btn>
          <div class="search-shop-with-product-link-area my-4 text-center">
            <span>商品名を指定した店舗検索は</span>
            <a class="search-shop-with-product-link" :href="netChukoUrl + 'buy/index.do'">
              <span class="search-shop-with-product-link-text">こちら</span>
            </a>
          </div>
        </div>
      </div>

      <!-- ローディング -->
      <div v-if="!loaded.parentCategoories">
        <section-loading />
      </div>

      <!-- 新入荷情報 -->
      <newer-product-slider></newer-product-slider>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListService from '@/logic/product-list.service';
import { UsedCategory } from '@/types/tsv-config';
import NewerProductSlider from '@/components/used-category-list/newer-product-slider.vue';
import SectionLoading from '@/components/common/section-loading.vue';

type ChildCategory = { type: 'category'; dispalyedName: string; count: number; categoryName: string };
type Category = {
  categoryName: string;
  imagePath: string;
  children: ChildCategory[];
  displayed: boolean;
};

export default Vue.extend({
  name: 'used-category-list-page',
  components: {
    breadcrumbs: Breadcrumbs,
    'newer-product-slider': NewerProductSlider,
    'section-loading': SectionLoading
  },
  setup: (_, context) => {
    const categoryStore = context.root.$store.category;

    document.title = '【カメラのキタムラ】中古カテゴリ一覧';
    const state = reactive({
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      breadcrumbs: [
        { path: 'ネットショップ', linkUrl: '/' },
        { path: '中古カテゴリ一覧', linkUrl: '' }
      ],
      categories: [] as Array<Category>,
      loaded: {
        parentCategoories: false,
        childCategories: false
      }
    });

    const init = async () => {
      try {
        // TSVファイルから親カテゴリ一覧を取得
        if (!categoryStore.usedCategory.length) await categoryStore.fetchUsedCategories();
        state.categories = categoryStore.usedCategoryOnlyParent.map((ct: UsedCategory) => ({
          categoryName: ct.categoryName,
          imagePath: require(`@/assets/categories/${ct.imageSrc}`),
          children: [],
          displayed: false
        }));
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.parentCategoories = true;
      }
    };

    /**
     * 検索結果件数の取得(中古在庫)
     */
    const searchUsedProductCount = async () => {
      try {
        // 指定なしでカテゴリー別の商品個数を取得
        const resultAll = await ProductListService.searchUsedItemCount([]);
        const categoryCountMap = resultAll.category;
        for (const category of state.categories) {
          const prefix = `${category.categoryName}:`;
          const dispalyedNames = Object.keys(categoryCountMap).filter((ct) => !ct.indexOf(prefix));
          const children: ChildCategory[] = dispalyedNames.map((categoryName) => ({
            dispalyedName: categoryName.replace(prefix, ''),
            count: categoryCountMap[categoryName],
            categoryName,
            type: 'category'
          }));
          children.sort((a, b) => b.count - a.count);
          category.children = children;
        }
      } catch (error) {
        console.error(error);
      } finally {
        state.loaded.childCategories = true;
      }
    };

    onMounted(async () => {
      await init();
      await searchUsedProductCount();
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  中古カテゴリ一覧 960px以上
------------------------------- */
.category {
  &-item-area {
    padding: 0 12px;

    .category-item {
      padding: 0;
      border-top: 1px dotted $ec-grey;
      font-weight: bold;

      &-title {
        font-size: 1.2em;
        margin: 0 12px;
      }

      ::v-deep .v-list-item {
        padding: 8px 16px;
      }
    }

    .sub-category-item {
      border-top: 1px dotted $ec-grey;
      font-weight: normal;
    }

    ::v-deep .fa-chevron-down:before {
      content: '\f067';
    }
    .v-list-group--active {
      ::v-deep .fa-chevron-down:before {
        content: '\f068';
      }
    }
  }
}

.container-wide {
  .category {
    &-item-area {
      &:nth-last-child(-n + 3) {
        .category-item {
          border-bottom: 1px dotted $ec-grey;
        }
      }
    }
  }
}

.search-shop-link-btn {
  font-size: 1.2em;
}

.search-shop-with-product-link {
  &-area {
    font-size: 0.9em;
  }

  &-text {
    color: $text-secondary;
  }

  &:hover {
    color: inherit;
  }
}

/** -------------------------------
  中古カテゴリ一覧 960px以下
------------------------------- */
.container-narrow {
  .category-list-container {
    padding: 0 10px;
  }

  .category {
    &-item-area {
      &:last-child {
        .category-item {
          border-bottom: 1px dotted $ec-grey;
        }
      }
    }
  }
}
</style>
