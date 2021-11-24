<template>
  <v-app>
    <div class="kaden-bottle">
      <div class="main-contents-wrap">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="text-subtitle-2">水筒・ステンレスボトル・タンブラー特集｜おすすめの水筒・ステンレスボトル・タンブラーを集めました</h1>
        <v-img src="/ec/images2/special/kaden/bottle/sui_00.gif" max-width="100%" height="auto"></v-img>
        <v-container class="mt-2 mb-10">
          <v-row>
            <v-col cols="12" sm="4" v-for="(navi, i) in naviList" :key="i">
              <a v-scroll-to="navi.href">
                <v-hover v-slot="{ hover }">
                  <v-img :src="hover ? navi.onImage : navi.offImage" max-width="222" height="auto" class="mx-auto"></v-img>
                </v-hover>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!--▼水筒特集-->
        <div :id="`b0${i + 1}`" v-for="(waterBottle, i) in waterBottleSpecialFeatureList" :key="i">
          <h2 class="pd-2 text-h5 font-weight-bold">
            {{ waterBottle.title
            }}<span class="text-body-1 ml-5 font-weight-bold">{{
              i === 2 ? 'おすすめの水筒・ステンレスボトル・タンブラー' : 'おすすめの水筒・ステンレスボトル'
            }}</span>
          </h2>
          <p class="pa-2 including-line-breaks">
            {{ waterBottle.txt }}
          </p>
          <v-container class="pa-0">
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="6">
                <a :href="waterBottle.href">
                  <v-img :src="`/ec/images2/special/kaden/bottle/sui_itm0${i + 1}-1.jpg`" max-width="544" height="auto" class="mx-auto hover"></v-img>
                </a>
              </v-col>
              <v-col cols="6">
                <dl class="float-left">
                  <dd class="pb-2 text-body-1 text-center bg-usumomo float-left including-line-breaks">
                    <v-img :src="`/ec/images2/special/kaden/bottle/sui_itm0${i + 1}-2.gif`" max-width="198" height="auto" /><br />
                    <span class="font-weight-bold red--text text--darken-2">★POINT★</span><br />{{ waterBottle.pointtxt[0] }}
                  </dd>
                  <dd class="pb-2 ml-1 text-body-1 text-center bg-usumomo float-left including-line-breaks">
                    <v-img :src="`/ec/images2/special/kaden/bottle/sui_itm0${i + 1}-3.gif`" max-width="198" height="auto" /><br />
                    <span class="font-weight-bold red--text text--darken-2">★POINT★</span><br />{{ waterBottle.pointtxt[1] }}
                  </dd>
                </dl>
              </v-col>
              <div class="text-center cl">
                <v-btn x-large width="320" color="red darken-2" :href="waterBottle.href" class="cl mt-4">
                  <span class="white--text text-h6"><v-icon left color="white">fas fa-caret-right</v-icon>商品一覧を見る</span>
                </v-btn>
              </div>
            </v-row>
          </v-container>
          <div class="my-7 bordd-u"></div>
        </div>

        <!-- ↓ 特集IDでの商品一覧表示 -->
        <h2 class="pd-2 text-h5 font-weight-bold my-5">その他水筒・ステンレスボトルはこちら</h2>
        <product-list-by-special-id class="mb-5" :specialId="1492" />
        <facebookAndTwitter />
        <h2 class="pd-2 text-h5 font-weight-bold">▼おすすめ特集・プリントサービス</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'kaden-bottle',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: () => {
    document.title = '水筒・ステンレスボトル・タンブラー特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'お子様におすすめの水筒や、スポーツ後にサッと飲める便利な水筒、オフィス用に軽くてスマートな水筒など、おすすめの水筒・ステンレスボトル・タンブラーを集めました。')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '水筒・ステンレスボトル・タンブラー特集',
          disabled: true
        }
      ],
      naviList: [
        { href: '#b01', alt: 'お子様用', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/bottle/sui_bot01-on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/bottle/sui_bot01-off.gif' },
        { href: '#b02', alt: 'スポーツ用', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/bottle/sui_bot02-on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/bottle/sui_bot02-off.gif' },
        { href: '#b03', alt: 'オフィス用', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/bottle/sui_bot03-on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/bottle/sui_bot03-off.gif' },
      ],
      waterBottleSpecialFeatureList: [
        {
          title: '運動会・遠足・通学用に！お子様でも持ち運びやすい♪',
          txt: 'コップ飲み、ダイレクト飲みの2通り対応で、ホットもアイスもOK！一年中使えます。\nお子様でも持ち運びやすい、軽くてコンパクトなステンレスボトルです。',
          href: '/ec/special/kaden/bottle/kids',
          pointtxt: ['ダイレクト&コップ飲み\n2通り対応！', 'ホットもアイスもOK!\n一年中使える']
        },
        {
          title: 'スポーツシーンや暑い夏の水分補給に！',
          txt: '保冷専用クールボトル！いつでも冷たいドリンクが飲める、優れた保冷性能と機能性がおすすめ！\nワンプッシュで開閉できるダイレクト飲み口なので、スポーツ中でもすぐ水分補給ができるのが便利です。\nまた、広い口径で、氷を入れやすく、お掃除も底まで直洗いできます。',
          href: '/ec/special/kaden/bottle/sports',
          pointtxt: ['片手で簡単\nワンタッチオープン！', 'ワイドな口径で\n大きな氷が入る！']
        },
        {
          title: 'オフィスバッグにもすっきり収納！',
          txt: 'オフィスでも定番のステンレスボトル！\n持ち運びに便利な保温・保冷マグボトルや、デスクで使えるタンブラー！\n性能だけでなく、見た目にもこだわった商品を集めました。\nお気に入りのデザインを選んで、自分らしさを演出しちゃいましょう★',
          href: '/ec/special/kaden/bottle/office',
          pointtxt: ['オフィス用にピッタリの\nエレガントなデザイン', '樹脂カバーつきで\nなめらかな飲み口']
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/kaden/bento',
          img: 'https://shopimg.kitamura.jp/images/banner/3807.jpg',
          alt: 'お弁当作りにおすすめキッチン商品'
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
        },
        {
          href: '/ec/special/page/telephoneorder-info',
          img: 'https://shopimg.kitamura.jp/images/banner/1361.gif',
          alt: '電話注文のご案内'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.kaden-bottle {
  p {
    line-height: 1.5em;
    font-size: 16px;
    letter-spacing: 0.08em;
  }
  .bg-usumomo {
    background: #fcd9d8;
  }
  .bordd-u {
    border-bottom: #999 1px dashed;
  }
}
</style>