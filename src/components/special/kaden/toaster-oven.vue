<template>
  <v-app>
    <div class="toaseter-oven">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓sns share -->
        <snsShare :title="'おすすめ高級トースター特集 2019'" />

        <!--↓看板-->
        <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/bn01.jpg" alt="おすすめ高級トースター特集" max-width="940" max-height="593"></v-img>

        <h1 class="text-h6 text-center grey--text text--darken-4">おすすめ高級トースター特集</h1>
        <p class="mt-2 mb-10" v-if="$vuetify.breakpoint.mdAndUp">
          総務省の調査によると2015～2017年の家計調査の1世帯当たり品目別年間支出金額及び購入数量は、お米よりもパンのほうが金額数量ともに上回っているとのことです。これだけパン食が広まっているのですから「もっと美味しくパンを食べたい」という願望は大きいはず。同じ主食を美味しく食べるための家電として、炊飯器とトースターがありますが、日本の炊飯器の平均購入単価は2万2,000円に対して、トースターはわずか4,800円です。もしも炊飯器並みの価格のトースターを使ったら、どれだけ美味しくパンが食べられるでしょうか。バルミューダの「The
          Toaster」の大ヒットをきっかけに「もっと美味しく食べるためのトースター」が見直されています。<br />
          今回はちょっといいトースター6機種を集めて、当社スタッフ43人が食べ比べをしました。<br />
          あなたのトースター選びの参考になれば幸いです。
        </p>
        <p class="px-2 mt-2 mb-10" v-if="$vuetify.breakpoint.smAndDown">
          バルミューダの「The Toaster」の大ヒットをきっかけに「もっと美味しく食べるためのトースター」が見直されています。
          今回はちょっといいトースター6機種を集めて、当社スタッフ43人が食べ比べをしました。<br />
          あなたのトースター選びの参考になれば幸いです。
        </p>
        <!--↑看板-->

        <!--↓もくじ-->
        <h2 class="w-at tx-tya tx-no bb-or float-left">もくじ</h2>
        <div class="cl"></div>
        <ul class="mokuj mt-5 pl-12">
          <li v-for="(navi, index) in naviList" :key="index">
            <a v-scroll-to="navi.href"><span class="tx-no tx-usdi">●</span>{{ navi.name }}</a>
          </li>
        </ul>
        <!--↑もくじ-->

        <!--↓種類-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left" id="i00">
          トースターの種類<img src="https://shop.kitamura.jp/ts_rsc/1196/images/bk-t01.png" max-width="60" max-height="60" class="va-m" />
        </h2>
        <v-container class="cl">
          <v-row no-gutters>
            <v-col cols="12" sm="7">
              <p class="pl-4">
                トースターには「<a href="/ec/ct/E005005001">オーブントースター</a>」「<a href="/ec/ct/E005005002">ポップアップトースター</a>」「<a
                  href="/ec/ct/E005005004"
                  >ホットサンドメーカー</a
                >」などの種類があります。今回は「オーブントースター」に絞って比較をしていきます。<br />
                オーブントースターはトーストはもちろん、揚げ物・惣菜の温め、グラタンをはじめ、さまざまな料理ができることがポイントです。<br />
                オーブンレンジのレンジ機能に比べて、熱の立ち上がりが早く、短時間での調理が可能です。<br />
                オーブンレンジとは別に1台あると便利ですよ。
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/type.png" max-width="296" max-height="145" class="mx-auto"></v-img>
            </v-col>
          </v-row>
        </v-container>
        <!--↑種類-->

        <!--↓選び方-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left" id="i00">
          オーブントースターの選び方<img src="https://shop.kitamura.jp/ts_rsc/1196/images/bk-t02.png" max-width="60" max-height="60" class="va-m" />
        </h2>
        <div class="px-4 cl">
          <p>オーブントースターを選ぶときのポイントを簡単にまとめると…</p>
          <v-container>
            <v-row no-gutters>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : ''" class="pa-2 bb-mm">
                <h4 class="font-weight-bold text-body-2">
                  <span class="text-body-2 pink--text text--lighten-2">ポイント</span><span class="text-h4 pink--text text--lighten-2">1</span
                  ><br />ヒーターの種類と本数
                </h4>
                <p class="mt-2 text-body-2">仕上がりやスピードに影響します</p>
                <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/pt01.png" max-width="157" max-height="111" class="mx-auto"></v-img>
              </v-col>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : ''" class="pa-2 bb-mm">
                <h4 class="font-weight-bold text-body-2">
                  <span class="text-body-2 pink--text text--lighten-2">ポイント</span><span class="text-h4 pink--text text--lighten-2">2</span
                  ><br />内部・網の素材や加工
                </h4>
                <p class="mt-2 text-body-2">お手入れのしやすさや熱効率に影響します</p>
                <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/pt02.png" max-width="157" max-height="111" class="mx-auto"></v-img>
              </v-col>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : ''" class="pa-2 bb-mm">
                <h4 class="font-weight-bold text-body-2">
                  <span class="text-body-2 pink--text text--lighten-2">ポイント</span><span class="text-h4 pink--text text--lighten-2">3</span
                  ><br />調理メニューのマイコン制御
                </h4>
                <p class="mt-2 text-body-2">ほったらかし調理が便利</p>
                <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/pt03.png" max-width="157" max-height="111" class="mx-auto"></v-img>
              </v-col>
              <v-col class="pa-2 bb-mm" :cols="$vuetify.breakpoint.smAndDown ? 12 : 4">
                <h4 class="font-weight-bold text-body-2">
                  <span class="text-body-2 pink--text text--lighten-2">ポイント</span><span class="text-h4 pink--text text--lighten-2">4</span
                  ><br />コンベクションオーブン
                </h4>
                <p class="mt-2 text-body-2">ヒータの熱だけでなく「熱風」で焼きます。焼きムラが少なく余分な油を落とすヘルシー調理も可能です</p>
                <v-row>
                  <v-col cols="12" sm="6">
                    <p class="text-body-2">スチームを使った“スチームコンベクションオーブン”もあります</p>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/pt04.png" max-width="183" max-height="129" class="mx-auto"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <p class="mt-5 mb-0">
            トースターの価格の違いは、これらの素材や機能の有無であることが多いです。すばやく香ばしく美味しく焼けて、<br />手入れも簡単。<br />
            こういったことに価値を感じるのであれば、なるべくいいトースターを選ぶのがいいでしょう。
          </p>
        </div>
        <!--↑選び方-->

        <!--↓特徴-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left" id="i01">
          食べ比べした高級トースターの特徴<img src="https://shop.kitamura.jp/ts_rsc/1196/images/bk-t03.png" max-width="60" max-height="60" class="va-m" />
        </h2>
        <div class="cl"></div>
        <v-img
          src="https://shop.kitamura.jp/ts_rsc/1196/images/bn02.jpg"
          max-width="940"
          max-height="364"
          alt="食べ比べした高級トースターの特徴"
          class="mx-auto"
        ></v-img>
        <v-sheet
          :color="feature.isBackground ? '#F7F5E8' : '#ffffff'"
          v-for="(feature, index) in featuresOfLuxuryToasterList"
          :key="index"
          :class="$vuetify.breakpoint.mdUndUp ? 'px-5 pt-7' : 'px-2 pt-7'"
        >
          <h3 class="mb-3 font-weight-bold text-subtitle-1 text-sm-h6">
            <a :href="feature.href">{{ feature.name }}</a>
          </h3>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img :src="feature.leftImage" max-width="420" max-height="420" class="mx-auto"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-row>
                  <v-col cols="12" sm="6" v-for="(image, i) in feature.rightImages" :key="i">
                    <v-img :src="image" max-width="345" max-height="345" class="mx-auto"></v-img>
                  </v-col>
                </v-row>
                <p class="my-6 including-line-breaks">{{ feature.txt }}</p>
                <v-btn block elevation="4" :color="index === 0 ? '#F9727B' : 'grey darken-1'" height="68" :href="feature.href" class="mb-5">
                  <span class="white--text text-subtitle-1">{{ index === 0 ? '商品詳細を見る' : '販売終了' }}</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
        <!--↑特徴-->

        <!--↓企画の前-->
        <v-sheet color="#F7F5E8" class="mt-15">
          <v-container class="pa-5">
            <v-row>
              <v-col cols="12" sm="6">
                <h2 class="tx-tya tx-no bb-or mb-2 float-left">食べ比べ企画の前に…</h2>
                <p class="cl mt-2">
                  食べ比べ企画の前に、反町のGORGEの惣菜パンのリベイクと、東神奈川のPain de
                  Uさんの食パンを使って、バタートーストとチーズトーストを焼いてみました。 めちゃくちゃ美味しかったです。<br />
                  やっぱり、いいトースターだと、仕上がりが全然違いますね…大変美味でした。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/tb.jpg" max-width="450" max-height="198" class="mx-auto"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
        <!--↑企画の前-->

        <!--↓食べ比べ-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left" id="i02">
          高級トースターの食べ比べ方法<img src="https://shop.kitamura.jp/ts_rsc/1196/images/bk-t04.png" max-width="60" max-height="60" class="va-m" />
        </h2>
        <div class="cl"></div>
        <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/bn03.jpg" max-width="940" max-height="364" alt="高級トースターの食べ比べ"></v-img>
        <p class="mt-5 mb-10 px-5">
          普段食べているトーストとの比較がしやすいように、今回の食べ比べは、敷島製パンさんの「超熟」の６枚切りを、シンプルにトーストするだけ。パンそのものを味わってもらいました。<br />
          6機種ごとに焼き上がりの時間が異なるのですが、当日焼いたスタッフが絶妙な時間配分で、ほぼ同時にトーストを仕上げていたことを報告いたします。（謎の特技を身につけていました）<br />
          チェックするポイントは少なく絞って「サクサク感」 「中のふんわり度」 「美味しさ」 の3つを5点満点です。
        </p>
        <v-row>
          <v-col cols="6" sm="3" v-for="(n, index) in 4" :key="index">
            <v-img :src="`https://shop.kitamura.jp/ts_rsc/1196/images/ak0${n}.jpg`" max-width="219" max-height="146" alt="アンケート"></v-img>
          </v-col>
        </v-row>
        <!--↑食べ比べ-->

        <!--↓結果-->
        <div class="mt-15" id="i03">
          <h2 class="w-at mt-5 mb-5 tx-tya tx-no bb-or float-left">
            食べ比べの結果発表♪<img src="https://shop.kitamura.jp/ts_rsc/1196/images/bk-t05.png" max-width="60" max-height="60" class="va-m" />
          </h2>
          <div class="cl"></div>
          <v-sheet
            :color="result.isBackground ? '#F7F5E8' : '#ffffff'"
            v-for="(result, index) in resultAnnouncementList"
            :key="index"
            :class="$vuetify.breakpoint.mdUndUp ? 'px-5 pt-7' : 'px-2 pt-7'"
          >
            <h3 class="mb-3 font-weight-bold text-subtitle-1 text-sm-h6">
              <a :href="result.href">{{ result.name }}</a>
            </h3>
            <v-container>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-img :src="result.productImage" max-width="355" max-height="355" class="mx-auto"></v-img>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-img :src="result.fivePointsOutOfFiveList.src" max-width="263" max-height="170" class="mx-auto"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <p class="pa-2 li-h2 text-center tx-tya">
                        【5点満点の数】<br />サクサク…{{ result.fivePointsOutOfFiveList.crispy }}<br />ふんわり…{{ result.fivePointsOutOfFiveList.soft
                        }}<br />美味しい…{{ result.fivePointsOutOfFiveList.delicious }}
                      </p>
                    </v-col>
                  </v-row>
                  <p v-if="index === 5" class="my-6" v-html="result.txt"></p>
                  <p v-else class="my-6 including-line-breaks">{{ result.txt }}</p>
                  <v-btn block elevation="4" :color="index === 0 ? '#F9727B' : 'grey darken-1'" height="68" :href="result.href" class="mb-5">
                    <span class="white--text text-subtitle-1">{{ index === 0 ? '商品詳細を見る' : '販売終了' }}</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </div>
        <!--↑結果-->

        <!--今回の食べ比べをして-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left" id="i04">今回の食べ比べをして</h2>
        <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/bn04.jpg" max-width="940" max-height="364" class="cl"></v-img>
        <p class="my-5 px-5">
          「想像していたよりもずっと差があってびっくりした」<br />
          「トースターで仕上がりがこんなに違うことをはじめて知った」<br />
          そんな意見が多数上がりました。高機能トースターは高級炊飯器に比べると初期投資は少なく、パンを食べる幸せをランクアップしてくれるようです。もちろん今回の6機種は、パンを焼くだけでなく、さまざまな料理に使えるのもポイントです。<br />
          レパートリーが増えれば、トースターに1品まかせられるので、調理・家事の時短にも繋がります。レシピが充実している機種や、オートメニューがあるトースターを選ぶのもいいかもしれません。<br />
          毎日の生活にパンを食べているあなたにとって、この6機種から好きなトースターが見つかりますように！
        </p>
        <v-row class="mb-10">
          <v-col cols="12" sm="6">
            <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/bn05a.jpg" max-width="430" max-height="286"></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/bn05b.jpg" max-width="430" max-height="286"></v-img>
          </v-col>
        </v-row>
        <p class="mt-3 mb-7 px-5">
          なお、今回トーストを切り分けるときに、<router-link to="/ec/pd/4536178910026">ブラックアンドデッカーの電動ブレッドナイフ EK700</router-link
          >を使いました。<br />
          コンセントに接続する手間と、安全装置の解除など少し手間はかかりますが、焼き立てトーストを潰すことなくキレイにすばやくカットすることができました。ホームベーカリーで焼いたパンや、焼き立ての分厚いトースト、クロワッサンのカットなどに活躍します。<br />
          一般的なパン切り包丁と比べても、それほど高価ではありませんので、合わせておすすめいたします。
        </p>
        <v-container>
          <v-row class="mb-10">
            <v-col cols="12" sm="7">
              <v-img src="	https://shop.kitamura.jp/ts_rsc/1196/images/brd02.jpg" alt="EK700" max-width="543" max-height="320"></v-img>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="https://shop.kitamura.jp/ts_rsc/1196/images/brd01.jpg" max-width="251" max-height="251" class="mx-auto"></v-img>
              <v-btn block elevation="4" color="grey darken-1" height="48" href="/ec/pd/4536178910026" class="mt-5">
                <span class="white--text text-subtitle-1">販売終了</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓sns share -->
        <snsShare :title="'おすすめ高級トースター特集 2019'" />

        <!--↓一覧-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left">オーブントースター 一覧</h2>
        <div class="cl"></div>
        <product-list-by-special-id class="mb-5" :specialId="1420" />

        <!--↓おすすめ特集-->
        <h2 class="w-at mt-15 mb-5 tx-tya tx-no bb-or float-left">おすすめ特集・プリントサービス</h2>
        <div class="cl"></div>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import Urlcopy from '@/components/common/special/url-copy.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import Carousels from '@/components/common/special/carousels.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';
