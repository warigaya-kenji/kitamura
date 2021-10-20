<template>
  <v-app>
    <div class="travel">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <v-card flat img="/ec/images2/special/camera/travel/newmain.jpg" v-if="$vuetify.breakpoint.mdAndUp">
          <h1 class="top-title">旅のお供に！バイヤー厳選おすすめ旅カメラ</h1>
          <h2 class="top-titlesub">
            旅行やレジャーのお供には、コンパクトなカメラや思い出をキレイに残せるカメラがおすすめ！<br />
            <span
              >中にはスマホでは撮影できない写真が撮れる、少し変わったカメラもあります。多くの機種はWi-Fiでスマホと連動できるので手軽に接続&シェアが可能！色褪せない思い出を形に残すお手伝い♪
              バイヤー厳選のカメラをぜひご覧ください！</span
            >
          </h2>
        </v-card>
        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          src="/ec/images2/special/camera/travel/new_spmain.jpg"
          alt="旅カメラ"
          max-width="359"
          max-height="123"
        ></v-img>

        <v-container class="mt-2 mb-12">
          <v-row>
            <v-col cols="12" sm="6" v-for="(navi, index) in naviList" :key="index">
              <div class="pa-4 imagespec-left">
                <p class="mb-0">{{ navi.txt }}</p>
                <a v-scroll-to="navi.href">
                  <v-btn block dark height="50" color="#ab864e" :class="mb - 4">
                    <span class="white--text">{{ navi.naviItem }}</span>
                  </v-btn>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <h2 id="ct01" class="spec">動画も高画質なカメラ。旅行の思い出は”動画”で共有！</h2>
        <p class="texta">
          旅行の楽しい思い出をキレイに残したい、それならこのVLOGCAMの出番です！<br />
          高画質な静止画はもちろん<span v-if="$vuetify.breakpoint.mdAndUp"
            >撮影できますが、なんといってもこのカメラの一番のポイントは動画。<br />
            主役が映えるVlog（ビデオブログ）がカンタンに撮影できるように世界中のVloggerの声を集めて作ったカメラなんです。<br />
            綺麗な風景や楽しい雰囲気だけではなく、その土地ならではの料理やご自身で作った小物、珍しいお土産など旅行中はあらゆるものがVlogの撮影対象。<br />
            それらを</span
          >カンタン操作で有名なVloggerのような印象的な動画として思い出に残すことができるんです。<br />
          旅行をきっかけにVlogデビューしてみませんか？
        </p>

        <v-container class="mt-2 mb-12">
          <v-row>
            <v-col cols="12" sm="6" v-if="mainProductList.length !== 0">
              <p class="caption">旅行におすすめデジカメ</p>
              <h4 class="no1">
                <a :href="`/ec/pd/${mainProductList[0].janCode}`">{{ mainProductList[0].itemName }}</a>
              </h4>
              <v-row>
                <v-col cols="6">
                  <v-img :src="mainProductList.images[0].imagePath.replace(/TN/g, 'M')" max-width="210" max-height="210"></v-img>
                </v-col>
                <v-col cols="6">
                  <font size="-1">おすすめポイント</font>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">高画質な動画</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">自撮り</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">操作も簡単</v-sheet>
                </v-col>
              </v-row>
              <p>
                価格<span class="red--text font-weight-bold">{{ formatPrice(parseInt(mainProductList.images[0].price)) }}&nbsp;</span
                ><span class="font-small">円</span>
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="text-center">
              <!--動画で見る-->
              <watchInVideo :src="'https://www.youtube.com/embed/roUmkmsHFbE'" :height="315" :sm="12" />
              <v-hover v-slot="{ hover }">
                <v-btn dark :color="hover ? 'orange' : '#548ea4'" href="/ec/pd/4546821920890" height="84" width="90%" class="text-center">
                  <span class="white--text caption text-sm-subtitle-2"
                    >ソニー VLOGCAM ZV-1G B シューティング<br />グリップキット ブラック<br />商品詳細・購入はコチラ</span
                  >
                </v-btn>
              </v-hover>
            </v-col>
          </v-row>
          <div class="pa-4 mt-4">
            <v-btn block class="text-center btn-brown" height="70" href="/ec/special/camera/travel/moving_image"
              ><span class="text-subtitle-1 white--text"> 動画撮影にもおすすめカメラを<br />もっと見る</span>
            </v-btn>
          </div>
        </v-container>

        <!--====================レコメンド02 ====================-->
        <h2 id="ct02" class="spec mt-16">臨場感のある撮影ができるカメラ。いつもと違う旅行の思い出に</h2>
        <p class="texta">
          「旅のおとも」にはこちらがオススメ！ スマホでは撮影できない、360度全天球写真が撮影できちゃうんです。<br />
          <span v-if="$vuetify.breakpoint.mdAndUp"
            >しかもあの有名なGoProなので、耐衝撃・防水性能もばっちり♪
            写真だけじゃなく、スムーズなビデオ撮影もお手のもの。GoProならではの周辺アクセサリーも充実。他社からもアクセサリーが発売されているので、今流行のVlog(ビデオブログ)でも活躍すること間違いなし。<br />
            安定感抜群のタイムラプスビデオが撮影できるので、旅行の思い出をギュッと凝縮して記録することもできちゃいます。<br />
            もちろん普通の写真も動画も高画質で撮影可能。
            <br /></span
          >せっかくの旅の記憶をより楽しく、そしてみんなとシェアするなら、こちらのカメラがおすすめですよ♪<br />
        </p>

        <v-container class="mt-2 mb-12">
          <v-row>
            <v-col cols="12" sm="6" v-if="mainProductList.length !== 0">
              <p class="caption">旅行におすすめデジカメ</p>
              <h4 class="no1">
                <a :href="`/ec/pd/${mainProductList[1].janCode}`">{{ mainProductList[1].itemName }}</a>
              </h4>
              <v-row>
                <v-col cols="6">
                  <v-img :src="mainProductList.images[1].imagePath.replace(/TN/g, 'M')" max-width="210" max-height="210"></v-img>
                </v-col>
                <v-col cols="6">
                  <font size="-1">おすすめポイント</font>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">防水</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">自撮り</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">360度全天球撮影</v-sheet>
                </v-col>
              </v-row>
              <p>
                価格<span class="red--text font-weight-bold">{{ formatPrice(parseInt(mainProductList.images[1].price)) }}&nbsp;</span
                ><span class="font-small">円</span>
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="text-center">
              <v-img src="/ec/images2/special/camera/travel/02.jpg" max-width="420" max-height="235" class="mx-auto"></v-img>
              <v-hover v-slot="{ hover }">
                <v-btn
                  dark
                  :color="hover ? 'orange' : '#548ea4'"
                  :href="`/ec/pd/${mainProductList[1].janCode}`"
                  height="66"
                  width="90%"
                  class="text-center mt-4"
                >
                  <span class="white--text caption text-sm-subtitle-2">GoPro MAX CHDHZ-201-FW<br />商品詳細・購入はコチラ</span>
                </v-btn>
              </v-hover>
            </v-col>
          </v-row>
          <div class="pa-4 mt-4">
            <v-btn block class="text-center btn-brown" height="70" href="/ec/special/camera/travel/waterproof_360"
              ><span class="text-subtitle-1 white--text"> 人気！360度撮影や防水カメラを<br />もっと見る</span>
            </v-btn>
          </div>
        </v-container>

        <!--====================レコメンド03 ====================-->
        <h2 id="ct03" class="spec mt-16">高画質で思い出を残す、コンパクトなミラーレス&一眼レフカメラ</h2>
        <p class="texta">
          せっかく旅行に行くなら、やっぱりきれいに、オシャレにカメラをぶら下げて歩きたい！<br />
          そんな思いを叶えてくれるカメラのご紹介。<br />
          <span v-if="$vuetify.breakpoint.mdAndUp"
            >クラシックなフォルムカメラのデザインがとても人気！
            しかもこの小型軽量なモデルなのに、本体に高性能な手振れ補正まで搭載。旅行の写真がブレてしまったことはありませんか？ やっぱり三脚って必要？
            でも荷物になるし… と、迷うことが激減しますよ♪<br />
            Wi-Fi搭載なのでスマートフォンやタブレットに手軽に接続し転送＆シェアが可能、スマホをリモコン代わりにして記念写真も撮れちゃいます。<br
          /></span>
          AUTOモードを使えば、細かい設定をカメラが考えてくれる「コツも知識も難しい操作もいらない」ミラーレス一眼です！
        </p>

        <v-container class="mt-2 mb-12">
          <v-row>
            <v-col cols="12" sm="6" v-if="mainProductList.length !== 0">
              <p class="caption">旅行におすすめデジカメ</p>
              <h4 class="no1">
                <a :href="`/ec/pd/${mainProductList[2].janCode}`">{{ mainProductList[1].itemName }}</a>
              </h4>
              <v-row>
                <v-col cols="6">
                  <v-img :src="mainProductList.images[2].imagePath.replace(/TN/g, 'M')" max-width="210" max-height="210"></v-img>
                </v-col>
                <v-col cols="6">
                  <font size="-1">おすすめポイント</font>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">小型軽量</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">おしゃれ</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">高画質</v-sheet>
                </v-col>
              </v-row>
              <p>
                価格<span class="red--text font-weight-bold">{{ formatPrice(parseInt(mainProductList.images[2].price)) }}&nbsp;</span
                ><span class="font-small">円</span>
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="text-center">
              <v-img src="/ec/images2/special/camera/travel/04.jpg" max-width="420" max-height="315" class="mx-auto"></v-img>
              <v-hover v-slot="{ hover }">
                <v-btn
                  dark
                  :color="hover ? 'orange' : '#548ea4'"
                  :href="`/ec/pd/${mainProductList[2].janCode}`"
                  height="66"
                  width="90%"
                  class="text-center mt-4"
                >
                  <span class="white--text"
                    >オリンパス OM-D E-M10 MarkIII<br />
                    EZダブルズームキット シルバー<br />商品詳細・購入はコチラ</span
                  >
                </v-btn>
              </v-hover>
            </v-col>
          </v-row>
          <div class="pa-4 mt-4">
            <v-btn block class="text-center btn-brown" height="70" href="/ec/special/camera/travel/recommended_camera"
              ><span class="text-subtitle-1 white--text"> 定番人気のミラーレスカメラを<br />もっと見る</span>
            </v-btn>
          </div>
        </v-container>
        <!--====================レコメンド04 ====================-->
        <h2 id="ct04" class="spec mt-16">旅行におすすめなカメラアクセサリー</h2>
        <p class="texta pr-2">
          旅行に行く際、あったら便利なカメラアクセサリーは？
          と聞かれると、三脚・カメラバッグ・メディアなど色々思い浮かびますが、その中でも持っておくべきおすすめのアクセサリーはズバリ「モバイルバッテリー」！<br />
          <span v-if="$vuetify.breakpoint.mdAndUp"
            >最近のカメラはカンタンにスマホに接続でき、撮ったその場でSNSに画像をアップする使い方が多くなっています。<br />
            しかし旅行中は地図を見たり、情報を集めたりするのでスマホのバッテリー消費がいつもより早くなります。ホテルに着いていないのに充電が切れそうになったことはありませんか？<br
          /></span>
          コンパクトで大容量なモバイルバッテリーがあれば、バッテリーの不安もなく安心して旅行を楽しめるんです。カメラによってはモバイルバッテリーで充電できる機種もあるんですよ♪<br />
        </p>

        <v-container class="mt-2 mb-12">
          <v-row>
            <v-col cols="12" sm="6" v-if="mainProductList.length !== 0">
              <p class="caption">旅行におすすめデジカメ</p>
              <h4 class="no1">
                <a :href="`/ec/pd/${mainProductList[3].janCode}`">{{ mainProductList[3].itemName }}</a>
              </h4>
              <v-row>
                <v-col cols="6">
                  <v-img :src="mainProductList.images[3].imagePath.replace(/TN/g, 'M')" max-width="210" max-height="210"></v-img>
                </v-col>
                <v-col cols="6">
                  <font size="-1">おすすめポイント</font>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">コンパクト</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">巻き付け◎</v-sheet>
                  <v-sheet color="#548ea4" class="white--text text-center py-2">手持ち三脚としても◎</v-sheet>
                </v-col>
              </v-row>
              <p>
                価格<span class="red--text font-weight-bold">{{ formatPrice(parseInt(mainProductList.images[2].price)) }}&nbsp;</span
                ><span class="font-small">円</span>
              </p>
              <v-hover v-slot="{ hover }">
                <v-btn
                  dark
                  :color="hover ? 'orange' : '#548ea4'"
                  :href="`/ec/pd/${mainProductList[3].janCode}`"
                  height="66"
                  width="393"
                  class="text-center mt-4"
                >
                  <span class="white--text"
                    >JOBY JB01542-PKK ゴリラポッド 325<br />
                    商品詳細・購入はコチラ</span
                  >
                </v-btn>
              </v-hover>
            </v-col>
          </v-row>
          <div class="pa-4 mt-4">
            <v-btn block class="text-center btn-brown" height="70" href="/ec/special/camera/travel/accessory"
              ><span class="text-subtitle-1 white--text"> 旅行には必須！<br />おすすめアクセサリーをもっと見る</span>
            </v-btn>
          </div>
        </v-container>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <h5 class="spec2">合わせてチェック！関連特集</h5>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import Urlcopy from '@/components/common/special/url-copy.vue';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
