<template>
  <v-app>
    <div class="s_credit_01">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <div class="w760 text-subtitle-2">
          <v-main>
            <v-container>
              <subTitle :txt="'ショッピングクレジットのご案内'" :type="2" />

              <!-- ナビ -->
              <v-row class="mt-4 mb-8 mb-sm-16">
                <v-col cols="6" sm="4" v-for="(navi, index) in naviList" :key="index">
                  <v-hover v-slot="{ hover }">
                    <v-btn block height="50px" :color="hover ? 'grey lighten-4' : 'white'" v-scroll-to="{ el: navi.href }">
                      <span class="btn-default-color including-line-breaks">{{ navi.txt }}</span>
                      <v-icon small right color="#344976">fa fa-angle-right</v-icon>
                    </v-btn>
                  </v-hover>
                </v-col>
              </v-row>

              <!-- ショッピングクレジットとは -->
              <div id="s_credit1" class="mb-8 mb-sm-16">
                <subTitle :txt="'ショッピングクレジットとは'" :type="2" />
                <v-row class="mt-4">
                  <v-col cols="12" sm="7">
                    <p>『ショッピングクレジット』とは、お客様の購入代金を クレジットカードを使わずに、信販会社が販売店へ立替払いするシステムです。</p>
                    <p>カンタンなお手続きで長期支払いや ボーナス払い等が選択できる、当店オススメの支払方法です。</p>
                  </v-col>
                  <v-col cols="10" sm="5" class="mx-auto">
                    <v-img src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-01.png" max-width="100%" max-height="auto"></v-img>
                  </v-col>
                </v-row>
              </div>
              <!-- /ショッピングクレジットとは -->
              <!-- お支払いプラン -->
              <subTitle :txt="'お支払いプラン'" :type="2" />
              <v-row class="px-2 my-sm-10 mb-6">
                <v-col cols="12" sm="4" v-for="(paymentPlan, index) in paymentPlanList" :key="index">
                  <v-sheet color="#db710d" class="pa-2 including-line-breaks white--text text-center rounded-lg text-subtitle-1">{{ paymentPlan }}</v-sheet>
                </v-col>
              </v-row>
              <!-- /お支払いプラン -->

              <!-- 分割金利早見表 -->
              <div id="s_credit2">
                <subTitle :txt="'分割金利早見表'" :type="2" />
                <div class="pa-2 my-sm-10 mb-6 mx-auto">
                  <v-img src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-04.png" max-width="100%" height="auto" alt="分割回数 分割金利"></v-img>
                  <v-img
                    src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-05-2.png"
                    max-width="100%"
                    height="auto"
                    alt="1回～48回 分割金利0.0%"
                    class="mt-2"
                  ></v-img>
                  <v-img
                    src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-06-2.png"
                    max-width="100%"
                    height="auto"
                    alt="54回～84回 分割金利7.0%"
                    class="mt-2"
                  ></v-img>

                  <div class="mt-sm-16 mt-8 otokurei">
                    <v-img
                      src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-08.png"
                      max-width="100%"
                      height="auto"
                      alt="ショッピングクレジットの分割払いはクレジットカードの分割払いより断然おトク"
                    ></v-img>
                    <v-row class="my-4 pa-2">
                      <v-col cols="6">
                        <v-img
                          src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-09.png"
                          max-width="100%"
                          height="auto"
                          alt="ご注文額30万円 分割回数60回なら一般的なクレジットカード分割払いよりも約12万8千円お得"
                        ></v-img>
                      </v-col>
                      <v-col cols="6">
                        <v-img src="https://shop.kitamura.jp/sitemap/images/shoppingcredit-10.png" max-width="100%" height="auto" alt="分割金利グラフ"></v-img>
                      </v-col>
                    </v-row>
                    <div class="oshiharairei">
                      <span>【お支払い例】</span>
                      <p>
                        ▼ショッピングクレジット<br />
                        現金販売価格：30万円(税込) 分割支払い回数/支払い期間：60回/60ヶ月<br />
                        手数料率(実質年率)：0.0% 分割支払い金：0円(税込) 支払い総額：30万円(税込)
                      </p>
                      <p>
                        ▼クレジットカード(実質年率15.0%の場合)<br />
                        現金販売価格：30万円(税込) 分割支払い回数/支払い期間：60回/60ヶ月<br />
                        手数料率(実質年率)：15.0% 分割支払い金：12万8,220円(税込) 支払い総額：42万8,220円(税込)
                      </p>
                    </div>
                  </div>

                  <div class="mt-7 supplement pa-4 text-sm-subtitle-1">
                    <p class="komejirushi">ショッピングクレジット分割払いは、月々3千円(税込)以上、総額3万円(税込)以上のご注文からご利用いただけます</p>
                    <p class="komejirushi">
                      ジャックスショッピングクレジット分割54回、60回はご利用金額の合計が30万円(税込)以上の場合に、当店が分割払い手数料を負担いたします
                    </p>
                    <p class="komejirushi">オリコは48回まで無金利 54～84回は分割金利7.0％になります</p>
                  </div>

                  <!-- 通常金利 -->
                  <p class="mt-7 font-weight-bold">▼ 1～60回分割払い(分割手数料は当店負担)</p>
                  <div class="bs3">
                    <table class="table table-bordered text-center">
                      <tr>
                        <td class="active pa-sm-2">1回～5回</td>
                        <td class="active pa-sm-2">6回</td>
                        <td class="active pa-sm-2">10回</td>
                        <td class="active pa-sm-2">12回</td>
                        <td class="active pa-sm-2">15回</td>
                        <td class="active pa-sm-2">20回</td>
                        <td class="active pa-sm-2">24回</td>
                        <td class="active pa-sm-2">30回</td>
                        <td class="active pa-sm-2">36回</td>
                        <td class="active pa-sm-2">42回</td>
                        <td class="active pa-sm-2">48回</td>
                        <td class="active pa-sm-2">54回</td>
                        <td class="active pa-sm-2">60回</td>
                      </tr>
                      <tr>
                        <td class="red--text pa-2" colspan="13">0.0% <br /><font size="-1">※Oricoは48回まで無金利 54回～84回は分割金利7.0％</font></td>
                      </tr>
                    </table>
                    <p class="mt-7 font-weight-bold">▼ 分割72回以上低金利プラン(実質年率7.0%)</p>
                    <table class="table table-bordered text-center">
                      <tr>
                        <td class="active pa-sm-2">72回</td>
                        <td class="active pa-sm-2">84回</td>
                      </tr>
                      <tr>
                        <td class="red--text pa-2" colspan="2">7.0%</td>
                      </tr>
                    </table>
                    <!-- /通常金利 -->
                  </div>
                </div>
              </div>

              <!-- シミュレーション -->
              <div id="s_credit6" class="mt-sm-12">
                <subTitle :txt="'お支払いシミュレーション'" :type="2" />
                <div class="pa-2">
                  <!-- orico -->
                  <v-card outlined class="mt-4">
                    <v-sheet color="#db710d" class="pa-2 white--text text-center text-subtitle-1"
                      >オリコショッピングクレジットの分割払いシミュレーション</v-sheet
                    >
                    <v-row class="my-10 mx-2 text-subtitle-1">
                      <v-col cols="12" sm="6"> オリコショッピングクレジットの分割払いシミュレーションはこちら </v-col>
                      <v-col cols="12" sm="5" class="mx-auto">
                        <v-btn block class="btn-orico" height="70px" @click="linkToOtherWindow('http://simulation.m-orico.jp/kitamura48/')">
                          <span class="text-subtitle-1">48回無金利<br />シミュレーション</span>
                          <v-icon small right color="#db710d">fa fa-angle-right</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                  <!-- JACCS -->
                  <v-card outlined class="mt-6">
                    <v-sheet color="#068664" class="pa-2 white--text text-center text-subtitle-1"
                      >ジャックスショッピングクレジットの分割払いシミュレーション</v-sheet
                    >
                    <v-row class="my-10 mx-2 text-subtitle-1">
                      <v-col cols="12" sm="6">
                        ジャックスショッピングクレジットの分割払いシミュレーションはこちら<br />※30万円以上の金額でシミュレーションをしてください
                      </v-col>
                      <v-col cols="12" sm="5" class="mx-auto">
                        <v-btn block class="btn-white" height="70px" @click="linkToOtherWindow('https://ecredit.jaccs.co.jp/Service?_TRANID=WFLoginQ')">
                          <span class="text-subtitle-1">60回無金利<br />シミュレーション</span>
                          <v-icon small right color="#009944">fa fa-angle-right</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>

              <!-- よくあるご質問 -->
              <div id="s_credit3" class="mt-6 mt-sm-12">
                <subTitle :txt="'よくあるご質問'" :type="2" />
                <v-expansion-panels v-model="panel" multiple>
                  <v-expansion-panel v-for="(question, i) in questionList" :key="i">
                    <v-expansion-panel-header class="text_green4 text-sm-subtitle-1">
                      Q{{ i + 1 }}.<span class="black--text">{{ question.q }}</span>
                      <template v-slot:actions>
                        <v-icon color="#068664"> $expand </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="including-line-breaks" v-if="i === 17">
                      一度注文した内容をキャンセル頂き、再注文をお願いいたします<br />
                      <p class="allow-icon">キャンセルついては<a href="https://ecfaq.kitamura.jp/s/#faq38">コチラ</a></p>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content class="including-line-breaks" v-else-if="i === 24 || i === 30">
                      <p><span v-if="i === 24">ハイ、可能です。</span>ご利用の信販会社までお問い合わせください。</p>
                      <p><a v-scroll-to="{ el: 's_credit5' }">株式会社 オリエントコーポレーションはこちら</a></p>
                      <p><a v-scroll-to="{ el: 's_credit5' }">株式会社ジャックス 東京審査センターはこちら</a></p>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content class="including-line-breaks" v-else-if="i === 32">
                      <p>ご利用のメールアドレスについて、下記に該当していないかご確認をお願いします。</p>
                      <p>
                        「@」の直前にピリオド「.」がある<br />
                        メールアドレスの先頭にピリオド「.」がある<br />
                        「@」の左側に、連続したピリオド[.」がある<br />
                        「@」の左側に、『利用可能な記号』以外の記号が含まれている<br />
                        『利用可能な記号』. ! # $ % & ‘ * + – / = ? ^ _ { | } ~
                      </p>
                      <p>
                        上記のいずれか該当する場合は、ショッピングクレジットのお手続きができません。<br />キタムラネット会員の会員情報変更ページにて上記に該当しないメールアドレスへ変更していただき、再度、ご注文手続きをお願いします。
                      </p>
                      <p>
                        ■キタムラネット会員 会員情報変更ページ<br /><a href="https://member.kitamura.jp/group/account/update.do"
                          >https://member.kitamura.jp/group/account/update.do</a
                        >
                      </p>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content class="including-line-breaks line-height" v-else>
                      {{ question.a }}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <!-- 注意事項 -->
              <div id="s_credit4" class="mt-6 mt-sm-12">
                <subTitle :txt="'注意事項'" :type="2" />
                <div class="pa-4">
                  <p class="line-height text-sm-subtitle-1">
                    1回のご注文合計金額が3万円（税込）以上、月々3,000円（税込）以上のお支払いからご利用いただけます<br />
                    メールアドレス（ＰＣ、携帯）をお持ちでないお客さまは、ショッピングクレジットをご利用いただけません<br />
                    クレジット会社の審査によりクレジット契約書の作成(ご署名・ご捺印)が必要となる場合がございます。また、審査により意に添えない場合もございますのでご了承下さい<br />
                    審査に関しましては、審査完了までお時間がかかる場合がございますので予めご了承を下さいませ
                  </p>
                </div>
              </div>

              <!-- お問い合せ -->
              <div id="s_credit5" class="mt-6 mt-sm-12 text-sm-subtitle-1">
                <subTitle :txt="'お問い合せ'" :type="2" />
                <div class="pa-4">
                  <p class="line-height">
                    お客様の「ショッピングクレジット」の申込が完了したかの確認、 及び「ショッピングクレジット」全般についてのご相談については、
                    当店指定の信販会社までお問い合わせください。
                  </p>
                  <div class="well mt-4">
                    株式会社 オリエントコーポレーション<br />TEL：03-5226-1881<br />
                    営業時間：9:30～17:30（土・日祝日及び年末年始除く）
                  </div>
                  <div class="well mt-4">
                    株式会社 ジャックス 東京審査センター<br />TEL：042-812-1716<br />
                    営業時間：10:00～20:00（年末年始を除く）
                  </div>
                </div>
              </div>
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
import SubTitle from '@/components/common/guide/subtitle.vue';

export default Vue.extend({
  name: 's_credit_01',
  components: {
    breadcrumbs: Breadcrumbs,
    subTitle: SubTitle,
  },
  setup: (props, context) => {
    document.title = 'ショッピングクレジットのご案内｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ショッピングクレジットのご案内',
          disabled: true
        }
      ],
      naviList: [
        { txt: 'ショッピング\nクレジットとは', href: '#s_credit1' },
        { txt: '実質年利\n早見表', href: '#s_credit2' },
        { txt: 'お支払い\nシミュレーション', href: '#s_credit6' },
        { txt: 'よくある質問', href: '#s_credit3' },
        { txt: '注意事項', href: '#s_credit4' },
        { txt: 'お問い合せ', href: '#s_credit5' },
      ],
      paymentPlanList: ['分割払いボーナス\n併用なし', '分割払いボーナス\n併用あり', 'ボーナス\n一括払い'],
      panel: [],
      items: 5,
      questionList: [
        { q: 'ショッピングクレジットどんな決済方法？', a: '株式会社オリエントコーポレーション（以下、オリコ）、株式会社ジャックス（以、ジャックス）にて提供させていただく分割払いサービスです。\nクレジットカードをお持ちで無くても、「分割支払い」「ボーナス支払い」がご利用いただけます。\nショッピングローンとも言います。' },
        { q: '誰でも申し込みできるの？', a: 'ハイ、国内在住の成人の方でしたらどたでもお申込みをいただけます。\n「未成年」「海外在住の方」はお申込みをいただけません。' },
        { q: '法人は申込みできるの？', a: '申し訳ございません。\n法人申込はご利用いただけません。' },
        { q: 'どうやって申込みするの？', a: '1.「買い物かごに入れる」ボタンを押してSTEP４のお支払い方法で『ショッピングクレジット』を選択します。\n↓\n2.STEP6の「入力完了」画面にてお申込みフォームから必要事項をご入力下さい。\n↓\n3.お申込み完了！\n審査の結果、承認されましたらお申込み完了です。\n契約書の内容確認書類は後日ご利用の信販会社より郵送致します。店舗受取の場合は、店舗にてお申込みください。' },
        { q: '住所入力欄には勤務先の住所を入力してもいいですか？', a: '住所欄にはご自宅のご住所をご入力下さい。' },
        { q: '支払回数は何回ですか？', a: 'お支払い回数は1回から最長84回までの毎月均等払い（ボーナス併用可能）です。又、ボーナス一括、ボーナス2回払いも選択可能です。' },
        { q: 'いつでも申込みできるの？', a: 'ハイ、当店の『ショッピングクレジット』なら24時間お申込みが可能です。' },
        { q: '審査にはどのくらい時間がかかるの？', a: '最短で3分程度で可能です。（業界最速） ※但し9:00～20:30までに申込完了分のみ\n審査結果によってはお時間がかかる場合がありますが最長でも24時間以内には審査完了いたします。' },
        { q: '自宅以外にも配送は出来るの？', a: '申し訳ございません。\nセキュリティー上、配送はお申込者様のご自宅又は勤務先のみとさせていただきます。' },
        { q: '月々いくらから支払いができますか？', a: '月々3,000円(税込）以上であれば最長84回までご指定いただけます。無理なくライフプランに合わせたお支払い回数をご選択いただけます。' },
        { q: '分割支払い途中で取り決めた金額より余分に支払いは可能ですか？', a: 'お申込み時に取り込めた金額より余分に支払はできません。ご契約どおりもしくは残金一括払いでのお支払いとなります' },
        { q: 'いくらの商品から分割で購入できますか？', a: '合計3万円(税込）以上のお買い物でご利用いただけます。' },
        { q: '分割払手数料は変動しますか？', a: '変動はいたしません。\nご購入時の手数料が上がることはございませんので安心してご利用いただけます。' },
        { q: 'ボーナス月に加算はできますか？', a: 'ハイ、加算いただけます。\nボーナス月の加算はクレジット支払残金の50%以内です。' },
        { q: 'ボーナス一括・2回払いの金利は何％ですか？', a: '【オリエントコーポレーション（オリコ）】\nボーナス一括支払いは金利手数料2.50%、ボーナス二括は金利手数料5%で、いずれもお客様のご負担となります。\n\n【ジャックス】\nボーナス一括支払いは金利手数料2.50%、ボーナス二括は金利手数料4%で、いずれもお客様のご負担となります。' },
        { q: '審査はどんなことを調べるの？', a: 'お客様が支払のため分割で選択された期間、滞りなくお支払いいただけるかどうかの審査となります。ご入力いただいた情報から総合的に判断させていただきます。その結果、お申込みをお引受できない場合もございます。\n\n※審査に関するご入力情報は当店ではなく直接信販会社の審査システムに送信されます' },
        { q: '会社への在籍確認や本人確認の連絡はあるの？', a: '主にWeb上、もしくは審査結果通知メールにて契約内容を確認していただきます。審査結果によっては電話確認、在籍確認をさせていただく場合もございます。' },
        { q: '申込手続き途中でを止めてしまいました。どうしたら良いですか？', a: '' },
        { q: '本人確認書類（免許証等）は送付する必要はありますか？', a: '原則として送付していただく必要はございません。 審査上、住所確認資料をいただく場合は別途電話にて連絡させていただきます。' },
        { q: '携帯やスマートフォンから利用できますか？', a: 'ハイ、パソコンの他にも殆どのスマートフォンやタブレット端末からご利用いただけます。これらの端末なら「携帯アドレス」でもお申込みいただけますが、スマートフォン以外の「携帯電話」（フィーチャー・フォン）からのお申込みはいただけません。' },
        { q: 'どうやって支払うの？', a: 'お支払いは、銀行、郵便局、その他各種金融機関の契約者ご本人名義の口座をご登録いただき、信販会社からのお引き落としとなります。\n口座の登録が完了していない場合やお引き落としができなかった場合、お振込やコンビニでのお支払いをお願いする場合がございます。' },
        { q: '親名義及び配偶者名義の口座からの支払はできるの？', a: 'お支払いの為の口座登録はご契約者本人名義のみとさせていただいております。\n※ご本人様名義の口座でも会社名や屋号、業種の入った口座はご登録ができません' },
        { q: '法人名義の口座からお支払いはできるの？', a: '申し訳ございません。\n法人申込はご利用いただけません。' },
        { q: '支払はいつから始まるの？', a: '【店舗受取の場合】\n店舗にて商品受取時の翌月もしくは翌々月27日からのお支払い開始となります。\n但し、お申込みをいただいたのが21日以降の場合は翌々月からのお支払い開始となります。\n\n【宅配の場合】\nお買上げ商品の当店発送月の翌月27日もしくは翌々月27日からのお支払い開始となります。\n但し、お申込みをいただいたのが21日以降の場合は翌々月27日からのお支払い開始となります。\n\n※金融機関の休日等諸事情により支払い開始月が1月遅れる場合がございます。\n例1…2月1日発送の場合、3/27が第一回目のお支払い開始\n例2…2月21日発送の場合、4/27が第一回目のお支払い開始' },
        { q: '支払期間中に残金一括することは可能ですか？', a: '' },
        { q: '支払い明細書はありますか？', a: 'ハイ、ございます。\n初回支払月の20日前後までにご契約者本人宛てに信販会社より送付させていただきます。\nお支払い金額、回数、スケジュールが確認いただけます。' },
        { q: 'クレジットカードを持っていません。分割払いの購入は可能ですか？', a: 'ハイ、ご利用いただけます。\n『ショッピングクレジット』はクレジットカードを持っていなくても分割払いが可能な決済方法です。' },
        { q: '支払回数の変更は可能ですか？', a: 'お申込み後の変更はお受けする事が出来ません。' },
        { q: '引き落とし口座の設定はどうやってするの？', a: 'ご契約成立後、信販会社より口座振替依頼書を送付させていただきますので、ご利用の信販会社宛にご返信ください。\n返信が遅れますと引き落とし手続きが間に合わない場合がございます。' },
        { q: '引き落とし当日の27日に引落口座へ入金しても間に合いますか？', a: '引き落とし日前営業日までにご準備いただきますようお願いいたします。' },
        { q: 'お支払いについての問い合わせ先は？', a: '' },
        { q: '納品まで長期間かかる商品でも、「ショッピングクレジット」を利用することができますか？', a: 'はい、ご利用いただけます。\n但し、申込から商品受取まで３ヶ月を超える場合、再度お申込・再審査が必 要となる場合がございます。' },
        { q: 'ショッピングクレジットの手続きをしようとしたらエラーになりました。', a: '' },
      ]
    });

    function linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }

    return {
      ...toRefs(state),
      linkToOtherWindow
    };
  }
});
</script>

<style lang="scss" scoped>
.btn-default-color {
  color: #344976;
}

.otokurei {
  border: 1px #078e6e solid;
}

.oshiharairei {
  background: #ebf8e7;
  color: #078e6e;
  font-size: 90%;
  padding: 15px;
}

.komejirushi:before {
  content: '※';
}

.supplement {
  border: 1px #f05a00 solid;
  margin: auto;
  color: #f05a00;
}

.bs3 .table-bordered {
  border: 1px solid #ddd;
}

.bs3 .table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 120%;
}

.bs3 .table .active {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  line-height: 1.42857143;
  vertical-align: top;
}

.btn-orico {
  background: #fff;
  border: 2px solid #db710d;
  color: #db710d !important;
}

.btn-white {
  border: 2px solid #009944;
  color: #009944;
}

.list-group-item {
  border: 1px solid #ddd;
  margin-bottom: -1px;
}

.text_green4 {
  color: #068664;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
}
</style>