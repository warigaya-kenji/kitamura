<template>
  <v-app>
    <div class="faq_tokutokukoukan">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'トクトク交換の流れ'" />

        <div class="flow-box px-5 mt-6">
          <div class="flow">
            <div class="square">
              <p><span>1</span>トクトク交換対象品をカートへ入れる</p>
              <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-step01.jpg" max-width="100%" height="auto" />
            </div>
          </div>
          <div class="flow">
            <div class="square">
              <p><span>2</span>「持ってるカメラ・レンズを下取りに出す」を選択し「トクトク交換」を選択</p>
              <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-step02.jpg" max-width="100%" height="auto" />
            </div>
          </div>
          <div class="flow">
            <div class="square">
              <p><span>3</span>ご自身の、持っている商品リストから下取品を選択、または検索結果から商品を選択し｢選択｣し「下取申込に追加」ボタンをクリックする</p>
              <p class="small">※下取品は複数選択することが可能です</p>
              <p class="small">※下取品を送る箱を別途申し込む場合は「梱包キット」の申込みにもチェックを入れてください</p>
              <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-step03.jpg" max-width="100%" height="auto" />
              <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-step04.jpg" max-width="100%" height="auto" />
            </div>
          </div>
          <div class="flow">
            <div class="square">
              <p><span>4</span>購入手続きへ進み、注意書きを確認の上、「手続きに同意」にチェックをいれる</p>
              <p class="small">※下取品を送る箱を別途申し込む場合は「梱包キット」の申込みにもチェックを入れてください</p>
              <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-step05.jpg" max-width="100%" height="auto" />
            </div>
          </div>
          <div class="flow">
            <div class="square">
              <p><span>5</span>ご注文商品の配送先・お届け日・お届け時間を入力する</p>
              <p class="small">※ご購入商品を梱包した箱を再利用して下取品を送る場合は、必ず会員登録(身分証明書)と同じ住所を指定ください</p>
            </div>
          </div>
          <div class="flow">
            <div class="square">
              <p><span>6</span>クレジットカードでお支払い</p>
              <p class="small">※最終のお支払額は下取品の査定後、確定されます</p>
              <p class="small">※銀行振り込みが発生する事があります</p>
              <p class="small">
                ※デビットカード・プリペイドカードはご利用できません<a href="https://ecfaq.kitamura.jp/s/article/EC0020190523041" target="_blank">[詳細]</a>
              </p>
            </div>
          </div>
          <div class="flow bunki mb-3">
            <div class="square">
              <p><span>7</span>ご注文を確定し、トクトク交換の申込みに進む</p>
            </div>
          </div>
          <v-row class="pa-2" justify="center">
            <v-col cols="5" class="flow arrow mx-sm-4 mx-2">
              <div class="square">
                <v-row>
                  <v-col cols="10" sm="3">
                    <div class="d-flex flex-column justify-space-between align-center">
                      <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-flow_icon01.gif" max-width="100%" height="auto"></v-img>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <a v-scroll-to="{ el: '#a-kit' }" class="green">
                      <p class="pt-2">梱包キットを申し込む<br />場合の流れ</p>
                    </a>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <v-col cols="5" class="flow arrow mx-sm-4 mx-2">
              <div class="square">
                <v-row>
                  <v-col cols="10" sm="3">
                    <div class="d-flex flex-column justify-space-between align-center">
                      <v-img src="/ec/images2/guide/faq_tokutokukoukan/tokutoku-flow_icon02.gif" max-width="100%" height="auto"></v-img>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <a v-scroll-to="{ el: '#a-box' }" class="green">
                      <p class="pt-2">お届けした商品の箱を<br />使用する場合の流れ</p>
                    </a>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <br class="clear" />
          <div class="flow last mt20">
            <div class="square">
              <p><span>8</span>商品発送</p>
            </div>
          </div>

          <ul class="listArrowtop">
            <li><a href="#top">ページトップへ</a></li>
          </ul>
          <br class="clear" />

          <div v-for="(category, index) in categoryList" :key="`category-${index}`" class="my-8">
            <div :id="category.id">
              <subTitle :txt="category.title" :fontSize="'14px'" />
              <div class="flow-box">
                <div class="flow" v-for="(item, index) in category.txtList" :key="`item-${index}`">
                  <div class="square">
                    <p>
                      <span>{{ index + 1 }}</span
                      >{{ item.subtitle }}
                    </p>
                    <p class="small" v-for="(txt, index) in item.txt" :key="`txt-${index}`">※{{ txt }}</p>
                  </div>
                </div>
                <br class="clear" />
              </div>
              <div class="caption">
                <p>※下記の場合はトクトク交換を承る事ができません。</p>
                <ul>
                  <li>
                    充電器など重要な付属品がない場合や、査定の上AA～Bに該当せず、難あり商品であると当社が判断した場合
                    <a href="https://ecfaq.kitamura.jp/s/article/EC0020210310001" target="_blank">詳しくはコチラ</a>
                  </li>
                  <li>
                    お送りいただいたお品ものが「トクトク交換」お申し込み時に選ばれたものと異なる場合<br />
                    なお、商品の状態（ランク）については以下をご参照ください<br />
                    <a href="http://www.net-chuko.com/static/public/buy/pop/item-status.html" target="_blank"> 商品の状態について</a>
                  </li>
                </ul>
                <br class="clear" />
              </div>
              <div class="caption">
                <p>※身分証明書は、有効期限以内の以下のものに限ります</p>
                <ul>
                  <li>運転免許証</li>
                  <li>運転免許経歴書</li>
                  <li>健康保険証（写真なしでもOK）</li>
                  <li>後期高齢者医療被保険者証</li>
                  <li>パスポート（顔写真＆住所欄のコピー必要）</li>
                  <li>住民票の写し（コピーはNGです）</li>
                  <li>写真付き住民基本台帳カード</li>
                  <li>在留カード</li>
                  <li>学生証（写真・学校名・学生番号・住所・連絡先の記載があるもの）</li>
                  <li>社員証（写真・会社名・社員番号・住所・連絡先の記載があるもの）</li>
                  <li>国・公的機関発行の本人確認書類（写真・住所・生年月日の記載があるもの）</li>
                </ul>
              </div>
              <div class="mt-4 caption">
                <p>※キタムラ5年間保証の「下取・買取保証」（相場からの10％UP）は併用できません</p>
              </div>
              <ul class="listArrowtop">
                <li><a href="#top">ページトップへ</a></li>
              </ul>
              <br class="clear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import GuideTitle from '@/components/common/guide/title.vue';
