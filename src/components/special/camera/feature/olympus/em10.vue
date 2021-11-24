<template>
  <v-app>
    <div class="olympus-em10">
      <div class="w720">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <v-card img="/ec/images2/special/camera/feature/olympus/em10/bg_topimg.gif" width="720" height="180">
          <h1 class="pt-1 pl-1 text-h6">オリンパス OM-D E-M10</h1>
          <h2 class="pl-5 text-subtitle-2">ミラーレス一眼デジカメ</h2>
          <p class="mt-2 mb-1 ml-5 caption text-sm-body-1">
            驚きの薄さ！見やすいファインダーと 連写機能で<br />子供やペットの撮影もお手のもの♪一眼レフにも負けない<br />
            ｢<strong>オリンパス OM-D E-M10</strong>｣
          </p>
        </v-card>

        <!-- ↓ ナビボタン -->
        <v-container class="pa-0 mt-2">
          <v-row no-gutters>
            <v-col cols="12" sm="3" v-for="(navi, index) in naviList" :key="`navi-${index}`">
              <a v-scroll-to="{ el: navi.href }">
                <v-btn block height="62" color="grey lighten-3" tile
                  ><span class="including-line-breaks text-subtitle-1"
                    >{{ navi.naviItem }}<v-icon right small color="red">fas fa-chevron-right</v-icon></span
                  ></v-btn
                >
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!--価格・人気アクセサリ-->
        <subText :textItem="'オリンパス OM-D E-M10 ミラーレス一眼デジカメ 商品・価格一覧'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--スペック-->
        <subText :textItem="'オリンパス OM-D E-M10 ミラーレス一眼デジカメ スペック'" id="spec" />
        <ul class="point caption text-sm-body-2">
          <li class="pointta mt-2">
            <span class="bgtypetitle"><strong>超薄型スタイリッシュデザイン</strong></span
            ><br />
            女性の手の平の上にものる薄さ。<br />
            荷物が多くなりがちなお子様とのお出かけもラクラク♪<br />
          </li>
          <li class="pointtb mt-2">
            <span class="bgtypetitle"><strong>一瞬を逃さないピント合わせ</strong></span
            ><br />
            最大8コマ/秒の高速連写。一眼レフ中級機以上の<br />
            高速連写でお子様やペットの決定的瞬間を逃さない
          </li>

          <li class="pointtc mt-2">
            <span class="bgtypetitle"><strong>電子ビューファインダー</strong></span
            ><br />
            エントリークラスの一眼レフより大きく見え、<br />
            日中の撮影などが快適に。意外に役立つ大型ファインダー。
          </li>
        </ul>

        <!--比較-->
        <subText :textItem="'一眼レフ・ミラーレスとの比較'" />
        <p>デジタル一眼レフ入門機や、他のミラーレス一眼と比べるとどう違うの？</p>
        <p><strong>●デジタル一眼レフの入門機と比較すると・・・</strong></p>
        <ul class="point caption text-sm-body-2">
          <li class="pointtd mt-2">
            <span class="bgtypetitle"><strong>カメラサイズが薄くて軽い</strong></span
            ><br />
            レンズをつけた状態で、一眼レフの半分以下の薄さ。<br />
            標準ズームレンズを付けても約490g。鞄に入れても負担になりにくい！<br />
            さらに、小さいながらも質感にこだわった金属ボディで、見た目の雰囲気もイイ♪
          </li>
          <li class="pointte mt-2">
            <span class="bgtypetitle"><strong>高速性能がスゴイ</strong></span
            ><br />
            デジタル一眼レフ入門機の人気機種では、1秒間に約5枚の写真が撮れる<br />のに対し、 E-M10なら、1秒間に8枚撮影可能。さらに、液晶を指で触ると<br />シャッターが切れる｢タッチシャッター｣で、良い一瞬が撮れる！
          </li>

          <li class="pointtf mt-2">
            <span class="bgtypetitle"><strong>手ブレ補正機能がボディに内蔵</strong></span
            ><br />
            E-M10はボディ内手ブレ補正を採用しているので、<br />どのレンズを装着しても手ブレが起こりにくい。<br />
            レンズ内手ブレ補正では制御できないブレも抑えてくれて、失敗写真が減る♪
          </li>
        </ul>
        <p><strong>●オリンパス他ミラーレス一眼と比較すると・・・</strong></p>
        <ul class="point caption text-sm-body-2">
          <li class="pointtg">
            <span class="bgtypetitle"><strong>画質がキレイ</strong></span
            ><br />
            最上位機種のE-M1と同じ画像処理エンジンを搭載（TruePicVII）。<br />
            レンズの性能を最大限に引き出せ、一眼トップクラスの高い描写性能
          </li>
          <li class="pointtg">
            <span class="bgtypetitle"><strong>ファインダーが見やすい</strong></span
            ><br />
            撮影シーンによって、ファインダーの明るさを自動調整する｢キャッツアイコントロール｣。<br />
            暗い・明るい場所など、液晶が見にくい撮影時は、ファインダーを覗けばちょうど良い明るさで被写体を確認可能♪
          </li>
        </ul>

        <!--おすすめレンズとアクセサリー-->
        <subText :textItem="'オリンパス OM-D E-M10 ミラーレス一眼デジカメ おすすめレンズとアクセサリー'" id="acc" />
        <v-row>
          <v-col cols="12" sm="6">
            <a href="ec/special/camera/lens/mzuiko">
              <v-img src="https://shopimg.kitamura.jp/images/banner/1034.gif" max-width="350" height="auto" class="mx-auto"> </v-img>
            </a>
          </v-col>
          <v-col cols="12" sm="6">
            <router-link to="/ec/list?narrow18=0&keyword=OM-D%20E-M10&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=OM-D%20E-M10&x=0&y=0">
              <v-img
                src="/ec/images2/special/camera/feature/olympus/em10/bnr_accm10_350-130.gif"
                alt="オリンパス OM-D E-M10におすすめのアクセサリーb"
                max-width="350"
                height="auto"
                class="mx-auto"
              >
              </v-img>
            </router-link>
          </v-col>
        </v-row>

        <!--運動会もオリンパス OM-D E-M10におまかせ！-->
        <subText :textItem="'運動会もオリンパス OM-D E-M10におまかせ！'" id="sportsfes" />
        <a href="/ec/images2/special/camera/feature/olympus/em10/em10sportsfes.pdf" target="_blank">
          <v-img src="	/ec/images2/special/camera/feature/olympus/em10/bnr_sportsfes.jpg" max-width="720" height="auto" class="mx-auto"> </v-img>
        </a>
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
  name: 'olympus-em10',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
  },
  setup: () => {
    document.title = 'OLYMPUS OM-D E-M10 | オリンパス ミラーレス一眼カメラ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'オリンパス OM-D E-M10特集。ミラーレス一眼新製品のスペックや価格をチェック！全国1000店舗のカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#spec' },
        { naviItem: '交換レンズ\nアクセサリー', href: '#acc' },
        { naviItem: '運動会もおまかせ', href: '#sportsfes' },
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'オリンパス OM-D E-M1 MarkII',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350046163',
        '4545350046460',
        '4545350046187',
        '4545350046415',
        '4545350046149',
        '4545350046156',
        '4545350047726',
        '4545350047719',
        '4975981731990',
        '4545350043742',
        '4545350045920',
        '4545350045982',
        '4545350046347',
        '4977187330878',
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
        console.log(productListResult);
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

<style lang="scss" scoped>
.olympus-em10 {
  .w720 {
    max-width: 720px;
    margin: 0 auto;
  }
  .point {
    height: auto;
    margin: 0px 0px 10px 0px;
    padding: 0px 0px 0px 20px;
    li {
      height: 90px;
      margin: 10px 0px 10px 0px;
      list-style-type: square;
    }
    .pointta {
      background-image: url(/ec/images2/special/camera/feature/olympus/em10/bg_pointoa.jpg);
    }
    .pointtb {
      background-image: url(/ec/images2/special/camera/feature/olympus/em10/bg_pointb.gif);
    }
    .pointtc {
      background-image: url(/ec/images2/special/camera/feature/olympus/em10/bg_pointc.gif);
    }
    .pointtd {
      background-image: url(/ec/images2/special/camera/feature/olympus/em10/bg_pointo_120.jpg);
      height: 130px;
    }
    .pointte {
      background-image: url(/ec/images2/special/camera/feature/olympus/em10/bg_pointoe_120.jpg);
      height: 130px;
    }
    .pointtf {
      background-image: url(/ec/images2/special/camera/feature/olympus/em10/bg_pointof_120.jpg);
      height: 130px;
    }
    .bgtypetitle {
      background-color: #ffcc66;
      margin-left: 0.3em;
      margin-right: 0.3em;
    }
  }
}
</style>