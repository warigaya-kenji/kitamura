<template>
  <v-app>
    <div class="iphone7">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->
        <v-container class="inr">
          <h1 class="text-h4 text-center line-height">iPhone7のカメラ性能を徹底レビュー</h1>
          <p class="mt-5">
            2016年9月8日 AppleのイベントにてiPhoneの新型となる｢iPhone7/iPhone7Plus｣が発表されました。<br />
            以前のiPhone6sやiPhoneSEと比べると、スペックも含めて大幅に変更された点が多く、期待の新モデルです。カメラ性能面では、iPhone7Plusのみとなりますが｢デュアルカメラ｣を搭載した事が最大の変化ではないでしょうか！
          </p>
          <p class="mt-5">
            もともとカメラ性能に定評のあるiPhone。<br />
            デュアルカメラにより、どのような写真体験を私たちに与えてくれるのか、iPhone6sと比較しながらレビューしていきます。
          </p>

          <v-card color="#f5f5f5" class="py-4 px-6 mt-7 lens">
            <dl>
              <dt>【デュアルカメラとは】</dt>
              <dd class="pa-2 text-body-2">
                デュアルカメラ(デュアルレンズカメラ)とは、カメラに2つのレンズが搭載されており、それぞれのレンズで撮影した画像データを組み合わせる事により、ピント合わせの高速化や表現豊かな画質を作り出せる仕組みです。
              </dd>
            </dl>
            <dl class="mt-5">
              <dt>【考えられるメリット】</dt>
              <dd>
                <ul>
                  <li>一眼レフのような｢ボケ｣のある写真</li>
                  <li>2のレンズの視差を利用する事でピント調整のスピードアップ</li>
                  <li>2つのレンズから多くの光を取り込む事ができる為、暗所での撮影に強い</li>
                  <li>1つのレンズに比べ、画素数以上に画像が鮮明</li>
                </ul>
              </dd>
            </dl>
          </v-card>

          <v-container class="mt-15 mb-16">
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/iphone7.jpg" max-width="350" max-height="350" class="mx-auto"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    block
                    :elevation="hover ? 12 : 6"
                    height="80"
                    class="mt-4 text-transform"
                    @click="linkToOtherWindow('https://shop.kitamura.jp/special/kaden/sp-accessory')"
                  >
                    <v-img src="	https://shop.kitamura.jp/ts_rsc/792/images/icon-02.png" max-width="75" max-height="75"></v-img>
                    iPhone7 / iPhone7Plusの<br />アクセサリーはこちら
                  </v-btn>
                </v-hover>
                <v-hover v-slot="{ hover }">
                  <v-btn
                    block
                    :elevation="hover ? 12 : 6"
                    height="80"
                    class="mt-4 text-transform"
                    @click="linkToOtherWindow('https://www.kitamura.jp/service/ip/')"
                  >
                    iPhoneの<br />オンライン予約<v-icon right>fal fa-chevron-right</v-icon>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>

          <h2>iPhone6sからカメラ性能は進化したのか、<br />カタログスペックで比較しました！</h2>
          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/iphone7camera.jpg" max-width="550" max-height="550" class="mx-auto mt-2"></v-img>

          <div class="pa-7">
            <p class="text-h6">【基本スペック表】</p>
            <table class="text-center spec">
              <tr>
                <th>シリーズ</th>
                <td>
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-7.jpg" alt="iPhone7" max-width="151" max-height="113" /><br /><span
                    class="label-gray block"
                    >iPhone7</span
                  >
                </td>
                <td>
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-7plus.jpg" alt="iPhone7Plus" max-width="151" max-height="113" /><br /><span
                    class="label-gray block"
                    >iPhone7Plus</span
                  >
                </td>
                <td>
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-6s.jpg" alt="iPhone6s" max-width="151" max-height="113" /><br /><span
                    class="label-gray block"
                    >iPhone6s</span
                  >
                </td>
                <td>
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-6splus.jpg" alt="iPhone6sPlus" max-width="151" max-height="113" /><br /><span
                    class="label-gray block"
                    >iPhone6sPlus</span
                  >
                </td>
              </tr>
              <tr>
                <th>カラー</th>
                <td class="point">ジェットブラック<br />ブラック<br />シルバー<br />ゴールド<br />ローズゴールド</td>
                <td class="point">ジェットブラック<br />ブラック<br />シルバー<br />ゴールド<br />ローズゴールド</td>
                <td>ローズゴールド<br />スペースグレイ<br />ゴールド<br />シルバー</td>
                <td>ローズゴールド<br />スペースグレイ<br />ゴールド<br />シルバー</td>
              </tr>
              <tr>
                <th>幅x高さx厚み</th>
                <td>67.1×138.3×7.1 mm</td>
                <td>77.9×158.2×7.3 mm</td>
                <td>67.1×138.3×7.1 mm</td>
                <td>77.9×158.2×7.3 mm</td>
              </tr>
              <tr>
                <th>重量</th>
                <td class="point">138g</td>
                <td class="point">188g</td>
                <td>143g</td>
                <td>192g</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td class="point">Apple A10</td>
                <td class="point">Apple A10</td>
                <td>Apple A9</td>
                <td>Apple A9</td>
              </tr>
              <tr>
                <th>容量</th>
                <td class="point">32GB/128GB/256GB</td>
                <td class="point">32GB/128GB/256GB</td>
                <td>16GB/64GB/128GB</td>
                <td>16GB/64GB/128GB</td>
              </tr>
              <tr>
                <th>ディスプレイ</th>
                <td>4.7インチ<br />Retina HD<span class="font-small block">(1,334 x 750)</span></td>
                <td>5.5インチ<br />Retina HD<span class="font-small block">(1,920 x 1,080)</span></td>
                <td>4.7インチ<br />Retina HD<span class="font-small block">(1,334 x 750)</span></td>
                <td>5.5インチ<br />Retina HD<span class="font-small block">(1,920 x 1,080)</span></td>
              </tr>
              <tr>
                <th>Bluetooth</th>
                <td>Bluetooth 4.2</td>
                <td>Bluetooth 4.2</td>
                <td>Bluetooth 4.2</td>
                <td>Bluetooth 4.2</td>
              </tr>
              <tr>
                <th>Wi-fi</th>
                <td>802.11a/b/g/n/ac</td>
                <td>802.11a/b/g/n/ac</td>
                <td>802.11a/b/g/n/ac</td>
                <td>802.11a/b/g/n/ac</td>
              </tr>
              <tr>
                <th>NFC対応</th>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○</td>
              </tr>
              <tr>
                <th>認証機能</th>
                <td>指紋認証</td>
                <td>指紋認証</td>
                <td>指紋認証</td>
                <td>指紋認証</td>
              </tr>
              <tr>
                <th>耐水機能</th>
                <td class="maru point">○</td>
                <td class="maru point">○</td>
                <td>―</td>
                <td>―</td>
              </tr>
              <tr>
                <th>Felica対応</th>
                <td class="maru point">○</td>
                <td class="maru point">○</td>
                <td>―</td>
                <td>―</td>
              </tr>
              <tr>
                <th>3DTouch</th>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○</td>
              </tr>
              <tr>
                <th>連続<br />待ち受け時間</th>
                <td>最大10日間</td>
                <td>最大16日間</td>
                <td>最大10日間</td>
                <td>最大16日間</td>
              </tr>
            </table>
          </div>

          <p>
            サイズはiPhone6sシリーズと同じものの、新しいCPU｢Apple
            A10｣を搭載した事で、プロセッサやグラフィックの処理能力アップ。フォーカススピードやホワイトバランスの強化など、カメラ性能にもこの恩恵が期待できます。
          </p>
          <p>
            ディスプレイの解像度は変わらないものの、画像の再現により多くの階調色の分布（デジタル映画業界と同じ色空間）が使われるので、現実の色に一層近くなると思われます。
          </p>
          <p>待望となる｢防沫機能・耐水機能｣がiPhone7に追加された事で、アウトドアなどの撮影シーンが今より広がると予想されます。</p>
          <p class="caption">※IP67の防水機能は水深1mの水中に30分間浸漬しても内部に浸水しませんが、水濡れによる損傷は保証されません。</p>

          <div class="pa-7">
            <p class="text-h6">【カメラ性能 スペック表】</p>
            <table class="text-center spec">
              <tr>
                <th>シリーズ</th>
                <td>
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-7-camera.jpg" alt="iPhone7" max-width="200" max-height="120" /><br /><span
                    class="label-gray block"
                    >iPhone7</span
                  >
                </td>
                <td>
                  <v-img src="	https://shop.kitamura.jp/ts_rsc/792/images/icon-7plus-camera.jpg" alt="iPhone7Plus" max-width="200" max-height="120" /><br /><span
                    class="label-gray block"
                    >iPhone7Plus</span
                  >
                </td>
                <td>
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-6s-camera.jpg" alt="iPhone6s" max-width="200" max-height="120" /><br /><span
                    class="label-gray block"
                    >iPhone6s</span
                  ><span class="label-gray block">iPhone6sPlus</span>
                </td>
              </tr>
              <tr>
                <th>メインカメラ<br />画素数</th>
                <td>1,200万画素</td>
                <td class="point">1,200万画素<br />デュアルカメラ</td>
                <td>1,200万画素</td>
              </tr>
              <tr>
                <th>メインカメラ<br />レンズ</th>
                <td class="point">6枚構成レンズ<br />f1.8</td>
                <td class="point">6枚構成レンズ<br />広角：f1.8<br />望遠：f2.8</td>
                <td>5枚構成レンズ<br />f2.2</td>
              </tr>
              <tr>
                <th>インカメラ</th>
                <td class="point">700万画素<span class="caption block">(1080p HDビデオ)</span></td>
                <td class="point">700万画素<span class="caption block">(1080p HDビデオ)</span></td>
                <td>500万画素<span class="caption block">(720p HDビデオ)</span></td>
              </tr>
              <tr>
                <th>手振れ補正</th>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○<span class="caption block mt5" style="color: #333; font-weight: normal">※手振れ補正は6sPlusのみ</span></td>
              </tr>
              <tr>
                <th>顔認識機能</th>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○</td>
              </tr>
              <tr>
                <th>パノラマ撮影</th>
                <td>最大63メガピクセル</td>
                <td>最大63メガピクセル</td>
                <td>最大63メガピクセル</td>
              </tr>
              <tr>
                <th>Live Photo</th>
                <td class="maru">○</td>
                <td class="maru">○</td>
                <td class="maru">○</td>
              </tr>
              <tr>
                <th>ビデオ撮影</th>
                <td>
                  4Kビデオ撮影<span class="caption block">(3,840×2,160 / 30fps)</span> HDビデオ撮影<span class="caption block">(1,080p / 30fps・60fps)</span>
                </td>
                <td>
                  4Kビデオ撮影<span class="caption block">(3,840×2,160 / 30fps)</span> HDビデオ撮影<span class="caption block">(1,080p / 30fps・60fps)</span>
                </td>
                <td>
                  4Kビデオ撮影<span class="caption block">(3,840×2,160 / 30fps)</span> HDビデオ撮影<span class="caption block">(1,080p / 30fps・60fps)</span>
                </td>
              </tr>
            </table>
          </div>

          <p>
            まずメインカメラのスペックを見てみましょう、画素数は1,200万画素と同じです。
            f値は2.2から1.8とカメラへ届く光が多くなった事で、暗所での撮影性能はアップしています。
          </p>
          <p>
            今回大きな目玉であるiPhone7Plusの｢デュアルカメラ｣では、iPhone7と同じ1,200万画素の広角レンズに加え、同じ1,200万画素の望遠レンズも備えており、この2つのレンズで撮影したデータを掛け合わせる事で、一眼カメラで撮影したような美しいボケのある写真を撮影する事ができます。
          </p>
          <p>インカメラは画素数が500万画素から700万画素にアップしており、セルフィー(自撮り)を多く撮影する人におすすめです。</p>
          <p class="mt-15">
            発売前の為、カタログスペック上の比較となりますが今回のレビューはいかがでしたでしょうか?<br />
            発売後にはiPhone7の実機を使って、さらにレビューを致しますので、ぜひご期待ください。
          </p>
          <div class="mt-7 pa-4">
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                :elevation="hover ? 12 : 6"
                height="88"
                class="mt-4 text-transform text-center text-subtitle-1"
                href="/ec/special/kaden/smart_phone/iphone7/iphone7-camera"
              >
                同じ対象物を撮影して<br />iPhone7とiPhone6sのカメラ性能を比較<v-icon right>fal fa-chevron-right</v-icon>
              </v-btn>
            </v-hover>
          </div>

          <v-container class="mt-15 mb-16">
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/iphone7.jpg" max-width="350" max-height="350" class="mx-auto"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    block
                    :elevation="hover ? 12 : 6"
                    height="80"
                    class="mt-4 text-transform"
                    @click="linkToOtherWindow('https://shop.kitamura.jp/special/kaden/sp-accessory')"
                  >
                    <v-img src="	https://shop.kitamura.jp/ts_rsc/792/images/icon-02.png" max-width="75" max-height="75"></v-img>
                    iPhone7 / iPhone7Plusの<br />アクセサリーはこちら
                  </v-btn>
                </v-hover>
                <v-hover v-slot="{ hover }">
                  <v-btn
                    block
                    :elevation="hover ? 12 : 6"
                    height="80"
                    class="mt-4 text-transform"
                    @click="linkToOtherWindow('https://www.kitamura.jp/service/ip/')"
                  >
                    iPhoneの<br />オンライン予約<v-icon right>fal fa-chevron-right</v-icon>
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/icon-03.jpg" max-width="100" max-height="100" class="mx-auto"></v-img>

          <div class="mt-16">
            <p class="text-center font-xxlarge">
              iPhoneで撮った写真をプリントすると、さらに印象的！<br />
              プレゼントにも最適なプリントサービス。
            </p>

            <v-row>
              <!-- ↓ シャッフルプリント -->
              <v-col cols="12" sm="6">
                <v-card class="pa-2" elevation="6">
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/imageing01.jpg" max-width="364" max-height="273" class="mx-auto my-2"></v-img>
                  <p class="text-center mb-2">
                    <a href="http://www.kitamura-print.com/shuffle_print/?_ga=2.209493650.1498124933.1633305189-279164427.1627285160" target="_brank">
                      シャッフルプリント
                    </a>
                  </p>
                  <v-divider></v-divider>
                  <p class="mb-0 mt-2">
                    たくさん撮影された写真を1枚のプリントにギュッ！<br />
                    思い出を一枚の写真にできるから旅行やお子さまの写真にピッタリ！
                  </p>
                  <v-btn
                    block
                    dark
                    height="40"
                    @click="linkToOtherWindow('http://www.kitamura-print.com/shuffle_print/?_ga=2.209493650.1498124933.1633305189-279164427.1627285160')"
                    class="mb-4"
                    >詳細・ご注文はこちら<v-icon right small>fal fa-chevron-right</v-icon></v-btn
                  >
                  <span class="text-body-2 mb-1">【アプリ注文対応】</span>
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <a href="https://itunes.apple.com/us/app/shaffurupurinto-kameranokitamura/id1009274709?l=ja&ls=1&mt=8" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_appstore.gif" max-width="168" max-height="57" class="hover"></v-img>
                        </a>
                        <span class="caption">iOS6.0以降対応</span>
                      </v-col>
                      <v-col cols="6">
                        <a href="https://market.android.com/details?id=jp.kitamura.shuffle" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_googleplay.gif" max-width="168" max-height="57" class="hover"></v-img>
                        </a>
                        <span class="caption">Android OS2.3/4.0対応</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>

              <!-- ↓ 高品質スマホプリント -->
              <v-col cols="12" sm="6">
                <v-card class="pa-2" elevation="6">
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/imageing02.jpg" max-width="364" max-height="273" class="mx-auto mt-2"></v-img>
                  <p class="text-center mt-1 mb-2">
                    <a href="http://www.kitamura-print.com/smartphone_print/" target="_brank"> 高品質スマホプリント </a>
                  </p>
                  <v-divider></v-divider>
                  <p class="mb-0 mt-2">
                    スマホで撮った写真を高品質プリント！<br />
                    豊富なプリントサイズをお選びいただけます。<br />
                    専用アプリなら注文がカンタン。<br />
                    最短10分のスピード仕上げ！ご注文時に「お店受取」を選ぶとご来店時にすぐお渡しできます。
                  </p>
                  <v-btn block dark height="40" @click="linkToOtherWindow('http://www.kitamura-print.com/smartphone_print/')" class="mb-4"
                    >詳細・ご注文はこちら<v-icon right small>fal fa-chevron-right</v-icon></v-btn
                  >
                  <span class="text-body-2 mb-1">【アプリ注文対応】</span>
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <a href="https://itunes.apple.com/jp/app/purinto-zhi-xing-bian-for/id451410131?mt=8" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_appstore.gif" max-width="168" max-height="57" class="hover"></v-img>
                        </a>
                        <span class="caption">iOS8.0以降対応</span>
                      </v-col>
                      <v-col cols="6">
                        <a href="https://market.android.com/details?id=com.photo" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_googleplay.gif" max-width="168" max-height="57" class="hover"></v-img>
                        </a>
                        <span class="caption">Android OS2.3/4.0対応</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <!-- ↓ イヤーアルバム -->
              <v-col cols="12" sm="6">
                <v-card class="pa-2" elevation="6">
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/imageing03.jpg" max-width="364" max-height="273" class="mx-auto my-2"></v-img>
                  <p class="text-center mb-2">
                    <a href="http://photobook.kitamura.jp/yearalbum/apri.html" target="_brank"> イヤーアルバム </a>
                  </p>
                  <v-divider></v-divider>
                  <p class="mb-0 mt-2">
                    期間を指定するだけで、写真の中から写りの良いものを選択・レイアウトまでソフトが自動で行います！<br />
                    イメージ作成までは料金がかかりませんので、ぜひ一度このお手軽さを体験してみてください。
                  </p>
                  <v-btn block dark height="40" @click="linkToOtherWindow('http://photobook.kitamura.jp/yearalbum/apri.html')" class="mb-4"
                    >詳細・ご注文はこちら<v-icon right small>fal fa-chevron-right</v-icon></v-btn
                  >
                  <span class="text-body-2 mb-1">【アプリ注文対応】</span>
                  <v-container>
                    <v-row>
                      <v-col cols="4">
                        <a href="https://itunes.apple.com/us/app/iyaarubamu/id934282943?l=ja&ls=1&mt=8" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_appstore.gif" max-width="107" max-height="36" class="hover"></v-img>
                        </a>
                        <span class="caption">iPhone</span>
                      </v-col>
                      <v-col cols="4">
                        <a href="https://itunes.apple.com/us/app/iyaarubamu-for-ipad/id934282948?l=ja&ls=1&mt=8" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_appstore.gif" max-width="107" max-height="36" class="hover"></v-img>
                        </a>
                        <span class="caption">iPad</span>
                      </v-col>
                      <v-col cols="4">
                        <a href="https://market.android.com/details?id=jp.co.fujifilm.yearalbum_android.kitamura" target="_brank">
                          <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/btn_googleplay.gif" max-width="107" max-height="36" class="hover"></v-img>
                        </a>
                        <span class="caption">Android</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>

              <!-- ↓ フォト本 -->
              <v-col cols="12" sm="6">
                <v-card class="pa-2" elevation="6">
                  <watchInVideo :src="'https://www.youtube.com/embed/rfB7LfzF9z4'" :height="205" :sm="12" />
                  <p class="text-center mt-1 mb-2">
                    <a href="http://photobook.jp/photobon/top/" target="_brank"> フォト本 </a>
                  </p>
                  <v-divider></v-divider>
                  <p class="mb-0 mt-2">
                    本のような仕上がりのフォトブックです。<br />
                    web上でかんたんに、あなただけのオリジナルフォトアルバムや写真集が作成できます。<br />
                    メールで友達へ写真のリクエストができるので、一緒に思い出のアルバム作りを楽しめます！
                  </p>
                  <v-btn block dark height="40" @click="linkToOtherWindow('http://photobook.jp/photobon/top/')" class="mb-4"
                    >詳細・ご注文はこちら<v-icon right small>fal fa-chevron-right</v-icon></v-btn
                  >
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="mt-4 pa-4">
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                :elevation="hover ? 12 : 6"
                height="56"
                class="text-transform text-center text-subtitle-1"
                @click="linkToOtherWindow('https://www.kitamura-print.com/?_ga=2.251108870.1498124933.1633305189-279164427.1627285160')"
              >
                全てのプリントサービスを見る<v-icon right>fal fa-chevron-right</v-icon>
              </v-btn>
            </v-hover>
          </div>

          <v-container class="mt-16 mb-4">
            <p class="text-h6 text-center mb-6">関連特集・サイトをご紹介</p>
            <v-row justify="start" class="text-center">
              <v-col cols="12" sm="4">
                <a href="/ec/special/kaden/smart_phone/sim_free" target="_brank">
                  <v-img src="https://shop.kitamura.jp/images/banner/3108.gif" max-width="246px" height="auto" class="mx-auto"></v-img>
                  おすすめSIMフリースマホ特集
                </a>
              </v-col>
              <v-col cols="12" sm="4">
                <a href="https://shop.kitamura.jp/special/kaden/sp-accessory" target="_brank">
                  <v-img src="https://shop.kitamura.jp/images/banner/2314.png" max-width="246px" height="auto" class="mx-auto"></v-img>
                  iPhoneアクセサリー・ケース
                </a>
              </v-col>
              <v-col cols="12" sm="4">
                <a href="https://www.instagram.com/camera_kitamura/" target="_brank">
                  <v-img src="https://shop.kitamura.jp/ts_rsc/792/images/bn-instagram_350x130.gif" max-width="246px" height="auto" class="mx-auto"></v-img>
                  カメラのキタムラ公式instagram
                </a>
              </v-col>
            </v-row>
          </v-container>

          <facebookAndTwitter />
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';

