<template>
  <v-app>
    <div class="nikon-df">
      <div class="w720 px-2 px-sm-0">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <subText :textItem="'Nikon ニコン Df デジタル一眼レフカメラ'" />
        <h2 class="my-2 pa-2 grey lighten-3 text-subtitle-2 font-weight-bold">Nikon ニコンFX フォーマットデジタル一眼レフカメラ Df (ディーエフ)</h2>
        <a v-scroll-to="'lineup'">
          <v-img
            src="https://shop.kitamura.jp/ts_rsc/336/images/bnr_link.jpg"
            alt="Nikon ニコン Df 商品一覧・価格をチェック"
            max-width="100%"
            height="auto"
            class="hover"
          ></v-img>
        </a>
        <h2 class="my-2 pa-2 grey lighten-3 text-subtitle-2 font-weight-bold">Nikon ニコン Df デジタル一眼レフカメラのレビュー</h2>
        <p class="acctext">
          MF時代からのニコンユーザーにとってはたまらないデザインのNikon ニコン Df<br />
          直線的なフォルムとメカニカルなダイヤルが醸し出すクラシックな雰囲気に 先進のデジタル技術が融合<br /><br />
          手応えのある直感的なダイヤル操作と、 「D4」と同等の画質をNikon ニコンFXフォーマット最小・最軽量ボディーの中で融合 Nikon
          ニコンユーザーだけでなく、これから一眼レフを始めようとお考えの方も必見！
        </p>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" v-for="(n, i) in 4" :key="i">
              <v-img
                :src="`https://shop.kitamura.jp/ts_rsc/336/images/img_01_0${n}a.jpg`"
                :alt="`Nikon Df ニコンデジタル一眼レフカメラの外観画像${n === 1 ? '前面' : n === 2 ? '背面' : n === 3 ? '前面と上部' : '側面と底部'}`"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <h2 class="my-2 pa-2 grey lighten-3 text-subtitle-2 font-weight-bold">Nikon ニコン Df デジタル一眼レフカメラのスペック</h2>
        <ul class="listNormal2 pa-0">
          <li class="spec">有効画素数1625万画素、Nikon ニコンFXフォーマットCMOSセンサーと画像処理エンジン「EXPEED 3」</li>
          <li class="spec">常用ISO感度域はISO 100～12800と広く、さらにISO 50相当までの減感、ISO 204800相当までの増感も可能</li>
          <li class="spec">ISO感度、シャッタースピード、露出補正など専用の設定が直感的に行えるシンプルなダイヤル操作系</li>
          <li class="spec">「操る愉しみ」を追求し、直線的なフォルムに大型のメカニカルダイヤルを採用</li>
          <li class="spec">被写体をクリアーに、かつリアルタイムに見られるガラスペンタプリズム使用、視野率約100％の光学ファインダー</li>
          <li class="spec">起動時間は約0.14秒、レリーズタイムラグは約0.052秒、高速連続撮影は約5.5コマ/秒と、優れた高速レスポンス</li>
          <li class="spec">2016分割RGBセンサーを搭載したシーン認識システム</li>
        </ul>
        <h2 class="my-2 pa-2 grey lighten-3 text-subtitle-2 font-weight-bold">Nikon ニコン Df 用 人気のアクセサリー ランキング ★★★ TOP 10 ★★★</h2>
        <div class="section headingLv3" id="accessory">
          <p>
            キタムラネットショップで、｢ニコン Df｣と一緒にご注文されている人気のアクセサリーをご紹介！<br />
            ｢ニコン Df｣の性能をフルに活かせるアクセサリーをチェック
          </p>
          <ul class="listNormal2 pa-0">
            <li class="spec">
              人気No.1【
              <strong><a href="/ec/special/camera/feature/nikon/df/703">ニコン Df 専用 液晶保護シール</a></strong>
              】背面モニターにキズがつくのを防ぐ必需品
            </li>
            <li class="spec">
              人気No.2【 <strong><router-link to="/ec/pd/4960759140890/">予備バッテリー EN-EL14ａ</router-link></strong> 】
            </li>
            <li class="spec">
              人気No.3【
              <strong><a href="/ec/special/camera/feature/nikon/df/772">58mm レンズ保護プロテクター</a></strong>
              】レンズの掛け捨て保険。大切なレンズを守る
            </li>
            <li class="spec">
              人気No.4 【
              <strong><a href="/ec/special/camera/feature/nikon/df/705">レザーストラップ AN-SPL001</a></strong>
              】クラッシックなカメラにあわせてストラップもこだわる方が多い♪
            </li>
            <li class="spec">
              人気No.5 【 <strong><router-link to="/ec/pd/4523052008146">メモリーカード Extreme Pro SDHC UHS-1 32GB</router-link></strong
              >】信頼のサンディスク製
            </li>
            <li class="spec">
              人気No.6 【
              <strong><a href="/ec/special/camera/feature/nikon/df/704">ボディジャケット型カメラケース CF-DC6</a></strong> 】
            </li>
            <li class="spec">
              人気No.7 【 <strong><router-link to="/ec/pd/4960759024800">接眼目当て DK-19</router-link></strong> 】ファインダーが見やすい！
            </li>
            <li class="spec">
              人気No.8 【 <strong><router-link to="/ec/pd/4960759141750">アイピースキャップ DK-26</router-link></strong> 】標準付属品
            </li>
            <li class="spec">
              人気No.9 【 <strong><router-link to="/ec/pd/4960759005601">レリーズ AR-3</router-link></strong> 】レトロなねじ込み式のケーブルレリーズ
            </li>
            <li class="spec">
              人気No.10 【 <strong><router-link to="/ec/pd/4960759027801">スピードライト SB-300</router-link></strong> 】なんといっても、小型・軽量！
            </li>
          </ul>
          <h2 class="my-2 pa-2 grey lighten-3 text-subtitle-2 font-weight-bold">Nikon ニコン Df デジタル一眼レフカメラのラインナップ＆商品・価格一覧</h2>
          <p class="acctext">
            Nikon ニコン Df ボディ ブラック、Nikon ニコン Df ボディ シルバー、Nikon ニコン Df 50mm F1.8G Special Editionキット シルバー、Nikon ニコン Df 50mm
            F1.8G Special Editionキット ブラックの4ラインナップ。交換レンズのNikon ニコン AF-S NIKKOR 50mm F1.8G SEも同時発売
          </p>
          <v-img
            src="https://shop.kitamura.jp/ts_rsc/336/images/bnr_dfsep.gif"
            alt="ご存知ですか？ショッピングクレジットなら、Nikon ニコン Df ボディが月々約12,510円。20回分割ボーナス併用無し)"
          ></v-img>
        </div>
        <priceAndPopular :productDetailList="productDetailList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';

