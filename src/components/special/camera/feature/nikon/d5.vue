<template>
  <v-app>
    <div class="d5">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/d5/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/d5/sp_img_top.jpg'"
          :topTitle="'Nikon D5'"
          :topTitleText="'デジタル一眼レフカメラ\nニコン 新製品'"
          :padding="'40px 0px 15px 30px'"
          :textPadding="'15px 0px 0px 0px'"
          :titleFontsize="'40px'"
          :textFontsize="'18px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">Nikon D5</p>
        <naviBtn :naviList="naviList" :hoverColor="'yellow'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--比較-->
        <subText :textItem="'ニコン D5/D4S/EOS-1D X 比較'" id="hikaku" />
        <div>
          <div>
            <ul class="point">
              <p class="pttex">
                <span class="bgtypetitle"
                  >次世代プロフェッショナルモデルと銘打たれたニコンFXフォーマット新製品「ニコン D5」<br />「Nikon D5」と「Nikon D4S」「Canon EOS-1D
                  X」を比較しました。</span
                >
              </p>
              <p>
                「Nikon D5」は、高画質、高速、高精度と、あらゆる性能を極限まで進化。撮影領域を拡大するフラグシップ機です。<br />『CF専用モデル』と『XQD専用モデル』の2タイプがあります。
              </p>
            </ul>
          </div>
          <div style="clear: both"></div>
          <div class="text-center">
            <v-btn block color="yellow" href="/ec/pd/compareproducts?prd=4960759146205-4960759141989-4960999819846" x-large>
              <span class="text-h6 black--text">D5・D4S・EOS-1D Xを比較する</span>
            </v-btn>
          </div>
        </div>
        <!--特徴-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'Nikon D5 価格/人気アクセサリー'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--特徴-->
        <subText :textItem="'ニコン D5 ３大特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--スペック-->
        <subText :textItem="'ニコン D5 スペック'" />
        <div>
          <div>
            <ul class="point">
              <p class="pttex">
                <span class="bgtypetitle"
                  >高画質、高速、高精度と、あらゆる性能を極限まで進化<br />撮影領域を拡大するプロフェッショナルモデル。『CF専用モデル』と『XQD専用モデル』の2タイプ。</span
                >
              </p>
              <li class="pointt including-line-breaks">99点のクロスセンサーを含む、広域・高密度の153点AFシステム</li>
              <li class="pointt including-line-breaks">低輝度時にもスムーズ・確実に合焦する-4EV対応AF</li>
              <li class="pointt including-line-breaks">最高常用感度ISO 102400の優れた高感度性能、拡張した測光の低輝度限界性能</li>
              <li class="pointt including-line-breaks">動体への応答性、追従性向上に貢献するAF専用エンジン</li>
              <li class="pointt including-line-breaks">テレコンバーター使用時にも、合成F値が5.6までの明るさの場合は、153点すべてのフォーカスポイントが有効</li>
              <li class="pointt including-line-breaks">性能が向上した7つのAFエリアモード搭載</li>
              <li class="pointt including-line-breaks">レンズとの微差調整が簡単にできるAF微調節の自動設定</li>
              <li class="pointt including-line-breaks">
                カメラの構え（横位置、縦位置、逆縦位置）を変えたときに使用するフォーカスポイントが自動的にセットされるよう、あらかじめ個別に設定できるAFカスタマイズ機能搭載
              </li>
              <li class="pointt including-line-breaks">AF/AE追従で約12コマ/秒 最大200コマまでの高速連続撮影</li>
            </ul>
          </div>
        </div>
        <!--スペック-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'Nikon D5 外観画像'" />
          <p class="text-subtitle-1">Nikon D5 の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/d5'" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'd5',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'Nikon D5 デジタル一眼レフカメラ！ニコンFX機 新製品 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン デジタル一眼レフ新製品｢Nikon D5｣特集。高画質、高速、高精度と、あらゆる性能を極限まで進化したプロフェッショナルモデル！ニコン D4S、キヤノン EOS-1D Xとの比較や価格・スペック・お得な情報をチェック！カメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      naviList: [
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '外観画像', href: '#images2' },
      ],
      characteristicList: [
        {
          subtitle: '広域・高密度153点AFシステムにより動体補足力が向上',
          contents: [
            '前モデルD4と比べ130％以上の広い範囲を高密度にカバー。\n小さな被写体やコントラストの低い被写体に対して高いAF検出力を発揮しピントを合わせます'
          ]
        },
        {
          subtitle: 'AF/AE追従で約12コマ/秒、14ビットロスレス圧縮RAWで最大200コマの高速連続撮影が可能',
          contents: [
            'すべての画質モード、すべてのISO感度域で、約12コマ/秒※1（AF/AE追従）の安定した高速連続撮影を実現\nまた、新開発のミラー駆動機構を搭載することにより、動きの変化が激しい被写体も驚くほど容易に追い続けることができます'
          ]
        },
        {
          subtitle: '新開発FXフォーマットCMOSセンサー、データ処理能力を高めたEXPEED5によりニコン史上最高の常用感度ISO102400を実現',
          contents: [
            '有効画素数2082万画素の解像度と高感度時の高画質を両立した新開発FXフォーマットCMOSセンサーと、新しいノイズ低減機能を搭載した新画像処理エンジンEXPEED 5の連携でニコン史上最高の常用感度ISO 102400を達成。'
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
          linkUrl: '/ec/special/camera/feature/',
          disabled: false
        },
        {
          path: 'Nikon D5',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759146205'],
      mainProductList: [] as Array<ProductDetail>,

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759146205',
        '4960759146212',
        '4960759146335',
        '4523052012624'
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


<style lang="scss" scoped>
.bgtypetitle {
  background-color: #ffffcc;
}

.point {
  width: 100%;
  float: left;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}

.pttex {
  width: 100%;
  height: auto;
  margin: 10px 0px 8px 0px;
  float: left;
  padding: 0px 0px 0px 0px;
  font-size: 18px;
  font-weight: 800;
}

.pointt {
  width: 100%;
  height: auto;
  margin: 0px 0px 5px 20px;
  float: left;
  padding: 0px 0px 0px 0px;
  list-style-type: square;
  font-size: 14px;
  line-height: 180%;
}
</style>