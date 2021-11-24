<template>
  <v-app>
    <div class="watch-omega">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp ? 'https://shop.kitamura.jp/ts_rsc/514/images/bg_title.jpg' : 'https://shop.kitamura.jp/ts_rsc/514/images/sp_h1.png'
          "
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- ↓ ナビ -->
        <v-container class="pa-0">
          <v-row dense>
            <v-col cols="12" sm="4" v-for="(navi, i) in naviList" :key="i">
              <h2 class="nbtn">
                <a v-scroll-to="navi.href" class="hover">
                  {{ navi.name }}
                </a>
              </h2>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ オメガ時計人気モデル -->
        <h2 class="spec" id="series">オメガ時計 人気モデル</h2>
        <v-container class="pa-0">
          <v-row dense>
            <v-col cols="12" sm="6" v-for="(popularModel, i) in popularModelList" :key="i">
              <a :href="popularModel.href">
                <v-card outlined class="pl-1">
                  <v-row no-gutters :class="`ninki0${i + 1}`">
                    <v-col cols="8">
                      <v-card-title class="black--text">{{ popularModel.category }}</v-card-title>
                      <p class="including-line-breaks">{{ popularModel.txt }}</p>
                    </v-col>
                  </v-row>
                  <v-card
                    img="https://shop.kitamura.jp/ts_rsc/514/images/bg_linkm.gif"
                    width="450"
                    height="60"
                    class="text-center mx-auto my-2 pt-5 font-weight-bold red--text text--darken-2"
                  >
                    {{ popularModel.linktxt }}
                  </v-card>
                </v-card>
              </a>
            </v-col>
          </v-row>
        </v-container>
        <div class="text-center">
          <v-btn class="mt-4 mb-2" color="grey lighten-2" href="/ec/ct/E019/028/002/" x-large>
            オメガ 時計 商品一覧 価格を見る<v-icon right small color="red">fas fa-chevron-right</v-icon>
          </v-btn>
        </div>

        <h2 class="spec" id="ladies">オメガ 時計 レディースモデル</h2>
        <a
          href="/ec/list?narrow18=0&keyword=オメガ%28OMEGA%29%20%E3%80%80レディース&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=オメガ%28OMEGA%29%20%E3%80%80レディース&x=0&y=0"
        >
          <v-card img="https://shop.kitamura.jp/ts_rsc/514/images/btn_ladies.jpg" width="100%" height="100%" outlined class="pa-2">
            <v-card-title class="font-weight-bold black--text">レディース</v-card-title>
            <p class="btext">女性へのプレゼントにおすすめ<br />スピードマスター スピードマスター コンステレーション デ・ビルの<br />人気シリーズ</p>
          </v-card>
          <div class="text-center">
            <v-btn
              class="mt-4 mb-2"
              color="grey lighten-2"
              href="/ec/list?narrow18=0&keyword=オメガ%28OMEGA%29%20%E3%80%80レディース&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=オメガ%28OMEGA%29%20%E3%80%80レディース&x=0&y=0"
              x-large
            >
              オメガ レディースモデル 人気商品一覧<v-icon right small color="red">fas fa-chevron-right</v-icon>
            </v-btn>
          </div>
        </a>

        <h2 class="spec" id="history">オメガ 時計の歴史・ブランド説明</h2>
        <ul class="sbtextb mb-4">
          <li class="sbtextc">1848年、ルイ・ブランがスイスのラ・ショー・ド・フォンにて工房を開設</li>
          <li class="sbtextc">1894年、高性能ムーブメントが完成、その新型ムーブメントは「Ω（OMEGA）」と名付けられ、後にこれが正式な社名となりました</li>
          <li class="sbtextc">時代とともに高精度な時計が開発され、アポロ計画やオリンピックなどの公式時計として採用されました</li>
          <li class="sbtextc">1999年、コーアクシャル脱進機の実用化に成功、メンテナンスサイクルが長い画期的なムーブメントが量産化されました</li>
          <li class="sbtextc">2013年には15000ガウスの磁気に耐えうる機械式腕時計が発売されるなど、今もなお進化を続けているブランドです</li>
        </ul>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
