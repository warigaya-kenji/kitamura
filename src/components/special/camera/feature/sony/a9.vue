<template>
  <v-app>
    <div class="sony-a9">
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
          :padding="'20px 0px 0px 20px'"
          :topTitle="'SONY\nα9 [ILCE-9]'"
          :topTitleText="'進新次元の高速性能を実現した\n撮影表現の可能性を広げる\nフルサイズミラーレス一眼'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">好評発売中</span>
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :hoverColor="'#4080C0'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <subText :textItem="'SONY α9 [ILCE-9] ボディ 価格・人気アクセサリー/お得な情報'" id="price" />
        <p class="text-subtitle-1 font-weight-black">α9 [ILCE-9] ボディ 商品一覧</p>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="2758" />

        <!-- ↓ 高価買取画像とショッピングクレジット画像 -->
        <expensivePurchasesAndShoppingCreditImage
          :expensivePurchaseHref="'https://www.net-chuko.com/ec/sell/item-list?category=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&keyword=%CE%B17&maker=%E3%82%BD%E3%83%8B%E3%83%BC%EF%BC%88SONY%EF%BC%89&s2=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s3=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s4=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s5=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&s7=&n2c=&n3c=&n4c=%E6%8C%87%E5%AE%9A%E3%81%AA%E3%81%97&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort='"
          :expensivePurchaseSrc="'/ec/images2/special/camera/feature/sony/a9/bnr_shitadori_350-130.gif'"
        />

        <subText :textItem="'SONY α9 レビューレポート'" />
        <a href="/ec/special/general/photo_mono/sony_a9">
          <v-img
            src="https://shop.kitamura.jp/images/banner/4626.jpg"
            max-width="708"
            height="auto"
            alt="Vol.1 SONYα９｜驚愕の連写性能とAF追随！ SONY α９でブルーインパルスを撮る"
            class="hover mx-auto"
          ></v-img>
        </a>

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'SONY α9 [ILCE-9] ３大特徴'" />
          <characteristic :characteristics="characteristicList" />
        </div>
        <!--特徴-->

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'SONY α9 / キヤノン EOS-1D X MarkII / ニコン D5 比較'" />
          <div class="product-comparison mb-5">
            <p class="mb-2">「SONY α9」と「キヤノン EOS-1D X MarkII」「ニコン D5」を比較しました。</p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2017年5月26日発売</td>
                  <td>2016年4月28日発売</td>
                  <td>2016年3月26日発売</td>
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
                  <td>約2020万画素</td>
                  <td>約2082万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>Exmor RS CMOS</td>
                  <td>CMOS</td>
                  <td>CMOS</td>
                </tr>
                <tr>
                  <th>センサーサイズ</th>
                  <td>フルサイズ</td>
                  <td>フルサイズ</td>
                  <td>フルサイズ</td>
                </tr>
                <tr>
                  <th>マウント</th>
                  <td>ソニー FEマウント</td>
                  <td>キヤノン EFマウント</td>
                  <td>ニコン Fマウント</td>
                </tr>
                <tr>
                  <th>ボディ内手ブレ補正</th>
                  <td>○</td>
                  <td>×</td>
                  <td>×</td>
                </tr>
                <tr>
                  <th>シャッタースピード</th>
                  <td class="point">1/32000～30秒</td>
                  <td>1/8000-30秒</td>
                  <td>1/8000-30秒</td>
                </tr>
                <tr>
                  <th>AF測距点</th>
                  <td class="point">693点</td>
                  <td>61点</td>
                  <td>153点</td>
                </tr>
                <tr>
                  <th>連写性能</th>
                  <td class="point">約20コマ/秒</td>
                  <td>約14コマ/秒</td>
                  <td>約12コマ/秒</td>
                </tr>
                <tr>
                  <th>ISO感度</th>
                  <td>ISO100-51200<br />(拡張 下限ISO50、上限ISO204800)</td>
                  <td>ISO100-51200<br />（拡張ISO50/102400/204800/409600）</td>
                  <td>ISO100-102400<br />（拡張ISO50相当、3280000相当）</td>
                </tr>

                <tr>
                  <th>液晶サイズ</th>
                  <td>3.0型 タッチパネル対応</td>
                  <td>ワイド3.2型</td>
                  <td>3.2型 タッチパネル対応</td>
                </tr>
                <tr>
                  <th>液晶可動/固定</th>
                  <td class="point">可動</td>
                  <td>固定</td>
                  <td>固定</td>
                </tr>
                <tr>
                  <th>Wi-Fi/NFC</th>
                  <td class="point">Wi-Fi、NFC、Bluetooth搭載</td>
                  <td>非搭載</td>
                  <td>非搭載</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td class="point">約126.9×95.6×63mm</td>
                  <td>約158×167.6×82.6mm</td>
                  <td>約160×158.5×92mm</td>
                </tr>
                <tr>
                  <th>質量（バッテリー含む）</th>
                  <td class="point">673g</td>
                  <td>1550g</td>
                  <td>XQDタイプ：1405g<br />CFタイプ：1415g</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>ファインダー使用時 約480枚<br />液晶モニター使用時 約650枚</td>
                  <td>約1210枚</td>
                  <td>約3780枚</td>
                </tr>
                <tr>
                  <th>記録メディア</th>
                  <td>メモリースティック PRO デュオ/PRO-HG デュオ/マイクロ(M2),SD/SDHC/SDXC/microSD/<br />microSDHC/microSDXCメモリーカード</td>
                  <td>CFカード(タイプI準拠、UDMAモード7対応)、CFastカード(CFast2.0</td>
                  <td>XQDカード/CFカード<br />※メディア別モデルになります</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--比較-->

        <!-- ↓ 48回まで分割ー -->
        <div id="price"></div>
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent :ProductList="mainProductList[0]" :amount="'8,200'" :targetDate="''" :isCreditBtn="true" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'SONY α9 [ILCE-9] 外観画像'" />
          <p class="text-subtitle-1">SONY α9 [ILCE-9] の外観画像。レンズ装着イメージ</p>
          <appearanceImage :src="appearanceImagePath" :count="3" />
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
import AppearanceImage from '@/components/common/special/appearance-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import ExpensivePurchasesAndShoppingCreditImage from '@/components/common/special/expensivePurchasesAndShoppingCreditImage.vue';
import SplitContent from '@/components/common/special/split-content.vue';

export default Vue.extend({
  name: 'sony-a9',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    characteristic: Characteristic,
    appearanceImage: AppearanceImage,
    facebookAndTwitter: FacebookAndTwitter,
    naviBtn: NaviBtn,
    'product-list-by-special-id': ProductListBySpecialId,
    expensivePurchasesAndShoppingCreditImage: ExpensivePurchasesAndShoppingCreditImage,
    splitContent: SplitContent,
  },
  setup: () => {
    document.title = 'SONY フルサイズミラーレス一眼フラッグシップ 新製品 α9[ILCE-9] | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー フルサイズミラーレス新製品｢α9｣特集。ライバル機種との比較や価格・スペック・お得な情報をチェック！カメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')

    const state = reactive({
      pcBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a9/bg_top.jpg',
      spBackgroundImg: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/a9/sp_img_top.jpg',
      appearanceImagePath: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature//sony/a9',
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '外観画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '光を捉え続ける革新的な新イメージセンサーにより新次元の高速性能を実現',
          contents: [
            '読み出しスピードが従来機比20倍以上に高速化した、世界初メモリー内蔵35mmフルサイズ積層型CMOSイメージセンサーを搭載',
            '最高20コマ/秒の映像が途切れることなく連続撮影ができる「ブラックアウトフリー撮影」が可能',
            '大容量のバッファメモリーにより、20コマ/秒連写で圧縮RAW241枚/JPEG362枚の連続撮影が可能',
            '最高1/32000秒の歪みを極限まで抑えるアンチディスト－シ',
          ]
        },
        {
          subtitle: '緊張が高まる静かなシーンでも撮影できるサイレント撮影機能',
          contents: [
            '電子シャッターの使用により、サイレント撮影が可能。',
            '極限まで緊張が高まるスポーツシーンや野生動物の撮影など、シャッター音を伴う撮影が憚られるような場面でも撮影でき、無振動のため解像感への影響がなく高画質に撮影できます。',
          ]
        },
        {
          subtitle: 'プロの撮影現場でも活躍する機動性、操作性、信頼性',
          contents: [
            '673gの小型・軽量ボディに、静止画・動画ともに有効な最高5.0段のボディ内5軸手ブレ補正機構搭載',
            'メディア間の同時記録、振り分け記録、コピーなどが可能なSDカードスロット(UHS-II対応)とSD/MSカードスロット',
            '約369万画素 60fps/120fpsで表示可能な高精細・高輝度 Quad-VGA OLED Tru-Finder'
          ]
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
          path: 'ソニー α9',
          disabled: true
        }
      ],
      mainProductJanCode: ['4548736063945'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4548736063945', '4549292146851', '4960759146205'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
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
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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
td.point {
    background-color: #FFBFC0;
    font-weight: bold;
}
</style>