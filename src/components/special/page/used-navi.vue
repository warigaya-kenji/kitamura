
<template>
  <v-app>
    <!-- ↓ パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />

    <div class="used-navi">
      <section class="mb-16">
        <h1 class="mb-8 title-1">カメラのキタムラ 中古ナビ</h1>
        <v-row class="menu-btn">
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a01" x-large>
              <span>キタムラの中古が<br class="d-none d-sm-block" />選ばれる6つの理由</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a02" x-large>
              <span>中古購入のコツ</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a03" x-large>
              <span>お店と宅配受取り<br class="d-none d-sm-block" />どう違うの?</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a04" x-large>
              <span>中古カメラの<br class="d-none d-sm-block" />保証について</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a05" x-large>
              <span>中古商品の<br class="d-none d-sm-block" />よくある質問</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a06" x-large>
              <span>返品規約</span>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block color="#fff" href="#a07" x-large>
              <span>中古商品はこちら</span>
            </v-btn>
          </v-col>
        </v-row>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a01">キタムラの中古が選ばれる6つの理由</h2>
        <p>全国展開の専門店だからできるサービスがあります。</p>
        <v-row>
          <v-col cols="12" sm="8">
            <ul class="six-reasons">
              <li>全国の店頭に加え、自宅でも受け取り可能</li>
              <li>実物を見て確認後、キャンセルＯＫ<span class="body-2 red--text">※1</span></li>
              <li>1万円以上の中古カメラ・レンズは6ヵ月の保証付き<span class="body-2 red--text">※2</span></li>
              <li>専門店ならではのアフターフォロー</li>
              <li>選べる豊富なお支払い</li>
              <li>Tポイントが貯まってお得</li>
            </ul>
            <p><span class="body-2 red--text">※1</span>お客様都合の場合、送料（取り寄せ料）はお客様負担となります</p>
            <p>
              <span class="body-2 red--text">※2</span>一部保証対象外の商品もございます。<a
                class="icon-open"
                target="_blank"
                href="https://www.net-chuko.com/ec/service/used-6months-warranty.html"
                >詳しくはこちら</a
              >をご覧ください
            </p>
          </v-col>
          <v-col cols="12" sm="4">
            <v-img src="/ec/images2/special/page/used-navi/used-navi_02.png" alt="全国の店舗で受取りOK"></v-img>
          </v-col>
        </v-row>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a02">中古品購入のコツ</h2>
        <p class="mb-8">
          中古品だと同じ商品でも値段が違ったり、専門知識がないから購入をためらうことはありませんか?<br />
          ここでは初心者の方でも実践できる、中古品購入のコツをお話しします。
        </p>
        <article class="mb-8">
          <h3 class="title-3">中古品のランクを見よう</h3>
          <p>
            キタムラの中古品には、商品の状態を表すランクがあります。<br />
            ランクによって販売価格も違ってきます。<br />
            商品の状態と価格、両方の面で納得できるものを選びましょう。
          </p>
          <v-card outlined>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>状態</th>
                    <th>状態の目安</th>
                    <th>基準</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AA</td>
                    <td>新品同様</td>
                    <td>外観に使用した形跡が無く、非常にきれいで、新品同様のもの</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>美品</td>
                    <td>外観に使用した形跡が少なく、きれいで、正常作動するもの</td>
                  </tr>
                  <tr>
                    <td>AB</td>
                    <td>良品</td>
                    <td>外観に多少のキズや擦れなどがあるが、正常作動するもの</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>並品</td>
                    <td>外観に比較的目立つキズや擦れ、テカリなどがあるが、正常作動するもの</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>やや難あり</td>
                    <td>外観に目立つキズや擦れが多く、テカリなどがあるが、作動するもの</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </article>
        <article class="mb-8">
          <h3 class="title-3">付属品をチェックしよう</h3>
          <p>
            中古品の中には、元箱や説明書以外にもキャップなど一部のパーツが不足している場合があります。<br />
            見落とさないように注意しましょう。
          </p>
        </article>
        <article>
          <h3 class="title-3">画像をチェックしよう</h3>
          <v-row>
            <v-col cols="12" sm="8">
              <p>
                説明文には記載されないような、細かい傷や使用感などをしっかり画像でチェックしましょう。<br />
                キタムラでは中古品を、さまざまな角度から撮影し、掲載しています。
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/page/used-navi/used-navi_06.jpg" alt="商品画像 サンプル"></v-img>
            </v-col>
          </v-row>
        </article>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a03">お店と宅配受取り、どう違うの?</h2>
        <v-row class="mb-8">
          <v-col cols="12" sm="6">
            <v-card outlined>
              <v-card-title>
                店舗受取り
                <v-row justify="end">
                  <img src="/ec/images2/special/page/used-navi/used-navi_03.png" alt="店舗受取り イラスト" />
                </v-row>
              </v-card-title>
              <v-card-text>
                <ul>
                  <li>実物を確認して購入</li>
                  <li>送料：550円<br />（ご購入時はいただきません）</li>
                  <li>知識のある店員が商品を説明</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card outlined>
              <v-card-title>
                宅配受取り
                <v-row justify="end">
                  <img src="/ec/images2/special/page/used-navi/used-navi_04.png" alt="宅配受取り イラスト" />
                </v-row>
              </v-card-title>
              <v-card-text>
                <ul>
                  <li>時間指定OK</li>
                  <li>宅配BOX利用可能</li>
                  <li>送料：全国一律550円</li>
                  <li>商品のお渡し：約1週間</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <article>
          <h3 class="title-3">中古商品のお届けまでの流れ（宅配受取り）</h3>
          <div>
            <v-img src="/ec/images2/special/page/used-navi/chuko.jpg" alt="お届けまでの流れ イラスト"></v-img>
          </div>
        </article>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a04">中古カメラの保証について</h2>
        <v-row>
          <v-col cols="12" sm="8">
            <p>1万円以上の中古カメラ・中古レンズには6ヶ月間の保証が付きます。</p>
            <p>※一部保証対象外の商品もございます。</p>
            <a class="icon-open" href="https://www.net-chuko.com/ec/service/used-6months-warranty.html">詳しくはこちらをご覧ください</a>
          </v-col>
          <v-col cols="12" sm="4" class="text-center">
            <img src="/ec/images2/special/page/used-navi/used-navi_05.png" alt="中古カメラ6ヶ月保証" />
          </v-col>
        </v-row>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a05">中古品のよくある質問</h2>
        <p>中古品ご購入に関する、<a class="icon-open" href="https://ecfaq.kitamura.jp/s/">よくある質問はこちら</a>をご確認ください。</p>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a06">中古品の返品に関して</h2>
        <p>
          【店舗受け取りの場合】<br />
          ご購入店舗にご連絡ください。
        </p>
        <p>
          【宅配受け取りの場合】<br />
          ご連絡のタイミングによって、返品ができない場合がございます。下記の表をご確認ください。
        </p>
      </section>

      <section class="mb-16">
        <h2 class="title-2" id="a07">中古商品はこちらから</h2>
        <v-row class="category-btn">
          <v-col cols="6" sm="3">
            <v-card
              block
              class="pa-4 text-center"
              color="#fff"
              href="https://shop.kitamura.jp/ec/list?type=u&keyword=&category=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&narrow2=&q=&f%5B%5D=k3&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA"
              x-large
            >
              <div>
                <img src="/ec/images2/special/page/used-navi/category01.png" alt="交換レンズ アイコン" />
              </div>
              <p>交換レンズ</p>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card
              block
              class="pa-4 text-center"
              color="#fff"
              href="https://shop.kitamura.jp/ec/list?type=u&keyword=&category=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&narrow2=&r=https://shop.kitamura.jp/special/sale-fair/page/used-navi/&q=&f[]=k3&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
              x-large
            >
              <div>
                <img src="/ec/images2/special/page/used-navi/category02.png" alt="ミラーレス一眼 アイコン" />
              </div>
              <p>ミラーレス一眼</p>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card
              block
              class="pa-4 text-center"
              color="#fff"
              href="https://shop.kitamura.jp/ec/list?type=u&keyword=&category=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&narrow2=&q=&f%5B%5D=k3&path=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95"
              x-large
            >
              <div>
                <img src="/ec/images2/special/page/used-navi/category03.png" alt="デジタル一眼レフ アイコン" />
              </div>
              <p>デジタル一眼レフ</p>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card
              block
              class="pa-4 text-center"
              color="#fff"
              href="https://shop.kitamura.jp/ec/list?type=u&keyword=&category=%E3%82%B3%E3%83%B3%E3%83%91%E3%82%AF%E3%83%88%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AB%E3%83%A1%E3%83%A9&narrow2=&r=https://shop.kitamura.jp/special/sale-fair/page/used-navi/&q=&f[]=k3&path=%E3%82%B3%E3%83%B3%E3%83%91%E3%82%AF%E3%83%88%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AB%E3%83%A1%E3%83%A9"
              x-large
            >
              <img src="/ec/images2/special/page/used-navi/category04.png" alt="コンパクトデジタルカメラ アイコン" />
              <p>コンパクト<br />デジタルカメラ</p>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
