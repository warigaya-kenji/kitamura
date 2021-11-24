<template>
  <v-app>
    <div class="343">
      <!-- ↓ パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="main-contents-wrap">
        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-img
                contain
                src="/ec/images2/special/camera/lensfilter/343/bnr01.jpg"
                max-width="950"
                max-height="348"
                alt="明るい場所でも白飛びせずに背景をぼかせます！おすすめのNDフィルター ケンコーPRO1D プロND"
                class="mb-3"
              ></v-img>
              <a href="/ec/special/camera/lensfilter/nd500"
                ><v-img
                  contain
                  src="/ec/images2/special/camera/lensfilter/343/bnr_toplink_950-130.jpg"
                  max-width="950"
                  max-height="130"
                  alt="明るい場所でも白飛びせずに背景をぼかせます！おすすめのNDフィルター ケンコーPRO1D プロND"
                ></v-img></a
            ></v-col>
          </v-row>
        </v-container>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <subText :textItem="'ND・減光フィルター「ケンコー PRO1D プロND4/ND8/ND16」 一覧'" />
        <product-list-by-special-id class="mb-5" :specialId="343" />
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
import SubText from '@/components/common/special/subtext.vue';

export default Vue.extend({
  name: '343',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    subText: SubText
  },
  setup: (props, context) => {
    document.title = 'ND・減光フィルター「ケンコー PRO1D プロND4/ND8/ND16」 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'おすすめのNDフィルターは、明るい場所でも白とびせずに背景をボカせたり、水の流れを表現した写真撮影が可能になります。ケンコー PRO1D プロND 減光フィルターはカメラのキタムラにおまかせください！'
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
          path: 'レンズフィルター特集',
          linkUrl: '/ec/special/camera/lensfilter',
          disabled: false
        },
        {
          path: 'ND・減光フィルター「ケンコー PRO1D プロND4/ND8/ND16」',
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
