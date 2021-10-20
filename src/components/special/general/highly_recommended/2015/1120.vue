<template>
  <v-app>
    <div class="1120">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <router-link to="/ec/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2015/1120/pc/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </router-link>

        <!--↓イチオシ品-->
        <div class="my-4 pa-6 line-g"></div>

        <div class="mt-8 pa-4 line-g">
          <!--↓●●店舗ブログ共有●●-->
          <h2 class="text-h6 font-weight-bold"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>4Kビデオカメラの仕様を整理。SDカード購入時の注意点</h2>
          <div class="d-flex flex-column justify-space-between align-center mt-4">
            <v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/1-1.gif" width="70%" height="auto"></v-img>
          </div>

          <div class="line-height">
            4K画質のビデオカメラがお求めやすい価格帯で購入できるようになってきました。<br />
            一方、4K画質で記録ができるメモリ－カードには条件があります。<br />
            細かいところを見ていくと、なかなか分かりにくい内容になっていますので、<br />
            <strong class="font-weight-bold">
              （1）ソニー向け<br />
              （2）パナソニック向け<br />
              （3）GoPro向け<br />
            </strong>
            におすすめのメモリーカードをまとめました。<br />
            <span class="text-h4 font-weight-bold red--text">◎</span>のおすすめ品をお求めいただければ、安心してお使いいただけます。<br />
            ビデオカメラの機種によって、フルサイズのSDカードを使うモデルと、マイクロSDカードを使うモデルがあります。組み合わせるビデオカメラの対応メモリーカードのサイズにもご注意ください。
            <br /><br /><br />
          </div>

          <h2 class="text-h5 font-weight-bold"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>ソニー 4Kハンディカムと一緒に使うならこのSDカード!</h2>
          <v-row justify="center" class="mt-2">
            <v-col cols="4" v-for="(n, index) in 2" :key="index">
              <v-img :src="`/ec/images2/special/general/highly_recommended/2015/1120/pc/2-${n}.png`" max-width="100%" height="auto"></v-img>
            </v-col>
          </v-row>

          <div class="line-height">
            <br />
            ソニーのハンディカムでは、圧縮ノイズの少ないXAVC Sフォーマットでの4K動画撮影が可能です。<br />
            XAVC Sは、より高画質なビットレート<span class="amber">100Mbpsでの記録</span>と<span class="amber">60Mbpsでの記録</span>が選択できます。<br />
            現行機（2015年11月現在）での最高画質となるXAVC S 100Mbpsでの撮影には、SDXCメモリーカードのうち、<span class="amber"
              >容量64GB以上でUHS-I U3以上の性能が必要</span
            >です。 <br /><br />
          </div>

          <div>
            <h3 class="text-h6 mt-8">▼ソニー ハンディカムにおすすめのSDXCカード</h3>
            <v-row>
              <v-col cols="5">
                <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-01.png"></v-img></v-avatar>XAVC S
                100Mbps 撮影可能<br />
                ■UHS-I U3 対応 64GB以上<br />
                <router-link
                  to="/ec/list?narrow18=0&keyword=XAVCS100対応SD&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=XAVCS100対応SD&x=29&y=14"
                >
                  <v-img
                    src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                    alt="商品一覧を見る"
                    width="100%"
                    height="auto"
                    class="my-6 hover"
                  ></v-img
                ></router-link>
              </v-col>
              <v-spacer cols="1"></v-spacer>
              <v-col cols="5">
                <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-02.png"></v-img></v-avatar>XAVC S
                60Mbps 撮影可能<br />
                ■SDスピードクラス Class10 64GB以上<br />
                <router-link
                  to="/ec/list?narrow18=0&keyword=XAVCS60対応SD&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=XAVCS60対応SD&x=41&y=13"
                >
                  <v-img
                    src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                    alt="商品一覧を見る"
                    width="100%"
                    height="auto"
                    class="my-6 hover"
                  ></v-img
                ></router-link>
              </v-col>
              <v-spacer cols="1"></v-spacer>
            </v-row>

            <h3 class="text-h6 mt-8">▼ソニー アクションカムにおすすめのマイクロSDXCカード</h3>
            <v-row>
              <v-col cols="5">
                <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-01.png"></v-img></v-avatar>XAVC S
                100Mbps 撮影可能<br />
                ■UHS-I U3 対応 64GB以上<br />
                <router-link
                  to="/ec/list?narrow18=0&keyword=XAVCS100対応micro&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=XAVCS100対応micro&x=16&y=9"
                >
                  <v-img
                    src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                    alt="商品一覧を見る"
                    width="100%"
                    height="auto"
                    class="my-6 hover"
                  ></v-img
                ></router-link>
              </v-col>
              <v-spacer cols="1"></v-spacer>
              <v-col cols="5">
                <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-02.png"></v-img></v-avatar>XAVC S
                60Mbps 撮影可能<br />
                ■SDスピードクラス Class10 64GB以上<br />
                <router-link
                  to="/ec/list?narrow18=0&keyword=XAVCS60対応micro&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=XAVCS60対応micro&x=33&y=16"
                >
                  <v-img
                    src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                    alt="商品一覧を見る"
                    width="100%"
                    height="auto"
                    class="my-6 hover"
                  ></v-img
                ></router-link>
              </v-col>
              <v-spacer cols="1"></v-spacer>
            </v-row>
          </div>

          <h2 class="text-h5 font-weight-bold mt-12">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>パナソニック 4Kデジタルビデオカメラと一緒に使うならこのSDカード!
          </h2>
          <v-row justify="center" class="mt-2">
            <v-col cols="4" v-for="(n, index) in 2" :key="index">
              <v-img :src="`/ec/images2/special/general/highly_recommended/2015/1120/pc/3-${n}.png`" max-width="100%" height="auto"></v-img>
            </v-col>
          </v-row>
          <div class="line-height">
            <br />
            パナソニックのデジタルビデオカメラはソニーに比べ、SDカードへの要求は低くなっており、
            <span class="amber">SDスピードクラス Class10 容量32GBまでのSDHCカード、64GBまでのSDXCカード</span>が対応しています。<br /><br />
          </div>

          <h3 class="text-h6 mt-8">▼パナソニック デジタルビデオカメラにおすすめ</h3>
          <v-row>
            <v-col cols="5">
              <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-01.png"></v-img></v-avatar>4K30P
              撮影可能<br />
              ■SDスピードクラス Class10<br /><span class="ml-3">32GB SDHCカード / 64GB SDXCカード</span>
            </v-col>
            <v-spacer cols="1"></v-spacer>
            <v-col cols="5">
              <router-link to="/ec/list?narrow18=0&keyword=4K30P対応SD&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=4K30P対応SD&x=22&y=9">
                <v-img
                  src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                  alt="商品一覧を見る"
                  width="100%"
                  height="auto"
                  class="my-6 hover"
                ></v-img
              ></router-link>
            </v-col>
            <v-spacer cols="1"></v-spacer>
          </v-row>

          <h3 class="text-h6 mt-6">▼パナソニック ウエアラブルカメラにおすすめ</h3>
          <v-row>
            <v-col cols="5">
              <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-01.png"></v-img></v-avatar>4K30P
              撮影可能<br />
              ■SDスピードクラス Class10<br /><span class="ml-3">32GB microSDHC / 64GB microSDXC</span>
            </v-col>
            <v-spacer cols="1"></v-spacer>
            <v-col cols="5">
              <router-link
                to="/ec/list?narrow18=0&keyword=4K30P対応micro&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=4K30P対応micro&x=48&y=16"
              >
                <v-img
                  src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                  alt="商品一覧を見る"
                  width="100%"
                  height="auto"
                  class="my-6 hover"
                ></v-img
              ></router-link>
            </v-col>
            <v-spacer cols="1"></v-spacer>
          </v-row>

          <h2 class="text-h5 font-weight-bold mt-12"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>4K GoProと一緒に使うならこのSDカード!</h2>
          <div class="d-flex flex-column justify-space-between align-center mt-4">
            <v-img src="	/ec/images2/special/general/highly_recommended/2015/1120/pc/4-1.png" width="70%" height="auto"></v-img>
          </div>
          <p class="line-height">
            本体の小さなGoProは、メモリーカードも小さな
            <span class="amber">マイクロSDHC、マイクロSDXC</span>に対応。<br /><span class="amber">SDスピードクラスclass10</span> 又は
            <span class="amber">UHS-I U1以上</span>、容量は<span class="amber">最大64GBまで</span>の対応です。
          </p>

          <h3 class="text-h6 mt-6">▼GoPro 4K対応モデルにおすすめのマイクロSDHC・マイクロSDXCカード</h3>
          <v-row>
            <v-col cols="5">
              <v-avatar size="40" class="ma-2"><v-img src="/ec/images2/special/general/highly_recommended/2015/1120/pc/maru-01.png"></v-img></v-avatar>GoPro
              4K対応モデル<br />
              SDスピードクラス Class10<br /><span class="ml-3">32GB microSDHC / 64GB microSDXC</span>
            </v-col>
            <v-spacer cols="1"></v-spacer>
            <v-col cols="5">
              <router-link
                to="/ec/list?narrow18=0&keyword=SDSQXAF&category=メモリーカード・記録メディア&index=all&path=メモリーカード・記録メディア&q=SDSQXAF&searchbox=1"
              >
                <v-img
                  src="/ec/images2/special/general/highly_recommended/2015/1120/pc/itmall-btn.gif"
                  alt="商品一覧を見る"
                  width="100%"
                  height="auto"
                  class="my-6 hover"
                ></v-img
              ></router-link>
            </v-col>
            <v-spacer cols="1"></v-spacer>
          </v-row>
        </div>
        <!--↑イチオシ品-->

        <div class="my-4 pa-6 line-g"></div>

        <h2 class="text-h6 white--text font-weight-bold pa-2 red darken-2">今週のイチオシ バックナンバー</h2>
        <v-row class="pa-2">
          <v-col cols="6">
            <p class="text-h5 font-weight-bold my-4">カメラ用品・家電</p>
            <p>
              <a href="/ec/special/general/highly_recommended/#bk-no"><span class="red--text">→</span>その他バックナンバーを見る</a>
            </p>
          </v-col>
          <v-col cols="6">
            <p class="text-h5 font-weight-bold my-4">スマホアクセサリー</p>
            <p>
              <a href="/ec/special/general/highly_recommended/#bk-no"><span class="red--text">→</span>その他バックナンバーを見る</a>
            </p>
          </v-col>
        </v-row>
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
  name: '1120',
  components: {
    breadcrumbs: Breadcrumbs
  },
  setup: (props, context) => {
    document.title = '4Kビデオカメラでの撮影に適したSDカードをまとめました | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '4K画質のビデオカメラでお使いいただけるSDカード・マイクロSDカードをまとめました。4K対応SDカード・マイクロSDカードはカメラのキタムラへお任せください♪')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '4Kビデオカメラでの撮影に適したSDカードをまとめました | 今週のイチオシ',
          disabled: true
        }
      ],
      mainProductJanCode: ['4547410437980', '4547410440386'],
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

<style scoped>
.line-g {
  background: url(/ec/images2/special/general/highly_recommended/2015/1120/pc/bk_line.gif);
}
</style>