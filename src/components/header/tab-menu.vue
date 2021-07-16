<template>
  <div id="header-tab-menu-area">
    <!-- 960px以上 -->
    <v-tabs background-color="white" dark class="d-none d-md-block tabs" hide-slider>
      <v-tab class="tab-small" to="/">
        <v-icon color="#D80B24">fa fa-home</v-icon>
      </v-tab>

      <v-menu v-model="showBuyMenu" offset-y allow-overflow open-on-hover min-width="1200px" max-width="1440px">
        <template v-slot:activator="{ on, attrs }">
          <v-tab class="tab-wide v-tab-home-active" to="/" v-bind="attrs" v-on="on">
            <div>
              <template>
                <img width="50" height="50" src="@/assets/header/buy_icon.svg" />
              </template>
            </div>
            <div class="tab-text-active">買いたい</div>
          </v-tab>
        </template>

        <div class="menu-size d-flex menu-container">
          <div class="buy-item-area">
            <h2 class="ml-10">カメラ</h2>
            <v-container class="px-0">
              <v-row>
                <v-col cols="6" v-for="category in getCategoryLinksByColumn('カメラ')" :key="category.categoryName" class="d-flex justify-center">
                  <router-link :to="category.linkUrl" class="text-center">
                    <img :src="category.imageSrc" />
                    <div class="d-flex justify-center">
                      {{ category.categoryName }}
                    </div>
                  </router-link>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div class="buy-item-area">
            <h2 class="ml-10">家電</h2>
            <v-container class="px-0">
              <v-row>
                <v-col cols="6" v-for="category in getCategoryLinksByColumn('家電')" :key="category.categoryName" class="d-flex justify-center">
                  <router-link :to="category.linkUrl" class="text-center">
                    <img :src="category.imageSrc" />
                    <div class="d-flex justify-center">
                      {{ category.categoryName }}
                    </div>
                  </router-link>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div class="menu-item-last-area background-gray">
            <div v-for="category in getCategoryLinksByColumn('右バナー')" :key="category.categoryName" class="link-banner">
              <a :href="category.linkUrl">
                <img :src="category.imageSrc" class="img-banner" />
                <div>{{ category.categoryName }}</div>
              </a>
            </div>
          </div>
        </div>
      </v-menu>
      <v-menu v-model="showSellMenu" open-on-hover allow-overflow offset-y min-width="1200px" max-width="1440px">
        <template v-slot:activator="{ on, attrs }">
          <v-tab class="tab-wide" :href="netChukoUrl" v-bind="attrs" v-on="on">
            <div>
              <template>
                <img width="50" height="50" src="@/assets/header/sell_icon_off.svg" />
              </template>
            </div>

            <div class="tab-text">売りたい</div>
          </v-tab>
        </template>

        <div class="menu-size d-flex menu-container">
          <div class="menu-item-sell-area">
            <!-- 画像とタイトル -->
            <v-row>
              <v-col cols="3" class="menu-sell-border pb-0 px-5">
                <img src="@/assets/header/sell-1.png" class="menu-item-image-area" />
                <div class="menu-item-title">無料査定</div>
              </v-col>
              <v-col cols="3" class="menu-sell-border pb-0 px-5">
                <img src="@/assets/header/sell-2.png" class="menu-item-image-area" />
                <div class="menu-item-title">店舗で買取り</div>
              </v-col>
              <v-col cols="3" class="menu-sell-border pb-0 px-5">
                <img src="@/assets/header/sell-3.png" class="menu-item-image-area" />
                <div class="menu-item-title">宅配で買取り</div>
              </v-col>
              <v-col cols="3" class="pb-0 px-5">
                <img src="@/assets/header/sell-4.png" class="menu-item-image-area" />
                <div class="menu-item-title">出張で買取り</div>
              </v-col>
            </v-row>
            <!-- 説明部分 -->
            <v-row>
              <v-col cols="3" class="menu-sell-border py-0 px-5">
                <div class="font-left">
                  お電話で査定・買取申し込み
                  <div class="sell-tellNum-green">
                    <v-icon class="sell-tellNum-icon">fas fa-phone-alt</v-icon>
                    <span class="font-color-green">050</span>-3033-0063
                  </div>

                  <span class="sell-font-small"><span class="d-inline-block">営業時間 10:00～18:00</span><span class="d-inline-block">（日曜定休）</span></span>
                </div>
              </v-col>
              <v-col cols="3" class="menu-sell-border py-0 px-5">
                <div class="font-left">店頭スタッフが細やかにサポート<br />一番選ばれている買取り</div>
              </v-col>
              <v-col cols="3" class="menu-sell-border py-0 px-5">
                <div class="font-left">自宅からご自身のペースで査定依頼をしたい方は、こちらがおすすめ</div>
              </v-col>
              <v-col cols="3" class="py-0 px-5">
                <div class="font-left">近くに店舗がない場合や、査定品の数が多い場合に、おすすめ</div>
              </v-col>
            </v-row>

            <!-- ボタン -->
            <v-row>
              <v-col cols="3" class="menu-sell-border pt-2 px-5">
                <v-btn class="sell-button" outlined :href="netChukoUrl + '#quick-assessment-link'">
                  クイック査定依頼
                  <v-icon right class="sell-button-icon">fas fa-angle-right</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="3" class="menu-sell-border pt-2 px-5">
                <v-btn class="sell-button" outlined href="https://www.kitamura.jp/map/" target="_blank">
                  店舗を検索する
                  <v-icon right class="sell-button-icon">fas fa-angle-right</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="3" class="menu-sell-border pt-2 px-5">
                <v-btn class="sell-button" outlined :href="netChukoUrl + 'sell/direct/about.do#a06'">
                  詳細・手順を確認する
                  <v-icon right class="sell-button-icon">fas fa-angle-right</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="3" class="pt-2 px-5">
                <v-btn class="sell-button" outlined :href="netChukoUrl + 'static/contents/page/purchase-syutyou.html'">
                  詳細・手順を確認する
                  <v-icon right class="sell-button-icon">fas fa-angle-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>

          <div class="menu-item-last-area background-gray">
            <div v-for="category in getChukoBannersByColumn('中古用右バナー')" :key="category.categoryName" class="link-banner">
              <a :href="category.linkUrl">
                <img :src="category.imageSrc" class="img-banner" />
                <div>{{ category.categoryName }}</div>
              </a>
            </div>
          </div>
        </div>
      </v-menu>

      <v-menu v-model="showServiceMenu" open-on-hover offset-y allow-overflow>
        <template v-slot:activator="{ on, attrs }">
          <v-tab class="tab-other" v-bind="attrs" v-on="on">
            <p class="other-card">各種サービス案内</p>
          </v-tab>
        </template>

        <v-list class="menu-container">
          <v-list-item v-for="(item, index) in servises" :key="index" :href="item.linkUrl">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu v-model="showGroupMenu" open-on-hover offset-y allow-overflow min-width="1200px" max-width="1440px">
        <template v-slot:activator="{ on, attrs }">
          <v-tab class="tab-other tap-end" v-bind="attrs" v-on="on">
            <p class="other-card">グループサイト</p>
          </v-tab>
        </template>

        <div class="menu-size d-flex menu-container">
          <div class="menu-item-area">
            <a href="http://www.kitamura-print.com" target="_blank">
              <img src="@/assets/header/print-service.png" class="group-image-area" />
            </a>
            <div class="menu-item-title group-title-area">
              <a href="http://www.kitamura-print.com" target="_blank"> プリントサービス </a>
            </div>
            <div class="font-left group-left-margin">
              キタムラ品質のデジカメプリントがネットで簡単注文<br />
              プリント以外の多彩なサービスもキタムラならでは！<br />
              店頭での便利なサービスもご紹介
            </div>
          </div>
          <div class="menu-item-area">
            <a href="http://photobook.kitamura.jp/" target="_blank">
              <img src="@/assets/header/photobook.png" class="group-image-area" />
            </a>
            <div class="menu-item-title group-title-area">
              <a href="http://photobook.kitamura.jp/" target="_blank">フォトブック</a>
            </div>
            <div class="font-left group-left-margin">
              自分で作る写真集！店頭でもネットでも気軽に作れて高品質<br />
              お友達へのプレゼントにも最適です
            </div>
          </div>

          <div class="menu-item-area">
            <a href="http://www.kitamura.jp/service/apple/" target="_blank">
              <img src="@/assets/header/apple-service.png" class="group-image-area" />
            </a>
            <div class="menu-item-title group-title-area">
              <a href="http://www.kitamura.jp/service/apple/" target="_blank"> アップル製品<br />修理サービス </a>
            </div>
            <div class="font-left group-left-margin">
              <span class="d-inline-block">カメラのキタムラは</span>
              <span class="d-inline-block">アップル正規プロバイダ</span>です。
              <span class="d-inline-block">iPhone、iPad、iPodの修理はお任せください。</span>
            </div>
          </div>
          <div class="menu-item-area">
            <a href="http://www.studio-mario.jp" target="_blank">
              <img src="@/assets/header/studio-mario.png" class="group-image-area" />
            </a>
            <div class="menu-item-title group-title-area">
              <a href="http://www.studio-mario.jp" target="_blank"> スタジオマリオ </a>
            </div>
            <div class="font-left group-left-margin">
              <span class="d-inline-block">普段の写真では撮ることのできないドキドキとワクワク、</span>
              <span class="d-inline-block">華やかさと楽しさがいっぱい！</span><br />
              <span class="d-inline-block">最高の時間を過ごしていただけるようにスタッフ全員で思い出の価値を高めるお手伝いをいたします</span>
            </div>
          </div>

          <div class="group-last-area">
            <a href="http://sss.kitamura.jp/" target="_blank">
              <img src="@/assets/header/shop.png" class="group-image-area" />
            </a>
            <div class="menu-item-title group-title-area">
              <a href="http://sss.kitamura.jp/" target="_blank">店舗検索</a>
            </div>
            <div class="font-left group-left-margin">
              お近くのカメラのキタムラ・スタジオマリオ<br />
              <span class="d-inline-block">アップル製品修理サービスの店舗情報や営業時間をカンタンに検索できます</span>
            </div>
          </div>
        </div>
      </v-menu>
    </v-tabs>

    <!-- 960px未満 -->
    <v-tabs fixed-tabs background-color="white" hide-slider dark class="d-md-none menu-dd">
      <v-tab to="/" active-class="v-tab-active" class="normal-tab v-tab-active">買いたい</v-tab>
      <v-tab :href="netChukoUrl" class="normal-tab tab-info">売りたい</v-tab>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import HeaderConfigsService from '@/logic/tsv/header-configs.service';
