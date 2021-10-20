<template>
  <v-app>
    <div class="campaign">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <v-card img="/ec/images2/special/sale-fair/title-bg.jpg" v-if="$vuetify.breakpoint.mdAndUp">
          <v-img
            v-if="$vuetify.breakpoint.mdAndUp"
            src="/ec/images2/special/sale-fair/title.png"
            alt="セール・特集一覧"
            max-width="550px"
            max-height="200px"
            class="mx-auto"
          />
        </v-card>
        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          src="/ec/images2/special/sale-fair/title.png"
          alt="セール・特集一覧"
          max-width="360px"
          max-height="130px"
          class="mx-auto"
        />

        <p>下記ボタンよりメーカーを絞り込む事ができます</p>

        <div class="category-nav">
          <v-container fluid>
            <v-row>
              <v-col cols="6" sm="2" v-for="narrowing in narrowingList" :key="narrowing.value" class="pa-1 text-center">
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

        <v-container class="individual mt-10">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(campaign, index) in filterByCategory" :key="index">
              <v-hover v-slot="{ hover }">
                <v-expand-transition>
                  <v-card :elevation="hover ? 10 : 2">
                    <router-link :to="campaign.href">
                      <v-img :src="campaign.src" max-width="100%" class="hover"></v-img>
                      <span class="item-name text-subtitle-2">{{ campaign.productName }}</span>
                    </router-link>
                  </v-card>
                </v-expand-transition>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
