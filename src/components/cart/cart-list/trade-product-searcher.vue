<template>
  <div :class="{ sp: $vuetify.breakpoint.smAndDown }">
    <div class="search-form-area">
      <v-form ref="estimationFormMd" :v-model="isValidForm" :class="{ 'pa-3': $vuetify.breakpoint.mdAndUp }">
        <v-row class="search-form-items-area" :class="{ 'pa-1': $vuetify.breakpoint.mdAndUp }">
          <v-col cols="12" md="3" class="pa-0 search-form-items">
            <v-row>
              <v-col cols="3" class="form-input-title-area" v-if="$vuetify.breakpoint.smAndDown">
                <div class="form-input-title">商品分類</div>
              </v-col>
              <v-col cols="9" md="12">
                <v-select
                  :items="categoryList"
                  item-text="showText"
                  item-value="category"
                  v-model="condition.category"
                  placeholder="-商品分類-"
                  outlined
                  dense
                  hide-details
                  class="search-form-item"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3" class="pa-0 search-form-items">
            <v-row>
              <v-col cols="3" class="form-input-title-area" v-if="$vuetify.breakpoint.smAndDown">
                <div class="form-input-title ">メーカー</div>
              </v-col>
              <v-col cols="9" md="12">
                <v-select
                  :items="makerList"
                  item-text="showText"
                  item-value="name"
                  v-model="condition.maker"
                  placeholder="-メーカー-"
                  outlined
                  dense
                  hide-details
                  class="search-form-item"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="pa-0 search-form-items">
            <v-row>
              <v-col cols="3" class="form-input-title-area form-text-required" v-if="$vuetify.breakpoint.smAndDown">
                <div class="form-input-title ">商品名</div>
              </v-col>
              <v-col cols="9" md="12">
                <v-combobox
                  id="keyword-search-combobox"
                  ref="keywordSearchCombobox"
                  class="keyword-search-combobox"
                  :items="suggestItems"
                  :search-input.sync="condition.keyword"
                  hide-no-data
                  hide-selected
                  item-text="keyword"
                  item-value="name"
                  placeholder="商品名・型番を入力してください"
                  append-icon
                  append-outer-icon="far fa-search"
                  clearable
                  no-filter
                  :menu-props="{
                    allowOverflow: true,
                    maxHeight: 600,
                    closeOnClick: true,
                    closeOnContentClick: true,
                    offsetY: true
                  }"
                  outlined
                  dense
                  @click:append-outer="searchProductList()"
                  @keydown.enter="keydownWrapper($event.keyCode)"
                >
                  <template v-slot:item="data">
                    <template v-if="isObjectType(data.item)">
                      <v-list-item-content @click="selectSuggest(data.item.field, data.item.name, condition.keyword, data.item.itemId)">
                        <v-list-item-title class="show-suggest-item-title" v-if="data.item.field === 'category'">
                          <span class="show-suggest-category">{{ data.item.name }}</span>
                          から「
                          <span class="show-suggest-item">{{ condition.keyword }}</span>
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
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="py-0 search-form-items" v-if="tokutoku">
            <v-checkbox
              hide-details
              class="search-form-filter-checkbox"
              label="対象商品のみに絞る"
              v-model="enableTokutokuFilter"
              @click="onClickedFilter"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import SellService from '@/logic/sell.service';
import SuggestService from '@/logic/suggest.service';
import { SuggestItem } from '@/types/suggest';

type Condition = {
  category: string;
  maker: string;
  keyword: string;
};

