<template>
  <v-app>
    <div class="pet">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓navi -->
        <div class="title-box pt-10 px-12">
          <h1 class="nptitle">ペット写真のステキな残し方</h1>
          <p class="my-3">
            かわいくてたまらない ペットの写真♪ どんどん増えていませんか？＾＾*<br />
            SNSにアップしている写真を成長記録としてまとめたり、かわいく飾ってみたり…。ペットとの暮らしがもっと楽しくなるお手伝いページです★
          </p>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" v-for="(navi, i) in naviList" :key="i">
                <a v-scroll-to="navi.href">
                  <v-img :src="navi.src" max-width="265" max-height="305" class="mx-auto hover"></v-img>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- ↓heart -->
        <v-img src="/ec/images2/special/general/pet/lineheart.gif" max-width="100%" height="auto" class="my-3"></v-img>

        <v-container v-for="(petContents, index) in petContentsList" :key="index">
          <h2 class="parag" :id="petContents.id"><img :src="petContents.levelImg" :alt="petContents.levelAlt" /> {{ petContents.title }}</h2>
          <p v-html="petContents.maintxt"></p>
          <v-row class="mb-4">
            <v-col cols="12" sm="4" v-for="(item, i) in petContents.detailList" :key="i">
              <h3 class="point"><v-img :src="item.topImg" :alt="topAlt" max-width="50" max-height="50" /><br />{{ item.subtitle }}</h3>

              <a :href="item.btnhref" target="_brank" v-if="index === 3">
                <v-img :src="item.mainImg" :alt="item.mainAlt" max-width="100%" max-height="auto" class="mx-auto hover"></v-img>
              </a>

              <v-img v-else :src="item.mainImg" :alt="item.mainAlt" max-width="100%" max-height="auto" class="mx-auto"></v-img>
              <p class="py-3 line-height" v-html="item.txt"></p>
              <v-hover v-if="item.btnhref !== ''" v-slot="{ hover }">
                <a :href="item.btnhref" target="_brank">
                  <v-btn :elevation="hover ? 0 : 6" block color="#339933" rounded height="41" class="hover">
                    <span class="white--text text-subtitle-1 font-weight-bold">{{ item.btntxt }}</span>
                  </v-btn>
                </a>
              </v-hover>
            </v-col>
          </v-row>
          <div class="my-5" v-if="index === 2">
            <h3 class="text-subtitle-1">★話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート</h3>
            <a href="/ec/special/general/photo_mono/50mmlens">
              <v-img src="https://shop.kitamura.jp/images/banner/5230.jpg" max-width="708" max-height="190" alt="photo＋Mono 特集 Vol.7" class="hover"></v-img>
            </a>
            <p>
              【photo＋Mono 特集 Vol.7】<br />
              室内でペット写真を上手に撮るコツ＆おすすめレンズ
            </p>
            <v-row class="mt-4">
              <v-col cols="12" sm="6">
                <a href="/ec/special/general/photo_mono/g9pro">
                  <v-img
                    src="https://shop.kitamura.jp/images/banner/5093.jpg"
                    max-width="350"
                    max-height="130"
                    alt="photo＋Mono 特集 Vol.5"
                    class="hover"
                  ></v-img>
                </a>
                <p>
                  【photo＋Mono 特集 Vol.5】<br />
                  ドッグランを高速で駆け抜ける犬を撮影！
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <a href="/ec/special/general/photo_mono/macro-lens">
                  <v-img
                    src="https://shop.kitamura.jp/images/banner/5196.jpg"
                    max-width="350"
                    max-height="130"
                    alt="photo＋Mono 特集 Vol.6"
                    class="hover"
                  ></v-img>
                </a>
                <p>
                  【photo＋Mono 特集 Vol.6】<br />
                  100mmマクロレンズ特集
                </p>
              </v-col>
            </v-row>
          </div>
          <a href="#top">
            <v-img
              src="https://shop.kitamura.jp/common/images/hf/btn_pagetop.gif"
              alt="このページの先頭へ"
              max-width="100"
              max-height="18"
              class="ml-auto hover"
            ></v-img>
          </a>
          <!-- ↓heart -->
          <v-img src="/ec/images2/special/general/pet/lineheart.gif" max-width="100%" height="auto" class="my-3"></v-img>
        </v-container>

        <h2 class="parag"><img src="/ec/images2/special/general/pet/parag_d.gif" />関連おすすめ特集</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'pet',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'ペット写真のステキな残し方 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'かわいくてたまらない ペットの写真♪どんどん増えていませんか？SNSにアップしている写真を成長記録としてまとめたり、かわいく飾ってみたり…ペットとの暮らしがもっと楽しくなるお手伝いページ★ペットの写真はカメラのキタムラへお任せください。')
    const state = reactive({
      naviList: [
        { href: '#arrange', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/nbtn_a.jpg' },
        { href: '#display', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/nbtn_b.jpg' },
        { href: '#camera', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/nbtn_c.jpg' },
      ],
      petContentsList: [
        {
          id: 'arrange',
          levelImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/parag_a.gif', levelAlt: '初級',
          title: 'ペットの写真を整理する',
          maintxt: 'たくさん撮った写真は、まず整理。月に1回くらいの目安で、<span style="background: #ffff99">整理する習慣をつけられると、後から写真をまとめたり、飾ったりして楽しむときにとても楽</span>です。<br>かわいい写真がたくさんで、ついつい見入ってしまいます♪ 振り返るのも楽しい作業です★',
          detailList: [
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_a.gif', topAlt: 'step1',
              subtitle: 'ペットの写真だけを月毎に分ける',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_a.jpg', mainAlt: 'フォルダ分け',
              txt: 'カメラで撮ったメモリーカードやスマホの写真データは、<span style="background: #ffff99">月ごとのフォルダを作ってまとめておくと便利</span>です。スマホに入ったままの写真は、ペットの写真だけを集めてまとめましょう。写っているペットや人を自動でフォルダ分けしてくれるアプリもあります♪',
              btnhref: ''
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_b.gif', topAlt: 'step2',
              subtitle: 'A4サイズでシャッフルプリント',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_b.jpg', mainAlt: 'シャッフルプリント',
              txt: 'かわいい写真を数枚に絞って選ぶのは難しいですが、シャッフルプリントなら、<span style="background: #ffff99">たくさんの写真を1枚にプリント</span>できます♪ 特に気に入ったものを大きくしたり、背景の色も選べます。',
              btnhref: 'http://www.kitamura-print.com/shuffle_print/',
              btntxt: 'シャッフルプリント'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_c.gif', topAlt: 'step3',
              subtitle: 'ファイルへ入れてペットの成長記録',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_c.jpg', mainAlt: 'クリアファイルへ',
              txt: '1ヶ月飾って楽しんだシャッフルプリントは、A4のクリアファイルへまとめましょう。毎月すれば、写真整理→お部屋のインテリアを楽しむ→<span style="background: #ffff99">成長記録としてまとめられる</span>というサイクルができます♪',
              btnhref: 'https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%82%BB%E3%82%AD%E3%82%BB%E3%82%A4%20%E3%83%95%E3%82%A3%E3%83%B3%E3%83%80%E3%83%83%E3%82%B7%E3%83%A5%20%E3%82%AF%E3%83%AA%E3%83%A4%E3%83%96%E3%83%83%E3%82%AF%20%E9%AB%98%E9%80%8F%E6%98%8E%20A4%E3%82%B5%E3%82%A4%E3%82%BA&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=%E3%82%BB%E3%82%AD%E3%82%BB%E3%82%A4%20%E3%83%95%E3%82%A3%E3%83%B3%E3%83%80%E3%83%83%E3%82%B7%E3%83%A5%20%E3%82%AF%E3%83%AA%E3%83%A4%E3%83%96%E3%83%83%E3%82%AF%20%E9%AB%98%E9%80%8F%E6%98%8E%20A4%E3%82%B5%E3%82%A4%E3%82%BA&x=0&y=0',
              btntxt: 'プリントファイル'
            }
          ]
        },
        {
          id: 'display',
          levelImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/parag_b.gif', levelAlt: '中級',
          title: 'ペットの節目に合わせて写真をまとめる・飾る',
          maintxt: '愛するペットの節目に合わせて、写真をまとめたり、飾ったりするとさらに楽しくなります♪ <span style="background: #ffff99">“お誕生日やカレンダーの月に合わせて作るスケジュール”</span>を立てれば、合間にインテリアを楽しむ余裕もでてきます',
          detailList: [
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_d.gif', topAlt: 'April',
              subtitle: '世界にひとつのカレンダー',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_d.jpg', mainAlt: 'カレンダー',
              txt: '年末年始にカレンダーを作る時間がなかった人は、好きな月始まりのカレンダーを作りましょう♪ <span style="background: #ffff99">月ごとの各フォルダからお気に入りの1枚を選んでいく</span>だけ。ペットの成長を振り返りながら毎日を過ごせて嬉しいです',
              btnhref: 'http://www.kitamura-print.com/photocalendar/',
              btntxt: 'MYフォトカレンダー'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_e.gif', topAlt: 'July',
              subtitle: 'お誕生日の一年をフォトブック',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_e.jpg', mainAlt: 'イヤーアルバム',
              txt: '毎月シャッフルプリント用に選んだ写真を1冊のアルバムにしませんか？ 『イヤーアルバム』なら、<span style="background: #ffff99">時系列に自動で配置してくれるので、フォトブック初心者でも簡単</span>。もちろん、こだわりの大きさや配置にも編集できます',
              btnhref: 'http://photobook.kitamura.jp/yearalbum/',
              btntxt: 'イヤーアルバム'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_f.gif', topAlt: 'October',
              subtitle: '写真をインテリアにするシャコラ',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_f.jpg', mainAlt: 'シャコラ',
              txt: '「小さな冒険家」「いたずらっこ」など、<span style="background: #ffff99">テーマを決めて写真を選んでみましょう</span>。貼ってはがせる加工のシャコラを使えば、壁に跡をつけず、繰り返し利用できます。ましかくサイズなら、玄関の壁にさり気なく飾れます♪',
              btnhref: 'https://shop.kitamura.jp/ec/special/camera/frame/shacolla',
              btntxt: 'シャコラ'
            }
          ]
        },
        {
          id: 'camera',
          levelImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/parag_c.gif', levelAlt: '上級',
          title: 'ペットの写真をもっと素敵に撮るステップアップ',
          maintxt: '動きが速いペットは、スマホだけじゃなくて、ほかのものを使うと、もっといい写真が撮れます♪<br><span style="background: #ffff99">一眼カメラや便利グッズを使って、ステップアップ！</span>',
          detailList: [
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_g.gif', topAlt: 'スマホから',
              subtitle: '一眼カメラにステップアップ',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_g.jpg', mainAlt: 'image',
              txt: 'スマホは肌身離さずもっていて、アプリでもかわいい加工ができますよね♪ 一方、速い動きや遠くのペットを撮るのはちょっと苦手。ドッグランなどの一瞬を捉えるには、<span style="background: #ffff99">連写や望遠に優れた一眼カメラだと、もっとかっこよく撮れます</span>',
              btnhref: 'https://shop.kitamura.jp/ec/special/general/pet/1472',
              btntxt: 'ミラーレス一眼カメラ'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_h.gif', topAlt: '一眼から',
              subtitle: '単焦点レンズにステップアップ',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_h.jpg', mainAlt: 'image',
              txt: '<span style="background: #ffff99">単焦点レンズは、家の中のごちゃっとした背景をいい具合にボカしたり、ペットのかわいらしさを引き出せる</span>万能レンズ。F値が明るいF2.8以下なら、カフェや室内など暗めの場所でもブレにくく、雰囲気のある写真が撮れますよ',
              btnhref: 'https://shop.kitamura.jp/ec/special/general/pet/1444',
              btntxt: '明るい単焦点レンズ'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_i.gif', topAlt: '便利',
              subtitle: 'あると便利なアイテム',
              mainImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/sh_i.jpg', mainAlt: 'image',
              txt: 'リードやお散歩バッグを持っているだけでも、何かと荷物が多いですよね。<br>そんなときは、キャップクリップホルダーでレンズキャップをストラップに付けておくと便利です',
              btnhref: 'https://shop.kitamura.jp/ec/special/general/pet/1445',
              btntxt: '便利アイテム'
            }
          ]
        },
        {
          id: 'extraEdition',
          levelImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/parag_e.gif', levelAlt: '番外編',
          title: 'ペットとお家で快適に過ごす',
          maintxt: 'ペットの脱臭対策としては、加湿空気清浄機が効果的♪<br><span class="marker">プラズマクラスターやイオンによる脱臭効果も期待できます！</span>',
          detailList: [
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_j.gif', topAlt: 'おすすめ',
              subtitle: '',
              mainImg: 'https://shopimg.kitamura.jp/images/pd/77c/79b/7cb/ef6/833/149/4a5/40a/897/31b/c1r/cyu/tyl/z/L.jpg', mainAlt: '',
              txt: 'ツインストリーマ搭載で脱臭・除菌性能UP',
              btnhref: 'https://shop.kitamura.jp/ec/pd/4548848801503',
              btntxt: 'ダイキン MCK70W'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_j.gif', topAlt: 'おすすめ',
              subtitle: '',
              mainImg: 'https://shopimg.kitamura.jp/images/pd/93b/b1e/d52/da5/e83/70f/e19/591/dd0/5f6/c66/lmf/x5a/w/L.jpg', mainAlt: '',
              txt: '薄型スリムデザイン、加湿もできて空気環境をしっかり守る。',
              btnhref: 'https://shop.kitamura.jp/ec/pd/4974019102863',
              btntxt: 'シャープ KC-J50'
            },
            {
              topImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/pet/point_j.gif', topAlt: 'おすすめ',
              subtitle: '',
              mainImg: 'https://shopimg.kitamura.jp/images/pd/2a5/c6e/90f/66c/210/58d/5ba/94a/fb3/2b3/acd/ime/d6z/1/L.jpg', mainAlt: '',
              txt: '高性能＆スリムボディのスタンダードモデル。',
              btnhref: 'https://shop.kitamura.jp/ec/pd/4974019107066',
              btntxt: 'シャープ KI-JS70'
            }
          ]
        }
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/girlscamera',
          img: 'https://shop.kitamura.jp/images/banner/1390.jpg',
          alt: '女子がきゅんとくる ミラーレス一眼カメラ'
        },
        {
          href: "/ec/special/camera/compact",
          img: "https://shop.kitamura.jp/images/banner/1986.jpg",
          alt: "おすすめデジカメ/デジタルカメラ特集",
        },
        {
          href: "/ec/special/camera/strap",
          img: "https://shopimg.kitamura.jp/images/banner/1392.gif",
          alt: "一眼レフ/ミラーレスカメラストラップ特集",
        },
        {
          href: "/ec/special/camera/dslr",
          img: "https://shop.kitamura.jp/images/banner/1350.gif",
          alt: "おすすめのデジタル一眼レフ/ミラーレスカメラ特集",
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },

      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ペット写真のステキな残し方',
          disabled: true
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
.pet {
  .title-box {
    box-sizing: border-box;
    background-image: url(/ec/images2/special/general/pet/bg_top.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  h1.nptitle {
    box-sizing: border-box;
    font-size: 24px;
    font-weight: normal;
    color: #663300;
  }
  p {
    line-height: 1.4em;
    font-size: 15px !important;
    letter-spacing: 0.03em;
    color: #663300;
    span.marker {
      background: #ffff99;
    }
  }
  .parag {
    margin: 10px 0px 15px 0px;
    padding: 0px 0px 5px 0px;
    border-bottom: 2px #339933 solid;
    font-size: 150%;
    color: #663300;
    font-weight: bold;
    img {
      vertical-align: middle;
    }
  }
  h3.point {
    margin: 0px 0px 10px 0px;
    line-height: 1.3em;
    font-size: 110%;
    font-weight: bold;
    color: #663300;
  }

  @media screen and (max-width: 600px) {
    h1.nptitle {
      font-size: 20px !important;
      line-height: 1.3em;
    }
    .parag {
      font-size: 120% !important;
    }
  }
}
</style>