<template>
  <v-app>
    <div class="highly-recommended-2015-0529">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <titleImage></titleImage>

        <div class="my-4 pa-6 line-g"></div>

        <content2015 :subtitle="'大切なカメラを湿気から守り、美しく飾る防湿庫'" :youtubeLink="'https://www.youtube.com/embed/I_atYx49r-I'"></content2015>
        <hr />

        <div v-for="(content, i) in contentList" :key="i">
          <content2015
            :subtitle="content.title"
            :txt="content.txt"
            :images="[
              `/ec/images2/special/general/highly_recommended/2015/0529/${i + 1}-1.jpg`,
              `/ec/images2/special/general/highly_recommended/2015/0529/${i + 1}-2.jpg`
            ]"
            :maxWidth="440"
          ></content2015>
          <hr />
        </div>

        <!--↓⑤-->
        <div class="mt-8 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>性能は折り紙つき 信頼と実績の日本製電子ドライユニット
          </h2>
          <p class="mb-2">光触媒機能付き、日本製電子ドライユニットを搭載しており、性能は折り紙つきです。</p>
          <ul class="pl-10 text-body-1 mb-2">
            <li><span class="marker">内容量118リットル</span>、一眼レフ本体で約24台の収納が可能<br />（※ 一眼レフ本体収納目安はW128mm×H97mm×D75mm)</li>
            <li>電気代は<span class="marker">１日１円以下</span>の省エネ設計</li>
            <li>高級機の収納にも安心な<span class="marker">鍵付扉</span></li>
            <li>湿度計は見やすい<span class="marker">デジタル表示</span></li>
            <li>本体は安心の<span class="marker">５年間無償保証</span>（湿度計は３年間）</li>
          </ul>
          <v-img src="/ec/images2/special/general/highly_recommended/2015/0529/4-1.gif" max-width="900" height="auto"></v-img>
        </div>
        <hr />

        <content2015
          :subtitle="'ありそうでなかった機能を実現。実績ある東洋リビング製なので自信を持っておすすめできます'"
          :isGoodIcon="false"
          :txt="'大切な愛機や自慢のコレクション。カビやホコリから守るために、防湿庫に収納しているものの、せっかくの名機が暗くて見えない、というのがこれまでの防湿庫でした。\n\n大好きなカメラを見たい、見せたいというカメラ愛好家の皆さんの思いを実現する防湿庫。\nCP+に参考出品された試作機を見せてもらって以来、カメラ好きの目線に立った東洋リビングのものづくりに、担当者が深く共感した一台です。\n\nLEDライトは十分な明るさがあり、カメラを引き立たせてくれます。\n実際に使ってみると、庫内のコンセントが非常に便利。\n楽しさと利便性の両面からおすすめできる一台です。'"
        ></content2015>

        <backnumbers :list="backnumberList"></backnumbers>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';
import Content2015 from '@/components/common/special/highly-recommended/content.vue';
import BackNumbers from '@/components/common/special/highly-recommended/back-numbers.vue';

export default Vue.extend({
  name: 'highly-recommended-2015-0529',
  components: {
    breadcrumbs: Breadcrumbs,
    titleImage: TitleImage,
    content2015: Content2015,
    backnumbers: BackNumbers
  },
  setup: () => {
    document.title = 'LEDライト搭載 見せる防湿庫 東洋リビングLD-120 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ドア連動型の18連LEDライトを搭載。カメラを守るだけでなく、みせる防湿庫が登場。眺めて楽しく、出し入れしやすいプレミアムモデル。')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'LEDライト搭載 見せる防湿庫 東洋リビングLD-120 | 今週のイチオシ',
          disabled: true
        }
      ],
      contentList: [
        {
          title: '「収納庫」から「ショーケース」へみせる防湿庫への発想の転換',
          txt: 'カメラ愛好家にとっては、一家に一台の必需品、防湿庫。カメラ・レンズを、最大の敵、カビと湿気から守る重要なアイテムです。\n\n防湿庫といえば、あくまで収納庫、地味で目立たず、外観のデザインにはあまりこだわらないものがほとんどでした。 そこに近年、ミラーレス一眼のブームなどを受け、インテリアに馴染む、ホワイトやカラフルなモデルが発売され、賑わいをみせてきました。\n\n隠すものから見せるものへ、防湿庫の進化をさらに推し進めたのがLD-120です。',
        },
        {
          title: '照明技術の進化で実現したドア連動型 18連LEDライト',
          txt: 'なんとなく、冷蔵庫を思わせる防湿庫。\n「ドアを開けてもライトはつかないの？」というのはよくあるご質問です。\n\n従来の蛍光灯や白熱電球の場合、熱や紫外線を発し、機材に悪影響を及ぼす可能性がありました。\n発熱、紫外線照射の少ないLED電球が普及したことで、庫内を明るく照らすことができるようになりました。\n\nLD-120は自慢のコレクションを美しく照らす『常時点灯モード』と出し入れの利便性を高める『ドア開閉連動モード』とをスイッチひとつで簡単に切り替え可能。',
        },
        {
          title: 'デジカメ時代の新機能。庫内充電が可能なコンセントを搭載',
          txt: '充電器をはじめとした、デジカメの関連アクセサリーも、すっきりまとめて収納したいものです。\n最近では、マイクロUSB端子を介して、バッテリーを取り出さずに充電できるデジカメも増えてきました。\n\nせっかくカメラを守るために防湿庫を購入したのに、充電のためにカメラを一晩出しっぱなし、なんてこともあります。 LD-120は庫内にコンセントを搭載しているので、防湿庫に収納した状態でカメラの充電が行えます。\n\nフィルムカメラが中心の頃にはなかった、デジカメ時代に即した新機能です。',
        },
      ],
      backnumberList: [
        {
          src: 'https://shop.kitamura.jp/ts_rsc/585/images/i-item_fujin_350px.jpg',
          href: '/ec/special/general/highly_recommended/2015/0508',
          productName: 'レンズ型カメラ掃除機 Fujin「風塵（ふうじん）」 EF …',
          txt: 'カメラメンテナンス・クリーニングの決定版！ 1分間でイメージセンサーについたホコリを掃除できるレンズ型カメラ掃除機。運動会後や撮影前後のケ…【続き】'
        },
        {
          src: 'https://shop.kitamura.jp/ts_rsc/585/images/i-item-blackrapid-joby_350px.jpg',
          href: '/ec/special/general/highly_recommended/2015/0501',
          productName: 'ブラックラピッド クロスショット × JOBY ウルトラハ …',
          txt: '速写ストラップをつけたまま、三脚を使う裏技！JOBYウルトラプレートを使えば、速写ストラップをつけたまま、三脚が使える。一眼ユーザーの要望 …【続き】'
        },
      ]
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
.highly-recommended-2015-0529 {
  p {
    line-height: 1.5em;
    font-size: 18px;
    color: #1a0708;
  }
  li {
    margin-top: 1em;
    list-style-type: square;
    margin-bottom: 2px;
    line-height: 1.4em;
    color: #1a0708;
  }
}
</style>