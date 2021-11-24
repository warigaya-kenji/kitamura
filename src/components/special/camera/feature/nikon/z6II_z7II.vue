<template>
  <v-app>
    <div class="z6II_z7II">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/z6II_z7II/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/z6II_z7II/sp_img_top.jpg'"
          :topTitle="'ニコン z6II・z7II'"
          :topTitleText="'高画質、高速性能を進化させた二つの\nフルサイズミラーレス'"
          :padding="'185px 0px 15px 40px'"
          :textPadding="'15px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">ニコン Z 6II / Z 7II 好評発売中</span>
        </div>

        <!-- ↓ ナビボタン -->
        <p class="darken-2 text-left mb-0">ニコン Z 6II ・ ニコン Z 7II</p>
        <naviBtn :naviList="naviList" :hoverColor="'yellow'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><spnn class="white--text">≫ 話題の新製品バックナンバー</spnn></v-btn
          >
        </div>

        <subText :textItem="'高画質、高速性能を進化させた「Zマウント」フルサイズミラーレス'" />

        <!--====== 価格・ご購入 ======-->

        <subText :textItem="'ニコン Z 6II ・ ニコン Z 7II 価格・ご購入'" />
        <priceAndPurchase :mainProductList="mainProductList" />

        <v-row>
          <v-col cols="12">
            <a href="https://www.nikon-image.com/event/campaign/z6II_z7II_premiumexterior/">
              <v-img src="/ec/images2/special/camera/feature/nikon/z6II_z7II/8504.jpg" max-width="100%" height="auto" class="hover" alt="キャンペーン" />
            </a>
          </v-col>
        </v-row>

        <!-- ↓ 48回まで分割ー -->
        <div id="price">
          <subText :textItem="'キタムラなら48回まで分割金利手数料0円！'" />
          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[0]"
            :numberOfTimes="'48'"
            :amount="'5,033'"
            :targetDate="'2021年7月1日'"
          />

          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[1]"
            :numberOfTimes="'48'"
            :amount="'6,456'"
            :targetDate="'2021年7月1日'"
            :isText="false"
          />

          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[2]"
            :numberOfTimes="'48'"
            :amount="'7,467'"
            :targetDate="'2021年7月1日'"
            :isText="false"
            :isCreditBtn="true"
          />
        </div>
        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン Z 7II / Z 6II / Z 7 / キヤノン EOS R6 / ソニー α7C 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコン Z 7II / Z 6II / Z 7 / キヤノン EOS R6 / ソニー α7C 比較 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年12月11日</td>
                  <td>2020年11月6日</td>
                  <td>2018年9月28日</td>
                  <td>2020年8月27日</td>
                  <td>2020年10月23日</td>
                </tr>
                <tr>
                  <th>価格</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                    <span class="primary--text font-weight-bold">{{ formatPrice(parseInt(product.price)) }}</span
                    >円
                  </td>
                </tr>
                <tr>
                  <th>有効画素数</th>
                  <td>約4575万画素</td>
                  <td>約2450万画素</td>
                  <td>約4575万画素</td>
                  <td>約2010万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    35.9×23.9mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                  <td>
                    35.9×23.9mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                  <td>
                    35.9×23.9mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                  <td>
                    約35.9×23.9mmフルサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35.6×23.8mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>約10コマ/秒</td>
                  <td>約14コマ/秒</td>
                  <td>最高 約9コマ/秒</td>
                  <td>最高 約12コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1／8000-30秒、バルブ</td>
                  <td>1／8000-30秒、バルブ</td>
                  <td>1／8000-30秒、バルブ</td>
                  <td>1／8000-30秒、バルブ</td>
                  <td>1/4000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>64～25600</td>
                  <td>100～51200</td>
                  <td>64～25600</td>
                  <td>100～102400</td>
                  <td>100～51200</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.5型/369万ドット</td>
                  <td>0.5型/369万ドット</td>
                  <td>0.5型/369万ドット</td>
                  <td>0.5型/369万ドット</td>
                  <td>0.39型/約236万ドット</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.8倍</td>
                  <td>約100% / 約0.8倍</td>
                  <td>約100% / 約0.8倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.59倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    3.2型/約210万ドット<br />
                    チルト式
                  </td>
                  <td>
                    3.2型/約210万ドット<br />
                    チルト式
                  </td>
                  <td>
                    3.2型/約210万ドット<br />
                    チルト式
                  </td>
                  <td>
                    3.0型/約162万ドット<br />
                    バリアングル式
                  </td>
                  <td>
                    3.0型/約92万ドット<br />
                    バリアングル式
                  </td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    静止画：約360枚<br />
                    動画:約100分
                  </td>
                  <td>
                    静止画：約340枚<br />
                    動画:約100分
                  </td>
                  <td>
                    静止画：約330枚<br />
                    動画:約85分
                  </td>
                  <td>
                    静止画：約590枚<br />
                    動画:約160分
                  </td>
                  <td>
                    静止画:約680枚<br />
                    動画:約140分
                  </td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                  <td>イメージセンサーシフト方式5軸補正</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約134×100.5×69.5mm</td>
                  <td>約134×100.5×69.5mm</td>
                  <td>約134×100.5×67.5mm</td>
                  <td>約138.4×97.5×88.4ｍｍ</td>
                  <td>約124.0x71.1x59.7mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約615g</td>
                  <td>約615g</td>
                  <td>約585g</td>
                  <td>約598g</td>
                  <td>約424g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    デュアルスロット<br />
                    CFexpress(Type B)/XQD<br />
                    SDメモリーカード(UHS-II規格に対応)<br />
                  </td>
                  <td>
                    デュアルスロット<br />
                    CFexpress(Type B)/XQD<br />
                    SDメモリーカード(UHS-II規格に対応)<br />
                  </td>
                  <td>
                    シングルスロット<br />
                    CFexpress(Type B)/XQD
                  </td>
                  <td>
                    デュアルスロット<br />
                    SDメモリーカード(slot1/slot2:UHS-II 対応)
                  </td>
                  <td>
                    シングルスロット<br />
                    SDメモリーカード(UHS-I/II対応)
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4KUHD/フルHD</td>
                  <td>4KUHD/フルHD</td>
                  <td>4KUHD/フルHD</td>
                  <td>4K/フルHD</td>
                  <td>4KUHD/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>

        <!--比較-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 2"
              class="black darken-4 text-h6 white--text main-product-btn"
              height="70px"
              width="50%"
              :href="`https://www.nikon-image.com/products/mirrorless/lineup/z_6_2/`"
              >ニコン Z 6II<br />メーカーサイトで詳しく見る</v-btn
            >
          </v-hover>
        </div>
        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 12 : 2"
              class="black darken-4 text-h6 white--text main-product-btn"
              height="70px"
              width="50%"
              :href="`https://www.nikon-image.com/products/mirrorless/lineup/z_7_2/`"
              >ニコン Z 7II<br />メーカーサイトで詳しく見る</v-btn
            >
          </v-hover>
        </div>
        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン Z 7II レビュー｜フォトグラファーの細かな要望に応えた写りと操作感'" />
        <shasha
          :txt="'Z 7II」は撮影していて気持ちのいいカメラだ。まずしっかりとホールドできるグリップと使いやすいボタンおよびダイヤルレイアウトのボディがいい。そして被写体をクリアかつクリーンに捉えられるEVF（電子ビューファインダー）がいい。さらにレスポンスよく美しいシーンをキャプチャーできるセンサーと映像エンジンがいい。先ほどのカットと同じ公園で撮った...'"
          :href="'https://shasha.kitamura.jp/article/478647899.html'"
          :src="'/ec/images2/special/camera/feature/nikon/z6II_z7II/shashabnr.jpg'"
        />
        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン Z 6II レビュー｜AF性能も堅実にレベルアップした進化機種'" />
        <shasha
          :txt="'「Z 6」を発売すぐに手に入れて、メイン機種として使い込んできた筆者から見た「Z 6II」のレビューをお送りします。本機は動画撮影時に、瞳AFと動物AFが使えるようになりました。さらに、オートエリアAFだけではなくワイドエリアAF(L)でも瞳AFと動物AFが選択できるので、人物や動物が複数いて、ピントが任意の被写体から他に移ってしまいそうなときの撮影が格段に...'"
          :href="'https://shasha.kitamura.jp/article/478509065.html'"
          :src="'/ec/images2/special/camera/feature/nikon/z6II_z7II/shashabnr2.png'"
        />
        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン Z 7II/Z 6II レビュー｜ユーザーの要望に応えて正統進化！'" />
        <shasha
          :txt="'ニコン Z 7II/Z 6II は、2018年に発売されたフルサイズミラーレスカメラ「Z 7」「Z 6」の後継にあたる機種で、ユーザーの声に耳を傾け、検証を重ねて改善してきた製品になります。まずはメモリーカードスロットの改良について。従来機ではCFexpress/XQDスロットのみでしたが、 Z 7II/Z 6II はCFexpress/XQDに加え、SDメモリーカード（UHS-II規格対応）のダブルスロットを搭載しています。記録方式も両方のスロットにメモリーカードを..'"
          :href="'https://shasha.kitamura.jp/article/478035414.html'"
          :src="'/ec/images2/special/camera/feature/nikon/z6II_z7II/shashabnr3.png'"
        />
        <!--特徴-->
        <subText :textItem="'「Z 6II」「Z 7II」の特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!--価格・人気アクセサリー-->
        <subText :textItem="'ニコン Z 6II/ニコン Z 7II 価格/人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />
        <!--価格・人気アクセサリー-->

        <!--外観画像ー-->
        <div id="images2">
          <subText :textItem="'ニコン Z 6II ・ ニコン Z 7II  外観画像'" />
          <p class="text-subtitle-1">ニコン Z 6II ・ ニコン Z 7II の外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/z6II_z7II'" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ShaSha from '@/components/common/special/shasha.vue';

