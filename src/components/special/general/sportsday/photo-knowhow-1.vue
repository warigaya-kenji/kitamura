<template>
  <v-app>
    <div class="sportsday">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <v-container class="bk-pg text-subtitle-2">
          <!-- ↓top image -->
          <topTitleImg
            :pcBackgroundImg="'https://shop.kitamura.jp/ts_rsc/505/images/topimage_04.png'"
            :spBackgroundImg="'https://shop.kitamura.jp/ts_rsc/505/images/topimage_04.png'"
            :type="2"
            :height="'190px'"
          />
          <!-- ↑top image -->
          <h1 class="mb-4">運動会の撮影のコツ・撮影ポイント</h1>
          <p>
            運動会の撮影は事前準備が大切です！<br />
            お子さまが運動会の練習があるように お父さん・お母さんも本番前に撮影の練習をしましょう。<br />
            運動会が終わったあとステキな写真アルバムができるように 運動会ならではの撮影のコツと撮影のポイントをお伝えいたします。 ぜひ参考にしてください
          </p>
          <div class="of-h h40">
            <img src="https://shop.kitamura.jp/ts_rsc/505/images/tuna2.gif" alt="プログラム" width="auto" min-height="40px" />
          </div>
          <div class="nav">
            <ul class="nl">
              <li id="li01">
                <a href="https://shop.kitamura.jp/ec/special/general/sportsday">運動会におすすめカメラ<span class="en">ビデオ・高倍率デジカメ</span></a>
              </li>
              <li id="li02">
                <a href="https://shop.kitamura.jp/ec/special/general/sportsday/photo-knowhow-1">撮影のコツ・機材お手入れ <span class="en">HOW TO</span></a>
              </li>
              <li id="li03">
                <a href="http://www.kitamura-print.com/special/sportsday/">写真の残し方 <span class="en">プリント・ビデオダビング</span></a>
              </li>
              <li id="li04">
                <a href="http://photobook.kitamura.jp/special/sportsday/">写真のまとめ方<span class="en">フォトブック・アルバム</span></a>
              </li>
            </ul>
          </div>
          <div style="clear: both"></div>
          <div class="of-h mb-5">
            <img src="https://shop.kitamura.jp/ts_rsc/505/images/tuna.gif" alt="プログラム" width="auto" min-height="35px" />
          </div>

          <!-- ↓運動会におすすめビデオ・一眼レフ・レンズ・デジタルカメラはコレ -->
          <h2 class="line-height">撮影のコツ：運動会プログラムの確認しっかりとするべし</h2>
          <p class="mt-2">お子さまと一緒に運動会のプログラムをよくチェックする！ これが、運動会の撮影をスムーズにするための必勝法</p>
          <v-card
            flat
            img="https://shop.kitamura.jp/ts_rsc/505/images/bg_balloon_point.gif"
            :height="$vuetify.breakpoint.mdAndUp ? 194 : 380"
            :class="$vuetify.breakpoint.mdAndUp ? 'balloon3point' : 'pa-2'"
          >
            <h3>一番のキモは運動会の【プログラム表】を理解すること！</h3>
            <p class="mb-0">お子さんが、運動会のプログラムをもらってきたら、まず確認！</p>
            <h3>どの競技に出場するのか？ 何コースの何番目に走るのか？</h3>
            <h3 class="mt-2">団体競技は、どのポジションでどの方向を向いて演技するのか？</h3>
            <p>
              そして、<span class="important">お子さんに一番撮って欲しいところを聞く。</span>←コレ重要！<br />
              親子のコミニュケーションをしっかりと取って、お子さんからヒアリングした内容をプログラムに書き込みます
            </p>
          </v-card>
          <h4>運動会プログラム表に書き込む項目はコレ</h4>
          <p>
            ・徒競走は、何番目の何コースで走るか書き込む！ ほかのお子さんで事前に撮影練習！<br />
            ・団体競技は、どこのポジションでどの方向を向いて演技するか書き込む！<br />
            ・ダンス競技は、どの位置で、どの方向に向いているかを、事前にお子さんとチェックしましょう。<br />
            <span class="important">運動会のプログラムをよくチェックする！ これが、運動会の撮影をスムーズにするための必勝法です！</span>
          </p>
          <v-img
            src="https://shop.kitamura.jp/ts_rsc/505/images/img_program.jpg"
            max-width="250"
            max-height="200"
            :class="$vuetify.breakpoint.mdAndUp ? 'ml-auto' : 'mx-auto'"
          ></v-img>

          <!-- 2カラムコンテンツ -->
          <h4>場所を確保するために、早起きして学校へ行きましょう！</h4>
          <p>
            学校によって、場所取りのルールがいろいろあるので、そこはルールを守って場所を確保しましょう。<br />
            また、ブルーシートは風で飛ばされないように、ペグでしっかり固定をしておきましょう。<br />
            サカは運動会の際には、必ずお友達のパパとグループを作って、場所取りも余裕をもって対応してました。<br />
            <br />
            １人よりも２人、２人よりも３人。パパさんチーム作戦がオススメ！
            場所が確保できたら、運動会開始までは、きっとかなり時間があると思うので、事前に運動会の準備風景や、入退場門、競技の小物などを
            撮影しておくと、のちほど運動会の思い出をプリントするときに大活躍します
          </p>
          <br />
          <br />
          <h2>撮影のコツ：各競技撮影ポジションと撮影アングルをおさえよう！</h2>
          <p class="mt-2">
            お友達とポジションを分けて撮影すると、いろいろな角度の写真が楽しめるのでオススメです。<br />
            お友達をいっぱい作っておきましょう！
          </p>
          <v-card
            flat
            img="https://shop.kitamura.jp/ts_rsc/505/images/bg_balloon_point3.gif"
            :height="$vuetify.breakpoint.mdAndUp ? 120 : 200"
            :class="$vuetify.breakpoint.mdAndUp ? 'point' : 'pa-2'"
          >
            <h3>徒競走</h3>
            <p class="mb-0">
              メインの徒競走での撮影は、撮影ポジションによって撮り方が変わります。<br />
              徒競走は、正面ゴールからの撮影が無難にオススメです。 デジカメだから、<br />
              気楽にどんどんシャッターをきる！ きっと、たくさん撮影した中にベストショットがあるはず。
            </p>
          </v-card>

          <h4>正面から撮影する場合</h4>
          <v-row>
            <v-col cols="12" sm="7">
              <p>
                迫力のある撮影ができる一方、自分に向かって走ってくるわけですから<br />
                ピントを合わせにくくなります。 でも、直線コースであれば、ほかのお子さんと<br />
                かぶることがないので、確実に撮影できるのがメリットです。徒競走は、<br />
                とにかく自分のお子さんがスタートするまでに<br />
                ほかのお子さんで撮影テストをしてみることがオススメです！<br />
                連写やタイミング、カメラの設定がいいかどうかチェックできるチャンスなのです。 <br />
                カメラの連写機能を最大限に活用して、<br />
                スタートからゴールまで、思い切って、連写してみましょう！
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="https://shop.kitamura.jp/ts_rsc/505/images/01.png" max-width="280" max-height="300" class="ml-auto"></v-img>
            </v-col>
          </v-row>

          <h4>横から撮影する場合</h4>
          <v-row>
            <v-col cols="12" sm="7">
              <p>
                比較的、ピントは合いやすいですが、コースによっては ほかのお子さんと<br />
                重なって、うまく自分のお子さんを捉えることができない場合もあります。<br />
                どちらのポジションで撮影するかは、よーく悩んでみてくださいネ。<br />
                横ポジションからの撮影は、ほかのお子さんとかぶらなければ、比較的簡単に撮影できます。
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="	https://shop.kitamura.jp/ts_rsc/505/images/02.png" max-width="280" max-height="200" class="ml-auto"></v-img>
            </v-col>
          </v-row>

          <v-card
            flat
            img="https://shop.kitamura.jp/ts_rsc/505/images/bg_balloon_point2.gif"
            height="120"
            :class="$vuetify.breakpoint.mdAndUp ? 'point mt-2' : 'pa-2 mt-2'"
          >
            <h3>綱引きや大玉ころがし、ダンス・組体操</h3>
            <p class="mb-0">
              的を絞って撮影するのがオススメ！<br />
              事前にお子さんの立ち位置をチェックして 競技スタートと同時に連写で勝負です。
            </p>
          </v-card>

          <h4>うちの子供はどこ？ スタート地点をチェック！</h4>
          <v-row class="mb-10">
            <v-col cols="12" sm="7">
              <p>
                動きが激しい競技では、ファインダーから一度見失うと もう・・・ だから<br />
                ここは的を絞って撮影するのがオススメ。 事前にお子さんの立ち位置をチェックして<br />
                競技スタートと同時に連写で勝負です。<br />
                あとは、追跡できたらラッキーくらいの気持ちで・・・。 <br />
                スタート地点を押さえておけば、競技開始直後はしっかりと撮影できます。
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="https://shop.kitamura.jp/ts_rsc/505/images/03.png" max-width="280" max-height="200" class="ml-auto"></v-img>
            </v-col>
          </v-row>

          <!-- 撮影のポイント -->
          <h2>撮影のポイント：ほかにもいろいろ！ 撮影のタイミング</h2>
          <p class="mt-2">競技中の写真に集中しがちですが、運動会会場以外の所でも撮影しておくと最後まとめたときに 楽しいアルバムに仕上がります</p>
          <h3>事前練習のとき</h3>
          <p>撮影の練習もかねて、お子さまの写真をおさえておきましょう！</p>
          <h3>当日のお弁当</h3>
          <p>翌年のお弁当作りの参考になります</p>

          <h3>登校前のちょっと緊張した表情</h3>
          <p>朝は慌しく大変かもしれませんが、家を出る前のお子さまの様子をさり気なく写しておくのもおすすめ</p>

          <h3>各競技</h3>
          <p>徒競走や綱引き！ 競技に集中して撮影も大切ですが、応援している家族の撮影も忘れずに</p>

          <h3>お弁当を食べているとき</h3>
          <p>お昼はお弁当と一緒に、お子さまの写真を近くで撮れるとき。もぐもぐほおばる写真も忘れずに</p>

          <h3>運動会から帰ってから</h3>
          <p>お父さんもお母さんも、お子さまもほっとした時間。笑顔や悔し泣きの姿、泥だらけの姿もいい思い出になりますよ</p>

          <!-- コンパクトカメラ・一眼レフの撮影のコツ -->
          <h2 class="mt-16">コンパクトカメラ・一眼レフの撮影のコツ</h2>
          <p class="mt-2">お子さまと一緒に運動会のプログラムよくチェックする！ これが、運動会の撮影をスムーズにするための必勝法</p>
          <h3>スポーツモード・連写機能を使おう！</h3>
          <v-row>
            <v-col cols="12" sm="7">
              <p>
                スポーツモードなどの連写機能を使うと、追尾される物が多くて簡単！<br />
                感度を上げてシャッタースピードを最低１/２５０秒くらいにして連写すれば<br />
                5割位の確立でいいものが撮れるはず。<br />
                カメラによってスポーツモード・連写モードのボタンの位置は変わります。<br />
                あらかじめ確認をしておきましょう！
              </p>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="https://shop.kitamura.jp/ts_rsc/505/images/mark.png" max-width="320" max-height="120"></v-img>
            </v-col>
          </v-row>

          <h3>全体が写るくらいに引き気味で撮影しよう</h3>
          <p>
            顔のUPを撮りたくなりますよね！ 画素数が大きいカメラなら、後からトリミングするほうが楽です★
            <br />UPすぎるとファインダーから見切れちゃうこともあります
          </p>
          <h4>ショット数でまとめ方のカタチを選びましょう</h4>
          <p>
            運動会が終わってからの写真整理もキタムラにおまかせください。<br />
            ショット数に合わせて、おすすめのアルバムを作りましょう！
          </p>

          <v-container class="pa-0">
            <v-row>
              <v-col cols="12" sm="4" v-for="(recommendedAlbum, index) in recommendedAlbumList" :key="index">
                <v-hover v-slot="{ hover }">
                  <a :href="recommendedAlbum.href" target="_brank">
                    <v-img :src="hover ? recommendedAlbum.onImage : recommendedAlbum.offImage" max-width="280" max-height="100"></v-img>
                  </a>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>

          <!-- ビデオカメラの撮影のポイント -->
          <h2 class="mt-16">ビデオカメラの撮影のポイント</h2>
          <h3>・メモリーカードとバッテリーそれぞれの撮影可能時間を確認しよう</h3>
          <h3>・プログラムをチェックしながら、録画時間の配分を決めよう</h3>
          <h3>・録画停止ボタンを押すのを忘れずに！</h3>
          <p>＊歩いている時も録画中だったり・・・いざというときに電池もメモリー残量もなくなってしまわないように注意</p>
          <h4>ビデオ撮影後におすすめサービス</h4>

          <v-row>
            <v-col cols="12" sm="8">
              <p>
                運動会の思い出を撮りっぱなしにならないように、動画はきちんとカタチに残しましょう！<br />
                【撮った写真や動画はこんな風に残そう 後日編】で詳しく紹介します
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-hover v-slot="{ hover }">
                <a
                  href="https://www.kitamura-print.com/column/special/season/sportsday/?_ga=2.20356792.1498124933.1633305189-279164427.1627285160#video"
                  target="_brank"
                >
                  <v-img
                    :src="`https://shop.kitamura.jp/ts_rsc/505/images/06_${hover ? 'on' : 'off'}.png`"
                    max-width="250"
                    max-height="110"
                    class="ml-auto"
                  ></v-img>
                </a>
              </v-hover>
            </v-col>
          </v-row>

          <!-- スマホの撮影のポイント -->
          <h2 class="mt-16">スマホの撮影のポイント</h2>
          <p>
            スマホの撮影はカメラやビデオと違って、スマホのカメラにズーム機能はあっても、なかなかキレイには撮れません。
            そこで、お子さまが近くにいるタイミングで撮りましょう。
          </p>
          <h3>・脇をきちんとしめて、スマホを固定しよう</h3>
          <p>基本をしっかりと。脇をしめてスマホがブレないようにしましょう</p>

          <h3>・連続で撮影しよう</h3>
          <p>お子さまの自然な表情を撮るには連続で撮影するのがポイント</p>

          <h3>・しゃがんで撮影してみよう</h3>
          <p>体勢が楽で、スマホもブレません。シャッターチャンスは、お子さまが近づいたときですよ！</p>

          <h4>スマホで撮影した写真や動画をまとめるのにおすすめサービス</h4>
          <v-row>
            <v-col cols="12" sm="8">
              <p>
                スマホで撮影した写真を集めてフォトブックにするのもよいですね★<br />
                お店で注文すると最短30分でできるフォトブックもあります
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-hover v-slot="{ hover }">
                <a href="https://photobook.kitamura.jp/column/special/sportsday/" target="_brank">
                  <v-img
                    :src="`https://shop.kitamura.jp/ts_rsc/505/images/07_${hover ? 'on' : 'off'}.png`"
                    max-width="250"
                    max-height="110"
                    class="ml-auto"
                  ></v-img>
                </a>
              </v-hover>
            </v-col>
          </v-row>

          <!-- 撮影が終わったら、機材の掃除を忘れずに -->
          <h2 class="mt-16">撮影が終わったら、機材の掃除を忘れずに</h2>
          <p class="mt-2">当日中にもうひとがんばり！ 運動会のあとのカメラは 砂埃まみれ。キレイにお手入れをしましょう！</p>
          <h3>ボディブラシで優しくホコリ・砂を払い落としましょう</h3>
          <v-row>
            <v-col cols="12" sm="6">
              <p>
                クロスでカメラやレンズをすぐに拭きたくなりますが<br />
                その前に、大きいホコリや砂を払い落としましょう！<br />
                傷がつかないように優しく払ってくださいね
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="https://shop.kitamura.jp/ts_rsc/505/images/item.png" max-width="400" max-height="200"></v-img>
            </v-col>
          </v-row>

          <h3>ブロアーで小さなホコリを吹き飛ばしましょう</h3>
          <p>シュッシュッっとブロアーで小さなホコリを吹き飛ばしましょう</p>
          <h3>レンズの表面の拭き掃除は専用のクロスやクリーニング液を使いましょう</h3>
          <h3 class="mb-16">最後はカメラ・ビデオ全体をクロスで拭いて、ドライボックスや防湿庫にしまって完了です</h3>

          <!--↓ページトップへ-->
          <p class="mt-2">
            <a href="#top">
              <v-img
                src="https://shop.kitamura.jp/ts_rsc/505/images/btn_gotop.gif"
                alt="ページトップへ"
                max-width="120"
                max-height="35"
                class="ml-auto"
              ></v-img>
            </a>
          </p>
        </v-container>

        <!--↓ページで紹介した商品・その他おすすめの商品一覧-->
        <h2 class="ml-7 mt-5 mb-16">ページで紹介した商品・その他おすすめの商品一覧</h2>
        <priceAndPopular :productDetailList="productDetailList" />
        <!--↓ページトップへ-->
        <p class="mt-2">
          <a href="#top">
            <v-img src="https://shop.kitamura.jp/ts_rsc/505/images/btn_gotop.gif" alt="ページトップへ" max-width="120" max-height="35" class="ml-auto"></v-img>
          </a>
        </p>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
