<template>
  <v-app>
    <div class="lens-mzuiko">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="w750">
          <v-sheet color="#e0e0e0" class="pa-2">
            <v-card flat img="/ec/images2/special/camera/lens/mzuiko/bg_toptitle.jpg" :height="$vuetify.breakpoint.mdAndUp ? '110' : '53'">
              <h1 class="lenstitle">オリンパス レンズ for マイクロフォーサーズ</h1>
            </v-card>
            <v-container class="pa-0">
              <v-row no-gutters class="pt-4">
                <v-col cols="6" sm="3" v-for="(navi, index) in naviList" :key="index">
                  <a v-scroll-to="navi.href">
                    <v-sheet color="#ffffff" class="pa-2">
                      <v-img :src="navi.src" max-width="164" max-height="306" @click="isActive(index)"></v-img>
                    </v-sheet>
                  </a>
                </v-col>
                <v-col cols="6" sm="3">
                  <v-sheet color="#ffffff" class="pa-2">
                    <v-img src="/ec/images2/special/camera/lens/mzuiko/e0e0e0.jpg" max-width="164" max-height="291"></v-img>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-container>

            <v-container :id="lens.id" class="my-5 pa-0" v-for="(lens, index) in lensList" :key="index">
              <v-sheet color="#ffffff" class="pt-5">
                <div class="contenttitle">
                  <div class="contenttitlel">
                    <v-img :src="lens.titleImage" max-width="330" max-height="25"></v-img>
                  </div>
                  <h2 class="contenttitler">{{ lens.subtitle }}</h2>
                </div>
                <div class="cl"></div>
                <div class="contentbox pt-5 px-2 pb-2 cl mb-5">
                  <v-img :src="lens.mainImage" max-width="714" max-height="401"></v-img>
                </div>
                <v-row class="px-2 mb-2" dense>
                  <v-col cols="6" sm="3" v-for="(item, i) in lens.mainImageList" :key="i">
                    <v-img
                      :src="lens.selectedIndex === i ? item.onImage : item.offImage"
                      max-width="169"
                      max-height="75"
                      @click="showImg(index, i)"
                      class="pointer"
                    ></v-img>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <a :href="lens.href">
                      <v-img src="/ec/images2/special/camera/lens/mzuiko/btn_sh.gif" max-width="165" max-height="45" alt="商品詳細を見る"></v-img>
                    </a>
                    <a href="#top">
                      <v-img
                        src="/ec/images2/special/camera/lens/mzuiko/btn_top.gif"
                        max-width="165"
                        max-height="30"
                        alt="他レンズ・ページトップへ"
                        class="mt-1"
                      ></v-img>
                    </a>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-container>

            <a href="/ec/ct/C004/006/"><p class="text-center my-4">マイクロフォーサーズ一覧へ</p> </a>
          </v-sheet>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'lens-mzuiko',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: () => {
    document.title = 'オリンパスレンズ for マイクロフォーサーズ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'マイクロフォーサーズ用のオリンパスレンズ特集。おすすめの交換レンズの特徴と作例写真・撮影のコツをご紹介★レンズを変えると同違うの?素朴な疑問にお答えします！デジタル一眼初心者もミラーレスカメラ女子も、ワンランクアップでもっと楽しく♪'
      );
    const state = reactive({
      lensList: [
        {
          id: 'mzuiko45mm',
          titleImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/title_45.gif',
          subtitle: 'オリンパス M.ZUIKO DIGITAL 45mm F1.8',
          href: '/ec/pd/4545350037093',
          selectedIndex: 0,
          mainImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_45a.jpg',
          mainImageList: [
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_45a.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_45a_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_45a_off.gif' },
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_45b.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_45b_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_45b_off.gif' },
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_45c.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_45c_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_45c_off.gif' }
          ]
        },
        {
          id: 'mzuiko60mm',
          titleImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/title_60.gif',
          subtitle: 'オリンパス M.ZUIKO DIGITAL ED 60mm F2.8 Macro',
          href: '/ec/pd/4545350041236',
          selectedIndex: 0,
          mainImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_60a.jpg',
          mainImageList: [
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_60a.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_60a_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_60a_off.gif' },
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_60b.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_60b_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_60b_off.gif' },
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_60c.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_60c_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_60c_off.gif' }
          ]
        },
        {
          id: 'mzuiko14-150mm',
          titleImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/title_14150.gif',
          subtitle: 'オリンパス M.ZUIKO DIGITAL ED 14-150mm F4.0-5.6',
          href: '/ec/pd/4545350047795',
          selectedIndex: 0,
          mainImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_14150a.jpg',
          mainImageList: [
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_14150a.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_14150a_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_14150a_off.gif' },
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_14150b.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_14150b_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_14150b_off.gif' },
            { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/img_14150c.jpg', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_14150c_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_14150c_off.gif' }
          ]
        }
      ],
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'オリンパスレンズ for マイクロフォーサーズ',
          disabled: true
        }
      ],
      naviList: [
        { href: '#mzuiko45mm', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_link_a.jpg' },
        { href: '#mzuiko60mm', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_link_b.jpg' },
        { href: '#mzuiko14-150mm', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/mzuiko/btn_link_c.jpg' }
      ]
    });

    const showImg = (target: number, item: number) => {
      state.lensList[target].selectedIndex = item
      state.lensList[target].mainImage = state.lensList[target].mainImageList[item as number].src
    }

    const isActive = (index: number) => {
      for (let i = 0; i < state.naviList.length; i++) {
        if (i === index) {
          state.naviList[index].src = state.naviList[index].src.replace('.jpg', '_on.jpg');
        } else {
          state.naviList[i].src = state.naviList[i].src.replace('_on.jpg', '.jpg');
        }
      }
    }
    return {
      ...toRefs(state),
      noimage,
      showImg,
      isActive
    };
  }
});
</script>

<style lang="scss" scoped>
.w750 {
  max-width: 750px;
  margin: 0 auto;
}
.contenttitle {
  width: 100%;
  height: auto;
  float: left;
  padding: 15px 10px 20px 10px;
  box-sizing: border-box;
  background-color: #08107b;
}
.contenttitlel {
  width: 50%;
  height: auto;
  float: left;
}
h2.contenttitler {
  width: 50%;
  height: auto;
  float: left;
  color: #ffffff;
  font-size: 15px;
  text-align: right;
  font-weight: 600;
}
.cl {
  clear: both;
}
.pointer {
  cursor: pointer;
}
@media screen and (min-width: 752px) {
  h1.lenstitle {
    color: #08107b;
    font-size: 30px;
    padding: 55px 0px 0px 15px;
    box-sizing: border-box;
    font-weight: 800;
  }
}
@media screen and (max-width: 600px) {
  h1.lenstitle {
    color: #08107b;
    font-size: 15px;
    padding-top: 50px;
    font-weight: 800;
  }
}
</style>
