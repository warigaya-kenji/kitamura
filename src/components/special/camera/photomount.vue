<template>
  <v-app>
    <div class="campaign">
      <!-- ↓top image -->
      <topTitleImg
        :pcBackgroundImg="'/ec/images2/special/camera/photomount/title-bg.jpg'"
        :spBackgroundImg="'/ec/images2/special/camera/photomount/fan-fair_01sp.jpg'"
        :type="2"
      />
      <!-- ↑top image -->

      <div class="main-contents-wrap">
        <h1 class="text-subtitle-1 font-weight-bold mt-2">どんな写真台紙をお探しですか？ 見て選ぶ・見て探す 写真台紙 シリーズ紹介</h1>
        <p>
          最終更新日：2020年03月23日<br />下記ボタンよりカテゴリを絞り込む事ができます<br />七五三・結婚式・集合写真や記念写真は写真台紙に入れてプレゼント＆保管がおすすめです
        </p>

        <div class="category-nav">
          <v-container fluid>
            <v-row :justify="$vuetify.breakpoint.mdAndUp ? 'center' : 'left'">
              <v-col cols="6" sm="2" v-for="narrowing in narrowingList" :key="narrowing.value" class="pa-1">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :elevation="hover ? 10 : 2"
                    :color="hover ? '#ff0c00' : '#de1b27'"
                    block
                    height="70px"
                    v-model="category"
                    :value="narrowing.value"
                    @click="searchByCategory(narrowing.value)"
                  >
                    <v-img :src="narrowing.src" max-width="75%" height="auto"></v-img><v-icon small color="white">fas fa-chevron-right</v-icon>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <v-container class="individual frames mt-10 pa-0">
          <v-row>
            <v-col cols="12" md="3" v-for="(photoFrame, index) in filterByCategory" :key="index">
              <v-hover v-slot="{ hover }">
                <v-expand-transition>
                  <v-card :elevation="hover ? 10 : 2">
                    <router-link :to="photoFrame.href">
                      <span>{{ photoFrame.name }}</span>
                      <v-img :src="photoFrame.src" class="img"></v-img>
                      <span>{{ photoFrame.size }}</span>
                    </router-link>
                  </v-card>
                </v-expand-transition>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <div class="s-bnr">
          <p class="text-sm-h4">おすすめ特集・サービス</p>
        </div>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
