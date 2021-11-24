<template>
  <v-app>
    <div class="general-summerhomework">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <!-- ↓url copy -->
        <urlcopy />

        <p class="mb-0 text-body-2">カメラ専門店のスタッフがおすすめする、夏休み 自由研究特集</p>
        <v-img
          :src="
            $vuetify.breakpoint.mdAndUp
              ? '/ec/images2/special/general/summerhomework/jiyukenq_950.gif'
              : '/ec/images2/special/general/summerhomework/sb_hw640x180.gif'
          "
          alt="カメラ専門店のスタッフがおすすめする夏休み自由研究特集"
          class="mx-auto"
        />
        <p class="pl-12">
          夏休みは楽しいけれど、やらなきゃいけない宿題も盛りだくさん！<br />
          そこで、カメラのキタムラのスタッフがおすすめする「小学生向け自由研究」を集めてみました。<br />
          早いうちから時間をかけてじっくり作成する「観察日記」や「天体観測」、がんばれば3日でできる工作や実験などいろいろご用意！
          <br /><br />
          夏休みの宿題は早めに終わらせて、心おきなく遊びまくろう！
        </p>

        <v-container class="mb-4">
          <v-row>
            <v-col cols="12" sm="6" v-for="(independentStudy, i) in independentStudyList" :key="i">
              <a :href="independentStudy.href">
                <v-hover v-slot="{ hover }">
                  <v-img :src="hover ? independentStudy.onImage : independentStudy.offImage" max-width="314" height="auto" class="mx-auto"></v-img>
                </v-hover>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <div class="itemspls">
          <h2 class="itemran">自由研究におすすめの商品あります</h2>

          <div class="fullNote pa-5">
            <h3 class="text-h6 font-weight-bold">
              顕微鏡モード搭載カメラで、植物/昆虫観察しよう<img src="/ec/images2/special/general/summerhomework/ot_01.gif" class="v-md" />
            </h3>
            <p>小さな植物や昆虫も、顕微鏡モードつきのカメラなら簡単に撮影できます。</p>
            <v-container class="pa-0">
              <v-row dense>
                <v-col cols="12" sm="3" v-for="(mainProduct, i) in mainProductList" :key="i">
                  <router-link :to="`/ec/pd/${mainProduct.janCode}`"
                    ><v-img :src="mainProduct.images[0].imagePath.replace(/TN/g, 'M')" max-width="211" height="auto" class="mx-auto"></v-img>
                  </router-link>
                  <p>
                    価格<br /><span class="red--text font-weight-bold text-h6">¥52,470</span><br />
                    <router-link :to="`/ec/pd/${mainProduct.janCode}`">{{ mainProduct.itemName }}</router-link>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <div class="fullNote pa-5">
            <h3 class="text-h6 font-weight-bold mb-2">他にもこんなユニークな商品があります♪</h3>
            <v-container class="pa-0">
              <v-row dense>
                <v-col cols="12" sm="3" v-for="(uniqueProduct, i) in uniqueProductList" :key="i">
                  <p class="mb-0 text-body-2">{{ uniqueProductTextList[i] }}</p>
                  <router-link :to="`/ec/pd/${uniqueProduct.janCode}`"
                    ><v-img :src="uniqueProduct.images[0].imagePath.replace(/TN/g, 'M')" max-width="211" height="auto" class="mx-auto"></v-img>
                  </router-link>
                  <p>
                    価格<br /><span class="red--text font-weight-bold text-h6">¥52,470</span><br />
                    <router-link :to="`/ec/pd/${uniqueProduct.janCode}`">{{ uniqueProduct.itemName }}</router-link>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <br />

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <!--↓特集-->
        <h4 class="sougo mt-7 mb-2">おすすめ特集・プリントサービス</h4>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'general-summerhomework',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = '夏休み 自由研究特集 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'カメラ専門店のスタッフがおすすめする、夏休み自由研究特集。早いうちからじっくりやる観察日記や天体観測、がんばれば3日でできる工作や実験も用意しました。')
    const state = reactive({
      independentStudyList: [
        { href: '/ec/special/general/summerhomework/camera', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb02_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb02_off.gif' },
        { href: '/ec/special/general/summerhomework/moon', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb03_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb03_off.gif' },
        { href: '/ec/special/general/summerhomework/recipe', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb04_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb04_off.gif' },
        { href: '/ec/special/general/summerhomework/observation-diary', onImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb06_on.gif', offImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/general/summerhomework/ctb06_off.gif' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/special/page/telephoneorder-info',
          img: 'https://shopimg.kitamura.jp/images/banner/1361.gif',
          alt: '安心・納得の電話注文'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '夏休み 自由研究特集',
          disabled: true
        }
      ],
      mainProductJanCode: ['4545350052676', '4545350052690', '4549212300844', '4961311936432'],
      mainProductList: [] as Array<ProductDetail>,
      uniqueProductJanCode: ['4955295212613', '4955295212637', '4955295711222'],
      uniqueProductList: [] as Array<ProductDetail>,
      uniqueProductTextList: ['カメラが手持ちできる、便利なデジタル顕微鏡', '倍率15倍のポケットサイズ顕微鏡。白色LEDライト付', '身近にあるコケを観察しよう★コケ観察セット']
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // ユニーク商品
        const uniqueResult = await ProductService.fetchProducts(state.uniqueProductJanCode, true);
        state.uniqueProductList = uniqueResult.items;
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
.general-summerhomework {
  p {
    font-size: 14px;
  }
  h2.itemran {
    height: 50px;
    letter-spacing: 0.05em;
    font-weight: bold;
    padding: 0 0 0 40px;
    background: url(/ec/images2/special/general/summerhomework/frag01.gif) no-repeat left;
    border-bottom: dashed #ff0000 5px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-size: 26px;
  }
  .v-md {
    vertical-align: middle;
  }
  .fullNote {
    width: 100%;
    height: auto;
    margin: 20px 0 0 0;
    padding: 20px;
    background: url(/ec/images2/special/general/summerhomework/note-01.gif) repeat-x top left;
    border-left: #cbcbcb 1px solid;
    border-bottom: #cbcbcb 1px solid;
    border-right: #cbcbcb 1px solid;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    text-align: left;
  }
  h4.sougo {
    border-bottom: 2px solid #ffcc00;
    box-sizing: border-box;
    font-weight: bold;
    height: 30px;
    width: 100%;
    font-size: 20px;
  }

  @media screen and (max-width: 639px) {
    h2.itemran {
      font-size: 18px !important;
      height: auto !important;
      line-height: 1.3em !important;
    }
  }
}
</style>