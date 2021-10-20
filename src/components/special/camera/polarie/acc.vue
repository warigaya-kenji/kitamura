<template>
  <v-app>
    <div class="polarie">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy :color="'#FF6600'" />

        <div class="toptext bk-kon">
          <h1 class="golla-title text-center">星空写真・天体写真を撮ろう！</h1>
          <h2 class="golla-title2 text-center line-height">ポラリエとカメラ用望遠レンズを使っての星空撮影・天体撮影</h2>
        </div>
        <div style="clear: both"></div>

        <!--↓アンカー-->
        <v-container class="bk-kn my-4" v-if="$vuetify.breakpoint.mdAndUp">
          <v-row dense>
            <v-col cols="4" v-for="(navi, index) in naviList" :key="index">
              <v-btn block text v-scroll-to="navi.href" color="indigo">
                <v-icon color="red" small left>fas fa-arrow-circle-right</v-icon><span class="text-subtitle-1">{{ navi.naviItem }}</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!-- 960px未満 -->
        <v-expansion-panels v-if="$vuetify.breakpoint.smAndDown" class="mt-4 test" flat>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <p class="text-center mb-0 indigo--text font-weight-bold">もくじ</p>
              <template v-slot:actions>
                <v-icon color="indigo"> $expand </v-icon>
              </template></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-row dense>
                <v-col cols="12" v-for="(navi, index) in naviList" :key="index">
                  <v-btn block text :href="navi.href" color="indigo" class="text-subtitle-1">
                    <v-icon color="red" small left>fas fa-arrow-circle-right</v-icon>{{ navi.naviItem }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <!--↓星空写真、天体写真とは？-->
        <v-sheet id="acc01" class="px-2 py-4 mt-12 mb-4 font-weight-bold text-h6 white--text" color="#09093f">
          <v-icon color="white" left>fas fa-comment-dots</v-icon>星空写真、天体写真とは？
        </v-sheet>
        <p>
          星空写真とは、50mm～300mm程度の「標準レンズからやや短めな望遠レンズ」で撮影する星空の写真、<br />
          天体写真とは、星雲・星団だけをクローズアップして拡大撮影する写真のことを指します。
        </p>
        <v-row class="mb-2">
          <v-col cols="6" sm="3" v-for="(img, i) in imgs" :key="i">
            <v-avatar :size="$vuetify.breakpoint.mdAndUp ? '200' : '170'" @click="() => showImg(i)" class="pointer">
              <v-img :src="img"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>

        <p>
          天体望遠鏡や超望遠レンズを使って撮影するイメージがありますが、ポータブル赤道儀「星空雲台ポラリエ」と「ポラリエ用ステップアップキットII」などのカスタムパーツがあれば、Ｗズームキットなどに付属されている、安価な望遠レンズでも撮影を楽しむことができます。<br />
          星空の望遠撮影にチャレンジしてみませんか？
        </p>

        <!--↓星空撮影に人気の、中・望遠レンズ-->
        <v-sheet id="acc06" class="px-2 py-4 mt-12 mb-4 font-weight-bold text-h6 white--text" color="#09093f">
          <v-icon color="white" left>fas fa-comment-dots</v-icon>星空撮影に人気の、中・望遠レンズ
        </v-sheet>
        <p>星空撮影に人気のあるレンズを集めました。</p>

        <v-row>
          <v-col cols="12" sm="4" v-for="(popularLens, index) in popularLensList" :key="index">
            <a :href="popularLens.href">
              <v-img :src="popularLens.src" max-width="120px" max-height="120px" class="mx-auto"></v-img>
              {{ popularLens.name }}
            </a>
          </v-col>
        </v-row>

        <v-card class="bd-gr pa-4 mt-12">
          <h3 class="blue--text text--darken-4 text-h6 font-weight-bold mb-4">
            <v-icon color="indigo" left>fas fa-pencil-alt</v-icon> まずは標準～中・望遠レンズで狙ってみよう！<span class="text-subtitle-2 font-weight-normal"
              >～星空写真～</span
            >
          </h3>
          <p>
            最初から焦点距離 500mm・600mmといった超望遠レンズで天体写真を撮影するのは、非常に難易度が高いです。<br />まずは<span class="red--text"
              >焦点距離 200mm～300mm程度の望遠レンズ</span
            >で、星空写真に挑戦することをおすすめします。<br />
            星空のいろいろな領域を写真に収めてみましょう。
          </p>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/1d1/938/17b/010/744/968/402/2e8/524/e73/7d5/ler/53h/a/TN.jpg"
                max-width="120px"
                max-height="120px"
                class="mx-auto mb-2"
              ></v-img>
              <orangeBtn
                :btntxt="'200mm 望遠ズームレンズ'"
                :href="'/ec/list?narrow18=0&keyword=望遠%20200mm&category=交換レンズ&limit=100&index=&n20c=完了商品は除く&searchbox=1&q=望遠%20200mm&path=交換レンズ&s4%5B%5D=望遠ズームレンズ'"
                :height="'40px'"
                :type="3"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/a5a/48a/f33/017/6a0/c93/bc4/a91/84d/e0a/54c/skc/j2m/y/TN.jpg"
                max-width="120px"
                max-height="120px"
                class="mx-auto mb-2"
              ></v-img>
              <orangeBtn
                :btntxt="'300mm 望遠ズームレンズ'"
                :href="'/ec/list?narrow18=0&keyword=望遠%20300mm&category=交換レンズ&limit=40&index=&n20c=完了商品は除く&searchbox=1&q=望遠%20300mm&path=交換レンズ&s4%5B%5D=望遠ズームレンズ'"
                :height="'40px'"
                :type="3"
              />
            </v-col>
          </v-row>
        </v-card>

        <!--↓星空撮影におすすめのカメラ-->
        <v-sheet id="acc05" class="px-2 py-4 mt-12 mb-4 font-weight-bold text-h6 white--text" color="#09093f">
          <v-icon color="white" left>fas fa-comment-dots</v-icon>星空撮影におすすめのカメラ
        </v-sheet>
        <p>
          星空撮影で人気があるのは「赤外(Hα)領域」と呼ばれる<span class="red--text">赤い星雲を写すことができるカメラ</span>です。<br />
          通常のカメラは撮像素子に「赤外線カットフィルター」が装着されていて、星空を撮影すると赤外領域の写りこみが少なくなります。<br />
          近年では赤外領域がよく写り、昼間の撮影も通常通りおこなうことができるカメラが発売されています。<br />
          そんな星空撮影に人気のあるカメラを集めてみました！
        </p>

        <v-row class="mt-8">
          <v-col cols="12" sm="4" v-for="(starrySkyShooting, index) in starrySkyShootingList" :key="index">
            <h4 class="bd-bw1 text-center including-line-breaks">
              <span class="tx-koidi"> <v-icon left color="#FF4100">fas fa-crown</v-icon>第{{ index + 1 }}位 </span><br />
              {{ starrySkyShooting.name }}
            </h4>
            <a :href="starrySkyShooting.href">
              <v-img :src="starrySkyShooting.src" max-width="120px" max-height="120px" class="mx-auto mt-4 mb-2 hover"></v-img>
            </a>
            <orangeBtn :btntxt="'商品を見る '" :href="starrySkyShooting.href" :height="'40px'" :type="3" />
            <p class="including-line-breaks">
              <span class="tx-koidi">★POINT★</span><br />
              {{ starrySkyShooting.txt }}
            </p>
          </v-col>
        </v-row>

        <!--↓ポラリエと強化パーツをご紹介-->
        <v-sheet id="acc03" class="px-2 py-4 mt-12 mb-4 font-weight-bold text-h6 white--text" color="#09093f">
          <v-icon color="white" left>fas fa-comment-dots</v-icon>ポラリエと強化パーツをご紹介
        </v-sheet>
        <p>星粒の写真を撮影するには「赤道儀」が必要！</p>

        <h3 class="blue--text text--darken-4 text-h6 font-weight-bold mb-4">
          <v-icon color="indigo" left>far fa-thumbs-up</v-icon> 星空撮影におすすめ！ビクセン 星空雲台 ポラリエ
        </h3>
        <p class="mb-5">
          星空の撮影では露出時間が非常に長くなるため、三脚とカメラだけで撮影をすると、露出をしている間に星が動いて、星が「線」になって写りこみます。<br />
          ポラリエは星空の日周運動に合わせて動くモーター雲台なので、露出中に星を追いかけ、「点」のままで撮影できます。<br />
          天体望遠鏡よりも軽量な、カメラ用のレンズを載せるのであれば「ビクセン星空雲台 ポラリエ」がおすすめ！
        </p>
        <v-row class="mb-6 mb-sm-12" justify="center">
          <v-col cols="12" sm="4">
            <v-img src="/ec/images2/special/camera/polarie/acc/rokorei01.jpg" max-width="294px" max-height="294px" class="mx-auto"></v-img>
            <p class="text-center"><v-icon small left color="black">fas fa-arrow-up</v-icon> 三脚とカメラだけで撮影</p>
          </v-col>
          <v-col cols="12" sm="4">
            <v-img src="/ec/images2/special/camera/polarie/acc/rokorei02.jpg" max-width="294px" max-height="294px" class="mx-auto"></v-img>
            <p class="text-center"><v-icon small left color="black">fas fa-arrow-up</v-icon> ポラリエを使用し撮影</p>
          </v-col>
          <v-col cols="10" sm="4">
            <a href="/ec/pd/4955295355051">
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/b60/a10/665/298/232/292/861/b83/346/80b/ea1/89n/zn0/x/L.jpg"
                max-width="220px"
                max-height="220px"
                class="mx-auto mb-2"
              ></v-img>
            </a>
            <orangeBtn :btntxt="'星空雲台 ポラリエ '" :href="'/ec/pd/4955295355051'" :height="'40px'" :type="3" />
          </v-col>
        </v-row>

        <v-card class="bd-gr pa-4 mt-12">
          <v-row class="mt-2">
            <v-col cols="12" sm="6">
              <p>星空撮影の方法、星空撮影に便利なアイテム、おすすめのカメラ・レンズをご紹介。</p>
            </v-col>
            <v-col cols="12" sm="6">
              <a href="/ec/special/camera/polarie">
                <v-img src="https://shopimg.kitamura.jp/images/banner/1488.gif" max-width="350px" max-height="130px" class="mx-auto mb-2 hover"></v-img>
              </a>
              <p class="text-center">星空を撮影しよう！星空撮影入門</p>
            </v-col>
          </v-row>
        </v-card>
        <p class="mt-10 text-subtitle-2">望遠レンズで撮影するときは強化パーツが必要</p>
        <h3 class="blue--text text--darken-4 text-h6 font-weight-bold mb-4">
          <v-icon color="indigo" left>far fa-thumbs-up</v-icon> 望遠レンズでの星空撮影には ポラリエ用 強化パーツ
        </h3>
        <p>
          <span class="red--text">ポラリエ本体は耐荷重2kg</span>ですので、望遠レンズを搭載すると耐荷重オーバーになってしまいます。<br />
          望遠レンズで撮影する場合には、ポラリエの耐荷重を6.5kgにする強化パーツ「ステップアップキットII」と、ウェイトを使ってバランスをとることが必要です。<br />
          また、低重心化させる「クイックリリースクランプセット」は、ポラリエの回転軸近くにカメラをセットでき、より軽いバランスウェイトで撮影できる、おすすめパーツです。
        </p>
        <!--↓ポラリエと強化パーツ組立イメージ-->
        <h4 class="mt-5"><v-icon left color="#FF4100">fas fa-star tx-koidi</v-icon>ポラリエと強化パーツ 組立イメージ</h4>
        <v-row class="mt-2">
          <v-col cols="12" sm="7">
            <v-img
              src="/ec/images2/special/camera/polarie/acc/systm.gif"
              max-width="558px"
              max-height="389px"
              class="mx-auto hover"
              @click="() => showSystmImg()"
            />
          </v-col>
          <v-col cols="12" sm="5">
            <div v-for="(navi2, index) in naviList2" :key="index">
              <v-sheet :color="navi2.color" height="73px" class="pa-1 rounded-lg mb-2">
                <a v-scroll-to="navi2.href">
                  <v-img :src="navi2.src" max-width="63px" max-height="63px" class="mx-auto hover float-left" />
                  {{ navi2.name }}
                </a>
              </v-sheet>
              <p class="mb-2 text-center" v-if="index === 1 || index === 3">+</p>
            </div>
          </v-col>
        </v-row>
        <vue-easy-lightbox :visible="isReinforcedParts" :imgs="'/ec/images2/special/camera/polarie/acc/systm.gif'" @hide="handleHide"></vue-easy-lightbox>

        <!--↓クイックリリースクランプセット-->
        <div id="kyoka01" class="mb-10"></div>
        <p class="text-subtitle-2"><v-icon x-small left color="black">far fa-thumbs-up</v-icon> 望遠レンズで星空撮影・天体撮影 おすすめ強化パーツ</p>
        <h3 class="blue--text text--darken-4 text-h6 font-weight-bold mb-4">① クイックリリースクランプセット</h3>
        <v-row class="mb-4" justify="center">
          <v-col cols="12" sm="9">
            <p>
              通常はカメラを取り付ける際に自由雲台を使用しますが、不動点から離れてバランスが悪くなることがデメリットでした。ポラリエの不動点（下図）から離れれば離れるほどバランスが悪くなり、より重たいバランスウェイトが必要になります。<br />
              そこで、「ビクセン<router-link to="/ec/pd/4955295355280">クイックリリースクランプセット</router-link
              >」を使用することで、不動点に近い部分にカメラ・レンズを取り付けられ、低重心でカメラの向きを変えることができ、より軽いバランスウェイトで、撮影ができるようになります。
            </p>
          </v-col>
          <v-col cols="10" sm="3" class="text-center">
            <router-link to="/ec/pd/4955295355280">
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/6d8/2a8/4b1/dae/883/212/a19/066/013/8a1/ca4/mlc/qgy/c/TN.jpg"
                max-width="120px"
                max-height="120px"
                class="mx-auto hover"
              />
              クイックリリース<br />クランプセット
            </router-link>
            <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295355280'" :height="'40px'" :type="3" />
          </v-col>
        </v-row>

        <v-row class="mb-4">
          <v-col cols="12" sm="6">
            <p class="mb-0 text-center"><v-icon small left color="black">fas fa-arrow-down</v-icon>自由雲台使用時</p>
            <v-img src="/ec/images2/special/camera/polarie/acc/brance01.gif" max-width="400px" max-height="273px" class="mx-auto" />
          </v-col>
          <v-col cols="12" sm="6">
            <p class="mb-0 text-center"><v-icon small left color="black">fas fa-arrow-down</v-icon>クイックリリースクランプセット使用時</p>
            <v-img src="/ec/images2/special/camera/polarie/acc/brance02.gif" max-width="400px" max-height="273px" class="mx-auto" />
          </v-col>
        </v-row>

        <!--↓ポラリエステップアップキットおすすめポイント-->
        <div id="kyoka02" class="mb-10"></div>
        <p class="text-subtitle-2"><v-icon x-small left color="black">far fa-thumbs-up</v-icon> 望遠レンズで星空撮影・天体撮影 おすすめ強化パーツ</p>
        <h3 class="blue--text text--darken-4 text-h6 font-weight-bold mb-4">② ポラリエ用ステップアップキットII</h3>
        <v-row class="mb-4" justify="center">
          <v-col cols="12" sm="9">
            <p>
              赤道儀の設定に必要なのが、「極軸合わせ」。「極軸合わせ」とは、「極軸望遠鏡」という300mm程度の望遠鏡で、赤道儀を北極星に合わせる作業です。<br />
              通常の星空雲台ポラリエでは、極軸望遠鏡を使用するときにはそのつど、カメラを外して極軸望遠鏡を差し込む必要がありましたが、<router-link
                to="/ec/pd/4955295355341"
                >ポラリエ用ステップアップキットII</router-link
              >を使用すると、極軸望遠鏡を差し込んだままで赤道儀を設定することができ、いちいち外す必要がありません！ これは便利！！<br />
              また、<span class="red--text">ポラリエの耐荷重を6.5kg</span>に強化するので、望遠レンズでの星空・天体撮影に、おすすめです♪
            </p>
          </v-col>
          <v-col cols="10" sm="3" class="text-center">
            <router-link to="/ec/pd/4955295355341">
              <v-img
                src="https://shopimg.kitamura.jp/images/pd/a3a/cf3/e47/2d2/ebe/9fa/bd5/961/8a0/16a/57c/v0r/w9q/m/TN.jpg"
                max-width="120px"
                max-height="120px"
                class="mx-auto hover"
              />
              ポラリエ用<br />ステップアップキットII
            </router-link>
            <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295355341'" :height="'40px'" :type="3" />
          </v-col>
        </v-row>

        <v-row class="mb-4">
          <v-col cols="12" sm="7">
            <v-img src="/ec/images2/special/camera/polarie/acc/jikuawase.gif" max-width="550px" max-height="237px" class="mx-auto" />
          </v-col>
          <v-col cols="12" sm="5">
            <watchInVideo :src="'https://www.youtube.com/embed/wNsf2bcsOqg?rel=0'" :height="237" :sm="12" />
            <p class="mt-2">【ポラリエで星空写真・天体写真を撮ろう！】再生リスト</p>
          </v-col>
        </v-row>

        <!--↓バランスウェイト-->
        <div id="kyoka03" class="mb-10"></div>
        <p class="text-subtitle-2"><v-icon x-small left color="black">far fa-thumbs-up</v-icon> 望遠レンズで星空撮影・天体撮影 おすすめ強化パーツ</p>
        <h3 class="blue--text text--darken-4 text-h6 font-weight-bold mb-4">③ バランスウェイト、APフォトガイダー用ウェイト軸</h3>
        <p>
          ポラリエの片側に機材が偏ると、ポラリエのバランスが悪くなり、モーターが安定して駆動せず、追尾エラーに。これでは、星が「点」で写らずに、ふくらんだり、線になったりしてしまいます。
        </p>
        <v-sheet class="pa-5 mb-10" color="#ffcf00">
          <p class="mb-2">片側に負荷がかかっている状態</p>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                src="/ec/images2/special/camera/polarie/acc/huka.gif"
                max-width="455px"
                max-height="264px"
                class="mx-auto"
                alt="片側に負荷がかかっている状態"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/camera/polarie/acc/ex-mk.png" max-width="51px" max-height="46px" class="mx-auto mt-12" />
              <p class="mt-2 text-center">
                片側に負荷がかかっているため<br />
                一定の速度で動くことができず<br />
                星を「点で」写せない＝<span class="red--text">「追尾エラー」</span>
              </p>
            </v-col>
          </v-row>
        </v-sheet>

        <v-row>
          <v-col cols="12" sm="6">
            <p>
              反対側に「<router-link to="/ec/pd/4955295258017">バランスウェイト1kg</router-link
              >」を取り付け、バランスをとることで追尾エラーを防ぎ、しっかりと「点」で写すことが可能になります。<br /><br />
              基本的に<span class="red--text">2kg以上の重さの機材・望遠レンズを用いる場合は、バランスウェイトを使用したほうがいい</span>でしょう。
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-row class="text-center" justify="center">
              <v-col cols="10" sm="6">
                <router-link to="/ec/pd/4955295258017">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/fb4/a63/491/ae2/ddf/990/97e/623/ded/32c/6e9/a5t/118/6/TN.jpg"
                    max-width="120px"
                    max-height="120px"
                    class="mx-auto hover"
                  />
                  ポラリエ用<br />バランスウェイト 1kg
                </router-link>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295258017'" :height="'40px'" :type="3" />
              </v-col>
              <v-col cols="10" sm="6">
                <router-link to="/ec/pd/4955295258260">
                  <v-img
                    src="https://shopimg.kitamura.jp/images/pd/12f/ee2/5af/adb/761/f0d/e6a/336/cf3/5bb/67s/9nm/h09/5/TN.jpg"
                    max-width="120px"
                    max-height="120px"
                    class="mx-auto hover"
                  />
                  APフォトガイダー用<br />ウェイト軸
                </router-link>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295258260'" :height="'40px'" :type="3" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!--↑バランスウェイト-->
        <!--↑強化パーツ-->

        <v-card class="bd-gr pa-4 mt-12">
          <v-row class="mt-2">
            <v-col cols="12" sm="6">
              <p>
                天体の位置や、撮影するための適正な焦点距離がわからない方は、便利なビクセンの無料アプリ「<a href="https://www.vixen.co.jp/app/">Nebula Book</a
                >(ネビュラ ブック)」をインストールしておきましょう♪
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <a href="https://www.vixen.co.jp/app/">
                <v-img
                  src="https://shopimg.kitamura.jp/images/banner/3439.gif"
                  max-width="350px"
                  max-height="130px"
                  class="mx-auto mb-2 hover"
                  alt="星雲・星団・銀河等の天体撮影を支援するアプリ「Nebula Book」"
                ></v-img>
              </a>
              <p class="text-center">天体・星空写真の撮影支援アプリNebula Book</p>
            </v-col>
          </v-row>
        </v-card>

        <!--ギャラリー-->
        <div id="acc02" class="mb-10"></div>
        <v-sheet id="acc03" class="px-2 py-4 mt-12 mb-6 font-weight-bold text-h6 white--text" color="#09093f">
          <v-icon color="white" left>fas fa-file-image</v-icon>星空写真ギャラリー 星空写真作例
        </v-sheet>
        <v-row v-for="(gallery, index) in galleryList" :key="index">
          <v-col cols="12" sm="6">
            <div class="pointer" @click="() => showGalleryImg(index)">
              <v-img :src="gallery.src" max-width="80%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'ml-auto hover' : 'mx-auto'"></v-img>
              <v-img src="/ec/images2/special/camera/polarie/acc/megane.png" max-width="23px" height="23px" class="ml-auto hover"></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <p class="tx-koidi mb-2">{{ gallery.title }}</p>
            <p class="mb-2 including-line-breaks">
              {{ gallery.txt }}
            </p>
            <v-divider></v-divider>
            <p class="mt-2 text-body-2">
              カメラ：{{ gallery.camera }}<br />
              レンズ：{{ gallery.lens }}<br />
              絞り：{{ gallery.aperture }}<br />
              シャッタースピード：{{ gallery.speed }}<br />
              焦点距離：{{ gallery.focalLength }}<br />
              ISO感度：{{ gallery.iso }}
            </p>
          </v-col>
        </v-row>
        <vue-easy-lightbox :visible="visibleGallery" :imgs="galleryList[index].src" :index="index" @hide="handleHide"></vue-easy-lightbox>

        <!--↓商品一覧-->
        <div id="acc07" class="mb-10"></div>
        <v-sheet id="acc03" class="px-2 py-4 mt-12 mb-4 font-weight-bold text-h6 white--text" color="#09093f">
          <v-icon color="white" left>fas fa-comment-dots</v-icon>星空撮影 おすすめ商品 一覧
        </v-sheet>
        <priceAndPopular :productDetailList="productDetailList" />

        <!--↓ SNSー-->
        <facebookAndTwitter />

        <p class="pl-2 mb-2 brown--text mt-16">▼関連おすすめ特集・プリントサービス</p>
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
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import PriceAndPopular from '@/components/common/special/price-and-popular.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import Urlcopy from '@/components/common/special/url-copy.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'polarie',
  components: {
    breadcrumbs: Breadcrumbs,
    orangeBtn: OrangeBtn,
    watchInVideo: WatchInVideo,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy,
    priceAndPopular: PriceAndPopular,
  },
  setup: (props, context) => {
    document.title = 'ポラリエとカメラ用望遠レンズで星空撮影 | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'ポラリエとカメラ用望遠レンズを使っての星空撮影・天体撮影におすすめの商品をご紹介☆ポータブル赤道儀「星空雲台ポラリエ」と「ポラリエ用ステップアップキットII」などのカスタムパーツで、星空の望遠撮影にチャレンジしてみませんか？')

    const state = reactive({
      visible: false,
      isReinforcedParts: false,
      visibleGallery: false,
      index: 0,
      imgs: [
        '/ec/images2/special/camera/polarie/acc/ex01.jpg',
        '/ec/images2/special/camera/polarie/acc/ex02.jpg',
        '/ec/images2/special/camera/polarie/acc/ex03.jpg',
        '/ec/images2/special/camera/polarie/acc/ex04.jpg'
      ],
      naviList: [
        { naviItem: '星空写真・天体写真とは？ ', href: '#acc01' },
        { naviItem: '人気の中・望遠レンズ ', href: '#acc06' },
        { naviItem: '星空撮影おすすめカメラ ', href: '#acc05' },
        { naviItem: 'ポラリエと強化パーツ ', href: '#acc03' },
        { naviItem: '星空写真作例 ギャラリー ', href: '#acc02' },
        { naviItem: '星空撮影におすすめ商品一覧 ', href: '#acc07' }
      ],
      naviList2: [
        { name: '① クイックリリースクランプセット', src: 'https://shopimg.kitamura.jp/images/pd/6d8/2a8/4b1/dae/883/212/a19/066/013/8a1/ca4/mlc/qgy/c/M.jpg ', href: '#kyoka01', color: '#FF4100' },
        { name: '② 星空雲台 ポラリエ', src: 'https://shopimg.kitamura.jp/images/pd/b60/a10/665/298/232/292/861/b83/346/80b/ea1/89n/zn0/x/M.jpg', href: '#acc03', color: '#FF7D00' },
        { name: '② ステップアップキットII', src: '	https://shopimg.kitamura.jp/images/pd/a3a/cf3/e47/2d2/ebe/9fa/bd5/961/8a0/16a/57c/v0r/w9q/m/M.jpg', href: '#kyoka02', color: '#FF7D00' },
        { name: '③ APフォトガイダー用ウェイト軸', src: 'https://shopimg.kitamura.jp/images/pd/12f/ee2/5af/adb/761/f0d/e6a/336/cf3/5bb/67s/9nm/h09/5/M.jpg', href: '#kyoka03', color: '#E4BF00' },
        { name: '③ バランスウェイト1kg', src: 'https://shopimg.kitamura.jp/images/pd/fb4/a63/491/ae2/ddf/990/97e/623/ded/32c/6e9/a5t/118/6/M.jpg', href: '#kyoka03', color: '#E4BF00' },
      ],
      popularLensList: [
        { name: 'ニコン AF-S NIKKOR 300mm f/4E PF ED VR', src: 'https://shopimg.kitamura.jp/images/pd/e47/045/a25/7c3/e80/fc6/d36/264/6ba/93e/18q/swr/9pe/m/TN.jpg', href: '/ec/pd/4960759029126' },
        { name: 'シグマ MACRO 105mm F2.8 EX DG OS HSM', src: 'https://shopimg.kitamura.jp/images/pd/c87/813/d97/d67/4c5/46a/bfa/9e1/ecd/080/53i/0ej/51h/j/TN.jpg', href: '/ec/list?narrow18=0&keyword=MACRO%20105mm%20F2.8%20EX%20DG%20OS%20HSM&category=&q=MACRO%20105mm%20F2.8%20EX%20DG%20OS%20HSM&path=&index=&sort=number20,Number17,Score&searchbox=1' },
        { name: 'フジフイルム XF50-140mm F2.8 R LM OIS WR', src: 'https://shopimg.kitamura.jp/images/pd/29d/ee7/2a3/70c/a2b/015/7c2/fef/b86/c29/c9l/5wn/rw7/z/TN.jpg', href: '/ec/pd/4547410289862' },
        { name: 'タムロン SP 85mm F/1.8 Di VC USD(Model F016)', src: 'https://shopimg.kitamura.jp/images/pd/62d/44e/174/52b/9b0/7c0/2c2/0cb/626/7ee/689/9gc/pbv/z/TN.jpg', href: '/ec/list?narrow18=0&keyword=SP%2085mm%20F%2F1.8%20Di%20VC%20USD&category=&q=SP%2085mm%20F%2F1.8%20Di%20VC%20USD&path=&index=&sort=number20,Number17,Score&searchbox=1' },
        { name: 'オリンパス M.ZUIKO DIGITAL ED 40-150mm F2.8 PRO 1.4xテレコンバーターキット', src: 'https://shopimg.kitamura.jp/images/pd/3f1/8c4/815/9be/4c0/039/3a5/858/c09/f36/82z/ud1/l54/s/TN.jpg', href: '/ec/pd/4545350047726' },
      ],
      starrySkyShootingList: [
        { name: 'ニコン\nD810A ボディ', href: '/ec/pd/4960759145574', src: 'https://shopimg.kitamura.jp/images/pd/28b/835/fb7/08e/2de/2f4/d75/8a4/eac/f30/f5o/2ir/0ui/d/TN.jpg', txt: '赤外領域の透過率を4倍まで引き上げた天体撮影用フルサイズ一眼レフカメラ。天体だけでなく、昼間の撮影にも使用可能です。\n最長900秒までの露光時間を設定できるため、長時間露光に大変便利。\n厳密なピント確認が容易な、ライブビュー時 最大約23倍の拡大表示が可能！ まさに天体用一眼レフでは頂点に君臨するカメラです。' },
        { name: 'フジフイルム\nXシリーズ', href: '/ec/list?narrow18=0&keyword=富士フイルム&category=ミラーレス一眼&index=&searchbox=1&sort=number20,Number17,Score&q=富士フイルム&path=ミラーレス一眼&n20c=完了商品は除く', src: 'https://shopimg.kitamura.jp/images/pd/05c/a9d/9d7/c13/7ef/788/bd3/8ff/d48/4a3/0cu/7i2/xmx/w/TN.jpg', txt: 'フジフイルムのXシリーズに搭載されているAPS-Cセンサー「X-Trans CMOS」は赤外領域がよく写る、ということで星空撮影カメラマンたちの間では、非常に人気があります。昼間の撮影で色再現性がいいとされるフジフイルムですが、その発色は星空の撮影でも同様に威力が発揮されるようです。\nミラーレス一眼レフはミラーショックが少なく、小型・軽量のため、赤道儀へ搭載するときに非常に使い回しがよく、バランスウェイトなどの機材も少なく済みます。' },
        { name: 'オリンパス\nマイクロフォーサーズ', href: '/ec/list?narrow18=0&keyword=オリンパス&category=ミラーレス一眼&limit=40&n20c=完了商品は除く&index=&searchbox=1&q=オリンパス&path=ミラーレス一眼', src: 'https://shopimg.kitamura.jp/images/pd/173/73c/7b4/90c/923/936/5bb/fda/a01/557/2ej/519/7p5/l/TN.jpg', txt: 'オリンパスのミラーレス一眼レフも赤外領域が写り込みます。小型軽量のため持ち運びがしやすく大変便利。 オリンパスを星空撮影で使用する最大のメリットは、マイクロフォーサーズ規格により実現した、周辺減光・サジタルコマフレアの少ないレンズ群。星空撮影向きのレンズが多いことが特徴です。\n星景写真で活躍する「ライブコンポジット機能」など、他社にはない機能も満載です。' },
      ],
      galleryList: [
        {
          src: '/ec/images2/special/camera/polarie/acc/m33.jpg',
          title: 'M33・メラク・M31',
          txt: 'アンドロメダ座のメラク（真ん中の黄色い星）を挟んで、ほぼ等間隔で右下にアンドロメダ銀河、左上にさんかく座の渦巻銀河・M33があります。100mm前後の焦点距離で、この構図を撮影することができます。この２つの天体は、非常に写真写りがよく、さらに拡大して撮影するのも楽しいです。\n秋に撮影できる人気のスポットです。',
          camera: 'Fujifilm X-T1', lens: 'XF50-140mm f2.8R LM OIS WR', aperture: 'f/2.8', speed: '露出90秒', focalLength: '105mm', iso: '1600'
        },
        {
          src: '/ec/images2/special/camera/polarie/acc/oron.jpg',
          title: 'オリオン座中心部',
          txt: 'オリオン座・中央部分にオリオンベルトと呼ばれる三ツ星があります。この三ツ星・左側に、有名な「燃える木星雲」「馬頭星雲」があり、その下には「M42・オリオン大星雲」がある、冬の人気スポットです。\n200mmでもここまで写るので、初心者の方に大変おすすめです。',
          camera: 'Fujifilm X-T2', lens: 'XF50-140mm f2.8R LM OIS WR', aperture: 'f/5.6', speed: '露出185秒', focalLength: '210mm', iso: '2500'
        },
        {
          src: '/ec/images2/special/camera/polarie/acc/btoo.jpg',
          title: '馬頭星雲と燃える木星雲',
          txt: 'オリオンベルト・左の星、左側に「燃える木星雲」、その下に「馬頭星雲」があります。\n一度は撮影してみたい、人気のある天体です。',
          camera: 'Fujifilm X-T2', lens: 'XF100-400mm f4.5-5.6 R LM OIS WR', aperture: 'f/7.1', speed: '露出178秒', focalLength: '600mm', iso: '6400'
        },
        {
          src: '/ec/images2/special/camera/polarie/acc/crisu.jpg',
          title: 'カリフォルニア星雲とすばる',
          txt: '右にある青い星の集まりが「M45・すばる」。左の赤いナメクジようなものが「カリフォルニア星雲」です。\nこちらも100mm前後で撮影ができますが、それぞれをさらに長い焦点距離で撮影するのもいいでしょう。',
          camera: 'Fujifilm X-T2', lens: 'XF50-140mm f2.8R LM OIS WR', aperture: 'f/2.8', speed: '露出92秒', focalLength: '105mm', iso: '3200'
        },
        {
          src: '/ec/images2/special/camera/polarie/acc/noseamr.jpg',
          title: '北アメリカ星雲とデネヴ・サドル付近',
          txt: '夏の大三角のひとつ・はくちょう座のデネヴ周辺は、赤い散光星雲が多い領域です。また、天の川上にあるため、微光星がたくさんあります。微光星のあるところと、ないところでの濃淡が激しく、非常に写真写りのいい撮影スポットです。',
          camera: 'Olympus PEN-F', lens: 'M.ZUIKO DIGITAL ED40-150mm f2.8 PRO', aperture: 'f/2.8', speed: '露出60秒', focalLength: '80mm', iso: '2500'
        },
        {
          src: '/ec/images2/special/camera/polarie/acc/bambi.jpg',
          title: 'バンビの横顔 ',
          txt: '夏の天の川で一番濃淡がある領域です。真ん中やや上の部分が小鹿が横を向いているように見えるため、このように呼ばれています。\nこの領域の下には「干潟星雲」「三裂星雲」があり、上には「わし星雲」「オメガ星雲」があるため、非常に派手な写真写りをします。\n夏の大人気スポットです。',
          camera: 'EOS 5D MK2', lens: 'EF70-200 f2.8L ISII USM', aperture: 'f/3.5', speed: '露出104秒', focalLength: '175mm', iso: '1600'
        },

      ],
      recommendedFeaturesList: [
        {
          href: 'https://shop.kitamura.jp/special/sale-fair/camera/hosizora/',
          img: 'https://shopimg.kitamura.jp/images/banner/5032.png',
          alt: '星空総合ページ'
        },
        {
          href: '/ec/special/general/photocon-learn',
          img: 'https://shop.kitamura.jp/images/banner/2180.gif',
          alt: 'フォトコンテスト受賞作品から学ぶ'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'http://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント'
        },
        {
          href: '/ec/special/page/telephoneorder-info',
          img: 'https://shopimg.kitamura.jp/images/banner/1361.gif',
          alt: '電話注文のご案内'
        },
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '星空総合ページ',
          linkUrl: '/ec/special/camera/hosizora',
          disabled: false
        },
        {
          path: 'ポラリエとカメラ用望遠レンズで星空・天体撮影',
          disabled: true
        }
      ],
      // 取得するJancode
      productJanCodeList: [
        '4955295355341',
        '4955295355280',
        '4955295355051',
        '2239530000053',
        '4955295258260',
        '4955295258017',
        '4955295354313',
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
      state.isReinforcedParts = false
      state.visibleGallery = false
    }

    const showSystmImg = () => {
      state.isReinforcedParts = true;
    }

    const showGalleryImg = (index: number) => {
      state.index = index;
      state.visibleGallery = true
    }

    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      showImg,
      handleHide,
      showSystmImg,
      showGalleryImg
    };
  }
});
</script>
<style lang="scss" scoped>
.polarie p {
  line-height: 1.8em;
  letter-spacing: 0.07em;
  font-size: 16px;
}
.polarie h4 {
  font-size: 120%;
  color: #09093f;
  font-weight: normal;
}
.toptext {
  width: 100%;
  background-image: url(/ec/images2/special/camera/polarie/acc/bg-title.jpg);
  background-repeat: no-repeat;
  box-sizing: border-box;
}
.golla-title {
  width: 100%;
  height: auto;
  color: #ffffff;
  font-weight: 800;
  font-size: 140%;
  box-sizing: border-box;
  margin: 0 0 0px 0;
}
.golla-title2 {
  width: 100%;
  height: auto;
  color: #ffffff;
  font-weight: 500;
  font-size: 90%;
  box-sizing: border-box;
  margin: 0;
}
.bk-kon {
  background-color: #09093f;
}
.test {
  border: #ff8c2f 1px solid;
}
.pointer {
  cursor: pointer;
}
.bd-gr {
  border: #0047b5 dotted 1px;
  box-sizing: border-box;
}
.bd-bw1 {
  border-bottom: #ff4100 solid 2px;
}
.tx-koidi {
  color: #ff4100;
}
</style>