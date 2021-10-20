<template>
  <v-app>
    <div class="lensfilter">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/lensfilter/fan-fair_01.jpg'"
          :spBackgroundImg="'/ec/images2/special/camera/lensfilter/fan-fair_01sp.jpg'"
          :type="2"
        />
        <!-- ↑top image -->

        <div class="px-6">
          <h3 class="mb-6 font-weight-bold">おすすめカメラレンズフィルター特集 選び方・効果・種類のご紹介</h3>
          <p class="">
            レンズフィルターの種類は大きく分けて、レンズをキズや水滴から守る保護フィルターと、写真に特殊効果などを追加し、表現をより豊かにするタイプのフィルターに分かれます。<br />
            フィルターの効果を中心に、作例、フィルターの選び方、便利なアイテムなどをご紹介します♪
          </p>
        </div>

        <v-container>
          <v-main class="">
            <v-container class="ma-0 pa-0">
              <v-row>
                <!--==================== サイドメニュー ====================-->
                <v-col cols="12" sm="4">
                  <v-sheet rounded="lg">
                    <v-list color="transparent">
                      <v-list-item-title class="pa-4 bg-db">フィルターの種類で探す</v-list-item-title>
                      <v-list-item v-for="(filterType, index) in filterTypeList" :key="`filterType-${index}`" link class="border-b">
                        <v-list-item-content>
                          <a :href="filterType.href"
                            ><v-list-item-title
                              ><v-icon small color="orange" class="mr-2">fas fa-arrow-right</v-icon>{{ filterType.type }}
                            </v-list-item-title></a
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item-title class="pa-4 bg-db mt-8"
                        >おすすめ<br />
                        機能的なフィルター</v-list-item-title
                      >
                      <v-list-item v-for="(Functional, index) in FunctionalFliterList" :key="`Functional-${index}`" link class="border-b">
                        <v-list-item-content>
                          <a :href="Functional.href"
                            ><v-list-item-title
                              ><v-icon small color="orange" class="mr-2">fas fa-arrow-right</v-icon>{{ Functional.type }}
                            </v-list-item-title></a
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item-title class="pa-4 bg-db mt-8"
                        >季節の<br />
                        おすすめフィルター</v-list-item-title
                      >
                      <v-list-item v-for="(season, index) in seasonFliterList" :key="`season-${index}`" link class="border-b">
                        <v-list-item-content>
                          <a v-scroll-to="{ el: season.href }">
                            <v-list-item-title><v-icon small color="orange" class="mr-2">fas fa-arrow-right</v-icon>{{ season.type }} </v-list-item-title></a
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item-title class="pa-4 bg-db mt-8">便利なアイテム</v-list-item-title>
                      <v-list-item v-for="(convenientItem, index) in convenientItemList" :key="`convenientItem-${index}`" link class="border-b">
                        <v-list-item-content>
                          <a :href="convenientItem.href"
                            ><v-list-item-title
                              ><v-icon small color="orange" class="mr-2">fas fa-arrow-right</v-icon>{{ convenientItem.type }}
                            </v-list-item-title></a
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-col>
                <!--==================== サイドメニュー ====================-->
                <v-col cols="12" sm="8">
                  <p class="mt-2 pa-4 bg-db">カメラレンズフィルターの効果と作例＆おすすめフィルター</p>
                  <!--==================== アンカーメニュー ====================-->
                  <!-- 960px以上 -->
                  <v-row class="pa-2" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-col class="text-center pa-4 black"
                      ><a v-scroll-to="{ el: '#ND' }" class="white--text">NDフィルター<br />減光フィルター<br />▼</a></v-col
                    >
                    <v-col class="text-center pa-4 black"
                      ><a v-scroll-to="{ el: '#protector' }" class="white--text">保護フィルター<br />プロテクター<br />▼</a></v-col
                    >
                    <v-col class="text-center pa-4 black"
                      ><a v-scroll-to="{ el: '#pl' }" class="white--text">PLフィルター<br />偏光フィルター<br />▼</a></v-col
                    >
                  </v-row>
                  <!-- 960px未満 -->
                  <tableOfContentsNavi :naviList="naviList" v-if="$vuetify.breakpoint.smAndDown" />

                  <!--==================== ND ====================-->
                  <div id="ND">
                    <p class="white--text grey darken-4 my-6 pa-2">
                      レンズに入る光の量を減少させ最適な光の量にするアイテム<br /><span class="font-weight-bold">ND・減光フィルター</span>
                    </p>

                    <p class="text-subtitle-1 font-weight-bold">NDフィルター・減光フィルターは光の量を少なくするフィルター</p>
                    <v-img src="/ec/images2/special/camera/lensfilter/exnd.jpg" max-width="100%" height="auto"></v-img>

                    <p class="text-h5">こんな方におすすめ</p>

                    <div class="konnehito">
                      <p class="mb-0">
                        川の流れや滝、波を絹糸のように、霧状に、雲海のように撮影したい方<br />
                        明るい条件でも、背景をぼかして撮影したい方（動画撮影にもおすすめ<br />
                        車や電車・飛行機などの流し撮りに挑戦したい方
                      </p>
                    </div>
                    <p class="text-h5 my-4">キタムラがおすすめするNDフィルター</p>

                    <v-row class="grey lighten-3 mb-6">
                      <v-col cols="12" sm="6" class="pa-3 mt-6">
                        <router-link to="/ec/special/page/news/2017/07/2956/?limit=40" class="routerLink"
                          >ケンコー（Kenko）<br />PRO1D プロNDシリーズ</router-link
                        >
                        <p class="my-4">試しに始めたい人におすすめ</p>
                        <v-img src="/ec/images2/special/camera/lensfilter/item_kenkopro1d.jpg" max-width="100%" height="auto"></v-img>
                        <orangeBtn :btntxt="'商品一覧を見る'" :href="'/ec/special/page/news/2017/07/2956/?limit=40'" :height="'50px'" :btnColor="'yellowish'" />
                      </v-col>

                      <v-col cols="12" sm="6" class="pa-3 mt-6">
                        <router-link
                          to="/ec/list?narrow18=0&keyword=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%20PRO1D%20%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%B9%20ND%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%20&category=&limit=100&index=all&searchbox=1&sort=number20,Score&q=%E3%82%B1%E3%83%B3%E3%82%B3%E3%83%BC%20PRO1D%20%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%B9%20ND%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%20&path=&y=0&x=0"
                          class="routerLink"
                          >ケンコー（Kenko）<br />PRO1D ロータス NDフィルター</router-link
                        >
                        <p class="my-4">試しに始めたい人におすすめ</p>
                        <v-img src="/ec/images2/special/camera/lensfilter/item_kenko.jpg" max-width="100%" height="auto"></v-img>
                        <orangeBtn
                          :btntxt="'商品一覧を見る'"
                          :href="'/ec/pd/list.html?limit=100&index=all&searchbox=1&sort=number20%2CScore&q=ケンコー+PRO1D+ロータス+NDフィルター+&path=&y=0&x=0'"
                          :height="'50px'"
                          :btnColor="'yellowish'"
                        />
                      </v-col>
                    </v-row>
                    <orangeBtn :btntxt="'減光・NDフィルター 一覧を見る'" :href="'/ec/special/camera/lensfilter/343'" :height="'50px'" :btnColor="'yellowish'" />

                    <p class="text-h5 my-4">NDフィルター・減光フィルターの選び方</p>
                    <p class="mt-2 pa-4 text--left line-height">
                      NDフィルターは、濃さによって減光量が異なります。<br />
                      ND4は光量を1/4で2絞り分、ND8は光量を1/8で3絞り分、調節できます。<br />
                      明るさは撮影場所まで行かないとわからないため、どれがおすすめという表現は難しいですが、濃すぎと感じた場合には、感度を上げることで必要な条件に設定できるので、手始めにはND8が幅広く使えます。<br />
                      また、三脚を据えて撮影する場合は、ライブビュー（液晶）撮影がおすすめです。モニターに表示されるのは「NDフィルター」の濃さに影響しない実際の写りに近い明るさのため、ファインダーを覗いたときと違い、暗くなりません。<br />
                      なお、ポートレートなど手持ち撮影でファインダーを覗いた際には、暗く見えてピントが合わせにくくなりますので、濃すぎないフィルターがおすすめです。
                    </p>
                    <v-divider class="my-6"></v-divider>
                  </div>

                  <!--==================== プロテクターフィルター ====================-->
                  <div id="protector">
                    <p class="pa-2 black darken-2 white--text font-weight-black">
                      写りには影響せず、レンズの「掛け捨て保険」として必須アイテム<br />
                      レンズ保護フィルター・プロテクター
                    </p>

                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-img src="/ec/images2/special/camera/lensfilter/expl-3.jpg" max-width="100%" height="auto"></v-img>
                        </v-col>
                      </v-row>
                    </v-container>

                    <p class="text-h5">こんな方におすすめ</p>

                    <div class="konnehito">
                      <p class="mb-0">
                        はじめてレンズを購入した方、カメラを始められる方<br />
                        レンズのお手入れを簡単にしたい方<br />
                        水辺での撮影など、しぶきがかかる状況で撮影される方
                      </p>
                    </div>

                    <p class="text-h6 my-6">キタムラがおすすめするレンズ保護フィルター・プロテクター</p>

                    <v-row class="grey lighten-3 mb-6">
                      <v-col
                        cols="12"
                        sm="6"
                        class="pa-3 mt-6"
                        v-for="(LensProtectionFilter, index) in LensProtectionFilterList"
                        :key="`LensProtectionFilter-${index}`"
                      >
                        <router-link :to="LensProtectionFilter.href" class="routerLink">{{ LensProtectionFilter.name }}</router-link>
                        <p class="my-4">{{ LensProtectionFilter.txt }}</p>
                        <router-link :to="LensProtectionFilter.href">
                          <v-img :src="LensProtectionFilter.img" max-width="100%" height="auto"></v-img>
                        </router-link>
                        <orangeBtn :btntxt="'商品一覧を見る'" :href="LensProtectionFilter.href" :height="'50px'" :btnColor="'yellowish'" />
                      </v-col>
                    </v-row>

                    <orangeBtn
                      :btntxt="'レンズ保護フィルター・プロテクター 一覧'"
                      :href="'/ec/special/camera/lensfilter/346/?limit=100'"
                      :height="'50px'"
                      :btnColor="'yellowish'"
                    />
                    <p class="mt-8 line-height">
                      レンズを傷つけてしまった場合、高額な修理費用がかかってしまいます。レンズにしぶきがついた場合、自分でメンテナンスするにも慎重なレンズクリーニングが必要になります。メンテナンスを簡単にするためにも、保護フィルターを装着することをおすすめします。<br />
                      また、レンズをぶつけてしまっても、保護フィルターをつけていれば、レンズ自体は傷つかずにすむことがあります。雨や水しぶきなどの汚れからもレンズを保護します。<br />
                      最近では、高性能なレンズをお使いのユーザー様からの声を受け、より付けていない状態と変わらない「低反射率・高透過率・高解像度」の製品も登場し、今まで保護フィルターをつけなかったプロの方も利用されるようになってきました。<br />
                      高価なレンズを守るために、レンズと同時に買っておくと安心ですね。
                    </p>

                    <v-img src="/ec/images2/special/camera/lensfilter/expro.jpg" max-width="100%" height="auto"></v-img>

                    <v-divider class="my-6"></v-divider>
                  </div>

                  <!--==================== PL ====================-->
                  <div id="pl">
                    <p class="pa-2 black darken-2 white--text font-weight-black">
                      反射をコントロールするフィルターで、風景撮影の必須アイテム！<br />
                      PLフィルター・偏光フィルター
                    </p>
                    <v-row class="mb-6">
                      <v-col cols="12">
                        <v-img src="/ec/images2/special/camera/lensfilter/expl.webp" max-width="100%" height="auto"></v-img>
                      </v-col>
                    </v-row>
                    <p class="text-h5">こんな方におすすめ</p>

                    <div class="konnehito">
                      <p class="mb-0">
                        風景写真で空の透き通るような青さや雲の白さを表現したい方<br />
                        テーマパークなどでガラスケースやショーウィンドーの中の展示物を反射を抑え撮影したい方<br />
                        紅葉や新緑などを色鮮やかに描写したい方
                      </p>
                    </div>

                    <p class="text-h5 my-6">キタムラがおすすめするPLフィルター</p>

                    <v-row class="grey lighten-3 mb-6">
                      <v-col cols="12" sm="6" class="pa-3 mt-6">
                        <router-link to="/ec/list?narrow18=0&keyword=バリアブルND%2BC-PL&category=&q=バリアブルND%2BC-PL&searchbox=1" class="routerLink"
                          >K&F Concept NANO-X バリアブルND+C-PL 多機能フィルター</router-link
                        >
                        <p class="my-4">ND（光量調整）機能とC-PL（円偏光）機能を1つに凝縮したフィルター</p>
                        <router-link to="/ec/list?narrow18=0&keyword=バリアブルND%2BC-PL&category=&q=バリアブルND%2BC-PL&searchbox=1">
                          <v-img
                            src="https://shopimg.kitamura.jp/images/pd/80b/a7d/5d8/f7e/6c5/daa/baf/377/092/99e/327/apt/d12/u/L.jpg"
                            max-width="100%"
                            height="auto"
                          ></v-img>
                        </router-link>
                        <orangeBtn
                          :btntxt="'商品一覧を見る'"
                          :href="'/ec/list?narrow18=0&keyword=バリアブルND%2BC-PL&category=&q=バリアブルND%2BC-PL&searchbox=1'"
                          :height="'50px'"
                          :btnColor="'yellowish'"
                        />
                      </v-col>

                      <v-col cols="12" sm="6" class="pa-3 mt-6">
                        <router-link
                          to="/ec/list?narrow18=0&keyword=EXUS%20サーキュラーPL&category=&limit=40&index=&n20c=完了商品は除く&sort=number20,Score&searchbox=1&s1%5B%5D=マルミ&q=EXUS%20サーキュラーPL&path="
                          class="routerLink"
                          >マルミ EXUS サーキュラーPL</router-link
                        >
                        <p class="my-4">低反射枠を採用し、最高の性能と機能を備え最高画質を追求したデジタルカメラ用フィルター</p>
                        <router-link
                          to="/ec/list?narrow18=0&keyword=EXUS%20サーキュラーPL&category=&limit=40&index=&n20c=完了商品は除く&sort=number20,Score&searchbox=1&s1%5B%5D=マルミ&q=EXUS%20サーキュラーPL&path="
                        >
                          <v-img
                            src="https://shopimg.kitamura.jp/images/pd/cc6/6b9/d84/3af/bae/e24/ee6/f7b/15f/38e/052/tp9/1un/2/L.jpg"
                            max-width="100%"
                            height="auto"
                          ></v-img>
                        </router-link>
                        <orangeBtn
                          :btntxt="'商品一覧を見る'"
                          :href="'/ec/list?narrow18=0&keyword=EXUS%20サーキュラーPL&category=&limit=40&index=&n20c=完了商品は除く&sort=number20,Score&searchbox=1&s1%5B%5D=マルミ&q=EXUS%20サーキュラーPL&path='"
                          :height="'50px'"
                          :btnColor="'yellowish'"
                        />
                      </v-col>
                    </v-row>

                    <orangeBtn
                      :btntxt="'PLフィルター・偏光フィルター 一覧'"
                      :href="'/ec/special/camera/lensfilter/341'"
                      :height="'50px'"
                      :btnColor="'yellowish'"
                    />

                    <p class="my-2 line-height">
                      アプリを使えば空の青さを加工したり、色を鮮やかにすることは簡単にできるように思いがちですが、実は撮影時から、この「PLフィルター」を使うことで、より自然に、見たままの感動を描写することができます。
                      青い空を撮影した際、なんだかスッキリしないなぁと感じたことありませんか？
                      これは空気中のホコリなどに光が乱反射して白っぽく写ってしまうからなんです。白い雲、青い空。見たままのスッキリとした透き通るような青さを表現するには、この「PLフィルター」は必須です。
                    </p>

                    <v-row class="my-6">
                      <v-col cols="12">
                        <v-img src="/ec/images2/special/camera/lensfilter/expl-2.webp" max-width="100%" height="auto"></v-img>
                      </v-col>
                    </v-row>
                    <p class="line-height">
                      また、反射をコントロールするフィルターですので、水面越しの水中や水面に映る風景、水に濡れた葉の透明感も表現できます。反射除去の最大の魅力は、ショーウィンドーの反射を抑え、中にある展示物をスッキリと写せるという点。テーマパークへ行くときには1枚あると満足すること間違いなしです。逆に反射を抑えず、水面に写った風景や、ガラスに写った反射風景を撮影する際にも役に立ちます。<br />
                      <br />
                      ちなみに、この「PLフィルター」はつけるだけではなく、先端を回して効果を確認しながら使います。コントラストを高める際のコツとしては、くるくる回して、効果が最大と思った場所から少し戻して使うこと。こうすることで、やり過ぎ感のない鮮やかさを表現できます。反射除去で使う際には、正面からではなく斜めから撮影すると、より反射が除去できますので、お試しください。<br />
                      <br />
                      なお、「PLフィルター」のコーティングには寿命があります。フィルターが黒から赤っぽく（場合によっては黄色っぽく）なってきたと感じたら買い替え時です！
                      （使用頻度にもよりますが、だいたい5年から7年くらい）
                      ずっと昔に購入した「PLフィルター」をお使いの方は、ぜひ、買い替えを検討してみてください。効果の幅が広がることを実感できると思います。
                    </p>

                    <orangeBtn
                      :btntxt="'PLフィルター・偏光フィルター 一覧'"
                      :href="'/ec/special/camera/lensfilter/341/?limit=100'"
                      :height="'50px'"
                      :btnColor="'yellowish'"
                    />
                    <v-divider class="my-10"></v-divider>
                  </div>

                  <!--==================== 季節のフィルター====================-->
                  <p class="my-4 bg-db pa-2 font-weight-black">季節のおすすめフィルター</p>

                  <div class="mt-4" v-for="(recommendedSeasonalFilter, index) in recommendedSeasonalFilterList" :key="index">
                    <div :id="recommendedSeasonalFilter.id">
                      <h3 class="mb-4">{{ recommendedSeasonalFilter.subtitle }}</h3>
                      <p class="line-height">
                        {{ recommendedSeasonalFilter.txt }}
                      </p>
                      <router-link :to="recommendedSeasonalFilter.href" class="routerLink">
                        <v-img :src="recommendedSeasonalFilter.img" max-width="100%" height="auto"></v-img><br />
                        {{ recommendedSeasonalFilter.linktxt }}</router-link
                      ><v-divider class="my-10"></v-divider>
                    </div>
                    <!--==================== 季節のフィルター====================-->
                  </div>
                </v-col>
              </v-row>
            </v-container>

            <p class="mt-6 pa-4 bg-db">キタムラおすすめのフィルター関連商品 一覧</p>
            <!-- ↓ 特集IDでの商品一覧表示 -->
            <product-list-by-special-id class="mb-5" :specialId="184" />

            <!-- ↓ SNS -->
            <facebookAndTwitter />

            <p class="s-bnr">おすすめ特集・サービス</p>
            <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
          </v-main>
        </v-container>
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
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
export default Vue.extend({
  name: 'lensfilter',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    topTitleImg: TopTitleImg,
    tableOfContentsNavi: TableOfContentsNavi,
    orangeBtn: OrangeBtn,
    'product-list-by-special-id': ProductListBySpecialId,
    facebookAndTwitter: FacebookAndTwitter,
  },
  setup: (props, context) => {
    document.title = 'カメラレンズフィルターで写真がもっと楽しくなる！種類・選び方・効果 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'おすすめの交換レンズ用フィルターの効果・種類・選び方をご紹介♪PLフィルターやND、クロスフィルターで写真をもっと楽しく♪レンズ保護の必需品、プロテクターも！レンズフィルターのお求めは、店舗で受け取り可能なカメラのキタムラネットショップ♪')
    const state = reactive({
      naviList: [
        { naviItem: 'NDフィルター・減光フィルター', href: '#ND' },
        { naviItem: '保護フィルター・プロテクター', href: '#protector' },
        { naviItem: 'PLフィルター・偏光フィルター', href: '#pl' },
      ],
      filterTypeList: [
        {
          type: 'プロテクター・保護フィルター',
          href: '/ec/list?narrow18=0&keyword=プロテクター・保護フィルター&category=交換レンズアクセサリー&index=&sort=number20,Number17,Score&searchbox=1&q=プロテクター・保護フィルター&path=交換レンズアクセサリー&n20c=完了商品は除く'
        },
        {
          type: '偏光・PLフィルター',
          href: '/ec/list?narrow18=0&keyword=%E5%81%8F%E5%85%89%E3%83%BBPL%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&category=&index=&searchbox=1&sort=number20,Number17,Score&q=%E5%81%8F%E5%85%89%E3%83%BBPL%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&path=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          type: '減光・ＮＤフィルター',
          href: '/ec/list?narrow18=0&keyword=%EF%BC%AE%EF%BC%A4%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&category=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC&r=&index=&sort=number20,Number17,Score&searchbox=1&q=%EF%BC%AE%EF%BC%A4%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          type: 'クロスフィルター',
          href: '/ec/list?narrow18=0&keyword=%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&category=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC&r=&index=&sort=number20,Number17,Score&searchbox=1&q=%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          type: 'ソフトフィルター',
          href: '/ec/list?narrow18=0&keyword=%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF&category=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC&r=&index=&sort=number20,Number17,Score&searchbox=1&q=%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          type: '特殊効果用フィルター',
          href: '/ec/ct/C009/001/006/?r='
        },
        {
          type: 'クローズアップ',
          href: '/ec/list?narrow18=0&keyword=プロテクター・保護フィルター&category=交換レンズアクセサリー&index=&sort=number20,Number17,Score&searchbox=1&q=プロテクター・保護フィルター&path=交換レンズアクセサリー&n20c=完了商品は除く'
        },
        {
          type: 'キタムラオリジナルフィルター',
          href: '/ec/special/camera/lensfilter/2638'
        }
      ],
      FunctionalFliterList: [
        {
          type: '絞り約8段分！ 可変式ND(減光)',
          href: '/ec/special/general/highly_recommended/2015/0731'
        },
        {
          type: 'ND500でアートな風景写真',
          href: 'ec/special/camera/lensfilter/nd500'
        }
      ],
      seasonFliterList: [
        { type: '春★桜や花の撮影に', href: '#spring' },
        { type: '夏★NDで水の流れを表現', href: '#summer' },
        { type: '秋★PLで紅葉撮影', href: '#autumn' },
        { type: '冬★イルミネーション撮影', href: '#winter' }
      ],
      recommendedSeasonalFilterList: [
        {
          id: 'spring',
          subtitle: '春★桜や花の風景撮影におすすめフィルター',
          txt: 'やわらかくファンタジックな雰囲気にできる「ソフトフィルター」、もうちょっと寄れる♪「クローズアップレンズ」、風景撮影におすすめの「PL(偏光)フィルター」',
          img: '/ec/images2/special/camera/lensfilter/img_season-spring.webp',
          href: '/ec/special/camera/lensfilter/1869/?limit=100',
          linktxt: '≫ 春の写真撮影におすすめフィルターを見る'
        },
        {
          id: 'summer',
          subtitle: '夏★渓流や滝・水の流れを撮るのにおすすめND（減光）フィルター',
          txt: 'ND（減光）フィルターで水の流れを撮る！ 風景写真「流れる夏色 魅惑の渓流・滝写真」。水表現の決め手はNDフィルターによるシャッタースピードコントロール',
          img: '/ec/images2/special/camera/lensfilter/img_season-summer.webp',
          href: '/ec/special/camera/lensfilter/1104',
          linktxt: '≫ 夏の写真撮影におすすめフィルターを見る'
        },
        {
          id: 'autumn',
          subtitle: '秋★紅葉撮影におすすめPL(偏光)フィルター',
          txt: 'マルミ EXUS サーキュラーPLで紅葉を撮る！ 風景写真「秋色の光景 PLフィルターが引き出す紅葉の妙」。秋の表現の決め手はPLフィルター。写真家の思いを満たすEXUS',
          img: '/ec/images2/special/camera/lensfilter/img_season-autumn.webp',
          href: '/ec/special/camera/lensfilter/exus',
          linktxt: '≫ 秋の写真撮影におすすめフィルターを見る'
        },
        {
          id: 'winter',
          subtitle: '冬★夜景やイルミネーション撮影におすすめクロス＆ソフトフィルター',
          txt: '光を強調するクロスフィルターは、4本線や6本線のものがあり、光のきらめきを強調した幻想的な写真が撮れます。クリスマスイルミネーション撮影におすすめ',
          img: '/ec/images2/special/camera/lensfilter/img_season-winter.webp',
          href: '/ec/special/camera/lensfilter/344',
          linktxt: '≫ 冬の写真撮影におすすめフィルターを見る'
        }
      ],
      convenientItemList: [
        { type: 'ステップアップリング', href: '/ステップアップリング/ct/C009010/' },
        { type: 'ステップダウンリング', href: '/ステップダウンリング/ct/C009011/' },
        { type: 'フィルターケース', href: '/フィルターケース/ct/C009001013/' }
      ],
      LensProtectionFilterList: [
        {
          name: 'マルミ EXUS レンズプロテクト SOLID',
          txt: '従来品の7倍の強度の強化ガラス使用！無色透明なレンズ保護フィルター',
          href: '/ec/list?keyword=マルミ EXUS SOLID LensProtect SOLID&narrow18=0&sort=price_desc&limit=40',
          img: 'https://shopimg.kitamura.jp/images/pd/c63/f59/295/750/6dc/c47/4dc/336/e13/c63/62s/35z/7h4/e/L.jpg',
        },
        {
          name: 'マルミ DHG スーパーレンズプロテクト 「My Color Filter」',
          txt: 'カラーバリエーションが豊富！ 12種類。おしゃれなカラーで人気！',
          href: '/ec/pd/list.html?limit=100&index=all&searchbox=1&sort=number20%2CScore&q=My+Color+Filter&path=&y=0&x=0',
          img: '/ec/images2/special/camera/lensfilter/item_marumi.jpg',
        },
        {
          name: 'ケンコー PRO1D ロータス プロテクター 保護フィルター',
          txt: '水や油を強力に弾く撥水・撥油機能',
          href: '/ec/pd/list_dtl.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&searchbox=1&q=PRO1D+%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%B9+%E3%83%97%E3%83%AD%E3%83%86%E3%82%AF%E3%82%BF%E3%83%BC&path=',
          img: '/ec/images2/special/camera/lensfilter/item_lotus.jpg',
        },
        {
          name: 'ニコン ARCREST(アルクレスト)<br /> PROTECTION FILTER',
          txt: 'つけていない！ を実感できる最高品質',
          href: '/ec/pd/list.html?index=&searchbox=1&sort=number20%2CNumber17%2CScore&q=%E3%83%8B%E3%82%B3%E3%83%B3+ARCREST+PROTECTION+FILTER&path=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F',
          img: '/ec/images2/special/camera/lensfilter/item_nikonarcrest.jpg',
        }
      ],
      productDetailtxt: [
        '＜安心・お手入れ保管4点セット＞カメラ・ムービーの保管と基本メンテナンスはこのセットで完璧！',
        '固く締まったフィルターを楽に取り外せる',
        '固く締まったフィルターを楽に取り外せる',
        '37mm口径のレンズに58mmフィルターを使用する変換用ステップアップリング',
        '58mm口径のレンズに67mmフィルターを使用する変換用ステップアップリング',
        '58mm口径のレンズに77mmフィルターを使用する変換用ステップアップリング',
        'ブロアーの定番中の定番品使いやすい手頃なサイズとこのクラス一番の強力なエアーがベストセラーの秘密',
        '季節を問わずデリケートなカメラ・レンズをカビから守ります',
        'クリーナー液30mlとクリーニングペーパー30枚のセットレンズや液晶画面の汚れをしっかり除去',
        '薄葉紙に特殊加工を施したレンズ清浄用のペーパー'
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lensfilter/nikon-arcrest',
          img: 'https://shop.kitamura.jp/images/banner/4162.jpg',
          alt: 'ナノクリスタルコート採用のNIKKORレンズにおすすめ ARCREST 保護フィルター'
        },
        {
          href: '/ec/special/camera/lensfilter/nikon-arcrest-nd',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/ec/special/general/photocon-learn',
          img: 'https://shop.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: '/ct/C009010/',
          img: 'https://shop.kitamura.jp/images/banner/1335.gif',
          alt: 'ステップアップリング'
        },
        {
          href: '/ec/special/sale',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'メンテナンス'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'カメラレンズフィルターで写真がもっと楽しくなる！種類・選び方・効果',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4977187329704',
        '4975981525094',
        '4957638902229',
        '4977187330878',
        '4902520009609',
        '4975981503498',
        '4975981503597',
        '4957638900577',
        '4957638900614',
        '4977187330052'
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

<style lang="scss" scoped>
.bg-db {
  background: rgb(131, 214, 171);
  background: linear-gradient(270deg, rgba(131, 214, 171, 1) 0%, rgba(182, 238, 226, 1) 100%);
}

.border-b {
  border-bottom: 2px dotted #333;
}

.border-right {
  border-right: 1px solid #ffffff;
}

.konnehito {
  color: #668ad8;
  border: double 5px #668ad8;
  background: #f1f8ff;
  padding: 1em;
  box-sizing: border-box;
}
.routerLink {
  color: #1122cc;
}

.bg-color {
  background-color: #f2eedd;
}

@media screen and (min-width: 950px) {
  .s-bnr {
    background: rgba(0, 0, 0, 0) linear-gradient(transparent 70%, #ddd 70%) repeat scroll 0 0;
    font-family: 'ヒラギノ角ゴ Pro W3', 'メイリオ', 'ＭＳ Ｐゴシック', Osaka, sans-serif;
    font-size: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    margin: 0 0 10px 0 !important;
  }
}
</style>
