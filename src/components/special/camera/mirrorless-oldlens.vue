<template>
  <div class="mirrorless-oldlens">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!--レトロなのに新しい！ミラーレス一眼とオールドレンズで撮影しよう-->
        <section>
          <v-img class="mx-auto" alt="レトロなのに新しい！ミラーレス一眼×オールドレンズで" src="/ec/images2/special/camera/mirrorlessoldlens/img-01.jpg">
          </v-img>
          <h1 class="text-h6">レトロなのに新しい！ミラーレス一眼とオールドレンズで撮影しよう</h1>
          <p>
            インスタグラムやツイッターなどの投稿などで人気を上昇しているオールドレンズ。
            カメラ雑誌などでも特集が組まれ、オールドレンズの撮影を楽しむ人が増えてきました。
          </p>
          <p>
            「オールドレンズで撮影なんてできるの？」や「撮影が難しそう」と思うかもしれませんが、最近のミラーレスと組み合わせると手軽に撮影を楽しむことができます。
          </p>
        </section>

        <!--なぜミラーレス一眼はオールドレンズにおすすめなのか？-->
        <section>
          <h2 class="text-h6">なぜミラーレス一眼はオールドレンズにおすすめなのか？</h2>
          <v-img class="mx-auto" alt="マウントアダプター | イメージ" src="/ec/images2/special/camera/mirrorlessoldlens/img-02.jpg"> </v-img>
          <p>
            まずオールドレンズをミラーレスに装着する方法ですが、マウントアダプターというパーツを使うことで、異なるレンズマウントのレンズを装着することができます。
          </p>
          <p>
            各メーカーからさまざまなマウントアダプターが出ていますが、デジタル一眼に比べ圧倒的にミラーレスのマウントアダプターが多く存在します。<br />
            それには、フランジバック(マウント面から、イメージセンサーまでの距離)が大きく影響します。
          </p>
          <v-row class="my-8">
            <v-col cols="12" sm="6">
              <p class="grey darken-3 pa-2 text-center white--text">デジタル一眼レフのフランジバックイメージ</p>
              <v-img class="mx-auto" alt="デジタル一眼レフのフランジバック | 図" src="/ec/images2/special/camera/mirrorlessoldlens/img-03.gif"> </v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="grey darken-3 pa-2 text-center white--text">ミラーレス一眼のフランジバックイメージ</p>
              <v-img class="mx-auto" alt="ミラーレス一眼のフランジバック | 図" src="/ec/images2/special/camera/mirrorlessoldlens/img-04.gif"> </v-img>
            </v-col>
          </v-row>
          <p>
            ミラーレス一眼は、その名の通りボディ内にミラーがなくフランジバックが短く作られています。<br />
            一方、デジタル一眼はマウントとイメージセンサーの間にミラーが入るため、フランジバックが長くなります
          </p>
          <p>
            マウントアダプターで短いフランジバックを長くすることはできますが、その逆は不可能なため、必然的にミラーレスの方が対応するレンズの種類が多く、それに比例してマウントアダプターの種類も多く存在します。
          </p>
          <v-btn block class="my-4" color="white" elevation="2" x-large>
            <a class="arrow-r d-block" href="/ec/ct/C009/005/">各種マウントアダプターはこちら</a>
          </v-btn>
          <p>
            また、最近のミラーレス一眼はボディ内手ブレ補正を搭載したモデルが増えました。<br />
            フィルムカメラ時代にはボディに手ブレ補正がなかったため、ボディ内手ブレ補正を搭載したミラーレス一眼のほうが、撮影の難易度は低いと考えられます。
          </p>
          <p>
            その他にも、デジタルカメラにはさまざまなモードがあるので、絞りはレンズ側で調整し、シャッタースピードはカメラ側で自動的に調整するといった方法が可能です。
          </p>
          <p>
            オールドレンズはミラーレス一眼に組み合わせることで、より手軽に楽しむことができると思います。<br />
            それでは実際にミラーレス一眼とオールドレンズで撮影した写真を見てみましょう。
          </p>
          <!--▼作例-->
          <v-row class="my-8" justify="space-around">
            <v-col cols="auto">
              <v-sheet class="mx-auto" max-width="672">
                <v-dialog max-width="1280">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      alt="作例"
                      class="icon-zoom mx-auto"
                      src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_01.jpg"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-img
                        alt="作例"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_01.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">閉じる</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <small class="d-block">カメラ：FUJIFILM X-T1</small>
                <small class="d-block">レンズ：CONTAX Planar50mmF1.4</small>
              </v-sheet>
            </v-col>
          </v-row>
          <!--▲作例-->
          <!--▼作例-->
          <v-row class="my-8" justify="space-around">
            <v-col cols="auto">
              <v-sheet class="mx-auto" max-width="672">
                <v-dialog max-width="1280">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      alt="作例"
                      class="icon-zoom mx-auto"
                      src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_02.jpg"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-img
                        alt="作例"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_02.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">閉じる</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <small class="d-block">カメラ：FUJIFILM X-T1</small>
                <small class="d-block">レンズ：CONTAX Planar50mmF1.4</small>
              </v-sheet>
            </v-col>
          </v-row>
          <!--▲作例-->
          <p>
            標準の帝王ことCONTAX Planar50mmF1.4もマウントアダプターを使えば、ミラーレス一眼などさまざまなカメラで使えるようになりました。<br />
            APS-C機のX-T1で使うと35mm換算で76mm相当の中望遠レンズとしてポートレートなどにも使えます。
          </p>
          <p>
            絞り込むごとに表情を変えてくれるPlanar50mmF1.4。<br />
            解像力などではデジタルカメラ用に設計された最新のレンズには及ばない部分もあるのですが、Planarならではの「味」を楽しめる・使い込むごとに「面白い」と思わせてくれる名玉です。
          </p>
          <!--▼作例-->
          <v-row class="my-8" justify="space-around">
            <v-col cols="auto">
              <v-sheet class="mx-auto" max-width="672">
                <v-dialog max-width="1280">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      alt="作例"
                      class="icon-zoom mx-auto"
                      src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_03.jpg"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-img
                        alt="作例"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_03.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">閉じる</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <small class="d-block">カメラ：FUJIFILM X-T1</small>
                <small class="d-block">レンズ：CONTAX Distagon35mmF2.8</small>
              </v-sheet>
            </v-col>
          </v-row>
          <!--▲作例-->
          <p>
            CONTAX Distagon35mmF2.8はAPS-C機のX-T1で使うと35mm換算で53mm相当となり、標準レンズのように使えます。
            コンパクトでミラーレス機とのサイズ感も絶妙です。<br />
            厳しいコントラストであっても暗部・明部ともに破綻なく、さすがCarl Zeissとうなりました。
          </p>
          <p>
            このレンズは、私が学生時代にバイト代を貯めて買った初めてのツァイスレンズ。<br />
            35mmの単焦点レンズとしても手が届きやすい価格で、オールドレンズ入門にも最適です。
          </p>
          <!--▼作例-->
          <v-row class="my-8" justify="space-around">
            <v-col cols="auto">
              <v-sheet class="mx-auto" max-width="672">
                <v-dialog max-width="1280">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      alt="作例"
                      class="icon-zoom mx-auto"
                      src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_04.jpg"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-img
                        alt="作例"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_04.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">閉じる</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <small class="d-block">カメラ：FUJIFILM X-T1 GS</small>
                <small class="d-block">マウントアダプター：FUJIFILM Mマウントアダプター</small>
                <small class="d-block">レンズ：Voigtlander NoktonClassic40mmF1.4SC）</small>
              </v-sheet>
            </v-col>
          </v-row>
          <!--▲作例-->
          <p>
            SCなので逆光を柱で避けて撮影、このレンズの開放値は独特の描写ですが、初夏の晴れた午後ではなかなか活用できるボディがありませんでした。<br />
            ところが今の世の中、電子シャッターを使えるカメラならどんどん絞りを開けることができ、安心して楽しめます。
          </p>
          <!--▼作例-->
          <v-row class="my-8" justify="space-around">
            <v-col cols="auto">
              <v-sheet class="mx-auto" max-width="672">
                <v-dialog max-width="1280">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      alt="作例"
                      class="icon-zoom mx-auto"
                      src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_05.jpg"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-img
                        alt="作例"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_05.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">閉じる</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <small class="d-block">カメラ：FUJIFILM X-T1 GS</small>
                <small class="d-block">マウントアダプター：Hawksfactory HF-0025</small>
                <small class="d-block">レンズ：Konica Hexanon35mmF2（L）</small>
              </v-sheet>
            </v-col>
          </v-row>
          <!--▲作例-->
          <p>
            小豆島の名産、オリーブの花はとても小さく、逆光で絞り開放、最短撮影距離からヘリコイドでさらに近接･･･いじめのような条件で撮影しましたが破綻しないレンズの底力に驚きです。<br />
            このレンズもHEXARに付いていた時は最高SS1/250秒というカメラの限界でなかなか開放が使えなかったのですが約20年を経て、その性能を活かすことのできるカメラと出会いました。
          </p>
          <!--▼作例-->
          <v-row class="my-8" justify="space-around">
            <v-col cols="auto">
              <v-sheet class="mx-auto" max-width="672">
                <v-dialog max-width="1280">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      alt="作例"
                      class="icon-zoom mx-auto"
                      src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_06.jpg"
                      v-bind="attrs"
                      v-on="on"
                    ></v-img>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-img
                        alt="作例"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/camera/mirrorlessoldlens/sakurei_06.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">閉じる</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                <small class="d-block">カメラ：FUJIFILM X-M1</small>
                <small class="d-block">マウントアダプター：FUJIFILM Mマウントアダプター</small>
                <small class="d-block">レンズ：Voigtlander SuperWideHeliar15mmF4.5</small>
              </v-sheet>
            </v-col>
          </v-row>
          <!--▲作例-->
          <p>
            貴重なブラックG-Biogon21mmF2.8の専用外付けファインダー、純正グリップとハンドストラップで約22mm相当の超広角専用コンパクトデジカメ風に組んでみました。<br />
            こんな遊びもマウントアダプターならでは！ フルサイズでは落ちすぎる周辺光量も、この程度なら扱いやすいと思います。
          </p>
        </section>

        <!--オールドレンズにおすすめのミラーレス一眼-->
        <section>
          <h2 class="text-h6">オールドレンズにおすすめのミラーレス一眼</h2>
          <v-row>
            <v-col cols="12" sm="6">
              <a class="mt-4" href="/ec/pd/4548736001657"> SONY α7 II </a>
              <p class="mt-4">
                フルサイズミラーレス一眼「α7シリーズ」<br />
                フルサイズだから、35mm版に設計されたオールドレンズ本来の力を余すこと無く発揮できます。<br />
                さらに、｢α7 II｣からボディ内手ブレを搭載し、オールドレンズにベストなミラーレス一眼。
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <productAppeal :mainProductList="topProductList" :type="2"></productAppeal>
            </v-col>
          </v-row>

          <v-btn block class="mt-4" color="white" elevation="2" x-large>
            <a
              class="arrow-r d-block"
              href="/ec/list?narrow18=0&keyword=&category=ミラーレス一眼&q=&path=ミラーレス一眼&index=&sort=number20,Number17,Score&searchbox=1"
              >全てのミラーレス一眼を表示する</a
            >
          </v-btn>
          <v-btn block class="mb-8 mt-4" color="white" elevation="2" x-large>
            <a class="arrow-r d-block" href="/ec/ct/C009/005/">各種マウントアダプターはこちら</a>
          </v-btn>
          <v-img alt="PR" class="mx-auto" max-width="100" src="/ec/images2/special/camera/mirrorlessoldlens/icon-03.jpg"></v-img>
        </section>

        <!--今からはじめるオールドレンズ！基本とおすすめのレンズ-->
        <section>
          <h2 class="text-h6">今からはじめるオールドレンズ！基本とおすすめのレンズ</h2>
          <div class="my-8">
            <v-card class="mx-auto pa-2" elevation="2" max-width="672">
              <v-img alt="今からはじめるオールドレンズ" src="/ec/images2/special/camera/mirrorlessoldlens/old-lens_01.jpg"> </v-img>
            </v-card>
          </div>
          <p>
            オールドレンズをはじめようと考えている方や、おすすめのオールドレンズを探している方必見！<br />
            オールドレンズの魅力を教えます！
          </p>
          <p>実際にオールドレンズで実際に撮影した写真や、おすすめのオールドレンズをご紹介いたします。</p>
          <v-btn block class="mt-4" color="white" elevation="2" x-large>
            <a class="arrow-r d-block" href="https://www.net-chuko.com/static/contents/page/Recommended-old-lens.html" target="_blank"
              >今からはじめるオールドレンズ！<br class="d-block d-sm-none" />基本とおすすめのレンズ</a
            >
          </v-btn>
        </section>

        <!--section-->
        <section class="mb-8">
          <h2 class="text-h6">関連おすすめ特集</h2>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        </section>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <kitamuraService />
      </v-app>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import ProductAppeal from '@/components/common/special/productAppeal.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'mirrorless-oldlens',
  components: {
    breadcrumbs: Breadcrumbs,
    productAppeal: ProductAppeal,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = 'レトロなのに新しい！ミラーレス一眼とオールドレンズで撮影しよう | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute('content',
        '「オールドレンズで撮影なんてできるの?」や「撮影が難しそう」と思うかもしれませんが、最近のミラーレスと組み合わせると手軽に撮影を楽しむことができます');
    const state = reactive({
      // ↓ ---- 商品価格 ----
      topProductJanCode: ['4548736001657'],
      topProductList: [] as Array<ProductDetail>,

      recommendedFeaturesList: [
        {
          href: '/camera/feature',
          img: 'https://shopimg.kitamura.jp/images/banner/1341.jpg',
          alt: '最新デジカメ新製品'
        },
        {
          href: '/camera/dslr',
          img: 'https://shopimg.kitamura.jp/images/banner/1350.gif',
          alt: '一眼レフ&ミラーレス特集'
        },
        {
          href: '/camera/girlscamera',
          img: 'https://shopimg.kitamura.jp/images/banner/1390.jpg',
          alt: '女子がきゅんとくるミラーレス一眼カメラ'
        },
        {
          href: '/camera/filmcamera/utsurundesu',
          img: 'https://shopimg.kitamura.jp/images/banner/4115.gif',
          alt: '写ルンです 使い方・楽しみ方特集'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shop.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/list?category=&narrow1=&narrow2=&type=u&r=',
          img: 'https://shop.kitamura.jp/images/banner/4637.gif',
          alt: '新着中古'
        }
      ],
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'セール・特集一覧',
          linkUrl: '/ec/special/sale-fair',
          disabled: false
        },
        {
          path: 'レトロなのに新しい！ミラーレス一眼とオールドレンズで撮影しよう',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 商品
        const topResult = await ProductService.fetchProducts(state.topProductJanCode, true);
        state.topProductList = topResult.items;
      } catch (error) {
        // 商品
        state.topProductList = [] as Array<ProductDetail>;
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

<style lang="scss" scoped>
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
  h1,
  h2 {
    background: none;
    border: 0;
    border-bottom: 1px #666 solid;
    color: #222;
    margin: 64px 0 32px;
    padding: 10px 0;
  }
  .icon-zoom {
    position: relative;
  }
  .icon-zoom::before {
    color: #fff;
    content: '\f002';
    font-family: 'Font Awesome 5 Pro';
    font-size: 20px;
    position: absolute;
    right: 5px;
    bottom: 0;
  }

  .arrow-r {
    display: block;
    position: relative;
    text-align: center;
    width: 100%;
  }
  .arrow-r::after {
    content: '\f105';
    font-family: 'Font Awesome 5 Pro';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>