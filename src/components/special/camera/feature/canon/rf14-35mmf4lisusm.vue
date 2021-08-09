<template>
  <v-app>
    <div class="rf14-35mmf4lisusm">
      <!-- ↓パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />

      <div class="main-contents-wrap">
        <!-- ↓ サンプル：画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/bg_top.jpg" @error="noimage" />

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">ご予約受付中！</span>
        </div>

        <div class="darken-2 text-left">
          <span>キヤノン RF14-35mm F4 L IS USM</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'焦点距離14mmの超広角撮影を実現し、最高水準の性能を追求した”L” レンズ'" />
        <subText :textItem="'キヤノン RF14-35mm F4 L IS USM 価格・ご予約'" />

        <v-card :id="index" class="credit line-g mt-10 mb-6 float-left" width="100%">
          <v-container>
            <v-row>
              <v-col class="text-center" cols="12" sm="5">
                <a href="/ec/pd/4549292186758"
                  ><img src="//shopimg.kitamura.jp/images/pd/275/0dc/d06/31f/132/baa/d08/7da/a00/ea0/7e1/2k1/l7k/0/M.jpg" class="mx100pr"
                /></a>
                <p>
                  <a :href="`/ec/pd/4549292186758`">キヤノン RF14-35mm F4 L IS USM</a>
                </p>
              </v-col>
              <v-col class="text-center mt-4" cols="12" sm="6">
                <p class="text-h6">価格<span class="text-h4 red--text">&yen;212,850&nbsp;</span><span class="font-small">(税込)</span></p>
                <v-btn
                  elevation="3"
                  x-large
                  dark
                  color="red"
                  class="text-h5 font-weight-bold accent-4"
                  height="55px"
                  width="65%"
                  :href="`/ec/pd/4549292186758`"
                >
                  <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                  ご予約はこちら
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <subText :textItem="'キヤノン RF14-35mm F4 L IS USM ご購入時、高価下取り実施中！'" />

        <v-container class="credit mt-10 mb-6 float-left">
          <v-row>
            <v-col class="text-center" cols="12" sm="5">
              <a href="/ec/pd/4549292186758"
                ><img src="https://shopimg.kitamura.jp/images/pd/2aa/33d/db1/b48/c71/a79/7db/feb/71d/d78/fat/j14/t87/s/L.jpg" width="100%"
              /></a>
              <p>
                <a :href="`/ec/pd/4549292186758`">キヤノン RF14-35mm F4 L IS USM</a>
              </p>
            </v-col>
            <v-col class="text-center mt-4" cols="12" sm="5">
              <p class="ma-0 pa-0 text-left font-small">
                キヤノン RF14-35mm F4 L IS USMをご購入時、<br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4549292009903&pattern=1" target="_blank">・EF16-35mm F4L IS USM</a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4549292010169&pattern=1" target="_blank">・EF11-24mm F4L USM </a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4549292037722&pattern=1" target="_blank">・EF16-35mm F2.8L III USM </a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4960999189949&pattern=1" target="_blank">・EF17-40mm F4L USM </a><br />
                <a href="https://www.net-chuko.com/sell/item-list.do?goodsname=4549292152272&pattern=1" target="_blank">・RF15-35mm F2.8 L IS USM </a><br />
                を買取査定額より<b
                  ><font color="#bf1a20"><font size="+2">20％UP</font></font></b
                >で下取り実施中です<br />
                ※店頭買取のみが対象です
              </p>
              <a
                href="https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&goodsname=EF16-35mm%20F4L%20IS%20USM&pattern=1&_ga=2.228045215.363482403.1626826033-801850090.1626826033"
              >
                <img src="/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/bnr_shitadori_350-130" alt="高値下取り実施中" @error="noimage" />
              </a>
              <p></p>
            </v-col>
          </v-row>
        </v-container>

        <subText :textItem="'キタムラなら48回まで分割金利手数料0円！'" />
        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4549292186758"
              ><img src="//shopimg.kitamura.jp/images/pd/275/0dc/d06/31f/132/baa/d08/7da/a00/ea0/7e1/2k1/l7k/0/M.jpg" width="80%"
            /></a>
            <br />
            キヤノン RF14-35mm F4 L IS USM<br /><span class="red--text">212,850</span>円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2021年6月29日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'4,435'" :commission="'0'" />
            <div class="text-center">
              <v-btn
                elevation="3"
                x-large
                dark
                color="red"
                class="accent-4"
                height="40px"
                width="85%"
                :href="`https://shop.kitamura.jp/sitemap/s_credit_01.html`"
              >
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!--特徴-->
        <subText :textItem="'キヤノン RF14-35mm F4 L IS USMの特徴'" id="point" />
        <characteristic :characteristics="characteristicList" />
        <!--特徴-->

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn elevation="3" class="black darken-4 white--text" height="70px" width="50%" :href="`https://cweb.canon.jp/eos/rf/lineup/rf14-35-f4l/`"
            >キヤノン メーカーサイトは<br />コチラから</v-btn
          >
        </div>

        <!--比較-->
        <subText
          :textItem="'キヤノン RF14-35mm F4 L IS USM / RF15-35mm F2.8 L IS USM / EF16-35mm F4L IS USM / シグマ 12-24mm F4 DG HSM Art 比較'"
          id="hikaku"
        />
        <div class="product-comparison mb-5">
          <p class="mb-2">キヤノン RF14-35mm F4 L IS USM / RF15-35mm F2.8 L IS USM / EF16-35mm F4L IS USM / シグマ 12-24mm F4 DG HSM Art を比較しました</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td>キヤノン RF14-35mm F4 L IS USM</td>
                <td>キヤノン RF15-35mm F2.8 L IS USM</td>
                <td>キヤノン EF16-35mm F4L IS USM</td>
                <td>シグマ 12-24mm F4 DG HSM Art キヤノン用</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2021年 9 月下旬発売予定</td>
                <td>2019年9月27日発売</td>
                <td>2014年6月19日発売</td>
                <td>2016年10月28日発売</td>
              </tr>
              <tr>
                <th>価格</th>
                <td class="price">&yen;212,850<span class="tx-10p">（税込）</span></td>
                <td class="price">&yen;272,250<span class="tx-10p">（税込）</span></td>
                <td class="price">&yen;128,130<span class="tx-10p">（税込）</span></td>
                <td class="price">&yen;167,950<span class="tx-10p">（税込）</span></td>
              </tr>
              <tr>
                <th>レンズ構成</th>
                <td>12群16枚</td>
                <td>12群16枚</td>
                <td>12群16枚</td>
                <td>11群16枚</td>
              </tr>
              <tr>
                <th>レンズコーティング</th>
                <td>SWC（Subwavelength Structure Coating）/ASC（Air Sphere Coating）</td>
                <td>SWC（Subwavelength Structure Coating）/ASC（Air Sphere Coating）</td>
                <td>フッ素コーティング</td>
                <td>スーパーマルチレイヤーコート/撥水防汚コート</td>
              </tr>
              <tr>
                <th>最短撮影距離</th>
                <td>20cm</td>
                <td>28cm</td>
                <td>28cm</td>
                <td>24cm</td>
              </tr>
              <tr>
                <th>最大撮影倍率</th>
                <td>0.38倍</td>
                <td>0.21倍</td>
                <td>0.23倍</td>
                <td>0.49倍</td>
              </tr>
              <tr>
                <th>フォーカス駆動</th>
                <td>超音波モーターナノUSM</td>
                <td>超音波モーターナノUSM</td>
                <td>リングUSM</td>
                <td>HSM</td>
              </tr>
              <tr>
                <th>絞り羽根（枚）</th>
                <td>9枚</td>
                <td>9枚（円形絞り）</td>
                <td>9枚</td>
                <td>9枚（円形絞り）</td>
              </tr>
              <tr>
                <th>フィルター径</th>
                <td>77mm</td>
                <td>82mm</td>
                <td>77mm</td>
                <td>-</td>
              </tr>
              <tr>
                <th>外寸 最大径ｘ長さ (mm)</th>
                <td>約84.1mm×99.8mm</td>
                <td>約88.5mm×126.8mm</td>
                <td>82.6mm×112.8mm</td>
                <td>102.0mm×131.5mm</td>
              </tr>
              <tr>
                <th>質量</th>
                <td>約540g</td>
                <td>約840g</td>
                <td>約615g</td>
                <td>1,150g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:キヤノン EOS R5｜航空写真家がスチル＆ムービーで徹底レビュー'" />
        <shasha :shashaData="shashaData" />

        <!-- ↓ 人気アクセサリー -->
        <subText :textItem="'キヤノン RF14-35mm F4 L IS USM 価格/人気アクセサリー'" />
        <v-container>
          <v-row v-if="productDetailList && productDetailList.length">
            <v-col cols="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
              <a :href="`/ec/pd/${productDetail.janCode}`"><img :src="productDetail.images[0].imagePath" class="mx100pr" /></a>
              <p class="font-small blue--text mb-2 height-20">
                <a :href="`/ec/pd/${productDetail.janCode}`">{{ productDetail.itemName }}</a>
              </p>
              <p class="mt-2">
                価格:<span class="red--text font-small">&yen;{{ productDetail.price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ 作例画像 -->
        <subText :textItem="'キヤノン RF14-35mm F4 L IS USM 作例画像'" />
        <exampleImages :imagesData="exampleImageList" />

        <facebookAndTwitter />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
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
import NaviBtn from '@/components/common/special/navi-btn.vue';
import SubText from '@/components/common/special/subtext.vue';
import ContingencyTable from '@/components/common/special/contingency-table.vue';
import Characteristic from '@/components/common/special/characteristic.vue';
import ShaSha from '@/components/common/special/shasha.vue';
import ExampleImages from '@/components/common/special/example-image.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'rf14-35mmf4lisusm',
  components: {
    breadcrumbs: Breadcrumbs,
    naviBtn: NaviBtn,
    subText: SubText,
    contingencyTable: ContingencyTable,
    characteristic: Characteristic,
    shasha: ShaSha,
    exampleImages: ExampleImages,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: 'お得情報', href: '#price' },
        { naviItem: '機種比較', href: '#hikaku' },
        { naviItem: '特徴', href: '#spec' },
        { naviItem: '作例画像', href: '#images' }
      ],
      characteristicList: [
        {
          subtitle: '超広角14mmから35mmの幅広いズーム域',
          contents: [
            'EF16-35mm F4L IS USMに比べて広角2mmのワイド化を実現。従来以上に広がりのある表現が可能',
            'Lレンズにふさわしい高画質を実現。ズーム全域で画面中心から周辺まで解像感の高いクリアな画像が撮影可能'
          ]
        },
        {
          subtitle: 'ズーム全域での高画質と小型・軽量を両立',
          contents: [
            'RFマウントの大口径・ショートバックフォーカスを生かした小型・軽量設計',
            '高性能レンズを含む12群16枚の光学設計と特殊コーティングSWC/ASC採用で高画質を実現'
          ]
        },
        {
          subtitle: 'レンズ単体で5.5段分、協調補正で7段の強力な手ブレ補正機構',
          contents: [
            '14mmの超広角域をカバーするレンズとして初めてCIPA基準約5.5段の光学手ブレ補正機構を搭載',
            'EOS R5との組み合わせでは、ボディ・レンズISの協調制御により約7段の手ブレ補正効果'
          ]
        }
      ],
      shashaData: [
        {
          text: 'キヤノンからフルサイズミラーレスカメラ用交換レンズの「RF14-35mm F4 L IS USM」を2021年9月下旬に発売するとアナウンスがありました。これでRFマウントの小三元が全て揃うことになります。\n本製品の魅力について、キヤノンマーケティングジャパン カメラ営業二部 営業第一課のご担当の方へインタビューしましたので...',
          href: 'https://shasha.kitamura.jp/article/482251290.html',
          src: '/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/shashabnr.jpg'
        }
      ],
      exampleImageList: [
        '/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/pic_01.jpg',
        '/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/pic_02.jpg',
        '/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/pic_03.jpg',
        '/ec/images2/special/camera/feature/canon/rf14-35mmf4lisusm/pic_04.jpg'
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
          href: '/sitemap/s_credit_01.htm',
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
          alt: 'トクトク買取'
        }
      ]
    };
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
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
          path: 'キヤノン RF14-35mm F4 L IS USM',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292186758'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
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