<template>
  <v-app>
    <div class="highly-recommended-2015-0605">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <a href="/special/general/highly_recommended">
          <v-hover v-slot="{ hover }">
            <v-img
              :src="`/ec/images2/special/general/highly_recommended/2015/1120/pc/rec_gotop_${hover ? 'on' : 'off'}.gif`"
              max-width="100%"
              height="auto"
              class="hover"
            ></v-img>
          </v-hover>
        </a>

        <div class="my-4 pa-6 line-g"></div>

        <!--↓①-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>写真や動画をサッと保存ができます！キヤノン Connect Station CS100
          </h2>
          <p class="text-body-2 text-center">▼撮影してから画像の取り込みまでとってもカンタン。とっても便利なCS100の機能を動画でチェック！</p>
          <watchInVideo :src="'https://www.youtube.com/embed/wBv53RBh258'" :height="$vuetify.breakpoint.mdAndUp ? 473 : 224" :sm="12" />
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <!--↓②-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>NFC対応のカメラ・ビデオならCS100にかざすだけで保存が可能
          </h2>
          <p>
            写真や動画を撮るたびにメモリーカードが増えたり。<br />
            いざ、撮影するときにメモリーカードの容量がいっぱい。でもバックアップ・保存をしたか分からない・・・・<br />ということはありませんか？
          </p>
          <p>
            NFC対応のカメラ・ビデオカメラをかざすことで、写真や動画を保存できる「サッと保存機能」を搭載。<br />
            スマホやPCからWi-Fiでアップロードすることができます。同じデーターを重複して保存しないように新しく撮った写真・動画だけが転送されるので効率よく保存できます
          </p>
          <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/main.jpg" alt="" max-width="840" max-height="473" class="mx-auto"></v-img>
          <p class="mt-5">保存した画像は「撮影年月日」「撮影カメラ別」に自動で整理してくれて、見たい思い出を簡単に見つけることも出来ます。</p>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/image1.jpg" max-width="440" max-height="247"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/image2.jpg" max-width="440" max-height="247"></v-img>
            </v-col>
          </v-row>
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <!--↓③-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>データが増えてきたら外付けハードディスクへバックアップ
          </h2>
          <p>
            市販の外付けハードディスクと接続して、CS100に保存した写真や動画をカンタンにバックアップできます。<br />
            SD/CFカードへのコピーにも対応しているので、お気に入りの写真を集めてフォトブックやプリントをするのも良いかもしれませんね。
          </p>
          <p>「画像を選択してコピー」「撮影年月日ごとにコピー」「アルバムをコピー」から選べます。</p>
          <p class="text-body-2">
            ※1TB以上のハードディスクを使用してください。ただし、1TBよりも大容量のハードディスクを使用しても、1TBの容量しか使用しません。<br />
            ※専用電源を備えた外付けハードディスクに対応しています。USBバスパワーでは駆動できません。
          </p>
          <p class="mt-5">保存した画像は「撮影年月日」「撮影カメラ別」に自動で整理してくれて、見たい思い出を簡単に見つけることも出来ます。</p>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/image3.jpg" max-width="440" max-height="247"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/image4.jpg" max-width="440" max-height="247"></v-img>
            </v-col>
          </v-row>
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <!--↓④-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">
            <v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>CS100で保存した写真や動画をTVの大画面で観る事ができます
          </h2>
          <p>
            TVとCS100をケーブルで接続するだけで、CS100に取り込んだ写真や動画をTVの大画面で観ることができます。写真と動画を同時に、BGM付きのスライドショーとして楽しむこともできます。MP4やMOV、AVCHD形式のフルHD動画やHD動画、SD動画にも対応しているから、サイズの大きな動画もスムーズに再生。
          </p>
          <p>CS100に保存してあるアルバムをスマートフォンやタブレット、PCなどでも観賞可能。ウェブブラウズ機能を備えた端末であれば、いつでも楽しめます。</p>
          <p>また、アルバムのタイトルやコメント編集や選んだアルバムをTVでスライドショー再生することもできます。</p>
          <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/img01.jpg" max-width="840" max-height="238" class="mx-auto"></v-img>
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <!--↓⑤-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5"><v-icon color="red" class="mr-2">far fa-thumbs-up</v-icon>CS100同士で写真や動画を共有できます</h2>
          <p>
            離れたおうちにもう一台CS100を設置しておけば、CANON iMAGE
            GATEWAYを経由して、アルバムを共有※することができます。一度に、複数の相手を送受信することも可能。受信側のCS100が電源オンまたは待機状態のときは、定期的に自動で受信します。
          </p>
          <v-img src="/ec/images2/special/general/highly_recommended/2015/0605/send.jpg" max-width="840" max-height="201" class="mx-auto"></v-img>
          <p class="text-body-2">
            ※画像の送受信や共有を行うためには、インターネットに接続できる環境が必要です。 また、事前にCANON iMAGE
            GATEWAYでの会員登録（無料）や送信先の設定などが必要です。
          </p>
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <!--↓担当者のイチオシインプレッション-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">大量の写真データーもキヤノン Connect Station CS100 を使ってすっきり整理</h2>
          <p>
            パソコンを立ち上げなければ難しかった、画像・動画の整理もこの１台があればすっきりまとまって便利。孫の写真や動画を離れて暮らす祖父母に見せてあげることも出来ます。そして旅行ではスマホ・カメラ・ビデオそれぞれで撮影することも多いはず。そんな写真や動画も一つにまとめられて便利
          </p>
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <!--↓レビュー-->
        <div class="mt-8 pa-4 line-g">
          <h2 class="text-h6 font-weight-bold mb-5">キヤノン Connect Station CS100基本仕様</h2>
          <p>
            【内蔵ハードディスク】<br />
            ● 容量:1TB（静止画の場合：約15万枚、動画の場合：約70時間）
          </p>
          <p class="text-body-2">
            ※ 静止画はJPEG（約6.6MB／枚）で計算、 動画はフルHD動画（平均ビットレート32Mbps）で計算しています。<br />
            ※ 容量の一部をシステムで使用するため、表示される容量は1TBよりも少なくなります。
          </p>
          <p>
            【Wi-Fi（無線LAN）】<br />
            ● 準拠規格：IEEE802.11b／g ／n<br />
            ● 伝送方式:DS-SS変調方式（IEEE 802.11b）OFDM変調方式（IEEE 802.11g／n）<br />
            ● 通信距離:約15m ※送受信アンテナ間に障害物、遮蔽物がなく、他の機器との電波干渉がない場合<br />
            ● 送信周波数（中心周波数）:周波数：2412～2462MHz、チャンネル：1～11ch<br />
            ● セキュリティー:WEP、WPA-PSK（TKIP）、WPA-PSK（AES）、WPA2-PSK（TKIP）、WPA2-PSK（AES）<br />
          </p>
          <p>
            【有線LAN】<br />
            ● Ethernet:10BASE-T、100BASE-TX、1000BASE-T
          </p>
          <p>
            【インターフェース】<br />
            ● USB：Hi-Speed USB(USB2.0) カメラとの接続用 専用電源を備えた外付けハードディスクとの接続用※ USBバスパワー非対応<br />
            ● HDMI出力:タイプA、CEC対応 テレビとの接続用<br />
            ● カードスロット：CFカードスロット、SDメモリーカードスロット
          </p>
          <p>
            【カード】<br />
            ● CFカード:タイプⅠ、Ⅱ準拠※ CFastカードには非対応<br />
            ● SDメモリーカード:SDメモリーカード、SDHCメモリーカード、SDXCメモリーカード
          </p>
          <p>
            【再生可能フォーマット】<br />
            ● 静止画:JPEG、RAW（CR2形式のみ）※ RAWは表示用JPEGを表示<br />
            ● 動画:MP4、MOV、AVCHD（SD、HD、フルHD画質）
          </p>
        </div>

        <!--線-->
        <v-divider class="mt-7 mb-5"></v-divider>

        <h2 class="text-h6 white--text font-weight-bold pa-2 red darken-2">カメラ用品バックナンバー</h2>
        <v-container class="pa-0 mt-4">
          <v-row class="pa-2">
            <v-col cols="12" sm="6">
              <v-row class="line-g">
                <v-col cols="4">
                  <a href="/ec/special/general/highly_recommended/2015/0529">
                    <v-img
                      src="https://shop.kitamura.jp/ts_rsc/585/images/ld-120_350px.jpg.jpg"
                      alt="LEDライト搭載 みせる防湿庫 東洋リビングLD-120"
                      max-width="150"
                      max-height="150"
                      class="hover"
                    ></v-img>
                  </a>
                </v-col>
                <v-col cols="8">
                  <h3 class="text-subtitle-1 font-weight-bold">
                    <a href="/ec/special/general/highly_recommended/2015/0529"> LEDライト搭載 みせる防湿庫 東洋リビングLD-120 </a>
                  </h3>
                  <p class="text-body-2">
                    ドア連動型の18連LEDライトを搭載。<br />
                    カメラを守るだけでなく、<br />
                    みせる防湿庫が登場。眺めて楽しく、<br />
                    出し入れしやすいプレミアムモデル。
                  </p>
                  <p class="text-right">
                    <v-btn text href="/ec/special/general/highly_recommended/2015/0529"> 商品を詳しく見る </v-btn>
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6">
              <v-row class="line-g">
                <v-col cols="4">
                  <a href="/ec/special/general/highly_recommended/2015/0501">
                    <v-img
                      src="	https://shop.kitamura.jp/ts_rsc/585/images/i-item-blackrapid-joby_350px.jpg"
                      alt="ブラックラピッド クロスショット RS16SC10-BL・JOBY ウルトラフィットハンドストラップ&ウルトラプレｰト 012779 セット"
                      max-width="150"
                      max-height="150"
                      class="hover"
                    ></v-img>
                  </a>
                </v-col>
                <v-col cols="8">
                  <h3 class="text-subtitle-1 font-weight-bold">
                    <a href="/ec/special/general/highly_recommended/2015/0501"> ブラックラピッド クロスショット × JOBY ウルトラハ … </a>
                  </h3>
                  <p class="text-body-2">
                    速写ストラップをつけたまま、三脚を使う裏技！JOBYウルトラプレートを使えば、速写ストラップをつけたまま、三脚が使える。一眼ユーザーの要望
                    …【続き】
                  </p>
                  <p class="text-right">
                    <v-btn text href="/ec/special/general/highly_recommended/2015/0501"> 商品を詳しく見る </v-btn>
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-btn text href="/ec/special/general/highly_recommended" class="mt-4">
          <v-icon left small color="red">fal fa-long-arrow-right</v-icon>その他バックナンバーを見る
        </v-btn>
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
export default Vue.extend({
  name: 'highly-recommended-2015-0605',
  components: {
    breadcrumbs: Breadcrumbs,
    watchInVideo: WatchInVideo,
  },
  setup: () => {
    document.title = '写真のバックアップに最適！キヤノンConnect Station CS100 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'スマホ・デジカメ・ビデオで撮った思い出の写真や動画をカンタンに整理することができるキヤノンCS100')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '写真のバックアップに最適！キヤノンConnect Station CS100 | 今週のイチオシ',
          disabled: true
        }
      ],
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
.highly-recommended-2015-0605 {
  p {
    line-height: 1.5em;
    font-size: 18px;
    color: #1a0708;
  }
  .line-g {
    background: url(/ec/images2/special/general/highly_recommended/2015/0605/bk_line.gif);
  }
}
</style>