<template>
  <v-app>
    <div class="interview">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1><v-img src="/ec/images2/special/kaden/ricemill/interview/interview_h1.jpg" alt="精米機インタビュー" max-width="950" max-height="550"></v-img></h1>
        <h2 class="header-type02 mt-7 text-h5">Bisen YE-RC17Aイチオシの理由</h2>
        <v-sheet class="mt-7 pa-4" color="#e5e5e4">
          <v-row>
            <v-col cols="12" md="4">
              <v-img src="/ec/images2/special/kaden/ricemill/interview/seimaiki_rc17a.jpg" max-width="287" max-height="287" class="mx-auto" />
            </v-col>
            <v-col cols="12" md="8">
              <router-link :to="`/ec/pd/${mainProductList[0].janCode}`">
                <p>{{ mainProductList[0].itemName }}</p>
              </router-link>
              <p class="mt-10 text-right font-large">
                価格<span class="red--text font-xlarge">{{ formatPrice(parseInt(mainProductList[0].price)) }}&nbsp;</span><span class="font-small">円</span>
              </p>
              <p class="mt-7">
                速い！ 白米5合が2分30秒とあっという間に精米できます<br />特許取得の新型精米羽根でお米に優しい！破米率が低い！<br />白米の味に近づけた「胚芽
                白米仕立て」モード搭載！玄米も美味しく炊けます
              </p>
            </v-col>
          </v-row>
        </v-sheet>

        <p class="mt-8">
          家庭用精米機に欲しい機能が備わっているBisen YE-RC17A。<br />
          実は山本電気さんはもともとモーターの会社で、みなさんが知っている車や掃除機にも使われているモーターも、山本電気製です。<br />
          このモーターの技術を使って、日本初の撹拌式家庭用精米機を作ったのも、山本電気さんなんですよ。
        </p>
        <p>今回は山本電気株式会社 技術部家電技術グループリーダーの島田さんと家電営業係の秦さん、八代さんの3名に精米機について、あれやこれや伺ってみました。</p>

        <!-- ↓ 人物紹介 -->
        <v-card outlined flat class="mt-8">
          <v-container class="pa-7">
            <v-row>
              <v-col cols="12" md="6" class="mb-7" v-for="(yamamotoElectricPeople, index) in yamamotoElectricPeopleList" :key="index">
                <v-row>
                  <v-col cols="5">
                    <v-img :src="yamamotoElectricPeople.src" max-width="150" max-height="150" class="mx-auto"> </v-img>
                  </v-col>
                  <v-col cols="7">
                    <div class="text-body-2">
                      <dt class="font-weight-bold">山本電気<br />{{ yamamotoElectricPeople.name }}</dt>
                      <dd class="line-height including-line-breaks">
                        所属：{{ yamamotoElectricPeople.affiliation }}<br />白米に合うおかず：{{ yamamotoElectricPeople.sidedishes }}
                      </dd>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <!-- ↓ interview -->
        <div class="kaiwa mt-16">
          <v-container class="pa-0" v-for="(interview, index) in interviewList" :key="index">
            <v-row dense>
              <v-col cols="12" md="1">
                <div v-if="index === 1 && $vuetify.breakpoint.mdAndUp" class="ml-4 mb-10">
                  <v-img src="/ec/images2/special/kaden/ricemill/interview/yamamoto_shimada.jpg" max-width="50" max-height="50"></v-img>
                  <v-img src="/ec/images2/special/kaden/ricemill/interview/yamamoto_minato.jpg" max-width="50" max-height="50"></v-img>
                  <v-img src="/ec/images2/special/kaden/ricemill/interview/yamamoto_yashiro.jpg" max-width="50" max-height="50"></v-img>
                </div>
                <v-img
                  v-else-if="index === 1 && $vuetify.breakpoint.smAndDown"
                  src="/ec/images2/special/kaden/ricemill/interview/yamamotodenki.jpg"
                  max-width="150"
                  max-height="50"
                  class="ml-4 mt-8"
                ></v-img>
                <v-img v-else :src="interview.src" max-width="50" max-height="50" class="ml-4 mt-8"></v-img>
              </v-col>
              <v-col cols="12" md="11">
                <p class="font-weight-bold ml-2 mb-2">{{ interview.talkingPerson }}</p>
                <v-card outlined flat class="ml-2 pa-3 mb-12">
                  <p class="mb-0 including-line-breaks">
                    {{ interview.content }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
            <v-img
              v-if="index === 8"
              src="/ec/images2/special/kaden/ricemill/interview/rc17a.jpg"
              max-width="600"
              max-height="300"
              class="mx-auto mb-15"
            ></v-img>
            <v-img
              v-else-if="index === 15"
              src="/ec/images2/special/kaden/ricemill/interview/rice.jpg"
              max-width="600"
              max-height="300"
              class="mx-auto mb-15"
            ></v-img>
            <v-img
              v-else-if="index === 18"
              src="/ec/images2/special/kaden/ricemill/interview/seimaiki.jpg"
              max-width="600"
              max-height="300"
              class="mx-auto mb-15"
            ></v-img>
          </v-container>
        </div>
        <!-- ↑ interview -->

        <v-sheet color="#f0dcdc" class="py-4 px-8">
          <p class="mb-0">
            お米をもっと美味しくもっと栄養価を保って食べるために、家庭用精米機はおすすめの家電です。<br />
            充実したお米生活のための精米機選びのヒントになれば幸いです。
          </p>
        </v-sheet>

        <div class="mt-15 mb-8">
          <a href="/ec/special/kaden/ricemill">
            <v-img src="	/ec/images2/special/kaden/ricemill/interview/osusume_seimaiki.jpg" max-width="950" max-height="300" alt="精米機特集"></v-img>
            ＜ おすすめ精米機の選び方に戻る
          </a>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import { formatPrice } from '@/logic/utils';
const kitamuraIcon = process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/logo_h_kitamura.png'
const shimadaIcon = process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/yamamoto_shimada.jpg'
const minatoIcon = process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/yamamoto_minato.jpg'
const yashiroIcon = process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/yamamoto_yashiro.jpg'

export default Vue.extend({
  name: 'interview',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: () => {
    document.title = 'おすすめ精米機特集 山本電気さんインタビュー | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '精米機メーカー 山本電気さんに精米機について、あれやこれや伺ってみました。'
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
          path: 'おすすめ精米機特集 山本電気さんインタビュー',
          disabled: true
        }
      ],
      yamamotoElectricPeopleList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/yamamoto_shimada.jpg', name: '島田 一也 課長', affiliation: '技術部　家電技術グループ', sidedishes: '\nあじのり、鰹節' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/yamamoto_yashiro.jpg', name: '八代 裕太朗', affiliation: '営業部　家電営業課', sidedishes: 'なめたけ' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/ricemill/interview/yamamoto_minato.jpg', name: '秦　龍一　係長', affiliation: '営業部　家電営業課', sidedishes: '納豆' },
      ],
      interviewList: [
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '今日は精米機について勉強させていただきます！\nよろしくお願いいたします。' },
        { src: '', talkingPerson: '山本電気', content: 'よろしくお願いいたします。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: 'まずは山本電気さんの精米機のアピールをお願いしたいです。\n種類がいろいろありますが、それぞれの特徴を教えてください。' },
        { src: yashiroIcon, talkingPerson: '山本電気 八代さん', content: 'はい！\n\nまずはYE-RC52です料理の鉄人でお馴染みの道場六三郎氏監修のもと作りました。\n「みがき米」機能が特徴です。\n\n続いてYE-RC41です。これは随分進化しています。\n特許技術の精米羽根を使用していまして対流効率を上げ、より優しく繊細な精米を実現しています。\n\nまた栄養豊富な胚芽を残しつつ、白米に近い味わいが得られる「胚芽白米モード」機能を搭載しています。\nフタに遮音性パッキンを取り付けるなど、RC52と比べ静音性も高める工夫をしておりますから音が心配という方にもおすすめです。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '当店イチオシのYE-RC17Aはどうですか？' },
        { src: yashiroIcon, talkingPerson: '山本電気 八代さん', content: 'ぬか切れの改善に成功した、新しい精米カゴを使用しています。\n\n基本性能はYE-RC41と一緒ですが、「分付胚芽３・５・７」より繊細な精米機能を搭載しております。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: 'ではやはりイチオシは？' },
        { src: yashiroIcon, talkingPerson: '山本電気 八代さん', content: '全部！\nと言いたいところですが、やはりYE-RC17Aですね！' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: 'ありがとうございます！\n一致しました！' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '精米機を作っているメーカーも、ぱっと思いつくだけで5社ほどありますが、山本電気さんのYE-RC17Aが他社の精米機に勝っているというストロングポイントを教えてください。' },
        { src: minatoIcon, talkingPerson: '山本電気 秦さん', content: 'はい！\n\n特許を取っているモーター、精米羽根の技術ですね。\nそれによって生まれている豊富な精米メニュー・最速の精米スピードも強みです。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: 'カメラのキタムラ\n他社は上部が透明の機種も多いようですが？' },
        { src: minatoIcon, talkingPerson: '山本電気 秦さん', content: 'YE-RC17Aはすぐに精米が終わりますから、上から見るひまもないくらいです。\n当社の精米機はレッドなど他のメーカーには少ないカラーの展開もしています。\n\n機能面では、左から順にモードを選択していく仕組みとなっており、また、文字や表示を分かりやすく表記しておりますので、初見でも操作しやすくなっております。\nデザインは外見だけでなく使用感を意識しています。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '他にも使い勝手のうえで工夫したポイントはありますか？' },
        { src: minatoIcon, talkingPerson: '山本電気 秦さん', content: '前回精米したモードを記憶するため、毎回お気に入りのモードで精米される方は玄米をセットし、スタートを押すだけで開始します。\n\nRC41・RC17Aのぬか受けについては、精米後、精米カゴごと取り出しやすいようにつまみをつけました。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: 'なるほど、ちょっとしたことですが使い手にとって便利ですね' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '高機能な炊飯器を買うのと 精米機を買うことと 美味しいお米を食べるにはどちらがおすすめですか？' },
        { src: yashiroIcon, talkingPerson: '山本電気 八代さん', content: '私、実は入社してから初めて精米機を使った精米したてのお米のご飯を食べたのですが、本当に美味しくて感動しました。\n\nもちろんお米も炊飯器もいいものに越したことはありませんが、よくなればなるほど酸化の状態で味の差がわかりやすいですから「まずは精米機」がおすすめです。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '「高級炊飯器よりは精米機」と考えていたのですが、「高級炊飯器こそ精米機」ということですね。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '精米機の開発にあたって苦労されたことはありますか？' },
        { src: shimadaIcon, talkingPerson: '山本電気 島田さん', content: '山本電気は家庭用の回転対流式精米機を初めて作った会社です。\n前例のない物をゼロから産み出さねばなりませんでした。\n\n全国のどのお米で精米しても美味しくできるように、北から南まであらゆる玄米を取り寄せて、何度も何度も試験を行ってきました。\n何トンのお米を使ったかわからないほどですね。\n\n最適な精米プログラムを生み出すのに技術部では大変な苦労をしてきましたので、その分製品には自信がありますね。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '模倣ではなくゼロから創るというは大変なことなんですね、胸が熱くなります。\n今後、こんな精米機を作ってみたいというものがあれば教えてください。' },
        { src: shimadaIcon, talkingPerson: '山本電気 島田さん', content: 'これでも以前に比べれば静かにはなりましたが、さらに静音性を向上させた製品を産み出したいです。' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: '作り手の想いがわかり、製品にも愛着がわきました。\n最後に、精米機を買おうかどうか迷っているお客様へメッセージをお願いいたします。' },
        { src: minatoIcon, talkingPerson: '山本電気 秦さん', content: '日本に馴染みの深いご飯ですが、実は「お米」について詳しく知る機会が少ないのです。\n玄米にどれだけの栄養が含まれているのか、胚芽とは？ など、お米について知れば知るほど必然と精米機のメリットにも気づいていただけるのではないかと思います。\n\nお米の魅力を最大限に引き出せるのが家庭用精米機です。\n\nまずは騙されたと思って購入していただきたいです。\n体験いただければ、精米機のよさがすぐにわかっていただけるはずです！' },
        { src: kitamuraIcon, talkingPerson: 'カメラのキタムラ', content: 'ありがとうございました。' },
      ],
      mainProductJanCode: ['4582221880846'],
      mainProductList: [] as Array<ProductDetail>
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
      noimage,
      formatPrice,
    };
  }
});
</script>

<style lang="scss" scoped>
.interview {
  .header-type02 {
    background-color: dimgray;
    color: white;
    padding: 5px;
    border-left: 6px solid hsla(0, 0%, 18%, 1);
    font-family: 'ＭＳ Ｐ明朝', 'MS PMincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'serif' !important;
  }
  p {
    line-height: 1.8em;
    font-size: 19px;
    font-family: 'メイリオ', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', 'sans-serif';
  }
  .font-large {
    font-size: 120%;
  }
  .font-xlarge {
    font-size: 140%;
  }
}
</style>
