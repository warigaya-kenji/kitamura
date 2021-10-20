<template>
  <v-app>
    <div class="syouhinQ&A">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-img
          src="https://shop.kitamura.jp/syuuri/syouhinQ&A/images/title_syuuri_shouhin_faq.gif"
          max-width="948px"
          max-height="50px"
          alt="修理に出す前にココをチェック！"
        ></v-img>

        <div class="w760 text-subtitle-2">
          <v-main>
            <v-container>
              <p>ここでは修理が必要なかったケースを簡単にリストアップしております。</p>
              <p>
                お預りから、ご返却までは多少なりともお時間がかかります。<br /><span class="font-weight-bold"
                  >あれ？と思っても修理に出す前にもう一度チェック！</span
                ><br />以外と解決方法がその場で見つかるかもしれません。
              </p>
              <p>修理に出す手間や時間節約のために是非ともご活用ください。</p>
              <!-- question navi -->
              <v-row class="section mt-4">
                <v-col cols="12">
                  <li>
                    <p class="text-subtitle-1 font-weight-bold">
                      <v-icon x-small left color="red">fas fa-square</v-icon>故障かな？下記リストを一度チェック下さい
                    </p>
                    <ul class="listInnerlink mb-2 pa-0">
                      <li v-for="(navi, index) in naviList" :key="index">
                        <a v-scroll-to="`#faq${index + 1}`">{{ navi }}</a>
                      </li>
                    </ul>
                  </li>
                </v-col>
              </v-row>

              <!-- /question navi -->

              <!-- question List -->
              <div class="mt-6" v-for="(item, index) in contentList" :key="index">
                <v-sheet :id="`faq${index + 1}`" class="py-2 px-4 white--text font-weight-bold text-sm-subtitle-1" color="#b0d246">
                  Q.{{ item.title }}
                </v-sheet>
                <div v-for="(quesiton, i) in item.questionList" :key="i">
                  <v-sheet class="py-2 px-4 font-weight-bold text-sm-subtitle-1 my-4" color="#eee">
                    {{ quesiton.q }}
                  </v-sheet>
                  <ul class="listNormal mb-6" v-if="index === 5 && i === 1">
                    <li>
                      新しいメディアに入替え・不要な画像消去・別メディアへコピー等、容量を確保して下さい。<br />フォーマット作業を行った後のメディアに関しては<a
                        v-scroll-to="'#faq9'"
                        >メディアが認識されない</a
                      >参照
                    </li>
                  </ul>
                  <ul class="listNormal mb-6" v-else>
                    <li v-for="(answer, i) in quesiton.a" :key="i">{{ answer }}</li>
                  </ul>
                </div>
                <p class="text-right mt-2"><a href="#top" class="allow-top">ページトップへ</a></p>
              </div>

              <div class="mt-6">
                <v-sheet :id="'faq12'" class="py-2 px-4 white--text font-weight-bold text-sm-subtitle-1" color="#b0d246">
                  Q.上記以外の症状の場合はこちら
                </v-sheet>
                <div>
                  <v-sheet class="py-2 px-4 font-weight-bold text-sm-subtitle-1 my-4" color="#eee"> 『お客さまなんでも相談室』までご相談下さい </v-sheet>
                  <p>電話番号 <span class="red--text">050-3116-8888</span>（※通話料はお客様負担になります。）</p>
                  <p>受付時間 10:00～19:00 (年末・年始を除く)</p>
                  <v-sheet class="py-2 px-4 font-weight-bold text-sm-subtitle-1 my-4" color="#eee">
                    商品についての詳細は各メーカーサイト・お客様サポートページをご参照下さい。
                  </v-sheet>
                  <p>>>主要メーカーお客様サポートページ一覧</p>
                  <v-row class="mb-4 mb-sm-10">
                    <v-col cols="12" sm="4">
                      <ul class="listArrow list-none">
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://cweb.canon.jp/e-support/index.html" target="_blank" class="icoOpen">キヤノン</a>
                        </li>
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://www.sony.jp/support/" target="_blank" class="icoOpen">ソニー</a>
                        </li>
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://panasonic.jp/support/" target="_blank" class="icoOpen">パナソニック</a>
                        </li>
                      </ul>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <ul class="listArrow list-none">
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://fujifilm.jp/support/index.html" target="_blank" class="icoOpen">フジフィルム</a>
                        </li>
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://www.olympus.co.jp/jp/support/cs/index.html" target="_blank" class="icoOpen">オリンパス</a>
                        </li>
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://casio.jp/support/" target="_blank" class="icoOpen">カシオ</a>
                        </li>
                      </ul>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <ul class="listArrow list-none">
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://www.nikon-image.com/support/index.htm" target="_blank" class="icoOpen">ニコン</a>
                        </li>
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://www.pentax.jp/japan/support/product_faq.html" target="_blank" class="icoOpen">ペンタックス</a>
                        </li>
                        <li>
                          <v-icon small left color="red">fas fa-caret-right</v-icon
                          ><a href="http://www.ricoh.co.jp/support/" target="_blank" class="icoOpen">リコー</a>
                        </li>
                      </ul>
                    </v-col>
                  </v-row>
                </div>
              </div>
              <!-- /question List -->
              <userguide />
            </v-container>
          </v-main>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import Userguide from '@/components/common/guide/user-guide.vue';
