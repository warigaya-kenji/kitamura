<template>
  <div class="dslr">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!-- ↓ 看板：画像の読み込み -->
        <h1>
          <img class="mb-1 banner-img pc" src="/ec/images2/special/camera/dslr/bbn_pc.png" alt="デジタル一眼レフ/ミラーレスカメラ特集" />
          <img class="mb-1 banner-img sp" src="/ec/images2/special/camera/dslr/bbn_sp.png" alt="デジタル一眼レフ/ミラーレスカメラ特集" />
          <span class="text-body-2">デジタル一眼レフ/ミラーレスカメラ特集</span>
        </h1>
        <!-- ↑ 看板：画像の読み込み -->
        <p>一眼レフ・ミラーレス一眼購入が初めてのカメラ初心者の方にもおすすめ！<br />キタムラで人気のデジタル一眼レフ・ミラーレス一眼をご紹介</p>
        <v-container>
          <v-row>
            <v-col class="mb-2" cols="12">
              <v-col class="pa-2 float-left" sm="4" xs="12">
                <v-btn
                  block
                  class="inner-link v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                  height="60px"
                  @click="
                    $vuetify.goTo('#mirrorless', {
                      duration: 100,
                      offset: 170,
                      easing: 'linear'
                    })
                  "
                  ><span class="v-btn__content">ミラーレス一眼</span></v-btn
                >
              </v-col>
              <v-col class="pa-2 float-left" sm="4" xs="12">
                <v-btn
                  block
                  class="inner-link v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                  height="60px"
                  @click="
                    $vuetify.goTo('#dslr', {
                      duration: 100,
                      offset: 170,
                      easing: 'linear'
                    })
                  "
                  ><span class="v-btn__content">デジタル一眼レフ</span></v-btn
                >
              </v-col>
              <v-col class="pa-2 float-left" sm="4" xs="12">
                <v-btn
                  block
                  class="inner-link v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                  height="60px"
                  @click="
                    $vuetify.goTo('#supply', {
                      duration: 100,
                      offset: 170,
                      easing: 'linear'
                    })
                  "
                  ><span class="v-btn__content">カメラ用品</span></v-btn
                >
              </v-col>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ミラーレス-->
        <div id="mirrorless" class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">カメラ初心者の方にもおすすめ 人気のミラーレス一眼カメラ</h2>
        <p>
          コンパクトデジタルカメラ並みにサイズが小さく軽量で、スマホより格段にキレイな写真が撮れるミラーレス一眼。あこがれの背景ぼかしや、レンズの交換で魅力的な写真が撮影でき、表現の幅も広がります♪<br />
          Wi-Fi機能搭載のミラーレス一眼なら、画像をスマホにシェアでき、インスタグラムなどSNSにすぐアップできて便利です。<br />
        </p>
        <p class="text-right"><a href="#tigai">≫ミラーレス一眼と一眼レフカメラの違い</a></p>

        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col sm="6" xs="12" class="float-left">
                <h3 class="cameratitle">
                  <span class="text-caption text-decoration-none li12">カメラ初心者の方にもおすすめ ミラーレス一眼機種：その1</span><br />
                  持ち運びやすいコンパクトでスリムなボディー キヤノン EOS M200
                </h3>
                <v-col cols="12"
                  ><a href="/special/sale-fair/camera/dslr/3228/">
                    <v-img src="/ec/images2/special/camera/dslr/camera_ma.jpg" alt="キヤノン EOS M200商品画像" max-width="100%"></v-img
                  ></a>
                  <v-img src="/ec/images2/special/camera/dslr/m100-sensor.jpg" alt="キヤノン EOS M200機能イメージ" max-width="100%" class="d-none"></v-img>
                  <v-img src="/ec/images2/special/camera/dslr/m100-touch.jpg" alt="キヤノン EOS M200機能イメージ" max-width="100%"></v-img>
                </v-col>
                <p>
                  <span class="text-h6 txt-org">ポイント① 薄型・軽量ボディー</span><br />
                  気軽に持ち歩けて、撮りたい瞬間にさっと取り出せる！
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント② スマホと連携</span><br />
                  BluetoothやWi-Fiでスマホと連携！SNSへの投稿が簡単<br />
                  ※専用アプリ「Camera Connect」のダウンロードが必要
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント③ 自分撮りモード</span><br />
                  背景ぼかし・美肌効果でキレイな自分撮りができる
                </p>
                <p>
                  スナップメインで持ち歩き重視なら<a
                    href="https://shop.kitamura.jp/pd/list_dtl.html?index=&searchbox=1&q=%E3%82%AD%E3%83%A4%E3%83%8E%E3%83%B3+EOS+M200+%E3%83%80%E3%83%96%E3%83%AB%E3%83%AC%E3%83%B3%E3%82%BA%E3%82%AD%E3%83%83%E3%83%88&path="
                    >ダブルレンズキット</a
                  ><br />
                  遠くの被写体が撮りたいなら<a
                    href="https://shop.kitamura.jp/pd/list_dtl.html?index=&searchbox=1&q=%E3%82%AD%E3%83%A4%E3%83%8E%E3%83%B3+EOS+M200+%E3%83%80%E3%83%96%E3%83%AB%E3%82%BA%E3%83%BC%E3%83%A0%E3%82%AD%E3%83%83%E3%83%88&path="
                    >ダブルズームキット</a
                  ><br />
                  がおすすめ☆
                </p>
                <ul class="text-center ssz">
                  <ol>
                    【ショッピングクレジット 月々支払い金額】
                  </ol>
                  <li>ボディ<br />約3,795円 × 15回</li>
                  <li>レンズキット<br />約3,589円 × 20回</li>
                  <li>ダブルレンズキット<br />約3,610円 × 24回</li>
                  <li>ダブルズームキット<br />約3,135円 × 30回</li>
                </ul>
                <p class="text-body-2 text-right">※2020年11/23時点</p>

                <v-col class="pa-2 float-left" cols="12">
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                    height="60px"
                    :href="`https://shop.kitamura.jp/special/sale-fair/camera/dslr/3228/`"
                    ><span class="v-btn__content">キヤノン EOS M200を見る ≫</span></v-btn
                  >
                </v-col>
              </v-col>

              <v-col sm="6" xs="12" class="float-left">
                <h3 class="cameratitle">
                  <span class="text-caption text-decoration-none li12">カメラ初心者の方にもおすすめ ミラーレス一眼機種：その2</span><br />
                  「4Kセルフィー」で決定的瞬間を逃さない！ 自撮りもしやすい パナソニック DC-GF10
                </h3>
                <v-col cols="12">
                  <a href="/special/sale-fair/camera/dslr/3229/">
                    <v-img src="/ec/images2/special/camera/dslr/gf10_img01.jpg" alt="パナソニック DC-GF10" max-width="100%"></v-img
                  ></a>
                  <v-img src="/ec/images2/special/camera/dslr/gf10_img02.jpg" alt="パナソニック DC-GF10機能イメージ" class="d-none"></v-img>
                  <v-img src="/ec/images2/special/camera/dslr/camera_mbe.jpg" alt="パナソニック DC-GF10機能イメージ" max-width="100%"></v-img>
                </v-col>
                <p>
                  <span class="text-h6 txt-org">ポイント① 4Kセルフィー</span><br />
                  1秒間に30枚連写した画像から、最高の1枚を選べる！
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント② 夜景セルフィー</span><br />
                  夜景をバックに美しく撮れる、夜景セルフィーモードを搭載
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント③ スマホに接続&転送</span><br />
                  スマホ・タブレットとカメラを、ワイヤレスで接続可能<br />
                  ※専用アプリ「Panasonic Image App」のダウンロードが必要
                </p>
                <p>
                  シンプルでクラシカルなカメラらしさにこだわりながら、エレガントで上質なデザインのDC-GF10。ファッションの一部のように身に付けて街を歩くのもおすすめ☆
                </p>
                <ul class="text-center ssz">
                  <ol>
                    【ショッピングクレジット 月々支払い金額】
                  </ol>
                  <li>ダブルレンズキット<br />約3,465円 × 20回</li>
                  <li>ダブルズームキット<br />約3,094円 × 24回</li>
                </ul>
                <p class="text-body-2 text-right">※2020年11/23時点</p>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                    height="60px"
                    :href="`https://shop.kitamura.jp/special/sale-fair/camera/dslr/3229/`"
                    ><span class="v-btn__content">パナソニック DC-GF10を見る ≫</span></v-btn
                  >
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="mb-2 float-left" cols="12">
              <h3 class="font-weight-bold text-h6 txt-org mt-4">▼カメラ初心者におすすめのミラーレス一眼カメラ</h3>
              <v-col class="pa-2 float-left" cols="6" sm="3">
                <a
                  href="/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2CNumber17%2CScore&searchbox=1&q=LUMIX+DC-GF10&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
                >
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/9b4/1d5/ae8/922/6a5/5a5/e40/bb2/2ba/cba/b1h/2mn/d0i/b/M.jpg"
                    class="maru"
                    max-width="100%"
                  ></v-img
                  ><br />
                  パナソニック LUMIX DC-GF10
                </a>
              </v-col>
              <v-col class="pa-2 float-left" cols="6" sm="3">
                <a
                  href="/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2CNumber17%2CScore&searchbox=1&q=E-M10+MarkIII&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
                >
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/962/58a/75e/436/585/9b8/f18/348/0ca/b52/3ca/zh7/0l5/d/M.jpg"
                    class="maru"
                    max-width="100%"
                  ></v-img
                  ><br />
                  オリンパス OM-D E-M10 MarkIII
                </a>
              </v-col>
              <v-col class="pa-2 float-left" cols="6" sm="3">
                <a
                  href="/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2Cprice%2CScore&searchbox=1&q=%CE%B16400&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
                >
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/3b1/985/c10/91c/c8b/781/de4/095/b50/b6e/6f4/m50/stp/l/M.jpg"
                    class="maru"
                    max-width="100%"
                  ></v-img
                  ><br />
                  ソニー α6400 [ILCE-6400]
                </a>
              </v-col>
              <v-col class="pa-2 float-left" cols="6" sm="3">
                <a
                  href="/pd/list.html?index=&searchbox=1&sort=number20%2Cprice%2CScore&q=EOS+M200&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F"
                >
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/cbe/aca/35c/700/dd6/9c8/0ef/650/dac/4e1/aa3/6wc/6i9/i/M.jpg"
                    class="maru"
                    max-width="100%"
                  ></v-img
                  ><br />
                  キヤノン EOS M200
                </a>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑ミラーレス-->

        <!--↓一眼-->
        <div id="dslr" class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">カメラ初心者の方にもおすすめ 人気の一眼レフカメラ</h2>
        <p>
          一眼レフで、今よりもっとキレイな写真・かっこいい本格的な写真を撮りたい！
          でも操作や違いなど難しいことはわからないから、キレイな写真を簡単に撮影できたらいいな…。そんな方に、カメラ初心者の方でも安心して簡単に使える、おすすめ一眼レフとポイントをご紹介♪
        </p>
        <p class="text-right"><a href="#tigai">≫ミラーレス一眼と一眼レフカメラの違い</a></p>

        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col sm="6" xs="12" class="float-left">
                <h3 class="cameratitle">
                  <span class="text-caption text-decoration-none li12">カメラ初心者の方にもおすすめ 一眼レフ機種：その1</span><br />
                  小型・軽量なのに、本格的。一眼レフデビューにおすすめのキヤノン EOS Kiss X10
                </h3>
                <v-col cols="12"
                  ><router-link to="/ec/pd/4549292132694">
                    <v-img src="/ec/images2/special/camera/dslr/camera_kissx10.jpg" alt="EOS Kiss X10 商品画像" max-width="100%"></v-img
                  ></router-link>
                </v-col>
                <p>
                  <span class="text-h6 txt-org">ポイント① バリアングル液晶モニター</span><br />
                  角度を自由に変えられるのでアングルの自由度がアップ
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント② スマホと連携</span><br />
                  専用アプリ Camera Connectの「撮影時スマホ自動送信」を使うと、撮影した画像がスマホに自動転送されます♪
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント③ シャッター音を抑えて連写</span><br />
                  連写時の音を控えたい場所では、ソフト連続撮影(約2.5コマ／秒)が役立ちます
                </p>
                <ul class="text-center ssz">
                  <ol>
                    【ショッピングクレジット 月々支払い金額】
                  </ol>
                  <li>ボディ<br />約3,218円 × 20回</li>
                  <li>レンズキット<br />約3,094円 × 24回</li>
                  <li>Wズームキット<br />約3,465円 × 30回</li>
                </ul>
                <p class="text-body-2 text-right">※2020年12/25時点</p>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                    height="60px"
                    :href="`https://shop.kitamura.jp/ec/pd/4549292132694`"
                    ><span class="v-btn__content">キヤノン EOS Kiss X10を見る ≫</span>
                  </v-btn>
                </v-col>
              </v-col>
              <v-col sm="6" xs="12" class="float-left">
                <h3 class="cameratitle">
                  <span class="text-caption text-decoration-none li12">カメラ初心者の方にもおすすめ 一眼レフ機種：その2</span><br />
                  高速＆高精度のオートフォーカスでシャッターチャンスに強い！ キヤノン EOS Kiss X90
                </h3>
                <v-col cols="12">
                  <router-link to="/ec/pd/4549292111828">
                    <v-img src="/ec/images2/special/camera/dslr/nfc2.jpg" alt="キヤノン EOS Kiss X90機能イメージ" max-width="100%"></v-img
                  ></router-link>
                </v-col>
                <p>
                  <span class="text-h6 txt-org">ポイント① 豊富な撮影モード</span><br />
                  カメラまかせで簡単にキレイな写真が楽しめる
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント② Wi-Fi／NFCを搭載</span><br />
                  Wi-Fi／NFCを搭載。撮ったその場でスマホに手軽にシェア<br />
                  ※専用アプリ「Camera Connect」のダウンロードが必要
                </p>
                <p>
                  <span class="text-h6 txt-org">ポイント③ すばやいピント合わせ</span><br />
                  ペットや子ども、電車など、動き回る被写体の撮影でも、すばやくピントを合わせます 最高約3コマ／秒 の連写性能。
                </p>
                <ul class="text-center ssz">
                  <ol>
                    【ショッピングクレジット 月々支払い金額】
                  </ol>
                  <li>ボディ<br />約3,597円 × 15回</li>
                  <li>レンズキット<br />約3,144円 × 20回</li>
                </ul>
                <p class="text-body-2 text-right">※2020年11/23時点</p>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                    height="60px"
                    :href="`https://shop.kitamura.jp/ec/pd/4549292111828`"
                    ><span class="v-btn__content">キヤノン EOS Kiss X90を見る ≫</span>
                  </v-btn>
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col class="mb-2 float-left" cols="12">
              <h3 class="font-weight-bold text-h6 txt-org mt-4">▼カメラ初心者におすすめのデジタル一眼カメラ</h3>
              <v-col class="pa-2 float-left" cols="6" sm="3">
                <router-link to="/ec/pd/4549212297298">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/13a/94e/f93/838/0e3/1fc/4d2/625/ef6/512/78w/lgd/fgp/0/M.jpg"
                    class="maru"
                    max-width="100%"
                  ></v-img
                  ><br />
                  ペンタックス K-70
                </router-link>
              </v-col>
              <v-col class="pa-2 float-left" cols="6" sm="3">
                <router-link to="/ec/pd/4549292151251">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/a9e/a37/8b0/9f7/6bc/00d/0b7/5e9/d1e/c0a/1cw/xxc/1ut/g/M.jpg"
                    class="maru"
                    max-width="100%"
                  ></v-img
                  ><br />
                  キヤノン EOS Kiss X10i
                </router-link>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑一眼-->

        <!--↓必需品-->
        <div id="supply" class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">はじめてのミラーレス・一眼カメラの必需品 おすすめ用品</h2>
        <p>
          せっかく購入したミラーレス一眼や一眼レフカメラは大切に扱いたいもの。ミラーレスカメラや一眼レフカメラデビューするなら、これだけは揃えておきたい必需品をご紹介！<br />
          持ち運び時や撮影時に傷や汚れからカメラの液晶モニターを守る液晶保護フィルムや、屋外で撮影する際の砂埃やゴミ、空気中のホコリからレンズを守るレンズ保護プロテクターがあれば、アウトドアでの撮影も安心です。
        </p>

        <v-container>
          <v-row>
            <v-col class="pa-2" cols="12">
              <v-col sm="6" xs="12" class="float-left">
                <h3 class="cameratitle">
                  <span class="text-caption text-decoration-none li12">ミラーレス・一眼カメラの必需品：その1</span><br />
                  背面液晶モニターをキズから守る液晶保護フィルム
                </h3>
                <v-col cols="12"
                  ><a href="/ec/list?category=カメラアクセサリー・用品:液晶保護フィルム&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100">
                    <v-img src="/ec/images2/special/camera/dslr/youhin_film.jpg" alt="液晶保護フィルム商品画像像" max-width="100%"></v-img
                  ></a>
                </v-col>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                    height="60px"
                    :href="`/ec/list?category=カメラアクセサリー・用品:液晶保護フィルム&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100`"
                    ><span class="v-btn__content">液晶保護フィルムを見る ≫</span></v-btn
                  >
                </v-col>
              </v-col>
              <v-col sm="6" xs="12" class="float-left">
                <h3 class="cameratitle">
                  <span class="text-caption text-decoration-none li12">ミラーレス・一眼カメラの必需品：その2</span><br />
                  ホコリからレンズを守る、レンズ保護プロテクター
                </h3>
                <v-col cols="12">
                  <a
                    href="/ec/list?category=交換レンズアクセサリー:フィルター:プロテクター・保護フィルター&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100"
                  >
                    <v-img src="/ec/images2/special/camera/dslr/youhin_filter.jpg" alt="保護プロテクター" max-width="100%"></v-img
                  ></a>
                </v-col>
                <v-col class="pa-2 float-left" cols="12">
                  <v-btn
                    block
                    class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
                    height="60px"
                    :href="`/ec/list?category=交換レンズアクセサリー:フィルター:プロテクター・保護フィルター&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100`"
                    ><span class="v-btn__content">レンズ保護プロテクター見る ≫</span></v-btn
                  >
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑必需品-->
        <!-- ↓ サンプル：価格・人気アクセサリー -->
        <div class="float-left mt-5 mb-5"></div>
        <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
          <h2 class="spec">おすすめのカメラ用品 一覧</h2>
          <p>
            ミラーレス一眼やデジタル一眼レフを購入したら揃えておきたい、おすすめカメラ用品をピックアップ！<br />
            大切なカメラをしっかり守るストラップや、旅行のお供に使いたいカメラ用バッグ、撮影後のメンテナンス用品など、カメラライフを充実させるアイテムを厳選してご紹介します。
          </p>
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
        <!-- ↑ サンプル：価格・人気アクセサリー -->

        <!--↓-->
        <div id="tigai" class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">ミラーレス一眼と一眼レフカメラの違い</h2>
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left" cols="12">
              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="tx-16">ミラーレス一眼</h4>
                <v-col class="float-left p-3" cols="4"
                  ><v-layout justify-center wrap
                    ><v-flex>
                      <a href="#mirrorless"
                        ><v-img
                          max-height="120"
                          max-width="120"
                          src="https://shopimg.kitamura.jp/images/pd/0b4/8ee/d9d/50c/9fd/4e7/ac8/76e/d19/b1f/ebs/ldg/noq/u/TN.jpg"
                          alt="ミラーレス画像"
                        ></v-img></a></v-flex></v-layout
                ></v-col>
                <v-col class="float-left p-3" cols="8">
                  <ul class="p-2">
                    <li>キレイな写真が撮れる</li>
                    <li>サイズがコンパクト</li>
                    <li>軽量で気軽に持ち運べる</li>
                  </ul>
                </v-col>
              </v-col>
              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="tx-16">一眼レフカメラ</h4>
                <v-col class="float-left p-3" cols="4"
                  ><v-layout justify-center wrap
                    ><v-flex
                      ><a href="#dslr"
                        ><v-img
                          max-height="120"
                          max-width="120"
                          src="https://shopimg.kitamura.jp/images/pd/6ca/164/8c0/408/e4a/6a2/465/8e2/fb5/fbb/14y/mr5/44s/c/TN.jpg"
                          alt="一眼レフカメラ"
                        ></v-img></a></v-flex></v-layout
                ></v-col>
                <v-col class="float-left p-3" cols="8">
                  <ul class="p-2">
                    <li>プロのようなキレイな写真が撮れる</li>
                    <li>動く被写体の撮影に向いている</li>
                    <li>オートフォーカス（AF）が速い</li>
                    <li>交換レンズの種類が多い</li>
                    <li>バッテリーの持ちがいい</li>
                  </ul>
                </v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑-->

        <!--↓-->
        <div class="h-1 mt-5 mb-5"></div>
        <p>デジカメを買うなら、分割でお支払いラクラクのショッピングクレジット♪</p>
        <h2 class="spec">ショッピングクレジット</h2>
        <p>
          カメラのキタムラおすすめの『ショッピングクレジット』なら、<span class="poins">最長48回払いまで金利手数料が「0円」</span>！<br />
          ショッピングクレジットをぜひご利用ください！
        </p>
        <h3 class="tx-bo tx-20 lsp01 mt-1">分割払い例</h3>
        <v-container>
          <v-row>
            <v-col class="pa-2 float-left ba-gr" cols="12">
              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="lin12e tx-18 tx-aka tx-no">分割払い例①</h4>
                <div class="s-credit mt-1">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>92,800<span>円</span></td>
                        <td>30<span>回</span></td>
                        <td class="txt-org"><span>約</span>3,094<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>

              <v-col class="float-left p-3" sm="6" xs="12">
                <h4 class="lin12e tx-18 tx-aka tx-no">分割払い例②</h4>
                <div class="s-credit mt-1">
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>商品価格</th>
                        <th>分割回数</th>
                        <th>月々の<br />お支払額</th>
                        <th>分割<br />手数料</th>
                      </tr>
                      <tr>
                        <td>58,000<span>円</span></td>
                        <td>10<span>回</span></td>
                        <td class="txt-org"><span>約</span>5,800<span>円</span></td>
                        <td>0<span>円</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-col>
            </v-col>

            <p class="mt-2">※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます</p>
            <v-col class="pa-2 float-left" cols="12">
              <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`/ec/guide/s_credit_01l`"
                ><span class="v-btn__content">ショッピングクレジットを詳しく見る ≫</span></v-btn
              >
            </v-col></v-row
          >
        </v-container>
        <!--↑-->
        <!--↓-->
        <div class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">カメラレンズ特集</h2>
        <v-container>
          <v-row>
            <v-col class="mb-2 float-left" cols="12">
              <v-col class="pa-2 float-left" cols="12" sm="6">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/mzuiko/">
                      <v-img
                        contain
                        src="/ec/images2/special/camera/dslr/mlens_oly_430-100.jpg"
                        alt="OLYMPUS レンズ交換でワンランクアップ。マイクロフォーサーズレンズ"
                        max-height="100"
                        width="auto"
                      ></v-img
                    ></a> </v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="6"
                ><v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/lumixg/">
                      <v-img
                        contain
                        src="/ec/images2/special/camera/dslr/mlens_pana_430-100.jpg"
                        alt="Panasonic ２本目にほしい マイクロフォーサーズレンズ"
                        max-height="100"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="6"
                ><v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/sonye/">
                      <v-img
                        contain
                        src="/ec/images2/special/camera/dslr/mlens_sony_430-100.jpg"
                        alt="SONY α Eマウントを持って旅に出よう ソニー Eレンズ"
                        max-height="100"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="6"
                ><v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/lens/fujifilm/">
                      <v-img
                        contain
                        src="/ec/images2/special/camera/dslr/mlens_fuji_430-100.jpg"
                        alt="FUJIFILM 高画質を追求  FUJINONレンズ特集 富士フイルム XマウントXFレンズ"
                        max-height="100"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
        <!--↑-->
        <!--↓-->
        <div class="h-1 mt-5 mb-5"></div>
        <h2 class="spec">デジカメ・ミラーレス関連特集</h2>
        <v-container>
          <v-row>
            <v-col class="mb-2 float-left" cols="12">
              <h3 class="font-weight-bold text-h6 txt-org mt-4">▼カメラ初心者におすすめのデジタル一眼カメラ</h3>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/camera/feature/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/1341.jpg"
                        alt="話題の新製品"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://shasha.kitamura.jp/" target="_blank">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/8235.png"
                        alt="ShaSha:写真がもっと好きになる"
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
                        alt="収納力で選べる！一眼用カメラバッグ特集"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="https://www.net-chuko.com/ec/service/tokutoku-kaitori.html">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/2439.gif"
                        alt="トクトク買取"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/general/tokutokukoukan/">
                      <v-img
                        contain
                        src="https://shopimg.kitamura.jp/images/banner/3778.gif"
                        alt="トクトク交換"
                        max-height="130"
                        width="auto"
                      ></v-img></a></v-flex
                ></v-layout>
              </v-col>
              <v-col class="pa-2 float-left" cols="12" sm="4">
                <v-layout justify-center wrap
                  ><v-flex>
                    <a href="/special/sale-fair/">
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
import Product from '@/components/product-list/product.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductListService from '@/logic/product-list.service';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
//import { ConditionItem } from '@/types/conditions';
import { ProductItem } from '@/types/product-list';
//import { NEWER_SORT_LIST } from '@/constants/sort-list';
//import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
//import { SEARCH_STATE } from '@/constants/search-state';
export default Vue.extend({
  name: 'dslr',
  components: {
    breadcrumbs: Breadcrumbs
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'おすすめのデジタル一眼レフ/ミラーレスカメラ特集 | カメラのキタムラネットショップ';
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
          path: 'デジタル一眼レフ/ミラーレスカメラ特集',
          linkUrl: '/ec/special/camera/dslr',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['8809022691058', '4961607701720', '4545350026264', '0837296000021', '4571474120014'],
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
.inner-link {
  &:hover {
    color: $ec-primary !important;
  }
}
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
    height: auto;
  }
  h2.spec {
    width: 100%;
    height: auto;
    margin: 0px 0 10px 0;
    padding: 0 10px 5px 55px;
    font-size: 20px;
    font-weight: 800;
    background-image: url(/ec/images2/special/camera/dslr/bg_cameratitle.gif);
    background-repeat: no-repeat;
    float: left;
    color: #46280c;
    box-sizing: border-box;
    line-height: 1.2em;
    border-bottom: 2px solid #ffcc00;
  }
  /*背景画像*/
  .cameratitle {
    background-image: url(/ec/images2/special/camera/dslr/bg_cameratitle.gif);
    background-repeat: no-repeat;
    line-height: 1.3em;
    padding: 5px 0 0 65px;
    box-sizing: border-box;
    color: #46280c;
    font-weight: bold;
    font-size: 17px;
  }
  .youhintitle {
    background-image: url(/ec/images2/special/camera/dslr/bg_youhintitle.gif);
    background-repeat: no-repeat;
    line-height: 1.3em;
    padding: 5px 0 5px 65px;
    box-sizing: border-box;
    color: #46280c;
    font-weight: bold;
    font-size: 16px;
  }

  .dslr ul {
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
  .dslr p {
    line-height: 1.8em;
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
  .ba-gr {
    border: #626262 dashed 1px;
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
.dslr {
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
