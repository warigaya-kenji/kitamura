<template>
  <v-app>
    <div class="tokutokukoukan">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />

        <!-- 960px以上 -->
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-head01.jpg" max-width="100%" height="auto" />
        </div>

        <!-- 960px未満 -->
        <div v-if="$vuetify.breakpoint.smAndDown">
          <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-head_sp01.jpg" max-width="100%" height="auto" />
        </div>

        <p class="text-center text-subtitle-2">
          新しいデジカメ・カメラ・レンズの買替えをご検討のお客さまにおすすめ「トクトク交換」サービス<br />
          「ご購入予定の商品」と「お手持ちの下取り品」がトクトク交換対象品の場合、とってもお得に商品購入ができます
        </p>

        <v-row justify="center" align-content="center">
          <v-col cols="12" sm="10" class="text-center">
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                :elevation="hover ? 8 : 2"
                height="50px"
                color="#6bb42a"
                class="white--text pa-4"
                @click="
                  linkToOtherWindow(
                    'https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&category=&index=all&sort=number20,Number17,Score&searchbox=1&q=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&path=&y=0&x=0'
                  )
                "
              >
                <v-icon color="white" v-if="$vuetify.breakpoint.mdAndUp">fas fa-search</v-icon
                ><span :class="$vuetify.breakpoint.mdAndUp ? 'text-h5 mx-4' : 'text-subtitle-1 mx-4'">トクトク交換対象品を見る</span
                ><v-icon color="white" v-if="$vuetify.breakpoint.smAndDown">fas fa-chevron-right</v-icon>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

        <v-row v-if="$vuetify.breakpoint.mdAndUp">
          <v-col cols="4" v-for="navi in navibtn" :key="navi">
            <v-hover v-slot="{ hover }">
              <v-btn :elevation="hover ? 6 : 2" :href="navi.href" block color="#009f51" height="45px"
                ><span class="mx-8 white--text pa-2 text-center text-subtitle-1">{{ navi.txt }}</span
                ><v-icon small color="white">fas fa-chevron-down</v-icon></v-btn
              >
            </v-hover>
          </v-col>
        </v-row>
        <!--↓買取ご希望の方はこちら-->
        <div class="text-right my-4">
          <v-btn text color="blue" @click="linkToOtherWindow('https://www.net-chuko.com/sell/index.do')">⇒買取ご希望の方はこちら</v-btn>
        </div>
        <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
        <!--↓トクトク交換とは-->
        <div class="mt-12" id="caa">
          <p class="text-h4 font-weight-bold text-center my-6">トクトク交換とは</p>
          <p :class="$vuetify.breakpoint.mdAndUp ? 'text-h6 line-height text-left px-12' : 'text-subtitle-2 line-height text-left'">
            お客様が対象商品をご購入される際、お手持ちの商品をお売りいただくと<br /><span class="red--text">特別価格</span>で下取りさせていただきます<br />
            <span :class="$vuetify.breakpoint.mdAndUp ? 'text-subtitle-1 text-left' : 'caption text-left'"
              >※トクトク交換は直送限定のサービスです<br />※重要付属品欠品（バッテリー・充電器など）、目立つへこみ、動作不良・カビ・クモリなど、当社で「難あり」と判断した場合は｢トクトク交換｣対象外となります<v-btn
                text
                @click="linkToOtherWindow('https://ecfaq.kitamura.jp/s/article/EC0020210310001')"
                color="blue"
                class="px-0"
              >
                <span :class="$vuetify.breakpoint.mdAndUp ? 'text-subtitle-2' : 'caption'">詳しくはコチラ</span></v-btn
              ></span
            >
          </p>
          <p class="text-right my-4">
            <v-btn text color="blue" class="text-h6" @click="linkToOtherWindow('http://www.net-chuko.com/static/contents/page/sell-guide.html#a03')"
              >⇒下取りとは</v-btn
            >
          </p>

          <!-- 960px以上 -->
          <div v-if="$vuetify.breakpoint.mdAndUp">
            <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-setsumei01.jpg" max-width="100%" class="mb-4"></v-img>
            <v-img src="/ec/images2/special/general/tokutokukoukan/sateirei_01.jpg" width="100%"></v-img>
          </div>

          <!-- 960px未満 -->
          <div v-if="$vuetify.breakpoint.smAndDown">
            <v-img src="/ec/images2/special/general/tokutokukoukan/tokutoku-koukan-setsumei02.jpg" max-width="100%" class="mb-4"></v-img>
            <p class="mt-6">トクトク交換を利用すると、お支払額を大幅に抑えられます<br />例えば・・・</p>
            <v-img v-show="seeNextSp" src="/ec/images2/special/general/tokutokukoukan/sateirei_02.jpg" max-width="100%" height="auto"></v-img>
            <v-btn block color="#009f51" class="white--text pa-2 mb-12" height="45px" @click="changeSeeNextSp()"
              ><v-icon small>fas fa-chevron-down</v-icon><span>{{ seeNextSp ? '説明を閉じる' : 'つづきを見る' }}</span></v-btn
            >
            <v-divider></v-divider>
          </div>
        </div>

        <!--↓トクトク交換 5つの特徴-->
        <div class="mt-12" id="cab">
          <p class="text-h4 font-weight-bold text-center my-6">
            トクトク交換<br v-if="$vuetify.breakpoint.smAndDown" />
            5つの特徴
          </p>

          <!-- 960px以上 -->
          <div v-if="$vuetify.breakpoint.mdAndUp">
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
                  <dd>
                    下取り品の発送は、2通りからお選びいただけます。共に着払いにてご発送ください。<br />・梱包キットを申込む<br />・商品お届け時の箱を再利用
                  </dd>
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
          </div>

          <!-- 960px未満 -->
          <div v-if="$vuetify.breakpoint.smAndDown">
            <div class="one tokutokukoukan-sp">
              <div class="square01 midori-waku">
                <div class="waku-sp">
                  <p class="tokutyou-sp-p01">特別価格で下取り</p>
                  <p class="tokutyou-sp-p02">
                    ①ご購入希望の商品、<br />②お手持ちの下取り品、<br />両方ともトクトク交換対象品の場合、買取り上限価格の<span class="akaji">10%UP</span
                    >で下取りいたします！
                  </p>
                </div>
                <div class="d-flex flex-column justify-space-between align-center mb-2">
                  <v-img class="tokutyou-sp" src="/ec/images2/special/general/tokutokukoukan/tokutyou-sp-01.jpg" max-width="80%" height="auto" />
                </div>
              </div>
            </div>

            <!--↓アコーディオン中身 sp-->
            <!--↓特徴② お支払いは差額分のみ-->
            <div class="two tokutokukoukan-sp" v-show="seeNext">
              <div class="square01 midori-waku">
                <div class="waku-sp">
                  <p class="tokutyou-sp-p01">お支払いは<br />差額分のみ</p>
                  <p class="tokutyou-sp-p02">
                    下取り品の金額を、ご購入商品の金額から差し引いて販売させていただきます。ご負担金を最小限に抑えることが可能です。
                  </p>
                </div>
                <div class="d-flex flex-column justify-space-between align-center mb-2">
                  <v-img class="tokutyou-sp" src="/ec/images2/special/general/tokutokukoukan/tokutyou-02.jpg" max-width="80%" height="auto" />
                </div>
              </div>
            </div>
            <!--↑-->
            <!--↓特徴③ 欲しい商品が先に届く-->
            <div class="three tokutokukoukan-sp" v-show="seeNext">
              <div class="square01 midori-waku">
                <div class="waku-sp">
                  <p class="tokutyou-sp-p01">欲しい商品が<br />先に届く</p>
                  <p class="tokutyou-sp-p02">
                    ご購入商品をお受取り後、下取り品をお送りいただきます。撮影機会を逃すことなく、ご購入カメラ到着後にお持ちのカメラと見比べることができます。
                  </p>
                </div>
                <div class="d-flex flex-column justify-space-between align-center mb-2">
                  <v-img class="tokutyou-sp" src="/ec/images2/special/general/tokutokukoukan/tokutyou-03.jpg" max-width="80%" height="auto" />
                </div>
              </div>
            </div>
            <!--↑-->
            <!--↓特徴④ 下取り品の発送は送料無料-->
            <div class="four tokutokukoukan-sp" v-show="seeNext">
              <div class="square01 midori-waku">
                <div class="waku-sp">
                  <p class="tokutyou-sp-p01">下取り品の<br />発送は送料無料</p>
                  <p class="tokutyou-sp-p02">
                    下取り品の発送は、2通りからお選びいただけます。共に着払いにてご発送ください。<br />・梱包キットを申込む<br />・商品お届け時の箱を再利用
                  </p>
                </div>
                <div class="d-flex flex-column justify-space-between align-center mb-2">
                  <v-img class="tokutyou-sp" src="/ec/images2/special/general/tokutokukoukan/tokutyou-04.jpg" max-width="80%" height="auto" />
                </div>
              </div>
            </div>
            <!--↑-->
            <!--↓特徴⑤ カンタン申込み-->
            <div class="five tokutokukoukan-sp" v-show="seeNext">
              <div class="square01 midori-waku">
                <div class="waku-sp">
                  <p class="tokutyou-sp-p01">カンタン<br />お申込み</p>
                  <p class="tokutyou-sp-p02">商品ご購入時に下取り品を選択するだけ。<br />買取りに比べ、入力の手間が省けます。</p>
                </div>
                <div class="d-flex flex-column justify-space-between align-center mb-2">
                  <v-img class="tokutyou-sp" src="/ec/images2/special/general/tokutokukoukan/tokutyou-05.jpg" max-width="80%" height="auto" />
                </div>
              </div>
            </div>
            <!--↑-->
          </div>

          <v-row class="mt-2" justify="center">
            <v-col cols="12" sm="10">
              <v-hover v-slot="{ hover }">
                <v-btn :elevation="hover ? 8 : 2" block color="#009f51" class="white--text pa-2 mb-12" height="45px" @click="changeSeeNext()"
                  ><v-icon small>fas fa-chevron-down</v-icon><span>{{ seeNext ? '説明を閉じる' : 'つづきを見る' }}</span></v-btn
                >
              </v-hover>
            </v-col>
          </v-row>

          <!--↓トクトク交換 申込みの流れ-->
          <div class="text-center" id="cac">
            <p class="text-h4 font-weight-bold my-6">トクトク交換 <br v-if="$vuetify.breakpoint.smAndDown" />お申込みの流れ</p>
            <p v-if="$vuetify.breakpoint.mdAndUp" class="text-h6 my-4">お申込み手順を動画で分かりやすく解説！</p>
            <div class="mb-2">
              <watchInVideo :src="'https://www.youtube.com/embed/lesku_SXGfw?rel=0'" :height="386" />
            </div>

            <v-row justify="center">
              <v-col cols="12" sm="8">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :elevation="hover ? 8 : 2"
                    v-if="$vuetify.breakpoint.mdAndUp"
                    block
                    color="#009f51"
                    class="white--text pa-2 mb-12"
                    height="45px"
                    @click="linkToOtherWindow('https://shop.kitamura.jp/sitemap/faq_tokutokukoukan.html')"
                    ><span class="mx-12">トクトク交換の詳しい流れはこちら</span><v-icon small>fas fa-chevron-right</v-icon></v-btn
                  >
                </v-hover>
                <v-btn
                  v-if="$vuetify.breakpoint.smAndDown"
                  block
                  text
                  color="blue"
                  class="text-subtitle-1 pa-2 mb-12"
                  height="45px"
                  @click="linkToOtherWindow('https://shop.kitamura.jp/sitemap/faq_tokutokukoukan.html')"
                  >⇒トクトク交換の詳しい流れはこちら</v-btn
                >
              </v-col>
            </v-row>
          </div>

          <!--↓対象品検索ボタン⓪-->
          <v-row justify="center" align-content="center">
            <v-col cols="12" sm="10">
              <v-hover v-slot="{ hover }">
                <v-btn
                  :elevation="hover ? 8 : 2"
                  block
                  height="70px"
                  color="#6bb42a"
                  @click="
                    linkToOtherWindow(
                      'https://shop.kitamura.jp/pd/list.html?searchbox=1&sort=number20%2CNumber17%2CScore&index=all&path=&q=%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E4%BA%A4%E6%8F%9B&x=0&y=0'
                    )
                  "
                >
                  <span class="white--text text-sm-h6 mx-2">それでは、さっそく<br v-if="$vuetify.breakpoint.smAndDown" />対象品を見てみましょう！</span>
                  <v-icon color="white">fas fa-chevron-right</v-icon>
                </v-btn>
              </v-hover>
            </v-col>
          </v-row>
          <p :class="$vuetify.breakpoint.mdAndUp ? 'text-center my-8' : 'text-center mt-8'">
            <v-btn text color="blue" class="text-h6" @click="linkToOtherWindow('https://www.net-chuko.com/sell/index.do')">⇒買取ご希望の方はこちら</v-btn>
          </p>
          <p class="text-center mb-0">
            よくあるご質問は<v-btn text color="blue" @click="linkToOtherWindow('https://shop.kitamura.jp/sitemap/faq_index.html#tokutokukoukan')">こちら</v-btn>
          </p>
          <div class="pa-4 line-g mb-8">
            【ご注意】
            <ul>
              <li>宅配受取限定のサービスとなり、店舗受取は対象外となります</li>
              <li>納期がかかる商品の場合、ご購入商品を先にお届けできない場合もございます</li>
              <li>下取り交換品はトクトク買取対象品のみとなります</li>
              <li>ご注文後、下取り交換品が10日以内に弊社に届かない場合、下取り交換金額を省いたご購入金額でのお支払いとなります（一部商品を除く）</li>
              <li>「トクトク交換」対象外の場合、買取り価格は銀行口座へのお振込みとなります</li>
              <li>
                「トクトク交換」対象の商品でも重要付属品がない、目立つへこみ、動作不良、カビ、クモリなど、当社で難ありと判断したものがある場合は、下取り交換金額を省いたご購入金額でのお支払いとなります
                <a href="https://ecfaq.kitamura.jp/s/article/EC0020210310001" target="_blank">詳しくはコチラ</a>
              </li>
              <li>
                ご購入手続き完了後、必ず梱包キットのお申込み（トクトク交換のお手続き）を行ってください<br />お忘れの場合はマイページのご注文履歴からお手続きいただけます
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'tokutokukoukan',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    watchInVideo: WatchInVideo,
    facebookAndTwitter: FacebookAndTwitter
  },
  setup: (props, context) => {
    document.title = 'デジカメ・レンズの買い替えは「トクトク交換」で下取り | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '新しいデジカメ・カメラ・レンズの買い替えをご検討のお客さまへ「トクトク交換」を利用するとお得です！対象商品のご注文時にお手持ちの下取り交換品を選択すると特別価格で下取りいたします お支払いは差額分だけ！とってもお得にご購入できます。')
    const state = reactive({
      seeNext: false,
      seeNextSp: false,
      navibtn: [
        { txt: 'トクトク交換とは', href: '#caa' },
        { txt: '5つの特徴', href: '#cab' },
        { txt: 'お申し込みの流れ', href: '#cac' }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'デジカメ・レンズの買い替えは「トクトク交換」で下取り | カメラのキタムラネットショップ',
          disabled: true
        }
      ],
    });

    const changeSeeNext = () => {
      if (state.seeNext) {
        state.seeNext = false;
      } else {
        state.seeNext = true;
      }
    }

    const changeSeeNextSp = () => {
      if (state.seeNextSp) {
        state.seeNextSp = false;
      } else {
        state.seeNextSp = true;
      }
    }

    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      changeSeeNext,
      changeSeeNextSp
    };
  }
});
</script>

