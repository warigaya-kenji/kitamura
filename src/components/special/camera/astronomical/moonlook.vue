<template>
  <v-app>
    <div class="moonlook">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <!-- ↓url copy -->
        <urlcopy />

        <v-main>
          <h1 class="text-h6 brown--text"><v-icon color="yellow">fas fa-moon</v-icon>天体観測 入門編 月を見よう</h1>
          <p>
            <span class="pc" v-if="$vuetify.breakpoint.mdAndUp"
              >月を見上げてみよう！ と思ったら… あれ？月がいない？ 何時にどこから昇ってくるのかな？ …なんてことが起こります。<br />
              それもそのはず！ 月は地球の周りを楕円の軌道で公転しているため、日によって昇ってくる方角・時間・満ち欠けが変わってくるからです。 今回は、</span
            ><span class="red--text yellow lighten-3">天体観測におすすめの商品や便利なアイテム、月の観測方法・撮影方法</span>をお伝えします♪
          </p>
          <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_a.png" max-width="100%" height="auto"></v-img>

          <!--↓アンカー-->
          <v-container fluid id="ankr">
            <ul class="cp_list" title=" MENU ">
              <li v-for="(navi, index) in naviList" :key="index">
                <a v-scroll-to="navi.href">{{ navi.item }}</a>
              </li>
            </ul>
            <div style="clear: both"></div>
          </v-container>
          <!--↑アンカー-->

          <!--↓はじめに-->
          <v-container fluid id="first">
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">月の観測で、はじめにすること</span>
            </v-sheet>
          </v-container>

          <v-container class="py-2 px-4 lin-ye">
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>月の情報を手に入れる</h3>
            <v-row dense>
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  月を見るには、月の情報を得ることが必要です。<br />
                  おすすめは、ビクセンの「<router-link to="ec/pd/4955295511518">天体カレンダー</router-link
                  >」。日ごとの月の出・月の入と、月の満ち欠けが詳細に記載され、自分が見たい月の形や観察可能な時間帯などを調べるのに便利！
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="text-center ma-0 pa-0">ビクセン 天体カレンダー</p>
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_b.jpg" max-width="100%" height="auto"></v-img>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295511518'" :height="'50px'" />
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-bold brown--text mt-2"><v-icon color="brown">fas fa-comment-dots</v-icon>月が昇る方角を知る</h3>
            <v-row dense>
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  方位磁針を使いましょう。<br />
                  おすすめは、ビクセンの「<a
                    href="/ec/list?narrow18=0&keyword=ビクセン%20LEDコンパス&category=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=ビクセン%20LEDコンパス&x=0&y=0"
                    >LEDコンパス</a
                  >」なら、<span class="red--text yellow lighten-3">まぶしさの少ないLEDライト</span>で方位を確認できます。<br />目に優しく、天体観測におすすめ！
                </p>
                <p class="text-center ma-0 pa-0">ビクセン LEDコンパス</p>
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_b.jpg" max-width="100%" height="auto"></v-img>
                <orangeBtn
                  :btntxt="'商品を見る'"
                  :href="'/ec/list?narrow18=0&keyword=ビクセン%20LEDコンパス&category=&index=all&sort=number20,Number17,Score&searchbox=1&q=ビクセン%20LEDコンパス&path=&y=0%3Fref%3Dmoonlook&x=0'"
                  :height="'50px'"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  ビクセンの無料アプリ「<a href="https://www.vixen.co.jp/app/moon-book/" target="_brank">Moon Book</a>」で<span
                    class="red--text yellow lighten-3"
                    >月の出・月の入の方角</span
                  >を調べられます。リアルタイムや指定の日時での月の見え方や、いつ、どの方角に見えるかを確認できます。 「<a
                    href="https://www.vixen.co.jp/app/moon-book/"
                    target="_brank"
                    >Moon Book</a
                  >」の情報を頼りに、方位磁針で確認をしましょう。
                </p>
                <p class="text-center ma-0 pa-0">ビクセン 無料アプリ Moon Book</p>
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_k5-1.png" max-width="90%" height="auto"></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_k5-2.png" max-width="100%" height="auto"></v-img>
                  </v-col>
                </v-row>
                <orangeBtn :btntxt="'ページを見る'" :href="'https://www.vixen.co.jp/app/moon-book/'" :height="'50px'" :type="2" />
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>

          <!--↓双眼鏡の選び方-->
          <v-container fluid id="field-glasses">
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">双眼鏡の選び方 <span class="text-subtitle-2">双眼鏡で月の観測</span></span>
            </v-sheet>
          </v-container>

          <v-container class="py-4 px-4 lin-ye">
            <p class="pt-2 pl-2 mb-6 line-height">
              双眼鏡の良さ。それは「お手軽さ」です！ 天体望遠鏡だと大きくて持ち運びが大変ですが、<span class="red--text yellow lighten-3"
                >双眼鏡ならキャンプや旅行</span
              >に気軽に持って行けます。<br />
              また、月だけでなく、天の川のつぶつぶとした星の集まりや、星雲・星団を見るときにも双眼鏡は活躍します。
            </p>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>どんな双眼鏡がいいの？ 双眼鏡の選び方</h3>
            <v-row dense class="mb-6">
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  天体観測におすすめの双眼鏡選びのポイントは、瞳孔の開きです。人の目の瞳孔は、暗い場所では5～7mmくらい開くと言われています。<br />
                  よって、暗い場所で行う天体観測では、瞳孔の開きにあった双眼鏡を使うのがベストです。<br />
                  双眼鏡の接眼レンズ側から見える、丸い光の直径＝<span class="red--text yellow lighten-3">「ひとみ径」</span>が5～7mm前後の双眼鏡がおすすめです。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_d.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">far fa-thumbs-up</v-icon>おすすめの双眼鏡</h3>
            <v-row dense justify="center">
              <v-col cols="12" sm="3" v-for="(Binoculars, index) in recommendedBinoculars" :key="`Binoculars-${index}`" class="pa-4 text-center">
                <router-link :to="Binoculars.href"
                  >{{ Binoculars.name }}<br />
                  <div class="d-flex flex-column justify-space-between align-center">
                    <v-img :src="Binoculars.img" :max-width="$vuetify.breakpoint.mdAndUp ? '80%' : '60%'" height="auto"></v-img>
                  </div>
                </router-link>
                <orangeBtn :btntxt="'商品を見る'" :href="Binoculars.href" :height="'50px'" />
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>

          <!--↓天体望遠鏡の選び方-->
          <v-container fluid id="astronomical-telescope">
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">天体望遠鏡の選び方 <span class="text-subtitle-2">天体望遠鏡で月の観測</span></span>
            </v-sheet>
          </v-container>

          <v-container class="py-4 px-4 lin-ye">
            <p class="pt-2 pl-2 mb-6 line-height">
              天体望遠鏡なら、自宅の庭やベランダから、大迫力の月が楽しめます！<br />
              月だけでなく、木星の縞模様や土星の環などの惑星も見ごたえがあります。望遠鏡で体感する宇宙の大きさ・深さはとても感動し、天体観測がどんどん楽しくなりますよ♪
            </p>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>どんな望遠鏡がいいの？天体望遠鏡の選び方</h3>
            <v-row dense class="mb-6">
              <v-col cols="12" sm="6">
                <p class="my-6 mx-2 line-height">
                  天体望遠鏡で<span class="red--text yellow lighten-3">月を見るときの倍率は50～100倍がおすすめ</span
                  >50倍で見ると、クレーターのごつごつした感じはもちろん、地球の自転で、月が視界を移動していく様子など、大迫力の月を楽しむことができます。<br />
                  さらに、<span class="red--text yellow lighten-3">接眼レンズを変更することによって倍率を変え、視界いっぱいの月を楽しむ</span>こともできます♪
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_f.jpg" max-width="100%" height="auto"></v-img>
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">far fa-thumbs-up</v-icon>おすすめの天体望遠鏡</h3>
            <v-row dense class="mb-6">
              <v-col cols="12" sm="3" v-for="(astronomical, index) in astronomicalTelescopes" :key="`astronomical-${index}`" class="pa-4">
                <router-link :to="astronomical.href"
                  >{{ astronomical.name }}<br />
                  <div class="d-flex flex-column justify-space-between align-center">
                    <v-img :src="astronomical.img" max-width="80%" height="auto"></v-img>
                  </div>
                </router-link>
                <orangeBtn :btntxt="'商品を見る'" :href="astronomical.href" :height="'50px'" />
              </v-col>
            </v-row>

            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>天体望遠鏡の倍率について</h3>
            <v-container fluid>
              <v-row dense class="mb-6">
                <v-col cols="12" sm="9">
                  <p class="pa-2 line-height">
                    天体望遠鏡の倍率の求め方は、<br />
                    <span class="red--text text-h6">対物レンズの焦点距離÷接眼レンズの焦点距離＝倍率</span><br />
                    （例）<br />
                    ポルタII A80Mf(焦点距離 910mm)と、接眼レンズ 20mm(焦点距離 20mm)を組み合わせた場合…<br />
                    <span class="red--text text-h6">910 ÷ 20 = 45.5倍 (約46倍) </span>となります
                  </p>
                </v-col>
                <v-col cols="12" sm="3">
                  <router-link
                    to="/ec/list?narrow18=0&keyword=径接眼レンズ%20NPL&category=双眼鏡%2F望遠鏡%3Aアクセサリー%3A天体望遠鏡アクセサリー&r=&n20c=完了商品は除く&index=&sort=number20,number19,Score&searchbox=1&q=径接眼レンズ%20NPL&path=双眼鏡%2F望遠鏡%3Aアクセサリー%3A天体望遠鏡アクセサリー"
                    >ビクセン 天体望遠鏡用 接眼レンズ NPLシリーズ<br />
                    <div class="d-flex flex-column justify-space-between align-center">
                      <v-img
                        src="https://shopimg.kitamura.jp/images/pd/4ef/7f8/a15/d15/d25/1ec/bbc/98a/9b8/09f/4aq/9yi/bhn/g/TN.jpg"
                        :max-width="$vuetify.breakpoint.mdAndUp ? '80%' : '60%'"
                        height="auto"
                      ></v-img>
                    </div>
                  </router-link>
                  <orangeBtn
                    :btntxt="'商品を見る'"
                    :href="'/ec/list?narrow18=0&keyword=径接眼レンズ%20NPL&category=双眼鏡%2F望遠鏡%3Aアクセサリー%3A天体望遠鏡アクセサリー&n20c=完了商品は除く&index=&sort=number20,number19,Score&searchbox=1&q=径接眼レンズ%20NPL&path=双眼鏡%2F望遠鏡%3Aアクセサリー%3A天体望遠鏡アクセサリー'"
                    :height="'50px'"
                  />
                </v-col>
              </v-row>

              <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">far fa-thumbs-up</v-icon>天体望遠鏡特集</h3>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <p class="text-subtitle-2">
                      初心者におすすめの天体望遠鏡ポルタシリーズ<br />
                      <a href="/ec/special/camera/astronomical/telescope">
                        <v-img src="https://shop.kitamura.jp/images/banner/1698.jpg" max-width="100%" class="hover"></v-img>
                      </a>
                    </p>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <p class="text-subtitle-2">
                      本格的な天体観測・天体撮影におすすめの赤道儀シリーズ<br />
                      <a href="/ec/special/camera/astronomical/telescope-feature">
                        <v-img src="https://shopimg.kitamura.jp/images/banner/2381.jpg" max-width="100%" class="hover"></v-img>
                      </a>
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>
          <!--↑天体望遠鏡の選び方-->

          <!--↓天体望遠鏡とスマホで月を撮影してみよう-->
          <v-container fluid id="smartphone">
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">天体望遠鏡とスマホで月を撮影してみよう</span>
            </v-sheet>
          </v-container>

          <v-container fluid class="py-6 px-4 lin-ye">
            <v-row dense>
              <v-col cols="12" sm="6">
                <p class="line-height">
                  天体望遠鏡で月や惑星を見た感動を写真に残したり、SNSにアップしたいと思ったら・・・！<br />
                  「<router-link to="/ec/pd/4955295391974">ユニバーサルデジタルカメラアダプターII</router-link
                  >」を使えば、スマートフォンで手軽に月の写真や動画を撮影できます♪
                </p>
                <router-link to="/ec/pd/4955295391974"
                  ><v-img src="/ec/images2/special/camera/astronomical/moonlook/img_h.jpg" max-width="100%"></v-img
                ></router-link>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295391974'" :height="'50px'" />
              </v-col>
              <v-col cols="12" sm="6">
                <watchInVideo :src="'https://www.youtube.com/embed/TBHmUNBfonw?rel=0'" :width="'100%'" :height="250" :sm="12" />
                <p class="line-height">【動画で見る】天体望遠鏡とスマートフォンで月を撮影してみよう！</p>
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>
          <!--↑天体望遠鏡とスマホで月を撮影してみよう-->

          <!--↓こんな月の観測がおすすめ-->
          <v-container fluid>
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">こんな月の観測がおすすめ <span class="text-subtitle-2">天体観測</span></span>
            </v-sheet>
          </v-container>

          <v-container fluid class="py-4 px-4 lin-ye">
            <p class="line-height">
              肉眼だと小さい月も、双眼鏡や天体望遠鏡を使えば、さらに迫力のある月の姿を楽しむことができます。<br />
              特に、クレーターのぼこぼことした感じや、月が宇宙に浮いている感じは、臨場感たっぷりです。
            </p>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>クレーターを見るなら満月以外の月に注目</h3>
            <v-row class="mt-4">
              <v-col cols="12" sm="5">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_i.jpg" max-width="100%"></v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <p class="line-height">
                  満月はとても明るく大きいですが、正面から光が当たるため、少し立体感に欠けます。満月以外の欠けている月であれば、横から光が当たり、月のクレーターがよく見え立体感があるので、月が宇宙に浮いている感じを体感することができます。<br />
                  特に<span class="red--text yellow lighten-3">半月あたりの月は大変見ごたえがあります</span>。<br />
                  （写真は、月齢5.6の月）
                </p>
              </v-col>
            </v-row>
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>低い位置の月を見てみよう</h3>

            <v-row class="mt-4">
              <v-col cols="12" sm="5">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/img_j.jpg" max-width="100%"></v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <p class="line-height">
                  低い位置にいる月を見たときに、なんだか月が大きく感じたことはないでしょうか？
                  これは、月の近くに大きさを比較できる対象物(ビル・山など)があるときに起こる目の錯覚です。<span class="red--text yellow lighten-3"
                    >低い位置の月の色は黄色く見えたり、薄い雲越に赤くぼんやり見えたり</span
                  >します。<br />
                  天頂(真上)付近の、白くくっきりとした月もいいですが、低い位置の月は、時に印象的な姿を見せてくれます。
                </p>
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>
          <!--↑こんな月の観測がおすすめ-->

          <!--↓天体観測用アイテム-->
          <v-container fluid id="benri">
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">あると便利！ 天体観測用アイテム</span>
            </v-sheet>
          </v-container>

          <v-container fluid class="py-4 px-4 lin-ye">
            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>天体観測のためのライト</h3>
            <v-row class="my-4">
              <v-col cols="12" sm="4" class="pa-6">
                <v-img src="https://shopimg.kitamura.jp/images/pd/779/42d/30c/1f8/f27/99b/4ec/189/a2d/4c2/bfv/chy/8vk/w/M.JPG" max-width="100%"></v-img>
              </v-col>
              <v-col cols="12" sm="8">
                <p class="line-height">
                  ビクセン SG-L02 天体観測用ライトは、星空を快適に楽しむためのライトです。<span class="red--text yellow lighten-3">手元だけを赤く照明</span
                  >し、周囲に無駄な光を飛ばしません。目がくらむことなく、周囲へのマナーにも配慮しています。
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295710898'" :height="'50px'" />
              </v-col>
            </v-row>

            <h3 class="text-h6 font-weight-bold brown--text"><v-icon color="brown">fas fa-comment-dots</v-icon>天体望遠鏡の露除けヒーター</h3>
            <v-row class="my-4">
              <v-col cols="12" sm="4" class="pa-6">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/4955295372256.png" max-width="100%"></v-img>
              </v-col>
              <v-col cols="12" sm="8">
                <p class="line-height">露除け用の防水ラバーヒーターです。対物レンズや主鏡への夜露の付着を軽減します。。</p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295372256'" :height="'50px'" />
              </v-col>
            </v-row>

            <h3 class="text-h6 font-weight-bold brown--text">
              <v-icon color="brown">fas fa-comment-dots</v-icon>アウトドアシーンで快適・便利なクッションシート
            </h3>
            <v-row class="my-4">
              <v-col cols="12" sm="4" class="pa-6">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/sito.jpg" max-width="100%"></v-img>
              </v-col>
              <v-col cols="12" sm="8">
                <p class="line-height">
                  ビクセン 74023-9 宙シートは、夜空の下で寝ころがって星空を眺めるのにピッタリな、クッション性・防水性・断熱性に富んだ<span
                    class="red--text yellow lighten-3"
                    >厚さ2mmのクッションシート</span
                  >。ネオプレーン素材なので、夜露や雨で地面が濡れていても染み込みません。
                </p>
                <orangeBtn :btntxt="'商品を見る'" :href="'/ec/pd/4955295740239'" :height="'50px'" />
              </v-col>
            </v-row>
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>
          <!--↑天体観測用アイテム-->

          <!--↓天体観測・撮影におすすめの商品一覧-->
          <v-container fluid id="list">
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white" left>fas fa-moon</v-icon
              ><span class="ml-2">天体観測・撮影におすすめの商品一覧<span class="text-subtitle-2 ml-2">天体観測入門</span></span>
            </v-sheet>
          </v-container>

          <!-- ↓ 特集IDでの商品一覧表示 -->
          <product-list-by-special-id class="mb-5" :specialId="1112" />
          <!--↑天体観測・撮影におすすめの商品一覧-->

          <!--↓おうちでできる 天体観測パーティ♪-->
          <v-container fluid>
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">おうちでできる 天体観測パーティ♪</span>
            </v-sheet>
          </v-container>

          <v-container fluid class="py-4 px-4 lin-ye">
            <h3 class="text-h6 font-weight-bold brown--text mt-6"><v-icon color="brown">fas fa-comment-dots</v-icon>天体観測スケジュールをチェック</h3>
            <v-row class="my-4 pa-2">
              <v-col cols="12" sm="7">
                <p class="line-height">
                  双眼鏡と天体望遠鏡が揃ったら、家の窓やベランダ、庭から見上げる星空や月を主役に、『天体観測パーティ』はいかがでしょうか？<br />
                  中秋の名月や、北斗七星、夏や冬の大三角、織姫や彦星など、季節の月や星を、ご家族やお友達と一緒に、楽しみましょう。<br />
                  月食、日食、スーパームーン、流星群の日は、絶好の天体観測パーティ開催日です♪
                </p>
              </v-col>
              <v-col cols="12" sm="5" class="pa-2">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/pt01.jpg" max-width="100%"></v-img>
              </v-col>
            </v-row>
            <orangeBtn :btntxt="'天体観測スケジュールを見る'" :href="'/ec/special/camera/astronomical'" :height="'50px'" />
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>
          <!--↑おうちでできる 天体観測パーティ♪-->

          <!--↓月・惑星の写真をおしゃれに残そう♪-->
          <v-container fluid>
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">月・惑星の写真をおしゃれに残そう♪</span>
            </v-sheet>
          </v-container>

          <v-container fluid class="py-4 px-4 lin-ye">
            <h3 class="text-h6 font-weight-bold brown--text mt-6"><v-icon color="brown">fas fa-comment-dots</v-icon> ワンダーシャッフルプリント</h3>
            <v-row class="mb-2 pa-2">
              <v-col cols="12" sm="5">
                <v-img src="/ec/images2/special/camera/astronomical/moonlook/pd10.jpg" max-width="100%"></v-img>
              </v-col>
              <v-col cols="12" sm="7" class="pa-2">
                <p class="line-height">
                  デザイン性のあるおしゃれなテンプレートで、<span class="red--text yellow lighten-3">たくさんの画像を1枚に</span>仕上げます♪<br />
                  背景色も選べて、落書きやスタンプもOK！<br />
                  自分だけの天体観測写真が作れます。
                </p>
              </v-col>
            </v-row>
            <orangeBtn
              :btntxt="'詳しく見る'"
              :href="'https://www.kitamura-print.com/print/wonder_shuffle/?_ga=2.200702958.1712661879.1629071621-279164427.1627285160'"
              :height="'50px'"
              :type="2"
            />
          </v-container>
          <p class="text-right mt-2">
            <v-btn text color="indigo" v-scroll-to="'#ankr'"><v-icon small>fas fa-arrow-up</v-icon>選択ボタンへ戻る</v-btn>
          </p>
          <!--↑月・惑星の写真をおしゃれに残そう♪-->

          <p class="mt-8 mb-4">今回は月の観測の仕方・観測方法についてご紹介しました。家族や友人と、いろいろな月の姿を、ぜひ楽しんでください。</p>

          <v-container fluid>
            <v-sheet color="#fad516" class="pa-2 text-h5 font-weight-bold">
              <v-icon color="white">fas fa-moon</v-icon><span class="ml-2">関連おすすめ特集</span>
            </v-sheet>
          </v-container>
          <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
          <!--↓ SNSー-->
          <facebookAndTwitter />
        </v-main>
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
import Urlcopy from '@/components/common/special/url-copy.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import OrangeBtn from '@/components/common/special/orangeBtn.vue';
import ProductListBySpecialId from '@/components/special/common/product-list-by-special-id.vue';