export default Vue.extend({
  name: 'trade-product-searcher',
  props: {
    tokutoku: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    const state = reactive({
      // キーワード検索ボックス
      keywordSearchCombobox: ref<HTMLElement>(),
      // 検索条件
      condition: {
        category: '',
        maker: '',
        keyword: ''
      },
      // 初期条件：選択肢
      categoryList: [{}],
      makerList: [{}],
      // サジェスト
      suggestItems: [] as any[],
      // フォームバリデーション
      isValidForm: false,
      // トクトク交換時に対象商品を絞り込むか
      enableTokutokuFilter: false
    });

    /**
     * 選択肢の取得
     */
    const setConditionList = async () => {
      const conditionCount: { [key: string]: number | { [key: string]: number } } = await SellService.searchProductListCount({
        category: state.condition.category
      });

      // 初期条件：選択肢の格納
      state.categoryList = SellService.getCategory(conditionCount.category as { [key: string]: number });
      state.makerList = SellService.getMakerList(conditionCount.maker as { [key: string]: number });
    };

    /**
     * 下取申込み商品の検索実行を通知
     */
    const searchProductList = async (condition?: Condition) => {
      // 検索時に選択肢のメニューを閉じるために検索Boxからフォーカスを外す。
      state.keywordSearchCombobox?.blur();

      // 検索条件とともに検索実行を通知
      const option = {
        condition: condition || state.condition,
        enableTokutokuFilter: props.tokutoku && state.enableTokutokuFilter
      };
      context.emit('onSearch', option);
    };

    /**
     * 対象絞り込みチェックボックスをクリックしたとき、
     * キーワードがあれば、検索をする
     */
    const onClickedFilter = () => {
      if (state.condition.keyword) {
        searchProductList();
      }
    };

    // カテゴリーが変更時の絞り込み条件の制御
    watch(
      () => [state.condition.category],
      () => {
        setConditionList();
      }
    );

    /**
     * 検索ワードに基づくサジェストを取得
     */
    const getSuggest = async () => {
      let result = {} as SuggestItem;
      let showItem = [];

      result = await SuggestService.searchSellItem(state.condition.category, state.condition.keyword);

      if (!(result?.conditions.length == 0 && result?.items.length == 0)) {
        showItem = [{ header: 'カテゴリーから検索する' }] as Array<any>;
        if (result?.conditions.length) {
          for (let i = 0; i < Math.min(3, result.conditions.length); i++) {
            showItem.push({
              name: result.conditions[i].condname,
              keyword: state.condition.keyword,
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
              itemId: result.items[i].goods_code,
              field: 'items'
            });
          }
        }
      }
      state.suggestItems = showItem;
    };

    watch(
      () => [state.condition.keyword],
      ([newSearch], [oldSearch]) => {
        // searchの値が変更されたとき
        if (newSearch != oldSearch) {
          if (newSearch) {
            getSuggest();
          } else {
            state.suggestItems = [];
          }
        }
      }
    );

    /**
     * サジェスト選択時
     * @param field 選択したサジェストの区分
     * @param name 選択したサジェスト名
     * @param keyword 検索文字列
     * @param itemId 選択したサジェストの商品ID
     */
    const selectSuggest = (field: string, name: string, keyword: string, itemId: string) => {
      const condition = {
        keyword: field === 'category' ? keyword : itemId,
        category: field === 'category' ? name : '',
        maker: ''
      };
      searchProductList(condition);
    };

    /**
     * キー押下時の事前判定
     * @param keyCode 押下したキーコード
     */
    const keydownWrapper = (keyCode: number) => {
      // 日本語の変換確定時は、遷移しない
      if (keyCode !== 13) return;
      searchProductList();
    };

    /**
     * オブジェクトか否かの判定
     * @param item 判定対象
     */
    function isObjectType(item: unknown): boolean {
      return typeof item === 'object';
    }

    // 初期化
    onMounted(() => {
      setConditionList();
    });

    return {
      ...toRefs(state),
      close,
      setConditionList,
      searchProductList,
      selectSuggest,
      keydownWrapper,
      isObjectType,
      onClickedFilter
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  下取申込査定品検索 960px以上
------------------------------- */
.search-form {
  &-area {
    background-color: $bg-white;

    .row {
      margin: 0;
    }
  }
}

.search-form-filter-checkbox {
  width: 10.5em;
  margin-top: 0;
  &::v-deep {
    .v-label {
      font-size: 0.9em;
    }
    .v-input--selection-controls__input .v-icon {
      font-size: 1.1em;
    }
  }
}

/* v-comboboxで生成されるDOMのCSSを上書き */
.keyword-search-combobox {
  ::v-deep .v-input__control {
    z-index: 310;
  }
  ::v-deep .v-input__append-outer {
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
  ::v-deep .v-input__append-inner {
    display: none;
  }
}

/* 無駄に余白ができるため、v-text-fieldで生成されるDOMのCSSを上書き */
.keyword-search-combobox {
  ::v-deep .v-input__control {
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

/** -------------------------------
  下取申込査定品検索 960px未満
------------------------------- */
.sp {
  .search-form {
    &-area {
      .col {
        padding: 0 8px;
      }
    }

    &-items {
      border-top: 1px solid $ec-light-grey;

      &:first-child() {
        border-top: none;
      }

      &-area {
        border: 1px solid $ec-light-grey;
        border-top: none;

        .form-input-title {
          margin: auto;

          &-area {
            display: flex;
            background-color: $bg-light-grey2;
            border-right: 1px solid $ec-light-grey;
          }
        }
      }
    }
  }

  .keyword-search-combobox {
    font-size: 0.78em;
  }
}
</style>
