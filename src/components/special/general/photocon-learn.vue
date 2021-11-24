<template>
  <v-app>
    <div class="photocon-learn">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />
        <!-- ↑url copy -->
        <v-container>
          <v-row>
            <v-col cols="12" class="float-left">
              <h1 class="text-body-1">フォトコンテスト受賞作品から学ぶ 【レンズ・フィルター・星空撮影】</h1>
              <v-img
                src="/ec/images2/special/general/photocon-learn/00.gif"
                alt="フォトコンテスト受賞作品から学ぶ 【レンズ・フィルター・星空撮影】"
                class="mx-auto mt-4"
                max-width="950px"
                max-height="130"
              ></v-img>
            </v-col>

            <!--↓アンカー-->
            <v-container>
              <v-row>
                <v-col cols="12" md="4" class="ma-0"
                  ><v-img
                    src="/ec/images2/special/general/photocon-learn/p-l01.gif"
                    alt="受賞作品から学ぶ"
                    class="mx-auto mt-4"
                    max-width="241"
                    max-height="46"
                  ></v-img>
                  <v-list dense>
                    <v-list-item-group v-model="ankerBotan" color="primary">
                      <v-list-item v-for="(anker, i) in anker" :key="i" v-scroll-to="anker.link">
                        <v-list-item-icon class="mr-2">
                          <v-icon v-text="anker.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="anker.text" class="text-body-1"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
                <v-col cols="12" md="4" class="ma-0"
                  ><v-img
                    src="/ec/images2/special/general/photocon-learn/p-l02.gif"
                    alt="作品のプリントにおすすめ"
                    class="mx-auto mt-4"
                    max-width="241"
                    max-height="46"
                  ></v-img>
                  <v-list dense>
                    <v-list-item-group v-model="ankerBotan2" color="primary">
                      <v-list-item v-for="(anker2, i) in anker2" :key="i" v-scroll-to="anker2.link">
                        <v-list-item-icon class="mr-2">
                          <v-icon v-text="anker2.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="anker2.text" class="text-body-1"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
                <v-col cols="12" md="4" class="mb-3"
                  ><v-img
                    src="/ec/images2/special/general/photocon-learn/p-l03.gif"
                    alt="コンテストに参加しませんか？"
                    class="mx-auto mt-4"
                    max-width="241"
                    max-height="46"
                  ></v-img>
                  <v-list dense>
                    <v-list-item-group v-model="ankerBotan3" color="primary">
                      <v-list-item v-for="(anker3, i) in anker3" :key="i" v-scroll-to="anker3.link">
                        <v-list-item-icon class="mr-2">
                          <v-icon v-text="anker3.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="anker3.text" class="text-body-1"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list> </v-col></v-row
            ></v-container>
            <!--↑アンカー-->
            <!--↓魚眼レンズ編-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mb-5" id="renzu">
                  <h2 class="mt-5 mb-4 font-weight-bold grey--text text--darken-4 text-h4">
                    <v-icon class="orange--text text--darken-4">fas fa-stop</v-icon><span class="text-h6 font-weight-bold"> 受賞作品から学ぶ </span>レンズ編
                  </h2>
                  <p class="mb-6">魚眼レンズ、マクロレンズ使用作品をご紹介します。</p>
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/g-01.gif"
                    alt="魚眼レンズ"
                    class="mx-auto mt-4 mb-4"
                    max-width="840"
                    max-height="140"
                  ></v-img>
                  <p class="mb-6">
                    魚眼レンズは、臨場感ある作品や、おもしろい構成の写真が撮影できます。<br />風景、人物問わず使えるので、ぜひ挑戦してください。
                  </p>
                </v-col>
              </v-row>
            </v-container>
            <v-container cols="12">
              <h4 class="mt-5 mb-6 text-h6 font-weight-bold">魚眼レンズ使用のフォトコンテスト受賞作品はこちら</h4>
              <v-row v-for="(gallery, index) in galleryList" :key="index" dense class="d-box">
                <v-col cols="12" md="6" class="float-left pa-3">
                  <div class="pointer" @click="() => showGalleryImg(index)">
                    <v-img :src="gallery.src" max-width="100%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'mx-auto hover' : 'mx-auto'"></v-img>
                    <v-img src="/ec/images2/special/general/photocon-learn/megane.gif" max-width="16px" height="21px" class="ml-auto hover"></v-img>
                  </div>
                  <p class="text-h6 font-weight-bold mb-2"><span class="text-caption">365日フォトコンテスト 受賞作品</span><br />{{ gallery.title }}</p>
                  <p class="mb-2 including-line-breaks text-body-2">{{ gallery.txt }}</p>
                </v-col>
              </v-row>
              <vue-easy-lightbox :visible="visibleGallery" :imgs="galleryList[index].src" :index1="index" @hide="handleHide"></vue-easy-lightbox>
            </v-container>

            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr bordd-or" outlined>
                  <h4 class="text-h5 cl deep-orange--text text--darken-2">魚眼レンズのココがいい！</h4>
                  <v-col cols="12" md="6" class="float-left"
                    ><p>
                      ■勢い・動きのあるおもしろい写真になる<br />
                      ■空気感、臨場感、奥ゆきが表現できる<br />
                      ■広角レンズより広い範囲の被写体を撮影できる
                    </p></v-col
                  >
                  <v-col cols="12" md="6" class="float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/list?category=交換レンズ&keyword=魚眼&narrow18=0&n20c=完了商品は除く&sort=popularity&limit=100`"
                      ><span class="v-btn__content white--text">魚眼レンズ一覧を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑魚眼レンズ編-->

            <!--↓マクロ-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/m-01.gif"
                    alt="マクロレンズ"
                    class="mx-auto mt-4 mb-4"
                    max-width="840"
                    max-height="140"
                  ></v-img>
                  <p class="mb-6">
                    マクロレンズは、背景のボケが美しく撮影でき、アーティスティックな作品ができます。<br />
                    植物や昆虫、アクセサリーなどの小物を、おしゃれに撮影してください。
                  </p>
                </v-col>
              </v-row>
            </v-container>
            <v-container cols="12">
              <h4 class="mb-6 text-h6 font-weight-bold">マクロレンズ使用のフォトコンテスト受賞作品はこちら</h4>
              <v-row v-for="(gallery2, index2) in galleryList2" :key="index2" dense class="d-box">
                <v-col cols="12" md="6" class="float-left pa-3">
                  <div class="pointer" @click="() => showGalleryImg2(index2)">
                    <v-img :src="gallery2.src" max-width="100%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'mx-auto hover' : 'mx-auto'"></v-img>
                    <v-img src="/ec/images2/special/general/photocon-learn/megane.gif" max-width="16px" height="21px" class="ml-auto hover"></v-img>
                  </div>
                  <p class="text-h6 font-weight-bold mb-2"><span class="text-caption">365日フォトコンテスト 受賞作品</span><br />{{ gallery2.title }}</p>
                  <p class="mb-2 including-line-breaks text-body-2">{{ gallery2.txt }}</p>
                </v-col>
              </v-row>
              <vue-easy-lightbox :visible="visibleGallery2" :imgs="galleryList2[index2].src" :index2="index2" @hide="handleHide2"></vue-easy-lightbox>
            </v-container>
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr bordd-or" outlined>
                  <h4 class="text-h5 cl deep-orange--text text--darken-2">マクロレンズのココがいい！</h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>
                      ■小さなものを大きく撮影できる<br />
                      ■普段と違った目線の写真が撮れる<br />
                      ■背景のボケが美しい写真が撮れる<br />
                      ■アーティスティックな作品が撮れる<br /></p
                  ></v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/list?category=交換レンズ&keyword=マクロ&narrow18=0&n20c=完了商品は除く&sort=popularity&limit=100`"
                      ><span class="v-btn__content white--text">マクロレンズ一覧を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑マクロ-->
            <!--↓レンズおすすめ特集-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr mt-4 bordd-osusum" outlined>
                  <h4 class="text-h6 cl red--text text--darken-4">
                    <v-icon class="red--text text--darken-4">far fa-hand-point-right</v-icon>カメラレンズ人気ランキングご紹介
                  </h4>
                  <v-col cols="12" md="6" class="float-left ma-0"><p>当店で人気のレンズ・おすすめレンズをマウント別にランキングでご紹介♪</p></v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <a href="/ec/special/camera/lens"
                      ><v-img
                        src="https://shop.kitamura.jp/images/banner/3016.jpg"
                        alt="カメラレンズ人気ランキング"
                        class="mx-auto mt-4 mb-4 hover"
                        max-width="350"
                        max-height="130"
                      ></v-img
                    ></a>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑レンズおすすめ特集-->
            <!--↓フィルター-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mb-5" id="filt">
                  <h2 class="mt-5 mb-4 font-weight-bold grey--text text--darken-4 text-h4">
                    <v-icon class="orange--text text--darken-4">fas fa-stop</v-icon
                    ><span class="text-h6 font-weight-bold"> 受賞作品から学ぶ </span>レンズフィルター編
                  </h2>
                  <p class="mb-2 text-body-1">
                    レンズフィルターを使うと、より豊かに写真を表現できます。<br />作品がグンとグレードアップしますので、おすすめです！
                  </p>
                  <p class="mb-4">
                    レンズフィルターには、<br />
                    ・光の反射をコントロールし色彩を鮮やかにする<a href="#f-01">PL・偏光フィルター</a><br />
                    ・カメラに入る光の量を落とす<a href="#f-02">ND・減光フィルター</a><br />
                    ・夜景の光を十字型にキラキラさせる<a href="#f-03">クロスフィルター</a><br />
                    などがあります。題材ごとに使い分けて、ステキな作品を撮影してください。
                  </p>
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/r-t01.gif"
                    alt="PL・偏光フィルター"
                    class="mx-auto mt-4 mb-4"
                    max-width="840"
                    max-height="140"
                  ></v-img>
                  <p class="mb-6">
                    PL・偏光フィルターは、色彩のコントラストを高められるので、風景を撮影する方におすすめです。<br />抜けるような青空を表現したいときや、紅葉を鮮やかに表現したいときは、PL・偏光フィルターをご利用ください。
                  </p>
                </v-col>
              </v-row>
            </v-container>
            <v-container cols="12">
              <v-row v-for="(gallery3, index3) in galleryList3" :key="index3" dense class="d-box">
                <v-col cols="12" md="8" class="float-left pa-3">
                  <div class="pointer" @click="() => showGalleryImg3(index3)">
                    <v-img :src="gallery3.src" max-width="100%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'mx-auto hover' : 'mx-auto'"></v-img>
                    <v-img src="/ec/images2/special/general/photocon-learn/megane.gif" max-width="16px" height="21px" class="ml-auto hover"></v-img>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="float-left pa-3">
                  <p class="text-h6 font-weight-bold mb-2"><span class="text-caption">365日フォトコンテスト 受賞作品</span><br />{{ gallery3.title }}</p>
                  <p class="mb-2 including-line-breaks text-body-2">{{ gallery3.txt }}</p>
                </v-col>
              </v-row>
              <vue-easy-lightbox :visible="visibleGallery3" :imgs="galleryList3[index3].src" :index3="index3" @hide="handleHide3"></vue-easy-lightbox>
            </v-container>
            <!--↓plおすすめ品-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr mt-4 bordd-osusum" outlined>
                  <h4 class="text-h6 cl red--text text--darken-4">
                    <v-icon class="red--text text--darken-4">far fa-hand-point-right</v-icon>おすすめPL・偏光フィルターご紹介
                  </h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>紅葉や青空などの風景が、色鮮やかに撮影できる、おすすめのフィルターを集めました。</p>
                    <p class="text-center">
                      <a href="/ec/special/camera/lensfilter/341"
                        ><v-img
                          src="https://shopimg.kitamura.jp/images/pd/5b4/af3/e6f/7f5/170/e31/8b1/6fc/7a0/154/c3b/60v/0pm/c/M.jpg"
                          alt="おすすめPL・偏光フィルター"
                          class="mx-auto hover"
                          max-width="130"
                          max-height="130"
                        ></v-img
                        >おすすめの偏光フィルター・PLフィルター一覧
                      </a>
                    </p></v-col
                  >
                  <v-col cols="12" md="6" class="float-left">
                    <p>『マルミ EXUS(エグザス) サーキュラーPL』を使った紅葉撮影の記事をご紹介。</p>
                    <p class="text-center">
                      <a href="/ec/special/camera/lensfilter/exus"
                        ><v-img
                          src="/ec/images2/special/general/photocon-learn/bnr01.jpg"
                          alt="EXUS"
                          class="mx-auto mt-4 mb-4 hover"
                          max-width="708"
                          max-height="190"
                        ></v-img
                        >風景写真 「紅葉撮影」
                      </a>
                    </p>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑plおすすめ品-->
            <!--↓ND・減光フィルター-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/r-t02.gif"
                    alt="ND・減光フィルター"
                    class="mx-auto mt-4 mb-4"
                    max-width="840"
                    max-height="140"
                  ></v-img>
                  <p class="mb-6">
                    ND・減光フィルターは、色彩に影響を与えずに光量のみを調整できます。<br />
                    滝や渓流の流れをシルクのように柔らかく表現する『流し撮り』をしたいときには、<br />
                    ND・減光フィルターをご利用ください。
                  </p>
                </v-col>
              </v-row>
            </v-container>
            <v-container cols="12">
              <v-row v-for="(gallery4, index4) in galleryList4" :key="index4" dense class="d-box">
                <v-col cols="12" md="8" class="float-left pa-3">
                  <div class="pointer" @click="() => showGalleryImg4(index4)">
                    <v-img :src="gallery4.src" max-width="100%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'mx-auto hover' : 'mx-auto'"></v-img>
                    <v-img src="/ec/images2/special/general/photocon-learn/megane.gif" max-width="16px" height="21px" class="ml-auto hover"></v-img>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="float-left pa-3">
                  <p class="text-h6 font-weight-bold mb-2"><span class="text-caption">365日フォトコンテスト 受賞作品</span><br />{{ gallery4.title }}</p>
                  <p class="mb-2 including-line-breaks text-body-2">{{ gallery4.txt }}</p>
                </v-col>
              </v-row>
              <vue-easy-lightbox :visible="visibleGallery4" :imgs="galleryList4[index4].src" :index4="index4" @hide="handleHide4"></vue-easy-lightbox>
            </v-container>
            <!--↓ndおすすめ品-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr mt-4 mb-4 bordd-osusum" outlined>
                  <h4 class="text-h6 cl red--text text--darken-4">
                    <v-icon class="red--text text--darken-4">far fa-hand-point-right</v-icon>おすすめND・減光フィルター特集ご紹介
                  </h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>
                      アートでキレイな風景写真を撮るならコレ。おすすめのND(減光)フィルター「ND500」。NDフィルターを使うことで、ワンステップUPした、アートでキレイな風景写真が残せます♪
                    </p>
                    <p class="text-center">
                      <a href="/ec/special/camera/lensfilter/nd500"
                        ><v-img
                          src="https://shop.kitamura.jp/images/banner/1252.gif"
                          alt="おすすめのND(減光)フィルターND500"
                          class="mx-auto hover"
                          max-width="350"
                          max-height="130"
                        ></v-img
                        >風景写真の必需品 ND500フィルター
                      </a>
                    </p></v-col
                  >
                  <v-col cols="12" md="6" class="float-left">
                    <p>
                      風景写真「流れる夏色 魅惑の渓流・滝写真」
                      NDフィルターで水の流れを撮る！『NDフィルター』を使った渓流・滝撮影の記事です。おすすめのNDフィルター一覧もあります。
                    </p>
                    <p class="text-center">
                      <a href="/ec/special/camera/lensfilter/1104"
                        ><v-img
                          src="/ec/images2/special/general/photocon-learn/bnr01.jpg"
                          alt="EXUS"
                          class="mx-auto mt-4 mb-4"
                          max-width="720"
                          max-height="120"
                        ></v-img
                        >マルミ DHG NDフィルター
                      </a>
                    </p>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑ndおすすめ品-->

            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr bordd-or" outlined>
                  <h4 class="text-h5 cl deep-orange--text text--darken-2">レンズフィルターの種類と効果 まとめ</h4>
                  <v-col cols="12" md="6" class="float-left"
                    ><p>
                      <a href="/ec/special/camera/lensfilter/341">PL・偏光フィルター</a>
                      <br />
                      ■色彩のコントラストを高め鮮やかな表現に<br />
                      ■水面やガラス面などの反射を除去します<br />
                      ■風景の撮影におすすめ！
                    </p>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/special/camera/lensfilter/341`"
                      ><span class="v-btn__content white--text">PL・偏光フィルターを見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left cl"
                    ><p>
                      <a href="/ec/special/camera/lensfilter/343">ND・減光フィルター</a>
                      <br />
                      ■滝や清流の流し撮りにおすすめです<br />
                      ■日差しの強い野外でも白とびせずに背景をぼかせる
                    </p>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/special/camera/lensfilter/343`"
                      ><span class="v-btn__content white--text">ND・減光フィルターを見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left cl"
                    ><p>
                      <a href="https://shop.kitamura.jp/special/sale-fair/camera/lensfilter/344/">クロスフィルター</a>
                      <br />
                      ■光を十字型にキラキラさせるフィルターです<br />
                      ■夜景・イルミネーションの撮影におすすめ！<br />
                      ■キラキラ光る水面の表現もできます
                    </p>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <v-col cols="12" md="6" class="float-left">
                      <v-img
                        src="/ec/images2/special/general/photocon-learn/tcross-a.jpg"
                        alt="イルミネーション"
                        class="mx-auto"
                        max-width="380"
                        max-height="220"
                      ></v-img
                    ></v-col>
                    <v-col cols="12" md="6" class="float-left">
                      <v-img
                        src="/ec/images2/special/general/photocon-learn/tcross-b.jpg"
                        alt="光る水面"
                        class="mx-auto"
                        max-width="380"
                        max-height="220"
                      ></v-img
                    ></v-col>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`https://shop.kitamura.jp/special/sale-fair/camera/lensfilter/344/`"
                      ><span class="v-btn__content white--text">クロスフィルターを見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑フィルター-->
            <!--↓撮影テクニック-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr mt-4 bordd-osusum" outlined>
                  <h4 class="text-h6 cl red--text text--darken-4">
                    <v-icon class="red--text text--darken-4">far fa-hand-point-right</v-icon>夜景の撮影方法や、いろんなシーンの撮影テクニックをご紹介
                  </h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>
                      <a href="https://shop.kitamura.jp/ec/special/general/how-to/night-view">夜景/イルミネーション写真撮影のコツ</a><br />
                      夜景やイルミネーションの写真撮影のコツを動画でチェック！<br />
                      撮影に便利な、もっと楽しむアイテムをまとめました★
                    </p>
                    <p class="text-center">
                      <a href="https://shop.kitamura.jp/ec/special/general/how-to/night-view"
                        ><v-img
                          src="/ec/images2/special/general/photocon-learn/bnr_night-view708-190.gif"
                          alt="夜景/イルミネーション写真撮影のコツ"
                          class="mx-auto hover"
                          max-width="708"
                          max-height="190"
                        ></v-img
                        >夜景/イルミネーション写真撮影のコツ
                      </a>
                    </p></v-col
                  >
                  <v-col cols="12" md="6" class="float-left">
                    <p>
                      <a href="https://www.kitamura.jp/photo/lesson/" target="_blank">PHOTO LESSON</a>
                      <br />
                      食べものや動物、人物といった日常の撮影方法から、夜景や水族館、海辺などのシチュエーション別撮影方法、さらには誕生日や入学式、結婚式などのイベント別撮影方法まで、「撮りたい」と思った瞬間に使えるテクニックを満載！
                    </p>
                    <v-btn
                      block
                      target="blank"
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`https://www.kitamura.jp/photo/lesson/`"
                      ><span class="v-btn__content white--text">PHOTO LESSON</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑撮影テクニック-->
            <!--↓星空撮影-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mb-5" id="hosi">
                  <h2 class="mt-5 mb-4 font-weight-bold grey--text text--darken-4 text-h4">
                    <v-icon class="orange--text text--darken-4">fas fa-stop</v-icon><span class="text-h6 font-weight-bold"> 受賞作品から学ぶ </span>星空の写真編
                  </h2>
                  <p class="mb-6">壮大な天の川や、星空の輝きを撮影しませんか？</p>
                </v-col>
              </v-row>
            </v-container>
            <v-container cols="12">
              <v-row v-for="(gallery5, index5) in galleryList5" :key="index5" dense class="d-box">
                <v-col cols="12" md="6" class="float-left pa-3">
                  <div class="pointer" @click="() => showGalleryImg5(index5)">
                    <v-img :src="gallery5.src" max-width="100%" height="auto" :class="$vuetify.breakpoint.mdAndUp ? 'mx-auto hover' : 'mx-auto'"></v-img>
                    <v-img src="/ec/images2/special/general/photocon-learn/megane.gif" max-width="16px" height="21px" class="ml-auto hover"></v-img>
                  </div>
                  <p class="text-h6 font-weight-bold mb-2"><span class="text-caption">365日フォトコンテスト 受賞作品</span><br />{{ gallery5.title }}</p>
                  <p class="mb-2 including-line-breaks text-body-2">{{ gallery5.txt }}</p>
                </v-col>
              </v-row>
              <vue-easy-lightbox :visible="visibleGallery5" :imgs="galleryList5[index5].src" :index5="index5" @hide="handleHide5"></vue-easy-lightbox>
            </v-container>
            <v-container>
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/h-01.gif"
                    alt="星空撮影用品"
                    class="mx-auto mt-4 mb-4"
                    max-width="840"
                    max-height="140"
                  ></v-img>
                  <p class="mb-6">
                    長時間露光のブレ対策に、レリーズや三脚をおすすめします。<br />
                    お持ちの一眼カメラと組み合わせて、星空撮影にチャレンジしてください♪ <br />
                    星空・星景撮影には、便利なカメラ用雲台「ポラリエ」をおすすめします。
                  </p></v-col
                >
              </v-row>
            </v-container>
            <!--↓おすすめ品-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr bordd-or mt-5 mb-5" outlined>
                  <h4 class="text-h5 cl deep-orange--text text--darken-2">長時間露光のブレ対策におすすめ 三脚とレリーズ</h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>
                      楽しみにしていた星空撮影、絶対に失敗したくないですよね。<br />
                      星空を撮るには、長時間の露光（バルブ撮影）が必要ですので、ブレがないように、三脚とレリーズを使っての撮影をおすすめします。お持ちのカメラに合う三脚と、レリーズをお探しください。
                    </p>
                    <p class="text-center">
                      <a href="/ec/ct/C008/001/?category=三脚:タイプで選ぶ:アルミ三脚&narrow18=0&sort=popularity&limit=100"
                        ><v-img
                          src="https://shopimg.kitamura.jp/images/pd/f08/088/35e/40c/ead/eab/1ff/498/dfb/85e/a6k/m72/u8u/z/TN.jpg"
                          alt="三脚"
                          class="mx-auto hover"
                          max-width="120"
                          max-height="120"
                        ></v-img>
                      </a>
                    </p>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/ct/C008/001/?category=三脚:タイプで選ぶ:アルミ三脚&narrow18=0&sort=popularity&limit=100`"
                      ><span class="v-btn__content white--text">三脚一覧を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <p>
                      <span class="red--text">★</span>三脚は一般的に<br />
                      ・短時間露出よりも<span class="red--text">露出時間が長くなるほど</span><br />
                      ・広角、標準レンズよりも<span class="red--text">望遠系になるほど</span><br />
                      ・明るい場面よりも<span class="red--text">暗くなるほど</span><br />
                      ・35mmカメラよりも<span class="red--text">中判、大判カメラになるほど</span><br />
                      必要性が高くなります。
                    </p>
                    <p class="text-center">
                      <a
                        href="/ec/list?category=カメラアクセサリー・用品:リモコン・リモートコード&narrow18=0&keyword=レリーズ&n20c=完了商品は除く&sort=popularity&limit=100"
                        ><v-img
                          src="https://shopimg.kitamura.jp/images/pd/529/3ab/1a4/503/e42/5cf/6dd/8dc/3d9/dcf/57d/hrr/9tf/r/TN.jpg"
                          alt="レリーズ"
                          class="mx-auto mt-4 mb-4 hover"
                          max-width="120"
                          max-height="120"
                        ></v-img>
                      </a>
                    </p>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/list?category=カメラアクセサリー・用品:リモコン・リモートコード&narrow18=0&keyword=レリーズ&n20c=完了商品は除く&sort=popularity&limit=100`"
                    >
                      <span class="v-btn__content white--text">レリーズ一覧を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑おすすめ品-->
            <!--↓ポラリエ-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr bordd-or mt-5 mb-5" outlined>
                  <h4 class="text-h5 cl deep-orange--text text--darken-2">ポラリエで星空撮影</h4>
                  <h5 class="text-h6 font-weight-bold">星空・星景撮影に便利な「ポラリエ」で“星粒”や“天の川”を撮影</h5>
                  <v-col cols="12" md="6" class="float-left"
                    ><p>
                      <span class="font-weight-bold text-h6">ポラリエって何？</span><br />
                      <a
                        href="/ec/list?narrow18=0&keyword=ポラリエ&category=双眼鏡%2F望遠鏡%3A星空雲台 ポラリエ&index=all&path=双眼鏡%2F望遠鏡%3A星空雲台 ポラリエ&q=ポラリエ&searchbox=1&n20c=完了商品は除く&s1[]=ビクセン&x=0&y=0&limit=100"
                        >ポラリエ</a
                      >は星の動きを追いかける<span class="red--text">赤道儀の役割をもったカメラ用雲台</span>です。
                    </p>
                    <v-img
                      src="https://shopimg.kitamura.jp/images/pd/b60/a10/665/298/232/292/861/b83/346/80b/ea1/89n/zn0/x/TN.jpg"
                      alt="星空撮影入門"
                      class="mx-auto"
                      max-width="120"
                      max-height="120"
                    ></v-img>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6 mt-6"
                      height="60px"
                      :href="`
                        /ec/list?narrow18=0&keyword=ポラリエ&category=双眼鏡%2F望遠鏡%3A星空雲台 ポラリエ&index=all&path=双眼鏡%2F望遠鏡%3A星空雲台 ポラリエ&q=ポラリエ&searchbox=1&n20c=完了商品は除く&s1[]=ビクセン&x=0&y=0&limit=100
                      `"
                    >
                      <span class="v-btn__content white--text">ポラリエ 商品一覧を見る</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <p>
                      <span class="font-weight-bold text-h6">ポラリエが必要なのはどんなとき？</span><br />
                      “星粒”や“天の川”を撮影したいときには、ポラリエがおすすめです。<br />
                      星は動いているため、長時間露光で撮影すると、線状に写ります。<br />
                      <a href="https://shop.kitamura.jp/ec/special/camera/polarie">「星空撮影入門」</a
                      >では、ポラリエの使い方を動画でご紹介していますので、ぜひご覧ください。
                    </p>
                    <a href="https://shop.kitamura.jp/ec/special/camera/polarie"
                      ><v-img
                        src="https://shop.kitamura.jp/images/banner/1488.gif"
                        alt="星空撮影入門"
                        class="mx-auto hover"
                        max-width="350"
                        max-height="130"
                      ></v-img>
                    </a>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑ポラリエ-->
            <!--↓ソフト-->
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr mt-4 bordd-osusum" outlined>
                  <h4 class="text-h6 cl red--text text--darken-4">
                    <v-icon class="red--text text--darken-4">far fa-hand-point-right</v-icon>ソフトフィルターで幻想的な星空写真に
                  </h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>
                      星空を撮影して、光の表現が少し物足りないな...と感じたら、ソフトフィルターをおすすめします。<br />
                      光のにじみを美しく滑らかに表現できるので、幻想的な仕上がりになります。ロマンチックな星空写真を撮りたい方におすすめです。<br />
                      「<a href="/ec/list?category=交換レンズアクセサリー&narrow18=0&keyword=PRO1D プロソフトン&n20c=完了商品は除く&sort=popularity&limit=40"
                        >ケンコー PRO1D プロソフトン[A]</a
                      >」は星野写真・星景写真など、天体写真の撮影にも活用されているフィルターです。
                    </p>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <p class="text-center">
                      <a href="/ec/list?category=交換レンズアクセサリー&narrow18=0&keyword=PRO1D プロソフトン&n20c=完了商品は除く&sort=popularity&limit=40"
                        ><v-img
                          src="https://shopimg.kitamura.jp/images/pd/cbd/110/3ae/f8f/b78/93d/08d/2ba/5dc/050/1b2/2sd/kwp/e/M.jpg"
                          alt="夜景/イルミネーション写真撮影のコツ"
                          class="mx-auto hover"
                          max-width="200"
                          max-height="200"
                        ></v-img>
                      </a>
                    </p>
                    <v-btn
                      block
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`/ec/list?category=交換レンズアクセサリー&narrow18=0&keyword=PRO1D プロソフトン&n20c=完了商品は除く&sort=popularity&limit=40`"
                      ><span class="v-btn__content white--text">ケンコー PRO1D プロソフトン</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑ソフト-->
            <!--↑星空撮影-->

            <!--↓プリント-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mb-5" id="pr">
                  <h2 class="mt-5 mb-4 font-weight-bold grey--text text--darken-4 text-h4">
                    <v-icon class="orange--text text--darken-4">fas fa-stop</v-icon
                    ><span class="text-h6 font-weight-bold"> フォトコンテスト出品作におすすめ！ </span>クリスタルプリント
                  </h2>
                  <p class="mb-6">
                    ベストショットが撮れたとき、フォトコンテストへ応募するとき。<br />
                    ステキな作品の仕上げをキタムラがお手伝いします。
                  </p>
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/c-t01.gif"
                    alt="最高級の写真プリント クリスタルプリント"
                    class="mx-auto mt-4 mb-4"
                    max-width="840"
                    max-height="140"
                  ></v-img>
                  <p>
                    クリスタルプリントは、通常の印画紙よりも表面の凹凸がなめらかな“クリスタルプリントペーパー”を使っています。<br />
                    『凹凸がなめらか ＝ 光がすべて一定方向に反射』するので、表面がキラキラと艶やかに輝きます。<br />
                    また、手にしたときの厚みやコシが強いので、高級感たっぷり。<br />
                    撮影した自信作やコンテストへの出品作は、<a href="https://www.kitamura-print.com/premium_print/digitalcrystal/shop.html" target="_blank"
                      >最高級の写真プリント「クリスタルプリント」</a
                    >を<br />おすすめします。
                  </p>
                </v-col>
                <v-col cols="12" md="6" class="float-left">
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/c-02.jpg"
                    alt="光の反射(イメージ)"
                    class="mx-auto"
                    max-width="385"
                    max-height="222"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6" class="float-left">
                  <v-img
                    src="/ec/images2/special/general/photocon-learn/c-01.jpg"
                    alt="クリスタルプリントは表面が艶やか"
                    class="mx-auto mb-6"
                    max-width="475"
                    max-height="201"
                  ></v-img>
                  <v-btn
                    block
                    target="blank"
                    class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                    height="60px"
                    :href="`https://www.kitamura-print.com/premium_print/digitalcrystal/shop.html`"
                    ><span class="v-btn__content white--text">クリスタルプリント</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="12" class="mt-5 mb-5">
                  <p class="mb-6">
                    お気に入りの写真を玄関やリビングに飾りたい方には、<a href="https://www.kitamura-print.com/panel/" target="_blank"
                      >後加工サービス（パネル・裏打ち）</a
                    >がおすすめです。<br />
                    ガラスを使わないので、クリスタルプリントの質感そのままに飾ることができます。
                  </p>
                  <v-col cols="12" md="4" class="float-left text-center">
                    マットパネル加工<br />
                    <v-img
                      src="/ec/images2/special/general/photocon-learn/img_matpanel_02.jpg"
                      alt="マットパネル加工"
                      class="mx-auto"
                      max-width="234"
                      max-height="180"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="4" class="float-left text-center">
                    木製パネル加工<br />
                    <v-img
                      src="/ec/images2/special/general/photocon-learn/img_woodpanel_03.jpg"
                      alt="木製パネル加工"
                      class="mx-auto"
                      max-width="234"
                      max-height="180"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="4" class="float-left text-center">
                    裏打ち加工<br />
                    <v-img
                      src="/ec/images2/special/general/photocon-learn/img_back_01.jpg"
                      alt="裏打ち加工"
                      class="mx-auto mb-6"
                      max-width="234"
                      max-height="180"
                    ></v-img>
                  </v-col>
                  <v-btn
                    block
                    target="blank"
                    class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                    height="60px"
                    :href="`https://www.kitamura-print.com/panel/`"
                    ><span class="v-btn__content white--text">後加工サービス</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <!--↑プリント-->

            <!--フォトコン-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mb-5" id="p-con">
                  <h2 class="mt-5 mb-4 font-weight-bold grey--text text--darken-4 text-h4">
                    <v-icon class="orange--text text--darken-4">fas fa-stop</v-icon>フォトコンテストのご案内<span class="text-h6 font-weight-bold">
                      ― ご参加お待ちしております ―
                    </span>
                  </h2>
                  <p class="mb-6">カメラのキタムラでは「JAPAN PHOTO」として、年間を通じてフォトコンテスト作品を募集しています。</p>
                  <v-col cols="12" md="6" class="float-left">
                    <p>
                      <a href="https://www.kitamura.jp/contest/" target="_blank">『カメラのキタムラ フォトコンテスト』</a
                      >のページでは、開催中、開催予定のフォトコンテストをご案内しています。<br />
                      また、入賞作品ギャラリーや写真展情報などもご覧いただけます。<br />
                    </p>
                    <v-btn
                      block
                      target="blank"
                      class="v-btn--is-elevated v-btn--has-bg deep-orange darken-2 white--text hover text-h6"
                      height="60px"
                      :href="`https://www.kitamura.jp/contest/`"
                      ><span class="v-btn__content white--text">フォトコンテストページへ行く</span><v-icon>fas fa-angle-right fa-fw</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <a href="https://www.kitamura.jp/contest/" target="_blank"
                      ><v-img
                        src="/ec/images2/special/general/photocon-learn/p-01.gif"
                        alt="カメラのキタムラ フォトコンテストページ"
                        class="mx-auto mt-4 mb-4"
                        max-width="357"
                        max-height="223"
                      ></v-img
                    ></a>
                  </v-col>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-card cols="10" class="mx-auto pa-4 w100pr mt-4 bordd-osusum" outlined>
                  <h4 class="text-h6 cl red--text text--darken-4">
                    <v-icon class="red--text text--darken-4">far fa-hand-point-right</v-icon>おすすめのフォトコンテスト
                  </h4>
                  <v-col cols="12" md="6" class="float-left ma-0"
                    ><p>
                      『JAPAN PHOTO』は、スマホから一眼レフまで、こどもから大人まで、どなたでもご応募できるフォトコンテストです。<br />
                      入賞者数は1,000人以上！<br />
                      腕に自信のある方は、上級者向けの「腕自慢コース」、ビギナーさん向けには「腕だめしコース」とありますので、どしどしご応募ください！<br />
                      <br />
                      作品は、お近くのカメラのキタムラ店頭へ直接お持ちいただくか、郵送でご応募いただけます。<br /><br />
                      <span class="f14px le"
                        >※開催日程、締め切り、詳しい募集の内容は<a href="https://www.kitamura.jp/contest/" target="_blank">フォトコンテストページ</a
                        >でご確認ください</span
                      >
                    </p>
                  </v-col>
                  <v-col cols="12" md="6" class="float-left">
                    <p class="text-center">
                      <a href="https://www.kitamura.jp/contest/"
                        ><v-img
                          src="/ec/images2/special/general/photocon-learn/p-02.jpg"
                          alt="365日フォトコンテスト2014春夏 受賞作品"
                          class="mx-auto hover"
                          max-width="357"
                          max-height="223"
                        ></v-img>
                      </a>
                    </p>
                  </v-col>
                </v-card>
              </v-row>
            </v-container>
            <!--↑フォトコン-->

            <!--↓相互-->
            <v-container>
              <v-row>
                <v-col cols="12" class="mb-5">
                  <h4 class="mt-5 mb-4 font-weight-bold grey--text text--darken-4 text-h4">おすすめの特集</h4>
                  <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
                </v-col>
              </v-row>
            </v-container>
            <!--↑相互-->
            <!--↓ SNSー-->
            <facebookAndTwitter />
          </v-row>
        </v-container>
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
import Urlcopy from '@/components/common/special/url-copy.vue';