export default Vue.extend({
  name: 'moonlook',
  components: {
    breadcrumbs: Breadcrumbs,
    urlcopy: Urlcopy,
    watchInVideo: WatchInVideo,
    recommendedFeatures: RecommendedFeatures,
    facebookAndTwitter: FacebookAndTwitter,
    orangeBtn: OrangeBtn,
    'product-list-by-special-id': ProductListBySpecialId,
  },
  setup: (props, context) => {
    document.title = '天体観測 入門編 月を見よう!おすすめ天体望遠鏡・双眼鏡の選び方 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', '天体観測入門編！初心者さんにもおすすめな月の観測方法や、天体望遠鏡・双眼鏡の選び方、スマホでの簡単撮影方法など♪天体望遠鏡・双眼鏡はカメラのキタムラへおまかせください')
    const state = reactive({
      naviList: [
        { item: '月の観測ではじめにすること', href: '#first' },
        { item: '双眼鏡の選び方-双眼鏡で月の観測', href: '#field-glasses' },
        { item: '天体望遠鏡の選び方-天体望遠鏡で月の観測', href: '#astronomical-telescope' },
        { item: '天体望遠鏡とスマホで月を撮影', href: '#smartphone' },
        { item: 'あると便利！天体観測用アイテム', href: '#benri' },
        { item: '月の観測・撮影におすすめの商品一覧', href: '#list' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/camera/hosizora',
          img: 'https://shopimg.kitamura.jp/images/banner/5032.png',
          alt: '星空総合ページ'
        },
        {
          href: 'https://www.vixen.co.jp/app/moon-book/',
          img: '/ec/images2/special/camera/astronomical/moonlook/bnr_vixenmoonbook.jpg',
          alt: '月食の方角を調べる「Moonbook」'
        },
        {
          href: 'https://www.vixen.co.jp/app/nebulabook/',
          img: 'https://shopimg.kitamura.jp/images/banner/3439.gif',
          alt: '星雲・星団・銀河等の天体撮影を支援するアプリ「Nebula Book」'
        }
      ],
      recommendedBinoculars: [
        {
          name: 'ビクセン 19172-7 星座観察用双眼鏡 SG 2.1×42',
          href: '/ec/pd/4955295191727',
          img: 'https://shopimg.kitamura.jp/images/pd/b46/762/e90/3bb/d56/d9f/880/5f1/b4d/bb6/21i/0oe/4ub/q/TN.jpg'
        },
        {
          name: 'ひとみ径 5mm ビクセン双眼鏡',
          href: '/ec/list?narrow18=0&keyword=ひとみ径：5&category=%2F&n20c=完了商品は除く&index=&sort=number20,number19,Score&searchbox=1&s1%5B%5D=ビクセン&q=ひとみ径：5&path=%2F',
          img: 'https://shopimg.kitamura.jp/images/pd/f69/b7c/265/c94/042/b34/01b/456/f58/5ca/b2b/3ds/nhh/1/TN.jpg'
        },
        {
          name: 'ひとみ径 6mm ビクセン双眼鏡',
          href: '/ec/pd/4955295156504',
          img: 'https://shopimg.kitamura.jp/images/pd/c10/482/306/edb/293/d2a/287/25a/4c9/6af/4bs/u9n/0ru/i/TN.jpg'
        },
        {
          name: 'ひとみ径 7mm ビクセン双眼鏡',
          href: '/ec/pd/4955295156207',
          img: 'https://shopimg.kitamura.jp/images/pd/5fe/1c3/92b/048/45f/213/ff1/e94/583/752/88f/p9d/hch/l/TN.jpg'
        }
      ],
      astronomicalTelescopes: [
        {
          name: 'ビクセン A70Lf モバイルポルタ 天体望遠鏡',
          href: '/ec/pd/4955295399055',
          img: '/ec/images2/special/camera/astronomical/moonlook/4955295399055.jpg'
        },
        {
          name: 'スペースアイ600&スマホ用カメラアダプターセット',
          href: '/ec/pd/2239530007670',
          img: 'https://shopimg.kitamura.jp/images/pd/b44/0ee/e6d/e4a/b40/f86/7c9/36d/865/e15/2a2/b0w/nut/c/M.jpg'
        },
        {
          name: 'ビクセン ポルタII A80Mf 天体望遠鏡',
          href: '/ec/pd/4955295399529',
          img: '/ec/images2/special/camera/astronomical/moonlook/4955295399529.jpg'
        },
        {
          name: 'ビクセン 天体望遠鏡 スペースアイ600',
          href: '/ec/pd/4955295327539',
          img: '/ec/images2/special/camera/astronomical/moonlook/4955295327539.jpg'
        }
      ],
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '天体観測スケジュール',
          linkUrl: '/ec/special/camera/astronomical',
          disabled: false
        },
        {
          path: '天体観測 入門編 月を見よう!おすすめ天体望遠鏡・双眼鏡の選び方',
          disabled: true
        }
      ],
      productJanCodeList: [
        '4955295399529',
        '4955295327539',
        '4955295392049',
        '4955295391998',
        '4955295156207',
        '4955295430239',
        '4955295880003',
        '4955295399697',
        '4955295840908',
        '4955295372256',
        '4955295710898'
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

<style lang="scss">
ul.cp_list {
  position: relative;
  padding: 0 0.5em;
  margin-top: 2em;
  list-style-type: none;
  border: solid 2px #00796b;
}

ul.cp_list {
  position: relative;
  padding: 0 0.5em;
  margin-top: 2em;
  list-style-type: none;
  border: solid 2px #00796b;
  font-size: 18px;
  clear: both;
  float: left;
  box-sizing: border-box;
  width: 100%;
}

ul.cp_list li {
  line-height: 1.5;
  padding: 0.5em 0 0.5em 1.4em;
  border-bottom: 1px dashed #4db6ac;
  margin-bottom: 2px;
}

ul.cp_list li::before {
  position: absolute;
  content: '\002713';
  color: #00796b;
  font-weight: bold;
  left: 0.5em;
}

ul.cp_list::after {
  position: absolute;
  content: attr(title);
  padding: 10px;
  box-sizing: border-box;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 150%;
  background: #00796b;
  color: #fff;
  bottom: 100%;
  left: -2px;
  border-radius: 4px 4px 0px 0px;
}

ul.cp_list li:last-of-type {
  border-bottom: none;
}

.cp_list li a:link {
  text-decoration: none;
  color: #1122cc;
}

.cp_list li a:hover {
  text-decoration: underline;
  color: red;
}

.lin-ye {
  border: 1px dashed #fad516;
}
</style>

