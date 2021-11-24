<template>
  <v-app>
    <div class="kaden-dcfan">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!--看板-->
        <h1 class="text-body-2" id="p-top">人気のDCモーター扇風機</h1>
        <v-img src="/ec/images2/special/kaden/dcfan/b_s_title720x198.gif" alt="この夏、扇風機を買うならDCモーター扇風機！"> </v-img>

        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" sm="4" v-for="(navi, i) in naviList" :key="i">
              <a v-scroll-to="navi.href">
                <v-img :src="navi.src" :alt="navi.alt" max-width="230" max-height="101" class="mx-auto"> </v-img>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <h2 class="mt-5" id="dc001">
          <v-img src="/ec/images2/special/kaden/dcfan/b_s_01.gif" alt="DCモーター扇風機はココが違う！3大メリット"></v-img>
        </h2>

        <v-container class="pa-0 mt-4">
          <v-row>
            <v-col cols="12" sm="4" v-for="(threeMajorBenefit, i) in threeMajorBenefitList" :key="i">
              <v-img :src="`/ec/images2/special/kaden/dcfan/b_s_no0${i + 1}.gif`" :alt="i + 1" max-width="51" max-height="67" class="float-left mr-2"> </v-img>
              <p class="benefit-sub">{{ threeMajorBenefit.subtitle }}</p>
              <p class="cl">{{ threeMajorBenefit.txt }}</p>
            </v-col>
          </v-row>
        </v-container>

        <p class="dc-t01">DCモーター扇風機とは...？</p>
        <p class="ml-7">→ DC（直流）モーターで羽根を回すタイプの扇風機です。</p>
        <p class="dc-t01">DCモーター扇風機が売れているワケ</p>
        <p class="ml-7">
          現在ではエアコンと扇風機を併用する機会が増えてきました。<br />
          扇風機は送り出した風を身体に直接当てて涼感を得る家電ですが、<br />ライフスタイルの変化と共に、役割が変わってきて、<br />
          部屋の空気を循環させたり、エアコンで冷やされた空気を、<br />そっと送り出してくれるような扇風機が求められるようになってきました。<br />
          そこで登場したのがDCモーター扇風機。<br />
          今までより、小さな風を効率よく送り出せるようになりました。<br />（※もちろん強い風も起こせます）<br />
          必要な分だけの電力しか使わないから、ずっと省エネ。<br />
          小さなお子様や、寝室での就寝前に使うときなど、今までより、やさしい風になったコトも<br />人気の秘密です。
        </p>

        <h2 class="mt-5" id="dc002">
          <v-img src="/ec/images2/special/kaden/dcfan/b_s_01b.gif" alt="夏だけじゃない？DCモーター扇風機は年中使える！"></v-img>
        </h2>

        <p class="dc-t01">DCモーター扇風機には、こんな使い方もあります。</p>
        <p class="text-h6 font-weight-bold">（1）部屋干しのスピードを上げる！</p>
        <p class="ml-5 mb-12">
          部屋干しの時間が長くなると、雑菌が繁殖してニオイの原因に。<br />扇風機を当てれば早く乾きます。<br />
          ただし、あまりにも湿気が高い日は、除湿機や乾燥機を使いましょう。
        </p>
        <p class="text-h6 font-weight-bold">（2）暖房運転の効率UP!</p>
        <p class="ml-5 mb-12">部屋の空気を循環させます。</p>
        <p class="text-h6 font-weight-bold">（3）お風呂場の湿気対策に！</p>
        <p class="ml-5 mb-12">
          実は、換気扇よりずっと消費電力が少なく、早く風呂場が乾くんです。<br />脱衣所から首振りさせるのがオススメ。<br />
          <span class="red--text">※注※</span><br />
          扇風機は24時間連続稼働するようには設計されていません。<br />
          24時間換気の置きかえにはなりませんのでご注意下さい。<br />
        </p>
        <p class="dc-t01">DCモーター扇風機を選ぶポイントは？</p>
        <p class="text-h6 font-weight-bold">（1）扇風機の高さをチェック</p>
        <p class="ml-5 mb-12">
          ダイニングやベッドで寝る寝室には、ハイポジションタイプを選びましょう。<br />
          少し背が高く、ダイニングチェアやベッドの高さをプラスして丁度良くなります。
        </p>
        <p class="text-h6 font-weight-bold">（2）羽根の形状と、枚数をチェック</p>
        <p class="ml-5 mb-12">
          一般的に羽根の枚数が多いほど「やわらかい」風になります。<br />
          小さなお子様がいるご家庭は、ここもチェック！<br />
          それぞれ独自の形状をした羽根は循環性や遠くまで風を送るためなどで、工夫されているのも見逃せません。
        </p>
        <p class="text-h6 font-weight-bold">（3）どこまで首が動くのかをチェック</p>
        <p class="ml-5 mb-12">
          左右何度まで動くかに加えて、上下の動きができるものもあります。<br />
          サーキュレーターのように使いたいなら、上下にも動くものがオススメです。
        </p>

        <h3 id="dc003" class="mb-4">
          <v-img src="/ec/images2/special/kaden/dcfan/b_s_02.gif"></v-img>
        </h3>

        <!--▼カテゴリー-->
        <p class="mb-2">DCモーター扇風機以外もあります</p>
        <v-img src="/ec/images2/special/kaden/dcfan/b_s_03.gif" alt="その他扇風機カテゴリーはこちら" class="mb-2"></v-img>
        <v-container>
          <v-row>
            <v-col cols="3" sm="" v-for="(fanCategory, i) in fanCategoryList" :key="i">
              <v-hover v-slot="{ hover }">
                <a :href="fanCategory.href">
                  <v-img :src="hover ? fanCategory.onImage : fanCategory.offImage" max-width="65" max-height="202" class="mx-auto"></v-img>
                </a>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';

