<template>
  <v-app>
    <div class="7c">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/7c/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/7c/sp_img_top.jpg'"
          :topTitle="'ソニー α7C'"
          :topTitleText="'妥協なき表現力をより幅広いフィールドで\n世界最小・最軽量フルサイズミラーレス一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'170px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー α7C</p>
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'ソニー α7C ボディ ブラック [ILCE-7C B] 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[0]" :btntxt="'商品詳細を見る'" :type="2" />
        <subText :textItem="'ソニー α7C ボディ シルバー [ILCE-7C S] 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[1]" :btntxt="'商品詳細を見る'" :type="2" />
        <subText :textItem="'ソニー α7C ズームレンズキット ブラック [ILCE-7CL B] 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[2]" :btntxt="'商品詳細を見る'" :type="2" />
        <subText :textItem="'ソニー α7C ズームレンズキット シルバー [ILCE-7CL S] 価格・ご購入'" />
        <priceAndPurchase :mainProduct="mainProductList[3]" :btntxt="'商品詳細を見る'" :type="2" />

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.sony.jp/ichigan/a-universe/newconcept/?s_pid=jp_/top_/ichigan/_main_200915_ichjrny'"
          :height="'70px'"
        />

        <subText :textItem="'妥協なき表現力とかつてない軽快さを両立した新シリーズフルサイズミラーレス「α7C」'" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ソニー α7C の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー α7C / ニコン Z 5 / ソニー α7III / ソニー α6600 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー α7C / ニコン Z 5 / ソニー α7III / ソニー α6600 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年10月23日発売予定</td>
                  <td>2020年8月28日</td>
                  <td>2018年3月23日</td>
                  <td>2019年11月1日</td>
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
                  <td>約2432万画素</td>
                  <td>約2420万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    35.6×23.8mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                  <td>
                    35.9×23.9mmフルサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35.6×23.8mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                  <td>
                    23.5x15.6mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約4.5コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約11コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>100～51200</td>
                  <td>100～51200</td>
                  <td>100～51200</td>
                  <td>100～32000</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.39型/約236万ドット</td>
                  <td>0.5型/約369万ドット</td>
                  <td>0.5型/約236万ドット</td>
                  <td>0.39型/約236万ドット</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.59倍</td>
                  <td>約100% / 約0.80倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.70倍(35mm換算)</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    3.0型/約92万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    3.2型/約104万ドット<br />
                    チルト式
                  </td>
                  <td>
                    3.0型/約92万ドット<br />
                    チルト式
                  </td>
                  <td>
                    3.0型ワイド/約92万ドット<br />
                    チルト式
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    静止画:約680枚<br />
                    動画:約140分
                  </td>
                  <td>
                    静止画:約390枚<br />
                    動画:約115分
                  </td>
                  <td>
                    静止画:約610枚<br />
                    動画:約115分
                  </td>
                  <td>
                    静止画:約720枚<br />
                    動画:約140分
                  </td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約124.0x71.1x59.7mm</td>
                  <td>約134×100.5×69.5mm</td>
                  <td>約126.9×95.6×73.7mm</td>
                  <td>約120.0×66.9×69.3mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約424g</td>
                  <td>約590g</td>
                  <td>約565g</td>
                  <td>約418g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I/II対応)
                  </td>
                  <td>
                    デュアルスロット<br />
                    SDメモリーカード(UHS-II 対応)
                  </td>
                  <td>
                    デュアルスロット<br />
                    SDメモリーカード(UHS-II 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4KUHD/フルHD</td>
                  <td>4KUHD/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4KUHD/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ソニー α7C レビュー ①｜先行展示での実機体験をご紹介'" />
        <shasha
          :txt="'2020年9月15日にソニーから世界最小・最軽量※フルサイズのミラーレスカメラα7Cが正式発表されました。\nα7Cは新コンセプトのカメラになっており「C」は「Compact」を意味するそうで、α7IIIとほぼ同等の撮影性能になっている一方、サイズ感はAPSCセンサーを搭載するα6600と同程度と非常に軽くて小さいカメラになっています。\n今まで大きく重たいのでフルサイズへの乗り換えを、ためらっていたAPSCユーザーにとって魅力的なカメラとなり、スマホで撮影されSNSを使ってシェアする中で、より高画質な画を求めるユーザーにとっては...'"
          :txt2="'※世界最小・最軽量：光学式ボディ内手ブレ補正機構搭載のフルサイズセンサー搭載デジタル一眼カメラとして。2020年9月時点。ソニー調べ'"
          :href="'https://shasha.kitamura.jp/article/477459830.html'"
          :src="'/ec/images2/special/camera/feature/sony/7c/shashabnr.jpg'"
        />

        <subText :textItem="'ShaSha:ソニー α7C レビュー ②｜α7C レンズキットを持って撮影小旅行！'" />
        <shasha
          :txt="'紅葉のシーズンになってきたので、さっそくα7Cレンズキットを持って撮影小旅行に。\n長野県・群馬県をドライブしながら、α7Cレンズキットの実力と魅力を感じてきました。\nやはり、なによりもその小ささは旅行にはとても魅力的な要素です。フルサイズのレンズ付きのカメラがジャンパーのポケットに入ってしまったのは衝撃です。\n今回は、その身軽さを活かすために、すべて手持ちで撮影してみました。\n最初に訪れた場所は、東山魁夷が描いた「緑響く」のモチーフであり、テレビCMなどで話題なった絶景ポイントの「御射鹿池」。朝早くから多くの写真愛好家が...'"
          :href="'https://shasha.kitamura.jp/article/478296359.html'"
          :src="'/ec/images2/special/camera/feature/sony/7c/shashabnr2.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!--動画で見る-->
        <subText :textItem="'動画で見る！ソニー α7C'" />
        <watchInVideo
          :srcList="['https://www.youtube.com/embed/lWOO8H1V3Q0?rel=0', 'https://www.youtube.com/embed/65lygmdAIxQ?rel=0']"
          :type="2"
          :sm="6"
          :height="280"
        />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー α7S III 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高価下取りー -->
        <subText :textItem="'ソニー α7C ご購入時、高値下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'4,311'" :targetDate="'2020年9月18日'" />
        <splitContent :ProductList="mainProductList[2]" :amount="'4,930'" :targetDate="'2020年9月18日'" :isCreditBtn="true" />

        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'ソニー α7C 作例画像'" />
          <exampleImages :path="'/ec/images2/special/camera/feature/sony/7c/'" :count="6" />
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import ExampleImages from '@/components/common/special/example-image.vue';

export default Vue.extend({
  name: '7c',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    kitamuraService: KitamuraService,
    exampleImages: ExampleImages,
  },
  setup: (props, context) => {
    document.title = 'ソニー α7C | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー α7C 好評発売中！！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '作例', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー α6500 ボディ [ILCE-6500]',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&goodsname=4548736021662&pattern=1&_ga=2.108369346.1712661879.1629071621-279164427.1627285160',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/b77/97e/fb1/943/797/42b/d6f/e99/57a/4e3/5cj/f5f/d4d/n/L.jpg',
        txt: 'ソニー α7C ',
        tradeInImg: '',
        tradeInProducts: []
      },
      characteristicList: [
        {
          subtitle: '「α7」の高画質撮影性能を手軽に持ち運べる世界最小・最軽量ボディに凝縮',
          contents: [
            '光学式5軸ボディ内手ブレ補正機構やシャッターユニットを新開発。APS-Cセンサー搭載モデル「α6600」とほぼ同等のサイズを実現',
            '有効約2420万画素35mmフルサイズ裏面照射型CMOSイメージセンサー「Exmor R」と、高速処理能力を備えた画像処理エンジン「BIONZ X」を搭載。ノイズの少ない高感度撮影も可能',
            '安心して長時間撮影時が可能な業界最大のスタミナ性能を実現。ビューファインダー使用時約680枚、LCDモニター使用時約740枚の撮影が可能',
          ]
        },
        {
          subtitle: '瞬間を逃さず撮影できる「AI」を活用した高性能AFと最高約10コマ/秒のAF/AE追従高速連写',
          contents: [
            '「AI」を活用した物体認識アルゴリズムにより、色や模様、被写体との距離などの空間情報を高速処理して動きのある被写体をカメラ任せで高精度に認識',
            '人物や動物の瞳にフォーカスを合わせ続けられる、進化したリアルタイム瞳AFにより、動きのある被写体でも、高速・高精度に瞳を捕捉',
            '撮像エリアの約93%をカバーする範囲に693点の像面位相差検出AFセンサーを配置したほか、コントラスト検出AF枠を425点に多分割化し、高い検出精度を実現',
          ]
        },
        {
          subtitle: '高解像4K動画記録が可能な充実の動画撮影機能',
          contents: [
            'フルサイズ領域で画素加算のない全画素読み出しにより、4K映像に必要な画素数の約2.4倍（6K相当）の情報量を活用して4K映像を出力。より解像感の高い映像表現が可能',
            'AFトランジション速度を7段階に、AF乗り移り感度をそれぞれ5段階に設定可能。撮影シーンや撮影者の表現・意図に合わせた細かなフォーカス表現を実現',
            '横方向に開くバリアングル液晶モニターの搭載やMOVIEボタンのボディ天面への配置など、動画に撮影時にも快適に撮影できる様進化',
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
          path: 'ソニー α7C',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736121614', '4548736121621', '4548736121676', '4548736121683'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736121614', '4960759904485', '4548736079625', '4548736108417'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736121614',
        '4548736121621',
        '4548736121676',
        '4548736121683',
        '4548736064522',
        '4548736064539',
        '4548736109520',
        '4548736121249',
        '4548736100664',
        '4548736064621',
        '4548736120624',
        '4548736067714',
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