export default Vue.extend({
  name: 'syouhinQ&A',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = '修理に出す前にココをチェック！｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '修理のご案内',
          linkUrl: '/ec/guide/syuuri',
          disabled: false
        },
        {
          path: '修理に出す前にココをチェック！',
          disabled: true
        }
      ],
      naviList: [
        'バッテリーが充電できない',
        '電源スイッチを《ON》にしてもカメラが作動しない',
        '電源スイッチを《OFF》にしてもアクセスランプが点滅する',
        'バッテリーの消耗が早い',
        '電源が勝手に切れる',
        '撮影・記録ができない',
        '液晶モニターの表示・画像が不鮮明になる',
        '画像がボケて写っている',
        'メディアが認識されない',
        '日付が写し込まれない',
        'フラッシュが発光しない',
        '上記以外の症状の場合はこちら',
      ],
      contentList: [
        {
          title: 'バッテリーが充電出来ない',
          questionList: [
            { q: '専用のバッテリーを使用していますか？', a: ['専用バッテリーを使用してください', '機種により充電時間は異なります。メーカー取扱説明書をご確認下さい'] },
            { q: '充電器に正しく取り付けていますか？', a: ['裏表間違いなく、正しいやり方でバッテリーパックを取り付けてください', '接点の汚れを拭いてみてください'] },
          ]
        },
        {
          title: '電源スイッチを《ON》にしてもカメラが作動しない',
          questionList: [
            { q: 'バッテリーが消耗していませんか？', a: ['バッテリーパックを充電してください（お買い上げ時のバッテリーは充電が必要な場合がございます）'] },
            { q: '充電器に正しく取り付けていますか？', a: ['裏表間違いなく、正しいやり方でバッテリーパックを取り付けてください', '接点の汚れを拭いてみてください'] },
            { q: 'バッテリー室が開いていませんか？', a: ['バッテリー室の蓋をしっかりと閉めてください'] },
          ]
        },
        {
          title: '電源スイッチを《OFF》にしてもアクセスランプが点滅する',
          questionList: [
            { q: 'メディアスロットカバーが開いていませんか？', a: ['メディアスロットカバーをしっかりと閉めて下さい'] },
            { q: '撮影後、すぐに電源のスイッチを《OFF》にしていませんか？', a: ['メディアへの画像記録を行うため、数秒間はアクセスランプが点灯/点滅します', 'メディアへの画像記録が終了すれば、アクセスランプは消え自動的に電源が切れます'] },
          ]
        },
        {
          title: 'バッテリーの消耗が早い',
          questionList: [
            { q: 'バッテリーが充分に充電されていますか？', a: ['バッテリーパックを充分に充電してください'] },
            { q: '充電式の乾電池の場合', a: ['単三型などの汎用型の乾電池にはさまざまなメーカーの種類がありますが、デジタルカメラ用としては適さないものもあります。メーカー推奨のデジタルカメラ用の電池を使用して下さい'] },
            { q: 'バッテリーの寿命ではありませんか？', a: ['新しいバッテリーパックをお買い求めください'] },
          ]
        },
        {
          title: '電源が勝手に切れる',
          questionList: [
            { q: 'バッテリーの寿命ではありませんか？', a: ['新しいバッテリーパックをお買い求めください'] },
            { q: 'オートパワーオフが働いていませんか？', a: ['シャッターボタンを半押ししてください。', 'オートパワーオフ機能が働かないようにするときは、取扱説明書をご参照ください'] },
          ]
        },
        {
          title: '撮影・記録ができない',
          questionList: [
            { q: 'メディアは正しくセットされていますか？', a: ['メディアを正しくセットしてください。メディアを差し込む時に異物感がある場合は慎重に'] },
            { q: 'メディアの容量がいっぱいになっていませんか？', a: [''] },
            { q: 'カメラに対応したメディアが入っていますか？', a: ['カメラメーカーの動作確認済みメディア等、カメラが対応出来るメディアを使用してください'] },
            { q: 'ピントは合っていますか？', a: ['AF時、合焦しないとシャッターが降りない設定になっている場合があります。\nピントを合わせるか、手動でピントを合わせてください'] },
            { q: '再生モードになっていませんか？', a: ['撮影可能なモードに変更してください'] },
          ]
        },
        {
          title: '液晶モニターの表示・画像が不鮮明になる',
          questionList: [
            { q: 'ゴミやホコリがついていませんか？', a: ['眼鏡拭きや、柔らかい布などでモニターを拭いてください'] },
            { q: 'モニターが日焼けしていませんか？', a: ['高熱にあたると焼付けが起こる場合がございます。車内で保管している場合はご注意下さい。'] },
          ]
        },
        {
          title: '画像がボケて写っている',
          questionList: [
            { q: 'レンズのフォーカスモードが《MF》になっていませんか？', a: ['レンズのフォーカスモードを《AF》に変更してください'] },
            { q: 'シャッターボタンを押すときに、手ブレを起こしていませんか？', a: ['手ブレをおこさないように静かにシャッターボタンを押してください\n（暗所・望遠や近接撮影ではブレやすくなります）'] },
          ]
        },
        {
          title: 'メディアが認識されない',
          questionList: [
            { q: 'メディアは正しくセットされていますか？', a: ['メディアを正しくセットしてください'] },
            { q: 'メディアはフォーマットされていますか？', a: ['メディアをカメラ側でフォーマットし直してください'] },
          ]
        },
        {
          title: '日付が写し込まれない',
          questionList: [
            { q: '日付の設定はされていますか？', a: ['日付設定を正しく設定してください'] },
            { q: '日付モードがオフになっていませんか？', a: ['日付モードを写し込みモードにしてください'] },
            { q: 'プリンターの日付設定はオフになっていませんか？', a: ['ご自宅、もしくはプリントショップでご確認ください'] },
            { q: '日付は表示されていますか？', a: ['日付の写し込みには、カメラの電源と別に電池を使用している機種があります\n表示されない場合は電池をチェックしてください'] },
          ]
        },
        {
          title: 'フラッシュが発光しない',
          questionList: [
            { q: 'フラッシュが充電中ではありませんか？', a: ['フラッシュの充電が終了するのを待ってください'] },
            { q: 'フラッシュが発光禁止になっていませんか？', a: ['発光禁止モードを解除してください'] },
            { q: 'カメラ側のシンクロ接点は正常ですか？', a: ['テスト発光してください（外付け式ストロボの場合、シンクロ接点をショートさせてください）\nこれで発光する場合は、ストロボ自体は正常。ボディ側の問題となります'] },
          ]
        },
      ]
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.section ol > li {
  margin: 0 0 2px 2em;
  list-style-type: decimal;
  list-style-position: inherit;
}

.section ul li,
ol li {
  line-height: 1.6em;
}

.section li {
  list-style: none;
}

.section ul.listInnerlink li,
ul.listInnerlinkSide li {
  margin: 0 3px 4px 0.5em;
  padding: 0 2px 0 12px;
  background: url(https://shop.kitamura.jp/common/images/mkr_arrow_innerlink.gif) no-repeat left 0.5em;
}
</style>
