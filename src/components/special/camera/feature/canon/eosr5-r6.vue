<template>
  <v-app>
    <div class="eosr5-r6">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/feature/canon/eosr5_r6/'" />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/canon/eosr5_r6/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/canon/eosr5_r6/sp_img_top.jpg'"
          :topTitle="'キヤノン'"
          :topTitleText="'EOS初のボディー内5軸手ブレ補正搭載\n新CMOSセンサーと新映像エンジンを採用したフルサイズミラーレス'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キャノン EOS R5 キャノン EOS R6 好評発売中</span>
        </p>

        <p class="text-left ma-0 pa-0 text-subtitle-2">
          <span>キャノン EOS R5 / キャノン EOS R6</span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="/ec/special/camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'世界最高8.0段の手ブレ補正による快適な撮影を実現した次世代「EOS R」'" />
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R6レンズキット 価格・ご購入'" />

        <!--====== 価格・ご購入 ======-->
        <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(mainProduct, index) in mainProductList" :key="`first-${index}`">
          <v-container>
            <v-row>
              <v-col class="text-center" cols="12" sm="5">
                <router-link :to="`/ec/pd/${mainProduct.janCode}`"
                  ><v-img :src="mainProduct.images[0].imagePath" max-width="100%" height="auto"></v-img><br />
                  {{ mainProduct.itemName }}
                </router-link>
              </v-col>
              <v-col class="text-center mt-4 px-10" cols="12" sm="6">
                <div class="main-product-area-right">
                  <p class="main-product-price text-center">
                    <span class="d-inline-block">価格</span><span class="text-h4 primary--text">¥{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
                    ><span class="d-inline-block">(税込)</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-h5 font-weight-bold"
                    dark
                    block
                    color="red darken-2"
                    width="100px"
                    height="60px"
                    :href="`/ec/pd/${mainProduct.janCode}`"
                  >
                    <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                    ご購入はこちら
                  </v-btn>
                </div>

                <div class="mt-4" v-if="index === 0">
                  <p><img src="https://shop.kitamura.jp/images/banner/6931.jpg" alt="電話で相談・ご注文できます" /></p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-subtitle-1 main-product-btn"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://cweb.canon.jp/eos/your-eos/product/eosr/')"
            >メーカーサイトで<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る キヤノン EOS R5！'" />
        <watchInVideo :src="'https://www.youtube.com/embed/AxJYDPGlcvw?rel=0'" :width="'70%'" :height="315" />

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'EOS R5 / EOS R6 共通の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />

          <subText :textItem="'EOS R5 の特徴'" />
          <characteristic :characteristics="eosR5CharacteristicList" />

          <subText :textItem="'EOS R6 の特徴'" />
          <characteristic :characteristics="eosR6CharacteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較しました。</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2020年7月30日</td>
                <td>2020年8月27日</td>
                <td>2018年10月25日</td>
                <td>2019年9月6日</td>
                <td>2018年3月23日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="(product, index) in comparisonDetailList" :key="`third-${index}`">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約4500万画素</td>
                <td>約2010万画素</td>
                <td>約3030万画素</td>
                <td>約6100万画素</td>
                <td>約2420万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー（デュアルピクセルCMOS AF II対応）
                </td>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー（デュアルピクセルCMOS AF II対応）
                </td>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー（デュアルピクセルCMOS AF対応）
                </td>
                <td>
                  35mmフルサイズ<br />
                  Exmor R CMOSセンサー
                </td>
                <td>
                  35mmフルサイズ<br />
                  ExmorR CMOSセンサー
                </td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>最高約12コマ/秒</td>
                <td>最高約12コマ/秒</td>
                <td>最高約8.0コマ／秒</td>
                <td>最高約10コマ/秒</td>
                <td>最高約10コマ/秒</td>
              </tr>
              <tr>
                <th>連続撮影可能枚数</th>
                <td>
                  JPEG:約350枚<br />
                  RAW：約87枚
                </td>
                <td>
                  JPEG:約1000枚以上<br />
                  RAW：約240枚
                </td>
                <td>
                  JPEG:約100枚<br />
                  RAW：約34枚
                </td>
                <td>
                  JPEG:約68枚<br />
                  RAW：約68枚
                </td>
                <td>
                  JPEG:約163枚<br />
                  RAW：約89枚
                </td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
              </tr>
              <tr>
                <th>ストロボ同調速度</th>
                <td>1／200秒</td>
                <td>1／200秒</td>
                <td>1／200秒</td>
                <td>1/250秒</td>
                <td>1/250秒</td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>
                  ISO100～51200<br />
                  （拡張：下限ISO50、上限ISO102400)
                </td>
                <td>
                  ISO100～102400<br />
                  （拡張：下限ISO50、上限ISO204800)
                </td>
                <td>
                  ISO100～12800<br />
                  （拡張：下限ISO50、上限ISO102400)
                </td>
                <td>
                  ISO100-32000<br />
                  （拡張：下限ISO50、上限ISO102400)
                </td>
                <td>
                  ISO100-51200<br />
                  （拡張：下限ISO50、上限ISO204800)
                </td>
              </tr>
              <tr>
                <th>測距輝度範囲</th>
                <td>EV－6～20</td>
                <td>EV－6.5～20</td>
                <td>EV－6～18</td>
                <td>EV-3 - EV20</td>
                <td>EV-3-20</td>
              </tr>
              <tr>
                <th>撮影可能枚数</th>
                <td>
                  静止画：約200枚<br />
                  動画:合計約1時間10分
                </td>
                <td>
                  静止画：約250枚<br />
                  動画:合計約2時間25分
                </td>
                <td>
                  静止画：約350枚<br />
                  動画:合計約2時間20分
                </td>
                <td>
                  静止画：約530枚<br />
                  動画:合計約2時間40分
                </td>
                <td>
                  静止画：約610枚<br />
                  動画:合計約3時間10分
                </td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>5軸補正 最大8段</td>
                <td>5軸補正 最大8段</td>
                <td>レンズ補正のみ</td>
                <td>5軸補正 最大5.5段</td>
                <td>5軸補正 最大5.0段</td>
              </tr>
              <tr>
                <th>液晶性能</th>
                <td>
                  3.2型/約210万ドット<br />
                  バリアングル式液晶モニター
                </td>
                <td>
                  3.0型/約162万ドット<br />
                  バリアングル式液晶モニター
                </td>
                <td>
                  3.15型/約210万ドット<br />
                  バリアングル式液晶モニター
                </td>
                <td>
                  3.0型/144万ドット<br />
                  チルト式液晶モニター
                </td>
                <td>
                  3.0型/92万ドット<br />
                  チルト式液晶モニター
                </td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>0.5型/576万ドット</td>
                <td>0.5型/369万ドット</td>
                <td>0.5型/369万ドット</td>
                <td>0.5型/576万ドット</td>
                <td>0.5型/236万ドット</td>
              </tr>
              <tr>
                <th>視野率</th>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.78倍</td>
                <td>約100% / 約0.78倍</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>約138.5×97.5×88.0ｍｍ</td>
                <td>約138.4×97.5×88.4ｍｍ</td>
                <td>約135.8×98.3×84.4mm</td>
                <td>約128.9×96.4×67.3mm</td>
                <td>約126.9×95.6×62.7mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>約650g</td>
                <td>約598g</td>
                <td>約580g</td>
                <td>約580g</td>
                <td>約565g</td>
              </tr>
              <tr>
                <th>記録メディア/スロット</th>
                <td>
                  CFexpressカード（Type B）/<br />
                  SD(sUHS-II 対応)デュアルスロット
                </td>
                <td>
                  SDデュアルスロット<br />
                  slot1/slot12:UHS-II 対応
                </td>
                <td>
                  SDシングルスロット<br />
                  UHS-II 対応
                </td>
                <td>
                  SDデュアルスロット<br />
                  slot1/slot12:UHS-II 対応
                </td>
                <td>
                  SDデュアルスロット<br />
                  slot1のみUHS-II 対応
                </td>
              </tr>
              <tr>
                <th>動画記録方式</th>
                <td>8K/4K/フルHD</td>
                <td>4K/フルHD</td>
                <td>4K/フルHD/HD</td>
                <td>4K/フルHD/HD</td>
                <td>4K/フルHD/HD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:キヤノン EOS R5｜航空写真家がスチル＆ムービーで徹底レビュー'" />
        <shasha
          :txt="'キヤノンのミラーレス一眼 EOS R5は人気のデジタル一眼レフカメラ、EOS 5Dシリーズの流れを汲んだ高画素機。「5」というと三脚にガッツリとカメラを据え付けじっくりと風景写真を撮る…というイメージもありましたが、今回のEOS R5はシャッターの秒間コマ数や手ブレ補正の段数などの秀逸さを見ても、かなり動きモノに対応してきたなという印象を持ちました。そこで、動きモノである飛行機撮影においてEOS R5を徹底インプレッション。スチルだけでなくムービーについても、その劇的な...'"
          :href="'https://shasha.kitamura.jp/article/478121231.html'"
          :src="'/ec/images2/special/camera/feature/canon/eosr5_r6/shashabnr.jpg'"
        />
        <!-- ↑ ShaSha -->

        <!-- ↓ 価格・人気アクセサリー -->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 価格・人気アクセサリー'" />
        <priceAndPopular :productDetailList="productDetailList" />

        <!-- ↓ 高値下取りー -->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 ご購入時、高値下取り実施中！'" id="price" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'9,488'" :targetDate="'2020年7月10日'" />
        <splitContent
          v-if="mainProductList.length !== 0"
          :ProductList="mainProductList[1]"
          :amount="'6,291'"
          :targetDate="'2020年7月10日'"
          :isCreditBtn="true"
        />

        <!-- ↓ 作例画像 -->
        <subText :textItem="'EOS R5 / EOS R6 作例画像'" id="images" />
        <exampleImages :path="'/ec/images2/special/camera/feature/canon/eosr5_r6/'" :count="6" />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <kitamuraService />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
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
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'canon-eosr5-r6',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    watchInVideo: WatchInVideo,
    characteristic: Characteristic,
    shasha: ShaSha,
    expensiveTradeIn: ExpensiveTradeIn,
    priceAndPopular: PriceAndPopular,
    splitContent: SplitContent,
    kitamuraService: KitamuraService,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
  },
  methods: {
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '作例', href: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: 'ボディ内5軸手ブレ補正機構搭載RFレンズ使用時最大8.0段の補正効果',
          contents: [
            'EOSシリーズで初めて、手ブレに連動して撮像素子を動かす補正機構をボディー内に採用。手ブレ補正機構が搭載されていないレンズでも手振れ補正が可能',
            'さらにIS（手振れ補正機構）搭載RFレンズなら最大8.0段分の手ブレ補正を実現。望遠撮影や手持ち撮影といった手ブレの発生しやすい撮影環境でも快適な撮影が可能',
            '動画撮影時には、ボディー内とレンズ内の手ブレ補正機構の協調制御に加え、動画電子ISの併用も可能で作品作りを強力にサポート'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ],
      eosR5CharacteristicList: [
        {
          subtitle: '約4500万画素35mmフルサイズCMOSセンサーと映像エンジン「DIGIC X」搭載によりEOSシリーズ史上最高画質と高速連写を両立',
          contents: [
            '電子シャッター撮影時は、AF/AE追従で最高約20コマ/秒の高速連写を実現。音の気になるシーンであってもシャッター音を気にせず撮影が可能',
            '「DIGIC X」により、静止画撮影時に常用で最高ISO 51200（拡張ISO 102400相当）を実現'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ],
      eosR6CharacteristicList: [
        {
          subtitle: '約2010万画素35mmフルサイズCMOSセンサーと映像エンジン「DIGIC X」搭載により⾼感度性能・⾼速性能を実現',
          contents: [
            'EOS-1D X MarkIII搭載センサーをベースにEOS R6用にカスタマイズされた35mmフルサイズCMOSセンサーにより⾼感度撮影時もクリアな映像表現が可能',
            '静止画⾼感度性能：常用ISO 102400（拡張ISO 204800相当）動画⾼感度性能：常用ISO 51200（拡張ISO 102400相当）に対応'
          ]
        },
        {
          subtitle: 'その他、高度な撮影をサポートする充実の仕上がり',
          contents: [
            'SDカード（UHS-II）に対応した2つのスロットを搭載。どちらのスロットでも最高約20コマ/秒の連続撮影4K/60P動画の内部記録が可能',
            'EOSシリーズ初の静⽌画測距輝度範囲EV-6.5の実現で、肉眼では被写体の認識が難しい暗い環境下でも高精度なピント合わせが可能',
            '直感的に撮影モードが切り替えられるモードダイヤルを搭載。静止画と動画の切り替えもスムーズに行えます'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'キヤノン EOS 5D Mark IV ボディ',
        href: 'https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4549292075748&_ga=2.222765533.714669828.1626591933-721903692.1626267770&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg',
        txt: 'キヤノン EOS R5 / EOS R6',
        tradeInImg: '/ec/images2/special/camera/feature/canon/eosr5_r6/bnr_shitadori_350-130.jpg',
      },
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
        },
        {
          href: '/ec/special/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/sale/shoppingcredit-campaign/',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan/',
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
          linkUrl: '/ec/special/sale-fair/camera/feature/',
          disabled: false
        },
        {
          path: 'キヤノン EOS R5 / EOS R6',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292157345', '4549292157253', '4549292157512'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292157345', '4549292157253', '4549292157512', '4548736108264', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292157345',
        '4549292157253',
        '4549292157512',
        '4549292157222',
        '4549292162813',
        '4549292162837',
        '4549292115710',
        '4549292115703',
        '4549292148381',
        '4549292115611',
        '4549292156263',
        '4549292168037',
        '4960999581569',
        '4960999581576',
        '4549292125405',
        '4960999530383',
        '4523052023392',
        '4523052023408',
        '4523052016639'
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

<style lang="scss">
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
}
</style>