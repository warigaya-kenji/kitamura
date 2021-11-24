<template>
  <v-app>
    <div class="night-view">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <v-container class="mb-5">
          <v-row>
            <v-col cols="12" sm="6">
              <h1 class="night-view-title">夜景・イルミネーション写真撮影のコツ</h1>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                src="/ec/images2/special/general/how-to/night-view/kitamura_camegakulogo.jpg"
                alt="カメラのキタムラ×カメラの学校コラボ"
                max-width="360"
                max-height="65"
              />
            </v-col>
          </v-row>
        </v-container>
        <p>夜景やイルミネーションが綺麗な季節。写真撮影のコツを動画チェック！ 撮影に便利な、もっと楽しむアイテムをまとめました★</p>

        <h2 class="titleboxb">夜景 イルミネーション写真撮影のコツ動画</h2>
        <watchInVideo :src="'https://www.youtube.com/embed/zagiiiaoRkg?rel=0'" :height="$vuetify.breakpoint.mdAndUp ? 450 : 240" :sm="12" />

        <v-row>
          <v-col cols="12" sm="6">
            <h2 class="titleboxb">撮影のポイント</h2>
            <p>
              <v-avatar size="40" class="pb-6"><v-img src="/ec/images2/special/general/how-to/night-view/bg_check.gif"></v-img></v-avatar
              >ISO感度を上げる/上げすぎない
            </p>
            <p>
              <v-avatar size="40" class="pb-6"><v-img src="/ec/images2/special/general/how-to/night-view/bg_check.gif"></v-img></v-avatar
              >三脚などを使ってカメラを固定する
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/general/how-to/night-view/img_pic.jpg" alt="撮影のポイント" max-width="175" max-height="150"></v-img>
          </v-col>
        </v-row>

        <v-container>
          <v-row v-for="(nightView, i) in nightViewList" :key="i">
            <v-col cols="12">
              <h2 class="titleboxb">{{ nightView.title }}</h2>
            </v-col>
            <v-col cols="12" sm="6" v-for="(item, index) in nightView.items" :key="index">
              <h3 class="gstitle">
                <a :href="item.href" :target="i === 2 ? '_blank' : ''">{{ item.subtitle }}</a>
              </h3>
              <v-container>
                <v-row class="gs-coment">
                  <v-col cols="6">
                    <a :href="item.href" :target="i === 2 ? '_blank' : ''">
                      <v-img :src="item.src" max-width="170" max-height="170" class="hover"></v-img>
                    </a>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <p class="text-body-2">
                      {{ item.txt }}<br />
                      <a :href="item.href" :target="i === 2 ? '_blank' : ''">{{ item.hreftxt }}</a>
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>

        <h2 class="titleboxb">夜景撮影のフォトブック</h2>
        <a href="https://photobook.kitamura.jp/case/FlashPageFlip/May2010/type_kawasaki/kawasaki.html" target="_blank">
          <v-img
            src="/ec/images2/special/general/how-to/night-view/photobook_ex.jpg"
            alt="工場萌え フォトブック"
            max-width="560"
            max-height="100"
            class="hover"
          ></v-img>
        </a>
        <p class="text-body-2">工場地帯の夜景撮影にチャレンジ。車も人もいない不思議な世界</p>

        <h2 class="titleboxb">写真を学ぶ</h2>
        <a href="http://camegaku.com/top" target="_blank">
          <v-img
            src="/ec/images2/special/general/how-to/night-view/bnr_schoolmovie.jpg"
            alt="工場萌え フォトブック"
            max-width="560"
            max-height="100"
            class="hover"
          ></v-img>
        </a>
        <p class="text-body-2">入学無料！撮影のコツが３分の動画で楽しく学べます！</p>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'night-view',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
  },
  setup: () => {
    document.title = '夜景写真撮影のコツ | 撮影のコツ動画＆便利なカメラ写真グッズ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '夜景写真撮影のコツを、３分の動画でチェックしましょう♪あると便利なカメラグッズやおすすめの写真アイテムも必見。単調になりがちな夜景写真も、楽しく上手に残せる方法をお伝えします★')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '夜景/イルミネーション写真撮影のコツ',
          disabled: true
        },
      ],
      nightViewList: [
        {
          title: '夜景 イルミネーション写真撮影の必須アイテム',
          items: [
            {
              subtitle: '三脚',
              href: '/ec/list?narrow18=0&keyword=アルミ4段三脚&category=&n20c=完了商品は除く&index=&sort=number20,Number17,Score&searchbox=1&q=アルミ4段三脚&path=&s1%5B%5D=ベルボン',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_a.jpg',
              txt: '初めてでも使いやすい三脚。軽いながらも、ミラーレスカメラや中級機の一眼レフまで対応。水準機や微妙な調整も出来、コストパフォーマンスが高い三脚。',
              hreftxt: 'ベルボン アルミ4段三脚 一覧'
            },
            {
              subtitle: 'リモートコード',
              href: '/ec/special/general/how-to/night-view/776',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_b.jpg',
              txt: 'シャッターボタンを押した時の手ブレを防ぐリモートコード。シャッターを切った状態でロック可能なタイプなら、星空撮影時などの長時間露光撮影時にも重宝。',
              hreftxt: 'リモートコード商品一覧へ'
            },
          ]
        },
        {
          title: '夜景 イルミネーション写真撮影におすすめ！もっと楽しむカメラアイテム',
          items: [
            {
              subtitle: 'クロスフィルター',
              href: '/ec/special/camera/lensfilter/344',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_c.jpg',
              txt: 'レンズの前にフィルターを付け、くるくる回すだけで光の線が印象的に。キラキラのイルミネーションがもっと煌く！夜景撮影がもっともっと楽しくなるおすすめアイテム★',
              hreftxt: 'クロスフィルター商品一覧へ'
            },
            {
              subtitle: 'フォトグローブ・手袋',
              href: '/ec/list?narrow18=0&keyword=フォトグローブ&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=フォトグローブ&x=0&y=0%2F',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_d.jpg',
              txt: 'あたたかく、カメラ操作もしやすい撮影用の手袋があれば、寒い中での夜景撮影もへっちゃら！赤のミトン型の手袋をした女の子には、きゅんとしてしまいます♪',
              hreftxt: 'フォトグローブ・手袋商品一覧へ'
            },
          ]
        },
        {
          title: '夜景 イルミネーション写真を楽しむフォトグッズ',
          items: [
            {
              subtitle: 'クリスタルプリント',
              href: 'http://www.kitamura-print.com/premium_print/digitalcrystal/',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_e.jpg',
              txt: 'クリスタルプリントとは、写真の表面がキラキラと輝くプリント。非常に高い光沢度とクリアな仕上がりで、夜景やイルミネーション写真のプリントにおすすめ♪この質感、ぜひ一度ご体験ください★',
              hreftxt: 'クリスタルプリント詳細へ'
            },
            {
              subtitle: 'ポスターカレンダー',
              href: 'http://www.kitamura-print.com/photogoods/postercalendar/',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_g.jpg',
              txt: 'お気に入りの一枚を選んで、ポスタータイプのカレンダーにしてみるのもいいですね♪自分で撮った写真で作ると、毎日カレンダーを見るのが楽しい。お部屋のインテリアとしてもGOOD★',
              hreftxt: 'ポスターカレンダー詳細へ'
            },
            {
              subtitle: '水玉柄のアルバム',
              href: 'https://shop.kitamura.jp/ec/pd/4974214166325',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/night-view/img_h.jpg',
              txt: '表紙だけでなく、台紙もかわいいドット柄★ページを増やしたり、ボールペン・色鉛筆などで直接台紙に書きこみもできる！',
              hreftxt: 'セキセイ カジュアルアルバム ドット フリー台紙タイプ'
            },

          ]
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

<style lang="scss" scoped>
.night-view {
  .night-view-title {
    margin: 0px 0px 5px 0px;
    padding: 10px 0px 0px 30px;
    font-size: 22px;
    background-image: url(/ec/images2/special/general/how-to/night-view/bg_collabobg.gif);
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  h2.titleboxb {
    margin: 20px 0px 5px 0px;
    padding: 3px 0px 0px 35px;
    font-size: 20px;
    font-weight: 500;
    background-image: url(/ec/images2/special/general/how-to/night-view/bg_title.gif);
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  h3.gstitle {
    height: 30px;
    margin: 0px 0px 5px 0px;
    padding: 10px 0px 0px 85px;
    background-image: url(/ec/images2/special/general/how-to/night-view/bg_gs.gif);
    background-repeat: no-repeat;
    font-size: 16px;
  }
  .gs-coment {
    border: #fffe5b 1px dashed;
    box-sizing: border-box;
  }
}
</style>
