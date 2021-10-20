<template>
  <v-app>
    <div class="fujifilm-xf100-400">
      <!-- ↓ パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <!-- ↑ パンくず -->

      <div class="w720">
        <h1 class="mb-4">
          <v-img src="/ec/images2/special/camera/lens/fujifilm/xf100-400/mainv.png" alt="高画質を追求 FUJINONレンズ特集" max-width="100%" height="auto"></v-img>
        </h1>

        <priceAndPopular :productDetailList="productDetailList" />
        <br />

        <h2 class="mb-3">
          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec01_img01.png"
            alt="超望遠レンズ愛用者の皆さま！超望遠でしか撮れない被写体や作品の魅力は他のレンズにはない魅力ですよね！"
            max-width="100%"
            height="auto"
          ></v-img>
        </h2>
        <v-img
          src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec01_img02.png"
          alt="でもこんなことになってませんか？「カメラが重くて疲れる」「大きすぎて思ったように撮影できない」「疲れるから結局あまり使わない」"
          max-width="100%"
          height="auto"
          class="mt-4"
        ></v-img>

        <!-- ↓ arrow -->
        <v-img
          src="/ec/images2/special/camera/lens/fujifilm/xf100-400/arrow01.png"
          alt="そんなあなたに朗報！"
          max-width="475"
          max-height="110"
          class="mt-3 mx-auto"
        ></v-img>

        <v-sheet class="mt-10 py-10 px-2" color="#dff2fc">
          <h2 class="mb-3">
            <v-img
              src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_img01.png"
              alt="ボディとあわせて2kg以下の超望遠レンズ新登場！XF100-400mmF4.5-5.6 R LM OIS WR × X-T1"
              max-width="700"
              max-height="289"
              class="mt-3 mx-auto"
            ></v-img>
          </h2>
          <v-container class="pa-0">
            <v-row>
              <v-col cols="6">
                <v-img
                  src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_point01.png"
                  alt="POINT1 従来の超望遠システムの約半分！圧倒的な軽さ"
                  max-width="329"
                  max-height="128"
                  class="mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_point02.png"
                  alt="POINT2 プロも絶賛！一眼レフ並みの超高画質"
                  max-width="329"
                  max-height="128"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>

          <!-- ↓ arrow -->
          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_arw01.png"
            alt="下矢印"
            max-width="166"
            max-height="34"
            class="mx-auto mt-4 mb-1"
          ></v-img>

          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_img02.png"
            alt="最新の超望遠レンズならボディと合わせてなんとたったの2kg以下（X-T1ボディ…約440g/XF100-400mmF4.5-6.5 R LM OIS WR…1.374g）"
            max-width="700"
            max-height="540"
            class="mx-auto mt-4 mb-2"
          ></v-img>
          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_img03.png"
            alt="軽くて小さくても超高画質！プロのコメントをご覧ください"
            max-width="698"
            max-height="163"
            class="mx-auto mt-4 mb-2"
          ></v-img>

          <watchInVideo :src="'https://www.youtube.com/embed/g6tcXW5IoQk?rel=0'" :height="423" :sm="12" />

          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec02_img04.png"
            alt="これがプロの絶賛する「高画質」！"
            max-width="700"
            max-height="263"
            class="mx-auto mt-7 mb-2"
          ></v-img>
        </v-sheet>

        <!-- ↓ arrow -->
        <v-img src="/ec/images2/special/camera/lens/fujifilm/xf100-400/arrow02.png" alt="さらに" max-width="475" max-height="110" class="mx-auto mt-3"></v-img>

        <v-sheet class="mt-10 py-10 px-2" color="#fffcdb">
          <h2 class="mb-3">
            <v-img
              src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec03_img01.png"
              alt="XF100-400mmF4.5-6.5 R LM OIS WRには超望遠撮影がより楽しくなる機能が満載！"
              max-width="598"
              max-height="330"
              class="mx-auto"
            ></v-img>
          </h2>

          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec03_img02.png"
            alt="【機能1】1.4倍テレコンバーターでさらに望遠最大853mm相当 「フジノン テレコンバーター XF1.4X TC WR」に対応。35mm判換算で213mm〜853mm相当をカバーし、開放F値は6.3～8。"
            max-width="700"
            max-height="309"
            class="mx-auto mt-4"
          ></v-img>

          <router-link to="/ec/pd/4547410310429">
            <v-img
              src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec03_btn01.png"
              alt="フジノン テレコンバーター XF1.4X TC WR詳細・ご注文はこちら"
              max-width="339"
              max-height="98"
              class="mx-auto mt-4 mb-2 hover"
            ></v-img>
          </router-link>

          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec03_img03.png"
            alt="【機能2】クラス最高5.0段分の手ぶれ補正 軽さを活かした手持ちでの撮影時にも、安定したフレーミングが可能。手ブレを大幅に低減します。"
            max-width="700"
            max-height="310"
            class="mx-auto mt-4"
          ></v-img>
          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec03_img04.png"
            alt="【機能3】防塵・防滴・-10℃の耐低温構造とフッ素コーティング 鏡筒各部に合計12ヶ所13点のシーリングを施した防塵・防滴・-10℃の耐低温構造を実現。同じく防塵・防滴機能を持つ「X-T1」との組み合わせは屋外撮影に最適！"
            max-width="700"
            max-height="310"
            class="mx-auto mt-4"
          ></v-img>

          <router-link to="/ec/pd/4547410268225">
            <v-img
              src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec03_btn02.png"
              alt="FUJIFILM X-T1詳細・ご注文はこちら"
              max-width="339"
              max-height="98"
              class="mx-auto mt-4 mb-2 hover"
            ></v-img>
          </router-link>
        </v-sheet>

        <v-sheet class="mt-10 py-10 px-2" color="#e1efe2">
          <h2 class="mb-3">
            <v-img
              src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec04_img01.png"
              alt="超望遠好きに、今こそおすすめしたいFUJIFILM Xシリーズ"
              max-width="680"
              max-height="186"
              class="mx-auto"
            ></v-img>
          </h2>

          <v-img
            src="/ec/images2/special/camera/lens/fujifilm/xf100-400/sec04_img02.png"
            alt="「超広角」から「超望遠」まで揃いました！今回のXF100-400mmの登場によって、レンズの選択肢が超広角～超望遠まで出揃った「Xシリーズ」。是非この機会に「Xシリーズ」の素晴らしさを体感してみませんか？お近くのカメラのキタムラ店舗にお問合せください。"
            max-width="664"
            max-height="798"
            class="mx-auto mt-4"
          ></v-img>

          <a href="https://sss.kitamura.jp/">
            <v-img
              src="	/ec/images2/special/camera/lens/fujifilm/xf100-400/sec04_img03.png"
              alt="カメラのキタムラ店舗検索はコチラ"
              max-width="273"
              max-height="17"
              class="ml-auto my-3 hover"
            ></v-img>
          </a>
        </v-sheet>

        <!-- 関連商品リンク-->
        <h5 class="text-h6">富士フイルムのその他の製品</h5>

        <v-container fluid>
          <v-row>
            <v-col v-for="(link, i) in relatedProductLinkList" :key="i" cols="6" sm="4">
              <a :href="link.href">
                <v-img :src="link.img" :alt="link.alt" max-width="222" max-height="84" class="hover"></v-img>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
