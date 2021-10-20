<template>
  <div class="iphone7-camera">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <!--同じ対象物を撮影してiPhone7とiPhone6sのカメラ性能を比較-->
        <section>
          <h1>同じ対象物を撮影して<br />iPhone7とiPhone6sのカメラ性能を比較</h1>
          <p>
            ついに登場しましたiPhone7。1世代前と比べ、いろいろ進化しています！<br />
            その中でやはり気になるのがカメラ性能。アップルの発表イベントでは、iPhone7のカメラについて多く語るなど、力の入れようが伺えます。<br />
            今回はスペックだけでは分かりづらいカメラの性能を、iPhone6sとiPhone7で同じ対象物を撮影し、比較してみました。
          </p>
          <p>
            画素数はiPhone6sと同じ1,200万画素ですが、撮影の仕上がりに違いは出たのでしょうか?<br />
            作例を見比べながら、ぜひご覧ください
          </p>
          <v-img
            alt="iPhone7 iPhone6s | イメージ"
            class="mx-auto"
            src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/iPhone7-camera_01.jpg"
          ></v-img>
        </section>
        <!--同じ1,200万画素のカメラでディティールに違いはでるのか?-->
        <section>
          <h2>同じ1,200万画素のカメラで<br />ディティールに違いはでるのか?</h2>
          <p>全長約10cmの自転車の模型を撮影しました。質感の表現やシャープさを見比べてみましょう。</p>

          <v-row>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6s撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_01s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6s撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_01.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7撮影 | 拡大イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_02s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_02.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6s撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_03s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6s撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_03.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7撮影 | 拡大イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_04s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_04.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7撮影</p>
            </v-col>
          </v-row>

          <p>ぱっと見るとiPhone7で撮影した画像の方が背景の白部分と、ボディやタイヤの暗い部分のコントラストがしっかりしており、くっきりした印象です。</p>
          <p>
            自転車中央のネジ部分を拡大すると、iPhone6sで撮影した方はネジ穴がぼやけていたり、金属の錆びが塗りつぶされたように写りました。一方iPhone7では、ネジ穴もシャープで錆びの感じもでており、質感がしっかり伝わってきます。
          </p>
          <p>同じ1,200万画素でもデティールにここまで差が出たのは、正直驚きました。</p>
        </section>
        <!--色の鮮やかさが増し、実際の色に近くなった印象-->
        <section>
          <h2>色の鮮やかさが増し、実際の色に近くなった印象</h2>
          <p>続いて色味を比較する為に、駄菓子屋で売っているドロップキャンディを撮影しました。</p>

          <v-row>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6s撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_05s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6s撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_05.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_06s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_06.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7撮影</p>
            </v-col>
          </v-row>
        </section>
        <!--暗所でもノイズが少なく鮮明に-->
        <section>
          <h2>暗所でもノイズが少なく鮮明に</h2>
          <p>暗所でのカメラ性能を比較する為、部屋の照明を暗くして人形を撮影しました。</p>

          <v-row>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6s撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_07s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6s撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_07.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_08s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_08.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6s撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_09s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6s撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_09.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_10s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_10.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7撮影</p>
            </v-col>
          </v-row>

          <p>
            一見するとiPhone6sの方が明るくキレイに撮れたように見えますが、ベンチの部分を拡大してみると、ノイズが多い事が分かります。iPhone7ではあまりノイズが感じられませんでした。
          </p>
          <p>レンズがf2.2からf1.8と明るくなった事で、薄暗い環境でも鮮明な写真を撮影する事ができました。</p>
        </section>
        <!--シャープさが増したインカメラ-->
        <section>
          <h2>シャープさが増したインカメラ</h2>
          <p>最後に比較するのはインカメラです。照明を戻し、先ほど使った人形をインカメラで撮影しました。</p>

          <v-row>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6sインカメラ撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_11s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6sインカメラ撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_11.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s インカメラ撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7インカメラ撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_12s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7インカメラ撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_12.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7 インカメラ撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone6sインカメラ撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_13s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone6sインカメラ撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_13.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone6s インカメラ撮影</p>
            </v-col>
            <v-col cols="12" sm="6">
              <!--dialog-->
              <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        alt="iPhone7インカメラ撮影 | イメージ"
                        class="icon-zoom mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_14s.jpg"
                        v-bind="attrs"
                        v-on="on"
                      ></v-img>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-img
                          alt="iPhone7インカメラ撮影 | 拡大イメージ"
                          class="icon-zoom mx-auto"
                          src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/sakure_14.jpg"
                          v-bind="attrs"
                          v-on="on"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn text @click="dialog.value = false">閉じる</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
              <!--dialog-->
              <p class="text-right">iPhone7 インカメラ撮影</p>
            </v-col>
          </v-row>

          <p>
            iPhone6sでは全体的にくすんだ色味になりましたが、iPhone7ではインカメラでも鮮やかな色が出ました。<br />
            拡大してみると、iPhone6sよりもiPhone7の方がベンチの輪郭がはっきりしている事が分かります。
          </p>
          <p>
            500万画素から700万画素にアップした事でシャープさが増し、質感の表現がしっかりした印象です。
            自撮り好きな方にはうれしいグレードアップではないでしょうか。
          </p>
        </section>
        <!--実際に比較して思うこと-->
        <section>
          <h2>実際に比較して思うこと</h2>
          <p>iPhone6sとiPhone7の写真を比較した率直な感想としては、iPhone7は色が鮮やか！決して不自然な感じではなく、実際の色に近くなった印象です。</p>
          <p>
            また、iPhone6sでは全体的に黄色っぽくなる事がありましたが、iPhone7はホワイトバランスがうまく調整され、黄色っぽくなる事はありませんでした。そのおかげか、全体的にメリハリが生まれました。
          </p>
          <p>
            カメラの良し悪しは、画素数だけではありません。レンズや映像エンジンの性能などによっても大きく変わってきます。カタログスペックだけでは分からない違いも、写真を比較する事でiPhone7のカメラ性能の向上を実感できました。
          </p>

          <v-row>
            <v-col cols="12" sm="6">
              <v-img alt="iPhone7 | イメージ" class="mx-auto" src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/iphone7.jpg"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-sheet class="mt-4" outlined rounded>
                <a class="d-block hover pa-2 text-center icon-headphones" href="/special/sale-fair/kaden/sp-accessory/"
                  >iPhone7 / iPhone7Plusの<br />アクセサリーはこちら</a
                >
              </v-sheet>
              <v-sheet class="mt-4" outlined rounded>
                <a class="d-block hover pa-2 text-center arrow-r" href="https://www.kitamura.jp/service/ip/" target="_blank">iPhoneの<br />オンライン予約</a>
              </v-sheet>
            </v-col>
          </v-row>

          <v-sheet class="mt-4" outlined rounded>
            <a class="d-block hover pa-2 text-center arrow-l" href="/special/sale-fair/kaden/smart_phone/iphone7/"
              >iPhone6sからカメラ性能は進化したのか、カタログスペックで比較しました！</a
            >
          </v-sheet>

          <v-img alt="PR" class="mt-12 mx-auto" src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/icon-03.jpg" max-width="100px"></v-img>
        </section>
        <!--section-->
        <section class="mb-8">
          <h2>
            iPhoneで撮った写真をプリントすると、さらに印象的！<br />
            プレゼントにも最適なプリントサービス。
          </h2>

          <v-row>
            <v-col cols="12" sm="6">
              <v-card class="pa-4" elevation="1" outlined>
                <v-img
                  alt="シャッフルプリント | イメージ"
                  class="mx-auto"
                  src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/imageing01.jpg"
                ></v-img>
                <p class="font-weight-bold text-center">
                  <a href="https://www.kitamura-print.com/print/wonder_shuffle/" target="_blank">シャッフルプリント</a>
                </p>
                <v-divider></v-divider>
                <p class="mt-4">
                  たくさん撮影された写真を1枚のプリントにギュッ！<br />
                  思い出を一枚の写真にできるから旅行やお子さまの写真にピッタリ！
                </p>
                <v-btn block class="hover mb-6" color="black" dark elevation="1" href="https://www.kitamura-print.com/print/wonder_shuffle/" target="_blank">
                  <span class="arrow-r d-block white--text">詳細・ご注文はこちら</span>
                </v-btn>
                <p>【アプリ注文対応】</p>
                <v-row>
                  <v-col cols="6">
                    <a href="https://itunes.apple.com/us/app/shaffurupurinto-kameranokitamura/id1009274709?l=ja&ls=1&mt=8" target="_blank">
                      <v-img alt="App Store" class="mx-auto" src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_appstore.gif"></v-img>
                    </a>
                    <small>iOS6.0以降対応</small>
                  </v-col>
                  <v-col cols="6">
                    <a href="https://market.android.com/details?id=jp.kitamura.shuffle" target="_blank">
                      <v-img
                        alt="Google play"
                        class="mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_googleplay.gif"
                      ></v-img>
                    </a>
                    <small>Android OS2.3/4.0対応</small>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card class="pa-4" elevation="1" outlined>
                <v-img
                  alt="高品質スマホプリント | イメージ"
                  class="mx-auto"
                  src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/imageing02.jpg"
                ></v-img>
                <p class="font-weight-bold text-center">
                  <a href="https://www.kitamura-print.com/print/smartphone_print/" target="_blank">高品質スマホプリント</a>
                </p>
                <v-divider></v-divider>
                <p class="mt-4">
                  スマホで撮った写真を高品質プリント！<br />
                  豊富なプリントサイズをお選びいただけます。<br />
                  専用アプリなら注文がカンタン。<br />
                  最短10分のスピード仕上げ！ご注文時に「お店受取」を選ぶとご来店時にすぐお渡しできます。
                </p>
                <v-btn block class="hover mb-6" color="black" dark elevation="1" href="https://www.kitamura-print.com/print/smartphone_print/" target="_blank">
                  <span class="arrow-r d-block white--text">詳細・ご注文はこちら</span>
                </v-btn>
                <p>【アプリ注文対応】</p>
                <v-row>
                  <v-col cols="6">
                    <a href="https://itunes.apple.com/jp/app/purinto-zhi-xing-bian-for/id451410131?mt=8" target="_blank">
                      <v-img alt="App Store" class="mx-auto" src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_appstore.gif"></v-img>
                    </a>
                    <small>iOS8.0以降対応</small>
                  </v-col>
                  <v-col cols="6">
                    <a href="https://market.android.com/details?id=com.photo" target="_blank">
                      <v-img
                        alt="Google play"
                        class="mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_googleplay.gif"
                      ></v-img>
                    </a>
                    <small>Android OS2.3/4.0対応</small>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card class="pa-4" elevation="1" outlined>
                <v-img
                  alt="イヤーアルバム | イメージ"
                  class="mx-auto"
                  src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/imageing03.jpg"
                ></v-img>
                <p class="font-weight-bold text-center">
                  <a href="https://photobook.kitamura.jp/yearalbum/apri.html" target="_blank">イヤーアルバム</a>
                </p>
                <v-divider></v-divider>
                <p class="mt-4">
                  期間を指定するだけで、写真の中から写りの良いものを選択・レイアウトまでソフトが自動で行います！<br />
                  イメージ作成までは料金がかかりませんので、ぜひ一度このお手軽さを体験してみてください。
                </p>
                <v-btn block class="hover mb-6" color="black" dark elevation="1" href="https://photobook.kitamura.jp/yearalbum/apri.html" target="_blank">
                  <span class="arrow-r d-block white--text">詳細・ご注文はこちら</span>
                </v-btn>
                <p>【アプリ注文対応】</p>
                <v-row>
                  <v-col cols="4">
                    <a href="https://itunes.apple.com/us/app/iyaarubamu/id934282943?l=ja&amp;ls=1&amp;mt=8" target="_blank">
                      <v-img alt="App Store" class="mx-auto" src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_appstore.gif"></v-img>
                    </a>
                    <small>iPhone</small>
                  </v-col>
                  <v-col cols="4">
                    <a href="https://itunes.apple.com/us/app/iyaarubamu-for-ipad/id934282948?l=ja&amp;ls=1&amp;mt=8" target="_blank">
                      <v-img alt="App Store" class="mx-auto" src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_appstore.gif"></v-img>
                    </a>
                    <small>iPad</small>
                  </v-col>
                  <v-col cols="4">
                    <a href="https://market.android.com/details?id=jp.co.fujifilm.yearalbum_android.kitamura" target="_blank">
                      <v-img
                        alt="Google play"
                        class="mx-auto"
                        src="/ec/images2/special/kaden/smart_phone/iphone/iphone7/iphone7-camera/btn_googleplay.gif"
                      ></v-img>
                    </a>
                    <small>Android</small>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-sheet class="mt-4" outlined rounded>
            <a class="d-block hover pa-2 text-center arrow-l" href="https://www.kitamura-print.com/" target="_blank">全てのプリントサービスを見る</a>
          </v-sheet>
        </section>

        <!-- ↓ SNS -->
        <facebookAndTwitter />
        <kitamuraService />

        <subText :textItem="'関連特集・サイトをご紹介'" />
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </v-app>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage, formatPrice } from '@/logic/utils';
import ProductService from '@/logic/product.service';
import { ProductDetail } from '@/types/product';
import SubText from '@/components/common/special/subtext.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';
export default Vue.extend({
  name: 'iphone7-camera',
  components: {
    breadcrumbs: Breadcrumbs,
    subText: SubText,
    facebookAndTwitter: FacebookAndTwitter,
    recommendedFeatures: RecommendedFeatures,
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = 'iPhone7 とiPhone6sのカメラ性能を比較 | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        'iPhone7とiPhone6sで同じ対象物を撮影してカメラ性能を比較しました'
      );
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----

      recommendedFeaturesList: [
        {
          href: '/special/sale-fair/kaden/smart_phone/sim_free/',
          img: 'https://shop.kitamura.jp/images/banner/3108.gif',
          alt: 'おすすめSIMフリースマホ特集'
        },
        {
          href: 'https://www.instagram.com/camera_kitamura/',
          img: 'https://shop.kitamura.jp/ts_rsc/797/images/bn-instagram_350x130.gif',
          alt: 'カメラのキタムラ公式instagram'
        },
        {
          href: '/ec/special/sale-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ],
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'iPhone7 とiPhone6sのカメラ性能を比較',
          disabled: true
        }
      ],
      // ↑ ---- パンくず情報 ----

      // ↓ ---- 価格・人気アクセサリー ----
      // 取得するJancode
      productJanCodeList: ['4960759174680'],
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
      // ↓ ---- 掲載期間 ----
      if (state.validFrom && state.validTo) context.emit('validation-period', state.validFrom, state.validTo);
      // ↑ ---- 掲載期間 ----
      fetchProduct();
    });
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
    };

  }
});
</script>



<style lang="scss" scoped>
.main-contents-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 12px;
  h1,
  h2 {
    font-size: 160%;
    font-weight: normal;
    margin: 64px auto 32px;
    padding: 0 20px;
    text-align: center;
  }
  .arrow-l,
  .arrow-r,
  .icon-headphones {
    display: block;
    position: relative;
    text-align: center;
    width: 100%;
  }
  .arrow-l::before {
    content: '\f104';
    font-family: 'Font Awesome 5 Pro';
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .arrow-r::after {
    content: '\f105';
    font-family: 'Font Awesome 5 Pro';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .icon-headphones::after {
    content: '\f58f';
    font-family: 'Font Awesome 5 Pro';
    font-size: 200%;
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .icon-zoom {
    position: relative;
  }
  .icon-zoom::before {
    color: #fff;
    content: '\f002';
    font-family: 'Font Awesome 5 Pro';
    font-size: 20px;
    position: absolute;
    right: 5px;
    bottom: 0;
  }
}
</style>