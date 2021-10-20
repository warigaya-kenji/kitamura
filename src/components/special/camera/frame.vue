<template>
  <v-app>
    <div class="campaign">
      <!-- 960px以上 -->
      <v-img src="/ec/images2/special/camera/frame/title-bg.jpg" max-width="100%" height="auto" v-if="$vuetify.breakpoint.mdAndUp"></v-img>
      <v-img src="/ec/images2/special/camera/frame/fan-fair_01sp.jpg" max-width="100%" height="auto" v-if="$vuetify.breakpoint.smAndDown" class="mb-6"></v-img>
      <div class="main-contents-wrap">
        <h1 class="text-subtitle-1 font-weight-bold mt-2">どんな額・フォトフレームをお探しですか？見て選ぶ・見て探す 写真額縁・フォトフレーム シリーズ紹介</h1>
        <p>最終更新日：2020年3月2日<br />下記ボタンよりカテゴリを絞り込む事ができます</p>

        <div class="category-nav">
          <v-container fluid>
            <v-row>
              <v-col cols="6" sm="2" v-for="narrowing in narrowingList" :key="narrowing.value" class="pa-1">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :elevation="hover ? 10 : 2"
                    :color="hover ? '#ff0c00' : '#de1b27'"
                    width="140px"
                    height="60px"
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

        <v-container class="individual frames mt-6 pa-0">
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
export default Vue.extend({
  name: 'frame',
  components: {
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = '額縁・写真フォトフレーム おすすめシリーズ紹介 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '写真額縁・フォトフレーム シリーズ紹介｜インテリアフォトフレームから、大型額まで勢揃い♪写真額縁、フレームの販売はカメラのキタムラのネットショップにおまかせください！')
    const state = reactive({
      category: 'all',
      narrowingList: [
        { src: '/ec/images2/special/camera/frame/btn-print-w.png', value: 'all' },
        { src: '/ec/images2/special/camera/frame/btn-new-w.png', value: 'popularity' },
        { src: '/ec/images2/special/camera/frame/btn-general-w.png', value: 'lpf' },
        { src: '/ec/images2/special/camera/frame/btn-camera-w.png', value: 'pf' },
        { src: '/ec/images2/special/camera/frame/btn-p.png', value: 'ppf' },
        { src: '/ec/images2/special/camera/frame/btn-sale-w.png', value: 'sale' }
      ],
      photoFrameList: [
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/4086/',
          name: 'オリジナル アクリルフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/bbd/8e8/1a3/c08/11a/dfb/8e2/c4e/ae5/ca9/e9j/f1t/mcp/j/M.jpg',
          size: 'L ２L A4 W4'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/2037/?display=detail',
          name: 'オリジナル 木製額',
          src: 'https://shopimg.kitamura.jp/images/pd/004/95f/d42/666/046/096/bf5/b68/5e1/f55/fcy/009/mc2/h/M.jpg',
          size: 'A4 W4'
        },
        {
          category: ['lpf', 'all'],
          href: '/pd/list.html?q=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC+%E3%82%A2%E3%82%BF%E3%83%B3%E3%83%89&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'ケンコー アタンド',
          src: 'https://shopimg.kitamura.jp/images/pd/50e/3aa/977/6e0/68f/fc6/38e/36c/cd6/17e/eek/bwb/inb/i/M.jpg',
          size: '2L A4 W4 4切 6切 A3 A3ノビ'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/450/',
          name: 'パステルカラーフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/fea/748/093/702/287/a0f/7e3/d37/003/f4e/8a9/9ur/0u4/g/M.jpg',
          size: 'L ２L'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list_dtl.html?index=&searchbox=1&q=Chululu+フォトフレーム&path=',
          name: 'Chululu フォトフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/294/86c/73d/b28/54d/cc1/b9c/6c5/d0c/205/84p/use/zpf/3/M.jpg',
          size: 'L ハガキ ２L'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?q=エラマ+インテリアフレーム&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'エラマ インテリアフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/19c/e9b/75f/5e3/02a/609/af0/f08/02e/a6a/2cm/ufk/q7u/k/M.jpg',
          size: 'L ハガキ ２L A4'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list_dtl.html?index=&searchbox=1&q=シャビースタイル+ボックスフレーム&path=',
          name: 'ボックスフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/870/8b0/121/923/faf/f64/743/ac8/9f6/916/c1g/j0f/lea/3/M.jpg',
          size: '２L A4'
        },
        {
          category: ["pf", "all"],
          href: '/ec/ct/C015/001/020/?r=',
          name: 'デジタルフォトフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/dd1/8c7/56b/1aa/21e/805/473/241/879/aec/a89/f34/3ca/f/M.jpg',
          size: ''
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?q=フォトフレーム+テリア3&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'フォトフレーム テリア3',
          src: 'https://shopimg.kitamura.jp/images/pd/4fa/baf/45b/6dd/292/f50/1ac/0e6/b72/8a1/91x/w5z/vrp/u/M.jpg',
          size: 'L ２L'
        },
        {
          category: ['pf', 'ppf', 'all'],
          href: '/pd/list.html?q=UclidマットWedding&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'UclidマットWedding',
          src: 'https://shopimg.kitamura.jp/images/pd/fa5/29b/244/e8f/5b2/579/b66/16f/bf5/ea0/61v/1gs/zlm/5/M.jpg',
          size: '2L/A4/'
        },
        {
          category: ['pf', 'lpf', 'all'],
          href: '/pd/list.html?q=エラマ+インテリアフレーム&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'エラマ インテリアフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/19c/e9b/75f/5e3/02a/609/af0/f08/02e/a6a/2cm/ufk/q7u/k/M.jpg',
          size: 'L ハガキ ２L A4'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?q=キング+木製額+すずかぜ&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'キング 木製額 すずかぜ',
          src: 'https://shopimg.kitamura.jp/images/pd/2e9/4d9/91b/f3c/175/678/0a8/073/bfe/c0d/947/u3r/ik4/7/M.jpg',
          size: '2L/6切/W6/A4/4切/W4'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/2440/',
          name: 'キング JWC 木目調カラーフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/123/a15/0f2/ba2/ef7/8ee/2b6/67c/fe8/7c2/daj/ubj/9i7/6/M.JPG',
          size: 'L/ハガキ/2L'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/2441/',
          name: 'ナカバヤシ アルミ製軽量写真額',
          src: 'https://shopimg.kitamura.jp/images/pd/096/be5/45a/03d/b57/36c/b68/5e5/df6/c42/757/pfw/yto/7/M.jpg',
          size: '2L/6切/W6/4切/W4/A4/A3/'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/2444/?display=detail',
          name: 'APJ シャッフルプリント用ピノフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/dbf/c85/f7d/21e/bc5/5e5/19d/be4/72b/d58/249/hve/pla/b/M.jpg',
          size: 'A5/A4/2L'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?index=all&sort=number20%2CNumber17%2CScore&searchbox=1&q=万丈+OKF-BF&path=&y=0&x=0',
          name: '万丈 Boxフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/5ab/624/4dc/d7a/0a2/95f/571/8a4/594/f10/23w/icj/23v/5/M.jpg',
          size: 'A5/ハガキ'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/2446/',
          name: 'ケンコー ギャラリー フレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/f85/fa2/355/305/99d/75c/59d/ed3/ce1/86c/23k/q5w/t4y/g/M.jpg',
          size: '2L/6切/W6/4切/W4/A4/A3/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/440/',
          name: 'フジカラー マットパネル WPII',
          src: 'https://shopimg.kitamura.jp/images/pd/2f8/f33/744/e13/009/a05/893/052/5cc/a09/20i/d8z/e8e/v/M.jpg',
          size: '2L/6切/W6/4切/W4/A4/A3/A3ノビ/半切/全紙'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/448/',
          name: 'ケンコー ツイード',
          src: 'https://shopimg.kitamura.jp/images/pd/e3f/a74/001/058/f93/155/e7a/05f/161/486/b1m/4c4/cu0/y/M.jpg',
          size: 'L/２L'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/446/',
          name: 'フジカラー アルミ額縁 A105A',
          src: 'https://shopimg.kitamura.jp/images/pd/725/8c2/105/9b1/957/6a7/0e5/243/f18/ed9/0dk/efk/hv9/y/M.jpg',
          size: '2L/6切/W6/4切/W4/A4/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/456/',
          name: 'フジカラー ワイドマットフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/7a0/167/8fa/35f/b97/3f5/b54/c30/927/ef7/da0/h29/62z/z/M.jpg',
          size: '4切/W4切/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/430/',
          name: 'ハクバ アルミ額縁 ペオリア',
          src: 'https://shopimg.kitamura.jp/images/pd/52e/9e2/ba6/29f/4ed/7f7/254/21e/75c/e00/1bm/kn2/lmi/x/M.jpg',
          size: 'L/2L/A4/A3/A3ノビ'
        },
        {
          category: ['pf', 'popularity', 'all'],
          href: '/pd/list.html?q=%E3%83%A9%E3%83%89%E3%83%B3%E3%83%8A+DF85&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: 'ラドンナ インテリアフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/021/c04/aa1/ab3/e39/f35/60b/a8b/2a6/75c/bau/xag/bs8/9/M.jpg',
          size: 'L/ハガキ/2L/A4'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/458/',
          name: 'フジカラー 木製額縁 M11',
          src: 'https://shopimg.kitamura.jp/images/pd/fda/ca0/1ec/30e/d14/c01/d6a/e11/fd1/654/3b0/my6/8oq/4/M.jpg',
          size: '2L/W6/6切/8切/4切/W4/A4/A3/A3ノビ/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/457/',
          name: 'フジカラー 木製額縁 M10',
          src: 'https://shopimg.kitamura.jp/images/pd/f70/98e/ab7/580/21c/36b/4ce/6df/bb0/a9a/01m/iwx/don/p/M.jpg',
          size: '6切'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/605/',
          name: 'フジカラー IM-30 木製額',
          src: 'https://shopimg.kitamura.jp/images/pd/d92/279/9bf/5f7/4b5/371/909/7f4/f9d/893/91i/hde/02x/8/M.jpg',
          size: '2L/A4/W6/6切/4切/W4'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/444/',
          name: 'フジカラー Dフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/a59/de8/f22/201/74b/a61/98a/058/7e2/33e/05v/70t/ah6/w/M.jpg',
          size: '4切/W4/6切/W6'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/401/',
          name: 'エツミ フォトフレーム Weal ',
          src: 'https://shopimg.kitamura.jp/images/pd/5ae/646/9be/52e/80b/fd5/16e/048/fd5/5d8/bf5/zoq/6ya/h/M.jpg',
          size: 'L/2L/A4/ポストカード'
        },
        {
          category: ['lpf', 'popularity', 'all'],
          href: '/special/sale-fair/camera/frame/405/',
          name: 'キタムラオリジナルアルミ・木製額縁 ',
          src: 'https://shop.kitamura.jp/images/pd/d3a/f81/a54/96e/682/4c6/fbd/fc4/714/9be/d0q/xsf/x9b/6/L.jpg',
          size: 'A4/4切/W4 '
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/428/',
          name: 'ハクバ HFA-03 アルミ額縁 ',
          src: 'https://shopimg.kitamura.jp/images/pd/131/4db/78c/ae6/0df/b24/0e2/5f9/cce/02b/d39/1ar/wce/7/M.jpg',
          size: 'A4/W4/A3/A3ノビ/半切/全紙/'
        },
        {
          category: ['lpf', 'popularity', 'all'],
          href: '/special/sale-fair/camera/frame/443/',
          name: 'ハンザ 差替えマットパネル',
          src: 'https://shopimg.kitamura.jp/images/pd/ee2/f99/850/a11/67a/f31/67b/05f/8f9/061/87s/ga6/b5r/4/M.jpg',
          size: '4切/W4/A4/A3/A3ノビ/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/452/',
          name: 'フジカラー プロフレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/264/5bd/dc2/966/731/daf/14e/a86/d69/a3f/66j/rof/5ct/g/M.jpg',
          size: 'L/2L/4切/6切/半切'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/453/',
          name: 'フジカラー マットパネル DX',
          src: 'https://shopimg.kitamura.jp/images/pd/170/0a7/5a4/91e/37b/d04/6d4/85b/57f/fb7/68y/2jy/brx/2/M.jpg',
          size: '4切/W4/A3/A3ノビ/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/445/',
          name: 'フジカラー アートフレームホワイト',
          src: 'https://shopimg.kitamura.jp/images/pd/690/266/edc/ae6/035/601/b18/ce0/e30/730/19v/a11/b9d/k/M.jpg',
          size: '2L/6切/W6/4切/W4/半切/全紙'
        },
        {
          category: ['lpf', 'all'],
          href: '/special/sale-fair/camera/frame/2793/',
          name: 'ハクバ FWMM01 木製フレーム',
          src: 'https://shopimg.kitamura.jp/images/pd/185/4c1/2d7/54b/007/4b2/17e/550/3b6/787/f79/xav/ixi/2/M.jpg',
          size: '2L/6切/W6/4切/W4/A3/A3ノビ'
        },
        {
          category: ['lpf', 'all'],
          href: '/pd/list.html?index=all&sort=number20%2CNumber17%2CScore&searchbox=1&q=%E3%82%BD%E3%83%95%E3%82%B1%E3%83%B3+%E3%83%AF%E3%83%B3%E3%82%BF%E3%83%83%E3%83%81%E3%82%A2%E3%83%AB%E3%83%9F%E3%83%91%E3%83%8D%E3%83%AB+%E3%82%B9%E3%83%AA%E3%83%A0%E3%82%A8%E3%82%A4%E3%83%88&path=&y=0&x=0',
          name: 'ソフケン ワンタッチアルミパネル スリムエイト ',
          src: 'https://shopimg.kitamura.jp/images/pd/051/ed5/bd1/7cf/d90/545/756/833/968/5b8/a7b/29v/ppd/s/M.jpg',
          size: 'A1/A2/A3/A4/B3/B4 '
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/2442/',
          name: 'チクマ 木製額FI フレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/b72/3de/b02/f4b/3c3/a84/535/a38/491/133/862/p5a/29d/3/M.jpg',
          size: 'L/2L 多窓 '
        },
        {
          category: ['pf', 'popularity', 'all'],
          href: '/special/sale-fair/camera/frame/417/',
          name: 'APJ アートボックスフレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/516/16f/08a/f09/fe3/0c8/397/adc/27d/89f/9db/vrv/yfp/p/M.jpg',
          size: 'ハガキ/2L/A4 '
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/467/',
          name: 'ラドンナ ベビーフォトフレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/72c/7cd/c3f/515/4bc/520/e9d/8e0/841/9f7/93p/f8y/xwr/o/M.jpg',
          size: 'L/ハガキ/他 '
        },
        {
          category: ['ppf', 'all'],
          href: '/special/sale-fair/camera/frame/412/',
          name: ' チクマ ニューパティーサム 多面 ',
          src: 'https://shopimg.kitamura.jp/images/pd/c9f/1db/260/379/90d/645/066/140/7bf/a9a/94i/v2t/luo/w/M.jpg',
          size: 'all'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/403/',
          name: ' アクリル クリアフレーム スタンドタイプ ',
          src: 'https://shopimg.kitamura.jp/images/pd/ffa/bee/47e/ef9/927/852/d0a/c13/50c/92a/4dh/k1m/wmj/s/M.jpg',
          size: 'L/はがき/2L'
        },
        {
          category: ['pf', 'all'],
          href: '/special/sale-fair/camera/frame/464/',
          name: 'ユーパワー ラグジュアリースタイル ',
          src: 'https://shopimg.kitamura.jp/images/pd/7da/786/d06/28a/bdf/8b1/49f/8b5/217/43a/58t/4cj/8hc/q/M.jpg',
          size: 'L/2L/他'
        },
        {
          category: ['ppf', 'all'],
          href: '/special/sale-fair/camera/frame/410/',
          name: ' チクマ CマットPuz 紙製フォトフレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/cde/d0a/de7/bbf/525/9fe/069/0a9/a0d/2f3/846/mqe/7jc/b/M.jpg',
          size: '規格外'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?index=all&sort=number20%2CNumber17%2CScore&searchbox=1&q=%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB+%E3%83%95%E3%82%A9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0+KP%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0&path=&y=0&x=0',
          name: ' オリジナル フォトフレーム KPフレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/c3a/baf/599/c55/1af/240/745/473/944/d0b/d79/87w/ev3/j/M.jpg',
          size: 'L/はがき'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?index=all&sort=number20%2CNumber17%2CScore&searchbox=1&q=%E3%83%A9%E3%83%89%E3%83%B3%E3%83%8A+%E6%9C%A8%E8%A3%BD%E3%83%95%E3%82%A9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0&path=&y=0&x=0',
          name: ' ラドンナ 木製フォトフレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/fb2/e8e/9bf/08c/ab7/e62/d5c/af7/5bb/d96/74a/3wa/poa/v/M.jpg',
          size: 'L/2L/6切'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?index=all&sort=number20%2CNumber17%2CScore&searchbox=1&q=%E3%83%A9%E3%83%89%E3%83%B3%E3%83%8A+%E3%83%95%E3%82%A9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0+DF52&path=&y=0&x=0',
          name: 'ラドンナ フォトフレーム DF52 ',
          src: 'https://shopimg.kitamura.jp/images/pd/422/c26/431/c31/55d/6c5/bd6/13b/5c6/80b/24j/lj4/39g/h/M.jpg',
          size: 'L/2L'
        },
        {
          category: ['ppf', 'all'],
          href: '/special/sale-fair/camera/frame/2889/',
          name: ' ナカバヤシ Vカットペーパースタンド 差込式 ',
          src: 'https://shopimg.kitamura.jp/images/pd/20f/af1/6bb/5f1/329/2b7/cf5/bd3/d8d/042/73i/rcx/7ls/p/M.jpg',
          size: 'L/はがき/A4/A3/2L'
        },
        {
          category: ['ppf', 'all'],
          href: '/pd/list.html?q=%E3%83%95%E3%82%B8%E3%83%95%E3%82%A4%E3%83%AB%E3%83%A0+%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88%E7%94%A8%E3%83%9A%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1',
          name: ' フジフイルム シャッフルプリント用ペーパーフレーム ',
          src: 'https://shopimg.kitamura.jp/images/pd/407/30e/0d1/7d1/4d0/3a0/14c/f8d/f64/064/09o/nf3/hoy/u/M.jpg',
          size: 'A5/2L'
        },
        {
          category: ['pf', 'all'],
          href: '/pd/list.html?index=all&sort=number20%2CNumber17%2CScore&searchbox=1&q=%E3%83%A1%E3%82%BF%E3%83%AB%E3%83%91%E3%83%BC%E3%83%86%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3%E5%9E%8B&path=&y=0&x=0',
          name: ' メタルパーテンション型',
          src: 'https://shopimg.kitamura.jp/images/pd/1b9/8da/880/8e1/e12/0a2/f69/014/c3c/d86/1cq/hmj/cm4/g/M.jpg',
          size: 'L/他'
        }
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/sale/lotbuying/',
          img: 'https://shopimg.kitamura.jp/images/banner/3773.gif',
          alt: 'まとめ買いコーナー'
        },
        {
          href: 'https://fremia.com/kitamura/',
          img: 'https://shopimg.kitamura.jp/images/banner/1655.gif',
          alt: 'オーダーメイド額フレミア'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ]
    });

    const filterByCategory = computed(() => {
      const result = state.photoFrameList.filter((value) => {
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