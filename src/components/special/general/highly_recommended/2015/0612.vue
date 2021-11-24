<template>
  <v-app>
    <div class="highly-recommended-2015-0612">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <titleImage></titleImage>

        <div class="mt-8 pa-0 pa-sm-4">
          <section>
            <h2 class="text-h6 font-weight-bold mb-4"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>電源ONは絶対NG！水没したスマホを救う方法</h2>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0612/1-1.jpg" max-width="440" height="auto"> </v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0612/1-2.jpg" max-width="440" height="auto"> </v-img>
              </v-col>
            </v-row>
            <p class="mt-2">
              水没したスマホの故障の原因の大半は、濡れた状態での通電・充電だといわれています。<br />
              実際に水没させてしまったことのある方なら、慌ててつい、電源を入れて動作確認をしてしまった、という経験があるのではないでしょうか。<br />
              一説によると、水没させてしまったスマホでも、電源を入れず、3日程度自然乾燥させると、70％程度復活する、といわれています。<br />
              しかし、自然乾燥だけの場合、内部に水や液体に含まれるミネラル分が付着してしまい、復活した場合でも、将来的に不具合を起こす可能性を残してしまいます。<br />
              そこで、このリバイバフォンは、水没したスマホ内部のミネラル成分を除去し、継続して使用できる事を目的とします。<br />
              そのため、水だけでなく、ジュースやお酒などの液体に漬かってしまったスマホにも対応可能です。
            </p>
            <v-img src="/ec/images2/special/general/highly_recommended/2015/0612/1-3.jpg" max-width="840" height="auto" class="mx-auto"></v-img>
          </section>
          <hr />

          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>最大90%！（※）あなたのスマホの復活可能性は？
            </h2>
            <p class="mb-2">
              リバイバフォンが復活させられるかどうかは、今のスマホの状態次第。<br />
              メーカーからは復活率の目安が公表されています。<br />
              こちらのチャートを元に、お客様のスマホの復活可能性をご確認ください。<br />
              <span class="mt-2 text-body-2">▼水没スマホ 復活可能性チャート</span><br />
              <v-img src="/ec/images2/special/general/highly_recommended/2015/0612/2-1.gif" max-width="880" height="auto" alt="" class="mx-auto" />
            </p>
            <p class="mb-5">
              リバイバフォンは、部分的に作動しているモバイル機器への使用を推奨していません。<br />
              部分的に作動している機器に使用した場合、完全に使用できなくなってしまう可能性がありますのでご注意ください。
            </p>
            <p class="mb-5">
              製品パッケージやメーカーサイトには、24時間の自然乾燥で復活、と記載されていますが、気温や室温、乾燥環境の違いで差が生じます。<br />
              24時間を経過しても、まだ乾いていないな、と感じた場合には、さらに時間を置くことをおすすめします。<br />
              復活の確立を上げるには、<span class="red--text">濡れた状態で通電しない</span>こと、<span class="red--text">しっかりと乾燥させる</span
              >ことが重要です。
            </p>
            <span class="caption">（※）メーカー調べ 水没したスマホ等に通電させず、水没後1週間以内に使用した場合</span>
          </section>
          <hr />

          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>使い方は簡単。専用の液体にスマホを浸して乾かすだけ
            </h2>
            <v-sheet color="#3498db" class="px-2 py-4 text-center white--text font-weight-bold"> ご使用方法 </v-sheet>
            <v-row class="mt-2">
              <v-col cols="12" sm="2" v-for="(howToUse, i) in howToUseList" :key="i">
                <v-img :src="`/ec/images2/special/general/highly_recommended/2015/0612/step0${i + 1}.png`" max-width="128" height="auto" class="mx-auto">
                </v-img>
                <p class="font-weight-bold text-h6 my-2 text-center">Step.{{ i + 1 }}</p>
                <p class="text-body-2">{{ howToUse }}</p>
              </v-col>
            </v-row>
          </section>
          <hr />

          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>いざ実験！実際にテストしてみた動画をご覧ください
            </h2>
            <p class="text-center">▼『リバイバフォン リペアキット Reviveaphone RV-01』の動画を見る</p>
            <watchInVideo :src="'https://www.youtube.com/embed/hv41-l1iPFk'" :height="470" :sm="12" />
            <p class="caption text-center">水没させたら、電源を入れずにリバイバフォン！</p>
          </section>
          <hr />

          <section>
            <h2 class="text-h6 font-weight-bold mb-4">水没スマホ復活の最後の希望！自己責任でも試す価値アリ</h2>
            <p>
              あらためて申し上げるのも無粋ではありますが、製品の特性上、あくまでお客様の自己責任においてご使用ください。<br />
              かなりの確立で復活させてくれるリバイバフォンではありますが、失敗することもありますし、復活した場合でも、メーカーやキャリアの保証対象からは外れてしまいます。<br />
              しかし、大切な写真やデータが入ったスマートフォン。<br />
              水没して動かなくなったスマホが復活した瞬間の喜びはひとしおです。<br />
              一か八か、試してみる価値のある商品だと思います。<br /><br />
              できれば、水没する前に<a href="/ec/special/general/highly_recommended/2015/0522"
                >以前ご紹介したiXpand<span class="caption">（アイ・エクスパンド）</span></a
              >等で、こまめにバックアップをとっておくことをおすすめします。<br /><br />
              海や川での行楽、飲み会の席や突然の豪雨など、注意していても起きてしまった万が一の事態には、このリバイバフォンに一縷の望みをかけてみてはいかがでしょうか。<br />
            </p>
          </section>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';

export default Vue.extend({
  name: 'highly-recommended-2015-0612',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
    titleImage: TitleImage
  },
  setup: () => {
    document.title = '最大90%の復活率！水没したスマホの復活剤『リバイバフォン』 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '水没したスマホを救うリバイバフォンをご紹介。海や川、飲み会の席や突然の豪雨など、注意していても起きてしまったスマホの水没。リバイバフォンに一縷の望みをかけてみてはいかがでしょうか？')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最大90%の復活率！水没したスマホの復活剤『リバイバフォン』 | 今週のイチオシ',
          disabled: true
        }
      ],
      howToUseList: ['速やかにモバイル機器の電源を落としてください。 絶対に充電をしないでください。', 'ボトルから溢さないように付属のパウチ袋に注いでください', 'モバイル機器を液体が注がれたパウチ袋に入れて口を密封して、7分間浸してください。', 'パウチ袋からモバイル機器を取り出し、付属の乾燥用トレイの上で24時間自然乾燥させてください。', '24時間経過したら、モバイル機器の電源を入れてください。', 'もし、モバイル機器が復活しない場合は、さらに24時間待ち再び電源を入れてください。']
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
section {
  background: url(/ec/images2/special/general/highly_recommended/2015/0612/bk_line.gif);
  padding: 32px;
}
hr {
  background: #fff;
  border: 0;
  border-bottom: #999 1px dashed;
  height: 30px;
  margin-bottom: 30px;
}
.highly-recommended-2015-0612 {
  p {
    line-height: 1.5em;
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    section {
      padding: 15px;
    }
  }
}
</style>