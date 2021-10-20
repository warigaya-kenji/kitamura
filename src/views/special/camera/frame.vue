<template>
  <v-app>
    <div class="camera-frame">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <!-- <product-list-by-special-id class="mb-5" :specialId="specialId" /> -->
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import { noimage } from '@/logic/utils';
import SubText from '@/components/common/special/subtext.vue';
import { Route } from 'vue-router';

export default Vue.extend({
  name: 'camera-frame',
  components: {
    breadcrumbs: Breadcrumbs,
    // 'product-list-by-special-id': ProductListBySpecialId,
    // subText: SubText,
  },
  setup: (props, context) => {
    // document.title = 'ハンザ 差替えマットパネル | カメラのキタムラネットショップ'
    // document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ハンザ 差替えマットパネルの購入はカメラのキタムラにおまかせください！')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
      ]
    });

    /**
     * 特集IDを取得
     */
    //     const fetchProduct = async (route: Route) => {
    //       try {
    //         const pathSplitList = route.path.split('/') as String;
    //         let test = pathSplitList.substring(pathSplitList.indexOf("frame")+1, )
    //         console.log(pathSplitList)
    //       } catch (error) {
    //         console.log('rrrrr')

    //       }
    //       var url='http://www.example.com?id=2&page=3';
    // if(url.indexOf("?")>=0){
    // let str1=url.substring(url.indexOf("?")+1,url.length);
    // }
    // document.write(str1+"<br>");

    // var reg=new RegExp("\\?(.+?)$");
    // if(url.match(reg)){
    // var str2=url.match(reg)[1];
    // }
    // document.write(str2);
    //     };
    onMounted(() => {
      // fetchProduct;
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

