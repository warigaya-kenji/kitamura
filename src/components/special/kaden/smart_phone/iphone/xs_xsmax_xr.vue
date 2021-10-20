<template>
  <v-app>
    <div class="iphone wContent">
      <div class="main-contents-wrap bs3 iphonexs">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <h1 class="text-center text-sm-h4 text-h6 mb-12">iPhone Xs , iPhone Xs Max , iPhone XR<br />スペック比較レビュー</h1>
        <p class="mb-16">
          AppleはiOS搭載スマートフォンの新モデルとして、5.8型ディスプレイ搭載の「iPhone Xs」と、6.5型ディスプレイ搭載の「iPhone Xs Max」、6.1型モデルの「iPhone
          XR」を発表しました。<br />
          今回はiPhone Xs、iPhone Xs Max、iPhone XRの性能や新機能を、iPhone Xと比較してみました。
        </p>

        <v-container class="pt-10 mb-16">
          <v-row class="mb-16">
            <v-col cols="12" sm="6">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs.jpg" max-width="90%" height="auto"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6" class="pt-4">
              <div class="d-flex flex-column justify-space-between align-center">
                <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs_logo.gif" max-width="60%" height="auto"></v-img>
              </div>
              <div class="text-center list-links mt-4">
                <a href="https://www.kitamura.jp/service/ip/">iPhoneXs / iPhoneXs Maxの<br />SoftBank オンライン予約</a>
              </div>
              <div class="text-center list-links mt-6">
                <a href="/ec/ct/E013/041/?r=">iPhoneXs / iPhoneXs Maxの<br />アクセサリーはこちら</a>
              </div>
            </v-col>
          </v-row>
          <div style="clear: both"></div>
        </v-container>

        <div class="text-center pt-16">
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexr_logo.gif" max-width="60%" height="auto"></v-img>
            <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexr.jpg" max-width="100%" height="auto"></v-img>
            <p class="text-h4 my-4">触れるたびに鮮やか。</p>
            <p class="text-h5">iPhone XRのご予約受付中</p>
          </div>
        </div>

        <!--=========== スペック ===========-->
        <div class="panel panel-default mt60 col-xs-12 mb-16">
          <div class="panel-heading">【基本スペック表】</div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-bordered text-center font-xsmall">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center" colspan="2">
                      <img
                        src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs_700.jpg"
                        alt=""
                        class="img-responsive center-block lazyload"
                      />
                    </th>
                    <th class="text-center">
                      <img
                        src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexr_350.jpg"
                        alt=""
                        class="img-responsive center-block lazyload"
                      />
                    </th>
                    <th class="text-center">
                      <img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonex_350.jpg" alt="" class="img-responsive center-block lazyload" />
                    </th>
                  </tr>
                  <tr class="active">
                    <th class="text-center w100"></th>
                    <th class="text-center w160">iPhone Xs</th>
                    <th class="text-center w160">iPhone Xs Max</th>
                    <th class="text-center w160">iPhone XR</th>
                    <th class="text-center w160">iPhone X</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-center" rowspan="3">容量</th>
                    <td colspan="2">64GB</td>
                    <td>64GB</td>
                    <td>64GB</td>
                  </tr>
                  <tr>
                    <td colspan="2">256GB</td>
                    <td class="danger">128GB</td>
                    <td>256GB</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">512GB</td>
                    <td>256GB</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="active">
                    <th class="text-center" rowspan="9">ディスプレイ</th>
                    <td colspan="2" class="danger">Super Retina HD<br class="visible-xs-block" />ディスプレイ</td>
                    <td>Liquid Retina HD<br class="visible-xs-block" />ディスプレイ</td>
                    <td class="danger">Super Retina HD<br class="visible-xs-block" />ディスプレイ</td>
                  </tr>
                  <tr class="active">
                    <td class="danger">
                      5.8インチ（対角）<br class="visible-xs-block" />オールスクリーンOLED <br class="visible-xs-block" />Multi&#8209;Touchディスプレイ
                    </td>
                    <td class="danger">
                      6.5インチ（対角）<br class="visible-xs-block" />オールスクリーンOLED <br class="visible-xs-block" />Multi&#8209;Touchディスプレイ
                    </td>
                    <td>
                      IPSテクノロジー搭載<br class="visible-xs-block" />6.1インチ（対角）<br class="visible-xs-block" />オールスクリーンLCD
                      <br class="visible-xs-block" />Multi&#8209;Touchディスプレイ
                    </td>
                    <td class="danger">
                      5.8インチ（対角）<br class="visible-xs-block" />オールスクリーンOLED <br class="visible-xs-block" />Multi&#8209;Touchディスプレイ
                    </td>
                  </tr>
                  <tr class="active">
                    <td colspan="2" class="danger">HDR<br class="visible-xs-block" />ディスプレイ</td>
                    <td>&#8212;</td>
                    <td class="danger">HDR<br class="visible-xs-block" />ディスプレイ</td>
                  </tr>
                  <tr class="active">
                    <td>2,436 x 1,125ピクセル<br class="visible-xs-block" />解像度、458ppi</td>
                    <td class="danger">2,688 x 1,242ピクセル<br class="visible-xs-block" />解像度、458ppi</td>
                    <td>1,792 x 828ピクセル<br class="visible-xs-block" />解像度、326ppi</td>
                    <td>2,436 x 1,125ピクセル<br class="visible-xs-block" />解像度、458ppi</td>
                  </tr>
                  <tr class="active">
                    <td class="danger" colspan="2">1,000,000:1<br class="visible-xs-block" />コントラスト比（標準）</td>
                    <td>1,400:1<br class="visible-xs-block" />コントラスト比（標準）</td>
                    <td class="danger">1,000,000:1<br class="visible-xs-block" />コントラスト比（標準）</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">True Tone<br class="visible-xs-block" />ディスプレイ</td>
                    <td>True Tone<br class="visible-xs-block" />ディスプレイ</td>
                    <td>True Tone<br class="visible-xs-block" />ディスプレイ</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">広色域<br class="visible-xs-block" />ディスプレイ（P3）</td>
                    <td>広色域<br class="visible-xs-block" />ディスプレイ（P3）</td>
                    <td>広色域<br class="visible-xs-block" />ディスプレイ（P3）</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2" class="danger">3D Touch</td>
                    <td>&#8212;</td>
                    <td class="danger">3D Touch</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">最大輝度625cd/m2<br class="visible-xs-block" />（標準）</td>
                    <td>最大輝度625cd/m2<br class="visible-xs-block" />（標準）</td>
                    <td>最大輝度625cd/m2<br class="visible-xs-block" />（標準）</td>
                  </tr>
                  <tr>
                    <th class="text-center" rowspan="4">サイズと重量</th>
                    <td>高さ143.6 mm</td>
                    <td>高さ157.5 mm</td>
                    <td>高さ150.9 mm</td>
                    <td>高さ143.6 mm</td>
                  </tr>
                  <tr>
                    <td style="">幅70.9 mm</td>
                    <td>幅77.4 mm</td>
                    <td>幅75.7 mm</td>
                    <td>幅70.9 mm</td>
                  </tr>
                  <tr>
                    <td>厚さ7.7 mm</td>
                    <td>厚さ7.7 mm</td>
                    <td>厚さ8.3 mm</td>
                    <td>厚さ7.7 mm</td>
                  </tr>
                  <tr>
                    <td>重量177 g</td>
                    <td>重量208 g</td>
                    <td>重量194 g</td>
                    <td>重量174 g</td>
                  </tr>
                  <tr class="active">
                    <th class="text-center">防沫性能<br />耐水性能<br />防塵性能</th>
                    <td colspan="2" class="danger">
                      EC規格60529に<br class="visible-xs-block" />もとづくIP68等級<br class="visible-xs-block" />（最大水深2メートルで最大30分間）
                    </td>
                    <td>IEC規格60529に<br class="visible-xs-block" />もとづくIP67等級<br class="visible-xs-block" />（最大水深1メートルで最大30分間）</td>
                    <td>IEC規格60529に<br class="visible-xs-block" />もとづくIP67等級<br class="visible-xs-block" />（最大水深1メートルで最大30分間）</td>
                  </tr>
                  <tr>
                    <th class="text-center" rowspan="2">チップ</th>
                    <td colspan="2">A12 Bionicチップ</td>
                    <td>A12 Bionicチップ</td>
                    <td>A11 Bionicチップ</td>
                  </tr>
                  <tr>
                    <td colspan="2">次世代の<br class="visible-xs-block" />Neural Engine</td>
                    <td>次世代の<br class="visible-xs-block" />Neura Engine</td>
                    <td>Neural Engine</td>
                  </tr>
                  <tr class="active">
                    <th class="text-center" rowspan="2">セキュア認証</th>
                    <td colspan="2">Face ID</td>
                    <td>Face ID</td>
                    <td>Face ID</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">TrueDepthカメラによ<br class="visible-xs-block" />顔認識の有効化</td>
                    <td>TrueDepthカメラによる<br class="visible-xs-block" />顔認識の有効化</td>
                    <td>TrueDepthカメラによる<br class="visible-xs-block" />顔認識の有効化</td>
                  </tr>
                  <tr>
                    <th class="text-center" rowspan="4">バッテリー</th>
                    <td>iPhoneXより<br class="visible-xs-block" />最大30分長いバッテリー<br class="visible-xs-block" />駆動時間</td>
                    <td>iPhoneXより<br class="visible-xs-block" />最大1.5時間長いバッテリー<br class="visible-xs-block" />駆動時間</td>
                    <td>iphonePlusより<br class="visible-xs-block" />最大1.5時間長いバッテリー<br class="visible-xs-block" />駆動時間</td>
                    <td>iPhone7より<br class="visible-xs-block" />最大2時間長いバッテリー<br class="visible-xs-block" />駆動時間</td>
                  </tr>
                  <tr>
                    <td>連続通話時間（ワイヤレス）<br class="visible-xs-block" />：最大20時間</td>
                    <td class="danger">連続通話時間（ワイヤレス）<br class="visible-xs-block" />：最大25時間</td>
                    <td class="danger">連続通話時間（ワイヤレス）<br class="visible-xs-block" />：最大25時間</td>
                    <td>連続通話時間（ワイヤレス）<br class="visible-xs-block" />：最大21時間</td>
                  </tr>
                  <tr>
                    <td>ビデオ再生（ワイヤレス）<br class="visible-xs-block" />：最大14時間</td>
                    <td>ビデオ再生（ワイヤレス）<br class="visible-xs-block" />：最大15時間</td>
                    <td class="danger">ビデオ再生（ワイヤレス）<br class="visible-xs-block" />：最大16時間</td>
                    <td>ビデオ再生（ワイヤレス）<br class="visible-xs-block" />：最大13時間</td>
                  </tr>
                  <tr>
                    <td>オーディオ再生（ワイヤレス）<br class="visible-xs-block" />：最大60時間</td>
                    <td class="danger">オーディオ再生（ワイヤレス）<br class="visible-xs-block" />：最大65時間</td>
                    <td class="danger">オーディオ再生（ワイヤレス）<br class="visible-xs-block" />：最大65時間</td>
                    <td>オーディオ再生（ワイヤレス）<br class="visible-xs-block" />：最大60時間</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style="clear: both"></div>
        <!--=========== /スペック ===========-->

        <div class="d-flex flex-column justify-space-between align-center">
          <p class="text-h4 my-4">ようこそビッグスクリーンの世界へ。</p>
          <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs_color.jpg" max-width="30%" height="auto"></v-img>
        </div>
        <p>
          5.8インチと6.8インチのサイズから選べるSuoer Retinaディスプレイ。進化したFace
          ID。スマートフォンの中で最も賢く、最もパワフルなチップ。画期的なデュアルカメラシステム。<br />
          iPhone XsとiPhone Xs Maxなら、あなたが何をする時でも一段と夢中になれます。
        </p>

        <h3 class="text-h5 mt-16 mb-4">スムーズな操作性</h3>
        <p>
          ホームボタンを取り外したことにより、使い勝手を懸念されているかもしれませんが、実際に操作してみると、画面を下から上へスワイプする簡単な操作で、ホーム画面に戻れました。<br />
          今まで慣れ親しんだホームボタンですが、ホームボタンをなくすことでより大画面になり、スムーズに操作ができます。
        </p>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/home_btn.jpg" max-width="100%" height="auto"></v-img>
        </div>

        <h3 class="text-h5 mt-16 mb-4">ビッグスクリーン</h3>
        <p>
          iPhone Xs Maxとiphone Plusと同じぐらいのサイズですが、iPhone Xs Maxはフルスクリーンの分、6.5インチの迫力ある大画面になっています。<br />
          また、iPhone Xsの画面サイズは5.8インチで、iphone Plusの5.5インチより大きいにも関わらず、ひと回り小さいサイズです。
        </p>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphone_size.jpg" max-width="100%" height="auto"></v-img>
        </div>
        <p class="my-14">
          実際に男性スタッフが手に持ってみると、iPhone Xsは片手で操作できましたが、iPhone Xs Maxを片手で操作するのは難しかったです。<br />
          片手で操作できることが必須条件の方はiPhone Xs、アプリやARなどを大画面で使用したい方は、iPhone Xs Maxがおすすめです。
        </p>

        <v-row class="mb-10">
          <v-col cols="12" sm="4" v-for="(iphoneImage, index) in iphoneImages" :key="index" class="px-12">
            <v-img :src="iphoneImage" max-width="100%" height="auto"></v-img>
          </v-col>
        </v-row>

        <v-container class="mb-4">
          <h2 class="text-h4 mt-16">画期的なデュアルカメラシステム</h2>
          <p class="my-2">iPhone Xsでは革新的なセンサーがISPとNeural Engineの両方と連係で、これまでにない方法で美しい瞬間をとらえられるようになります。</p>
          <v-row justify="center">
            <v-col cols="10" sm="4">
              <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs_photo.jpg" max-width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="px-6">
              <div class="mt-8" v-for="(dualCameraSystem, index) in dualCameraSystemList" :key="`dualCameraSystem-${index}`">
                <p class="mb-0 text-h5 font-weight-bold">{{ dualCameraSystem.subtitle }}</p>
                <p>{{ dualCameraSystem.txt }}</p>
              </div>
            </v-col>
          </v-row>

          <h3 class="text-h5 mt-16">キタムラスタッフが、実際に深度コントロールを試してみました</h3>
          <p class="mt-2 mb-8">
            iPhone Xでは、アプリが必要だった深度コントロールが、iPhone Xs・iPhoneXs MAXでは、標準機能として写真の深度をコントロールすることができます。<br />
            下の写真は実際に、スタッフが深度コントロールを行っている様子です。<br />
            左はf値を1.4、右はF値を16に変更しました。 2つを比べて見ると、背景のボケ具合が大きく変化します。
            深度コントロールでは、2つの写真を合成することでボケを表現していますが、とても自然なボケ具合は好感が持てました。
          </p>
          <v-row justify="center">
            <v-col cols="10" sm="5" class="mx-4">
              <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/f14.jpg" max-width="100%" height="auto"></v-img>
            </v-col>
            <v-col cols="10" sm="5" class="mx-4">
              <v-img src="	/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/f16.jpg" max-width="100%" height="auto"></v-img>
            </v-col>
          </v-row>
        </v-container>

        <!--=========== カメラスペック ===========-->
        <div class="panel panel-default left col-xs-12">
          <div class="panel-heading">【基本スペック表】</div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-bordered text-center font-xsmall">
                <thead>
                  <tr>
                    <th class=""></th>
                    <th class="text-center" colspan="2">
                      <div class="">
                        <img
                          src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs_700.jpg"
                          alt=""
                          class="img-responsive center-block lazyload"
                        />
                      </div>
                    </th>

                    <th class="text-center">
                      <img
                        src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexr_350.jpg"
                        alt=""
                        class="img-responsive center-block lazyload"
                      />
                    </th>
                    <th class="text-center">
                      <img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonex_350.jpg" alt="" class="img-responsive center-block lazyload" />
                    </th>
                  </tr>
                  <tr class="active">
                    <th class="text-center w100"></th>
                    <th class="text-center w160">iPhone Xs</th>
                    <th class="text-center w160">iPhone Xs Max</th>
                    <th class="text-center w160">iPhone XR</th>
                    <th class="text-center w160">iPhone X</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-center" rowspan="10">カメラ</th>
                    <td colspan="2">デュアル12MPカメラ<br class="visible-xs-block" />（広角と望遠）</td>
                    <td>12MPカメラ</td>
                    <td>デュアル12MPカメラ<br class="visible-xs-block" />（広角と望遠）</td>
                  </tr>
                  <tr>
                    <td colspan="2">広角：&#402;/1.8絞り値</td>
                    <td>&#402;/1.8絞り値</td>
                    <td>広角：&#402;/1.8絞り値</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">望遠：&#402;/2.4絞り値</td>
                    <td>&#8212;</td>
                    <td class="danger">望遠：&#402;/2.4絞り値</td>
                  </tr>
                  <tr>
                    <td colspan="2">デュアル光学式<br class="visible-xs-block" />手ブレ補正</td>
                    <td>光学式手ブレ補正</td>
                    <td>デュアル光学式<br class="visible-xs-block" />手ブレ補正</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">2倍の光学ズーム、<br class="visible-xs-block" />最大10倍のデジタルズーム</td>
                    <td>最大5倍のデジタルズーム</td>
                    <td class="danger">2倍の光学ズーム、<br class="visible-xs-block" />最大10倍のデジタルズーム</td>
                  </tr>
                  <tr>
                    <td colspan="2">写真とLive Photosの<br class="visible-xs-block" />広色域キャプチャ</td>
                    <td>写真とLive Photosの<br class="visible-xs-block" />広色域キャプチャ</td>
                    <td>写真とLive Photosの<br class="visible-xs-block" />広色域キャプチャ</td>
                  </tr>
                  <tr>
                    <td colspan="2">クアッドLED True Tone<br class="visible-xs-block" />フラッシュと<br class="visible-xs-block" />スローシンクロ</td>
                    <td>
                      クアッドLED<br class="visible-xs-block" />
                      True Toneフラッシュと<br class="visible-xs-block" />スローシンクロ
                    </td>
                    <td>
                      クアッドLED<br class="visible-xs-block" />
                      True Toneフラッシュと<br class="visible-xs-block" />スローシンクロ
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">
                      進化したボケ効果と<br class="visible-xs-block" />深度コントロールが使える<br class="visible-xs-block" />ポートレートモード
                    </td>
                    <td class="danger">
                      進化したボケ効果と<br class="visible-xs-block" />深度コントロールが使える<br class="visible-xs-block" />ポートレートモード
                    </td>
                    <td>ポートレートモード</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      5つのエフェクトを備えた<br class="visible-xs-block" />ポートレートライティング<br class="visible-xs-block" />（自然光、スタジオ照明、<br
                        class="visible-xs-block"
                      />輪郭強調照明、ステージ照明、<br class="visible-xs-block" />ステージ照明（モノ））
                    </td>
                    <td>
                      3つのエフェクトを備えた<br class="visible-xs-block" />ポートレートライティング<br class="visible-xs-block" />（自然光、スタジオ照明、<br
                        class="visible-xs-block"
                      />輪郭強調照明）
                    </td>
                    <td>
                      5つのエフェクトを備えた<br class="visible-xs-block" />ポートレートライティング<br class="visible-xs-block" />（自然光、スタジオ照明、<br
                        class="visible-xs-block"
                      />輪郭強調照明、ステージ照明、<br class="visible-xs-block" />ステージ照明（モノ））
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">写真のスマートHDR</td>
                    <td>写真のスマートHDR</td>
                    <td>写真の自動HDR</td>
                  </tr>
                  <tr class="active">
                    <th class="text-center" rowspan="8">ビデオ撮影</th>
                    <td colspan="2">4Kビデオ撮影<br class="visible-xs-block" />（24fps、30fpsまたは60fps）</td>
                    <td>4Kビデオ撮影<br class="visible-xs-block" />（24fps、30fpsまたは60fps）</td>
                    <td>4Kビデオ撮影<br class="visible-xs-block" />（24fps、30fpsまたは60fps）</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">1080p HDビデオ撮影<br class="visible-xs-block" />（30fpsまたは60fps）</td>
                    <td>1080p HDビデオ撮影<br class="visible-xs-block" />（30fpsまたは60fps）</td>
                    <td>1080p HDビデオ撮影<br class="visible-xs-block" />（30fpsまたは60fps）</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2" class="danger">
                      ビデオの拡張<br class="visible-xs-block" />ダイナミックレンジ<br class="visible-xs-block" />（最大30fps）
                    </td>
                    <td class="danger">ビデオの拡張<br class="visible-xs-block" />ダイナミックレンジ<br class="visible-xs-block" />（最大30fps）</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">ビデオの光学式手ブレ補正</td>
                    <td>ビデオの光学式手ブレ補正</td>
                    <td>ビデオの光学式手ブレ補正</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2" class="danger">2倍の光学ズーム、<br class="visible-xs-block" />最大6倍のデジタルズーム</td>
                    <td>最大3倍のデジタルズーム</td>
                    <td class="danger">2倍の光学ズーム、<br class="visible-xs-block" />最大6倍のデジタルズーム</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">1080p（120fpsまたは240fps）<br class="visible-xs-block" />スローモーションビデオに対応</td>
                    <td>1080p（120fpsまたは240fps）<br class="visible-xs-block" />スローモーションビデオに対応</td>
                    <td>1080p（120fpsまたは240fps）<br class="visible-xs-block" />スローモーションビデオに対応</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2">手ブレ補正機能を<br class="visible-xs-block" />使ったタイムラプスビデオ</td>
                    <td>手ブレ補正機能を<br class="visible-xs-block" />使ったタイムラプスビデオ</td>
                    <td>手ブレ補正機能を<br class="visible-xs-block" />使ったタイムラプスビデオ</td>
                  </tr>
                  <tr class="active">
                    <td colspan="2" class="danger">ステレオ録音</td>
                    <td class="danger">ステレオ録音</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr>
                    <th class="text-center" rowspan="12">フロントカメラ</th>
                    <td colspan="2">TrueDepthカメラ</td>
                    <td>TrueDepthカメラ</td>
                    <td>TrueDepthカメラ</td>
                  </tr>
                  <tr>
                    <td colspan="2">7MPの写真</td>
                    <td>7MPの写真</td>
                    <td>7MPの写真</td>
                  </tr>
                  <tr>
                    <td colspan="2">&#402;/2.2絞り値</td>
                    <td>&#402;/2.2絞り値</td>
                    <td>&#402;/2.2絞り値</td>
                  </tr>
                  <tr>
                    <td colspan="2">Retina Flash</td>
                    <td>Retina Flash</td>
                    <td>Retina Flash</td>
                  </tr>
                  <tr>
                    <td colspan="2">写真とLive Photosの<br class="visible-xs-block" />広色域キャプチャ</td>
                    <td>写真とLive Photosの<br class="visible-xs-block" />広色域キャプチャ</td>
                    <td>写真とLive Photosの<br class="visible-xs-block" />広色域キャプチャ</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">写真のスマートHDR</td>
                    <td class="danger">写真のスマートHDR</td>
                    <td>写真の自動HDR</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">
                      進化したボケ効果と<br class="visible-xs-block" />深度コントロールが<br class="visible-xs-block" />使えるポートレートモード
                    </td>
                    <td class="danger">
                      進化したボケ効果<br class="visible-xs-block" />と深度コントロールが使える<br class="visible-xs-block" />ポートレートモード
                    </td>
                    <td>ポートレートモード</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      5つのエフェクトを備えた<br class="visible-xs-block" />ポートレートライティング<br class="visible-xs-block" />（自然光、スタジオ照明、<br
                        class="visible-xs-block"
                      />輪郭強調照明、ステージ照明、<br class="visible-xs-block" />ステージ照明（モノ））
                    </td>
                    <td>
                      5つのエフェクトを備えた<br class="visible-xs-block" />ポートレートライティング<br class="visible-xs-block" />（自然光、スタジオ照明、<br
                        class="visible-xs-block"
                      />輪郭強調照明、ステージ照明、<br class="visible-xs-block" />ステージ照明（モノ））
                    </td>
                    <td>
                      5つのエフェクトを備えた<br class="visible-xs-block" />ポートレートライティング<br class="visible-xs-block" />（自然光、スタジオ照明、<br
                        class="visible-xs-block"
                      />輪郭強調照明、ステージ照明、<br class="visible-xs-block" />ステージ照明（モノ））
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">ビデオの拡張<br class="visible-xs-block" />ダイナミックレンジ（30fps）</td>
                    <td class="danger">ビデオの拡張<br class="visible-xs-block" />ダイナミックレンジ（30fps）</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="danger">映画レベルのビデオ<br class="visible-xs-block" />手ブレ補正（1080pと720p）</td>
                    <td class="danger">映画レベルのビデオ<br class="visible-xs-block" />手ブレ補正（1080pと720p）</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr>
                    <td colspan="2">1080p HDビデオ撮影（<br class="visible-xs-block" />30fpsまたは60fps）</td>
                    <td>1080p HDビデオ撮影<br class="visible-xs-block" />（30fpsまたは60fps）</td>
                    <td>1080p HDビデオ撮影</td>
                  </tr>
                  <tr>
                    <td colspan="2">アニ文字とミー文字</td>
                    <td>アニ文字とミー文字</td>
                    <td>アニ文字とミー文字</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style="clear: both"></div>
        <!--=========== /カメラスペック ===========-->

        <div class="d-flex flex-column justify-space-between align-center">
          <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/icon-03.jpg" max-width="100%" height="auto"></v-img>
        </div>

        <h3 class="text-center text-h5 mt-16">iPhoneで撮った写真をプリントすると、さらに印象的！<br />プレゼントにも最適なプリントサービス。</h3>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" v-for="(printService, index) in printServiceList" :key="index">
              <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 8 : 2" outlined class="text-center pa-4">
                  <v-img :src="printService.src" max-width="100%" height="auto"></v-img>
                  <a :href="printService.href" class="text-h5" target="_brank"> {{ printService.hreftxt }}</a>
                  <p class="text-h6 text-left including-line-breaks">
                    {{ printService.txt }}
                  </p>
                  <v-btn :elevation="hover ? 8 : 2" color="black" x-large @click="linkToOtherWindow(printService.btnLink)"
                    ><span class="white--text">詳細・ご注文はこちら</span></v-btn
                  >
                  <p class="text-subtitle-2 my-2">【アプリ注文対応】</p>
                  <v-row>
                    <v-col cols="6">
                      <a :href="printService.appStoreLink">
                        <div class="d-flex flex-column justify-space-between align-center">
                          <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/btn_appstore.gif" max-width="90%" height="auto"></v-img>
                        </div> </a
                      >iOS6.0以降対応
                    </v-col>
                    <v-col cols="6">
                      <a :href="printService.googlePlayLink">
                        <div class="d-flex flex-column justify-space-between align-center">
                          <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/btn_googleplay.gif" max-width="90%" height="auto"></v-img>
                        </div> </a
                      >iOS6.0以降対応
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" sm="6">
              <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 8 : 2" outlined class="text-center pa-4">
                  <watchInVideo :src="'https://www.youtube.com/embed/rfB7LfzF9z4'" :height="205" />

                  <a href="https://photobook.jp/photobon/top/" class="text-h5" target="_brank">フォト本</a>
                  <p class="text-h6 text-left">
                    本のような仕上がりのフォトブックです。 web上で簡単に、あなただけのオリジナルフォトアルバムや写真集が作成できます。<br />
                    メールで友達へ写真のリクエストができるので、一緒に思い出のアルバム作りを楽しめます！
                  </p>
                  <v-btn :elevation="hover ? 8 : 2" color="black" x-large @click="linkToOtherWindow('https://photobook.jp/photobon/top/')"
                    ><span class="white--text">詳細・ご注文はこちら</span></v-btn
                  >
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>

        <v-hover v-slot="{ hover }">
          <v-sheet :elevation="hover ? 2 : 10" :color="hover ? '#d4d4d4' : ''" outlined class="text-center pa-2 my-4">
            <a href="https://www.kitamura-print.com/?_ga=2.137853936.1712661879.1629071621-279164427.1627285160" target="_brank" class="text-h6"
              >全てのプリントサービスを見る</a
            >
          </v-sheet>
        </v-hover>

        <v-container class="mt-16 mb-4">
          <p class="text-h6">関連特集・サイトをご紹介</p>
          <v-row justify="start" class="text-center">
            <v-col cols="12" sm="4">
              <a href="/ec/special/kaden/smart_phone/sim_free" target="_brank">
                <v-img src="https://shop.kitamura.jp/images/banner/3108.gif" max-width="350px" height="auto"></v-img>
                おすすめSIMフリースマホ特集
              </a>
            </v-col>
            <v-col cols="12" sm="4">
              <a href="https://www.instagram.com/camera_kitamura/" target="_brank">
                <v-img src="/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/bn-instagram_350x130.gif" max-width="350px" height="auto"></v-img>
                カメラのキタムラ公式instagram
              </a>
            </v-col>
          </v-row>
        </v-container>

        <facebookAndTwitter />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import { noimage, formatPrice } from '@/logic/utils';