export default Vue.extend({
  name: 'travel',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    watchInVideo: WatchInVideo,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = '旅のお供に！バイヤー厳選おすすめ旅カメラ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '旅行には必須「カメラ」バイヤーが厳選したおすすめカメラやアクセサリーのご紹介！')

    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '旅のお供に！バイヤー厳選おすすめ旅カメラ',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: '動画撮影にもおすすめカメラ', href: '#ct01', txt: '動画を中心に撮影したい！そんな方におすすめカメラ' },
        { naviItem: '人気！360度撮影や防水カメラ', href: '#ct02', txt: '海や雪山。アウトドアで活躍するカメラを集めました' },
        { naviItem: '定番人気のミラーレスカメラ', href: '#ct03', txt: 'オシャレに、そして綺麗に写真を残したい方におすすめ' },
        { naviItem: '旅行には必須！おすすめアクセサリー', href: '#ct04', txt: '旅には欠かせない、アクセサリーを集めました' }
      ],
      mainProductJanCode: ['4546821920890', '4936080894870', '4545350051457', '8024221688375'],
      mainProductList: [] as Array<ProductDetail>,
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/feature/',
          img: 'https://shop.kitamura.jp/images/banner/1341.jpg',
          alt: '話題の新製品'
        },
        {
          href: "/ec/special/camera/compact",
          img: "https://shop.kitamura.jp/images/banner/1986.jpg",
          alt: "おすすめデジカメ/デジタルカメラ特集",
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/general/wirelessimageshare',
          img: 'https://shop.kitamura.jp/images/banner/2785.gif',
          alt: 'デジカメとスマホを無線でつないで写真を楽しもう'
        },
        {
          href: "/ec/special/camera/dslr",
          img: "https://shop.kitamura.jp/images/banner/1350.gif",
          alt: "おすすめのデジタル一眼レフ/ミラーレスカメラ特集",
        },
        {
          href: '/ec/special/camera/feature/sony/actioncam',
          img: 'https://shopimg.kitamura.jp/images/banner/1267.jpg',
          alt: 'ソニーアクションカム'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
      ],
    });
    /**
    * 商品詳細を取得する
    */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
