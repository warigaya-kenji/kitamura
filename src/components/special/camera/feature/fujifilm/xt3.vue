<template>
  <v-app>
    <div class="xt3">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xt3/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/xt3/sp_img_top.jpg'"
          :topTitle="'フジフイルム X-T3'"
          :topTitleText="'「Xシリーズ」が第4世代へと絶え間なく進化！\nシリーズ史上最高画質と多彩な色彩表現を実現'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :textPadding="'15px 0px 0px 0px'"
          :titleFontsize="'40px'"
          :textFontsize="'18px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">フジフイルム X-T3</p>
        <naviBtn :naviList="naviList" :color="'red darken-3'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn">
            <span class="white--text">≫ 話題の新製品バックナンバー</span>
          </v-btn>
        </div>

        <!--価格・人気アクセサリー-->
        <subText :textItem="'フジフイルム X-T3 価格/人気アクセサリー'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!-- 分割48回-->
        <subText :textItem="'キタムラなら48回まで分割金利手数料0円！'" />
        <splitContent
          v-if="productDetailList.length !== 0"
          :ProductList="mainProductList[0]"
          :numberOfTimes="'48'"
          :maximumInstallmentPayment="'48'"
          :amount="'3,737'"
          :targetDate="''"
          :isCreditBtn="true"
        />
        <!--分割48回-->

        <!--特徴-->
        <subText :textItem="'フジフイルム X-T3 の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'フジフイルム X-T3 / フジフイルム X-T2 / SONY α7 III'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">フジフイルム X-T3と、X-T2、SONY α7 IIIの性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2018年9月20日発売</td>
                  <td>2016年9月8日発売</td>
                  <td>2018年3月23日発売</td>
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
                  <td>約2610万画素</td>
                  <td>約2430万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>APS-Cサイズ<br />X-Trans CMOS 4センサー</td>
                  <td>APS-Cサイズ<br />X-Trans CMOS IIIセンサー</td>
                  <td>35mmフルサイズ<br />裏面照射型CMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約30コマ/秒(電子シャッター)<br />最高約11コマ/秒(メカシャッター)</td>
                  <td>最高 約14コマ/秒(電子シャッター)<br />最高約8コマ/秒(メカシャッター)</td>
                  <td>最高約10コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>RAW(非圧縮)：約43枚<br />JPEG：エンドレス</td>
                  <td>RAW(非圧縮)：約30枚<br />JPEG：エンドレス</td>
                  <td>RAW(非圧縮)：約40枚<br />JPEG ：約177枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-15分、バルブ(メカニカルシャッター)<br />1/32000-15分、バルブ(電子シャッター)</td>
                  <td>1/8000-30秒、バルブ(メカニカルシャッター)<br />1/32000-30秒、バルブ(電子シャッター)</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>80～51200</td>
                  <td>100～51200</td>
                  <td>50～204800</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>位相差検出方式:425点<br />コントラスト検出方式:425点</td>
                  <td>位相差検出方式:91点<br />コントラスト検出方式:325点</td>
                  <td>位相差検出方式:693点<br />コントラスト検出方式:425点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約390枚<br />(ノーマルモード時)</td>
                  <td>約340枚<br />(ノーマルモード時)</td>
                  <td>ファインダー使用時:約610枚<br />モニター使用時:約710枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約132.5×92.8×58.8mm</td>
                  <td>約132.5×91.8×49.2mm</td>
                  <td>約126.9×95.6×62.7mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>なし</td>
                  <td>なし</td>
                  <td>5軸補正 最大5.0段</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.75倍</td>
                  <td>約100% / 約0.77倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約489g</td>
                  <td>約457ｇ</td>
                  <td>約565g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>デュアルスロット<br />(UHS-I／UHS-II 対応)</td>
                  <td>デュアルスロット<br />(UHS-I／UHS-II 対応)</td>
                  <td>デュアルスロット<br />(slot1:UHS-II 対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>DIC4K/4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'フジフイルム X-T3 外観画像'" />
          <p class="text-subtitle-1">フジフイルム X-T3 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/xt3'" :sm="6" />
        </div>

        <div class="text-center mb-12">
          <v-btn
            class="block"
            color="red darken-1"
            href="/ec/list?narrow18=0&keyword=X-T3&category=&r=https://shop.kitamura.jp/special/sale-fair/camera/feature/fujifilm/xt3/&q=X-T3&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1"
            x-large
          >
            <span class="text-h6 white--text">フジフイルム X-T3 商品一覧を見る</span>
          </v-btn>
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <kitamuraService />

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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';

export default Vue.extend({
  name: 'xt3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    kitamuraService: KitamuraService,
  },
  setup: (props, context) => {
    document.title = 'フジフイルム 新製品 X-T3 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '「Xシリーズ」が第4世代へと絶え間なく進化！フジフイルム X-T3！比較や、価格・スペック・お得な情報をチェック！最大60回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '外観画像', href: '#images2' },
      ],
      characteristicList: [
        {
          subtitle: '新開発の裏面照射型「X-TransTM CMOS 4」センサーと高速画像処理エンジン「X-Processor 4」を搭載',
          contents: [
            '新開発「X-Trans CMOS 4」センサーを小型軽量ボディに搭載。「Xシリーズ」史上最高画質と多彩な色彩表現を実現',
            '新開発「X-Processor 4」には4つのCPUを搭載。現行比約3倍の処理速度を実現',
            '｢FUJIFILM GFX 50S｣のみに搭載していた「カラークローム・エフェクト」機能を初搭載',
            'フィルムシミュレーションに「温黒調・冷黒調」が調整できる「モノクロ調整」機能を追加'
          ]
        },
        {
          subtitle: '像面位相差AFエリアを画面全域(約100%)に拡大',
          contents: [
            '暗いシーンでの撮影や動体撮影におけるAF性能の大幅な向上を実現',
            '位相差AFの低照度限界を従来の-1EVから-3EVへ拡張し、光量の少ない光源下や、夜間でも像面位相差AFでの撮影が可能',
            '動く人物への顔検出性能｢瞳AF｣機能を向上。動きのあるポートレート撮影においても正確に被写体を追従'
          ]
        },
        {
          subtitle: 'メカニカルシャッター約11コマ/秒、電子シャッター最速30コマ/秒の連写',
          contents: [
            '電子ビューファインダー(EVF)の性能を進化させ、動体追従性能を向上',
            'メカニカルシャッター約11コマ/秒の連写では、縦位置バッテリーグリップを不要とし、ボディ単体で可能',
            '電子シャッターでは、1660万画素(1.25倍クロップ)相当のフレーム内を最速30コマ/秒のブラックアウトフリー高速連写が可能'
          ]
        },
        {
          subtitle: 'プロの映像制作ニーズに応える充実の動画性能を実現',
          contents: [
            'ミラーレスデジタルカメラで世界初となる4K/60P 4:2:0 10bitのカメラ内SDカード記録に対応',
            'Anker製モバイルバッテリーを接続することで撮影枚数と動画記録時間を大幅に増やすことが可能',
            '動画撮影時の顔検出/瞳AFにも対応。動画での人物撮影もよりスムーズに行えます'
          ]
        }
      ],
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
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
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
          path: 'フジフイルム X-T3',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410378030'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410378030', '4547410325287', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410423457',
        '4547410423471',
        '4547410378030',
        '4547410378153',
        '4547410378054',
        '4547410378177',
        '4547410378139',
        '4547410378122'
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
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
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