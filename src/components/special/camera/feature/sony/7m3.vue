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
          :pcBackgroundImg="'/ec/images2/special/camera/feature/sony/7m3/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/sony/7m3/sp_img_top.jpg'"
          :topTitle="'SONY\nα7 III'"
          :topTitleText="'フルサイズ裏面照射型CMOSセンサー搭載\n高速・高精度なAFを実現した\nフルサイズミラーレスベーシックモデル'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'40px 0px 15px 30px'"
          :textPadding="'15px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <v-sheet color="#f80808" class="text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </v-sheet>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ソニー α7 III</p>
        <naviBtn :naviList="naviList" :color="'#E00000'" :hoverColor="'#A0A0A0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ソニー α7 III 価格・人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <v-row justify="center" class="mb-4">
          <v-col cols="12" sm="5" class="mx-4">
            <a
              href="https://www.net-chuko.com/ec/sell/item-list?category=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&keyword=%E3%82%BD%E3%83%8B%E3%83%BC%E3%80%80%CE%B17&maker=&s2=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s3=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s4=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s5=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s7=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n2c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n3c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n4c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n5c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n6c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n1c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&limit=20&tokutoku=0&sort="
            >
              <v-img
                src="/ec/images2/special/camera/feature/sony/7m3/bnr_shitadori_350-130.png"
                alt="高価買取実施中"
                max-width="100%"
                height="auto"
                class="hover"
              >
              </v-img>
            </a>
          </v-col>
          <v-col cols="12" sm="5" class="mx-4">
            <a href="/ec/guide/s_credit_01">
              <v-img src="https://shopimg.kitamura.jp/images/banner/1486.gif" alt="ショッピングクレジット" max-width="100%" height="auto" class="hover">
              </v-img>
            </a>
          </v-col>
        </v-row>

        <!-- ↓ SONY α7 IIIレビュー -->
        <subText :textItem="'SONY α7 IIIレビュー'" />
        <v-row>
          <v-col cols="12" sm="6">
            <p>
              「ShaSha（シャシャ）」は、「写(しゃ)真愛好者（しゃ）に、もっと写真を好きになってほしい」をコンセプトに、写真に関する様々な情報を掲載する写真の総合サイトです。
            </p>
          </v-col>
          <v-col cols="12" sm="5" class="mx-4">
            <a href="https://shasha.kitamura.jp/article/466105725.html?ref=netshop_t">
              <v-img
                src="https://shopimg.kitamura.jp/images/banner/6527.jpg"
                alt="【α7Ⅲレビュー】ベーシックモデルの常識を覆す！ソニーの「新基準」を６ヵ月堪能した感想"
                max-width="100%"
                height="auto"
                class="hover"
              >
              </v-img>
            </a>
          </v-col>
        </v-row>

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'SONY α7 III 特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--動画で見る-->
        <subText :textItem="'動画で見る！'" />
        <watchInVideo :src="'https://www.youtube.com/embed/KujQ1u3zlSY?rel=0'" :sm="6" :height="280" />

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'4,655'" :targetDate="''" :isCreditBtn="true" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ソニー α7III / α7II / α7R III 比較'" />
          <div class="product-comparison mb-5 mt-4">
            <v-sheet class="mb-2 font-weight-bold" color="#ffffcc"> 前機種『ソニー α7II』と『ソニー α7R III』との性能を比較しました。 </v-sheet>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2018年3月23日発売</td>
                  <td>2014年12月5日発売</td>
                  <td>2017年11月25日発売</td>
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
                  <td>約2430万画素</td>
                  <td>約4240万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                  <td>35mmフルサイズCMOS</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約5コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>圧縮RAW：約89枚<br />JPEG：約177枚</td>
                  <td>圧縮RAW：約25枚<br />JPEG：約80枚</td>
                  <td>圧縮RAW：約76枚<br />JPEG：約76枚</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>50～204800</td>
                  <td>50～25600</td>
                  <td>50～102400</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>位相差検出方式:693点<br />コントラスト検出方式:425点</td>
                  <td>位相差検出方式:117点<br />コントラスト検出方式:25点</td>
                  <td>位相差検出方式:399点<br />コントラスト検出方式:425点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>ファインダー使用時:約610枚<br />モニター使用時:約710枚</td>
                  <td>ファインダー使用時:約270枚<br />モニター使用時:約350枚</td>
                  <td>ファインダー使用時:約530枚<br />モニター使用時:約650枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約126.9×95.6×62.7mm</td>
                  <td>約126.9×95.7×59.7mm</td>
                  <td>約126.9×95.6×63.0mm</td>
                </tr>
                <tr>
                  <th>手振れ補正</th>
                  <td>5軸補正 最大5.0段</td>
                  <td>5軸補正 最大4.5段</td>
                  <td>5軸補正 最大5.0段</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.71倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td>約565g</td>
                  <td>約556g</td>
                  <td>約572g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                  <td>シングルスロット<br />(UHS-I support)</td>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ソニー α7III 作例画像'" />
        <exampleImages :path="'/ec/images2/special/camera/feature/sony/7m3/'" :count="4" />

        <!-- ↓ 外観画像ー -->
        <div id="images">
          <subText :textItem="'ソニー α7III 外観画像'" />
          <p class="text-subtitle-1">ソニー α7III の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/sony/7m3'" :count="3" />
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
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';

