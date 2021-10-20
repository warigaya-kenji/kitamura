<template>
  <v-app>
    <div class="parts03">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <v-card img="/ec/images2/special/camera/tripod/bn_ctg00.gif" height="130px" flat class="pa-4" v-if="$vuetify.breakpoint.mdAndUp">
          <v-card-title class="tx-40 font-weight-black ml-10 mt-4">クイックシュー 商品一覧</v-card-title>
        </v-card>

        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          src="	/ec/images2/special/camera/tripod/bn_spctg00.gif"
          alt="おすすめ三脚の選び方"
          max-width="720px"
          max-height="99px"
          class="mx-auto"
        />
        <p class="text-right"><a href="/ec/special/camera/tripod">三脚特集へ戻る</a></p>

        <v-sheet v-if="$vuetify.breakpoint.smAndDown" class="pa-2 white--text text-center mb-2" color="#aa0000">クイックシュー</v-sheet>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="2345" />

        <tripodTypeFooter />
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
import TripodTypeFooter from '@/components/common/special/tripod/tripod-type-footer.vue';



export default Vue.extend({
  name: 'parts03',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    tripodTypeFooter: TripodTypeFooter
  },
  setup: (props, context) => {
    document.title = 'おすすめクイックシュー | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '三脚の選び方 |ベルボン、スリック、マンフロットなど人気メーカーのおすすめ三脚を、撮影シーン別にご紹介☆三脚を使ってワンランクUPした写真を撮りたい人に')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'おすすめ三脚の選び方',
          linkUrl: '/ec/special/camera/tripod',
          disabled: false
        },
        {
          path: 'クイックシュー商品一覧',
          disabled: true
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

<style lang="scss" scoped>
.tx-40 {
  font-size: 40px;
}
</style>
