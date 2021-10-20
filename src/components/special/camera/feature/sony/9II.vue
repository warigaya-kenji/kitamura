<template>
  <v-app>
    <div class="sony-9ll">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'ソニーα９II'"
          :topTitleText="'「α９」の革新的な高速撮影性能に加え、AFのスピード性能や\n追従性・精度が向上したプロフェッショナルミラーレス一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :titleFontsize="'200%'"
          :textFontsize="'16px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ソニー α9II 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー α9II</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー α9II'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" :btntxt="'商品ページを見る'" />

        <!-- ↓ 60回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大60回まで分割金利手数料0円！宅配受取限定'" />
        <splitContent
          :ProductList="mainProductList[0]"
          :maximumInstallmentPayment="'60'"
          :numberOfTimes="'60'"
          :amount="'8,993'"
          :isMax60Txt="true"
          :isCreditBtn="true"
        />

        <subText :textItem="'革新的な高速撮影性能を備えるフルサイズミラーレス一眼カメラ「α9 II」'" />
        <characteristic :characteristics="characteristicList1" />
        <intenseRedBtn :btntxt="'SONY α9II商品購入はこちら'" :href="'/ec/pd/4548736108288/'" :width="'50%'" :height="'52'" :type="2" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー α9II/α7R IV/キヤノンEOS-1D XMarkII/ニコンD5比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー α9II/α7R IV/キヤノンEOS-1D XMarkII/ニコンD5の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年11月1日発売予定</td>
                  <td>2019年9月6日発売</td>
                  <td>2016年4月28日発売</td>
                  <td>2016年3月26日発売</td>
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
                  <td>約2420万画素</td>
                  <td>約6100万画素</td>
                  <td>約2020万画素</td>
                  <td>約2082万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズ積層型CMOSセンサー</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                  <td>35mmフルサイズ<br />CMOSセンサー</td>
                  <td>ニコンFXフォーマット<br />CMOSセンサー</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高20コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約16コマ/秒</td>
                  <td>最高 約14コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>RAW(非圧縮)：約239枚<br />JPEG：約361枚</td>
                  <td>RAW(非圧縮)：約30枚<br />JPEG：約68枚</td>
                  <td>RAW(非圧縮)：約170枚<br />JPEG：カードの空き容量まで</td>
                  <td>RAW(非圧縮)：約200枚<br />JPEG：約200枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100-51200<br />
                    （拡張ISO50、204800）
                  </td>
                  <td>ISO100-32000（拡張ISO50、102400)</td>
                  <td>
                    ISO100-51200<br />
                    （拡張ISO50相当、409600相当）
                  </td>
                  <td>
                    ISO100-102400<br />
                    （拡張ISO50相当、3280000相当）
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>位相差検出方式:693点</td>
                  <td>位相差検出方式:567点<br />コントラスト検出方式:425点</td>
                  <td>61点</td>
                  <td>153点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>ファインダー使用時:約500枚<br />モニター使用時:約690枚</td>
                  <td>ファインダー使用時:約530枚<br />モニター使用時:約670枚</td>
                  <td>ファインダー使用時:約1210枚<br />ライブビュー撮影時:約260枚</td>
                  <td>約3780コマ</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約128.9×96.4×77.5mm</td>
                  <td>約128.9×96.4×67.3mm</td>
                  <td>約158.0×167.6×82.6mm</td>
                  <td>約160×158.5×92mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>5軸補正 最大5.5段</td>
                  <td>5軸補正 最大5.5段</td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>X (レンズ内手振れ方式)</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.72倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約593g</td>
                  <td>約580g</td>
                  <td>約1340g</td>
                  <td>
                    XQDモデル：約1235g<br />
                    CFモデル：約1240g
                  </td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                  <td>デュアルスロット<br />CFカード(タイプI準拠、UDMAモード7対応)、CFastカード(CFast2.0）</td>
                  <td>ダブルスロット<br />XQDカード/CFカード ※メディア別モデルになります</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ソニー α9II 特徴'" />
          <characteristic :characteristics="characteristicList2" />
        </div>
        <!--特徴-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー α９II 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高価下取りー -->
        <subText :textItem="'高値下取りアイテム公開中！'" />
        <v-container>
          <v-row v-for="(expensiveTrade, i) in expensiveTradeInList" :key="i">
            <v-col cols="12" sm="6">
              <a :href="expensiveTrade.href">
                <v-img :src="expensiveTrade.productImage" max-width="287" max-height="287" class="hover mx-auto"></v-img>
              </a>
              <p class="text-center">{{ expensiveTrade.name }}</p>
            </v-col>
            <v-col cols="12" sm="6">
              <a :href="expensiveTrade.href">
                <v-img :src="expensiveTrade.expensiveTradeImage" max-width="350" max-height="130" class="hover mx-auto"></v-img>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 外観画像ー -->
        <div id="images">
          <subText :textItem="'ソニー α9II 外観画像'" />
          <p class="text-subtitle-1">ソニー α9IIの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/9II'" :count="3" :sm="6" />
        </div>
        <intenseRedBtn :btntxt="'SONY α9II商品購入はこちら'" :href="'/ec/pd/4548736108288/'" :width="'50%'" :height="'52'" :type="2" />

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー α9II 作例'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/9II/'" :count="4" />

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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import IntenseRedBtn from '@/components/common/special/intenseRedBtn.vue';
import ExampleImages from '@/components/common/special/example-image.vue';

export default Vue.extend({
  name: 'sony-9ll',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    intenseRedBtn: IntenseRedBtn,
    exampleImages: ExampleImages,
  },
  setup: () => {
    document.title = '新製品 SONY ソニーα9Ⅱ 発売中！ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α9II 好評発売中！比較や、価格・スペック・お得な情報をチェック！最大60回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/9II/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/9II/sp_img_top.jpg',

      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '外観', href: '#images' }
      ],
      expensiveTradeInList: [
        {
          name: 'ソニー α9 ボディ [ILCE-9]',
          href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4548736063945&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
          productImage: 'https://shopimg.kitamura.jp/images/pd/dc6/362/87a/cc7/ceb/ba3/728/cd9/f2e/4cc/0a9/pxz/aon/r/L.jpg',
          expensiveTradeImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/9II/bnr_shitadori_350-130.jpg'
        },
        {
          name: 'ソニー α7R III ボディ [ILCE-7RM3] ',
          href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4548736075139&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
          productImage: '	https://shopimg.kitamura.jp/images/pd/d1c/dc4/57f/edf/af1/9fc/d49/8bb/a0a/949/057/c63/gt4/s/L.jpg',
          expensiveTradeImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/9II/bnr_shitadori_350-130-1.jpg'
        },
        {
          name: 'ソニー α7III ボディ [ILCE-7M3]',
          href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=4548736079625&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
          productImage: 'https://shopimg.kitamura.jp/images/pd/913/1b2/df1/d52/2b3/d6d/b42/c68/1b7/ba6/b03/n84/0hk/x/L.jpg',
          expensiveTradeImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/9II/bnr_shitadori_350-130-2.jpg'
        },
      ],
      characteristicList1: [
        {
          subtitle: '進化した高速通信性能で、スポーツや報道のプロフェッショナルの撮影とワークフローを強力にサポート',
          contents: [
            '「α９」の革新的な高速撮影性能に加え、プロの現場での撮影から納品までを強力にサポートする、リモート撮影やデータ納品時の高速データ転送を実現',
            ' 強化されたスピード性能や追従性・精度が向上したAF性能による更なる撮影領域の拡大',
          ]
        },
      ],
      characteristicList2: [
        {
          subtitle: '撮影から納品まで、プロフェッショナルの現場におけるワークフローの高速化を実現する通信性能',
          contents: [
            'リモート撮影や、撮影中および撮影後のデータ転送、転送時の使い勝手を強化。現場のプロからの要望に応えられる利便性',
            '新たに音声メモ機能を搭載。撮影現場にて撮影シーンや位置などの情報を音声データとして画像に付与が可能',
            '最高1Gbpsの高い転送速度を実現する規格1000BASE-Tに対応したLAN端子を内蔵',
            '無線LAN（Wi-Fi）機能は「IEEE 802.11ac」規格にも対応し、『α9』同様の2.4GHzに加え、5GHz帯域での高速なデータ転送も可能'
          ]
        },
        {
          subtitle: '強化されたスピード性能や追従性・精度が向上したAF性能による更なる撮影領域の拡大',
          contents: [
            '最高20コマ/秒のブラックアウトフリー連続撮影や最大60回/秒の演算によるAF/AE追従などの高速性能を装備',
            'メカシャッター使用時でも最高約10コマ/秒の高速連写が可能',
            '歪みを極限まで抑えるアンチディスト－ションシャッターで高速撮影時の画像補正も強化',
            '蛍光灯などの人工光源の点滅によるフリッカーの影響が少ないタイミングを検出し、シャッターを切ることができるフリッカーレス撮影にも対応'
          ]
        },
        {
          subtitle: 'さらに進化したAF性能',
          contents: [
            '693点の像面位相差AFセンサーを撮像エリアの約93%に高密度に配置。動きと速度に緩急のある動体に対しても、追従安定性と精度の向上を実現',
            '即時に瞳情報を検出しフォーカスを合わせ続けるリアルタイム瞳AF。被写体の顔が見えていない場面や被写体が人物以外の場合でも、撮影被写体を自動で追尾',
          ]
        },
        {
          subtitle: 'プロフェッショナルの撮影現場でも活躍する堅牢性、操作性、信頼性',
          contents: [
            '静止画・動画ともに有効な最高5.5段の光学式5軸ボディ内手ブレ補正機構',
            '重量レンズ装着時や長時間の使用時に、撮影者の負担を軽減するホールド性を向上させたグリップ形状へ変更',
            '露出補正ダイヤルロックボタンの追加や後ダイヤルの操作性の改善など、確実な操作をサポートするデザイン'
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
          alt: 'トクトク買取'
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
          linkUrl: '/ec/special/camera/feature',
          disabled: false
        },
        {
          path: 'ソニー α9II',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736108288'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736108288', '4548736108264', '4549292060485', '4960759146205'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736064522',
        '4548736105546',
        '4548736019515',
        '4548736099791',
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