<template>
  <v-app>
    <div class="actioncam">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <v-container>
          <v-main class="">
            <v-container class="mx-0 mb-12 pa-0">
              <v-row>
                <!--==================== -サイドメニュー ====================-->
                <v-col cols="3">
                  <v-sheet rounded="lg">
                    <v-list color="transparent">
                      <v-list-item-title class="pa-2 text-center white--text deep-orange rounded-t-xl">話題の新製品</v-list-item-title>
                      <v-list-item v-for="(newProduct, index) in newProductList" :key="index" link class="tbnrbox">
                        <v-list-item-content class="pb-0">
                          <a :href="newProduct.href"><v-img :src="newProduct.src"></v-img></a>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-col>
                <!--==================== サイドメニュー ====================-->

                <v-col cols="12" sm="9" class="text-left">
                  <v-row>
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_main.png"
                      alt="圧倒的にブレない!?アクションカム新登場！"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </v-row>
                  <v-row class="main-area">
                    <v-col cols="6">
                      <a href="https://shop.kitamura.jp/pd/list_dtl.html?index=all&searchbox=1&q=FDR-X3000&path=&y=0&x=0">
                        <v-img
                          src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_main_x3000.png"
                          alt="「FDR-X3000」4K高画質フラッグシップモデル【詳細はこちら】"
                          max-width="100%"
                          height="auto"
                          class="hover"
                        ></v-img
                      ></a>
                    </v-col>
                    <v-col cols="6">
                      <a href="https://shop.kitamura.jp/pd/list_dtl.html?index=all&searchbox=1&q=HDR-AS300&path=&y=0&x=0">
                        <v-img
                          src="	/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_main_as300.png"
                          alt="「HDR-AS300」オールマイティモデル【詳細はこちら】"
                          max-width="100%"
                          height="auto"
                          class="hover"
                        ></v-img
                      ></a>
                    </v-col>
                  </v-row>

                  <div class="mt-8">
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_01.png"
                      alt="圧倒的にブレない理由とは?"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </div>

                  <div>
                    <v-img
                      src="	/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_02.png"
                      alt="あの「空間光学ブレ補正」を初搭載!"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </div>

                  <v-row class="mt-2">
                    <v-col cols="7">
                      <p class="ml-2 text-subtitle-2">
                        ソニーのハンディカム®に搭載されている「空間光学ブレ補正」機構を、アクションカム用に新規開発。ブレ補正能力が大幅に向上し、サイクリングなどのアクティビティ中に発生するブレを補正して、鮮明な映像記録を実現します。4K＊やハイスピード撮影時にも圧倒的なブレ補正効果を発揮します。
                      </p>
                      <p class="mt-4 caption">
                        ※ブレ補正効果は撮影条件により異なることがあります。<br />
                        ※エンジンやモーターの振動が直接カメラに伝わるような設置状況において画像の歪みやピントにボケが生じる場合があります。その際は、別売アクセサリーのX3000/AS300用モーターバイブレーションアブソーバー（AKAMVA、2016年秋発売予定）を組み合わせてお使いいただくことで症状が改善されます。
                      </p>
                    </v-col>
                    <v-col cols="5">
                      <v-img src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_03.png" max-width="100%" height="auto"></v-img>
                    </v-col>
                  </v-row>

                  <v-container class="mt-2">
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_04.png"
                      max-width="100%"
                      height="auto"
                      alt="だから、こんなシーンで効果的!サイクリング撮影、ドライブ撮影、ハイキング撮影"
                    ></v-img>
                  </v-container>

                  <v-container class="mt-4">
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_05.png"
                      max-width="100%"
                      height="auto"
                      alt="圧倒的にキレイな理由とは?"
                    ></v-img>
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_06.png"
                      max-width="100%"
                      height="auto"
                      alt="ソニー独自の高画質技術をまんべんなく搭載しているからより美しく鮮やかな映像が撮影できる"
                    ></v-img>
                  </v-container>

                  <v-container>
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_21.png"
                      max-width="100%"
                      height="auto"
                      alt="ファンシアターに投稿された鮮やかな作品をご紹介"
                    ></v-img>
                    <watchInVideo :src="'https://www.youtube.com/embed/WN8RYgvgg78?rel=0&amp;showinfo=0'" :width="'100%'" :height="411" />
                  </v-container>

                  <v-container v-for="(reason, index) in reasonList" :key="index" class="mb-4">
                    <v-img :src="reason.titleImg" max-width="100%" height="auto"></v-img>
                    <v-row class="pa-2">
                      <v-col cols="8">
                        <p class="text-subtitle-2">{{ reason.txt }}</p>
                        <p class="float-right">
                          <v-img
                            :src="reason.partImg"
                            :width="index === 0 ? '147px' : index === 1 ? '50px' : '145px'"
                            :height="index === 0 ? '33px' : index === 1 ? '50px' : '27px'"
                          ></v-img>
                        </p>
                      </v-col>
                      <v-col cols="4">
                        <v-img :src="reason.partImg2" max-width="100%" height="auto"></v-img>
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-container>
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_16.png"
                      max-width="100%"
                      height="auto"
                      alt="アクションカム撮影に嵌る人が続出する理由とは??"
                    ></v-img>
                    <v-img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_17.png"
                      max-width="100%"
                      height="auto"
                      alt="あなたの思い出がアクティブに残るから!"
                    ></v-img>
                  </v-container>

                  <v-container>
                    <v-row>
                      <v-col cols="4" v-for="n in 3" :key="n">
                        <v-img :src="`/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_${n + 17}.png`" max-width="100%" height="auto"></v-img>
                      </v-col>
                      <v-col cols="4" v-for="(movie, index) in movieList" :key="index">
                        <watchInVideo :src="movie" :width="'200px'" :height="187" />
                      </v-col>
                      <v-col cols="4" v-for="(item, index) in activeItemList" :key="`item--${index}`">
                        <v-img :src="item.src" max-width="100%" height="auto"></v-img>
                        <router-link :to="item.href">
                          <v-img
                            src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_buy.png"
                            max-width="60%"
                            height="auto"
                            class="hover ma-1"
                          ></v-img>
                        </router-link>
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-container class="mt-8">
                    <img
                      src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_31.png"
                      alt="用途に合わせて選べるラインアップ「4Kでも圧倒的にブレに強いフラッグシップモデル」「圧倒的にブレに強いオールマイティモデル」「ブレに強く、スタミナ長持ちベーシックモデル」"
                      width="650"
                      height="326"
                      border="0"
                      usemap="#Map"
                    />
                    <map name="Map" id="Map">
                      <area
                        shape="rect"
                        coords="148,150,325,237"
                        href="https://shop.kitamura.jp/pd/4548736022003/"
                        alt="デジタル4Kビデオカメラレコーダーアクションカム FDR-X3000（NEW）【購入する】"
                      />
                      <area
                        shape="rect"
                        coords="148,249,323,328"
                        href="https://shop.kitamura.jp/pd/4548736022041/"
                        alt="デジタル4Kビデオカメラレコーダーアクションカム ライブビューリモコン付属 FDR-X3000R（NEW）【購入する】"
                      />
                      <area
                        shape="rect"
                        coords="348,153,525,239"
                        href="https://shop.kitamura.jp/pd/4548736021921/"
                        alt="デジタルHDビデオカメラレコーダーアクションカム HDR-AS300（NEW）【購入する】"
                      />
                      <area
                        shape="rect"
                        coords="350,251,524,326"
                        href="https://shop.kitamura.jp/pd/4548736021969/"
                        alt="デジタルHDビデオカメラレコーダーアクションカム ライブビューリモコン付属 HDR-AS300R（NEW）【購入する】"
                      />
                      <area
                        shape="rect"
                        coords="549,154,732,239"
                        href="https://shop.kitamura.jp/pd/4548736021846/"
                        alt="デジタルHDビデオカメラレコーダーアクションカム HDR-AS50【購入する】"
                      />
                      <area
                        shape="rect"
                        coords="548,251,730,328"
                        href="https://shop.kitamura.jp/pd/4548736021884/"
                        alt="デジタルHDビデオカメラレコーダーアクションカム ライブビューリモコン付属 HDR-AS50R【購入する】"
                      />
                    </map>
                    <img src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_32.png" width="650" height="326" border="0" />
                    <img src="/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_33.png" width="650" height="326" border="0" />
                    <p class="mt-2 caption">
                      ＊1 ブレ補正Off時。画角設定ワイド時 ＊2
                      バイクやドローンなどに装着の際、エンジンやモーターの振動が直接カメラに伝わるような設置状況においては、画像に歪みやピンボケが生じる場合があります
                      ＊3 JIS防水保護等級IPX4相当：当社試験条件による。すべての状況において防滴性を保証するものではありません ＊4
                      付属アンダーウォーターハウジング使用時。すべての水圧において防水を保証するものではありません ＊5 付属アンダーウォーターハウジング装着時
                      ＊6 MIL-STD810F Method 516.5-Shockに準拠した厚さ5cmの合板上での1.5mからの落下テストをクリアしています ＊7 動作温度
                      FDR-X3000、HDR-AS300、HDR-AS50は-10℃。低温下においては撮影時間が短くなります ＊8 操作にはPlayMemories Mobile バージョン5.1以上が必要です
                      ＊9 出荷時設定の場合
                    </p>

                    <v-img src="/ec/images2/special/camera/feature/sony/actioncam/pc/sony-authorized-dealer.png" max-width="70%" height="auto"></v-img>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>

            <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" />
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
import { noimage, formatPrice } from '@/logic/utils';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import SubText from '@/components/common/special/subtext.vue';

