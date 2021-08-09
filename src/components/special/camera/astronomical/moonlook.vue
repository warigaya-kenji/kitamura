<template>
  <v-app>
    <div class="moonlook">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/astronomical/moonlook/'" />

        <v-main>
          <h1 class="text-h6 brown--text"><v-icon color="yellow">fas fa-moon</v-icon>天体観測 入門編 月を見よう</h1>
          <p>
            <span class="pc" v-if="$vuetify.breakpoint.mdAndUp"
              >月を見上げてみよう！ と思ったら… あれ？月がいない？ 何時にどこから昇ってくるのかな？ …なんてことが起こります。<br />
              それもそのはず！ 月は地球の周りを楕円の軌道で公転しているため、日によって昇ってくる方角・時間・満ち欠けが変わってくるからです。 今回は、</span
            ><span class="red--text yellow lighten-3">天体観測におすすめの商品や便利なアイテム、月の観測方法・撮影方法</span>をお伝えします♪
          </p>
          <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/astronomical/moonlook/img_a.png" max-width="100%" height="auto"></v-img>

          <!--↓アンカー-->
          <v-container fluid>
            <ul class="cp_list" title=" MENU ">
              <li><a href="#first">月の観測ではじめにすること</a></li>
              <li><a href="#field-glasses">双眼鏡の選び方-双眼鏡で月の観測</a></li>
              <li><a href="#astronomical-telescope">天体望遠鏡の選び方-天体望遠鏡で月の観測</a></li>
              <li><a href="#smartphone">天体望遠鏡とスマホで月を撮影</a></li>
              <li><a href="#benri">あると便利！天体観測用アイテム</a></li>
              <li><a href="#list">月の観測・撮影におすすめの商品一覧</a></li>
            </ul>
          </v-container>
          <!--↑アンカー-->

          <div style="clear: both"></div>

          <!--↓はじめに-->
          <v-container fluid>
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">月の観測で、はじめにすること</span>
            </v-sheet>
          </v-container>

          <v-container class="py-2 px-4 lin-ye">
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>月の情報を手に入れる</h3>
            <v-row dense>
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  月を見るには、月の情報を得ることが必要です。<br />
                  おすすめは、ビクセンの「<a href="/pd/4955295511518/">天体カレンダー</a
                  >」。日ごとの月の出・月の入と、月の満ち欠けが詳細に記載され、自分が見たい月の形や観察可能な時間帯などを調べるのに便利！
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="text-center ma-0 pa-0">ビクセン 天体カレンダー</p>
                <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/astronomical/moonlook/img_b.jpg" max-width="100%" height="auto"></v-img>
                <v-btn elevation="10" block color="rgba(255,89,0,1)" class="white--text font-weight-bold my-4" height="45" @click="linkToOtherWindow('')"
                  >商品を見る<v-icon small class="mx-2">fas fa-chevron-right</v-icon></v-btn
                >
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>月が昇る方角を知る</h3>
            <v-row dense>
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  方位磁針を使いましょう。<br />
                  おすすめは、ビクセンの「<a
                    href="/ec/list?narrow18=0&keyword=ビクセン%20LEDコンパス&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=ビクセン%20LEDコンパス&x=0&y=0"
                    >LEDコンパス</a
                  >」なら、<span class="red--text yellow lighten-3">まぶしさの少ないLEDライト</span>で方位を確認できます。<br />目に優しく、天体観測におすすめ！
                </p>
                <p class="text-center ma-0 pa-0">ビクセン LEDコンパス</p>
                <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/astronomical/moonlook/img_b.jpg" max-width="100%" height="auto"></v-img>
                <v-btn elevation="10" block color="rgba(255,89,0,1)" class="white--text font-weight-bold my-4" height="45" @click="linkToOtherWindow('')"
                  >商品を見る<v-icon small class="mx-2">fas fa-chevron-right</v-icon></v-btn
                >
              </v-col>
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  ビクセンの無料アプリ「<a href="https://www.vixen.co.jp/app/moon-book/" target="_brank">Moon Book</a>」で<span
                    class="red--text yellow lighten-3"
                    >月の出・月の入の方角</span
                  >を調べられます。リアルタイムや指定の日時での月の見え方や、いつ、どの方角に見えるかを確認できます。 「<a
                    href="https://www.vixen.co.jp/app/moon-book/"
                    target="_brank"
                    >Moon Book</a
                  >」の情報を頼りに、方位磁針で確認をしましょう。
                </p>
                <p class="text-center ma-0 pa-0">ビクセン 無料アプリ Moon Book</p>
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/astronomical/moonlook/img_k5-1.png" max-width="90%" height="auto"></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/astronomical/moonlook/img_k5-2.png" max-width="100%" height="auto"></v-img>
                  </v-col>
                </v-row>
                <v-btn elevation="10" block color="rgba(255,89,0,1)" class="white--text font-weight-bold mt-8" height="45" @click="linkToOtherWindow('')"
                  >ページを見る<v-icon small class="mx-2">fas fa-external-link-alt</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>

          <!--↓双眼鏡の選び方-->
          <v-container fluid>
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">双眼鏡の選び方 <span class="text-subtitle-2">双眼鏡で月の観測</span></span>
            </v-sheet>
          </v-container>

          <v-container class="py-4 px-4 lin-ye">
            <p class="pt-2 pl-2 mb-6 line-height">
              双眼鏡の良さ。それは「お手軽さ」です！ 天体望遠鏡だと大きくて持ち運びが大変ですが、<span class="red--text yellow lighten-3"
                >双眼鏡ならキャンプや旅行</span
              >に気軽に持って行けます。<br />
              また、月だけでなく、天の川のつぶつぶとした星の集まりや、星雲・星団を見るときにも双眼鏡は活躍します。
            </p>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>どんな双眼鏡がいいの？ 双眼鏡の選び方</h3>
            <v-row dense class="mb-6">
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  天体観測におすすめの双眼鏡選びのポイントは、瞳孔の開きです。人の目の瞳孔は、暗い場所では5～7mmくらい開くと言われています。<br />
                  よって、暗い場所で行う天体観測では、瞳孔の開きにあった双眼鏡を使うのがベストです。<br />
                  双眼鏡の接眼レンズ側から見える、丸い光の直径＝<span class="red--text yellow lighten-3">「ひとみ径」</span>が5～7mm前後の双眼鏡がおすすめです。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="https://shop.kitamura.jp/ec/images2/special/camera/astronomical/moonlook/img_d.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">far fa-thumbs-up</v-icon>おすすめの双眼鏡</h3>
            <v-row dense>
              <v-col cols="12" sm="3" v-for="(Binoculars, index) in recommendedBinoculars" :key="`Binoculars-${index}`" class="pa-4">
                <router-link :to="Binoculars.href"
                  >{{ Binoculars.name }}<br />
                  <v-img :src="Binoculars.img" max-width="80%" height="auto"></v-img>
                </router-link>
                <v-btn
                  elevation="10"
                  block
                  color="rgba(255,89,0,1)"
                  class="white--text font-weight-bold my-4"
                  height="45"
                  @click="linkToOtherWindow(Binoculars.href)"
                  >商品を見る<v-icon small class="mx-2">fas fa-chevron-right</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>

          <!--↓ SNSー-->
          <!-- <facebookAndTwitter /> -->
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import Urlcopy from '@/components/common/special/url-copy.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import FacebookAndTwitter from '@/components/common/facebook-twitter.vue';

