<template>
  <div class="wireless-image-share">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <!-- ↓ 看板：画像の読み込み -->
      <p class="font-small">無線LAN機能付きデジカメでスマホ転送・プリント注文がラクラク♪</p>
      <h1>
        <img class="mb-1 banner-img pc" src="/ec/images2/special/general/wireless_image-share/b01.gif" alt="デジカメとスマホを無線でつないで写真を楽しもう" />
        <img class="mb-1 banner-img sp" src="/ec/images2/special/general/wireless_image-share/b-s01.gif" alt="デジカメとスマホを無線でつないで写真を楽しもう" />
      </h1>
      <!-- ↑ 看板：画像の読み込み -->
      <!--↓1会話-->
      <v-container>
        <v-row>
          <v-col class="bc-h2 pa-2 float-left" cols="12">
            <h2 class="tx-kage text-h6 font-weight-bold">その1.デジカメで撮影→スマホに転送</h2>
            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img src="/ec/images2/special/general/wireless_image-share/a01.png" contain max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    子供と公園に行ったときに、ブランコ乗って遊んでる子供をスマホで撮ったんだけど、動きが速いからブレてキレイに撮れなくて。<br />カメラ持ってきてればよかったなぁー…ってちょっと残念だった。
                  </p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-right" sm="2" xs="12">
                <v-img src="/ec/images2/special/general/wireless_image-share/b01.png" contain max-width="96" height="auto" class="float-right"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="lime lighten-4 rounded-xl">
                  <p class="ma-0 pa-4">そうか… それは残念…。<br />スマホは便利だけど、やっぱりカメラのほうが、画質はいいし、キレイに撮れるよね。</p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/a02.png" max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    うん。家族旅行とか、子供の運動会は、特にキレイに残したいからスマホよりカメラなんだけど、撮った画像をパソコンに保存するのが面倒で…。<br />疲れて帰ると「後でいいか…」って、しばらくそのままにしちゃうのよ。
                  </p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-right" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/b02.png" max-width="96" height="auto" class="float-right"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="lime lighten-4 rounded-xl">
                  <p class="ma-0 pa-4">
                    それなら、カメラに<span class="orange--text text--darken-4 font-weight-bold">Wi-FiやBluetoothの、『無線で転送できる機能』</span
                    >がついているものがいいと思うよ。<br />すぐにスマホに転送できるから、便利だし、手間いらずだよ。
                  </p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/a03.png" max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    すぐできるって、それ便利。<br />無線接続だと、一緒にいる家族や友達のスマホにも、その場でカメラから画像を転送できるんだよね？
                  </p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-right" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/b03.png" max-width="96" height="auto" class="float-right"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="lime lighten-4 rounded-xl">
                  <p class="ma-0 pa-4">
                    うん。それに、<span class="orange--text text--darken-4 font-weight-bold">スマホならSNSに画像をアップロード</span
                    >できるから、ネット上でも共有できるよ。
                  </p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/a04.png" max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    いいね！<br />
                    カメラとスマホの連動って、本当便利だね。
                  </p>
                </v-card>
              </v-col>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑1会話-->
      <!--↓1カメラ-->
      <v-container>
        <v-row>
          <v-col class="lime pa-4 float-left" cols="12">
            <p class="subtitle-1 mb-0">撮ったその場でスマホに転送♪</p>
            <h3 class="tx-kage text-h6 font-weight-bold mt-0">無線LAN<span class="subtitle-1">（Wi-Fi、Bluetoothなど）</span>機能付き おすすめカメラ</h3>
            <v-card class="float-left white rounded-xl" cols="12">
              <v-col class="float-left pa-4" sm="6" xs="12">
                <h4>
                  <a href="/ec/list?keyword=SX720&category=コンパクトデジタルカメラ&narrow18=0" class="light-blue--text text--darken-4">
                    キヤノン<br />PowerShot SX720 HS
                  </a>
                </h4>
                <p class="ma-0">光学40倍ズームなのに小さくて薄い！動画もキレイに撮影でき、ブレにくい</p>
                <v-col cols="12" class="pa-0">
                  <v-layout justify-center wrap>
                    <v-flex>
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/pd/8b5/75a/48e/1c4/6f4/ada/cf0/456/a3f/c9c/3dt/fbc/t5f/n/M.jpg"
                        max-height="250"
                        alt="PowerShot SX720 HS"
                      ></v-img>
                    </v-flex>
                  </v-layout>
                </v-col>
                <p class="ma-0 cl">
                  手のひらサイズなのに、光学40倍。さらに80倍までキレイな画質で撮影できるので、遠くの被写体も、すぐそこにいるように撮れます。
                </p>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`/ec/pd/4549292056617`"
                    ><span class="v-btn__content">商品詳細を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-col>
              <v-col class="float-left pa-4" sm="6" xs="12">
                <h4>
                  <a href="/ec/pd/4960759900388" class="light-blue--text text--darken-4">ニコン<br />COOLPIX A1000</a>
                </h4>
                <p class="ma-0">EVF搭載、高性能 光学35倍<br />コンパクトな本格ボディー</p>
                <v-col cols="12" class="pa-0">
                  <v-layout justify-center wrap>
                    <v-flex>
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/pd/1da/5e1/045/dca/670/3f3/7e2/53c/1dc/73d/e5v/v58/kr0/k/M.jpg"
                        max-height="250"
                        alt="COOLPIX A1000"
                      ></v-img>
                    </v-flex>
                  </v-layout>
                </v-col>
                <p class="ma-0 cl">スマホ・タブレット端末に撮影画像を自動転送できるBluetooth対応。<br />アプリ「SnapBridge」対応です。</p>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`/ec/pd/4960759900388`"
                    ><span class="v-btn__content">商品詳細を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-col>
              <v-col class="float-left pa-4" cols="12">
                <h3><v-icon>fas fa-wifi fa-fw</v-icon>スマホに転送できる 無線LAN/Wi-Fi搭載デジカメ<v-icon>fas fa-camera fa-fw</v-icon></h3>
                <v-col class="float-left pa-4" sm="4" xs="12">
                  <v-col class="pa-2 float-left" cols="12">
                    <v-col cols="12" class="pa-0">
                      <v-layout justify-center wrap>
                        <v-flex>
                          <v-img
                            contain
                            src="https://shopimg.kitamura.jp/images/pd/802/7c5/4b3/a69/1f1/93c/e0a/605/af4/a10/73t/0jr/hya/0/M.jpg"
                            max-height="250"
                            alt="コンパクトデジカメ"
                          ></v-img>
                        </v-flex>
                      </v-layout>
                    </v-col>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text body-1"
                      height="60px"
                      :href="`/ec/list?category=コンパクトデジタルカメラ&narrow18=1&n20c=完了商品は除く&s5=搭載&sort=popularity&limit=40`"
                      ><span class="v-btn__content">コンパクトデジカメ</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-col>
                <v-col class="float-left pa-4" sm="4" xs="12">
                  <v-col cols="12" class="pa-0">
                    <v-layout justify-center wrap>
                      <v-flex>
                        <v-img
                          contain
                          src="https://shopimg.kitamura.jp/images/pd/8f9/d2c/f7d/37a/4f7/9ff/21c/948/736/ade/bcv/9zd/7js/b/M.jpg"
                          max-height="250"
                          alt="ミラーレス一眼"
                        ></v-img>
                      </v-flex>
                    </v-layout>
                  </v-col>
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text body-1"
                    height="60px"
                    :href="`/ec/list?category=ミラーレス一眼&narrow18=1&n20c=完了商品は除く&s5=搭載&sort=popularity&limit=40C`"
                    ><span class="v-btn__content">ミラーレス一眼</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
                <v-col class="float-left pa-4" sm="4" xs="12">
                  <v-col class="pa-2 float-left" cols="12">
                    <v-col cols="12" class="pa-0">
                      <v-layout justify-center wrap>
                        <v-flex>
                          <v-img
                            contain
                            src="https://shopimg.kitamura.jp/images/pd/c17/4d2/669/5e0/4c8/989/33b/6f5/69a/37c/18x/u7x/pql/8/M.jpg"
                            max-height="250"
                            alt="デジタル一眼レフ"
                          ></v-img>
                        </v-flex>
                      </v-layout>
                    </v-col>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text body-1"
                      height="60px"
                      :href="`/ec/list?category=デジタル一眼レフ&narrow18=1&n20c=完了商品は除く&s5=搭載&sort=popularity&limit=40`"
                      ><span class="v-btn__content">デジタル一眼レフ</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-col>
                <h3><v-icon>fas fa-portrait fa-fw</v-icon>スマートフォン用プリンターはこちら<v-icon>fas fa-mobile-alt fa-fw</v-icon></h3>
                <v-col cols="12" class="pa-0">
                  <v-layout justify-center wrap>
                    <v-flex>
                      <v-img contain src="/ec/images2/special/general/wireless_image-share/puri.png" max-width="100%" alt="スマートフォン用プリンター"></v-img>
                    </v-flex>
                  </v-layout>
                </v-col>
                <v-row align="center" justify="space-around">
                  <v-col cols="12" sm="8">
                    <v-btn
                      class="main-product-btn text-subtitle-1 mb-2 text-center"
                      dark
                      block
                      color="rgba(255, 132, 0, 1)"
                      height="60px"
                      :href="`/ec/list?narrow18=0&keyword=&category=プリンター・スキャナー%3Aコンパクトフォト%2F昇華式プリンター&path=プリンター・スキャナー%3Aコンパクトフォト%2F昇華式プリンター&n20c=完了商品は除く`"
                    >
                      スマートフォン用プリンター<v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!--↑1カメラ-->

      <!--↓2会話-->
      <v-container>
        <v-row>
          <v-col class="bc-h2 pa-2 float-left" cols="12">
            <h2 class="tx-kage text-h6 font-weight-bold">その2.スマホアプリ→プリント注文</h2>
            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img src="/ec/images2/special/general/wireless_image-share/a02.png" contain max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    スマホに転送した画像の写真プリントも簡単にできたらいいなぁ…<br />
                    写真プリントって、面倒でついつい後回しになってしまうのよね。
                  </p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-right" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/b04.png" max-width="96" height="auto" class="float-right"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="lime lighten-4 rounded-xl float-left">
                  <p class="ma-0 pa-4">
                    じゃあ、写真プリントの注文も、スマホでやると簡単で、おすすめだよ。<br />
                    <span class="orange--text text--darken-4 font-weight-bold">キタムラの無料アプリをダウンロード</span
                    >すれば、写真プリントの注文が、スマホから簡単にできるのよ。
                  </p>
                  <v-col class="float-left pa-4 text-center" sm="6" xs="12">
                    <p class="ma-0">↓スマホで写真プリント</p>
                    <a href="https://www.kitamura-print.com/campaign/smartphoneApp/" target="_blank" rel="noopener">
                      <v-img src="/ec/images2/special/general/wireless_image-share/topimage.jpg" class="kg-usu"></v-img
                    ></a>
                  </v-col>
                  <v-col class="float-left pa-4" sm="6" xs="12">
                    <p class="ma-0">↓プリントアプリの使い方を動画で見る</p>
                    <iframe height="auto" frameborder="0" width="100%" allowfullscreen="" src="https://www.youtube.com/embed/M1gEnAgXMHY?rel=0"></iframe>
                  </v-col>
                  <v-col class="float-left pa-4 text-center" sm="6" xs="12">
                    <p class="ma-0">Androidアプリ</p>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a target="_blank" href="https://market.android.com/details?id=com.photo" rel="noopener"
                          ><v-img
                            contain
                            alt="プリント注文アプリをダウンロードする"
                            src="/ec/images2/special/general/wireless_image-share/btn_googleplay.gif"
                            max-height="68"
                            width="auto"
                          ></v-img>
                          ダウンロードはこちら
                        </a></v-flex
                      ></v-layout
                    >
                  </v-col>
                  <v-col class="float-left pa-4 text-center" sm="6" xs="12">
                    <p class="ma-0">iPhoneアプリ</p>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a target="_blank" href="https://apps.apple.com/jp/app/purinto-zhi-xing-bian-for/id451410131" rel="noopener"
                          ><v-img
                            contain
                            max-height="68"
                            width="auto"
                            alt="iPhoneアプリプリント注文アプリをダウンロードする"
                            src="/ec/images2/special/general/wireless_image-share/btn_appstore.gif"
                            class="banner-img"
                          ></v-img>
                          ダウンロードはこちら
                        </a></v-flex
                      ></v-layout
                    >
                  </v-col>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/a03.png" max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">これなら空いた時間にスマホからプリント注文すれば、ラクラクね。</p>
                </v-card>
              </v-col>
            </v-col>
            <v-col cols="12" class="float-left">
              <v-col class="float-right" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/b02.png" max-width="96" height="auto" class="float-right"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="lime lighten-4 rounded-xl">
                  <p class="ma-0 pa-4">
                    外出先でも<span class="orange--text text--darken-4 font-weight-bold">最寄のキタムラを選んで受取りができる</span
                    >から、帰宅途中に寄るのも、アリだよ。<br />
                    帰宅後、家族みんなで写真を見ながら、ワイワイ楽しめるのよ。<br />
                    <a href="https://sss.kitamura.jp/" target="_blank" rel="noopener" class="light-blue--text text--darken-4"
                      ><i class="fas fa-search"></i> カメラのキタムラ 店舗検索
                    </a>
                  </p>
                </v-card>
              </v-col>
            </v-col>

            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/a04.png" max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    …アリだね！<br />
                    他の画像もプリントしたくなったら、ついでにキタムラのお店で注文出来るのかな？
                  </p>
                </v-card>
              </v-col>
            </v-col>

            <v-col cols="12" class="float-left">
              <v-col class="float-right" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/b03.png" max-width="96" height="auto" class="float-right"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="float-left lime lighten-4 rounded-xl">
                  <p class="float-left ma-0 pa-4">
                    うん、<span class="orange--text text--darken-4 font-weight-bold">photo＋コーナー</span>って赤いイスがあるところで注文できるよ。
                    <br />
                    カメラ接続でわからないことがあれば、<span class="orange--text text--darken-4 font-weight-bold">スタッフがアドバイス</span
                    >してくれるの。<br />
                    いろいろ聞いてみて。
                  </p>
                  <v-col class="float-left text-center" sm="6" xs="12">
                    <v-layout justify-center wrap
                      ><v-flex
                        ><v-img contain src="/ec/images2/special/general/wireless_image-share/store_image01.jpg" max-height="210" width="auto"></v-img>
                        <p class="ma-0 pa-4 cl">▲photo＋コーナー</p></v-flex
                      ></v-layout
                    ></v-col
                  >
                  <v-col class="float-left text-center" sm="6" xs="12">
                    <v-layout justify-center wrap
                      ><v-flex
                        ><v-img
                          contain
                          src="/ec/images2/special/general/wireless_image-share/image02.jpg"
                          max-height="283"
                          width="auto"
                        ></v-img></v-flex></v-layout
                  ></v-col>
                </v-card>
              </v-col>
            </v-col>

            <v-col cols="12" class="float-left">
              <v-col class="float-left" sm="2" xs="12">
                <v-img contain src="/ec/images2/special/general/wireless_image-share/a05.png" max-width="96" height="auto"></v-img>
              </v-col>
              <v-col class="float-left" sm="10" xs="12">
                <v-card class="white rounded-xl">
                  <p class="ma-0 pa-4">
                    わかった。<br />
                    これならお店に行っても安心ね。
                  </p>
                </v-card>
              </v-col>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑2会話-->

      <!--↓soukyaku-->
      <div class="h-1 mt-5 mb-5"></div>
      <h2 class="title mb-2 font-weight-bold">おすすめ特集・プリントサービス</h2>
      <v-container>
        <v-row>
          <v-col class="mb-2 float-left" cols="12">
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/kaden/smart_phone/sim_free/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shopimg.kitamura.jp/images/banner/3108.gif"
                      alt="おすすめSIMフリースマホ特集"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/filmcamera/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/3771.gif"
                      alt="チェキ・チェキフィルム・チェキアルバムおすすめ"
                      max-height="130"
                      width="auto"
                    ></v-img>
                  </v-flex>
                </v-layout> </a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/girlscamera/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/1390.jpg"
                      alt="女子がきゅんとくる ミラーレス一眼カメラ"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/camera/frame/shacolla/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/3099.gif"
                      alt="フジフイルム シャコラ"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shopimg.kitamura.jp/images/banner/3808.gif"
                      alt="セール・特集一覧"
                      max-height="130"
                      width="auto"
                    ></v-img> </v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://www.kitamura-print.com/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/341.jpg"
                      alt="超高画質プリント"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!-- ↓ サンプル：メイン商品
      <div class="main-product mb-5" v-if="Object.keys(mainProduct).length">
        <div class="main-product-area py-3 px-10">
          <div class="main-product-area-left text-center p-2 col-sm-6 float-left">
            <router-link class="main-product-link" :to="`/ec/pd/${mainProduct.janCode}`">
              <img class="main-product-img" :src="mainProduct.images[0].imagePath" @error="noimage" />
              <h3 class="main-product-name fs-6 mt-3">{{ mainProduct.itemName }}</h3>
            </router-link>
          </div>
          <div class="main-product-area-right col-sm-6 float-left">
            <p class="main-product-price text-center">
              <span class="d-inline-block">価格</span><span class="text-h4 primary--text">¥{{ formatPrice(parseInt(mainProduct.price)) }}&nbsp;</span
              ><span class="d-inline-block">(税込)</span>
            </p>
            <v-btn
              class="main-product-btn text-h5 font-weight-bold"
              dark
              block
              color="rgba(255, 132, 0, 1)"
              height="60px"
              :href="`/ec/pd/${mainProduct.janCode}`"
            >
              <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
              商品ページを見る
            </v-btn>
          </div>
        </div>
      </div>-->
      <!-- ↑ サンプル：メイン商品 -->

      <!-- ↓ サンプル：価格・人気アクセサリー 
      <div class="h-1 mt-5 mb-5" id="item"></div>
      <v-container>
        <v-row>
          <v-col class="pa-2 float-left" cols="12">
            <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
              <h2 class="title mb-2 font-weight-bold">商品一覧</h2>
              <div class="product-list-wrap">
                <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
                  <div class="product-list-item-img mb-4 text-center">
                    <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                      ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
                    /></router-link>
                  </div>
                  <div class="product-list-item-name-wrap mb-2">
                    <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                      ><div class="product-list-item-name">{{ product.itemName }}</div></router-link
                    >
                  </div>
                  <div class="product-list-item-price-wrap">
                    特別価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span
                    >（税込）
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>-->
      <!-- ↑ サンプル：価格・人気アクセサリー -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
