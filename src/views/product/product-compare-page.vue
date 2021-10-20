<template>
  <div
    id="product-compare-page"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <!-- パンくず -->
    <breadcrumbs v-if="breadcrumbs.length" :breadcrumbs="breadcrumbs" />
    <div
      class="d-flex"
      :class="{
        'justify-space-between align-center mb-5': $vuetify.breakpoint.mdAndUp,
        'flex-column mb-3 px-2': $vuetify.breakpoint.smAndDown
      }"
      ref="addProductBtnWrapRef"
    >
      <h1 class="page-title" v-if="pageTitle">{{ pageTitle }}</h1>
      <div
        :class="{
          'add-product-btn-area': $vuetify.breakpoint.smAndDown || !pageTitle
        }"
      >
        <v-btn class="add-product-btn" dark depressed @click="toProductList()">製品を追加<v-icon class="add-product-btn-icon" small>fas fa-plus</v-icon></v-btn>
      </div>
    </div>

    <div
      id="product-main-item"
      class="compare-list mb-5"
      :class="{ fixed: productMainItemFixed }"
      v-if="loaded.compareList && compareList.length"
      v-scroll="onScroll"
      ref="compareListRef"
    >
      <!-- 商品ヘッド情報（画像など） -->
      <div class="list-group-body" ref="productMainItemRef">
        <product-main-item
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3)
          }"
          :style="styles"
          v-for="(product, index) in compareList"
          :key="`head-info-${product.janCode}`"
          :index="index"
          :listLength="compareList.length"
          :productMainInfo="{
            janCode: product.janCode,
            imagePath: product.imagePath,
            itemName: product.itemName
          }"
          :favorited="product.favorited"
          @clickFavorited="clickFavorited"
          @clickRemove="clickRemove"
          @swap="swap"
        />
      </div>

      <!-- Fixed：商品ヘッド情報（画像など） -->
      <div id="fixed-product-main-item" class="list-group-body fixed" ref="fixedProductMainItemRef" v-show="productMainItemFixed">
        <fixed-product-main-item
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3)
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`fixed-head-info-${product.janCode}`"
          :fixedProductMainInfo="{
            janCode: product.janCode,
            imagePath: product.imagePath,
            itemName: product.itemName
          }"
          :favorited="product.favorited"
          @clickFavorited="clickFavorited"
          @clickRemove="clickRemove"
        />
      </div>

      <!-- 価格 -->
      <list-group-head title="価格" @toggle="compareAccordion.price = !compareAccordion.price" />
      <div class="list-group-body" v-show="compareAccordion.price">
        <product-price-item
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
            highlight: product.highlight.price
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`price-item-${product.janCode}`"
          :productPriceInfo="{
            janCode: product.janCode,
            price: product.price,
            usedPrice: product.usedPrice,
            usedCount: product.usedCount,
            isSalesEnd: product.isSalesEnd
          }"
        />
      </div>

      <!-- 基本項目名 -->
      <list-group-head title="基本項目名" :bgBlack="true" @toggle="compareAccordion.basic = !compareAccordion.basic" />
      <!-- バリエーション・カラー -->
      <template v-if="productValiationItems.length">
        <list-group-head
          title="バリエーション"
          @toggle="compareAccordion.basicChild.color = !compareAccordion.basicChild.color"
          v-show="compareAccordion.basic"
        />
        <div class="list-group-body" v-show="compareAccordion.basic && compareAccordion.basicChild.color">
          <div
            :class="{
              'item-count':
                ($vuetify.breakpoint.mdAndUp && productValiationItems.length < 7) || ($vuetify.breakpoint.smAndDown && productValiationItems.length < 3),
              'pa-4': $vuetify.breakpoint.mdAndUp,
              'pa-2': $vuetify.breakpoint.smAndDown
            }"
            :style="styles"
            class="color-item"
            v-for="product in productValiationItems"
            :key="`color-item-${product.janCode}`"
          >
            <v-btn
              class="product-basic-item-btn color-btn"
              :class="color.class"
              depressed
              outlined
              v-for="color in product.colorInfo"
              :key="color.variationJanCode"
              :to="`/ec/pd/${color.variationJanCode}`"
              >{{ color.colorName }}</v-btn
            >
          </div>
        </div>
      </template>
      <!-- 発売日 -->
      <list-group-head title="発売日" @toggle="compareAccordion.basicChild.release = !compareAccordion.basicChild.release" v-show="compareAccordion.basic" />
      <div class="list-group-body" v-show="compareAccordion.basic && compareAccordion.basicChild.release">
        <div
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
            'pa-4': $vuetify.breakpoint.mdAndUp,
            'pa-2': $vuetify.breakpoint.smAndDown
          }"
          :style="styles"
          class="release-item"
          v-for="product in compareList"
          :key="`release-item-${product.janCode}`"
        >
          <div class="release-date">{{ product.releaseDt }}</div>
        </div>
      </div>

      <!-- グループ -->
      <template v-for="(group, groupKey) in productPerformanceGroup">
        <list-group-head
          :title="group.text"
          :bgBlack="true"
          @toggle="compareAccordion.group[groupKey] = !compareAccordion.group[groupKey]"
          :key="`group-head-${groupKey}`"
          v-if="group.items.length"
        />
        <template v-if="group.items.length">
          <template v-for="groupItem in group.items">
            <list-group-head
              :title="groupItem.itemText"
              :key="`group-child-head-${groupItem.itemText}`"
              @toggle="compareAccordion.group[`${groupKey}Child`][groupItem.itemText] = !compareAccordion.group[`${groupKey}Child`][groupItem.itemText]"
              v-show="compareAccordion.group[groupKey]"
            />
            <div
              class="list-group-body"
              :key="`group-child-body-${groupItem.itemText}`"
              v-show="compareAccordion.group[groupKey] && compareAccordion.group[`${groupKey}Child`][groupItem.itemText]"
            >
              <div
                :class="{
                  'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
                  'pa-4': $vuetify.breakpoint.mdAndUp,
                  'pa-2': $vuetify.breakpoint.smAndDown,
                  highlight: product.highlight
                }"
                :style="styles"
                class="group-item"
                v-for="product in groupItem.productValueList"
                :key="`group-item-${groupItem.itemText}-${product.janCode}`"
              >
                <div class="group-val">{{ product.value }}</div>
              </div>
            </div>
          </template>
        </template>
      </template>

      <!-- 商品説明動画 -->
      <list-group-head title="商品説明動画" :bgBlack="true" @toggle="compareAccordion.movie = !compareAccordion.movie" v-if="showMovie" />
      <div class="list-group-body" v-show="compareAccordion.movie" v-if="showMovie">
        <div
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
            'pa-4': $vuetify.breakpoint.mdAndUp,
            'pa-2': $vuetify.breakpoint.smAndDown
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`movie-item-${product.janCode}`"
        >
          <iframe
            id="product-movie-player"
            type="text/html"
            :src="getYouTubeUrl(product.videoId)"
            width="100%"
            frameborder="0"
            allowfullscreen
            v-if="product.videoId"
          ></iframe>
        </div>
      </div>

      <!-- 商品情報 (商品特徴) -->
      <list-group-head title="商品情報 (商品特徴)" :bgBlack="true" @toggle="compareAccordion.feature = !compareAccordion.feature" />
      <div class="list-group-body" v-show="compareAccordion.feature">
        <div
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
            'pa-4': $vuetify.breakpoint.mdAndUp,
            'pa-2': $vuetify.breakpoint.smAndDown
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`feature-item-${product.janCode}`"
          v-html="product.prdInfo1"
        ></div>
      </div>

      <!-- 商品情報（製品仕様） -->
      <list-group-head title="商品情報（製品仕様）" :bgBlack="true" @toggle="compareAccordion.specification = !compareAccordion.specification" />
      <div class="list-group-body" v-show="compareAccordion.specification">
        <div
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
            'pa-4': $vuetify.breakpoint.mdAndUp,
            'pa-2': $vuetify.breakpoint.smAndDown
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`specification-item-${product.janCode}`"
          v-html="product.prdInfo2"
        ></div>
      </div>

      <!-- 評価 -->
      <list-group-head title="評価" :bgBlack="true" @toggle="compareAccordion.review = !compareAccordion.review" />
      <div class="list-group-body" v-show="compareAccordion.review">
        <product-review-item
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3),
            highlight: product.highlight.ratingTotal
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`review-item-${product.janCode}`"
          :productReviewInfo="{
            janCode: product.janCode,
            reviewNum: product.reviewNum,
            ratingTotal: product.ratingTotal
          }"
        />
      </div>

      <!-- 詳細・カートボタン -->
      <div class="list-group-body">
        <product-btn-item
          :class="{
            'item-count': ($vuetify.breakpoint.mdAndUp && compareList.length < 7) || ($vuetify.breakpoint.smAndDown && compareList.length < 3)
          }"
          :style="styles"
          v-for="product in compareList"
          :key="`btn-item-${product.janCode}`"
          :productBtnInfo="{
            janCode: product.janCode,
            isSalesEnd: product.isSalesEnd
          }"
        />
      </div>
    </div>
    <!-- ローディング -->
    <div class="loading-news-list" v-if="!loaded.compareList">
      <section-loading />
    </div>

    <!-- Fixed：追加ボタン 960px以上 -->
    <v-btn class="add-product-btn fixed" v-if="$vuetify.breakpoint.mdAndUp" v-show="addProductBtnFixed" dark depressed @click="toProductList()"
      >製品を追加<v-icon class="add-product-btn-icon" small>fas fa-plus</v-icon></v-btn
    >
    <!-- Fixed：追加ボタン 960px未満 -->
    <v-btn class="add-product-btn fixed" v-else v-show="addProductBtnFixed" dark depressed @click="toProductList()"
      ><v-icon class="add-product-btn-icon" small>fas fa-plus</v-icon>製品を追加</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, ref, onMounted, onUpdated, computed } from '@vue/composition-api';
