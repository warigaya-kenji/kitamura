<template>
  <div id="search-menu">
    <!-- インプット系 -->
    <div class="header-search-wrapper">
      <div
        :class="{
          'header-search-area': true,
          'header-search-area-wide': $vuetify.breakpoint.mdAndUp,
          'header-search-area-narrow': $vuetify.breakpoint.smAndDown
        }"
      >
        <div
          class="search-newold search-box-area-sm"
          :class="{
            'pr-3': $vuetify.breakpoint.mdAndUp,
            'pr-2': $vuetify.breakpoint.smAndDown
          }"
        >
          <v-select id="search-newold" class="form-text" v-model="selectNewOld" :items="newOldList" outlined dense> </v-select>
        </div>
        <div class="search-category search-box-area-md pr-3" v-if="$vuetify.breakpoint.mdAndUp">
          <v-select id="search-category" class="form-text" v-model="selectCategory" :items="categoryList" outlined dense></v-select>
        </div>
        <div
          class="search-keyword search-box-area-lg"
          :class="{
            'pr-3': $vuetify.breakpoint.mdAndUp,
            'pr-0': $vuetify.breakpoint.smAndDown
          }"
        >
          <div>
            <v-combobox
              id="search-keyword"
              ref="keywordSearchCombobox"
              class="search-box form-text"
              :items="suggestItems"
              :loading="isLoading"
              :search-input.sync="search"
              hide-no-data
              hide-selected
              item-text="keyword"
              item-value="name"
              placeholder="キーワードで探す"
              append-icon
              append-outer-icon="far fa-search"
              clearable
              no-filter
              :menu-props="{
                allowOverflow: true,
                maxHeight: 600,
                closeOnClick: true,
                closeOnContentClick: true,
                minWidth: $vuetify.breakpoint.xsOnly ? '90vw' : null,
                offsetY: true
              }"
              outlined
              dense
              @click:append-outer="toProductList()"
              @keydown.enter="keydownWrapper($event.keyCode)"
            >
              <template v-slot:item="data">
                <template v-if="isObjectType(data.item)">
                  <v-list-item-content @click="selectSuggest(data.item.field, data.item.name, data.item.itemId)">
                    <v-list-item-title class="show-suggest-item-title" v-if="data.item.field === 'category'">
                      <span class="show-suggest-category">{{ data.item.name }}</span>
                      から「
                      <span class="show-suggest-item">{{ search }}</span>
                      」で検索する({{ data.item.count }})
                    </v-list-item-title>
                    <v-list-item-title v-else v-text="data.item.name" class="show-suggest-item show-suggest-item-title"></v-list-item-title>
                  </v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content v-text="data.item">
                    <v-list-item-title v-text="data.item" class="show-suggest-item show-suggest-item-title"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-combobox>
          </div>
        </div>
      </div>

      <!-- 960px以上のみ表示 -->
      <div class="header-name-area-wide" v-if="$vuetify.breakpoint.mdAndUp">
        ようこそ
        <br />
        {{ userName }}様
      </div>

      <div class="header-menu-area-wide" v-if="$vuetify.breakpoint.mdAndUp">
        <user-menu />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, SetupContext, toRefs, onMounted, watch, ref } from '@vue/composition-api';
import UserMenu from '@/components/header/user-menu.vue';
import SuggestService from '@/logic/suggest.service';
import { SuggestItem } from '@/types/suggest';
import { SEARCH_STATE } from '@/constants/search-state';
import { NewerCategory, UsedCategory } from '@/types/tsv-config';

