<template>
  <v-app>
    <div class="highly-recommended-2015-0410">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <titleImage></titleImage>

        <div class="mt-8 pa-4">
          <!--こんな悩みを解消できる！「BLaKPIXEL GoWing レンズホルダー」-->
          <content2015
            :subtitle="'こんな悩みを解消できる！「BLaKPIXEL GoWing レンズホルダー」'"
            :txt="'撮影中にレンズ交換をしようとして、鞄を開けてをガサゴソ・・・もたもたしている間にシャッターチャンスを逃してしまった！\nはたまた、急いでレンズ交換している最中にレンズを落としてしまった！\n雨が降っていたり、着込んでいたり、暗い場所でのレンズ交換が億劫でレンズ交換をあきらめてしまった！\nこんな悩みを解消できる便利グッズが『BLaKPIXEL GoWing レンズホルダー』です。'"
            :image="'/ec/images2/special/general/highly_recommended/2015/0410/0-1.jpg'"
          ></content2015>
          <hr />

          <!--5秒でレンズ交換可能！？なんと言っても素早くレンズ交換可能-->
          <content2015
            :subtitle="'5秒でレンズ交換可能！？なんと言っても素早くレンズ交換可能'"
            :txt="'まずは、素早くレンズ交換する様子を動画でご確認ください。\n交換レンズをストラップで吊った状態で持ち歩けるので、鞄を（下ろして）開けてレンズを出したり、交換し終えたレンズを収納して鞄を閉める（掛けなおす）という時間を短縮できます。'"
            :youtubetxt="'※動画は、旧製品の動画です。新製品には、ボディキャップが付属します'"
            :youtubeLink="'https://www.youtube.com/embed/GaPyjxQsOeI'"
          ></content2015>
          <hr />

          <!--GoWing レンズホルダーの使いやすさの秘密は、工夫されたストラップの取り付け金具-->
          <content2015
            :subtitle="'GoWing レンズホルダーの使いやすさの秘密は、工夫されたストラップの取り付け金具'"
            :txt="'作りとしては、シンプルな両側にマウントがついた『BLaKPIXEL GoWingレンズホルダー』。一番の注目点はストラップの取り付け金具です。反対側の金具と、中で棒でつながっているので、同じ向きで回転します。金具の中の棒を中心にクルクル回るようになっていて重いレンズをつけると自然と下を向く仕組みになっています。これで、変な向きで止まったりせず、取り付け後はレンズが付いているマウントが下に向きスムーズなレンズ交換を実現します。'"
            :images="['/ec/images2/special/general/highly_recommended/2015/0410/5-1.jpg', '/ec/images2/special/general/highly_recommended/2015/0410/5-2.jpg']"
            :maxWidth="440"
          ></content2015>
          <hr />

          <!--身軽にレンズを持ち歩ける-->
          <content2015
            :subtitle="'身軽にレンズを持ち歩ける'"
            :txt="'レンズにストラップを付けて肩から下げるので、鞄さえ持たずに身軽に交換レンズを持って撮影に行けます。車で出かける場合は、車に鞄を置いて撮影時には交換レンズだけ持って行けるので便利です。荷物がかさ張るし、交換レンズはいいかな、とあきらめていた方も、ストレスなく交換レンズを持って行こうと思えます！'"
            :images="['/ec/images2/special/general/highly_recommended/2015/0410/3-1.jpg', '/ec/images2/special/general/highly_recommended/2015/0410/1-2.jpg']"
            :maxWidth="440"
          ></content2015>
          <hr />

          <!--シャッターチャンスを逃さず、撮影の幅が広がる-->
          <content2015
            :subtitle="'シャッターチャンスを逃さず、撮影の幅が広がる'"
            :txt="'イベントや、鉄道写真・スナップ撮影などで素早くレンズを交換でき、シャッターチャンスを逃しません。\nモデル撮影会では全身とバストアップの写真を両方残せたり、運動会や結婚式では、全体の雰囲気と背景をぼかした印象的な写真の両方を残せたりと、撮影の幅が広がります。'"
            :images="['/ec/images2/special/general/highly_recommended/2015/0410/2-1.jpg', '/ec/images2/special/general/highly_recommended/2015/0410/2-2.jpg']"
            :maxWidth="440"
          ></content2015>

          <!--ボディキャップが付属！収納時の整理整頓にも便利-->
          <content2015
            :subtitle="'ボディキャップが付属！収納時の整理整頓にも便利'"
            :txt="'レンズのマウント部にホコリが入るのを防ぐ為、便利なボディキャップ（※旧製品は別売）。ボディキャップホルダーが付いているので、レンズ交換時にボディキャップを落とすこともなく、スムーズにレンズ交換が可能です。\n\n収納時は、両側にレンズをつけておくことで、整理整頓にも便利です。'"
            :images="['/ec/images2/special/general/highly_recommended/2015/0410/4-2.jpg', '/ec/images2/special/general/highly_recommended/2015/0410/4-1.jpg']"
            :maxWidth="440"
          ></content2015>
          <hr />

          <!--カメラ専門店だからこそおすすめしたい撮影の便利グッズ-->
          <content2015
            :subtitle="'カメラ専門店だからこそおすすめしたい撮影の便利グッズ'"
            :isGoodIcon="false"
            :txt="'レンズ交換を頻繁に行うイベントなどのアクティブなカメラマンはもちろん\n「荷物になるし、どうせレンズ交換はしないだろうなぁ」とあきらめていた人も、これなら気軽に持っていけますね♪\nスナップ撮影やモデル撮影会などで活用して、今まで撮れなかった写真にもぜひチャレンジください！'"
            :maxWidth="440"
          ></content2015>
          <hr />

          <!--お客様からのレビューをお待ちしております-->
          <section>
            <p class="text-h6 font-weight-bold mb-4">お客様からのレビューをお待ちしております</p>
          </section>
        </div>
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
import Content2015 from '@/components/common/special/highly-recommended/content.vue';


export default Vue.extend({
  name: 'highly-recommended-2015-0410',
  components: {
    breadcrumbs: Breadcrumbs,
    titleImage: TitleImage,
    content2015: Content2015
  },
  setup: () => {
    document.title = '5秒でレンズ交換が可能!?『BLaKPIXEL GoWing レンズホルダー』 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '5秒でレンズ交換が可能!?『BLaKPIXEL GoWing レンズホルダー』')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '5秒でレンズ交換が可能!?『BLaKPIXEL GoWing レンズホルダー』',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410437980'],
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