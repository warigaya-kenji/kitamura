<template>
  <v-app>
    <div class="campaign">
      <!-- 960px以上 -->
      <!-- ↓top image -->
      <topTitleImg
        :pcBackgroundImg="'/ec/images2/special/camera/album/title-bg.jpg'"
        :spBackgroundImg="'/ec/images2/special/camera/album/fan-fair_01sp.jpg'"
        :type="2"
      />

      <!-- ↑top image -->
      <div class="main-contents-wrap">
        <h1 class="text-subtitle-1 font-weight-bold my-2">どんな写真アルバムをお探しですか？見て選ぶ・見て探す。おすすめ写真アルバム紹介</h1>
        <p>
          アルバムの種類はとっても豊富。おすすめの写真アルバム。写真整理におすすめな 大容量収納アルバム。プレゼントに最適なオシャレなものまでご用意しています。
          まずはシリーズごと見てみませんか？ きっと気に入ったアルバムが見つかるはず
        </p>
        <p>最終更新日：2020年8月13日</p>
        <h2 class="text-h6 mb-6"><b>おすすめアルバムのタイプを絞り込み</b></h2>

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
            <v-col cols="12" md="3" v-for="(album, index) in filterByCategory" :key="index">
              <v-hover v-slot="{ hover }">
                <v-expand-transition>
                  <v-card :elevation="hover ? 10 : 2">
                    <router-link :to="album.href">
                      <span class="mb-2">{{ album.name }}</span>
                      <v-img :src="album.src" class="img"></v-img>
                      <span>{{ album.type }}</span>
                    </router-link>
                  </v-card>
                </v-expand-transition>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <h3 class="my-6"><b>写真アルバム関連特集・商品</b></h3>
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
  name: 'album',
  components: {
    recommendedFeatures: RecommendedFeatures,
    topTitleImg: TopTitleImg,
  },
  setup: (props, context) => {
    document.title = '写真アルバム おすすめシリーズ紹介 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '写真アルバム シリーズ紹介｜大量収納アルバムから、プレゼントにおすすめなアルバムまで。写真アルバムの販売はカメラのキタムラネットショップにおまかせください！')

    const state = reactive({
      category: 'all',
      narrowingList: [
        { src: '/ec/images2/special/camera/album/btn-print-w.png', value: 'all' },
        { src: '/ec/images2/special/camera/album/po.png', value: 'po' },
        { src: '/ec/images2/special/camera/album/fr.png', value: 'fr' },
        { src: '/ec/images2/special/camera/album/tai.png', value: 'tai' },
        { src: '/ec/images2/special/camera/album/gift.png', value: 'gift' },
        { src: '/ec/images2/special/camera/album/tokushu.png', value: 'tokushu' }
      ],
      albumList: [
        {
          category: ["all", "tai", "po"],
          href: "/special/sale-fair/camera/album/original/1119/",
          name: "オリジナル KT-PA01-300-NT リネンポケットアルバム300 Lサイズ 300枚 ナチュラル",
          src: "https://shopimg.kitamura.jp/images/pd/9a7/f78/7fd/e6d/38c/e6d/ec9/421/4a0/042/080/luh/lqt/q/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/382/?display=detail",
          name: "オリジナル Lサイズ クラフトミニポケットアルバム KFPL-40-BK ブラック",
          src: "https://shopimg.kitamura.jp/images/pd/9ff/3c5/9ab/77b/b53/743/3a5/f2e/479/e13/27j/i3e/hmy/t/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "tai", "fr"],
          href: "/special/sale-fair/camera/album/375/?display=detail",
          name: "ナカバヤシ 20L-89 フエルアルバム 白フリー台紙 20枚 ティディーワークス",
          src: "https://shopimg.kitamura.jp/images/pd/c5a/0a9/592/123/3fa/045/a3f/881/24b/d25/6es/l8x/s65/l/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "po"],
          href: "/pd/list_dtl.html?index=&searchbox=1&q=オリジナルフォトフォルダー+L・KG・パノラマ判%2F3段&path=",
          name: "ナカバヤシ KPH-168-12 オリジナルフォトフォルダー L・KG・パノラマ判/3段 ディズニープリンセス",
          src: "https://shopimg.kitamura.jp/images/pd/14a/296/f6d/af8/ffc/6de/b2b/584/3fc/964/a2d/i2b/axs/t/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "tai", "po"],
          href: "/special/sale-fair/camera/album/1532/?display=detail",
          name: "セキセイ KP-126-60 フォトアルバム 高透明 Lサイズ 240枚収納 ブラック",
          src: "https://shopimg.kitamura.jp/images/pd/66f/b43/a3b/8a9/4fb/40f/035/511/1a0/710/6aw/ata/pbo/n/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po", "fr"],
          href: "/special/sale-fair/camera/album/3765/",
          name: "ナカバヤシ A-HRA5-101-Y ハルマー 外ビス式アルバム A5 プラコート台紙（クラフト）イエロー",
          src: "https://shopimg.kitamura.jp/images/pd/ab6/969/e20/e91/ba8/5a6/f28/217/44f/d04/b4w/hjs/ov6/1/M.jpg",
          type: "ポケットアルバム/フリーアルバム",
        },
        {
          category: ["all", "gift",],
          href: "/special/sale-fair/camera/album/3573/",
          name: "ナカバヤシ アKA-SWF-130-P フォトクロッキー リング Sサイズ ピンク",
          src: "https://shopimg.kitamura.jp/images/pd/457/593/e63/80f/ef6/e5e/b21/b28/b3d/770/2c6/l5l/x66/6/M.jpg",
          type: "クラフトアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/3443/?display=detail",
          name: "セキセイ XP-8910 ハーパーハウス ましかくアルバム フレーム レッド",
          src: "https://shopimg.kitamura.jp/images/pd/ac4/7cd/f6e/9e8/276/107/2f8/e14/881/97c/6b4/4xs/e5o/4/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "tai", "po"],
          href: "/special/sale-fair/camera/album/369/",
          name: "ナカバヤシ IA-12-A4N プロフォリオ ザ・オリジナル A4判 24P",
          src: "https://shopimg.kitamura.jp/images/pd/31a/00d/a77/07f/1a7/25a/270/fb4/f4a/ecd/44s/4fi/y9o/h/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/2922/?display=detail",
          name: "セキセイ HK-5783 ホックアルバム ゴールド",
          src: "https://shopimg.kitamura.jp/images/pd/137/3d7/de2/c45/06f/2d8/a13/a84/67a/6bd/96k/k38/hqy/m/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/ナカバヤシ%20ア-PAL-101-3P%20ミニポケットアルバム%20Lサイズ%20カラフル%2024枚3P/pd/4902205233930/",
          name: "ナカバヤシ ア-PAL-101-3P ミニポケットアルバム Lサイズ カラフル 24枚3P",
          src: "https://shopimg.kitamura.jp/images/pd/b88/51f/c44/e53/0bc/ff5/fc4/ad0/5b5/eea/b54/r8f/kyj/e/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po", "tai"],
          href: "/special/sale-fair/camera/album/2413/?display=detail",
          name: "ナカバヤシ ア-TPL-161-BR 折りたたみアルバム クロス/L判4面160枚 ブラウン",
          src: "https://shopimg.kitamura.jp/images/pd/4aa/1e7/89b/41f/c4c/144/74c/fd8/6e3/ef5/a1y/4k2/vlb/g/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "tai", "po"],
          href: "/special/sale-fair/camera/album/2309/",
          name: "万丈 AO-600BR メガアルバム600 ATSUI OMOI ブラウン",
          src: "https://shopimg.kitamura.jp/images/pd/a1b/bd6/ad1/d6a/7de/e21/ac2/ac1/817/ad8/456/phe/flb/k/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "tai", "po"],
          href: "/special/sale-fair/camera/album/561/?display=detail",
          name: "ナカバヤシ フォトホルダー L判6面 240ポケット PH6L-1024-D ブラック",
          src: "https://shopimg.kitamura.jp/images/pd/56b/1c3/653/ddb/254/c2e/2b1/49f/019/948/765/el4/x8n/4/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/472/",
          name: "セキセイ XP-2780 フレームポケットアルバム L80枚 リネン",
          src: "https://shopimg.kitamura.jp/images/pd/5e9/784/90d/ca6/479/159/096/992/2c6/7fe/4ci/ec6/hqe/6/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/pd/list_dtl.html?index=all&searchbox=1&q=ナカバヤシ+TCPK-6L-240&path=&y=0&x=0",
          name: "ナカバヤシ TCPK-6L-240-ER  セラピーポケットアルバム エナジーレッド L判6面",
          src: "https://shopimg.kitamura.jp/images/pd/1dd/91d/032/153/1fb/135/653/757/a80/330/69m/ujr/asg/7/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po", "tai"],
          href: "/special/sale-fair/camera/album/3155/",
          name: "フジフイルム OURHOME かぞくのきろく ポケットアルバム L判 156枚収納 緑",
          src: "https://shopimg.kitamura.jp/images/pd/9ff/4ae/765/32b/d11/3b7/2fa/d9e/c35/af5/5e2/9yu/e1d/8/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/1851/",
          name: "セキセイ XP-4700-80 ハーパーハウス フレームアルバム L判100枚 パープル",
          src: "https://shopimg.kitamura.jp/images/pd/654/47e/e75/245/99b/eec/df1/3b7/32a/0be/dbd/6oe/1wg/q/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/1852/",
          name: "ナカバヤシ アK-WK-201-R Wリングかける～の 台紙アルバム KG判2段 ボタニカル レッド",
          src: "https://shopimg.kitamura.jp/images/pd/920/ba0/c62/aea/6fa/21c/1be/3b0/257/28e/b5j/ts1/vzx/s/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/1853/",
          name: "セキセイ XP-5308 ライトフリーアルバム フレーム グリーン",
          src: "https://shopimg.kitamura.jp/images/pd/f6b/5f6/c93/c2d/fb5/68e/8b6/fe7/86f/f86/48v/ckw/gnq/n/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/1855/",
          name: "ナカバヤシ アH-B6B-133-S B6サイズ 100年台紙フリーアルバム フォレスト ブラウン",
          src: "https://shopimg.kitamura.jp/images/pd/a4d/064/aee/dc4/07a/99f/ec9/5b7/250/a0b/e80/82s/pvs/n/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/pd/4902205231363/",
          name: "ナカバヤシ ア-MBDR-101-4 コーディネーションアルバム デコルーレ ドット",
          src: "https://shopimg.kitamura.jp/images/pd/6b3/8c8/75f/d00/62a/8ff/ed6/1e6/9b8/acb/bbm/q4j/ad1/o/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "fr"],
          href: "/pd/4902205231479/",
          name: "ナカバヤシ ア-FTPW-105-G ポケットアルバム ウィンドウカバーアルバム イラスト グリーン",
          src: "https://shopimg.kitamura.jp/images/pd/ded/4cb/046/2fd/555/3bb/c7c/5e2/37b/599/cd8/0gq/na0/c/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/396/?display=detail",
          name: "ナカバヤシ ア-PL-504-1-B 504枚大容量ポケットアルバム ブルー",
          src: "https://shopimg.kitamura.jp/images/pd/9f9/b39/556/b58/58e/8f1/f3f/6de/3ed/90d/c2q/cmj/le1/g/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift"],
          href: "/special/sale-fair/camera/album/1192/",
          name: "セキセイ FU-2161 ふうあい スクラップブック コラージュ向き クラフトダイシ",
          src: "https://shopimg.kitamura.jp/images/pd/41b/dc4/01a/536/381/936/fb9/5fd/18f/8ae/2cv/wcl/c5f/v/M.jpg",
          type: "クラフトアルバム",
        },
        {
          category: ["all", "po"],
          href: "/special/sale-fair/camera/album/1339/",
          name: "キング レザーポケットアルバム L判200枚収納 レッド",
          src: "https://shopimg.kitamura.jp/images/pd/f76/c1f/429/c33/c3f/aa9/c27/5a6/83d/d3b/9dv/pyk/8uj/m/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/922/?display=detail",
          name: "ナカバヤシ A-A5H-150-3 浮世絵アルバム ブック式アルバムA5 100年台紙 歌川広重 浅縹",
          src: "https://shopimg.kitamura.jp/images/pd/3d8/3f3/cda/ed7/850/f34/544/da1/2a9/bb6/639/ax9/gcs/n/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/669/?display=detail",
          name: "ナカバヤシ アH-A4F-142-G スウィートカラーズ 100年台紙アルバム A4サイズ グリーン",
          src: "https://shopimg.kitamura.jp/images/pd/77d/81c/842/2f9/23e/e11/066/139/297/393/d83/hkl/pqx/6/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift"],
          href: "/special/sale-fair/camera/album/775/?display=detail",
          name: "セキセイ XP-4310 カジュアルアルバム ドット フリー台紙タイプ グリーン",
          src: "https://shopimg.kitamura.jp/images/pd/7e5/cbd/61f/b5c/324/6af/8a7/411/2c0/6ec/85q/gue/bsg/h/M.jpg",
          type: "クラフトアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/832/?display=detail",
          name: "ナカバヤシ アカ-CPL-240-P PPポケットアルバム キャンディカラー240 L判240枚 ピンク",
          src: "https://shopimg.kitamura.jp/images/pd/1b5/9a3/eaf/4db/de1/de5/81a/88d/be3/0bc/f8d/csj/k03/w/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po", "tai"],
          href: "/special/sale-fair/camera/album/339/?display=detail",
          name: "ナカバヤシ BPL-240-6-Y ブック式ポケットアルバム 240枚 ボタニックガーデン イエロー",
          src: "https://shopimg.kitamura.jp/images/pd/2cc/9ef/243/522/c98/a75/58b/b9d/d65/753/dfb/k1b/7dk/9/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po", "tai"],
          href: "/special/sale-fair/camera/album/340/?display=detail",
          name: "セキセイ XP-3250-10 フレームアルバム Lサイズ ブルー",
          src: "https://shopimg.kitamura.jp/images/pd/ed8/01f/d42/712/e70/538/9c4/47e/a27/535/4bq/61o/55w/1/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/355/",
          name: "セキセイ LA-3780-15 ラポルタ ポケットアルバム フレーム 80枚収納 ネイビーブルー",
          src: "https://shopimg.kitamura.jp/images/pd/62b/049/f33/7e5/03e/7e8/644/45d/263/80c/28n/183/gwq/7/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po", "tai"],
          href: "/special/sale-fair/camera/album/390/?display=detail",
          name: "万丈 AO-1200PK メガアルバム ATSUI OMOI ピンク",
          src: "https://shopimg.kitamura.jp/images/pd/7f1/c81/b01/c79/893/299/030/c57/f08/7da/31z/66a/d90/f/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/351/?display=detail",
          name: "ナカバヤシ COT-A-BK-P ことりっぷ かける～の台紙 ブック式アルバム ピンク",
          src: "https://shopimg.kitamura.jp/images/pd/085/477/86a/539/c7c/799/57b/936/e4e/47b/8c3/9yu/qy1/f/M.jpg",
          type: "ブック式・ポケットアルバム他",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/359/?display=detail",
          name: "セキセイ XD-120LP カケルアルバム レッド",
          src: "https://shopimg.kitamura.jp/images/pd/c36/c89/36d/d59/3a2/2a9/b1d/c5d/7c2/927/a3e/9rs/vnr/9/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po",],
          href: "/special/sale-fair/camera/album/367/?display=detail",
          name: "セキセイ KP-160-10 フォトアルバム 高透明 Lサイズ 160枚収納 BU ブルー",
          src: "https://shopimg.kitamura.jp/images/pd/a7a/92a/bd5/5ef/663/d54/f55/2b3/4d9/1f2/49k/53f/x67/p/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/358/?display=detail",
          name: "ナカバヤシ アE-MB-152S(ナチュラル) ブラック・A4",
          src: "https://shopimg.kitamura.jp/images/pd/989/048/d6d/251/c11/2d5/5d8/c87/2c9/584/97d/pqe/cqf/7/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/364/?display=detail",
          name: "ナカバヤシ Digio デジタルフリーアルバム「ファビファビ」A4サイズ/ブラック アH-A4F-181-D",
          src: "https://shopimg.kitamura.jp/images/pd/ded/634/a8d/52a/26a/c28/706/a97/123/9f4/ae4/jii/9qs/0/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift",],
          href: "/special/sale-fair/camera/album/362/?display=detail",
          name: "チクマ ブックタイプアルバム NEWハートスケープ 窓付きタイプ 2L 6P ホワイト [中枠2L・Lタイプ] (17756-2)",
          src: "https://shopimg.kitamura.jp/images/pd/089/6ea/3d8/b29/f5e/195/db4/2ed/66d/95b/021/0ai/ad4/s/M.jpg",
          type: "ブックタイプアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/388/",
          name: "ナカバヤシ ア-FTPC-201-2 フォトランク フレームケースアルバム ディック・ブルーナ/ミッフィー L判1段60枚 ホワイト",
          src: "https://shopimg.kitamura.jp/images/pd/092/65c/e14/963/141/836/b7d/5bd/84d/b62/b9v/hmq/8gu/w/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "tai", "po"],
          href: "/special/sale-fair/camera/album/1850/",
          name: "ナカバヤシ ポケットアルバム フォトグラフィリア 2L判200枚 PH2L-1020-D ブラック",
          src: "https://shopimg.kitamura.jp/images/pd/df0/dbb/a05/32e/ce5/291/4b1/a24/6d6/397/f49/kb2/mqd/f/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po", "fr", "gift"],
          href: "/special/sale-fair/camera/album/379/",
          name: "ナカバヤシ 外ビス式 布クロスフリーアルバム「テラコッタ」A4サイズ/レッド TER-A4F-160-R",
          src: "https://shopimg.kitamura.jp/images/pd/281/a03/be9/2bc/cb0/1ee/259/300/f0c/fbf/3ff/56f/xqn/j/M.jpg",
          type: "ポケットアルバム/フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/342/?display=detail",
          name: "ナカバヤシ フリーアルバム A4サイズ アH-A4B-170-P ヴィンテージ",
          src: "https://shopimg.kitamura.jp/images/pd/a9a/133/f22/097/760/853/865/95a/f14/714/8d7/ayw/7e5/u/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/384/?display=detail",
          name: "【在庫限り】マークス DCP-AL14 デコラップアルバム Lサイズ アニバーサリー ピンク",
          src: "https://shopimg.kitamura.jp/images/pd/5a2/c71/3d6/2f3/438/0fb/6eb/f64/22c/921/caz/fih/dmz/l/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/374/",
          name: "ナカバヤシ ア-LB-351-P フエル誕生用 プラコート台紙 タオルベアー ピンク Lサイズ",
          src: "https://shopimg.kitamura.jp/images/pd/b23/e35/43c/bfd/3b7/f41/649/881/aaa/e15/42l/x02/30o/k/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/391/?display=detail",
          name: "ナカバヤシ ギフトアルバム/A5 エナメルクロス アH-A5B-201-R レッド",
          src: "https://shopimg.kitamura.jp/images/pd/d13/a8b/bd3/85b/b11/454/48b/82e/61c/1e4/7al/9pv/jp1/w/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/392/",
          name: "ナカバヤシ PHE2168A-B フォトホルダー L判168枚 花柄 ブルー",
          src: "https://shopimg.kitamura.jp/images/pd/882/229/f82/d74/27f/84c/fdd/fde/82b/0ea/ce7/oiy/d6p/b/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/pd/list_dtl.html?index=all&searchbox=1&q=かける～の台紙アルバム+S+ストライプ&path=&y=0&x=0",
          name: "ナカバヤシ アK-SFB-133-B かける～の台紙アルバム S ストライプフラワー ブルー",
          src: "https://shopimg.kitamura.jp/images/pd/7f7/11b/7cb/836/749/8e7/bf1/5f9/f27/e95/36g/ba5/zlj/1/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "fr"],
          href: "/special/sale-fair/camera/album/395/?display=detail",
          name: "ナカバヤシ アH-LD-191-W ドゥ ファビネフエルアルバム ホワイト",
          src: "https://shopimg.kitamura.jp/images/pd/017/92b/fa6/f01/558/35c/a76/ad1/cb2/ba8/0fy/gcl/kr7/i/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/398/?display=detail",
          name: "フジカラー プロフェッショナルプリントファイルA4・ワイド6切",
          src: "https://shopimg.kitamura.jp/images/pd/ea5/2c2/d6d/a3e/d62/f78/78a/c5c/3fa/359/659/h2o/lkb/5/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/pd/list_dtl.html?index=all&searchbox=1&q=ナカバヤシ+PH6TL-1240&path=&y=0&x=0",
          name: "ナカバヤシ PH6TL-1240-C L判タテ6面フォトホルダー クリア",
          src: "https://shopimg.kitamura.jp/images/pd/c01/26a/630/f59/a51/3a4/69d/e2a/6f2/10e/c16/scq/bge/7/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/393/?display=detail",
          name: "ナカバヤシ 背丸ブック式 3段ポケットアルバム TCBP-240-RG セラピーカラー",
          src: "https://shopimg.kitamura.jp/images/pd/2ec/cb8/5bb/4e6/4eb/38c/194/509/999/e19/b8k/7rz/2hr/3/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "fr",],
          href: "/special/sale-fair/camera/album/1854/",
          name: "ナカバヤシ LUWK-L1-OY フリーアルバム Wリングかける～の L判 ルッソ オレンジイエロー",
          src: "https://shopimg.kitamura.jp/images/pd/025/492/350/b6d/3e1/04f/37a/423/f7a/f1e/52d/8dx/0tq/0/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/381/",
          name: "ハクバ APNP-2LY-FWS Pポケットアルバム NP 2Lサイズ ヨコ 20枚 フラワーズ",
          src: "https://shopimg.kitamura.jp/images/pd/cf2/676/d0e/14a/ef4/248/996/22a/2bc/ee5/49l/679/f1t/y/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/special/sale-fair/camera/album/397/",
          name: "ハクバ SF-1 プリントファイル EL ブルー",
          src: "https://shopimg.kitamura.jp/images/pd/ee5/219/c04/027/a94/ec9/44f/660/98b/1d2/ebm/3o4/l6d/1/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "po", "tai"],
          href: "/ct/C014001002/",
          name: "セキセイ FINN-7769 フィンダッシュ アルバム5 クラウド",
          src: "https://shopimg.kitamura.jp/images/pd/710/da7/a64/a84/f68/f78/638/9b4/c31/279/8fb/dr0/kf2/8/M.jpg",
          type: "ポケットアルバム",
        },
        {
          category: ["all", "fr", "tai"],
          href: "/special/sale-fair/camera/album/373/?display=detail",
          name: "ナカバヤシ フエルアルバムエスティーム ア-LG-301-W",
          src: "https://shopimg.kitamura.jp/images/pd/9de/c12/1e0/075/1d8/92f/ed8/957/28e/b38/69c/8me/r34/9/M.jpg",
          type: "フリーアルバム",
        },
        {
          category: ["all", "gift", "po"],
          href: "/special/sale-fair/camera/album/399/?display=detail",
          name: "セキセイ PKA-718 パックン カバーアルバム 2L判 浮世絵 歌舞伎",
          src: "https://shopimg.kitamura.jp/images/pd/00a/c6c/ea9/b22/4dc/616/ea9/69a/08c/0d3/65y/hiq/oux/u/M.jpg",
          type: "ポケットアルバム",
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/album/feature',
          img: 'https://shopimg.kitamura.jp/images/banner/3597.jpg',
          alt: '卒園アルバムをかわいく作るコツ'
        },
        {
          href: '/ec/special/camera/frame/shacolla',
          img: 'https://shopimg.kitamura.jp/images/banner/3099.gif',
          alt: 'シャコラ'
        },
        {
          href: '/ec/special/camera/album/original/2052',
          img: 'https://shopimg.kitamura.jp/images/banner/2741.gif',
          alt: 'キタムラオリジナルベビーアルバム'
        },
        {
          href: '',
          img: 'https://shopimg.kitamura.jp/images/banner/3496.jpg',
          alt: 'プレゼントにおすすめ'
        },
        {
          href: '/special/sale-fair/sale/lotbuying/',
          img: 'https://shopimg.kitamura.jp/images/banner/3773.gif',
          alt: 'まとめ買いコーナー'
        },
        {
          href: '/ec/special/general/print-service/square',
          img: 'https://shopimg.kitamura.jp/images/banner/7197.jpg',
          alt: 'ましかくプリントにおすすめ'
        },
        {
          href: '/ec/special/camera/album/1440',
          img: 'https://shopimg.kitamura.jp/images/banner/7199.jpg',
          alt: 'プレゼントにおすすめ'
        },
        {
          href: '/ec/special/camera/album/1826',
          img: 'https://shopimg.kitamura.jp/images/banner/7201.jpg',
          alt: '大量収納におすすめアルバム'
        },
        {
          href: '/ec/special/camera/album/1439/?limit=100',
          img: 'https://shopimg.kitamura.jp/images/banner/7200.jpg',
          alt: '大量収納におすすめアルバム'
        }
      ]
    });

    const filterByCategory = computed(() => {
      const result = state.albumList.filter((value) => {
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