<template>
  <div
    id="my-page-coupon-list"
    :class="{
      'container-wide': $vuetify.breakpoint.mdAndUp,
      'container-narrow': $vuetify.breakpoint.smAndDown
    }"
  >
    <my-page-layout :title="title" :breadcrumbs="breadcrumbs" :requireFetchCoupon="false">
      <div class="coupon-list" :class="{ 'ec-back-color': $vuetify.breakpoint.mdAndUp }" v-if="!loaded.coupons || (coupons && coupons.length > 0)">
        <!-- ローディング -->
        <div class="loading-coupon-list" v-if="!loaded.coupons">
          <section-loading />
        </div>

        <!-- 持っているクーポン一覧 -->
        <template v-else>
          <v-row class="coupon-area" v-for="(coupon, index) in getCoupons" :key="index">
            <v-col cols="12" md="7" class="coupon-left-area">
              <div class="coupon-name-area">{{ coupon.couponName }}</div>
              <div
                class="coupon-contents-area"
                v-html="showEmphasisCouponContents(coupon.couponType, coupon.description)"
                v-if="coupon.couponType && coupon.description"
              ></div>
            </v-col>

            <v-col cols="12" md="5" class="coupon-right-area">
              <v-row>
                <v-col cols="6">
                  クーポンコード
                </v-col>
                <v-col cols="6">
                  <span v-if="coupon.isCouponCodeNeeded && coupon.couponCode != null">{{ coupon.couponCode }}</span>
                  <span v-else><span class="d-inline-block">クーポンコード</span><span class="d-inline-block">入力不要</span></span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">使用可能枚数</v-col>
                <v-col cols="6">{{ coupon.couponRemainingNum.toLocaleString() }}枚</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">併用</v-col>
                <v-col cols="6">
                  <span v-if="coupon.isCombined">可</span>
                  <span v-else>不可</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">有効期限</v-col>
                <v-col cols="6">{{ coupon.validEndDttm | date('YYYY/MM/DD') }}</v-col>
              </v-row>
            </v-col>

            <v-col cols="12" class="coupon-target-products-area" v-if="coupon.targetItemDetails && coupon.targetItemDetails.length > 0">
              <h3>対象商品</h3>
              <simple-product-slider :items="coupon.targetItemDetails" />
            </v-col>
          </v-row>
        </template>
      </div>

      <!-- 持っているクーポンがない場合 -->
      <div class="not-found-area" v-else>
        <i class="fad fa-ticket not-found-icon"></i>
        <p>利用可能なクーポンはありません</p>
      </div>

      <!-- もっと見るボタン -->
      <more-items-button @click="addShowCouponLength()" v-if="coupons.length > showCouponLength" />
    </my-page-layout>

    <back-button to="/ec/mypage" v-if="$vuetify.breakpoint.smAndDown"> マイページトップへ戻る </back-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted, watch, computed } from '@vue/composition-api';
import SectionLoading from '@/components/common/section-loading.vue';
import UserService from '@/logic/user.service';
import MyPageLayout from './common/my-page-layout.vue';
import { CouponItem, CouponTargetItem } from '@/types/coupon-list';
import { formatPrice, sortByRowNo } from '@/logic/utils';
import BackButton from '@/components/common/back-button.vue';
import MoreItemsButton from '@/components/common/more-items-button.vue';
import SimpleProductSlider from '@/components/common/simple-product-slider.vue';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';