export default Vue.extend({
  name: 'z6II_z7II',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    naviBtn: NaviBtn,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    shasha: ShaSha
  },
  setup: (props, context) => {
    document.title = 'ニコン Z 6II ・ Z 7II 好評発売中！ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Z 6II ・ Z 7II 好評発売中！比較や、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '特徴', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images2' }
      ],


      characteristicList: [
        {
          subtitle: '2年前に発売された初期型でユーザーから寄せられた要望をカタチにした第二世代モデル',
          contents: [
            'メモリーカードスロットをXQD(CFexpress Type B)のシングルスロットから、SDカード使用可能なスロットを搭載した2スロット構成に変更。汎用性の高いSDカードが使えるようになりました',
            '新型バッテリー「EN-EL15c」を採用することにより、外部バッテリーからの充電および給電に対応。また、別売り縦位置グリップも同時発表。拡張性がさらに向上しました',
            '撮影画面のアイコンや撮影情報を非表示にし、画面の隅々まで確認できる［ライブビュー情報表示の消灯］機能を新搭載。より構図を決めやすくなりました',
            '動きのある被写体の撮影で安定したピント合わせができる［ワイドエリアAF］にも対応し、さらに使いやすくなった瞳AF/動物AF。静止画はもちろん動画でも使用できます',
            '高速連写性能を加速した「デュアルEXPEED 6」を新採用。決定的な瞬間をより確実に捉えることが可能になりました'

          ]
        },
        {
          subtitle: '連写、動画に強い「Z 6II」の進化したポイント',
          contents: [
            '高速連続撮影と連続撮影コマ数が向上。約14コマ/秒で最大124コマまでの高速連続撮影が可能。AF/AEもすべての撮影コマで追従します',
            '4K UHD/30p動画を［FXベースの動画フォーマット］フルフレームで撮影可能。4K UHD動画は全画素読み出しによる豊富な情報を活用。画像処理エンジンの働きで解像感の高い画づくりを実現しています'
          ]
        },
        {
          subtitle: '高画素・高精細な「Z 7II」の進化したポイント',
          contents: [
            '有効画素数約4575万画素と進化した瞳AF、493点で素早く高精度にピントを合わせるハイブリッドAFでこれまでを超える美しいポートレートが撮影できます',
            '約10コマ/秒で最大77コマまでの高速連続撮影が可能。わずかなニュアンスの違いが決定的な差を生むポートレート撮影やネイチャー撮影、鉄道撮影などを高速連続撮影が快適にサポートします'

          ]
        }
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
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
          path: 'ニコン Z 6II / Z 7II',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759905901', '4960759905918', '4960759905697'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759905697', '4960759905901', '4960759901088', '4549292157253', '4548736121614'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759905697',
        '4960759905901',
        '4960759904430',
        '4960759904874',
        '4960759905246',
        '4960759905239',
        '4960759149961',
        '4960759903495',
        '4960759903570',
        '4960759902887',
        '4955478180647',
        '4960759126566',
        '4523052016622',
        '4955478180531',
        '4523052023392'

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