<template>
  <v-app>
    <div class="highly-recommended-2015-0501">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <titleImage></titleImage>

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'【完了商品】ブラックラピッド クロスショット RS16SC10-BL・JOBY ウルトラフィットハンドストラップ&ウルトラプレート 012779 セット'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'JOBYウルトラプレートを使えば、速写ストラップをつけたまま、三脚が使える。一眼ユーザーの要望を叶える組み合わせをご提案。お得なウルトラフィットハンドストラップ付がおすすめ。'"
          :btntxt="'商品ページを見る'"
        />

        <!--==================== 三脚が使える！速写ストラップユーザーの悩みを解決！ ====================-->
        <content2015
          :subtitle="'三脚が使える！速写ストラップユーザーの悩みを解決！'"
          :txt="'「一度使ったらもう戻れない」といわれるほど、便利な速写ストラップ。\n一眼レフを無造作に逆さ吊りしているカメラマンさんの姿は「カメラを使いこなしている」雰囲気が感じられ、格好良く見えませんか？\nしかし、速写ストラップユーザーの共通の悩み、それは「三脚が使えないこと」。\nその悩みを解決する裏技、JOBYウルトラプレートの活用法をご紹介します。\n今回は最もポピュラーな速写ストラップ「ブラックラピッドCROSS SHOT」と、ハンドストラップ付でお得な「JOBY 012779 ウルトラフィット ハンドストラップ＆ウルトラプレート」の組み合わせでのご提案です。'"
          :images="['/ec/images2/special/general/highly_recommended/2015/0501/1-1.jpg', '/ec/images2/special/general/highly_recommended/2015/0501/1-2.jpg']"
          :sm="12"
          :maxWidth="840"
        ></content2015>
        <hr />

        <!--==================== アルカスイス規格のウルトラプレート 2つの三脚穴が活躍！ ====================-->
        <content2015
          :subtitle="'アルカスイス規格のウルトラプレート 2つの三脚穴が活躍！'"
          :txt="'速写ストラップの多くは、カメラの三脚穴に装着して使用します。\nそのため、ストラップを装着したままだと、三脚を使うたびにストラップをはずさなくてはなりません。\nJOBYウルトラプレートはアルカスイス互換規格プレートなので、アルカスイス雲台の三脚にそのまま装着することができます。\nアルカスイス雲台の少ない、国内メーカーの三脚でも安心。'"
          :txt2="'プレートには2つの三脚穴が用意されているので、一方にストラップを、もう一方を三脚やクイックシューを装着することができます。\nシンプルな形状なので、カメラの美観を損ねることなく、邪魔にならない拡張が可能です。'"
          :images="['/ec/images2/special/general/highly_recommended/2015/0501/2-1.jpg', '/ec/images2/special/general/highly_recommended/2015/0501/2-2.jpg']"
          :sm="12"
          :maxWidth="840"
        ></content2015>
        <hr />

        <!--==================== 多様なシチュエーションに対応できるCROSS SHOT とJOBY012779の組み合わせ ====================-->
        <content2015
          :subtitle="'多様なシチュエーションに対応できるCROSS SHOT とJOBY012779の組み合わせ'"
          :txt="'あえてメーカーの違う２商品の組み合わせをおすすめする理由は？\n\nその① オールラウンドな速写ストラップ CROSS SHOTは多くの一眼、用途にフィットします。その② カラビナ式のブラックラピッドはストラップの着脱が容易。撮影スタイルをすばやくチェンジすることができます。\nその③ ウルトラフィットハンドストラップ付なら、撮影時の安定性が向上。カメラの滑落防止にも役立ちます。\n\n純正アクセサリーやメーカー単独では実現できない、多様なシチュエーションに対応できる拡張性がこの組み合わせのイチオシポイントです。'"
          :youtubetxt="'▼ブラックラピッド クロスショット × JOBY ウルトラフィットハンドストラップの動画を見る'"
          :youtubeLink="'https://www.youtube.com/embed/miG3fdjNi1U'"
        ></content2015>
        <hr />

        <!--==================== 多彩なラインナップ  ストラップから始まるカスタマイズの楽しみ ====================-->
        <content2015
          :subtitle="'多彩なラインナップ ストラップから始まるカスタマイズの楽しみ'"
          :txt="'ブラックラピッドのほかにも、各社から多彩な速写ストラップが発売されています。\n自転車やバイクでの移動撮影が多い方には、ストラップの長さを容易に変更でき、体に密着させることが出来るタイプがおすすめ。歩きでの撮影が多い方には、CROSS SHOTのように、斜めがけでカメラをスライドさせられるタイプが使いやすいでしょう。\nやはり、三脚が使えなくなる、ということを心配されるお客様が多いので、是非、今回ご紹介したプレートとの組み合わせをお試しいただきたいと思います。\nカメラはまだまだ純正のまま使う方が多いのですが、多彩な社外アクセサリーを組み合わせることで、利便性が高まり、愛着も深まります。\n手軽なストラップ交換をきっかけに、カメラのカスタマイズを楽しんでいただけたら、うれしいですね。'"
          :image="'https://shop.kitamura.jp/ts_rsc/604/images/4-1.jpg'"
          :order="false"
        ></content2015>
        <hr />
        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TitleImage from '@/components/common/special/highly-recommended/title-image.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SubText from '@/components/common/special/subtext.vue';
import Content2015 from '@/components/common/special/highly-recommended/content.vue';

export default Vue.extend({
  name: 'highly-recommended-2015-0501',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    subText: SubText,
    titleImage: TitleImage,
    content2015: Content2015
  },
  setup: () => {
    document.title = '速写ストラップをつけたまま、三脚を使う裏技! ブラックラピッド × JOBY | 今週のイチオシ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '速写ストラップをつけたまま、三脚を使う裏技! ブラックラピッド × JOBY | カメラストラップはカメラのキタムラへお任せください♪')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'スタッフイチオシ',
          linkUrl: '/ec/special/general/highly_recommended',
          disabled: false
        },
        {
          path: '速写ストラップをつけたまま、三脚を使う裏技! ブラックラピッド × JOBY | 今週のイチオシ',
          disabled: true
        }
      ],
      mainProductJanCode: ['2239530002262',],
      mainProductList: [] as Array<ProductDetail>
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
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

