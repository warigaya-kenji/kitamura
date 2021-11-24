<template>
  <v-app>
    <div class="fujinon">
      <!-- ↓ パンくず -->
      <breadcrumbs :breadcrumbs="breadcrumbs" />
      <!-- ↑ パンくず -->
      <div class="main-contents-wrap">
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->
        <!-- ↓ 看板：画像の読み込み -->
        <h1 class="mb-1 text-body-1">
          <img
            class="mb-1 banner-img"
            src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/mainv.png"
            alt="フジフイルム FUJINONレンズ特集「XマウントXFレンズ」"
          />
        </h1>
        <!-- ↓ ナビボタン -->
        <v-container fluid class="navi" no-gutters>
          <v-row>
            <v-col cols="6" md="3" v-for="navi in naviList" :key="navi.src" class="pa-1">
              <v-layout justify-center wrap
                ><v-flex
                  ><a v-scroll-to="navi.href">
                    <v-img contain :src="navi.src" width="auto" max-height="115px" class="hover ma-0"></v-img> </a></v-flex></v-layout
            ></v-col>
          </v-row>
        </v-container>
        <!-- ↑ ナビボタン -->
        <v-container>
          <v-row no-gutters>
            <v-col class="pa-1">
              <v-layout justify-center wrap
                ><v-flex>
                  <a href="https://shop.kitamura.jp/special/sale-fair/camera/lens/fujifilm/xf100-400/"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/100-400.jpg"
                      max-height="132px"
                      width="auto"
                      alt="フジフイルム XF100-400mm"
                    >
                    </v-img></a></v-flex
              ></v-layout>
            </v-col>
          </v-row>
        </v-container>

        <h2 class="title sbtext mt-8">おすすめレンズの価格/買取・お得な情報</h2>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="1683" />

        <v-container class="mt-8">
          <v-row>
            <v-col cols="12" sm="6">
              <a href="https://www.net-chuko.com/sell/quick-index.do">
                <v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/bnr_shitadori_350-130.gif"
                  alt="高価買取実施中"
                  max-width="350px"
                  max-height="130px"
                  class="mx-auto hover"
                ></v-img>
              </a>
            </v-col>
            <v-col cols="12" sm="6">
              <a href="/ec/guide/s_credit_01">
                <v-img
                  src="https://shopimg.kitamura.jp/images/banner/1486.gif"
                  alt="ショッピングクレジット"
                  max-width="350px"
                  max-height="130px"
                  class="mx-auto hover"
                ></v-img>
              </a>
            </v-col>
          </v-row>
        </v-container>
        <!-- こ-->
        <v-container class="mt-8 cl">
          <v-row>
            <div id="fujinon-kore"></div>
            <v-col cols="12">
              <h3 class="mb-5">
                <v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/lbl_kore.png"
                  max-width="100%"
                  max-height="41"
                  alt="キットレンズの次はこれ 持っておきたい2本目のレンズ"
                ></v-img>
              </h3>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item1.png"
                max-width="100%"
                max-height="424"
                alt="どんなシーンでもこれ1本でOK!納得のクオリティと使い勝手のよさで最初の追加レンズとしておすすめの2本をご紹介。FUJINON 人気No.1! コスパの高い「魔法のレンズ」XF35mmF1.4 R 標準ズームこそF2.8の明るさと画質で差をつける! XF16-55mmF2.8 R LM WR"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item2.png"
                max-width="100%"
                max-height="100"
                alt="1 FUJINON人気No.1! コスパの高い「魔法のレンズ」 XF35mmF1.4 R"
                class="mb-5"
              ></v-img>
              <v-col class="p-3 float-left cl" sm="6" xs="12"
                ><a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/kore_photo1.JPG"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/kore_thumb1.png"
                    max-width="240"
                    max-height="359"
                    alt="作例"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/kore_thumb1_msg.png"
                  max-width="330"
                  max-height="87"
                  alt="ポートレート、風景、テーブルフォトまで。何を撮ってもサマになる1本。購入者のレビュー評価で軒並み星5つを獲得する、妥協のないオールラウンダーレンズ。"
                ></v-img>
              </v-col>

              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item3.png"
                max-width="100%"
                max-height="88"
                alt="point1 F1.4がうみだす豊かなボケ味 このレンズ最大の魅力は背景の優しいうわふわしたボケ。被写体を効果的に浮かび上がらせる、立体感ある描写。"
                class="cl mt-8"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item4.png"
                max-width="100%"
                max-height="90"
                alt="point2 開放絞りからシャープ 解像感のある描写 ピントの合った部分の描写は、開放絞りから抜群にシャープ。全郡繰り出し方式だからピント全域で性能が変化することがありません。"
                class="mt-8"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item5.png"
                max-width="100%"
                max-height="88"
                alt="point3 コストパフォーマンスの良さで人気No.1 53mm相当の標準レンズで、F1.4、コンパクトなサイズといった高いパフォーマンス。人物、スナップ、風景など幅広く使えてこの価格!"
                class="mt-8"
              ></v-img>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4547410206159"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/btn1.png"
                      max-width="100%"
                      max-height="79"
                      alt="XF35mm F1.4 R 詳細・ご注文はこちら"
                      class="mt-8"
                    ></v-img></router-link></v-flex
              ></v-layout>

              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item6.png"
                max-width="100%"
                max-height="204"
                alt="2 標準ズームこそ F2.8 の明るさと画質で差をつける! XF16-55mmF2.8 R LM WR"
                class="cl mt-8"
              ></v-img>
              <v-col class="p-3 float-left" sm="6" xs="12"
                ><a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/kore_photo2.JPG"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/kore_thumb2.png"
                    max-width="359"
                    max-height="240"
                    alt="作例"
                  ></v-img
                ></a> </v-col
              ><v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/kore_thumb2_msg.png"
                  max-width="330"
                  max-height="110"
                  alt="35mm 判換算で 24mm～84mm 相当の焦点距離を F2.8 でカバーした「XF標準ズームレンズ」のフラグシップモデル。あえて手ブレ補正をつけないことによって、すぐれた高画質を実現しました。"
                ></v-img>
              </v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item7.png"
                max-width="100%"
                max-height="198"
                alt="point1 手ブレ補正をあえてつけない「画質優先」の設計が実現する高画質。 手ブレ補正ユニットを使用すると、周辺部の解像度や収差に影響が生じます。手ブレが発生しにくい開放F値が小さいレンズでは、手ブレ補正を搭載しないことで、最良の画質が得られるようにしています。"
                class="cl"
              >
              </v-img>
              <v-col class="p-3 float-left" sm="6" xs="12"></v-col>
              <v-col class="p-3 float-left" sm="6" xs="12">
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item7_photo.JPG"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item7_thumb.png"
                    max-width="100%"
                    max-height="497"
                    alt="作例"
                  >
                  </v-img></a
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item8.png"
                max-width="100%"
                max-height="91"
                alt="point2 ズームレンズでF2.8 単焦点並みのボケ味 使い勝手のいい標準ズームレンズでありながら、F2.8固定という明るさ。さまざまな被写体において単焦点並みのボケ味を発揮します。"
                class="cl mt-8"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/item9.png"
                max-width="auto"
                max-height="91"
                alt="point3 防塵・防滴・-10度の耐低温構造 X-T1との組み合わせで、天候・シーンを気にせずに撮影可能。"
                class="cl mt-8"
              ></v-img>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4547410289879"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kore/btn2.png"
                      max-width="auto"
                      max-height="79"
                      alt="XF16-55mmF2.8 R LM WR 詳細・ご注文はこちら"
                      class="mt-8"
                    ></v-img></router-link></v-flex
              ></v-layout>
            </v-col>
          </v-row>
        </v-container>
        <!--↑これ-->
        <!--↓こだわり派-->
        <v-container class="mt-8 cl">
          <v-row>
            <div id="fujinon-kodawari"></div>
            <v-col cols="12">
              <h3 class="mb-5">
                <v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/lbl_kodawari.png"
                  max-width="100%"
                  max-height="41"
                  alt="こだわり派が厳選 作品をレベルUPするお勧めレンズ"
                  class="cl"
                ></v-img>
              </h3>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item1.png"
                max-width="720"
                max-height="485"
                alt="写真作品をよりレベルアップしたいあなたにおすすめしたいFUJINONレンズ"
                class="cl mt-8"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item2.png"
                max-width="720"
                max-height="152"
                alt="1 APD フィルター搭載レンズで理想的な柔らかいボケを手に入れる XF56mmF1.2 R APD"
                class="mt-8 cl"
              ></v-img>
              <v-col class="p-3 float-left cl" sm="6" xs="12">
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/kodawari_photo1.jpg"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/kodawari_thumb1.png"
                    max-width="359"
                    max-height="240"
                    alt="作例"
                  ></v-img></a></v-col
              ><v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/kodawari_thumb1_msg.png"
                  max-width="330"
                  max-height="192"
                  alt="世界初(*1)の APD フィルター搭載レンズ。 APD フィルターとは? APD フィルターは、レンズ周辺部を通る光の亮を減少させることで、ボケ像の輪郭が滑らかになり、柔らかく美しいボケ味を実現。ピントの合った部分のシャープな描写とあいまって、立体感のある表現が可能です。"
                ></v-img
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item3.png"
                max-width="720"
                max-height="82"
                alt="point1 輪郭なめらかな極上のボケ味。 比べてわかる APD フィルターのボケ味"
                class="cl mt-8"
              ></v-img>

              <v-col class="p-3 float-left cl" sm="6" xs="12">
                <p class="cl">APD なし</p>
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/nasi_photo.jpg"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/nasi.png"
                    max-width="191"
                    max-height="257"
                    alt="作例"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="6" xs="12">
                <p class="cl">APD あり</p>
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/ari_photo.jpg" class="fujinon-js-image"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/ari.png"
                    width="190"
                    max-height="257"
                    alt="作例"
                  ></v-img></a
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item4.png"
                max-width="720"
                max-height="89"
                alt="point2 F1.2の明るいレンズ F1.2の非常に明るいレンズ。APDフィルターとの相性は抜群。美しく大きなボケ味を楽しむことができます。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item5.png"
                max-width="720"
                max-height="88"
                alt="point3 APD フィルタ搭載×AF撮影を実現 コントラストAFが使えるミラーレスなので、一眼レフシステムでは出来なかったAF撮影が可能になりました。"
                class="mt-8 cl"
              ></v-img>

              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4547410289855"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/btn3.png"
                      max-width="auto"
                      max-height="79"
                      alt="XF56mmF1.2 R APD 詳細・ご注文はこちら"
                      class="mt-8"
                    ></v-img></router-link></v-flex
              ></v-layout>

              <p class="cl"><span>＊1</span>APDフィルターを搭載したレンズで、世界で初めてAF撮影が可能。平成26年9月現在。当社調べ。</p>

              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item6.png"
                max-width="720"
                max-height="243"
                alt="2 最高レベルの光学性能を追求!あらゆるシーンで使える望遠ズーム! XF50-140mmF2.8 R LM OIS WR"
                class="mt-8 cl"
              ></v-img>
              <v-col class="p-3 float-left" sm="6" xs="12">
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/kodawari_photo4.JPG" class="fujinon-js-image"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/kodawari_thumb4.png"
                    max-width="359"
                    max-height="240"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/kodawari_thumb4_msg.png"
                  max-width="322"
                  max-height="186"
                  alt="徹底した防塵・防滴・耐低温設計で、過酷な状況下での撮影にも耐える他フレンズ。35mm判換算76-213mmを、F2.8の開放値でカバーします。さらに様々な最新技術が搭載され、シャッターチャンスを逃しません。"
                  class="mt-8"
                ></v-img
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item7.png"
                max-width="auto"
                max-height="91"
                alt="point1 世界最高5.0段(＊2)の手ブレ補正効果 望遠端での撮影でも安心の世界最高5.0段(＊2)の手ブレ補正効果。手ブレしやすい望遠ズーム時の手持ち撮影でも高画質な撮影ができます。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item8.png"
                max-width="720"
                max-height="203"
                alt="point2 世界初の「トリプル・リニア・モーター」搭載による静かで高速・高精度なAF フォーカスレンズの軽量化と、レンズ駆動部にリニアモーターを120度間隔で3つ配置した「トリプル・リニア・モーター」の搭載により、静かで、より高速・高精度なAFを実現しました。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/item9.png"
                max-width="720"
                max-height="119"
                alt="point3 ズーム全域でF2.8の明るさ 35mm判換算76-213mmという常用望遠全域を、F2.8の開放値でカバーする望遠ズームレンズ。スポーツや動物などの動きの速い被写体や、ネイチャーフォトなどのアウトドアでの撮影でも実力を発揮します。"
                class="mt-8 cl"
              ></v-img>

              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4547410289862"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/kodawari/btn4.png"
                      max-width="auto"
                      max-height="79"
                      alt="XF56mmF1.2 R APD 詳細・ご注文はこちら"
                      class="mt-8"
                    ></v-img></router-link></v-flex
              ></v-layout>

              <p class="cl">
                <span>＊2</span>平成26年6月16日現在、CIPA規格準拠の手ブレ補正効果として世界最高5.0段を実現。当社調べ。<br />
                望遠端にて測定。
              </p>
            </v-col>
          </v-row>
        </v-container>
        <!-- ↑こだわり派-->

        <!-- //いま話題の新商品レンズ-->
        <v-container>
          <v-row
            ><v-col>
              <div id="fujinon-wadai"></div>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/lbl_wadai.png"
                max-width="720"
                max-height="41"
                alt="いま話題の新商品レンズ"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item1.png"
                max-width="720"
                max-height="402"
                alt="FUJINONレンズからこの夏発売された2本の最新レンズの情報をお届け!"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item2.png"
                max-width="720"
                max-height="195"
                alt="1 ポートレート撮影に最適な大口径・単焦点望遠レンズXF90mmF2 R LM WR"
                class="mt-8 cl"
              ></v-img>
              <v-col class="p-3 float-left" sm="6" xs="12">
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/wadai_photo1.jpg"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/wadai_thumb1.png"
                    max-width="359"
                    max-height="240"
                    alt="作例"
                  ></v-img></a></v-col
              ><v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/wadai_thumb1_msg.png"
                  max-width="318"
                  max-height="188"
                  alt="豊かなボケ味と高い解像感。発売前から開放F値でのシャープな描写とボケ味の美しさが話題になっている1本。ポートレートに最適な最短撮影距離60cmの大口径単焦点レンズ。"
                ></v-img
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item3.png"
                max-width="720"
                max-height="171"
                alt="point1 開放F値のシャープな描写 開放からの描写力の秘密は、大口径球面レンズでの8群11枚の構成。3枚の大口径EDレンズが、望遠レンズに発生しがちな色収差を抑制。シャープな描写力を実現しています。"
                class="cl mt-8"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item4.png"
                max-width="720"
                max-height="113"
                alt="point2 大口径球面レンズが実現する美しいボケ味 美しい円形のボケ写真が話題のこのレンズ。ピントの合った被写体のシャープな描写と、全景・背景のボケ味が美しいコントラストを生み、印象的な写真表現を可能にします。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item5.png"
                max-width="720"
                max-height="208"
                alt="point3 最速0.14秒(＊3)の高速かつ正確なAF 新開発”クアッド・リニアモーター”を搭載し、最速0.14秒(＊3)の高速かつ正確なAFを実現。高速で静粛、そしてAF制度に優れるという特性を持つリニアモーターで大口径レンズユニットを、ストレスなくクイックに動かします。"
                class="mt-8 cl"
              ></v-img>

              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4547410302776"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/btn1.png"
                      max-width="auto"
                      max-height="79"
                      alt="XF90mmF2 R LM WR 詳細・ご注文はこちら"
                      class="mt-8"
                    ></v-img></router-link></v-flex
              ></v-layout>

              <p class="cl"><span>＊3</span>CIPAガイドライン準拠、内部測定方法。ハイパフォーマンスモードON時。</p>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item6.png"
                max-width="720"
                max-height="161"
                alt=""
                class="cl mt-8"
              ></v-img>
              <v-col class="p-3 float-left" sm="6" xs="12">
                <a href="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/wadai_photo2.JPG"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/wadai_thumb2.png"
                    max-width="359"
                    max-height="240"
                    alt="作例"
                  ></v-img></a></v-col
              ><v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/wadai_thumb2_msg.png"
                  max-width="318"
                  max-height="157"
                  alt="作例"
                ></v-img
              ></v-col>

              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item7.png"
                max-width="526"
                max-height="174"
                alt="point1"
                class="cl mt-8"
              ></v-img
              ><v-col class="p-3 float-left" sm="6" xs="12"></v-col
              ><v-col class="p-3 float-left" sm="6" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item7_photo.JPG"
                  max-width="194"
                  max-height="129"
                  alt="作例"
                  class="float-left"
                ></v-img
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item8.png"
                max-width="720"
                max-height="198"
                alt="作例"
                class="cl mt-8"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/item9.png"
                max-width="720"
                max-height="201"
                alt="作例"
                class="mt-8 cl"
              ></v-img>

              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4547410302783"
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/wadai/btn2.png"
                      max-width="auto"
                      max-height="79"
                      alt="XF16mmF1.4R WR 詳細・ご注文はこちら"
                      class="mt-8"
                    ></v-img></router-link></v-flex
              ></v-layout>

              <p class="cl mt-8">
                <span>＊4</span>APS-Cサイズ以上のイメージセンサー用で、開放F値が1.4、かつ焦点距離が24mm(35mm判換算)の<br />
                広角単焦点レンズにおいて、最短撮影距離15cmを実現したのは世界初。<br />
                平成27年4月16日発表時点。当社調べ。
              </p>
            </v-col>
          </v-row>
        </v-container>
        <!-- //いま話題の新商品レンズ-->

        <!-- コラム FUJINONの技術と性能を受け継ぐXマウント-->
        <v-container>
          <v-row
            ><v-col>
              <div id="fujinon-column"></div>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/lbl_column.png"
                max-width="720"
                max-height="41"
                alt="コラム FUJINONの技術と性能を受け継ぐXマウント"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item1.png"
                max-width="720"
                max-height="238"
                alt="テレビ・映画・天文学・人工衛星。世界の多舞台で活躍しているFUJINONレンズ。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item2.png"
                max-width="720"
                max-height="187"
                alt="テレビ撮影用、映画撮影用、天文台の望遠鏡、人工衛星に積まれるレンズ。世界レベルでの信頼を必要とする多様な業界で、FUJINONレンズが使われています。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item3.png"
                max-width="720"
                max-height="80"
                alt="実はこんなに！数字で見るFUJINONレンズの功績"
                class="mt-8 cl"
              ></v-img>
              <v-col class="p-3 float-left" sm="4" xs="12">
                <v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item4.png"
                  max-width="240"
                  max-height="auto"
                  alt="世界のテレビ・CM映像用カメラのレンズシェア約50%！オリンピックやワールドカップでも活躍"
                ></v-img
              ></v-col>
              <v-col class="p-3 float-left" sm="4" xs="12">
                <v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item5.png"
                  max-width="240"
                  max-height="auto"
                  alt="FUJINONレンズを搭載した双眼鏡が発見した彗星の数"
                ></v-img></v-col
              ><v-col class="p-3 float-left" sm="4" xs="12"
                ><v-img
                  src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item6.png"
                  max-width="240"
                  max-height="auto"
                  alt="地球から38万キロ離れた人工衛星もFUJINONを搭載"
                ></v-img
              ></v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item7.png"
                max-width="720"
                max-height="366"
                alt="FUJINONは日本で最も歴史あるレンズメーカーのひとつ。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item8.png"
                max-width="720"
                max-height="365"
                alt="日本が認める職人の技が活きる製法。"
                class="mt-8 cl"
              ></v-img>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item9.png"
                max-width="720"
                max-height="52"
                alt="動画で見る職人の技"
                class="mt-8 cl"
              ></v-img>
              <v-col class="p-3" cols="12">
                <iframe width="100%" height="405" src="https://www.youtube.com/embed/AC4lFeFw_sQ" frameborder="0" allowfullscreen></iframe>
              </v-col>
              <v-img
                src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/column/item10.png"
                max-width="720"
                max-height="376"
                alt="このFUJINONの技術と性能を最大限に活かし生まれたのがFUJIFILMのXマウントです。 XF LENS 歴史・各業界からの評価に裏付けされたXシリーズの高画質をぜひお試しください。"
                class="mt-8 cl"
              ></v-img>

              <h2>関連商品リンク</h2>
              <v-col class="p-3 float-left" sm="4" cols="6">
                <a href="/ec/ct/C004/015/001/"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/btn1.png"
                    max-width="223"
                    max-height="auto"
                    alt="標準ズームレンズ一覧"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="4" cols="6">
                <a href="/ec/ct/C004/015/002/"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/btn2.png"
                    max-width="223"
                    max-height="auto"
                    alt="望遠ズームレンズ一覧"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="4" cols="6">
                <a href="/ec/ct/C004/015/003/"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/btn3.png"
                    max-width="223"
                    max-height="auto"
                    alt="広角レンズ一覧"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="4" cols="6">
                <a href="/ec/ct/C004/015/004/"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/btn4.png"
                    max-width="223"
                    max-height="auto"
                    alt="標準・中望遠ズームレンズ一覧"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="4" cols="6">
                <a href="/ec/ct/C004/015/007/"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/btn5.png"
                    max-width="223"
                    max-height="auto"
                    alt="マクロレンズ一覧"
                  ></v-img></a
              ></v-col>
              <v-col class="p-3 float-left" sm="4" cols="6">
                <a
                  href="https://shop.kitamura.jp/ec/ct/C002/001/?category=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC:%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%A7%E9%81%B8%E3%81%B6:%E3%83%95%E3%82%B8%E3%83%95%E3%82%A4%E3%83%AB%E3%83%A0&narrow18=1&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&sort=popularity&limit=20"
                  ><v-img
                    src="https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/btn6.png"
                    max-width="223"
                    max-height="auto"
                    alt="Xシリーズ本体"
                  ></v-img></a
              ></v-col>
            </v-col>
          </v-row>
        </v-container>
        <!-- //コラム FUJINONの技術と性能を受け継ぐXマウント-->

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <subText :textItem="'おすすめの特集'" />
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
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
export default Vue.extend({
  name: 'fujinon',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    'product-list-by-special-id': ProductListBySpecialId
  },
  setup: (props, context) => {
    document.title = 'フジフイルム FUJINONレンズ特集「 XマウントXFレンズ」 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'FUJINONレンズ特集。フジフイルムのXFマウントレンズのおすすめポイントをまとめました。2本目に持っておきたいレンズやレベルアップ・話題の新製品レンズまで！価格・おすすめポイント・お得な買取情報もチェック！カメラ専門店カメラのキタムラのショッピングサイトにおまかせください。'
      );

    const state = reactive({
      naviList: [
        { href: '#fujinon-kore', src: 'https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/nav_kore.png' },
        { href: '#fujinon-kodawari', src: 'https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/nav_kodawari.gif' },
        { href: '#fujinon-wadai', src: 'https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/nav_wadai.png' },
        { href: '#fujinon-column', src: 'https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/nav_column.gif' }
      ],

      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/feature/backnumber',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          href: 'https://www.kitamura.jp/service/maintenance/',
          img: 'https://shopimg.kitamura.jp/images/banner/8422.png',
          alt: 'カメラメンテナンスサービス'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: '/ec/guide/s_credit_01',
          img: 'https://shopimg.kitamura.jp/images/banner/1486.gif',
          alt: 'ショッピングクレジット'
        },
        {
          href: '/ec/special/general/tokutokukoukan',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          href: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取',
          target: 'blank'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'フジフイルム FUJINONレンズ特集「 XマウントXFレンズ」',
          disabled: true
        }
      ],
      mainProductJanCode: ['4960759149084'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4960759149084'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>
      // ↑ ---- 比較 ----
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        // メイン商品
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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
.main-contents-wrap {
  max-width: 720px;
}
.banner-img {
  max-width: 100%;
  height: auto;
}

.fujinon ul {
  list-style: none;
  padding: 0;
}
.fujinon-root #fujinon-link {
  position: relative;
  background: url(https://shop.kitamura.jp/ec/images2/special/camera/lens/fujinon/img/link/bg.png) no-repeat 0 0;
  width: 720px;
  height: 289px;
  overflow: hidden;
}
.cl {
  clear: both;
}
</style>
