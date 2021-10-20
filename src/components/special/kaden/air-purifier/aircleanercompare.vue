<template>
  <div class="aircleaner-compare">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <!-- ↓ 看板：画像の読み込み -->
      <p class="font-small">人気のおすすめ加湿空気清浄機 シャープ・ダイキン製品を比較！</p>
      <h1>
        <img
          class="mb-1 banner-img pc"
          src="/ec/images2/special/kaden/air-purifier/aircleanercompare/title-bg.jpg"
          alt="ここが違う！加湿空気清浄機 最新モデルの選び方"
        />
        <img
          class="mb-1 banner-img sp"
          src="/ec/images2/special/kaden/air-purifier/aircleanercompare/3427.png"
          alt="ここが違う！加湿空気清浄機 最新モデルの選び方"
        />
      </h1>
      <!-- ↑ 看板：画像の読み込み -->
      <!--↓-->
      <h2 class="bg-blu rounded-lg subtitle-1 pa-2">空気清浄機はどう選べばいいの？ 違いを教えて！</h2>
      <v-container>
        <v-row>
          <v-col class="float-left p-3" sm="6" xs="12">
            <p>
              手軽にお部屋の空気をきれいにしてくれる空気清浄機は近年人気の家電のひとつ。気になる花粉やウイルスの除菌、ハウスダスト・PM2.5の除去やタバコのにおいを消臭したいと考える方にも魅力の多い家電です。しかし、人気メーカーの空気清浄機はそれぞれ一定の性能があり、機能表を見ても違いがパッとわかりにくいのがよくある悩み。<br />
              そこでキタムラでは、「どのメーカーの空気清浄機を選んだらいいの？」という声にお応えして、<span class="text-decoration-underline"
                >1番人気のシャープの空気清浄機と、ダイキンの空気清浄機は何が違うのか？</span
              ><span class="text-decoration-underline">どちらを選べば良いのか？</span>比較しながらおすすめ機種を紹介していきたいと思います。
            </p>
          </v-col>
          <v-col class="float-left p-3" sm="6" xs="12">
            <v-img contain max-height="140" alt="何が違うの？" src="/ec/images2/special/kaden/air-purifier/aircleanercompare/air-purifier-03.jpg"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!--↓比較内容-->
      <h2 class="bg-blu rounded-lg pa-2"><v-icon class="white--text">fas fa-comment-dots fa-fw</v-icon>比較でわかる！ 人気の空気清浄機</h2>
      <p>
        空気清浄機を選ぶとき、気になるポイントは人によってさまざま。使用するお部屋の雰囲気や用途によっても、最適な機種は異なります。そこで、キタムラではデザインや機能・性能、お手入れ方法、価格、特徴の５つに絞って、徹底比較を実施しました。
      </p>

      <v-container>
        <v-row>
          <v-card class="rounded d-block" tile width="100%">
            <v-toolbar color="teal darken-1" dark>
              <v-toolbar-title>比較内容５項目</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" v-scroll-to="item.link">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-row>
      </v-container>
      <!--↑比較内容-->

      <!--↓デザイン比較-->
      <div id="hkk1" class="h-1 mt-5 mb-0"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h3 class="mb-2 ao-mds text-h5 font-weight-bold">デザイン比較 空気清浄機</h3>
            <p>
              空気清浄機はこの数年で大きくデザイン性がアップし、人気のシャープとダイキン製品は、どちらも直線的でモダンなデザインになっています。なかでもスリムデザインの空気清浄機は、設置面積が少ない寝室や子供部屋、ワンルームなどで活躍します。両メーカーのデザイン面で人気の空気清浄機をピックアップしました。
            </p>

            <v-col cols="12" sm="12" md="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon>fas fa-edit fa-fw</v-icon> デザイン比較</h3>
                <v-col cols="12" sm="6" class="float-left mb-2">
                  <router-link :to="`/ec/pd/${mainProductList[0].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[0].images[0].imagePath" /></p>
                    <h4 class="text-body-2 text-left name2">{{ mainProductList[0].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[0].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[0].price)) }}</span>
                  </p>
                  <p class="text-body-2">
                    本体サイズ(mm)<br />
                    幅.399×奥行230×高さ613<br />
                    重量・電源コード長さ<br />
                    約7.5kg / 1.8m
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[0].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" class="float-left">
                  <router-link :to="`/ec/pd/${mainProductList[1].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[1].images[0].imagePath" /></p>
                    <h4 class="body-2 text-left name2">{{ mainProductList[1].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[1].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[1].price)) }}</span>
                  </p>
                  <p class="text-body-2">
                    本体サイズ(mm)<br />
                    幅270×奥行270×高さ500<br />
                    重量<br />
                    約6.8kg
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[1].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon>fas fa-edit fa-fw</v-icon>スリムデザイン比較</h3>
                <v-col cols="12" sm="6" class="float-left mb-2">
                  <router-link :to="`/ec/pd/${mainProductList[2].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[2].images[0].imagePath" /></p>
                    <h4 class="text-body-2 text-left name2">{{ mainProductList[2].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[2].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[2].price)) }}</span>
                  </p>
                  <p class="text-body-2">
                    本体サイズ(mm)<br />
                    幅345×奥行262×高さ631<br />
                    重量・電源コード長さ<br />
                    約8.9kg / 1.8m
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[2].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" class="float-left">
                  <router-link :to="`/ec/pd/${mainProductList[1].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[3].images[0].imagePath" /></p>
                    <h4 class="text-body-2 text-left name2">{{ mainProductList[3].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[3].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[3].price)) }}</span>
                  </p>
                  <p class="text-body-2">
                    本体サイズ(mm)<br />
                    高さ700×幅270×奥行270<br />
                    重量<br />
                    9.5kg（水無し）
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[3].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑デザイン比較-->
      <!--↓フィルター・加湿機能-->
      <div id="hkk2" class="h-1 mt-5 mb-0"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h3 class="mb-2 ao-mds text-h5 font-weight-bold">フィルター・加湿機能で比較 空気清浄機</h3>
            <p>
              空気清浄機は内部の構造にも差があります。空気を吸い込んだ先で濾過するフィルターにはいくつかの種類があり、シャープとダイキンでは順番が違います。家電量販店では詳しく確認しにくい、構造とフィルターの役割について見ていきましょう。
            </p>

            <h3 class="text-h6 font-weight-bold"><v-icon>fas fa-arrow-alt-circle-right fa-fw</v-icon>フィルター 比較</h3>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="red--text text--darken-2">fas fa-edit fa-fw</v-icon>シャープ 空気清浄機</h3>
                <ol class="text-h6 ma-3">
                  <li>空気<br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>プレフィルター<br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>脱臭フィルター<br /><span class="text-body-2">（活性炭フィルター使用）</span><br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>集塵フィルター<br /><span class="text-body-2">（静電HEPAフィルター使用）</span><br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>空気</li>
                </ol>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="blue--text text--darken-2">fas fa-edit fa-fw</v-icon>ダイキン 空気清浄機</h3>
                <ol class="text-h6 ma-3">
                  <li>空気<br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>プレフィルター<br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>集塵フィルター<br /><span class="text-body-2">（静電HEPAフィルター使用）</span><br /><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>脱臭フィルター<br /><br /><span class="text-body-2"></span><i class="fas fa-arrow-down fa-fw"></i></li>
                  <li>空気</li>
                </ol>
              </v-card>
            </v-col>

            <h4 class="text-h6"><i class="fas fa-check fa-fw red--text"></i>集塵フィルター</h4>
            <p>どちらも<span class="text-decoration-underline">静電HEPAフィルター</span>を使っています。</p>
            <h4 class="text-h6"><i class="fas fa-check fa-fw red--text"></i>脱臭フィルター</h4>
            <p>
              ここには大きな違いがあります。<br />
              シャープは<span class="text-decoration-underline">活性炭を使った脱臭フィルター</span
              >を使っています。活性炭フィルターについたニオイ成分を、定期的に洗う必要があります。<br /><br />
              ダイキンは<span class="text-decoration-underline">『<a href="#strm">ストリーマ</a>』でニオイそのものを分解</span
              >しているので、脱臭フィルターのお手入れも交換もありません。
            </p>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <h5 class="text-h6" id="strm"><i class="fas fa-bolt fa-fw blue--text text--darken-2"></i>ダイキンのストリーマとは？</h5>
              <p>
                吸い込んだ空気にストリーマが高速電子を放出して、カビ菌やアレル物質、ディーゼル粉塵やシックハウス症候群の原因になる<span
                  class="text-decoration-underline"
                  >ホルムアルデヒドなどを分解</span
                >します。<br />
                毎年悩ましい花粉に関しても、ストリーマなら吸い込んだ花粉の表皮だけでなく芯まで分解します。都会ではディーゼル粉塵をまとって凶悪化した花粉（アジュバント花粉）が多く飛散しますが、これらを分解できるのがダイキンの強みです。
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-img
                src="/ec/images2/special/kaden/air-purifier/aircleanercompare/air-purifier-01.jpg"
                alt="ストリーマなら花粉を芯まで分解 スギ花粉は2層構造を破壊することが必要"
                class="banner-img"
              ></v-img>
            </v-col>
            <h3 class="text-h6 font-weight-bold cl"><v-icon>fas fa-arrow-alt-circle-right fa-fw</v-icon>加湿の仕組み 比較</h3>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="red--text text--darken-2">fas fa-edit fa-fw</v-icon>シャープ 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li><i class="fas fa-check fa-fw red--text"></i>加湿は気化式</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>加湿トレーの水にフィルターを浸けて水を吸い上げます</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>銀イオンカートリッジでタンク内の水を除菌</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>銀イオンユニットの交換時期目安／1年</li>
                </ul>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="blue--text text--darken-2">fas fa-edit fa-fw</v-icon>ダイキン 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li><i class="fas fa-check fa-fw red--text"></i>加湿は気化式</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>吹出口の温度低下が少ない</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>直接水にフィルターは浸けずに必要分を使う水車方式</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>ストリーマを照射し、タンク内の水を除菌</li>
                  <li><i class="fas fa-check fa-fw red--text"></i>銀イオンユニットの交換／不要</li>
                </ul>
              </v-card>
            </v-col>
            <p>
              シャープ、ダイキンとも、同じ<span class="text-decoration-underline">気化式の加湿機能</span>です。<br /><br />
              シャープ、ダイキン、それぞれ加湿トレーの水のぬめりや水垢を防ぐために、銀イオンを発生させるものがついています。<br /><br />
              ダイキンの水車方式は、余分に水に触れていることが少なく、さらに<span class="text-decoration-underline"
                >加湿する水にもストリーマを照射し、除菌しているので安心</span
              >です。<br />
              また、ダイキンの加湿機能は、加湿空気清浄運転時に風量が落ちず、吹出口の温度低下が少ないのも特徴です。
            </p>
            <!--↑フィルター・加湿機能-->
            <!--↓お手入れ-->
            <div id="hkk3" class="h-1 mt-5 mb-0"></div>
            <h3 class="mb-2 ao-mds text-h5 font-weight-bold">空気清浄機のお手入れ方法 比較</h3>
            <p>
              空気清浄機のお手入れは清浄機能をキープするためにも必須ですが、なるべく簡単に済ませたいですね。
              メンテナンスのしやすさから、シャープとダイキンの空気清浄機を比較しました。
            </p>

            <h3 class="text-h6 font-weight-bold cl"><v-icon>fas fa-arrow-alt-circle-right fa-fw</v-icon>プレフィルター、脱臭フィルターのお手入れ方法 比較</h3>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="red--text text--darken-2">fas fa-edit fa-fw</v-icon>シャープ 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li><i class="fas fa-check fa-fw red--text"></i>背面から掃除機で吸うだけ<br />パーツの取り外しは不要</li>
                </ul>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="blue--text text--darken-2">fas fa-edit fa-fw</v-icon>ダイキン 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li>
                    <i class="fas fa-check fa-fw red--text"></i>前面のパネルを開けてフィルターを掃除<br />
                    ※MCK70Uの場合は電機集塵周りの清掃も必要
                  </li>
                </ul>
              </v-card>
            </v-col>
            <p>
              プレフィルターのお掃除は、シャープの方が簡単です。<br />
              ダイキンは、脱臭フィルターのお手入れ・交換がありません。
            </p>

            <h3 class="text-h6 font-weight-bold cl"><v-icon>fas fa-arrow-alt-circle-right fa-fw</v-icon>加湿トレー、加湿フィルターのお手入れ方法 比較</h3>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="red--text text--darken-2">fas fa-edit fa-fw</v-icon>シャープ 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li><i class="fas fa-check fa-fw red--text"></i>加湿を利用するシーズンはこまめにお手入れが必要</li>
                </ul>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="blue--text text--darken-2">fas fa-edit fa-fw</v-icon>ダイキン 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li><i class="fas fa-check fa-fw red--text"></i>ストリーマのおかげで、シャープよりお手入れ頻度は低め</li>
                </ul>
              </v-card>
            </v-col>
            <p>加湿フィルターは、ダイキンの方がお手入れが簡単です。</p>
          </v-col>
        </v-row>
      </v-container>
      <!--↑お手入れ-->

      <!--↓価格コスト-->
      <div id="hkk4" class="h-1 mt-5 mb-0"></div>
      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <h3 class="mb-2 ao-mds text-h5 font-weight-bold">価格・ランニングコストで比較 空気清浄機</h3>
            <p>
              見落としがちなポイントですが、空気清浄機は本体価格だけでなく、パーツやオプションの費用も検討しておく必要があります。<br />
              ランニングコストを含めた総合的なコストパフォーマンスについて、あらかじめチェックしておきましょう。
            </p>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="red--text text--darken-2">fas fa-edit fa-fw</v-icon>シャープ 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li><i class="fas fa-check fa-fw red--text"></i> 同クラスの機種の<span class="text-decoration-underline">本体価格がお求めやすい</span></li>
                  <li>
                    <i class="fas fa-check fa-fw red--text"></i> プラズマクラスター25000 高濃度の空気清浄機は、<span class="text-decoration-underline"
                      >2年に1回</span
                    >プラズマクラスター発生ユニットの交換が必要
                  </li>
                  <li>
                    <i class="fas fa-check fa-fw red--text"></i> 加湿タンクの銀イオン発生ユニットは、<span class="text-decoration-underline"
                      >1年に1回の交換が必要</span
                    >です
                  </li>
                </ul>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="blue--text text--darken-2">fas fa-edit fa-fw</v-icon>ダイキン 空気清浄機</h3>
                <ul class="pa-0 ma-3 text-body-1">
                  <li>
                    <i class="fas fa-check fa-fw red--text"></i> 何年使うかによりますが、<span class="text-decoration-underline"
                      >後々かかるランニングコストは低い</span
                    >です
                  </li>
                  <li>
                    <i class="fas fa-check fa-fw red--text"></i> ダイキン空気清浄機には<span class="text-decoration-underline"
                      >キャスターが付属しておらず別売り</span
                    >です
                  </li>
                </ul>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑価格コスト-->

      <!--↓機種特有-->
      <div id="hkk5" class="h-1 mt-5 mb-0"></div>
      <h3 class="mb-2 ao-mds text-h5 font-weight-bold">機種特有の特徴・機能を比較 空気清浄機</h3>

      <v-container>
        <v-row>
          <v-col class="mb-2" cols="12">
            <v-col cols="12" sm="12" md="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="red--text text--darken-2">fas fa-edit fa-fw</v-icon> シャープ 空気清浄機</h3>
                <p>
                  シャープのKI-JX75は、自動掃除パワーユニット搭載でプレフィルターの掃除を自動でおこないます。KC-HD70は除湿/加湿/空気清浄を自動でコントロールします。
                </p>
                <v-col cols="12" sm="6" class="float-left mb-2">
                  <router-link :to="`/ec/pd/${mainProductList[4].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[0].images[0].imagePath" /></p>
                    <h4 class="text-body-2 text-left name2">{{ mainProductList[4].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[4].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[4].price)) }}</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[4].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" class="float-left">
                  <router-link :to="`/ec/pd/${mainProductList[5].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[5].images[0].imagePath" /></p>
                    <h4 class="body-2 text-left name2">{{ mainProductList[5].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[5].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[5].price)) }}</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[5].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="6" class="mt-1 float-left">
              <v-card class="pa-2 v-card__text float-left" outlined>
                <h3 class="text-h6 font-weight-bold"><v-icon class="blue--text text--darken-2">fas fa-edit fa-fw</v-icon> ダイキン 空気清浄機</h3>
                <p>
                  ダイキンのMCK70Xは、TAFUフィルター採用で集塵能力が持続。<br />
                  スマホの専用アプリで遠隔操作もできます。
                </p>
                <v-col cols="12" sm="6" class="float-left mb-2">
                  <router-link :to="`/ec/pd/${mainProductList[6].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[6].images[0].imagePath" /></p>
                    <h4 class="text-body-2 text-left name2">{{ mainProductList[6].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[6].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[6].price)) }}</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[6].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6" class="float-left">
                  <router-link :to="`/ec/pd/${mainProductList[7].janCode}`">
                    <p class="text-center mb-1"><img class="banner-img" :src="mainProductList[7].images[0].imagePath" /></p>
                    <h4 class="body-2 text-left name2">{{ mainProductList[7].itemName }}</h4>
                  </router-link>
                  <p class="text-center mb-0" v-if="!mainProductList[7].isSalesEnd">
                    <span class="text-body-2">価格</span>
                    <span class="text-h6 red--text">&nbsp;¥{{ formatPrice(parseInt(mainProductList[7].price)) }}</span>
                  </p>
                  <v-btn
                    class="main-product-btn text-subtitle-1 mb-2"
                    dark
                    block
                    color="rgba(255, 132, 0, 1)"
                    height="52px"
                    :href="`/ec/pd/${mainProductList[7].janCode}`"
                  >
                    商品を見る<v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑機種特有-->
      <!--↓-->
      <!--↑-->
      <!--↓-->
      <!--↑-->
      <!--↓-->
      <!--↑-->
      <!--↓-->
      <!--↑-->
      <!-- ↓ サンプル：価格・人気アクセサリー -->
      <div class="h-1 mt-5 mb-5" id="item"></div>
      <v-container>
        <v-row>
          <v-col class="pa-2 float-left" cols="12">
            <div class="product-list mb-10" v-if="productDetailList && productDetailList.length">
              <h2 class="title mb-2 font-weight-bold">おすすめ空気清浄機 一覧</h2>
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
                  <div class="product-list-item-price-wrap" v-if="!product.isSalesEnd">
                    価格：<span class="product-list-item-price primary--text">¥{{ formatPrice(parseInt(product.price)) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- ↑ サンプル：価格・人気アクセサリー -->
      <!--↓-->
      <div class="h-1 mt-0 mb-5"></div>
      <v-container>
        <v-row>
          <v-col cols="12" class="mt-4 float-left">
            <v-col cols="12" sm="6" class="pa-6 float-left">
              <v-btn
                block
                class="v-btn--is-elevated v-btn--has-bg orange darken-2 white--text text-h6 text-center"
                height="80px"
                :href="`/ec/list?category=空調家電:空気清浄機&s1=シャープ&narrow18=0&n20c=完了商品は除く&s6=プラズマクラスターイオン&sort=price_desc&limit=40`"
              >
                シャープ空気清浄機を見る<v-icon>fas fa-chevron-right fa-fw</v-icon></v-btn
              >
            </v-col>

            <v-col cols="12" sm="6" class="pa-6 float-left">
              <v-btn
                block
                class="v-btn--is-elevated v-btn--has-bg orange darken-2 white--text text-h6 text-center"
                height="80px"
                :href="`/ec/list?category=空調家電:空気清浄機&s1=ダイキン&narrow18=1&n20c=完了商品は除く&sort=price_desc&limit=40`"
              >
                ダイキン空気清浄機を見る<v-icon>fas fa-chevron-right fa-fw</v-icon></v-btn
              >
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->

      <!--↓-->
      <div class="h-1 mt-5 mb-5"></div>
      <p class="mb-1">空気清浄機を買うなら、分割でお支払いラクラクのショッピングクレジット♪</p>
      <h3 class="text-h6 font-weight-bold">ショッピングクレジット</h3>
      <p>
        カメラのキタムラおすすめの『ショッピングクレジット』なら、最長48回払いまで金利手数料が「0円」！<br />
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
                      <td>102,780<span>円</span></td>
                      <td>30<span>回</span></td>
                      <td class="txt-org"><span>約</span>3,426<span>円</span></td>
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
                      <td>42,800<span>円</span></td>
                      <td>12<span>回</span></td>
                      <td class="txt-org"><span>約</span>3,567<span>円</span></td>
                      <td>0<span>円</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </v-col>
            <p class="mt-2 text-body-2">
              ※注文総額3万円、月々3,000円以上のお支払いからご利用いただけます ※初回お支払い額は､月々のお支払い金額より高くなる場合がございます
            </p>
            <v-row align="center" justify="space-around">
              <v-col cols="12" sm="6">
                <v-btn
                  class="main-product-btn text-subtitle-1 mb-2"
                  dark
                  block
                  justify="center"
                  color="rgba(255, 132, 0, 1)"
                  height="52px"
                  :href="`/ec/guide/s_credit_01l`"
                >
                  ショッピングクレジット<v-icon>fas fa-angle-right fa-fw</v-icon>
                </v-btn>
              </v-col></v-row
            >
          </v-col>
        </v-row>
      </v-container>
      <!--↑-->
      <!--↓-->
      <div class="h-1 mt-5 mb-5"></div>
      <h2 class="title mb-2 font-weight-bold">おすすめの特集・サービス</h2>
      <v-container>
        <v-row>
          <v-col class="mb-2 float-left" cols="12">
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/kaden/air-purifier_fair/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/2393.gif"
                      alt="おすすめ空気清浄機で花粉対策"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/kaden/rice-cooker_bestbuy/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/2401.jpg"
                      alt="おすすめ炊飯器特集"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/kaden/home-party/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/3770.gif"
                      alt="ホームパーティ家電特集"
                      max-height="130"
                      width="auto"
                    ></v-img></v-flex></v-layout></a
            ></v-col>
            <v-col class="pa-2 float-left" cols="12" sm="4">
              <a href="https://shop.kitamura.jp/special/sale-fair/general/prepare/"
                ><v-layout justify-center wrap
                  ><v-flex
                    ><v-img
                      contain
                      src="https://shop.kitamura.jp/images/banner/7764.jpg"
                      alt="おすすめ防災グッズ"
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
  name: 'aircleaner-compare',
  components: {
    breadcrumbs: Breadcrumbs,
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '人気のおすすめ加湿空気清浄機 シャープ・ダイキン製品を比較！ | カメラのキタムラネットショップ';
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
          path: '人気のおすすめ加湿空気清浄機 シャープ・ダイキン製品を比較！',
          linkUrl: '/ec/special/kaden/airpurifier/aircleanercompare',
          disabled: false
        }
      ],
      // ↑ ---- パンくず情報 ----
      selectedItem: 0,
      items: [
        { text: 'デザイン', icon: 'fa-check', link: '#hkk1' },
        { text: 'フィルター・加湿機能', icon: 'fa-check', link: '#hkk2' },
        { text: 'お手入れ方法', icon: 'fa-check', link: '#hkk3' },
        { text: '価格・コスト', icon: 'fa-check', link: '#hkk4' },
        { text: '特有の機能', icon: 'fa-check', link: '#hkk5' },
        { text: '商品一覧', icon: 'fa-check', link: '#item' }
      ],
      // ↓ ---- メイン商品 ----
      // 取得するJancode
      mainProductJanCode: [
        '4974019102863',
        '4548848801398',
        '4974019135892',
        '4548848801442',
        '4974019107035',
        '4974019911502',
        '4548848882199',
        '4548848882182'
      ],
      // 結果格納用
      mainProductList: [] as Array<ProductDetail>,
      // ↑ ---- メイン商品 ----
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4974019107035',
        '4974019911502',
        '4974019107028',
        '4974019102863',
        '4974019134642',
        '4974019135892',
        '4974019181851',
        '4548848801442',
        '4548848801466',
        '4548848801398',
        '4548848882212',
        '4548848882182',
        '4548848918553',
        '4548848882144',
        '4548848882151'
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
.v-container {
  a:hover .v-btn-text-color {
    color: $text-white;
  }

  a .v-btn-text-color {
    color: $text-white;
  }
}
</style>

<style lang="scss" scoped>
.main-contents-wrap {
  .banner-img {
    max-width: 100%;
  }
  .v-list-item__title {
    font-size: 16px !important;
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
  /*背景*/
  .bkline-g {
    background: url(/ec/images2/special/kaden/air-purifier/aircleanercompare/bk_line.gif) repeat scroll top left;
  }
  .bg-blu {
    background: #64b4c8;
    color: #fff;
  }
  .ao-mds {
    border-radius: 6px;
    font-weight: bold;
    padding: 15px 0 10px 0.75em;
    border-left: 6px solid #64b4c8;
    border-bottom: 2px solid #64b4c8;
    box-sizing: border-box;
  }
  .name2 {
    //行数制限
    display: -webkit-box;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    height: 4.2em !important;
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
</style>

<style lang="scss" scoped>
/* template内のDomへの適用 */
.aircleaner-compare {
  &-info {
    color: $text-primary;
  }
}
.main-contents-wrap {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 12px;
}
.aircleaner-compare p {
  line-height: 1.8em !important;
  font-size: 16px;
}
.aircleaner-compare ul {
  list-style: none !important;
}
.aircleaner-compare ul li {
  list-style: none !important;
  margin-top: 5px;
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