import FacebookAndTwitter from '@/components/common/special/facebook-twitter.vue';
import WatchInVideo from '@/components/common/special/watch-in-video.vue';

export default Vue.extend({
  name: 'xs_xsmax_xr',
  components: {
    breadcrumbs: Breadcrumbs,
    facebookAndTwitter: FacebookAndTwitter,
    watchInVideo: WatchInVideo,
  },
  setup: (props, context) => {
    document.title = 'iPhoneXs/iPhoneXs Max/iPhoneXRの性能を徹底レビュー | カメラのキタムラネットショップ';
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'iPhone Xs、iPhone Xs Max、iPhone XRの性能や新機能を、iPhone Xと比較してみました。')
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'iPhoneXs/iPhoneXs Max/iPhoneXRの性能を徹底レビュー',
          disabled: true
        }
      ],
      iphoneImages: [
        '/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphonexs_size.jpg', '/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphone_max_size.jpg', '/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/iphone8plus_size.jpg'
      ],
      dualCameraSystemList: [
        { subtitle: 'スマートHDR', txt: '新しいセカンダリーフレーム、より高速なセンサー、パワフルなA12 Bionicチップが、あなたの写真の明部と暗部により精細なディテールをもたらします。' },
        { subtitle: 'まったく新しい深度コントロール', txt: '撮影後でもポートレート写真の被写界深度を調整できるようになりました。' },
        { subtitle: '強化されたボケ効果', txt: '精巧な背景のぼかしによって、ポートレートモードで撮影した写真がプロフェッショナルな作品に一段と近づきます。' },
        { subtitle: 'より大きく、より深いピクセル', txt: '新しいセンサーにより、画像はより忠実に、色はより正確に再現され、十分な明るさがない場所でのノイズが軽減されます。' },
      ],
      printServiceList: [
        {
          src: '/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/imageing01.jpg',
          href: 'https://www.kitamura-print.com/print/wonder_shuffle/',
          hreftxt: 'シャッフルプリント',
          txt: 'たくさん撮影された写真を1枚のプリントにギュッ！\n思い出を一枚の写真にできるから旅行やお子さまの写真にピッタリ！',
          btnLink: 'https://www.kitamura-print.com/print/wonder_shuffle/?_ga=2.133011022.1712661879.1629071621-279164427.1627285160',
          appStoreLink: 'https://apps.apple.com/jp/app/%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88-%E3%82%AB%E3%83%A1%E3%83%A9%E3%81%AE%E3%82%AD%E3%82%BF%E3%83%A0%E3%83%A9/id1009274709',
          googlePlayLink: 'https://play.google.com/store/apps/details?id=jp.kitamura.shuffle'
        },
        {
          src: '/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/imageing02.jpg',
          href: 'https://www.kitamura-print.com/print/smartphone_print/?_ga=2.61717100.1712661879.1629071621-279164427.1627285160',
          hreftxt: '高品質スマホプリント',
          txt: 'スマホで撮った写真を高品質プリント！\n豊富なプリントサイズをお選びいただけます。\n専用アプリなら注文が簡単。\n最短10分のスピード仕上げ！ご注文時に「お店受取」を選ぶとご来店時にすぐお渡しできます。',
          btnLink: 'https://www.kitamura-print.com/print/smartphone_print/?_ga=2.98334175.1712661879.1629071621-279164427.1627285160',
          appStoreLink: 'https://apps.apple.com/jp/app/purinto-zhi-xing-bian-for/id451410131',
          googlePlayLink: 'https://play.google.com/store/apps/details?id=com.photo'
        },
        {
          src: '/ec/images2/special/kaden/smart_phone/iphone/xs_xsmax_xr/imageing03.jpg',
          href: 'https://photobook.kitamura.jp/yearalbum/apri.html',
          hreftxt: 'イヤーアルバム',
          txt: '期間を指定するだけで、写真の中から写りのいいものを選択・レイアウトまでソフトが自動でおこないます！\nイメージ作成までは料金がかかりませんので、ぜひ一度このお手軽さを体験してみてください。',
          btnLink: 'https://photobook.kitamura.jp/yearalbum/apri.html',
          appStoreLink: 'https://apps.apple.com/jp/app/%E3%83%95%E3%82%A9%E3%83%88%E3%83%96%E3%83%83%E3%82%AF%E4%BD%9C%E6%88%90%E3%82%A2%E3%83%97%E3%83%AA-%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0/id934282943',
          googlePlayLink: 'https://play.google.com/store/apps/details?id=jp.co.fujifilm.yearalbum_android.kitamura'
        },
      ]
    });

    function linkToOtherWindow(url: string | undefined) {
      window.open(url, '_blank');
    }
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
#wContent .iphonexs {
  font-size: 16px !important;
  text-align: left;
  width: 100% !important;
  float: left;
  line-height: 1.8em;
  letter-spacing: 0.05px;
  padding: 0;
}