export default Vue.extend({
  name: 'watch-omega',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: () => {
    document.title = 'オメガ OMEGA 時計 ｜人気モデル・レディース | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'Ωオメガの時計特集。人気のスピードマスター・シーマスターやレディースモデルの価格や特徴をご紹介。カメラのキタムラなら48回払いまで分割金利手数料が無料♪安心の電話注文が出来ます！'
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
          path: 'オメガ(OMEGA) 時計特集',
          disabled: true
        }
      ],
      naviList: [
        { name: 'オメガ時計 人気モデル', href: '#series' },
        { name: 'オメガ時計 レディースモデル', href: '#ladies' },
        { name: 'オメガ時計の歴史', href: '#history' },
      ],
      popularModelList: [
        { category: 'シーマスター', txt: '1948年に誕生したモデル\n150m防水の「アクアテラ」、600m防水の「プラネット・オーシャン」など、高い防水性能を備えています', linktxt: 'オメガ シーマスター 人気商品一覧', href: '/ec/list?narrow18=0&keyword=オメガ%28OMEGA%29%20シーマスター&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=オメガ%28OMEGA%29%20シーマスター&x=0&y=0', src: 'https://shop.kitamura.jp/ts_rsc/514/images/btn_seamaster.jpg' },
        { category: 'スピードマスター', txt: '1957年に誕生したモデル\n1965年、アメリカ航空宇宙局の公式腕時計として採用され、精度、視認性、信頼性の面で高い評価を得ています', linktxt: 'オメガ スピードマスター 人気商品一覧', href: '/ec/list?narrow18=0&keyword=%E3%82%AA%E3%83%A1%E3%82%AC%28OMEGA%29%20%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=%E3%82%AA%E3%83%A1%E3%82%AC%28OMEGA%29%20%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC&x=0&y=0', src: 'https://shop.kitamura.jp/ts_rsc/514/images/btn_speedmaster.jpg' },
        { category: 'コンステレーション', txt: '1952年に誕生したモデル\n英語で「星座」の意味を持ち、文字盤の6時位置にある星のマークと、裏蓋に描かれた天文台のデザインが特徴的です', linktxt: 'オメガ コンステレーション 人気商品一覧', href: 'https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%82%AA%E3%83%A1%E3%82%AC%28OMEGA%29%20%E3%82%B3%E3%83%B3%E3%82%B9%E3%83%86%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=%E3%82%AA%E3%83%A1%E3%82%AC%28OMEGA%29%20%E3%82%B3%E3%83%B3%E3%82%B9%E3%83%86%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3&x=0&y=0', src: 'https://shop.kitamura.jp/ts_rsc/514/images/btn_constellation.jpg' },
        { category: 'デ・ビル', txt: '1967年に誕生したモデル\nフランス語で「都会・街」の意味を持ち、高機能なドレスウォッチとして、多数のバリエーションが存在します', linktxt: 'オメガ デ・ビル 人気商品一覧', href: 'https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%82%AA%E3%83%A1%E3%82%AC%28OMEGA%29%20%E3%83%87%E3%83%BB%E3%83%93%E3%83%AB&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=%E3%82%AA%E3%83%A1%E3%82%AC%28OMEGA%29%20%E3%83%87%E3%83%BB%E3%83%93%E3%83%AB&x=0&y=0', src: 'https://shop.kitamura.jp/ts_rsc/514/images/btn_deville.jpg' },
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
.watch-omega {
  h2.nbtn {
    height: 80px;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    font-size: 100%;
    color: #444444;
    text-align: center;
    font-weight: 800;
    display: block;
    line-height: 3.5em;
    a {
      width: 100%;
      height: 100%;
      display: block;
      background-image: url(https://shop.kitamura.jp/ts_rsc/514/images/bg_nbtn.gif);
      background-repeat: no-repeat;
      background-size: 100% auto;
      color: #b91023 !important;
    }
  }
  h2.spec {
    margin: 30px 0px 15px 0px;
    padding: 5px 10px 5px 45px;
    box-sizing: border-box;
    font-size: 22px;
    font-weight: 600;
    color: #444444;
    border-bottom: 2px #bb182c solid;
    background-image: url(https://shop.kitamura.jp/ts_rsc/514/images/bg_titlesum.gif);
    background-repeat: no-repeat;
    background-position: center left;
    clear: both;
  }
  .ninki01 {
    background-image: url(https://shop.kitamura.jp/ts_rsc/514/images/btn_seamaster.jpg);
  }
  .ninki02 {
    background-image: url(https://shop.kitamura.jp/ts_rsc/514/images/btn_speedmaster.jpg);
  }
  .ninki03 {
    background-image: url(https://shop.kitamura.jp/ts_rsc/514/images/btn_constellation.jpg);
  }
  .ninki04 {
    background-image: url(https://shop.kitamura.jp/ts_rsc/514/images/btn_deville.jpg);
  }
  p.btext {
    width: 50%;
    height: 90px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5em;
    clear: both;
  }
  ul.sbtextb {
    width: 100%;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 30px;
    box-sizing: border-box;
  }
  li.sbtextc {
    width: auto;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 10px 0px;
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5;
    list-style-type: square;
    list-style-position: inside;
  }
}
</style>
