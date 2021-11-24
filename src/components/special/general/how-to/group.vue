<template>
  <v-app>
    <div class="how-to-group">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <v-container class="mb-5">
          <v-row>
            <v-col cols="12" sm="6">
              <h1 class="how-to-group-title">集合写真撮影のコツ</h1>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                src="/ec/images2/special/general/how-to/group/kitamura_camegakulogo.jpg"
                alt="カメラのキタムラ×カメラの学校コラボ"
                max-width="360"
                max-height="65"
              />
            </v-col>
          </v-row>
        </v-container>

        <h2 class="titleboxb">集合写真撮影のコツ動画</h2>
        <watchInVideo :src="'https://www.youtube.com/embed/KQ8QL4RtjZw?rel=0'" :height="$vuetify.breakpoint.mdAndUp ? 450 : 240" :sm="12" />

        <v-row>
          <v-col cols="12" sm="6">
            <h2 class="titleboxb">撮影のポイント</h2>
            <p>
              <v-avatar size="40" class="pb-6"><v-img src="/ec/images2/special/general/how-to/group/bg_check.gif"></v-img></v-avatar
              >前後にずれて立つと立体感がうまれる
            </p>
            <p>
              <v-avatar size="40" class="pb-6"><v-img src="/ec/images2/special/general/how-to/group/bg_check.gif"></v-img></v-avatar
              >ポーズをとったり、視線を変えたりしてみる
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/general/how-to/group/img_pic.jpg" alt="撮影のポイント" max-width="175" max-height="150"></v-img>
          </v-col>
        </v-row>

        <v-container>
          <v-row v-for="(group, i) in groupList" :key="i">
            <v-col cols="12">
              <h2 class="titleboxb">{{ group.title }}</h2>
            </v-col>
            <v-col cols="12" sm="6" v-for="(item, index) in group.items" :key="index">
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

        <h2 class="titleboxb">写真を学ぶ</h2>
        <a href="http://camegaku.com/top" target="_blank">
          <v-img
            src="/ec/images2/special/general/how-to/group/bnr_schoolmovie.jpg"
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
  name: 'group',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
  },
  setup: () => {
    document.title = '集合写真撮影のコツ | 撮影のコツ動画＆便利なカメラ写真グッズ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '集合写真撮影のコツを、３分の動画でチェックしましょう♪あると便利なカメラグッズやおすすめの写真アイテムも必見。単調になりがちな集合写真も、楽しく上手に残せる方法をお伝えします★')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '集合写真撮影のコツ',
          disabled: true
        },
      ],
      groupList: [
        {
          title: '集合写真撮影におすすめ！便利なカメラグッズ',
          items: [
            {
              subtitle: 'ゴリラポッド',
              href: '/ec/ct/C008/002/008/',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/group/img_a.jpg',
              txt: 'どこでも巻きつくコンパクトな三脚。不安定な場所でも、くにゃくにゃ自在に動く足で高さや角度を調整できます。\nカメラマン役が多い私でも、自分の写っている写真が増えました！',
            },
            {
              subtitle: 'リモートコード',
              href: '/ec/list?narrow18=0&keyword=ワイヤレスリモコン&category=カメラアクセサリー・用品&limit=100&index=&n20c=完了商品は除く&searchbox=1&q=ワイヤレスリモコン&path=カメラアクセサリー・用品',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/group/img_b.jpg',
              txt: 'ワイヤレスのリモコンはとっても便利！セルフタイマーに合わせて、カメラの間を急いで往復することもなくなりました。一瞬を逃さず撮れ、手ブレを防止するケーブルレリーズの代わりにもなります♪',
            },
          ]
        },
        {
          title: '写真を楽しむフォトグッズ',
          items: [
            {
              subtitle: 'ラスタープリント',
              href: 'https://www.kitamura-print.com/print/luster/?_ga=2.54015150.729448613.1635119273-279164427.1627285160',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/group/img_c.jpg',
              txt: '指紋がつきにくく、落ち着いた仕上がりのラスタープリント。光の写り込み（反射）が少なく、色調の表現力が豊かです！集合写真は2Lサイズでプリント＆プレゼントするのが定番です♪',
            },
            {
              subtitle: '写真袋',
              href: '/ec/list?narrow18=0&keyword=写真袋&category=&index=all&index=all&searchbox=1&sort=number20,Number17,Score&q=写真袋&path=&n20c=完了商品は除く',
              src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/how-to/group/img_d.jpg',
              txt: '写真をプレゼントする時に便利でかわいい写真袋★お菓子や小物など、ちょっとしたものを贈る時にも使っています♪',
            },
          ]
        },
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
.how-to-group {
  .how-to-group-title {
    margin: 0px 0px 5px 0px;
    padding: 10px 0px 0px 30px;
    font-size: 22px;
    background-image: url(/ec/images2/special/general/how-to/group/bg_collabobg.gif);
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  h2.titleboxb {
    margin: 20px 0px 5px 0px;
    padding: 3px 0px 0px 35px;
    font-size: 20px;
    font-weight: 500;
    background-image: url(/ec/images2/special/general/how-to/group/bg_title.gif);
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  h3.gstitle {
    height: 30px;
    margin: 0px 0px 5px 0px;
    padding: 10px 0px 0px 85px;
    background-image: url(/ec/images2/special/general/how-to/group/bg_gs.gif);
    background-repeat: no-repeat;
    font-size: 16px;
  }
  .gs-coment {
    border: #fffe5b 1px dashed;
    box-sizing: border-box;
  }
}
</style>
