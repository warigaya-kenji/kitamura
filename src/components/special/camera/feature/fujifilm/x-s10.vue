<template>
  <v-app>
    <div class="x-s10">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x-s10/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/x-s10/sp_img_top.jpg'"
          :topTitle="'富士フイルム X-S10'"
          :topTitleText="'最大6.0段の手ブレ補正機能と高速・高精度AFを搭載した\n小型軽量ミラーレス'"
          :color="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">富士フイルム X-S10</p>
        <naviBtn :naviList="naviList" :hoverColor="'#00A080'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'小型軽量ボディに新開発の手ブレ補正機能と高速・高精度AFを搭載したミラーレスデジタルカメラ'" />

        <!--====== 価格・ご購入 ======-->
        <subText :textItem="'富士フイルム X-S10 ボディ・レンズキット 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" :btnColor="'red darken-2'" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[2]"
            :amount="'3,094'"
            :targetDate="'2020年10月20日'"
            :isCreditBtn="true"
          />
        </div>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'富士フイルム X-S10 メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://fujifilm-x.com/ja-jp/products/cameras/x-s10/'"
          :height="'60px'"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:富士フイルム X-S10｜ポートレートスナップを撮る'" />
        <shasha
          :txt="'今回はポートレートスナップを中心に、日常的に使いこなしたいレンズについても紹介していきたいと思います。\n早速、普段はカメラを持ち歩かないモデルさんにも1枚セルフィー撮影をしてもらいファーストインプレッションを聞いてみました。...'"
          :href="'https://shasha.kitamura.jp/article/479634542.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/x-s10/shashabnr3.jpg'"
        />

        <subText :textItem="'ShaSha:富士フイルム X-S10｜小さなボディーにフジ製品のいいところがギュッと詰まった頼れる相棒'" />
        <shasha
          :txt="'簡単に一言でこのX-S10を表現するのなら、「フジ製品のいいところをギュッとコンパクトにしたすごいカメラ」という感じでしょうか。\nわたしの撮影のメインはスナップ写真ですが、スナップ撮影において大事なのはフットワークの軽さだとも思っています。\n持ち物は軽い方がいい。それでいてしっかり撮りたいものを撮ることができる！というのが理想です。ボディが軽い分、もう一本レンズ持っていこう！と...'"
          :href="'https://shasha.kitamura.jp/article/478921868.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/x-s10/shashabnr2.jpg'"
        />

        <subText :textItem="'ShaSha:富士フイルム X-S10が登場｜しっかり握れる小型ボディーに、びっしり詰まった高機能！'" />
        <shasha
          :txt="'2020年10月15日に富士フイルムより、小型・軽量ボディーに手ブレ補正機構が搭載され、大型グリップのミラーレスカメラ X-S10が発表されました。APS-Cセンサーを搭載するXシリーズに新たにラインナップされたこの「S」ラインは、もっと沢山の方にカメラを楽しんでもらいたいという想いから新設され、それを表す一つの特長として操作ダイヤルはシンプルになっており、はじめて富士フイルムのカメラを使われる方でも思い通りの撮影ができるようになっています。\n今回先行展示がされているFUJIFILM Imaging Plaza東京でメーカー担当の方にX-S10について取材して参りましたのでご覧ください。...'"
          :href="'https://shasha.kitamura.jp/article/478001035.html'"
          :src="'/ec/images2/special/camera/feature/fujifilm/x-s10/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!--動画で見る-->
        <subText :textItem="'動画で見る 富士フイルム X-S10のタッチ＆トライ！'" />
        <watchInVideo :src="'https://www.youtube.com/embed/BR0pDhQ5peI?rel=0'" :height="315" />
        <watchInVideo :src="'https://www.youtube.com/embed/swASapAGToc?rel=0'" :height="315" />
        <watchInVideo :src="'https://www.youtube.com/embed/ISUPVmMxP8M?rel=0'" :height="315" />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'富士フイルム X-S10 の特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー FE 50mm F1.2 GM / ソニー Planar T* FE 50mm F1.4 ZA 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ソニー FE 50mm F1.2 GM / ソニー Planar T* FE 50mm F1.4 ZA を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年11月19日</td>
                  <td>2020年4月28日</td>
                  <td>2020年11月下旬 発売予定</td>
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
                  <td>約2610万画素</td>
                  <td>約2610万画素</td>
                  <td>約2410万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    23.5×15.6mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    23.5×15.6mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    22.3×14.9mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    23.5×15.6mmAPS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約8コマ/秒</td>
                  <td>約15コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約11コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>160～12800</td>
                  <td>160～12800</td>
                  <td>100～25600</td>
                  <td>100～32000</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.39型/約236万ドット</td>
                  <td>0.5型/約369万ドット</td>
                  <td>0.39型/約236万ドット</td>
                  <td>0.39型/約236万ドット</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    3.0型/約104万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    3.0型/約162万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    ワイド3.0型/約104万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    ワイド3.0型/約92万ドット<br />
                    チルト式
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    静止画:約325枚<br />
                    動画:約40分
                  </td>
                  <td>
                    静止画:約500枚<br />
                    動画:約85分
                  </td>
                  <td>
                    静止画:約250枚<br />
                    動画:約85分
                  </td>
                  <td>
                    静止画:約720枚<br />
                    動画:約140分
                  </td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>センサーシフト方式5軸補正</td>
                  <td>センサーシフト方式5軸補正</td>
                  <td>レンズ手ブレ補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約126.0×85.1×65.4mm</td>
                  <td>約134.6×92.8×63.8mm</td>
                  <td>116.3×88.1×58.7mm</td>
                  <td>約120.0×66.9×69.3mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約415g</td>
                  <td>約526g</td>
                  <td>約350g</td>
                  <td>約418g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                  <td>
                    デュアルスロット<br />
                    SDメモリーカード(UHS-II 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I 対応)
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4KUHD/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'富士フイルム X-S10 外観画像'" />
          <p class="text-subtitle-1">富士フイルム X-S10 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/x-s10'" :count="3" />
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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';

