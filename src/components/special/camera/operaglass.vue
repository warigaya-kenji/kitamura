<template>
  <v-app>
    <div class="operaglass">
      <div class="main-contents-wrap glasses">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->

        <!-- 双眼鏡特集用 ここから -->
        <p :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-2' : 'caption', 'font-weight-bold', 'mb-0']">
          双眼鏡の選び方<span class="font-weight-regular">|コンサート・ライブ、スポーツ観戦、野鳥観察、星空鑑賞、美術鑑賞におすすめの双眼鏡</span>
        </p>
        <!-- 960px以上 -->
        <v-img
          v-if="$vuetify.breakpoint.mdAndUp"
          src="/ec/images2/special/camera/operaglass/og01.gif"
          alt="双眼鏡でもっと楽しく！"
          max-width="100%"
          height="auto"
        ></v-img>
        <!-- 960px未満 -->
        <v-img
          v-if="$vuetify.breakpoint.smAndDown"
          src="/ec/images2/special/camera/operaglass/s-og01.gif"
          alt="双眼鏡でもっと楽しく！"
          max-width="100%"
          height="auto"
        ></v-img>

        <!-- 960px以上 -->
        <p v-if="$vuetify.breakpoint.mdAndUp" class="text-subtitle-2 my-2">
          コンサートやスポーツ観戦で「双眼鏡があるといいなぁ～」と思っても、倍率や大きさなど種類がたくさんあって値段もさまざま･･･<br />
          どれを選んでいいのか悩んでしまいますよね！<br />
          そこで、双眼鏡の選び方のポイントと、カメラのキタムラおすすめの双眼鏡をご紹介します♪<br />
          メガネやアイメイクに配慮した双眼鏡、ブレずによく見える単眼鏡などいろいろ集めました★
        </p>
        <!-- 960px未満 -->
        <p v-if="$vuetify.breakpoint.smAndDown" class="text-subtitle-2 mt-2 mb-4">カメラのキタムラおすすめの双眼鏡と、選び方のポイントをお伝えします♪</p>

        <h2 class="ttl02">双眼鏡の選び方</h2>

        <v-container fluid class="navi">
          <v-row dense>
            <v-col cols="6" md="2" v-for="navi in naviList" :key="navi.src">
              <a v-scroll-to="navi.href">
                <v-img :src="navi.src" max-width="100%" height="auto" class="hover"></v-img>
              </a>
            </v-col>
          </v-row>
          <v-row dense class="pa-2 ma-0" :justify="$vuetify.breakpoint.mdAndUp ? 'end' : 'center'" align-content="center">
            <v-col cols="4" md="2" v-for="navi in naviList2" :key="navi.name">
              <a v-scroll-to="navi.href">
                <p class="lnavi2pc mr-2" v-if="$vuetify.breakpoint.mdAndUp">
                  <v-icon color="#8748B0">fas fa-binoculars</v-icon><span class="mx-2">{{ navi.name }}</span>
                </p>
                <p class="lnavi2sp" v-if="$vuetify.breakpoint.smAndDown">
                  <v-icon small color="#8748B0">fas fa-binoculars</v-icon><span class="mx-2">{{ navi.name }}</span>
                </p>
              </a>
            </v-col>
          </v-row>
        </v-container>

        <!--▼コンサート・ライブにおすすめ双眼鏡-->
        <!-- <div id="a1"></div> -->
        <operaglassTitle id="a1" :txt="'コンサート・ライブにおすすめ双眼鏡'" :backgroundImg="'/ec/images2/special/camera/operaglass/og-ttl01.gif'" />

        <v-container>
          <v-card outlined color="#FEEBF1" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg" elevation="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4955295134410">
                    <v-img src="/ec/images2/special/camera/operaglass/pd01_01.png" max-width="100%" height="auto"></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-mmok">ビクセン 13441-0 アリーナ 8倍双眼鏡 HD8×21WP（３カラー）</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >POPでオシャレなのに機能も充実！ ライブ、コンサートに最適な<v-divider />
                    1台。明るくシャープで臨場感あふれる見え味にも定評のある、倍<v-divider />率8倍の双眼鏡です。さらに防水仕様なので、屋内でのコンサート<v-divider />や観劇はもちろん、野外フェスにもおすすめです！</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295134410"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-container>
        <!-- ↓ その他のおすすめ商品はこちら -->
        <v-row justify="end" align-content="center">
          <v-col cols="9" sm="4">
            <router-link
              to="/ec/list?narrow18=0&keyword=野外フェス&category=双眼鏡%2F望遠鏡&r=&index=all&sort=number20,number19,Score&searchbox=1&q=野外フェス&path=双眼鏡%2F望遠鏡&y=19&x=36"
            >
              <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
            </router-link>
          </v-col>
        </v-row>
        <!--▼コンサート・ライブにおすすめ双眼鏡-->

        <!--▼美術鑑賞・観劇におすすめ双眼鏡-->
        <operaglassTitle
          :txt="'美術鑑賞・観劇におすすめ双眼鏡'"
          :id="'a2'"
          :backgroundImg="'/ec/images2/special/camera/operaglass/og-ttl05.gif'"
          :color="'#9258b7'"
          :rgba1="'147,89,184,1'"
          :rgba2="'195,154,221,1'"
        />

        <v-container>
          <v-card outlined color="#ece1f4" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg" elevation="6">
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-card-title class="font-weight-bold text-h6 bd-mrk">ビクセン 14641-3 4倍双眼鏡 at4 M4×18</v-card-title>
                  <router-link to="/ec/pd/4955295146413">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/1cd/9c6/058/432/96b/8dc/e43/fc1/486/24e/d0g/2vc/wup/j/L.jpg"
                      max-width="100%"
                      height="auto"
                      class="hover"
                    ></v-img>
                  </router-link>
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295146413"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link>
                  </p>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-title class="font-weight-bold text-h6 bd-mrk">ビクセン 14642-0 6倍双眼鏡 at6 M6×18</v-card-title>
                  <router-link to="/ec/pd/4955295146420">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/0b3/d91/629/8c5/fcf/78a/f88/5d8/984/536/183/yq6/xux/h/L.jpg"
                      max-width="100%"
                      height="auto"
                      class="hover"
                    ></v-img>
                  </router-link>
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295146420"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link>
                  </p>
                </v-col>
              </v-row>
              <v-card-text class="my-2 px-0 line-height-2 text-subtitle-1"
                ><v-divider /> 美術鑑賞や舞台観劇で最適といわれる４倍・６倍の双眼鏡です。<v-divider />
                最短約55cmからピントが合う設計のため、こちらも植物や昆虫などの「マクロ観察」に適しており、美術鑑賞<v-divider />でも活躍する双眼鏡です。
                特筆すべきは重量が145gとトップクラスの超軽量であること！<v-divider />PFMコート採用で、視界もとってもクリアですよ！</v-card-text
              >
            </v-card>

            <v-card class="pa-6 rounded-lg mt-6" elevation="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4549212288920">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/5f3/264/d1f/8af/a04/e1b/34b/f6e/3a2/f94/a3d/k96/ks8/w/L.jpg"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-mrk">ペンタックス 8.5倍双眼鏡 Papilio II 8.5×21(W/C)</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >コンサートやスポーツ観戦にも対応できる8.5倍の倍率ながらも、<v-divider />
                    最短約50cmからピントが合う「マクロ観察機能」も搭載。美術<v-divider />館や博物館の展示品を眺めれば、タッチやディテールがはっきり<v-divider />わかり、思いがけない新鮮な発見ができるかもしれません♪
                    しか<v-divider /> もレンズにはマルチコーティングが施され、明るく見やすい双眼<v-divider /> 鏡です！</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4549212288920"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-container>
        <!-- ↓ その他のおすすめ商品はこちら -->
        <v-row justify="end" align-content="center">
          <v-col cols="9" sm="4">
            <router-link
              to="/ec/list?narrow18=0&keyword=%E6%97%85%E8%A1%8C%E8%A6%B3%E5%8A%87%E7%BE%8E%E8%A1%93%E9%A4%A8&category=&r=&q=%E6%97%85%E8%A1%8C%E8%A6%B3%E5%8A%87%E7%BE%8E%E8%A1%93%E9%A4%A8&path=&index=&sort=number20,Number17,Score&searchbox=1"
            >
              <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
            </router-link>
          </v-col>
        </v-row>
        <!--▼美術鑑賞・観劇におすすめ双眼鏡-->

        <!--▼スポーツ観戦におすすめ双眼鏡-->
        <operaglassTitle
          :txt="'スポーツ観戦におすすめ双眼鏡'"
          :id="'a3'"
          :backgroundImg="'/ec/images2/special/camera/operaglass/og-ttl02.gif'"
          :color="'#0085ed'"
          :rgba1="'0,133,237,1'"
          :rgba2="'133,197,247,1'"
        />

        <v-container>
          <v-card outlined color="#E5F3FD" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg mt-6" elevation="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4955295135417">
                    <v-img src="	/ec/images2/special/camera/operaglass/pd11.jpg" max-width="100%" height="auto"></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-mzk">ビクセン アリーナスポーツ M 8×25 8倍双眼鏡</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >対物有効径25mm、倍率8倍、明るい視界でスポーツ観戦に最適で<v-divider />
                    す。新開発の「オーロラコート」で、野球やサッカーのナイトゲ<v-divider />ームでも選手を鮮明に見ることができます。アイレリーフが<v-divider />16mmの<a
                      v-scroll-to="'#hieye'"
                      >ハイアイポイント</a
                    >設計で、メガネをかけていても見やす<v-divider /> く、アイメイクも気になりません♪</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295135417"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
              <p class="text-center mt-4">
                オーロラコートで、鮮やかさがココまで違う！<br /><v-img
                  src="/ec/images2/special/camera/operaglass/pd11-img.jpg"
                  max-width="100%"
                  height="auto"
                ></v-img>
              </p>
              <v-img src="/ec/images2/special/camera/operaglass/img01.jpg" max-width="100%" height="auto"></v-img>
              <div class="text-center mt-2">
                <v-hover v-slot="{ hover }">
                  <a v-scroll-to="'#hieye'">
                    <v-btn :elevation="hover ? 6 : 2" color="light-blue" class="white--text px-6" height="50px"> → ハイアイポイントって何？ </v-btn>
                  </a>
                </v-hover>
              </div>
            </v-card>
          </v-card>
        </v-container>
        <!-- ↓ その他のおすすめ商品はこちら -->
        <v-row justify="end" align-content="center">
          <v-col cols="9" sm="4">
            <router-link
              to="/ec/list?narrow18=0&keyword=スポーツ観戦双眼鏡&category=&q=スポーツ観戦双眼鏡&path=&index=&sort=number20,Number17,Score&searchbox=1"
            >
              <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
            </router-link>
          </v-col>
        </v-row>

        <!--▼アウトドア・バードウォッチングに-->
        <operaglassTitle
          :txt="'アウトドア・バードウォッチングに'"
          :id="'a4'"
          :backgroundImg="'	/ec/images2/special/camera/operaglass/og-ttl03.gif'"
          :color="'#76c200'"
          :rgba1="'114,192,0,1'"
          :rgba2="'173,240,75,1'"
        />

        <v-container>
          <v-card outlined color="#F1F9E5" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg mt-6" elevation="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4571137587871">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/8d3/6fa/925/9b0/6e6/6a1/923/101/dcf/5c8/78p/s1c/mbl/u/L.jpg"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-mdk">ニコン 8倍双眼鏡 PROSTAFF 7S 8x30</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >高いレベルでバランスの取れた倍率8倍の本格派双眼鏡。全てのレ<v-divider />ンズ・プリズムに多層膜コーティングが採用されて明るい視界を<v-divider />実現し、見え味もシャープです！
                    窒素ガスを充填した防水・防曇<v-divider />構造で、バードウォッチングなどのアウトドアにおいて優れたパ<v-divider />
                    フォーマンスを発揮します！</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4571137587871"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
              <v-row class="mt-4 notes">
                <v-col cols="4">
                  <v-avatar width="100%" height="100%">
                    <v-img src="/ec/images2/special/camera/operaglass/hakutyo.jpg" max-width="100%" height="auto"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="4">
                  <v-avatar width="100%" height="100%">
                    <v-img src="/ec/images2/special/camera/operaglass/hukurou.jpg" max-width="100%" height="auto"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="4">
                  <v-avatar width="100%" height="100%">
                    <v-img src="	/ec/images2/special/camera/operaglass/nature.jpg" max-width="100%" height="auto"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-container>
        <!-- ↓ その他のおすすめ商品はこちら -->
        <v-row justify="end" align-content="center">
          <v-col cols="9" sm="4">
            <router-link
              to="/ec/list?narrow18=0&keyword=アウトドアバードウォッチング双眼鏡&category=&q=アウトドアバードウォッチング双眼鏡&path=&index=&sort=number20,Number17,Score&searchbox=1"
            >
              <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
            </router-link>
          </v-col>
        </v-row>
        <!--↑アウトドア・バードウォッチングに-->

        <!--▼星空鑑賞におすすめ双眼鏡-->
        <operaglassTitle
          :txt="'星空鑑賞におすすめ双眼鏡'"
          :id="'a5'"
          :backgroundImg="'/ec/images2/special/camera/operaglass/og-ttl04.gif'"
          :color="'#FE7223'"
          :rgba1="'254,114,35,1'"
          :rgba2="'255,167,118,1'"
        />

        <v-container>
          <v-card outlined color="#FEE9D3" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg mt-6" elevation="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4955295191734">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/efc/9d7/f90/64a/741/9a0/5b1/07b/5b8/9f3/99h/z6z/vhu/h/L.jpg"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-dik">ビクセン SG 6.5×32WP 星見用双眼鏡</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >「星を観るためだけに作られた双眼鏡」。さまざまな星の光の波<v-divider />長（＝色）において高い透過率を誇るコーティングにより、「カ<v-divider />ラーバランスに優れた見え味」を実現しています。倍率が6.5倍と<v-divider />低めなのは、手ブレによって解像感を低下させないため。明るく<v-divider />
                    クリアな視界で、カラフルな星空を堪能できます♪</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295191734"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
              <v-row class="mt-4 notes" dense justify="center">
                <v-col cols="12" sm="5">
                  <v-img src="/ec/images2/special/camera/operaglass/sg6.5-1.gif" max-width="100%" height="auto"></v-img>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-img src="/ec/images2/special/camera/operaglass/sg6.5-2.jpg" max-width="100%" height="auto"></v-img>
                </v-col>
              </v-row>
              <p class="text-center">SG6.5波長比較グラフ ＆ 上に向けたときのバランス◎</p>
            </v-card>
          </v-card>
        </v-container>
        <!-- ↓ その他のおすすめ商品はこちら -->
        <v-row justify="end" align-content="center">
          <v-col cols="9" sm="4">
            <router-link to="/ec/list?narrow18=0&keyword=星見用双眼鏡&category=&q=星見用双眼鏡&path=&index=&sort=number20,Number17,Score&searchbox=1">
              <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
            </router-link>
          </v-col>
        </v-row>

        <!--▼ブレずに表情までよく見える防振タイプ-->
        <operaglassTitle
          :txt="'ブレずに表情までよく見える防振タイプ'"
          :id="'a6'"
          :backgroundImg="'/ec/images2/special/camera/operaglass/og-ttl01.gif'"
          :color="'#f53770'"
          :rgba1="'245,55,112,1'"
          :rgba2="'245,55,112,1'"
        />

        <v-container>
          <v-card outlined color="#FEEBF1" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg mt-6" elevation="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4955295114917">
                    <v-img src="	/ec/images2/special/camera/operaglass/pd07.jpg" max-width="100%" height="auto"></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-mmok">ビクセン ATERA H6-12×25 防振ズーム単眼鏡</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >手ブレ補正機能付き、倍率6倍～12倍のズーム式単眼鏡。片手が<v-divider />空くので、コンサートやライブでペンライトを振りながらでも見<v-divider />ることができます♪
                    手ブレ補正と充実したコーティングによって<v-divider />クリアな見え味。星も１等級くらいまで認識でき、さまざまなシ<v-divider />
                    ーンで活躍する単眼鏡です！</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295114917"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
            </v-card>

            <v-card class="pa-6 rounded-lg mt-6" elevation="6">
              <v-row dense class="mb-4">
                <v-col cols="12" md="4">
                  <router-link to="/ec/pd/4955295114955">
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/aa7/d61/dfe/a02/f10/d89/404/639/5d2/015/d9g/izw/aa5/t/L.jpg"
                      max-width="100%"
                      height="auto"
                    ></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-title class="ma-0 pa-0 font-weight-bold bd-mmok">ビクセン 12倍双眼鏡 ATERA H12×30 ブラック</v-card-title>
                  <v-card-text class="my-2 line-height-2 text-subtitle-1"
                    >防振双眼鏡タイプでは最軽量クラス。単４電池２本で駆動するの<v-divider />で電池の調達も楽チン！ ATERA H12x30の防振は、コンサート会<v-divider />場で観客が飛んだり跳ねたりしたときの「縦揺れ」に強いという<v-divider />特徴があります。通常の双眼鏡よりも少し倍率が高めな12倍なの<v-divider />
                    もうれしいポイント。じっくりしっかりコンサートを楽しみたい<v-divider />という方には大変おすすめです。</v-card-text
                  >
                  <p class="btndtl">
                    <router-link to="/ec/pd/4955295114955"><img src="/ec/images2/special/camera/operaglass/btn_dtl.png" alt="詳細はこちら" /></router-link></p
                ></v-col>
              </v-row>
              <watchInVideo :src="'https://www.youtube.com/embed/b4SRAnjwfNI?rel=0'" :width="'100%'" :height="400" />
              <p class="mt-4">（※ベージュは販売完了商品です）</p>
            </v-card>
          </v-card>
        </v-container>
        <!-- ↓ その他のおすすめ商品はこちら -->
        <v-row justify="end" align-content="center">
          <v-col cols="9" sm="4">
            <router-link to="/ec/list?narrow18=0&keyword=防振双眼鏡&category=&q=防振双眼鏡&path=&index=&sort=number20,Number17,Score&searchbox=1">
              <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
            </router-link>
          </v-col>
        </v-row>
        <!--↑ブレずに表情までよく見える防振タイプ-->

        <!--↓双眼鏡の基礎知識-->
        <h2 class="ttl02 mt-12" id="a7">双眼鏡の基礎知識<v-icon color="#8748B0" class="mx-2">fas fa-binoculars</v-icon></h2>

        <v-container>
          <v-card outlined color="#FEEBF1" class="pa-4 rounded-lg">
            <v-card class="pa-6 rounded-lg" elevation="6">
              <v-card-title class="font-weight-bold text-h5 justify-center pt-0"> Ｑ.双眼鏡を使うと、どのくらいの大きさで見えるの？</v-card-title>
              <v-card-text class="my-2 line-height-2 text-subtitle-1"
                >Ａ.「<span class="tx-red">距離÷倍率</span
                >」で、双眼鏡を使わずに見える大きさのイメージができます。<v-divider />例えば100m先のアーティストを見る場合、<v-divider />場で観客が飛んだり跳ねたりしたときの「縦揺れ」に強いという<v-divider />
                <span class="tx-red">10倍の双眼鏡</span>を使うと「100(m)÷10(倍)＝<span class="tx-red">10m先</span
                >」にアーティストが見えるイメージ。<v-divider /> <span class="tx-red">8倍の双眼鏡</span>を使うと「100(m)÷8(倍)＝<span class="tx-red"
                  >12.5m先</span
                >」にアーティストが見えるイメージです。</v-card-text
              >
              <v-img src="/ec/images2/special/camera/operaglass/qa001.gif" max-width="90%" height="auto"></v-img>
              <p class="mb-8">
                (自分の席からステージまでの距離がわからない場合)<br />ドームの広さは大きくても100m～150mなので、このイメージを参考にしてくださいね♪
              </p>

              <v-card-title class="font-weight-bold text-h5 justify-center pt-0"> Ｑ.なぜ倍率8倍、10倍の双眼鏡が人気なの？</v-card-title>
              <v-card-text class="mt-2 mb-8 line-height-2 text-subtitle-1 px-0"
                >Ａ.双眼鏡や単眼鏡は倍率が大きくなるほど、レンズが暗くなり、手ブレが増えます。動きの多いアーティスト<v-divider />や選手を見るとき、倍率が高いと追いかけることができません。なので、<span
                  class="tx-red"
                  >コンサート・スポーツ観戦では手ブレ</span
                ><v-divider /><span class="tx-red">の少ない倍率8倍、10倍を選ぶ</span>のがスタンダードなんです。<v-divider />
                （＊見る対象の大きさや距離によっては、倍率8倍・10倍では足りない場合もありますので、見る対象との距離<v-divider />に合わせて双眼鏡の倍率を選びましょう！）<v-divider />高倍率双眼鏡の手ブレ防止には、三脚や一脚に双眼鏡を載せて使用すると効果的です。</v-card-text
              >

              <v-card-title class="font-weight-bold text-h5 justify-center pt-0"> たくさんの双眼鏡があるけど…何が違うの？</v-card-title>
              <v-card-text class="my-2 line-height-2 text-subtitle-1 px-0"
                >Ａ.双眼鏡にはいろいろな違いがありますが、<span class="tx-red">一番の大きな差は「コーティング」</span
                >です。<v-divider />コーティングされた双眼鏡は光の損失が抑えられ、明るい視野に。<span class="tx-red"
                  >マルチコートなら、コントラストが高くクッ</span
                ><v-divider /><span class="tx-red">キリとした見え味に。</span>良質なコーティングが施された双眼鏡を選びましょう。</v-card-text
              >
              <v-row class="mb-10">
                <v-col cols="12" sm="6">
                  <p class="font-weight-bold text-h6">【単層コート・マルチコートの見分け方】</p>
                  <p class="text-subtitle-2">
                    普及機は薄い青色のコーティング（単層コート）で、高級機はマルチコート（多層膜コート）を施してあり、表面反射を減らして光の透過率を高めてあります。<br />
                    マルチコートのレンズは、画像のように反射が緑色に見えます。
                  </p>
                </v-col>
                <v-col cols="12" sm="3">
                  <p class="caption">
                    【対物レンズ反射の図】<br />
                    <v-img src="/ec/images2/special/camera/operaglass/cort_01.jpg" max-width="100%" height="auto"></v-img><br />左:単層コート 右:多層膜コート
                  </p>
                </v-col>
                <v-col cols="12" sm="3">
                  <p class="caption">
                    【接眼レンズ反射の図】<br />
                    <v-img src="/ec/images2/special/camera/operaglass/cort_02.jpg" max-width="100%" height="auto"></v-img><br />左:コーティングなし
                    右:多層膜コート
                  </p>
                </v-col>
              </v-row>

              <v-card-title class="font-weight-bold text-h5 justify-center pt-0"> Ｑ.コーティングがよくなると具体的に何が違うの？</v-card-title>
              <v-card-text class="my-2 line-height-2 text-subtitle-1 px-0"
                >Ａ.コンサートでの使用を例に挙げてみましょう。コンサートの照明は「逆光」です。双眼鏡が単層コートの場<v-divider />合、光の損失が多いため、双眼鏡に取り込めない光が反射します。すると、双眼鏡と照明の間に「反射した光の<v-divider />カーテン」が発生します。このカーテン越しに見ると、アーティストがもやもやと見えます。（これは「フレ<v-divider />ア」という現象です）<v-divider />これが<span
                  class="tx-red"
                  >「マルチコート」や、「フルマルチコート」になると、どんどんとクリアに見える</span
                >ようになるんです！<v-divider /> せっかくのコンサート、くっきりはっきり見たいですよね！</v-card-text
              >
              <p class="text-center">
                「もやもや見える」のイメージはこんな感じです。<br /><v-img
                  src="	/ec/images2/special/camera/operaglass/cort_05.gif"
                  max-width="90%"
                  height="auto"
                ></v-img>
              </p>

              <v-row class="mb-10 mt-2">
                <v-col cols="12" sm="6">
                  <p class="font-weight-bold text-h6">■双眼鏡の中を撮影しました</p>
                  <p class="text-subtitle-2">
                    コーティングの違いにより、接眼レンズ側から見ると、画像のように違って見えます。良質のコーティングが施されているものは、フレアーやゴーストの発生が抑えられ、コントラストが高くスッキリとした視界が得られます。<span
                      class="tx-red"
                      >日中の野外コンサートやスポーツ観戦には、マルチコートの双眼鏡</span
                    >をおすすめします。
                  </p>
                </v-col>
                <v-col cols="12" sm="3">
                  <p class="caption">
                    <v-img src="/ec/images2/special/camera/operaglass/cort_03.jpg" max-width="100%" height="auto"></v-img><br />左:単層コート
                    接眼レンズ側:コーティングなし
                  </p>
                </v-col>
                <v-col cols="12" sm="3">
                  <p class="caption">
                    <v-img src="	/ec/images2/special/camera/operaglass/cort_04.jpg" max-width="100%" height="auto"></v-img><br />左:コーティングなし
                    接眼レンズ側:コーティングあり
                  </p>
                </v-col>
              </v-row>

              <div id="hieye"></div>
              <v-card-title class="font-weight-bold text-h5 justify-center pt-0"> Ｑ.ハイアイポイントって何？</v-card-title>
              <v-card-text class="my-2 line-height-2 text-subtitle-1 px-0"
                >Ａ.<span class="tx-red">アイレリーフが15mm以上の双眼鏡</span>です。長時間観察でも目が疲れにくく、メガネをかけたままでも見るこ<v-divider />
                とができます。</v-card-text
              >

              <v-card class="bg-mr pa-4">
                <v-row dense>
                  <v-col cols="12" sm="7">
                    <p class="text-subtitle-2">
                      アイレリーフとは、双眼鏡をのぞいた際に、全視野を見ることができる目の位置（アイポイント）と接眼レンズ面との距離を表しています。<br />
                      アイレリーフが長い設計＝ハイアイポイントの双眼鏡ほど、のぞきやすく、目の疲れが軽減します。<span class="tx-red">メガネをかけている人</span
                      >には特におすすめ！！<br />
                      また、女性はアイメイクが気になりますよね。双眼鏡にあまり目を近づけたくありません。ハイアイポイントの双眼鏡であれば、少し目を離して見ることができるので、アイメイクを気にせず、集中できますよ♪
                    </p>
                  </v-col>
                  <v-col cols="12" sm="5">
                    <v-img src="/ec/images2/special/camera/operaglass/qa002.gif" max-width="100%" height="auto"></v-img>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="4" v-for="(n, index) in 3" :key="index">
                    <p class="text-subtitle-2" v-if="n === 1">アイレリーフが短いと…<br />双眼鏡と目の距離が近い！</p>
                    <p class="text-subtitle-2" v-if="n === 2">アイレリーフが長いと…<br />離れても見やすい！</p>
                    <p class="text-subtitle-2" v-if="n === 3">アイレリーフが長いと…<br />メガネの上からでも見やすい！</p>
                    <v-img :src="`/ec/images2/special/camera/operaglass/qa00${2 + n}.jpg`" max-width="100%" height="auto"></v-img>
                  </v-col>
                </v-row>

                <v-row class="mb-10">
                  <v-col cols="12" sm="6" v-for="(n, index) in 2" :key="index">
                    <p class="text-subtitle-2" v-if="n === 1">メガネをかけている方、アイメイクが気になる方は見口を下げてから双眼鏡を使いましょう。</p>
                    <p class="text-subtitle-2" v-if="n === 2">裸眼で見る場合は、見口を上げると横からの光が入らなくなりますます。</p>
                    <v-img :src="`/ec/images2/special/camera/operaglass/qa00${5 + n}.jpg`" max-width="80%" height="auto"></v-img>
                  </v-col>
                </v-row>
              </v-card>

              <v-card-title class="font-weight-bold text-h5 justify-center pt-0 mt-12"> Ｑ.双眼鏡とオペラグラスの違いは？</v-card-title>

              <v-card-text class="my-2 line-height-2 text-subtitle-1 px-0"
                ><v-divider />Ａ.簡単に言うと構造が違います。<v-divider />オペラグラスはプリズムを使わない原始的な構造で、低倍率のものがほとんどです。2倍～4倍という低い倍率で<v-divider />あれば小型・軽量・低価格ということもありオペラグラスでも十分です。<v-divider />しかし、オペラグラスは構造上、倍率が高くなると実視界が狭くなってしまいます。そうなるとやはり、望遠鏡<v-divider />と同じようにプリズムを使用する双眼鏡のほうが、遠くの対象物を鮮明に見ることができるのでおすすめです。</v-card-text
              >
              <v-row>
                <v-col cols="12" sm="6">
                  <router-link to="/ec/pd/4955295134984">
                    <p class="text-center pa-4">
                      ビクセン ジョイフル M S10×21 10倍双眼鏡<br />
                      <v-img
                        src="https://shopimg.kitamura.jp/images/pd/02a/c8b/2f2/ba9/c65/b29/d59/cd8/56f/c17/c0n/v0w/pp0/w/M.jpg"
                        max-width="100%"
                        height="auto"
                        class="hover"
                      ></v-img>
                    </p>
                  </router-link>
                  <p>高倍率ならプリズム搭載でクリアに見える双眼鏡がおすすめ！</p>
                </v-col>
                <v-col cols="12" sm="6">
                  <router-link to="/ec/pd/4955295134984">
                    <p class="text-center pa-4">
                      ビクセン 3倍双眼鏡 コンパクトオペラ3×28<br />
                      <v-img
                        src="https://shopimg.kitamura.jp/images/pd/952/717/2af/648/e01/4ea/79e/51f/b27/832/217/3vf/ykv/t/M.jpg"
                        max-width="100%"
                        height="auto"
                        class="hover"
                      ></v-img>
                    </p>
                  </router-link>
                  <p>低倍率ならシンプルな構造で小型・軽量・低価格のオペラグラスがおすすめ</p>
                </v-col>
              </v-row>
              <!-- ↓ その他のおすすめ商品はこちら -->
              <v-row justify="end" align-content="center" class="mb-10">
                <v-col cols="9" sm="4">
                  <router-link
                    to="/ec/list?narrow18=0&keyword=オペラグラス&category=双眼鏡%2F望遠鏡%3A双眼鏡%3A3～7倍&path=双眼鏡%2F望遠鏡%3A双眼鏡%3A3～7倍&q=オペラグラス&searchbox=1&n20c=完了商品は除く&price=a&sort=number20,Number16,Score"
                  >
                    <v-img src="/ec/images2/special/camera/operaglass/btn_oth.png" width="240" height="30"></v-img>
                  </router-link>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-container>
        <!--↑双眼鏡の基礎知識-->

        <!--↓おすすめの双眼鏡 商品一覧-->
        <h2 id="a8" class="ttl02 mt-12">おすすめの双眼鏡 商品一覧</h2>
        <!-- ↓ 特集IDでの商品一覧表示 -->
        <product-list-by-special-id class="mb-5" :specialId="773" />

        <!--↓イメージング-->
        <h2 class="ttl02 mt-12">撮った写真をかわいくプリント♪</h2>
        <v-container>
          <v-card class="pa-4 rounded-lg mt-6" elevation="8">
            <v-row dense class="mb-4">
              <v-col cols="12" md="5">
                <v-img src="/ec/images2/special/camera/operaglass/pd09.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col cols="12" md="7">
                <v-card-title class="ma-0 pa-0 font-weight-bold bd-mdk">デザインフレームプリント</v-card-title>
                <v-card-text class="my-2 line-height-2 text-subtitle-1 px-0"
                  >かわいいフレームがたくさん♪<v-divider />コメントを書いたり、マスキングテープやシールでデコってさらにか<v-divider />わいく★<v-divider />
                  友達に配っても喜ばれます♪</v-card-text
                >
                <p class="btndtl">
                  <a href="https://www.kitamura-print.com/print/frame_print/?_ga=2.58201514.16120489.1628554499-279164427.1627285160"
                    ><img src="	/ec/images2/special/camera/operaglass/btn_img.png" alt="詳細はこちら"
                  /></a></p
              ></v-col>
            </v-row>
          </v-card>
        </v-container>

        <v-container>
          <v-card class="pa-4 rounded-lg mt-6" elevation="8">
            <v-row dense class="mb-4">
              <v-col cols="12" md="5">
                <v-img src="/ec/images2/special/camera/operaglass/pd10.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
              <v-col cols="12" md="7">
                <v-card-title class="ma-0 pa-0 font-weight-bold bd-mdk">ワンダーシャッフルプリント</v-card-title>
                <v-card-text class="my-2 line-height-2 text-subtitle-1 px-0"
                  >たくさんの写真をおしゃれに一枚に♪<v-divider />コンサートやライブの一日を一枚にまとめて・・・チケットやグッズ<v-divider />の写真もお忘れなく★<v-divider />
                  落書きやスタンプもできて、ハートのテンプレートやかわいい背景色<v-divider />も選べます！</v-card-text
                >
                <p class="btndtl">
                  <a href="https://www.kitamura-print.com/print/wonder_shuffle/?_ga=2.92692253.16120489.1628554499-279164427.1627285160"
                    ><img src="	/ec/images2/special/camera/operaglass/btn_img.png" alt="詳細はこちら"
                  /></a></p
              ></v-col>
            </v-row>
          </v-card>
        </v-container>

        <!-- ↓ SNS -->
        <facebookAndTwitter />

        <p id="a9" class="mb-0 ml-3">▼おすすめ特集</p>
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
import OperaglassTitle from '@/components/common/special/operaglass/operaglass-title.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'operaglass',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    operaglassTitle: OperaglassTitle,
    watchInVideo: WatchInVideo,
    'product-list-by-special-id': ProductListBySpecialId,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures
  },
  setup: (props, context) => {
    document.title = '双眼鏡の選び方 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '双眼鏡の選び方 | メガネやアイメイクに配慮した双眼鏡、ブレずによく見える防振単眼鏡などをご紹介。コンサート・ライブ、スポーツ観戦、野鳥観察、星空鑑賞、美術鑑賞を、双眼鏡でもっと楽しみましょう♪')

    const state = reactive({
      naviList: [
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/operaglass/og-a01.png', href: '#a1' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/operaglass/og-a05.png', href: '#a2' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/operaglass/og-a02.png', href: '#a3' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/operaglass/og-a03.png', href: '#a4' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/operaglass/og-a04.png', href: '#a5' },
        { src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/operaglass/og-a07.png', href: '#a6' }
      ],
      naviList2: [
        { name: '基礎知識', href: '#a7' },
        { name: '商品一覧', href: '#a8' },
        { name: '特集一覧', href: '#a9' }
      ],

      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/girlscamera',
          img: 'https://shop.kitamura.jp/images/banner/1390.jpg',
          alt: '女子がきゅんとくる ミラーレス一眼カメラ'
        },
        {
          href: '/ec/special/camera/strap',
          img: 'https://shopimg.kitamura.jp/images/banner/1392.gif',
          alt: 'おしゃれなストラップ特集'
        },
        {
          href: '/ec/special/camera/filmcamera',
          img: 'https://shopimg.kitamura.jp/images/banner/3778.gif',
          alt: 'チェキ・チェキフィルム、チェキアルバムおすすめ商品'
        },
        {
          href: 'https://shop.kitamura.jp/ec/special/general/wirelessimageshare',
          img: 'https://shop.kitamura.jp/images/banner/2785.gif',
          alt: 'デジカメとスマホを無線でつないで写真を楽しもう'
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
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップトップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '双眼鏡の選び方',
          disabled: true
        }
      ],
      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: [
        '4955295135417',
        '4955295135424',
        '4955295147236',
        '4955295147243',
        '4571137582289',
        '4571137582296',
        '4571137581022',
        '4571137587871',
        '4955295145829',
        '4955295114917',
        '4545350038298',
        '4545350038311',
        '4545350038304',
        '4545350038328',
        '4549212288784',
        '4549212288791',
        '4549212288807',
        '4549212288814',
        '4549212288821',
        '4549212288838'
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
        // 価格・人気アクセサリー
        const productListResult = await ProductService.fetchProducts(state.productJanCodeList, true);
        state.productDetailList = productListResult.items;
      } catch (error) {
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

<style lang='scss' scoped>
.glasses .ttl02 {
  background: url(/ec/images2/special/camera/operaglass/og-ttl08.gif) no-repeat;
  padding: 15px 0 0 0;
  margin: 0 0 20px 0;
  height: 55px;
  font-size: 150%;
  color: #0c0d0f;
  text-align: center;
  font-weight: normal;
  width: 100%;
  display: block;
  line-height: 1em;
}

@media screen and (max-width: 509px) {
  .glasses .ttl02 {
    background: url(/ec/images2/special/camera/operaglass/og-ttl08.gif) no-repeat right;
    padding: 15px 0 0 0;
    margin: 0 0 20px 0;
    font-size: 18px;
    color: #0c0d0f;
    text-align: left;
    font-weight: bold;
    width: 100%;
    display: block;
    line-height: 1em;
  }
}

.lnavi2pc {
  width: auto;
  height: auto;
  font-size: 17px;
  font-weight: bold;
  border-bottom: 3px #c085e0 solid;
  padding: 0 0 4px 0;
  color: #c085e0;
}

.lnavi2sp {
  width: auto;
  height: auto;
  font-size: 12px;
  font-weight: bold;
  border-bottom: 3px #c085e0 solid;
  padding: 0 0 4px 0;
  color: #c085e0;
}

.bd-mmok {
  border-bottom: 2px #f53770 solid;
  padding: 0 0 5px 0;
}

.bd-mrk {
  border-bottom: 2px #995fbe solid;
  padding: 0 0 5px 0;
}

.bd-mzk {
  border-bottom: 2px #0071ba solid;
  padding: 0 0 5px 0;
}

.bd-mdk {
  border-bottom: 2px #76c200 solid;
  padding: 0 0 5px 0;
}

.bd-dik {
  border-bottom: 2px #fe9e29 solid;
  padding: 0 0 5px 0;
}

.bg-mr {
  background: #ece1f4;
}

.btndtl {
  width: 100%;
  text-align: center;
  margin: 0;
  display: block;
}

.notes {
  background: url(/ec/images2/special/camera/operaglass/bg03.png);
}

.tx-red {
  color: #ff0004;
  background-color: #fff9ac;
}

.line-height-2 {
  line-height: 2.4em;
}
</style>
