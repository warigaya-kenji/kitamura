<template>
  <div class="compact">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="title-box pc">
          <h1 class="tx-20 tx-bo txkg-whi01 tx-tya">おすすめデジカメ<span class="tx-12">(コンデジ)</span>/デジタルカメラ</h1>
        </h1>
        <h1 class="sp subtitle-2">
          <img class="mb-1 banner-img" src="/ec/images2/special/camera/compact/sp_top.jpg" alt="おすすめデジカメ（コンデジ）/デジタルカメラ特集" />
          <span class="text-body-2 tx-tya">おすすめデジカメ<span class="tx-12">(コンデジ)</span>/デジタルカメラ</span>
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <p class="pc">一眼レフ・ミラーレス一眼購入が初めてのカメラ初心者の方にもおすすめ！<br />キタムラで人気のデジタル一眼レフ・ミラーレス一眼をご紹介</p>
        <v-col>
          <v-layout justify-center wrap
            ><v-flex>
              <a href="https://shop.kitamura.jp/special/sale-fair/general/wireless_image-share/"
                ><v-img
                  contain
                  max-height="80"
                  width="auto"
                  src="/ec/images2/special/camera/compact/bnr_wireless.jpg"
                  alt="今買うならWi-Fi機能付きが便利 デジカメとスマホを無線でかんたんにつなげます 詳しく見る"
                  class="mb-2"
                >
                </v-img></a></v-flex
          ></v-layout>
        </v-col>
        <v-container class="pa-0">
          <v-row class="ma-0">
            <v-col class="mb-2 pa-0" cols="12">
              <v-col class="pa-1 float-left w20pr">
                <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="70px" :href="`#highzoom`"
                  ><p class="text-center ma-0">
                    高倍率デジカメ<br />
                    <img src="/ec/images2/special/camera/compact/ic01.png" /></p
                ></v-btn>
              </v-col>
              <v-col class="pa-1 float-left w20pr">
                <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="70px" :href="`#highspec`"
                  ><p class="text-center ma-0">
                    ハイスペックデジカメ<br />
                    <img src="/ec/images2/special/camera/compact/ic02.png" /></p
                ></v-btn>
              </v-col>
              <v-col class="pa-1 float-left w20pr">
                <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="70px" :href="`#lowprice`"
                  ><p class="text-center ma-0">
                    お手頃価格デジカメ<br />
                    <img src="/ec/images2/special/camera/compact/ic03.png" /></p
                ></v-btn>
              </v-col>
              <v-col class="pa-1 float-left w20pr">
                <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="70px" :href="`#indi`"
                  ><p class="text-center ma-0">
                    個性派デジカメ<br />
                    <img src="/ec/images2/special/camera/compact/ic04.png" /></p></v-btn
              ></v-col>
              <v-col class="pa-1 float-left w20pr">
                <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="70px" :href="`#kanren-t`"
                  ><p class="text-center ma-0">おすすめ<br />関連特集</p></v-btn
                ></v-col
              >
            </v-col>
          </v-row>
        </v-container>

        <!--↓高倍率-->
        <div id="highzoom" class="h-1 mt-5 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col cols="12" class="float-left blk-b line">
                <img src="/ec/images2/special/camera/compact/bg_title.jpg" class="banner-img text-right sp" />
                <h2 class="pick-title txkg-whi01">高倍率ズームのおすすめデジカメ<span class="tx-12">(コンデジ)</span>/デジタルカメラ</h2>
                <h3 class="sbtitle-cp">高倍率デジカメ・コンデジのポイントと選び方</h3>
                <p class="cl">
                  コンデジは小さいからズーム倍率が弱い？ そんなことありません！
                  スマホでは上手に撮影できない望遠撮影が高倍率ズーム対応のデジカメなら、遠くの被写体でもカンタンにできます♪
                  ズーム性能が30倍以上の高倍率なのはもちろん、コンパクトなサイズで持ち運びも便利です。旅行、お子さまやペットのスナップ写真、結婚式などの各種イベントの写真撮影におすすめ★
                </p>
                <h3 class="sbtitle-cp">高倍率デジカメ・コンデジのポイントと選び方</h3>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/list?keyword=SX720&category=コンパクトデジタルカメラ&narrow18=0">
                          <v-img
                            contain
                            alt="キヤノン PowerShot SX720 HS"
                            src="/ec/images2/special/camera/compact/camera_a.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■静止画も動画も撮りたい人に<br />■40倍ズーム<br />■手のひらにおさまるコンパクトボディ</p>
                  <ul class="float-left caption li12">
                    <li>画素数：約2030万画素</li>
                    <li>ズーム倍率：光学 約40倍</li>
                    <li>焦点距離(35mm換算)：24～960mm相当</li>
                  </ul>
                  <v-col class="pa-1 float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated ankr tx-tya text-body-1"
                      height="80px"
                      :href="`/ec/list?keyword=SX720&category=コンパクトデジタルカメラ&narrow18=0`"
                      ><p class="text-center ma-0">おすすめ高倍率デジカメ<br />キヤノン PowerShot<br />SX720 HS</p></v-btn
                    ></v-col
                  >
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/pd/4960759900388">
                          <v-img
                            contain
                            alt="ニコン COOLPIX"
                            src="/ec/images2/special/camera/compact/camera_b.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■広角24mmからの光学35倍ズーム<br />■4K動画も撮影できる<br />■暗いシーンもキレイに撮れる最高感度ISO6400</p>
                  <ul class="float-left caption li12">
                    <li>画素数：約1604万画素</li>
                    <li>ズーム倍率：光学 約35倍</li>
                    <li>焦点距離(35mm換算)：24～840mm</li>
                  </ul>
                  <v-col class="pa-1 float-left">
                    <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="80px" :href="`/ec/pd/4960759900388`"
                      ><p class="text-center ma-0">
                        おすすめ高倍率デジカメ<br />ニコン COOLPIX<br />
                        A1000
                      </p></v-btn
                    ></v-col
                  >
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/list?narrow18=0&keyword=DC-TZ95&category=&index=all&searchbox=1&q=DC-TZ95&path=">
                          <v-img
                            contain
                            alt="パナソニック LUMIX DC-TZ95"
                            src="/ec/images2/special/camera/compact/camera_c.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■「4Kフォト」モードで後からピント位置を変えられる<br />■180度チルト対応タッチパネルモニター搭載</p>
                  <ul class="float-left caption li12">
                    <li>画素数：約2030万画素</li>
                    <li>ズーム倍率：光学 約30倍</li>
                    <li>焦点距離(35mm換算)：24～720mm</li>
                  </ul>
                  <v-col class="pa-1 float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated ankr tx-tya text-body-1"
                      height="80px"
                      :href="`/ec/list?narrow18=0&keyword=DC-TZ95&category=&index=all&searchbox=1&q=DC-TZ95&path=`"
                      ><p class="text-center ma-0">おすすめ高倍率デジカメ<br />パナソニック<br />LUMIX DC-TZ95</p></v-btn
                    ></v-col
                  >
                </v-col>
                <v-col class="pa-1 float-left">
                  <v-btn block class="ankr tx-tya text-body-1 wp" height="70px" :href="`/ec/special/camera/compact/item01`"
                    ><span class="mt-2">おすすめ高倍率ズームデジカメ<br />一覧はこちら</span></v-btn
                  ></v-col
                >
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑高倍率-->

        <!--↓ハイスペック-->
        <div id="highspec" class="h-1 mt-5 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col cols="12" class="float-left blk-c line">
                <img src="/ec/images2/special/camera/compact/bg_titleb.jpg" class="banner-img text-right sp" />
                <h2 class="pick-title txkg-whi01">おすすめハイスペックデジカメ<span class="tx-12">(コンデジ)</span>/デジタルカメラ</h2>
                <h3 class="sbtitle-cp">高性能デジカメ・コンデジのポイントと選び方</h3>
                <p class="cl">
                  ハイスペックなセンサーを搭載したコンパクトデジカメなら、高性能なレンズならではのキレイな背景ボケの写真撮影が楽しめます。マニュアル撮影もカンタン設定だからカメラ初心者の方でも安心♪
                  風景撮影、マクロ撮影、ポートレートなどにおすすめ★
                </p>
                <h3 class="sbtitle-cp">高性能コンパクトデジカメおすすめ機種ランキング</h3>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/list?narrow18=0&keyword=DC-TZ95&category=&index=all&searchbox=1&q=DC-TZ95&path=">
                          <v-img
                            contain
                            alt="ソニー Cyber-shot DSC-RX100M6"
                            src="/ec/images2/special/camera/compact/camera_d.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■0.03秒の高速AF<br />■AF・AE追随 最高約24コマ/秒の高速連写<br />■Wi-Fi、NFCを搭載</p>
                  <ul class="float-left caption li12">
                    <li>画素数：約2010万画素</li>
                    <li>ズーム倍率：光学 約8倍</li>
                    <li>焦点距離(35mm換算)：24～200mm</li>
                    <li>センサーサイズ：1.0型</li>
                  </ul>
                  <v-col class="pa-1 float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated ankr tx-tya text-body-1"
                      height="80px"
                      :href="`/ec/list?narrow18=0&keyword=DSC-RX100M6&category=&index=all&searchbox=1&q=DSC-RX100M6&path=`"
                      ><p class="text-center ma-0">おすすめデジカメ<br />ソニー Cyber-shot<br />DSC-RX100M6</p>
                    </v-btn>
                  </v-col>
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/pd/4549292056389">
                          <v-img
                            contain
                            alt="キヤノン PowerShot G7 X MarkII"
                            src="/ec/images2/special/camera/compact/camera_e.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■■ズーム全域で明るいレンズと1インチの大型センサーを搭載<br />■「写真をキレイに撮る」ことにこだわった1台！</p>
                  <ul class="float-left caption li12">
                    <li>画素数：約2010万画素</li>
                    <li>ズーム倍率：光学 約4.2倍</li>
                    <li>焦点距離(35mm換算)：24～100mm</li>
                    <li>センサーサイズ：1.0型</li>
                  </ul>
                  <v-col class="pa-1 float-left">
                    <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="80px" :href="`/ec/pd/4549292056389`"
                      ><p class="text-center ma-0">おすすめデジカメ<br />キヤノン PowerShot<br />G7 X MarkII</p></v-btn
                    >
                  </v-col>
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/list?keyword=DMC-TX1&category=コンパクトデジタルカメラ&narrow18=0">
                          <v-img
                            contain
                            alt="パナソニック LUMIX DMC-TX1"
                            src="/ec/images2/special/camera/compact/camera_f.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■1.0型大型センサーと10倍ズームで高画質と高倍率を両立<br />■「4Kフォト」で作品づくりもはかどります！</p>
                  <ul class="float-left caption li12">
                    <li>画素数：約2010万画素</li>
                    <li>ズーム倍率：光学 10倍</li>
                    <li>焦点距離(35mm換算)：25～250mm</li>
                    <li>センサーサイズ：1.0型</li>
                  </ul>
                  <v-col class="pa-1 float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated ankr tx-tya text-body-1"
                      height="80px"
                      :href="`/ec/list?keyword=DMC-TX1&category=コンパクトデジタルカメラ&narrow18=0`"
                      ><p class="text-center ma-0">おすすめデジカメ<br />パナソニック<br />LUMIX DMC-TX1</p>
                    </v-btn>
                  </v-col>
                </v-col>
                <v-col class="pa-1 float-left">
                  <v-btn block class="ankr tx-tya text-body-1 wp" height="70px" :href="`/ec/special/camera/compact/item02`"
                    ><span class="mt-2">おすすめのハイスペックデジカメ<br />一覧はこちら</span>
                  </v-btn>
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑ハイスペック-->

        <!--↓番外編-->
        <div id="indi" class="h-1 mt-5 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col cols="12" class="float-left line bk-usg">
                <h2 class="pick-title txkg-whi01">番外編★こんなデジカメ<span class="tx-12">(コンデジ)</span>もおすすめ</h2>
                <p class="cl">
                  一眼レフや他のカメラにはマネできない！
                  個性的な機能を備えたコンパクトデジカメはまだまだあります。アウトドアにも安心の防水機能、VR撮影ができる360度デジカメ、超高倍率ズームを実現したモデルなど、２台目にも必見のデジカメをそろえました。
                </p>
                <h3 class="sbtitle-cp">個性派コンパクトデジカメおすすめ機種ランキング</h3>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/list?keyword=COOLPIX W150&narrow18=0&n20c=完了商品は除く&sort=popularity&limit=40">
                          <v-img
                            contain
                            alt="ニコン COOLPIX W150"
                            src="/ec/images2/special/camera/compact/camera_g.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■お子さまでも楽しく安心して使える機能がたっぷり<br />■防水性能、耐衝撃性能、防じん性能、耐寒性能付き</p>
                  <v-col class="pa-1 float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated ankr tx-tya text-body-1"
                      height="80px"
                      :href="`/ec/list?keyword=COOLPIX W150&narrow18=0&n20c=完了商品は除く&sort=popularity&limit=40`"
                      ><p class="text-center ma-0">おすすめデジカメ<br />ニコン<br />COOLPIX W150</p></v-btn
                    ></v-col
                  >
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/list?keyword=THETA SC2&narrow18=0">
                          <v-img
                            contain
                            alt="リコー RICOH THETA SC2"
                            src="/ec/images2/special/camera/compact/camera_h.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">■見た目のかわいい色とは裏腹に驚きの高性能！<br />■360度撮影が簡単にできる<br />■薄型・軽量のボディ</p>
                  <v-col class="pa-1 float-left">
                    <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="80px" :href="`/ec/list?keyword=THETA SC2&narrow18=0`"
                      ><p class="text-center ma-0">おすすめデジカメ<br />リコー RICOH<br />THETA SC2</p></v-btn
                    ></v-col
                  >
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="4">
                  <v-col>
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="/ec/pd/4960759148803">
                          <v-img
                            contain
                            alt="ニコン COOLPIX P1000"
                            src="/ec/images2/special/camera/compact/camera_i.jpg"
                            max-height="125"
                            width="auto"
                          ></v-img></a></v-flex
                    ></v-layout>
                  </v-col>
                  <p class="float-left">
                    ■光学125倍、超望遠3000mmまでズームできる<br />■「月モード」設定で気軽に月を撮影<br />■RAW撮影で本格的な画づくりも可能
                  </p>
                  <v-col class="pa-1 float-left">
                    <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="80px" :href="`/ec/pd/4960759148803`"
                      ><p class="text-center ma-0">おすすめデジカメ<br />ニコン<br />COOLPIX P1000</p></v-btn
                    ></v-col
                  >
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑番外編-->
        <!-- ↓ サンプル：価格・人気アクセサリー -->
        <div id="highzoom" class="h-1 mt-5 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left line" cols="12">
              <v-col cols="12" class="float-left bk-usg">
                <h2 class="pick-title txkg-whi01">おすすめのお手頃価格なコンパクトデジカメ<span class="tx-12">(コンデジ）</span></h2>
                <p class="cl">
                  コンパクトデジタルカメラが欲しいけど予算がきびしい…そんな方に！ 気兼ねなく使える1万円前後のリーズナブルなコンデジを集めました。
                </p>
                <h3 class="sbtitle-cp">おすすめのお手頃価格なコンパクトデジカメ</h3>
              </v-col>
              <v-col cols="12" class="float-left">
                <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
                  <div class="product-list-wrap">
                    <div class="product-list-item" v-for="product in productDetailList" :key="product.janCode">
                      <div class="product-list-item-img mb-4 text-center">
                        <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                          ><img :src="product.images[0].imagePath" @error="noimage" :alt="product.itemName" width="120" height="120"
                        /></router-link>
                      </div>
                      <div class="product-list-item-name-wrap mb-2">
                        <router-link class="product-list-item-link" :to="`/ec/pd/${product.janCode}`"
                          ><div class="product-list-item-name name2">
                            {{ product.itemName }}
                          </div></router-link
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
              <v-col class="pa-1 float-left">
                <v-btn
                  block
                  class="ankr tx-tya text-body-1 wp"
                  height="70px"
                  :href="`/ec/list?category=コンパクトデジタルカメラ&n20c=完了商品は除く&searchbox=1&range_member_price=8000_16000`"
                  ><span class="mt-2">1万円前後♪お手頃価格な<br />コンパクトデジカメ一覧</span></v-btn
                ></v-col
              >
            </v-col>
          </v-row>
        </v-container>
        <!-- ↑ サンプル：価格・人気アクセサリー -->
        <!--↓関連特集-->
        <div id="kanren-t" class="h-1 mt-5 mb-5"></div>
        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col cols="12" class="float-left bk-usg line">
                <h2 class="pick-title txkg-whi01">コンデジ・デジカメ関連特集・プリントサービス</h2>
                <v-col class="pa-2 float-left white" cols="12" sm="6">
                  <p class="float-left">
                    デジタルカメラを持ったら必須のアイテム「カメラストラップ」をご紹介。革(レザー)やレース柄などおしゃれなカメラストラップがたくさんあります！
                    豊富なデザインからお気に入りを見つけてください♪
                  </p>
                  <v-col cols="12" class="float-left">
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="https://shop.kitamura.jp/special/sale-fair/camera/strap/">
                          <v-img
                            contain
                            alt="デザインで選べる 900点以上 カメラストラップ特集"
                            src="https://shopimg.kitamura.jp/images/banner/1392.gif"
                            max-height="130"
                            width="auto"
                          ></v-img
                        ></a>
                      </v-flex>
                    </v-layout>
                  </v-col>
                  <v-col class="pa-1 float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated ankr tx-tya text-body-1"
                      height="80px"
                      :href="`https://shop.kitamura.jp/special/sale-fair/camera/strap/`"
                      ><p class="text-center ma-0">おしゃれなカメラストラップ特集</p>
                    </v-btn>
                  </v-col>
                </v-col>
                <v-col class="pa-2 float-left white" cols="12" sm="6">
                  <p class="float-left">
                    デジカメで撮影したら写真プリントもカメラのキタムラにおまかせください！専門店ならではの早くて高品質な写真・デジカメプリントが、ネットでご注文いただけます。お気に入り画像を超高画質プリントで形に残しましょう！
                  </p>
                  <v-col cols="12" class="float-left">
                    <v-layout justify-center wrap
                      ><v-flex>
                        <a href="https://www.kitamura-print.com/" target="_blank">
                          <v-img
                            contain
                            alt="ネットでカンタン！超高画質プリント注文 フジカラー仕上げ お受け取りは、お店と宅配が選べます"
                            src="https://shopimg.kitamura.jp/images/banner/341.jpg"
                            max-height="130"
                            width="auto"
                          ></v-img>
                        </a>
                      </v-flex>
                    </v-layout>
                  </v-col>
                  <v-col class="pa-1 float-left">
                    <v-btn block class="v-btn--is-elevated ankr tx-tya text-body-1" height="80px" :href="`https://www.kitamura-print.com/`" target="_blank"
                      ><p class="text-center ma-0">ネットでカンタン！高品質デジカメプリン</p>
                    </v-btn>
                  </v-col>
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑関連特集-->
        <!--↓-->
        <div class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">人気のデジカメ特集など</h2>
        <v-container>
          <v-row>
            <v-col class="mb-2 float-left" cols="12">
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shop.kitamura.jp/special/sale-fair/camera/travel/">
                      <v-img
                        contain
                        src="https://shop.kitamura.jp/images/banner/7722.png"
                        alt="旅のお供に！バイヤー厳選おすすめ旅カメラ"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shop.kitamura.jp/special/sale-fair/camera/dslr/">
                      <v-img
                        contain
                        src="https://shop.kitamura.jp/images/banner/1350.gif"
                        alt="デジタル一眼レフ/ミラーレスカメラ特集"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shop.kitamura.jp/special/sale-fair/camera/waterproof/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/1220.jpg"
                        alt="防水カメラ・ウェアラブルカメラ特集"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shop.kitamura.jp/special/sale-fair/camera/bag/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/1155.gif"
                        alt="カメラバッグ・カメラケース特集"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shop.kitamura.jp/special/sale-fair/camera/photomount/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/2456.gif"
                        alt="写真アルバム おすすめシリーズ紹介"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shop.kitamura.jp/special/sale-fair/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/3808.gif"
                        alt="セール・特集一覧"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑-->
      </v-app>
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
  name: 'compact',
  components: {
    breadcrumbs: Breadcrumbs
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'おすすめデジカメ（コンデジ）/デジタルカメラ特集 | カメラのキタムラネットショップ';
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
          path: 'おすすめデジカメ（コンデジ）/デジタルカメラ特集',
          linkUrl: '/ec/special/camera/compact',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4549292083064', '4549292083071', '4905524972535', '4549292167382'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
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
  }
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  .wp {
    display: block;
    text-align: center;
    white-space: pre-wrap !important;
  }
  .banner-img {
    max-width: 100%;
    height: auto;
  }

  .cl {
    clear: both;
  }
  /*背景*/
  h1.title-box {
    width: 100%;
    height: 85px;
    margin: 0;
    padding: 30px 0px 0px 100px;
    background-image: url(/ec/images2/special/camera/compact/bg_titletop.png);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
    box-sizing: border-box;
  }
  .ankr {
    border: 2px #ffffff solid;
    box-sizing: border-box;
    background: linear-gradient(#b7e9e9, #a2d4d4);
  }
  .pick-title {
    width: 100%;
    height: auto;
    margin: 0 0 10px 0;
    padding: 5px 0px 0px 40px;
    font-size: 18px;
    font-weight: 800;
    background-image: url(/ec/images2/special/camera/compact/camera_logo.jpg);
    background-repeat: no-repeat;
    float: left;
    color: #603813;
    box-sizing: border-box;
    line-height: 1.2em;
  }

  .blk-c {
    width: 100%;
    height: auto;
    margin: 0px 0px 20px 0px;
    padding: 20px 8px 20px 10px;
    background-image: url(/ec/images2/special/camera/compact/bg_titleb.jpg);
    background-repeat: no-repeat;
    clear: both;
    background-position: top right;
    box-sizing: border-box;
    background-color: #f8f7f3;
  }
  .sbtitle-cp {
    width: 100%;
    height: auto;
    margin: 30px 0 15px 0;
    padding: 5px 0px 8px 40px;
    font-size: 18px;
    font-weight: 800;
    color: #603813;
    clear: both;
    background-image: url(/ec/images2/special/camera/compact/denkyu_logo.jpg);
    background-repeat: no-repeat;
    box-sizing: border-box;
    line-height: 1.2em;
    float: left;
  }

  .compact ul {
    list-style: none;
  }
  ul.ssz {
    padding: 0 !important;
  }
  ul.ssz li {
    width: 50%;
    list-style: none;
    float: left;
    line-height: 1.3em;
    padding: 3px;
    box-sizing: border-box;
    border-bottom: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
  ul.ssz ol {
    padding: 0px;
  }
  .compact p {
    line-height: 1.8em;
  }
  .tx-tya {
    color: #603813 !important;
  }
  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
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
  .tx-20 {
    font-size: 20px;
  }
  .tx-18 {
    font-size: 18px;
  }
  .tx-16 {
    font-size: 16px;
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
  .name2 {
    //行数制限
    display: -webkit-box;
    -webkit-line-clamp: 2 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    height: 3em !important;
  }
  .ba-gr {
    border: #626262 dashed 1px;
  }
  .line {
    border-bottom: dotted #9aced1 1px;
    box-sizing: border-box;
  }
  .bk-usg {
    background-color: #f8f7f3;
  }
  /*●品*/
  .maru {
    border-radius: 150px;
    border: 1px solid #999999;
  }
  /*ショックレ*/
  .w50pr-re {
    width: 50%;
    padding: 12px;
    box-sizing: border-box;
  }
  div.s-credit {
    display: block;
    width: 100%;
  }
  div.s-credit table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
  }
  div.s-credit table th,
  div.s-credit table td {
    padding: 2px 0;
    vertical-align: middle;
    border: solid 1px #ffffff;
    box-sizing: border-box;
  }
  div.s-credit table th {
    background: #389c88 none repeat scroll 0 0;
    color: #ffffff;
    font-size: 13px;
    font-weight: normal;
    box-sizing: border-box;
  }
  div.s-credit table td {
    background: #eee none repeat scroll 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0em;
    box-sizing: border-box;
  }
  div.s-credit table td span {
    font-size: 13px;
    margin-left: 3px;
  }
  .mx100pr {
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: 668px) {
    .pc {
      display: block;
    }
    .sp {
      display: none;
    }
    .w20pr {
      width: 20%;
    }
    .blk-b {
      width: 100%;
      height: auto;
      padding: 20px 8px 20px 10px;
      background-image: url(/ec/images2/special/camera/compact/bg_title.jpg);
      background-repeat: no-repeat;
      clear: both;
      box-sizing: border-box;
      float: left;
      background-position: top right;
      background-color: #f8f7f3;
    }
  }
  @media only screen and (max-width: 667px) {
    .pc {
      display: none;
    }
    .sp {
      display: block;
    }
    .w20pr {
      width: 50%;
    }
    .blk-b {
      width: 100%;
      height: auto;
      padding: 20px 8px 20px 10px;
      background-repeat: no-repeat;
      clear: both;
      box-sizing: border-box;
      float: left;
      background-position: top right;
      background-color: #f8f7f3;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.compact {
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
