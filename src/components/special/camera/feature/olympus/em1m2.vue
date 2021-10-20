<template>
  <v-app>
    <div class="em1m2">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/olympus/em1m2/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/olympus/em1m2/sp_img_top.jpg'"
          :topTitle="'OLYMPUS OM-D E-M1 MarkII'"
          :topTitleText="'オリンパス 新製品\nミラーレス一眼 フラッグシップモデル'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :textPadding="'15px 0px 0px 0px'"
          :titleFontsize="'30px'"
          :textFontsize="'18px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">オリンパス OM-D E-M1 MarkII</p>
        <naviBtn :naviList="naviList" :color="'red darken-3'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn">
            <span class="white--text">≫ 話題の新製品バックナンバー</span>
          </v-btn>
        </div>

        <!--価格・人気アクセサリー-->
        <subText :textItem="'オリンパス OM-D E-M1 MarkII 価格/人気アクセサリー'" id="price" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'オリンパス OM-D E-M1 MarkII / オリンパス OM-D E-M1 / キヤノン EOS 7D MarkII'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">オリンパス OM-D E-M1 MarkIIと、オリンパス OM-D E-M1、キヤノン EOS 7D MarkIIの性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2016年12月22日発売</td>
                  <td>2013年10月11日発売</td>
                  <td>2014年10月30日発売</td>
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
                  <td class="active">約2037万画素</td>
                  <td>約1628万画素</td>
                  <td>約2020万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>Live Mos</td>
                  <td>Live Mos</td>
                  <td>CMOS</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>4/3型</td>
                  <td>4/3型</td>
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
                  <td>○</td>
                  <td>○</td>
                  <td>×</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000～60秒<br />（電子シャッター1/32000～60秒）</td>
                  <td>1/8000-60秒</td>
                  <td>1/8000-30秒</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td class="active">約18コマ/秒</td>
                  <td>約10コマ/秒</td>
                  <td>約10コマ/秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO200-25600<br />（拡張時 ISO64相当）</td>
                  <td>ISO200-25600<br />（拡張時 ISO100相当）</td>
                  <td>ISO100-16000<br />（拡張時 ISO51200相当）</td>
                </tr>
                <tr>
                  <th>測距点<br />フォーカスポイント</th>
                  <td>像面位相差AF:121エリア<br />オールクロス コントラストAF:121点オールクロス</td>
                  <td>像面位相差AF:37点ラインセンサー<br />コントラストAF:81エリア</td>
                  <td>65点（クロス測距点：最大65点）</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>視野率約100％</td>
                  <td>視野率約100％</td>
                  <td>視野率約100％</td>
                </tr>
                <tr>
                  <th>液晶サイズ</th>
                  <td>3型</td>
                  <td>3型</td>
                  <td>ワイド3.0型</td>
                </tr>
                <tr>
                  <th>液晶可動/固定</th>
                  <td class="active">可動</td>
                  <td class="active">可動</td>
                  <td>固定</td>
                </tr>
                <tr>
                  <th>防塵・防滴機能</th>
                  <td>有</td>
                  <td>有</td>
                  <td>有</td>
                </tr>
                <tr>
                  <th>Wi-Fi/NFC</th>
                  <td class="active">搭載</td>
                  <td>非搭載</td>
                  <td>非搭載</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td>574g</td>
                  <td class="active">497g</td>
                  <td>910g</td>
                </tr>
                <tr>
                  <th>電源</th>
                  <td>BLH-1</td>
                  <td>BLN-1</td>
                  <td>LP-E6N/LP-E6</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>約440枚<br />約950枚(低消費電力撮影モード)</td>
                  <td>約350枚</td>
                  <td>約670枚 ※LP-E6N使用時</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>SD/SDHC/SDXCメモリーカード<br />※UHS-I・UHS-II対応</td>
                  <td>SDHC/SDXCメモリーカード<br />※UHS-I対応</td>
                  <td>CF(UDMAモード7対応) SD/SDHC/SDXC<br />※UHS-I対応</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td class="active">4K/フルHD/HD</td>
                  <td>フルHD/HD</td>
                  <td>フルHD/HD/SD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--Photo+mono-->
        <div class="mt-8">
          <h2 class="font-weight-bold title sbtext">オリンパス OM-D E-M1 MarkII レビュー特集 Photo+mono</h2>
          <div class="mt-4">
            <a class="mt-4" href="https://shop.kitamura.jp/special/sale-fair/general/photo_mono/omd-em1/" target="_blank">
              <v-img class="mx-auto" max-width="708px" src="https://shopimg.kitamura.jp/images/banner/4840.jpg"></v-img>
            </a>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--Photo+mono-->

        <!--特徴-->
        <subText :textItem="'オリンパス OM-D E-M1 MarkII ３大特徴'" id="point" />
        <div>
          <div>
            <ul class="point">
              <p class="pttex">
                <span class="bgtypetitle">一瞬を切り取る高速連写、AF/AE追従で最高18コマ/秒の連続撮影</span>
              </p>
              <li class="pointt including-line-breaks">
                新開発の画像処理エンジン「TruePic Ⅷ」搭載により、2037万画素のフル画素を保ちながら、AF/AE追従で最高18コマ/秒の高速連写を実現。
              </li>
              <li class="pointt including-line-breaks">121の測距点全てをクロスタイプとすることで、被写体の捕捉性能を大幅に向上。</li>
              <li class="pointt including-line-breaks">コントラストAFと像面位相差AFを併用することで、ピント合わせにシビアな場合でも、高精度なAF撮影が可能。</li>
            </ul>
          </div>
          <div style="clear: both"></div>
          <v-sheet class="mt-4 pa-4" color="black">
            <p class="white--text">
              有効画素数2037万画素での撮影可能。RAW連続撮影可能枚数は約48枚<br />
              圧倒的な連写スピードで、肉眼では捉えられない「一瞬」を高精細に捉える
            </p>
            <v-img class="mx-auto" max-width="708px" src="/ec/images2/special/camera/feature/olympus/em1m2/point_1.jpg"></v-img>
          </v-sheet>
        </div>
        <div>
          <div>
            <ul class="point">
              <p class="pttex">
                <span class="bgtypetitle">世界最強の5軸シンクロ手ぶれ補正</span>
              </p>
              <li class="pointt including-line-breaks">あらゆる種類の手ぶれを補正する5軸手ぶれ補正機構を搭載。5.5段というトップクラスの補正性能を誇ります。</li>
              <li class="pointt including-line-breaks">レンズ内手ぶれ補正機構搭載レンズと組み合わせ時には、6.5段の手ぶれ補正性能を実現。</li>
              <li class="pointt including-line-breaks">
                動画専用の電子手ぶれ補正（M-IS）を組み合わせることで効果的に手ぶれを抑え、4K動画の手持ち撮影を可能に。
              </li>
            </ul>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>使用レンズ</th>
                  <th>補正機能</th>
                </tr>
                <tr>
                  <td>M.ZUIKO DIGITAL ED 12-40mm F2.8 PRO</td>
                  <td>5.5段 焦点距離f=40mm時</td>
                </tr>
                <tr>
                  <td>M.ZUIKO DIGITAL ED 12-100mm F4.0 IS PRO</td>
                  <td>6.5段 焦点距離f=100mm時、5軸シンクロ手ぶれ補正時</td>
                </tr>
                <tr>
                  <td>M.ZUIKO DIGITAL ED 300mm F4.0 IS PRO</td>
                  <td>6.0段 5軸シンクロ手ぶれ補正時</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <div>
          <div>
            <ul class="point">
              <p class="pttex">
                <span class="bgtypetitle">防塵・防滴・耐低温（-10℃）設計ながらも小型・軽量、高い機動性と信頼性を両立</span>
              </p>
              <li class="pointt including-line-breaks">
                機密性と耐候性の高いシーリングを施し、各ユニットの低温動作を厳密にチェックすることで-10℃での動作も保証。
              </li>
              <li class="pointt including-line-breaks">
                圧倒的な高速連写性能と高画質を備えたフラッグシップ機ながらも小型・軽量。撮影時、携帯時のいずれも高い機動性を発揮。
              </li>
              <li class="pointt including-line-breaks">プロのハードな使用に耐えるため、20万回の耐久性試験をクリアした新開発シャッターを搭載。</li>
            </ul>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--特徴-->

        <!--感想-->
        <div class="mt-8">
          <h2 class="font-weight-bold mt-4 title sbtext">オリンパス OM-D E-M1 MarkIIを触ったキタムラ商品担当の感想</h2>
          <v-sheet class="mt-4 pa-4" color="orange lighten-5">
            なんといっても連写の速さにに驚きました。<br />
            AF/AE固定で最高60コマ/秒、AF/AE追従でも最高18コマ/秒の速さは、いつシャッターが切れているのかがわからないほど。<br />
            これなら今まで苦手とされていたスポーツ撮影でも、安心して最高の瞬間が撮影できます。<br />
            電子シャッターの弱点だった歪みも最小限に抑えられており、歪みは全く感じませんでした。<br />
            上記のスピード性に加え、<span class="font-weight-bold">手ぶれ補正効果が最大6.5倍となるM.ZUIKO DIGITAL ED 12-100mm F4.0 IS PROとの組み合わせ</span
            >はすごいの一言。<br />
            ISO感度条件25600ではありますがこの手ぶれ補正があれば全く気になりません。<br />
            ボディサイズは大きく変わらないものの、グリップ形状が従来機種よりも深く作られているのでホールディング性アップ。<br />
            わかりやすい性能アップだけでなく、細かい部分の改良によりさらに使いやすくなった印象でした。<br />
          </v-sheet>
          <div style="clear: both"></div>
        </div>
        <!--感想-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'オリンパス OM-D E-M1 MarkII 外観画像'" />
          <p class="text-subtitle-1">オリンパス OM-D E-M1 MarkII の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/olympus/em1m2'" />
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
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'em1m2',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'オリンパス OM-D E-M1 MarkII ミラーレスカメラ フラッグシップモデル 新製品 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'オリンパス ミラーレス一眼 新製品｢OM-D E-M1 MarkII｣特集。AF/AE追従で最高18コマ/秒の高速連写を実現した、OM-Dシリーズのフラッグシップモデル。前機種「OM-D E-M1」と「キヤノン EOS 7D MarkII」との比較や価格・スペック・お得な情報をチェック！新製品ならカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')

    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '外観画像', href: '#images2' },
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
          path: 'オリンパス OM-D E-M1 MarkII',
          disabled: true
        }
      ],
      mainProductJanCode: ['4545350050849'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4545350050849', '2500000168000', '4549292001617'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4545350050849',
        '4545350050894',
        '4545350051020',
        '4545350051037',
        '4545350050900',
        '4545350050917',
        '4545350051082',
        '4545350050955',
        '4545350050764',
        '4545350051051',
        '4545350049423',
        '4545350047900',
        '4545350047924',
        '4545350047726',
        '4545350047719',
        '4545350045487'
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
.active {
  background: #ffbfc0;
  font-weight: bold;
}
</style>