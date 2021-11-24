<template>
  <v-app>
    <div class="z_9" v-if="isShow">
      <!-- 表示期間外の場合 -->
      <notfound :errorMessage="errorMsg" v-if="errorMsg" />

      <div class="main-contents-wrap" v-if="!errorMsg">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓タイトル -->
        <topTitleImg
          :pcBackgroundImg="
            isShowAdvertisement
              ? '/ec/images2/special/camera/feature/nikon/z_9/fan/bg_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/nikon/z_9/reserve/bg_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/nikon/z_9/release/bg_top.jpg'
              : ''
          "
          :spBackgroundImg="
            isShowAdvertisement
              ? '/ec/images2/special/camera/feature/nikon/z_9/fan/sp_img_top.jpg'
              : isShowReserve
              ? '/ec/images2/special/camera/feature/nikon/z_9/reserve/sp_img_top.jpg'
              : isShowRelease
              ? '/ec/images2/special/camera/feature/nikon/z_9/release/sp_img_top.jpg'
              : ''
          "
          :topTitle="'ニコン Z 9 '"
          :topTitleText="'静止画・動画ともにニコン史上最高機能・性能を備えた\n「Zシリーズ」初のフラグシップモデル'"
          :titleColor="'#000000'"
          :textColor="'#000000'"
          :padding="'170px 0px 15px 30px'"
          :textPadding="'10px 0px 0px 0px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <!-- ↓予約か発売かでテキストを変更してます -->
          <span class="white--text text-h6 font-weight-bold">{{
            isShowAdvertisement ? '2021年11月2日10時 予約受付開始！' : isShowReserve ? 'ご予約受付中！' : isShowRelease ? '好評発売中' : ''
          }}</span>
        </p>
        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#ffe100'" />
        <!-- ↑ ナビボタン -->
        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>
        <subText :textItem="'最先端技術を結集させ、静止画・動画ともにニコン史上最高機能・性能を備えた「 Zシリーズ」初のフラグシップモデル'" />
        <!--====== 予約・発売 ======-->
        <div v-if="!isShowAdvertisement">
          <!--====== 価格・ご購入 ======-->
          <subText :textItem="'ニコン Z 9 価格・ご予約'" />
          <priceAndPurchase :mainProductList="mainProductList" :btntxt="isShowRelease ? 'ご購入はこちら' : 'ご予約はこちら'" />

          <!-- ↓ 高値下取り -->
          <div id="price">
            <div v-if="isShowReserve">
              <!-- 予約の時 -->
              <subText :textItem="'z_9 ご購入時、高価下取り実施中'" />
              <expensiveTradeIn :expensiveTradeInList="reserveExpensiveTradeInList" />
            </div>
            <div v-if="isShowRelease">
              <!-- 発売の時 -->
              <subText :textItem="'z_9 ご購入時、高価下取り実施中'" />
              <expensiveTradeIn :expensiveTradeInList="releaseExpensiveTradeInList" />
            </div>
          </div>
          <!-- ↓ 60回まで分割 -->
          <subText :textItem="'キタムラなら最大60回まで分割金利手数料0円！'" />
          <splitContent
            v-if="mainProductList.length !== 0"
            :ProductList="mainProductList[0]"
            :amount="'10,478'"
            :targetDate="'2021年11月02日'"
            :numberOfTimes="'60'"
            :maximumInstallmentPayment="'60'"
          />
          <!--動画で見る-->
          <subText :textItem="'動画で見る | ニコン Z 9 is Coming - Teaser 1'" />
          <watchInVideo :src="'https://www.youtube.com/embed/tCl4LWM4D9U'" :height="315" />
          <subText :textItem="'動画で見る | ニコン Z 9先行体験レポート ～話題沸騰！ニコン Zシリーズのフラッグシップ機をじっくり触って来ました～'" />
          <watchInVideo :src="'https://www.youtube.com/embed/ebbG-SOlm1M?rel=0'" :height="315" />
        </div>

        <!--特徴-->
        <div class="contents_inner" id="spec">
          <subText :textItem="'ニコン Z 9 の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />
        </div>
        <!--特徴-->
        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで\n仕様・作例を詳しく見る'"
          :url="'https://www.nikon-image.com/products/mirrorless/lineup/z_9/'"
          :height="'70px'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン Z 9 / ソニー α１ / キヤノンEOS R3 / ニコンD6 比較S 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">ニコン Z 9 / ソニー α１ / キヤノンEOS R3 / ニコンD6 比較 を比較しました</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2021年 年内発売予定</td>
                  <td>2021年3月19日発売</td>
                  <td>2021年11月下旬発売予定</td>
                  <td>2020年6月5日発売</td>
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
                  <td>約4571万画素</td>
                  <td>約5010万画素</td>
                  <td>約2410万画素</td>
                  <td>約2082万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    35mmフルサイズ<br />
                    （ニコンFXフォーマット）積層型CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    積層型CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    裏面照射積層CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    （ニコンFXフォーマット）CMOSセンサー
                  </td>
                </tr>
                <tr>
                  <th>
                    AFフレーム<br />
                    測距点
                  </th>
                  <td>493点</td>
                  <td>759点 (位相差検出方式)/425点 (コントラスト検出方式)</td>
                  <td>1053点（Dual Pixel CMOS AFII）</td>
                  <td>105点</td>
                </tr>
                <tr>
                  <th>AF低輝度限界</th>
                  <td>EV-6.5</td>
                  <td>EV-4</td>
                  <td>EV-7.5</td>
                  <td>EV-4.5</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>電子シャッター:最高約20コマ/秒</td>
                  <td>
                    メカシャッター:最高約10コマ/秒<br />
                    電子シャッター:最高約30コマ/秒
                  </td>
                  <td>
                    メカシャッター:最高約12コマ/秒<br />
                    電子シャッター:最高約30コマ/秒
                  </td>
                  <td>メカシャッター:最高約14コマ/秒</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>電子シャッター：1/32000-30秒、バルブ、Time</td>
                  <td>
                    メカシャッター：1/8000-30秒、バルブ<br />
                    電子シャッター：1/32000-30秒
                  </td>
                  <td>
                    メカシャッター：1/8000-30秒、バルブ<br />
                    電子シャッター：1/64000-30秒、バルブ
                  </td>
                  <td>メカシャッター：1/8000-30秒、バルブ、Time</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO64～25600（拡張：下限ISO32、上限ISO102400)</td>
                  <td>ISO100-32000 (拡張: 下限ISO50、上限ISO102400)</td>
                  <td>ISO100～102400（拡張：下限ISO50、上限ISO204800)</td>
                  <td>ISO100～102400（拡張：下限ISO50、上限ISO3280000)</td>
                </tr>
                <tr>
                  <th>ファインダー</th>
                  <td>
                    369万ドット<br />
                    1.27cm(0.5型)Quad-VGA OLED 電子式ビューファインダー
                  </td>
                  <td>
                    943万ドット<br />
                    1.6cm (0.64型) 電子式ビューファインダー
                  </td>
                  <td>
                    576万ドット<br />
                    0.5型電子ビューファインダー<br />
                    OVFビューアシスト搭載
                  </td>
                  <td>アイレベル式ペンタプリズム使用一眼レフレックス式ファインダー</td>
                </tr>
                <tr>
                  <th>視野率/倍率</th>
                  <td>100%/約0.80倍</td>
                  <td>100%/約0.90倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.72倍</td>
                </tr>
                <tr>
                  <th>液晶モニター</th>
                  <td>
                    約210万ドット<br />
                    3.2型チルト式（縦横チルト可能）
                  </td>
                  <td>
                    約144万ドット<br />
                    3.0型チルト式
                  </td>
                  <td>
                    約415万ドット<br />
                    3.2型バリアングル式
                  </td>
                  <td>
                    約236万ドット<br />
                    3.2型固定式
                  </td>
                </tr>
                <tr>
                  <th>
                    静止画撮影可能枚数/時間<br />
                    (CIPA規格基準)
                  </th>
                  <td>
                    ファインダー使用時: 約700枚<br />
                    液晶モニター使用時: 約740枚
                  </td>
                  <td>
                    ファインダー使用時: 約430枚<br />
                    液晶モニター使用時: 約530枚
                  </td>
                  <td>
                    ファインダー使用時: 約620枚<br />
                    液晶モニター使用時: 約860枚
                  </td>
                  <td>ファインダー使用時: 約3580枚</td>
                </tr>
                <tr>
                  <th>連続動画撮影時間</th>
                  <td>
                    ファインダー使用時: 約170分<br />
                    液晶モニター使用時: 約170分
                  </td>
                  <td>
                    ファインダー使用時: 約145分<br />
                    液晶モニター使用時: 約150分
                  </td>
                  <td>約3時間10分</td>
                  <td>約105分</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>5軸補正 最大6.0段</td>
                  <td>5軸補正 5.5段</td>
                  <td>5軸補正 最大8段</td>
                  <td>レンズ内手振れ補正のみ</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約149×149.5×90.5mm</td>
                  <td>約128.9 x 96.9 x 80.8 mm</td>
                  <td>約150.0×142.6×87.2mm</td>
                  <td>約160×163×92mm</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約1160g</td>
                  <td>約652g</td>
                  <td>約822g</td>
                  <td>約1270g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    デュアルスロット<br />
                    CFexpressカード（Type B）、XQDカード
                  </td>
                  <td>
                    両対応デュアルスロット<br />
                    CFexpress(タイプA)<br />
                    SDカード
                  </td>
                  <td>
                    デュアルスロット<br />
                    CFexpressカード（Type B）/SD(sUHS-II 対応)
                  </td>
                  <td>
                    デュアルスロット<br />
                    CFexpressカード（Type B）、XQDカード
                  </td>
                </tr>
                <tr>
                  <th>動画</th>
                  <td>8K 30P/4K 120P</td>
                  <td>8K 30P/4K 120P</td>
                  <td>6K 60P/4K 120P</td>
                  <td>4K 30P/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--====== 予約・発売 ======-->
        <div v-if="!isShowAdvertisement">
          <!-- ↓ 価格・人気アクセサリー -->
          <subText :textItem="'ニコン Z 9 価格・人気アクセサリー'" />
          <product-list-by-special-id class="mb-5" :specialId="5453" />
        </div>

        <!-- ↓ 外観画像 -->
        <div id="images">
          <subText :textItem="'ニコン z_9 外観画像'" />
          <p class="text-subtitle-1">z_9 外観画像</p>
          <appearanceImage :src="'/ec/images2/special/camera/feature/nikon/z_9'" />
        </div>
        <!-- ↓ 作例画像 -->
        <div id="images">
          <subText :textItem="'ニコン z_9 作例画像'" />
          <p class="text-subtitle-1">▼ニコン z_9 作例</p>
          <exampleImages :path="'/ec/images2/special/camera/feature/nikon/z_9/'" :count="10" :type="2" />
        </div>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <kitamuraService />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice, isDebugMode, validationPeriod } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SpecialProductService from '@/logic/special-product.service';