import { getYouTubeUrl } from '@/logic/utils';

import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import SectionLoading from '@/components/common/section-loading.vue';
import ProductMainItem from '@/components/product-compare/product-main-item.vue';
import FiexdProductMainItem from '@/components/product-compare/fixed-product-main-item.vue';
import ListGroupHead from '@/components/product-compare/list-group-head.vue';
import ProductPriceItem from '@/components/product-compare/product-price-item.vue';
import ProductReviewItem from '@/components/product-compare/product-review-item.vue';
import ProductBtnItem from '@/components/product-compare/product-btn-item.vue';

import { COMPARE_COLOR } from '@/constants/compare-color';

import CanonicalService from '@/logic/canonical.service';
import RobotsService from '@/logic/robots.service';
import ProductCompareService from '@/logic/product-compare.service';
import ProductService from '@/logic/product.service';

import { CompareProduct } from '@/types/product-compare';

type BreadcrumbItem = {
  path: string;
  linkUrl: string;
};

type CompareProductOnScreen = CompareProduct & {
  // お気に入り
  favorited: boolean;
  // 中古価格
  usedPrice?: number;
  // 中古商品数
  usedCount?: number;
  // バリエーション
  variation?: Array<string>;
  // レビュー件数
  reviewNum: number;
  // レビュー（総合評価）
  ratingTotal: number;
  // 完了品フラク
  isSalesEnd: boolean;
  // ハイライト
  highlight: {
    price: boolean;
    ratingTotal: boolean;
  };
};

