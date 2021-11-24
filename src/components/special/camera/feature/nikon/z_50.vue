<template>
  <v-app>
    <div class="z50">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/z50/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/z50/sp_img_top.jpg'"
          :topTitle="'ニコン Z 50'"
          :topTitleText="'小型・軽量ボディーに高い描写力・表現力を凝縮\nニコン初のDXフォーマットミラーレスカメラ'"
          :padding="'40px 0px 15px 30px'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ニコン Z 50 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="mb-0 text-subtitle-2">ニコン Z 50</p>
        <naviBtn :naviList="naviList" :color="'#E00000'" :hoverColor="'#A0A0A0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'ニコン初のDXフォーマットミラーレスカメラ「Z 50」'" />
        <p class="text-subtitle-1 font-weight-bold">エルゴノミクスデザインを踏襲した小型・軽量・堅牢ボディーに、高い描写力と多彩な表現力を凝縮</p>

        <!-- ↓ ニコン Z 50 商品を見る -->
        <specificationsExamplesBtn
          :btntxt="'ニコン Z 50 商品を見る'"
          :url="'https://shop.kitamura.jp/ec/special/page/news/2019/10/4265'"
          :height="'50px'"
          :color="'#ff0000'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコンZ 50 /キヤノンEOS M6 Mark II/ソニーα6400/フジX-T30比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコンZ 50 /キヤノンEOS M6 Mark II/ソニーα6400/フジX-T30の性能を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2019年11月22日発売</td>
                  <td>2019年9月27日発売</td>
                  <td>2019年2月22日発売</td>
                  <td>2019年3月20日発売</td>
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
                  <td>約2088万画素</td>
                  <td>約3250万画素</td>
                  <td>約2420万画素</td>
                  <td>約2610万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    ニコンDXフォーマット<br />
                    23.5×15.7mmサイズCMOSセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    Exmor CMOSセンサー
                  </td>
                  <td>
                    APS-Cサイズ<br />
                    X-Trans CMOS 4センサー
                  </td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高約11コマ/秒</td>
                  <td>最高約14コマ/秒</td>
                  <td>最高約11コマ/秒</td>
                  <td>
                    最高 約30コマ/秒(電子シャッター)<br />
                    最高約8コマ/秒(メカシャッター)
                  </td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    RAW(非圧縮)：約30枚 <br />
                    JPEG：約71枚
                  </td>
                  <td>
                    RAW(非圧縮)：約23枚 <br />
                    JPEG：約54枚
                  </td>
                  <td>
                    RAW(非圧縮)：約46枚 <br />
                    JPEG：約99枚
                  </td>
                  <td>
                    RAW(非圧縮)：約17枚<br />
                    JPEG：約26枚
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/4000-30秒、バルブ</td>
                  <td>
                    1/4000-30秒、バルブ(メカニカルシャッター)<br />
                    1/16000-30秒、バルブ(電子シャッター)
                  </td>
                  <td>1/4000-30秒、バルブ</td>
                  <td>
                    1/8000-15分、バルブ(メカニカルシャッター)<br />
                    1/32000-15分、バルブ(電子シャッター)
                  </td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100～51200<br />
                    (拡張時ISO204800)
                  </td>
                  <td>
                    ISO100～12800<br />
                    (拡張時ISO25600)
                  </td>
                  <td>
                    ISO100-32000<br />
                    (拡張：下限ISO50、上限ISO102400)
                  </td>
                  <td>
                    ISO100～51200<br />
                    (拡張ISO 50-204800)
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>209点</td>
                  <td>143点</td>
                  <td>
                    425点（位相差検出方式）<br />
                    /425点（コントラスト検出方式）
                  </td>
                  <td>425点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    ファインダー使用時：約280コマ<br />
                    画像モニター使用時：約320コマ
                  </td>
                  <td>約305枚</td>
                  <td>
                    ファインダー使用時：約360枚<br />
                    液晶モニター使用時：約410枚
                  </td>
                  <td>約380枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約126.5×93.5×60mm</td>
                  <td>約119.6×70.0×49.2mm</td>
                  <td>約120.0×66.9×59.7mm</td>
                  <td>約118.4ｘ82.8×46.8mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>レンズ内手振れ補正</td>
                  <td>レンズ内手振れ補正</td>
                  <td>レンズ内手振れ補正</td>
                  <td>レンズ内手振れ補正</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>約236万ドット/約100%/1.02倍</td>
                  <td>ビューファインダー別売り</td>
                  <td>約236万ドット/約100% / 約0.7倍</td>
                  <td>約236万ドット/約100% / 約0.62倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約395g</td>
                  <td>約361g</td>
                  <td>約359g</td>
                  <td>約333g</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>SD／SDHC／SDXCメモリーカード(UHS-I 対応)</td>
                  <td>SD／SDHC／SDXCメモリーカード(UHS-II/UHS-I 対応)</td>
                  <td>SD／SDHC／SDXCメモリーカード(UHS-I 対応)</td>
                  <td>SD／SDHC／SDXCメモリーカード(UHS-II/UHS-I 対応)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>DIC4K/4K/フルHD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'ニコン Z 50 特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:ニコン Z 50 レビュー・作例を見る | 小型・軽量で気軽に持てる旅カメラ！'" />
        <shasha
          :txt="'ニコン Z 50は、ニコン初のDXフォーマットのミラーレスカメラです。筆者はZ 6を愛用していますが、本機発表後にすぐ予約を入れたほど、魅力のある仕上がりとなっています。今回は、発売前に本機をお借りして、11月の上旬にフランスのパリに行ってきましたので、その作品と共にレビューをお送りします。…'"
          :href="'https://shasha.kitamura.jp/article/472037781.html'"
          :src="'/ec/images2/special/camera/feature/nikon/z50/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン Z 50 外観画像'" />
          <p class="text-subtitle-1">ニコン Z 50の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/z50'" :count="4" :sm="6" />
        </div>

        <!-- ↓ ニコン Z 50 商品を見る -->
        <specificationsExamplesBtn
          :btntxt="'ニコン Z 50 商品を見る'"
          :url="'https://shop.kitamura.jp/ec/special/page/news/2019/10/4265'"
          :height="'50px'"
          :color="'#ff0000'"
        />

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'ニコン Z 50 価格/人気アクセサリー/お得な情報'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <div id="price">
          <subText :textItem="'ニコン Z 50をご購入時、ニコン D7500高値下取り実施中！'" />
          <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="4" />
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
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';

