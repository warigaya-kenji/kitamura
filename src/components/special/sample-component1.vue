<template>
  <div class="component1">
    <div class="component1-info">
      <div>テンプレートC</div>
      <div>コンポーネント : sample-component1.vue</div>
    </div>

    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->

    <div class="main-contents-wrap">
      <!-- ↓ サンプル：画像の読み込み -->
      <img class="mb-5" src="@/assets/special/img/sample.jpg" @error="noimage" />
      <!-- ↑ サンプル：画像の読み込み -->

      <!-- ↓ サンプル：メイン商品 -->
      <div class="main-product mb-5" v-if="Object.keys(mainProduct).length">
        <h2 class="title mb-2 font-weight-bold">{{ mainProduct.itemName }}</h2>
        <div class="main-product-area d-flex py-3 px-10">
          <div class="main-product-area-left">
            <router-link class="main-product-link" :to="`/ec/pd/${mainProduct.janCode}`">
              <img class="main-product-img" :src="mainProduct.images[0].imagePath" @error="noimage" />
              <p class="main-product-name">{{ mainProduct.itemName }}</p>
            </router-link>
          </div>
          <div class="main-product-area-right">
            <p class="main-product-price text-center">
              <span class="d-inline-block">価格</span><span class="text-h4 primary--text">¥{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
              ><span class="d-inline-block">(税込)</span>
            </p>
            <v-btn
              class="main-product-btn text-h5 font-weight-bold"
              dark
              block
              color="rgba(255, 132, 0, 1)"
              height="60px"
              :href="`/ec/pd/${mainProduct.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              ご購入はこちら
            </v-btn>
          </div>
        </div>
      </div>
      <!-- ↑ サンプル：メイン商品 -->

      <!-- ↓ サンプル：比較 -->
      <div class="product-comparison mb-5" v-if="comparisonDetailList && comparisonDetailList.length">
        <h2 class="title mb-2 font-weight-bold">ソニー α1 / α9II / キヤノン EOS-1D X Mark III / ニコン D6 比較</h2>
        <p class="mb-2">ソニー α1 / α9II / キヤノン EOS-1D X Mark III / ニコン D6 を比較しました</p>
        <table class="product-comparison-table">
          <tbody>
            <tr>
              <th>商品名</th>
              <td v-for="product in comparisonDetailList" :key="product.janCode">{{ product.itemName }}</td>
            </tr>
            <tr>
              <th>発売日</th>
              <td>2021年3月19日発売</td>
              <td>2019年11月1日発売</td>
              <td>2020年2月14日発売</td>
              <td>2020年6月5日発売</td>
            </tr>
            <tr>
              <th>価格</th>
              <td v-for="product in comparisonDetailList" :key="product.janCode">
                <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                >（税込）
              </td>
            </tr>
            <tr>
              <th>有効画素数</th>
              <td>約5010万画素</td>
              <td>約2420万画素</td>
              <td>約2010万画素</td>
              <td>約2082万画素</td>
            </tr>
            <tr>
              <th>測距点</th>
              <td>759点 (位相差検出方式)/425点 (コントラスト検出方式)</td>
              <td>693点（位相差検出方式）/425点（コントラスト検出方式）</td>
              <td>191点（クロス測距点：最大155点）</td>
              <td>105点（105点クロスセンサー）</td>
            </tr>
            <tr>
              <th>撮像素子</th>
              <td>35mmフルサイズ<br />積層型CMOSセンサー</td>
              <td>35mmフルサイズ<br />積層型CMOSセンサー</td>
              <td>35mmフルサイズ<br />CMOSセンサー</td>
              <td>35mmフルサイズ(ニコンFXフォーマット)<br />CMOSセンサー</td>
            </tr>
            <tr>
              <th>連続撮影速度</th>
              <td>メカシャッター:最高約10コマ/秒<br />電子シャッター:最高約30コマ/秒</td>
              <td>メカシャッター:最高約10コマ/秒<br />電子シャッター:最高約20コマ/秒</td>
              <td>ファインダー：最高約16コマ/秒<br />ライブビュー：最高約20コマ/秒</td>
              <td>最高約14コマ/秒</td>
            </tr>
            <tr>
              <th>シャッタースピード</th>
              <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/32000-30秒</td>
              <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/32000-30秒</td>
              <td>メカシャッター：1/8000-30秒、バルブ<br />電子シャッター：1/8000-0.5秒</td>
              <td>1/8000-30秒、バルブ、Time</td>
            </tr>
            <tr>
              <th>ISO感度</th>
              <td>ISO100-32000 (拡張: 下限ISO50、上限ISO102400)</td>
              <td>ISO100-51200 (拡張：下限ISO50、上限ISO204800)</td>
              <td>ISO100-102400(拡張：下限ISO50、上限ISO819200)</td>
              <td>ISO100-102400(拡張：下限ISO50、上限ISO3280000)</td>
            </tr>
            <tr>
              <th>ファインダー</th>
              <td>943万ドット<br />1.6cm (0.64型) 電子式ビューファインダー</td>
              <td>368万ドット<br />1.3cm (0.5型) 電子式ビューファインダー</td>
              <td>ペンタプリズム使用、アイレベル式</td>
              <td>ペンタプリズム使用、アイレベル式</td>
            </tr>
            <tr>
              <th>視野率/倍率</th>
              <td>100%/約0.90倍</td>
              <td>100%/約0.78倍</td>
              <td>100%/約0.76倍</td>
              <td>100%/約0.72倍</td>
            </tr>
            <tr>
              <th>液晶モニター</th>
              <td>約144万ドット<br />3.0型チルト式TFT駆動</td>
              <td>約144万ドット<br />3.0型チルト式TFT駆動</td>
              <td>約210万ドット<br />3.2型TFT式(非可動)</td>
              <td>約236万ドット<br />3.2型TFT式(非可動)</td>
            </tr>
            <tr>
              <th>静止画撮影可能枚数/時間<br />(CIPA規格基準)</th>
              <td>ファインダー使用時: 約430枚<br />液晶モニター使用時: 約530枚</td>
              <td>ファインダー使用時：約500枚<br />液晶モニター使用時：約690枚</td>
              <td>ファインダー撮影：約2850枚<br />ライブビュー撮影：約610枚</td>
              <td>撮影可能コマ数：約3580コマ<br /></td>
            </tr>
            <tr>
              <th>連続動画撮影時</th>
              <td>ファインダー使用時: 約145分<br />液晶モニター使用時: 約150分</td>
              <td>ファインダー使用時：約195分<br />液晶モニター使用時：約200分</td>
              <td>約4時間40分</td>
              <td>約105分</td>
            </tr>
            <tr>
              <th>手ブレ補正</th>
              <td>5.5段<br />センサーシフト方式5軸補正</td>
              <td>5.5段<br />センサーシフト方式5軸補正</td>
              <td>静止画:レンズ内手振れ補正のみ<br />動画:電子IS可能</td>
              <td>静止画:レンズ内手振れ補正のみ<br />動画:電子手ブレ補正あり</td>
            </tr>
            <tr>
              <th>外形寸法</th>
              <td>約128.9 x 96.9 x 80.8 mm</td>
              <td>約128.9ｘ96.4ｘ77.5 mm</td>
              <td>約158.0×167.6×82.6 mm</td>
              <td>約160×163×92mm</td>
            </tr>
            <tr>
              <th>質量（本体のみ）</th>
              <td>約652g</td>
              <td>約593g</td>
              <td>約1250g</td>
              <td>約1270g</td>
            </tr>
            <tr>
              <th>カードスロット</th>
              <td>両対応デュアルスロット<br />CFexpress(タイプA)<br />SDカード</td>
              <td>デュアルスロット<br />SDカード<br />(slot1:UHS-II support)</td>
              <td>デュアルスロット<br />CFexpressメモリーカード(タイプB)</td>
              <td>デュアルスロット<br />CFexpressメモリーカード(タイプB)<br />XQDカード</td>
            </tr>
            <tr>
              <th>動画記録方式</th>
              <td>8K/4K/フルHD</td>
              <td>4K/フルHD</td>
              <td>4K/フルHD</td>
              <td>4K/フルHD/HD</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- ↑ サンプル：比較 -->

      <!-- ↓ サンプル：動画で見る -->
      <div class="product-video mb-5">
        <h2 class="title mb-2 font-weight-bold">動画で見る ソニー α1</h2>
        <div class="product-video-wrap mb-4">
          <p class="product-video-text">SONYのフラッグシップ機・ソニー α1を先行体験</p>
          <div class="product-video-contents">
            <iframe
              class="lozad"
              type="text/html"
              src="https://www.youtube.com/embed/2CFa12pvTu4#?rel=0"
              frameborder="0"
              allowfullscreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <div class="product-video-wrap">
          <p class="product-video-text">ソニー α1</p>
          <div class="product-video-contents">
            <iframe
              class="lozad"
              type="text/html"
              src="https://www.youtube.com/embed/H0om2qHS1o4"
              frameborder="0"
              allowfullscreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
      <!-- ↑ サンプル：動画で見る -->

      <!-- ↓ サンプル：ShaSha -->
      <div class="product-shasha mb-5">
        <h2 class="title mb-2 font-weight-bold">ShaSha:ソニー α1 レビュー｜スポーツ撮影現場で使ってみました！</h2>
        <v-card class="product-shasha-wrap pa-4" outlined>
          新しい型番の「α1」。発表されたスペックをみている段階では、すぐの導入を見送ろうと考えていました。しかし実際に手に取って触ってみると、その思いはすぐに変わりました。<br />
          今回は筆者が今まで使ってきたα9との比較を交えて、スポーツ撮影などの動体撮影をメインにα1を紹介します。...<a
            class="product-shasha-link"
            href="https://shasha.kitamura.jp/article/480653303.html "
            target="_blank"
            >続きを読む <img src="@/assets/special/img/sample1/shashabnr4.jpg" alt="イメージ" class="product-shasha-img mt-4"
          /></a>
        </v-card>
      </div>
      <!-- ↑ サンプル：ShaSha -->

      <!-- ↓ サンプル：価格・人気アクセサリー -->
      <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
        <h2 class="title mb-2 font-weight-bold">ソニー α1 価格・人気アクセサリー</h2>
        <div class="product-list-wrap">
          <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
            <div class="product-list-item-img mb-4 text-center">
              <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
              /></router-link>
            </div>
            <div class="product-list-item-name-wrap mb-2">
              <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                ><div class="product-list-item-name">{{ product.itemName }}</div></router-link
              >
            </div>
            <div class="product-list-item-price-wrap">
              特別価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
              >（税込）
            </div>
          </div>
        </div>
      </div>
      <!-- ↑ サンプル：価格・人気アクセサリー -->

      <!-- ↓ サンプル：検索APIでの表示 -->
      <div class="product-list mb-5" v-if="productDetailList && productDetailList.length">
        <h2 class="title mb-2 font-weight-bold">検索での表示</h2>
        <div class="product-list-wrap">
          <product
            v-for="item in results"
            :key="item.itemid"
            :product="item"
            :display-price-type="displayProductPriceType"
            :used-products-summary="usedProductsSummary.filter((summary) => summary.janCode === item.itemid)[0]"
            :isSpecial="true"
          />
        </div>
      </div>
      <!-- ↑ サンプル：検索APIでの表示 -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Product from '@/components/product-list/product.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import { ProductDetail, UsedProductsSummary } from '@/types/product';
import { ConditionItem } from '@/types/conditions';
import { ProductItem } from '@/types/product-list';
import { NEWER_SORT_LIST } from '@/constants/sort-list';
import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
import { SEARCH_STATE } from '@/constants/search-state';

export default Vue.extend({
  name: 'sample-component1',
  components: {
    breadcrumbs: Breadcrumbs,
    product: Product
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2021/10/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニー α1',
          linkUrl: '',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: '4548736130678',
      // 結果格納用
      mainProduct: {} as ProductDetail,
      // ↑ ---- メイン商品 ----

      // ↓ ---- 比較 ----
      // 取得するJancode
      comparisonJanCodeList: ['4548736130678', '4548736108288', '4549292146851', '4960759903402'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736130678',
        '4548736108288',
        '4548736105546',
        '4548736064539',
        '4548736064621',
        '4548736055704',
        '4548736109520',
        '4548736121249'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 価格・人気アクセサリー ----

      // ↓ ---- サンプル：検索APIでの表示 ----
      // 検索条件（項目は、仕様を参照）
      searchCondition: [
        // カテゴリー（valueTextに値を設定）
        {
          paramCode: 'category',
          paramText: '',
          value: '',
          valueText: 'ミラーレス一眼'
        },
        // キーワード
        {
          paramCode: 'keyword',
          paramText: '',
          value: 'EOS',
          valueText: ''
        },
        // メーカー
        {
          paramCode: 's3',
          paramText: '',
          value: 'シルバー',
          valueText: ''
        }
      ] as Array<ConditionItem>,
      // 並び替え (設定値は、NEWER_SORT_LIST参照)
      sort: NEWER_SORT_LIST[0].value,
      // 表示件数 (設定値は、DISPLAY_COUNT_LIST参照)
      displayCount: DISPLAY_COUNT_LIST[0].value,
      // 表示ページ
      page: 1,
      // 価格の表示制御 (option 0:新品・中古、 1:新品、 2:中古)
      displayProductPriceType: SEARCH_STATE.option[1].value,
      // 結果格納用
      results: [] as Array<ProductItem>,
      // 中古価格情報
      usedProductsSummary: [] as Array<UsedProductsSummary>
      // ↑ ---- サンプル：検索APIでの表示 ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        console.log(mainResult);
        state.mainProduct = mainResult.items[0];
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        console.error(error);
        // メイン商品
        state.mainProduct = {} as ProductDetail;
        // 比較
        state.comparisonDetailList = [] as Array<ProductDetail>;
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    /**
     * 検索結果の取得
     */
    const searchNewerProductList = async () => {
      let searchResult;
      // 新品・中古の価格表示情報を検索パラメーターに落とし込み
      state.searchCondition.push({
        paramCode: 'narrow18',
        paramText: '',
        value: state.displayProductPriceType,
        valueText: ''
      });

      // 検索結果取得
      try {
        searchResult = await ProductListService.searchNewItem(state.searchCondition, state.sort, state.displayCount, state.page);
        state.results = searchResult.items;
      } catch (error) {
        console.error(error);
        searchResult = {
          items: [] as Array<ProductItem>,
          wordItems: [] as Array<{
            keyword: string;
            items: Array<ProductItem>;
          }>
        };
      }

      // 新品用中古情報の取得
      if (
        (state.displayProductPriceType === SEARCH_STATE.option[0].value || state.displayProductPriceType === SEARCH_STATE.option[2].value) &&
        searchResult.items.length
      ) {
        const itemIds = [] as Array<string>;
        searchResult.items.forEach((item) => {
          itemIds.push(item.itemid);
        });
        try {
          const usedProductsResult = await ProductService.searchUsedProductsSummary(itemIds);
          state.usedProductsSummary = usedProductsResult.itemInfo;
        } catch (error) {
          console.error(error);
          state.usedProductsSummary = [];
        }
      }
    };

    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
      searchNewerProductList();
    });

    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss">
/* Vuetifyで生成されるDomへのスタイル適用（※scopedなしのため、該当セレクタに適用される） */
// サンプル：メイン商品 v-btn:hoverの上書き
.main-product {
  &-btn {
    &:hover {
      .v-btn__content {
        color: $text-white;
        text-decoration: underline;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.component1 {
  &-info {
    color: $text-primary;
  }
}

.main-contents-wrap {
  width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}

// サンプル：メイン商品
.main-product {
  &-area {
    background: url('../../assets/special/img/sample1/bk_line.gif') repeat scroll top left;

    &-left {
      flex: 1 1 auto;
    }
    &-right {
      flex: 1 1 auto;
    }
  }

  &-link {
    &:hover {
      .main-product-img {
        opacity: 0.7;
      }
    }
  }

  &-name {
    color: $text-blue;
  }

  &-btn {
    position: relative;

    &-icon {
      position: absolute;
      left: 10px;
    }
  }
}

// サンプル：比較
.product-comparison {
  &-table {
    font-size: 12px;
    border-collapse: collapse;
    text-align: center;

    %cell {
      width: 16%;
      padding: 12px 8px;
      border: 1px solid $ec-light-grey2;
      vertical-align: middle;
    }

    th {
      @extend %cell;
      background-color: $bg-light-grey;
    }

    td {
      @extend %cell;
    }
  }
}

// サンプル：動画で見る
.product-video {
  &-contents {
    height: 520px;
  }
}

// サンプル：ShaSha
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

// サンプル：価格・人気アクセサリー
.product-list {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: calc((100% - (12px * 3)) / 4);

    &:not(:nth-child(4n)) {
      margin-right: 12px;
    }

    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }

    &-link {
      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }

    &-name {
      height: 5em;
      color: $text-blue;
    }
  }
}
</style>
