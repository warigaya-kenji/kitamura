<template>
  <v-app>
    <div class="story-after-taking">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="text-body-1">写真撮ったあと物語</h1>
        <v-img src="/ec/images2/special/general/story_after_taking/kanban.gif" alt="看板"></v-img>
        <p>
          携帯･スマホの普及により､以前にも増して写真を撮る人が増えたように思います。<br />
          撮った写真はその後､どのようにしていますか？ 私の場合､ パソコンの中に保存しているだけということもしばしば。<br />
          ここでは､ 写真を撮ったあとのよくある悩みを､ 3人の物語でご紹介します。
        </p>
        <v-row class="mb-15">
          <v-col cols="12" sm="4" v-for="(naviBtn, i) in naviBtnList" :key="i">
            <a v-scroll-to="naviBtn.href">
              <v-btn height="68" block class="including-line-breaks font-weight-bold" color="#fc8d83" dark>{{ naviBtn.btntxt }}</v-btn>
            </a>
          </v-col>
        </v-row>

        <!-- 1 -->
        <v-container id="a01" class="pa-0 mb-15">
          <v-sheet color="#888" class="py-2 px-5 mb-3" rounded="rounded">
            <h2 class="white--text text-h6">写真を撮ったあと､整理ができないA男さんの物語</h2>
          </v-sheet>
          <p>普段から写真を撮るA男さん、しかし撮った写真は複数のメモリーカードやカメラに保存したままや、スマホ・PCに整理せずそのまま保存をしています。</p>
          <p>ある日､ 去年の旅行写真を探そうとすると、なかなか見つからない･･･。ズボラなA男さんも､写真の整理を決意しました。</p>
          <p>
            「でも、どうやって整理したらいいかわからない」 「あまり手間なことはしたくない」と、A男さん。
            ネットで情報収集したところ、気になるものを見つけました。
          </p>
          <v-img src="/ec/images2/special/general/story_after_taking/illust_01.gif" max-width="600" max-height="300" alt="" class="mx-auto mb-7"></v-img>
          <v-card outlined class="py-7 px-4" elevation="4">
            <v-sheet class="py-1 mb-7" color="#ffffcc"> 撮影日･場所･ 被写体はもちろん､ 顔認識で人物別に整理できる､魔法のような自動整理機能 </v-sheet>
            <p>
              そんな夢のような一台が､ 富士フイルムの｢ワンダーフォトボックス｣です。<br />
              ワンダーフォトボックスは取り込んだ画像を､ 自動で撮影日や撮影場所、被写体ごとに整理できます。<br />
              しかも驚くことに、人物写真では顔も区別して、自動で振り分けてくれるのです。
            </p>
            <p>｢大量の写真を分類して整理するのが面倒｣､ ｢複数のメディアに保存した写真をまとめたい」そんな方に､ おすすめです。</p>
            <p>※顔認識の自動振り分けを利用するには、安心バックアップサービスの契約が必要です。</p>
            <v-row class="mb-15">
              <v-col cols="12" sm="6">
                <v-img
                  src="/ec/images2/special/general/story_after_taking/1-2.jpg"
                  alt="写真分類の仕方"
                  max-width="441"
                  max-height="216"
                  class="mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="/ec/images2/special/general/story_after_taking/1-3.jpg"
                  alt="顔認識による管理"
                  max-width="441"
                  max-height="216"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </v-row>
            <v-sheet color="#ffffcc"> <p class="text-h6">機械が壊れても、思い出は壊れない「安心のバックアップサービス」</p> </v-sheet>
            <p>
              こちらに加入すると、データのバックアップや、スマートフォンやタブレットなどで、外出先からアクセスしたり、顔認識による自動振り分け機能が使用できます。
            </p>
            <v-row class="mt-7 mb-15">
              <v-col cols="12" sm="6">
                <v-img
                  src="/ec/images2/special/general/story_after_taking/1-4.gif"
                  alt="安心バックアップサービス"
                  max-width="441"
                  max-height="281"
                  class="mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="/ec/images2/special/general/story_after_taking/1-5.gif"
                  alt="有料プラン一覧"
                  max-width="441"
                  max-height="281"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </v-row>

            <v-card flat outlined class="py-7 px-4 mb-7">
              <v-sheet color="#ffffcc"> <p class="text-h6">複数の記録メディアをまとめるだけなら、｢フジカラーイメージアーカイブディスク｣</p> </v-sheet>
              <p>
                あなたに代わって、カメラのキタムラが、 複数のメディアのデータを、DVD-Rに書き込みいたします<br />
                ※1枚のDVDに3.8GBまで書き込み可能
              </p>
              <v-row class="mb-2">
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/general/story_after_taking/1-6.jpg"
                    alt="フジカラーイメージアーカイブディス"
                    max-width="340"
                    max-height="220"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                  <p class="text-center mt-7">
                    価格<span class="red--text text--darken-2">¥1,100</span>(税込)<br />
                    <span class="text-body-2">(書込 : 静止画/動画/音声)</span>
                  </p>
                </v-col>
              </v-row>
              <v-btn
                height="47"
                block
                class="font-weight-bold"
                color="#fc8d83"
                dark
                href="https://www.kitamura-print.com/data_conversion/fiad/?_ga=2.221635805.430099002.1634515753-279164427.1627285160"
                target="_blank"
                ><span class="white--text">フジカラーイメージアーカイブディスクの詳細はコチラ</span></v-btn
              >
            </v-card>
            <p class="text-sm-h6 text-body-2">
              ワンダーフォトボックスを購入したA男さん。<br />
              大量の写真も1つにまとめることができました。写真を探すのも「日付」や「場所」などで分類され、とてもスムーズ。
            </p>
            <p class="text-sm-h6 text-body-2">さらにクラウドサービスを契約し､ 外出先からも写真を見れることを活かし､実家の両親に孫の写真を見せています。</p>
            <v-img src="/ec/images2/special/general/story_after_taking/illust_02.gif" alt="" max-width="600" max-height="300" class="mx-auto mb-7"></v-img>
          </v-card>
        </v-container>
        <!--/ 1 -->
        <!-- 2 -->
        <v-container class="pa-0 mb-15" id="a02">
          <v-sheet color="#888" class="py-2 px-5 mb-3" rounded="rounded">
            <h2 class="white--text text-h6">写真を撮ったあと､ 友達にどうやって贈るか悩むB子さんの物語</h2>
          </v-sheet>
          <p>
            友達の結婚式､ カメラ役をかって出たB子さん。<br />
            いい写真をたくさん撮ることができました。
          </p>
          <p>翌日B子さんは、どうやって友達に写真を渡せば喜んでもらえるか、悩んでいました・・・</p>
          <v-img src="/ec/images2/special/general/story_after_taking/illust_03.gif" alt="" max-width="600" max-height="300" class="mx-auto mb-7"></v-img>
          <v-card outlined class="py-7 px-4" elevation="4">
            <v-sheet class="py-1 mb-7" color="#ffffcc">
              本のような仕上がりのオリジナルフォトブック、プレゼントに大好評！<br />Webやアプリで、かんたんにオリジナルアルバムが作れます
            </v-sheet>
            <p>写真はプリントすると､ より印象深くなります。もし誰かに写真を贈りたいとお考えなら､ フォトブックはいかがでしょうか？</p>
            <p class="mb-0">
              フォトブックはプレゼントとして好評です。<br />
              仕上がりは､ まるで書店に並ぶ本のようです。一味ちがったプレゼントになると思います。
            </p>
            <v-row class="mt-15">
              <v-col cols="12" sm="6">
                <a href="http://photobook.jp/photobon/top/" target="_blank">
                  <v-img src="/ec/images2/special/general/story_after_taking/2-1.jpg" alt="フォト本" max-width="441" max-height="320" class="mx-auto"></v-img>
                </a>
              </v-col>
              <v-col>
                <p class="text-h6">
                  <a href="http://photobook.jp/photobon/end/" target="_brank">思い出を形に残せるフォトブック「フォト本」</a>
                </p>
                <p>
                  《 文庫本サイズ24ページ～120ページ 》<br />
                  価格 : <span class="red--text text--darken-2 text-h6">&yen;2,200～</span>(税込)
                </p>
                <p>
                  《 A5サイズ24ページ～120ページ 》<br />
                  価格 : <span class="red--text text--darken-2 text-h6">&yen;3,300～</span>(税込)
                </p>
                <p>
                  《 A4サイズ24ページ～120ページ 》<br />
                  価格 : <span class="red--text text--darken-2 text-h6">&yen;4,400～</span>(税込)
                </p>
                <v-btn height="47" block class="font-weight-bold" color="#fc8d83" href="http://photobook.jp/photobon/top/" target="_blank"
                  ><span class="white--text">フォト本ページを見る</span></v-btn
                >
              </v-col>
              <v-col cols="12" sm="4" v-for="(photoBook, i) in photoBookList" :key="i" class="text-center">
                <v-img :src="photoBook.src" :alt="photoBook.alt" max-width="288" max-height="268" class="mx-auto"></v-img>
                {{ photoBook.txt }}
              </v-col>
            </v-row>
          </v-card>
          <v-row class="mt-4 mb-7">
            <v-col cols="12" sm="6" v-for="(box, i) in boxList" :key="i">
              <v-card outlined elevation="4" class="pa-4">
                <v-sheet color="#ffffcc">
                  <p class="text-h6 including-line-breaks">{{ box.txt1 }}</p>
                </v-sheet>
                <p class="including-line-breaks">{{ box.txt2 }}</p>
                <v-img :src="box.src" :alt="box.alt" max-width="428" max-height="164" class="mx-auto"></v-img>
                <v-btn height="47" block class="font-weight-bold" color="#fc8d83" :href="box.href" target="_blank"
                  ><span class="white--text">{{ box.btntxt }}</span></v-btn
                >
              </v-card>
            </v-col>
          </v-row>
          <p class="text-sm-h6 text-body-2">
            フォト本を2冊注文したB子さん。<br />
            届いたフォト本を見て、とても満足しました。
          </p>
          <p class="text-sm-h6 text-body-2">
            1冊を、そのまま郵送できる梱包箱に入れて、友人に送りました。<br />
            友人がどんな反応をするか、今から楽しみです。
          </p>
          <v-img
            src="/ec/images2/special/general/story_after_taking/illust_04.gif"
            alt="フォト本"
            max-width="600"
            max-height="300"
            class="mx-auto mb-7"
          ></v-img>
        </v-container>
        <!--/ 2 -->
        <!-- 3 -->
        <v-container class="mb-15" id="a03">
          <v-sheet color="#888" class="py-2 px-5 mb-7" rounded="rounded">
            <h2 class="white--text text-h6">写真を撮ったあと､ 写真をいろいろ活用できないか考えるC氏の物語</h2>
          </v-sheet>
          <p>
            写真撮影に自信のあるC氏。<br />
            せっかく撮った自慢の写真を､ もっといろんなことに活用できないか考えていました。
          </p>
          <p>行きつけのカフェでコーヒーを飲んでいるときに､ ヒントを見つけました。</p>
          <v-img src="/ec/images2/special/general/story_after_taking/illust_05.gif" alt="" max-width="600" max-height="300" class="mx-auto mb-7"></v-img>
          <v-card outlined elevation="4" class="py-7 px-4 mb-7">
            <v-sheet class="py-1 mb-7" color="#ffffcc">
              写真を壁に飾れば､ オンリーワンのインテリアに。<br />額のデザインや並べ方によって､ お部屋の印象も大きく変わります。
            </v-sheet>
            <p>フレームに入れて壁に飾ると､ あなただけのオリジナルインテリアに早変わり。</p>
            <p>
              フレームのサイズやデザインを揃えると､ まとまりのある安定したイメージになったり､<br />
              サイズ･デザインの違うフレームで飾ると､ポップで楽しそうなイメージになったりと､<br />
              飾り方次第でお部屋の印象まで変わります。
            </p>
            <p>絵画のように飾れる「ウォールデコ」もおすすめです。</p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img
                  src="	/ec/images2/special/general/story_after_taking/3-1.jpg"
                  alt="写真の飾り方"
                  max-width="385"
                  max-height="340"
                  class="mx-auto mb-2"
                ></v-img>
                <v-btn height="47" block class="font-weight-bold mb-7" color="#fc8d83" href="/ec/special/camera/frame"
                  ><span class="white--text">写真額縁・フォトフレームはコチラ</span></v-btn
                >
                <v-btn height="47" block class="font-weight-bold mb-2" color="#fc8d83" href="https://fremia.com/kitamura/" target="_blank"
                  ><span class="white--text">オーダーメイド額はコチラ</span></v-btn
                >
                <p>200種類のフレームから、お好きなサイズでお作りします</p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="	/ec/images2/special/general/story_after_taking/3-2.jpg"
                  alt="ウォールデコ"
                  max-width="385"
                  max-height="340"
                  class="mx-auto mb-2"
                ></v-img>
                <p class="text-center text-h6">
                  <a href="https://www.kitamura-print.com/photogoods/walldecor/?_ga=2.180871394.430099002.1634515753-279164427.1627285160" target="_blank"
                    >ウォールデコ</a
                  >
                </p>
                <p>
                  サイズ：スクエアミニ～A2<br />
                  価格 : <span class="text-h6 red--text text--darken-2">&yen;2,530～</span>(税込)
                </p>
                <v-btn
                  height="47"
                  block
                  class="font-weight-bold mb-2"
                  color="#fc8d83"
                  href="https://www.kitamura-print.com/photogoods/walldecor/?_ga=2.171958629.430099002.1634515753-279164427.1627285160"
                  target="_blank"
                  ><span class="white--text">ウォールデコの詳細はコチラ</span></v-btn
                >
              </v-col>
            </v-row>
          </v-card>
          <p class="text-sm-h6 text-body-2">さっそく家にあった額と､ 写真の枚数に合わせて買い足した額で､壁に飾ってみました。</p>
          <p class="text-sm-h6 text-body-2">
            いろいろ並べ方を試して、ようやく納得のいくレイアウトが決まりました。<br />
            さりげなく自慢の写真を見せることができ､ とても満足しています。
          </p>
          <v-img src="/ec/images2/special/general/story_after_taking/illust_06.gif" alt="" max-width="600" max-height="300" class="mx-auto mb-7"></v-img>
        </v-container>
        <!--/ 3 -->
        <v-sheet class="py-3 px-4 mb-15" color="#eef1f2"></v-sheet>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'story-after-taking',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: () => {
    document.title = '｢写真撮ったあと物語｣_写真整理・贈り方・飾り方に困っている3人の物語 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '写真を撮ったあと｢写真整理ができないA男さん｣｢友達にどうやって贈るか悩むB子さん｣｢写真をいろいろ活用できないか考えるC氏｣の悩みを、物語風にご紹介。')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '｢写真撮ったあと物語｣_写真整理・贈り方・飾り方に困っている3人の物語',
          disabled: true
        }
      ],
      naviBtnList: [
        { btntxt: '写真を撮ったあと､整理ができないA男\nさんの物語', href: '#a01' },
        { btntxt: '写真を撮ったあと､ 友達にどうやって贈\nるか悩むB子さんの物語', href: '#a02' },
        { btntxt: '写真を撮ったあと､ 写真をいろいろ活用\nできないか考えるC氏の物語', href: '#a03' },
      ],
      photoBookList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/story_after_taking/2-2.jpg', alt: 'フォト本 レイアウト', txt: '思い出写真が大きく残せます' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/story_after_taking/2-3.jpg', alt: 'フォト本 文字入れ', txt: '文字も入ります' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/story_after_taking/2-4.jpg', alt: 'フォト本 梱包', txt: 'そのまま郵送できる梱包です' },
      ],
      boxList: [
        {
          txt1: '写真プリントも、カメラのキタムラなら\n高品質な仕上がり',
          txt2: '専門店ならではの、早くて高品質な写真プリント。\n店舗なら、最短10分仕上げ。',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/story_after_taking/2-5.jpg',
          alt: '高品質な仕上がり',
          href: 'http://www.kitamura-print.com/digicameprint/',
          btntxt: '写真プリントの詳細はコチラ'
        },
        {
          txt1: '写真を入れる袋によっても､ 印象が変わります。',
          txt2: 'レトロな雰囲気のデザイン写真袋や、和紙を使ったもの、かわいい写真袋など、種類が豊富。\n写真を受け取る印象も変わります。',
          src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/story_after_taking/2-6.jpg',
          alt: "写真袋",
          href: 'https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%83%8F%E3%82%AF%E3%83%90%20%E5%86%99%E7%9C%9F%E8%A2%8B&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=%E3%83%8F%E3%82%AF%E3%83%90%20%E5%86%99%E7%9C%9F%E8%A2%8B&x=0&y=0',
          btntxt: 'ハクバ 写真袋はコチラ'
        }
      ]
    });

    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.story-after-taking {
  p {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    line-height: 1.4em;
    color: #1a0708;
  }
}
</style>