.list-links {
  box-sizing: border-box;
  color: rgba(39, 48, 57, 0.8);
  display: block;
  float: right;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.166667px;
  line-height: 28.8px;
  padding-left: 0px;
  padding-right: 30px;
  position: relative;
  text-align: right;
  width: 100%;
  border: 1px solid #666;
}

.list-links::after {
  color: #000;
  content: '>';
  font-family: 'FontAwesome';
  font-size: 30px;
  top: 14px;
  left: 90%;
  position: absolute;
}

.bs3 a {
  color: #337ab7;
  text-decoration: none;
}

.bs3 .mt60 {
  margin-top: 60px;
}
.bs3 .panel-default {
  border-color: #ddd;
}

.bs3 .panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  border-color: #ddd;
}

.bs3 .panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}

.bs3 .panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.bs3 .panel-body {
  padding: 15px;
}

.bs3 .table-responsive {
  min-height: 0.01%;
  overflow-x: auto;
}

.bs3 .font-xsmall {
  font-size: 80%;
}
.bs3 .text-center {
  text-align: center;
}

.bs3 .table-bordered {
  border: 1px solid #ddd;
}
.bs3 .table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
tr,
table.data tr {
  border: none;
}

.bs3 .table > caption + thead > tr:first-child > th,
.bs3 .table > colgroup + thead > tr:first-child > th,
.bs3 .table > thead:first-child > tr:first-child > th,
.bs3 .table > caption + thead > tr:first-child > td,
.bs3 .table > colgroup + thead > tr:first-child > td,
.bs3 .table > thead:first-child > tr:first-child > td {
  border-top: 0;
}

