<template>
  <v-app>
    <div class="campaign">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <p class="pl-4">スタッフのイチオシ | カメラ・カメラ用品・家電 集めました</p>

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/general/highly_recommended/bg_top.jpg'"
          :spBackgroundImg="'/ec/images2/special/general/highly_recommended/sp_img_top.jpg'"
          :type="2"
          :height="'130'"
        />
        <!-- ↑top image -->
        <!--====== ↓イチオシメイン商品 ======-->
        <subText :textItem="'新着！ソニー αユーザーにおすすめ タムロン 28-200mm F/2.8-5.6 Di III RXD'" />
        <v-container class="line-g">
          <v-row>
            <v-col cols="12" sm="6">
              <a href="/ec/special/general/highly_recommended/2020/4925">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img :src="mainProductList[0].images[0].imagePath.replace(/TN/g, 'M')" max-width="80%" height="auto"></v-img>
                </div>
                <p class="main-product-name text-center">{{ mainProductList[0].itemName }}</p>
              </a>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="pt-2 pr-2">
                1本で広角から望遠までカバーする、フルサイズミラーレス用オールマイティレンズ。高倍率ズームレンズとしては初めてとなる広角側
                F値2.8からの明るさと、質量575g軽量コンパクトボディで「高画質」と「便利」を両立。旅行時、このレンズだけで...
                <a href="/ec/special/general/highly_recommended/2020/4925">続きを見る</a>
              </p>
              <p class="text-center">
                価格<span class="red--text text-h4 mx-2">&yen;{{ formatPrice(parseInt(mainProductList[0].price)) }}&nbsp;</span
                ><span class="font-small">(税込)～</span>
              </p>
              <v-btn block class="bg-redgr" height="50px"
                ><v-icon color="white">fas fa-chevron-right</v-icon><span class="white--text text-h6 font-weight-bold mx-2">イチオシ記事を読む</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <!--====== ↑イチオシメイン商品 ======-->
        <!--↓バックナンバー-->
        <subText :textItem="'スタッフイチオシ！バックナンバー '" :smallTxt="'※販売終了の商品がございます。あらかじめご了承ください'" />
        <p class="text-subtitile-2">下記ボタンより絞り込む事ができます</p>
        <div class="category-nav">
          <v-container fluid>
            <v-row :justify="$vuetify.breakpoint.mdAndUp ? 'center' : 'left'">
              <v-col cols="6" sm="2" v-for="narrowing in narrowingList" :key="narrowing.value" class="pa-1">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    :elevation="hover ? 2 : 10"
                    :color="hover ? '#ff0c00' : '#de1b27'"
                    block
                    v-model="category"
                    :value="narrowing.value"
                    @click="searchByCategory(narrowing.value)"
                  >
                    <span class="white--text">{{ narrowing.categoryName }}</span>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <v-container class="individual my-6">
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(campaign, index) in filterByCategory" :key="index">
              <v-hover v-slot="{ hover }">
                <v-expand-transition>
                  <v-card :elevation="hover ? 10 : 2">
                    <a :href="campaign.href">
                      <div class="d-flex flex-column justify-space-between align-center">
                        <v-img :src="campaign.src" max-width="50%" class="hover"></v-img>
                      </div>
                      <span class="item-name text-subtitle-2">{{ campaign.productName }}</span>
                    </a>
                  </v-card>
                </v-expand-transition>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { computed, onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'highly_recommended',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: () => {
    document.title = 'スタッフのイチオシ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スタッフのイチオシ バックナンバー一覧')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフのイチオシ',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960371006703'],
      mainProductList: [] as Array<ProductDetail>,
      category: 'all',
      narrowingList: [
        { categoryName: '新着', value: 'new' },
        { categoryName: 'カメラ/レンズ', value: 'camera' },
        { categoryName: 'カメラ用品', value: 'cameraacce' },
        { categoryName: 'その他', value: 'hoka' },
        { categoryName: '全て', value: 'all' },
      ],
      backnumberList: [
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4914",
          src: "https://shopimg.kitamura.jp/images/pd/229/434/f73/dda/dfc/6d4/064/a1d/01c/c9e/99i/mfw/lrb/c/L.jpg",
          productName: 'Gマスターならではの高解像 ソニー FE 24mm F1.4 GM',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4909",
          src: "https://shopimg.kitamura.jp/images/pd/f10/917/6d9/833/f5f/dac/d06/945/009/812/68h/ku6/eu7/f/L.jpg",
          productName: '動画に強い小型・軽量のミラーレス パナソニック LUMIX DC-S5',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4866",
          src: "https://shopimg.kitamura.jp/images/pd/640/57e/327/e40/7bd/fb1/9fd/29c/4fc/40b/0d5/w1a/kjk/v/L.jpg",
          productName: 'ソニー フルサイズミラーレス対応 タムロン 17-28mmF2.8DiIII RXD',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4865",
          src: "https://shopimg.kitamura.jp/images/pd/451/4dc/f65/2c3/bd3/88b/81f/a24/58f/7ed/c3s/ny4/0tg/1/L.jpg",
          productName: 'コンパクトで高画質な広角レンズ ニコン NIKKOR Z 24mm f/1.8 S',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4872",
          src: "https://shopimg.kitamura.jp/images/pd/458/71c/7ce/931/fd6/a44/7cd/b70/a85/779/516/ydd/urp/4/L.jpg",
          productName: '超望遠撮影を手軽に！オリンパス M.ZUIKO DIGITAL ED 100-400mm F5.0-6.3 IS',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4867",
          src: "https://shopimg.kitamura.jp/images/pd/783/cb1/8eb/798/69a/2c2/7cf/d4b/e33/9ed/8fg/ejg/7m9/e/L.jpg",
          productName: 'チェキに音が入る？！フジフイルム instax mini LiPlay',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4830",
          src: "https://shopimg.kitamura.jp/images/pd/d62/5ad/0b5/5ee/178/53a/77b/4ae/6ec/193/9a5/5eu/9x4/5/L.jpg",
          productName: 'シグマ初の開放F1.2単焦点レンズ シグマ 35mm F1.2 DG DN Art',

        },

        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4829",
          src: "https://shopimg.kitamura.jp/images/pd/24a/a19/bcf/71b/ada/248/abe/c42/03b/043/77k/7nd/sgz/2/L.jpg",
          productName: '明るく寄れて、小さく軽い！LAOWA 15mm F2 Zero-D',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4726",
          src: "https://shopimg.kitamura.jp/images/pd/af8/3c0/184/9b7/a3f/c24/1f0/91e/3f0/363/30c/bwh/pto/5/L.jpg",
          productName: '星景写真を撮るなら シグマ 14-24mm F2.8 DG DN',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4725",
          src: "https://shopimg.kitamura.jp/images/pd/9e1/103/2f6/59e/243/2c4/cd1/8dd/97c/904/94h/clx/5ml/q/L.jpg",
          productName: '高速AFでピントが合わせやすい ニコン D5600',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4724",
          src: "https://shopimg.kitamura.jp/images/pd/f53/eb4/92a/114/400/dd3/c42/c78/694/fb5/41o/34v/ra4/n/L.jpg",
          productName: 'ポートレート撮影に ニコン NIKKOR Z 85mm f/1.8 S',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4722",
          src: "https://shopimg.kitamura.jp/images/pd/d41/a7f/4e5/22b/301/e31/0e7/3d6/c4a/51d/5en/7xu/vxt/5/L.jpg",
          productName: 'コンパクト＆軽量なキヤノン RF70-200mm F2.8 L IS USM',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4723",
          src: "https://shopimg.kitamura.jp/images/pd/5ff/8c0/74a/bc3/e25/370/b49/5fe/263/875/20a/wqm/ayc/m/L.jpg",
          productName: 'Batisシリーズ初の単焦点レンズ カールツァイス ZEISS Batis 2/40 CF',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4660",
          src: "https://shopimg.kitamura.jp/images/pd/c3f/0bb/1e8/ed5/290/89c/ea3/e2e/e7e/785/8el/2et/g3p/z/L.jpg",
          productName: 'ニコン NIKKOR Z 14-30mm f/4 S',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4665",
          src: "https://shopimg.kitamura.jp/images/pd/9c7/b04/7cd/429/9ee/9a1/35a/1d6/51d/845/de4/y3e/duo/x/L.jpg",
          productName: 'サムヤン AF 45mm F1.8 FE 大口径単焦点レンズ',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2020/4666",
          src: "https://shopimg.kitamura.jp/images/pd/648/b82/ce4/d90/1bc/a8d/25a/412/948/8ab/bch/gh4/hvm/j/L.jpg",
          productName: 'こだわりが詰まった単焦点レンズ シグマ 45mm F2.8 DG DN',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2020/4541",
          src: "https://shopimg.kitamura.jp/images/pd/c52/ce7/304/7de/157/48c/a2c/fa9/83d/42a/e54/050/a4t/l/L.jpg",
          productName: 'かわいいカメラストラップ！サクラスリングプロジェクト',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2020/4463",
          src: "https://shopimg.kitamura.jp/images/pd/51a/445/9e0/d5e/fb1/6b4/adb/51e/e7b/1f0/d0h/szs/x4h/3/L.jpg",
          productName: 'キヤノン 15-35mm F2.8 L IS USM',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2020/4462",
          src: "https://shopimg.kitamura.jp/images/pd/467/5e4/d0f/5ff/c4b/a2f/529/8ea/207/1b9/d7q/coo/03n/q/L.jpg",
          productName: 'SAMYANG AF14mm F2.8 ',

        },
        {
          category: ["all", "camera", "new"],
          href: "/ec/special/general/highly_recommended/2019/4431",
          src: "https://shopimg.kitamura.jp/images/pd/25e/785/935/59b/51a/373/b67/793/a40/c45/71u/k01/136/h/L.jpg",
          productName: 'GoPro HERO7 ',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4380",
          src: "https://shopimg.kitamura.jp/images/pd/605/d70/303/fb9/136/4ad/cf0/1e7/fc8/a77/92o/gc4/pgx/r/L.jpg",
          productName: 'タムロン 28-75mm F/2.8 Di III RXD ソニーEマウント用 ',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4367",
          src: "https://shopimg.kitamura.jp/images/pd/c3e/501/60d/216/040/afc/e4e/5ef/cbf/66b/38n/hfd/bf9/3/L.jpg",
          productName: 'DJIジャパン Osmo Pocket OSPKJP ',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4357",
          src: "https://shopimg.kitamura.jp/images/pd/ee1/374/ece/81d/f4e/7cb/e0b/701/cbe/ea8/f7z/b4r/vxt/6/L.jpg",
          productName: 'プレゼントにおすすめコンパクトデジカメ！ニコン COOLPIX W150 ',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4349",
          src: "https://shopimg.kitamura.jp/images/pd/2f7/789/3a5/870/18d/2a5/c46/af1/b7a/1e2/faz/p4m/8gu/6/L.jpg",
          productName: '本格的な撮影が可能な小型・軽量オールラウンドミラーレス',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4323",
          src: "https://shopimg.kitamura.jp/images/pd/269/441/094/4ef/180/117/d99/2d8/a91/62d/931/nas/tif/h/L.jpg",
          productName: 'クラス世界最軽量を実現 スポーツ・野生動物などのプロ向け 大口径超望遠単焦点レンズGマスター',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4318",
          src: "https://shopimg.kitamura.jp/images/pd/120/b39/1ac/db8/398/311/852/8c4/16d/b04/b6w/cxb/rrd/7/L.jpg",
          productName: 'コンパクトなボディながらも『α9』で培ったスピード性能を実現した「プレミアムコンパクト」',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4301",
          src: "https://shopimg.kitamura.jp/images/pd/9e7/758/bda/7bc/0b2/75a/6cb/2e6/e65/c44/039/ei1/2ny/u/L.jpg",
          productName: 'APS-Cミラーレスカメラユーザー・星景撮影や風景撮影におすすめの交換レンズ',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4273",
          src: "https://shopimg.kitamura.jp/images/pd/5e1/44a/329/a30/079/318/1ea/625/e69/50b/528/c5a/nyz/7/L.jpg",
          productName: 'GoProユーザーにもおすすめ！LEDスタジオアクションライティングシステム',

        },
        {
          category: ["all", "camera"],
          href: "/ec/special/general/highly_recommended/2019/4261",
          src: "https://shopimg.kitamura.jp/images/pd/1e7/2dc/df2/b23/13b/ff7/cc3/477/413/c0a/c96/u1p/cmm/7/L.jpg",
          productName: '手ブレに悩む望遠レンズ・Eマウントユーザーにおすすめです',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2019/4248",
          src: "https://shopimg.kitamura.jp/images/pd/377/b31/eae/2fd/a76/77c/d5d/a09/392/cfd/95v/gye/e1q/a/L.jpg",
          productName: 'ゴルフの必須アイテム！スコアを短縮したい方や上手くなりたい方へ',

        },
        {
          category: ["all", "camer"],
          href: "/ec/special/general/highly_recommended/2019/4242",
          src: "https://shopimg.kitamura.jp/images/pd/2ed/534/065/546/633/bda/cd4/31d/6fa/2b5/77p/e02/36a/o/L.jpg",
          productName: '一味違うマクロ撮影をしたい人におすすめの交換レンズ・マクロレンズです',

        },
        {
          category: ["all", "camer"],
          href: "/ec/special/general/highly_recommended/2019/4232",
          src: "https://shopimg.kitamura.jp/images/pd/a14/12d/600/a58/a24/18c/c92/d35/48d/af3/c4u/2fn/1x5/3/L.jpg",
          productName: '超望遠撮影、超望遠マクロ撮影が可能になり、撮影領域がさらに広がるテレコンバーター ',

        },
        {
          category: ["all", "camer"],
          href: "/ec/special/general/highly_recommended/2019/4222",
          src: "https://shopimg.kitamura.jp/images/pd/08d/acd/9cc/4cb/e09/948/b26/76e/893/5c0/dbt/3pd/pdl/n/L.jpg",
          productName: 'ソニー αシリーズユーザーにおすすめ！描写性能が自慢の長く使える実力派',

        },
        {
          category: ["all", "camer"],
          href: "/ec/special/general/highly_recommended/2019/4194",
          src: "https://shopimg.kitamura.jp/images/pd/fe7/a29/d4e/049/0d0/7b3/be1/781/fa4/be8/1eq/dih/y07/t/L.jpg",
          productName: '写真にこだわりたい人におすすめ高級コンパクトデジカメ ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2019/4204",
          src: "https://shopimg.kitamura.jp/images/pd/691/fd3/0cc/994/d73/27a/011/e18/986/256/892/d70/eyc/k/L.jpg",
          productName: 'ベルボン UT-3AR 軽量ミラーレス向けトラベル5段三脚 ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2019/4203",
          src: "https://shopimg.kitamura.jp/images/pd/aa7/d61/dfe/a02/f10/d89/404/639/5d2/015/d9g/izw/aa5/t/L.jpg",
          productName: 'コンサートやライブ会場には必須！おすすめ防振機能付き双眼鏡 ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2019/4161",
          src: "https://shopimg.kitamura.jp/images/pd/1d8/3ad/1f0/f21/16f/15a/3cf/f23/d2a/2aa/853/coa/k6c/j/L.jpg",
          productName: 'ガラス越し撮影の必須アイテム「よしみカメラ 忍者レフ」 ',

        },
        {
          category: ["all", "camer"],
          href: "/ec/special/general/highly_recommended/2019/4121",
          src: "https://shopimg.kitamura.jp/images/pd/419/1b6/d91/dd2/e89/a35/86b/ea6/359/f26/62z/hni/fq8/h/M.jpg",
          productName: '初心者・入門編のカメラ女子におすすめカメラ ソニー α6400 ',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/1224",
          src: "/ec/images2/special/general/highly_recommended/i-item-pelikan-m600_350px.jpg",
          productName: 'ペリカン スーベレーン M600',

        },

        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/1211",
          src: "/ec/images2/special/general/highly_recommended/img_zetasslimpx.jpg",
          productName: 'COTTON CARRIER コットンキャリア ストラップショットEV1 ',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/1127",
          src: "/ec/images2/special/general/highly_recommended/img_item-350px.gif",
          productName: '12月5日は「アルバムの日」おすすめアルバム大集合！',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0710",
          src: "/ec/images2/special/general/highly_recommended/i-item-ztylus_500px.jpg",
          productName: 'クリエイティブなiPhone6用レンズアタッチメント ズタイラス RV-2 & ZIP-6LB',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/1120",
          src: "/ec/images2/special/general/highly_recommended/sd4k_350px.jpg",
          productName: '4Kビデオカメラでの撮影に適したSDカードをまとめました',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0619",
          src: "/ec/images2/special/general/highly_recommended/i-item-ct-wpip13_350px.jpg",
          productName: '完全防水・耐衝撃のiPhone6ケース『Catalyst Case』',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/1113",
          src: "/ec/images2/special/general/highly_recommended/img_zetasslimpx.jpg",
          productName: 'ケンコー Zeta Super Slim 液晶保護ガラス',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0522",
          src: "/ec/images2/special/general/highly_recommended/i-item-ixpand_350px.jpg",
          productName: 'iPhoneのデータを簡単バックアップ！サンディスク iXpand',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0515",
          src: "/ec/images2/special/general/highly_recommended/i-item-sbt_350px.jpg",
          productName: 'SONY Smart B-Trainer（スマート ビートレーナー） SSE-BTR1',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0925",
          src: "/ec/images2/special/general/highly_recommended/img_cokin-350px.jpg",
          productName: '超薄型カメラレンズフィルター「コッキン アルモニ PL(偏光) / レンズプロテクター(保護/UV)',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0424",
          src: "/ec/images2/special/general/highly_recommended/i-item-stabilizer_350px.jpg",
          productName: '意外と難しい歩きながらの動画撮影。カメラスタビライザーで『ブレ』を抑制',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0918",
          src: "/ec/images2/special/general/highly_recommended/mpc-2.3_350px.jpg",
          productName: 'MEYER 電子レンジ圧力鍋 MPC-2.3',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0403",
          src: "/ec/images2/special/general/highly_recommended/i-item-whoosh_350px.jpg",
          productName: 'スマホクリーナー WOOSH! SCREEN SHINE',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0327",
          src: "/ec/images2/special/general/highly_recommended/i-item_cvss6.jpg",
          productName: '三脚専門メーカーの信頼性とアウトドアブランドの楽しみの提案 ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0904",
          src: "/ec/images2/special/general/highly_recommended/img_befree-350px.jpg",
          productName: 'コンパクトな三脚「マンフロット MKBFRA4-BH Befree アルミニウム三脚ボール雲台キット」',

        },
        {
          category: ["all", "camer"],
          href: "/ec/special/general/highly_recommended/2015/0821",
          src: "/ec/images2/special/general/highly_recommended/i-item-coolshot20_350px.jpg",
          productName: 'ゴルフで大活躍！ニコン携帯型レーザー距離計 COOLSHOT ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0731",
          src: "/ec/images2/special/general/highly_recommended/i-item_nd350px.jpg",
          productName: '可変式ND(減光)フィルター 「ケンコー バリアブルNDX」 ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0724",
          src: "/ec/images2/special/general/highly_recommended/i-item-flash_350px.jpg",
          productName: '東芝 FlashAir SDHCカード Class10 無線LAN搭載',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0717",
          src: "/ec/images2/special/general/highly_recommended/i-item-aeropress_350px.jpg",
          productName: '小川珈琲 エアロプレスコーヒーメーカー ',

        },
        {
          category: ["all", "hoka"],
          href: "/ec/special/general/highly_recommended/2015/0703",
          src: "/ec/images2/special/general/highly_recommended/i-item_ngw.jpg",
          productName: 'おしゃれでカジュアルなカメラバックは、ナショナルジオグラフィック「地中海」コレクション！ ',

        },

        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0529",
          src: "/ec/images2/special/general/highly_recommended/ld-120_350px.jpg",
          productName: 'LEDライト搭載 みせる防湿庫 東洋リビングLD-120 ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0508",
          src: "/ec/images2/special/general/highly_recommended/i-item_fujin350px.jpg",
          productName: 'レンズ型カメラ掃除機 Fujin「風塵（ふうじん）」 EF-L001R キヤノン用',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0501",
          src: "/ec/images2/special/general/highly_recommended/i-item-blackrapid-joby_350px.jpg",
          productName: 'ブラックラピッド クロスショット × JOBY ウルトラハンドストラップ',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0417",
          src: "/ec/images2/special/general/highly_recommended/i-item-gwpro2_350px.jpg",
          productName: 'ハクバ GW-PRO バックパック G2',

        },
        {
          category: ["all", "cameraacce"],
          href: "/ec/special/general/highly_recommended/2015/0410",
          src: "/ec/images2/special/general/highly_recommended/i-item_GoWing350px.jpg",
          productName: 'BLaKPIXEL GoWing レンズホルダー',

        },
      ]
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      fetchProduct();
    });

    const filterByCategory = computed(() => {
      const result = state.backnumberList.filter((value) => {
        if (value.category.indexOf(state.category) !== -1) {
          return value;
        }
      });
      return result;
    });

    const searchByCategory = (value: string) => {
      state.category = value;
    };

    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      filterByCategory,
      searchByCategory
    };
  }
});
</script>

<style scoped>
.bg-redgr {
    width: 100%;
    background: rgb(222,27,39);
    background: linear-gradient(
180deg
, rgba(222,27,39,1) 0%, rgba(180,15,26,1) 100%);
    border-radius: 6px;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%), 0 6px 6px rgb(0 0 0 / 20%);
}
</style>