<template>
  <v-app>
    <div class="rice-cooker-bestbuy">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy :color="'#E16525'" />

        <v-img src="/ec/images2/special/kaden/rice-cooker_bestbuy/001.jpg" max-width="950" max-height="400"></v-img>
        <p class="text-center font-weight-bold mt-1 text-h6">炊飯器特集</p>
        <p class="mt-2 mb-0 pa-4 line-height">
          炊飯器はとにかく種類が多く、どれを選べばいいのか分かり辛い家電です。<br />
          今年のキタムラ炊飯器特集は、普段１万円台の炊飯器を使っている５名が３～５万円の炊飯器で炊いたご飯を食べ比べて本音のレビューをします！
        </p>

        <!--↓炊飯器-->
        <v-sheet class="suihan mb-15 px-2" color="#f9f3ee">
          <div class="pa-4">
            <tableOfContentsNavi :naviList="naviList" :title="'目次'" />
          </div>
          <v-sheet class="mt-10 pa-4" color="#ffffff">
            <div id="i00"></div>
            <h2 class="my-5 tx-kenj ttle text-h6"><span class="mb-1 tx-kenj text-body-2">【ガイド】</span><br />炊飯器の種類・選び方</h2>
            <p class="mt-5 pd-1">
              炊飯器の価格差・モデル差は何によるかというと、大まかにはこの3つです。<br /><br />
              1.「熱伝導の良い釜が使われている」<br />
              2.「炊飯時の熱対流がいい」<br />
              3.「細かい温度コントロールがプリセットされた炊飯メニューがある」<br /><br />
              分厚く熱伝導効率にいい釜で、お米が対流する機能があり、豊富な炊飯メニューがあるものが上位機種になっています。<br />
              店頭で炊飯器を触る機会があれば、まず釜をチェックしましょう。<br /><br />
              大きな分類として「マイコン式」「IH」「圧力IH」の3つがあります。<br />
              IHと圧力IHは好みの問題があるので、必ずしも圧力IHのほうがいいわけではありませんが、マイコン式とIHには超えられない大きな壁がありますので、美味しくご飯を食べたいのであれば、マイコン式は避けましょう。
            </p>

            <!--↓1-->
            <h3 class="mb-1 font-weight-bold">1.炊飯器の種類は、火力･温め方に違いあり</h3>
            <p>
              「火力が強いと、美味しく炊ける」と聞いたことはないでしょうか？<br />
              その理由は、強い火力で、すばやく沸騰させることで、うまみ成分を米の中に閉じ込めるからなのです。<br />
              さらに、高温で内釜の中に激しい対流をおこし、米1粒1粒をムラなく芯まで加熱させると、うまみと甘みが増した、ふっくらとしたご飯が炊きあがります。
            </p>
            <h4 class="mt-7 mb-2 font-weight-bold text-h6">■炊飯器の種類</h4>
            <v-sheet color="#FBF2E9">
              <v-container class="pa-2">
                <v-row>
                  <v-col cols="12" sm="4" v-for="(typeRiceCooker, index) in typeRiceCookerList" :key="index">
                    <v-row dense>
                      <v-col cols="12" sm="7">
                        <h5 class="bb-tya text-body-1 font-weight-bold">{{ typeRiceCooker.subtitle }}</h5>
                        <p class="mt-2 mb-0">{{ typeRiceCooker.txt }}</p>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <v-img
                          :src="typeRiceCooker.src"
                          :max-width="index === 0 ? '95' : '111'"
                          :max-height="index === 0 ? '150' : '139'"
                          class="mx-auto"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>

            <!--↓2-->
            <h3 class="mt-10 mb-1 font-weight-bold">2.内釜は炊きあがりを左右する重要ポイント</h3>
            <p>
              内釜は炊きあがりを左右する、炊飯器選びで重要なポイントです。<br />
              素材ごとの特徴を知り、自分の好みに近い炊きあがりになる内釜を選びましょう。<br />
              内釜の種類は多様ですので、代表的な内釜の構造・素材をご説明します。<br />
            </p>
            <h4 class="mt-7 mb-2 font-weight-bold text-h6">■内釜の構造</h4>
            <v-sheet color="#FBF2E9">
              <v-container class="pa-2">
                <v-row>
                  <v-col cols="12" sm="4" v-for="(innerPotStructure, index) in innerPotStructureList" :key="index">
                    <v-row dense>
                      <v-col cols="12" sm="7">
                        <h5 class="bb-tya text-body-1 font-weight-bold">{{ innerPotStructure.subtitle }}</h5>
                        <p class="mt-2 mb-0">{{ innerPotStructure.txt }}</p>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <v-img :src="innerPotStructure.src" max-width="111" :max-height="index === 2 ? '134' : '120'" class="mx-auto"></v-img>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>

            <h4 class="mt-7 mb-2 font-weight-bold text-h6">■内釜の素材</h4>
            <v-container class="pa-0">
              <v-sheet color="#FBF2E9" class="mb-2" v-for="(materialInnerPot, index) in materialInnerPotList" :key="index">
                <v-row no-gutters>
                  <v-col cols="12" sm="3">
                    <v-card flat img="/ec/images2/special/kaden/rice-cooker_bestbuy/suihanki_bg.jpg">
                      <v-img :src="materialInnerPot.materialImage" max-width="150" height="auto" class="mx-auto"></v-img>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <p class="pt-3 pl-2 tx-14 mb-0 lin14" v-html="materialInnerPot.txt"></p>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-container>
          </v-sheet>

          <div class="mt-15" id="i01"></div>
          <div class="pa-4">
            <h2 class="mb-5 tx-kenj ttle text-h6"><span class="mb-1 tx-kenj text-body-2">【レビュー】</span>炊飯器 食べ比べ エントリーはこの3機種</h2>
            <v-img src="/ec/images2/special/kaden/rice-cooker_bestbuy/002.jpg" max-width="904" max-height="381" alt="炊飯器 3機種"></v-img>
            <p class="mb-0 mt-2">
              今回食べ比べで使う炊飯器は国内シェアが高い 象印マホービン・タイガー魔法瓶・パナソニック
              の3社から、最上位機種ではないけれども高性能な炊飯器をチョイスしました。
            </p>

            <!--↓エントリーNo.1,エントリーNo.2,エントリーNo.3-->
            <div v-for="(eatAndCompare, index) in eatAndCompareList" :key="index">
              <h3 class="mt-15 tx-22 li-h19">
                <a :href="eatAndCompare.href" class="tx-kmo"
                  ><span class="bo-mom pd-2">{{ 'エントリーNo.' + (index + 1) }}</span
                  ><br />{{ eatAndCompare.title }}</a
                >
              </h3>
              <v-container>
                <v-row dense>
                  <v-col cols="12" sm="6" v-for="(image, i) in eatAndCompare.images" :key="i">
                    <v-img :src="image" max-width="427" max-height="427"></v-img>
                  </v-col>
                </v-row>
              </v-container>
              <p class="mt-2 including-line-breaks">{{ eatAndCompare.txt }}</p>
              <div :class="$vuetify.breakpoint.mdAndUp ? 'w50pr' : ''">
                <v-hover v-slot="{ hover }">
                  <v-btn block :elevation="hover ? 0 : 4" :color="hover ? '#E48F5D' : '#573D2C'" height="47" :href="eatAndCompare.href">
                    <span class="white--text text-body-1">商品詳細を見る<v-icon right small>fas fa-chevron-right</v-icon></span>
                  </v-btn>
                </v-hover>
              </div>
            </div>
          </div>

          <div class="mt-15" id="i02">
            <v-sheet class="pa-4" color="#ffffff">
              <h2 class="mb-5 tx-kenj ttle text-h6"><span class="mb-1 tx-kenj text-body-2">【実食比較】</span><br />炊飯器で実際に炊いて食べてみました</h2>
              <v-img
                src="/ec/images2/special/kaden/rice-cooker_bestbuy/003.jpg"
                max-width="904"
                max-height="381"
                alt="炊飯器 実際に炊いて食べてみました"
              ></v-img>
              <p class="mt-5 mb-0 pd-1 text-h6 font-weight-bold">【調査方法】</p>
              <p class="mt-2 pd-1">
                今回つかったお米は、銀の朏（みかづき）。<br />
                それぞれの炊飯器で炊いたご飯の、旨味・香り・食感・甘みをチェックしていきます。<br />
                味の優劣がわかりやすいように、マイコン炊飯器でも、同じお米を炊きました。
              </p>
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-img src="/ec/images2/special/kaden/rice-cooker_bestbuy/ee01.jpg" max-width="452" max-height="452"></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img src="/ec/images2/special/kaden/rice-cooker_bestbuy/ee02.jpg" max-width="452" max-height="452"></v-img>
                </v-col>
              </v-row>
              <p class="pa-1 mb-2">※お水・洗米手順は全て同じ、計量は各社付属の計量カップを使いました</p>
              <p class="mt-5 mb-0 pd-1 text-h6 font-weight-bold">【食べ比べレビュー】</p>

              <div v-for="(eatAndCompareReview, index) in eatAndCompareReviewList" :key="index">
                <h3 class="mt-10 tx-22 li-h19">
                  <a :href="eatAndCompareReview.href" class="tx-kmo">{{ eatAndCompareReview.title }}</a>
                </h3>
                <v-container>
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-img :src="eatAndCompareReview.src" max-width="442" max-height="442"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <p class="pa-2 including-line-breaks mb-0">{{ eatAndCompareReview.txt }}</p>
                    </v-col>
                  </v-row>
                </v-container>
                <div :class="$vuetify.breakpoint.mdAndUp ? 'w50pr' : ''">
                  <v-hover v-slot="{ hover }">
                    <v-btn block :elevation="hover ? 0 : 4" :color="hover ? '#E48F5D' : '#573D2C'" height="47" :href="eatAndCompareReview.href">
                      <span class="white--text text-body-1">商品詳細を見る<v-icon right small>fas fa-chevron-right</v-icon></span>
                    </v-btn>
                  </v-hover>
                </div>
              </div>
            </v-sheet>
          </div>

          <div id="i03" class="pa-4">
            <h2 class="mb-5 tx-kenj ttle text-h6"><span class="mb-1 tx-kenj text-body-2">【まとめ】</span><br />美味しい炊飯器の選びには</h2>
            <v-img src="/ec/images2/special/kaden/rice-cooker_bestbuy/004.jpg" max-width="904" max-height="381" alt="美味しい炊飯器の選びには"></v-img>
            <p class="mb-5 pa-2">
              ネット上でいろんな炊飯器の口コミやレビューは見ても、実際に食べ比べた方はほとんどいないのではないでしょうか。<br />
              食べ比べ用にマイコン炊飯器でもお米を炊いたのですが、マイコン炊飯器とスペックの高い炊飯器では炊きあがりの見た目から全く別物でした。<br />
              マイコン炊飯器で炊いたご飯、はベチャッと潰れていて旨味もあまり感じられずせっかくの新米の美味しさを損なってしまいました。<br />
              やはりちょっとスペックアップした炊飯器は良いものだなと実感しました。<br /><br />
              レンジ炊飯や炊飯できる弁当箱もヒットしていますが「お米が炊けること」と「お米をより美味しく炊くこと」は違います。<br />
              今回紹介したスペックの高い炊飯器は、炊飯工程でお米がより美味しく炊けるような制御を行っています。<br /><br />
              この特集があなたの炊飯器選びの一助になれば幸いです。
            </p>
            <v-row justify="end">
              <v-col cols="12" sm="6">
                <p class="mb-0"><v-icon left small color="black">fas fa-camera</v-icon>撮影に使ったカメラ＆レンズ</p>
                <p class="mb-0">
                  <v-icon left x-small color="black">fas fa-caret-right</v-icon>カメラ :
                  <a
                    href="/ec/list?keyword=4547410325287&category=ミラーレス一眼%3Aメーカーで選ぶ%3Aフジフイルム&narrow2=&type=u&q=4547410325287&f%5B%5D=k3&ct=C002001007"
                    >フジフイルム X-T2</a
                  >
                </p>
                <p class="mb-0">
                  <v-icon left x-small color="black">fas fa-caret-right</v-icon>レンズ :
                  <router-link to="/ec/pd/4547410206159">フジフイルム XF35mm F1.4 R</router-link>
                </p>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-10">
              <v-col cols="12" sm="10" class="pa-2 ba-gr">
                <v-row no-gutters>
                  <v-col cols="12" sm="6">
                    <p>
                      <v-icon small left color="black">far fa-hand-point-right</v-icon
                      >さらに美味しくご飯を食べたい方は精米から見直すのがおすすめ！<br /><br />家庭用精米機の選び方教えます！
                    </p>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <a href="/ec/special/kaden/ricemill">
                      <v-img
                        src="https://shop.kitamura.jp/images/banner/5814.jpg"
                        max-width="350"
                        max-height="130"
                        alt="おすすめ精米機特集"
                        class="hover"
                      ></v-img>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>

          <!--↓おすすめ炊飯器一覧-->
          <div class="mt-5" id="i04"></div>
          <v-sheet class="pa-4" color="#ffffff">
            <h2 class="mb-5 tx-kenj ttle text-h6">おすすめ炊飯器一覧</h2>
            <product-list-by-special-id class="mb-5" :specialId="1262" />
            <div class="my-7">
              <h3 class="text-body-1 mb-5 tx-kenj lef li-h12">
                <v-icon small left color="#660000">far fa-thumbs-up</v-icon> 人気・おすすめメーカーの炊飯器 商品一覧を見る
              </h3>
              <v-row dense>
                <v-col cols="12" sm="4" v-for="(btn, index) in recommendedRiceCookerList" :key="index">
                  <v-btn block color="#885A31" elevation="4" :href="btn.href" height="48" class="hover">
                    <span class="white--text">{{ btn.name }}<v-icon right small>fas fa-chevron-right</v-icon></span>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-sheet>

          <!--↓ショッピングクレジット-->
          <div class="pa-4">
            <h4 class="mb-2 text-h6">
              <span class="tx-14 mb-1">炊飯器を買うなら お支払いラクラク♪</span><br /><v-icon left color="black">fas fa-shopping-cart</v-icon
              >ショッピングクレジット
            </h4>
            <shoppingCredit :installmentPaymentExampleList="installmentPaymentExampleList" :isTitle="false" />
          </div>

          <snsShare :title="'おすすめ炊飯器特集'" />

          <!--↓おすすめ特集・プリントサービス-->
          <div class="mt-10 mb-2">
            <h2 class="text-h6 mb-5">◎おすすめ特集・プリントサービス</h2>
            <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
          </div>
        </v-sheet>
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
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ShoppingCredit from '@/components/common/special/shopping-credit.vue';
import SnsShare from '@/components/common/special/sns-share.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'rice-cooker-bestbuy',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    tableOfContentsNavi: TableOfContentsNavi,
    'product-list-by-special-id': ProductListBySpecialId,
    shoppingCredit: ShoppingCredit,
    snsShare: SnsShare,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = 'おすすめ炊飯器特集 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '人気の炊飯器メーカー 象印、タイガー、パナソニック が推薦する、おすすめの炊飯器を使って炊いたご飯を、実際に食べ比べました | おすすめ炊飯器特集'
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
          path: '人気炊飯器 比較 おすすめ炊飯器特集',
          disabled: true
        }
      ],
      naviList: [
        { naviItem: '【ガイド】炊飯器の種類・選び方', href: '#i00' },
        { naviItem: '【レビュー】炊飯器 食べ比べ エントリーはこの3機種', href: '#i01' },
        { naviItem: '【実食比較】炊飯器で実際に炊いて食べてみました', href: '#i02' },
        { naviItem: '【まとめ】美味しい炊飯器の選びには', href: '#i03' }
      ],
      typeRiceCookerList: [
        { subtitle: 'マイコン炊飯器', txt: 'マイコン炊飯器はヒーターで釜の底から温める方式です。IH炊飯器に比べ、火力は弱めです。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso01.jpg' },
        { subtitle: 'IH炊飯器', txt: 'IH炊飯器は、内釜全体を直接発熱するため、高火力で炊きムラになりにくい炊飯器です。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso02.jpg' },
        { subtitle: '圧力IH炊飯器', txt: 'IH炊飯器にさらに圧力機構を加え、水の沸点が上昇。炊飯時間が短く、米の芯まで温めます。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso03.jpg' },
      ],
      innerPotStructureList: [
        { subtitle: '厚釜', txt: '内釜を厚くすることで内釜に蓄えられた熱が、お米を包み込むように炊きます。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/bk-km01.jpg' },
        { subtitle: '多層釜', txt: '熱伝導率の高い素材を、何層にも重ね、熱がお米に伝わりやすくなっています。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/bk-km02.jpg' },
        { subtitle: '真空釜', txt: '真空層を持つことで、熱を逃がしにくい構造。内釜が軽いのが特徴です。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/bk-km03.jpg' },
      ],
      materialInnerPotList: [
        { materialImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso07.jpg', txt: '鉄やステンレスより、熱伝導率のいい素材のため、多層釜にも銅がよく用いられています。' },
        { materialImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso08.jpg', txt: '炭は、熱伝導率が高く、遠赤外線効果が強い素材。それにより、短時間でムラのない加熱を実現。<br>また、お米が持つ甘みが引き出されたご飯に炊き上げます。(<a href="/ec/list?narrow18=0&keyword=本炭釜&category=&fmt=json&limit=20&n20c=完了商品は除く&q=本炭釜&s19%5B%5D=1&sort=number20,Number17,Score&style=0&index=all">三菱電機：本炭釜</a>など)' },
        { materialImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso09.jpg', txt: '土鍋は熱を蓄える力があり、遠赤効果も備わっています。時間をかけて熱を伝え、冷めにくいというのが、土鍋の特長。それを生かした高い蒸らし効果で、ふっくらとした炊きあがりになります。<br>(<a href="/ec/list?narrow18=0&keyword=本土鍋&category=&fmt=json&limit=20&n20c=完了商品は除く&q=本土鍋&s19%5B%5D=1&sort=number20,Number17,Score&style=0&index=all">タイガー：本土鍋</a>など)' },
        { materialImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso010.jpg', txt: '内釜がダイヤモンドの微粒子でコーティグされている釜です。銅釜と比較すると、ダイヤモンドは約7700倍の熱効率。熱量を増やすことで、旨みのあるご飯が生まれます。(<a href="/ec/list?narrow18=0&keyword=鍛造かまど&category=&index=&searchbox=1&sort=number20,Number17,Score&q=鍛造かまど&path=&n20c=完了商品は除く">東芝：鍛造かまど釜</a>、<a href="/ec/list?narrow18=0&keyword=ダイヤモンド&category=キッチン%2F調理家電%3A炊飯器&fmt=json&limit=20&n20c=完了商品は除く&path=キッチン%2F調理家電%3A炊飯器&q=ダイヤモンド&s1%5B%5D=パナソニック&s19%5B%5D=1&sort=number20,Number17,Score&style=0&index=all">パナソニック：ダイヤモンド銅釜</a>など)' },
        { materialImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/kiso011.jpg', txt: '鉄釜は発熱性に優れています。約2000度の高温で打ち込む「打ち込み鉄釜」により、蓄熱性や断熱性もアップ。高温スチームは温度ムラを抑え、ムラのない炊きあがりになります。(<a href="/ec/list?narrow18=0&keyword=豪炎かまど釜&category=&index=&searchbox=1&sort=number20,Number17,Score&q=豪炎かまど釜&path=&n20c=完了商品は除く">象印：豪炎かまど釜</a>など)' },
      ],
      eatAndCompareList: [
        { title: '象印 圧力IH炊飯器 極め炊き 豪炎かまど釜 NW-JW10', href: '/ec/pd/4974305218643', images: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/zo01.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/zo02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/zo03.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/zo04.jpg'], txt: '象印マホービンのフラッグシップモデル「炎舞炊き」に続く上位モデルがNW-JW10です。\n豊富な炊き分け機能があるので、お好みの固さやねばりを追い込める炊飯器です。\n20年度モデルから『麦ごはんモード』にも対応しています。' },
        { title: 'タイガー 圧力IH炊飯器 炊きたて ご泡火炊き JPI-A100', href: '/ec/pd/4904710430996', images: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ta01.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ta02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ta03.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ta04.jpg'], txt: 'タイガー魔法瓶といえば「土鍋」のイメージですが、土鍋ではなく土鍋コーティングの炊飯器の中で最も高機能なのがJPI-A100です。\n極うまモードや少量高速炊きモード、冷凍ご飯モードなど、土鍋タイプにはない炊飯モードを搭載しています。' },
        { title: 'パナソニック スチームIH炊飯器 大火力おどり炊き SR-STS100', href: '/ec/pd/4549980636541', images: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/pa01.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/pa02.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/pa03.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/pa04.jpg'], txt: '今回唯一のIH炊飯器。\n圧力とWおどり炊きではないけれど、最上位機種に備わっている220℃スチームが搭載されています。\n高温のスチームで、お米の表面をおねばでコーティングし、旨味を閉じ込めます。' },
      ],
      eatAndCompareReviewList: [
        { title: '象印 圧力IH炊飯器 極め炊き 豪炎かまど釜 NW-JW10', href: '/ec/pd/4974305218643', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ee04.jpg', txt: 'シャッキリと炊けていて、ご飯つぶの存在感が強いです。\n甘みは適量でした。\nご飯の味が濃いです。普段食べている白米よりも、数段上の味わいを感じます。納得の仕上がりです。\n\n味とは別に、洗い物が少ないのも利点です。\n内蓋を外して洗うだけなので、毎日の家事を増やさない、いい炊飯器だなと感じました。\n\nNW-JW10の最大の魅力は「炊き分け」の機能です。\nもう少し硬いほうがいい、カレーに合うように炊きたい、そういった好みに応じた設定ができますから、どれを買ったらいいかわからない、という場合なら選択肢の筆頭です。' },
        { title: 'タイガー 圧力IH炊飯器 炊きたて ご泡火炊き JPI-A100', href: '/ec/pd/4904710430996', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ee05.jpg', txt: 'ご飯つぶの１粒１粒を感じる食感の炊きあがりでした。\n甘みはやや少なめで、非常にさっぱりとした味わいでした。\n\n参加者が口をそろえて言ったのが「おかずに合う！」ということ。\n塩味の濃いおかずの受け皿として、優れたご飯を炊いてくれました。\n\n一般的に炊飯器は炊飯最大容量の７割程度で炊くと美味しいと言われていて、5合炊きなら3合が目安です。\n一方でJPI-A100は、少量でも美味しく炊けるようコントロールされた「少量旨火炊き」がありますので、１回の炊飯量が少ない方にも、おすすめの炊飯器です。\n見た目のデザインもミニマルでとてもいいのですが、「取っ手」がついていないので、食卓まで炊飯器を運ぶ習慣がある方はご注意を。' },
        { title: 'パナソニック スチームIH炊飯器 大火力おどり炊き SR-STS100', href: '/ec/pd/4549980636541', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/rice-cooker_bestbuy/ee06.jpg', txt: '炊きあがりを見ると、ひと目で違いがわかります。圧倒的なツヤ感です。これがスチームのチカラ。\n口に含むと非常に甘い。今回の3機種の中では、一番お米の甘みを引き出しているように感じました。\n\n圧力炊飯器ではないので、食感はやや柔らかいものの、スチームでコーティングされたお米の粒立ちは充分に感じました。\n\nパナソニックの炊飯器のラインナップの中では、MPシリーズの影に隠れてあまり目立ちませんが、加熱方式・内釜・220℃スチームの機能と、実はかなりの高スペックモデルです。\nその分、炊飯メニューの種類は少ないので、白米をメインに炊く方におすすめです。' },
      ],
      recommendedRiceCookerList: [
        { name: '象印 炊飯器', href: '/ec/list?narrow18=0&keyword=&category=キッチン%2F調理家電%3A炊飯器&s1%5B%5D=象印&path=キッチン%2F調理家電%3A炊飯器&n20c=完了商品は除く' },
        { name: 'タイガー 炊飯器', href: '/ec/list?narrow18=0&keyword=&category=キッチン%2F調理家電%3A炊飯器&n20c=完了商品は除く&sort=number20,Number16,Score&s1%5B%5D=タイガー&path=キッチン%2F調理家電%3A炊飯器' },
        { name: 'パナソニック炊飯器', href: '/ec/list?narrow18=0&keyword=&category=キッチン%2F調理家電%3A炊飯器&path=キッチン%2F調理家電%3A炊飯器&n20c=完了商品は除く&s1%5B%5D=パナソニック&limit=40' },
      ],
      // ↓ ---- ショッピングクレジット ----
      installmentPaymentExampleList: [
        { productPrice: '55,000', numberOfDivisions: '15', monthlyPayment: '3,667' },
        { productPrice: '65,780', numberOfDivisions: '20', monthlyPayment: '3,289' },
      ],
      recommendedFeaturesList: [
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
          href: "/ec/special/kaden/toaster-oven",
          img: "https://shop.kitamura.jp/images/banner/6374.jpg",
          alt: "おすすめ高級トースター特集",
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
      ],
    });
    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.suihan p {
  line-height: 1.9em;
  font-size: 16px;
}
.suihan .ttle {
  border-bottom: 1px solid #600;
  border-left: 6px solid #600;
  color: #600;
  padding: 0.25em 0 0.5em 0.75em;
  box-sizing: border-box;
  font-weight: normal;
  line-height: 1.4em;
}
.tx-kenj {
  color: #660000;
  border-bottom: 2px solid #660000;
}
.bb-tya {
  border-bottom: 1px dashed #897f76;
}
.tx-14 {
  font-size: 14px !important;
}
.tx-22 {
  font-size: 22px !important;
}
.lin14 {
  line-height: 1.4em !important;
}
.li-h19 {
  line-height: 1.9em;
}
.tx-kmo {
  color: #cc4956 !important;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
.bo-mom {
  border: 1px solid #cf5965;
  box-sizing: border-box;
}
.w50pr {
  width: 50%;
  margin: 0 auto;
}
.ba-gr {
  border: #626262 dashed 1px;
}
.li-h12 {
  line-height: 1.2em;
}
.ls-08 {
  letter-spacing: 0.08em;
}
@media screen and (max-width: 655px) {
  .main-contents-wrap {
    max-width: 950px;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
