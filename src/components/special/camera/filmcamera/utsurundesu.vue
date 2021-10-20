<template>
  <div class="utsurundesu">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <!-- ↓ 看板：画像の読み込み -->
      <p class="font-small">「写ルンです」購入・使い方・撮影後の現像・データ化についてのご紹介</p>
      <h1>
        <img class="mb-1 banner-img pc" src="/ec/images2/special/camera/filmcamera/utsurundesu/bg_top.jpg" alt="写ルンです" />
        <img class="mb-1 banner-img sp" src="/ec/images2/special/camera/filmcamera/utsurundesu/fan-fair_01sp.jpg" alt="写ルンです" />
      </h1>
      <!-- ↑ 看板：画像の読み込み -->
      <p>写ルンですの購入も現像・データ化もカメラのキタムラにおまかせください</p>
      <v-container>
        <v-row>
          <v-card class="rounded d-block" tile width="100%">
            <v-toolbar color="teal darken-1" dark>
              <v-toolbar-title>MENU</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" v-scroll-to="item.link">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-row>
      </v-container>
      <p class="mt-5">
        今、注目されている「写ルンです」。人気の理由は、緊張しないで撮影できる、友だちの自然な表情が撮れる。なにより、操作が簡単で、カメラ自体が軽いからポケットやバッグに気軽に携帯できます。<br />
        楽しい写真の撮り方・使い方、撮影後の現像・SNSへの共有に便利なデータ化も、カメラのキタムラにおまかせください！
      </p>
      <!--↓-->
      <div id="type" class="h-1 mt-5 mb-5"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h2 class="title mb-2 font-weight-bold">「写ルンです」の種類</h2>
            <!-- ↓ サンプル：メイン商品-->
            <div class="main-product mb-5" v-if="Object.keys(mainProduct).length">
              <div class="main-product-area py-3 px-10">
                <div class="main-product-area-left text-center p-2 col-sm-6 float-left">
                  <router-link class="main-product-link" :to="`/ec/pd/${mainProduct.janCode}`">
                    <img class="main-product-img" :src="mainProduct.images[0].imagePath" @error="noimage" />
                    <h3 class="main-product-name fs-6 mt-3">{{ mainProduct.itemName }}</h3>
                  </router-link>
                </div>
                <div class="main-product-area-right col-sm-6 float-left">
                  <p class="tx-16 text-left">
                    手頃な価格で初めての人におすすめ！スタンダードモデル<br />
                    ファインダーが大きくて見やすい！<br />
                    ※大量のご注文の場合はお取り寄せにお時間がかかります
                  </p>
                  <p class="main-product-price text-center">
                    <span class="d-inline-block">価格</span><span class="text-h4 primary--text">¥{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
                    ><span class="d-inline-block">(税込)</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-h5 font-weight-bold"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="60px"
                    :href="`/ec/pd/${mainProduct.janCode}`"
                  >
                    <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                    商品ページを見る
                  </v-btn>
                </div>
              </div>
            </div>
            <!-- ↑ サンプル：メイン商品 -->
          </v-col>
        </v-row>
      </v-container>
      <!--↑メイン商品-->

      <!--↓-->
      <div class="h-1 mt-5 mb-5" id="howto"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h2 class="title mb-5 font-weight-bold">「写ルンです」３つの撮影のコツ</h2>
            <p class="text-h6 font-weight-bold">１、フラッシュ（ストロボ）を上手に活用しましょう</p>
            <v-card class="v-card__text" outlined>
              <p class="tx-16">
                室内・日陰・木陰・逆光のときは、フラッシュ（ストロボ）を使いましょう！
                明るいからといって、フラッシュを使わずに撮影したら・・・・あらら。写真が暗く写っていた。これも味。と言えば味ですが、せっかくなら明るく撮りたい！
                と言う方は室内外でフラッシュを使いましょう！
              </p>
              <p class="text-h6 font-weight-bold">逆光の魅力 こんな楽しみ方もあります</p>
              <p class="tx-16">
                フラッシュを忘れちゃった！ 案外そんなときに撮影した写真も、味があってよかったりします♪
                実は、写ルンですは逆光時の光の入り方も魅力。レンズがプラスチックなので逆光に弱く、どう写るかわからない→でもそれが楽しかったりします♪
              </p>
              <v-col cols="12"
                ><v-layout justify-center wrap
                  ><v-flex>
                    <v-img
                      contain
                      max-height="396"
                      alt="フラッシュ（ストロボ）を上手に活用しましょう"
                      src="/ec/images2/special/camera/filmcamera/utsurundesu/image-how04.gif"
                    ></v-img></v-flex
                ></v-layout>
              </v-col>
            </v-card>

            <p class="text-h6 font-weight-bold mt-5">２、自撮りのコツ。「撮影距離」を意識しましょう。</p>
            <v-card class="v-card__text" outlined>
              <p class="tx-16">
                写ルンですにはピント合わせの機能がないぶん、距離感が大切！ <span class="font-weight-bold">被写体からは、１ｍは離れて</span>撮影しましょう！
                カフェでかわいいデザートに思わず興奮して“パチリ”と撮るものの、仕上がりはピンボケ・・・なんて体験ありませんか？
                原因は近くに寄りすぎ。距離の感覚は撮影していくうちに覚えていきます＊<br />
                また、写ルンですで自分撮りを上手に撮るには、とにかく腕をピーンと伸ばして撮影しましょう＊ 遠すぎるくらいが丁度よかったりします。
              </p>
              <v-col cols="12"
                ><v-layout justify-center wrap
                  ><v-flex>
                    <v-img
                      contain
                      max-height="396"
                      alt="「撮影距離」を意識しましょう"
                      src="/ec/images2/special/camera/filmcamera/utsurundesu/fan-fair_03.gif"
                    ></v-img></v-flex></v-layout
              ></v-col>
            </v-card>

            <p class="text-h6 font-weight-bold mt-5">３、撮影のコツ。自由にシャッターを切りましょう♪</p>
            <v-card class="v-card__text float-left" outlined>
              <p class="tx-16">いろんな角度からシャッターを切ってみましょう！ カメラの構え方も基本自由ですが 構え方を一工夫すると、楽しい写真が撮れますよ♪</p>
              <v-col cols="12" class="bkline-g mt-4 clear float-left">
                <v-col sm="6" xs="12" class="float-left"
                  ><v-layout justify-center wrap
                    ><v-flex>
                      <v-img alt="スタンダード" src="/ec/images2/special/camera/filmcamera/utsurundesu/image-how01.gif" max-width="100%"></v-img></v-flex
                  ></v-layout>
                </v-col>
                <v-col sm="6" xs="12" class="float-left">
                  <p class="tx-16">
                    ファインダーを覗き、脇をしめて撮る<br />
                    ファインダーを覗いて撮るのも「写ルンです」ならではで、新鮮でワクワク。風景や構図をしっかり考えて撮りたいときは、スタンダードに構えるのがおすすめ！
                  </p></v-col
                >
              </v-col>

              <v-col cols="12" class="bkline-g mt-4 clear float-left">
                <v-col sm="6" xs="12" class="float-left"
                  ><v-layout justify-center wrap
                    ><v-flex> <v-img max-height="396" alt="ノールック" src="/ec/images2/special/camera/filmcamera/utsurundesu/image-how02.gif"></v-img></v-flex
                  ></v-layout>
                </v-col>
                <v-col sm="6" xs="12" class="float-left">
                  <p class="tx-16">
                    ファインダーを覗かないで被写体に話しかけならがシャッターを押せば、自然な表情が撮影できます。どんな風に写っているか自分も楽しみな一枚に。
                  </p>
                </v-col>
              </v-col>
              <v-col cols="12" class="bkline-g mt-4 clear float-left">
                <v-col sm="6" xs="12" class="float-left">
                  <v-layout
                    ><v-flex> <v-img max-height="396" alt="ハイ＆ロー" src="/ec/images2/special/camera/filmcamera/utsurundesu/image-how03.gif"></v-img></v-flex
                  ></v-layout>
                </v-col>
                <v-col sm="6" xs="12" class="float-left">
                  <p class="tx-16">普段見る風景を思いっきり変えると、いつもと違う視点が写真となって楽しい一枚に。</p>
                </v-col>
              </v-col>
              <v-col cols="12">
                <p class="text-h6 font-weight-bold mt-6 float-left">ちょっとボケてる感じも楽しい</p>
                <p class="tx-16 float-left">
                  手軽にフィルムのアナログ感が楽しめるのが「写ルンです」の魅力。 はっきり写ってなくても、ぼけてる感じが楽しかったり。
                  設定ゼロ、シャッタータイムラグゼロ、かつノーファインダーで、撮りたいときに撮れるからおもしろい写真が撮れるし、現像するまでわからないのでさらに楽しいのが「写ルンです」
                </p>
                <v-col cols="12" class="float-left">
                  <v-layout justify-center wrap
                    ><v-flex>
                      <v-img
                        max-height="396"
                        alt="ちょっとボケてる感じも楽しい"
                        src="/ec/images2/special/camera/filmcamera/utsurundesu/image-how05.gif"
                      ></v-img></v-flex
                  ></v-layout>
                </v-col>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!--↓-->
      <div id="fun" class="h-1 mt-5 mb-5"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h2 class="title mb-2 font-weight-bold">写ルンですの現像もデータのスマホ転送もおまかせください</h2>
            <v-card class="v-card__text transparent" outlined>
              <p class="text-h6 font-weight-bold mt-2">
                撮影後は、カメラのキタムラで「現像」をしましょう。 一緒に「スマホ転送」or「フジカラーCD」もおススメです
              </p>
              <p class="tx-16">
                デジタルカメラと違って、写ルンですやフィルムカメラは「現像」しないと写真が見れません。<br />
                現像するまでどんな風に写っているかわからないドキドキ感も、写ルンですならではの楽しみ方ですね♪
                店頭のスタッフに「現像お願いします！」とお伝えください。<br />
                スマホに転送したい場合は、現像する際に「スマホ転送もしたい」と店員にお伝えください♪
              </p>
              <v-col cols="12"
                ><v-layout justify-center wrap
                  ><v-flex>
                    <v-img
                      contain
                      max-height="396"
                      alt="カメラのキタムラで写ルンですの現像・データのスマホ転送"
                      src="/ec/images2/special/camera/filmcamera/utsurundesu/image-fin01.gif"
                    ></v-img></v-flex
                ></v-layout>
              </v-col>
              <p class="tx-16 mt-4">
                現像と一緒に、フジカラーCDまたは、スマホ転送サービスも一緒に注文すれば撮影した写真がデータ化できます。
                画像データにすればSNSにアップしたり、シェアしたり。楽しさがドンドン広がります♪<br /><br />
                写ルンです × カメラのキタムラ現像もデータのスマホ転送もおまかせ
              </p>
              <div class="col-sm-12 pa-2 float-left text-center">
                <v-btn
                  block
                  class="v-btn--is-elevated v-btn--has-bg indigo darken-4 white--text text-h6"
                  height="80px"
                  :href="`https://www.kitamura-print.com/pickup/utsurundesu/`"
                  ><span class="">写ルンです現像とデータ化<br />詳しくはこちら</span></v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!--↓-->
      <div class="h-1 mt-5 mb-5"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h2 class="title mb-2 font-weight-bold">お気に入りの写真で 贈ろう！ 残そう！ 飾ろう！ 楽しもう！！</h2>
            <v-card class="v-card__text transparent" outlined>
              <p class="text--primary tx-16">データ化したら、人気のプリントサービスで写真を楽しみましょう。おすすめサービスの一部をご紹介</p>

              <v-col cols="12" class="bkline-g mt-4 float-left">
                <v-col cols="12" sm="6" class="pa-6 float-left"
                  ><p class="text-h6 font-weight-bold mt-1 text-center">ワンダーシャッフルプリント</p>
                  <v-layout justify-center wrap
                    ><v-flex>
                      <a href="https://www.kitamura-print.com/wonder_shuffle/" target="_blank">
                        <v-img
                          contain
                          max-height="396"
                          alt="シャッフルプリント"
                          src="https://www.kitamura-print.com/print/wonder_shuffle/images/bigImage.jpg"
                        ></v-img></a></v-flex
                  ></v-layout>
                  <p class="float-start tx-16 clearfix w-100">思い出写真を1枚にギュッと詰めてプレゼントしませんか？</p>
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg indigo darken-4 white--text text-h6 text-center"
                    height="80px"
                    :href="`https://www.kitamura-print.com/wonder_shuffle/`"
                    ><span class="v-btn__content"
                      >シャッフルプリントについて<br />
                      詳しくはこちら</span
                    ></v-btn
                  >
                </v-col>
                <v-col cols="12" sm="6" class="pa-6 float-left">
                  <p class="text-h6 font-weight-bold mt-1 text-center">PhotoZINE（フォトジン）</p>
                  <v-layout justify-center wrap
                    ><v-flex>
                      <a href="https://photobook.kitamura.jp/photozine/" target="_blank">
                        <v-img
                          contain
                          max-height="396"
                          alt="PhotoZINE（フォトジン）"
                          src="https://photobook.kitamura.jp/photozine/images/top_imageSlim.jpg"
                        ></v-img></a></v-flex
                  ></v-layout>
                  <p class="tx-16">お店ですぐできて、お手頃価格のフォトブック。ナチュラルな風合いの用紙です</p>
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg indigo darken-4 white--text text-h6 text-center"
                    height="80px"
                    :href="`https://photobook.kitamura.jp/photozine/`"
                    ><span class="v-btn__content">PhotoZINE（フォトジン）<br />マガジンタイプはこちら</span></v-btn
                  >
                </v-col>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!-- ↓ サンプル：価格・人気アクセサリー -->
      <div class="h-1 mt-5 mb-5" id="item"></div>
      <v-container>
        <v-row>
          <v-col class="pa-2 float-left" cols="12">
            <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
              <h2 class="title mb-2 font-weight-bold">「写ルンです」商品一覧</h2>
              <div class="product-list-wrap">
                <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
                  <div class="product-list-item-img mb-4 text-center">
                    <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                      ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
                    /></router-link>
                  </div>
                  <div class="product-list-item-name-wrap mb-2">
                    <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                      ><div class="product-list-item-name">{{ product.itemName }}</div></router-link
                    >
                  </div>
                  <div class="product-list-item-price-wrap">
                    特別価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
                    >（税込）
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- ↑ サンプル：価格・人気アクセサリー -->

      <!--↓-->
      <div class="h-1 mt-5 mb-5"></div>
      <h2 class="title mb-2 font-weight-bold">おすすめの特集・サービス</h2>
      <v-container>
        <v-row>
          <v-col class="mb-2 float-left" cols="12">
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/album/feature/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/3597.jpg"
                      alt="手作りアルバムの作り方特集"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/filmcamera/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/3771.gif"
                      alt="チェキ・チェキフィルム・チェキアルバムおすすめ"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/girlscamera/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/1390.jpg"
                      alt="女子がきゅんとくる ミラーレス一眼カメラ"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/operaglass/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/2462.gif"
                      alt="双眼鏡の選び方"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shopimg.kitamura.jp/images/banner/3808.gif"
                      alt="セール・特集一覧"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://www.kitamura-print.com/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/341.jpg"
                      alt="超高画質プリント"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
//import Product from '@/components/product-list/product.vue';
import { noimage, formatPrice } from '@/logic/utils';
//import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
//import { ConditionItem } from '@/types/conditions';
//import { ProductItem } from '@/types/product-list';
//import { NEWER_SORT_LIST } from '@/constants/sort-list';
//import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
//import { SEARCH_STATE } from '@/constants/search-state';
export default Vue.extend({
  name: 'utsurundesu',
  components: {
    breadcrumbs: Breadcrumbs
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '人気の「写ルンです」購入・現像・SNSに便利なデータ化もお任せください | カメラのキタムラネットショップ';
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '人気の「写ルンです」購入・現像・SNSに便利なデータ化もお任せください',
          linkUrl: '/ec/special/camera/filmcamera/utsurundesu',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
          selectedItem: 0,
    items: [
      { text: '写ルンです種類', icon: 'fa-check', link: '#type' },
      { text: '撮影のコツ', icon: 'fa-check', link: '#howto' },
      { text: '写ルンです 現像・データ化', icon: 'fa-check', link: '#fun' },
      { text: '商品一覧', icon: 'fa-check', link: '#item' }
    ],
      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: '4547410369137',
      // 結果格納用
      mainProduct: {} as ProductDetail,
      // ↑ ---- メイン商品 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410369137', '4547410379372', '4547410379389'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        state.mainProduct = mainResult.items[0];
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProduct = {} as ProductDetail;
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  },
});
</script>
<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  .v-list-item__title {
    font-size: 16px !important;
  }
  .utsurundesu p {
    line-height: 1.8em !important;
    font-size: 16px;
  }
  .txt-org {
    color: #dd6717;
  }
  .tx-aka {
    color: #d80b24;
  }
  .tx-tya {
    color: #46280c !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
    line-height: 1.8em;
  }
  .tx-14 {
    font-size: 14px;
  }
  .tx-12 {
    font-size: 12px;
  }
  .h-1 {
    height: 1px;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  /*背景*/
  .bkbkline-g {
    background: url(/ec/images2/special/camera/filmcamera/utsurundesu/bk_line.gif) repeat scroll top left;
  }

  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.utsurundesu {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
</style>

<style lang="scss" scoped>
// サンプル：価格・人気アクセサリー
.product-list {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: calc((100% - (12px * 3)) / 4);

    &:not(:nth-child(4n)) {
      margin-right: 12px;
    }

    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }

    &-link {
      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }

    &-name {
      height: 5em;
      color: $text-blue;
    }
  }
}

@media only screen and (max-width: 670px) {
  .product-list {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: calc((100% - (0px * 3)) / 1);

      &:not(:nth-child(1n)) {
        margin: 0 0 0px 0;
      }

      &:not(:nth-last-child(-n + 1)) {
        margin: 0 0 0px 0;
      }
    }
  }
  .product-list-item {
    margin: 0 0 20px 0 !important;
  }
}
</style>
