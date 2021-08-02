<template>
  <div class="dslr">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />

    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <!-- ↓ 看板：画像の読み込み -->
      <h1>
        <img class="mb-1 banner-img pc" src="https://shop.kitamura.jp/ec/images2/special/camera/dslr/bbn_pc.png" alt="デジタル一眼レフ/ミラーレスカメラ特集" />
        <img class="mb-1 banner-img sp" src="https://shop.kitamura.jp/ec/images2/special/camera/dslr/bbn_sp.png" alt="デジタル一眼レフ/ミラーレスカメラ特集" />
        <span class="font-small">デジタル一眼レフ/ミラーレスカメラ特集</span>
      </h1>
      <!-- ↑ 看板：画像の読み込み -->
      <p>一眼レフ・ミラーレス一眼購入が初めてのカメラ初心者の方にもおすすめ！<br />キタムラで人気のデジタル一眼レフ・ミラーレス一眼をご紹介</p>

      <div class="mb-2">
        <div class="col-sm-4 pa-2 d-flex float-left">
          <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`#mirrorless`"
            ><span class="v-btn__content">ミラーレス一眼</span></v-btn
          >
        </div>
        <div class="col-sm-4 pa-2 d-flex float-left">
          <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`#dslr`"
            ><span class="v-btn__content">デジタル一眼レフ</span></v-btn
          >
        </div>
        <div class="col-sm-4 pa-2 d-flex float-left">
          <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`#supply`"
            ><span class="v-btn__content">カメラ用品</span></v-btn
          >
        </div>
      </div>

      <!--↓ミラーレス-->
      <div id="mirrorless" class="h-1 w-100 float-start mt-5 mb-5"></div>
      <h2 class="spec">カメラ初心者の方にもおすすめ 人気のミラーレス一眼カメラ</h2>

      <p class="w-100 float-start">
        コンパクトデジタルカメラ並みにサイズが小さく軽量で、スマホより格段にキレイな写真が撮れるミラーレス一眼。あこがれの背景ぼかしや、レンズの交換で魅力的な写真が撮影でき、表現の幅も広がります♪<br />
        Wi-Fi機能搭載のミラーレス一眼なら、画像をスマホにシェアでき、インスタグラムなどSNSにすぐアップできて便利です。<br />
      </p>
      <p class="w-100 float-start text-end"><a href="#tigai">≫ミラーレス一眼と一眼レフカメラの違い</a></p>

      <div class="col-sm-6 float-start">
        <h3 class="cameratitle w-100 float-start">
          <span class="tx-12 text-decoration-none li12">カメラ初心者の方にもおすすめ ミラーレス一眼機種：その1</span><br />
          持ち運びやすいコンパクトでスリムなボディー キヤノン EOS M200
        </h3>
        <p class="w-100 float-start text-center">
          <a href="https://shop.kitamura.jp/special/sale-fair/camera/dslr/3228/">
            <img src="/ec/images2/special/camera/dslr/camera_ma.jpg" alt="キヤノン EOS M200商品画像" class="mw-100" />
          </a>
        </p>
        <p class="w-100">
          <img src="/ec/images2/special/camera/dslr/m100-sensor.jpg" alt="キヤノン EOS M200機能イメージ" class="mw-100 d-none" /><br />
          <img src="/ec/images2/special/camera/dslr/m100-touch.jpg" alt="キヤノン EOS M200機能イメージ" class="mw-100" /><br />
        </p>

        <p class="w-100">
          <span class="tx-18 fw-bolder txt-org">ポイント① 薄型・軽量ボディー</span><br />
          気軽に持ち歩けて、撮りたい瞬間にさっと取り出せる！
        </p>
        <p class="w-100">
          <span class="tx-18 fw-bolder txt-org">ポイント② スマホと連携</span><br />
          BluetoothやWi-Fiでスマホと連携！SNSへの投稿が簡単<br />
          ※専用アプリ「Camera Connect」のダウンロードが必要
        </p>
        <p class="w-100">
          <span class="tx-18 fw-bolder txt-org">ポイント③ 自分撮りモード</span><br />
          背景ぼかし・美肌効果でキレイな自分撮りができる
        </p>
        <p class="w-100">
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
        <ul class="w-100 float-start text-center ssz">
          <ol>
            【ショッピングクレジット 月々支払い金額】
          </ol>
          <li>ボディ<br />約3,795円 × 15回</li>
          <li>レンズキット<br />約3,589円 × 20回</li>
          <li>ダブルレンズキット<br />約3,610円 × 24回</li>
          <li>ダブルズームキット<br />約3,135円 × 30回</li>
        </ul>
        <p class="tx-14 text-end">※2020年11/23時点</p>

        <div class="col-sm-12 pa-2 float-left">
          <v-btn
            block
            class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
            height="60px"
            :href="`https://shop.kitamura.jp/special/sale-fair/camera/dslr/3228/`"
            ><span class="v-btn__content">キヤノン EOS M200を見る ≫</span></v-btn
          >
        </div>
      </div>

      <div class="col-sm-6 float-start">
        <h3 class="cameratitle w-100 float-start">
          <span class="tx-12 text-decoration-none strong li12">カメラ初心者の方にもおすすめ ミラーレス一眼機種：その2</span><br />
          「4Kセルフィー」で決定的瞬間を逃さない！ 自撮りもしやすい パナソニック DC-GF10
        </h3>
        <p class="w-100 float-start text-center">
          <a href="https://shop.kitamura.jp/special/sale-fair/camera/dslr/3229/">
            <img src="/ec/images2/special/camera/dslr/gf10_img01.jpg" alt="パナソニック DC-GF10" class="mw-100" />
          </a>
        </p>
        <p class="w-100">
          <img src="/ec/images2/special/camera/dslr/gf10_img02.jpg" alt="パナソニック DC-GF10機能イメージ" class="mw-100 d-none" /><br />
          <img src="/ec/images2/special/camera/dslr/camera_mbe.jpg" alt="パナソニック DC-GF10機能イメージ" class="mw-100" /><br />
        </p>

        <p class="w-100">
          <span class="tx-18 fw-bolder txt-org">ポイント① 4Kセルフィー</span><br />
          1秒間に30枚連写した画像から、最高の1枚を選べる！
        </p>
        <p class="w-100">
          <span class="tx-18 fw-bolder txt-org">ポイント② 夜景セルフィー</span><br />
          夜景をバックに美しく撮れる、夜景セルフィーモードを搭載
        </p>
        <p class="w-100">
          <span class="tx-18 fw-bolder txt-org">ポイント③ スマホに接続&転送</span><br />
          スマホ・タブレットとカメラを、ワイヤレスで接続可能<br />
          ※専用アプリ「Panasonic Image App」のダウンロードが必要
        </p>
        <p class="w-100">
          シンプルでクラシカルなカメラらしさにこだわりながら、エレガントで上質なデザインのDC-GF10。ファッションの一部のように身に付けて街を歩くのもおすすめ☆
        </p>

        <ul class="w-100 float-start text-center ssz">
          <ol>
            【ショッピングクレジット 月々支払い金額】
          </ol>
          <li>ダブルレンズキット<br />約3,465円 × 20回</li>
          <li>ダブルズームキット<br />約3,094円 × 24回</li>
        </ul>
        <p class="tx-14 m0 text-end">※2020年11/23時点</p>

        <div class="col-sm-12 pa-2 float-left">
          <v-btn
            block
            class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
            height="60px"
            :href="`https://shop.kitamura.jp/special/sale-fair/camera/dslr/3229/`"
            ><span class="v-btn__content">パナソニック DC-GF10を見る ≫</span></v-btn
          >
        </div>
      </div>
      <h3 class="w-100 fw-bolder txt-org float-start mt-4 text tx-18">▼カメラ初心者におすすめのミラーレス一眼カメラ</h3>
      <div class="w-100 float-start mb-5 text-center">
        <div class="col-sm-3 float-start pd10">
          <a
            href="/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2CNumber17%2CScore&searchbox=1&q=LUMIX+DC-GF10&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
          >
            <img src="https://shopimg.kitamura.jp/images/pd/9b4/1d5/ae8/922/6a5/5a5/e40/bb2/2ba/cba/b1h/2mn/d0i/b/M.jpg" class="mw-100 maru" /><br />
            パナソニック LUMIX DC-GF10
          </a>
        </div>
        <div class="col-sm-3 float-start p-2">
          <a
            href="/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2CNumber17%2CScore&searchbox=1&q=E-M10+MarkIII&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
          >
            <img src="https://shopimg.kitamura.jp/images/pd/962/58a/75e/436/585/9b8/f18/348/0ca/b52/3ca/zh7/0l5/d/M.jpg" class="mw-100 maru" /><br />
            オリンパス OM-D E-M10 MarkIII
          </a>
        </div>
        <div class="col-sm-3 float-start pd10">
          <a
            href="/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20%2Cprice%2CScore&searchbox=1&q=%CE%B16400&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC"
          >
            <img src="https://shopimg.kitamura.jp/images/pd/3b1/985/c10/91c/c8b/781/de4/095/b50/b6e/6f4/m50/stp/l/M.jpg" class="mw-100 maru" /><br />
            ソニー α6400 [ILCE-6400]
          </a>
        </div>
        <div class="col-sm-3 float-start pd10">
          <a
            href="/pd/list.html?index=&searchbox=1&sort=number20%2Cprice%2CScore&q=EOS+M200&path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F"
          >
            <img src="https://shopimg.kitamura.jp/images/pd/cbe/aca/35c/700/dd6/9c8/0ef/650/dac/4e1/aa3/6wc/6i9/i/M.jpg" class="mw-100 maru" /><br />
            キヤノン EOS M200
          </a>
        </div>
      </div>
      <!--↑ミラーレス-->

      <!--↓一眼-->
      <div id="dslr" class="h-1 float-start w-100 mt-5 mb-5"></div>
      <h2 class="spec">カメラ初心者の方にもおすすめ 人気の一眼レフカメラ</h2>
      <p class="w-100 float-start">
        一眼レフで、今よりもっとキレイな写真・かっこいい本格的な写真を撮りたい！
        でも操作や違いなど難しいことはわからないから、キレイな写真を簡単に撮影できたらいいな…。そんな方に、カメラ初心者の方でも安心して簡単に使える、おすすめ一眼レフとポイントをご紹介♪
      </p>
      <p class="w-100 float-start text-end"><a href="#tigai">≫ミラーレス一眼と一眼レフカメラの違い</a></p>

      <div class="row w-100">
        <div class="col-sm-6 float-start">
          <h3 class="cameratitle w-100 float-start">
            <span class="tx-12 text-decoration-none li12">カメラ初心者の方にもおすすめ 一眼レフ機種：その1</span><br />
            小型・軽量なのに、本格的。一眼レフデビューにおすすめのキヤノン EOS Kiss X10
          </h3>
          <p class="w-100 float-start text-center">
            <a href="/ec/pd/4549292132694">
              <img src="/ec/images2/special/camera/dslr/camera_kissx10.jpg" alt="EOS Kiss X10 商品画像" class="mw-100" />
            </a>
          </p>
          <p class="w-100">
            <span class="tx-18 fw-bolder txt-org">ポイント① バリアングル液晶モニター</span><br />
            角度を自由に変えられるのでアングルの自由度がアップ
          </p>
          <p class="w-100">
            <span class="tx-18 fw-bolder txt-org">ポイント② スマホと連携</span><br />
            専用アプリ Camera Connectの「撮影時スマホ自動送信」を使うと、撮影した画像がスマホに自動転送されます♪
          </p>
          <p class="w-100">
            <span class="tx-18 fw-bolder txt-org">ポイント③ シャッター音を抑えて連写</span><br />
            連写時の音を控えたい場所では、ソフト連続撮影(約2.5コマ／秒)が役立ちます
          </p>
          <ul class="w-100 float-start text-center ssz">
            <ol>
              【ショッピングクレジット 月々支払い金額】
            </ol>
            <li>ボディ<br />約3,218円 × 20回</li>
            <li>レンズキット<br />約3,094円 × 24回</li>
            <li>Wズームキット<br />約3,465円 × 30回</li>
          </ul>
          <p class="tx-14 m0 text-end">※2020年12/25時点</p>
          <div class="col-sm-12 pa-2 float-left">
            <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`/ec/pd/4549292132694`"
              ><span class="v-btn__content">キヤノン EOS Kiss X10を見る ≫</span></v-btn
            >
          </div>
        </div>

        <div class="col-sm-6 float-start">
          <h3 class="cameratitle w-100 float-start">
            <span class="tx-12 text-decoration-none li12">カメラ初心者の方にもおすすめ 一眼レフ機種：その2</span><br />
            高速＆高精度のオートフォーカスでシャッターチャンスに強い！ キヤノン EOS Kiss X90
          </h3>
          <p class="w-100 float-start text-center">
            <a href="/ec/pd/4549292111828">
              <img src="/ec/images2/special/camera/dslr/nfc2.jpg" alt="キヤノン EOS Kiss X90機能イメージ" class="mw-100" />
            </a>
          </p>
          <p class="w-100">
            <span class="tx-18 fw-bolder txt-org">ポイント① 豊富な撮影モード</span><br />
            カメラまかせで簡単にキレイな写真が楽しめる
          </p>
          <p class="w-100">
            <span class="tx-18 fw-bolder txt-org">ポイント② Wi-Fi／NFCを搭載</span><br />
            Wi-Fi／NFCを搭載。撮ったその場でスマホに手軽にシェア<br />
            ※専用アプリ「Camera Connect」のダウンロードが必要
          </p>
          <p class="w-100">
            <span class="tx-18 fw-bolder txt-org">ポイント③ すばやいピント合わせ</span><br />
            ペットや子ども、電車など、動き回る被写体の撮影でも、すばやくピントを合わせます 最高約3コマ／秒 の連写性能。
          </p>
          <ul class="w-100 float-start text-center ssz">
            <ol>
              【ショッピングクレジット 月々支払い金額】
            </ol>
            <li>ボディ<br />約3,597円 × 15回</li>
            <li>レンズキット<br />約3,144円 × 20回</li>
          </ul>
          <p class="tx-14 m0 text-end">※2020年11/23時点</p>
          <div class="col-sm-12 pa-2 float-left">
            <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6" height="60px" :href="`/ec/pd/4549292111828`"
              ><span class="v-btn__content">キヤノン EOS Kiss X90を見る ≫</span></v-btn
            >
          </div>
        </div>
        <h3 class="w-100 fw-bolder txt-org float-start mt-4 tx-18">▼カメラ初心者におすすめのデジタル一眼カメラ</h3>
        <div class="w-100 float-start mb-5 text-center">
          <div class="col-sm-3 float-start pd10">
            <a href="/ec/pd/4549212297298">
              <img src="/images/pd/13a/94e/f93/838/0e3/1fc/4d2/625/ef6/512/78w/lgd/fgp/0/M.jpg" class="mw-100 maru" /><br />
              ペンタックス K-70
            </a>
          </div>
          <div class="col-sm-3 float-start p-2">
            <a href="/ec/pd/4549292151251">
              <img src="/images/pd/a9e/a37/8b0/9f7/6bc/00d/0b7/5e9/d1e/c0a/1cw/xxc/1ut/g/M.jpg" class="mw-100 maru" /><br />
              キヤノン EOS Kiss X10i
            </a>
          </div>
        </div>
      </div>
      <!--↑一眼-->

      <!--↓必需品-->
      <div id="supply" class="h-1 float-start w-100 mt-5 mb-5"></div>
      <h2 class="spec">はじめてのミラーレス・一眼カメラの必需品 おすすめ用品</h2>
      <p class="w-100 mt10 mb15 p-2">
        せっかく購入したミラーレス一眼や一眼レフカメラは大切に扱いたいもの。ミラーレスカメラや一眼レフカメラデビューするなら、これだけは揃えておきたい必需品をご紹介！<br />
        持ち運び時や撮影時に傷や汚れからカメラの液晶モニターを守る液晶保護フィルムや、屋外で撮影する際の砂埃やゴミ、空気中のホコリからレンズを守るレンズ保護プロテクターがあれば、アウトドアでの撮影も安心です。
      </p>

      <div class="row w-100">
        <div class="col-sm-6 float-start">
          <h3 class="cameratitle w-100 float-start tx-18">
            <span class="tx-12 tx-no li12">ミラーレス・一眼カメラの必需品：その1</span><br />
            背面液晶モニターをキズから守る液晶保護フィルム
          </h3>
          <p class="w-100 float-start text-center">
            <a href="/ec/list?category=カメラアクセサリー・用品:液晶保護フィルム&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100">
              <img src="/ec/images2/special/camera/dslr/youhin_film.jpg" alt="液晶保護フィルム商品画像" class="mw-100" />
            </a>
          </p>
          <div class="col-sm-12 pa-2 float-left">
            <v-btn
              block
              class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
              height="60px"
              :href="`/ec/list?category=カメラアクセサリー・用品:液晶保護フィルム&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100`"
            >
              <span class="v-btn__content">液晶保護フィルムを見る ≫</span>
            </v-btn>
          </div>
        </div>

        <div class="col-sm-6 float-start">
          <h3 class="cameratitle w-100 float-start tx-18">
            <span class="tx-12 tx-no li12">ミラーレス・一眼カメラの必需品：その2</span><br />
            ホコリからレンズを守る、レンズ保護プロテクター
          </h3>
          <p class="w-100 float-start text-center">
            <a href="/ec/list?category=交換レンズアクセサリー:フィルター:プロテクター・保護フィルター&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100">
              <img src="/ec/images2/special/camera/dslr/youhin_film.jpg" alt="保護プロテクター" class="mw-100" />
            </a>
          </p>
          <div class="col-sm-12 pa-2 float-left">
            <v-btn
              block
              class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6"
              height="60px"
              :href="`/ec/list?category=交換レンズアクセサリー:フィルター:プロテクター・保護フィルター&narrow18=1&n20c=完了商品は除く&sort=popularity&limit=100`"
              ><span class="v-btn__content">レンズ保護プロテクターを見る ≫</span></v-btn
            >
          </div>
        </div>
      </div>
      <!--↑必需品-->
      <!-- ↓ サンプル：価格・人気アクセサリー -->
      <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
        <h2 class="title mb-2 font-weight-bold">おすすめのカメラ用品 一覧</h2>
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
      <div id="tigai" class="h-1 float-start w-100 mt-5 mb-5"></div>
      <h2 class="spec">ミラーレス一眼と一眼レフカメラの違い</h2>
      <div class="col-sm-12 pa-2 d-flex float-left">
        <div class="col-sm-6 float-start">
          <div class="col-sm-4 float-start text-center">
            <h4 class="tx-16">ミラーレス一眼</h4>
            <a href="#mirrorless"
              ><img
                src="https://shopimg.kitamura.jp/images/pd/0b4/8ee/d9d/50c/9fd/4e7/ac8/76e/d19/b1f/ebs/ldg/noq/u/TN.jpg"
                alt="ミラーレス画像"
                class="mw-100"
            /></a>
          </div>
          <div class="col-sm-8 float-start">
            <ul class="p-2">
              <li>キレイな写真が撮れる</li>
              <li>サイズがコンパクト</li>
              <li>軽量で気軽に持ち運べる</li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 float-start">
          <div class="col-sm-4 float-start text-center">
            <h4 class="tx-16">一眼レフカメラ</h4>
            <a href="#dslr"
              ><img
                src="https://shopimg.kitamura.jp/images/pd/6ca/164/8c0/408/e4a/6a2/465/8e2/fb5/fbb/14y/mr5/44s/c/TN.jpg"
                alt="一眼レフカメラ"
                class="mw-100"
            /></a>
          </div>
          <div class="col-sm-8 float-start">
            <ul class="p-2">
              <li>プロのようなキレイな写真が撮れる</li>
              <li>動く被写体の撮影に向いている</li>
              <li>オートフォーカス（AF）が速い</li>
              <li>交換レンズの種類が多い</li>
              <li>バッテリーの持ちがいい</li>
            </ul>
          </div>
        </div>
      </div>
      <!--↑-->

      <!--↓-->
      <div class="float-start w-100 mt-5 mb-5"></div>
      <p class="w-100 float-start text-start">デジカメを買うなら、分割でお支払いラクラクのショッピングクレジット♪</p>
      <h2 class="spec">ショッピングクレジット</h2>
      <p class="w-100 float-start text-start">
        カメラのキタムラおすすめの『ショッピングクレジット』なら、<span class="poins">最長48回払いまで金利手数料が「0円」</span>！<br />
        ショッピングクレジットをぜひご利用ください！
      </p>
      <h3 class="tx-bo tx-20 lsp01 mt-1">分割払い例</h3>

      <div class="col-sm-12 pa-2 float-left ba-gr">
        <div class="col-sm-6 float-start p-3">
          <h4 class="d-sm-block lin12e tx-18 tx-aka tx-no">分割払い例①</h4>
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
        </div>

        <div class="col-sm-6 float-start p-3">
          <h4 class="d-sm-block lin12e tx-18 tx-aka tx-no">分割払い例②</h4>
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
        </div>
      </div>
      <p class="w-100 mt-2">※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます</p>
      <div class="col-sm-12 pa-2 float-left">
        <v-btn block class="v-btn--is-elevated v-btn--has-bg theme--dark warning white--text text-h6 w-100" height="60px" :href="`/sitemap/s_credit_01.html`"
          ><span class="v-btn__content">ショッピングクレジットを詳しく見る</span></v-btn
        >
      </div>
      <!--↑-->
      <!--↓-->
      <div class="float-start w-100 mt-5 mb-5"></div>
      <h2 class="spec">カメラレンズ特集</h2>
      <div class="col-sm-12 pa-1 float-left text-center">
        <div class="col-sm-6 float-start p-2">
          <a href="/special/sale-fair/camera/lens/mzuiko/"
            ><img
              src="/ec/images2/special/camera/dslr/mlens_oly_430-100.jpg"
              alt="OLYMPUS レンズ交換でワンランクアップ。マイクロフォーサーズレンズ"
              class="mw-100"
          /></a>
        </div>
        <div class="col-sm-6 float-start p-2">
          <a href="/special/sale-fair/camera/lens/lumixg/"
            ><img src="/ec/images2/special/camera/dslr/mlens_pana_430-100.jpg" alt="Panasonic ２本目にほしい マイクロフォーサーズレンズ" class="mw-100"
          /></a>
        </div>
        <div class="col-sm-6 float-start p-2">
          <a href="/special/sale-fair/camera/lens/sonye/"
            ><img src="/ec/images2/special/camera/dslr/mlens_sony_430-100.jpg" alt="SONY α Eマウントを持って旅に出よう ソニー Eレンズ" class="mw-100"
          /></a>
        </div>
        <div class="col-sm-6 float-start p-2">
          <a href="/special/sale-fair/camera/lens/fujifilm/"
            ><img
              src="/ec/images2/special/camera/dslr/mlens_fuji_430-100.jpg"
              alt="FUJIFILM 高画質を追求  FUJINONレンズ特集 富士フイルム XマウントXFレンズ"
              class="mw-100"
          /></a>
        </div>
      </div>
      <!--↑-->
      <!--↓-->
      <div class="float-start w-100 mt-5 mb-5"></div>
      <h2 class="spec">デジカメ・ミラーレス関連特集</h2>
      <div class="col-sm-12 pa-1 float-left text-center">
        <div class="col-sm-4 float-start p-2">
          <a href="/special/sale-fair/camera/feature/"><img src="https://shopimg.kitamura.jp/images/banner/1341.jpg" alt="話題の新製品" class="mw-100" /></a>
        </div>
        <div class="col-sm-4 float-start p-2">
          <a href="https://shasha.kitamura.jp/"
            ><img src="https://shopimg.kitamura.jp/images/banner/8235.png" alt="ShaSha:写真がもっと好きになる" class="mw-100"
          /></a>
        </div>
        <div class="col-sm-4 float-start p-2">
          <a href="https://shop.kitamura.jp/special/sale-fair/camera/bag/"
            ><img src="https://shopimg.kitamura.jp/images/banner/1155.gif" alt="収納力で選べる！一眼用カメラバッグ特集" class="mw-100"
          /></a>
        </div>
        <div class="col-sm-4 float-start p-2">
          <a href="https://www.net-chuko.com/ec/service/tokutoku-kaitori.html"
            ><img src="https://shopimg.kitamura.jp/images/banner/2439.gif" alt="トクトク買取" class="mw-100"
          /></a>
        </div>
        <div class="col-sm-4 float-start p-2">
          <a href="/special/sale-fair/general/tokutokukoukan/"
            ><img src="https://shopimg.kitamura.jp/images/banner/3778.gif" alt="トクトク交換" class="mw-100"
          /></a>
        </div>
        <div class="col-sm-4 float-start p-2">
          <a href="/special/sale-fair/"><img src="https://shopimg.kitamura.jp/images/banner/3808.gif" alt="セール・特集一覧" class="mw-100" /></a>
        </div>
      </div>

      <!--↑-->
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
//import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
//import { ConditionItem } from '@/types/conditions';
//import { ProductItem } from '@/types/product-list';
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
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2024/01/25 23:59',
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
      productJanCodeList: ['8809022691058', '4961607701720'],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
      // ↑ ---- 価格・人気アクセサリー ----
    });

    onMounted(() => {
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice
    };
  }
});
</script>

<style lang="scss">
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
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
