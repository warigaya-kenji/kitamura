<template>
  <v-app>
    <div class="50mmlens">
      <div class="main-contents-wrap">
        <!--==================== コンテンツ ====================-->
        <v-img src="/ec/images2/special/general/photo_mono/50mmlens/fan-fair_01sp.jpg" max-width="640" max-height="150" class="mt-6"></v-img>
        <p class="caption text-sm-body-1">写真を中心に、話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート</p>
        <h1 class="mt-5 text-subtitle-2 text-sm-subtitle-1 mb-2">
          <b>vol.7 50mm単焦点レンズ特集 | 室内でペット写真を上手に撮るコツ＆おすすめレンズ</b>
        </h1>
        <v-img
          src="/ec/images2/special/general/photo_mono/50mmlens/top.jpg"
          alt="vol.7 50mm単焦点レンズ特集 | 室内でペット写真を上手に撮るコツ＆おすすめレンズ"
          max-width="950"
          max-height="296"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          プロフィールにも記載していますが、私の自宅には愛猫が2匹。可愛いペットが見せてくれる表情や仕草は、やっぱり写真を撮って残したくなるものです。でもなかなか思い通りに上手く撮れなくて困っている方、結構多いと思います。部屋の中はどうしても暗くなりがちですし、犬や猫は動き回るし・・・。撮ってはみたものの、ブレやピンボケ写真が多いことってありませんか？そんなお困りの方におすすめなのが「50mm単焦点レンズ」です。<br /><br />ところでみなさん、50mm単焦点レンズって使った事ありますか？
        </div>
        <!--==================== レンズキットに付属している「ズームレンズ」の長所と短所 ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">レンズキットに付属している「ズームレンズ」の長所と短所</v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          最近では、ボディーとレンズがセットで販売されているレンズキットのほとんどが「ズームレンズ」とのセットです。例えばキヤノンのデジタル一眼レフカメラのエントリーモデル、「Canon
          EOS Kiss X9i ダブルズームキット」には標準ズームレンズとして「キヤノン EF-S18-55mm F4-5.6 IS STM」が付属されています。
        </div>

        <!--==================== TOP商品==================== -->

        <productAppeal :mainProductList="topProductList" :sm="6"></productAppeal>

        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          ズームレンズは自分が動かなくても素早く画角を変えられるので、やはり「楽に撮影できる」という点が長所です。
          しかしズームレンズは仕様上レンズの枚数が多くなり、一般的にはレンズの明るさ（F値）が暗くなってしまうという欠点があります。キヤノン EF-S18-55mm F4-5.6
          IS STMの場合は「F4-5.6」がF値で、値が小さいほうが明るいレンズです。<br /><br />「F2.8」などの明るい大口径ズームレンズもありますが大きくて重くなり、簡単には手が出せない価格になります。
        </div>

        <v-card flat class="line-g mt-2">
          <v-container>
            <v-row class="mt-sm-5">
              <v-col cols="12" sm="6" class="pa-4">
                <a href="/ec/pd/4960999354798"><b>キヤノン EF-S17-55mm F2.8 IS USM</b></a>
                <p class="py-4 caption text-sm-body-1 mb-0">
                  35mm換算の焦点距離イメージで 27-88mmの標準域をカバー 開放F2.8の明るさに手振れ補正機構IMAGE STABILIZERをプラスした大口径・標準ズーム
                </p>
              </v-col>
              <!--====================second商品==================== -->

              <v-col cols="12" sm="6">
                <productAppeal :mainProductList="secondProductList" :type="2"></productAppeal>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          そこでおすすめしたいのが、焦点距離50mmで「F1.8」の単焦点レンズです。
          もちろんご予算のある方は「F1.4」の明るいレンズでもいいのですが、各メーカーでラインナップされている50mmF1.8のレンズは非常にお手頃の価格設定になっており、初めて単焦点レンズを購入する方にはこちらがおすすめです。
        </div>
        <!--==================== third商品==================== -->
        <productAppeal :mainProductList="thirdProductList" :sm="6"></productAppeal>
        <!--==================== なぜ室内でのペット写真撮影に「50mm単焦点レンズ」がおすすめなのか？ ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">なぜ室内でのペット写真撮影に「50mm単焦点レンズ」がおすすめなのか？</v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          単焦点レンズ「キヤノン EF50mm F1.8 STM」と先述のズームレンズ「キヤノン EF-S18-55mm F4-5.6 IS
          STM」を比較すると、レンズの明るさはF値で「1.8」と「5.6」の差があります。また開放F値で撮影した場合、明るい単焦点レンズの方がズームレンズと比較して約4段分シャッタースピードを速く撮影できるメリットもあります。さらに、レンズの焦点距離も関係してきますが、<b
            >このF値の数字が小さいほど背景を大きくボカす事ができ、 主題をより引き立たせる撮影が可能</b
          >なのです。 <br /><br />下の写真はどちらも50mmレンズを使い、絞りF1.8とF5.6でどれくらい背景のボケ具合が違うのかを比較撮影したものです。
        </div>

        <v-img
          src="/ec/images2/special/general/photo_mono/50mmlens/image01.jpg"
          alt="G9 PROはAF追従連写で約20コマ/秒の撮影が可能"
          max-width="890"
          max-height="auto"
          class="mx-auto"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          F5.6のようにF値の暗いズームレンズでは、F1.8のように背景を大きくボカした写真を撮ることはできません。このような写真は明るい単焦点レンズだからこそ撮れる写真なのです。
          単焦点レンズが持つ<b>「背景を大きくボカせる」</b>、そして<b>「速いシャッタースピードで撮影できる」</b>という特性は、<b>室内で犬や猫などのペットを撮るのにピッタリ</b>です！
        </div>
        <!--==================== ペット写真撮影時のコツと注意点 ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">ペット写真撮影時のコツと注意点</v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          このような単焦点レンズの特性を活かすと、室内でも上手にペット写真を撮影できます。明るさが足りない室内の撮影でも、レンズが明るいおかげで速いシャッタースピードで撮影ができるのでブレにくくなります。さらに絞りを解放で撮影すれば、<b>室内のごちゃごちゃした背景もボカして撮影できる</b>メリットもあります。
          <br /><br />それではまず、35mmフルサイズ機「Canon EOS 5D MarkIV」
        </div>

        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image02.jpg'"
          :photographicEquipment="'Canon EOS 5D Mark IV ＋ EF50mm F1.8 STM'"
          :shootingInformation="'シャッター速度1/640 絞りF1.8 ISO800  焦点距離50mm'"
        />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image03.jpg'"
          :photographicEquipment="'Canon EOS 5D Mark IV ＋ EF50mm F1.8 STM'"
          :shootingInformation="'シャッター速度1/350 絞りF1.8 ISO1600 焦点距離50mm'"
        />

        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          ペット撮影の場合には、<b>ピントは必ず目に合わせて撮るのが鉄則です。</b>もし鼻の先にピントが合ってしまうと目の位置ですでにボケが発生してしまい、写真がピンボケ写真のように見えてしまいますので気を付けましょう！<br /><br /><br />下の写真は50mmレンズの開放F値（F1.8）で寄って撮影したもの。手前の目にピントを合わせていますが、奥の目はすでにボケています。F値を開放で撮影する場合は背景を大きくボカせる反面、ピント合わせには細心の注意が必要になります。
        </div>
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image04.jpg'"
          :photographicEquipment="'Canon EOS 5D Mark IV ＋ EF50mm F1.8 STM'"
          :shootingInformation="'シャッター速度1/350 絞りF1.8 ISO1600 焦点距離50mm'"
        />
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          イメージセンサーが35mmフルサイズの一眼であればそのまま焦点距離50mmの標準的な画角になりますが、APS-Cサイズの一眼で使用した場合は80mm相当になり、やや望遠的なレンズになります。その分ちょっと離れたところからそーっと撮ることができ、いい感じの距離感で撮影ができます。
        </div>
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image05.jpg'"
          :photographicEquipment="'Canon EOS 7D MarkⅡ ＋ EF50mm F1.8 STM'"
          :shootingInformation="'シャッター速度1/250 絞りF1.8 ISO800  焦点距離80mm（35mm換算）'"
        />
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image06.jpg'"
          :photographicEquipment="'Canon EOS 7D MarkⅡ ＋ EF50mm F1.8 STM'"
          :shootingInformation="'シャッター速度1/160 絞りF1.4 ISO800 焦点距離80mm（35mm換算）'"
        />

        <!--==================== マイクロフォーサーズ機をお使いの方には… ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">マイクロフォーサーズ機をお使いの方には…</v-sheet>

        <div class="px-1 px-sm-6 mt-8 caption text-sm-body-1 mb-6">
          ここまでご覧頂いたのはキヤノンの35mmフルサイズ機とAPS-Cサイズ機での作例ですが、オリンパスのマイクロフォーサーズ機、OM-D
          E-M1markⅡでも撮ってみました。マイクロフォーサーズ機（オリンパス・パナソニック）の場合は、焦点距離が25mmのレンズを使用すると35mmフルサイズ機の50mm相当になります。
        </div>

        <!--==================== micro商品==================== -->
        <productAppeal :mainProductList="microProductList" :sm="6"></productAppeal>

        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image07.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/4000絞りF2.8 ISO200 焦点距離200mm (35mm換算400mm)'"
        />
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/50mmlens/image08.jpg'"
          :photographicEquipment="'Panasonic G9 PRO ＋ Panasonic LEICA DG ELMARIT 200mm F2.8 POWER O.I.S'"
          :shootingInformation="'シャッター速度1/4000絞りF2.8 ISO200 焦点距離200mm (35mm換算400mm)'"
        />

        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          マイクロフォーサーズのセンサーサイズは35mmフルサイズと比べて半分の大きさ。フルサイズ機で50mmレンズを使用した場合に比べるとボケ量は少なくなりますが、それでもやはり単焦点レンズで絞りを開けた写真は、いいボケ具合を演出してくれます。
        </div>
        <!--==================== 様々な撮影シーンで使える50mm単焦点レンズは持っておいて損無し！ ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">様々な撮影シーンで使える50mm単焦点レンズは持っておいて損無し！</v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          「もっと印象的なペット写真を撮ってみたい！」と思った方はぜひ単焦点レンズを検討してみてください。
          50mmF1.8クラスのレンズは新品でも比較的お安く買えるレンズですが、まずはお試しで使ってみたいと思ったら中古で探してみてもいいと思います。
          <a href="http://www.net-chuko.com/buy/index.do" target="blank">カメラのキタムラ中古検索ページへ（http://www.net-chuko.com/buy/index.do）</a>
          <br /><br />50mm単焦点レンズは室内でのペット撮影以外にも、赤ちゃんやお子さん、お料理などのテーブルフォトなどにも使えますし、野外でのポートレートや家族写真、植物などの撮影にもおすすめのレンズです。
        </div>

        <!--==================== ペット写真撮影におすすめ！各社の50mm単焦点レンズ（※マイクロフォーサーズは25mm） ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929"
          >ペット写真撮影におすすめ！各社の50mm単焦点レンズ（※マイクロフォーサーズは25mm）</v-sheet
        >
        <productAppeal :mainProductList="micro50mmProductList" :sm="4" :maxWidth="'154'" :maxHeight="'154'"></productAppeal>

        <div class="px-1 px-sm-6 mt-5 mb-7 text-body-1">
          <v-card flat class="line-g">
            <v-container>
              <v-row class="mt-sm-7">
                <v-col cols="12" sm="6" class="pa-4">
                  <p>坂井田富三 -sAka-</p>
                  <p class="pl-4">
                    写真家（日本写真家協会JPS会員）<br />
                    1967年愛知県生まれ。<br />
                    現在は横浜市在住。<br />
                    スポーツ写真と愛猫（ブリティッシュショートヘア）のライカとエルマーの撮影をメインに活動中。
                  </p>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/general/photo_mono/50mmlens/sakaida1.jpg"
                    alt="坂井田富三"
                    max-width="198"
                    max-height="264"
                    class="mx-auto"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
        <!--==================== 今回使用したアイテム・おすすめアクセサリー ====================-->
        <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">今回使用したアイテム・おすすめアクセサリー</v-sheet>
        <product-list-by-special-id class="mb-5" :specialId="3377" />

        <!--banner-->
        <div class="mt-7 s-bnr">
          <p class="text-h6 text-sm-h4">バックナンバー</p>
          <recommendedFeatures :recommendedFeaturesList="backNumberList" />
        </div>
        <div class="mt-7 s-bnr">
          <p class="text-h6 text-sm-h4">おすすめ特集・サービス</p>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        </div>
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
import ProductAppeal from '@/components/common/special/productAppeal.vue';
import ShootingInformation from '@/components/common/special/shootingInformation.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: '50mmlens',
  components: {
    productAppeal: ProductAppeal,
    shootingInformation: ShootingInformation,
    'product-list-by-special-id': ProductListBySpecialId,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'vol.7 50mm単焦点レンズ特集 | 室内でペット写真を上手に撮るコツ＆おすすめレンズ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート。vol.7 50mm単焦点レンズ特集 | 室内でペット写真を上手に撮るコツ＆おすすめレンズ')

    const state = reactive({
      // ↓ ---- Top商品価格 ----
      topProductJanCode: ['4549292083729', '4549292075199',],
      topProductList: [] as Array<ProductDetail>,
      // ↓ ---- second商品価格 ----
      secondProductJanCode: ['4960999354798',],
      secondProductList: [] as Array<ProductDetail>,

      // ↓ ---- third商品価格 ----
      thirdProductJanCode: ['4549292037692', '4960999213644',],
      thirdProductList: [] as Array<ProductDetail>,

      // ↓ ---- micro商品価格 ----
      microProductJanCode: ['4545350050849', '4545350050764',],
      microProductList: [] as Array<ProductDetail>,

      // ↓ ---- micro50mm商品価格 ----
      micro50mmProductJanCode: ['4549292037692', '4960759026309', '4548736033078', '4549212217609', '4545350045869', '4545350045876', '4549077483539',],
      micro50mmProductList: [] as Array<ProductDetail>,

      backNumberList: [
        {
          href: '/ec/special/general/photo_mono/50mmlens',
          img: 'https://shop.kitamura.jp/images/banner/5093.jpg',
          alt: 'vol.5 Panasonic LUMIX G9 PRO'
        },
        {
          href: '/ec/special/general/photo_mono/a7r3-a9',
          img: 'https://shop.kitamura.jp/images/banner/4998.jpg',
          alt: 'vol.4 SONY α7RⅢ| α7RⅡやα9と比較しながらプロカメラマンが実写レビューレポート'
        },
        {
          href: '/ec/special/general/photo_mono/omd-em1',
          img: 'https://shop.kitamura.jp/images/banner/4841.jpg',
          alt: 'vol.3 OLYMPUS OM-D E-M1 MarkⅡ| 最強の手ぶれ補正性能！手持ちでも本格的な夜景撮影を可能に'
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/list?category=&narrow1=&narrow2=&type=u&r=',
          img: 'https://shop.kitamura.jp/images/banner/4637.gif',
          alt: '新着中古'
        }
      ],
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // トップ商品
        const topResult = await ProductService.fetchProducts(state.topProductJanCode, true);
        state.topProductList = topResult.items;
        // second商品
        const secondResult = await ProductService.fetchProducts(state.secondProductJanCode, true);
        state.secondProductList = secondResult.items;
        // third商品
        const thirdResult = await ProductService.fetchProducts(state.thirdProductJanCode, true);
        state.thirdProductList = thirdResult.items;
        // micro商品
        const microResult = await ProductService.fetchProducts(state.microProductJanCode, true);
        state.microProductList = microResult.items;
        // micro50mm商品
        const micro50mmResult = await ProductService.fetchProducts(state.micro50mmProductJanCode, true);
        state.micro50mmProductList = micro50mmResult.items;

      } catch (error) {
        // トップ商品
        state.topProductList = [] as Array<ProductDetail>;
        // second商品
        state.secondProductList = [] as Array<ProductDetail>;
        // third商品
        state.thirdProductList = [] as Array<ProductDetail>;
        // micro商品
        state.microProductList = [] as Array<ProductDetail>;
        // micro50mm商品
        state.micro50mmProductList = [] as Array<ProductDetail>;


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
.s-bnr p {
  background: rgba(0, 0, 0, 0) linear-gradient(transparent 70%, #ddd 70%) repeat scroll 0 0;
  font-family: 'ヒラギノ角ゴ Pro W3', 'メイリオ', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
  padding-left: 10px;
}
</style>