export default Vue.extend({
  name: 'sale-fair',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: (props, context) => {
    document.title = 'セール・特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'セール・特集・HOW TOなど、お得な情報やちょっと為になる情報ご紹介')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'セール・特集一覧',
          disabled: true
        }
      ],
      category: 'all',
      narrowingList: [
        { src: '/ec/images2/special/sale-fair/btn-new-w.png', value: 'all' },
        { src: '/ec/images2/special/sale-fair/btn-sale-w.png', value: 'sale' },
        { src: '/ec/images2/special/sale-fair/btn-camera-w.png', value: 'camera' },
        { src: '/ec/images2/special/sale-fair/btn-kaden-w.png', value: 'kaden' },
        { src: '/ec/images2/special/sale-fair/btn-print-w.png', value: 'print' },
        { src: '/ec/images2/special/sale-fair/btn-general-w.png', value: 'general' },
      ],
      campaignlist: [
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/rice-cooker_bestbuy",
          src: "https://shop.kitamura.jp/images/banner/2401.jpg",
          productName: "おすすめ炊飯器特集",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/prepare",
          src: "https://shop.kitamura.jp/images/banner/7764.jpg",
          productName: "防災グッズ特集<br />もしもの備えにおすすめ防災グッズ集めました",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/travel",
          src: "https://shop.kitamura.jp/images/banner/7722.png",
          productName: "旅のお供に！バイヤー厳選<br />おすすめ 旅カメラ",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/okamoto-yutaka",
          src: "https://shop.kitamura.jp/images/banner/7678.jpg",
          productName: "航空写真家 岡本豊先生の<br />レオフォト三脚講座",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/bottle",
          src: "https://shop.kitamura.jp/images/banner/1921.jpg",
          productName: "おすすめの水筒・ステンレスボトルを集めました",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/smart_phone/iphone",
          src: "https://shop.kitamura.jp/images/banner/7562.jpg",
          productName: "iPhoneSE（第二世代）/iPhoneSE（第一世代）の性能を比較しました",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended",
          src: "https://shop.kitamura.jp/images/banner/6603.jpg",
          productName: "スタッフイチオシ",
        },
        {
          category: ["all", "camera", "general"],
          href: "https://shasha.kitamura.jp/",
          src: "https://shop.kitamura.jp/images/banner/8235.png",
          productName: "ShaSha:写真がもっと好きになる",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/air-purifier_fair",
          src: "https://shop.kitamura.jp/images/banner/2393.gif",
          productName: "花粉対策特集 | おすすめ空気清浄機",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/graduation_entrance",
          src: "https://shop.kitamura.jp/images/banner/1929.gif",
          productName: "卒業・入学特集！おすすめのビデオカメラ・カメラ大集合！",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/album/feature",
          src: "https://shop.kitamura.jp/images/banner/3597.jpg",
          productName: "手作りアルバムの作り方特集"
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/lensfilter/1869/?limit=100",
          src: "https://shop.kitamura.jp/images/banner/2746.jpg",
          productName: "春のおすすめフィルター",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/bento",
          src: "https://shop.kitamura.jp/images/banner/3807.jpg",
          productName: "お弁当生活におすすめ商品<br>キッチン商品大集合！",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/photomount",
          src: "https://shop.kitamura.jp/images/banner/3611.gif",
          productName: "写真台紙 おすすめシリーズ紹介",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/waterproof",
          src: "https://shop.kitamura.jp/images/banner/1220.jpg",
          productName: "防水カメラ・ウェアラブルカメラ特集",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/frame",
          src: "https://shop.kitamura.jp/images/banner/2780.gif",
          productName: "額縁・写真フォトフレーム おすすめシリーズ紹介",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/album",
          src: "https://shop.kitamura.jp/images/banner/2456.gif",
          productName: "写真アルバム おすすめシリーズ紹介",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/lens",
          src: "https://shop.kitamura.jp/images/banner/3016.png",
          productName: "おすすめカメラレンズ人気ランキング",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/heater-best",
          src: "https://shop.kitamura.jp/images/banner/2374.jpg",
          productName: "最新おすすめ暖房ストア 2019",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/storage",
          src: "https://shop.kitamura.jp/images/banner/2043.jpg",
          productName: "防湿庫の選び方・湿気対策特集",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/tuyutaisaku",
          src: "https://shop.kitamura.jp/images/banner/5422.png",
          productName: "梅雨対策特集<br />便利なアイテム集めました",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/bag",
          src: "https://shop.kitamura.jp/images/banner/1155.gif",
          productName: "カメラバッグ・カメラケース特集★一眼レフ/ミラーレス/デジカメ用",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/dslr",
          src: "https://shop.kitamura.jp/images/banner/1350.gif",
          productName: "おすすめのデジタル一眼レフ/ミラーレスカメラ特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/ricemill",
          src: "https://shop.kitamura.jp/images/banner/5814.jpg",
          productName: "おすすめ精米機特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/sp-accessory",
          src: "https://shop.kitamura.jp/images/banner/2314.png",
          productName: "iPhoneアクセサリー・ケース",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/tv-recorder/sony",
          src: "https://shop.kitamura.jp/images/banner/5762.jpg",
          productName: "ソニーの新型レコーダーに変えたら新作アニメの録画が捗った件",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/compact",
          src: "https://shop.kitamura.jp/images/banner/1986.jpg",
          productName: "おすすめデジカメ/デジタルカメラ特集",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/general/sportsday",
          src: "https://shop.kitamura.jp/images/banner/2006.gif",
          productName: "おすすめカメラ・撮影のコツ・写真の残し方まで★パパ・ママ応援！運動会特集",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/girlscamera",
          src: "https://shop.kitamura.jp/images/banner/1390.jpg",
          productName: "女子がきゅんとくる ミラーレス一眼カメラ",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/lensfilter",
          src: "https://shop.kitamura.jp/images/banner/1342.jpg",
          productName: "カメラレンズフィルターで写真がもっと楽しくなる！種類・選び方・効果",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/air-purifier_fair/aircleaner-compare",
          src: "https://shop.kitamura.jp/images/banner/3426.png",
          productName: "ここが違う！おすすめ加湿空気清浄機。シャープ・ダイキン製品を比較！",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2015/0821",
          src: "https://shop.kitamura.jp/images/banner/3576.png",
          productName: "COOLSHOT特集",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/mizuno-health-care",
          src: "https://shop.kitamura.jp/images/banner/5213.jpg",
          productName: "ミズノの健康グッズで<br>からだにいいコトはじめよう",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/lensfilter/344",
          src: "https://shop.kitamura.jp/images/banner/2449.jpg",
          productName: "クロスフィルター特集",
        },
        {
          category: ["all", "camera", "kaden"],
          href: "/ec/special/kaden/smart_phone/sim_free",
          src: "https://shop.kitamura.jp/images/banner/3108.gif",
          productName: "おすすめSIMフリースマホ特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/toaster-oven",
          src: "https://shop.kitamura.jp/images/banner/6374.jpg",
          productName: "おすすめ高級トースター特集",
        },
        {
          category: ["all", "sale", "general"],
          href: "/ec/special/sale/shoppingcredit-campaign",
          src: "https://shop.kitamura.jp/images/banner/4847.jpg",
          productName: "一部商品に限り、最大60回分割まで金利を当店が負担！",
        },
        {
          category: ["all", "print"],
          href: "http://www.kitamura-print.com/",
          src: "https://shop.kitamura.jp/images/banner/341.jpg",
          productName: "超高画質プリント",
        },
        {
          category: ["all", "sale"],
          href: "/ec/special/sale/high-magnification",
          src: "https://shop.kitamura.jp/images/banner/3164.jpg",
          productName: "高倍率ズーム デジカメ・ビデオカメラセール",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/operaglass",
          src: "https://shop.kitamura.jp/images/banner/2462.gif",
          productName: "双眼鏡の選び方♪双眼鏡で、もっと楽しく♪",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/bag/feature/trekking",
          src: "https://shop.kitamura.jp/images/banner/2932.gif",
          productName: "休日はフォトトレッキングに行こう！<br>カメラバック・カメラ用品のご紹介",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/lensfilter/nikon-arcrest",
          src: "https://shop.kitamura.jp/images/banner/4162.jpg",
          productName: "ナノクリスタルコート採用のNIKKORレンズにおすすめ保護フィルター",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/lensfilter/nikon-arcrest-nd",
          src: "https://shop.kitamura.jp/images/banner/7485.png",
          productName: "ARCRESTシリーズからND(減光)フィルターが登場！ニコンARCREST NDフィルター",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/mirrorless-oldlens",
          src: "https://shop.kitamura.jp/images/banner/4116.jpg",
          productName: "レトロなのに新しい！ミラーレス一眼とオールドレンズで撮影しよう"
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/filmcamera/utsurundesu",
          src: "https://shop.kitamura.jp/images/banner/4115.gif",
          productName: "写ルンですの使い方・楽しみ方特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/home-party",
          src: "https://shop.kitamura.jp/images/banner/3770.gif",
          productName: "誕生日会、パーティに☆使って楽しい<br>キッチン家電特集",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/tokutokukoukan",
          src: "https://shop.kitamura.jp/images/banner/3778.gif",
          productName: "差額分だけのお支払い｢トクトク交換｣の特徴",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/innerscandual",
          src: "https://shop.kitamura.jp/images/banner/2099.gif",
          productName: "タニタ 体組成計特集 -ダイエットや体力作りにおすすめの体組成計",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/printer",
          src: "https://shop.kitamura.jp/images/banner/1615.gif",
          productName: "おすすめプリンター特集！",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/general/watch/omega",
          src: "https://shop.kitamura.jp/images/banner/1459.jpg",
          productName: "オメガ(OMEGA) 時計特集",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/strap",
          src: "https://shop.kitamura.jp/images/banner/1392.gif",
          productName: "おしゃれなストラップ特集",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/bag/trial",
          src: "https://shop.kitamura.jp/images/banner/1437.jpg",
          productName: "カメラバッグトライアルサービス",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/astronomical",
          src: "https://shop.kitamura.jp/images/banner/1327.gif",
          productName: "天体イベント スケジュール",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/astronomical/moonlook",
          src: "https://shop.kitamura.jp/images/banner/1306.jpg",
          productName: "天体観測入門★月を見よう",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/astronomical/telescope",
          src: "https://shop.kitamura.jp/images/banner/1698.jpg",
          productName: "初心者におすすめ 天体望遠鏡の選び方",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/astronomical/telescope-feature",
          src: "https://shop.kitamura.jp/images/banner/2381.jpg",
          productName: "本格的な天体観測・天体撮影におすすめの赤道儀シリーズ",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/polarie",
          src: "https://shop.kitamura.jp/images/banner/1488.gif",
          productName: "星空を撮影しよう！星空撮影入門特集",
        },
        {
          category: ["all", "camera", "general"],
          href: "/ec/special/camera/polarie/acc",
          src: "https://shop.kitamura.jp/images/banner/3588.gif",
          productName: "ポラリエとカメラ用望遠レンズで星空・天体撮影",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/wireless_image-share",
          src: "https://shop.kitamura.jp/images/banner/2785.gif",
          productName: "デジカメとスマホを無線でつないで写真を楽しもう",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/tripod",
          src: "https://shop.kitamura.jp/images/banner/3253.gif",
          productName: "おすすめ三脚の選び方",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/photocon-learn",
          src: "https://shop.kitamura.jp/images/banner/2180.gif",
          productName: "フォトコンテスト受賞作品から学ぶ 【レンズ・フィルター・星空撮影】",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/story_after_taking",
          src: "https://shop.kitamura.jp/images/banner/2340.gif",
          productName: "｢写真撮ったあと物語｣_写真整理・贈り方・飾り方に困っている3人の物語",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/frame/shacolla",
          src: "https://shop.kitamura.jp/images/banner/3099.gif",
          productName: "フジフイルム シャコラで写真を壁に飾ろう！",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/album/original/2052",
          src: "https://shop.kitamura.jp/images/banner/2741.gif",
          productName: "キタムラオリジナルベビーアルバム「はじめてがいっぱい」",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/grandx",
          src: "https://shop.kitamura.jp/images/banner/3544.gif",
          productName: "タイガーGRAND X(グランエックス)シリーズ",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/how-to/hanabi",
          src: "https://shop.kitamura.jp/images/banner/3043.jpg",
          productName: "花火撮影特集｜打ち上げ花火の撮影のコツ＆撮影に便利な商品紹介 ",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/summerhomework",
          src: "https://shop.kitamura.jp/images/banner/1309.gif",
          productName: "カメラ専門店のスタッフがおすすめする、夏休み 自由研究特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/hairdressing/soie",
          src: "https://shop.kitamura.jp/images/banner/2074.jpg",
          productName: "ボディケア レディースシェーバー特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/fan-fair",
          src: "https://shop.kitamura.jp/images/banner/6597.jpg",
          productName: "おすすめ扇風機特集2019",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/glamping",
          src: "https://shop.kitamura.jp/images/banner/3045.gif",
          productName: "ベランダグランピング特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/air-purifier_fair/daikin",
          src: "https://shop.kitamura.jp/images/banner/4130.gif",
          productName: "夏のお悩み空気清浄機で解決！",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/heyabosi",
          src: "https://shop.kitamura.jp/images/banner/4005.jpg",
          productName: "おすすめ除湿機特集",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/general/stationery/mannenhitsu/how_to",
          src: "https://shop.kitamura.jp/images/banner/2479.gif",
          productName: "万年筆の選び方",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/filmcamera",
          src: "https://shop.kitamura.jp/images/banner/3771.gif",
          productName: "チェキ・チェキフィルム、チェキアルバムおすすめ商品",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/general/pet",
          src: "https://shop.kitamura.jp/images/banner/1878.jpg",
          productName: "ペット写真のステキな残し方",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/fall-of-taste/?display=detail",
          src: "https://shop.kitamura.jp/images/banner/2287.gif",
          productName: "思わず作りたくなるグッズがいっぱい！秋の味覚特集",
        },
        {
          category: ["all", "camera"],
          href: "/ec/special/camera/album/feature/2519",
          src: "https://shop.kitamura.jp/images/banner/3496.jpg",
          productName: "年賀状のデコレーションにおすすめ！<br />年賀状に書ける「写真ペン」",
        },
        {
          category: ["all", "kaden"],
          href: "/ec/special/kaden/hit-kaden",
          src: "https://shop.kitamura.jp/images/banner/5992.png",
          productName: "忘年会の景品やクリスマスプレゼントに人気の家電をご紹介♪",
        },
        {
          category: ["all", "sale"],
          href: "/ec/special/sale/lotbuying",
          src: "https://shop.kitamura.jp/images/banner/3773.gif",
          productName: "まとめ買いコーナー",
        },
        {
          category: ["all", "kaden", "general"],
          href: "/ec/special/kaden/begin_large-size_kaden",
          src: "https://shop.kitamura.jp/images/banner/3781.gif",
          productName: "大型家電の設置・リサイクル回収承ります",
        },
        {
          category: ["all", "camera", "kaden", "general"],
          href: "/ec/special/sale/outlet/1109",
          src: "https://shop.kitamura.jp/images/banner/3810.gif",
          productName: "カメラ・家電アウトレット",
        },
        {
          category: ["all", "general"],
          href: "/ec/special/page/telephoneorder-info",
          src: "https://shop.kitamura.jp/images/banner/1361.jpg",
          productName: "電話注文のご案内",
        },
        {
          category: ["all", "general"],
          href: "/ec/guide/s_credit_01l",
          src: "https://shop.kitamura.jp/images/banner/1486.gif",
          productName: "ショッピングクレジット",
        }
      ]
    });

    const filterByCategory = computed(() => {
      const result = state.campaignlist.filter((value) => {
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

<style lang="scss" scoped>
.campaign .individual .item-name {
  display: block;
  height: 5em;
  margin-top: 5px;
  padding: 0 3%;
}
</style>