<style lang="scss" scoped>
.w80 {
  width: 80%;
}

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
    top: 120px;
    left: 130px;
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
    background-image: url(/ec/images2/special/general/tokutokukoukan/tokutyou-01_pc.jpg);
  }
}

@media (min-width: 769px) {
  .two .bg-01 {
    background-image: url(/ec/images2/special/general/tokutokukoukan/tokutyou-02_pc.jpg);
  }
}

@media (min-width: 769px) {
  .three .bg-01 {
    background-image: url(/ec/images2/special/general/tokutokukoukan/tokutyou-03_pc.jpg);
  }
}

@media (min-width: 769px) {
  .four .bg-01 {
    background-image: url(/ec/images2/special/general/tokutokukoukan/tokutyou-04_pc.jpg);
  }
}

@media (min-width: 769px) {
  .five .bg-01 {
    background-image: url(/ec/images2/special/general/tokutokukoukan/tokutyou-05_pc.jpg);
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

.midori-waku {
  border: solid 0.5px #6bb42a;
  border-radius: 12px;
  width: 90%;
  margin-top: 5em;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}

.one .square01::before {
  background-image: url(/ec/images2/special/general/tokutokukoukan/hexagon_sp_01.png);
}

.two .square01::before {
  background-image: url(/ec/images2/special/general/tokutokukoukan/hexagon_sp_02.png);
}

.three .square01::before {
  background-image: url(/ec/images2/special/general/tokutokukoukan/hexagon_sp_03.png);
}

.four .square01::before {
  background-image: url(/ec/images2/special/general/tokutokukoukan/hexagon_sp_04.png);
}

.five .square01::before {
  background-image: url(/ec/images2/special/general/tokutokukoukan/hexagon_sp_05.png);
}

.square01::before {
  content: '';
  display: inline-block;
  width: 120px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  top: -3em;
  position: absolute;
}

.one .square01::before,
.three .square01::before,
.five .square01::before {
  left: -1.5em;
}

.two .square01::before,
.four .square01::before {
  right: -1.5em;
}

.one .tokutokukoukan-sp {
  display: block;
}

.waku-sp {
  margin: 4em 3em auto;
  font-family: none;
}

.tokutyou-sp-p01 {
  text-align: center;
  font-size: 170%;
  color: #333333;
  padding-bottom: 0.7em;
}

.tokutyou-sp-p02 {
  font-size: 120%;
  color: #333333;
  padding-bottom: 0.5em;
}
</style>
