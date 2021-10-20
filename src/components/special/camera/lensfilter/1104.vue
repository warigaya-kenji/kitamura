<template>
  <v-app>
    <div class="lensfilter-1104">
      <div class="main-contents-wrap pa-0">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <a v-scroll-to="'#feature'">
          <v-img
            src="https://shop.kitamura.jp/ts_rsc/269/images/bnr_720-.jpg"
            max-width="720"
            max-height="120"
            alt="辰野清が語る「風景写真」の記事を見る。水表現の決め手はNDフィルターによるシャッタースピードコントロール"
            class="mx-auto"
          ></v-img>
        </a>

        <h3 class="my-2 text-subtitle-1 text-center font-weight-bold">風景写真「流れる夏色 魅惑の渓流・滝写真」NDフィルターで水の流れを撮る！ 商品一覧</h3>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1104" />

        <!--==================== main ====================-->
        <v-img
          contain
          id="feature"
          src="https://shop.kitamura.jp/ts_rsc/269/images/950-a.jpg"
          max-width="950"
          max-height="1118"
          alt="風景写真「流れる夏色 魅惑の渓流・滝風景」辰野 清"
        />
        <v-img
          contain
          src="https://shop.kitamura.jp/ts_rsc/269/images/950-b.jpg"
          max-width="950"
          max-height="1118"
          alt="辰野清が語る風景写真術！水表現の決め手はNDフィルターによるシャッタースピードコントロール"
        />
        <v-img
          contain
          src="https://shop.kitamura.jp/ts_rsc/269/images/950-c.jpg"
          max-width="950"
          max-height="1118"
          alt="辰野清が語る風景写真術！水表現の決め手はNDフィルターによるシャッタースピードコントロール"
        />

        <!--▼関連おすすめ特集・プリントサービス-->
        <div class="kanren mt-4">関連おすすめ特集・プリントサービス</div>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'lensfilter-1104',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = '風景写真「流れる夏色 魅惑の渓流・滝写真」NDフィルターで水の流れを撮る！ | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'NDフィルターで水の流れを撮る！辰野清が語る「風景写真」の記事を掲載。ND（減光）フィルターは日本最大級のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。');
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '風景写真「流れる夏色 魅惑の渓流・滝写真」NDフィルターで水の流れを撮る！',
          disabled: true
        }
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lensfilter',
          img: 'https://shopimg.kitamura.jp/images/banner/1342.gif',
          alt: '話効果・種類が分かる！レンズフィルター特集'
        },
        {
          href: '/ec/special/general/photocon-learn',
          img: 'https://shopimg.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style scoped>
.kanren {
    border-bottom: 2px #d61541 solid;
    background-repeat: no-repeat;
    color: #593432;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    padding: 5px 0 0 35px;
    text-decoration: none;
}
</style>
