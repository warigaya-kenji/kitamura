<template>
  <v-app>
    <div class="trekking">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- ↓top image -->
        <topTitleImg
          :pcBackgroundImg="'/ec/images2/special/camera/bag/feature/trekking/rec_gotop_off.gif'"
          :spBackgroundImg="'/ec/images2/special/camera/bag/feature/trekking/img_item-350px.gif'"
          :type="2"
          :height="'128'"
        />
        <!-- ↑top image -->
        <h1>休日はフォトトレッキングに行こう！ フォトトレッキングのおすすめ カメラバック・カメラ用品のご紹介</h1>
        <p>
          山を登りながら、気になった風景や植物など楽しく写真を撮る「フォトトレッキング」。<br />
          写真はよく撮るけど、登山やハイキングはしたことないという人も、まったくの初心者の人でも、気軽に楽しめますよ♪<br />
          フォトトレッキング・登山におすすめなカメラバックやリュック、あったら便利な商品や必要な装備をご紹介します。
        </p>
        <v-row no-gutters>
          <v-col cols="6" sm="3" v-for="(navi, index) in naviList" :key="index">
            <v-hover v-slot="{ hover }">
              <v-btn tile block :color="hover ? '#333' : '#666'" height="66px" v-scroll-to="navi.href">
                <span class="white--text font-weight-bold"
                  >{{ navi.name }}<br />
                  <v-img :src="navi.src" max-width="27px" max-height="37px" class="mx-auto"></v-img>
                </span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

        <!--↓1-->
        <v-card class="mt-7 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">《準備編》日帰りトレッキング・登山におすすめの服装＆カメラバック・カメラ装備</h2>
          <v-sheet class="pa-2 item_review" color="#ffffff">
            <h3 class="pb-10">
              <span class="bg-hito mr-2 float-left"></span>
              こんな服装＆カメラ・カメラバック・装備で行ってきました
            </h3>
            <p style="clear: both"></p>

            <p class="mt-7 px-4">
              関東で日帰りトレッキング・登山といえば、高尾山！ 駅から歩いて行ける近さが魅力。<br />
              フォトトレッキング初心者の私が、ハイキング日和の4月末に、こんな服装＆カメラ・カメラバック・装備で行ってきました！
            </p>
            <v-row>
              <v-col cols="12" sm="8">
                <h4 class="px-4 mb-2 f18px font-weight-bold">
                  <v-icon left color="black">far fa-check-square</v-icon> フォトトレッキング・登山におすすめな服装
                </h4>
                <ol>
                  <li>
                    汗を素早く吸収してくれるドライ素材の長袖がおすすめ<br />
                    (私は登山用品メーカーさんのショップで購入しました。専門店に行くと機能性も抜群でおしゃれなものが選べますよ♪)
                  </li>
                  <li>シューズは安全面・歩きやすさからトレッキング用のものがいいですね！</li>
                  <li>山歩きをすると、曇りの日でも日焼けするので帽子も必須です</li>
                  <li>天気も変わりやすいので、念のためパーカーやベストのような上着も用意しておきましょう！</li>
                </ol>
                <h4 class="px-4 mb-2 f18px font-weight-bold">
                  <v-icon left color="black">far fa-check-square</v-icon> フォトトレッキング・登山におすすめなカメラバック・装備
                </h4>
                <ol>
                  <li>
                    リュックタイプのバッグ（必須）<br />
                    日帰りトレッキングなら、カメラ・飲料水・タオル・雨具などのアイテムを収納できる20L前後のものがおすすめ
                  </li>
                  <li>
                    トレッキングポールや三脚<br />
                    トレッキングのコースや撮影スポットに合わせてご用意ください
                  </li>
                </ol>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/img01.jpg"
                  alt="フォトトレッキング服装"
                  max-width="262px"
                  max-height="389px"
                  class="mt-sm-5 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>

        <!--↓2-->
        <v-card id="camerabag" class="mt-7 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">フォトトレッキング必須アイテム カメラバックを実際に使ってみました</h2>
          <v-sheet class="pa-2 item_review" color="#ffffff">
            <h3 class="pb-10">
              <span class="bg-hito mr-2 float-left"></span>
              今回のフォトトレッキング・登山に使ったカメラバック
            </h3>
            <p style="clear: both"></p>

            <v-row dense>
              <v-col cols="12" sm="8">
                <p class="mt-4 px-4">
                  GW-ADVANCE PEAK20 バックパックを使ってみました！<br />
                  GW-ADVANCE PEAK20
                  バックパックは女性が背負うのにピッタリなサイズのカメラリュックです。いちいちリュックを下ろすことなく素早く機材を取り出せ、シャッターチャンスにとても便利です。<br /><br />
                  日本人の体形に最適化したハーネス形状。三脚の雲台もきちんとカバーしてくれる技ありのカメラバッグ。カバーのおかげで安定して固定できるんです。<br /><br />
                  今回持って行ったカメラは、<u><a v-scroll-to="'#wifi'">Wi‐Fi機能付き</a></u
                  >で、画像を簡単にスマホに送信できます。<br />
                  フォトトレッキングで手軽に思い出を残したい、という方にはミラーレス一眼やコンパクトデジカメがぴったり。お天気が変わりやすいのでコンパクトデジカメは防水仕様のものがおすすめです。
                </p>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/01bag.gif"
                  alt="ハクバ GW-ADVANCE PEAK20"
                  max-width="280px"
                  max-height="373px"
                  class="mt-sm-5 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
            <h4 id="camerabag-camera" class="mt-10 f18px">
              <v-icon small left color="#DE1B27">fas fa-star</v-icon>フォトトレッキング、登山におすすめのカメラバックとカメラ一覧
            </h4>
            <v-row dense justify="center">
              <v-col
                :cols="$vuetify.breakpoint.smAndDown ? 10 : ''"
                v-for="(cameraBag, index) in cameraBagProductList"
                :key="index"
                :class="$vuetify.breakpoint.mdAndUp ? 'text-subtitle-2' : 'text-center'"
              >
                <router-link :to="`/ec/pd/${cameraBag.janCode}`">
                  <v-img :src="cameraBag.images[0].imagePath.replace(/TN/g, 'M')" max-width="155px" max-height="155px" class="mx-auto" />
                  <p class="mb-0 h60">{{ cameraBag.itemName }}</p>
                </router-link>
                <p class="mb-0">
                  価格<br v-if="$vuetify.breakpoint.mdAndUp" /><span class="font-weight-bold red--text text-h6 mr-2">{{
                    formatPrice(parseInt(cameraBag.price))
                  }}</span
                  >円
                </p>
                <orangeBtn :btntxt="'商品詳細'" :href="`/ec/pd/${cameraBag.janCode}`" :height="'40px'" />
              </v-col>
            </v-row>
            <h4 id="wifi" class="mt-10 f18px">
              <v-icon small left color="#DE1B27">fas fa-wifi</v-icon>無線LAN/Wi-Fi搭載のデジカメはこちら<v-icon small right color="#DE1B27"
                >fas fa-camera</v-icon
              >
            </h4>
            <v-row class="mb-10" justify="center">
              <v-col cols="10" sm="4" v-for="(wifiCamera, index) in wifiCameraList" :key="index">
                <v-img :src="wifiCamera.src" max-width="120px" max-height="120px" class="mx-auto" />
                <orangeBtn :btntxt="wifiCamera.name" :href="wifiCamera.href" :height="'40px'" />
              </v-col>
            </v-row>
            <a href="/ec/special/camera/bag/trial">
              <v-img
                src="/ec/images2/special/camera/bag/feature/trekking/bnr_940-bagt.gif"
                alt="カメラバッグトライアルキャンペーン"
                max-width="874px"
                max-height="93px"
                class="mx-auto"
              />
            </a>

            <h3 class="pb-10 mt-7">
              <span class="bg-hito mr-2 float-left"></span>
              既に登山用のカメラバック・カメラリュックをお持ちの方にはインナーケースがおすすめ
            </h3>
            <p style="clear: both"></p>

            <v-row dense>
              <v-col cols="12" sm="7">
                <p class="mt-4 px-4">
                  登山用のカメラリュック・カメラバッグを既に持っている方は、安価な<u
                    ><a v-scroll-to="'#camerabag-in'"><b>インナーケース</b></a></u
                  >を使って活用しましょう。<br />
                  全面の厚いクッションが、機材を衝撃からしっかり保護し、クッション入りのフタがホコリの侵入を防ぎます。不要なときは取り外しも可能。普段使いのトートバッグやショルダーバッグでも使えます。<br />
                  さらに、おうちでもカメラ・レンズ保管ケースとして使えるので便利です。
                </p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/03bag.gif"
                  alt="インナーケース"
                  max-width="350px"
                  max-height="262px"
                  class="mt-sm-2 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
            <h4 id="camerabag-in" class="mt-10 f18px">
              <v-icon small left color="#DE1B27">fas fa-star</v-icon>フォトトレッキング、登山におすすめのインナーケース
            </h4>
            <v-row dense justify="center">
              <v-col
                :cols="$vuetify.breakpoint.smAndDown ? 10 : ''"
                v-for="(innerCase, index) in innerCaseProductList"
                :key="index"
                :class="$vuetify.breakpoint.mdAndUp ? 'text-subtitle-2' : 'text-center'"
              >
                <router-link :to="`/ec/pd/${innerCase.janCode}`">
                  <v-img :src="innerCase.images[0].imagePath.replace(/TN/g, 'M')" max-width="155px" max-height="155px" class="mx-auto" />
                  <p class="mb-0 h60">{{ innerCase.itemName }}</p>
                </router-link>
                <p class="mb-0">
                  価格<br v-if="$vuetify.breakpoint.mdAndUp" /><span class="font-weight-bold red--text text-h6 mr-2">{{
                    formatPrice(parseInt(innerCase.price))
                  }}</span
                  >円
                </p>
                <orangeBtn :btntxt="'商品詳細'" :href="`/ec/pd/${innerCase.janCode}`" :height="'40px'" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
        <!--↓3-->
        <v-card id="goods" class="mt-7 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">あったら便利！ フォトトレッキング・登山におすすめカメラ用品</h2>
          <v-sheet class="pa-2 item_review" color="#ffffff">
            <h3 class="pb-10">
              <span class="bg-hito mr-2 float-left"></span>
              カメラの重さをゼロに！ トレッキング・登山がさらに楽になる商品
            </h3>
            <p style="clear: both"></p>

            <v-row dense>
              <v-col cols="12" sm="7">
                <p class="mt-4 px-4">
                  バックパックに取り付けたフック状のパーツにカメラストラップを引っ掛けることで、首に掛かるカメラの重みをゼロにする<u
                    ><a v-scroll-to="'#convenient'"><b>ハクバ くびの負担がZEROフック</b></a></u
                  >。実際にカメラの重さを感じることなく山歩きが楽しめました！ これはフォトトレッキング一押しアイテムです！
                </p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/01goods.gif"
                  alt="ハクバ くびの負担がZEROフック"
                  max-width="350px"
                  max-height="262px"
                  class="mt-sm-2 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
            <h3 class="pb-10 mt-7">
              <span class="bg-hito mr-2 float-left"></span>
              フォトトレッキング・登山に集中できるカメラホルスター
            </h3>
            <p style="clear: both"></p>

            <v-row dense>
              <v-col cols="12" sm="5">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/04bag.gif"
                  alt="カメラホルスター"
                  max-width="227px"
                  max-height="303px"
                  class="mt-sm-2 mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <p class="mt-4 px-4">
                  一眼レフやミラーレスにレンズをつけて歩くと、カメラが体に当たって痛いですよね。<br />
                  <u
                    ><a v-scroll-to="'#convenient'"><b>カメラホルスター</b></a></u
                  >を使えば、レンズが動かなくなるのでどこかにぶつける危険も軽減し、山歩きに集中できます。
                </p>
              </v-col>
            </v-row>
            <h3 class="pb-10 mt-7">
              <span class="bg-hito mr-2 float-left"></span>
              コンパクトデジカメを持っていく人におすすめしたいカメラポーチ
            </h3>
            <p style="clear: both"></p>

            <v-row dense>
              <v-col cols="12" sm="7">
                <p class="mt-4 px-4">
                  今回使ったのは<u
                    ><a v-scroll-to="'#convenient'"><b>OUTDOOR(アウトドア) カメラポーチ 01 </b></a></u
                  >。<br />
                  iPhone5sとコンパクトデジカメがぴったり収納できました！<br />
                  ショルダーベルトに取り付けでき、取り出しやすいところが便利で気に入りました。
                </p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/01goods.gif"
                  alt="ハクバ くびの負担がZEROフック"
                  max-width="350px"
                  max-height="262px"
                  class="mt-sm-2 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
            <h3 class="pb-10 mt-7">
              <span class="bg-hito mr-2 float-left"></span>
              一眼を持って行くならぜひ使ってほしい三脚
            </h3>
            <p style="clear: both"></p>
            <p class="px-4">
              野鳥や風景を撮るなら必須アイテム！<br />
              今回は<u
                ><a v-scroll-to="'#convenient'"><b>マンフロット MKBFRTC4-BH befreeアドバンス カーボンT三脚キット</b></a></u
              >をチョイス。セットが簡単なので三脚初心者さんでも簡単に設置できます！ 持ち運びやすいコンパクトさもGood。<br />
              三脚まではちょっと…という方には
              <u
                ><a v-scroll-to="'#convenient'"><b>カメラ ざ・ぶとん</b></a></u
              >もおすすめです。ビーズクッション状なので形を整えてカメラをお好みの角度で固定できる便利グッズ。バッグの中では緩衝材替わりにもなります。セルフタイマーで集合写真を撮りたいときにも活躍しますよ。またカメラバッグも撮影時の便利グッズになります！
              カメラを構えるとき、写真のようにバッグを横向きにし肘を固定すると、手ブレ防止になるフォトトレッキングの小ワザです。
            </p>
            <v-img
              src="/ec/images2/special/camera/bag/feature/trekking/05bag.gif"
              alt="カメラ ざ・ぶとん"
              max-width="874px"
              max-height="368px"
              class="mt-sm-2 mx-auto"
            ></v-img>
            <h4 id="convenient" class="mt-10 f18px">
              <v-icon small left color="#DE1B27">fas fa-star</v-icon>あったら便利！ フォトトレッキング・登山におすすめカメラ用品一覧
            </h4>
            <v-row dense justify="center">
              <v-col
                :cols="$vuetify.breakpoint.smAndDown ? 10 : ''"
                v-for="(cameraSupplies, index) in cameraSuppliesProductList"
                :key="index"
                :class="$vuetify.breakpoint.mdAndUp ? 'text-subtitle-2' : 'text-center'"
              >
                <router-link :to="`/ec/pd/${cameraSupplies.janCode}`">
                  <v-img :src="cameraSupplies.images[0].imagePath.replace(/TN/g, 'M')" max-width="155px" max-height="155px" class="mx-auto" />
                  <p class="mb-0 h60">{{ cameraSupplies.itemName }}</p>
                </router-link>
                <p class="mb-0">
                  価格<br v-if="$vuetify.breakpoint.mdAndUp" /><span class="font-weight-bold red--text text-h6 mr-2">{{
                    formatPrice(parseInt(cameraSupplies.price))
                  }}</span
                  >円
                </p>
                <orangeBtn :btntxt="'商品詳細'" :href="`/ec/pd/${cameraSupplies.janCode}`" :height="'40px'" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>

        <!--↓4-->
        <v-card id="care" class="mt-7 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">《機材のお手入れ編》現地で使える応急処置グッズ・お手入れグッズ</h2>
          <v-sheet class="pa-2 item_review" color="#ffffff">
            <h3 class="pb-10">
              <span class="bg-hito mr-2 float-left"></span>
              大事なカメラやレンズは応急処置が大事！ ブロアー＆レンズペン
            </h3>
            <p style="clear: both"></p>
            <v-row dense>
              <v-col cols="12" sm="7">
                <div class="mt-7 px-4">
                  <p class="mb-5">
                    屋外で使うと目に見えづらいホコリや砂でレンズが傷ついてしまうことも。コンパクトで扱いやすいお手入れ道具やグッズがいいなあ…という方におすすめしたいのが<u
                      ><a v-scroll-to="'#aid'"><b>ブロアー</b></a></u
                    >と<u
                      ><a v-scroll-to="'#aid'"><b>レンズペン</b></a></u
                    >。<br />
                    使い方は簡単、スリーステップ！
                  </p>
                  <ol>
                    <li>ブロアーで大きなゴミを飛ばす！</li>
                    <li>レンズペンのブラシでちいさなゴミを払う！</li>
                    <li>レンズペンのチップでレンズを外側からくるくる磨く！</li>
                  </ol>
                  <p class="mt-5 mb-0">レンズペンはかさばらないので重宝します。</p>
                </div>
              </v-col>
              <v-col cols="12" sm="5">
                <v-img
                  src="	/ec/images2/special/camera/bag/feature/trekking/07bag.gif"
                  alt="ブロアー＆レンズペン"
                  max-width="350px"
                  max-height="258px"
                  class="mt-sm-2 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
            <h4 id="aid" class="mt-10 f18px"><v-icon small left color="#DE1B27">fas fa-star</v-icon>大事なカメラやレンズのお手入れにおすすめカメラ用品一覧</h4>
            <v-row dense justify="center">
              <v-col
                :cols="$vuetify.breakpoint.smAndDown ? 10 : ''"
                v-for="(lensCare, index) in lensCareProductList"
                :key="index"
                :class="$vuetify.breakpoint.mdAndUp ? 'text-subtitle-2' : 'text-center'"
              >
                <router-link :to="`/ec/pd/${lensCare.janCode}`">
                  <v-img :src="lensCare.images[0].imagePath.replace(/TN/g, 'M')" max-width="155px" max-height="155px" class="mx-auto" />
                  <p class="mb-0 h60">{{ lensCare.itemName }}</p>
                </router-link>
                <p class="mb-0">
                  価格<br v-if="$vuetify.breakpoint.mdAndUp" /><span class="font-weight-bold red--text text-h6 mr-2">{{
                    formatPrice(parseInt(lensCare.price))
                  }}</span
                  >円
                </p>
                <orangeBtn :btntxt="'商品詳細'" :href="`/ec/pd/${lensCare.janCode}`" :height="'40px'" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>

        <!--↓5-->
        <v-card id="care" class="mt-7 pa-5 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon left color="black">fas fa-hiking</v-icon>歩いて楽しい！ 撮って楽しい！ フォトトレッキング・登山を楽しもう！
          </h2>
          <v-sheet class="pa-2 item_review" color="#ffffff">
            <v-row dense>
              <v-col cols="12" sm="7">
                <p class="mt-2 px-4">
                  山歩きは好きだけど、カメラはちょっと…な人も、写真はよく撮るけど、ハイキングはしたことないよという人も、どちらも初心者の人でも気軽に楽しめるのが、フォトトレッキングです。<br />
                  自然の中を散策しながら楽しい思い出が残せるステキなレジャーです！<br />
                  フォトトレッキングを楽しめるスポットは意外とたくさんありますよ。<br />
                  まずはLet's Try☆
                </p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-img
                  src="/ec/images2/special/camera/bag/feature/trekking/img02.png"
                  alt="フォトトレッキング"
                  max-width="350px"
                  max-height="213px"
                  class="mt-sm-2 mx-auto"
                ></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>

        <!--↓6-->
        <v-card id="print" class="mt-7 pa-5 line-g">
          <span class="text-subtitle-2">フォトトレッキング、登山記録におすすめのプリントサービス</span>
          <h2 class="text-h6 font-weight-bold mb-5"><v-icon left color="black">fas fa-book-open</v-icon>フォトブック＆ワンダーシャッフルプリント</h2>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card class="pa-5">
                <h3>思い出写真をたっぷり使うなら<br />フォトブック</h3>
                <a href="https://photobook.kitamura.jp/" target="_brank">
                  <v-img
                    src="/ec/images2/special/camera/bag/feature/trekking/photozine.png"
                    alt="フォトブック"
                    max-width="389px"
                    max-height="243px"
                    class="mt-sm-2 mx-auto"
                  ></v-img>
                </a>
                <br />
                本のような仕上がりのオリジナルフォトブック<br />
                <a href="https://photobook.kitamura.jp/" target="_brank"><v-icon left small>fas fa-chevron-right</v-icon>詳しくはこちら</a>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card class="pa-5">
                <h3>たくさんの写真をおしゃれな1枚に<br />ワンダーシャッフルプリント</h3>
                <a href="https://www.kitamura-print.com/wonder_shuffle/" target="_brank">
                  <v-img
                    src="/ec/images2/special/camera/bag/feature/trekking/bigImage.jpg"
                    alt="フォトブック"
                    max-width="386px"
                    max-height="340px"
                    class="mt-sm-2 mx-auto"
                  ></v-img>
                </a>
                <br />
                スマホでも作れる、1枚のプリントに写真をギュッ！<br />
                <a href="https://www.kitamura-print.com/wonder_shuffle/" target="_brank"><v-icon left small>fas fa-chevron-right</v-icon>詳しくはこちら</a>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <h2 class="text-h6 font-weight-bold mb-2"><v-icon left color="black">fas fa-arrow-circle-right</v-icon>おすすめ特集・プリントサービス</h2>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import TopTitleImg from '@/components/common/special/top-title-img.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import { onMounted, reactive, toRefs } from '@vue/composition-api';
