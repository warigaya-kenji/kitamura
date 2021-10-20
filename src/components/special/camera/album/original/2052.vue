<template>
  <v-app>
    <div class="original-2052">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-body-2">誕生祝い・出産祝いの贈り物におすすめ！ キタムラオリジナルのベビーアルバムです</h1>
        <v-img src="https://shop.kitamura.jp/ts_rsc/738/images/rec_gotop_off.gif" max-width="100%" max-height="auto" alt="はじめてがいっぱい"></v-img>
        <div class="mt-7 pa-5">
          <p>
            「楽しく」「カンタン」に記録できる！ をコンセプトにしたアルバム。<br />
            お子さまが生まれたママやお誕生ギフトを探している方、気軽に成長記録を残したい方におすすめな、キタムラオリジナルのベビーアルバムです
          </p>

          <!-- ↓ どんなアルバム？ 「はじめてがいっぱい」オリジナルベビーアルバム -->
          <h2 class="mb-5 font-weight-bold text-h6">
            <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
            どんなアルバム？ 「はじめてがいっぱい」オリジナルベビーアルバム
          </h2>
          <h3 class="text-body-1 font-weight-bold">タイトルに沿って写真を貼るだけなので、アルバム作りが苦手な方にもカンタンです。</h3>
          <v-img class="mt-5 mx-auto" src="https://shop.kitamura.jp/ts_rsc/738/images/1-2.jpg" max-width="900" max-height="500"></v-img>
          <div class="ling-g pa-1 mt-8">
            <p>
              <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_star.png" /></v-avatar>
              初めての方も、写真とコメントを書くだけで楽しく続けられます。
            </p>
            <p>
              <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_star.png" /></v-avatar>
              タイトルをイメージしたシンプルでかわいいデザインはもちろん、マスキングテープやシールなどでデコレーションしてもＯＫです！
              「おぎゃー！」「にっこり」「もぐもぐ」など全部で２３タイトル。
            </p>
            <p>
              <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_star.png" /></v-avatar>
              フォトコーナー付属なので写真の四隅を留めるだけで、タテでもヨコでも自由にアレンジして使えます。
            </p>
          </div>
        </div>

        <!-- ↓ どんな特長？ 「はじめてがいっぱい」オリジナルベビーアルバム -->
        <h2 class="mt-7 mb-5 font-weight-bold text-h6">
          <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
          どんな特長？ 「はじめてがいっぱい」オリジナルベビーアルバム
        </h2>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="4" v-for="(originalBabyAlbum, i) in originalBabyAlbumList" :key="i" class="mb-sm-5">
              <h3 class="font-weight-bold text-body-2">{{ originalBabyAlbum.item }}</h3>
              <v-img :src="originalBabyAlbum.src" max-width="290" max-height="290"></v-img>
              <p class="pa-1 caption">{{ originalBabyAlbum.txt }}</p>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ どんな中身？ 「はじめてがいっぱい」オリジナルベビーアルバム -->
        <h2 class="mt-4 mb-5 font-weight-bold text-h6">
          <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
          どんな中身？ 「はじめてがいっぱい」オリジナルベビーアルバム
        </h2>
        <p>
          「おぎゃー！」「にっこり」「もぐもぐ」など全部で２３タイトル。 タイトルに合わせたイラストでアルバムをかわいく演出
          1ページごとにタイトルを設けているので、はじめての方やアルバム作りが苦手な方にもおすすめ！
        </p>
        <v-img src="https://shop.kitamura.jp/ts_rsc/738/images/3-3.gif" max-width="900" max-height="603"></v-img>

        <!-- ↓ キタムラのプリントサービスを使えば一層楽しく作れます -->
        <h2 class="mt-7 mb-5 font-weight-bold text-h6">
          <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
          キタムラのプリントサービスを使えば一層楽しく作れます
        </h2>
        <p>
          「デザインフレームプリント」を使ってプリントをすれば、何気ない写真も一段とかわいく演出できます★写真を１枚に絞れない場合は「シャッフルプリント」もおすすめです！
        </p>
        <a href="http://www.kitamura-print.com/frame_print/?_ga=2.19295357.472877764.1633909842-279164427.1627285160" target="_brank">
          <v-img src="https://shop.kitamura.jp/ts_rsc/738/images/2-3.jpg" max-width="900" max-height="233" class="hover"></v-img>
        </a>
        <p class="text-right">
          <a href="http://www.kitamura-print.com/frame_print/" target="_brank">プリントサービスを詳しく見る>>> </a>
          <br />（※プリントサービスのページへ移動します）
        </p>

        <!-- ↓ 商品開発担当者に聞きました。 -->
        <h2 class="mt-7 mb-5 font-weight-bold text-h6">
          <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
          商品開発担当者に聞きました。
        </h2>
        <p>
          このオリジナルベビーアルバムは<br />
          「これから子育てするママへ、０歳～１歳までの大切な記録を残せるメモリーアルバムを作ろう」<br />
          「将来、そのアルバムをお子様に贈ることもできたらいいよね」という想いから商品化いたしました。<br />
          <br />
          1歳までに起こるイベントや成長過程を「こんな写真撮るよね、撮ったよね」
          と洗い出し、それをイメージしやすいタイトルに落とし込み作ったオリジナルベビーアルバムです。
          とっておきの写真は、プリントしてアルバムというカタチに楽しみながら残してみてください。きっとステキなアルバムができるはずです。
        </p>
        <p class="text-right">
          <v-btn text href="#top" class="caption"><v-icon left small color="red">fas fa-caret-up</v-icon>ページトップへ</v-btn>
        </p>

        <!-- ↓ご購入はカメラのキタムラへ -->
        <h2 class="mt-7 mb-5 font-weight-bold text-h6">
          <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
          ご購入はカメラのキタムラへ
        </h2>
        <p>
          本商品は、カメラのキタムラオリジナル商品です<br />
          ご購入は、店頭またはカメラのキタムラネットショップよりどうぞ！
        </p>
        <div class="text-center">
          <v-btn color="grey darken-1" width="300" height="53" href="/ec/pd/2500000122835" class="my-7">
            <span class="white--text text-subtitle-1">販売終了</span>
          </v-btn>
        </div>

        <div class="line-g pa-5">
          <h2 class="mt-7 mb-5 font-weight-bold text-h6">
            <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_star.png" /></v-avatar>
            実際に作ってみました！ 「はじめてがいっぱい」レビュー
          </h2>
          <v-row dense>
            <v-col cols="12" sm="8">
              <p>
                <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
                台紙がカラフルでかわいいので、工作が苦手でも安心でした。<br />
                また、たくさんプリントしなくていいのでまとめやすいです。<br />
                表紙や背表紙に子供の名前が書けるといいなと思います。（高知県 Ｋ子さん)
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="https://shop.kitamura.jp/ts_rsc/738/images/3-7.jpg" max-width="290" max-height="290" class="mx-auto"></v-img>
            </v-col>
          </v-row>

          <!-- ↓ おすすめ特集・サービス -->
          <h2 class="mt-7 mb-5 font-weight-bold text-h6">
            <v-avatar size="24" class="mr-2"><img src="https://shop.kitamura.jp/ts_rsc/738/images/bk_fing.png" /></v-avatar>
            おすすめ特集・サービス
          </h2>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'original-2052',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'キタムラオリジナルベビーアルバム 「はじめてがいっぱい」誕生祝いおすすめ！ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '生まれてから1歳の誕生日までのはじめてをギュッと詰め込んだアルバム登場！出産祝い・誕生祝いの贈り物にもおすすめなキタムラオリジナル商品です'
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
          path: 'キタムラオリジナルベビーアルバム 「はじめてがいっぱい」誕生祝いおすすめ！',
          disabled: true
        }
      ],
      originalBabyAlbumList: [
        { item: 'アルバムのサイズ', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/album/original/2052/3-1.jpg', txt: '製本はブックタイプのように背中部分にはリングが見えませんので、すっきり収納できます。' },
        { item: 'Wリングアルバム', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/album/original/2052/3-2.jpg', txt: 'Wリングアルバムで見開きやすいセパレートリングタイプです' },
        { item: 'アルバム台紙の紙質', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/album/original/2052/3-3.jpg', txt: '厚みのあるカラフルな印刷台紙で、丈夫で見開きもしやすく、フォトコーナーも貼りやすいです。台紙にペンで文字や絵を描くことができます。（油性ペンをおすすめします）' },
        { item: '半透明の扉紙', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/album/original/2052/3-4.jpg', txt: '半透明の扉紙（厚手のトレーシングペーパー） で、 最初のページに柔らかな印象を与え写真を保護します' },
        { item: 'フォトコーナー', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/album/original/2052/3-5.jpg', txt: 'どんな写真サイズにも使える、フォトコーナー。写真の四隅を留めるだけで自由にアレンジして使えます。写真の四隅に差し込んでから台紙に貼ってください' },
        { item: 'クリアポケット付き', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/album/original/2052/3-6.jpg', txt: '最後のページには、エコー写真やそのときの思い出写真を入れたり、自由に使えるポケットを付けました。' },
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale/lotbuying',
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
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ],
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.original-2052 {
  h2 {
    letter-spacing: 0.05em;
    height: auto;
    border-bottom: 1px solid #a37f54;
  }
  h3 {
    letter-spacing: 0.05em;
    height: auto;
  }
}
</style>