import { CategoryLink } from '@/types/tsv-config';

export default Vue.extend({
  name: 'tab-menu',
  setup: () => {
    const state = reactive({
      value: 1,
      showBuyMenu: false,
      showSellMenu: false,
      showServiceMenu: false,
      showGroupMenu: false,
      netChukoUrl: process.env.VUE_APP_NET_CHUKO_URL,
      servises: [
        {
          title: '買取・下取',
          linkUrl: '/special/sale-fair/page/sell/'
        },
        {
          title: 'お支払方法',
          linkUrl: '/sitemap/riyou_shiharai_index.html'
        },
        {
          title: '送料・手数料',
          linkUrl: '/sitemap/riyou_souryou_index.html'
        },
        {
          title: '5年間保証',
          linkUrl: '/sitemap/riyou_hoshou_index.html'
        },
        {
          title: '修理のご案内',
          linkUrl: '/files/syuuri/index.html'
        },
        {
          title: 'なんでも下取り',
          linkUrl: '/sitemap/riyou_shitadori_index.html'
        },
        {
          title: '商品お届け・納期',
          linkUrl: '/sitemap/riyou_otodoke_index.html'
        },
        {
          title: '返品・交換',
          linkUrl: '/sitemap/riyou_henpin_index.html'
        }
      ]
    });

    // 買いたいタブのカテゴリリンクを取得
    let categoryLinks: CategoryLink[] = [];
    HeaderConfigsService.fetchCategoryLinks().then((_categoryLinks) => {
      categoryLinks = _categoryLinks;
    });
    function getCategoryLinksByColumn(column: string): CategoryLink[] {
      return categoryLinks.filter((category) => category.column === column);
    }

    // 売りたいタブのバナーを取得
    let chukoBanners: CategoryLink[] = [];
    HeaderConfigsService.fetchChukoBanners().then((_chukoBanners) => {
      chukoBanners = _chukoBanners;
    });
    function getChukoBannersByColumn(column: string): CategoryLink[] {
      return chukoBanners.filter((banner) => banner.column === column);
    }

    return {
      ...toRefs(state),
      getCategoryLinksByColumn,
      getChukoBannersByColumn
    };
  }
});
</script>

