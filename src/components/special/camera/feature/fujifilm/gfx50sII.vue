<template>
  <v-app>
    <div class="gfx50sII">
      <div class="main-contents-wrap">
        <!-- ↓パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/gfx50sII/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/fujifilm/gfx50sII/sp_img_top.jpg'"
          :topTitle="'フジフイルム GFX 50S II'"
          :topTitleText="'フルサイズの約1.7倍ラージフォーマットセンサーと\n強力な手ブレ補正機構を搭載'"
          :titleColor="'#ffffff'"
          :textColor="'#FFFFFF'"
          :padding="'150px 0px 15px 40px'"
        />
        <!-- ↑top image -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h5 font-weight-bold">好評発売中！</span>
        </div>
        <p class="text-left">フジフイルム GFX 50S II</p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'フルサイズの約1.7倍ラージフォーマットセンサー採用「GFXシリーズ」ミラーレスデジタルカメラ'" />
        <p>小型軽量ボディに約5,140万画素センサー＆強力な手ブレ補正機構を搭載。圧倒的な機動力で中判デジタルカメラがより身近に！</p>

        <!-- ↓ 価格・ご購入 -->
        <div id="price">
          <subText :textItem="'フジフイルム GFX 50S II 価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" />
        </div>
        <!-- ↓ 最大60回まで分割ー -->
        <div id="otoku">
          <subText :textItem="'キタムラなら最大60回まで分割金利手数料0円！'" />
          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[0]"
            :numberOfTimes="'60'"
            :maximumInstallmentPayment="'60'"
            :amount="'7,425'"
            :targetDate="'2021年9月29日'"
          />

          <splitContent
            v-if="productDetailList.length !== 0"
            :ProductList="mainProductList[1]"
            :numberOfTimes="'60'"
            :maximumInstallmentPayment="'60'"
            :amount="'8,234'"
            :targetDate="'2021年9月29日'"
            :isText="false"
          />
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る フジフイルム GFX 50S II'" />
        <watchInVideo :src="'https://www.youtube.com/embed/wNNiS6UILS0'" :height="315" />

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'フジフイルム GFX 50S IIの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'フジフイルム GFX 50SII / GFX 50S / GFX 100S / キヤノン EOS R5 / ニコン Z 7II 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">フジフイルム GFX 50SII / GFX 50S / GFX 100S / キヤノン EOS R5 / ニコン Z 7II 比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年9月29日</td>
                  <td>2017年2月28日</td>
                  <td>2021年2月25日</td>
                  <td>2020年7月30日</td>
                  <td>2020年12月11日</td>
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
                  <td>約5140万画素</td>
                  <td>約5140万画素</td>
                  <td>約1億200万画素</td>
                  <td>約4500万画素</td>
                  <td>約4575万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    43.8mm×32.9mm<br />
                    ベイヤーCMOSセンサー
                  </td>
                  <td>
                    43.8mm×32.9mm<br />
                    ベイヤーCMOSセンサー
                  </td>
                  <td>
                    43.8mm×32.9mm<br />
                    ラージフォーマット<br />
                    ベイヤーCMOSセンサー（裏面照射型）
                  </td>
                  <td>
                    約36.0×24.0mm<br />
                    35mmフルサイズCMOSセンサー<br />
                    （デュアルピクセルCMOS AF II対応）
                  </td>
                  <td>
                    35.9×23.9mm<br />
                    35mmフルサイズ<br />
                    裏面照射型CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>約3.0コマ/秒</td>
                  <td>約3.0コマ/秒</td>
                  <td>約5.0コマ/秒</td>
                  <td>約12コマ/秒</td>
                  <td>約10コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>
                    メカニカルシャッター:1/4000秒-60分、バルブ<br />
                    電子シャッター:1/16000秒-60分、バルブ
                  </td>
                  <td>
                    メカニカルシャッター:1/4000秒-60分、バルブ<br />
                    電子シャッター:1/16000秒-60分、バルブ
                  </td>
                  <td>
                    メカニカルシャッター:1/4000秒-60分、バルブ<br />
                    電子シャッター:1/16000秒-60分、バルブ
                  </td>
                  <td>
                    メカニカルシャッター:1/8000-30秒、バルブ<br />
                    電子シャッター:1/8000-0.5秒
                  </td>
                  <td>1/8000～30秒、バルブ、Time、X200</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100-12800<br />
                    拡張モードISO50/25600/51200/102400
                  </td>
                  <td>
                    ISO100-12800<br />
                    拡張モードISO50/25600/51200/102400
                  </td>
                  <td>
                    ISO100-12800<br />
                    拡張モードISO50/25600/51200/102400
                  </td>
                  <td>
                    ISO100-51200<br />
                    （拡張：下限ISO50、上限ISO102400)
                  </td>
                  <td>
                    ISO64～25600<br />
                    （拡張：下限ISO32、上限ISO102400)
                  </td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>0.5型/約369万ドット</td>
                  <td>0.5型/約369万ドット</td>
                  <td>0.5型/約369万ドット</td>
                  <td>0.5型/約576万ドット</td>
                  <td>0.5型/約369万ドット</td>
                </tr>
                <tr>
                  <th>視野率/倍率</th>
                  <td>100%/0.77倍</td>
                  <td>100%/0.85倍</td>
                  <td>100%/0.77倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.8倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    236万ドット<br />
                    3.2型3方向チルト式TFT
                  </td>
                  <td>
                    236万ドット<br />
                    3.2型3方向チルト式TFT
                  </td>
                  <td>
                    236万ドット<br />
                    3.2型3方向チルト式TFT
                  </td>
                  <td>3.2型/約210万ドットバリアングル式液晶モニター</td>
                  <td>
                    3.2型/約210万ドット<br />
                    チルト式
                  </td>
                </tr>
                <tr>
                  <th>
                    静止画撮影可能枚数/時間<br />
                    (CIPA規格基準)
                  </th>
                  <td>約455枚</td>
                  <td>約400枚</td>
                  <td>約460枚</td>
                  <td>約220枚</td>
                  <td>約360枚</td>
                </tr>
                <tr>
                  <th>連続動画撮影時</th>
                  <td>約140分</td>
                  <td>約145分</td>
                  <td>約95分</td>
                  <td>約80分</td>
                  <td>約100分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>
                    ボディー内5軸補正<br />
                    最大6.5段
                  </td>
                  <td>手ぶれ補正機能付きレンズで対応</td>
                  <td>
                    ボディー内5軸補正<br />
                    最大6.0段
                  </td>
                  <td>
                    ボディー内5軸補正<br />
                    最大8.0段
                  </td>
                  <td>
                    ボディー内5軸補正<br />
                    最大5.0段
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約 150.0×104.2×87.2mm</td>
                  <td>約147.5×113.8×91.4mm（EVF装着時）</td>
                  <td>約 150.0×104.2×87.2mm</td>
                  <td>約138.5×97.5×88.0ｍｍ</td>
                  <td>約134×100.5×69.5mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約819g</td>
                  <td>約740g</td>
                  <td>約819g</td>
                  <td>約650g</td>
                  <td>約615g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    SDカード<br />
                    デュアルスロット
                  </td>
                  <td>
                    SDカード<br />
                    デュアルスロット
                  </td>
                  <td>
                    SDカード<br />
                    デュアルスロット
                  </td>
                  <td>
                    CFexpressカード（Type B）/SDカード<br />
                    デュアルスロット
                  </td>
                  <td>
                    CFexpress(Type B)/XQD/SDカード<br />
                    デュアルスロット
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>フルHD</td>
                  <td>フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>8K/4K/フルHD</td>
                  <td>4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!--↓ 価格・人気アクセサリー-->
        <subText :textItem="'フジフイルム GFX 50S II 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'フジフイルム GFX 50S II 外観画像'" />
          <p class="text-subtitle-1">フジフイルム GFX 50S IIの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/fujifilm/gfx50sII'" />
        </div>

        <!--↓ SNSー-->
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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import Urlcopy from '@/components/common/special/url-copy.vue';
import SubText from '@/components/common/special/subtext.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';


