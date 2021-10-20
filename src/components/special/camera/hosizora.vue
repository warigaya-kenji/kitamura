<template>
  <v-app>
    <div class="hosizora">
      <div class="main-contents-wrap">
        <v-container class="bk-tuki pb-7 white--text">
          <h1 class="mt-7 text-h4 font-weight-bold">星空を観よう! 撮影しよう!</h1>
          <p class="tx-14">カメラのキタムラ 星空総合ページ</p>

          <v-row :class="index === 2 ? 'mt-10' : ''" v-for="(starrySky, index) in starrySkyList" :key="index">
            <h2 class="text-h5 pl-2 mt-7 mb-1 w100pr">{{ starrySky.title }}</h2>
            <v-col cols="12" sm="4" v-for="(item, i) in starrySky.itemList" :key="i">
              <v-sheet class="pa-1 white--text" :color="index === 2 ? 'rgba(99,87,37,0.6)' : 'rgba(10, 90, 93, 0.6)'">{{ item.subtitle }}</v-sheet>
              <p class="tx-14 pa-1 h-4e txkg-gry">{{ item.txt }}</p>
              <a :href="item.href">
                <v-img :src="item.src" max-width="291" max-height="108" class="kg-kn mx-auto"></v-img>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <p class="mt-7">
          <a href="https://shop.kitamura.jp/">
            <v-img src="/ec/images2/special/camera/hosizora/buck-ktop.gif" max-width="80px" height="80px" class="mx-auto"></v-img
          ></a>
        </p>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { noimage } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
export default Vue.extend({
  name: 'hosizora',
  components: {
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: (props, context) => {
    document.title = '星空総合ページ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '星空を撮影したい人におすすめ♪星空撮影・天体撮影の特集をまとめた、カメラのキタムラ 星空総合ページです。')

    const state = reactive({
      starrySkyList: [
        {
          title: '『星空を撮影したい!!』という人におすすめ♪ 星空撮影 入門ページ',
          itemList: [{ subtitle: 'カメラで星空を撮ろう!', txt: '広角レンズで撮る「星景写真編」', href: '/ec/special/camera/polarie', src: 'https://shop.kitamura.jp/images/banner/1488.gif' },
          { subtitle: 'ポラリエと望遠レンズで星空を撮ろう!', txt: 'ポラリエと中・望遠レンズで撮る「星空・天体写真編」', href: '/ec/special/camera/polarie/acc', src: 'https://shop.kitamura.jp/images/banner/3588.gif' },
          { subtitle: '天体望遠鏡で星空を撮ろう!', txt: '天体望遠鏡・超望遠で撮る「天体写真編」', href: '/ec/special/camera/astronomical/telescope-feature', src: 'https://shopimg.kitamura.jp/images/banner/2381.jpg' },
          ]
        },
        {
          title: '『星空を見たい!楽しみたい!!』という人におすすめ♪ 星空観察ページ',
          itemList: [{ subtitle: '天体イベントスケジュール', txt: '今年の天体ショーは何が起こるの！？まずは天文現象をチェック!!', href: '/ec/special/camera/astronomical', src: 'https://shopimg.kitamura.jp/images/banner/1327.gif' },
          { subtitle: '天体望遠鏡の選び方', txt: '天体望遠鏡で星空を楽しもう! 初心者さんはこちらをチェック', href: '/ec/special/camera/astronomical/telescope', src: 'https://shopimg.kitamura.jp/images/banner/1698.jpg' },
          { subtitle: '双眼鏡・天体望遠鏡で月を見よう', txt: '双眼鏡・天体望遠鏡で、Let’s 天体観測! 天体観測入門', href: '/ec/special/camera/astronomical/moonlook', src: 'https://shopimg.kitamura.jp/images/banner/1306.jpg' },
          ]
        },
        {
          title: '星空観察ページ 番外編',
          itemList: [{ subtitle: '夏休み自由研究特集', txt: '自由研究におすすめ☆月の写真を撮ってみよう!', href: '/ec/special/general/summerhomework/moon', src: 'https://shopimg.kitamura.jp/images/banner/1309.gif' },
          { subtitle: '双眼鏡の選び方特集', txt: 'ライブやコンサート、スポーツ観戦を、双眼鏡でもっと楽しく!', href: '/ec/special/camera/operaglass', src: 'https://shop.kitamura.jp/images/banner/2462.gif' },
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
.bk-tuki {
  background: url(/ec/images2/special/camera/hosizora/tuki0.jpg) no-repeat left top;
  background-size: 950px auto;
}

@media only screen and (max-width: 617px) {
  .bk-tuki {
    background: url(/ec/images2/special/camera/hosizora/tuki0.jpg) repeat-y top;
    background-size: 600px auto;
  }
}

.tx-14 {
  font-size: 14px;
}
.txkg-gry {
  text-shadow: 1px 1px 2px rgb(0 1 23);
}
.h-4e {
  height: 4em;
}
.kg-kn {
  box-shadow: 2px 5px 2px 0px rgb(17 11 67 / 60%);
}
.w100pr {
  width: 100%;
}
</style>