export default Vue.extend({
  name: 'search-menu',
  components: {
    'user-menu': UserMenu
  },
  setup: (prop, context: SetupContext) => {
    const { searcher, authorizer, category } = context.root.$store;

    const state = reactive({
      keywordSearchCombobox: ref<HTMLElement>(),
      newOldList: SEARCH_STATE.option,
      selectNewOld: SEARCH_STATE.option[0].value,
      newerCategoryList: [
        {
          text: '全てのカテゴリから',
          value: 'all'
        }
      ],
      usedCategoryList: [
        {
          text: '全てのカテゴリから',
          value: 'all'
        }
      ],
      selectCategory: 'all',
      search: '',
      suggestItems: [] as any[],
      descriptionLimit: 60,
      entries: [],
      isLoading: false
    });

    /**
     * ユーザー名取得
     */
    const userName = computed(() => {
      if (authorizer.user?.lastName && authorizer.user?.firstName) {
        return authorizer.user.lastName + ' ' + authorizer.user.firstName;
      } else {
        return 'ゲスト';
      }
    });

    /**
     * 検索時の選択カテゴリーリストを生成
     */
    const generateCategorySearchList = async () => {
      // 新品用カテゴリリスト
      if (!category.newerCategory.length) await category.fetchNewerCategories();
      category.newerCategoryOnlyParent.forEach((cate: NewerCategory) => {
        state.newerCategoryList.push({
          text: cate.parentCategoryName,
          value: cate.parentCategoryName
        });
      });

      // 中古在庫用カテゴリリスト
      if (!category.usedCategory.length) await category.fetchUsedCategories();
      category.usedCategoryOnlyParent.forEach((cate: UsedCategory) => {
        state.usedCategoryList.push({
          text: cate.categoryName,
          value: cate.categoryName
        });
      });
    };

    /**
     * 検索時の選択カテゴリーリストを取得
     */
    const categoryList = computed(() => {
      return state.selectNewOld === '3' ? state.usedCategoryList : state.newerCategoryList;
    });

    /**
     * 新品・中古の選択が変更されたとき、カテゴリの選択を初期化する
     */
    watch(
      () => state.selectNewOld,
      () => {
        state.selectCategory = 'all';
      }
    );

    /**
     * 検索ワードに基づくサジェストを取得
     */
    async function getSuggest() {
      let result = {} as SuggestItem;
      let showItem = [];

      try {
        switch (state.selectNewOld) {
          case '0': // 新品・中古
          case '1': // 新品のみ
          case '2': // 中古のみ
            result = await SuggestService.searchNewItem('', String(state.search));
            break;
          case '3': // 中古在庫
            result = await SuggestService.searchUsedItem('', String(state.search));
            break;
          case '4': // 買取り
            result = await SuggestService.searchSellItem('', String(state.search));
            break;
          default:
            // エラー処理
            break;
        }
      } catch (error) {
        console.error(error);
      }

      if (!(result?.conditions.length == 0 && result?.items.length == 0)) {
        showItem = [{ header: 'カテゴリーから検索する' }] as Array<any>;
        if (result?.conditions.length) {
          for (let i = 0; i < Math.min(3, result.conditions.length); i++) {
            showItem.push({
              name: result.conditions[i].condname,
              keyword: state.search,
              field: result.conditions[i].axis,
              count: result.conditions[i].count
            });
          }
        }
        showItem.push({ header: '商品名で検索する' });

        if (result?.items.length) {
          for (let i = 0; i < Math.min(7, result.items.length); i++) {
            showItem.push({
              name: result.items[i].title,
              keyword: result.items[i].title,
              itemId: result.items[i].jan_code,
              field: 'items'
            });
          }
        }
      }
      state.suggestItems = showItem;
    }

    watch(
      () => [state.search],
      ([newSearch], [oldSearch]) => {
        // searchの値が変更されたとき
        if (newSearch != oldSearch) {
          if (newSearch) {
            searcher.updateSearchWord(newSearch);
            getSuggest();
          } else {
            searcher.updateSearchWord('');
            state.suggestItems = [];
          }
        }
      }
    );

    /**
     * ネット中古の商品一覧ページに遷移する
     */
    const toChukoProductList = (keyword: string, itemId: string, category: string): void => {
      const urlParams = new URLSearchParams({
        keyword: itemId ? itemId : keyword
      });
      if (category) {
        urlParams.append('category', category);
      }
      const url = process.env.VUE_APP_NET_CHUKO_URL + 'ec/sell/item-list?' + urlParams.toString();

      window.location.href = url;
    };

    // TODO: EC_FRONT-482の対応時コメントアウト解除、遷移処理切り替え
    // /**
    //  * パラメーターをURL用に変換
    //  * @param param パラメーター
    //  */
    // const paramToUrl = (param: { [key: string]: string | number }): string => {
    //   let paramStr = '';
    //   Object.entries(param).forEach(([key, val], index) => {
    //     paramStr = index === 0 ? paramStr + '?' : paramStr + '&';
    //     paramStr = paramStr + `${key}=${val}`;
    //   });
    //   return paramStr;
    // };

    /**
     * 一覧ページへの遷移処理
     * @param itemId サジェストの商品ID（買取の選択時のみ使用）
     */
    const toProductList = (itemId?: string) => {
      // 検索時に選択肢のメニューを閉じるために検索Boxからフォーカスを外す。
      state.keywordSearchCombobox?.blur();

      const param: { [key: string]: string } = {};

      // キーワード入力
      if (searcher.searchWord) {
        param['keyword'] = searcher.searchWord;
      } else {
        alert('キーワードを入力してください。\n\n例）商品名・型番 etc');
        return;
      }

      // カテゴリ選択
      if (state.selectCategory !== 'all') {
        param['category'] = state.selectCategory;
      }

      switch (state.selectNewOld) {
        case '3':
          // 中古在庫の場合のパラメーター
          param['type'] = 'u';
          context.root.$router.push({
            name: 'product-list-page',
            query: param
          });
          // window.location.href = '/ec/list' + paramToUrl(param);
          break;
        case '4':
          // 買取りの場合、既存のネット中古ページに遷移させる
          param['itemId'] = itemId ? itemId : '';
          toChukoProductList(param['keyword'], param['itemId'], param['category']);
          break;
        default:
          param['narrow18'] = state.selectNewOld;
          context.root.$router.push({
            name: 'product-list-page',
            query: param
          });
          // window.location.href = '/ec/list' + paramToUrl(param);
          break;
      }
    };

    /**
     * サジェスト選択時
     * @param field 選択したサジェストの区分
     * @param name 選択したサジェスト名
     * @param itemId 選択したサジェストの商品ID
     */
    const selectSuggest = (field: string, name: string, itemId: string) => {
      // カテゴリ選択後の処理
      if (field === 'category') {
        const selectCategoryInfo = category.searchNewerCategoryByConcatenationName(name);
        state.selectCategory = Object.entries(selectCategoryInfo).length ? selectCategoryInfo.parentCategoryName : 'all';
      } else {
        searcher.updateSearchWord(name);
      }
      toProductList(itemId);
    };

    /**
     * キー押下時の事前判定
     * @param keyCode 押下したキーコード
     */
    const keydownWrapper = (keyCode: number) => {
      // 日本語の変換確定時は、遷移しない
      if (keyCode !== 13) return;
      toProductList();
    };

    /**
     * オブジェクトタイプかの判定
     * @param item 判定対象
     */
    function isObjectType(item: unknown): boolean {
      return typeof item === 'object';
    }

    onMounted(() => {
      generateCategorySearchList();
    });

    return {
      ...toRefs(state),
      getSuggest,
      userName,
      selectSuggest,
      toProductList,
      keydownWrapper,
      isObjectType,
      categoryList
    };
  }
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1130px) {
  .header-search-wrapper {
    margin-right: 40px;
  }
}

@media screen and (min-width: 1040px) {
  .header-search-wrapper {
    margin-right: 10px;
  }
}

#search-menu {
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 5px;
  }
}

