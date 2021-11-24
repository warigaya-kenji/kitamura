<template>
  <v-app>
    <div class="highly-recommended-2015-0807">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <titleImage></titleImage>

        <div class="mt-8">
          <content2015
            :subtitle="'なんでそんなに売れているの？「セラフィット」フライパン'"
            :txt="'パッと見て分かる通り、このフライパンは表面が「白い」ですね。これはダイヤモンドの次に硬いセラミックでコーティングされています。普段使っているテフロン加工などのフライパン、使っている内にコーティングが剥がれてくっついたり焦げ付いたりしてきますよね？それがこのセラミックフライパンなら、通常の使い方をしていれば丈夫で長持ち！つるつる滑るように使えるのが人気の理由なんです。'"
          ></content2015>
          <hr />

          <content2015
            :subtitle="'焦げないだけじゃない！だから使える！セラフィット'"
            :txt="'さらに、それだけじゃないセラフィットの人気の秘訣。そう、それは油の使用を節約できることです！油を使わなくてもコゲないので 「油通し」が長持ちさせる秘訣です。ヘルシーに素材の味を活かした料理ができるんです！油を使わずカロリーセーブもできるなんて一石二鳥ですね。 ※使い始めと、定期的な「油通し」は長持ちさせるためにしましょう！'"
          ></content2015>
          <hr />

          <content2015
            :subtitle="'遠赤外線効果で省エネも！'"
            :txt="'さらに！セラフィットの特徴は「遠赤外線効果」 熱伝導率の高い素材とセラミックの遠赤外線効果で弱い火でも十分に調理ができます！ガス・IH両対応ですが、どちらも節約できそうですね。 逆に強火には弱いので、省エネな火力で使ってあげて下さい。'"
          ></content2015>
          <hr />

          <content2015
            :subtitle="'気になる耐久性＆お手入れは？'"
            :txt="'セラフィットの苦手なものは「強い摩擦」。金属ヘラなどは使わないほうが長持ちします。金タワシなども使わないほうが良いです。というのもそれが必要になるほど焦げ付いたりしないからです。料理が終わったらサッと拭いたり、かるく洗ってあげるだけで十分キレイになります。後片付けが簡単になるのも嬉しいポイントですね！'"
            :image="'https://shop.kitamura.jp/ts_rsc/651/images/02.jpg'"
          ></content2015>
          <hr />

          <section>
            <h2 class="text-h6 font-weight-bold mb-5">『セラミックフライパンセット セラフィット』の製品特徴・仕様</h2>
            <p class="f18px mt0 mb10">
              【製品特徴】<br />
              ■ダイヤモンドの次に硬い「セラミックコーティング」を採用。食材がくっつかない！<br />
              ■焦げつきにくく、サッと拭くだけで汚れが落ちるから、お手入れもラクラク<br />
              ■焼きムラなく仕上がりきれいに、おいしく調理できる！<br />
              ■ガス・IH・電気・ハロゲン、すべてのコンロで使用OK！<br />
            </p>
            <p class="f18px mt0 mb10">
              【製品仕様】<br />
              ●セット内容：28cmフライパン×1、28cmガラス蓋 ×1、24cmフライパン×1、24cmガラス蓋×1、20cmフライパン×1、取っ手×3、重ね収納用マット×2<br />
              ●本体サイズ：<br />
              ・フライパン<br />
              20cm：Φ208mm×H43mm<br />
              24cm：Φ248mm×H48mm<br />
              28cm：Φ288mm×H53mm<br />
              ・ガラス蓋<br />
              24cm：Φ250mm×H35mm<br />
              28cm：Φ290mm×H40mm<br />
              ・ハンドル<br />
              20cm：L152mm<br />
              24cm：L178mm<br />
              28cm：L178mm<br />
              ・収納パット：φ395mm<br />
              ●質量：<br />
              ・フライパン（ハンドル含む）<br />
              20cm：約0.6kg<br />
              24cm：約0.8kg<br />
              28cm：約1.0kg<br />
              ●コーティング：セラミックコーティング<br />
              ●材質：本体/アルミニウム、はり底/ステンレス、取っ手・ツマミ/フェノール樹脂<br />
            </p>
          </section>
          <hr />

          <backnumbers :list="backnumberList"></backnumbers>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';
import Content2015 from '@/components/common/special/highly-recommended/content.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import BackNumbers from '@/components/common/special/highly-recommended/back-numbers.vue';

export default Vue.extend({
  name: 'highly-recommended-2015-0807',
  components: {
    breadcrumbs: Breadcrumbs,
    titleImage: TitleImage,
    content2015: Content2015,
    backnumbers: BackNumbers
  },
  setup: () => {
    document.title = '人気のフライパン！”セラフィット”IH対応フライパン | 今週のイチオシ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'TVでお馴染みのあの焦げ付かないセラミックフライパン「セラフィット」')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '人気のフライパン！”セラフィット”IH対応フライパン | 今週のイチオシ',
          disabled: true
        }
      ],
      backnumberList: [
        {
          src: 'https://shop.kitamura.jp/ts_rsc/649/images/i-item_350px.jpg',
          href: '/ec/special/general/highly_recommended/2015/0731',
          productName: '可変式ND(減光)フィルター「ケンコー バリアブルNDX」',
          txt: ''
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