export default Vue.extend({
  name: 'photocon-learn',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    urlcopy: Urlcopy
  },
  setup: (props, context) => {
    document.title = 'フォトコンテスト受賞作品から学ぶ 【レンズ・フィルター・星空撮影】 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute('content', 'レンズの種類で撮影できる写真の違いや、レンズフィルターの役割り、星空撮影に便利なアイテムをご紹介！【カメラのキタムラ】');
    const state = reactive({
      ankerBotan: 0,
      anker: [
        { text: 'レンズ編', icon: 'fa-chevron-circle-right', link: '#renzu' },
        { text: 'レンズフィルター編', icon: 'fa-chevron-circle-right', link: '#filt' },
        { text: '星空写真編', icon: 'fa-chevron-circle-right', link: '#hosi' }
      ],
      ankerBotan2: 0,
      anker2: [{ text: '最高級クリスタルプリント', icon: 'fa-chevron-circle-right', link: '#pr' }],
      ankerBotan3: 0,
      anker3: [{ text: 'フォトコンテストのご案内', icon: 'fa-chevron-circle-right', link: '#p-con' }],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/tripod',
          img: 'https://shop.kitamura.jp/images/banner/3253.gif',
          alt: 'おすすめ三脚の選び方'
        },
        {
          href: '/ec/special/camera/bag/trial',
          img: 'https://shop.kitamura.jp/images/banner/1437.jpg',
          alt: 'カメラバッグトライアルサービス'
        },
        {
          href: '/ec/special/general/how-to/hanabi',
          img: 'https://shop.kitamura.jp/images/banner/3043.jpg',
          alt: '花火撮影特集'
        },
        {
          href: '/ec/special/general/pet',
          img: 'https://shopimg.kitamura.jp/images/banner/1878.jpg',
          alt: 'ペット写真のステキな残し方'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        },
        {
          href: 'https://www.kitamura-print.com/',
          img: 'https://shopimg.kitamura.jp/images/banner/341.jpg',
          alt: '超高画質プリント',
          target: 'blank'
        }
      ],
      visible: false,
      isReinforcedParts: false,
      visibleGallery: false,
      index: 0,
      galleryList: [
        {
          src: '/ec/images2/special/general/photocon-learn/g-p02.jpg',
          title: '「屋根の上からこんにちは」',
          txt: '■使用カメラ／オリンパスE-5\n■使用レンズ／8mm F3.5 FISHEYE\n■絞り／F11\n■シャッタースピード／1 / 250秒'
        },
        {
          src: '/ec/images2/special/general/photocon-learn/g-p01.jpg',
          title: '「青空の子」',
          txt: '■使用カメラ／ニコン D7000\n■使用レンズ／AF DX 10.5mm（フィッシュアイ）\n■絞り／F6.3\n■シャッタースピード／1/800秒'
        }
      ],
      visibleGallery2: false,
      index2: 0,
      galleryList2: [
        {
          src: '/ec/images2/special/general/photocon-learn/m-p01.jpg',
          title: '「ダンス」',
          txt: '■使用カメラ／キヤノン EOS 7\n■使用レンズ／90mm マクロ\n■絞り／F6'
        },
        {
          src: '/ec/images2/special/general/photocon-learn/m-p02.jpg',
          title: '「色彩美」',
          txt: '■使用カメラ／ソニーα99\n■使用レンズ／マクロ180mm\n■絞り／F3.5\n■シャッタースピード／1/125秒\n■三脚使用'
        }
      ],
      visibleGallery3: false,
      index3: 0,
      galleryList3: [
        {
          src: '/ec/images2/special/general/photocon-learn/pl-p01.jpg',
          title: '「秋の彩り」',
          txt: '■使用カメラ／ニコンD600\n■使用レンズ／AF VR24-120mm\n■絞り／F11\n■シャッタースピード／1/50秒\n■フィルター／C-PL'
        }
      ],
      visibleGallery4: false,
      index4: 0,
      galleryList4: [
        {
          src: '/ec/images2/special/general/photocon-learn/nd-p01.jpg',
          title: '「秋宝」',
          txt: '■使用カメラ／ニコン D7000\n■使用レンズ／AF-S DX 16-85mm f/3.5-5.6G ED VR\n■絞り／F9\n■シャッタースピード／2秒\n■フィルター／ND8 +PL\n■三脚使用'
        }
      ],
      visibleGallery5: false,
      index5: 0,
      galleryList5: [
        {
          src: '/ec/images2/special/general/photocon-learn/hosi-p01.jpg',
          title: '「森の妖精」',
          txt: '■使用カメラ／キヤノンEOS 5D MarK II\n■使用レンズ／EF17-40mm F4L USM\n■絞り／F10\n■シャッタースピード／bulb'
        },
        {
          src: '/ec/images2/special/general/photocon-learn/hosi-p02.jpg',
          title: '「夜空を望む」',
          txt: '■使用カメラ／キヤノンEOS 5D MarkII\n■使用レンズ／Carl Zeiss Distagon T*2.8/21\n■絞り／F2.8\n■シャッタースピード／30秒'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'フォトコンテスト受賞作品から学ぶ 【レンズ・フィルター・星空撮影】',
          disabled: true
        }
      ],

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4047865800686'],
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
    const handleHide = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery = false;
    };
    const showGalleryImg = (index: number) => {
      state.index = index;
      state.visibleGallery = true;
    };
    const handleHide2 = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery2 = false;
    };
    const showGalleryImg2 = (index2: number) => {
      state.index2 = index2;
      state.visibleGallery2 = true;
    };
    const handleHide3 = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery3 = false;
    };
    const showGalleryImg3 = (index3: number) => {
      state.index3 = index3;
      state.visibleGallery3 = true;
    };
    const handleHide4 = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery4 = false;
    };
    const showGalleryImg4 = (index4: number) => {
      state.index4 = index4;
      state.visibleGallery4 = true;
    };
    const handleHide5 = () => {
      state.visible = false;
      state.isReinforcedParts = false;
      state.visibleGallery5 = false;
    };
    const showGalleryImg5 = (index5: number) => {
      state.index5 = index5;
      state.visibleGallery5 = true;
    };
    onMounted(() => {
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      handleHide,
      showGalleryImg,
      handleHide2,
      showGalleryImg2,
      handleHide3,
      showGalleryImg3,
      handleHide4,
      showGalleryImg4,
      handleHide5,
      showGalleryImg5,
      formatPrice
    };
  }
});
</script>
<style lang="scss" scoped>
.tx-22 {
  font-size: 22px;
}
.lin18 {
  line-height: 1.8em;
}
.tx-16 {
  font-size: 16px;
}
.kg-usu {
  box-shadow: 0 4px 5px 0px rgb(134 134 134 / 60%);
}
.txt-org {
  color: #dd6717;
}
.d-box {
  display: block;
}
.w100pr {
  width: 100%;
}
.bordd-or {
  border: #e67e22 3px solid;
  box-sizing: border-box;
}
.bordd-osusum {
  border: #ff0004 1px dotted;
  box-sizing: border-box;
}
.cl {
  clear: both;
}
</style>