import SubTitle from '@/components/common/guide/subtitle.vue';
export default Vue.extend({
  name: 'faq_tokutokukoukan',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
  },
  setup: (props, context) => {
    document.title = 'トクトク交換の流れ｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'よくあるご質問',
          linkUrl: 'https://ecfaq.kitamura.jp/s/',
          disabled: false
        },
        {
          path: 'トクトク交換の流れ',
          disabled: true
        }
      ],
      categoryList: [
        {
          id: 'a-kit',
          title: '梱包キットを申し込む場合の流れ',
          txtList: [
            {
              subtitle: '梱包キットの申込みページで梱包キットのサイズ・お届け先・お届け日時を選択する',
              txt: ['梱包キットのお届け先は身分証明書と同じ住所を選択ください', 'お客様マイページ・ご注文後の確認メールからも申し込みが可能です']
            },
            {
              subtitle: '届いた梱包キットに下取品を入れ、同梱の着払伝票を使用して返送する',
              txt: ['本人確認書類として「住民票の写し」を選択された場合のみ、同梱してください']
            },
            {
              subtitle: '梱包キットの申込みページで梱包キットのサイズ・お届け先・お届け日時を選択する',
              txt: ['査定額がお支払い額より高い場合は、メールにてお振込み先を確認し、差額分をお振込みさせていただきます']
            }
          ]
        },
        {
          id: 'a-box',
          title: 'お届けした商品の箱を使用する場合の流れ',
          txtList: [
            {
              subtitle: 'トクトク交換申し込みページで名前（フリガナ）・生年月日・職業を入力する',
              txt: ['お客様マイページ・ご注文後の確認メールからも申し込みが可能です']
            },
            {
              subtitle: 'ご購入商品を梱包した箱に下取品を入れ、同梱の着払伝票を使用して返送する',
              txt: ['本人確認書類として「住民票の写し」を選択された場合のみ、同梱してください']
            },
            {
              subtitle: '下取品の査定後、お支払い額が確定',
              txt: ['査定額がお支払い額より高い場合は、メールにてお振込み先を確認し、差額分をお振込みさせていただきます']
            }
          ]
        }
      ]
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style scoped>

.flow {
  font-family: 'Hiragino Kaku Gothic Pro W3', 'ヒラギノ角ゴ Pro W3', Meiryo, 'メイリオ', 'MS P Gothic', 'ＭＳ Ｐゴシック', sans-serif;
  padding-bottom: 30px;
  margin-bottom: 10px;
  background: url(/ec/images2/guide/faq_tokutokukoukan/tokutoku-flow_next.gif) no-repeat bottom;
}

.flow .square {
  padding: 20px 10px 10px;
  border: 4px #72af2d solid;
  border-radius: 10px;
}

.flow p {
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.4em;
  margin: 0 0 1.25em 0;
  padding: 0;
  text-align: left;
}

.flow span {
  margin-right: 5px;
  padding: 4px 10px;
  background: #72af2d;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
}

.flow p.small {
  padding-left: 35px;
  font-size: 14px;
}

.arrow {
  background: url(/ec/images2/guide/faq_tokutokukoukan/tokutoku-flow_next2.gif) no-repeat top;
  padding: 55px 0 0;
}

.kit div {
  padding-left: 80px;
  background: url(/ec/images2/guide/faq_tokutokukoukan/tokutoku-flow_icon01.gif) no-repeat 5px 50%;
}

.box div {
  padding-left: 80px;
  background: url(/ec/images2/guide/faq_tokutokukoukan/tokutoku-flow_icon02.gif) no-repeat 5px 50%;
}

.bunki {
  padding-bottom: 0;
  margin-bottom: 0;
  background: none;
}

.left {
  float: left;
}

.right {
  float: right;
}

.clear {
  clear: both;
}

.green {
  color: #72af2d;
}

ul.listArrowtop li {
  list-style: none;
  float: right;
  margin: 0 0 4px 0;
  padding-left: 20px;
  color: #666;
  background: url(https://shop.kitamura.jp/common/images/arrow_square_top.gif) no-repeat left 0.3em;
}
</style>