.header-search-wrapper {
  padding: 5px 5px;
  display: flex;
  align-items: center;
  flex-grow: 4;
}

.header-search-area {
  display: flex;
  flex-grow: 6;

  .search-box-area-sm {
    flex-grow: 1;
  }
  .search-box-area-md {
    flex-grow: 2;
  }
  .search-box-area-lg {
    flex-grow: 10;
  }
}

.header-search-area.header-search-area-wide {
  margin-top: 10px;
  padding-top: 10px;
  width: 70%;
  height: 80px;
}

.header-search-area.header-search-area-narrow {
  margin-top: 5px;
  height: auto;
}

.header-name-area-wide {
  margin-top: 10px;
  margin-right: 2em;
  padding-top: 10px;
  height: 80px;
  flex-grow: 1;
  white-space: nowrap;
}

.header-menu-area-wide {
  margin-top: 5px;
  height: 80px;
  flex-grow: 1;
}

.search-newold {
  min-width: 155px;
}
.search-category {
  min-width: 200px;
}
.search-keyword {
  width: 100%;
}

.header-search-area-narrow {
  .search-newold {
    min-width: 146px;
    width: 30%;
  }
}

.show-suggest-category {
  color: $text-primary;
  font-weight: bold;
}

.v-list-item .show-suggest-item {
  color: black;
  font-weight: bold;
}

.show-suggest-item-title {
  white-space: normal;
}

/* SPサイズの場合に表示が大きすぎるため縮小 */
/* iOSで拡大されないようフォントサイズは変えない */
.header-search-area-narrow .form-text {
  ::v-deep input,
  ::v-deep .v-input__icon,
  ::v-deep .v-select__selection {
    font-size: inherit;
    transform: scale(calc(14 / 16));
  }

  ::v-deep .v-input__slot {
    padding: 0 4px !important;
  }
}
</style>

<style lang="scss">
/* v-comboboxで生成されるDOMのCSSを上書き */
.header-search-area .search-box,
.header-search-area-wide .search-box {
  .v-input__control {
    z-index: 310;
  }
  .v-input__append-outer {
    width: 50px;
    height: 40px;
    margin: 0 0 0 -3px !important;
    background: $bg-grey;
    border-radius: 0 4px 4px 0;
    z-index: 310;

    .v-input__icon--append-outer {
      width: auto;
      height: auto;
    }
  }
}

/* 無駄に余白ができるため、v-text-fieldで生成されるDOMのCSSを上書き */
.header-search-area {
  .v-input__control {
    .v-text-field__details {
      margin: 0 !important;
      padding: 0 !important;
      min-height: 0;

      .v-messages {
        margin: 0 !important;
        padding: 0 !important;
        min-height: 0;
      }
    }
  }
}
</style>