export default Vue.extend({
  name: 'coupon-list',
  components: {
    'section-loading': SectionLoading,
    'my-page-layout': MyPageLayout,
    'back-button': BackButton,
    'more-items-button': MoreItemsButton,
    'simple-product-slider': SimpleProductSlider
  },
  setup: (props, context) => {
    const { authorizer, mypageMenuStore } = context.root.$store;

    const state = reactive({
      // 画面タイトル
      title: '持っているクーポン',
      // パンくずリスト
      breadcrumbs: [
        { path: 'TOP', linkUrl: '/' },
        { path: 'マイページTOP', linkUrl: '/ec/mypage' },
        { path: '持っているクーポン', linkUrl: '' }
      ],
      // 持っているクーポンリスト
      coupons: [] as Array<CouponItem>,
      showCouponLength: 9,
      // 取得した持っているクーポンのページ番号
      couponPage: 1,
      // ロード状態
      loaded: {
        coupons: false
      }
    });

    /**
     * 対象商品を取得する
     * @param targetItem JANコード
     */
    const fetchProduct = async (targetItem: CouponTargetItem[] = []) => {
      try {
        const janCodeList = targetItem.map((item) => item.janCode);
        const productListResult = await ProductService.fetchProducts(janCodeList, true);
        return productListResult.items;
      } catch (error) {
        console.error(error);
        return [] as Array<ProductDetail>;
      }
    };

    /**
     * 持っているクーポンリストの取得
     */
    const fetchCouponList = async () => {
      try {
        // 持っているクーポン一覧を取得
        const result = await UserService.fetchCouponList();

        // 「rowNo」を昇順にソートする
        // ページ毎に「rowNo」が新規に割り振られているため、レスポンス内容の中でソートする
        const coupons = sortByRowNo<CouponItem>(result.couponInfo);
        state.coupons = coupons;

        // 対象商品を取得する
        state.coupons.forEach(async (coupon, index) => {
          const targetProducts = await fetchProduct(coupon.targetItem);
          // $setを使用して動的に値を検知されるようにしている
          context.root.$set(state.coupons[index], 'targetItemDetails', targetProducts);
        });

        // メニューにクーポン数を表示する
        mypageMenuStore.couponCount = coupons.length;
      } catch (error) {
        console.error(error);
        state.coupons = [] as Array<CouponItem>;
      } finally {
        state.loaded.coupons = true;
      }
    };

    onMounted(() => {
      if (authorizer.isLoggedIn) {
        fetchCouponList();
      }
    });

    watch(
      () => authorizer.isLoggedIn,
      () => {
        if (authorizer.isLoggedIn) fetchCouponList();
      }
    );

    /**
     * 画面表示する持っているクーポンを取得する
     */
    const getCoupons = computed(() => {
      const coupons = state.coupons.slice(0, state.showCouponLength);
      return coupons;
    });

    /**
     * クーポン説明を強調表示する
     * @param type クーポン種類
     * @param text クーポン説明文
     */
    const showEmphasisCouponContents = (type: number, text: string) => {
      let regex: RegExp;
      switch (type) {
        case 1:
          regex = /\b(\d)+(,)?(\d)+\b円/g;
          break;
        case 2:
          regex = /\b(\d)+(.)?(\d)*\b(％|%)/g;
          break;
        case 3:
          regex = /送料無料/g;
          break;
        default:
          return text;
      }
      return text.replace(regex, '<span class="emphasis">$&</span>');
    };

    /**
     * 表示する持っているクーポンを増やす
     */
    const addShowCouponLength = () => {
      state.showCouponLength += 9;
    };

    return {
      ...toRefs(state),
      formatPrice,
      getCoupons,
      showEmphasisCouponContents,
      addShowCouponLength
    };
  }
});
</script>

<style lang="scss" scoped>
/** -------------------------------
  クーポン一覧
------------------------------- */
.loading-coupon-list {
  height: 20vh;
  width: 100%;
}

// secondary色のリンク
.secondary-link {
  a:hover .secondary-link-text {
    color: inherit;
  }

  a .secondary-link-text {
    color: $text-secondary;
  }
}

.coupon {
  &-list {
    padding: 8px;

    > .row {
      margin: 16px;
      padding: 0;
    }
  }

  &-area {
    background-color: $bg-white;
    border: 1px solid $ec-black;
  }

  &-left-area {
    position: relative;
  }

  &-name-area {
    height: 60%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-contents-area {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    ::v-deep .emphasis {
      font-size: 1.2em;
      color: $text-primary;
      font-weight: bold;
    }
  }

  &-right-area {
    padding: 0;

    .row {
      margin: 0;
    }

    .row:not(:first-child) {
      border-top: 1px dotted $ec-grey;
    }

    .col {
      padding: 4px 0 4px 1em;

      &:first-child {
        background-color: rgba(179, 179, 179, 1);
      }
    }
  }

  &-target-products {
    &-area {
      border-top: 1px solid;
    }
  }
}

.not-found {
  &-area {
    text-align: center;
  }

  &-icon {
    color: $ec-light-grey;
    font-size: 50px;
    margin-bottom: 4px;
  }
}

/** -------------------------------
  クーポン一覧 960px未満
------------------------------- */
.container-narrow {
  .coupon {
    &-list {
      padding: 8px 0;

      > .row {
        margin: 0 0 16px;
      }
    }

    &-item {
      padding: 1px 0;
    }

    &-left-area {
      border-bottom: 1px solid $ec-black;
    }
  }
}
</style>
