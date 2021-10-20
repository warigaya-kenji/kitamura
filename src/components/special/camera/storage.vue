<template>
  <v-app>
    <div class="storage">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <urlcopy />

        <!-- ↓ 画像の読み込み -->
        <v-img class="mb-5" src="/ec/images2/special/camera/storage/topbnr768130.jpg" max-width="100%" height="auto" />
        <!-- ↑ 画像の読み込み -->
        <p class="text-subtitle-2 mb-4 pa-0">カメラやレンズの保管におすすめの防湿庫、防湿庫の選び方や防湿用品のご紹介</p>

        <v-container class="v-container" v-if="$vuetify.breakpoint.mdAndUp">
          <v-row no-gutters>
            <v-col v-for="(navi, index) in naviList" :key="`navi-${index}`">
              <v-hover v-slot="{ hover }">
                <v-btn block :href="navi.href" :elevation="hover ? 12 : 2" class="nbtna" height="60px"
                  ><span>{{ navi.naviItem }}</span></v-btn
                >
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <tableOfContentsNavi :naviList="naviList" v-if="$vuetify.breakpoint.smAndDown" />

        <h2 class="subtitle mt-10 text-h5" id="04">おすすめ防湿庫</h2>

        <!--東洋リビング防湿庫-->
        <h3 class="mt-10 mb-6 left text-left cyan lighten-4 pa-4">東洋リビング 防湿庫</h3>
        <v-container>
          <v-row class="mb-8">
            <v-col cols="12" sm="3" v-for="(moistureProof, index) in toyoMoistureProofList" :key="moistureProof" class="bd-r01">
              <a :href="moistureProof.href">
                {{ moistureProof.text }}<br />
                <img :src="`/ec/images2/special/camera/storage/toyo-0${index + 1}.png`" />
              </a>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="12" sm="6">
              <v-btn
                block
                class="bg-btn py-6 px-10 text-subtitle-1"
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&category=&r=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20,number19,Score&searchbox=1&s1%5B%5D=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&q=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&path=&range_member_price=10000_"
              >
                <v-icon small class="mr-4">fas fa-angle-right</v-icon>東洋リビング 防湿庫一覧
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!--トーリハン防湿庫-->
        <h3 class="mt-10 mb-6 left text-left cyan lighten-4 pa-4">トーリ・ハン 防湿庫</h3>
        <v-container>
          <v-row class="mb-8">
            <v-col cols="12" sm="3" v-for="(moistureProof, index) in toriMoistureProofList" :key="moistureProof" class="bd-r01">
              <a :href="moistureProof.href">
                {{ moistureProof.text }}<br />
                <img :src="`/ec/images2/special/camera/storage/tori-0${index + 1}.png`" />
              </a>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="12" sm="6">
              <v-btn
                block
                class="bg-btn py-6 px-10 text-subtitle-1"
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BB%E3%83%8F%E3%83%B3&category=&r=&limit=40&index=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&sort=number20,Price,Score&searchbox=1&q=%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BB%E3%83%8F%E3%83%B3&path="
              >
                <v-icon small class="mr-4">fas fa-angle-right</v-icon>トーリ・ハン 防湿庫一覧
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!--ハクバ-->
        <h3 class="mt-10 mb-6 text-left cyan lighten-4 pa-4">ハクバ（HAKUBA）</h3>
        <v-container class="mb-8">
          <v-row class="mb-8">
            <v-col cols="12" sm="3" v-for="(moistureProof, index) in hakubaMoistureProofList" :key="moistureProof" class="bd-r01">
              <a :href="moistureProof.href">
                {{ moistureProof.text }}<br />
                <img :src="`/ec/images2/special/camera/storage/haku-0${index + 1}.png`" />
              </a>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="12" sm="6">
              <v-btn
                block
                class="bg-btn py-6 px-10 text-subtitle-1"
                href="https://shop.kitamura.jp/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2Cnumber19%2CScore&searchbox=1&s1[]=%E3%83%8F%E3%82%AF%E3%83%90&q=%E9%9B%BB%E5%AD%90&path=%E9%98%B2%E6%B9%BF%E5%BA%AB"
              >
                <v-icon small class="mr-4">fas fa-angle-right</v-icon>ハクバ 防湿庫一覧
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-row justify="center" class="mb-12">
          <v-col cols="12" sm="6">
            <v-btn
              block
              class="bg-btn py-6 px-10 text-subtitle-1"
              href="https://shop.kitamura.jp/pd/list.html?limit=40&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&searchbox=1&sort=number20%2Cnumber19%2CScore&q=%E9%98%B2%E6%B9%BF%E5%BA%AB&path=%E9%98%B2%E6%B9%BF%E5%BA%AB&range_member_price=10000_"
            >
              <v-icon small class="mr-4">fas fa-angle-right</v-icon>防湿庫一覧を見る（大型タイプもこちら）
            </v-btn>
          </v-col>
        </v-row>

        <!-- ct02防湿庫の選び方 -->
        <h2 class="subtitle mt-10 text-h5 mb-10" id="02">防湿庫の選び方 <font size="4">防湿庫選びの3つのポイント</font></h2>

        <div class="">
          <h3 class="text-h5 indigo--text mb-4 font-weight-bold"><v-icon>fas fa-check</v-icon> ①ワンサイズ大きめの防湿庫を選ぼう！</h3>

          <v-row>
            <v-col cols="12" sm="9">
              <p class="text-subtitle-1">
                「<a href="#03">防湿庫の収納容量比較</a>」を参考に、必要サイズを確認したら、次は設置場所ですが、ここで重要な選び方のポイントは「<strong
                  class="red--text yellow lighten-3"
                  >ワンサイズ大きめの防湿庫を選ぶ</strong
                >」ということです。<br />
                その理由は、<br />
                ・防湿庫の購入を検討している、写真やカメラ好きの皆さんは、機材が増える傾向にある<br />
                ・収納容量が大きいほうが割安なため（2台購入するより、はるかに割安）<br />
                ・1台あたりの電気代が1日1円程度で、サイズが大きくなっても、ランニングコストはほぼ変わらない
              </p>
            </v-col>
            <v-col cols="8" sm="3">
              <v-img src="/ec/images2/special/camera/storage/ct02-01image.gif" max-width="100%" height="auto" />
            </v-col>
          </v-row>
          <p class="text-subtitle-1 mb-8">
            撮影機材が入り切らなくなった場合、防湿庫をもう1台購入するとなると、設置場所から、再度検討しなくてはなりません。<br />
            また、入り切らない機材をドライボックスへ移動…と考える方もいますが、<strong class="red--text yellow lighten-3"
              >“あまり使わないけど、売らずに持っている機材”は、普段使わないぶん、よりカビ対策が必要</strong
            >です。防湿庫へ入れておかないと、いざ使うとき、『カビが生えていて使えない…！』ということになりかねません。<br />
            防湿庫の設置場所が確保できれば、最初からワンサイズ大きめのものを選んでおくほうが、後悔しなくてすみますよ。<br />
            （担当者経験談）
          </p>

          <h3 class="text-h5 indigo--text mb-4 font-weight-bold"><v-icon>fas fa-check</v-icon> ②防湿庫内の湿度を確認できる湿度計は必須！</h3>
          <v-row class="mb-4" justify="center">
            <v-col cols="12" sm="9">
              <p class="text-subtitle-1">
                動作音がないので、正常に動いているのか、わかりにくい防湿庫。コンセントが抜けていたり、万が一、防湿庫が故障してしまったときでも、庫内の湿度が確認できるよう、湿度計の有無も、選ぶ際のポイントになります。<br />
                湿度計にはアナログタイプ、デジタルタイプとありますが、だいたい40％前後の湿度になっていることがわかればいいので、これについては、お好みで選んでも問題ありません。<br />
                ただ、デジタルタイプの中には、電池交換が必要なタイプがあり、担当者としては、電池交換不要な湿度計がおすすめです。<br />
                湿度計がついてない防湿庫には、後付の<a
                  href="https://shop.kitamura.jp/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2CNumber17%2CScore&searchbox=1&q=%E6%B9%BF%E5%BA%A6%E8%A8%88&path=%E9%98%B2%E6%B9%BF%E5%BA%AB%3A%E9%98%B2%E6%B9%BF%E5%BA%AB%E7%94%A8%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC"
                  >湿度計</a
                >もありますので、ぜひ一緒に購入を♪
              </p>
            </v-col>
            <v-col cols="8" sm="3">
              <v-avatar size="200"><img src="/ec/images2/special/camera/storage/ct02-01.gif" alt="アナログ湿度計" width="100%" /></v-avatar><br />
              <img src="/ec/images2/special/camera/storage/ct02-02.gif" alt="デジタル湿度計" width="100%" />
            </v-col>
          </v-row>

          <h3 class="text-h5 indigo--text mb-4 font-weight-bold"><v-icon>fas fa-check</v-icon> ③コンセントつきが非常に便利！</h3>
          <v-row justify="center">
            <v-col cols="12" sm="9">
              <p class="text-subtitle-1">
                <strong class="red--text yellow lighten-3">防湿庫の近くでカメラの電池を充電できる</strong>のは、とても便利で魅力的ですよね♪<br />
                防湿庫内にコンセントがついているタイプは、カメラ本体に直接電源をつないで充電する機種の場合、防湿しながら充電ができるメリットがあります。<br />
                防湿庫外にコンセントがついているタイプは、複数のバッテリーの充電が必要な場合、扉の開け閉めが少なくなるというメリットがあります。<br />
                庫内タイプ、庫外タイプともに、お好みのスタイルで選んでください。
              </p>
            </v-col>
            <v-col cols="8" sm="3">
              <img src="/ec/images2/special/camera/storage/ct02-04.gif" alt="デジタル湿度計" width="100%" />
            </v-col>
          </v-row>
        </div>
        <!-- ct02防湿庫の選び方 -->

        <!--防湿庫比較 -->
        <h2 class="subtitle mt-10 text-h5 mb-10" id="03">防湿庫の収納容量と収納数の目安</h2>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4" v-for="storageCapacity in storageCapacityList" :key="storageCapacity">
              <v-card outlined color="#a8985e">
                <v-card-text class="white--text text-center"
                  ><v-icon color="white">fas fa-camera</v-icon> 収納容量<br /><span class="text-h5">{{ storageCapacity.amount }}</span
                  >{{ storageCapacity.type }}</v-card-text
                >
              </v-card>
              <p class="pa-4 bd-di including-line-breaks">{{ storageCapacity.criterion }}</p>
            </v-col>
          </v-row>
        </v-container>

        <!--湿気対策おすすめ商品-->
        <h2 class="subtitle mt-10 text-h5 mb-10" id="05">湿気対策におすすめ商品・雨の日撮影用品</h2>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="6" class="bd-r01">
              <p class="text-center">お手軽な価格で湿気対策をするならコレ！</p>
              <h3 class="font-weight-bold text-left cyan lighten-4 pa-2">ドライボックス</h3>
              <div>
                <a href="/special/sale-fair/camera/storage/363/"><img src="/ec/images2/special/camera/storage/ct02-02image.gif" class="mx-w100" /></a>
              </div>
              <v-btn block class="bg-btn py-8 px-10 text-subtitle-1" href="/special/sale-fair/camera/storage/363/">
                <v-icon small class="mr-4">fas fa-angle-right</v-icon>ドライボックス一覧
              </v-btn>
              <p class="mt-4">
                お手軽な価格で湿気対策をしたい方におすすめの「ドライボックス」。初めて一眼レフやミラーレス一眼を購入された方にもおすすめです。蓋の開け閉めだけでも湿気は中に入ってくるので、<strong
                  class="red--text yellow lighten-3"
                  >こまめに乾燥剤の交換</strong
                >をしましょう。（交換目安／約3ヶ月に1度 ※環境によって異なります）
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-center">防湿剤でカビの繁殖を防ぐ！</p>
              <h3 class="font-weight-bold text-left cyan lighten-4 pa-2">防カビ・防湿剤・モバイルドライ</h3>
              <div>
                <a href="/special/sale-fair/camera/storage/371/"><img src="/ec/images2/special/camera/storage/ct02-03image.gif" class="mx-w100" /></a>
              </div>
              <v-btn block class="bg-btn py-8 px-10 text-subtitle-1" href="/special/sale-fair/camera/storage/371/">
                <v-icon small class="mr-4">fas fa-angle-right</v-icon>防カビ・防湿剤・モバイルドライ
              </v-btn>
              <p class="mt-4">
                防湿剤は、膨らんできたら湿気を吸収しているサイン！<strong class="red--text yellow lighten-3">こまめに交換</strong
                >しましょう♪<br />モバイルドライは繰り返し使える充電式の除湿ユニット。湿気でいっぱいになったら家庭用コンセントにつないで、乾燥させましょう。
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="bd-r01">
              <h3 class="font-weight-bold text-left cyan lighten-4 pa-2">お手入れ用品</h3>
              <div>
                <p class="text-center">大切なカメラやレンズのお手入れに！</p>
                <a href="/special/sale-fair/camera/storage/366/"><img src="/ec/images2/special/camera/storage/oteirehalf-off.jpg" class="mx-w100" /></a>
              </div>
              <v-btn block class="bg-btn py-8 px-10 text-subtitle-1" href="/special/sale-fair/camera/storage/366/">
                <v-icon small class="mr-4">fas fa-angle-right</v-icon> お手入れ用品
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="font-weight-bold text-left cyan lighten-4 pa-2">雨の日撮影用品</h3>
              <div>
                <p class="text-center">雨の日の撮影でもカメラをしっかり<br />ガードできる「雨よけアイテム」</p>
                <a href="/special/sale-fair/camera/storage/368/"><img src="/ec/images2/special/camera/storage/amenohisatueihalf-off.jpg" class="mx-w100" /></a>
              </div>
              <v-btn block class="bg-btn py-8 px-10 text-subtitle-1" href="/special/sale-fair/camera/storage/368/">
                <v-icon small class="mr-4">fas fa-angle-right</v-icon> お手入れ用品
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!--  防湿の必要性 -->
        <h2 class="subtitle mt-10 text-h5 mb-10" id="01">防湿庫の必要性 <font size="4">大切なレンズやカメラは湿気対策！ カビ対策！</font></h2>
        <div>
          <h3 class="text-h5 indigo--text mb-4 font-weight-bold"><v-icon color="indigo">fas fa-check</v-icon> なぜ防湿庫が必要？</h3>
          <v-row class="mb-8" justify="center">
            <v-col cols="12" sm="9">
              <p class="text-subtitle-1">
                カメラやレンズは湿気に弱く、カビが生えやすいデリケートな機材なので、湿気から守る必要があります。その湿気から大切な撮影機材を守ってくれる「<strong
                  class="red--text yellow lighten-3"
                  >除湿機能を備えた保管庫</strong
                >」が、防湿庫です。<br />一眼レフやレンズだけではなく、コンパクトデジカメやビデオカメラの保管にも、そして<strong
                  class="red--text yellow lighten-3"
                  >フィルムも高温多湿を嫌いますので、防湿庫でしっかりと保存する必要</strong
                >があります。
              </p>
            </v-col>
            <v-col cols="10" sm="3">
              <v-img src="/ec/images2/special/camera/storage/imagect01.gif" max-width="100%" height="auto" />
            </v-col>
          </v-row>

          <h3 class="text-h5 indigo--text mb-4 font-weight-bold"><v-icon color="indigo">fas fa-check</v-icon> カビの除去は修理代が高額！</h3>
          <p>
            <strong class="red--text yellow lighten-3">カビの除去には高額な修理代が必要</strong
            >です。最低でもレンズ1本につき1万円、高価なレンズや稀少なレンズは、3万円以上かかる場合があります。また、『カメラやレンズを<a
              href="https://www.net-chuko.com/"
              target="_blank"
              >下取り・買取</a
            >
            に出す』と考えた場合、一度カビが生えた機材は、大幅に減額されてしまいます。<br />
            <strong class="red--text yellow lighten-3">一度生えたカビ菌を、完全に除去することは不可能</strong
            >で、カビが生えてしまった機材は、再びカビが生える可能性が高くなってしまうのです。<br />
            <strong class="red--text yellow lighten-3">カビを生やさないよう、事前の湿気対策として、防湿庫が必要</strong>です。<br />
          </p>

          <h3 class="text-h5 indigo--text mb-4 font-weight-bold">
            <v-icon color="indigo">fas fa-check</v-icon> カメラバックごとカメラ機材を押し入れに入れるのは危険
          </h3>
          <v-row class="mb-8" justify="center">
            <v-col cols="12" sm="9">
              <p class="text-subtitle-1">
                撮影に使ったカメラやレンズは、どこに保管してますか？『カメラバックごと機材を押し入れに。』という方も多いのでは？<br />
                この方法、危険です。<br />
                押し入れの中で、<strong class="red--text yellow lighten-3">カメラバックごとカビが生えてしまう可能性</strong>があります。<br />
                また、防虫剤入りの湿気取りには、カメラ・レンズに悪い影響のものがあります。<br />
                カメラの保管は、押し入れではなく、<strong class="red--text yellow lighten-3">カメラバックから出して、防湿庫での保管が必要</strong>です。
              </p>
            </v-col>
            <v-col cols="10" sm="3">
              <v-row class="mb-2">
                <v-col cols="6">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/5f5/001/bf7/29a/06f/628/a27/06a/26c/dfd/79w/cxp/an0/z/M.jpg"
                    max-width="100%"
                    height="auto"
                  />
                </v-col>
                <v-col cols="6">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/22a/0fe/f26/697/8fa/60f/fe2/10d/299/060/40i/8pb/o1m/8/M.jpg"
                    max-width="100%"
                    height="auto"
                  />
                </v-col>
              </v-row>

              <v-btn block class="bg-btn px-10 text-subtitle-1" href="/special/sale-fair/camera/storage/366/">
                <v-icon small class="mr-4">fas fa-angle-right</v-icon> お手入れ用品
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <!--↓ おすすめ特集ー-->
        <p class="mt-12">▼おすすめ特集・プリントサービス</p>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';