import SnsShare from '@/components/common/special/sns-share.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'toaster-oven',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    // orangeBtn: OrangeBtn,
    // carousels: Carousels,
    'product-list-by-special-id': ProductListBySpecialId,
    // shoppingCredit: ShoppingCredit,
    snsShare: SnsShare,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'おすすめ高級トースター特集 2019 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'もっと美味しくパンを食べたい方は必見☆高級トースターでトーストを食べ比べ♪おすすめ高級トースター特集');
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'おすすめ高級トースター特集 2019',
          disabled: true
        }
      ],
      naviList: [
        { name: 'トースターの種類・選び方', href: '#i00' },
        { name: '食べ比べした高級トースターの特徴', href: '#i01' },
        { name: '高級トースターの食べ比べ方法', href: '#i02' },
        { name: '食べ比べの結果発表', href: '#i03' },
        { name: '今回の食べ比べをして', href: '#i04' },
      ],
      //食べ比べした高級トースターの特徴リスト
      featuresOfLuxuryToasterList: [
        {
          isBackground: true,
          name: 'アラジン グラファイト グリル&トースター CAT-G13A（AGT-G13Aも同等機種です）',
          href: '/ec/list?narrow18=0&keyword=AGT-G13&category=&index=&searchbox=1&q=AGT-G13&path=',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/a01.jpg',
          rightImages: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/a02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/a03.jpg'],
          txt: '上部に遠赤グラファイトヒーターを使っているのが特徴です。もともと暖房のヒーターの技術だった遠赤グラファイトヒーターを転用しています。設定温度は100～280℃ですが、付属のグリルパンを使うと、最高温度330℃に達するオーブン料理も可能です。\n温度とタイマーだけのシンプル操作なので、直感的に使えますが、調理ごとに『何℃で何分焼くのか』を覚えるか調べるかしないといけないのが難点です。'
        },
        {
          isBackground: false,
          name: '象印 オーブントースター こんがり倶楽部 ET-GM30-BZ',
          href: '/ec/pd/4974305215000',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/z01.jpg',
          rightImages: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/z02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/z03.jpg'],
          txt: 'テレビ番組で「BALMUDAより美味しい？」と紹介され大ヒットしたトースターが象印のET-GM30です。今回比較したトースターで、最も多い5本のヒーターを搭載しています。\nマイコン制御を使ってさまざまなメニューを最適な温度で焼いてくれます。肝心のトーストは「サクふわトースト」メニューで焼きました。中温で焼く時間を設けて外側はサクッと、中はふんわり仕上がるのが特徴です。また焼き色の選択も可能です。そのせいでトーストに約4分半と時間がかかるのがネックです。\n代わりにタイマー設定可能な時間が最長30分と長めですので、調理の幅が広がります。'
        },
        {
          isBackground: true,
          name: 'siroca プレミアムオーブントースター すばやき ST-2A251（ST-4A251は4枚焼き）',
          href: '/ec/list?narrow18=0&keyword=ST-4A251&category=&index=&searchbox=1&q=ST-4A251&path=',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/si01.jpg',
          rightImages: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/si02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/si03.jpg'],
          txt: 'コンベクション機能を搭載しており、なんとわずか1分程度でトーストを焼き上げます。\n素早く焼くため、トーストの内部の水分が残り、美味しくいただけるのだそうです。\nコンベクションの有無もダイヤルで選択可能、温度とタイマーもダイヤル式なので、アラジンと同じく、最適な温度と時間を覚えないといけないのがマイナス点です。'
        },
        {
          isBackground: false,
          name: 'シャープ ウォーターオーブン専用機ヘルシオ グリエ AX-H2',
          href: '/ec/list?narrow18=0&keyword=AX-H2&category=&index=&searchbox=1&q=AX-H2&path=',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/s01.jpg',
          rightImages: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/s02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/s03.jpg'],
          txt: '唯一無二のウォーターオーブンです。上部に水を入れるタンクがあり、これを使った水蒸気をさらに熱した過熱水蒸気を使って焼くオーブンです。惣菜の温めや料理にも活躍するタイプで、油や塩分が気になる方におすすめのオーブンです。\n一方で過熱水蒸気パワーを3段階に選べるのですが、これらがいったい何℃になっているのか明示されていないので、一般的なレシピに書いてある温度設定を、どのパワーで達成できるのか判別できないのがフレンドリーではないポイントです。'
        },
        {
          isBackground: true,
          name: 'タイガー スチームコンベクションオーブン GRAND X やきたて KAX-X130',
          href: '/ec/pd/4904710421369',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/tg01.jpg',
          rightImages: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/tg02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/tg03.jpg'],
          txt: '20種類のオートメニューに70mlの大容量スチームコンベンションオーブン、焼き色調整に30分ロングタイマーと、機能てんこ盛りのオーブントースターです。\n最高設定温度は250℃と、やや低いものの、多機能なのにオートメニューで簡単という便利さが備わった1台です。\n本体サイズが今回の6機種の中で一番大きいので、その点は要注意です。'
        },
        {
          isBackground: false,
          name: 'パナソニック コンパクトオーブン NB-DT51',
          href: '/ec/pd/4549077887047',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/p01.jpg',
          rightImages: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/p02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/p03.jpg'],
          txt: '遠赤外線だけではなく近赤外線で、食材の内側も温める「遠近赤外線ダブル加熱」が特徴です。\nオートメニューも7つあります。「ドライ機能」を使えば、湿気ってしまったスナック菓子やせんべい、焼海苔（味海苔はダメ）を、パリッと復活させられるのもポイントです。\n本体が小さいので、ピザなど大きいものを焼くのは苦手です。'
        },
      ],
      //食べ比べの結果発表♪リスト
      resultAnnouncementList: [
        {
          isBackground: false,
          name: 'アラジン グラファイト グリル&トースター CAT-G13A（AGT-G13Aも同等機種です）',
          href: '/ec/list?narrow18=0&keyword=AGT-G13&category=&index=&searchbox=1&q=AGT-G13&path=',
          productImage: 'https://shopimg.kitamura.jp/images/pd/d9b/9be/5b2/822/a06/f6b/f73/8d2/530/33f/dbg/uep/9bz/x/L.jpg',
          fivePointsOutOfFiveList: { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/kk01.png', crispy: 4, soft: 6, delicious: 12 },
          txt: '評価項目には入っていませんが、「見た目がかわいい」との声が多数。\nキッチンではなくダイニングに置いておいてもよさそうですよね。'
        },
        {
          isBackground: true,
          name: '象印 オーブントースター こんがり倶楽部 ET-GM30-BZ（AGT-G13Aも同等機種です）',
          href: '/ec/pd/4974305215000',
          productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/ET-GM30.jpg',
          fivePointsOutOfFiveList: { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/kk02.png', crispy: 12, soft: 8, delicious: 12 },
          txt: '記事執筆段階の当店販売価格が、一番お求めやすいにもかかわらず「美味しい」の平均点はトップでした。\n表面がサクサクで、中がしっとりという意見が多かったです。'
        },
        {
          isBackground: false,
          name: 'siroca プレミアムオーブントースター すばやき ST-2A251（ST-4A251は4枚焼き）',
          href: '/ec/list?narrow18=0&keyword=ST-4A251&category=&index=&searchbox=1&q=ST-4A251&path=',
          productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/ST-4A251.jpg',
          fivePointsOutOfFiveList: { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/kk03.png', crispy: 10, soft: 7, delicious: 12 },
          txt: 'やはり焼き上げまでのスピードに驚いていました。\n全体のバランスがいいという意見がありました。'
        },
        {
          isBackground: true,
          name: 'シャープ ウォーターオーブン専用機ヘルシオ グリエ AX-H2',
          href: '/ec/list?narrow18=0&keyword=AX-H2&category=&index=&searchbox=1&q=AX-H2&path=',
          productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/AX-H2.jpg',
          fivePointsOutOfFiveList: { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/kk04.png', crispy: 6, soft: 11, delicious: 12 },
          txt: '1番ふっくら・もっちり焼き上がっていたという回答が多数でした。\n水で焼く効果でしょうか？ 甘さを感じたという意見もありました。'
        },
        {
          isBackground: false,
          name: 'タイガー スチームコンベクションオーブン GRAND X やきたて KAX-X130',
          href: '/ec/pd/4904710421369',
          productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/KAX-X130.jpg',
          fivePointsOutOfFiveList: { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/kk05.png', crispy: 27, soft: 2, delicious: 10 },
          txt: '圧倒的なサクサク評価！\n表面がパリッと焼けていたのが、はっきりわかる焼き上がりでした。'
        },
        {
          isBackground: true,
          name: 'パナソニック コンパクトオーブン NB-DT51',
          href: '/ec/pd/4549077887047',
          productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/NB-DT51.jpg',
          fivePointsOutOfFiveList: { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/toaster-oven/kk06.png', crispy: 13, soft: 15, delicious: 16 },
          txt: '『ふんわり』と『美味しい』の最高評価を、最も集めたのがパナソニック。以前に<a href="/ec/special/kaden/rice-cooker_bestbuy">炊飯器特集</a>で、食べ比べをしたときもそうでしたが、パナソニック製品は好き嫌いがわかれますね…。<br />ポテトチップスの「ドライ」モードを使ったリベイクも試食しましたが、温かいポテトチップスって、すっごく美味しいですね！'
        },
      ],
      recommendedFeaturesList: [
        {
          href: "/ec/special/kaden/rice-cooker_bestbuy",
          img: "https://shop.kitamura.jp/images/banner/2401.jpg",
          alt: "おすすめ炊飯器特集",
        },
        {
          href: '/ec/special/kaden/bottle',
          img: 'https://shop.kitamura.jp/images/banner/1921.gif',
          alt: 'おすすめの水筒・ステンレスボトルを集めました'
        },
        {
          href: "/ec/special/kaden/bento",
          img: "https://shop.kitamura.jp/images/banner/3807.jpg",
          alt: "お弁当生活におすすめ商品",
        },
        {
          href: "/ec/special/kaden/home-party",
          img: "https://shop.kitamura.jp/images/banner/3770.gif",
          alt: "キッチン家電特集",
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ]
    });

    const linkToOtherWindow = (url: string | undefined) => {
      window.open(url, '_blank');
    };

    return {
      ...toRefs(state),
      noimage,
      linkToOtherWindow
    };
  }
});
</script>

<style lang="scss" scoped>
.toaseter-oven {
  p {
    line-height: 1.8em !important;
    letter-spacing: 0.04em;
    font-size: 16px;
  }
  h2 {
    font-size: 150%;
    padding: 0;
    text-align: left;
    text-indent: 1.3em;
    line-height: 1em;
    letter-spacing: 0.1em;
  }
  .tx-tya {
    color: #7c4100;
  }
  .tx-no {
    font-weight: normal !important;
    text-decoration: none;
  }
  .bb-or {
    border-bottom: 2px solid #f99c1b;
  }
  .w-at {
    width: auto;
  }
  .cl {
    clear: both;
  }
  .tx-usdi {
    color: #ffc668;
  }
  ul.mokuj li {
    position: relative;
    list-style-type: none !important;
    box-sizing: border-box;
    margin-bottom: 16px;
    line-height: 1.2em;
    font-size: 19px;
    font-weight: 400;
    a {
      color: #7c4100;
    }
  }
  .va-m,
  .v-am {
    vertical-align: middle;
  }
  .bb-mm {
    border-right: 1px dashed #f9727b;
  }
  @media screen and (max-width: 549px) {
    .bb-mm {
      border-bottom: 1px dashed #f9727b;
      border-right: none;
    }
  }
}
</style>


