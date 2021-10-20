<template>
  <v-app>
    <div class="okamoto-yutaka">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy :color="'#3eabd2'" />

        <div class="leofoto">
          <h1 class="mb-5 tx-20 li-h2">
            航空写真家 <span class="tx-30">岡本豊</span>先生監修 <br /><span class="tx-40">レオフォト オリジナル三脚</span>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/set/qr_pc.png" max-width="57" max-height="57" class="mx-w100 rig pc"></v-img>
          </h1>
          <div class="cl li-h12 text-center sp" v-if="$vuetify.breakpoint.smAndDown">
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/set/qr_sp.png" max-width="114" max-height="114" class="mx-auto"></v-img>
            <v-img src="/ec/images2/special/camera/okamoto-yutaka/set/p00.webp" max-width="300" max-height="300" alt="岡本 豊さん" class="mx-auto"></v-img>
            <br />航空写真家 岡本 豊さん
          </div>

          <v-row>
            <v-col cols="12" sm="8">
              <p class="mt-5 mb-7 pa-2">
                岡本豊先生ご愛用の <span class="poins">レオフォト LS-284CEX ＋ BV-10 LSレンジャーシリーズ三脚</span> に、こだわりの
                <span class="poins">純正アクセサリー</span> と <span class="poins">「Go! Go! 787」ステッカー</span> を、<span class="tx-24">5点セット</span
                >で販売します！<br /><br class="pc" />
                もちろん既にご愛用三脚をお持ちの方には、アクセサリーキットのみでもご購入できます。<br /><br class="pc" />
                カメラのキタムラだけのオリジナル限定販売三脚セット、ぜひご覧ください！
              </p>
            </v-col>
            <v-col cols="12" sm="4" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img src="/ec/images2/special/camera/okamoto-yutaka/set/p00.webp" max-width="268" max-height="268"></v-img>
              航空写真家 岡本 豊さん
            </v-col>
          </v-row>

          <!-- ↓オリジナルセットはこちら-->
          <h2 class="mt-5 mb-2 tx-28 li-h12 cl"><v-icon color="#42bcd1" left>fas fa-plane</v-icon>オリジナルセットはこちら</h2>
          <!-- <p class="cl" v-html="changeTextColor(text)"></p> -->
          <v-row class="cl" no-gutters justify="center">
            <v-col cols="12" sm="3">
              <h3 class="cl tx-16 li-h15 font-weight-bold including-line-breaks h100" v-html="originalSetList[0].name"></h3>
              <router-link :to="`/ec/pd/${mainProductList[0].janCode}`">
                <v-img :src="originalSetList[0].src" max-width="333" max-height="450" class="mx-auto"></v-img>
              </router-link>
              <p class="font-weight-bold text-center mt-2">
                特別価格：<span class="red--text">{{ formatPrice(parseInt(mainProductList[0].price)) }}</span
                ><span class="font-weight-normal text-body-2"> (税込)</span>
              </p>
              <intenseRedBtn :btntxt="'購入ページへ行く'" :href="`/ec/pd/${mainProductList[0].janCode}`" :height="'60'" />
            </v-col>
            <v-col cols="1" v-if="$vuetify.breakpoint.mdAndUp">
              <div class="text-center tx-28 li-h2 font-weight-bold mt240">+</div>
            </v-col>
            <v-col cols="12" sm="3">
              <h3 class="cl tx-16 li-h15 font-weight-bold including-line-breaks h100" v-html="originalSetList[1].name"></h3>
              <router-link :to="`/ec/pd/${mainProductList[1].janCode}`">
                <v-img :src="originalSetList[1].src" max-width="333" max-height="450" class="mx-auto"></v-img>
              </router-link>
              <p class="font-weight-bold text-center mt-2">
                価格：<span class="red--text">{{ formatPrice(parseInt(mainProductList[1].price)) }}</span
                ><span class="font-weight-normal text-body-2"> (税込)</span>
              </p>
              <intenseRedBtn :btntxt="'購入ページへ行く'" :href="`/ec/pd/${mainProductList[1].janCode}`" :height="'60'" />
            </v-col>
            <v-col cols="1" v-if="$vuetify.breakpoint.mdAndUp">
              <div class="text-center tx-28 li-h2 font-weight-bold mt240">→</div>
            </v-col>
            <v-col cols="12" sm="3">
              <h3 class="cl tx-16 li-h15 font-weight-bold including-line-breaks h100" v-html="originalSetList[2].name"></h3>
              <router-link :to="`/ec/pd/${mainProductList[2].janCode}`">
                <v-img :src="originalSetList[2].src" max-width="333" max-height="450" class="mx-auto"></v-img>
              </router-link>
              <p class="font-weight-bold text-center mt-2">
                価格：<span class="red--text">{{ formatPrice(parseInt(mainProductList[2].price)) }}</span
                ><span class="font-weight-normal text-body-2"> (税込)</span>
              </p>
              <intenseRedBtn :btntxt="'購入ページへ行く'" :href="`/ec/pd/${mainProductList[2].janCode}`" :height="'60'" />
            </v-col>
          </v-row>

          <!-- ↓岡本豊先生によるアクセサリーキットのアイテムご紹介-->
          <h2 class="mt-15 mb-2 tx-24 li-h12 cl">
            <v-icon color="#42bcd1" left>far fa-comment-dots</v-icon>岡本豊先生によるアクセサリーキットのアイテムご紹介
          </h2>
          <v-container class="cl pa-2 pa-sm-4" v-for="(accessoryKit, index) in accessoryKitList" :key="index">
            <h3 class="tx-18 li-h12 font-weight-bold mb-2"><v-icon color="#42bcd1" left>fas fa-plane</v-icon>{{ accessoryKit.subtitle }}</h3>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img :src="src" max-width="412" height="auto" v-for="(src, i) in accessoryKit.src" :key="i"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="including-line-breaks">{{ accessoryKit.txt }}</p>
              </v-col>
            </v-row>
          </v-container>

          <!-- ↓航空写真家 岡本豊先生のレオフォト三脚講座-->
          <h2 class="mt-15 mb-2 tx-24 li-h12 cl"><v-icon color="#42bcd1" left>fas fa-camera</v-icon>航空写真家 岡本豊先生のレオフォト三脚講座</h2>
          <div class="cl"></div>
          <a href="/ec/special/camera/okamoto-yutaka">
            <v-img :src="'https://shopimg.kitamura.jp/images/banner/7677.jpg'" max-width="708" max-height="190"></v-img>
          </a>
          <p class="pa-4 tx-16">岡本豊先生の航空写真ギャラリーはもちろん、ご愛用の三脚 レオフォト LS–284CEXの魅力をご紹介しています。</p>

          <!-- ↓おすすめ レオフォト三脚 アクセサリーセット-->
          <h2 class="tx-20 ls-08 mb-5"><v-icon color="#42bcd1" left>fas fa-shopping-cart</v-icon>おすすめ レオフォト三脚 アクセサリーセット</h2>
          <div class="cl"></div>
          <priceAndPopular :productDetailList="productDetailList" />

          <div class="bg-naname tx-14 text-center my-2 pa-2 li-h12">
            <a href="/ec/guide/s_credit_01"> <span class="red--text">>></span> ショッピングクレジットなら48回まで分割金利手数料 ￥0 </a>
          </div>

          <!-- ↓おすすめ レオフォト三脚 アクセサリーセット-->
          <h2 class="mt-10 tx-20 ls-08 mb-5"><v-icon color="#42bcd1" left>fas fa-camera</v-icon> おすすめ特集・プリントサービス</h2>
          <div class="cl"></div>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import { ProductDetail } from '@/types/product';