.bs3 .table-bordered > thead > tr > th,
.bs3 .table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}

.bs3 .table-bordered > thead > tr > th,
.bs3 .table-bordered > tbody > tr > th,
.bs3 .table-bordered > tfoot > tr > th,
.bs3 .table-bordered > thead > tr > td,
.bs3 .table-bordered > tbody > tr > td,
.bs3 .table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}

.bs3 .table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}

.bs3 .table > thead > tr > th,
.bs3 .table > tbody > tr > th,
.bs3 .table > tfoot > tr > th,
.bs3 .table > thead > tr > td,
.bs3 .table > tbody > tr > td,
.bs3 .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

.bs3 .col-xs-1,
.bs3 .col-sm-1,
.bs3 .col-md-1,
.bs3 .col-lg-1,
.bs3 .col-xs-2,
.bs3 .col-sm-2,
.bs3 .col-md-2,
.bs3 .col-lg-2,
.bs3 .col-xs-3,
.bs3 .col-sm-3,
.bs3 .col-md-3,
.bs3 .col-lg-3,
.bs3 .col-xs-4,
.bs3 .col-sm-4,
.bs3 .col-md-4,
.bs3 .col-lg-4,
.bs3 .col-xs-5,
.bs3 .col-sm-5,
.bs3 .col-md-5,
.bs3 .col-lg-5,
.bs3 .col-xs-6,
.bs3 .col-sm-6,
.bs3 .col-md-6,
.bs3 .col-lg-6,
.bs3 .col-xs-7,
.bs3 .col-sm-7,
.bs3 .col-md-7,
.bs3 .col-lg-7,
.bs3 .col-xs-8,
.bs3 .col-sm-8,
.bs3 .col-md-8,
.bs3 .col-lg-8,
.bs3 .col-xs-9,
.bs3 .col-sm-9,
.bs3 .col-md-9,
.bs3 .col-lg-9,
.bs3 .col-xs-10,
.bs3 .col-sm-10,
.bs3 .col-md-10,
.bs3 .col-lg-10,
.bs3 .col-xs-11,
.bs3 .col-sm-11,
.bs3 .col-md-11,
.bs3 .col-lg-11,
.bs3 .col-xs-12,
.bs3 .col-sm-12,
.bs3 .col-md-12,
.bs3 .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media screen and (max-width: 767px) {
  .bs3 .table-responsive > .table > thead > tr > th,
  .bs3 .table-responsive > .table > tbody > tr > th,
  .bs3 .table-responsive > .table > tfoot > tr > th,
  .bs3 .table-responsive > .table > thead > tr > td,
  .bs3 .table-responsive > .table > tbody > tr > td,
  .bs3 .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }

  .iphonexs table .w160 {
    max-width: 100%;
    width: 160px;
  }
}

.iphonexs table {
  max-width: 800px;
}

.bs3 table {
  border-spacing: 0;
  border-collapse: collapse;
}
.bs3 table {
  background-color: transparent;
}

.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}

.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}

.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>