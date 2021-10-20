<template>
  <v-app>
    <div class="canon-5ds">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'canon 5Ds/5Ds R'"
          :topTitleText="'キヤノン EOS新製品\nデジタル一眼レフカメラ'"
          :titleFontsize="'200%'"
          :textFontsize="'16px'"
        />

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">キヤノン EOS 5Ds/5Ds R</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'canon EOS 5Ds/5DsR 価格・お得な情報'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=EOS%205D%20Mark%20III&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=30&tokutoku=0&sort=add_date'"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/canon/5ds/bnr_shitadori_350-130.gif'"
        />

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'canon EOS 5Ds/5DsR の３大特徴'" />
          <characteristic :characteristics="characteristicList1" />
          <subText :textItem="'canon EOS 5Ds/5DsR スペック'" />
          <characteristic :characteristics="characteristicList2" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'比較「EOS 5Ds」「EOS 5D MarkIII」「EOS-1D X」'" />
          <p class="pttex mb-2">
            <span class="bgtypetitle text-h6 font-weight-bold"
              >50.6Mの超高画質とそれを生み出す最新技術を集結した高解像モデル「EOS 5Ds」と人気の「5D markIII」、「1DX」を比較しました。</span
            >
          </p>
          <p class="mb-2">＊EOS 5DsRは、ローパスフィルター効果をキャンセルしたさらなる高解像モデルです。</p>
          <a href="/ec/images2/special/camera/feature/canon/5ds/comparison.gif" target="_brank">
            <v-img
              src="/ec/images2/special/camera/feature/canon/5ds/comparison.gif"
              alt="canon 5Ds 5Ds RとEOS 7Dの機能比較表"
              max-width="934"
              max-height="775"
              class="hover"
            ></v-img>
          </a>
        </div>
        <!--比較-->

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'canon EOS 5Ds/5DsR 外観画像'" />
          <p><b>canon EOS 5Ds/5DsR</b>の外観画像。ボディ、背面・上面・側面、canon EF24-70mm F2.8L II USMレンズ装着画像</p>
          <appearanceImage :src="appearanceImagePath" :type="2" />
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
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
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
export default Vue.extend({
  name: 'canon-5ds',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    naviBtn: NaviBtn,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
    appearanceImage: AppearanceImage,
  },
  setup: () => {
    document.title = 'canon EOS 5Ds/5Ds R 一眼レフ新製品 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン EOS 5Ds /5DsR 一眼レフ新製品特集！50.6Mの超高画質とそれを生み出す最新技術を集結した高解像モデル「EOS 5Ds」と人気の「5D markIII」、「1DX」を比較しました。価格・スペック・お得な情報をチェック！カメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/5ds/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/5ds/sp_img_top.jpg',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/5ds',
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList1: [
        {
          subtitle: 'ユーザーの想像を超える圧倒的高解像度を実現。35mmフルサイズCMOSセンサー',
          contents: [
            '有効約5060万画素の高画素でありながらも低ノイズ・広ダイナミックレンジを実現しました',
          ]
        },
        {
          subtitle: '高画素を支える優れた基本性能',
          contents: [
            '被写体を高精度に測距する61点高密度レティクルAFや、優れた動体追従性を発揮するEOS iTR AFでその瞬間を高精度に切り出します',
          ]
        },
        {
          subtitle: '高解像度を優先するユーザー向けのさらなる高解像度モデル「EOS 5Ds R」',
          contents: [
            'さらに高い解像感とキレのよい描写を実現する、ローパスフィルター効果キャンセルモデル。偽色やモアレの抑制よりも解像度を優先するユーザー向け',
          ]
        },
      ],
      characteristicList2: [
        {
          subtitle: '視界の果ての光と色をも解像し、立体感と質感を生々しいまでに描き出す\n5Ds Rは、さらに高い解像感とキレのよい描写を実現するローパスフィルター効果キャンセルモデル',
          contents: [
            '約5060万画素35mmフルサイズCMOSセンサー搭載',
            '繊細かつ高度な画像処理とカメラ制御を可能にした「デュアルDIGIC 6」',
            '61点高密度レティクルAF搭載、高密度に配置することで被写体の動きにも素早く追従',
            '障害物などによる測距誤差を検知、露光する瞬間の被写体距離を高精度に予測「AIサーボAFIII」',
            '追尾性能を高めた新アルゴリズムを搭載しており、速度や方向の急変にも的確に対応「EOS iTR AF」',
            '測距エリア選択モード6種類、1点スポット～61点自動フォーカスまで被写体に応じて自由に選択'
          ]
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
          path: 'canon EOS 5Ds / 5Ds R デジタル一眼レフ新製品',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292037760',
        '4549292037814',
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
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
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

<style scoped>
.bgtypetitle {
  background-color: #ffffcc;
}
</style>