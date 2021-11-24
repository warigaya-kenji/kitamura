<template>
  <v-app>
    <div class="polarie">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />

        <!-- ↓ 画像の読み込み -->
        <div class="topimg">
          <h1 class="text-center white--text txkg-01">星空を撮影しよう！ 星空撮影入門特集</h1>
        </div>
        <!-- ↑ 画像の読み込み -->

        <!--↓アンカー-->
        <v-container class="bk-kn my-4" v-if="$vuetify.breakpoint.mdAndUp">
          <v-row class="">
            <v-col cols="4" v-for="navi in naviList" :key="navi">
              <p class="lin pa-2">
                <a :href="navi.href" class="white--text">{{ navi.naviItem }}<v-icon color="white">fas fa-arrow-circle-right</v-icon></a>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <!-- 960px未満 -->
        <tableOfContentsNavi :naviList="naviList" v-if="$vuetify.breakpoint.smAndDown" />

        <h2 class="text-left ntitle white--text pa-2" id="no1">
          星空撮影に最低限必要なアイテム！<span class="text-subtitle-2 font-weight-bold">星空撮影の事前準備</span>
        </h2>
        <p class="py-4">
          まずは今持っているカメラ・レンズ・三脚で、とりあえず撮影してみたいものですよね。<br />
          でもちょっと待って！ 暗所での撮影にはマナーがあり、昼間にはないトラブルが起こります。<br />
          まずは事前準備をしっかりとしましょう！
        </p>
        <h3 class="indigo--text darken-4">
          <span class="text-subtitle-1">星空撮影・暗所撮影のマナー！必ずこれを持って行こう</span><br />
          <span class="yellow--text">★</span>低照度で目を刺激しない赤色のライト 天体観測用ライト SG-L02 天体観測用ライト
        </h3>
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <router-link to="/ec/pd/4955295710898">
                <v-img src="https://shopimg.kitamura.jp/images/pd/779/42d/30c/1f8/f27/99b/4ec/189/a2d/4c2/bfv/chy/8vk/w/M.JPG" />
              </router-link>
            </v-col>
            <v-col cols="12" sm="9">
              <p class="">
                市販で撮影されているライトは「高照度・白色」のため、暗所での撮影だと目が開けられないほど、とてもまぶしいです。<br />
                そのまま有名な星空撮影地へ行くと、周囲で撮影しているカメラマンの構図に光が入り、トラブルの原因となってしまうことも！<br />
                星空の撮影では、周囲に迷惑をかけない「低照度」で、目を刺激しない「赤色」のライトを使うのがマナーです。<br />
                ビクセンの<a href="/pd/4955295710898/" class="deep-purple--text">天体観測用ライト SG-L02</a>は、まさに星空撮影のためのライト。<br />
                目の暗順応への影響が一番少なく、最低限の視認性を確保できる赤色LEDを搭載。天体観測の定番です。
              </p>
            </v-col>
          </v-row>
        </v-container>
        <div class="px-10 mb-12">
          <v-btn
            block
            class="bg-btn py-6 text-subtitle-1"
            href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&category=&r=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20,number19,Score&searchbox=1&s1%5B%5D=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&q=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&path=&range_member_price=10000_"
          >
            天体観測用ライト SG-L02 <v-icon small class="ml-2">fas fa-angle-right</v-icon>
          </v-btn>
        </div>
        <h3 class="indigo--text darken-4">
          <span class="text-subtitle-1">星空の方角を把握しよう！</span><br />
          <span class="yellow--text">★</span>目を刺激しない赤色ライトのコンパス LEDコンパス
        </h3>
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <a
                href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=LED%E3%82%B3%E3%83%B3%E3%83%91%E3%82%B9&category=&r=&q=LED%E3%82%B3%E3%83%B3%E3%83%91%E3%82%B9&path=&index=&sort=number20,Number17,Score&searchbox=1"
              >
                <v-img src="/ec/images2/special/camera/polarie/bn-003.jpg" />
              </a>
            </v-col>
            <v-col cols="12" sm="9">
              <p class="">
                北極星は北にあるよ～ 「北ってどっち？」<br />
                天の川の南から東にかけて昇ってくるよ～ 「南？ 東？ どこ？」<br />
                なんてことが起こります。<br />
                スマホでも調べられますが、星空撮影地はGPSが不安定な場所があります。<br />
                手軽に調べられる<a
                  href="/pd/list.html?q=LED%E3%82%B3%E3%83%B3%E3%83%91%E3%82%B9&path=&index=&sort=number20%2CNumber17%2CScore&searchbox=1"
                  class="deep-purple--text"
                  >赤色LED付きコンパス</a
                >がおすすめです。<br />
                表・裏関係なく方角を調べることができ、軽くてとても使いやすいと評判のコンパスです。
              </p>
            </v-col>
          </v-row>
        </v-container>
        <div class="px-10 mb-12">
          <v-btn
            block
            class="bg-btn py-6 text-subtitle-1"
            href="https://shop.kitamura.jp/ec/list?narrow18=0&keyword=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&category=&r=&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&sort=number20,number19,Score&searchbox=1&s1%5B%5D=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&q=%E6%9D%B1%E6%B4%8B%E3%83%AA%E3%83%93%E3%83%B3%E3%82%B0&path=&range_member_price=10000_"
          >
            ビクセン LEDコンパス <v-icon small class="ml-2">fas fa-angle-right</v-icon>
          </v-btn>
        </div>
        <h2 class="text-left ntitle white--text pa-2" id="no3">ポラリエを使って星を点で撮影してみよう！</h2>
        <h3 class="indigo--text darken-4 text-h6 font-weight-bold my-8"><span class="yellow--text">★</span>ポラリエとは？</h3>
        <v-row>
          <v-col cols="12" sm="6">
            <p>
              ・星の動きを追いかける赤道儀の役割をもったカメラ用雲台<br />
              ・星を点で撮影できる<br />
              ・初めてでもセッティングがカンタン<br />
              ・小さくて軽いから、旅行やキャンプにも持って行ける♪
            </p>
          </v-col>
          <v-col>
            <p class="text-center">↓ポラリエの使い方を動画でチェック</p>
            <watchInVideo :src="'https://www.youtube.com/embed/y4WX6p2e-o8?rel=0'" :width="'100%'" :height="300" />
          </v-col>
        </v-row>

        <v-container class="my-6">
          <p><span class="yellow--text">★</span>オリオン座を通常撮影とポラリエで追尾撮影した比較画像です</p>
          <v-row>
            <v-col cols="12" sm="6">
              <p>
                ■通常(固定）撮影<br />
                <a href="/ec/images2/special/camera/polarie/tuibi3-no.jpg"> <v-img src="/ec/images2/special/camera/polarie/tuibi3-no.jpg" /></a><br />
                焦点距離50mm/120秒露光
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <p>
                ■ポラリエ使用(追尾）撮影<br />
                <a href="/ec/images2/special/camera/polarie/tuibi3.jpg"> <v-img src="/ec/images2/special/camera/polarie/tuibi3.jpg" /></a><br />
                焦点距離50mm/120秒露光
              </p>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="mb-12">
          <p><span class="yellow--text">★</span>ポラリエ使用の星空写真ギャラリー</p>
          <v-row class="ba-gr">
            <v-col cols="12" sm="3" v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
              <img :src="src" width="100%" />
              <p class="text-right mb-0 pb-0">
                <v-icon>fas fa-search-plus</v-icon>
              </p>
            </v-col>
          </v-row>
          <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
        </v-container>
        <p class="text-right">photo by.成澤広幸</p>

        <!--↓機材に合わせて選べるポラリエ-->
        <h3 class="indigo--text darken-4 text-h6 font-weight-bold my-8"><span class="yellow--text">★</span>機材に合わせて選べるポラリエ</h3>
        <v-container class="mb-6">
          <v-row>
            <v-col cols="12" sm="6" md="3" v-for="porarier in porarierList" :key="porarier">
              <p>{{ porarier.itemName }}</p>
              <v-img :src="porarier.img" :max-width="$vuetify.breakpoint.mdAndUp ? '100%' : '80%'" height="auto"></v-img>
              <p class="including-line-breaks">{{ porarier.text }}</p>
              <v-btn block class="bg-btn py-6 text-subtitle-1" :href="porarier.href">
                商品ページへ <v-icon small class="ml-2">fas fa-angle-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!--↓極軸合わせが楽になる♪-->
        <v-card class="linkn pa-4 mb-12">
          <v-card-title class="pa-0 mb-2 text-subtitle-1"><span class="yellow--text">★</span>極軸合わせが楽になる♪ ポーラメーター</v-card-title>
          <v-card-text
            ><div class="text--primary">
              星空雲台ポラリエのオプションパーツ「ポーラメーター」の使い方動画です。<br />
              北極星の位置がわからない・北極星が見えないときにもポーラメーターなら簡単に極軸合わせができます♪
            </div></v-card-text
          >
          <v-row>
            <v-col cols="12" sm="6">
              <p class="text-center">↓星景写真を撮ろう！ポーラメーターの使い方①</p>
              <watchInVideo :src="'https://www.youtube.com/embed/08MhxPHSj1g?rel=0'" :height="250" :sm="12" />
            </v-col>
            <v-col cols="12" sm="6">
              <p class="text-center">↓星景写真を撮ろう！ポーラメーターの使い方②</p>
              <watchInVideo :src="'https://www.youtube.com/embed/Uk81uDtIPis?rel=0'" :height="250" :sm="12" />
            </v-col>
          </v-row>
        </v-card>

        <!--↓星空撮影ができる♪-->
        <h2 class="text-left ntitle white--text pa-2" id="no4">星空撮影ができる おすすめカメラ</h2>
        <p class="my-6">
          星の軌跡を表現する方法は、長時間露光によるものが一般的でしたが、近年は「比較明合成」という撮影方法で表現するのが主流となっております。<br />
          通常は、インターバル撮影した画像を「パソコン用フリーソフトで合成」するやり方ですが、実はパソコンがなくても、星の軌跡を表現できるカメラがあるんです！<br />
          オリンパス製カメラに搭載されている「ライブコンポジット」機能。<br />
          リコーペンタックス製カメラに搭載されている「インターバル撮影」機能。<br />
          ソニー製カメラで使用可能なアプリ「<a
            href="https://www.playmemoriescameraapps.com/portal/usbdetail.php?eid=IS9104-NPIA09014_00-000012"
            target="_blank"
            rel="noopener"
            class="indigo--text"
            >スタートレイル（有料）</a
          >」。<br />
          これらのカメラを使えば、カメラ内で簡単に星の軌跡を表現することができます。
        </p>

        <h3 class="indigo--text"><span class="yellow--text">★</span>星空撮影機能付きデジカメ＆アプリ対応デジカメ</h3>
        <v-row class="my-8" justify="center">
          <v-col cols="10" sm="6" md="4" lg="2" v-for="recommendedCamera in recommendedCameraList" :key="recommendedCamera">
            <div class="d-flex flex-column justify-space-between align-center">
              <v-img :src="recommendedCamera.img" :max-width="$vuetify.breakpoint.mdAndUp ? '100%' : '40%'" height="auto"> </v-img>
            </div>
            <v-hover v-slot="{ hover }">
              <v-btn
                :elevation="hover ? 6 : 2"
                height="45px"
                block
                class="bg-btn py-2 text-subtitle-2 text-center including-line-breaks"
                :href="recommendedCamera.href"
              >
                {{ recommendedCamera.name }}
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>

        <h3 class="indigo--text mb-6"><span class="yellow--text">★</span>星の軌跡 星空写真 ギャラリー</h3>
        <v-container class="mb-12">
          <v-row>
            <v-col cols="12" sm="4" v-for="(src, index) in starTrailImages" :key="index" class="pic" @click="() => showImg(index)">
              <p>リコーGRにて撮影</p>
              <v-img :src="src" max-width="100%" height="auto" />
            </v-col>
          </v-row>
          <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
        </v-container>
        <p class="text-right mb-10">photo by.成澤広幸</p>

        <!--↓星空撮影におすすめのカメラレンズ-->
        <h2 class="text-left ntitle white--text pa-2" id="no5">星空撮影におすすめのカメラレンズ</h2>
        <h3 class="indigo--text my-6"><span class="yellow--text">★</span>星空撮影におすすめのカメラレンズをご紹介</h3>
        <v-container class="mb-6">
          <v-row justify="center">
            <v-col cols="12" sm="6" md="3" v-for="starrySkyShoot in starrySkyShootingList" :key="starrySkyShoot">
              <p>{{ starrySkyShoot.itemName }}</p>
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img :src="starrySkyShoot.img" :max-width="$vuetify.breakpoint.mdAndUp ? '100%' : '40%'"></v-img>
              </div>
              <v-hover v-slot="{ hover }">
                <v-btn :elevation="hover ? 6 : 2" block class="bg-btn py-6 text-subtitle-1" :href="starrySkyShoot.href">
                  {{ starrySkyShoot.btntxt }} <v-icon small class="ml-2">fas fa-angle-right</v-icon>
                </v-btn>
              </v-hover>
            </v-col>
          </v-row>
          <div class="pa-8">
            <v-btn elevation="4" block class="bg-btn py-6 text-subtitle-1" href="/ec/ct/C004">
              交換レンズ一覧<v-icon small class="ml-2">fas fa-angle-right</v-icon>
            </v-btn>
          </div>
          <h3 class="indigo--text"><span class="yellow--text">★</span>「焦点距離による写る範囲の違い」をまとめました</h3>
          <v-img src="/ec/images2/special/camera/polarie/img-focal-length-moto.jpg" max-width="100%" height="auto"></v-img>
        </v-container>

        <v-card class="linkn pa-4 mb-12">
          <v-card-title class="pa-0"><span class="yellow--text">★</span>ポラリエとカメラ用望遠レンズを使っての星空撮影・天体撮影</v-card-title>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-text
                ><div class="text--primary">
                  ポラリエとカメラ用望遠レンズを使っての星空撮影・天体撮影におすすめの商品をご紹介しています。<br />
                  ポータブル赤道儀「星空雲台ポラリエ」と「ポラリエ用ステップアップキット」などのカスタムパーツで、星空の望遠撮影にチャレンジしてみませんか？
                </div></v-card-text
              >
            </v-col>
            <v-col cols="12" sm="6">
              <a href="/special/sale-fair/camera/polarie/acc/">
                <v-img src="https://shopimg.kitamura.jp/images/banner/3691.jpg" max-width="100%" height="auto" @error="noimage" />
              </a>
              <p class="caption">ポラリエとカメラ用望遠レンズで星空・天体写真を撮ろう！</p>
            </v-col>
          </v-row>
        </v-card>

        <!--↓星空撮影におすすめのカメラ用品-->
        <h2 class="text-left ntitle white--text pa-2" id="no6">星空撮影におすすめのカメラレンズ</h2>
        <v-container class="my-6">
          <v-row>
            <v-col cols="6" sm="3" v-for="productDetail in productDetailList" :key="productDetail" class="text-center">
              <a :href="`/ec/pd/${productDetail.janCode}`">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img :src="productDetail.images[0].imagePath" max-width="50%" height="auto" />
                </div>
              </a>
              <p class="font-small blue--text mb-2 height-20">
                <a :href="`/ec/pd/${productDetail.janCode}`">{{ productDetail.itemName }}</a>
              </p>
              <p class="mt-2">
                価格:<span class="red--text font-small">{{ productDetail.price }}&nbsp;</span><span class="font-small">(円)</span>
              </p>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ポラリエを使った星空写真ギャラリー-->
        <h2 class="text-left ntitle white--text pa-2 my-4" id="no7">星空撮影におすすめのカメラレンズ</h2>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/nari03.jpg" width="80%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">「朝に消えゆく天の川銀河」</p>
              <p>
                カメラ：富士フイルム X-T2<br />
                レンズ：XF14mm f2.8 R<br />
                ISO感度：6400<br />
                絞り：f2.8<br />
                シャッタースピード：25秒露光<br />
                ホワイトバランス：カスタム<br />
                ポラリエ「星景撮影モード」で追尾撮影<br />
                Photoshop Lightroomで画像処理<br />
                撮影地：千葉県 大洗海岸<br />
                撮影：星空写真家 成澤広幸
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/uesugi.jpg" width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">「銀河」</p>
              <p>
                カメラ：Fujifilm X-T2<br />
                レンズ：XF14mm F2.8R<br />
                ISO感度：3200<br />
                絞り：f3.6<br />
                シャッタースピード：160秒露光<br />
                ホワイトバランス：オート<br />
                Vixen 星空雲台ポラリエ使用<br />
                撮影地：波照間島<br />
                撮影：上杉太郎 （カメラのキタムラ 船橋・薬円台店）
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/yorita.jpg" width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">「夏の天の川」</p>
              <p>
                カメラ：FUJIFILM X-T1 <br />
                レンズ：SAMYANG 12mm F2.0 CS<br />
                ISO感度：3200<br />
                絞り：f2.8<br />
                シャッタースピード：56秒露光<br />
                ホワイトバランス：蛍光灯<br />
                Vixen 星空雲台ポラリエ使用<br />
                撮影地：奈良県大台ケ原<br />
                撮影：依田裕行 （カメラのキタムラ なんばCITY店）
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/nari01.jpg" width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">「星降る高原」</p>
              <p>
                カメラ：Sony α7S<br />
                レンズ：Vario-Tessar T＊ FE 16-35mm F4 ZA OSS<br />
                ISO感度：6400<br />
                絞り：f4<br />
                シャッタースピード：50秒<br />
                ホワイトバランス：オート<br />
                Vixen 星空雲台ポラリエ使用<br />
                撮影地：群馬県 榛名高原<br />
                撮影：星空写真家 成澤広幸
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/nari02.jpg" width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">「沈みゆくはくちょう座」</p>
              <p>
                カメラ：オリンパス E-M10<br />
                レンズ：M.ZUIKO DIGITAL ED 8mm F1.8 Fisheye PRO<br />
                ISO感度：2500<br />
                絞り：f1.8<br />
                シャッタースピード：30秒<br />
                ホワイトバランス：カスタム<br />
                Vixen 星空雲台ポラリエ使用<br />
                撮影地：愛知県 茶臼山高原<br />
                撮影：星空写真家 成澤広幸
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/nakata.jpg" width="80%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">「オリオン座と流れ星」</p>
              <p>
                カメラ：Canon EOS60D<br />
                レンズ：SIGMA 15㎜ f2.8 EX DG FISHEYE<br />
                ISO：1600<br />
                絞り：f2.8<br />
                シャッタースピード：40秒露光<br />
                ホワイトバランス：電球<br />
                Vixen 星空雲台ポラリエ使用<br />
                撮影地：茨城県行方市<br />
                撮影：中田睦子（カメラのキタムラ 下館店）
              </p>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="12" sm="4">
              <v-hover v-slot="{ hover }">
                <a href="https://www.nao.ac.jp/astro/sky/">
                  <v-btn :elevation="hover ? 6 : 2" block height="45px" color="#57B9BD" class="white--text font-weight-bold"
                    >国立天文台 ほしぞら情報をチェック<v-icon>fas fa-external-link-alt</v-icon>
                  </v-btn>
                </a>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <!--↓星空写真をプリントして楽しむ-->
        <h2 class="text-left ntitle white--text pa-2 my-4">
          星空写真をプリントして楽しむ<span class="text-subtitle-2 font-weight-bold">撮影をした星空写真を、実際に印刷してみましょう</span>
        </h2>
        <h3><span class="yellow--text">★</span>星空の写真をカメラのキタムラでプリント</h3>
        <v-container>
          <v-row class="my-8">
            <v-col cols="12" sm="8" class="line-height">
              <p>
                撮影した星景写真を、美しくプリントしてみましょう。<br />
                星空・星景写真なら光の反射率が高い「クリスタルペーパー」がおすすめ！ 鏡に映したような光沢感が、星の美しさと鮮やかさを際立たせます。<br />
                フレームに入れて玄関やリビングに飾れば、特別なインテリアに早変わり。
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/camera/polarie/digitalcrystal.jpg" width="100%" height="auto"></v-img>
              <p>詳細・ご注文はこちら ↓</p>
              <v-btn elevation="4" block class="py-6 text-subtitle-1" href="https://www.kitamura-print.com/print/digitalcrystal/">
                クリスタルプリント<v-icon>fas fa-external-link-alt</v-icon>
              </v-btn>
              <p class="caption">※プリントサービスのページへ移動します</p>
            </v-col>
          </v-row>
          <h3><span class="yellow--text">★</span>ご自宅の家庭用プリンターで印刷してみましょう</h3>
          <p>家庭用プリンターでも、印刷のポイントをおさえることで、魅力的な作品に仕上がります。</p>
          <v-row>
            <v-col cols="12" sm="9" class="line-height">
              <p class="my-2">
                <span class="red--text">★家庭用プリンターで印刷するときのポイント★</span><br />
                ・用紙は「光沢・半光沢」となっているものを選びましょう。<br />
                星の輝きを表現するためには、発色性のいい紙を選ぶことが重要です。
              </p>
              <p class="my-2">
                ・印刷の際は、コントラストを少し高めに設定しましょう。<br />
                特に天の川が写った写真を印刷する際には、色の濃い部分と薄い部分のコントラストを高めに設定することで、天の川独特の濃淡をはっきりと表現できます。
              </p>
            </v-col>
            <v-col cols="12" sm="3">
              <a href="/ec/ct/C024002001">
                <div class="d-flex flex-column justify-space-between align-center">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/7bf/e63/b83/ffc/be6/e34/be8/f9e/10a/a78/61n/afh/3nd/a/M.jpg"
                    :max-width="$vuetify.breakpoint.mdAndUp ? '100%' : '60%'"
                    height="auto"
                  ></v-img>
                </div>
              </a>
              <v-btn elevation="4" block class="bg-btn py-6 text-subtitle-1" href="/ec/ct/C024002001">
                光沢紙一覧<v-icon>fas fa-external-link-alt</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <subText :textItem="'関連おすすめ特集・プリントサービス'" id="images" />
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
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import TableOfContentsNavi from '@/components/common/special/table-of-contents-navi.vue';

export default Vue.extend({
  name: 'polarie',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    tableOfContentsNavi: TableOfContentsNavi
  },
  setup: (props, context) => {
    document.title = '星空を撮影しよう！星空撮影入門 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '星空撮影の方法、星空撮影に便利なアイテム、星空撮影におすすめのカメラ・レンズをご紹介。星景写真ギャラリーもお楽しみください♪ | 星空を撮影しよう！星空撮影入門')

    const state = reactive({
      naviList: [
        { naviItem: '星空撮影に最低限必要なもの ', href: '#no1' },
        { naviItem: 'ポラリエで星空撮影 ', href: '#no3' },
        { naviItem: '星空撮影おすすめカメラ ', href: '#no4' },
        { naviItem: '星空撮影おすすめレンズ ', href: '#no5' },
        { naviItem: '星空撮影おすすめカメラ用品 ', href: '#no6' },
        { naviItem: '星空写真ギャラリー ', href: '#no7' }
      ],
      toyoMoistureProofList: [
        { text: '東洋リビング ED-55CAT(BW) 防湿庫 ブラック＆ホワイト', href: '/ec/pd/4945931015050' },
        { text: '東洋リビング ED-80CATP2(B) オートクリーンドライ防湿庫', href: '/ec/pd/4945931019010' },
        { text: '東洋リビング ED-120CATP2(B) オートクリーンドライ防湿庫', href: '/ec/pd/4945931019027' },
        { text: '東洋リビング ED-165CATP2（B） オートクリーンドライ防湿庫', href: '/ec/pd/4945931019041' }
      ],
      toriMoistureProofList: [
        { text: 'トーリ・ハン NT-33-MIII ドライ・キャビ', href: '/ec/pd/4930381440088' },
        { text: 'トーリ・ハン NT-83-MIII ドライ・キャビ', href: '/ec/pd/4930381440095' },
        { text: 'トーリ・ハン NT-103-MIII ドライ・キャビ', href: '/ec/pd/4930381440101' },
        { text: 'トーリ・ハン PH-110 ドライ・キャビ', href: '/ec/pd/4930381440033' }
      ],
      hakubaMoistureProofList: [
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 25L', href: '/ec/pd/4977187403503' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 40L', href: '/ec/pd/4977187403510' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 60L', href: '/ec/pd/4977187403527' },
        { text: 'ハクバ KED-25 電子制御式防湿庫 E-ドライボックス 100L', href: '/ec/pd/4977187403534' }
      ],
      storageCapacityList: [
        { amount: '50L以下', type: '（小型）', criterion: '一眼カメラが4～5台、レンズ数本が目安。\nギナーさん向け' },
        { amount: '550L～120L', type: '（中型）', criterion: '一眼カメラが10～20数台、比較的多くのレンズやアクセサリーをお持ちの人向け' },
        { amount: '140L以上', type: '（大型）', criterion: '一眼カメラが30～80台、横型防湿庫なら大口径のレンズも、らくらく収納可能' }
      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/hosizora/',
          img: 'https://shopimg.kitamura.jp/images/banner/5032.png',
          alt: '星空総合ページ'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/astronomical/',
          img: 'https://shopimg.kitamura.jp/images/banner/1327.gif',
          alt: '天体イベントスケジュール'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/polarie/acc/',
          img: 'https://shop.kitamura.jp/images/banner/3588.gif',
          alt: 'ポラリエとカメラ用望遠レンズで星空・天体撮影'
        },
        {
          href: 'https://www.vixen.co.jp/app/nebulabook/',
          img: 'https://shopimg.kitamura.jp/images/banner/3439.gif',
          alt: '星雲・星団・銀河等の天体撮影を支援するアプリ「Nebula Book」'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/astronomical/telescope/',
          img: 'https://shopimg.kitamura.jp/images/banner/1698.jpg',
          alt: '初心者におすすめ 天体望遠鏡の選び方'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/astronomical/telescope-feature/',
          img: 'https://shopimg.kitamura.jp/images/banner/2381.jpg',
          alt: '本格的な天体観測・天体撮影に 天体望遠鏡特集'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/astronomical/moonlook/',
          img: 'https://shopimg.kitamura.jp/images/banner/1306.jpg',
          alt: '天体観測 入門！月を見よう'
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/general/summerhomework/moon/',
          img: 'https://shopimg.kitamura.jp/images/banner/1309.gif',
          alt: '夏休み自由研究特集 【理科】天体観測 ~ 月の写真を撮ってみよう '
        },
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/general/photocon-learn/',
          img: 'https://shopimg.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '"超高画質プリント'
        }
      ],
      visible: false,
      index: 0, // default: 0
      imgs: [
        '/ec/images2/special/camera/polarie/bn-03-1.jpg',
        '/ec/images2/special/camera/polarie/bn-03-2.jpg',
        '/ec/images2/special/camera/polarie/reiimg02.jpg',
        '/ec/images2/special/camera/polarie/reiimg01-s.jpg'
      ],
      porarierList: [
        {
          itemName: 'ビクセン ポータブル赤道儀 星空雲台 ポラリエ',
          img: '/ec/images2/special/camera/polarie/posd.webp',
          text: '耐荷重：2kg\n ミラーレス一眼、コンパクトデジカメでの撮影におすすめ',
          src: '/ec/pd/4955295355051/'
        },
        {
          itemName: 'ポラリエ＆ポーラメーターセット',
          img: 'https://shopimg.kitamura.jp/images/pd/c34/cb7/622/c36/9c4/396/e85/5c1/ea6/5e0/fdz/t9s/zfw/t/M.jpg',
          text: '耐荷重：2kg\n 星空撮影初心者さんには設定が簡単なポーラメーターセット',
          src: '/ec/pd/2239530000053/'
        },

        {
          itemName: 'ポラリエ フルサイズ一眼対応セット',
          img: 'https://shopimg.kitamura.jp/images/pd/97a/a45/585/916/f32/721/17a/50a/b76/f75/32m/9eb/am9/v/M.jpg',
          text: '耐荷重：6.5kg\n フルサイズ一眼レフカメラ、大口径レンズにおすすめ',
          src: '/ec/pd/2239530004822/'
        },

        {
          itemName: 'フルサイズ一眼対応セット ポーラメーター付き',
          img: 'https://shopimg.kitamura.jp/images/pd/b8f/d0d/fa5/0ff/b29/e6d/df8/eb4/2d9/524/f5a/rjl/oeb/9/M.jpg',
          text: '耐荷重：6.5kg\n ポーラメーター付き！ フルサイズ一眼レフ、大口径レンズにおすすめ',
          src: '/ec/pd/2239530004914/'
        }
      ],
      recommendedCameraList: [
        {
          name: 'オリンパス\nコンパクトカメラ',
          img: 'https://shopimg.kitamura.jp/images/pd/168/80b/fba/c3d/4b0/c3a/4e2/d34/975/ece/99e/eqb/kym/m/TN.jpg',
          href: 'https://shop.kitamura.jp/pd/list.html?path=%E3%82%B3%E3%83%B3%E3%83%91%E3%82%AF%E3%83%88%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AB%E3%83%A1%E3%83%A9%3A%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%A7%E9%81%B8%E3%81%B6%3A%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%91%E3%82%B9&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          name: 'オリンパス\nミラーレス一眼',
          img: 'https://shopimg.kitamura.jp/images/pd/227/6c7/30d/011/e11/71e/e74/0ff/509/05d/d6s/9f6/3yz/m/TN.jpg',
          href: 'https://shop.kitamura.jp/pd/list.html?path=%E3%83%9F%E3%83%A9%E3%83%BC%E3%83%AC%E3%82%B9%E4%B8%80%E7%9C%BC%3A%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%A7%E9%81%B8%E3%81%B6%3A%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%91%E3%82%B9&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          name: 'ペンタックス\n一眼レフ',
          img: 'https://shopimg.kitamura.jp/images/pd/a6f/e12/d9b/c41/929/ab7/9c0/2b5/34c/a6b/29u/j8k/rdj/x/TN.jpg',
          href: 'https://shop.kitamura.jp/pd/list.html?path=%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E4%B8%80%E7%9C%BC%E3%83%AC%E3%83%95%3A%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC%E3%81%A7%E9%81%B8%E3%81%B6%3A%E3%83%9A%E3%83%B3%E3%82%BF%E3%83%83%E3%82%AF%E3%82%B9&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F'
        },
        {
          name: 'ソニー アプリ\n対応デジカメ',
          img: 'https://shopimg.kitamura.jp/images/pd/639/964/8bd/3c8/69a/d84/149/47a/f71/50f/d33/e12/f2g/7/TN.jpg',
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/polarie/startrail/'
        },
        {
          name: 'リコー GR III ',
          img: 'https://shopimg.kitamura.jp/images/pd/ed8/0f4/5f1/a63/11b/eea/2b5/46f/d9b/0c6/c60/mzr/7fl/q/TN.jpg',
          href: '/ec/pd/4549212300202/'
        },
        {
          name: 'リコー RICOH\nTHETA SC2',
          img: 'https://shopimg.kitamura.jp/images/pd/115/f52/39c/aa6/5ea/b53/84d/85c/926/c42/a9v/gvs/a4t/7/TN.jpg',
          href: '/ec/pd/4961311947308/'
        }
      ],
      starTrailImages: [
        '/ec/images2/special/camera/polarie/bn-02-1.jpg',
        '/ec/images2/special/camera/polarie/bn-02-3.jpg',
        '/ec/images2/special/camera/polarie/bn-02-2.jpg'
      ],
      // 星空撮影におすすめ
      starrySkyShootingList: [
        {
          itemName: '星景写真を撮るには広角レンズがおすすめ',
          img: 'https://shopimg.kitamura.jp/images/pd/8f2/7bb/a44/115/959/13d/cf8/962/54b/cdc/31m/kck/b5j/g/TN.jpg',
          btntxt: '広角レンズ',
          src: '/ec/pd/list.html?n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&s4%5B%5D=%E5%BA%83%E8%A7%92%E3%83%AC%E3%83%B3%E3%82%BA&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA'
        },
        {
          itemName: '広い星空を一気に撮れるフィッシュアイレンズ',
          img: 'https://shopimg.kitamura.jp/images/pd/a80/f3f/81c/d40/48c/298/187/3dd/7d1/349/8bq/vu1/6oo/j/TN.jpg',
          btntxt: 'フィッシュアイレンズ',
          src: '/ec/pd/list.html?limit=100&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&index=&searchbox=1&q=FISH&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA'
        },

        {
          itemName: '星景も星座も撮れる便利な広角ズームレンズ',
          img: 'https://shopimg.kitamura.jp/images/pd/33b/bc5/b9d/575/36d/3f9/294/d0b/9d9/08c/94g/dvb/jdc/5/TN.jpg',
          btntxt: '広角ズームレンズ',
          src: '/ec/pd/list.html?limit=100&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&s4[]=%E5%BA%83%E8%A7%92%E3%82%BA%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%B3%E3%82%BA'
        },

        {
          itemName: '星景も星座も撮れる便利な標準ズームレンズ',
          img: 'https://shopimg.kitamura.jp/images/pd/4aa/7c9/9a0/c1c/d7a/9e7/014/314/053/e32/641/xrk/94c/u/TN.jpg',
          btntxt: '標準ズームレンズ',
          src: '/ec/pd/list.html?limit=100&n20c=%E5%AE%8C%E4%BA%86%E5%95%86%E5%93%81%E3%81%AF%E9%99%A4%E3%81%8F&path=%E4%BA%A4%E6%8F%9B%E3%83%AC%E3%83%B3%E3%82%BA&s4[]=%E6%A8%99%E6%BA%96%E3%82%BA%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%B3%E3%82%BA'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '星空総合ページ',
          linkUrl: 'https://shop.kitamura.jp/special/sale-fair/camera/hosizora/',
          disabled: false
        },
        {
          path: '星空を撮影しよう！ 星空撮影入門特集',
          linkUrl: 'https://shop.kitamura.jp/ec/special/camera/polarie/',
          disabled: false
        }
      ],
      // 取得するJancode
      productJanCodeList: [
        '4955295355051',
        '2239530000053',
        '2239530004822',
        '2239530004822',
        '4955295355112',
        '4955295355341',
        '4955295355280',
        '4955295355198',
        '4955295265022',
        '4955295355235',
        '4955295355235',
        '4955295710898',
        '4955295354184',
        '4955295354313'
      ],
      // 結果格納用
      productDetailList: [] as Array<ProductDetail>
    });
    /**
     * 商品詳細を取得する
     */
    const fetchProduct = async () => {
      try {
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        console.log(productListResult);
        state.productDetailList = productListResult.items;
      } catch (error) {
        state.productDetailList = [] as Array<ProductDetail>;
      }
    };

    const showImg = (index: number) => {
      state.index = index;
      state.visible = true;
    }

    const handleHide = () => {
      state.visible = false;
    }

    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      showImg,
      handleHide
    };
  }
});
</script>
<style lang="scss" scoped>
.topimg {
  background-image: url(/ec/images2/special/camera/polarie/bn-000.jpg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 0px -140px;
  display: block;
  padding: 40px 0 70px 0;
}

@media screen and (max-width: 463px) {
  .topimg {
    background-image: url(/ec/images2/special/camera/polarie/bn-000.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0 top;
    display: block;
    padding: 30px 10px;
    float: left;
  }
}
.txkg-01 {
  text-shadow: 2px 2px 0 #461360;
}
.bk-kn {
  background-color: #09093f;
}
.lin {
  border: #f1ff63 1px dotted;
}
h2.ntitle {
  background: rgb(6, 103, 125);
  background: linear-gradient(90deg, rgba(6, 103, 125, 1) 0%, rgba(7, 146, 147, 1) 100%);
}

.linkn {
  border: #09093f 1px dotted;
}
</style>