//import Product from '@/components/product-list/product.vue';
import { noimage, formatPrice } from '@/logic/utils';
//import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
//import { ConditionItem } from '@/types/conditions';
//import { ProductItem } from '@/types/product-list';
//import { NEWER_SORT_LIST } from '@/constants/sort-list';
//import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
//import { SEARCH_STATE } from '@/constants/search-state';
export default Vue.extend({
  name: 'wireless_image-share',
  components: {
    breadcrumbs: Breadcrumbs
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'デジカメとスマホを無線でつないで写真を楽しもう | カメラのキタムラネットショップ';
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'デジカメとスマホを無線でつないで写真を楽しもう',
          linkUrl: '/ec/special/general/wirelessimageshare',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: '4547410369137',
      // 結果格納用
      mainProduct: {} as ProductDetail,
      // ↑ ---- メイン商品 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4547410369137', '4547410379372', '4547410379389'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts([state.mainProductJanCode], true);
        state.mainProduct = mainResult.items[0];
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProduct = {} as ProductDetail;
        // 価格・人気アクセサリー
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };
    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  },

  data: () => ({
    selectedItem: 0,
    items: [
      { text: '写ルンです種類', icon: 'fa-check', link: '#type' },
      { text: '撮影のコツ', icon: 'fa-check', link: '#howto' },
      { text: '写ルンです 現像・データ化', icon: 'fa-check', link: '#fun' },
      { text: '商品一覧', icon: 'fa-check', link: '#item' }
    ]
  })
});
</script>
<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  .v-list-item__title {
    font-size: 16px !important;
  }
  .wireless-image-share p {
    color: #000;
    line-height: 1.8em !important;
    font-size: 16px;
  }
  .txt-org {
    color: #dd6717;
  }
  .tx-aka {
    color: #d80b24;
  }
  .tx-tya {
    color: #46280c !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
  }
  .tx-kage {
    text-shadow: 1px 1px 1px #ffffff;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
    line-height: 1.8em;
  }
  .tx-14 {
    font-size: 14px;
  }
  .tx-12 {
    font-size: 12px;
  }
  .h-1 {
    height: 1px;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  /*背景*/
  .bkline-g {
    background: url(/ec/images2/special/general/wireless_image-share/bk_line.gif) repeat scroll top left;
  }
  .bc-tub {
    background: url(/ec/images2/special/general/wireless_image-share/bk_tu.gif) repeat;
  }
  .bc-h2 {
    background: url(/ec/images2/special/general/wireless_image-share/bk_tu.gif) repeat scroll 0 0px;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
  } /*#0D3900*/
  .bc-h3 {
    background-color: #c3d33f;
  } /*#E80039*/

  .bc-tub {
    background: url(/ec/images2/special/general/images/bk_tu.gif) repeat;
  }

  @media screen and (min-width: 601px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.wireless-image-share {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
</style>

<style lang="scss" scoped>
// サンプル：価格・人気アクセサリー
.product-list {
  &-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: calc((100% - (12px * 3)) / 4);

    &:not(:nth-child(4n)) {
      margin-right: 12px;
    }

    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }

    &-link {
      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }

    &-name {
      height: 5em;
      color: $text-blue;
    }
  }
}

@media only screen and (max-width: 670px) {
  .product-list {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: calc((100% - (0px * 3)) / 1);

      &:not(:nth-child(1n)) {
        margin: 0 0 0px 0;
      }

      &:not(:nth-last-child(-n + 1)) {
        margin: 0 0 0px 0;
      }
    }
  }
  .product-list-item {
    margin: 0 0 20px 0 !important;
  }
}
</style>