export default Vue.extend({
  name: 'actioncam',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
    watchInVideo: WatchInVideo,
    subText: SubText
  },
  setup: (props, context) => {
    document.title = '圧倒的にブレない!?ソニー アクションカムX3000/AS300新登場！ | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ソニー アクションカム新製品特集！圧倒的にブレない!?ソニー アクションカムX3000/AS300新登場！デジタル4KビデオカメラFDR-X3000やオールマイティモデルHDR-AS300！アクションカメラ・ビデオカメラはカメラ専門店カメラのキタムラのショッピングサイトにおまかせください。')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '',
          disabled: false
        },
        {
          path: '圧倒的にブレない!?ソニー アクションカムX3000/AS300新登場！',
          disabled: true
        }
      ],
      newProductList: [
        { src: 'https://shopimg.kitamura.jp/images/banner/554.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8355.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/sel50f12gm' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8331.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/cinemaline-fx3' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8199.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/a1' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8233.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/gfx100s' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8210.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/x-e4' },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/8237.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/xf70-300mmf4-56rlm-ois-wr'
        },
        { src: 'https://shopimg.kitamura.jp/images/banner/8187.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/sel35f14gm' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8081.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/rf50-f18' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8083.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/rf70-200-f4l' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8037.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/x-s10' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8026.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/z6II_z7II' },
        { src: 'https://shopimg.kitamura.jp/images/banner/8023.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/eoskiss_m2' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7945.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/z50mm_z14-24mm' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7941.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/7c' },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/7899.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/xf50mmf1.0rwr'
        },
        { src: 'https://shopimg.kitamura.jp/images/banner/7771.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/7sm3' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7757.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/z_5' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7727.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/panasonic/g100' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7719.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/eosr5_r6' },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/7717.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/rf100-500mm_f4.5_7.1l_is_usm'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/7730.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/rf600mm-rf800mm_f11_is_stm'
        },
        { src: 'https://shopimg.kitamura.jp/images/banner/7860.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/sony/vlogcam_zv1_zv1g' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7404.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/xt4' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7401.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/d6' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7350.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/eoskiss10I' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7331.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/olympus/em1m3' },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/7334.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/olympus/ed_12-45mm_f4.0pro'
        },
        { src: 'https://shopimg.kitamura.jp/images/banner/7274.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/x100v' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7244.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/fujifilm/x-t200' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7162.jpg', href: 'https://shop.kitamura.jp/ec/special/camera/feature/canon/1dxmk3' },
        { src: 'https://shopimg.kitamura.jp/images/banner/7177.png', href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/D780' },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/7164.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/nikkorz_70-200mm_f2.8_vr_s'
        },
        {
          src: 'https://shopimg.kitamura.jp/images/banner/7185.jpg',
          href: 'https://shop.kitamura.jp/ec/special/camera/feature/nikon/nikkor_120_300mm_f2.8_e_fl_ed_sr_vr'
        }
      ],
      reasonList: [
        {
          titleImg: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_07.png',
          txt: 'アクティブな撮影も、暗いシーンも、美しく鮮やかに撮影。\nFDR-X3000/HDR-AS300は、画素加算なしの全画素読み出しに対応し、HDR-AS50よりもさらに高画質に記録できます。',
          partImg: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_08.png',
          partImg2: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_09.png'
        },
        {
          titleImg: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_10.png',
          txt: '解像度・コントラスト・色再現性に優れ、さらには画面周辺部の歪みを軽減した新開発レンズです。レンズ表面には多層膜コーティングを施し、光の乱反射によるゴーストやフレアを効果的に抑制します。',
          partImg: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_11.png',
          partImg2: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_12.png'
        },
        {
          titleImg: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_13.png',
          txt: '高感度なセンサーからの膨大な情報を高速処理し、低ノイズ・高精細に再現します。アクティブなシーンの躍動感や風景の美しさなどを、より自然で鮮やかな印象深い高精細映像で残せます。',
          partImg: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_14.png',
          partImg2: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_15.png'
        }
      ],
      movieList: [
        'https://www.youtube.com/embed/VWn9oEeMWqw?rel=0&amp;showinfo=0',
        'https://www.youtube.com/embed/pR2C2yZ4OiE?rel=0&amp;showinfo=0',
        'https://www.youtube.com/embed/qGrbcNUX7GA?rel=0&amp;showinfo=0'
      ],
      activeItemList: [
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_22.png', href: '/ec/pd/4548736009950/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_25.png', href: '/ec/pd/4548736029699/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_28.png', href: '/ec/pd/4548736005174/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_23.png', href: '/ec/pd/4905524952469/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_26.png', href: '/ec/pd/4905524991055/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_29.png', href: '/ec/pd/4905524938814/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_24.png', href: '/ec/pd/4548736015227/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_27.png', href: '/ec/pd/4548736015234/' },
        { src: '/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_30.png', href: '/ec/pd/4905524961478/' }
      ],
      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: '/ec/special/camera/dslr',
          img: 'https://shopimg.kitamura.jp/images/banner/1350.gif',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          href: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ]
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
.tbnrbox {
  background-color: #ffffcc;
  box-sizing: border-box;
  margin: 0;
}

.main-area {
  background: url(/ec/images2/special/camera/feature/sony/actioncam/pc/actioncam_main_bg.png) no-repeat;
}
</style>