export default Vue.extend({
  name: 'tokutokukoukan',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy
    // watchInVideo: WatchInVideo,
    // facebookAndTwitter: FacebookAndTwitter
  },
  data() {
    return {
      seeNext: false,
      navibtn: [
        { txt: 'トクトク交換とは', href: '#caa' },
        { txt: '5つの特徴', href: '#cab' },
        { txt: 'お申し込みの流れ', href: '#cac' }
      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/bag/',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: '収納力で選べる！カメラバッグ特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/strap/',
          img: 'https://shopimg.kitamura.jp/images/banner/1392.gif',
          alt: 'カメラストラップ特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/camera/dslr/',
          img: 'https://shop.kitamura.jp/images/banner/1350.gif',
          alt: '今人気の一眼レフ＆ミラーレス特集'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/general/pet/',
          img: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          alt: 'ペット写真のステキな残し方'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4867/',
          img: 'https://shopimg.kitamura.jp/images/banner/7803.png',
          alt: 'イチオシinstax mini LiPlay'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/page/tell_me_chuuban.html',
          img: 'https://shopimg.kitamura.jp/images/banner/3498.jpg',
          alt: 'インスタなどSNSで人気！今こそ使いたいフィルムカメラ'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://shasha.kitamura.jp/',
          img: 'https://shop.kitamura.jp/images/banner/8235.png',
          alt: 'ShaSha'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      recommendedBinoculars: [
        {
          name: 'ビクセン 19172-7 星座観察用双眼鏡 SG 2.1×42',
          href: '/ec/pd/4955295191727',
          img: 'https://shopimg.kitamura.jp/images/pd/b46/762/e90/3bb/d56/d9f/880/5f1/b4d/bb6/21i/0oe/4ub/q/TN.jpg'
        },
        {
          name: 'ひとみ径 5mm ビクセン双眼鏡',
          href: '/ec/list?narrow18=0&keyword=ひとみ径：5&category=%2F&n20c=完了商品は除く&index=&sort=number20,number19,Score&searchbox=1&s1%5B%5D=ビクセン&q=ひとみ径：5&path=%2F',
          img: 'https://shopimg.kitamura.jp/images/pd/f69/b7c/265/c94/042/b34/01b/456/f58/5ca/b2b/3ds/nhh/1/TN.jpg'
        },
        {
          name: 'ひとみ径 6mm ビクセン双眼鏡',
          href: '/ec/pd/4955295156504',
          img: 'https://shopimg.kitamura.jp/images/pd/c10/482/306/edb/293/d2a/287/25a/4c9/6af/4bs/u9n/0ru/i/TN.jpg'
        },
        {
          name: 'ひとみ径 7mm ビクセン双眼鏡',
          href: '/ec/pd/4955295156207',
          img: 'https://shopimg.kitamura.jp/images/pd/5fe/1c3/92b/048/45f/213/ff1/e94/583/752/88f/p9d/hch/l/TN.jpg'
        }
      ]
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    },
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    },
    changeSeeNext() {
      console.log('aa');
      if (this.seeNext) {
        this.seeNext = false;
      } else {
        this.seeNext = true;
      }
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '天体観測スケジュール',
          linkUrl: 'https://shop.kitamura.jp/special/sale-fair/camera/astronomical/',
          disabled: false
        },
        {
          path: '天体観測 入門編 月を見よう!おすすめ天体望遠鏡・双眼鏡の選び方',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4955295191727',
        '4549292109399',
        '4549292109405',
        '4549292109191',
        '4549292109368',
        '4549292142433',
        '4549292142952',
        '4549292143010'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss">
ul.cp_list {
  position: relative;
  padding: 0 0.5em;
  margin-top: 2em;
  list-style-type: none;
  border: solid 2px #00796b;
}

ul.cp_list {
  position: relative;
  padding: 0 0.5em;
  margin-top: 2em;
  list-style-type: none;
  border: solid 2px #00796b;
  font-size: 18px;
  clear: both;
  float: left;
  box-sizing: border-box;
  width: 100%;
}

ul.cp_list li {
  line-height: 1.5;
  padding: 0.5em 0 0.5em 1.4em;
  border-bottom: 1px dashed #4db6ac;
  margin-bottom: 2px;
}

ul.cp_list li::before {
  position: absolute;
  content: '\002713';
  color: #00796b;
  font-weight: bold;
  left: 0.5em;
}

ul.cp_list::after {
  position: absolute;
  content: attr(title);
  padding: 10px;
  box-sizing: border-box;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 150%;
  background: #00796b;
  color: #fff;
  bottom: 100%;
  left: -2px;
  border-radius: 4px 4px 0px 0px;
}

ul.cp_list li:last-of-type {
  border-bottom: none;
}

.cp_list li a:link {
  text-decoration: none;
  color: #1122cc;
}

.cp_list li a:hover {
  text-decoration: underline;
  color: red;
}

.lin-ye {
  border: 1px dashed #fad516;
}
</style>