export default Vue.extend({
  name: 'z50',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    shasha: ShaSha,
    expensiveTradeIn: ExpensiveTradeIn,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    appearanceImage: AppearanceImage,
  },
  setup: (props, context) => {
    document.title = 'ニコン Z 50 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Z 50 発売中！比較や、価格・発売日・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '「Z 7」「Z 6」のエルゴノミクスデザインを踏襲した小型・軽量ボディー',
          contents: [
            '小型・軽量ボディーで高い描写力と多彩な表現力を実現しながら、小型・軽量ボディーの中にも使いやすさを追求',
            '同時発売のNIKKOR Z DXレンズを含め、システムとしてさらなる小型・軽量化を達成',
            '小型ながらもしっかりとホールドできるグリップ形状や、右手で操作をすべて完結できるボタン配置を実現'
          ]
        },
        {
          subtitle: 'DXフォーマットカメラ最高の、解像感の高い画づくりと高感度低ノイズを実現',
          contents: [
            '画像処理エンジン 「EXPEED 6」の搭載で「Z 7」 「Z 6」と同等の画づくりを実現',
            '多彩な効果を付けることができる全20種類の「Creative Picture Control」搭載',
            '「フォトイラスト」や「トイカメラ風」などのアレンジを加えた表現で個性的な画づくりができる「スペシャルエフェクトモード」もあわせて搭載'
          ]
        },
        {
          subtitle: 'クラス最高レベルのAF性能を実現',
          contents: [
            '像面位相差AF画素搭載CMOSセンサーを採用。動きのある人物でも瞳を正確に認識できる「瞳AF」を実現',
            'クラス最高レベルのｰ４EVまで対応可能な優れた低輝度AF性能を搭載',
            '11コマ/秒の高速連続撮影時にも、AE・AFともに追従'
          ]
        },
        {
          subtitle: '初心者からハイアマチュアまで満足できる多彩な機能を搭載',
          contents: [
            'スマートフォン同様のタッチ操作が可能なタッチパネルを採用で思い描いている表現を簡単に実現できる直感的な操作性を実現',
            '広い範囲で角度を変えられるチルト式画像モニターを搭載で、静止画・動画ともに自分撮り撮影が可能',
            'アプリを使って撮影した静止画・動画をすぐにSNSで共有可能'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'ニコン D7500',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=D7500&_ga=2.137861872.1712661879.1629071621-279164427.1627285160&pattern=1',
        nameImg: '/ec/images2/special/camera/feature/nikon/z50/img_5.jpg',
        txt: 'ニコン Z 50',
        tradeInImg: '/ec/images2/special/camera/feature/nikon/z50/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/general/highly_recommended/2020/4660',
          img: 'https://shopimg.kitamura.jp/images/banner/7575.png',
          alt: 'スタッフイチオシ！ニコン NIKKOR Z 14-30mm f/4 S'
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
          path: 'ニコン Z 50',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759903617'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759903617', '4549292136401', '4548736092044', '4547410399875'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759903617', '4960759903631', '4960759903624', '4960759903969', '4960759148940', '4955478181736',
        '4960759149961', '4960759900159', '4960759900340', '4960759900951', '4960759900166', '4960759900357'
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
