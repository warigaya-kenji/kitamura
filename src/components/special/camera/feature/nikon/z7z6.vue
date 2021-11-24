<template>
  <v-app>
    <div class="z7z6">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/feature/nikon/z7z6/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/feature/nikon/z7z6/sp_img_top.jpg'"
          :padding="'40px 0px 15px 30px'"
          :topTitle="'ニコン\nZ 7・Z 6'"
          :topTitleText="'新次元の光学性能を追求した\n「ニコンZ マウントシステム」誕生'"
          :titleColor="'#ffffff'"
          :textColor="'#ffffff'"
        />
        <!-- ↑top image -->

        <p class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ニコン Z 7、Z 6 好評発売中！</span>
        </p>

        <!-- ↓ ナビボタン -->
        <p class="text-left ma-0 pa-0 text-subtitle-2">ニコン Z 7・Z 6</p>
        <naviBtn :naviList="naviList" :color="'#D50003'" :hoverColor="'grey'" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn tile href="/ec/special/camera/feature/backnumber" color="black" class="kg-in main-product-btn"
            ><span class="white--text">≫ 話題の新製品バックナンバー</span></v-btn
          >
        </div>

        <!--特徴-->
        <subText :textItem="'「ニコン Z マウントシステム」とは'" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <!-- ↓ 価格・人気アクセサリー -->
        <div id="price">
          <subText :textItem="'ニコン Z 7・Z 6 価格/人気アクセサリー/お得な情報'" />
          <priceAndPopular :productDetailList="productDetailList" />
        </div>

        <v-row class="mt-8">
          <v-col cols="12" sm="6">
            <a
              href="/ec/sell/item-list?category=デジタル一眼レフ&keyword=D850&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=20&tokutoku=0&sort="
            >
              <v-img
                src="/ec/images2/special/camera/feature/nikon/z7z6/bnr_shitadori_350-130.png"
                alt="高価買取実施中"
                max-width="350px"
                max-height="130px"
                class="mx-auto hover"
              ></v-img>
            </a>
          </v-col>
          <v-col cols="12" sm="6">
            <a href="/ec/guide/s_credit_01">
              <v-img
                src="https://shopimg.kitamura.jp/images/banner/1486.gif"
                alt="ショッピングクレジット"
                max-width="350px"
                max-height="130px"
                class="mx-auto hover"
              ></v-img>
            </a>
          </v-col>
        </v-row>

        <v-row class="mt-7 pa-2">
          <v-col cols="12" sm="6">
            <v-sheet color="#aa0000" class="pa-1 white--text"
              >スペックシートにない良さが満載！ニコンZ 6は<br />
              良いカメラ！(筆者も欲しくなりました)</v-sheet
            >
            <p class="mt-2">
              「ShaSha（シャシャ）」は、「写(しゃ)真愛好者（しゃ）に、もっと写真を好きになってほしい」をコンセプトに、写真に関する様々な情報を掲載する写真の総合サイトです。
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <a href="https://shasha.kitamura.jp/article/466693094.html?ref=netshop_t" target="_brank">
              <v-img src="https://shop.kitamura.jp/images/banner/6518.jpg" alt="ShaSha Z 6" max-width="350px" max-height="130px" class="mx-auto hover"></v-img>
            </a>
          </v-col>
        </v-row>

        <v-row class="mt-7 pa-2">
          <v-col cols="12" sm="6">
            <v-sheet color="#aa0000" class="pa-1 white--text">ニコン初のフルサイズミラーレスカメラ「Z 7」を実際に触ってマニアが唸る理由が分かりました</v-sheet>
          </v-col>
          <v-col cols="12" sm="6">
            <a href="https://shasha.kitamura.jp/article/466101249.html?ref=netshop_t" target="_brank">
              <v-img src="https://shop.kitamura.jp/images/banner/6519.jpg" alt="Z7" max-width="350px" max-height="130px" class="mx-auto hover"></v-img>
            </a>
          </v-col>
        </v-row>

        <!--特徴-->
        <div id="spec">
          <subText :textItem="'ニコン Z 7・Z 6 特徴'" />
          <characteristic :characteristics="characteristicList2" />
          <span class="text-subtitle-2 ml-4"
            ><span class="red--text">※</span>「瞳AF」を使用するには、ファームウェアをVer.2.0にアップデートする必要があります。<a
              href="https://www.nikon-image.com/sp/z_firmware_update/"
              target="_blank"
              >詳しくはメーカーサイトをご確認ください</a
            ></span
          >
          <characteristic :characteristics="characteristicList3" />
        </div>
        <!--特徴-->

        <!-- ↓ 48回まで分割ー -->
        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <splitContent v-if="mainProductList.length !== 0" :ProductList="mainProductList[0]" :amount="'10,024'" :isCreditBtn="true" />

        <!--比較-->
        <div id="hikaku">
          <subText :textItem="'ニコン Z 7 / ニコン Z 6 / SONY α7R III / SONY α7 III 比較'" />
          <div class="product-comparison mb-5">
            <p class="pttex mb-2">
              <span class="bgtypetitle text-h6 font-weight-bold">『ニコン Z 7』『ニコン Z 6』と『ソニー α7R III』『SONY α7 III』の性能を比較しました。</span>
            </p>
            <table class="product-comparison-table">
              <tbody>
                <tr>
                  <th>商品名</th>
                  <td v-for="(product, index) in comparisonDetailList" :key="`second-${index}`">{{ product.itemName }}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>2018年9月28日発売</td>
                  <td>2018年11月23日発売</td>
                  <td>2017年11月25日発売</td>
                  <td>2018年3月23日発売</td>
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
                  <td>約4575万画素</td>
                  <td>約2450万画素</td>
                  <td>約4240万画素</td>
                  <td>約2420万画素</td>
                </tr>
                <tr>
                  <th>撮像素子</th>
                  <td>35.9×23.9mmサイズCMOSセンサー</td>
                  <td>35.9×23.9mmサイズCMOSセンサー</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                  <td>35mmフルサイズ裏面照射型CMOS</td>
                </tr>
                <tr>
                  <th>連続撮影速度</th>
                  <td>最高 約9コマ/秒</td>
                  <td>最高 約12コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                  <td>最高 約10コマ/秒</td>
                </tr>
                <tr>
                  <th>連続撮影可能枚数</th>
                  <td>ロスレス圧縮RAW(12bit):約23コマ<br />JPEG(FINE)：約25コマ</td>
                  <td>ロスレス圧縮RAW(12bit):約35コマ<br />JPEG(FINE)：約44コマ</td>
                  <td>RAW(非圧縮)：約28枚<br />JPEG：約76枚</td>
                  <td>RAW(非圧縮)：約40枚<br />JPEG：約163枚</td>
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
                  <td>64～102400</td>
                  <td>100～204800</td>
                  <td>50～102400</td>
                  <td>50～204800</td>
                </tr>
                <tr>
                  <th>測距点</th>
                  <td>493点</td>
                  <td>273点</td>
                  <td>位相差検出方式:399点<br />コントラスト検出方式:425点</td>
                  <td>位相差検出方式:693点<br />コントラスト検出方式:425点</td>
                </tr>
                <tr>
                  <th>撮影可能枚数</th>
                  <td>ファインダー使用時:約330枚<br />モニター使用時:約400枚</td>
                  <td>ファインダー使用時:約310枚<br />モニター使用時:約380枚</td>
                  <td>ファインダー使用時:約530枚<br />モニター使用時:約650枚</td>
                  <td>ファインダー使用時:約610枚<br />モニター使用時:約710枚</td>
                </tr>
                <tr>
                  <th>外形寸法</th>
                  <td>約134×100.5×67.5mm</td>
                  <td>約134×100.5×67.5mm</td>
                  <td>約126.9×95.6×63.0mm</td>
                  <td>約126.9×95.6×62.7mm</td>
                </tr>
                <tr>
                  <th>手ブレ補正</th>
                  <td>イメージセンサーシフト方式5軸補正 約5.0段</td>
                  <td>イメージセンサーシフト方式5軸補正 約5.0段</td>
                  <td>5軸補正 最大5.0段</td>
                  <td>5軸補正 最大5.0段</td>
                </tr>
                <tr>
                  <th>視野率</th>
                  <td>約100% / 約0.80倍</td>
                  <td>約100% / 約0.80倍</td>
                  <td>約100% / 約0.78倍</td>
                  <td>約100% / 約0.78倍</td>
                </tr>
                <tr>
                  <th>質量（本体のみ）</th>
                  <td>約585g</td>
                  <td>約585g</td>
                  <td>約572g</td>
                  <td>約565g</td>
                </tr>
                <tr>
                  <th>カードスロット</th>
                  <td>シングルスロット<br />XQDカード</td>
                  <td>シングルスロット<br />XQDカード</td>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                  <td>デュアルスロット<br />(slot1:UHS-II support)</td>
                </tr>
                <tr>
                  <th>動画記録方式</th>
                  <td>4KUHD/フルHD</td>
                  <td>4KUHD/フルHD</td>
                  <td>4K/フルHD/HD</td>
                  <td>4K/フルHD/HD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--比較-->

        <!-- ↓ 作例画像 -->
        <subText :textItem="'ニコン Z 7 作例画像'" />
        <exampleImages :path="'	/ec/images2/special/camera/feature/nikon/z7z6/'" :count="6" />

        <!--外観画像ー-->
        <div id="images">
          <subText :textItem="'ニコン Z 7・Z 6 外観画像'" />
          <p class="text-subtitle-1">ニコン Z7 Z6 の外観画像。レンズ装着イメージ</p>
          <v-row justify="center">
            <v-col v-for="n in 9" :key="n" cols="12" :sm="4" class="caption text-center">
              <v-img :src="`/ec/images2/special/camera/feature/nikon/z7z6/img_${n}.jpg`" max-width="296px" max-height="222px" class="mx-auto" />
              <p class="mb-0" v-if="n === 4">▲Z 7 NIKKOR Z 24-70mm f4 S 装着時</p>
              <p class="mb-0" v-else-if="n === 6">▲Z 7 Z 6 NIKKOR Z 24-70mm f4 S 装着時</p>
              <p class="mb-0" v-else-if="n === 9">▲Z 7 マウントアダプタ FTZ 装着時</p>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col v-for="n in 2" :key="n" cols="12" :sm="6" class="caption text-center">
              <v-img :src="`/ec/images2/special/camera/feature/nikon/z7z6/img_${n + 9}.jpg`" max-width="455px" max-height="260px" />
              <p class="mb-0" v-if="n === 1">▲Z 7 マウントアダプタ FTZ + AF-S NIKKOR 24-70mm f2.8E ED VR 装着時</p>
            </v-col>
          </v-row>
        </div>

        <v-row justify="center" class="mb-8">
          <v-col cols="10" sm="6">
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                :elevation="hover ? 8 : 2"
                color="#ff0000"
                class="main-product-btn"
                height="52px"
                href="/ec/list?narrow18=0&keyword=ニコン%20Z%207&category=&index=&sort=number20,number19,Score&searchbox=1&s1%5B%5D=ニコン&q=ニコン%20Z%207&path=&range_member_price=390000_"
              >
                <span class="white--text text-sm-subtitle-1 text-center">ニコン Z 7 商品一覧を見る</span>
              </v-btn>
            </v-hover>
          </v-col>
          <v-col cols="10" sm="6">
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                :elevation="hover ? 8 : 2"
                color="#ff0000"
                class="main-product-btn"
                height="52px"
                href="/ec/list?narrow18=0&keyword=ニコン%20Z%206&category=ミラーレス一眼&index=&sort=number20,number19,Score&searchbox=1&q=ニコン%20Z%206&path=ミラーレス一眼&range_member_price=200000_340000"
              >
                <span class="white--text text-sm-subtitle-1 text-center">ニコン Z 6 商品一覧を見る</span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

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
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SplitContent from '@/components/common/special/split-content.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
export default Vue.extend({
  name: 'z7z6',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    subText: SubText,
    splitContent: SplitContent,
    characteristic: Characteristic,
    priceAndPopular: PriceAndPopular,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn,
    kitamuraService: KitamuraService,
    exampleImages: ExampleImages,
  },
  setup: (props, context) => {
    document.title = 'ニコン Z 7・Z 6／ニコン初のフルサイズミラーレス一眼 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ニコン Z 7・Z 6好評発売中！新次元の光学性能を追求した「ニコンZ マウントシステム」。比較や、価格・スペック・お得な情報をチェック！最大48回まで分割金利手数料0円！新製品ならカメラのキタムラにおまかせください！')

    const state = reactive({
      naviList: [
        { naviItem: 'お得な情報', href: '#price' },
        { naviItem: '特徴スペック', href: '#spec' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '外観画像', href: '#images' }
      ],
      expensiveTradeInList: {
        name: '富士フイルム X100F',
        href: 'https://www.net-chuko.com/ec/sell/item-list?category=&keyword=X100F&maker=&s2=&s3=&s4=&s5=&s7=&n2c=&n3c=&n4c=&n5c=&n6c=&n1c=&limit=&tokutoku=0&sort=',
        nameImg: 'https://shopimg.kitamura.jp/images/pd/23d/03a/38b/025/e97/5f1/92f/9d7/871/ee7/59b/8ob/laj/r/L.jpg',
        txt: '富士フイルム X100V',
        tradeInImg: ' /ec/images2/special/camera/feature/fujifilm/bnr_shitadori_350-130.jpg',
        tradeInProducts: [
          { name: '富士フイルム X100F', href: '' },
          { name: 'リコーGRIII', href: '' },
          { name: 'Leica D-LUX7', href: '' },
        ]
      },
      characteristicList: [
        {
          subtitle: '大口径の新マウント採用のミラーレスカメラ、それに対応するNIKKOR Z レンズ・アクセサリーで構成するシステム',
          contents: [
            'NIKKOR Z レンズは、大口径の新マウントの採用により、レンズ設計の自由度が格段に上がり、光学性能の驚異的な向上を実現しました。',
            'ニコン史上最高の開放F値0.95の極めて明るいレンズなど、多彩な高性能レンズが今後提供される予定です。',
            '「マウントアダプターFTZ」を使用することで、豊富なレンズバリエーションを誇るNIKKOR F レンズが使用可能です。'
          ]
        },
      ],
      characteristicList2: [
        {
          subtitle: '像面位相差AF画素を搭載した新開発の裏面照射型ニコンFXフォーマットCMOSセンサー',
          contents: [
            '「Z 7」「Z 6」ともに、像面位相差AF画素搭載の裏面照射型CMOSセンサーを採用',
            '「Z 7」は、有効画素数4575万画素と高画素ながら、常用感度ISO 64～25600を達成',
            '「Z 6」は、有効画素数2450万画素で、ISO 100～51200の幅広い常用感度域を実現'
          ]
        },
        {
          subtitle: 'ハイブリッドAFと瞳AFで、素早く高精度なピント合わせを実現',
          contents: [
            '「Z 7」は493点、「Z 6」は273 点のフォーカスポイントが、撮像範囲の水平、垂直約90%という広い範囲をカバー',
            'FXフォーマットセンサーに最適化したアルゴリズムで、像面位相差AFとコントラストAFを自動的に切りかえてピントを合わせます',
            '顔の手前に障害物がある場合や動きのある人物でも、追尾する瞳AF機能※を新搭載'
          ]
        },
      ],
      characteristicList3: [
        {
          subtitle: '解像感の高い画作りを実現する新画像処理エンジン「EXPEED 6」と、映像表現をサポートする新機能',
          contents: [
            '「Z 7」「Z 6」は、新画像処理エンジン「EXPEED 6」を搭載',
            'NIKKORレンズが持つ高い解像力を最大限に活用し、被写体をシャープに描写します。',
            '独創的な表現を可能にする、全20種類の「Creative Picture Control」を搭載'
          ]
        },
        {
          subtitle: '約5.0段の高い効果を発揮する、ニコン初のカメラ内センサーシフト式手ブレ補正',
          contents: [
            '「Z 7」「Z 6」ともに、カメラ内手ブレ補正（VR）を搭載',
            '手ブレ補正ユニットを5軸に駆動させて補正し、シャッタースピード最大5.0段分の高い補正効果が得られます',
            '「マウントアダプターFTZ」を介してVR 非搭載レンズを含むNIKKOR Fレンズ使用時にも効果を発揮'
          ]
        },
        {
          subtitle: 'ニコンの優れた光学技術と画像処理プロセスによる、クリアーで自然な見えを提供する電子ビューファインダー',
          contents: [
            '約369万ドット、有機ELパネルを採用した電子ビューファインダー搭載、視野率約100％、ファインダー倍率0.8倍、対角視野角約37.0°',
            'ニコンの高い光学技術を活かした光学系の採用と、画像処理プロセスにより、歪みが少なく隅々までクリアーで自然な見えを実現',
            '接眼保護窓には、汚れの付着やフレア、ゴーストを防ぐフッ素コート採用'
          ]
        },
      ],
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
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
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
          alt: 'トクトク買取',
          target: 'blank'
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
          path: 'ニコン Z 7・Z 6',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759901095'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759901088', '4960759901484', '4548736075139', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4960759901088',
        '4960759901101',
        '4960759901118',
        '4960759901095',
        '4960759901095',
        '4960759901507',
        '4960759901514',
        '4960759901491',
        '4960759149534',
        '4960759149862',
        '4960759900067',
        '4955478180531',
        '4955478180524',
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
.bgtypetitle {
  background-color: #ffffcc;
}
</style>