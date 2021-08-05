<template>
  <v-app>
    <div class="tokutokukoukan">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/general/tokutokukoukan/'" />

        <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-head01.jpg" max-width="100%" height="auto" />
        <p class="text-center">
          新しいデジカメ・カメラ・レンズの買替えをご検討のお客さまにおすすめ「トクトク交換」サービス<br />
          「ご購入予定の商品」と「お手持ちの下取り品」がトクトク交換対象品の場合、とってもお得に商品購入ができます
        </p>

        <v-row justify="center" align-content="center">
          <v-col cols="10" class="text-center">
            <v-btn
              width="100%"
              height="60px"
              color="light-green"
              class="white--text pa-4"
              @click="
                linkToOtherWindow(
                  'https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&category=&index=all&sort=number20,Number17,Score&searchbox=1&q=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&path=&y=0&x=0'
                )
              "
            >
              <v-icon color="white">fas fa-search</v-icon><span class="text-h6">トクトク交換対象品を見る</span>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4" v-for="navi in navibtn" :key="navi">
            <v-btn :href="navi.herf" block color="green darken-2" class="white--text pa-2 text-center" height="45px"
              ><span class="mx-8">{{ navi.txt }}</span
              ><v-icon small>fas fa-chevron-down</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <!--↓買取ご希望の方はこちら-->
        <div class="text-right my-4">
          <v-btn text color="blue" @click="linkToOtherWindow('https://www.net-chuko.com/sell/index.do')">⇒買取ご希望の方はこちら</v-btn>
        </div>
        <!--↓トクトク交換とは-->
        <div class="mt-12">
          <p class="text-h4 font-weight-bold text-center my-6">トクトク交換とは</p>
          <p class="text-h6 line-height text-left px-12">
            お客様が対象商品をご購入される際、お手持ちの商品をお売りいただくと<br /><span class="red--text">特別価格</span>で下取りさせていただきます<br />
            <span class="text-subtitle-1 text-left"
              >※トクトク交換は直送限定のサービスです<br />※重要付属品欠品（バッテリー・充電器など）、目立つへこみ、動作不良・カビ・クモリなど、当社で「難あり」と判断した場合は｢トクトク交換｣対象外となります<v-btn
                text
                @click="linkToOtherWindow('https://www.net-chuko.com/sell/index.do')"
                color="blue"
              >
                詳しくはコチラ</v-btn
              ></span
            >
          </p>
          <p class="text-right my-4">
            <v-btn text color="blue" class="text-h6" @click="linkToOtherWindow('http://www.net-chuko.com/static/contents/page/sell-guide.html#a03')"
              >⇒下取りとは</v-btn
            >
          </p>
          <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-setsumei01.jpg" width="100%" class="mb-4"></v-img>
          <v-img src="/ec/images2/special/general/tokutokukoukan/sateirei_01.jpg" width="100%"></v-img>
        </div>

        <!--↓トクトク交換 5つの特徴-->
        <div class="mt-12">
          <p class="text-h4 font-weight-bold text-center my-6">トクトク交換 5つの特徴</p>

          <div class="one feature w900 container-01 pc mb-6">
            <div class="bg-01">
              <dl class="waku-01">
                <dt>特別価格で<br />下取り</dt>
                <dd>
                  ①ご購入希望の商品、<br />②お手持ちの下取り品、<br />両方ともトクトク交換対象品の場合、買取り上限価格の<span class="red--text">10%UP</span
                  >で下取りいたします！
                </dd>
              </dl>
            </div>
          </div>

          <div class="two feature w900 container-01 pc mb-6" v-show="seeNext">
            <div class="bg-01">
              <dl class="waku-01">
                <dt>お支払いは<br />差額分のみ</dt>
                <dd>下取り品の金額を、ご購入商品の金額から差し引いて販売させていただきます。ご負担金を最小限に抑えることが可能です。</dd>
              </dl>
            </div>
          </div>

          <div class="three feature w900 container-01 pc mb-6" v-show="seeNext">
            <div class="bg-01">
              <dl class="waku-01">
                <dt>欲しい商品が<br />先に届く</dt>
                <dd>
                  ご購入商品をお受取り後、下取り品をお送りいただきます。撮影機会を逃すことなく、ご購入カメラ到着後にお持ちのカメラと見比べることができます。
                </dd>
              </dl>
            </div>
          </div>

          <div class="four feature w900 container-01 pc mb-6" v-show="seeNext">
            <div class="bg-01">
              <dl class="waku-01">
                <dt>下取り品の<br />発送は送料無料</dt>
                <dd>下取り品の発送は、2通りからお選びいただけます。共に着払いにてご発送ください。<br />・梱包キットを申込む<br />・商品お届け時の箱を再利用</dd>
              </dl>
            </div>
          </div>

          <div class="five feature w900 container-01 pc" v-show="seeNext">
            <div class="bg-01">
              <dl class="waku-01">
                <dt>カンタン<br />お申込み</dt>
                <dd>商品ご購入時に下取り品を選択するだけ。<br />買取りに比べ、入力の手間が省けます。</dd>
              </dl>
            </div>
          </div>

          <div class="text-center">
            <v-btn color="green darken-2" class="white--text pa-2 mb-12" height="45px" width="80%" @click="changeSeeNext()"
              ><v-icon small>fas fa-chevron-down</v-icon><span>{{ seeNext ? '説明を閉じる' : 'つづきを見る' }}</span></v-btn
            >
          </div>

          <!--↓トクトク交換 申込みの流れ-->
          <div class="text-center">
            <p class="text-h4 font-weight-bold my-6">トクトク交換 お申込みの流れ</p>
            <p class="text-h6 my-4">お申込み手順を動画で分かりやすく解説！</p>
            <div class="mb-2">
              <watchInVideo :src="'https://www.youtube.com/embed/lesku_SXGfw?rel=0'" :width="'700px'" :height="386" />
            </div>

            <v-btn
              color="green"
              class="white--text pa-2 mb-12"
              height="45px"
              width="60%"
              @click="linkToOtherWindow('https://shop.kitamura.jp/sitemap/faq_tokutokukoukan.html')"
              ><span class="mx-12">トクトク交換の詳しい流れはこちら</span><v-icon small>fas fa-chevron-right</v-icon></v-btn
            >
          </div>

          <!--↓対象品検索ボタン⓪-->
          <v-row justify="center" align-content="center">
            <v-col cols="10" class="text-center">
              <v-btn
                width="100%"
                height="60px"
                color="light-green"
                class="white--text pa-4"
                @click="
                  linkToOtherWindow(
                    'https://shop.kitamura.jp/pd/list.html?searchbox=1&sort=number20%2CNumber17%2CScore&index=all&path=&q=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&x=0&y=0'
                  )
                "
              >
                <span class="text-h6 mx-4">それでは、さっそく対象品を見てみましょう！</span> <v-icon color="white">fas fa-chevron-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <p class="text-center my-8">
            <v-btn text color="blue" class="text-h6" @click="linkToOtherWindow('https://www.net-chuko.com/sell/index.do')">⇒買取ご希望の方はこちら</v-btn>
          </p>
          <p class="mt-12 text-center mb-0">
            よくあるご質問は<v-btn text color="blue" @click="linkToOtherWindow('https://shop.kitamura.jp/sitemap/faq_index.html#tokutokukoukan')">こちら</v-btn>
          </p>
          <div class="pa-4 line-g ma-0">
            【ご注意】
            <ul>
              <li>・宅配受取限定のサービスとなり、店舗受取は対象外となります</li>
              <li>・納期がかかる商品の場合、ご購入商品を先にお届けできない場合もございます</li>
              <li>・下取り交換品はトクトク買取対象品のみとなります</li>
              <li>・ご注文後、下取り交換品が10日以内に弊社に届かない場合、下取り交換金額を省いたご購入金額でのお支払いとなります（一部商品を除く）</li>
              <li>・「トクトク交換」対象外の場合、買取り価格は銀行口座へのお振込みとなります</li>
              <li>
                ・「トクトク交換」対象の商品でも重要付属品がない、目立つへこみ、動作不良、カビ、クモリなど、当社で難ありと判断したものがある場合は、下取り交換金額を省いたご購入金額でのお支払いとなります
                <a href="https://ecfaq.kitamura.jp/s/article/EC0020210310001" target="_blank">詳しくはコチラ</a>
              </li>
              <li>
                ・ご購入手続き完了後、必ず梱包キットのお申込み（トクトク交換のお手続き）を行ってください<br />お忘れの場合はマイページのご注文履歴からお手続きいただけます
              </li>
            </ul>
          </div>

          <!--↓ SNSー-->
          <facebookAndTwitter />
        </div>
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
    urlcopy: Urlcopy,
    watchInVideo: WatchInVideo,
    facebookAndTwitter: FacebookAndTwitter
  },
  data() {
    return {
      seeNext: false,
      navibtn: [
        { txt: 'トクトク交換とは', herf: '#caa' },
        { txt: '5つの特徴', herf: '#cab' },
        { txt: 'お申し込みの流れ', herf: '#cac' }
      ],
      recommendedFeaturesList: [
        {
          herf: 'https://shop.kitamura.jp/ec/special/camera/bag/',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: '収納力で選べる！カメラバッグ特集'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/camera/strap/',
          img: 'https://shopimg.kitamura.jp/images/banner/1392.gif',
          alt: 'カメラストラップ特集'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/camera/dslr/',
          img: 'https://shop.kitamura.jp/images/banner/1350.gif',
          alt: '今人気の一眼レフ＆ミラーレス特集'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/general/pet/',
          img: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          alt: 'ペット写真のステキな残し方'
        },
        {
          herf: '/ec/special/general/highly_recommended/2020/4867/',
          img: 'https://shopimg.kitamura.jp/images/banner/7803.png',
          alt: 'イチオシinstax mini LiPlay'
        },
        {
          herf: 'https://www.net-chuko.com/static/contents/page/tell_me_chuuban.html',
          img: 'https://shopimg.kitamura.jp/images/banner/3498.jpg',
          alt: 'インスタなどSNSで人気！今こそ使いたいフィルムカメラ'
        },
        {
          herf: 'https://shop.kitamura.jp/ec/special/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          herf: 'https://shasha.kitamura.jp/',
          img: 'https://shop.kitamura.jp/images/banner/8235.png',
          alt: 'ShaSha'
        },
        {
          herf: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
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
          path: 'デジカメ・レンズの買い替えは「トクトク交換」で下取り | カメラのキタムラ',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4549292109207',
        '4549292109399',
        '4549292109405',
        '4549292109191',
        '4549292109368',
        '4549292142433',
        '4549292142952',
        '4549292143010',
        '4549292146165',
        '4957792151648',
        '4549292142204',
        '4547410418484',
        '2500000222184',
        '4548736109087',
        '4548736108837',
        '4548736108523',
        '4548736122574',
        '4548736118584',
        '4546821921965',
        '4546821920890'
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

<style lang="scss" scoped>
.w80 {
  width: 80%;
}

// .bg-01 {
//   background-image: url(/ec/images2/special/general/tokutokukoukan/tokutyou-01_pc.jpg) no-repeat top;
// }

.w900 {
  max-width: 900px;
}
.feature {
  height: 450px;
  margin-top: 0px;
  position: relative;
  font-family: none !important;
}
@media (min-width: 769px) {
  .container-01 {
    width: 860px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media (min-width: 769px) {
  .one .waku-01 {
    height: 300px;
    // padding: 60px 95px 50px 85px;
    position: absolute;
    width: 260px;
    top: 50px;
    left: 40px;
  }
}

@media (min-width: 769px) {
  .two .waku-01,
  .four .waku-01 {
    height: 300px;
    margin: 60px 95px 50px 85px;
    position: absolute;
    width: 260px;
    top: 50px;
    left: 430px;
  }
}

@media (min-width: 769px) {
  .three .waku-01,
  .five .waku-01 {
    height: 300px;
    margin: 60px 95px 50px 85px;
    position: absolute;
    width: 260px;
    top: 50px;
    left: 40px;
  }
}

@media (min-width: 769px) {
  .one .waku-01 dt,
  .three .waku-01 dt,
  .five .waku-01 dt {
    color: #333333;
  }
}
@media (min-width: 769px) {
  .waku-01 dt {
    font-size: 28px;
    font-weight: normal;
    text-align: center;
    margin-top: -20px;
  }
}

@media (min-width: 769px) {
  .one .waku-01 dd,
  .three .waku-01 dd,
  .five .waku-01 dd {
    color: #333333;
  }
}
@media (min-width: 769px) {
  .waku-01 dd {
    margin-top: 20px;
    font-size: 20px;
    font-weight: normal;
    margin-left: 0px;
  }
}

dl,
dt,
dd {
  line-height: 1.4em;
}

@media (min-width: 769px) {
  .one .bg-01 {
    background-image: url(https://shop.kitamura.jp/ec/images2/general/tokutokukoukan/tokutyou-01_pc.jpg);
  }
}

@media (min-width: 769px) {
  .two .bg-01 {
    background-image: url(https://shop.kitamura.jp/ec/images2/general/tokutokukoukan/tokutyou-02_pc.jpg);
  }
}

@media (min-width: 769px) {
  .three .bg-01 {
    background-image: url(https://shop.kitamura.jp/ec/images2/general/tokutokukoukan/tokutyou-03_pc.jpg);
  }
}

@media (min-width: 769px) {
  .four .bg-01 {
    background-image: url(https://shop.kitamura.jp/ec/images2/general/tokutokukoukan/tokutyou-04_pc.jpg);
  }
}

@media (min-width: 769px) {
  .five .bg-01 {
    background-image: url(https://shop.kitamura.jp/ec/images2/general/tokutokukoukan/tokutyou-05_pc.jpg);
  }
}

@media (min-width: 769px) {
  .bg-01 {
    height: 450px;
    position: absolute;
    width: 860px;
    top: 0;
  }
}
</style>
