<template>
  <v-app>
    <div class="tokutokusueoki-fe-lens">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="mr-2 text-body-2">トクトク据置対象商品</h1>
        <v-img :src="titleImage" alt="トクトク据置"></v-img>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="3" v-for="(lens, i) in lensList" :key="i" class="border-solid pa-2">
              <a :href="lens.href">
                <img :src="lens.src" :alt="lens.alt" width="40" height="40" class="middle" />
                {{ lens.name }}
                <v-icon right small color="black">fa fa-chevron-right</v-icon>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="4536" />

        <kitamuraService />
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
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'tokutokusueoki-fe-lens',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    kitamuraService: KitamuraService,
  },
  setup: () => {
    document.title = 'トクトク据置対象 ソニー FEレンズ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '【トクトク据置対象 ソニー FEレンズ】月々のお支払いを圧倒的に安く抑えられる｢トクトク据置｣ 商品の返却時の買取り予定価格を残価額とし、残価額を差し引いた代金を24ヶ月の分割でお支払いできます'
      );
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'トクトク据置',
          linkUrl: '/ec/special/general/tokutokusueoki',
          disabled: false
        },
        {
          path: '対象商品',
          disabled: true
        }
      ],
      titleImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/tokutokusueoki/sueoki00.jpg',
      lensList: [
        { name: 'キヤノン EFレンズ', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/tokutokusueoki/sueoki-item02.jpg', alt: 'キヤノン EFレンズ | アイコン', href: '/ec/special/general/tokutokusueoki/ef-lens' },
        { name: 'キヤノン RFレンズ', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/tokutokusueoki/sueoki-item03.jpg', alt: 'キヤノン RFレンズ | アイコン', href: '/ec/special/general/tokutokusueoki/rf-lens' },
        { name: 'ニコン Zレンズ', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/tokutokusueoki/sueoki-item04.jpg', alt: 'ニコン Zレンズ | アイコン', href: '/ec/special/general/tokutokusueoki/z-lens' },
        { name: 'ソニー FEレンズ', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/tokutokusueoki/sueoki-item05.jpg', alt: 'ソニー FEレンズ | アイコン', href: '/ec/special/general/tokutokusueoki/fe-lens' },
      ]
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style scoped>
.middle {
  vertical-align: middle;
}
.border-solid {
  border: 1px #bbb solid;
}
</style>