export default Vue.extend({
  name: 'photomount',
  components: {
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
  },
  setup: (props, context) => {
    document.title = '写真台紙 おすすめシリーズ紹介 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '写真台紙 シリーズ紹介。写真台紙のお買い求めは、カメラのキタムラにおまかせください！お手軽な普通写真台紙や婚礼用の写真台紙、高級写真台紙まで勢揃い♪全国のカメラ専門店カメラのキタムラネットショップへおまかせください。')

    const state = reactive({
      category: 'all',
      narrowingList: [
        { src: '/ec/images2/special/camera/photomount/btn-print-w.png', value: 'all' },
        { src: '/ec/images2/special/camera/photomount/btn-new-w.png', value: 'popularity' },
        { src: '/ec/images2/special/camera/photomount/btn-general-w.png', value: 'lpf' },
        { src: '/ec/images2/special/camera/photomount/btn-camera-w.png', value: 'pf' },
        { src: '/ec/images2/special/camera/photomount/btn-sale-w.png', value: 'sale' }
      ],
      photoMountList: [
        {
          category: ["all", "lpf", ""],
          href: "/ec/special/camera/photomount/269",
          name: 'ハクバ M890',
          src: "https://shopimg.kitamura.jp/images/pd/da5/c2a/246/623/df9/478/bbe/7e5/617/d7d/921/hra/n0l/y/M.jpg",
          size: '対応サイズ：6切'
        },
        {
          category: ["all", "lpf", ""],
          href: "/ec/special/camera/photomount/266",
          name: 'ハクバ M2730',
          src: "https://shopimg.kitamura.jp/images/pd/443/c74/564/bff/b2e/9af/e33/9e0/4b0/c1d/868/h87/6pt/x/M.jpg",
          size: '対応サイズ：２L 6切 '
        },
        {
          category: ["all", "lpf", ""],
          href: "/ec/pd/4975070155133",
          name: 'L判サイズ1面 CD/DVD収納写真台紙',
          src: "https://shopimg.kitamura.jp/images/pd/2cf/c1d/258/5f3/e5d/b00/e57/da5/cbb/2ae/858/mt3/xf7/g/M.jpg",
          size: '対応サイズ：L '
        },
        {
          category: ["all", "lpf", "pf"],
          href: "/ec/special/camera/photomount/254",
          name: 'ハクバ MRCDO ランス ドゥシリーズ',
          src: "https://shopimg.kitamura.jp/images/pd/299/db3/5c7/11e/f1a/1d1/cdb/8bc/0e9/09c/355/zfu/b0f/m/M.jpg",
          size: '対応サイズ：L 2L はがき'
        },
        {
          category: ["all", "lpf", "pf"],
          href: "/ec/special/camera/photomount/252",
          name: 'チクマ V-700 お祝いの写真台紙',
          src: "https://shopimg.kitamura.jp/images/pd/5b6/1b0/f9a/08e/74e/8da/ad3/959/922/78e/4fb/ci2/j3r/k/M.jpg",
          size: '対応サイズ：2L'
        },
        {
          category: ["all", "lpf", "pf"],
          href: "/ec/special/camera/photomount/253",
          name: 'ハクバレイヤードSQ No.305',
          src: "https://shopimg.kitamura.jp/images/pd/be1/cd5/ea7/8ed/9f6/58e/fd7/713/229/77a/eal/9ff/kri/z/M.jpg",
          size: '対応サイズ：2L A46切'
        },
        {
          category: ["all"],
          href: "/ec/special/camera/photomount/2431",
          name: 'チクマ 差し込みポートレート写真台紙 V-68',
          src: "https://shopimg.kitamura.jp/images/pd/3a8/dec/103/4e5/73a/0c4/805/839/c17/095/9b0/8kc/jpn/9/M.jpg",
          size: '対応サイズ：ましかく'
        },
        {
          category: ["all"],
          href: "/ec/special/camera/photomount/261",
          name: 'チクマ 仏事用写真台紙 メモリアルフラワー',
          src: "https://shopimg.kitamura.jp/images/pd/2fa/02b/90c/527/a8f/0be/65f/96d/bcf/335/a6o/q4m/wrg/k/M.jpg",
          size: '対応サイズ：２L ６切'
        },
        {
          category: ["all"],
          href: "/ec/special/camera/photomount/2408",
          name: 'チクマ 写真台紙 フォトブティック',
          src: "https://shopimg.kitamura.jp/images/pd/ace/5eb/357/e97/1f9/ce8/d07/925/094/589/6dp/k0a/xg3/r/M.jpg",
          size: '対応サイズ：L 2L 6切'
        },
        {
          category: ["all", "lpf", "pf"],
          href: "/ec/special/camera/photomount/262",
          name: 'チクマ V-67 差し込み式で簡単にできる写真台紙',
          src: "https://shopimg.kitamura.jp/images/pd/a16/ae7/a7c/5e2/be9/7f5/f81/a8d/8db/726/03a/pmq/1do/1/M.jpg",
          size: '対応サイズ：はがき 2L A4 6切'
        },
        {
          category: ["all", "lpf"],
          href: "/ec/special/camera/photomount/2430",
          name: 'チクマ Ｖ67',
          src: "https://shopimg.kitamura.jp/images/pd/385/722/b21/a6f/e16/061/5dc/888/6d9/37f/a87/mo5/o7w/y/M.jpg",
          size: '対応サイズ：２L A4'
        },
        {
          category: ["all", "lpf"],
          href: "/ec/special/camera/photomount/246",
          name: 'チクマ No.37',
          src: "https://shopimg.kitamura.jp/images/pd/871/75e/840/ddf/3ef/ac5/7ab/844/e1d/632/e67/k2n/lx9/j/M.jpg",
          size: '対応サイズ：2L A4 8切 6切'
        },
        {
          category: ["all", "lpf", "popularity"],
          href: "/ec/special/camera/photomount/245",
          name: 'チクマ V-216',
          src: "https://shopimg.kitamura.jp/images/pd/aaf/717/d78/745/bfa/614/19d/ce8/60e/df9/13v/jod/9i3/3/M.jpg",
          size: '対応サイズ：2L 6切'
        },
        {
          category: ["all"],
          href: "/ec/special/camera/photomount/2436",
          name: 'チクマ V-78 写真台紙',
          src: "https://shopimg.kitamura.jp/images/pd/934/de2/6b2/30f/0f8/0bc/269/55f/d15/1ac/8dr/gwd/8b8/z/M.jpg",
          size: '対応サイズ：L '
        },
        {
          category: ["all"],
          href: "/ec/special/camera/photomount/250",
          name: '友禅写真台紙 V-51',
          src: "https://shopimg.kitamura.jp/images/pd/b5e/0ed/ec9/172/5d0/7cb/1a7/52e/3d0/a11/67m/r2d/r8q/c/M.jpg",
          size: '対応サイズ：2L'
        },
        {
          category: ["all", "lpf"],
          href: "/ec/special/camera/photomount/1364",
          name: 'チクマ フォトマウントカード 写真台紙',
          src: "https://shopimg.kitamura.jp/images/pd/3cf/bf5/4f2/bc6/6d9/426/306/4a8/4a3/3d6/3fx/tzo/r6f/7/M.jpg",
          size: '対応サイズ：はがき 2L'
        },
        {
          category: ["all", "lpf", "popularity"],
          href: "/ec/special/camera/photomount/260",
          name: 'ハクバ 普通台紙 No12',
          src: "https://shopimg.kitamura.jp/images/pd/84e/ffe/ffc/2ac/991/580/e5b/b23/3ea/4d2/760/7cy/2az/s/M.jpg",
          size: '対応サイズ：L 2L 8切 6切'
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/sale/lotbuying',
          img: 'https://shopimg.kitamura.jp/images/banner/3773.gif',
          alt: 'まとめ買いコーナー'
        },
        {
          href: '/ec/special/camera/album/feature',
          img: 'https://shop.kitamura.jp/images/banner/3597.jpg',
          alt: '手作りアルバム特集'
        },
        {
          href: '/ec/special/general/graduation_entrance',
          img: 'https://shop.kitamura.jp/images/banner/1929.gif',
          alt: '卒業・入学特集'
        },
        {
          href: '/ec/special/general/sportsday',
          img: 'https://shop.kitamura.jp/images/banner/2006.gif',
          alt: 'パパ・ママ応援！運動会特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ]
    });

    const filterByCategory = computed(() => {
      const result = state.photoMountList.filter((value) => {
        if (value.category.indexOf(state.category) !== -1) {
          return value;
        }
      });
      return result;
    });

    const searchByCategory = (value: string) => {
      state.category = value;
    };

    return {
      ...toRefs(state),
      filterByCategory,
      searchByCategory
    };
  }
});
</script>

<style lang="scss">
.campaign .frames span {
  width: 100%;
  display: block;
  height: 4em;
  margin-top: 5px;
  padding: 0 3%;
  box-sizing: border-box;
  font-size: 75%;
}
</style>