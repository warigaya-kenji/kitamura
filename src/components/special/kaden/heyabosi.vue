<template>
  <v-app>
    <div class="kaden-heyabosi">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="mt-5" v-if="$vuetify.breakpoint.smAndDown">
          <p class="text-body-2 text-center">除湿も加湿も空気清浄機もこれ1台！<br />全部入りの除加湿空気清浄機</p>
          <v-img src="/ec/images2/special/kaden/heyabosi/img_01sp.jpg" max-width="360" height="auto"></v-img>
        </div>
      </div>
      <v-img v-if="$vuetify.breakpoint.mdAndUp" src="/ec/images2/special/kaden/heyabosi/img_01.jpg" max-width="100%" height="auto"></v-img>
      <div class="main-contents-wrap">
        <v-sheet color="#ebebe6" class="pa-4">
          <v-card elevation="6" class="pa-6">
            <h1 class="mt-5">おすすめ除湿機特集 2017年版</h1>
            <p class="mt-6">
              空気清浄機は1年中使う空調家電ですが、加湿器や除湿機はどうでしょうか。<br />
              ジメジメした季節や結露対策に除湿機を、ウィルスが活動する低湿度の時は加湿器を…<br />
              人間の肌は感覚で湿度を判断できません。湿度を測ってその都度判断して適した家電を動かす必要があります。<br />
              そんな悩みは、空気清浄に加湿に除湿に1台で全てできるオールインワンモデルで解決できます。
            </p>
            <p class="mt-6">ダイキンとシャープのオールインワンモデルの比較を、実際にスタッフが使って比べてみました！</p>
            <v-sheet outlined color="#f5f5f5" class="pa-2 text-body-2">
              ページ中の商品画像は2016年モデルのKC-GD70とMCK70Sです<br />
              それぞれ2017年モデルと一部外観に変更はありますが、機能差はありません
            </v-sheet>

            <!-- ↓ pc -->
            <v-container class="pa-0 mt-10 relative" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img src="/ec/images2/special/kaden/heyabosi/img_04.png" max-width="170" max-height="190" class="vs"></v-img>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-img src="/ec/images2/special/kaden/heyabosi/img_02.jpg" max-width="417" max-height="463" class="mx-auto"></v-img>
                  <v-sheet color="#94ede7" class="py-4 px-7 rounded-lg">
                    <dl class="item01">
                      <dt>シャープ プラズマクラスター<br />除加湿空気清浄機 KC-HD70</dt>
                      <dd class="mt-2">
                        空気清浄機で人気のシャープから、プラズマクラスター搭載の除加湿空気清浄機が登場<br />
                        5つのセンサーで24時間365日いつも快適！
                      </dd>
                    </dl>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-sheet color="#f0e565" class="py-4 px-7 rounded-lg">
                    <dl class="item01">
                      <dt>ダイキン 除加湿空気清浄機<br />クリアフォース MCZ70T</dt>
                      <dd class="mt-2">
                        空気清浄機のオールインワンモデルと言えば、クリアフォース。<br />
                        今まで培ったノウハウが詰まった、プレミアムモデル！
                      </dd>
                    </dl>
                  </v-sheet>
                  <v-img src="/ec/images2/special/kaden/heyabosi/img_03.jpg" max-width="417" max-height="463" class="mx-auto"></v-img>
                </v-col>
              </v-row>
            </v-container>
            <!-- ↑ pc -->
            <!-- ↓ sp -->
            <v-container class="mt-2" v-if="$vuetify.breakpoint.smAndDown">
              <v-row>
                <v-col cols="6">
                  <v-img src="/ec/images2/special/kaden/heyabosi/img_02.jpg" max-width="140" max-height="124"></v-img>
                </v-col>
                <v-col cols="6">
                  <v-img src="/ec/images2/special/kaden/heyabosi/img_03.jpg" max-width="140" max-height="124"></v-img>
                </v-col>
              </v-row>
            </v-container>

            <!-- ↓ 部屋干し・脱臭など細かく設定したい方は、ダイキンがおすすめ！ -->
            <h2 class="title01 mt-10 mb-3">部屋干し・脱臭など細かく設定したい方は、ダイキンがおすすめ！</h2>
            <p class="mt-2">
              除加湿一体型の空気清浄機ができること<br />
              どちらも「おまかせ運転」にしておけば、室内の温度と湿度の状態に応じて、自動で除湿や加湿を切り替えます。<br />
              基本的にはこのモードで自動運転するのが良いでしょう。
            </p>
            <p class="mt-2">
              上段パネルを見比べてみましょう。<br />
              ダイキンはメニューがたくさん。シャープはシンプルなメニューです。<br />
              それぞれどんなメニューがあるのでしょうか！
            </p>
            <v-sheet color="#eee" class="pa-4 mt-5" v-for="(daikin, index) in daikinList" :key="index">
              <v-row>
                <v-col cols="12" sm="7" :order="$vuetify.breakpoint.smAndDown ? 'last' : 'first'">
                  <p class="mt-2 including-line-breaks">
                    {{ daikin.txt }}
                  </p>
                </v-col>
                <v-col cols="12" sm="5" :order="$vuetify.breakpoint.smAndDown ? 'first' : 'last'">
                  <v-img :src="daikin.src" max-width="272" max-height="272" class="mx-auto" @click="() => showImg(index)"></v-img>
                </v-col>
              </v-row>
            </v-sheet>
            <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
            <p class="mt-10">
              メニューはダイキンの方が多いですね。<br />
              湿度の設定など、細かく決めたい方はダイキンがオススメです。
            </p>

            <!-- ↓ どちらもサイズは大きめ！部屋のスペース確保が必要！ -->
            <h2 class="title02 mt-12 mb-3">どちらもサイズは大きめ！部屋のスペース確保が必要！</h2>
            <p class="mt-2">
              どちらもでかいです。設置の前にスペースを確保しておく必要があります。<br />
              横幅や高さはほとんど変わりませんが、厚みはシャープが薄いです。シャープは端が鋭角になっている点もすっきり見えますね。
            </p>
            <v-img src="/ec/images2/special/kaden/heyabosi/img_21-2.jpg" max-width="760" max-height="640" class="mx-auto" alt="寸法図"></v-img>

            <p class="mt-10">
              一方で、シャープは背面から吸気をする関係で、設置時に壁との隙間をある程度とっておく必要があります。<br />
              本体が薄い部分、後ろを空けないといけないのはマイナス点です。
            </p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/kaden/heyabosi/img_21.jpg" max-width="417" max-height="417" class="mx-auto" alt="奥行きを比較"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/kaden/heyabosi/img_24.jpg" max-width="417" max-height="417" class="mx-auto" alt="正面から比較"></v-img>
              </v-col>
            </v-row>

            <!-- ↓ 加湿用の給水タンク・除湿用の排水タンク -->
            <p class="title01 mt-12">加湿用の給水タンク・除湿用の排水タンク</p>
            <div v-for="(tank, index) in tankList" :key="index">
              <p class="mt-4 including-line-breaks">
                {{ tank.txt }}
              </p>
              <v-row>
                <v-col cols="12" sm="6" v-for="(src, i) in tank.imgs" :key="i">
                  <v-img :src="src" max-width="417" max-height="417" class="mx-auto"></v-img>
                </v-col>
              </v-row>
            </div>

            <!-- ↓ 静かさならばシャープが一枚上手 -->
            <p class="title02 mt-12">静かさならばシャープが一枚上手</p>
            <v-row>
              <v-col cols="12" sm="6">
                <p class="mt-3">
                  ダイキンは風量に合わせて、「しずか」「弱」「標準」「強」「ターボ」の5種類があります。<br />
                  シャープは「弱」「中」「強」の3種類で、「弱」はダイキンの「しずか」と「弱」の中間、「強」はダイキンの「ターボ」とほぼ同じです。
                </p>
                <p class="mt-3">ここで、実際に両機種を稼働させている動画を見てみましょう。</p>
                <p class="mt-3">
                  いかがでしょうか。 ちょっとわかりにくいですが、同じ風量で比べると、シャープの方が運転音は静かです。<br />
                  わずかな差ですが、静かさならばシャープが一枚上手です。
                </p>
              </v-col>
              <v-col cols="12" sm="6">
                <watchInVideo :src="'https://www.youtube.com/embed/jUR8wd_8_m8?rel=0'" :height="300" :sm="12" />
              </v-col>
            </v-row>

            <!-- ↓ 電気料金をセーブしたいなら、シャープがおすすめ -->
            <h3 class="title01 mt-12">電気料金をセーブしたいなら、シャープがおすすめ</h3>
            <p class="mt-2">実際の消費電力量は今回測れませんでしたので、商品仕様表から比較します。</p>

            <div class="pa-sm-10">
              <p>【シャープ プラズマクラスター 除加湿空気清浄機 KC-HD70】</p>
              <!-- ↓ pc -->
              <table class="hyo_01 sharp text-center" v-if="$vuetify.breakpoint.mdAndUp">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="3">空気清浄</td>
                    <td colspan="3">加湿空気清浄</td>
                    <td colspan="3">除湿空気清浄</td>
                  </tr>
                  <tr>
                    <td>弱</td>
                    <td>中</td>
                    <td>強</td>
                    <td>弱</td>
                    <td>中</td>
                    <td>強</td>
                    <td>弱</td>
                    <td>中</td>
                    <td>強</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>1.4</td>
                    <td>4.1</td>
                    <td>7</td>
                    <td>1.4</td>
                    <td>4.1</td>
                    <td>7</td>
                    <td>2.8</td>
                    <td>4.1</td>
                    <td>6.5</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>4.2</td>
                    <td>18</td>
                    <td>71</td>
                    <td>6.6</td>
                    <td>20</td>
                    <td>75</td>
                    <td>220/<br />235</td>
                    <td>220/<br />235</td>
                    <td>250/<br />270</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>約0.11</td>
                    <td>約0.49</td>
                    <td>約1.9</td>
                    <td>約0.18</td>
                    <td>約0.54</td>
                    <td>約2.0</td>
                    <td>約5.9/<br />約6.3</td>
                    <td>約5.9/<br />約6.3</td>
                    <td>約6.8/<br />約7.3</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>20</td>
                    <td>39</td>
                    <td>52</td>
                    <td>21</td>
                    <td>39</td>
                    <td>52</td>
                    <td>36</td>
                    <td>40</td>
                    <td>50</td>
                  </tr>
                </tbody>
              </table>

              <!-- ↓ sp -->
              <table class="hyo_01 sharp text-center" v-if="$vuetify.breakpoint.smAndDown">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="9">空気清浄</td>
                  </tr>
                  <tr>
                    <td>弱</td>
                    <td>中</td>
                    <td>強</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>1.4</td>
                    <td>4.1</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>4.2</td>
                    <td>18</td>
                    <td>71</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>約0.11</td>
                    <td>約0.49</td>
                    <td>約1.9</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>20</td>
                    <td>39</td>
                    <td>52</td>
                  </tr>
                </tbody>
              </table>

              <table class="hyo_01 sharp text-center" v-if="$vuetify.breakpoint.smAndDown">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="9">加湿空気清浄</td>
                  </tr>
                  <tr>
                    <td>弱</td>
                    <td>中</td>
                    <td>強</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>1.4</td>
                    <td>4.1</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>6.6</td>
                    <td>20</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>約0.18</td>
                    <td>約0.54</td>
                    <td>約2.0</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>21</td>
                    <td>39</td>
                    <td>52</td>
                  </tr>
                </tbody>
              </table>

              <table class="hyo_01 sharp text-center" v-if="$vuetify.breakpoint.smAndDown">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="9">除湿空気清浄</td>
                  </tr>
                  <tr>
                    <td>弱</td>
                    <td>中</td>
                    <td>強</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>2.8</td>
                    <td>4.1</td>
                    <td>6.5</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>220/<br />235</td>
                    <td>220/<br />235</td>
                    <td>250/<br />270</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>約5.9/<br />約6.3</td>
                    <td>約5.9/<br />約6.3</td>
                    <td>約6.8/<br />約7.3</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>36</td>
                    <td>40</td>
                    <td>50</td>
                  </tr>
                </tbody>
              </table>

              <p class="mt-10">【ダイキン 除加湿空気清浄機 クリアフォース MCZ70T】</p>
              <table class="hyo_01 dikin text-center" v-if="$vuetify.breakpoint.mdAndUp">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="5">空気清浄</td>
                    <td colspan="5">加湿空気清浄</td>
                    <td colspan="3">除湿空気清浄</td>
                  </tr>
                  <tr>
                    <td>しずか</td>
                    <td>弱</td>
                    <td>標準</td>
                    <td>強</td>
                    <td>ターボ</td>
                    <td>しずか</td>
                    <td>弱</td>
                    <td>標準</td>
                    <td>強</td>
                    <td>ターボ</td>
                    <td>弱</td>
                    <td>標準</td>
                    <td>強</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>1</td>
                    <td>2.2</td>
                    <td>3.5</td>
                    <td>4.8</td>
                    <td>7</td>
                    <td>1.7</td>
                    <td>2.2</td>
                    <td>3.5</td>
                    <td>4.8</td>
                    <td>7</td>
                    <td>3.5</td>
                    <td>3.9</td>
                    <td>4.3</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>8</td>
                    <td>10</td>
                    <td>18</td>
                    <td>32</td>
                    <td>90</td>
                    <td>11</td>
                    <td>12</td>
                    <td>20</td>
                    <td>34</td>
                    <td>92</td>
                    <td>200/<br />215</td>
                    <td>200/<br />215</td>
                    <td>205/<br />220</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>0.22</td>
                    <td>0.27</td>
                    <td>0.49</td>
                    <td>0.86</td>
                    <td>2.43</td>
                    <td>0.3</td>
                    <td>0.32</td>
                    <td>0.54</td>
                    <td>0.92</td>
                    <td>2.48</td>
                    <td>5.4/<br />5.81</td>
                    <td>5.4/<br />5.81</td>
                    <td>5.54/<br />5.94</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>18</td>
                    <td>28</td>
                    <td>39</td>
                    <td>46</td>
                    <td>54</td>
                    <td>25</td>
                    <td>30</td>
                    <td>39</td>
                    <td>46</td>
                    <td>54</td>
                    <td>38</td>
                    <td>41</td>
                    <td>44</td>
                  </tr>
                </tbody>
              </table>

              <table class="hyo_01 dikin text-center" v-if="$vuetify.breakpoint.smAndDown">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="5">空気清浄</td>
                  </tr>
                  <tr>
                    <td>しずか</td>
                    <td>弱</td>
                    <td>標準</td>
                    <td>強</td>
                    <td>ターボ</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>1</td>
                    <td>2.2</td>
                    <td>3.5</td>
                    <td>4.8</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>8</td>
                    <td>10</td>
                    <td>18</td>
                    <td>32</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>0.22</td>
                    <td>0.27</td>
                    <td>0.49</td>
                    <td>0.86</td>
                    <td>2.43</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>18</td>
                    <td>28</td>
                    <td>39</td>
                    <td>46</td>
                    <td>54</td>
                  </tr>
                </tbody>
              </table>

              <table class="hyo_01 dikin text-center" v-if="$vuetify.breakpoint.smAndDown">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="5">加湿空気清浄</td>
                  </tr>
                  <tr>
                    <td>しずか</td>
                    <td>弱</td>
                    <td>標準</td>
                    <td>強</td>
                    <td>ターボ</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>1.7</td>
                    <td>2.2</td>
                    <td>3.5</td>
                    <td>4.8</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>11</td>
                    <td>12</td>
                    <td>20</td>
                    <td>34</td>
                    <td>92</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>0.3</td>
                    <td>0.32</td>
                    <td>0.54</td>
                    <td>0.92</td>
                    <td>2.48</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>25</td>
                    <td>30</td>
                    <td>39</td>
                    <td>46</td>
                    <td>54</td>
                  </tr>
                </tbody>
              </table>

              <table class="hyo_01 dikin text-center" v-if="$vuetify.breakpoint.smAndDown">
                <thead>
                  <tr>
                    <td colspan="2" rowspan="2">モード</td>
                    <td colspan="5">除湿空気清浄</td>
                  </tr>
                  <tr>
                    <td>弱</td>
                    <td>標準</td>
                    <td>強</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">風量<br />（m3/分）</td>
                    <td>3.5</td>
                    <td>3.9</td>
                    <td>4.3</td>
                  </tr>
                  <tr>
                    <td colspan="2">消費電力<br />（W）</td>
                    <td>200/<br />215</td>
                    <td>200/<br />215</td>
                    <td>205/<br />220</td>
                  </tr>
                  <tr>
                    <td colspan="2">電気代<span class="hosoku">※1</span><br />（円）</td>
                    <td>5.4/<br />5.81</td>
                    <td>5.4/<br />5.81</td>
                    <td>5.54/<br />5.94</td>
                  </tr>
                  <tr>
                    <td colspan="2">運転音<br />（dB）</td>
                    <td>38</td>
                    <td>41</td>
                    <td>44</td>
                  </tr>
                </tbody>
              </table>
              <span class="hosoku">※1 : 1時間当たり1kWh=27円(税込み・消費税率8％)で算出</span>
            </div>

            <p>
              省エネ性能で言えば、シャープが上回っています。<br />
              年中動かす家電です。電気料金をセーブしたいならシャープがオススメです。
            </p>

            <!-- ↓ フィルターの清掃が楽なのはシャープ -->
            <p class="title02 mt-12">フィルターの清掃が楽なのはシャープ</p>
            <p class="mt-3">
              基本のお手入れはプレフィルターの清掃。<br />
              シャープは背面のプレフィルターに付いているホコリを掃除機で吸うだけの簡単メンテナンスです。
            </p>
            <p class="mt-3">
              一方のダイキンは、前面のパネルを開けて、プレフィルターと両端の電気集塵ユニットの掃除があります。<br />
              この電気集塵ユニットの掃除が手間がかかります。
            </p>
            <p class="mt-3">日々のメンテナンスが楽なのはシャープですね。</p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/kaden/heyabosi/img_18.jpg" max-width="417" max-height="417" class="mx-auto" alt="プレフィルター"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="/ec/images2/special/kaden/heyabosi/img_17.jpg"
                  max-width="417"
                  max-height="417"
                  class="mx-auto"
                  alt="プレフィルターと電気集塵ユニット"
                ></v-img>
              </v-col>
            </v-row>

            <!-- ↓ 加湿トレーのお手入れは、ダイキンが清潔でおすすめ -->
            <h3 class="title01 mt-12 mb-3">加湿トレーのお手入れは、ダイキンが清潔でおすすめ</h3>
            <v-row>
              <v-col cols="12" sm="8">
                <p class="mt-3">加湿運転時のトレーですが、ダイキンは加湿トレーにもストリーマを照射するので、水のぬめりが出にくいです。</p>
                <p class="mt-3">冬場の加湿トレーのお手入れはダイキンが◎です。</p>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img
                  src="/ec/images2/special/kaden/heyabosi/img_26.png"
                  max-width="275"
                  max-height="250"
                  class="mx-auto"
                  alt="加湿トレーにストリーマを照射"
                ></v-img>
              </v-col>
            </v-row>

            <!-- ↓ その他 -->
            <p class="title02 mt-12">その他</p>
            <v-row>
              <v-col cols="12" sm="8">
                <p class="mt-3">ダイキンは「ルーバー」に付いている風の通り道のガイドの角度を「手動」で変えられます。</p>
                <p class="mt-3">広い部屋で部屋干しをするときは、便利な機構かもしれませんね。</p>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img src="/ec/images2/special/kaden/heyabosi/img_22.jpg" max-width="284" max-height="284" class="mx-auto" alt="ルーバー"></v-img>
              </v-col>
            </v-row>

            <h3 class="title01 mt-12">おすすめ除湿機の比較結果はこちら</h3>
            <p class="mt-2">
              いかがでしたか。当店スタッフが実際に使った感想をまとめると、同じように見える2台にも違いが見受けられました。<br />
              ダイキンとシャープを比較して、当店スタッフが感じた評価は…
            </p>
            <div class="mt-5 cf">
              <dl class="kekka">
                <dt>多機能</dt>
                <dd><span>ダイキン</span> ＞ シャープ</dd>
                <dt>サイズ・設置</dt>
                <dd>ダイキン ≠ シャープ</dd>
                <dt>運転音</dt>
                <dd>ダイキン ＜ <span>シャープ</span></dd>
                <dt>消費電力量</dt>
                <dd>ダイキン ＜ <span>シャープ</span></dd>
                <dt>お手入れ（本体）</dt>
                <dd>ダイキン ＜ <span>シャープ</span></dd>
                <dt>お手入れ（加湿トレー）</dt>
                <dd><span>ダイキン</span> ＞ シャープ</dd>
              </dl>
            </div>
            <div style="clear: both"></div>
            <div class="py-8 px-sm-10">
              <span class="title03"> 省エネ・節電が優先の方、いろんな機能を使わずおまかせ運転がメインならシャープがおすすめです。<br /> </span>
              <span class="title03 mt10"> いろんなモードを使い分け湿度高め低めなどのコントロールをしたいのなら、ダイキンがおすすめです。 <br /> </span>
              <span class="title03 mt10"> 1台でリビングの空調を1年中コントロールできる除加湿空気清浄機、ライフスタイルに合った1台をお選びください。 </span>
            </div>

            <v-row class="mt-2 mt-sm-15">
              <v-col cols="12" sm="6">
                <!--cart-->
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-img
                      src="/ec/images2/special/kaden/heyabosi/img_sharp.jpg"
                      max-width="231"
                      max-height="307"
                      alt="シャープ プラズマクラスター 除加湿空気清浄機 KC-HD70-W ホワイト系"
                      class="mx-auto"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <span>シャープ プラズマクラスター 除加湿空気清浄機 KC-HD70-W ホワイト系</span>
                    <p class="jyoshitsu-price">価格：<span>-</span>円(税込)</p>
                    <v-btn block height="45" class="mt-6" color="grey" href="/ec/pd/4974019911502"><span class="white--text">販売終了</span></v-btn>
                  </v-col>
                </v-row>
                <!--/cart-->
                <dl class="sharp-spec mt-5" v-if="$vuetify.breakpoint.mdAndUp">
                  <dt>空気清浄</dt>
                  <dd>〜32畳<br />8畳を清浄する目安 9分</dd>
                  <dt>加湿空気清浄</dt>
                  <dd>プレハブ〜18畳<br />木造〜11畳</dd>
                  <dt>除湿空気清浄</dt>
                  <dd>コンクリート〜20/23畳<br />木造〜10/11畳</dd>
                  <dt>タンク容量</dt>
                  <dd>加湿タンク約3.0、除湿タンク約3.0</dd>
                  <dt>フィルター交換目安</dt>
                  <dd>交換・購入の目安 約10年間</dd>
                  <dt>本体寸法</dt>
                  <dd>幅405×奥行337×高さ687</dd>
                  <dt>本体質量(水なし)</dt>
                  <dd>約17.6</dd>
                </dl>
              </v-col>
              <v-col cols="12" sm="6">
                <!--cart-->
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-img
                      src="/ec/images2/special/kaden/heyabosi/img_daikin.jpg"
                      max-width="231"
                      max-height="307"
                      alt="ダイキン 除加湿空気清浄機 クリアフォースZ MCZ70T-W ホワイト"
                      class="mx-auto"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <span>ダイキン 除加湿空気清浄機 クリアフォースZ MCZ70T-W ホワイト</span>
                    <p class="jyoshitsu-price">価格：<span>-</span>円(税込)</p>
                    <v-btn block height="45" class="mt-6" color="grey" href="/ec/pd/4548848519491"><span class="white--text">販売終了</span></v-btn>
                  </v-col>
                </v-row>
                <!--/cart-->
                <dl class="daikin-spec mt-5" v-if="$vuetify.breakpoint.mdAndUp">
                  <dt>空気清浄</dt>
                  <dd>～31畳<br />8畳を清浄する目安 9分</dd>
                  <dt>加湿空気清浄</dt>
                  <dd>プレハブ〜18畳<br />木造〜11畳</dd>
                  <dt>除湿空気清浄</dt>
                  <dd>鉄筋〜20/23畳<br /><br /></dd>
                  <dt>タンク容量</dt>
                  <dd>加湿タンク約3.0、除湿タンク約3.0</dd>
                  <dt>フィルター交換目安</dt>
                  <dd>交換・購入の目安 約10年間</dd>
                  <dt>本体寸法</dt>
                  <dd>幅415×奥行340×高さ690</dd>
                  <dt>本体質量(水なし)</dt>
                  <dd>22kg</dd>
                </dl>
              </v-col>
            </v-row>
          </v-card>

          <!--おすすめ特集・サービス-->
          <div class="mt-10 s-bnr">
            <p>おすすめ特集・サービス</p>
            <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
          </div>
        </v-sheet>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import WatchInVideo from '@/components/common/special/watch-in-video.vue'
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'kaden-heyabosi',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: (props, context) => {
    document.title = 'おすすめ除湿機特集2017 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '除湿に加湿に空気清浄と1台で全てできる除加湿空気清浄機！おすすめの2017年最新モデルを比較しました。'
      );
    const state = reactive({
      visible: false,
      index: 0,
      imgs: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_20-2.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_16-2.jpg'],
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'キタムラ家電',
          linkUrl: '/ec/special/kaden',
          disabled: false
        },
        {
          path: 'おすすめ除湿機特集2017',
          disabled: true
        }
      ],
      daikinList: [
        { txt: 'ダイキンのメニューは自動運転コースが追加で5種類。\n衣類乾燥用のモードが2つ「ランドリー乾燥」と「おやすみランドリー」。「ハウスキープ」は結露防止用の除湿機能です。「水de脱臭」は加湿でニオイ分子を浮き出させ、その後の除湿によってニオイ分子を除去するモードです。\n「るすばんターボ」は1時間だけ風量がターボになります。\nまた「しつどセレクト」を使って、湿度を40％・50％・60％から選択できるのも特徴です。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_20.jpg' },
        { txt: 'シャープの「衣類乾燥モード」メニューは、ダイキンの「ランドリー乾燥」と一緒ですね。\n「結露抑制モード」はダイキンの「ハウスキープ」と一緒ですね。\n「パワフル吸じんモード」は最初の10分間は風量「強」、その後約1時間ホコリセンサーの感度を上げるモードです。\nシャープの風量「強」はダイキンの「ターボ」と同じ風量です。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_16.jpg' },
      ],
      tankList: [
        { txt: '両方共タンク容量は一緒で3Lずつ。加湿の給水タンクは手を入れて中を洗えます。\nシャープは持ち運びやすくする為の取っ手が付いています。タンクそのものにAg+イオンカートリッジ FZ-AG01K1を取り付けられる点もポイントです。', imgs: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_13.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_11.jpg'] },
        { txt: '除湿の排水タンクはどちらも似ていますね。\n排水口が正面に付いているダイキンの方が排水はしやすかったです。', imgs: [process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_10.jpg', process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/heyabosi/img_08.jpg'] },
      ],
      recommendedFeaturesList: [
        {
          href: "/ec/special/kaden/fan-fair",
          img: "https://shop.kitamura.jp/images/banner/6597.jpg",
          alt: "おすすめ扇風機特集2019",
        },
        {
          href: '/ec/special/kaden/air-purifier_fair',
          img: 'https://shopimg.kitamura.jp/images/banner/2393.gif',
          alt: '空気清浄機 | おすすめ新製品でウイルス・花粉対策'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ],
    });

    const showImg = (index: number) => {
      state.index = index;
      state.visible = true;
    }

    const handleHide = () => {
      state.visible = false;
    }

    return {
      ...toRefs(state),
      noimage,
      showImg,
      handleHide
    };
  }
});
</script>