export default Vue.extend({
  name: 'kaden-dcfan',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: () => {
    document.title = 'この夏、扇風機を買うならDCモーター扇風機！ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '人気のDCモーター扇風機をご紹介。ニューモデル＆お買い得モデル取り揃え中♪お近くのカメラのキタムラで、お受け取りいただけます。'
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
          path: 'この夏、扇風機を買うならDCモーター扇風機！',
          disabled: true
        }
      ],
      naviList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_li_01.gif', alt: 'DCモーター扇風機の3大メリット', href: '#dc001' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_li_02.gif', alt: '夏だけじゃない？便利な DCモーター扇風機', href: '#dc002' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_li_03.gif', alt: 'この夏、イチオシ！ コレがベストバイ！', href: '#dc003' },
      ],
      threeMajorBenefitList: [
        { subtitle: '音が静か', txt: '羽根の回る音が今までの扇風機より小さいから、就寝時などにも気になりにくいです。' },
        { subtitle: '微風を作れる', txt: 'DCモーターの得意ワザは「低速回転」。体にやさしい微風を作れます。' },
        { subtitle: '節電効果アリ', txt: '今までの扇風機より消費電力少なめです。夏場の電力消費を抑えるのに最適です。' },
      ],
      fanCategoryList: [
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k01_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k01_on.gif', href: '/ec/ct/E007/001/001/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k01-2_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k01-2_on.gif', href: '/ec/ct/E007/001/002/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k02_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k02_on.gif', href: '/ec/ct/E007/001/003/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k04_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k04_on.gif', href: '/ec/ct/E007/001/006/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k05_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k05_on.gif', href: '/ec/ct/E007/001/007/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k06_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k06_on.gif', href: '/ec/ct/E007/001/008/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k07_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k07_on.gif', href: '/ec/ct/E007/001/009/' },
        { offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k09_off.gif', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/dcfan/b_s_k09_on.gif', href: '/ec/ct/E007/001/011/' },
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
.kaden-dcfan {
  .benefit-sub {
    width: 140px;
    height: auto;
    margin: 0;
    padding: 15px 0 0 0;
    font-size: 20px;
    line-height: 3em;
    font-weight: bold;
    float: left;
  }
  p.dc-t01 {
    margin: 20px 0 10px 20px;
    padding: 0 0 5px 0;
    font-weight: bold;
    font-size: 150%;
    border-bottom: #97d5d6 1px dashed;
  }
}
</style>