export default Vue.extend({
  name: 'used-navi',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: (props, context) => {
    document.title = '中古ナビ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キタムラの中古が選ばれる理由や、中古品購入のコツをご紹介いたします')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップトップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '中古ナビ',
          disabled: true
        }
      ],
    });
  }
});
</script>

<style lang="scss" scoped>
.used-navi {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.title-1 {
  background: #64b43c;
  color: #fff;
  font-size: 120%;
  font-weight: bold;
  padding: 10px 0 10px 70px;
  position: relative;
}

.title-1::after {
  background: url(/ec/images2/special/page/used-navi/used-navi_01.png) no-repeat;
  content: '';
  display: block;
  height: 80px;
  left: 5px;
  position: absolute;
  top: -15px;
  transform: rotate(-45deg);
  width: 60px;
  z-index: 999999;
}

.title-2 {
  border-bottom: 2px #e29700 solid;
  padding-bottom: 5px;
}

.title-3 {
  background: #40220f;
  border-radius: 4px;
  color: #fff;
  padding: 5px 10px;
}

.title-2,
.title-3 {
  font-size: 120%;
  margin-bottom: 20px;
}

.title-2::before,
.title-3::before {
  color: #e29700;
  content: '\f030';
  font-family: 'Font Awesome 5 Pro';
  font-size: 130%;
  margin-right: 10px;
}

.menu-btn span {
  display: block;
}

.menu-btn span::after {
  color: #e29700;
  content: '\f105';
  font-family: 'Font Awesome 5 Pro';
  margin-top: -0.7em;
  position: absolute;
  right: 0;
  top: 50%;
}

.icon-open {
  margin: 0 0.2em;
  padding-right: 1.5em;
  background: url(/ec/images2/special/page/used-navi/mkr_popup.gif) no-repeat right center;
}

.six-reasons {
  padding: 0 !important;
}

.six-reasons li {
  background: #fff;
  border-radius: 4px;
  list-style: none;
  margin-bottom: 10px;
  padding: 5px 5px 5px 30px;
}

.six-reasons li::before {
  color: #f00;
  content: '\f14a';
  font-family: 'Font Awesome 5 Pro';
  margin: 0 10px 0 -20px;
}

.category-btn img {
  display: block;
  margin: 10px auto;
  max-width: 100px;
}
</style>