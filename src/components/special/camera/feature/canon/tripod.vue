<template>
  <v-app>
    <div class="tripod">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy :url="'https://shop.kitamura.jp/ec/special/camera/astronomical/moonlook/'" :color="'#ed7f22'" />

        <!-- ↓ 画像の読み込み -->
        <v-img class="mb-5" src="/ec/images2/special/camera/tripod/bn_00.gif" max-width="100%" height="auto" />
        <!-- ↑ 画像の読み込み -->

        <p class="text-left">おすすめ三脚の選び方</p>
        <p>
          旅行や登山、花や鉄道・飛行機、夜景など、撮りたいシーンに合わせたおすすめ三脚や、ベルボン、マンフロット、スリックなどの人気メーカーのおすすめ三脚をピックアップ★
          コンパクトな小型ミニ三脚や軽量カーボン・アルミ三脚、ビデオカメラ用三脚、一脚、雲台の選び方のポイントもまとめました♪
        </p>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" :cols="4" :height="'45px'" />
        <!-- ↑ ナビボタン -->

        <subText :textItem="'種類で選ぶ♪ おすすめ三脚'" />
        <p class="subtitle-2 font-weight-bold">
          三脚は種類によって、素材、強度、大きさ、重さが異なります。強度は、各商品ページに「推奨積載質量」を記載していますので参考にしてください。
        </p>

        <!--▼種類で選ぶ-->
        <v-container class="bg-color">
          <v-row>
            <v-col cols="4" v-for="(tripodType, index) in tripodTypeList" :key="`tripodType-${index}`" class="ma-0">
              <v-card outlined color="#E3E3E3" class="pa-2 ma-0">
                <img :src="`/ec/images2/special/camera/tripod/type_0${index}.gif`" @error="noimage" width="100%" />
                <v-card-text class="caption black--text pa-0 ma-0 font-weight-medium">{{ tripodType.maintxt }} </v-card-text>
                <span class="text-center ma-0"
                  ><v-btn
                    color="orange"
                    :href="`/ec/special/camera/tripod/type0${index}/`"
                    class="pa-4 ma-0 white--text darken-2 font-weight-bold"
                    width="100%"
                    >{{ tripodType.btntxt }}</v-btn
                  ></span
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!--▼種類で選ぶ-->

        <subText :textItem="'三脚を選ぶときに必須！ 用途別に必要なパーツ類をご紹介'" />
        <p class="subtitle-2 font-weight-bold">
          三脚を選ぶときには、カメラを三脚に固定する装置「雲台」選びも重要です。雲台は主に「３ウェイ雲台」「自由雲台」があります。
        </p>

        <!--↓パーツ-->
        <v-container class="bg-color mb-12">
          <v-row>
            <v-col cols="4" v-for="(tripodPart, index) in tripodPartsList" :key="`tripodPart-${index}`" class="ma-0">
              <v-hover>
                <v-card outlined color="#E3E3E3" class="pa-2 ma-0">
                  <img :src="`/ec/images2/special/camera/tripod/un_0${index}.gif`" @error="noimage" width="100%" />
                  <v-card-text class="caption black--text pa-0 ma-0 font-weight-medium">
                    {{ tripodPart.maintxt }}
                  </v-card-text>
                  <span class="text-center ma-0"
                    ><v-btn
                      color="orange"
                      :href="`/ec/special/camera/tripod/type0${index}/`"
                      class="pa-4 ma-0 white--text darken-2 font-weight-bold"
                      width="100%"
                      >{{ tripodPart.btntxt }}</v-btn
                    ></span
                  >
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
        <!--↓パーツ-->

        <!-- ↓ 撮影シーンで選ぶ -->
        <div id="v003" class="mb20 h-1 lef w100pr"></div>

        <subText :textItem="'撮影シーンで選ぶ♪ おすすめ三脚'" />
        <p class="subtitle-2 font-weight-bold">
          人気メーカーのベルボン、マンフロット、スリックのおすすめ三脚をピックアップ★撮りたいシーンに合わせてお選びください
        </p>

        <naviBtn :naviList="shootingSceneNaviList" :cols="1.5" :height="'45px'" />
        <!-- ↓ 撮影シーンで選ぶ -->

        <!--↓旅行-->
        <div class="my-10">
          <h3 class="">旅行や登山、ファミリーにおすすめ！コンパクト＆軽量三脚</h3>
        </div>

        <div class="mb-10" v-if="Object.keys(mainProductList).length !== 0">
          <span>おすすめ三脚</span>
          <br />
          <h4 class="red white--text darken-2 pa-2">マンフロット MKCOMPACTACN</h4>
          <v-row>
            <v-col cols="5" class="mt-1 pa-4">
              <a
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=MKCOMPACTACN&category=&searchbox=1&sort=number20,Number17,Score&index=all&path=&q=MKCOMPACTACN&x=0&y=0"
                ><img src="/ec/images2/special/camera/tripod/sir_02.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">ジョイスティック型のハンドルで、フォトもムービーも撮影可能です。</p>
              <h4>
                <a
                  href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=MKCOMPACTACN&category=&searchbox=1&sort=number20,Number17,Score&index=all&path=&q=MKCOMPACTACN&x=0&y=0"
                  class="blue-link"
                  >{{ mainProductList[0].itemName }}</a
                >
              </h4>
              <p class="mt-2">
                価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[0].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-10">
                <v-btn :href="`/ec/pd/${mainProductList[0].janCode}`" color="blue darken-2" class="white--text text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓ローポジ-->
        <div class="my-10">
          <h3 class="">花や昆虫の撮影におすすめ！ローポジション三脚</h3>
        </div>

        <div class="mb-2" v-if="Object.keys(mainProductList).length !== 0">
          <span>おすすめ三脚</span>
          <br />
          <h4 class="red white--text darken-2 pa-2">マンフロット MKCOMPACTACN</h4>
          <v-row>
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[1].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_05.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">90度センターポール機構によりローポジション撮影に最適。開脚角度は4段階に調整可能。</p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[1].janCode}`" target="_blank">{{ mainProductList[1].itemName }}</a>
              </h4>
              <p class="mt-2">
                価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[1].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[1].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span>おすすめ三脚</span>
          <br />
          <h4 class="grey darken-2 white--text darken-2 pa-2">スリック E53 ライトカーボン</h4>
          <v-row class="mb-12">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[2].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_06.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">持ち運び重視の軽量カーボン三脚。ローポジション含め三段階の開脚調整が可能。</p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[2].janCode}`" target="_blank">{{ mainProductList[2].itemName }}</a>
              </h4>
              <p class="mt-2">
                価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[2].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[2].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓花火-->
        <div class="my-12">
          <h3 class="">夜景撮影・花火撮影におすすめ！ カーボン三脚</h3>
          <p class="pa-4 text-subtitle-2 font-weight-bold">夜間に撮影する花火には、振動吸収率がいいカーボン三脚が効果バツグン。</p>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚</span>
          <br />
          <h4 class="red darken-2 white--text darken-2 pa-2">マンフロット MKBFRTC4-BH befreeアドバンス カーボンT三脚キット</h4>
          <v-row class="mb-12">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[3].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_08.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">カーボンファイバー100%の脚なので、軽量で高剛性。基本性能に優れたカーボン三脚です。</p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[3].janCode}`" target="_blank">{{ mainProductList[3].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[3].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[3].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓風景写真-->
        <div class="my-12">
          <h3 class="">自然、風景写真、ネイチャーフォト撮影におすすめ！ 軽量カーボン三脚</h3>
          <p class="pa-2 text-subtitle-2 font-weight-bold">
            自然写真、風景写真の本格的な作品作りに。ネイチャーフォト撮影に必要なスペックと耐荷重が備わった、おすすめの軽量カーボン三脚です。
          </p>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚＆雲台</span>
          <br />
          <h4 class="red darken-2 white--text darken-2 pa-2">マンフロット MT190XPRO3 ＋ MHXPRO-3W</h4>
          <v-row class="mb-12">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[5].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_011.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                90°センターポールや片手で簡単に伸縮操作できるクイックパワーロックを採用。撮影の可能性を広げるメインストリートモデルです。
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[4].janCode}`" target="_blank">{{ mainProductList[4].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[4].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[4].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
              <h4>
                <a :href="`/ec/pd/${mainProductList[5].janCode}`" target="_blank">{{ mainProductList[5].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[5].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[5].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚</span>
          <br />
          <h4 class="grey darken-2 white--text darken-2 pa-1">スリック E74 ライトカーボン</h4>
          <v-row class="mb-12">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[6].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_012.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                中型25mmパイプ径の軽量デジタル一眼レフ向けカーボン三脚。航空機内持ち込みサイズ60cm未満に対応。コンパクトに持ち運べる4段三脚です
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[6].janCode}`" target="_blank">{{ mainProductList[6].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[6].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[5].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓電車-->
        <div class="my-12">
          <h3>撮り鉄におすすめ！ カーボン三脚</h3>
          <p class="pa-2 text-subtitle-2 font-weight-bold">複数のカメラを載せるスペックがある三脚がおすすめです。</p>
        </div>

        <div>
          <span class="caption grey--text font-weight-bold">おすすめ三脚＆雲台＆プレート</span>
          <br />
          <h4 class="light-blue lighten-2 white--text darken-2 pa-1">ベルボン プロフェッショナル・ジオ V630 ＋ PHD-61 ＋ スーパーマグプレート II</h4>
          <v-row>
            <v-col cols="5" class="mt-1">
              <a href="/ec/pd/4907990441485"><img src="/ec/images2/special/camera/tripod/sir_013.gif" @error="noimage" width="100%" /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                鉄道の撮影は広角と望遠用に2台カメラ構えが必要。1度きりのチャンスをギア付きカーボン三脚でしっかりとらえましょう。
              </p>
            </v-col>
          </v-row>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚</span>
          <br />
          <h4 class="red darken-2 white--text darken-2 pa-1">マンフロット MK055XPRO3-3W</h4>
          <v-row>
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[8].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_014.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                90°センターポール機構により、最低高は9cm、最伸高183cmまでと、鉄道のさまざまな表情の撮影が可能です。
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[8].janCode}`" target="_blank">{{ mainProductList[8].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[8].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[8].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚＆雲台</span>
          <br />
          <h4 class="grey darken-2 white--text darken-2 pa-1">スリック カーボンマスター 923PRO N ＋ マルチアーム520</h4>
          <v-row class="mb-12">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[9].janCode}`" target="_blank"
                ><img src="/ec/images2/special/camera/tripod/sir_015a.gif" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                望遠レンズやフルサイズユーザーにおすすめの安定感の高い大型3段カーボン三脚です。また、マルチアーム520（通称「鉄ちゃんバー」）使用でカメラを2台載せティルトパーン操作が可能！
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[9].janCode}`" target="_blank">{{ mainProductList[9].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[9].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[9].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
        <p class="text-right">
          <a href="#v003">↑撮影シーンを選ぶ</a>
        </p>

        <!--↓飛行機-->
        <div class="mt-12">
          <h3>飛行機の撮影におすすめ！ 一脚</h3>
          <p class="pa-2 text-subtitle-2 font-weight-bold">
            時速300キロで離着陸をする航空機を狙うには、大口径レンズを振り回しても問題がないスペックが必要です。
          </p>
        </div>
        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚</span>
          <br />
          <h4 class="light-blue lighten-2 white--text darken-2 pa-1">ベルボン ULTRA STICK R63Q 一脚</h4>
          <v-row class="mb-2">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[10].janCode}`" target="_blank"
                ><img src="https://shopimg.kitamura.jp/images/pd/957/60b/82a/9eb/c09/10f/9e9/16f/e34/a64/fcl/4ge/ai5/i/M.jpg" @error="noimage" width="100%"
              /></a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                脚先端を握ってひねる事で全段を一気に固定・解除する事ができるウルトラロック採用。使いやすさを徹底追求しました。
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[10].janCode}`" target="_blank">{{ mainProductList[10].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[10].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[10].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <h4 class="red lighten-2 white--text darken-2 pa-1">マンフロット MVMXPROC5 XPRO</h4>
          <v-row>
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[11].janCode}`" target="_blank">
                <img src="https://shopimg.kitamura.jp/images/pd/c8a/82e/80e/e9a/4d3/8cc/e76/908/8cd/047/ecv/kao/323/7/M.jpg" @error="noimage" width="100%" />
              </a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                クイックパワーロックやレッグウォーマー採用。パン以外をロックするFLUIDTECH 機構 搭載でフォト・ムービー撮影の両方で使用が可能です。
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[11].janCode}`" target="_blank">{{ mainProductList[11].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[11].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[11].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <span class="caption grey--text font-weight-bold">おすすめ三脚</span>
          <br />
          <h4 class="grey darken-2 white--text darken-2 pa-1">スリック 一脚 ザ プロポッドスポーツ</h4>
          <v-row class="mb-4">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[12].janCode}`" target="_blank">
                <img src="https://shopimg.kitamura.jp/images/pd/c8a/82e/80e/e9a/4d3/8cc/e76/908/8cd/047/ecv/kao/323/7/M.jpg" @error="noimage" width="100%" />
              </a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">
                スペースが狭く撮影しにくいシーンに便利な自立一脚。ザ プロポッドより細いパイプを使い、軽量化を図ったプロ用一脚の軽量モデルです。
              </p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[12].janCode}`" target="_blank">{{ mainProductList[12].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[12].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[12].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <v-container class="mb-12">
            <p>作例 ～飛行機写真～</p>
            <v-row class="ba-gr">
              <v-col cols="4" v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
                <img :src="src" width="100%" />
                <p class="text-right mb-0 pb-0">
                  <v-icon>fas fa-search-plus</v-icon>
                </p>
              </v-col>
            </v-row>
            <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
          </v-container>
          <p class="text-right">
            <a href="#v003">↑撮影シーンを選ぶ</a>
          </p>
        </div>

        <!--野鳥-->
        <div class="my-12">
          <h3>野鳥撮影や超望遠撮影用におすすめ！ 大型三脚</h3>
        </div>

        <div v-if="Object.keys(mainProductList).length !== 0">
          <span class="caption grey--text font-weight-bold">おすすめ三脚</span>
          <br />
          <h4 class="grey darken-2 white--text darken-2 pa-1">スリック マスターIII</h4>
          <v-row class="mb-12">
            <v-col cols="5" class="mt-1">
              <a :href="`/ec/pd/${mainProductList[13].janCode}`" target="_blank">
                <img src="/ec/images2/special/camera/tripod/sir_021.gif" @error="noimage" width="100%" />
              </a>
            </v-col>
            <v-col>
              <p class="font-weight-bold mt-2 mb-6 text-subtitle-2">一つのハンドルで上下左右を一度にロックができる、フリーターン雲台を採用。日本製。</p>
              <h4>
                <a :href="`/ec/pd/${mainProductList[13].janCode}`" target="_blank">{{ mainProductList[13].itemName }}</a>
              </h4>
              <p class="mt-2">
                特別価格:<span class="red--text font-weight-bold">&yen;{{ mainProductList[13].price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
              <div class="text-right mr-6 mb-2">
                <v-btn :href="`/ec/pd/${mainProductList[13].janCode}`" color="blue darken-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  >商品詳細を見る</v-btn
                >
              </div>
              <div class="text-right mr-6 mb-10">
                <v-btn color="orange lighten-2" class="white--text font-weight-bold text-subtitle-1" width="225px"
                  ><v-icon>fas fa-cart-arrow-down</v-icon>カートへ</v-btn
                >
              </div>
            </v-col>
          </v-row>
          <p class="text-right mb-12">
            <a href="#v003">↑撮影シーンを選ぶ</a>
          </p>
          <!--↓ショックレ-->
          <div>
            <span>三脚を買うなら、お支払いラクラク♪</span>
            <h4 class="mb-2">ショッピングクレジット</h4>
            <p>
              カメラのキタムラおすすめの『ショッピングクレジット』なら、<span class="red--text amber lighten-3">最長48回払いまで金利手数料が「0円」</span
              >!<br />ショッピングクレジットをぜひご利用ください！
            </p>
            <div>
              <h3>分割払い例</h3>
              <v-container class="ba-gr">
                <v-row class="mb-4">
                  <v-col cols="6">
                    <h4 class="red--text">分割払い例①</h4>
                    <div class="s-credit text-center">
                      <table cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <th>商品価格</th>
                            <th>分割回数</th>
                            <th>月々の<br />お支払額</th>
                            <th>分割<br />手数料</th>
                          </tr>
                          <tr>
                            <td>168,552<span>円</span></td>
                            <td>48<span>回</span></td>
                            <td class="txt-org"><span>約</span>3,512<span>円</span></td>
                            <td>0<span>円</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <h4 class="red--text">分割払い例②</h4>
                    <div class="s-credit text-center">
                      <table cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <th>商品価格</th>
                            <th>分割回数</th>
                            <th>月々の<br />お支払額</th>
                            <th>分割<br />手数料</th>
                          </tr>
                          <tr>
                            <td>35,730<span>円</span></td>
                            <td>10<span>回</span></td>
                            <td class="txt-org"><span>約</span>3,573<span>円</span></td>
                            <td>0<span>円</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <p class="my-2 caption font-weight-bold">
                ※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます
              </p>
              <h4 class="bg-momo my-8">
                <v-btn block href="https://shop.kitamura.jp/sitemap/s_credit_01.html" class="white--text text-subtitle-1 font-weight-bold"
                  >→ショッピングクレジットを詳しく見る</v-btn
                >
              </h4>
            </div>
          </div>
          <!--↑ショックレ-->

          <!--↓SNS-->
          <div>
            <v-container>
              <v-row class="mt-30">
                <v-col cols="2">
                  <v-btn color="#4267b2" height="25px" class="white--text ma-5"><v-icon small>fas fa-thumbs-up</v-icon> いいね! 42 </v-btn></v-col
                >
                <v-col cols="2">
                  <v-btn
                    color="#4267b2"
                    height="25px"
                    class="white--text ma-5"
                    href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fshop.kitamura.jp%252Fspecial%252Fsale-fair%252Fcamera%252Ffeature%252Fcanon%252Feosr5_r6%252F%26display%3Dpopup%26ref%3Dplugin%26src%3Dlike%26kid_directed_site%3D0&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ja_JP&kid_directed_site=0"
                    >シェア</v-btn
                  ></v-col
                >
                <v-col cols="2">
                  <v-btn
                    color="#1b95e0"
                    height="25px"
                    class="white--text mt-5"
                    href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fshop.kitamura.jp%2F&ref_src=twsrc%5Etfw&text=%E5%A5%BD%E8%A9%95%E7%99%BA%E5%A3%B2%E4%B8%AD%EF%BC%81%E3%82%AD%E3%83%A4%E3%83%8E%E3%83%B3EOS%20R5%20R6%20%7C%20%E3%82%AB%E3%83%A1%E3%83%A9%E3%81%AE%E3%82%AD%E3%82%BF%E3%83%A0%E3%83%A9%E3%83%8D%E3%83%83%E3%83%88%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97&tw_p=tweetbutton&url=https%3A%2F%2Fshop.kitamura.jp%2Fspecial%2Fsale-fair%2Fcamera%2Ffeature%2Fcanon%2Feosr5_r6%2F"
                    ><v-icon small>fab fa-twitter</v-icon>ツイート</v-btn
                  ></v-col
                >
                <v-col>
                  <v-icon large color="green darken-2"> mdi-domain </v-icon>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <!--↑SNS-->

          <!--↓特集-->
          <subText :textItem="'おすすめ特集'" />
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
          <!--↑特集-->
        </div>
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
import SubText from '@/components/common/special/subtext.vue';
import NaviBtn from '@/components/common/special/navi-btn.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'tripod',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    naviBtn: NaviBtn,
    recommendedFeatures: RecommendedFeatures
  },
  data() {
    return {
      naviList: [
        { naviItem: '種類で選ぶ おすすめ三脚 ▼', href: '#point' },
        { naviItem: '必要なパーツ類のご紹介 ▼', href: '#hikaku' },
        { naviItem: '撮影シーンで選ぶ おすすめ三脚 ▼', href: '#price' }
      ],
      tripodTypeList: [
        { maintxt: '風景写真が好きで作品作りを考えてる方には最適。軽くて丈夫なので大口径レンズも対応！', btntxt: 'カーボン三脚を見る ≫' },
        { maintxt: '小さく畳める携帯性の高い三脚。\n使用時に標準的な高さになるので旅行におすすめ', btntxt: 'トラベラー三脚を見る ≫' },
        { maintxt: 'ピントあわせがシビアなマクロレンズと相性バッチリ！ローポジションで花に近づけます', btntxt: 'ローポジション三脚を見る ≫' },
        { maintxt: '家族の集合写真には三脚が必須。軽くて使いやすい三脚で大切な記録を残しましょう', btntxt: 'ファミリー三脚を見る ≫' },
        { maintxt: 'ミニサイズの三脚なら、持ち運びラクラク♪ 気軽にどこでも記念撮影', btntxt: 'ミニサイズ三脚を見る ≫' },
        { maintxt: 'お子様の大切な学校行事や誕生日会。成長の記録の共に', btntxt: 'ビデオ撮影用三脚を見る ≫' }
      ],
      tripodPartsList: [
        { maintxt: '風景の作品作りにはこれ。水平をしっかり確保し構図を決め、チャンスを逃さないようにしましょう', btntxt: '3ウェイ三脚を見る ≫' },
        { maintxt: '雲台が自由に動くので、スポーツやF1など動きのある被写体の撮影におすすめ。軽量なのもポイント！', btntxt: '自由雲台を見る ≫' },
        {
          maintxt: 'クイックシューで三脚へのセットが楽々♪とっさの手持ち撮影にも便利。またカメラのネジ山を傷めないためにもおすすめ！',
          btntxt: 'クイックシューを見る ≫'
        }
      ],
      shootingSceneNaviList: [
        { naviItem: '家族旅行', href: '#si01' },
        { naviItem: '花や昆虫', href: '#si02' },
        { naviItem: '夜景花火', href: '#si03' },
        { naviItem: '自然風景', href: '#si04' },
        { naviItem: '鉄道電車', href: '#si05' },
        { naviItem: '飛行機', href: '#si06' },
        { naviItem: '野鳥動物', href: '#si07' }
      ],
      visible: false,
      index: 0, // default: 0
      imgs: [
        '/ec/images2/special/camera/tripod/hikouki01.jpg',
        '/ec/images2/special/camera/tripod/hikouki02.jpg',
        '/ec/images2/special/camera/tripod/hikouki03.jpg'
      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/okamoto-yutaka/',
          img: 'https://shopimg.kitamura.jp/images/banner/7678.jpg',
          alt: '空写真家 岡本豊先生のレオフォト三脚講座'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/bag/trial/',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/special/sale-fair/camera/lensfilter/',
          img: 'https://shopimg.kitamura.jp/images/banner/1342.jpg',
          alt: 'カメラレンズフィルター'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/general/how-to/hanabi/',
          img: 'https://shopimg.kitamura.jp/images/banner/3043.jpg',
          alt: '花火特集'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        }
      ]
    };
  },
  methods: {
    onCopy() {
      alert('URLをコピーしました♪お気に入り・ブックマーク登録やメール・ブログでお友達と共有してください♪');
    },
    showImg(index: number) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  },
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'おすすめ三脚の選び方',
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
@media screen and (min-width: 952px) {
  .ba-gr {
    border: #626262 dashed 1px;
  }
}

@media screen and (min-width: 952px) {
  div.s-credit table {
    width: 100%;
    border-collapse: collapse;
  }
}

@media screen and (min-width: 952px) {
  div.s-credit table th {
    background: #1abc9c none repeat scroll 0 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