<style lang="scss" scoped>
.kaden-heyabosi {
  p {
    font-size: 16px;
    font-family: 'Hiragino Kaku Gothic Pro W3', '�q���M�m�p�S Pro W3', Meiryo, '���C���I', 'MS P Gothic', '�l�r �o�S�V�b�N', sans-serif;
  }
  h1 {
    background: #c8000a;
    color: #fff;
    font-size: 30px;
    padding: 5px;
    text-align: center;
    font-weight: normal;
  }
  .relative {
    position: relative;
  }
  .vs {
    position: absolute;
    top: 220px;
    left: 345px;
    z-index: 100;
  }
  .item01 {
    dt {
      font-size: 120%;
    }
  }
  .title01 {
    background: linear-gradient(transparent 70%, #94ede7 70%);
    font-size: 26px;
    padding-left: 10px;
    font-weight: normal;
  }
  .title02 {
    background: linear-gradient(transparent 70%, #f0e565 70%);
    font-size: 26px;
    padding-left: 10px;
    font-weight: normal;
  }
  table {
    border-collapse: collapse;
    margin-bottom: 1.25em;
    border-spacing: 0;
    font-size: 100%;
    width: 100%;
  }
  .sharp {
    thead {
      background: #94ede7;
    }
  }
  .dikin {
    thead {
      background: #f0e565;
    }
  }
  .hyo_01 td {
    padding: 5px;
    border: 1px #aaa solid;
  }
  .hosoku {
    color: #de1b27;
    font-size: 80%;
  }
  dl.kekka {
    margin: 0 auto;
    width: 640px;
    text-align: center;
    font-size: 120%;
    dd {
      float: left;
      margin-top: 4px;
      padding: 1% 2%;
      width: 51%;
      background: #eee;
    }
    dt {
      float: left;
      margin-top: 4px;
      margin-right: 4px;
      padding: 1% 2%;
      width: 40%;
      background: #94ede7;
    }
    dd span {
      color: #de1b27;
    }
  }
  .cf {
    display: inline-block;
    width: 100%;
  }
  .title03 {
    font-size: 22px;
    line-height: 1.8;
    background: linear-gradient(transparent 70%, #fff9b0 70%);
  }
  .jyoshitsu-price {
    margin: 100px 0 0;
    color: #c30d23;
    text-align: center;
  }
  dl.sharp-spec {
    margin: 0 auto;
    border: 1px #ccc solid;
    dt {
      text-align: center;
      background: #94ede7;
      padding: 5px;
    }
  }
  dl.daikin-spec {
    margin: 0 auto;
    border: 1px #ccc solid;
    dt {
      text-align: center;
      background: #f0e565;
      padding: 5px;
    }
  }
  dl.sharp-spec dd,
  dl.daikin-spec dd {
    padding: 10px 20px;
    text-align: center;
  }
  .s-bnr p {
    padding-left: 10px;
    background: linear-gradient(transparent 70%, #ddd 70%);
    font-size: 26px;
  }
  @media screen and (max-width: 655px) {
    p {
      font-size: 14px;
    }
    h1 {
      font-size: 17px;
      font-weight: bold;
    }
    .title01 {
      background: linear-gradient(transparent 70%, #bae6ff 70%);
      font-size: 13px;
      padding: 0;
      font-weight: bold;
    }
    .title02 {
      background: linear-gradient(transparent 70%, #f0e565 70%);
      font-size: 15px;
      padding: 0;
      font-weight: bold;
    }
    dl.kekka {
      width: 100%;
      font-size: 100%;
      dd {
        clear: both;
        width: 100%;
      }
      dt {
        clear: both;
        width: 100%;
      }
    }
    .title03 {
      font-size: 100%;
    }
  }
}
</style>