import dayjs from 'dayjs';
import Notfound from '@/components/common/not-found.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';



export default Vue.extend({
  name: 'z_9',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId,
    appearanceImage: AppearanceImage,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    kitamuraService: KitamuraService,
    notfound: Notfound,
    characteristic: Characteristic,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    naviBtn: NaviBtn,
    expensiveTradeIn: ExpensiveTradeIn,
    splitContent: SplitContent,
    exampleImages: ExampleImages,
    watchInVideo: WatchInVideo,

  },
  setup: (props, context) => {
    const query = context.root.$route.query;
    document.title = 'ニコン Z 9 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Z 9  価格・発売日・スペック・お得な情報をチェック！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      // ↓ ---- 画面自体の表示制御 ----
      isShow: false,
      // ↓ ---- プレ掲載期間 ----
      advertisementValidFrom: '2021/10/29 11:30',
      advertisementValidTo: '2021/11/2 9:59',
      // ↓ ---- 予約掲載期間 ----
      reserveValidFrom: '2021/11/2 10:00',
      reserveValidTo: '2021/12/30 23:59',
      // ↓ ---- 発売掲載期間 ----
      releaseValidFrom: '2021/12/31 00:00',
      releaseValidTo: '2999/10/20 23:59',
      // ↓ ---- プレコンテンツを表示するかどうか ----
      isShowAdvertisement: false,
      // ↓ ---- 予約コンテンツを表示するかどうか ----
      isShowReserve: false,
      // ↓ ---- 発売コンテンツを表示するかどうか ----
      isShowRelease: false,
      // 表示期間外メッセージ
      errorMsg: '',

      naviList: [
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '作例', href: '#images' }
      ],
      reserveExpensiveTradeInList: {
        name: 'z_9 ',
        href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759149336&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/a51/43f/e0d/aea/a76/36c/722/54d/48c/405/51o/1li/rbg/k/M.jpg',
        txt: 'z_9 ',
        tradeInImg: '/ec/images2/special/camera/feature/nikon/z_9/reserve/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: 'ニコン D850 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759149336&pattern=1' },
          { name: 'ニコン D5 ボディ（CF-Type）', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759146212&pattern=1' },
          { name: 'ニコン D5 ボディ（XQD-Type）', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4548736058415&pattern=1' },
          { name: 'ニコン D6 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759903402&pattern=1' },
          { name: 'ニコン Z 6 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759901484&pattern=1' },
          { name: 'ニコン Z 7 ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759901088&pattern=1' },
          { name: 'ニコン Z 6II ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759905901&pattern=1' },
          { name: 'ニコン Z 7II ボディ', href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759905697&pattern=1' }
        ]
      },
      releaseExpensiveTradeInList: {
        name: 'z_9 ',
        href: 'https://www.net-chuko.com/sell/item-list.do?goodsname=4960759149336&pattern=1',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/a51/43f/e0d/aea/a76/36c/722/54d/48c/405/51o/1li/rbg/k/M.jpg',
        txt: 'z_9 ',
        tradeInImg: '/ec/images2/special/camera/feature/nikon/z_9/reserve/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
      commonCharacteristicList: [
        {
          subtitle: 'プロフェッショナルの厳しいニーズに応える進化したAF',
          contents: [
            'ニコン初となる120回/秒の高速AF演算やディープラーニング、Zマウントならではの高速AF情報通信により、高速連続撮影中でもランダムに動く被写体を正確に捉える高次元のAF追従性能を実現',
            '静止画でも動画でも世界最多19種類の被写体検出を実現。人物、犬、猫、鳥、車、バイク、自転車、列車、飛行機の検出が可能',
            'ニコンの一眼レフカメラで追尾性能が好評だった３D-トラッキングをZシリーズで初めて搭載。粘り強い追尾で最高の瞬間に集中できます',
          ]
        },
        {
          subtitle: '「決定的瞬間を捉えるための独自技術を搭載',
          contents: [
            '従来の電子ビューファインダーでは見られなかった瞬間や、一眼レフカメラのミラーアップによる像消失で見ることができなかった瞬間まで、そのすべてを表示するReal-LiveViewfinderを世界で初めて搭載',
            'ローリングシャッターによるひずみを極限まで抑制、積層型ニコンFXフォーマットCMOSセンサーはひずみを極限まで抑制する世界最速のスキャンレートを達成。メカシャッターの要らない構造を実現',
            'Z 7II比で約10倍の高速処理を実現する新画像処理エンジンEXPEED7を搭載。高性能なAF、約120コマ/秒のハイスピードフレームキャプチャ＋、8K UHD/30p内部記録、4K UHD/120pなど、先進的な機能を数多く提供',
            '明るい状況でも被写体をクリアーに確認できる世界最高輝度3000cd/m2対応のQuad-VGAパネル搭載',
            '画像モニターに4軸のチルト機構を採用。横位置では画面を上90度、下43度、縦位置では上90度、下23度傾けることができるため、多彩なアングルから撮影可能',
          ]
        },
        {
          subtitle: '進化した動画性能で静止画だけでなく動画でも史上最高機能・性能を実現',
          contents: [
            '効率的な放熱技術により世界最長2時間を超える内部記録で決定的瞬間を撮り逃さない最も実用的な8K UHD/30p動画撮影を実現',
            '4K UHD動画は、120pでも最大125分までの内部記録に対応し、［FXベースの動画フォーマット］フルフレームで撮影可能',
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
          linkUrl: '/ec/special/sale-fair/camera/feature',
          disabled: false
        },

        {
          path: 'ニコン Z 9',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759906168',],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759906168', '4548736130678', '4549292181661', '4960759903402',],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4548736134119',


      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 今日の日付が広告掲載期間よりも前かチェックする
     */
    const checkBeforePreperiod = async () => {
      const advertisementValidFrom = dayjs(state.advertisementValidFrom);
      console.log(advertisementValidFrom)
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        console.log(formatToday);

        if (formatToday.isBefore(advertisementValidFrom)) {
          state.errorMsg = '掲載準備中\n大変ご迷惑おかけしますが開始時間までお待ちください。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
    * 今日の日付が発売掲載期間よりも後かチェックする
    */
    const checkAfterReleaseperiod = async () => {
      const releaseValidTo = dayjs(state.releaseValidTo);
      try {
        const response = await SpecialProductService.getHealthCheck();
        const today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        const formatToday = dayjs(today)
        if (formatToday.isAfter(releaseValidTo)) {
          state.errorMsg = '該当ページは掲載期間が終了いたしました。'
        }
      } catch (error) {
        console.error(error);
      }
    }

    /**
     * 表示期間制御
     * @param from from日付
     * @param to to日付
     */
    const verifyDate = async () => {
      let today = '';
      try {
        const response = await SpecialProductService.getHealthCheck();
        today = isDebugMode() && query.date ? `${query.date}` : response.headers.date;
        if (validationPeriod(today, state.advertisementValidFrom, state.advertisementValidTo)) {
          state.isShowAdvertisement = true
        }
        if (validationPeriod(today, state.reserveValidFrom, state.reserveValidTo)) {
          state.isShowReserve = true
        }
        if (validationPeriod(today, state.releaseValidFrom, state.releaseValidTo)) {
          state.isShowRelease = true
        }
      } catch (error) {
        console.error(error);
        today = dayjs().toString();
      }
    };

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
    onMounted(async () => {
      await checkBeforePreperiod();
      if (!state.errorMsg) await checkAfterReleaseperiod();
      if (!state.errorMsg) {
        await verifyDate();
        await fetchProduct();
      }
      state.isShow = true
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>