import ProductService from '@/logic/product.service';
import { formatPrice } from '@/logic/utils';
import IntenseRedBtn from '@/components/common/special/intenseRedBtn.vue';

export default Vue.extend({
  name: 'okamoto-yutaka-set',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    intenseRedBtn: IntenseRedBtn,
    priceAndPopular: PriceAndPopular,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'レオフォト オリジナル三脚 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '航空写真家 岡本豊先生監修のレオフォト オリジナル三脚！カメラのキタムラネットショップ');
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '航空写真家 岡本豊先生監修 レオフォト オリジナル三脚',
          disabled: true
        }
      ],
      originalSetList: [
        { name: 'レオフォト LS-284CEX カーボン三脚<font color="red">＋</font>BV-10 ビデオ雲台 セット', src: '/ec/images2/special/camera/okamoto-yutaka/set/01.webp' },
        { name: 'レオフォト 岡本豊 オリジナルアクセサリーキット\n<font color="red">※セット特価！GO!GO!787ステッカー 2枚付</font>', src: '/ec/images2/special/camera/okamoto-yutaka/set/02.webp' },
        { name: 'レオフォト LS-284CEX 三脚<font color="red">＋</font>BV-10 ビデオ雲台<font color="red">＋</font>岡本豊オリジナルアクセサリーキット\n<font color="red">※セットだと5,310円お得！</font>', src: '	/ec/images2/special/camera/okamoto-yutaka/set/03.webp' }
      ],
      accessoryKitList: [
        { subtitle: 'Go！Go！787ステッカー', src: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/set/st01.jpg'], txt: '月刊エアライン誌「Go！Go！787」は連載開始からまもなく５年となります。悪天候や、シビアな環境での超望遠レンズの使用では、Leofoto製のLS284CEXが必需品となっています。この三脚が、これまでの「Go！Go！787」の連載を支えてくれたと言っても過言ではありません。\n今回、LS284CEXのパフォーマンスをさらに発揮させるオリジナルキットの発売を記念して、エアライン公認「Go！Go！787ステッカー」を製作いたしました。' },
        { subtitle: 'レオフォト Strap-28LS レンジャー・アーバンシリーズ用ワンタッチ式ストラップ', src: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/set/st02.jpg'], txt: 'LS284CEXにはケースが付属されていますが、三脚を準備した後、雨あがりで足下が汚れている時や強風時など、ケースの置き場に困ることもありました。\nストラップを装着することで、ケースを自宅や車内に置いたまま撮影に行くことが可能になります。\nこのストラップは、着脱の操作が容易で、冬場の撮影で手袋をはめたままでも大丈夫です。\nまた、強風時の撮影では、フェンス等に巻き付けることで、三脚の転倒を防止してくれます。' },
        { subtitle: 'RB-1 ストーンバッグ', src: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/set/st03.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/set/st03b.jpg'], txt: '冬場のマイナス10度を下回る寒さの時は、さすがのBV-10雲台も、動作が渋くなってしまうことがありましたが、カイロを巻くことでオイルが温まり、通常の動きに戻ることを確認。\nそこで、そのカイロを見栄え良く雲台周辺に巻くことができるアイテムを、Leofotoさんにリクエストしました。\nこのストーンバッグは、カイロを入れるだけでなく、長時間撮影時には、重りを入れて三脚を安定させたり、レンズ交換時には、一時的にレンズを置いておくこともできます。\nまた、ドリンクや携帯の置き場としても活躍してくれます。' },
        { subtitle: 'LW-28 ウォームグリップ', src: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/set/st04.jpg'], txt: 'LS284CEXは機能だけでなく、カーボン柄の見た目が美しいのも魅力のひとつです。\nその美しさを損なうことなく、冬場のカーボンの冷たさを解消してくれるのが、ウォームグリップです。\n冬場だけでなく、三脚を置く時や、持ち運びの時の傷防止にもなります。' },
        { subtitle: 'PU-100 クイックリリースプレート', src: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/okamoto-yutaka/set/st05.jpg'], txt: 'とっさにレンズ交換をすることは、どんなジャンルを撮影されている方も経験があると思います。\n私の場合、クイックリリースプレートを、EF500mmと70-200mmのレンズに取り付けておくことで、レンズ交換のたびにプレートを交換する手間が省け、素早く三脚にセットすることができました。\nプレートの造りは強度があり、しっかりしているので、望遠レンズに安心して使用しております。' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/okamoto-yutaka',
          img: 'https://shopimg.kitamura.jp/images/banner/7678.jpg',
          alt: '航空写真家 岡本豊先生のレオフォト三脚講座'
        },
        {
          href: '/ec/special/camera/tripod',
          img: '	https://shopimg.kitamura.jp/images/banner/3253.gif',
          alt: 'おすすめ三脚特集'
        },
        {
          href: '/ec/special/general/photocon-learn',
          img: 'https://shop.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      mainProductJanCode: ['4560376577996', '4560376574933', '2239530007885'],
      mainProductList: [] as Array<ProductDetail>,
      productJanCodeList: [
        '2239530007885',
        '2239530008486',
        '4560376577996',
        '4560376574933',
        '4560376574414',
      ],
      productDetailList: [] as Array<ProductDetail>
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
      formatPrice,
    };
  }
});
</script>

<style lang="scss" scoped>
.leofoto {
  margin: 20px 0 60px 0;
  padding: 0 3%;
  box-sizing: border-box;
}
.okamoto-yutaka h1,
.okamoto-yutaka h2 {
  width: 100%;
  font-weight: bold;
  font-family: '游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif;
  float: left;
  clear: both;
  background: linear-gradient(to right, rgba(66, 188, 209, 1) 3%, rgba(43, 102, 212, 1) 50%, rgba(6, 58, 101, 1) 96%);
  -webkit-background-clip: text;
  color: transparent;
}
.okamoto-yutaka p {
  line-height: 1.9em;
  font-size: 16px;
}
.li-h2 {
  line-height: 2em;
}
.li-h12 {
  line-height: 1.2em !important;
}
.li-h15 {
  line-height: 1.5em;
}
.tx-14 {
  font-size: 14px !important;
}
.tx-16 {
  font-size: 16px;
}
.tx-18 {
  font-size: 18px !important;
}
.tx-20 {
  font-size: 20px !important;
}
.tx-24 {
  font-size: 24px;
}
.tx-28 {
  font-size: 28px;
}
.tx-30 {
  font-size: 30px;
}
.tx-40 {
  font-size: 40px;
}
.rig {
  float: right;
}
.cl {
  clear: both;
}
.poins {
  background-color: #e6feff;
  color: #144ea7;
  font-weight: bold;
  padding: 0 3px;
}
.ls-08 {
  letter-spacing: 0.08em;
}
.h100 {
  height: 100px;
}
.mt240 {
  margin-top: 240px !important;
}
.bg-naname {
  background: url(/ec/images2/special/camera/okamoto-yutaka/set/bk_naname.gif) repeat top left;
}
@media screen and (min-width: 950px) {
  .sp {
    display: none;
  }
}
@media screen and (max-width: 655px) {
  .tx-30,
  .tx-40 {
    font-size: 24px;
  }
  .tx-24,
  .tx-28 {
    font-size: 20px;
    line-height: 1.3em !important;
  }
  .li-h2 {
    line-height: 1.2em;
  }
  .sp {
  }
  .pc {
    display: none;
  }
}
</style>