export default Vue.extend({
  name: 'sportsday-photo-knowhow-1',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: (props, context) => {
    document.title = 'パパママ応援運動会特集 運動会撮影のコツ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '運動会特集！当日落ち着いて写真撮影するために事前に準備をしておきましょう！抑えておきたい「撮影のコツ・ポイント」をご紹介')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'パパママ応援運動会特集 トップ',
          linkUrl: '/ec/special/general/sportsday',
          disabled: false
        },
        {
          path: 'パパ・ママ応援運動会特集！おすすめ一眼カメラ・ビデオ（撮影準備編）',
          disabled: true
        }
      ],
      recommendedAlbumList: [
        { href: 'https://www.kitamura-print.com/column/special/season/sportsday/', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/sportsday/photo-knowhow-1/btn_print_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/sportsday/photo-knowhow-1/btn_print_off.gif' },
        { href: 'https://photobook.kitamura.jp/special/sportsday/index.html#ring', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/sportsday/photo-knowhow-1/btn_softcov_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/sportsday/photo-knowhow-1/btn_softcov_off.gif' },
        { href: 'https://photobook.kitamura.jp/special/sportsday/index.html#year', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/sportsday/photo-knowhow-1/btn_year_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/sportsday/photo-knowhow-1/btn_year_off.gif' }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4977187330878',
        '4975981521294',
        '4977187331745',
        '4977187325935',
        '4977187326031',
        '4902520009609',
        '4977187330045',
        '4977187330663',
        '4977187403510',
        '4930381440033',
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
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
.bk-pg {
  max-width: 950px;
  background: #cae3f7;
  border: 3px solid #fff;
  border-radius: 7px;
  box-shadow: 0 0 3px 1px rgb(0 0 0 / 20%);
  padding: 0 20px 15px;
  box-sizing: border-box;
}
.sportsday h1 {
  color: #666;
  font-size: 18px;
  line-height: 1.3em;
}
.sportsday h2 {
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  color: #593432;
  line-height: 1.5;
  padding: 5px 0 0 35px;
  border-bottom: none;
}
.sportsday h3 {
  font-weight: bold;
  font-size: 16px;
  color: #0e315a;
  clear: both;
  margin: 10px 0 5px 0;
}
.sportsday h4 {
  font-weight: bold;
  font-size: 14px;
  color: #593432;
  margin: 15px 0 0 0;
  padding: 6px 0 6px 35px;
}

div.nav ul.nl {
  width: 100% !important;
  height: auto;
  margin: 1px 0;
  padding: 0;
  background: url(/ec/images2/special/general/sportsday/hor_menu6_off.gif) repeat-x top;
  border-left: 1px #2c5170 solid;
  border-right: 1px #84aed2 solid;
  list-style-type: none;
  text-align: center;
  float: left;
}

div.nav ul.nl li#li01,
div.nav ul.nl li#li01 a:hover,
div.nav ul.nl li#li02 a:hover,
div.nav ul.nl li#li03 a:hover,
div.nav ul.nl li#li04 a:hover {
  background: url(/ec/images2/special/general/sportsday/hor_menu6_on.gif) repeat-x top;
}

div.nav ul.nl li a {
  color: #be1f33 !important;
  text-decoration: none !important;
  display: block;
  box-sizing: border-box;
  position: relative;
  padding: 7px 2px;
  text-decoration: none;
  font-weight: bold;
  font-size: 110%;
  line-height: 100%;
}

div.nav ul.nl li a span.en {
  display: block;
  margin-top: 2px;
  font-size: 85%;
  font-weight: normal;
  color: #4e83b3;
}

@media screen and (min-width: 857px) {
  div.nav ul.nl li {
    width: 25% !important;
    float: left;
    border-left: 1px #84aed2 solid;
    border-right: 1px #2c5170 solid;
    box-sizing: border-box;
  }
}
.of-h {
  overflow: hidden;
}
.h40 {
  height: 40px;
}
.balloon3point {
  padding: 10px 10px 10px 150px;
}
.important {
  border-bottom: 3px double #ff0000;
}
.point {
  padding: 10px 10px 10px 170px;
}
// sp時のpadding
@media screen and (max-width: 618px) {
  .sportsday h2 {
    padding: 0px;
  }
  .sportsday h4 {
    padding-left: 0px;
  }
}
</style>
