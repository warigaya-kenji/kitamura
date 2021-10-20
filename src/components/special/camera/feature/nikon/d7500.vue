<template>
  <v-app>
    <div class="d7500">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/d7500/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/d7500/sp_img_top.jpg'"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'ニコン\nD7500'"
          :topTitleText="'「D500」と同等の高画質と、\n「優れた動体捕捉力を\n小型・軽量ボディーに凝縮'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>
        <p>
          「ニコン D7500」は DXフォーマットのフラッグシップ機、D500と同等の高画質と最高約8コマ/秒の連続撮影性能を搭載したデジタル一眼レフカメラです。<br />
          大胆に進化を遂げた数々の高性能と、さらなる軽量・薄型化を実現したボディーが、その機動力で日常や特別な瞬間に常に寄り添います。
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン D7500</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'ニコン D7500 価格・人気アクセサリー/お得な情報'" />
          <!-- ↓ サンプル：JanCodeリストでの商品一覧表示 -->
          <product-list-by-jan-code :janCodes="['4960759149084', '4960759149091']" />
        </div>

        <v-row class="mt-8">
          <v-col cols="12" sm="6">
            <a
              href="/ec/sell/item-list?category=デジタル一眼レフ&keyword=D850&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort="
            >
              <v-img
                src="/ec/images2/special/camera/feature/nikon/d7500/bnr_shitadori_350-130.gif"
                alt="高価買取実施中"
                max-width="350px"
                max-height="130px"
                class="mx-auto hover"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" sm="6">
            <a href="/ec/guide/s_credit_01">
              <v-img
                src="https://shopimg.kitamura.jp/images/banner/1486.gif"
                alt="ショッピングクレジット"
                max-width="350px"
                max-height="130px"
                class="mx-auto hover"
              ></v-img>
            </a>
          </v-col>
        </v-row>

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ニコン D7500 ３大特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン D7500 / ニコン D7200 / キヤノン EOS 80D 比較'" />
          <div class="product-comparison mb-5">
            <p class="pttex mb-2">
              <span class="bgtypetitle text-h6 font-weight-bold">「ニコン D7500」と前機種の「ニコン D7200」「キヤノン EOS 80D」を比較しました。</span>
            </p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td class="point">ニコン D7500 ボディ</td>
                  <td>ニコン D7200 ボディ</td>
                  <td>キヤノン EOS 80D ボディ</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2017年6月9日発売</td>
                  <td>2015年3月19日発売</td>
                  <td>2016年3月25日発売</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >（円）
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約2088万画素</td>
                  <td>約2416万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>CMOS</td>
                  <td>CMOS</td>
                  <td>CMOS</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>APS-C</td>
                  <td>APS-C</td>
                  <td>APS-C</td>
                </tr>
                <tr>
                  <th>ローパスフィルターレス</th>
                  <td>○</td>
                  <td>○</td>
                  <td>×</td>
                </tr>
                <tr>
                  <th>ボディ内手ブレ補正</th>
                  <td>×</td>
                  <td>×</td>
                  <td>×</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td class="point">約8コマ/秒</td>
                  <td>約6コマ/秒</td>
                  <td>約7コマ/秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td class="point">ISO 100～51200<br />（拡張時50～1640000）</td>
                  <td>ISO100-25600</td>
                  <td>ISO100-16000<br />(拡張25600)</td>
                </tr>
                <tr>
                  <th>測距点 フォーカスポイント</th>
                  <td>51点（クロス測距点：15点）</td>
                  <td>51点（クロス測距点：15点）</td>
                  <td>45点（クロス測距点：最大45点）</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>視野率約100%・倍率約0.94倍</td>
                  <td>視野率約100%・倍率約0.94倍</td>
                  <td>視野率約100%・倍率約0.95倍</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>3.2型（タッチパネル）</td>
                  <td>ワイド3.2型</td>
                  <td>ワイド3.0型</td>
                </tr>
                <tr>
                  <th>液晶可動/固定</th>
                  <td>可動</td>
                  <td>固定</td>
                  <td>可動</td>
                </tr>
                <tr>
                  <th>防塵・防滴機能</th>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                </tr>
                <tr>
                  <th>Wi-Fi/NFC</th>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td class="point">720g</td>
                  <td>765g</td>
                  <td>730g</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>EN-EL15/EN-EL15a</td>
                  <td>EN-EL15</td>
                  <td>LP-E6N/LP-E6</td>
                </tr>
                <tr>
                  <th>撮影可能枚数・撮影可能時間</th>
                  <td>約950枚</td>
                  <td>約1110枚</td>
                  <td>約960枚</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>SDHC/SDXC(UHS-I対応）</td>
                  <td>SDHC/SDXC(UHS-I対応）</td>
                  <td>SD/SDHC/SDXC(UHS-I対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td class="point">4K/フルHD/HD</td>
                  <td>フルHD/HD</td>
                  <td>フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'3,850'" :isCreditBtn="true" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'ニコン D7500 外観画像'" />
          <p class="text-subtitle-1">ニコン D7500 の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'https://shop.kitamura.jp/ts_rsc/889/images'" :count="2" />
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListByJanCode from '@/components/special/common/product-list-by-jan-code.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'd7500',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    'product-list-by-jan-code': ProductListByJanCode,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = 'ニコン D7500 DXフォーマットデジタル一眼レフ 新製品 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン 新製品｢D7500｣特集。前機種「ニコン D7200」と「キヤノン EOS 80D」との比較や価格・スペック・お得な情報をチェック！新製品ならカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')

    const state = reactive({
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '「D500」と同等の高画質を楽しめる高性能画像処理エンジン「EXPEED 5」を搭載',
          contents: [
            '「D500」と同じ高性能画像処理エンジン「EXPEED 5」を搭載し、常用感度はISO 100～51200を実現。',
            'さらに、Lo 1（ISO 50相当）までの減感、Hi 5（ISO 1640000相当）までの増感に対応',
            '有効画素数2088万画素、光学ローパスフィルターレス仕様のニコンDXフォーマットCMOSセンサーとの相乗効果で、高感度域でもノイズを抑えた鮮鋭感の高い静止画・動画の撮影が可能'
          ]
        },
        {
          subtitle: '最高約8コマ/秒で50コマ（14ビット記録のロスレス圧縮RAW）までの高速連続撮影',
          contents: [
            '画像処理の高速化とバッファーメモリー容量の拡大によって、最高約8コマ/秒の高速連続撮影を実現。',
            '14ビット記録のロスレス圧縮RAWでも50コマまで、JPEGでは100コマまでの連続撮影が可能',
          ]
        },
        {
          subtitle: '「180KピクセルRGBセンサー」による高精度なAFとAE',
          contents: [
            '「D500」と同じ測光センサー「180KピクセルRGBセンサー」により、AFやAE、オートホワイトバランスなどの自動制御機能の精度が前機種から向上',
            '静止画のフリッカー低減機能やハイライト重点測光も搭載し、幅広い撮影シーンに対応可能',
            '51点AFシステムも搭載。グループエリアAFでは、5点のフォーカスポイントで被写体を面で捉え、動きを予測しにくい被写体もより確実に捕捉'
          ]
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/dslr',
          img: 'https://shopimg.kitamura.jp/images/banner/1350.gif',
          alt: 'ミラーレス一眼特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        },
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '最新デジカメ新製品',
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ニコン D7500',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759149084'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759149084', '4960759145604', '4549292060935'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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

<style scoped>
.bgtypetitle {
  background-color: #ffffcc;
}
td.point {
    background-color: #FFBFC0;
    font-weight: bold;
}
</style>