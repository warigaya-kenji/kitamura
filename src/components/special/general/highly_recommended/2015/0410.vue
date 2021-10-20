<template>
  <v-app>
    <div class="0410">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <router-link to="/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2015/0410/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>

        <div class="mt-8 pa-4">
          <!--こんな悩みを解消できる！「BLaKPIXEL GoWing レンズホルダー」-->
          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>こんな悩みを解消できる！「BLaKPIXEL GoWing レンズホルダー」
            </h2>
            <p>
              撮影中にレンズ交換をしようとして、鞄を開けてをガサゴソ・・・もたもたしている間にシャッターチャンスを逃してしまった！<br />
              はたまた、急いでレンズ交換している最中にレンズを落としてしまった！<br />
              雨が降っていたり、着込んでいたり、暗い場所でのレンズ交換が億劫でレンズ交換をあきらめてしまった！<br />
              こんな悩みを解消できる便利グッズが『BLaKPIXEL GoWing レンズホルダー』です。
            </p>
            <div class="d-flex flex-column justify-space-between align-center mt-4">
              <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/0-1.jpg"></v-img>
            </div>
          </section>
          <hr />
          <!--5秒でレンズ交換可能！？なんと言っても素早くレンズ交換可能-->

          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>5秒でレンズ交換可能！？なんと言っても素早くレンズ交換可能
            </h2>
            <p>
              まずは、素早くレンズ交換する様子を動画でご確認ください。<br />
              交換レンズをストラップで吊った状態で持ち歩けるので、鞄を（下ろして）開けてレンズを出したり、交換し終えたレンズを収納して鞄を閉める（掛けなおす）という時間を短縮できます。
            </p>
            <v-responsive :aspect-ratio="16 / 9">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GaPyjxQsOeI" frameborder="0" allowfullscreen></iframe>
            </v-responsive>
            <small class="text-center">※動画は、旧製品の動画です。新製品には、ボディキャップが付属します</small>
          </section>
          <hr />
          <!--GoWing レンズホルダーの使いやすさの秘密は、工夫されたストラップの取り付け金具-->
          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>GoWing レンズホルダーの使いやすさの秘密は、工夫されたストラップの取り付け金具
            </h2>
            <p>
              作りとしては、シンプルな両側にマウントがついた『BLaKPIXEL GoWing
              レンズホルダー』。一番の注目点はストラップの取り付け金具です。反対側の金具と、中で棒でつながっているので、同じ向きで回転します。金具の中の棒を中心にクルクル回るようになっていて重いレンズをつけると自然と下を向く仕組みになっています。
              これで、変な向きで止まったりせず、取り付け後はレンズが付いているマウントが下に向きスムーズなレンズ交換を実現します。
            </p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/5-1.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/5-2.jpg"></v-img>
              </v-col>
            </v-row>
          </section>
          <hr />
          <!--身軽にレンズを持ち歩ける-->
          <section>
            <h2 class="text-h6 font-weight-bold mb-4"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>身軽にレンズを持ち歩ける</h2>
            <p>
              レンズにストラップを付けて肩から下げるので、鞄さえ持たずに身軽に交換レンズを持って撮影に行けます。車で出かける場合は、車に鞄を置いて撮影時には交換レンズだけ持って行けるので便利です。荷物がかさ張るし、交換レンズはいいかな、とあきらめていた方も、ストレスなく交換レンズを持って行こうと思えます！
            </p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/3-1.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/1-2.jpg"></v-img>
              </v-col>
            </v-row>
          </section>

          <hr />
          <!--シャッターチャンスを逃さず、撮影の幅が広がる-->
          <section>
            <h2 class="text-h6 font-weight-bold mb-4">
              <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>シャッターチャンスを逃さず、撮影の幅が広がる
            </h2>
            <p>
              レンズのマウント部にホコリが入るのを防ぐ為、便利なボディキャップ（※旧製品は別売）。ボディキャップホルダーが付いているので、レンズ交換時にボディキャップを落とすこともなく、スムーズにレンズ交換が可能です。
            </p>
            <p>収納時は、両側にレンズをつけておくことで、整理整頓にも便利です。</p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/2-1.jpg"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/general/highly_recommended/2015/0410/2-2.jpg"></v-img>
              </v-col>
            </v-row>
          </section>
          <hr />
          <!--カメラ専門店だからこそおすすめしたい撮影の便利グッズ-->
          <section>
            <h2 class="text-h6 font-weight-bold mb-4">カメラ専門店だからこそおすすめしたい撮影の便利グッズ</h2>
            <p>
              レンズ交換を頻繁に行うイベントなどのアクティブなカメラマンはもちろん
              「荷物になるし、どうせレンズ交換はしないだろうなぁ」とあきらめていた人も、これなら気軽に持っていけますね♪
            </p>
            <p>スナップ撮影やモデル撮影会などで活用して、今まで撮れなかった写真にもぜひチャレンジください！</p>
          </section>

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
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';

export default Vue.extend({
  name: '0410',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: (props, context) => {
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

<style lang="scss" scoped>
section {
  background: url(/ec/images2/special/general/highly_recommended/2015/0410/bk_line.gif);
  padding: 32px;
}
hr {
  background: #fff;
  border: 0;
  border-bottom: #999 1px dashed;
  height: 30px;
  margin-bottom: 30px;
}
</style>