h1.top-title {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 80px 0px 15px 30px;
  color: #ffffff;
  font-size: 180%;
  font-weight: bold;
  text-shadow: 0px 0px 5px #070302;
}
h2.top-titlesub {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 30px;
  color: #ffffff;
  font-size: 100%;
  font-weight: 400;
}
.imagespec-left {
  border: 1px #cccccc solid;
  box-sizing: border-box;
}
.travel h2.spec {
  width: 100%;
  height: auto;
  margin: 30px 0px 15px 0px;
  padding: 0px 10px 5px 50px;
  font-size: 25px;
  font-weight: 800;
  color: #444444;
  border-bottom: 4px #444444 solid;
  box-sizing: border-box;
  background: url(/ec/images2/special/camera/travel/bgspecsum.gif) bottom left no-repeat;
}
@media screen and (max-width: 619px) {
  .travel h2.spec {
    width: 100%;
    height: auto;
    margin: 30px 0px 15px 0px;
    padding: 0px 10px 5px 40px;
    font-size: 18px;
    font-weight: 800;
    color: #444444;
    border-bottom: 2px #00ccff solid;
    box-sizing: border-box;
    background: url(/ec/images2/special/camera/travel/bgspecsum.gif) bottom left no-repeat;
  }
}
.travel .texta {
  width: 100%;
  height: auto;
  margin: 0px 0px 10px 0px;
  padding: 0 10px;
  font-size: 16px;
  box-sizing: border-box;
  line-height: 1.8em;
}
.travel h4.no1 {
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 5px 0px 0px 50px;
  font-size: 16px;
  color: #444444;
  font-weight: 600;
  background-image: url(/ec/images2/special/camera/travel/rgno1.jpg);
  background-repeat: no-repeat;
  line-height: 1em;
  box-sizing: border-box;
}
.btn-brown {
  background: rgba(171, 134, 78);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(171, 134, 78)), to(rgba(122, 88, 41)));
  background: -webkit-linear-gradient(top, rgba(171, 134, 78) 0%, rgba(122, 88, 41) 100%);
  background: linear-gradient(to bottom, rgba(171, 134, 78) 0%, rgba(122, 88, 41) 100%);
}
@media screen and (min-width: 813px) {
  .spec2 {
    background: rgba(0, 0, 0, 0) url(/ec/images2/special/camera/travel/bgtitlcr.jpg) no-repeat scroll 0 0;
    border-bottom: 2px solid #ffcc00;
    font-weight: bold;
    color: #444444;
    clear: both;
    font-size: 22px;
    height: 25px;
    padding: 0 10px 0 35px;
    width: 100%;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 619px) {
  .spec2 {
    background: rgba(0, 0, 0, 0) url(/ec/images2/special/camera/travel/bgtitlcr.jpg) no-repeat scroll 0 0;
    border-bottom: 2px solid #ffcc00;
    font-weight: bold;
    color: #444444;
    clear: both;
    font-size: 19px;
    height: 25px;
    margin: 30px 0 15px;
    padding: 0 10px 0 35px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
