<template>
  <v-app>
    <div class="0501">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <router-link to="/ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>

        <!--↓イチオシ品-->

        <!-- ↓ 価格・ご購入ー -->
        <subText :textItem="'【完了商品】ブラックラピッド クロスショット RS16SC10-BL・JOBY ウルトラフィットハンドストラップ&ウルトラプレート 012779 セット'" />
        <priceAndPurchase
          :mainProductList="mainProductList"
          :btnColor="'red darken-2'"
          :txt="'JOBYウルトラプレートを使えば、速写ストラップをつけたまま、三脚が使える。一眼ユーザーの要望を叶える組み合わせをご提案。お得なウルトラフィットハンドストラップ付がおすすめ。'"
          :btntxt="'商品ページを見る'"
        />
        <!--==================== 三脚が使える！速写ストラップユーザーの悩みを解決！ ====================-->
        <div class="mt-8 pa-4 line-g">
          <!--↓●●店舗ブログ共有●●-->
          <h2 class="text-h6 font-weight-bold"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>三脚が使える！速写ストラップユーザーの悩みを解決！</h2>
          <div class="d-flex flex-column justify-space-between align-center mt-4">
            <v-img src="https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/1-1.gif" width="840" height="auto"></v-img>
          </div>

          <div class="line-height">
            「一度使ったらもう戻れない」といわれるほど、便利な速写ストラップ。
            一眼レフを無造作に逆さ吊りしているカメラマンさんの姿は「カメラを使いこなしている」雰囲気が感じられ、格好良く見えませんか？
            しかし、速写ストラップユーザーの共通の悩み、それは「三脚が使えないこと」。 その悩みを解決する裏技、JOBYウルトラプレートの活用法をご紹介します。
            今回は最もポピュラーな速写ストラップ「ブラックラピッドCROSS SHOT」と、ハンドストラップ付でお得な「JOBY 012779 ウルトラフィット
            ハンドストラップ＆ウルトラプレート」の組み合わせでのご提案です。
          </div>
          <v-img
            src="https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/1-1.jpg"
            width="840"
            height="auto"
            class="mx-auto"
          ></v-img>
          <v-img
            src="https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/1-2.jpg"
            width="840"
            height="auto"
            class="mx-auto"
          ></v-img>
        </div>
        <!--==================== アルカスイス規格のウルトラプレート 2つの三脚穴が活躍！ ====================-->
        <div class="my-4 pa-6 line-g">
          <h2 class="text-h6 font-weight-bold">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>アルカスイス規格のウルトラプレート 2つの三脚穴が活躍！
          </h2>
          <div class="line-height">
            速写ストラップの多くは、カメラの三脚穴に装着して使用します。
            そのため、ストラップを装着したままだと、三脚を使うたびにストラップをはずさなくてはなりません。
            JOBYウルトラプレートはアルカスイス互換規格プレートなので、アルカスイス雲台の三脚にそのまま装着することができます。
            アルカスイス雲台の少ない、国内メーカーの三脚でも安心。
          </div>
          <v-img
            src="https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/2-1.jpg"
            width="840"
            height="auto"
            class="mx-auto"
          ></v-img>
          <div class="line-height mt-5 mb-5">
            プレートには2つの三脚穴が用意されているので、一方にストラップを、もう一方を三脚やクイックシューを装着することができます。
            シンプルな形状なので、カメラの美観を損ねることなく、邪魔にならない拡張が可能です。
          </div>
          <v-img
            src="https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/2-2.jpg"
            width="840"
            height="auto"
            class="mx-auto"
          ></v-img>
        </div>
        <!--==================== 多様なシチュエーションに対応できるCROSS SHOT とJOBY012779の組み合わせ ====================-->
        <div class="my-4 pa-6 line-g">
          <h2 class="text-h6 font-weight-bold">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>多様なシチュエーションに対応できるCROSS SHOT とJOBY012779の組み合わせ
          </h2>
          <div class="line-height mt-5 mb-5">
            あえてメーカーの違う２商品の組み合わせをおすすめする理由は？<br /><br />
            その① オールラウンドな速写ストラップ CROSS SHOTは多くの一眼、用途にフィットします。<br />
            その② カラビナ式のブラックラピッドはストラップの着脱が容易。撮影スタイルをすばやくチェンジすることができます。<br />
            その③ ウルトラフィットハンドストラップ付なら、撮影時の安定性が向上。カメラの滑落防止にも役立ちます。<br /><br />純正アクセサリーやメーカー単独では実現できない、多様なシチュエーションに対応できる拡張性がこの組み合わせのイチオシポイントです。
          </div>
        </div>
        <!--==================== 多彩なラインナップ  ストラップから始まるカスタマイズの楽しみ ====================-->
        <div class="my-4 pa-6 line-g">
          <h2 class="text-h6 font-weight-bold">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>多彩なラインナップ ストラップから始まるカスタマイズの楽しみ
          </h2>
          <v-img
            src="https://ns-stg.kitamura.shop/ec/images2/special/general/highly_recommended/2015/0501/4-1.jpg"
            width="840"
            height="auto"
            class="mx-auto"
          ></v-img>
          <div class="line-height mt-5 mb-5">
            ブラックラピッドのほかにも、各社から多彩な速写ストラップが発売されています。
            自転車やバイクでの移動撮影が多い方には、ストラップの長さを容易に変更でき、体に密着させることが出来るタイプがおすすめ。
            歩きでの撮影が多い方には、CROSS SHOTのように、斜めがけでカメラをスライドさせられるタイプが使いやすいでしょう。
            やはり、三脚が使えなくなる、ということを心配されるお客様が多いので、是非、今回ご紹介したプレートとの組み合わせをお試しいただきたいと思います。
            カメラはまだまだ純正のまま使う方が多いのですが、多彩な社外アクセサリーを組み合わせることで、利便性が高まり、愛着も深まります。
            手軽なストラップ交換をきっかけに、カメラのカスタマイズを楽しんでいただけたら、うれしいですね。
          </div>
        </div>
        <br />
        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <!-- ↓ キタムラサービス -->
        <kitamuraService />
      </div>
      <!--↑イチオシ品-->
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
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import KitamuraService from '@/components/common/special/kitamura-service.vue';
import SubText from '@/components/common/special/subtext.vue';

export default Vue.extend({
  name: '0501',
  components: {
    breadcrumbs: Breadcrumbs,
    priceAndPurchase: PriceAndPurchase,
    facebookAndTwitter: FacebookAndTwitter,
    kitamuraService: KitamuraService,
    subText: SubText,
  },
  setup: (props, context) => {
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

