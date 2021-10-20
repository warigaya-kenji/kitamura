<template>
  <v-app>
    <div class="macro-lens">
      <div class="main-contents-wrap">
        <!--==================== コンテンツ ====================-->
        <v-img src="/ec/images2/special/general/photo_mono/macro-lens/fan-fair_01sp.jpg" max-width="640" max-height="150" class="mt-6"></v-img>
        <p class="caption text-sm-body-1">写真を中心に、話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート</p>
        <h1 class="mt-5 text-subtitle-2 text-sm-subtitle-1 mb-2">
          <b>vol.6 100mmマクロレンズ特集 | 近所にも魅力的な被写体がいっぱい！「マクロレンズでお散歩撮影を楽しむ」</b>
        </h1>
        <v-img
          src="/ec/images2/special/general/photo_mono/macro-lens/top.jpg"
          alt="vol.6 100mmマクロレンズ特集  | 近所にも魅力的な被写体がいっぱい！「マクロレンズでお散歩撮影を楽しむ」"
          max-width="950"
          max-height="296"
        ></v-img>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          普段目に見えない小さな世界を大きく写し取るマクロ撮影。「マクロレンズ」を使うことで、身近に咲いている花や植物でも神秘的な写真、幻想的な写真を撮ることができます。みなさんも撮ってみたいと思いませんか？
        </div>
        <div class="px-1 px-sm-6 mt-5">
          <v-img src="/ec/images2/special/general/photo_mono/macro-lens/image01.jpg" alt="マクロレンズ作例" max-width="890" max-height="297"></v-img>
        </div>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1">
          レンズには被写体に寄れる限界（最短撮影距離）があり、通常のレンズではあまりアップで撮影できないことがほとんど。望遠レンズを使えばある程度アップで撮影できますが、花の撮影が好きな方にはやはり「マクロレンズ」がおすすめです。被写体にぐっと寄ることができて、通常のレンズよりも撮影倍率が高いのがマクロレンズの特徴。単焦点でF2.8の明るさのものがほとんどで、ボケも柔らかく表現できるものが多くなっています。
          今回の撮影で使用したのはキヤノンのマクロレンズ、「Canon EF100mm F2.8Lマクロ IS USM」。
        </div>
        <v-card flat class="line-g mt-2">
          <v-container>
            <v-row class="mt-sm-5">
              <v-col cols="12" sm="6" class="pa-4">
                <a href="/ec/pd/4960999635170"><b>キヤノン EF100mm F2.8L マクロ IS USM</b></a>
                <p class="py-4 caption text-sm-body-1 mb-0">
                  このレンズが発売されたのは2009年ですが、今なお高い人気を誇ります。<br />
                  <br />
                  人気の要因は、手持ちでも高精度な等倍撮影ができる点。<br />
                  カメラの角度ブレだけではなくシフトブレも同時に補正してくれる「ハイブリッドIS」が搭載されており<br />
                  三脚を立てられない場所や薄暗い場所でも手持ちで本格的なマクロ撮影が可能です。 <br />
                  <br />
                  また、このレンズは最短撮影距離が30㎝で、最大撮影倍率は等倍（1倍）で撮影ができます。 マクロレンズではない「Canon EF100mm F2
                  USM」の最短撮影距離は90㎝、最大撮影倍率が0.14倍ですからその差は歴然！もちろんマクロレンズだからといって通常のレンズのように使えないわけではなく、100mmの中望遠レンズとしても使うこともできます。むしろ中望遠のポートレート撮影にうってつけのレンズでもあります。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <productAppeal :mainProductList="mainProductList" :type="2"></productAppeal>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <!--==================== 身近な被写体”を“絶好の被写体”に変える「マクロレンズ」 ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">“身近な被写体”を“絶好の被写体”に変える「マクロレンズ」</v-sheet>
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          通常より被写体を大きく撮れることで、普段見えないモノを印象的に撮れるマクロレンズ。お散歩をしながら写真を撮る方にはぜひ持ち歩いてもらいたいレンズです。筆者も散歩の際には必ずマクロレンズをカメラバックに忍ばせておきますし、場合によってはマクロレンズしか持って行かないこともあるぐらいです。近くの公園、遊歩道に何気なく咲いている草花が絶好の被写体になる事もあります。わざわざ桜や紅葉などの名所に行かなくても、素敵な花々の写真を撮ることができるのです。
          <br />
          <br />
          近所の公園でひっそり咲いていた桜の花も、マクロレンズを使えば最高の被写体に。開放撮影することで大きなボケを作り出して柔らかく描写、独特の世界観を表現することができます。
        </div>
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/macro-lens/image02.jpg'"
          :photographicEquipment="'Canon EOS 5D Mark IV ＋ EF100mm F2.8Lマクロ IS USM'"
          :shootingInformation="'シャッター速度1/1600 絞りF2.8 ISO400 露出補正+0.7 焦点距離100mm'"
        />
        <div class="px-1 px-sm-6 mt-7 caption text-sm-body-1 mb-6">
          花壇に咲いたチューリップも前面のチューリップの大きな前ボケを利用して、奥行き感を表現してみました。
        </div>
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/macro-lens/image03.jpg'"
          :photographicEquipment="'Canon EOS 5D Mark IV ＋ EF100mm F2.8Lマクロ IS USM'"
          :shootingInformation="'シャッター速度1/3200 絞りF2.8 ISO400 露出補正+0.7 焦点距離100mm'"
        />
        <div class="px-1 px-sm-6 mt-5 caption text-sm-body-1 mb-6">
          雨上がりの散歩は、マクロレンズにとっては絶好のシャッターチャンスでいっぱい！ 雨のしずくと蜘蛛の糸の組み合わせは、ぜひ狙って欲しい被写体です。
        </div>
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/macro-lens/image04.jpg'"
          :photographicEquipment="'Canon EOS 70D ＋ EF100mm F2.8Lマクロ IS USM'"
          :shootingInformation="'シャッター速度1/640 絞りF2.8 ISO100 露出補正-0.7 焦点距離160mm（35mm換算）'"
        />
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/macro-lens/image05.jpg'"
          :photographicEquipment="'Canon EOS 70D ＋ EF100mm F2.8Lマクロ IS USM'"
          :shootingInformation="'シャッター速度1/250 絞りF3.5 ISO800 焦点距離160mm（35mm換算）'"
        />
        <!--==================== ピントが命！マクロ撮影時の注意点と撮り方のコツ ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">ピントが命！マクロ撮影時の注意点と撮り方のコツ</v-sheet>
        <div class="px-1 px-sm-6 mt-5 mb-7 caption text-sm-body-1">
          素敵な写真がいろいろ撮れる反面、撮影の際に気を付けなければならない点が多いのもマクロレンズ。
          まずピントの合う範囲が非常にシビアなので、できる事なら同じシーンでも何カットか連続して撮影して確実にピントのあったショットを抑えたいところ。特に野外での撮影は、風などの影響で被写体そのものが動くことも多く、いくら三脚を使用してピントを合わせてもピントが微妙に合っていないことも多いです。また、手振れ、被写体ブレを防ぐためにもできるだけ速いシャッタースピードで撮影することをおすすめします。
          <br /><br />
          花だけでなく、昆虫の撮影でもマクロレンズならではの独特な世界を表現できます。
        </div>
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/macro-lens/image06.jpg'"
          :photographicEquipment="'Canon EOS 7D ＋ EF100mm F2.8Lマクロ IS USM'"
          :shootingInformation="'シャッター速度1/400 絞りF3.5 ISO800 露出補正+1.3 焦点距離160mm （35mm換算）'"
        />
        <br />
        <shootingInformation
          :src="'/ec/images2/special/general/photo_mono/macro-lens/image07.jpg'"
          :photographicEquipment="'SONY α9＋SIGMA MC-11 + Canon EF100mm F2.8Lマクロ IS USM'"
          :shootingInformation="'シャッター速度1/800 絞りF2.8 ISO800 焦点距離100mm'"
        />
        <div class="mt-7">
          もちろんアップの写真ばかりでなく、通常の中望遠レンズとしての撮影もしっかりとこなせます。
          <shootingInformation
            :src="'/ec/images2/special/general/photo_mono/macro-lens/image08.jpg'"
            :photographicEquipment="'Canon EOS 5D Mark IV ＋ EF100mm F2.8Lマクロ IS USM'"
            :shootingInformation="'シャッター速度1/250 絞りF7.1 ISO200 焦点距離100mm'"
          />
        </div>
        <div class="mt-7">
          散歩途中に公園で出会った猫。地面にカメラを置いて目線と同じ位置から撮影してみました。
          <shootingInformation
            :src="'/ec/images2/special/general/photo_mono/macro-lens/image09.jpg'"
            :photographicEquipment="'SONY α9 ＋SIGMA MC-11 + Canon EF100mm F2.8Lマクロ IS USM'"
            :shootingInformation="'シャッター速度1/1000 絞りF2.8 ISO800 露出補正-0.3 焦点距離100mm'"
          />
        </div>
        <!--==================== 三脚を使わずに撮影できる！マクロ撮影時のおすすめカメラ設定 ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">三脚を使わずに撮影できる！マクロ撮影時のおすすめカメラ設定</v-sheet>
        <div class="px-1 px-sm-6 mt-5 mb-7 caption text-sm-body-1">
          通常マクロ撮影では三脚を使用することが多いですが、気軽にお散歩でマクロレンズ撮影を楽しむには、むしろ三脚は持ち歩かずにISO感度を少し高めにして、速いシャッター速度で、そして連写で数カットを撮るようなスタイルがおススメです。ピント合わせが少し難しいかもしれませんが、三脚を使用するよりもアングルの自由が利き、自由な構図で撮影することができます。
          <br /><br />
          初めてマクロレンズを使った時のことを思い出してみると、今まで撮れなかった写真が撮れて自分の写真がすごく上達したような錯覚を起こすぐらい感動したものです（笑）。マクロレンズはそういった魅力を持っているすごいレンズだと思います。この春、みなさんもマクロレンズを持ってお散歩撮影してみませんか？
        </div>
        <!--==================== 各社の代表的なマクロレンズ ====================-->
        <v-sheet class="mt-12 white--text py-2 px-4 rounded-lg" color="#2b2929">三脚を使わずに撮影できる！マクロ撮影時のおすすめカメラ設定</v-sheet>
        <productAppeal :mainProductList="macroLensList" :sm="4" :maxWidth="'154'" :maxHeight="'154'"></productAppeal>
        <div class="px-1 px-sm-6 mt-5 mb-7 text-body-1">
          <v-card flat class="line-g">
            <v-container>
              <v-row class="mt-sm-7">
                <v-col cols="12" sm="6" class="pa-4">
                  <p>坂井田富三 -sAka-</p>
                  <p class="pl-4">
                    写真家（日本写真家協会JPS会員）<br />
                    1967年愛知県生まれ。<br />
                    現在は横浜市在住。<br />
                    スポーツ写真と愛猫（ブリティッシュショートヘア）のライカとエルマーの撮影をメインに活動中。
                  </p>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img
                    src="/ec/images2/special/general/photo_mono/macro-lens/sakaida1.jpg"
                    alt="坂井田富三"
                    max-width="198"
                    max-height="264"
                    class="mx-auto"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
        <!--==================== 今回使用したアイテム・おすすめアクセサリー ====================-->
        <v-sheet class="mt-12 mb-6 white--text py-2 px-4 rounded-lg" color="#2b2929">今回使用したアイテム・おすすめアクセサリー</v-sheet>
        <product-list-by-special-id class="mb-5" :specialId="3347" />

        <!--banner-->
        <div class="mt-7 s-bnr">
          <p class="text-h6 text-sm-h4">バックナンバー</p>
          <recommendedFeatures :recommendedFeaturesList="backNumberList" />
        </div>
        <div class="mt-7 s-bnr">
          <p class="text-h6 text-sm-h4">おすすめ特集・サービス</p>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
        </div>
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
import ProductAppeal from '@/components/common/special/productAppeal.vue';
import ShootingInformation from '@/components/common/special/shootingInformation.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'macro-lens',
  components: {
    productAppeal: ProductAppeal,
    shootingInformation: ShootingInformation,
    'product-list-by-special-id': ProductListBySpecialId,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'photo＋Mono特集 Vol.6 | 100mmマクロレンズ特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '話題の商品・気になる商品の使い心地を気鋭の現役プロカメラマンがレビューレポート。vol.6 100mmマクロレンズ特集  | 近所にも魅力的な被写体がいっぱい！「マクロレンズでお散歩撮影を楽しむ」')

    const state = reactive({
      mainProductJanCode: ['4960999635170'],
      mainProductList: [] as Array<ProductDetail>,
      macroLensJanCode: ['4960999635170', '4549292090130', '4960759025159', '4960759025623', '4905524935493', '4548736043930', '4961333163038', '4549212273728', '4549077359964', '4545350041236', '4547410206166', '4960371006031', '4960371006048', '0085126258542', '0085126258559'],
      macroLensList: [] as Array<ProductDetail>,
      backNumberList: [
        {
          href: '/ec/special/general/photo_mono/g9pro',
          img: 'https://shop.kitamura.jp/images/banner/5093.jpg',
          alt: 'vol.5 Panasonic LUMIX G9 PRO'
        },
        {
          href: '/ec/special/general/photo_mono/a7r3-a9',
          img: 'https://shop.kitamura.jp/images/banner/4998.jpg',
          alt: 'vol.4 SONY α7RⅢ| α7RⅡやα9と比較しながらプロカメラマンが実写レビューレポート'
        },
        {
          href: '/ec/special/general/photo_mono/omd-em1',
          img: 'https://shop.kitamura.jp/images/banner/4841.jpg',
          alt: 'vol.3 OLYMPUS OM-D E-M1 MarkⅡ| 最強の手ぶれ補正性能！手持ちでも本格的な夜景撮影を可能に'
        },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lens',
          img: 'https://shopimg.kitamura.jp/images/banner/3016.jpg',
          alt: 'おすすめレンズ特集'
        },
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/list?category=&narrow1=&narrow2=&type=u&r=',
          img: 'https://shop.kitamura.jp/images/banner/4637.gif',
          alt: '新着中古'
        }
      ],
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // マクロレンズリスト
        const productListResult = await ProductService.fetchProducts(state.macroLensJanCode, true);
        state.macroLensList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
        // マクロレンズリスト
        state.macroLensList = [] as Array<ProductDetail>;
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
.s-bnr p {
  background: rgba(0, 0, 0, 0) linear-gradient(transparent 70%, #ddd 70%) repeat scroll 0 0;
  font-family: 'ヒラギノ角ゴ Pro W3', 'メイリオ', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
  padding-left: 10px;
}
</style>