<template>
  <v-app>
    <div class="highly-recommended-2019-4161">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />

        <h1 class="pa-4 text-sm-h6 text-subtitle-1">ガラス越し撮影の必須アイテム「よしみカメラ 忍者レフ」</h1>
        <router-link to="/ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2019/4357/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>
        <p class="pt-4">飛行機、電車、バスや水族館などのガラス越しの撮影におすすめ商品のご紹介</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'忍者レフって…ご存知ですか？ガラス越し撮影の必須アイテム'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'ガラス越しの撮影は屋内等の写りこみが多いですよね 忍者レフを使えば映り込みを防ぎ綺麗に写真が撮れます。'"
          :btntxt="'商品ページを見る'"
        />

        <div class="mt-8 pa-4">
          <!-- ↓ トピック -->
          <subText :textItem="'トピック＆まとめ'" />
          <v-sheet color="#F8FBD1" class="pa-5">
            ガラス越しの撮影は屋内等の写りこみが多いですよね。
            忍者レフを使えば映り込みを防ぎ綺麗に写真が撮れます。水族館や電車の窓越しの撮影時におすすめの商品です
          </v-sheet>
        </div>
        <br />

        <!-- ↓ 目次版ナビメニュー -->
        <tableOfContentsNavi :naviList="naviList" />

        <!-- ↓おすすめ理由１ -->
        <subText :textItem="'おすすめの理由１：ガラスへの撮影者及び室内光等の映り込み防止用アイテム'" id="r01" />
        <p class="my-2 pa-2">
          忍者レフは黒面と白面があります。黒面の方を使えばガラス越しの写りこみを防ぎクリアな写真が撮れます。
          各地のランドマークや飛行機や電車からのガラス越し撮影はこれでバッチリです。
        </p>
        <v-img src="/ec/images2/special/general/highly_recommended/2019/4161/04.jpg" max-width="922" height="auto" alt="イメージ" class="mx-auto mb-2"></v-img>
        <v-img src="/ec/images2/special/general/highly_recommended/2019/4161/01.jpg" max-width="922" height="auto" alt="イメージ" class="mx-auto"></v-img>

        <!-- ↓おすすめ理由２ -->
        <subText :textItem="'おすすめの理由2：コンパクトで持ち運びもラクラク'" id="r02" />
        <p class="my-2 pa-2">
          忍者レフは3種類がラインナップされており、丸型はミニタイプ(展開時直径35㎝)、丸型タイプ(展開時直径50㎝)の2種類。航空機ボーイング787の大きい窓にピッタリサイズの長方形、忍者レフ787(展開時直径55㎝×40㎝)があります。
        </p>
        <v-row>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/general/highly_recommended/2019/4161/02.jpg" max-width="455" height="auto"></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/general/highly_recommended/2019/4161/03.jpg" max-width="455" height="auto"></v-img>
          </v-col>
        </v-row>

        <!-- ↓おすすめ理由３ -->
        <subText :textItem="'おすすめの理由3：白い面は商品撮影や花のマクロ撮影時のレフ板やポートレート時のキャッチライト用レフ板に最適'" id="r03" />
        <p class="my-2 pa-2">
          レフ板とは光を反射させる板で、主にポートレートで使用されることが多い撮影機材です。光を反射させることで被写体を明るくする効果や、人物の瞳に光が入りイキイキした印象を与える「キャッチライト」を入れるなど、光を思い通りに当てることができます。
        </p>

        <v-img src="/ec/images2/special/general/highly_recommended/2019/4161/item.jpg" max-width="400" height="auto" class="mx-auto"></v-img>

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha：実際に使ってみました！使い方・作例'" id="r04" />
        <shasha
          :txt="'使ってみた感想として、「レフ板の中心にレンズを入れて窓に近づいて撮影する」という使い方がシンプルで簡単だと思いました。 近年レフ板の使用を制限されている場所もあるので事前の確認が必要ですが、高層ビルや水族館で苦労していた撮影が改善されることは非常に魅力で、しかも、サイズはコンパクト。撮影の際に持っていきたくなりました！...'"
          :href="'https://shasha.kitamura.jp/article/468907811.html?utm_source=netshop&utm_medium=ichioshi&utm_campaign=4571104860518'"
          :src="'/ec/images2/special/general/highly_recommended/2019/4161/shashabnr.jpg'"
        />

        <!-- ↓ 動画で見る -->
        <subText :textItem="'キタムラチャンネル：動画で見る「忍者レフ」'" id="r05" />
        <watchInVideo :src="'https://www.youtube.com/embed/o7CYwsn6cfA?rel=0'" :height="400" :sm="12" />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'商品一覧'" id="r06" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'ガラス越し撮影の必須アイテム「よしみカメラ 忍者レフ」'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'ガラス越しの撮影は屋内等の写りこみが多いですよね 忍者レフを使えば映り込みを防ぎ綺麗に写真が撮れます。'"
          :btntxt="'商品ページを見る'"
        />

        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
        <!-- ↓ 話題の新製品バックナンバー＆おすすめの特集を表示したい場合 -->
        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import SubText from '@/components/common/special/subtext.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'highly-recommended-2019-4161',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    subText: SubText,
    tableOfContentsNavi: TableOfContentsNavi,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha,
    urlcopy: Urlcopy,
    watchInVideo: WatchInVideo,
  },
  setup: () => {
    document.title = 'よしみカメラ 忍者レフ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '夜景撮影やガラス越し撮影の必須アイテム「よしみカメラ 忍者レフ」の紹介')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: '忍者レフ',
          disabled: true
        }

      ],
      // ↓ ---- 話題の新製品バックナンバー＆おすすめの特集 ----
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/sale/shoppingcredit-campaign',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取',
          target: 'blank'
        }
      ],
      // ↓ ---- ナビボタン ----
      naviList: [
        { naviItem: '理由その１：ガラスへの撮影者及び室内光等の映り込み防止用アイテム', href: '#r01' },
        { naviItem: '理由その２：コンパクトで持ち運びもラクラク', href: '#r02' },
        { naviItem: '理由その３：商品撮影や花のマクロ撮影時のレフ板やポートレート時のキャッチライト用レフ板に最適', href: '#r03' },
        { naviItem: 'ShaSha：実際に使ってみました！使い方・作例', href: '#r04' },
        { naviItem: 'キタムラチャンネル：動画で見る「忍者レフ」', href: '#r05' },
        { naviItem: '商品一覧', href: '#r06' }
      ],
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4571104860518',
        '4571104861553',
        '4571104860037',
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>,
      mainProductJanCode: ['4571104860518'],
      mainProductList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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
