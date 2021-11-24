<template>
  <div class="astronomical">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-container>
        <v-row no-gutters>
          <v-col class="pa-2" cols="12">
            <h1 class="font-small">天体イベントスケジュール★天体観測 2021 皆既月食・部分月食・流星群を観測＆撮影しよう</h1>
            <v-col cols="12"
              ><v-layout justify-center wrap
                ><v-flex
                  ><v-img
                    class="mb-1 sp"
                    src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/topimg.jpg"
                    alt="天体イベントスケジュール"
                    contain
                    max-height="133px"
                    width="auto"
                  ></v-img></v-flex></v-layout
            ></v-col>
            <v-col class="buck-top float-left pa-0" cols="12">
              <div class="schedules">
                <ul class="pa-0">
                  <li class="font-weight-bold">【2021年】</li>
                  <li class="stext">09/21…<a href="#harvestmoon">中秋の名月</a></li>
                  <li class="stext">10/21…オリオン座流星群</li>
                  <li class="stext">11/12…おうし座北流星群</li>
                  <li class="stext">11/18…しし座流星群</li>
                  <li class="stext">11/19…部分月食</li>
                  <li class="stext">12/03…火星食(昼間)</li>
                  <li class="stext">12/14…ふたご座流星群</li>
                  <!--
                <li class="stext">05/26…<a href="#totaleclipsemoon">皆既月食</a>（月出帯食）</li>
                <li class="stext">01/02…<a href="#supermoon">スーパームーン</a></li>
                <li class="stext">6/21…<a href="#partialsolareclipse">部分日食</a>（日本全国で見られる）</li>
                <li class="stext">10/6…<a href="#maas">火星が地球に最接近</a></li>
                <li class="stext">12/21…<a href="#moon02">土星と木星が最接近</a></li>
                <li class="stext">01/03…しぶんぎ座流星群</li>
                <li class="stext">01/21…<a href="#moon01">月と火星が接近</a></li>
                -->
                  <li class="stext">2022年11/8…<a href="#totaleclipsemoon">皆既月食</a></li>
                  <li class="stext">2025年3/14…<a href="#totaleclipsemoon">皆既月食</a>日本の一部で部分月食が見える（月出帯食）</li>
                  <li class="stext">2025年9/8…<a href="#totaleclipsemoon">皆既月食</a></li>
                  <li class="stext">2026年3/3…<a href="#totaleclipsemoon">皆既月食</a></li>
                </ul>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑日程-->
      <!--↓ v-if="$vuetify.breakpoint.mdAndUp"-->
      <!--↑-->
      <!--↓-->
      <v-container>
        <v-row no-gutters>
          <v-col v-for="(navi, index) in naviList" :key="`navi-${index}`" v-scroll-to="navi.href" cols="6" sm="3" class="pa-2">
            <v-btn block class="v-btn--is-elevated nbtn text-body-1" height="70px"
              ><span style="white-space: pre-line; width: 100%">{{ navi.naviItem }}</span></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="maaspic">
              <v-icon class="white--text">fas fa-moon fa-fw</v-icon>天体観測を楽しもう！！おすすめ天体望遠鏡
            </h2>
            <h3>天体観測には天体望遠鏡が必要です！おすすめの天体望遠鏡をご紹介します。</h3>
            <v-col cols="12" sm="4" class="pa-2 float-left"
              ><h4 class="tx-16 text-center">おすすめ機種 スペースアイ600</h4>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4955295327539/"
                    ><v-img
                      src="//shopimg.kitamura.jp/images/pd/614/a24/7ad/8c1/009/138/24d/978/27b/086/443/0ah/l85/2/M.jpg"
                      alt="ビクセン 天体望遠鏡 スペースアイ600"
                      contain
                      max-height="250px"
                      width="auto"
                    ></v-img></router-link></v-flex
              ></v-layout>
              <v-btn block class="bg-btn tx-14 text-center"><router-link to="/ec/pd/4955295327539/" class="white--text">商品詳細を見る</router-link></v-btn>
              <p class="tx-14 mt-2">
                入門機におすすめな軽量な天体望遠鏡。お子様でも扱える重さです。火星はもちろん、月・土星・木星などもしっかりと見ることができます。<br />
                付属の接眼レンズは30倍と100倍です。もっと大きく楽しみたいという方は別売りの接眼レンズをプラスワン！してみましょう。
              </p></v-col
            >
            <v-col cols="12" sm="4" class="pa-2 float-left"
              ><h4 class="tx-16 text-center">おすすめ機種 ポルタII A80Mf</h4>
              <v-layout justify-center wrap
                ><v-flex
                  ><router-link to="/ec/pd/4955295399529/"
                    ><v-img
                      src="//shopimg.kitamura.jp/images/pd/45f/b5f/99d/27b/674/30b/cbf/4a7/bae/3fd/7f0/p7e/zwr/1/M.jpg"
                      alt="ビクセン 天体望遠鏡 ポルタII A80Mf"
                      contain
                      max-height="250px"
                      width="auto"
                    ></v-img></router-link></v-flex
              ></v-layout>
              <v-btn block class="bg-btn tx-14 text-center"><router-link to="/ec/pd/4955295399529/" class="white--text">商品詳細を見る</router-link></v-btn>
              <p class="tx-14 mt-2">
                昼の景色から夜の星空まで、丸々一日中活躍する望遠鏡。扱いやすさと性能にこだわったポルタII経緯台、鏡筒、三脚などがセットになっています。 <br />
                接眼レンズは44倍・144倍のものが付属しています。 （<a href="https://www.vixen.co.jp/lp/mobileporta/" target="_blank" rel="noopener"
                  >モバイルポルタの使いやすさを漫画で読む♪）</a
                >ビクセンHP掲載
              </p></v-col
            >
            <v-col cols="12" sm="4" class="pa-2 float-left"
              ><h4 class="tx-16 text-center">天体望遠鏡&スマホ用アダプター</h4>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/2239530007670/"
                    ><v-img
                      src="//shopimg.kitamura.jp/images/pd/b44/0ee/e6d/e4a/b40/f86/7c9/36d/865/e15/2a2/b0w/nut/c/M.jpg"
                      alt="ビクセン 天体望遠鏡 スペースアイ600&スマホ用アダプターセット"
                      contain
                      max-height="250px"
                      width="auto"
                    ></v-img></router-link></v-flex
              ></v-layout>
              <v-btn block class="bg-btn tx-14 text-center"><router-link to="/ec/pd/2239530007670/" class="white--text">商品詳細を見る</router-link></v-btn>
              <p class="tx-14 mt-2">
                入門機の天体望遠鏡スペースアイ600に、スマホ用アダプターがセット。スマホで気軽に星空を撮影できるので、たくさん撮ってSNSに投稿したり、お友達とシェアしたり、楽しさ広がるおすすめのセットです。（数量限定品ですのでなくなり次第終了となります）
              </p></v-col
            >
            <v-col cols="12" class="pa-2"
              ><v-btn block class="bg-btn tx-14 text-center"
                ><a
                  href="/ec/list?narrow18=0&keyword=%E3%83%9D%E3%83%AB%E3%82%BF&category=%E5%8F%8C%E7%9C%BC%E9%8F%A1%2F%E6%9C%9B%E9%81%A0%E9%8F%A1%3A%E5%A4%A9%E4%BD%93%E6%9C%9B%E9%81%A0%E9%8F%A1&index=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&sort=number20,Number19,Score&searchbox=1&s1%5B%5D=%E3%83%93%E3%82%AF%E3%82%BB%E3%83%B3&q=%E3%83%9D%E3%83%AB%E3%82%BF&path=%E5%8F%8C%E7%9C%BC%E9%8F%A1%2F%E6%9C%9B%E9%81%A0%E9%8F%A1%3A%E5%A4%A9%E4%BD%93%E6%9C%9B%E9%81%A0%E9%8F%A1"
                  class="white--text"
                  >ビクセン 天体望遠鏡ポルタ 一覧を見る</a
                ></v-btn
              ></v-col
            >
            <h3 class="mt-6">あると便利！天体観測を豊かにするグッズ</h3>
            <v-col cols="12" sm="4" class="pa-2 float-left"
              ><h4 class="tx-16 text-center">ビクセン 天体望遠鏡用31.7mm径接眼レンズ SLV5mm</h4>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4955295372041/"
                    ><v-img
                      src="//shopimg.kitamura.jp/images/pd/bb4/457/811/38e/979/77c/df3/b8a/e67/095/af5/3xv/jwf/o/M.jpg"
                      alt="ビクセン 天体望遠鏡用31.7mm径接眼レンズ SLV5mm"
                      contain
                      max-height="250px"
                      width="auto"
                    ></v-img></router-link></v-flex
              ></v-layout>
              <v-btn block class="bg-btn tx-14 text-center"><router-link to="/ec/pd/4955295372041/" class="white--text">商品詳細を見る</router-link></v-btn>
              <p class="tx-14 mt-2">
                「天体望遠鏡の見え方は接眼レンズで決まる」と言われるほど、見え方に影響を及ぼす接眼レンズの性能。もっとよく見たい！と思ったら接眼レンズをプラスワン！してみよう！クリアな視界に驚くこと間違いなし！
              </p></v-col
            >
            <v-col cols="12" sm="4" class="pa-2 float-left"
              ><h4 class="tx-16 text-center">ビクセン<br />SG-L02 天体観測用ライト</h4>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4955295710898/"
                    ><v-img
                      src="//shopimg.kitamura.jp/images/pd/fc7/6c5/892/839/daf/f8c/783/351/4f2/9ed/d9p/hro/3a9/b/M.JPG"
                      alt="ビクセン SG-L02 天体観測用ライト"
                      contain
                      max-height="250px"
                      width="auto"
                    ></v-img></router-link></v-flex
              ></v-layout>
              <v-btn block class="bg-btn tx-14 text-center"><router-link to="/ec/pd/4955295710898/" class="white--text">商品詳細を見る</router-link></v-btn>
              <p class="tx-14 mt-2">
                暗所では人間の目に刺激を与えない、赤くて弱い光を使うのがベスト。天体望遠鏡メーカーが作った専用設計。暗闇の中で操作するときに便利なライトです。星空を撮影する人からは「神ライト」との評価も！
              </p></v-col
            >
            <v-col cols="12" sm="4" class="pa-2 float-left"
              ><h4 class="tx-16 text-center">ビクセン<br />レンズヒーター360 III</h4>
              <v-layout justify-center wrap
                ><v-flex>
                  <router-link to="/ec/pd/4955295354184/"
                    ><v-img
                      src="//shopimg.kitamura.jp/images/pd/913/8e1/4d7/3b9/efa/bee/2e6/354/1ca/0cb/2av/hkd/r1v/4/M.jpg"
                      alt="ビクセン レンズヒーター360 III"
                      contain
                      max-height="250px"
                      width="auto"
                    ></v-img></router-link></v-flex
              ></v-layout>
              <v-btn block class="bg-btn tx-14 text-center"><router-link to="/ec/pd/4955295354184/" class="white--text">商品詳細を見る</router-link></v-btn>
              <p class="tx-14 mt-2">「レンズ曇り」を防ぐ、レンズに巻きつけて使用するUSB電源のヒーターです。野外での天体観測におすすめです。</p></v-col
            >
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="harvestmoon">
              <v-icon class="white--text">fas fa-moon fa-fw</v-icon>日本の文化、中秋の名月
            </h2>
            <h3>「中秋の名月」</h3>
            <v-col cols="12" sm="7" class="pa-2 float-left">
              <p class="mt-2">
                中秋の名月は、お月様に秋の収穫物をお供えして、恵みを感謝する行事だと言われています。<br />
                旧暦で、8月15日の満月のときに行うことから、十五夜とも呼ばれますが、新暦では満月にならない場合もあります。秋の澄んだ夜空の下で、日本の月を見上げる文化を楽しみましょう♪
              </p>
            </v-col>
            <v-col cols="12" sm="5" class="pa-2 float-left"
              ><v-img
                src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/fullmoon.jpg"
                alt="2013年中秋の名月の写真"
                class="banner-img"
              ></v-img
            ></v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6"><v-icon class="white--text">fas fa-moon fa-fw</v-icon>月の満ち欠け 周期と月齢</h2>
            <h3>満月から新月の月の満ち欠けの周期と月齢</h3>
            <p class="mt-2">月は、約30日の周期で満月～新月までの満ち欠けを繰り返して見えます</p>
            <v-img src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/moonsch.jpg" alt="満ち欠け" class="banner-img"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="totaleclipsemoon"><v-icon class="white--text">fas fa-moon fa-fw</v-icon>皆既月食とは</h2>
            <h3>月が地球の影に隠される「皆既月食」</h3>
            <v-col cols="12" sm="7" class="pa-2 float-left">
              <p class="mt-2">
                皆既月食は、月が地球の影の中に完全に入り込みます。
                しかし、真っ暗になって見えなくなるわけではなく、「赤銅（しゃくどう）色」と呼ばれる赤黒い色に見えます。
              </p>
            </v-col>
            <v-col cols="12" sm="5" class="pa-2 float-left"
              ><v-img
                src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/totaleclipsemoon.jpg"
                alt="2011年皆既月食の写真。撮影：星空写真家 成澤広幸"
                class="banner-img"
              ></v-img
            ></v-col>
            <h3 class="mt-6 cl">皆既月食のしくみ</h3>
            <p class="mt-2">
              月食は、太陽-地球-月が一直線に並んだ、満月のときだけに起こります。<br />
              この地球の影の中を月が通過することによって、月が暗くなったり、欠けたように見えたりする現象が「月食」です。<br />
              月が完全に地球の影に隠される現象を「皆既月食」と言います。
            </p>
            <v-img
              src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/mechanism.jpg"
              alt="皆既月食のしくみ"
              class="banner-img"
            ></v-img>
            <h3 class="mt-6">皆既月食スケジュール</h3>
            <p class="mt-2">
              ■2022年11月08日…皆既月食<br />
              ■2025年03月14日…皆既月食 日本の一部で部分月食が見える（月出帯食）<br />
              ■2025年09月08日…皆既月食<br />
              ■2026年03月03日…皆既月食
            </p>
            <v-col class="pa-2 float-left yellow lighten-4">
              <p class="mt-2">皆既月食の観察・撮影には天体望遠鏡がおすすめです。迫力の天文現象を体感しよう！</p>
              <v-col cols="12" sm="6" class="pa-2 float-left"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><a href="https://shop.kitamura.jp/special/sale-fair/camera/astronomical/telescope/"
                      ><v-img
                        src="//shopimg.kitamura.jp/images/banner/1698.jpg"
                        alt="初心者におすすめ 天体望遠鏡の選び方"
                        width="auto"
                        max-height="130px"
                        contain
                      ></v-img></a></v-flex></v-layout
              ></v-col>
              <v-col cols="12" sm="6" class="pa-2 float-left"
                ><a href="https://shop.kitamura.jp/special/sale-fair/camera/astronomical/moonlook/"
                  ><v-img
                    src="//shopimg.kitamura.jp/images/banner/1306.jpg"
                    alt="天体観測 入門編 月を見よう"
                    width="auto"
                    max-height="130px"
                    contain
                  ></v-img></a
              ></v-col>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h3 class="mt-6">皆既月食ギャラリー</h3>
            <v-img src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/moon01.jpg" class="banner-img"></v-img>
            <p class="mt-2">
              使用機材:ビクセン SXD2･PFL-SD103S、ソニー NEX-5<br />
              撮影データ:焦点距離1192mm、f7.7、ISO400、露出5秒、WB:太陽光<br />
              Photoshop lightroomで画像処理
            </p>
            <v-col cols="12" sm="6" class="pa-2 float-left"
              ><v-layout justify-center wrap
                ><v-flex
                  ><v-img
                    src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/moon02.jpg"
                    alt="皆既月食"
                    width="auto"
                    max-height="400px"
                    contain
                  ></v-img></v-flex></v-layout
            ></v-col>
            <v-col cols="12" sm="6" class="pa-2 float-left"
              ><v-img
                src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/moon03.jpg"
                alt="皆既月食"
                width="auto"
                max-height="400px"
                contain
              ></v-img
            ></v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="supermoon"><v-icon class="white--text">fas fa-moon fa-fw</v-icon>スーパームーン現象</h2>
            <h3>スーパームーン</h3>
            <p class="mt-2">
              月の大きさはたえず変化して見えています。月は地球の表面から約37万kmの距離を約27日で公転しており、その軌道は真円ではなく、いびつな楕円をしています。しかもその軌道自体も一定ではなく複雑に変化します。このことから、地球と月の距離も常に変化しており、実際に見える大きさも変化しているのです。
              スーパームーンは通常の満月と比較して大きく見え、明く観測されることもあるそうです♪
            </p>
            <h3 class="mt-6 cl">スーパームーン撮影のポイント：月の出時刻直後の低い位置の月を撮影しよう</h3>
            <p class="mt-2">
              スーパームーンをより大きく写すには、300mm以上の望遠レンズを使って、低い位置の月を撮るのがおすすめです。<br />
              なぜなら、月は大きさを比べることが出来る対象物(ビルや印象的なオブジェなど)が近くにあると、目の錯覚で異様に大きく感じるからです。<br />
              また、縦構図よりも横構図の方が、月が大きく感じることもありますので、何パターンか撮ってみましょう。 <br /><br />
              写真は、2014-08-07 21:23:31の月 使用機材:Sony NEX-5、Vixen ED80Sf鏡筒(600mm,F7.5)、撮影データ:ISO800、SS1/8、WB:オート
              (35mm換算焦点距離900mm,トリミングあり)
            </p>
            <v-col class="pa-2 float-left"
              ><v-img
                src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/ex_supermoonb.jpg"
                alt="スーパームーン作例写真"
                class="banner-img"
              ></v-img
            ></v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="qa"><v-icon class="white--text">fas fa-moon fa-fw</v-icon>よくある星空の疑問TOP3</h2>
            <h3>1.「えっ！ 星って冬のほうがきれいなんじゃないの！？」</h3>
            <p class="mt-2">
              確かに冬になると、空気中の塵などが落ちて、澄んだ空になります。でも惑星観測では別！
              冬の間は日本上空に吹き荒れる「偏西風」が強く、惑星を見てもボケてしまうのです。<br />
              高気圧に覆われ、偏西風が弱くなる夏こそが、惑星観測の好機なのです！ 見え方が全然違います！
            </p>
            <v-col cols="12" sm="6" class="pa-2 float-left"
              ><v-layout justify-center wrap
                ><v-flex
                  ><v-img
                    src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/do-3gatu.jpg"
                    alt="3月に撮影した土星"
                    width="auto"
                    max-height="300px"
                    contain
                  ></v-img>
                  3月に撮影した土星</v-flex
                ></v-layout
              ></v-col
            >
            <v-col cols="12" sm="6" class="pa-2 float-left"
              ><v-img
                src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/do-6gatu.jpg"
                alt="6月に撮影した土星"
                width="auto"
                max-height="300px"
                contain
              ></v-img>
              6月に撮影した土星
            </v-col>
            <h3 class="mt-6 cl">2.「星って月が明るいと見えないらしいよ。惑星の観測も新月のときがいいんでしょ？」</h3>
            <p class="mt-2">
              新月とは、一ヶ月のうち一日だけ月が昇ってこない日のこと。<br />
              確かに天の川や流星群などを楽しむには、月明かりがないほうがいいですが、惑星は違います。<br />
              月に負けず、明るく輝く惑星は、月の満ち欠けに関係なく、晴れていればいつでも見ることができるのです。
            </p>
            <h3 class="mt-6 cl">3.「天体望遠鏡って田舎で使うものでしょ？都会からじゃ見えないでしょ」</h3>
            <v-col cols="12" sm="6" class="float-left"
              ><p class="mt-2">
                そんなことはありません！ 惑星はとても明るく都会の空でも輝いています。わざわざ田舎に行かなくても惑星は楽しめるのです！ Let's
                おうちで天体観察！<br /><br />
                ※おうちで天体観察するときはエアコン室外機に注意！<br />
                ベランダから惑星をみるとき、近所の家の屋根のすぐ上に星が…なんてときは、もやもやしてよく見えません。また、自宅ベランダにあるエアコン室外機がONになっていると、気流が乱れて、もやもや見えます。理想は、広く開けた場所。近所を散策して「My観察地」を見つけよう！！
              </p></v-col
            >
            <v-col cols="12" sm="6" class="pa-2 float-left"
              ><v-layout justify-center wrap
                ><v-flex
                  ><v-img
                    src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/kansatuimg.jpg"
                    alt="観察イメージ"
                    width="auto"
                    max-height="300px"
                    contain
                  ></v-img></v-flex></v-layout
            ></v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!-- ↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2 float-left" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="osusumeitm">
              <v-icon class="white--text">fas fa-moon fa-fw</v-icon>天体観測におすすめの商品一覧
            </h2>
            <!-- ↓ サンプル：特集IDでの商品一覧表示 -->
            <product-list-by-special-id class="mb-5" :specialId="1111" />
            <!-- ↑ サンプル：特集IDでの商品一覧表示 -->
          </v-col>
        </v-row>
      </v-container>
      <!-- ↑-->

      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="osusumeapr">
              <v-icon class="white--text">fas fa-moon fa-fw</v-icon>皆既月食・部分月食・流星群・天体観測におすすめ アプリ
            </h2>
            <h3 class="mt-6 cl">天体観測におすすめのビクセン無料アプリをご紹介</h3>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://www.vixen.co.jp/app/moonbook.html" target="_blank"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/bnr_vixenmoonbook.jpg"
                      alt="月食の方角を調べる「Moonbook」"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout
              ></a>
              <p class="mt-2">月食がどの方角に見えるかをわかりやすく案内するアプリ<br />ビクセン「Moonbook」</p></v-col
            >
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://www.vixen.co.jp/app/planetbook.html" target="_blank"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/bnr_planetbook350-130.jpg"
                      alt="惑星の方角を調べるアプリ「Planet Book」"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout
              ></a>
              <p class="mt-2">惑星がどの方角に見えるかをわかりやすく表示するアプリ<br />ビクセン「Planet Book」</p></v-col
            >
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://www.vixen.co.jp/app/mars-book/" target="_blank"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/marsbook.jpg"
                      alt="Mars Boo"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout
              ></a>
              <p class="mt-2">火星大接近がなぜ起こるかをわかりやすく説明するアプリ<br />Mars Book</p></v-col
            >
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!--↓-->
      <v-container>
        <v-row>
          <v-col class="pa-2" cols="12">
            <h2 class="yellow text-h5 subtitle-1 pa-2 mb-3 mt-6" id="sogo">
              <v-icon class="white--text">fas fa-moon fa-fw</v-icon>おすすめ特集・プリントサービス
            </h2>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shasha.kitamura.jp/" target="_blank"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/8235.png"
                      alt="ShaSha"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="/special/sale-fair/camera/hosizora/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/5032.png"
                      alt="星空総合ページ"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="/special/sale-fair/camera/bag/trial/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/1437.jpg"
                      alt="カメラバッグトライアルサービス"
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
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="/special/sale-fair/page/telephoneorder-info/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/1361.gif"
                      alt="電話注文のご案内"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://www.kitamura-print.com/" target="_blank"
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
      <!--↓-->
      <!--↑-->
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
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';
//import { ConditionItem } from '@/types/conditions';
//import { ProductItem } from '@/types/product-list';
//import { NEWER_SORT_LIST } from '@/constants/sort-list';
//import { DISPLAY_COUNT_LIST } from '@/constants/display-conut-list';
//import { SEARCH_STATE } from '@/constants/search-state';
export default Vue.extend({
  name: 'astronomical',
  components: {
    breadcrumbs: Breadcrumbs,
    'product-list-by-special-id': ProductListBySpecialId
    //product: Product
  },

  setup: (props, context) => {
    document.title = '天体イベント スケジュール | 天体観測 皆既月食・部分月食・流星群';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '皆既月食・部分月食・流星群などの天体観測スケジュールをまとめました。月を見るのにおすすめ天体望遠鏡や双眼鏡はカメラのキタムラネットショップにおまかせください。')
    const state = reactive({
      naviList: [
        //{ naviItem: '月と火星が\n 接近', href: '#moon02' },
        //{ naviItem: '月が火星と\nアルデバランに接近', href: '#moon03' },
        //{ naviItem: '月が火星に\n大接近', href: '#moon01' },
        { naviItem: 'おすすめ\n天体望遠鏡', href: '#maaspic' },
        { naviItem: '中秋の名月\nとは', href: '#harvestmoon' },
        { naviItem: '皆既月食\nとは', href: '#totaleclipsemoon' },
        { naviItem: 'スーパームーン\n現象', href: '#supermoon' },
        { naviItem: '星空の疑問\nTOP3', href: '#qa' },
        { naviItem: '天体観測\nおすすめ商品', href: '#osusumeitm' },
        { naviItem: '天体観測\nおすすめアプリ', href: '#osusumeapr' },
        { naviItem: 'おすすめ特集', href: '#sogo' }
      ],
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
          path: '天体イベント スケジュール | 天体観測 皆既月食・部分月食・流星群',
          linkUrl: '/ec/special/camera/astronomical',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: ['4974019102863'],
      // 結果格納用
      mainProductList: [] as Array<ProductDetail>,
      // ↑ ---- メイン商品 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4974019102863'],
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
        const mainResult = await ProductService.fetchProducts(state.mainProductJanCode, true);
        state.mainProductList = mainResult.items;
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
        // メイン商品
        state.mainProductList = [] as Array<ProductDetail>;
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
  .cl {
    clear: both;
  }
  .nbtn {
    font-size: 16px;
    line-height: 1.2em;
    color: #996600;
    text-align: center;
    font-weight: 800;
    border: 1px solid #c5c5c5;
  }
  .nbtn a {
    color: #996600;
    text-decoration: none;
  }
  /*ボタン*/
  .bg-btn {
    height: 40px;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 2px 3px 0px #cfcfcf;
    background: rgb(242, 166, 87);
    background: linear-gradient(180deg, rgba(242, 166, 87, 1) 0%, rgba(231, 102, 47, 1) 100%);
  }

  .txt-org {
    color: #dd6717;
  }
  .tx-aka {
    color: #d80b24;
  }

  .txkg-whi01 {
    text-shadow: 1px 1px 0 #ffffff;
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

  .name2 {
    //行数制限
    display: -webkit-box;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    height: 4.2em !important;
  }
}

@media screen and (min-width: 601px) {
  .astronomical .pc {
    display: block;
  }
  .astronomical .sp {
    display: none;
  }
  /*背景画像入り*/
  .buck-top {
    width: 100%;
    height: 255px;
    background: url(https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/bg_topimg.jpg) no-repeat;
    background-size: 100%;
  }

  /*日程*/
  .schedules {
    width: 250px;
    height: 250px;
    margin: 0px 10px 0px 0px;
    padding: 40px 10px 10px 15px;
    float: right;
    background: url(https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/bg_schedule.jpg) no-repeat;
    border: 1px dashed #fad516;
    box-sizing: border-box;
  }
  .schedules ul {
    list-style: none;
    overflow: scroll;
    height: 200px;
  }
  .schedules .stext {
    font-size: 100%;
    margin: 0;
    padding: 2px 0;
    line-height: 1.3em;
  }
}
@media only screen and (max-width: 600px) {
  .astronomical .pc {
    display: none;
  }
  .astronomical .sp {
    display: block;
  }
  .astronomical .buck-top {
    background: none;
    width: 100%;
    height: auto;
  }
  /*日程*/
  .schedules {
    width: 100%;
    height: 290px;
    margin: 0px 10px 0px 0px;
    padding: 40px 10px 10px 15px;
    float: left;
    background-image: url(https://ns-stg.kitamura.shop/ec/images2/special/camera/astronomical/images/bg_schedule.jpg);
    background-repeat: no-repeat;
    border: 1px dashed #fad516;
    box-sizing: border-box;
  }
  .schedules ul {
    list-style: none;
    overflow: scroll;
    height: 100%;
  }
  .schedules .stext {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

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

<style lang="scss" scoped>
/* template内のDomへの適用 */
.astronomical {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 0px;
}
.astronomical p {
  line-height: 1.8em !important;
  font-size: 16px;
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
</style>