export default Vue.extend({
  name: 'x-s10',
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
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn
  },
  setup: (props, context) => {
    document.title = '富士フイルム X-S10 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '富士フイルム X-S10好評発売中！比較や、価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観', href: '#images' }
      ],
      expensiveTradeInList: {
        name: 'ソニー Planar T* FE 50mm F1.4 ZA [SEL50F14Z]',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&goodsname=4548736028357&pattern=1&_ga=2.134607473.16120489.1628554499-279164427.1627285160',
        nameImg: '//shopimg.kitamura.jp/images/pd/8d9/c63/bad/3e3/cdc/d99/030/9c8/ca4/9f3/07x/uhq/owi/6/M.jpg',
        txt: 'ソニー FE 50mm F1.2 GM',
        tradeInImg: '/ec/images2/special/camera/feature/sony/sel50f12gm/bnr_shitadori_350-130.jpg'
      },
      characteristicList: [
        {
          subtitle: '新開発の5軸・最大6.0段の手ブレ補正機能と高速・高精度AF機能を搭載',
          contents: [
            '小型軽量ボディを実現するため、手ブレ補正ユニットを「X-T4」搭載ユニットに比べ約30％の小型軽量化。より手軽に持ち歩けるようになりました',
            '最短約0.02秒の高速・高精度AFを実現。優れた顔・瞳AF機能をはじめ高性能な動体追従AFを搭載し、カメラから離れていく被写体も正確に捉え続けます',
            'メカニカルシャッター設定時、8コマ/秒の高速連写が可能。電子シャッター設定時では、最大20コマ/秒（クロップ時最大30コマ/秒）のブラックアウトフリー高速連写を実現。決定的瞬間を逃しません'
          ]
        },
        {
          subtitle: '多彩な色調を表現するフィルムシミュレーションで卓越した画質を実現',
          contents: [
            '全18種類の「フィルムシミュレーション」を搭載。最適な利用シーン等を詳細に記載した解説ページが新しく追加されており、気軽に独自の色再現が楽しめます',
            'CFexpress Type 「AUTO/SP」モードのアルゴリズムを刷新。鮮やかな風景写真や、美しいポートレート写真を撮影可能。逆光のシーンでも、白飛びや黒つぶれの少ない高画質な写真を撮影できます'
          ]
        },
        {
          subtitle: '動画撮影機能が充実',
          contents: [
            'オーバーサンプリング4K機能を搭載。6K相当のデータ量から4K映像を生成することで、ノイズが少ない高解像の映像を実現しました',
            'フルHD/240Pのハイスピード動画撮影が可能。素早い被写体の一瞬のアクションも、最大10倍のスローモーション映像で再生することが可能です',
            '動画撮影時にはボディ内手ブレ補正機能に加え、電子式手ブレ補正が使用可能。手ブレに合わせてフレーミングを微調整することで、手持撮影時に生じるブレを徹底的に抑制します'
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
          href: 'ec/special/sale/shoppingcredit-campaign/',
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
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラ・レンズ メンテナンスサービス'
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
          path: '富士フイルム X-S10',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410440348', '4547410440362', '4547410440379', '4547410443172'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410440348', '4547410427875', '4549292176292', '4548736108417'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4547410440348',
        '4547410440362',
        '4547410440379',
        '4547410443172',
        '4547410437881',
        '4547410334128',
        '4547410378139',
        '4523052016615',
        '4523052016639',
        '4957638817073',
        '4957638817097'
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