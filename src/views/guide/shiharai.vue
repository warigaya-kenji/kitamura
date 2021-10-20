<template>
  <v-app>
    <div class="shiharai">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <!-- ↑ パンくず -->

        <guideTitle :txt="'お支払い方法'" />

        <!-- ↓リサイクル回収 -->
        <div class="w760 text-subtitle-2">
          <div class="section mt-4">
            <p>カメラのキタムラでは以下のお支払い方法をご利用いただけます。</p>
            <ol class="pa-0">
              <li>
                <span class="font-weight-bold">店舗受け取り</span>
                <ul class="listInnerlink mb-2 pa-0">
                  <li><a v-scroll-to="{ el: '#shop' }">店舗支払い</a></li>
                </ul>
              </li>
              <li>
                <span class="font-weight-bold">宅配受け取り</span>
                <ul class="listInnerlink mb-2 pa-0">
                  <li v-for="(navi, index) in naviList" :key="index">
                    <a v-scroll-to="{ el: navi.href }">{{ navi.name }}</a>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <subTitle :txt="'店舗受け取りの場合'" :fontSize="'14px'" />
          <ul class="listNormal pl-4">
            <li>お近くのキタムラ店頭にて商品と引き換えにお支払いいただけます。 なお一部商品は、店舗支払いがお受けできませんのでご了承ください。</li>
            <li>
              割引クーポンなど、店舗の特典との併用はできません、あらかじめご了承下さい。
              <ul class="allow-icon">
                <li><a href="http://sss.kitamura.jp/" class="icoOpen" target="_blank">カメラのキタムラ店舗一覧</a></li>
              </ul>
            </li>
            <li>
              お支払いには、現金のほか、店頭取扱可能な各種クレジットカード、店頭取扱可能な商品券・株主優待券、店舗提携のショッピングクレジット(※)をご利用いただくことができます。
              <ul class="listAttention pl-4">
                <li>
                  ショッピングクレジットご利用の際は、身分証明書を店頭へご持参ください。後日、銀行名および口座番号の確認と、銀行の登録印鑑も必要となります。なお、9:00～20:30までに申込完了分は当日の審査となっております
                </li>
              </ul>
            </li>
          </ul>

          <!-- 店舗支払い -->
          <v-sheet id="shop" color="#e8e8e8" class="pa-2 font-weight-bold my-2">店舗支払い</v-sheet>
          <div class="section headingLv2">
            <p class="font-weight-bold mb-0">【お支払い手数料】</p>
            <p class="red--text font-weight-bold ml-2">無料</p>
            <p class="font-weight-bold mb-0">【ご利用可能店舗の一覧】</p>
            <p><a href="http://sss.kitamura.jp/" class="icoOpen" target="_blank">カメラのキタムラ店舗一覧</a></p>
            <p class="font-weight-bold mb-0">【お支払い方法】</p>
            <p class="ml-2">お近くのキタムラ（スタジオマリオ、アップルケアを除く）店頭にて商品と引き換えにお支払いいただけます</p>

            <ul class="listNormal">
              <li>・現金</li>
              <li>・店頭でのクレジットカード決済</li>
              <li>・店頭でのショッピングクレジット決済 ※免許書等の身分証明書が必要となります</li>
              <li>・当社指定の各種ギフトカード</li>
              <li>・店頭にて利用可能なクーポン</li>
              <li>・株主優待券</li>
              <p>※店舗により支払方法が異なる場合がございます、詳しくは受け取り店舗にてご確認ください</p>
            </ul>
          </div>

          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <subTitle :txt="'宅配受け取りの場合'" :fontSize="'14px'" />
          <!-- PayPayオンライン決済 -->
          <v-sheet id="paypay" color="#e8e8e8" class="pa-2 font-weight-bold my-2">PayPayオンライン決済</v-sheet>
          <v-img src="/ec/images2/guide/shiharai/img_paypaylogo.png" max-width="105px" max-height="55px" alt="paypay"></v-img>
          <p class="ml-2">
            PayPayオンライン決済は、お客さまがご利用のPayPayアカウントを用いて行う前払い決済方法です。<br />
            PayPay残高にご登録いただいた金額で商品の購入ができます。<br />
            Tポイントとの併用はご利用いただけます。<br />
            商品を発送した際にお客さまの残高より決済金額が引き落とされます。
          </p>
          <p>PayPayの始め方は<a href="https://paypay.ne.jp/guide/start/" target="_brank">コチラ</a></p>
          <p class="font-weight-bold mb-0">【ご利用可能商品】</p>
          <p class="ml-2">商品詳細ページの支払方法欄に「PayPayオンライン決済」の記載がある商品</p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">詳しくは <a href="https://paypay.ne.jp/guide/net-service/" target="_brank">コチラ</a></p>
          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listAttention">
            <li>残高による一括払いのみとなり残高不足の場合はご利用いただけません</li>
            <li>発売前商品のご予約や、取り寄せに30日以上かかる商品のご注文にはご利用いただけません。</li>
            <li>残高内の場合でも、決済金額が500,001円以上の場合はご利用いただけません。</li>
          </ul>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- 代金引換 -->
          <v-sheet id="cash_delivery" color="#e8e8e8" class="pa-2 font-weight-bold my-2">代金引換</v-sheet>
          <p class="font-weight-bold mb-0">【代引手数料】</p>
          <p class="red--text font-weight-bold ml-2">無料</p>
          <p class="font-weight-bold mb-0">【ご利用可能電子マネー】</p>
          <p class="ml-2">電子マネーと現金との併用払いもご利用可能です</p>
          <p class="mb-2 ml-2">お支払い例：25,000円の商品をご購入の場合</p>
          <ul class="listAttention">
            <li>お支払いパターン1 現金：20,000円と電子マネー：5,000円でお支払い</li>
            <li>お支払いパターン2 25,000円全額を電子マネーでお支払い</li>
          </ul>
          <p class="ml-2">※一部エリアや通信環境によりまして、電子マネー決済はご利用いただけない場合があります</p>
          <v-img src="/ec/images2/guide/shiharai/img_denshi_money.gif" max-width="90%" max-height="auto"></v-img>
          <p class="font-weight-bold mb-0">【ご利用可能金額】</p>
          <p class="ml-2">商品価格合計30万円までのご注文でご利用いただけます</p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">商品お届け時に配送員へ現金、又は電子マネーにてお支払いいただけます</p>
          <p class="font-weight-bold mb-0">【決済代行会社】</p>
          <p class="ml-2">ヤマトフィナンシャル株式会社（ヤマトコレクトサービス）</p>

          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listAttention">
            <li>弊社から商品発送後1週間受け取りがなされないご注文に関しましては、自動的にキャンセルになります</li>
          </ul>
          <p>下記の場合はご利用いただけません</p>
          <ul class="listNormal">
            <li>ネコポスでのお支払い</li>
            <li>メーカー直送品のお支払い</li>
            <li>お届け時のクレジットカードでのお支払い</li>
            <li>複数の電子マネーによる併用決済</li>
            <li>お渡し時のチャージ</li>
            <li>大型家電商品（大型テレビ、冷蔵庫、洗濯機）等の電子マネー決済</li>
          </ul>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- クレジットカード -->
          <v-sheet id="card" color="#e8e8e8" class="pa-2 font-weight-bold my-2">クレジットカード</v-sheet>
          <p class="font-weight-bold mb-0">【お支払い手数料</p>
          <p class="ml-2">
            お使いのクレジットカード会社によっては、手数料がかかる場合がございます<br />
            詳しくはお使いのクレジットカード会社へご確認ください
          </p>
          <p class="font-weight-bold mb-0">【ご利用可能クレジットカード】</p>
          <p class="ml-2">VISA（ビザ） MasterCard（マスターカード）JCB（ジェイシービー）NICOS（ニコス）AMEX(アメリカン・エキスプレス）</p>
          <v-img src="https://shop.kitamura.jp/common/images/img_credit.jpg" max-width="208px" max-height="26" alt="クレジットカード" />
          <p class="font-weight-bold mb-0 mt-2">【ご利用可能お支払い回数】</p>
          <table class="dataTL pa-sm-2" border="">
            <tr>
              <th scope="row" class="w70 txtAC pa-sm-2">
                <v-img src="/ec/images2/guide/shiharai/img_jcb.gif" alt="JCB" max-width="70px" max-height="40px" />
              </th>
              <th scope="row" class="w70 txtAC pa-sm-2">
                <v-img src="/ec/images2/guide/shiharai/img_visa.gif" alt="VISA" max-width="70px" max-height="40px" />
              </th>
              <th scope="row" class="w70 txtAC pa-sm-2">
                <v-img src="/ec/images2/guide/shiharai/img_mastercard.gif" alt="MasterCard" max-width="70px" max-height="40px" />
              </th>

              <td class="caption text-sm-subtitle-2 pa-sm-2">
                一括、リボ、分割（3,5,6,10,12,15,18,20,24回が可能です）<br />
                ボーナス一括（取扱期間は備考欄をご参照ください)
              </td>
            </tr>
            <tr>
              <th colspan="3" class="text-center pa-sm-2" scope="row">
                <div class="d-flex flex-column justify-space-between align-center mt-2">
                  <v-img src="/ec/images2/guide/shiharai/img_americanexpress.gif" alt="AMEX" max-width="70px" max-height="40px" />
                </div>
                <p></p>
              </th>
              <td class="caption text-sm-subtitle-2 pa-sm-2">
                一括、分割（3,5,6,10,12,15,18,20,24回が可能です）<br />
                ボーナス一括はご利用いただけません
              </td>
            </tr>
          </table>

          <p class="font-weight-bold mb-0">【ボーナス一括ご利用可能期間</p>
          <ul class="listNormal">
            <li>夏のボーナス(お支払い：8月)：12月17日～6月15日（14:30まで）</li>
            <li>冬のボーナス(お支払い：1月)：7月16日～11月15日（14:30まで）</li>
          </ul>
          <p class="font-weight-bold mb-0">【お支払い方法</p>
          <p class="ml-2">ご利用可能クレジットカードより選択いただき、必要事項をご入力いただくことでお支払いいただけます</p>

          <p class="font-weight-bold mb-0">【決済代行会社】</p>
          <p class="ml-2">GMOペイメントゲートウェイ株式会社</p>
          <p class="font-weight-bold mb-0">【ご注意事項</p>
          <ul class="listNormal">
            <li>画面を複数開いて、お買い物かごを操作されますとご注文が正常に完了しない場合がございます</li>
            <li>お客様とカード会社との契約内容によりご使用できない場合もございますので契約内容をご確認ください</li>
            <li>注文者のご住所、電話番号、氏名は、カード会社に登録された内容でご記入ください</li>
            <li>ご利用は日本国内で発行されたクレジットカードのみとなります</li>
            <li>請求日については、<router-link to="credit_card">クレジットカード払い請求について</router-link>をご覧ください</li>
            <li>
              お買上いただきました商品を「安全」にお客様のお手元にお届けする為、発送の際に、<br />
              お届先からの「転送不可」指定で発送させていただく場合がございます
            </li>
          </ul>
          <p class="font-weight-bold mb-0 mt-2">【インターネットでクレジットカードを安全にご利用いただく為のご案内】</p>
          <p class="ml-2">
            当店のクレジットカード決済では、お客様のクレジットカード番号が当店を経由せず<br />
            「<a href="http://www.gmo-pg.com/" target="_blank" class="icoOpen">GMOペイメントゲートウェイ株式会社</a>」を通じてカード会社に送信されるため安心です
          </p>
          <ul class="listAttention">
            <li>当店は3Dセキュア（本人認証サービス）を導入店舗です。 → <a href="/3Dsecure/secure.html">3Dセキュアとは</a></li>
            <li>
              アメリカン・エキスプレスはSafeKeyがご利用いただけます。→<a href="https://www.americanexpress.com/japan/common/safekey/" target="_blank"
                >American Express SafeKeyとは</a
              >
            </li>
          </ul>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- ショッピングクレジット -->
          <v-sheet id="shop_credit" color="#e8e8e8" class="pa-2 font-weight-bold my-2">ショッピングクレジット</v-sheet>
          <v-img src="/ec/images2/guide/shiharai/img_jaccslogo.png" max-width="105px" max-height="55px" alt="jaccs" class="float-left" />
          <v-img src="/ec/images2/guide/shiharai/img_orico.png" max-width="105px" max-height="55px" alt="Orico" class="float-left" />
          <p class="mt-6">ショッピングクレジット</p>
          <div style="clear: both"></div>
          <p>
            クレジットカードを持っていなくても簡単なお手続きでお客様の購入代金を<br />
            信販会社がキタムラに立替払いする決済です
          </p>
          <p class="font-weight-bold mb-0">【実質年率】</p>
          <p class="mb-2">▼ 1～60回分割払い（年利：当社負担の0％）</p>
          <table class="dataTL w300" border="">
            <tr>
              <th scope="col">1回～5回</th>
              <th scope="col">6回</th>
              <th scope="col">10回</th>
              <th scope="col">12回</th>
              <th scope="col">15回</th>
              <th scope="col">20回</th>
              <th scope="col">24回</th>
              <th scope="col">30回</th>
              <th scope="col">36回</th>
              <th scope="col">42回</th>
              <th scope="col">48回</th>
              <th scope="col">54回</th>
              <th scope="col">60回</th>
            </tr>
            <tr>
              <td colspan="13" class="text-center">
                <span class="red--text">0％<br />※Oricoは48回まで無金利 54回～84回は分割金利7.0％</span>
              </td>
            </tr>
          </table>
          <p>▼ 分割72回以上低金利プラン（年利：7％）</p>
          <table class="dataTL w300" border="">
            <tr>
              <th scope="col">72回</th>
              <th scope="col">84回</th>
            </tr>
            <tr>
              <td colspan="2" class="text-center"><span class="red--text">7％</span></td>
            </tr>
          </table>
          <p class="font-weight-bold mb-0">【ご利用可能金額】</p>
          <p class="ml-2">一度のご決済のお支払い総額3万円(税込）以上、かつ月々のお支払いが3,000円(税込）以上からご利用いただけます</p>
          <p class="font-weight-bold mb-0">【ご利用可能お支払い回数】</p>
          <p class="ml-2">1、2、3、5、6、10、12、15、20、 24、30、36、42、48、54、60、72、84回</p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">ご注文手続き完了後ショッピングクレジットお申し込み画面よりお申し込みいただき、お支払いいただけます</p>

          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listNormal">
            <li>
              お支払い開始のタイミングは次の通りです。<br />
              商品発送の翌月ないしは翌々月の27日からのお支払い開始となります。<br />
              金融機関が休日の場合は翌営業日 例：1月1日にお申込みの場合、3月27日が第一回目となります
            </li>
            <li>店頭でショッピングクレジットのお申込みの際には、身分証明書、銀行名および口座番号、銀行の登録印鑑が必要となります</li>
            <li>店頭で9:00～20:30までに申込完了分は当日の審査となります</li>
            <p>詳しくは<router-link to="s_credit_01" target="_blank" class="icoOpen">ショッピングクレジットについて</router-link>をご覧ください</p>
          </ul>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- トクトク据置 -->
          <v-sheet id="tokutoku_sueoki" color="#e8e8e8" class="pa-2 font-weight-bold my-2">トクトク据置</v-sheet>
          <v-img src="/ec/images2/guide/shiharai/img_jaccslogo.png" max-width="105px" max-height="55px" alt="jaccs" />
          <p class="mt-2">
            当社指定の商品をご購入される際にお選びいただけるお支い払方法です。<br />商品の返却時の買取予定価格を残価額とし、残価額を差し引いた代金を24ヶ月の分割で支払いできるので、<br />月々の支払いを低く抑えられます。最終回にあたる25ヶ月目に返却（残価額で当社が買取り）するか、ショッピングクレジット一括払いでお支払いいただくか、お客様のご希望に応じてお選びいただけます。
          </p>

          <p>▼ 24回分割払い（年利：当社負担の0％）、25ヶ月目に当社に返却（残価で売却）するか、残価を一括でお支払いするかお選びいただけます</p>

          <p class="font-weight-bold mb-0">【ご利用可能商品】</p>
          <p class="ml-2">当社指定の商品 <a href="/ec/special/general/tokutokusueoki/#lens">対象商品はコチラ</a></p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">ご注文手続き完了後「トクトク据置」お申し込み画面よりお申し込みいただき、お支払いいただけます</p>

          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listNormal">
            <li>
              お支払い開始のタイミングは次の通りです。<br />
              商品発送の翌月ないしは翌々月の27日からのお支払い開始となります。<br />
              金融機関が休日の場合は翌営業日 例：1月1日にお申込みの場合、3月27日が第一回目となります
            </li>

            <p>詳しくは<a href="/ec/special/general/tokutokusueoki" target="_blank" class="icoOpen">トクトク据置について</a>をご覧ください</p>
          </ul>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- 銀行振込 -->
          <v-sheet id="bank_transfer" color="#e8e8e8" class="pa-2 font-weight-bold my-2">銀行振込</v-sheet>
          <p class="font-weight-bold mb-0">【お振込手数料】</p>
          <p class="ml-2">お振込みいただく金融機関により異なります</p>
          <p class="font-weight-bold mb-0">【ご利用可能金額】</p>
          <p class="ml-2">
            お振込代金が一度のご注文につき、10万円以上でご利用できます<br />
            10万円以下のお振込は、手数料無料で安心支払いのPay-easy決済をご利用ください
          </p>
          <p class="font-weight-bold mb-0">【お振込期限】</p>
          <p class="ml-2">ご注文から7日以内</p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">当店指定の口座へお振込みいただくことでお支払いいただけます</p>
          <p class="font-weight-bold mb-0">【お振込先】</p>
          <p class="ml-2">
            PayPay銀行<br />
            ※2021年4月5日より、ジャパンネット銀行はPayPay銀行に名称が変更になりました
          </p>
          <p class="ml-2">
            支店：本店営業部<br />
            振込先：カ）キタムラ<br />
            振込先口座番号：ご注文後の「ご注文確認メール」「マイページ」にてご案内致します
          </p>
          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listNormal">
            <li>銀行振込の場合は、前払いとさせていただいております</li>
            <li>商品の発送は、ご入金の確認が取れ次第発送いたします</li>
            <li>振込手数料は、お客様ご負担でお願いいたします</li>
            <li>お取寄せの場合は、ご入金後商品の発注、商品入荷次第の発送となります</li>
          </ul>
          <p class="font-weight-bold mb-0">【お振込様名義に関しまして】</p>
          <p class="ml-2">ご注文の際に「振込名義人」欄に、お振込主様のお名前をご入力下さい</p>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- Pay-easy決済（インターネットバンク振込） -->
          <v-sheet id="pay_easy" color="#e8e8e8" class="pa-2 font-weight-bold my-2">Pay-easy決済（インターネットバンク振込）</v-sheet>
          <v-img src="/ec/images2/guide/shiharai/img_payeasy.gif" max-width="68px" max-height="51px" alt="Pay-easy決済" />
          <p class="font-weight-bold mb-0 mt-4">【お振込手数料】</p>
          <p class="ml-2">基本的に無料です（一部例外有り）</p>
          <p class="font-weight-bold mb-0">【ご利用可能金額】</p>
          <p class="ml-2">
            お振込代金が10万円以下の場合のみご利用いただけます<br />
            10万円以上のお振込は、銀行振込をご利用ください
          </p>
          <p class="font-weight-bold mb-0">【お振込期限】</p>
          <p class="ml-2">ご注文から10日以内</p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">パソコンや携帯電話、ゆうちょ銀行ATM、その他一部金融機関のATMからお支払いいただけます</p>
          <p class="font-weight-bold mb-0">【お支払いの流れ】</p>
          <v-img src="/ec/images2/guide/shiharai/img_payeasy_02.png" max-width="402px" max-height="256px" alt="" />
          <p class="font-weight-bold mb-0 mt-2">【銀行ATMでの支払い】</p>
          <p class="ml-2">
            ゆうちょ銀行、または一部金融機関のATMから簡単にお支払いいただけます<br />
            利用可能なATMにはPay-easy決済マークが表示されています<br />
            お支払いには、収納機関番号（58021）、お客様番号、確認番号（メールにてお知らせ）が必要です<br />
            忘れずに控えをお持ちください
          </p>
          <p class="font-weight-bold mb-0">【ATM利用可能一覧】</p>
          <ul class="listNormal">
            <li>みずほ銀行</li>
            <li>三菱東京UFJ銀行</li>
            <li>三井住友銀行</li>
            <li>りそな銀行</li>
            <li>埼玉りそな銀行</li>
            <li>千葉銀行</li>
            <li>ゆうちょ銀行</li>
          </ul>
          <p class="font-weight-bold mb-0 mt-2">【インターネットバンキングでのお支払い】</p>
          <p class="ml-2">事前に各金融機関への届出が必要です</p>
          <p class="ml-2">ご利用いただける銀行一覧は<a href="http://info.gmopg.jp/payeasy/org-list.html#second" target="_blank" class="icoOpen">こちら</a></p>
          <ul class="listAttention">
            <li>詳しいご利用方法は各金融機関にお問い合わせ下さい</li>
          </ul>
          <p class="font-weight-bold mb-0">【決済代行会社】</p>
          <p class="ml-2">GMOペイメントゲートウェイ株式会社</p>
          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listNormal">
            <li>Pay-easy決済は前払いとさせていただいております</li>
            <li>
              商品の発送は、ご入金の確認が取れ次第発送いたします<br />
              お取寄せの場合は、ご入金後商品の発注、商品入荷次第の発送となります
            </li>
          </ul>

          <p class="font-weight-bold mb-0 mt-2">【Pay-easy決済（インターネットバンク振込）の詳しいご説明】</p>

          <p class="ml-2">
            Pay-easy決済（インターネットバンク振込）について詳しくは<a href="http://www.pay-easy.jp/" target="_blank" class="icoOpen">こちら</a>をご覧ください
          </p>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>

          <!-- コンビニ支払い -->
          <v-sheet id="convenience" color="#e8e8e8" class="pa-2 font-weight-bold my-2">コンビニ支払い</v-sheet>
          <p class="font-weight-bold mb-0">【お支払い手数料】</p>
          <p class="ml-2"><span class="red--text font-weight-bold">無料</span></p>
          <p class="font-weight-bold mb-0">【ご利用可能コンビニエンスストア】</p>
          <p class="ml-2">
            セブンイレブン、ローソン、
            <!--サークルK、サンクス、-->ヤマザキデイリーストア、デイリーヤマザキ、ミニストップ、ファミリーマート
          </p>
          <v-img src="/ec/images2/guide/shiharai/img_cvs.png" max-width="260px" max-height="55px" alt="" />
          <p class="font-weight-bold mb-0 mt-2">【ご利用可能金額】</p>
          <p class="ml-2">
            お支払い代金が30万円未満の場合のみご利用いただけます<br />
            30万円以上のお振込は、銀行振込をご利用ください
          </p>
          <p class="font-weight-bold mb-0">【お振込期限】</p>
          <p class="ml-2">ご注文から10日以内</p>
          <p class="font-weight-bold mb-0">【お支払い方法】</p>
          <p class="ml-2">お近くのコンビニエンスストアにてお支払いいただけます</p>
          <p class="font-weight-bold mb-0">【お支払いの流れ】</p>
          <p class="ml-2">
            ご注文完了後に“お支払い受付番号”を表示いたします<br />
            ご指定のコンビニ店頭端末で表示された番号を入力しレジでお支払いください<br />
            お客様からのご入金を確認後、商品発送を致します
          </p>
          <ul class="listAttention">
            <li>お取寄せの場合は、ご入金後商品が入荷次第の発送となります</li>
          </ul>
          <p class="ml-2">
            <a class="icoOpen" href="https://info.gmopg.jp/customer-convenience-store/" target="_blank">コンビニ毎のお支払い方法は、こちらをご確認ください</a>
          </p>
          <p class="font-weight-bold mb-0">【決済代行会社】</p>
          <p class="ml-2">GMOペイメントゲートウェイ株式会社</p>
          <p class="font-weight-bold mb-0">【ご注意事項】</p>
          <ul class="listNormal">
            <li>セブン-イレブンでのお支払いは、総額200円以上のご注文からご利用いただけます</li>
            <li>「払込票」を印刷いただくか、「払込票番号」を控えてお近くのセブン-イレブンへお越しください</li>
          </ul>
          <p class="text-right"><a href="#top" class="allow-icon">ページトップへ</a></p>
          <userguide />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
import GuideTitle from '@/components/common/guide/title.vue';
import SubTitle from '@/components/common/guide/subtitle.vue';
import Userguide from '@/components/common/guide/user-guide.vue';
export default Vue.extend({
  name: 'shiharai',
  components: {
    breadcrumbs: Breadcrumbs,
    guideTitle: GuideTitle,
    subTitle: SubTitle,
    userguide: Userguide,
  },
  setup: (props, context) => {
    document.title = 'お支払い方法｜カメラのキタムラネットショップ'
    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ご利用案内',
          linkUrl: 'service-guide',
          disabled: false
        },
        {
          path: 'お支払い方法',
          disabled: true
        }
      ],
      naviList: [
        { name: 'PayPayオンライン決済', href: '#paypay' },
        { name: '代金引換', href: '#cash_delivery' },
        { name: 'クレジットカード', href: '#card' },
        { name: 'ショッピングクレジット', href: '#shop_credit' },
        { name: 'トクトク据置', href: '#tokutoku_sueoki' },
        { name: '銀行振込', href: '#bank_transfer' },
        { name: 'Pay-easy決済（インターネットバンク振込）', href: '#pay_easy' },
        { name: 'コンビニ支払い', href: '#convenience' },
      ]

    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.section ol > li {
  margin: 0 0 2px 2em;
  list-style-type: decimal;
  list-style-position: inherit;
}

.section ul li,
ol li {
  line-height: 1.6em;
}

.section li {
  list-style: none;
}

.section ul.listInnerlink li,
ul.listInnerlinkSide li {
  margin: 0 3px 4px 0.5em;
  padding: 0 2px 0 12px;
  background: url(https://shop.kitamura.jp/common/images/mkr_arrow_innerlink.gif) no-repeat left 0.5em;
}

table,
th,
td,
table.data,
table.dataTL {
  border-collapse: collapse;
}
table.data,
table.dataTL {
  border: 1px solid #e0e0e0;
  border-spacing: 0;
  margin-bottom: 1.25em;
  width: 100%;
  text-align: left;
}

table.dataTL th {
  table-layout: fixed;
}
table th.w70 {
  width: 70px;
}
table.data th,
table.data td,
table.dataTL td,
table.dataTL th {
  line-height: 1.7;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

table.data th,
table.dataTL th {
  background-color: #f0f0f0;
  font-weight: bold;
}
.txtAC {
  text-align: center;
}
</style>
