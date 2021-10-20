<template>
  <v-app>
    <div class="hoshou">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'5年間保証'" />
        <p class="pl-6">中古カメラの保証については<router-link to="used_hoshou.html">コチラ</router-link></p>

        <div class="w720 text-subtitle-2">
          <!-- 看板 -->
          <div class="g-main">
            <v-img src="/ec/images2/guide/hoshou/hoshou_bg-top.jpg" max-width="100%" height="auto"></v-img>
            <div class="inn">
              <v-img src="/ec/images2/guide/hoshou/hoshou_01.jpg" max-width="100%" height="auto" alt="安心の5年間保証"></v-img>
              <v-row class="mt-6">
                <v-col cols="12" sm="6">
                  <a v-scroll-to="{ el: '#damage' }">
                    <p class="text-h5 font-weight-bold"><v-icon color="red" left>fas fa-caret-right</v-icon>1.故障時の保証</p>
                  </a>
                  <p class="mt-4 text-left caption">
                    自然故障の際、メーカー保証1年に加わえ、カメラのキタムラの保証で最長4年間、合計5年間メーカー保証と同等の保証が受けられます。
                  </p>
                </v-col>
                <v-col cols="12" sm="6">
                  <a v-scroll-to="{ el: '#sell' }">
                    <p class="text-h5 font-weight-bold"><v-icon color="red" left>fas fa-caret-right</v-icon>2.下取り･買取り保証</p>
                  </a>
                  <p class="mt-4 text-left caption">【下取り】<br />新しいカメラに買い替えする際に、下取り相場の10％UPの価格で下取り致します。</p>
                  <p class="text-left caption">【買取り】<br />ご不要になった際に、買取り相場の10％UPの価格で買取り致します。</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="2">
                  <v-sheet color="red" class="pa-2 white--text">対象商品</v-sheet>
                </v-col>
                <v-col cols="12" sm="10">
                  <p class="mb-0 red--text text-left caption">
                    「5年間保証対象」のアイコンが表示されているデジタルカメラ・レンズ・ビデオカメラ・家電<br />
                    ※ライカなど舶来品、インスタントカメラ、トイカメラは対象外となります
                  </p>
                </v-col>
              </v-row>
            </div>
            <v-img src="/ec/images2/guide/hoshou/hoshou_bg-bottom.jpg" max-width="100%" height="auto"></v-img>
          </div>
          <!-- /看板 -->
          <!-- 故障 -->
          <div class="damage mt-7">
            <v-sheet id="damage" color="#00984b" class="pa-2 text-h5 white--text font-weight-bold">
              <v-avatar size="30" class="mx-2"><v-img src="/ec/images2/guide/hoshou/hoshou_icon01.png"></v-img></v-avatar>故障時の保証
            </v-sheet>
            <v-container>
              <p class="font-weight-bold mb-2 text-subtitle-1">自然故障による修理に限り有効で、メーカー保証1年間終了後も何度でも使えます。</p>
              <p class="mb-0">※メーカー保証1年間に加え、カメラのキタムラ保証4年間で合計5年間</p>
              <p>※一部のカメラのキタムラ店舗、およびスタジオマリオではご利用になれません。</p>
              <v-card class="taisyo" outlined>
                <v-sheet class="pa-2 white--text font-weight-bold" color="#00984b">故障時の保証対象</v-sheet>
                <div class="pa-2">
                  <v-img src="/ec/images2/guide/hoshou/hoshou_02.gif" max-width="100%" height="auto"></v-img>
                </div>
              </v-card>
              <v-card class="taisyo mt-2 pa-2" outlined>
                <p class="green-text darken-2 mb-0 font-weight-bold">保証の対象にならない場合</p>
                <div class="pa-2">
                  <v-img src="/ec/images2/guide/hoshou/hoshou_03.gif" max-width="100%" height="auto"></v-img>
                </div>
              </v-card>
            </v-container>
          </div>
          <!-- /故障 -->
          <!-- 下取・買取 -->
          <div class="damage mt-7">
            <v-sheet id="sell" color="#00984b" class="pa-2 text-h5 white--text font-weight-bold">
              <v-avatar size="30" class="mx-2"><v-img src="/ec/images2/guide/hoshou/hoshou_icon02.png"></v-img></v-avatar>下取り・買取り保証
            </v-sheet>
            <v-container>
              <p class="font-weight-bold mb-2 text-subtitle-1">
                新しいカメラに買い替えする際、ご不要になった際に査定価格を相場のさらに10％UPとさせて頂きます。
              </p>
              <ul class="list-none">
                <li>※下取り・買取り金額が0円になることもあります。</li>
                <li>
                  ※なんでも（一律の）下取りの場合は対象外になります。詳しくは<a href="/sitemap/riyou_shitadori_index.html" class="icoOpen" target="_blank"
                    >コチラ</a
                  >
                </li>
                <li>※スマートフォン、家電商品購入時は対象外になります。</li>
                <li>※「トクトク買取」「トクトク交換」の場合は対象外になります。</li>
              </ul>
              <v-card class="taisyo mt-2" outlined>
                <v-sheet class="pa-2 white--text font-weight-bold" color="#00984b">下取り・買取り保証対象</v-sheet>
                <v-row>
                  <v-col cols="12" sm="5">
                    <v-img src="/ec/images2/guide/hoshou/hoshou_04.gif" max-width="100%" height="auto" />
                  </v-col>
                  <v-col cols="12" sm="7">
                    <a href="https://www.net-chuko.com/ec/sell?type=search" target="_brank">
                      <div class="d-flex flex-column justify-space-between align-center mt-6">
                        <v-img
                          src="/ec/images2/guide/hoshou/hoshou_06.gif"
                          max-width="90%"
                          height="auto"
                          alt="下取り・買取り時の査定価格を調べる"
                          class="hover"
                        />
                      </div>
                    </a>
                    <v-card class="pa-2 mt-6 mb-2 sell-box" outlined width="320px">
                      <p class="mb-2">少しでも査定額が高くなるポイント</p>
                      <v-divider></v-divider>
                      <p class="mt-2">●本体の傷、汚れが少ない<br />●箱や説明書など付属品が全部そろっている</p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
              <v-card class="taisyo mt-2 pa-2" outlined>
                <p class="green-text darken-2 mb-0 font-weight-bold">保証の対象にならない場合</p>
                <div class="pa-2">
                  <v-img src="/ec/images2/guide/hoshou/hoshou_05.gif" max-width="100%" height="auto"></v-img>
                </div>
              </v-card>
            </v-container>
          </div>
          <!-- /下取・買取 -->
          <!-- 5年間保証書の使用方法 -->
          <v-sheet color="#00984b" class="px-2 text-subtitle-1 white--text"> 5年間保証書の使用方法 </v-sheet>
          <div class="caption mb-6">
            <p class="mt-2 mb-0">《持参物》<br />対象の本体と一緒に</p>
            <ul class="listNormal">
              <li>
                店舗で5年間保証に加入した場合
                <ol>
                  <li>キタムラで発行した保証レシート付の5年間保証書</li>
                  <li>メーカー保証書</li>
                </ol>
              </li>
              <li>
                宅配受け取りで5年間保証に加入した場合
                <ol>
                  <li>5年間保証書</li>
                  <li>お買上明細書</li>
                  <li>メーカー保証書</li>
                </ol>
              </li>
            </ul>
            <p>
              をご用意下さい。<br /><br />家電の修理の場合、保証書レシートもしくはお買上げ明細書に記載がある「家電修理センター」までお電話ください <br />
              記載が無い場合、以下の方法で申込みください。
            </p>
            <p class="mb-0">《送り先》</p>
            <ul class="listNormal">
              <li>
                店舗へ持ち込む場合<br />お近くのカメラのキタムラ店舗までお持ち下さい<br />
                <ul class="allow-icon">
                  <li><a href="http://sss.kitamura.jp/" class="icoOpen" target="_blank">店舗一覧はコチラ</a></li>
                </ul>
                <p class="grey--text">※宅配受け取りでご注文された商品も受付させて頂きます</p>
              </li>
              <li>
                宅配で送る場合<br />オンライン修理で承ります<br />
                <ul class="allow-icon">
                  <li><a href="/files/syuuri/index.html">修理のご案内はコチラ</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <!-- カメラのキタムラ5年間保証規定 -->
          <v-sheet color="#00984b" class="px-2 text-subtitle-1 white--text"> カメラのキタムラ5年間保証規定 </v-sheet>
          <div class="caption mt-2">
            <ol>
              カメラのキタムラ（以下、「弊社」といいます。）が提供する「安心の５年間保証」の故障時の修理保証（以下、「本保証」といいます。）は、本規定に基づき、ご加入いただいた商品の本体について、無料で修理を行う制度となります。（本規定に記載のない事項については本商品のメーカー保証書に準じます。）<br /><br />
              <li>
                <b>保証契約について</b><br />
                加入した商品が記載された5年間保証書レシート（以下、「本保証レシート」といいます）に記載された商品の本体（以下、「本商品」といいます。）に故障が発生した場合、本規定に基づき、無料で修理を行うことを約束するものです。本商品のメーカー保証書に添付いたしますので、大切に保管ください。本保証レシートおよびメーカー保証書を紛失された場合、本保証を受けることができません。（メーカー保証書が未発行の場合は、本保証レシートのみで適用いたします。）
              </li>
              <li>
                <b>保証期間について</b><br />
                <ol>
                  <li>
                    本保証期間は、本商品購入日から5年間（5年後の前日まで）とします。ただし、メーカーの保証期間中においては、メーカー保証が優先されます。また、1年以上のメーカー保証がついている場合でも、本保証の終了日は変わりません。
                  </li>
                  <li>本保証期間の途中で変更および解約をすることはできません。</li>
                </ol>
              </li>
              <li>
                <b>保証限度額について</b><br />
                本保証の保証限度額は、商品購入金額を上限（以下、「本保証限度額」といいます。）といたします。
              </li>
              <li>
                <b>保証内容および修理について</b><br />
                <ol>
                  <li>
                    本保証期間中において、本商品のメーカー保証書、取扱説明書等の注意書に従った正常な使用状態で本商品に故障や不具合が生じた場合、本規定に基づき、本保証の保証限度額の範囲内であれば、何度でも無料で修理を行います。
                  </li>
                  <li>
                    本商品がカメラの場合、修理にかかる費用が本保証限度額を超える場合には、その額を自己負担して修理をしていただくか、修理をしないかをお選びいただけます。また、本商品が家電の場合は、１回の修理にかかる費用（税込）が本保証限度額（税込）の100％を超過する場合には、修理を行なわず本保証限度額（税込）の範囲内での同機種または、同等品が代替品として提供され本保証は終了します。
                  </li>
                  <li>
                    本商品がカメラの修理の際は、メーカー保証書および本保証レシートを持参のうえ、弊社店舗へ依頼ください。本商品が家電の場合は、本保証レシート記載の家電修理センターへ連絡ください。なお、弊社または家電修理センターの了解を得ずに弊社以外に直接修理を依頼された場合は、本保証の対象となりません。
                  </li>
                </ol>
              </li>
              <li>
                <b>メーカーより代替品の提供があった場合について</b><br />
                本商品が家電でメーカー保証期間中において、本商品に対する代替品がメーカーより提供があった場合、家電修理センターにすみやかにご連絡ください。ご連絡いただけない場合は、本保証期間中であっても、本保証の対象となりませんのでご注意ください。
              </li>
              <li>
                <b>本保証サービスの対象とならない場合について</b><br />
                次のいずれかにあてはまる場合は、本保証期間中でも本保証の対象となりません。
                <ol>
                  <li>本保証レシートおよびメーカー保証書の提示がない場合。また、記載された字句に書き替え、書き加えがある場合。</li>
                  <li>本商品のメーカー保証書において定めるメーカー保証期間内の故障または損傷。</li>
                  <li>
                    本商品の付属部品（ケース、ストラップ、レンズキャップ、ホース、パワーヘッド、充電器などを含む）、ソフトウェア（ＯＳ、ＢＩＯＳなどを含む）、周辺機器、増設機器、アクセサリーなど、本商品以外のものに生じた故障または損傷およびこれらに起因する故障または損傷。
                  </li>
                  <li>本商品を一般家庭用以外、事業用等で使用した場合。また、想定された用法や限度を超える過酷な使用に起因する故障および損傷。</li>
                  <li>本商品の取付け場所の移動、引っ越し、輸送等によって生じた故障または損傷。また、梱包不備により生じた故障または損傷。</li>
                  <li>配線不良・配管工事の不良・据付け不良および建築躯体・関連設備・それらの工事等に起因する本商品の故障または損傷。</li>
                  <li>
                    本商品の修理等に伴い発生する、本商品の取付け・取外し、および設定の復元（周辺機器も含む）等。また、本商品が記憶装置を持つ商品である場合、その記憶されているデータおよびデータの復元等。
                  </li>
                  <li>
                    次の本商品のメンテナンス、消耗品（消耗部品）および交換作業に関する場合。<br />
                    <ul class="listNormal">
                      <li>
                        オーバーホール、検査、各部点検、レンズのピント点検・調整、CCD清掃、埃・ゴミ清掃、部品交換を伴わない調整、リカバリーの設定等の作業。
                      </li>
                      <li>フィルター、バッテリー、インクカートリッジ、廃インクタンク、吸収材等のメーカーが定める消耗品および交換作業。</li>
                      <li>
                        一定期間（一定回数）使用した際に、メンテナンスや部品交換を必要とする箇所。また、その箇所のメンテナンスや部品交換を怠ったことによって生じた故障または損傷。
                      </li>
                    </ul>
                  </li>
                  <li>
                    直接または間接、故意または過失を問わず、次の事由によって生じた本商品の故障または損傷。
                    <ul class="listNormal">
                      <li>落下・衝撃等の外圧および水濡れ・冠水・腐食・電池の液漏れ等。また、錆・カビ・傷等および塵・埃・煙・虫等の異物混入等。</li>
                      <li>地震・落雷・噴火・津波・地盤変動・風害・水害・その他の天災地変および公害・塩害・ガス害・地盤沈下・異常電圧等。</li>
                      <li>火災・破裂・爆発・倒壊等または外部からの物体の落下・飛来・衝突等の偶然な外来の事由。</li>
                      <li>使用上の誤り（取扱説明書記載以外の使用）、または純正部品以外の部品を使用した修理および改造。</li>
                      <li>
                        劣化・消耗・摩滅・破損・変質・変形・変色、その他類似の事由。（液晶ドット抜け、液晶破損、輝度劣化、電池蓋の爪折れ、ヒンジ不良、キートップ外れ、レール破損等。）
                      </li>
                      <li>盗難・紛失・置き忘れ、またはそれが原因と考えられる場合。</li>
                      <li>
                        核燃料物質（使用済燃料を含みます。以下同様とします。）もしくはこれによって汚染された物（原子核分裂生成物を含みます。）の放射性、爆発性その他の有害な特性またはこれらの特性による事故。
                      </li>
                      <li>戦争、外国の武力行使、革命、政権奪取、内乱、武装反乱その他これらに類似の事変または暴動。</li>
                    </ul>
                  </li>
                  <li>本商品のメーカーがリコール宣言を行った後、そのリコール原因となった部位にかかる本商品の修理。</li>
                  <li>
                    本商品の修理を依頼された際に申告された故障が再現されない場合や本保証サービスの対象とならない故障および損傷であることが判明した場合、または、お客様の都合によって修理をキャンセルした場合において生じた修理技術費用、修理見積費用、運送費用、出張費用、部品代、および諸費用。
                  </li>
                  <li>日本国内で修理ができない場合。</li>
                  <li>日本国外で使用時の故障。</li>
                </ol>
              </li>
              <li>
                <b>損害について</b><br />次の損害は本保証の対象とはなりません。
                <ol>
                  <li>本商品の故障または損傷に起因して生じた身体障害（傷害に起因する死亡を含みます）。</li>
                  <li>本商品の故障または損傷に起因して他の財物（ソフトウェアを含みます）に生じた故障もしくは損傷等の損害。</li>
                  <li>本商品の故障または損傷に起因して、本商品、その他の財物が使用できなかったことによって生じた損害。</li>
                </ol>
              </li>
              <li>
                <b>その他</b><br />
                <ol>
                  <li>本保証サービスは日本国内においてのみ有効です。</li>
                  <li>故障または損害の認定等について、弊社と使用者の間で見解の相違が生じた場合は、弊社を通じて中立的な第三者の意見を求めることがあります。</li>
                  <li>本商品の故意または悪質な自損による故障において本保証制度の利用があった場合、以後本保証制度は一切利用できません。</li>
                  <li>本商品の修理中において、代替品の貸出は行っておりません。また、その費用は、本保証の対象外となります。</li>
                  <li>弊社は、製造物責任法第3条の責に任ずるものではありません。</li>
                  <li>事前にキタムラWebサイトおよび店舗内で告知の上、本契約の内容を変更する場合があります。</li>
                </ol>
              </li>
            </ol>
            <p><span class="red--text font-weight-bold">※一部のカメラのキタムラ店舗、およびスタジオマリオではご利用になれません。</span></p>
          </div>
          <!-- デジカメオンライン、カデンオンラインで購入した商品の保証及び延長保証に関して -->
          <v-sheet color="#00984b" class="px-2 text-subtitle-1 white--text">
            デジカメオンライン、カデンオンラインで購入した商品の保証及び延長保証に関して
          </v-sheet>
          <div class="caption my-4">
            <ul class="listNormal">
              <li>
                デジカメオンライン、カデンオンラインでお求めいただいた商品の保証は<br />
                カメラのキタムラネットショップ及び全国のカメラのキタムラで保証修理のお受付けを致します。<br />
                ※TWG延長保証対象商品及び、訪問修理の大型家電は除きます。<br />
                TWG延長保証については、<a href="https://shop.kitamura.jp/special/sale-fair/page/kadeon-warranty/" target="_blank" class="icoOpen">コチラ</a
                >をご確認ください
              </li>
            </ul>
          </div>
          <userguide />
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
import GuideTitle from '@/components/common/guide/title.vue';
export default Vue.extend({
  name: 'hoshou',
  components: {
    breadcrumbs: Breadcrumbs,
    userguide: Userguide,
    guideTitle: GuideTitle,
  },
  setup: (props, context) => {
    document.title = '5年間保証｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ご利用案内',
          linkUrl: 'service-guide',
          disabled: false
        },
        {
          path: '5年間保証',
          disabled: true
        }
      ],
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
div.g-main .inn {
  padding: 0 40px;
  background: url(/ec/images2/guide/hoshou/hoshou_bg.jpg);
  text-align: center;
}

.w720 {
  max-width: 720px;
  margin: 0 auto;
}

.taisyo {
  border: 1px #00984b solid;
  background: #fffde6;
}

.sell-box {
  border: 1px #00984b solid;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  background: #fff;
  margin: 0 auto;
}

.green-text {
  color: #00984b;
}
</style>