export default Vue.extend({
  name: 'storage',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    tableOfContentsNavi: TableOfContentsNavi,
    urlcopy: Urlcopy
  },
  setup: (props, context) => {
    document.title = '防湿庫は必要！ おすすめの防湿庫＆選び方を教えます';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '大切なカメラやレンズを湿気やカビから守る！防湿庫を購入する方へ、選び方のアドバイスや、おすすめの防湿庫を教えます')
    const state = reactive({
      naviList: [
        { naviItem: 'おすすめ\n防湿庫', href: '#04' },
        { naviItem: '防湿庫の\n選び方', href: '#02' },
        { naviItem: '防湿庫の\n収納目安', href: '#03' },
        { naviItem: 'おすすめ\nお手入れ用品', href: '#05' },
        { naviItem: '防湿庫の\n必要性', href: '#01' }
      ],
      toyoMoistureProofList: [
        { text: '東洋リビング ED-55CAT(BW) 防湿庫 ブラック＆ホワイト', href: '/ec/pd/4945931015050' },
        { text: '東洋リビング ED-80CATP2(B) オートクリーンドライ防湿庫', href: '/ec/pd/4945931019010' },
        { text: '東洋リビング ED-120CATP2(B) オートクリーンドライ防湿庫', href: '/ec/pd/4945931019027' },
        { text: '東洋リビング ED-165CATP2（B） オートクリーンドライ防湿庫', href: '/ec/pd/4945931019041' }
      ],
      toriMoistureProofList: [
        { text: 'トーリ・ハン NT-33-MIII ドライ・キャビ', href: '/ec/pd/4930381440088' },
        { text: 'トーリ・ハン NT-83-MIII ドライ・キャビ', href: '/ec/pd/4930381440095' },
        { text: 'トーリ・ハン NT-103-MIII ドライ・キャビ', href: '/ec/pd/4930381440101' },
        { text: 'トーリ・ハン PH-110 ドライ・キャビ', href: '/ec/pd/4930381440033' }
      ],
      hakubaMoistureProofList: [
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 25L', href: '/ec/pd/4977187403503' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 40L', href: '/ec/pd/4977187403510' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 60L', href: '/ec/pd/4977187403527' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 100L', href: '/ec/pd/4977187403534' }
      ],
      storageCapacityList: [
        { amount: '50L以下', type: '（小型）', criterion: '一眼カメラが4～5台、レンズ数本が目安。\nギナーさん向け' },
        { amount: '550L～120L', type: '（中型）', criterion: '一眼カメラが10～20数台、比較的多くのレンズやアクセサリーをお持ちの人向け' },
        { amount: '140L以上', type: '（大型）', criterion: '一眼カメラが30～80台、横型防湿庫なら大口径のレンズも、らくらく収納可能' }
      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/general/tuyutaisaku/',
          img: 'https://shopimg.kitamura.jp/images/banner/5422.png',
          alt: '梅雨対策特集'
        },
        {
          href: '/special/sale-fair/camera/bag/trial/',
          img: 'https://shopimg.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/special/sale-fair/camera/bag/',
          img: 'https://shopimg.kitamura.jp/images/banner/1155.gif',
          alt: 'カメラバッグ・カメラケース特集'
        },
        {
          href: '/special/sale-fair/sale/lotbuying/',
          img: 'https://shopimg.kitamura.jp/images/banner/3773.gif',
          alt: 'まとめ買いコーナー'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ],
      visible: false,
      index: 0,
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '防湿庫の選び方・湿気対策特集',
          disabled: true
        }
      ],
      mainProductJanCode: [
        '8024221631142',
        '8024221647822',
        '4906752106969',
        '8024221668315',
        '8024221623178',
        '8024221623314',
        '4906752108345',
        '8024221623291',
        '4906752201688',
        '4907990407856',
        '8024221667189',
        '4906752204238',
        '4906752100448'
      ],
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
.storage .subtitle {
  padding: 10px 15px;
  width: 100%;
  line-height: 1.4em;
  height: auto;
  display: block;
  box-sizing: border-box;
  color: #001663;
  border-left: 10px solid #0bbcd0;
}

.bd-r01 {
  border-right: 1px dashed #cccccc;
}

.bd-di {
  border: 1px solid #a8985e;
}

@media screen and (min-width: 950px) {
  .nbtna {
    color: #444444;
    text-decoration: none;
    width: 100%;
    font-size: 18px;
    text-align: center;
    padding: 10px 0;
    font-family: 'Century Gothic', 'メイリオ', 'ヒラギノ角ゴ Pro W3', 'ＭＳ Ｐゴシック', Osaka, sans-serif, sans-serif;
    font-weight: normal;
    box-sizing: border-box;
    display: block;
    background: -moz-linear-gradient(top, #fff 0%, #fff 3%, #e6e6e6 3%, #fff);
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(0.03, #fff), color-stop(0.03, #e6e6e6), to(#fff));
    border-radius: 8px 8px 0px 0px;
    -moz-border-radius: 8px 8px 0px 0px;
    -webkit-border-radius: 8px 8px 0px 0px;
    border: 1px solid #ccc;
    border-bottom: 3px solid #14bfd1;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
.nbtna span {
  width: 120px;
}
</style>
