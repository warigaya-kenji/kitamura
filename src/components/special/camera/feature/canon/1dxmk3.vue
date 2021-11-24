<template>
  <v-app>
    <div class="1dxmk3">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="pcBackgroundImg"
          :spBackgroundImg="spBackgroundImg"
          :topTitle="'キヤノン EOS-1D X Mark III'"
          :topTitleText="'新開発フルサイズCMOSセンサー搭載！\nさらに進化を遂げたフラッグシップEOS'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
          :padding="'40px 0px 15px 30px'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キヤノン EOS-1D X Mark III<br />ご好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">キヤノンEOS-1D X Mark III</p>
        <naviBtn :naviList="naviList" :hoverColor="'grey'" :color="'#D50003'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'進化を遂げたフラッグシップ「EOS-1D X Mark III」登場！'" />
        <p class="text-subtitle-1 font-weight-bold">プロの撮影現場に求められる高い性能と信頼性を備えた「EOS-1」シリーズの最新モデル</p>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'EOS-1D X Mark III'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'新開発フルサイズCMOSセンサー搭載！さらに進化を遂げたフラッグシップEOS'"
        />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'キヤノン EOS-1D X Mark III / キヤノン EOS-1D X MarkII / ニコン D5 / ソニーα9II 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">キヤノン EOS-1D X Mark III / キヤノン EOS-1D X MarkII / ニコン D5 / ソニーα9II の性能を比較しました。</p>
            <table class="product-comparison-table spec">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2020年2月14日発売</td>
                  <td>2016年4月28日発売</td>
                  <td>2016年3月26日発売</td>
                  <td>2019年11月1日発売</td>
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
                  <td>約2010万画素</td>
                  <td>約2020万画素</td>
                  <td>約2082万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>
                    35mmフルサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    35mmフルサイズ<br />
                    CMOSセンサー
                  </td>
                  <td>
                    ニコンFXフォーマット<br />
                    CMOSセンサー
                  </td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>
                    ファインダー：最高約16コマ/秒<br />
                    ライブビュー：最高約20コマ/秒
                  </td>
                  <td>最高 約16コマ/秒</td>
                  <td>最高 約14コマ/秒</td>
                  <td>最高20コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>
                    1000枚以上<br />
                    ※RAW+HEIF時は約350枚、C-RAW+HEIF時は、約420枚
                  </td>
                  <td>
                    RAW(非圧縮)：約170枚<br />
                    JPEG：カードの空き容量まで
                  </td>
                  <td>
                    RAW(非圧縮)：約200枚<br />
                    JPEG：約200枚
                  </td>
                  <td>
                    RAW(非圧縮)：約239枚<br />
                    JPEG：約361枚
                  </td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                  <td>1/8000-30秒、バルブ</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>
                    ISO100-102400<br />
                    （拡張ISO50相当、819200相当）
                  </td>
                  <td>
                    ISO100-51200<br />
                    （拡張ISO50相当、409600相当）
                  </td>
                  <td>
                    ISO100-102400<br />
                    （拡張ISO50相当、3280000相当）
                  </td>
                  <td>
                    ISO100-51200<br />
                    （拡張ISO50、204800）
                  </td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>191点</td>
                  <td>61点</td>
                  <td>153点</td>
                  <td>位相差検出方式:693点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>
                    ファインダー使用時:約2850枚<br />
                    ライブビュー撮影時:約610枚
                  </td>
                  <td>
                    ファインダー使用時:約1210枚<br />
                    ライブビュー撮影時:約260枚
                  </td>
                  <td>約3780コマ</td>
                  <td>
                    ファインダー使用時:約500枚<br />
                    モニター使用時:約690枚
                  </td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約158.0×167.6×82.6mm</td>
                  <td>約158.0×167.6×82.6mm</td>
                  <td>約160×158.5×92mm</td>
                  <td>約128.9×96.4×77.5mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>
                    X (レンズ内手振れ方式)<br />
                    動画撮影時5軸補正 動画電子IS
                  </td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>X (レンズ内手振れ方式)</td>
                  <td>5軸補正 最大5.5段</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.76倍</td>
                  <td>約100% / 約0.72倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約1250g</td>
                  <td>約1340g</td>
                  <td>
                    XQDモデル：約1235g<br />
                    CFモデル：約1240g
                  </td>
                  <td>約593g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>
                    デュアルスロット<br />
                    CFexpressメモリーカード（タイプB）
                  </td>
                  <td>
                    デュアルスロット<br />
                    CFカード(タイプI準拠、UDMAモード7対応)、CFastカード(CFast2.0）
                  </td>
                  <td>
                    ダブルスロット<br />
                    XQDカード/CFカード<br />
                    ※メディア別モデルになります
                  </td>
                  <td>
                    デュアルスロット<br />
                    (slot1:UHS-II support)
                  </td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!--特徴-->
        <div id="point">
          <subText :textItem="'キヤノン EOS-1D X Mark IIIの特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <v-row>
          <v-col cols="12" sm="6" v-for="(n, i) in 4" :key="i">
            <v-img :src="`/ec/images2/special/camera/feature/canon/1dxmk3/img_${n + 4}.jpg`" max-width="400" max-height="400"></v-img>
          </v-col>
        </v-row>

        <!-- ↓ 仕様・作例ボタンー -->
        <specificationsExamplesBtn
          :btntxt="'メーカーサイトで仕様・作例を詳しく見る'"
          :url="'https://cweb.canon.jp/eos/lineup/1dxmk3/index.html'"
          :height="'50px'"
        />

        <!--動画で見る-->
        <subText :textItem="'動画で見る！キヤノン 1DXMarkIIIをタッチ＆トライ！'" />
        <p>キヤノン 1DXMarkIIIをタッチ＆トライ！キヤノンさんに突撃取材しました</p>
        <watchInVideo :src="'https://www.youtube.com/embed/WhJSQsS6A2Q?rel=0'" :height="315" />

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'キヤノン 1DXMarkIII 価格/人気アクセサリー'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <specificationsExamplesBtn
          :btntxt="'キヤノン EOS-1D X Mark IIIご購入はこちら'"
          :url="'/ec/pd/4549292146851'"
          :color="'red darken-3'"
          :height="'50px'"
        />

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha キヤノン EOS-1D X Mark III レビュー・作例を見る'" />
        <shasha
          :txt="'待望のフラッグシップ機EOS-1D X Mark IIIが登場し、どれだけ凄いのか楽しみで手元に届くのを待ち遠しく感じていました。手元に届いた本機の箱をいざ開けてみると、一見して前機種のEOS-1D X Mark IIにそっくりで、最初はあまり新しい機種を手にした感じがしませんでした（笑）。手にとってみるとボタンの位置なども、ほとんど変わらないように感じ、前機種を使い続けてきた筆者にとって慣れた操作性はとても有難いものでした。  連写スピードが2コマ／秒速くなり、高感度が1段良くなったというところは野生動物を撮影する筆者にとって、とても期待するところです。今回少し意外だったのは...'"
          :href="'https://shasha.kitamura.jp/article/473987342.html?ref=netshop'"
          :src="'/ec/images2/special/camera/feature/canon/1dxmk3/3shashabnr.jpg'"
        />
        <shasha
          :txt="'頂点性能をまとう究極の一眼レフカメラとして発売されたEOS-1D X MarkIII。今回もキヤノンのフラッグシップ一眼レフカメラらしく、また「1」の名に恥じない究極の性能を身にまとい誕生しました。飛行機撮影を含め、スポーツや野鳥撮影など動体撮影はまだまだ一眼レフカメラの方が有利、かつ確実性の高い場面が多く、まさにこれらの被写体を主として撮影する者にとっては待望の一台。各社ミラーレスカメラに力を入れる現在、よくぞこれだけの一眼レフ機を出してくれたと嬉しくなりました。そんなEOS-1D X MarkIIIを飛行機撮影の現場に持ち出しインプレッション。動きのあるシーンや露出差の厳しいシーンなどで使用し、そのポテンシャルを確認してきました。...'"
          :href="'https://shasha.kitamura.jp/article/473795461.html?ref=netshop'"
          :src="'/ec/images2/special/camera/feature/canon/1dxmk3/2shashabnr.jpg'"
        />
        <shasha
          :txt="'キヤノンからEOS-1D X Mark IIIが発表されました。 EOS-1D Xシリーズといえば、キヤノン一眼レフカメラの中でも動体撮影性能が非常に高く、堅牢性を持つことからフラッグシップに位置付けられているモデルです。 オリンピックの時期に合わせて発売される傾向が強いため、大会の年が近づくと「どんなカメラができるんだろう？」と思われる方もいらっしゃるかと思います。 その性能の高さからプロのスポーツカメラマンをはじめ、動物や乗り物を撮影される方々から絶大な支持を得ており、オリンピックをはじめ、昨年日本中が盛り上がったラグビーの大会などでは歴史的な瞬間を収めてきました。 本機種は昨年に開発発表をされていたので、どのような性能なのか気になる方も多いのではないでしょうか？そこで、今回も品川にあるキヤノンプラザSに行ってタッチ&トライをしてきましたので、ぜひご覧ください。...'"
          :href="'https://shasha.kitamura.jp/article/473004281.html?ref=netshop'"
          :src="'/ec/images2/special/camera/feature/canon/1dxmk3/bnr_shasha.jpg'"
        />

        <!--====== 高価下取り ======-->
        <subText :textItem="'キタムラ特典：キヤノン 1DXMarkIIIをご購入時、キヤノン EOS 1D X MarkII高値下取り実施中！'" />
        <expensiveTradeIn :expensiveTradeInList="expensiveTradeInList" :type="2" />

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラ特典：キタムラなら最大60回まで分割金利手数料0円！'" />
        <splitContent
          :ProductList="mainProductList[0]"
          :maximumInstallmentPayment="'60'"
          :numberOfTimes="'48'"
          :amount="'16,500'"
          :targetDate="'2020年１月7日'"
          :isCreditBtn="true"
        />

        <subText :textItem="'キタムラ特典：EOS 1DX MarkIII プロカメラマンが教える使い方講座参加チケットプレゼント'" />
        <p class="text-center my-2 font-weight-bold text-subtitle-1">キャンペーンは終了しました</p>
        <h4 class="sbtext4">キャンペーン概要</h4>
        <p class="pttex1">
          Canon EOS-1DX MarkIIIを発売までにご予約いただくと、 プロカメラマンが教える使い方講座にご参加いただけます<br />開催都市:
          北海道・仙台・東京・名古屋・大阪・福岡 ※会場は参加受付店舗よりご案内いたします
        </p>
        <h4 class="sbtext4">キャンペーン対象</h4>
        <p class="pttex1">
          下記条件を満たした方全員<br />・キャンペーン期間中にカメラのキタムラ店頭またはネットショップにてCanon EOS-1DX MarkIIIをご予約<br />・応募期間中に最寄りのカメラのキタムラ店頭にて参加受付
        </p>
        <h4 class="sbtext4">キャンペーン期間（商品ご注文期間）</h4>
        <p class="pttex1">2020年1月7日～２月13日（日）まで</p>
        <h4 class="sbtext4">応募期間・応募方法</h4>
        <p class="pttex1">
          ・発売日～2020年5月31日（日）<br /><br />商品をお渡し時に、参加券、専用の申込用紙をお渡し・同梱いたします。<br />必要事項をご記入の上、お近くの店頭にてお申込みください。<br />※申し込み受付は店頭のみとなります予めご了承ください
        </p>
        <h4 class="sbtext4">お問い合わせ</h4>
        <p class="pttex1">
          本キャンペーンに関するお問い合わせについて<br />カメラのキタムラ お客さまなんでも相談室<br />050-3116-8888<br />受付時間：10：00－20：00<br />通話料はお客さま負担になります
        </p>

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'キヤノン 1DXMarkIII 外観画像'" />
          <p class="text-subtitle-1">キヤノン 1DXMarkIIIの外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="'https://shop.kitamura.jp/ts_rsc/1322/images'" :sm="'6'" :maxWidth="400" />
        </div>

        <br />

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
import ExpensiveTradeIn from '@/components/common/special/expensive-trade-in.vue';
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SplitContent from '@/components/common/special/split-content.vue';

export default Vue.extend({
  name: '1dxmk3',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    expensiveTradeIn: ExpensiveTradeIn,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    specificationsExamplesBtn: SpecificationsExamplesBtn,
    characteristic: Characteristic,
    shasha: ShaSha,
    priceAndPopular: PriceAndPopular,
    priceAndPurchase: PriceAndPurchase,
    watchInVideo: WatchInVideo,
    splitContent: SplitContent,
  },
  setup: (props, context) => {
    document.title = '新製品！キヤノン EOS-1D X Mark III 好評発売中 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'キヤノン 1DXMarkIII 好評発売中！比較や、価格・スペック・お得な情報をチェック！最大60回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')
    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk3/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/canon/1dxmk3/sp_img_top.jpg',
      naviList: [
        { naviItem: '特徴スペック', href: '#point' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: 'キタムラ特典', href: '#price' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '新開発のフルサイズCMOSセンサー＆映像エンジン搭載で基本性能が大幅に向上',
          contents: [
            'CMOSセンサーの低ノイズ化と「DIGIC X」によるノイズリダクション性能の向上で、常用ISO感度最高102400まで拡大。暗所でもノイズを抑えた撮影が可能',
            'AF・AE（自動露出制御）追従時でも、光学ファインダー撮影時、最高約16コマ/秒ライブビュー撮影時、最高約20コマ/秒の高速連写を実現',
            '新開発の16点分離ローパスフィルター搭載で従来機種より解像感が向上。斜め方向の色モアレや縦横方向の輝度モアレも効果的に抑制'
          ]
        },
        {
          subtitle: '新開発のAFセンサーとAFアルゴリズムによる高精度AFを実現',
          contents: [
            'さらに進化した新ミラー駆動システムにより、光学ファインダーにおける像消失時間を短縮。被写体を追いやすいファインダー視野を実現',
            '正方画素を高密度に配置した最大191点（クロス測距点最大155点）の測距点により、高い合焦精度を実現し、AF測距輝度範囲が拡大',
            'ディープラーニング技術を用いて開発した頭部検出アルゴリズムにより、顔や瞳が検出できないときでも安定した追尾を実現',
            'ライブビュー撮影時は、被写体の瞳を検出してフォーカスを合わせる「瞳AF」も併用可能'
          ]
        },
        {
          subtitle: 'プロのニーズに対応した通信機能、動画性能',
          contents: [
            '携帯端末へのWi-Fi／Bluetooth®による接続対応。またGPS機能も搭載し、プロが求める効率的な画像管理が可能',
            '有線LAN機能で高速インターフェースを採用し、従来機種より高速に画像データの転送が可能',
            'YCbCr 4：2：2／10bit／Canon Logに対応。階調と色彩の再現性に優れた動画の内部記録が可能'
          ]
        },
        {
          subtitle: 'フラッグシップ機ならではの優れた耐久性と新機能',
          contents: [
            'CMOSセンサーの低ノイズ化と「DIGIC X」によるノイズリダクション性能の向上で、常用ISO感度最高102400まで拡大。暗所でもノイズを抑えた撮影が可能',
            '指の動きを光学的に検知する「スマートコントローラー」を新導入。ボタンから指を離さずに、AF測距点位置の設定が可能',
            'CFexpress用のダブルスロットを搭載。書き込み速度の向上と、RAW＋JPEGでも余裕ある連続撮影可能枚数を実現',
            '電源には「バッテリーパックLP-E19」を使用。電力消費マネジメントの見直しにより、撮影可能枚数が約2,850枚に増加'
          ]
        }
      ],
      expensiveTradeInList: {
        name: 'EOS 1D X MarkII',
        href: '/ec/sell/item-list?category=&keyword=4549292060485&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=add_date',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/acb/a38/5f3/aff/d16/659/85f/665/1c9/68c/b9b/dty/10a/6/L.jpg',
        txt: 'キヤノン EOS 1DXMarkIII',
        tradeInImg: '/ec/images2/special/camera/feature/canon/1dxmk3/bnr_shitadori_350-130.jpg',
        tradeInProducts: []
      },
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
          path: 'キヤノン EOS 1D X Mark III',
          disabled: true
        }
      ],
      mainProductJanCode: ['4549292146851'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292146851', '4549292060485', '4960759146205', '4548736108288'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292146851',
        '4523052020513',
        '4549292148015',
        '4549292060553',
        '4549292060584',
        '4549292068412',
        '4549292066050',
        '4960999581576',
        '4549292059434',
        '4960999780719',
        '4549292118513',
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

<style scoped>
h4.sbtext4 {
    margin: 40px 0px 10px 0px;
    padding: 0px 0px 0px 10px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 600;
    border-bottom: dashed 1px #6594e0;
    color: #151515;
    line-height: 1.3em;
}
p.pttex1 {
    margin: 15px 0px 8px 5px;
    font-size: 16px;
}
</style>