<style lang="scss" scoped>
.tab-text {
  color: $ec-primary;
  white-space: nowrap;
  line-height: 27px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}
.v-tab .tab-text-active {
  color: white;
  white-space: nowrap;
  line-height: 27px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.v-tab-home-active {
  background: $ec-primary !important;
}

.v-tab-home-active-icon {
  color: white !important;
}
.v-tab-home-deactive {
  background: white;
}
.v-tab-active {
  background: $ec-primary !important;
  color: white !important;
  height: 40px !important;
  bottom: 0px;
  height: 100% !important;
  text-align: end !important;
  border-left: solid 1px $ec-primary;
  border-right: solid 1px $ec-primary;
  border-top: solid 1px $ec-primary;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.v-tab:before {
  opacity: 0 !important;
}

.normal-tab {
  margin-left: 10px;
  margin-right: 10px;
}

.tab-info {
  height: 40px;
  margin-top: 10px;
  border-left: solid 2px $ec-primary;
  border-right: solid 2px $ec-primary;
  border-top: solid 2px $ec-primary;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: $ec-primary !important;
}

.menu-dd {
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 2px solid $ec-primary;
}
.tabs {
  display: flex;
}

.v-tab {
  min-width: unset;
  max-width: unset;
}
.tab-other {
  border-left: 2px dotted $ec-primary;
  flex: 1;
}

.tap-end {
  border-right: 2px dotted $ec-primary;
  margin-right: 20px !important;
}

.tab-wide {
  flex: 3;
  border-left: 2px dotted $ec-primary;
}

.tab-small {
  border-left: 2px dotted $ec-primary;
  margin-left: 20px !important;
  flex: 0.2;
}

.other-card {
  white-space: nowrap;
  line-height: 24px;
  margin-top: 4.5px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
}
.card-text {
  position: absolute;
  color: $text-primary;
  left: 45%;
  white-space: nowrap;
  line-height: 27px;
  margin-top: -4.5px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.first-camera-container {
  position: absolute;
  width: 33.333px;
  height: 25.926px;
  left: 32%;
  top: 8.174px;
  overflow: visible;
}

.tab-container {
  width: 34.439px;
  height: 30.205px;
}

.home-root-fill {
  fill: $ec-primary;
}
.home-root {
  overflow: visible;
  position: absolute;
  width: 34.439px;
  height: 19.909px;
  left: 26%;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.home-body-fill {
  fill: $ec-primary;
}
.home-body {
  overflow: visible;
  position: absolute;
  width: 22.907px;
  height: 21.556px;
  left: 34%;
  top: 8.65px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.first-camera-icon-fill {
  fill: $ec-primary;
}
.first-camera-icon {
  overflow: visible;
  position: absolute;
  width: 8.093px;
  height: 8.167px;
  left: 12.62px;
  top: 10.933px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.first-camera-body-fill {
  fill: $ec-primary;
}
.first-camera-body {
  overflow: visible;
  position: absolute;
  width: 33.333px;
  height: 25.926px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.trash-wheel-fill-1 {
  fill: $ec-primary;
}
.trash-wheel-1 {
  overflow: visible;
  position: absolute;
  width: 3.809px;
  height: 3.809px;
  left: 42%;
  top: 21.705px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.trash-wheel-fill-2 {
  fill: $ec-primary;
}
.trash-wheel-2 {
  overflow: visible;
  position: absolute;
  width: 3.809px;
  height: 3.809px;
  left: 40%;
  top: 21.705px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.trash-body-fill {
  fill: $ec-primary;
}
.trash-body {
  overflow: visible;
  position: absolute;
  width: 28.5px;
  height: 20.232px;
  left: 38%;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.second-camera {
  position: absolute;
  width: 30.556px;
  height: 23.765px;
  left: 33%;
  overflow: visible;
}
.icon_digital_slr_m {
  position: absolute;
  width: 30.556px;
  height: 23.765px;
  left: 0px;
  top: 0px;
  overflow: visible;
}
.middle-circle-fill {
  fill: $ec-primary;
}
.middle-circle {
  overflow: visible;
  position: absolute;
  width: 7.419px;
  height: 7.486px;
  left: 11.569px;
  top: 10.022px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.middle-circle1-fill {
  fill: $ec-primary;
}
.middle-circle1-fill {
  overflow: visible;
  position: absolute;
  width: 30.556px;
  height: 23.765px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.big-circle-container {
  position: absolute;
  width: 27.5px;
  height: 27.042px;
  left: 38%;
  top: 6px;
  overflow: visible;
}
.big-circle-fill {
  fill: transparent;
  stroke: rgba(255, 255, 255, 1);
  stroke-width: 3px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.big-circle {
  overflow: visible;
  position: absolute;
  width: 16.788px;
  height: 16.788px;
  left: 12.833px;
  top: 12.375px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.big-circle1-fill {
  fill: $ec-primary;
  stroke: rgba(255, 255, 255, 1);
  stroke-width: 3px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.big-circle1 {
  position: absolute;
  overflow: visible;
  width: 22px;
  height: 22px;
  left: 0px;
  top: 0px;
}

.tab-other {
  border-right: solid 1px white;
  color: white !important;
}

.menu-size {
  width: 100%;
  background-color: white;
  padding: 10px;
}

.menu-container {
  border: 1px solid $ec-primary;
}

.menu-container.v-list {
  padding: 0;
}

.menu-container .v-list-item {
  text-align: center;
  border: 1px solid $ec-primary;
}

.menu-item-area {
  flex: 2.5;
  text-align: center;
  padding: 5px;
  border-right: 2px dotted $ec-light-grey2;
}

.menu-item-image-area {
  width: 70%;
  margin: 5px auto;
  object-fit: contain;
}

.menu-sell-border {
  border-right: 2px dotted $ec-light-grey2;
}

.menu-item-title {
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 5px;
}

.menu-item-title a {
  color: inherit;
  text-decoration: none;
}

.menu-item-sell-area {
  flex: 12;
  text-align: center;
  padding: 5px;
}

.menu-item-last-area {
  flex: 3;
  padding: 20px;
}

.link-banner {
  margin-bottom: 20px;
}

.img-banner {
  width: 100%;
}

.buy-item-area {
  flex: 5;
  padding: 5px;
}

.background-gray {
  background-color: rgba(235, 235, 235, 1);
}

.group-last-area {
  flex: 3;
  text-align: center;
  padding: 5px;
}

.sell-tellNum-green {
  font-size: 18px;
  font-weight: bold;
}

.sell-tellNum-icon {
  font-size: 18px;
  color: inherit;
  margin-right: 4px;
}

.font-color-green {
  color: rgba(6, 168, 101, 1);
}

.font-left {
  text-align: left;
  font-size: 14px;
}

.group-left-margin {
  margin-left: 15px;
}

.sell-subtext {
  margin: 35px auto 5px auto;
}

.sell-font-small {
  font-size: 12px;
}

.sell-button {
  width: 100%;

  .sell-button-icon {
    color: rgba(6, 168, 101, 1);
  }
}

.group-image-area {
  width: 80%;
  height: 120px;
  margin: 5px auto;
  object-fit: contain;
}

.group-title-area {
  height: 65px;
}
</style>