export default Vue.extend({
  name: 'fujifilm-xf100-400',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    priceAndPopular: PriceAndPopular,
    watchInVideo: WatchInVideo,
  },
  setup: () => {
    document.title = 'フジフイルム XF100-400mm F4.5-5.6 R LM OIS WR | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム XF100-400mm F4.5-5.6 R LM OIS WRの特集ページ。軽くて高画質な超望遠レンズのおすすめポイントをまとめました。価格・おすすめポイント・お得な買取情報もチェック！カメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      relatedProductLinkList: [
        {
          href: '/ec/list?narrow18=0&keyword=&category=ミラーレス一眼%3Aメーカーで選ぶ%3Aフジフイルム&sort=number20,Number17,Score&fmt=json&s19%5B%5D=1&style=0&path=ミラーレス一眼%3Aメーカーで選ぶ%3Aフジフイルム&s4%5B%5D=ボディ&limit=20',
          img: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/fujifilm/xf100-400/link/btn1.png',
          alt: 'ミラーレスボディ一覧'
        },
        {
          href: '/ec/ct/C004/015/002/',
          img: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/fujifilm/xf100-400/link/btn2.png',
          alt: '望遠ズームレンズ一覧'
        },
        {
          href: '/ec/ct/C004/015/001/',
          img: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/fujifilm/xf100-400/link/btn3.png',
          alt: '標準レンズ一覧'
        },
        {
          href: '/ec/ct/C004/015/003/',
          img: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/fujifilm/xf100-400/link/btn4.png',
          alt: '広角レンズ一覧'
        },
        {
          href: '/ec/ct/C004/015/004/',
          img: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/fujifilm/xf100-400/link/btn5.png',
          alt: '標準・中望遠ズームレンズ一覧'
        },
        {
          href: '/ec/ct/C004/015/007/',
          img: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/lens/fujifilm/xf100-400/link/btn6.png',
          alt: 'マクロレンズ一覧'
        },
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '富士フイルム FUJINONレンズ特集「XマウントXFレンズ」',
          linkUrl: '/ec/special/camera/lens/fujifilm',
          disabled: false
        },
        {
          path: 'フジフイルム XF100-400mm F4.5-5.6 R LM OIS WR',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4547410316193',
        '4547410268225',
        '4547410310429'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
    });

    return {
      ...toRefs(state),
    };
  }
});
</script>

<style scoped>
.w720 {
  max-width: 720px;
  margin: 0 auto;
}
</style>