export default Vue.extend({
  name: 'iphone7',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
    facebookAndTwitter: FacebookAndTwitter
  },
  setup: () => {
    document.title = 'iPhone7のカメラ性能を徹底レビュー | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'iPhone7になってカメラ性能はどう進化したのか? まずはカタログスペックから比較してみました！')

    const state = reactive({
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
          path: 'iPhone7のカメラ性能を徹底レビュー',
          disabled: true
        }
      ],
    });

    const linkToOtherWindow = (url: string | undefined) => {
      window.open(url, '_blank');
    };
    return {
      ...toRefs(state),
      noimage,
      formatPrice,
      linkToOtherWindow
    };
  }
});
</script>

<style lang="scss" scoped>
.iphone7 {
  .inr {
    padding: 30px 0px;
    margin: 0 auto;
    max-width: 840px;
    background: #fff;
  }
  p {
    line-height: 1.4em;
    margin: 0 0 1.25em 0;
    padding: 0;
    text-align: left;
  }
  .lens li {
    margin-left: 4%;
    list-style-type: disc;
  }
  h2 {
    font-size: 180%;
    line-height: 1.7;
    text-align: center;
  }
  table th {
    width: 10em;
  }
  table.spec {
    width: 100%;
    border-collapse: collapse;
    font-size: 85%;
    margin-bottom: 1.25em;

    tr th,
    tr td {
      padding: 10px 6px;
      vertical-align: middle;
    }

    th {
      text-align: center;
      vertical-align: top;
      color: #333;
      background-color: #eee;
      border: 1px solid #b9b9b9;
    }
    td {
      width: 21%;
      border: 1px solid #b9b9b9;
    }
    .iphone7 img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      max-width: 100%;
    }
    .label-gray {
      display: block;
      padding: 5px 15px;
      background: #666;
      border-radius: 4px;
      color: #fff;
      margin-bottom: 12px;
    }
    td.point {
      background: #fbe6e9;
    }
    td.maru {
      font-weight: bold;
      color: #d80b24;
    }
    .block {
      display: block;
      margin-bottom: 12px;
    }
  }
  .font-xxlarge {
    font-size: 180%;
  }
}
</style>