import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
export default Vue.extend({
  name: 'nikon-df',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
  },
  setup: () => {
    document.title = 'Nikon ニコン Df｜Nikon ニコンFX フォーマットデジタル一眼レフカメラ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'Nikon Df ニコンデジタル一眼レフカメラ新製品の特集ページ。MF時代からのニコンユーザーによってはたまらないデザインのNikon FX フォーマットデジタル一眼レフカメラ新製品の画像と特徴をご紹介！デジタル一眼レフ・ミラーレスはもちろん、アクセサリーのご予約・ご購入はキタムラネットショップで！ネットショップで注文して全国1000店舗カメラのキタムラで受取り可能です。')

    const state = reactive({
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'Nikon ニコン Df デジタル一眼レフカメラ',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759141019',
        '4960759141002',
        '4960759141071',
        '4960759141064',
        '4960759028426',
        '4960759141750',
        '4960759141743',
        '4960759140890',
        '4960759027801',
        '4960759026071',
        '4960759024336',
        '4960759001689',
        '4960759126566',
        '4960759138415',
        '4961607252581',
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss">
.nikon-df {
  ul.listNormal2 {
    margin-bottom: -13px;
    overflow: hidden;
    li {
      margin: 0 0 10px 0;
      padding: 8px 0 8px 14px;
      border-bottom: 1px dashed #ccc;
      background: url(https://shop.kitamura.jp/common/images/mkr_square_red.gif) no-repeat left;
      font-size: 0.85em;
      line-height: 1.4em;
      list-style: none;
    }
  }
}
</style>