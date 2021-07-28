<template>
  <v-app>
    <div class="eosr5-r6">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓ 画像の読み込み -->
        <img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/bg_top.jpg" @error="noimage" />
        <!-- ↑ 画像の読み込み -->

        <div class="red darken-4 text-center mb-2">
          <span class="white--text text-h6 font-weight-bold">キャノン EOS R5 キャノン EOS R6 好評発売中</span>
        </div>

        <div class="darken-2 text-left">
          <span>キャノン EOS R5 / キャノン EOS R6</span>
        </div>

        <!-- ↓ ナビボタン -->
        <naviBtn :naviList="naviList" />
        <!-- ↑ ナビボタン -->

        <div class="text-right">
          <v-btn href="/ec/special/camera/feature/backnumber/" text class="black white--text font-weight-bold kg-in">≫ 話題の新製品バックナンバー</v-btn>
        </div>

        <subText :textItem="'世界最高8.0段の手ブレ補正による快適な撮影を実現した次世代「EOS R」'" />
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R6レンズキット 価格・ご購入'" />

        <!--====== キヤノン EOS R5 ======-->
        <!--====== キヤノン EOS R6 ======-->
        <!-- <priceAndPurchase :mainProductList="mainProductList" /> -->

        <v-card :id="index" class="credit line-g mt-10 float-left" width="100%" v-for="(product, index) in mainProductList" :key="product">
          <v-container>
            <v-row>
              <v-col class="text-center" cols="12" sm="5">
                <router-link :to="`/ec/pd/${product.janCode}`"><img :src="product.images[0].imagePath" class="mx100pr" /></router-link>
                <p>
                  <a :href="`/ec/pd/${product.janCode}`">{{ product.itemName }}</a>
                </p>
              </v-col>
              <v-col class="text-center mt-4" cols="12" sm="6">
                <p class="text-h6">
                  価格<span class="text-h4 red--text">&yen;{{ product.price }}&nbsp;</span><span class="font-small">(税込)</span>
                </p>
                <v-btn
                  elevation="3"
                  x-large
                  dark
                  color="red"
                  class="text-h5 font-weight-bold accent-4"
                  height="55px"
                  width="65%"
                  :href="`/ec/pd/${product.janCode}`"
                >
                  <v-icon class="main-product-btn-icon">fas fa-chevron-right</v-icon>
                  ご購入はこちら
                </v-btn>
                <div class="mt-4" v-if="index === 0">
                  <p><img src="https://shop.kitamura.jp/images/banner/6931.jpg" alt="電話で相談・ご注文できます" /></p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <div class="col-sm-12 text-center float-left pa-4 mt-10">
          <v-btn
            elevation="3"
            class="black darken-4 white--text text-h7"
            height="70px"
            width="50%"
            @click="linkToOtherWindow('https://cweb.canon.jp/eos/your-eos/product/eosr/')"
            >メーカーサイトで<br />仕様・作例を詳しく見る</v-btn
          >
        </div>

        <!--動画で見る-->
        <subText :textItem="'動画で見る キヤノン EOS R5！'" />
        <div class="product-video-wrap text-center mb-6">
          <div class="">
            <iframe
              width="70%"
              height="315"
              src="https://www.youtube.com/embed/AxJYDPGlcvw?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!--特徴-->
        <div class="contents_inner" id="point">
          <subText :textItem="'EOS R5 / EOS R6 共通の特徴'" />
          <characteristic :characteristics="commonCharacteristicList" />

          <subText :textItem="'EOS R5 の特徴'" />
          <characteristic :characteristics="eosR5CharacteristicList" />

          <subText :textItem="'EOS R6 の特徴'" />
          <characteristic :characteristics="eosR6CharacteristicList" />
        </div>

        <!--特徴-->

        <!--比較-->
        <!-- <div>
          <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較'" id="hikaku" />
          <comparisonTable :comparisonDetailList="comparisonDetailList" />
        </div> -->
        <subText :textItem="'キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較'" id="hikaku" />
        <div class="product-comparison mb-5">
          <p class="mb-2">キヤノン EOS R5 / EOS R6 / EOS R / ソニー α7R IV / α7 III 比較しました。</p>
          <table class="product-comparison-table">
            <tbody>
              <tr>
                <th>商品名</th>
                <td v-for="product in comparisonDetailList" :key="product">{{ product.itemName }}</td>
              </tr>
              <tr>
                <th>発売日</th>
                <td>2020年7月30日</td>
                <td>2020年8月27日</td>
                <td>2018年10月25日</td>
                <td>2019年9月6日</td>
                <td>2018年3月23日</td>
              </tr>
              <tr>
                <th>価格</th>
                <td v-for="product in comparisonDetailList" :key="product">
                  <span class="primary--text font-weight-bold">¥{{ formatPrice(parseInt(product.price)) }}</span
                  >（税込）
                </td>
              </tr>
              <tr>
                <th>有効画素数</th>
                <td>約4500万画素</td>
                <td>約2010万画素</td>
                <td>約3030万画素</td>
                <td>約6100万画素</td>
                <td>約2420万画素</td>
              </tr>
              <tr>
                <th>撮像素子</th>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー（デュアルピクセルCMOS AF II対応）
                </td>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー（デュアルピクセルCMOS AF II対応）
                </td>
                <td>
                  35mmフルサイズ<br />
                  CMOSセンサー（デュアルピクセルCMOS AF対応）
                </td>
                <td>
                  35mmフルサイズ<br />
                  Exmor R CMOSセンサー
                </td>
                <td>
                  35mmフルサイズ<br />
                  ExmorR CMOSセンサー
                </td>
              </tr>
              <tr>
                <th>連続撮影速度</th>
                <td>最高約12コマ/秒</td>
                <td>最高約12コマ/秒</td>
                <td>最高約8.0コマ／秒</td>
                <td>最高約10コマ/秒</td>
                <td>最高約10コマ/秒</td>
              </tr>
              <tr>
                <th>連続撮影可能枚数</th>
                <td>
                  JPEG:約350枚<br />
                  RAW：約87枚
                </td>
                <td>
                  JPEG:約1000枚以上<br />
                  RAW：約240枚
                </td>
                <td>
                  JPEG:約100枚<br />
                  RAW：約34枚
                </td>
                <td>
                  JPEG:約68枚<br />
                  RAW：約68枚
                </td>
                <td>
                  JPEG:約163枚<br />
                  RAW：約89枚
                </td>
              </tr>
              <tr>
                <th>シャッタースピード</th>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
                <td>1／8000～30秒、バルブ</td>
              </tr>
              <tr>
                <th>ストロボ同調速度</th>
                <td>1／200秒</td>
                <td>1／200秒</td>
                <td>1／200秒</td>
                <td>1/250秒</td>
                <td>1/250秒</td>
              </tr>
              <tr>
                <th>ISO感度</th>
                <td>
                  ISO100～51200<br />
                  （拡張：下限ISO50、上限ISO102400)
                </td>
                <td>
                  ISO100～102400<br />
                  （拡張：下限ISO50、上限ISO204800)
                </td>
                <td>
                  ISO100～12800<br />
                  （拡張：下限ISO50、上限ISO102400)
                </td>
                <td>
                  ISO100-32000<br />
                  （拡張：下限ISO50、上限ISO102400)
                </td>
                <td>
                  ISO100-51200<br />
                  （拡張：下限ISO50、上限ISO204800)
                </td>
              </tr>
              <tr>
                <th>測距輝度範囲</th>
                <td>EV－6～20</td>
                <td>EV－6.5～20</td>
                <td>EV－6～18</td>
                <td>EV-3 - EV20</td>
                <td>EV-3-20</td>
              </tr>
              <tr>
                <th>撮影可能枚数</th>
                <td>
                  静止画：約200枚<br />
                  動画:合計約1時間10分
                </td>
                <td>
                  静止画：約250枚<br />
                  動画:合計約2時間25分
                </td>
                <td>
                  静止画：約350枚<br />
                  動画:合計約2時間20分
                </td>
                <td>
                  静止画：約530枚<br />
                  動画:合計約2時間40分
                </td>
                <td>
                  静止画：約610枚<br />
                  動画:合計約3時間10分
                </td>
              </tr>
              <tr>
                <th>手ブレ補正</th>
                <td>5軸補正 最大8段</td>
                <td>5軸補正 最大8段</td>
                <td>レンズ補正のみ</td>
                <td>5軸補正 最大5.5段</td>
                <td>5軸補正 最大5.0段</td>
              </tr>
              <tr>
                <th>液晶性能</th>
                <td>
                  3.2型/約210万ドット<br />
                  バリアングル式液晶モニター
                </td>
                <td>
                  3.0型/約162万ドット<br />
                  バリアングル式液晶モニター
                </td>
                <td>
                  3.15型/約210万ドット<br />
                  バリアングル式液晶モニター
                </td>
                <td>
                  3.0型/144万ドット<br />
                  チルト式液晶モニター
                </td>
                <td>
                  3.0型/92万ドット<br />
                  チルト式液晶モニター
                </td>
              </tr>
              <tr>
                <th>ファインダー</th>
                <td>0.5型/576万ドット</td>
                <td>0.5型/369万ドット</td>
                <td>0.5型/369万ドット</td>
                <td>0.5型/576万ドット</td>
                <td>0.5型/236万ドット</td>
              </tr>
              <tr>
                <th>視野率</th>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.76倍</td>
                <td>約100% / 約0.78倍</td>
                <td>約100% / 約0.78倍</td>
              </tr>
              <tr>
                <th>外形寸法</th>
                <td>約138.5×97.5×88.0ｍｍ</td>
                <td>約138.4×97.5×88.4ｍｍ</td>
                <td>約135.8×98.3×84.4mm</td>
                <td>約128.9×96.4×67.3mm</td>
                <td>約126.9×95.6×62.7mm</td>
              </tr>
              <tr>
                <th>質量（本体のみ）</th>
                <td>約650g</td>
                <td>約598g</td>
                <td>約580g</td>
                <td>約580g</td>
                <td>約565g</td>
              </tr>
              <tr>
                <th>記録メディア/スロット</th>
                <td>
                  CFexpressカード（Type B）/<br />
                  SD(sUHS-II 対応)デュアルスロット
                </td>
                <td>
                  SDデュアルスロット<br />
                  slot1/slot12:UHS-II 対応
                </td>
                <td>
                  SDシングルスロット<br />
                  UHS-II 対応
                </td>
                <td>
                  SDデュアルスロット<br />
                  slot1/slot12:UHS-II 対応
                </td>
                <td>
                  SDデュアルスロット<br />
                  slot1のみUHS-II 対応
                </td>
              </tr>
              <tr>
                <th>動画記録方式</th>
                <td>8K/4K/フルHD</td>
                <td>4K/フルHD</td>
                <td>4K/フルHD/HD</td>
                <td>4K/フルHD/HD</td>
                <td>4K/フルHD/HD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--比較-->

        <!-- ↓ ShaSha -->
        <subText :textItem="'ShaSha:キヤノン EOS R5｜航空写真家がスチル＆ムービーで徹底レビュー'" />
        <div class="product-shasha mb-5 float-left">
          <v-card class="product-shasha-wrap pa-4" outlined>
            <v-card-text class="black--text">
              キヤノンのミラーレス一眼 EOS R5は人気のデジタル一眼レフカメラ、EOS
              5Dシリーズの流れを汲んだ高画素機。「5」というと三脚にガッツリとカメラを据え付けじっくりと風景写真を撮る…というイメージもありましたが、今回のEOS
              R5はシャッターの秒間コマ数や手ブレ補正の段数などの秀逸さを見ても、かなり動きモノに対応してきたなという印象を持ちました。
              <br />そこで、動きモノである飛行機撮影においてEOS R5を徹底インプレッション。スチルだけでなくムービーについても、その劇的な...<a
                class="product-shasha-link"
                href="https://shasha.kitamura.jp/article/478121231.html"
                target="_blank"
                >続きを読む <img src="@/assets/special/img/sample1/shashabnr4.jpg" alt="イメージ" class="product-shasha-img mt-4"
              /></a>
            </v-card-text>
          </v-card>
        </div>
        <!-- ↑ ShaSha -->

        <subText :textItem="'キヤノン EOS R5 / EOS R6 価格・人気アクセサリー'" />
        <!-- <priceAndPopular :productDetailList="productDetailList" /> -->
        <v-container>
          <v-row>
            <v-col cols="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
              <a :href="`/ec/pd/${productDetail.janCode}`"><img :src="productDetail.images[0].imagePath" class="mx100pr" /></a>
              <p class="font-small blue--text mb-2 height-20">
                <a :href="`/ec/pd/${productDetail.janCode}`">{{ productDetail.itemName }}</a>
              </p>
              <p class="mt-2">
                価格:<span class="red--text font-small">&yen;{{ productDetail.price }}&nbsp;</span><span class="font-small">(税込)</span>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <subText :textItem="'キヤノン EOS R5 / EOS R6 ご購入時、高値下取り実施中！'" id="price" />
        <v-container class="mb-5">
          <v-row>
            <v-col class="text-center" cols="4">
              <a
                href="https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4549292075748&_ga=2.222765533.714669828.1626591933-721903692.1626267770&pattern=1"
                target="_blank"
                ><img src="https://shopimg.kitamura.jp/images/pd/e6a/566/223/13d/322/7d3/e9e/d4c/92d/3ba/b4d/q99/qon/e/L.jpg" class="hover" width="80%"
              /></a>
              <br />
              キヤノン EOS 5D Mark IV ボディ
            </v-col>
            <v-col col="6" class="mt-2">
              <p>
                今なら、キヤノン EOS R5 / EOS R6をご購入時、 <br />・<v-btn
                  href="https://www.net-chuko.com/sell/item-list.do?axisType=category&axisCond=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95&goodsname=4549292075748&_ga=2.195977450.714669828.1626591933-721903692.1626267770&pattern=1"
                  text
                  color="#1122cc"
                  min-height="20"
                  class="x-small align-center py-1 px-2"
                  >キヤノン EOS 5D Mark IV ボディ</v-btn
                >で下取り実施中です
              </p>
              <img src="/ec/images2/special/camera/feature/canon/eosr5_r6/bnr_shitadori_350-130.jpg" alt="高値下取り実施中" class="hover" @error="noimage" />
            </v-col>
          </v-row>
        </v-container>

        <subText :textItem="'キタムラなら最大48回まで分割金利手数料0円！'" />
        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="/ec/pd/4549292157345"
              ><img src="//shopimg.kitamura.jp/images/pd/479/596/d1e/955/5c5/f28/97f/ed8/392/3a7/71f/kto/esd/p/M.jpg" class="hover" width="80%"
            /></a>
            <br />
            キヤノン EOS R5 ボディ<br /><span class="red--text">455,400</span>円(税込)
          </v-col>
          <v-col col="6">
            <p>
              分割払いなら一度にかかるご負担を軽減する事ができます。<br />
              ショッピングクレジットの分割払いなら、最大48回分割払いまで分割金利手数料を当店が負担致します。
            </p>
            <font size="-1">※2020年7月10日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'9,488'" :commission="'0'" />
          </v-col>
        </v-row>

        <v-row class="mb-10">
          <v-col class="text-center" cols="4">
            <a href="ec/pd/4549292157253"
              ><img src="//shopimg.kitamura.jp/images/pd/731/a75/19f/abf/b41/d16/33c/43a/e3f/44e/b3i/o8z/04r/h/M.jpg" width="80%" class="hover"
            /></a>
            <br />
            キヤノン EOS R6 ボディ<br /><span class="red--text">301,950</span>円(税込)
          </v-col>
          <v-col col="6">
            <font size="-1">※2020年7月10日時点の価格です</font>
            <contingencyTable :numberOfTimes="'48'" :amount="'6,291'" :commission="'0'" />
            <div class="text-center">
              <v-btn width="80%" color="#E53935" class="white--text font-weight-bold" href="/sitemap/s_credit_01.html">
                ショッピングクレジットについて詳細はこちら
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <subText :textItem="'EOS R5 / EOS R6 作例画像'" id="images" />
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="ma-0 pa-0"
              ><img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/pic_01.jpg" @error="noimage" width="90%"
            /></v-col>
            <v-col cols="12" sm="6" class="ma-0 pa-0"
              ><img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/pic_02.jpg" @error="noimage" width="90%"
            /></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="ma-0 pa-0"
              ><img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/pic_03.jpg" @error="noimage" width="90%"
            /></v-col>
            <v-col cols="12" sm="6" class="ma-0 pa-0"
              ><img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/pic_04.jpg" @error="noimage" width="90%"
            /></v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" class="ma-0 pa-0"
              ><img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/pic_05.jpg" @error="noimage" width="90%"
            /></v-col>
            <v-col cols="12" sm="6" class="ma-0 pa-0"
              ><img class="mb-5" src="/ec/images2/special/camera/feature/canon/eosr5_r6/pic_06.jpg" @error="noimage" width="90%"
            /></v-col>
          </v-row>
        </v-container>

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

        <kitamuraService />

        <subText :textItem="'話題の新製品バックナンバー＆おすすめの特集'" id="images" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
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
import SubText from '@/components/common/subtext.vue';
import NaviBtn from '@/components/common/navi-btn.vue';
import PriceAndPurchase from '@/components/common/special/price-purchase.vue';
import Characteristic from '@/components/common/characteristic.vue';
import ComparisonTable from '@/components/common/comparison-table.vue';
import PriceAndPopular from '@/components/common/price-and-popular.vue';
import ContingencyTable from '@/components/common/contingency-table.vue';
import KitamuraService from '@/components/common/kitamura-service.vue';
import RecommendedFeatures from '@/components/common/recommended-features.vue';
export default Vue.extend({
  name: 'eosr5-r6',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    characteristic: Characteristic,
    // comparisonTable: ComparisonTable,
    // priceAndPopular: PriceAndPopular,
    contingencyTable: ContingencyTable,
    kitamuraService: KitamuraService,
    recommendedFeatures: RecommendedFeatures,
    naviBtn: NaviBtn
    // priceAndPurchase: PriceAndPurchase
  },
  data() {
    return {
      naviList: [
        { naviItem: '特徴スペック', herf: '#point' },
        { naviItem: '機種比較', herf: '#hikaku' },
        { naviItem: 'お得情報', herf: '#price' },
        { naviItem: '作例', herf: '#images' }
      ],
      commonCharacteristicList: [
        {
          subtitle: 'ボディ内5軸手ブレ補正機構搭載RFレンズ使用時最大8.0段の補正効果',
          contents: [
            'EOSシリーズで初めて、手ブレに連動して撮像素子を動かす補正機構をボディー内に採用。手ブレ補正機構が搭載されていないレンズでも手振れ補正が可能',
            'さらにIS（手振れ補正機構）搭載RFレンズなら最大8.0段分の手ブレ補正を実現。望遠撮影や手持ち撮影といった手ブレの発生しやすい撮影環境でも快適な撮影が可能',
            '動画撮影時には、ボディー内とレンズ内の手ブレ補正機構の協調制御に加え、動画電子ISの併用も可能で作品作りを強力にサポート'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ],
      eosR5CharacteristicList: [
        {
          subtitle: '約4500万画素35mmフルサイズCMOSセンサーと映像エンジン「DIGIC X」搭載によりEOSシリーズ史上最高画質と高速連写を両立',
          contents: [
            '電子シャッター撮影時は、AF/AE追従で最高約20コマ/秒の高速連写を実現。音の気になるシーンであってもシャッター音を気にせず撮影が可能',
            '「DIGIC X」により、静止画撮影時に常用で最高ISO 51200（拡張ISO 102400相当）を実現'
          ]
        },
        {
          subtitle: '「デュアルピクセル CMOS AF II」による快適なAF性能',
          contents: [
            '新CMOSセンサーの高速信号読み出しと新映像エンジンの高速処理により、「デュアルピクセル CMOS AF II」としてAF性能が向上',
            '静止画撮影・エリア自動選択時、最大1053分割の縦横画面の最大約100％の測距エリアを実現。より速く、より⾼精度なAFが可能',
            '人物の瞳・顔・頭部検出に対応。「EOS R」と比較して、より小さな瞳や横顔の検出性能が向上。動物（犬/猫/鳥）の瞳・顔・全身検出にも対応'
          ]
        },
        {
          subtitle: '幅広いシーンにおける快適な撮影をサポートする通信性能や操作性',
          contents: [
            '一眼レフEOSにて好評だったマルチコントローラーの採用と、3つの電子ダイヤル搭載でスムーズな操作性を実現',
            '防じん・防滴構造を採用し、水滴や砂じんのカメラ内部への侵入を抑制。さらに外装には軽量かつ高剛性のポリカーボネート樹脂を採用し、信頼性と機動性を両立',
            'スマホなどの携帯端末へのWi-Fi/Bluetooth®による接続に対応。撮影後のデータのやり取りがよりスムーズに行えます'
          ]
        }
      ],
      eosR6CharacteristicList: [
        {
          subtitle: '約2010万画素35mmフルサイズCMOSセンサーと映像エンジン「DIGIC X」搭載により⾼感度性能・⾼速性能を実現',
          contents: [
            'EOS-1D X MarkIII搭載センサーをベースにEOS R6用にカスタマイズされた35mmフルサイズCMOSセンサーにより⾼感度撮影時もクリアな映像表現が可能',
            '静止画⾼感度性能：常用ISO 102400（拡張ISO 204800相当）動画⾼感度性能：常用ISO 51200（拡張ISO 102400相当）に対応'
          ]
        },
        {
          subtitle: 'その他、高度な撮影をサポートする充実の仕上がり',
          contents: [
            'SDカード（UHS-II）に対応した2つのスロットを搭載。どちらのスロットでも最高約20コマ/秒の連続撮影4K/60P動画の内部記録が可能',
            'EOSシリーズ初の静⽌画測距輝度範囲EV-6.5の実現で、肉眼では被写体の認識が難しい暗い環境下でも高精度なピント合わせが可能',
            '直感的に撮影モードが切り替えられるモードダイヤルを搭載。静止画と動画の切り替えもスムーズに行えます'
          ]
        }
      ],
      recommendedFeaturesList: [
        {
          herf: '/special/sale-fair/camera/feature/backnumber/',
          img: 'https://shopimg.kitamura.jp/images/banner/4924.png',
          alt: '話題の新製品バックナンバー'
        },
        {
          herf: '/special/sale-fair/general/highly_recommended/2020/4722/',
          img: 'https://shopimg.kitamura.jp/images/banner/7619.png',
          alt: 'スタッフイチオシ！キヤノン RF70-200mm F2.8 L IS USM'
        },
        {
          herf: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          herf: '/special/sale-fair/sale/shoppingcredit-campaign/',
          img: 'https://shopimg.kitamura.jp/images/banner/4847.jpg',
          alt: '60回無金利 ショッピングクレジット'
        },
        {
          herf: '/special/sale-fair/general/tokutokukoukan/',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'トクトク交換'
        },
        {
          herf: 'https://www.net-chuko.com/static/contents/sell/kakaku-hosyo.html',
          img: 'https://shopimg.kitamura.jp/images/banner/2439.gif',
          alt: 'トクトク買取'
        }
      ]
    };
  },
  methods: {
    linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
  },
  props: {},
  setup: (props, context) => {
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '好評発売中！キヤノンEOS R5 R6',
          linkUrl: '/ec/special/camera/feature/canon/eosr5r6',
          disabled: false
        }
      ],
      mainProductJanCode: ['4549292157345', '4549292157253', '4549292157512'],
      mainProductList: [] as Array<ProductDetail>,
      // ↓ ---- 比較 ----
      comparisonJanCodeList: ['4549292157345', '4549292157253', '4549292157512', '4548736108264', '4548736079625'],
      // 結果格納用
      comparisonDetailList: [] as Array<ProductDetail>,
      // ↑ ---- 比較 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4549292157345',
        '4549292157253',
        '4549292157512',
        '4549292157222',
        '4549292162813',
        '4549292162837',
        '4549292115710',
        '4549292115703',
        '4549292148381',
        '4549292115611',
        '4549292156263',
        '4549292168037',
        '4960999581569',
        '4960999581576',
        '4549292125405',
        '4960999530383',
        '4523052023392',
        '4523052023408',
        '4523052016639'
      ],
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
        // 比較
        const comparisonResult = await ProductService.fetchProducts(state.comparisonJanCodeList, true);
        state.comparisonDetailList = comparisonResult.items;
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
  .banner-img {
    max-width: 100%;
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
  .credit_l {
    width: 35%;
    float: left;
    display: block;
    text-align: center;
    margin: 10px 10px 20px 0;
  }
  .credit_r {
    width: 60%;
    float: left;
    font-size: 14px;
  }
  .mt30 {
    margin-top: 30px;
  }
  .bgtypetitle {
    background-color: #ffffcc;
  }
  table.spec {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 80%;
    float: left;
    box-sizing: border-box;
    word-break: break-all;
  }
  .product-video {
    &-contents {
      height: 520px;
    }
  }
}
.height-20 {
  height: 4.8em;
}
// サンプル：ShaSha
.product-shasha {
  &-wrap {
    background: #f8fbd1;
  }

  &-link:hover {
    img {
      opacity: 0.7;
    }
  }
}
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.test {
  &-info {
    color: $text-primary;
  }
}
</style>