export default Vue.extend({
  name: '7m3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    exampleImages: ExampleImages,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = 'SONY フルサイズミラーレスベーシックモデル 新製品 α7 III | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'α7 IIIフルサイズミラーレスベーシックモデル。α7 II、α7R IIIとの比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '新開発35mmフルサイズ裏面照射型センサー搭載。研ぎ澄まされた描写性能',
          contents: [
            '有効約2420万画素35mmフルサイズ裏面照射型CMOSセンサーと、α7 II比 約1.8倍の高速処理を実現した新画像処理エンジンBIONZ Xを搭載',
            'イメージセンサーからの読み出し速度を約2倍に高速化したフロントエンドLSIを搭載。常用ISO感度最高51200の広い感度域やα7 II比で最大1.5段分の画質向上、約15ストップの広ダイナミックレンジを実現',
            '色再現性をより高め、人物撮影における肌色や、鮮やかな花などを自然な印象で描写',
          ]
        },
        {
          subtitle: '被写体を捉えて離さないAF性能',
          contents: [
            'α9に搭載の、撮像エリア全体の約93%をカバーする693点像面位相差AFセンサーを搭載。',
            'コントラストAF枠が425点に多分割化し、検出精度が大幅に向上。AF速度、追随性能もα7 II比 約2倍に進化',
            '「瞳AF」機能がさらに進化。瞳にピントを合わせるのが難しい場面も被写体を捉え続けます',
          ]
        },
        {
          subtitle: 'AF/AE追随 最高約10コマ/秒連写を実現。決定的瞬間を捉えるスピード性能c',
          contents: [
            '最新のシャッターユニットと画像処理システムの進化により、フル解像度で最高約10コマ/秒のAF/AE追随高速連写を実現',
            '最大177枚の連写持続性能で、撮り逃しが許されないシーンでも安心',
            '無音・無振動のサイレント撮影時もフル解像度でAF/AE追随最高約10コマ/秒の連写が可能',
          ]
        },
        {
          subtitle: '撮影の自由度を高める信頼性と操作性',
          contents: [
            'NP-FW50の約2.2倍の容量を持つ高容量バッテリーNP-FZ100に対応。約710枚の静止画撮影が可能',
            '同時記録やリレー記録に対応する2つのメディアスロット(スロット1はUHS-II対応)',
            'ピントを合わせたい被写体を瞬時に選択できるタッチフォーカス機能を搭載',
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
          href: '/ec/guide/s_credit_01l',
          img: 'http://shopimg.kitamura.jp/images/banner/1486.gif',
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
          path: 'SONY フルサイズミラーレスベーシックモデル 新製品 α7 III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736079625'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736079625', '4548736001657', '2239530006574'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736079625',
        '4548736079717',
        '4548736047419',
        '4548736064638',
        '4548736064621',
        '4548736064522',
        '4548736082045',
        '4548736082052',
        '4548736082069',
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