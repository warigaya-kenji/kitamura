<template>
  <v-app>
    <div class="feature">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/album/feature/title-bg.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/album/feature/fb-640x480.jpg'"
          :type="2"
        />
        <!-- ↑top image -->

        <v-main>
          <v-container class="fan-fair">
            <h1 class="text-subtitle-1">
              <b>手作りアルバムの作り方特集 - 卒園・卒業アルバムや寄せ書きをかわいく作るコツ-</b>
            </h1>
            <p class="pl-4">
              卒園・卒業シーズン到来！ 贈り物に手作りアルバムや寄せ書きを贈りませんか？<br />
              大切な人に、心を込めて贈りたい。喜ばれるものを贈りたい。記念日や、卒業・卒園、入学・入園、同級生の転校や同僚の転勤・退職などの節目に、思い出の写真を感謝の気持ちを込めて贈りましょう！<br />
              手作りアルバムにおすすめの商品、作り方のコツ・デコレーションのコツ、便利な素材・サービスのご紹介です。
            </p>

            <!--↓『 写真をたくさん 』集めて贈るなら手作りアルバムがおすすめ-->
            <v-sheet color="#663333" class="pa-2 rounded-lg mb-2">
              <h2 class="white--text text-sm-h5 text-h6">『 写真をたくさん 』集めて贈るなら手作りアルバムがおすすめ</h2>
            </v-sheet>

            <div :class="$vuetify.breakpoint.mdAndUp ? 'konnehito px-6' : 'konnehito'">
              <ul>
                <li>写真をたくさん集めて、<a v-scroll-to="{ el: '#album' }">クラフトアルバムや、デミサイズのアルバム</a>を使うのがおすすめ</li>
                <li><a v-scroll-to="{ el: '#paper' }">ペーパーパーツ</a>を使うと華やかになります</li>
                <li><a v-scroll-to="{ el: '#maskingtape' }">マスキングテープ</a>を使うと縁取りが簡単！</li>
                <li><a v-scroll-to="{ el: '#template' }">テンプレート</a>を使うと写真のカットもキレイにできます</li>
                <li>思い出写真を<a v-scroll-to="{ el: '#ranking' }">「 シャッフルプリント 」</a>でギュッと1枚にまとめても喜ばれます</li>
              </ul>
            </div>

            <h3 class="mt-12" id="album">おすすめ商品！クラフトアルバム・デミサイズのアルバム・ポケットアルバム</h3>

            <v-row :class="$vuetify.breakpoint.mdAndUp ? 'pa-6' : 'pa-2'">
              <v-col cols="12" sm="6" class="mr-4">
                <v-img src="/ec/images2/special/camera/album/feature/530-300.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col>
                <p>
                  写真をたくさん集めて作るアルバムには、クラフトアルバムや、デミサイズのアルバムがおすすめ。<br />
                  プレゼントとして大きさも丁度よく、デザインもオシャレな表紙の商品が揃っています。<br /><br />
                  まずは写真を集めましょう！ 思い出写真・集合写真・自分自身の写真でもOK。<br />
                  写真を集めてから構成を考えましょう。<br />
                  アルバムにして贈るのも喜ばれますが、「 シャッフルプリント 」にして思い出をギュッとまとめて贈るのも喜ばれます！
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/special/camera/album/feature/1985'" :btnColor="'yellowish'" />
              </v-col>
            </v-row>

            <!--↓『 写真を厳選 』して贈るなら、メッセージボードで寄書きがおすすめ！-->
            <v-sheet color="#663333" class="pa-2 rounded-lg mb-2 mt-16">
              <h2 class="white--text text-sm-h5 text-h6">『 写真を厳選 』して贈るなら、メッセージボードで寄書きがおすすめ！</h2>
            </v-sheet>

            <div :class="$vuetify.breakpoint.mdAndUp ? 'konnehito px-6' : 'konnehito'">
              <ul>
                <li>とっておきの写真を選んで<a v-scroll-to="{ el: '#daishi' }">写真台紙・メッセージボード</a>を使うのがおすすめ</li>
                <li><a v-scroll-to="{ el: '#seal' }">吹き出しシール・コメントシール</a>を使うとオシャレです</li>
                <li><a v-scroll-to="{ el: '#paper' }">ペーパーパーツ・シール</a>を使うと華やかになります</li>
                <li>写真を<a v-scroll-to="{ el: '#ranking' }">「 デザインコラージュプリント 」</a>するとオシャレ</li>
              </ul>
            </div>

            <h3 class="mt-12" id="daishi">おすすめ商品！ メッセージボード・写真台紙・色紙</h3>

            <v-row :class="$vuetify.breakpoint.mdAndUp ? 'pa-6' : 'pa-2'">
              <v-col cols="12" sm="6" class="mr-4">
                <v-img src="/ec/images2/special/camera/album/feature/yosegaki.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col>
                <p>
                  「 写真を集めるのはちょっと大変…。」という方には、お気に入り写真を数枚とメッセージボードで作るのがおすすめ！<br /><br />
                  まずはお気に入り・とっておきの写真を選びましょう！<br />
                  メッセージカード(シール）を配って、皆からのメッセージを集めましょう。メッセージを貼ったら、隙間はペーパーパーツやシールでデコレーションするとかわいくなります★<br /><br />
                  大勢に贈る場合は、2面の写真台紙を選んで、1面をメッセージにして贈るのもおすすめです。
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/special/camera/album/feature/1986'" :btnColor="'yellowish'" />
              </v-col>
            </v-row>

            <!--↓手作りアルバムを『 かわいく作る 』 便利でかわいい商品＆使い方のコツ-->
            <v-sheet color="#663333" class="pa-2 rounded-lg mb-2 mt-16">
              <h2 class="white--text text-sm-h5 text-h6">手作りアルバムを『 かわいく作る 』 便利でかわいい商品＆使い方のコツ</h2>
            </v-sheet>

            <h3 class="mt-6" id="paper">【 華やかになります 】ペーパーパーツ・シールを使おう！</h3>

            <v-row :class="$vuetify.breakpoint.mdAndUp ? 'pa-6' : 'pa-2'">
              <v-col cols="12" sm="6" class="mr-4">
                <v-img src="/ec/images2/special/camera/album/feature/150100b.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col>
                <p>
                  手作りアルバムに欠かせないアイテムのペーパーパーツ・シール。<br />
                  シールは、<span class="underline">のり付け前・貼る前に、アルバムの上に一度置いてから、のり付け・貼り付け</span>しましょう。<br /><br />
                  ペーパーパーツや小さいシールはコメントの隙間や写真の角にあると、バランスが良くなります。<br /><br />
                  フォトデザインカードは、ポケットアルバムに差し込むだけで手作り感がでるので、とってもおすすめです。
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/special/camera/album/feature/1997'" :btnColor="'yellowish'" />
              </v-col>
            </v-row>

            <h3 class="mt-12" id="maskingtape">【 縁取りが簡単・オシャレ 】マスキングテープを使おう！</h3>

            <v-row :class="$vuetify.breakpoint.mdAndUp ? 'pa-6' : 'pa-2'">
              <v-col cols="12" sm="6" class="mr-4">
                <v-img src="/ec/images2/special/camera/album/feature/150100-3b.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col>
                <p>
                  写真の周りを縁取るだけでもOK。<br />
                  マスキングテープの模様や柄を活用して、アルバムの台紙を縁取ったり、写真を縁取るだけでもオシャレに変身します。
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/ct/C014/013'" :btnColor="'yellowish'" />
              </v-col>
            </v-row>
            <h4>動画でマスキングテープの貼り方のコツを見る</h4>
            <div style="clear: both"></div>
            <p class="pa-4">
              マスキングテープでの写真の縁取り方や、誕生日会・運動会のアルバムにワンポイントでいれるとグッとかわいくなるデコレーションなど、動画で作り方をご紹介！
            </p>
            <watchInVideo :srcList="watchInVideos" :sm="4" :type="2" :height="200" />

            <h3 class="mt-12" id="seal">【 寄せ書きに便利 】吹き出しシール・コメントシールを使おう！</h3>

            <v-row :class="$vuetify.breakpoint.mdAndUp ? 'pa-6' : 'pa-2'">
              <v-col cols="12" sm="6" class="mr-4">
                <v-img src="/ec/images2/special/camera/album/feature/150100-4b.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col>
                <p>
                  多くの人に配りましょう！<br />
                  シールは、のり付けや貼る前に、アルバムの上に一度置いてから、のり付け・貼り付けしましょう。<br /><br />
                  吹き出し・コメントシールは、<span class="underline">1シリーズ（1種）で揃えたほうが統一感がでます。</span>
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/special/camera/album/feature/1996/?display=detail'" :btnColor="'yellowish'" />
              </v-col>
            </v-row>

            <h3 class="mt-12" id="template">【 キレイにカットするのに便利 】テンプレートやコーナーパンチを使おう</h3>

            <v-row :class="$vuetify.breakpoint.mdAndUp ? 'pa-6' : 'pa-2'">
              <v-col cols="12" sm="6" class="mr-4">
                <v-img src="/ec/images2/special/camera/album/feature/150100-2b.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col>
                <p>
                  テンプレートを使って、細いペンで縁取りしましょう。<br />
                  あとは、はさみやカッターで丁寧にカットするだけ！<br /><br />
                  細かい作業がちょっぴり苦手な場合は、角を丸くカットするパンチで、写真をカットするだけでも十分OK！
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/ct/C014/014/'" :btnColor="'yellowish'" />
              </v-col>
            </v-row>

            <!--↓おすすめキタムラプリントサービス-->
            <v-sheet color="#663333" class="pa-2 rounded-lg mb-2 mt-16">
              <h2 class="white--text text-sm-h5 text-h6">おすすめキタムラプリントサービス</h2>
            </v-sheet>

            <div id="ranking">
              <v-row class="pa-2">
                <v-col cols="12" sm="6" v-for="(printService, index) in printServiceList" :key="index">
                  <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 8 : 2" class="py-6 px-4">
                      <a :href="printService.href" target="_blank">
                        <b>{{ printService.name }}</b>
                        <v-img :src="printService.src" max-width="100%" height="auto"></v-img>
                      </a>
                      <p class="text-center including-line-breaks">
                        {{ printService.txt }}
                      </p>
                      <orangeBtn :btntxt="'サービスを詳しく見る'" :href="printService.href" :btnColor="'yellowish'" :type="2" />
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </div>

            <!--↓手作りアルバムにおすすめ商品-->
            <v-sheet color="#663333" class="pa-2 rounded-lg mb-6 mt-16">
              <h2 class="white--text text-sm-h5 text-h6">手作りアルバムにおすすめ商品</h2>
            </v-sheet>

            <priceAndPopular :productDetailList="productDetailList" />

            <div class="s-bnr">
              <p class="text-sm-h4">おすすめ特集・サービス</p>
            </div>
            <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
          </v-container>
        </v-main>
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
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
export default Vue.extend({
  name: 'feature',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    orangeBtn: OrangeBtn,
    watchInVideo: WatchInVideo,
    priceAndPopular: PriceAndPopular,
  },
  setup: (props, context) => {
    document.title = '手作りアルバム特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '手作りアルバムの作り方！卒園・卒業アルバムや寄せ書きをかわいく作るコツ・おすすめデコ素材・便利な商品をご紹介|カメラ専門店カメラのキタムラネットショップへおまかせください。')
    const state = reactive({
      watchInVideos: ['https://www.youtube.com/embed/22LIbtZu_BA?rel=0', 'https://www.youtube.com/embed/KpAwNugCWN4?rel=0', 'https://www.youtube.com/embed/accMjAR1T_w?rel=0'],
      printServiceList: [
        {
          name: 'デザインコラージュプリント',
          src: '/ec/images2/special/camera/album/feature/150100-5b.jpg',
          txt: 'デザイン性の高いテンプレートで、思い出がさらに輝きます。\nお気に入りの写真をギュッと詰めて、色紙や寄せ書きに使えばオシャレ感がUPします。\n（※プリントサービスのページへ移動します）',
          href: 'https://www.kitamura-print.com/print/design_collage/?_ga=2.162353916.1712661879.1629071621-279164427.1627285160'
        },
        {
          name: 'シャッフルプリント',
          src: '/ec/images2/special/camera/album/feature/shafful.jpg',
          txt: 'たくさんの写真をまとめて1枚にまとめたいなら、「 シャッフルプリント 」がおすすめ！\nオシャレなフレームに入れて贈ったりするのも喜ばれます！\n（※プリントサービスのページへ移動します）',
          href: 'https://www.kitamura-print.com/print/wonder_shuffle/?_ga=2.140333811.1712661879.1629071621-279164427.1627285160'
        },
        {
          name: 'フォトプラスブック',
          src: '/ec/images2/special/camera/album/feature/photopurasu.jpg',
          txt: 'いろいろ選べるキタムラオリジナルフォトブックは、写真が大きく残せるフォトブックです。\nカジュアルなソフトに対して、豪華なハードタイプもご用意しています。\n（※プリントサービスのページへ移動します）',
          href: 'https://photobook.kitamura.jp/photoplus'
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/photomount',
          img: 'https://shopimg.kitamura.jp/images/banner/2456.gif',
          alt: '写真アルバム おすすめシリーズ紹介'
        },
        {
          href: '/ec/special/general/graduation_entrance',
          img: 'https://shop.kitamura.jp/images/banner/1929.gif',
          alt: '卒業・入学特集'
        },
        {
          href: '/ec/special/camera/album/feature/2519',
          img: 'https://shop.kitamura.jp/images/banner/3496.jpg',
          alt: '年賀状のデコレーションにおすすめアイテムをご紹介！写真ペン'
        },
        {
          href: '/ec/special/sale',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/list?category=&narrow1=&narrow2=&type=u&r=',
          img: 'https://shop.kitamura.jp/images/banner/4637.gif',
          alt: '新着中古'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '手作りアルバム特集',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4974214167704',
        '4974214175174',
        '4902205338192',
        '4902408338685',
        '4901770448428',
        '4901881167966',
        '4901881291913',
        '4902205235248',
        '4901881168130',
        '4901881168123',
        '4901881168062',
        '4901881168055',
        '4901881168048',
        '4901881168116',
        '4901881168147',
        '4901881168031',
        '4901881168079',
        '4901881168086',
        '4901881168093',
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
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
.fan-fair {
    font-size: 16px;
    line-height: 170%;
}

.konnehito ul {
    width: 100%;
    float: left;
    border: solid 2px #e13167;
    box-sizing: border-box;
    padding: 0.5em;
    position: relative;
    margin-top: 2em;
}

.konnehito ul li {
    line-height: 1.5;
    padding: 0.5em 0 0.5em 1.4em;
    box-sizing: border-box;
    border-bottom: dashed 1px silver;
    list-style-type: none!important;
    list-style: none;
}

.konnehito ul li:before {
    font-family: "Font Awesome 5 Free";
    content: url(/ec/images2/special/camera/album/feature/icon_list.png);
    position: absolute;
    left: 0.5em;
    color: #e13167;
}

.konnehito ul li:after {
    background: #e13167;
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: -2px;
    bottom: 100%;
    padding: 1px 7px;
    content: "作り方のコツ・POINT";
    letter-spacing: 0.05em;
}

.fan-fair a {
  text-decoration: none;
    color: #1122cc;
}

.fan-fair h3 {
    clear: both;
    width: 100%;
    float: left!important;
    border-radius: 6px;
    font-size: 120%;
    font-weight: bold;
    box-sizing: border-box;
    padding: .25em 0 .5em .75em;
    border-left: 6px solid #663333;
    border-bottom: 2px solid #663333;
}

.underline {
    background: rgba(0, 0, 0, 0) linear-gradient(transparent 70%, #fdd351 70%) repeat scroll 0 0;
    font-weight: normal;
}

.fan-fair h4 {
    float: left!important;
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    clear: both;
    font-size: 120%;
    font-weight: bold;
    padding: 5px 20px;
    background-color: #f6f6f6;
    border-bottom: 2px solid #ccc;
}

</style>