import { ProductDetail } from '@/types/product';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
export default Vue.extend({
  name: 'trekking',
  components: {
    breadcrumbs: Breadcrumbs,
    topTitleImg: TopTitleImg,
    urlcopy: Urlcopy,
    orangeBtn: OrangeBtn,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'フォトトレッキング特集｜おすすめカメラバック | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '山を登りながら、気になった風景や植物など楽しく写真を撮る「フォトトレッキング」。登山におすすめなカメラバックやリュック、あったら便利な商品や必要な装備をご紹介します｜フォトトレッキング特集')

    const state = reactive({
      naviList: [
        { name: 'カメラバック', href: '#camerabag', src: '/ec/images2/special/camera/bag/feature/trekking/ic01.png' },
        { name: '便利グッズ', href: '#goods', src: '	/ec/images2/special/camera/bag/feature/trekking/ic02.png' },
        { name: 'お手入れグッズ', href: '#care', src: '/ec/images2/special/camera/bag/feature/trekking/ic03.png' },
        { name: 'プリントサービス', href: '#print', src: '/ec/images2/special/camera/bag/feature/trekking/ic04.png' },
      ],
      wifiCameraList: [
        { name: 'コンパクトデジカメ', src: 'https://shopimg.kitamura.jp/images/pd/802/7c5/4b3/a69/1f1/93c/e0a/605/af4/a10/73t/0jr/hya/0/TN.jpg', href: '/ec/list?narrow18=0&keyword=Wi-Fi&category=コンパクトデジタルカメラ&index=&n20c=完了商品は除く&sort=number20,number19,Score&searchbox=1&q=Wi-Fi&s5%5B%5D=搭載&path=コンパクトデジタルカメラ' },
        { name: 'ミラーレス一眼', src: '	https://shopimg.kitamura.jp/images/pd/e6c/6a6/6d5/aaa/dab/030/11d/fe4/89b/9fc/ccu/g6r/nf4/a/TN.jpg', href: '/ec/list?narrow18=0&keyword=Wi-Fi&category=ミラーレス一眼&index=&n20c=完了商品は除く&sort=number20,number19,Score&searchbox=1&q=Wi-Fi&s5%5B%5D=搭載&path=ミラーレス一眼' },
        { name: 'デジタル一眼レフ', src: 'https://shopimg.kitamura.jp/images/pd/c17/4d2/669/5e0/4c8/989/33b/6f5/69a/37c/18x/u7x/pql/8/TN.jpg', href: '/ec/list?narrow18=0&keyword=Wi-Fi&category=デジタル一眼レフ&index=&n20c=完了商品は除く&sort=number20,number19,Score&searchbox=1&q=Wi-Fi&s5%5B%5D=搭載&path=デジタル一眼レフ' },

      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/lensfilter/nikon-arcrest-nd',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/ec/special/camera/waterproof',
          img: 'https://shopimg.kitamura.jp/images/banner/1220.jpg',
          alt: '防水カメラ・ウェアラブルカメラ特集'
        },
        {
          href: '/ec/special/camera/tripod',
          img: '	https://shopimg.kitamura.jp/images/banner/3253.gif',
          alt: 'おすすめ三脚特集'
        },
        {
          href: '/ec/special/kaden/bottle',
          img: 'https://shop.kitamura.jp/images/banner/1921.gif',
          alt: 'おすすめの水筒・ステンレスボトルを集めました'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
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
          path: 'カメラバッグ・カメラケース特集',
          linkUrl: '/ec/special/camera/bag',
          disabled: false
        },
        {
          path: 'フォトトレッキング特集｜おすすめカメラバック',
          disabled: true
        }
      ],
      // ↓ ---- 登山におすすめのカメラバックとカメラ一覧 ----
      cameraBagJanCode: ['8024221693089', '8024221650464', '8024221693119', '4549212301612', '4545350052690'],
      cameraBagProductList: [] as Array<ProductDetail>,
      // ↓ ---- 登山におすすめのインナーケース ----
      innerCaseJanCode: ['2500000149009', '4975981612299', '4961607572511', '4975981728143'],
      innerCaseProductList: [] as Array<ProductDetail>,
      // ↓ ---- 登山におすすめカメラ用品一覧 ----
      cameraSuppliesJanCode: ['4977187311808', '0099461003767', '4977187290929', '8024221668315'],
      cameraSuppliesProductList: [] as Array<ProductDetail>,
      // ↓ ---- 大事なカメラやレンズのお手入れにおすすめカメラ用品一覧 ----
      lensCareJanCode: ['4977187325829', '4975981524592', '497718732603', '4977187325904', '4977187329698'],
      lensCareProductList: [] as Array<ProductDetail>,

    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 登山におすすめのカメラバックとカメラ一覧
        const cameraBagResult = await ProductService.fetchProducts(state.cameraBagJanCode, true);
        state.cameraBagProductList = cameraBagResult.items;
        // 登山におすすめのインナーケース
        const innerCaseResult = await ProductService.fetchProducts(state.innerCaseJanCode, true);
        state.innerCaseProductList = innerCaseResult.items;
        // 登山におすすめカメラ用品一覧
        const cameraSuppliesResult = await ProductService.fetchProducts(state.cameraSuppliesJanCode, true);
        state.cameraSuppliesProductList = cameraSuppliesResult.items;
        // 大事なカメラやレンズのお手入れにおすすめカメラ用品一覧
        const lensCareResult = await ProductService.fetchProducts(state.lensCareJanCode, true);
        state.lensCareProductList = lensCareResult.items;
      } catch (error) {
        // 登山におすすめのカメラバックとカメラ一覧
        state.cameraBagProductList = [] as Array<ProductDetail>;
        // 登山におすすめのインナーケース
        state.innerCaseProductList = [] as Array<ProductDetail>;
        // 登山におすすめカメラ用品一覧
        state.cameraSuppliesProductList = [] as Array<ProductDetail>;
        // 大事なカメラやレンズのお手入れにおすすめカメラ用品一覧
        state.lensCareProductList = [] as Array<ProductDetail>;
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
.trekking h1 {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.2em;
  margin: 0 0 15px 0;
}
.trekking h2 {
  letter-spacing: 0.05em;
  border-bottom: 2px solid #ddd;
}
.trekking h3 {
  width: 100%;
  letter-spacing: 0.05em;
  height: auto;
  border-bottom: dotted 2px #009900;
  vertical-align: bottom;
}
.trekking h4 {
  letter-spacing: 0.05em;
}
.item_review p {
  line-height: 1.9em;
}
.trekking ol {
  box-sizing: border-box;
  list-style: decimal;
  margin: 0;
  padding: 0 15px 0 60px;
}
.trekking ol li {
  margin: 0 0 10px 0;
  line-height: 1.4em;
}
.bg-hito {
  background: url(/ec/images2/special/camera/bag/feature/trekking/kaneko.png) no-repeat scroll left;
  width: 70px;
  height: 70px;
}
.f18px {
  font-size: 18px;
}
.h60 {
  height: 60px;
  line-height: 1.3em !important;
}
</style>