type Group = {
  text: string;
  items: Array<GroupItem>;
};
type GroupItem = {
  itemText: string;
  productValueList: Array<{
    janCode: string;
    value: string;
    highlightType: 1 | 2 | 3 | 0;
    highlight: boolean;
  }>;
};

type ValiationInfo = {
  // 商品コード
  janCode: string;
  // カラー情報
  colorInfo: Array<ColorInfo>;
};
type ColorInfo = {
  // カラーの商品コード
  variationJanCode: string;
  // カラー名
  colorName: string;
  // クラス
  class: string;
};

export default Vue.extend({
  name: 'product-compare-page',
  components: {
    breadcrumbs: Breadcrumbs,
    'section-loading': SectionLoading,
    'product-main-item': ProductMainItem,
    'fixed-product-main-item': FiexdProductMainItem,
    'list-group-head': ListGroupHead,
    'product-price-item': ProductPriceItem,
    'product-review-item': ProductReviewItem,
    'product-btn-item': ProductBtnItem
  },
  setup: (_, context) => {
    const { header, comparison, condition } = context.root.$store;
    const state = reactive({
      // ページタイトル
      pageTitle: '',
      // パンくず
      breadcrumbs: [] as Array<BreadcrumbItem>,
      // 比較商品一覧
      compareList: [] as Array<CompareProductOnScreen>,
      // 表示制御：動画
      showMovie: false,
      // リスト制御
      compareAccordion: {
        price: true,
        basic: true,
        basicChild: {
          color: true,
          release: true
        },
        group: {
          imageQuality: true,
          imageQualityChild: {} as { [key: string]: boolean },
          basic: true,
          basicChild: {} as { [key: string]: boolean },
          video: true,
          videoChild: {} as { [key: string]: boolean },
          photograph: true,
          photographChild: {} as { [key: string]: boolean },
          additional: true,
          additionalChild: {} as { [key: string]: boolean }
        },
        feature: true,
        movie: true,
        specification: true,
        review: true
      },
      // ロード状態
      loaded: {
        compareList: false
      },
      // fixed用（商品追加）
      addProductBtnWrapRef: ref<HTMLElement>(),
      addProductBtnFixed: false,
      // fixed用（商品比較ヘッダー）
      compareListRef: ref<HTMLElement>(),
      productMainItemRef: ref<HTMLElement>(),
      fixedProductMainItemRef: ref<HTMLElement>(),
      productMainItemFixed: false
    });

    /**
     * 商品の比較情報を取得
     */
    const fetchCompareInfo = async () => {
      state.loaded.compareList = false;
      try {
        const result = await ProductCompareService.featchCompareProductList(comparison.comparisonList);
        // 必須項目初期化
        result.compTargets.forEach((product) => {
          if (product.videoId) state.showMovie = true;
          const newProduct = product as CompareProductOnScreen;
          newProduct.favorited = false;
          newProduct.reviewNum = 0;
          newProduct.ratingTotal = 0;
          newProduct.isSalesEnd = false;
          newProduct.highlight = {
            price: false,
            ratingTotal: false
          };
          state.compareList.push(newProduct);
        });
      } catch (error) {
        console.error(error);
        state.compareList = [] as Array<CompareProductOnScreen>;
      } finally {
        state.loaded.compareList = true;
      }
    };

    /**
     * 比較商品の新品中古情報を取得
     */
    const fetchUsedProductsSummary = async () => {
      try {
        const usedProductsResult = await ProductService.searchUsedProductsSummary(comparison.comparisonList);
        state.compareList.forEach((product) => {
          const usedInfo = usedProductsResult.itemInfo.find((used) => used.janCode === product.janCode);
          product.usedPrice = usedInfo?.minPrice;
          product.usedCount = usedInfo?.itemCount;
        });
      } catch (error) {
        console.error(error);
      }
    };

    /**
     * 比較商品の商品情報を取得
     */
    const fetchProductsDetail = async () => {
      try {
        const productsDetailResult = await ProductService.fetchProducts(comparison.comparisonList, true);
        state.compareList.forEach((product) => {
          const detail = productsDetailResult.items.find((detailInfo) => product.janCode === detailInfo.janCode);
          if (detail) {
            product.reviewNum = detail.reviewNum;
            product.ratingTotal = detail.ratingTotal;
            product.isSalesEnd = detail.isSalesEnd;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    /**
     * ハイライト処理（グループ以外）
     */
    const checkHighlight = () => {
      const minPrice = state.compareList.reduce((a, b) => (a.price < b.price ? a : b)).price;
      const maxRatingTotal = state.compareList.reduce((a, b) => {
        return a.ratingTotal > b.ratingTotal ? a : b;
      }).ratingTotal;

      state.compareList.forEach((product) => {
        if (product.price === minPrice) product.highlight.price = true;
        if (product.ratingTotal === maxRatingTotal) product.highlight.ratingTotal = true;
      });
    };

    const applyMetaInfo = () => {
      document.title = '【カメラのキタムラ】比較一覧';
      if (state.compareList.length === 2) {
        state.pageTitle = `「${state.compareList[0].itemName}」 と 「${state.compareList[1].itemName}」の比較`;
        CanonicalService.set(window.location.origin + `/ec/pd/compareproducts?prd=${comparison.comparisonList.join('-')}`);
      } else {
        state.pageTitle = '';
        CanonicalService.clear();
      }
      if (state.compareList.length > 2) {
        RobotsService.set(`noindex`);
      } else {
        RobotsService.set(`index`);
      }
      state.breadcrumbs = [
        {
          path: 'ネットショップ',
          linkUrl: '/'
        },
        {
          path: state.compareList[0].itemName,
          linkUrl: `/ec/pd/${state.compareList[0].janCode}`
        },
        {
          path: '比較',
          linkUrl: ''
        }
      ];
    };

    const init = async (applyQuery = true) => {
      const query = context.root.$route.query;
      if (query.prd && applyQuery) {
        const janCodes = (query.prd as string).split('-');
        // 比較対象上書き
        comparison.clear();
        janCodes.forEach((janCode) => {
          comparison.add(janCode);
        });
      }

      // 各種情報取得
      state.compareList = [] as Array<CompareProductOnScreen>;
      await fetchCompareInfo();
      await fetchUsedProductsSummary();
      await fetchProductsDetail();
      await checkHighlight();

      // 各種設定
      applyMetaInfo();
    };

    onMounted(() => {
      init();
      // ブラウザの戻るボタン検知用（Vue系のものは、反応しないときがあるため）
      window.addEventListener('popstate', function(e) {
        init();
      });
    });

    /**
     * バリエーションからカラーコードクラスに変換
     */
    const convertColorClassForValiation = (colorNm: string) => {
      let colorClass = 'icon-multi';
      COMPARE_COLOR.forEach((color) => {
        if (colorNm.indexOf(color.text) >= 0) colorClass = color.class;
      });
      return colorClass;
    };

    /** -------------------------------------------------------------
     * 監視対象
     ------------------------------------------------------------- */
    /**
     * 表示用データ（基本項目:バリエーション・カラー）
     */
    const productValiationItems = computed(() => {
      const items = [] as Array<ValiationInfo>;
      let allEmptyColorInfo = true;
      state.compareList.forEach((product) => {
        const colorInfoList = [] as Array<ColorInfo>;
        product.colorInfo.forEach((color) => {
          colorInfoList.push({
            variationJanCode: color.variationJanCode,
            colorName: color.colorName,
            class: convertColorClassForValiation(color.colorName)
          });
        });

        items.push({
          janCode: product.janCode,
          colorInfo: colorInfoList
        });

        if (colorInfoList.length) allEmptyColorInfo = false;
      });
      return allEmptyColorInfo ? [] : items;
    });

    /**
     * 表示用データ（グループ項目）
     */
    const productPerformanceGroup = computed(() => {
      const group = {
        imageQuality: {
          text: '画質性能',
          items: []
        } as Group,
        basic: {
          text: '基本性能',
          items: []
        } as Group,
        video: {
          text: '動画性能',
          items: []
        } as Group,
        photograph: {
          text: '撮影機能',
          items: []
        } as Group,
        additional: {
          text: '追加機能',
          items: []
        } as Group
      };

      // グループ化
      state.compareList.forEach((product) => {
        product.compItems.forEach((compItem) => {
          let targetGroup = {} as Group;
          let listGroupChild = {} as { [key: string]: boolean };
          switch (compItem.group) {
            case 1: {
              targetGroup = group.imageQuality;
              listGroupChild = state.compareAccordion.group.imageQualityChild;
              break;
            }
            case 2: {
              targetGroup = group.basic;
              listGroupChild = state.compareAccordion.group.basicChild;
              break;
            }
            case 3: {
              targetGroup = group.video;
              listGroupChild = state.compareAccordion.group.videoChild;
              break;
            }
            case 4: {
              targetGroup = group.photograph;
              listGroupChild = state.compareAccordion.group.photographChild;
              break;
            }
            case 5: {
              targetGroup = group.additional;
              listGroupChild = state.compareAccordion.group.additionalChild;
              break;
            }
            default:
              break;
          }

          const targetGroupItem = targetGroup.items.find((groupItem) => groupItem.itemText === compItem.itemName);
          if (targetGroupItem) {
            targetGroupItem.productValueList.push({
              janCode: product.janCode,
              highlightType: compItem.highLight || 0,
              value: compItem.value,
              highlight: false
            });
          } else {
            targetGroup.items.push({
              itemText: compItem.itemName,
              productValueList: [
                {
                  janCode: product.janCode,
                  value: compItem.value,
                  highlightType: compItem.highLight || 0,
                  highlight: false
                }
              ]
            });
            Vue.set(listGroupChild, compItem.itemName, true);
          }
        });
      });

      // ハイライト処理
      Object.entries(group).forEach(([key, groupVal]) => {
        if (groupVal.items.length) {
          const regex = /\b(\d)+(.)?(\d)*\b/g;
          groupVal.items.forEach((groupItem) => {
            // ハイライト対象抽出
            const compareTargetList = groupItem.productValueList.filter((val) => val.highlightType);

            if (compareTargetList.length) {
              switch (compareTargetList[0].highlightType) {
                // 最小
                case 1: {
                  const minVal = compareTargetList.reduce((a, b) => (a.value.replace(regex, '$&') < b.value.replace(regex, '$&') ? a : b)).value;
                  groupItem.productValueList.forEach((product) => {
                    if (product.highlightType && product.value === minVal) product.highlight = true;
                  });
                  break;
                }
                // 最大
                case 2: {
                  const minVal = compareTargetList.reduce((a, b) => (a.value.replace(regex, '$&') > b.value.replace(regex, '$&') ? a : b)).value;
                  groupItem.productValueList.forEach((product) => {
                    if (product.highlightType && product.value === minVal) product.highlight = true;
                  });
                  break;
                }
                // ○
                case 3: {
                  compareTargetList.forEach((product) => {
                    if (product.highlightType && product.value === '○') product.highlight = true;
                  });
                  break;
                }
                default:
                  break;
              }
            }
          });
        }
      });

      return group;
    });

    /** -------------------------------------------------------------
     * スタイル制御
     ------------------------------------------------------------- */
    /**
     * 商品数による制御値
     */
    const styles = computed(() => {
      return {
        '--item-count': state.compareList.length
      };
    });

    /**
     * スクロールイベント検出：「絞り込み」「並び替えボタン」の固定表示切り替え
     */
    const onScroll = () => {
      const headerHeight = header.headerHeight;

      // fixed用（商品追加）
      if (state.addProductBtnWrapRef) {
        if (headerHeight > state.addProductBtnWrapRef.clientHeight + state.addProductBtnWrapRef.getBoundingClientRect().top) {
          state.addProductBtnFixed = true;
        } else {
          state.addProductBtnFixed = false;
        }
      }
      // fixed用（商品比較ヘッダー）
      if (state.compareListRef && state.productMainItemRef && state.fixedProductMainItemRef) {
        if (headerHeight > state.productMainItemRef.clientHeight + state.productMainItemRef.getBoundingClientRect().top) {
          state.productMainItemFixed = true;
          state.fixedProductMainItemRef.style.top = headerHeight + 'px';
          const mainScrollLeft = document.getElementById('product-main-item')?.scrollLeft;
          if (mainScrollLeft) {
            document.getElementById('fixed-product-main-item')?.scroll(mainScrollLeft, 0);
          }
        } else {
          state.productMainItemFixed = false;
          state.fixedProductMainItemRef.style.top = '';
        }
      }
    };

    onUpdated(() => {
      // 「固定ヘッダ」との横スクロール連携
      document.getElementById('product-main-item')?.addEventListener('scroll', function() {
        const mainScrollLeft = document.getElementById('product-main-item')?.scrollLeft;
        if (mainScrollLeft) {
          document.getElementById('fixed-product-main-item')?.scroll(mainScrollLeft, 0);
        }
      });
      document.getElementById('fixed-product-main-item')?.addEventListener('scroll', function() {
        const fixedItemScrollLeft = document.getElementById('fixed-product-main-item')?.scrollLeft;
        if (fixedItemScrollLeft) {
          document.getElementById('product-main-item')?.scroll(fixedItemScrollLeft, 0);
        }
      });
    });

    /** -------------------------------------------------------------
     * イベント(コンポーネント)
     ------------------------------------------------------------- */
    /**
     * お気に入りボタン押下
     */
    const clickFavorited = (janCode: string, favorited: boolean) => {
      state.compareList.forEach((product) => {
        if (product.janCode === janCode) product.favorited = favorited;
      });
    };

    /**
     * 削除ボタン押下
     */
    const clickRemove = async (janCode: string) => {
      // URLの修正
      await comparison.remove(janCode);
      window.history.pushState(null, document.title, `${context.root.$route.path}?prd=${comparison.comparisonList.join('-')}`);
      init(false);
    };

    /**
     * 移動
     */
    const swap = (index1: number, index2: number) => {
      const swapList = state.compareList;
      state.compareList = [];
      swapList[index1] = [swapList[index2], (swapList[index2] = swapList[index1])][0];
      state.compareList = swapList;
    };

    /**
     * 製品追加ボタン押下
     */
    const toProductList = () => {
      const param = condition.recentCondition || {};
      const storageSort = condition.recentSort;
      const storageDisplayCount = condition.recentDisplayCount;
      if (param || storageSort || storageDisplayCount) {
        if (storageSort) param['sort'] = storageSort;
        if (storageDisplayCount) param['limit'] = storageDisplayCount;
        context.root.$router.push({
          name: 'product-list-page',
          query: param
        });
      } else {
        context.root.$router.push({ name: 'product-list-page' });
      }
    };

    return {
      getYouTubeUrl,
      ...toRefs(state),
      styles,
      productValiationItems,
      productPerformanceGroup,
      onScroll,
      clickFavorited,
      clickRemove,
      swap,
      toProductList
    };
  }
});
</script>

<style lang="scss">
/** -------------------------------
  共通
------------------------------- */
$compare-border: solid 1px $ec-light-grey2;
.list-group-body {
  display: flex;

  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1460px;
    border: $compare-border;
    background: $bg-white;
    z-index: 5;
    overflow: auto;
  }

  > * {
    flex: 0 0 auto;
    width: 243px;

    &:not(:first-child) {
      border-left: $compare-border;
    }
    &.item-count {
      width: calc(100% / var(--item-count)) !important;
    }
  }
}

.container-narrow {
  .list-group-body {
    &.fixed {
      margin: 0 auto;
      width: calc(100% - 16px);
    }

    > * {
      width: 45%;
    }
  }
}
</style>

<style lang="scss" scoped>
/** -------------------------------
  共通
------------------------------- */
$compare-border: solid 1px $ec-light-grey2;

.highlight {
  background-color: $bg-light-red2 !important;
}

/** -------------------------------
  商品比較ページ 960px以上
------------------------------- */
// IE11対応
.container-wide {
  max-width: $ec-contents-max-width;
}

// ページタイトル
.page-title {
  font-size: 28px;
}

// 製品を追加ボタン
.add-product-btn-area {
  display: block;
  width: 100%;
  text-align: right;
}
.add-product-btn {
  position: relative;
  width: 400px;
  font-weight: bold;

  &-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  &.fixed {
    position: fixed;
    right: -2px;
    bottom: 20px;
    width: 160px;
    height: 64px;
  }
}

// 比較商品一覧
.compare-list {
  border: $compare-border;
  overflow: auto;
}

// 基本項目
.product-basic-item {
  &-btn {
    width: 100%;
    height: auto !important;
    min-height: 40px;
    padding: 4px 16px !important;
    text-align: left;
    border-color: $ec-light-grey;
    justify-content: start;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    ::v-deep .v-btn__content {
      flex: unset;
      color: $text-black !important;
      display: inline-block;
      word-break: break-word;
      white-space: normal !important;
    }

    &.color-btn {
      position: relative;
      padding-left: 3em !important;

      &::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 8px;
        right: auto;
        margin: auto;
        border: solid 1px transparent;
        background-color: transparent;
        border-radius: 50%;
        opacity: 1;
      }

      &.icon {
        &-multi::before {
          background: url('../../assets/compare/multicolor.png') no-repeat center center;
        }
        &-yellow::before {
          border-color: $compare-color-yellow;
          background-color: $compare-color-yellow;
        }
        &-orange::before {
          border-color: $compare-color-orange;
          background-color: $compare-color-orange;
        }
        &-green::before {
          border-color: $compare-color-green;
          background-color: $compare-color-green;
        }
        &-gold::before {
          border-color: $compare-color-gold;
          background-color: $compare-color-gold;
        }
        &-silver::before {
          border-color: $compare-color-silver;
          background-color: $compare-color-silver;
        }
        &-purple::before {
          border-color: $compare-color-purple;
          background-color: $compare-color-purple;
        }
        &-pink::before {
          border-color: $compare-color-pink;
          background-color: $compare-color-pink;
        }
        &-brown::before {
          border-color: $compare-color-brown;
          background-color: $compare-color-brown;
        }
        &-black::before {
          border-color: $compare-color-black;
          background-color: $compare-color-black;
        }
        &-blue::before {
          border-color: $compare-color-blue;
          background-color: $compare-color-blue;
        }
        &-white::before {
          border-color: $ec-light-grey2;
          background-color: $compare-color-white;
        }
        &-red::before {
          border-color: $compare-color-red;
          background-color: $compare-color-red;
        }
      }
    }
  }
}

/** -------------------------------
  商品比較ページ 960px未満
------------------------------- */
.container-narrow {
  // ページタイトル
  .page-title {
    font-size: 16px;
  }

  // 製品を追加ボタン
  .add-product-btn {
    width: 170px;
    font-weight: normal;

    &-icon {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }

    &.fixed {
      position: fixed;
      bottom: 76px;
      right: 0px;
      width: 94px;
      height: 64px;
      z-index: 110;

      ::v-deep .v-btn__content {
        padding-top: 20px;
      }

      .add-product-btn-icon {
        display: block;
        bottom: unset;
        right: 0;
        left: 0;
      }
    }
  }

  // 比較商品一覧
  .compare-list {
    margin: 0 8px;
  }
}
</style>
