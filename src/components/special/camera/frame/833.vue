<template>
  <v-app>
    <div class="833">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="text-center">
          <img
            class="mb-1 banner-img"
            src="https://shop.kitamura.jp/ec/images2/special/camera/frame/833/topbnr.jpg"
            alt="大型額縁におすすめ裏打ちシート/バックシート・裏打ちシートの貼り方"
          />
        </h1>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'大型額縁におすすめ裏打ちシート/バックシート・裏打ちシートの貼り方'" />
        <product-list-by-special-id class="mb-5" :specialId="833" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';
import SubText from '@/components/common/special/subtext.vue';

export default Vue.extend({
  name: '833',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText
  },
  setup: (props, context) => {
    document.title = '大型額縁におすすめ裏打ちシート/バックシート・裏打ちシートの貼り方 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '大型額縁をお買い求めのお客さま、写真の波打ちを防止す裏打ちシートを一緒にご購入をおすすめ！裏打ちシートの紹介。写真展や、作品として大きく伸ばした写真には裏打ちシートを貼りましょう！カメラ専門店カメラのキタムラネットショップへおまかせください。'
      );
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '見て選ぶ・見て探す。おすすめフォトフレーム・額',
          linkUrl: '/ec/special/camera/frame',
          disabled: true
        },
        {
          path: '大型額縁におすすめ裏打ちシート/バックシート・裏打ちシートの貼り方',
          disabled: true
        }
      ]
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  .wp {
    display: block;
    text-align: center;
    white-space: pre-wrap !important;
  }
  .banner-img {
    max-width: 100%;
    height: auto;
  }
}
</style>