export default Vue.extend({
  name: 'fujifilm-gfx50sII',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    characteristic: Characteristic,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    priceAndPopular: PriceAndPopular,
    watchInVideo: WatchInVideo,
    appearanceImage: AppearanceImage,
    splitContent: SplitContent,
    naviBtn: NaviBtn,

  },
  setup: (props, context) => {
    document.title = 'フジフイルム GFX 50S II | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'フジフイルム GFX 50S II ご予約受付中、価格・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({

      naviList: [
        { naviItem: '価格', href: '#price' },
        { naviItem: 'お得情報', href: '#otoku' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '約5,140万画素ラージフォーマットセンサー搭載。超高画質を実現',
          contents: [
            'フルサイズの約1.7倍となるラージフォーマットセンサーを搭載。1画素あたりの受光面積が大きいため、広いダイナミックレンジと高いS/N比を実現。白飛びや黒つぶれを抑えた豊かな階調表現や、ノイズの少ないクリアな写真撮影を可能とし、被写体の質感や、その場の空気感まで描写が可能',
            'センサーの性能をフルに引き出す「フジノン GFレンズ」との組み合わせにより、被写体の細部まで余すことなく描写が可能',
            'ラージフォーマットセンサーならではの浅い被写界深度により、豊かなボケ味を実現。背景を美しくぼかすことで被写体を際立たせた立体的な表現が可能'

          ]
        },
        {
          subtitle: '多彩な色調を可能とする人気の「フィルムシミュレーション」を全19種類搭載',
          contents: [
            '高彩度かつ柔らかい階調表現を特長とする「ノスタルジックネガ」を含む全19種類の「フィルムシミュレーション」を搭載。被写体やシーンに合わせて、写真フィルムを選ぶ感覚で多彩な表現が可能',
            '色や階調などをライブビューで確認しながら撮影可能なので、撮影後の編集時間も大幅短縮できます'
          ]
        },
        {
          subtitle: '5軸・最大6.5段の強力な手ブレ補正機構と小型軽量ボディにより高い機動力を発揮',
          contents: [
            '高性能なジャイロセンサー・加速度センサーを採用した、5軸・最大6.5段の強力な手ブレ補正機構を搭載。光量が少ない場所での手持ち撮影をサポート',
            '質量約900g・高さ約104.2mm・奥行約87.2mmの小型軽量ボディに防滴・-10℃の耐低温構造による高いタフネス性能を実現',

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
          path: 'フジフイルム GFX 50S II',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410452280', '4547410452297'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410452280', '4547410452297', '4547410428131', '4547410428155', '4547410449297', '4547410342963', '4523052024092', '4523052024108', '4547410437775', '4547410345445', '4547410341034', '4547410420333', '4961607734704', '4570046382041', '4547410322040', '4547410433531'],
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4547410452280', '4547410341010', '4547410442861', '4549292157345', '4960759905697'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,

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