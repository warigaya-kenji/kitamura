<template>
  <div class="tokutokusueoki">
    <!-- ↓ サンプル：パンくず -->
    <breadcrumbs :breadcrumbs="breadcrumbs" />
    <!-- ↑ サンプル：パンくず -->
    <div class="main-contents-wrap">
      <v-app>
        <div class="kanban">
          <v-img
            class="mx-auto"
            max-width="950px"
            src="/ec/images2/special/general/tokutokusueoki/sueoki00.jpg"
            alt="月々のお支払いを低く抑える トクトク据置"
          ></v-img>
        </div>

        <!--トクトク据置とは-->
        <section>
          <h1>トクトク据置とは</h1>
          <v-row>
            <v-col cols="12" sm="8">
              <p>
                当社指定の商品をご購入される際にお選びいただける、【宅配受取り限定】のお支払い方法です。<br />
                商品の返却時の買取り予定価格を残価額とし、残価額を差し引いた代金を24ヶ月の分割でお支払いできるので、<br />
                <span class="font-weight-bold red-text text-h5">月々のお支払いを低く抑えられます。</span>
              </p>
              <p>
                最終回にあたる25回目に商品を当店にご返却いただく（＝残価額で当店が買取り）か、商品をご購入いただく（ショッピングクレジット一括払いでお支払い）か、お客さまのご希望に応じてお選びいただけます。
              </p>
            </v-col>
            <v-col class="pa-6" cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki01.png" alt="トクトク据置 | 図"></v-img>
            </v-col>
          </v-row>
        </section>
        <!--トクトク据置とは-->

        <!--トクトク据置はここがお得！-->
        <section class="grey-back">
          <h2>トクトク据置はここがお得！</h2>
          <v-row>
            <v-col class="sueoki--value" cols="12" sm="6">
              <p>月々のお支払いを圧倒的に低く抑えられるから他のお支払い方法よりも気軽にご購入できます</p>
              <v-img class="mx-auto" max-width="620px" src="/ec/images2/special/general/tokutokusueoki/sueoki02.jpg" alt="イメージ"></v-img>
            </v-col>

            <v-col class="sueoki--value" cols="12" sm="6">
              <p>2年間使って｢買取り｣か｢ご購入｣をお選びいただけます</p>
              <v-img class="mx-auto" max-width="620px" src="/ec/images2/special/general/tokutokusueoki/sueoki03.jpg" alt="イメージ"></v-img>
            </v-col>
          </v-row>
        </section>
        <!--トクトク据置はここがお得！-->

        <!--トクトク据置お支払い例-->
        <section>
          <h2>トクトク据置お支払い例</h2>
          <p>トクトク据置では、分割払いの最終回にご返却いただくか、残価額を一括でお支払いいただき、ご購入するかをお選びいただく事ができます。</p>
          <p>下記は25回目にご返却(買取り)をした場合と、ご購入いただいた場合のお支払い例です</p>
          <div class="sueoki--rei-item">
            <v-row>
              <v-col class="text-center" cols="12" sm="6">
                <p class="grey-back pa-2">キヤノン EF70-200mm F2.8L IS III USMをトクトク据置でご注文した場合</p>
                <p>販売価格：<span class="price">200,000円</span></p>
                <p class="text-body-2">※2020年2月18日時点の販売価格</p>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  class="mx-auto"
                  max-width="320px"
                  src="/ec/images2/special/general/tokutokusueoki/sueoki-item01.jpg"
                  alt="トクトク据置お支払い例 | イメージ"
                ></v-img>
              </v-col>
            </v-row>
            <div class="sueoki--rei-arrow">
              <div class="arrow1"></div>
              <div class="arrow2"></div>
            </div>
          </div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="sueoki--rei-money--title">
                <img src="/ec/images2/special/general/tokutokusueoki/icon01.png" alt="ご返却 ｜ アイコン" />
                <p><span class="font-weight-bold d-block red-text text-h5">ご返却の場合</span>(残価額で当社が買取り)</p>
              </div>
              <p>支払回数25回(25ヶ月)、分割払手数料0円(手数料率・実質年率0.0％)</p>
              <table>
                <tr>
                  <th class="grey-back">初回お支払い額</th>
                  <td><span class="price">5,000円</span></td>
                </tr>
                <tr>
                  <th class="grey-back">2～24回目までの<br />お支払い額 (月々)</th>
                  <td><span class="price">5,000円</span></td>
                </tr>
                <tr>
                  <th class="grey-back">25回目のお支払い額</th>
                  <td>
                    <span class="price">0円</span><br />
                    <a v-scroll-to="'#topic'" class="body-2 hover"> 買取り価格に<br />関するご注意</a>
                  </td>
                </tr>
                <tr>
                  <th class="grey-back">お支払い総額</th>
                  <td><span class="price red-text">120,000円</span></td>
                </tr>
              </table>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="sueoki--rei-money--title">
                <img src="/ec/images2/special/general/tokutokusueoki/icon02.png" alt="ご購入 ｜ アイコン" />
                <p><span class="font-weight-bold d-block red-text text-h5">ご購入の場合</span>(残価額を一括でお支払い)</p>
              </div>
              <p>支払回数25回(25ヶ月)、分割払手数料0円(手数料率・実質年率0.0％)</p>
              <table>
                <tr>
                  <th class="grey-back">初回お支払い額</th>
                  <td><span class="price">5,000円</span></td>
                </tr>
                <tr>
                  <th class="grey-back">2～24回目までの<br />お支払い額 (月々)</th>
                  <td><span class="price">5,000円</span></td>
                </tr>
                <tr>
                  <th class="grey-back">25回目のお支払い額</th>
                  <td><span class="price">80,000円</span></td>
                </tr>
                <tr>
                  <th class="grey-back">お支払い総額</th>
                  <td><span class="price red-text">200,000円</span></td>
                </tr>
              </table>
            </v-col>
          </v-row>
        </section>
        <!--トクトク据置お支払い例-->

        <!--トクトク据置お支払い例-->
        <section>
          <v-sheet class="pa-6" outlined>
            <h2>お支払いシミュレーション</h2>
            <p>下記のボタンから、トクトク据置の分割払いシミュレーションを行えます</p>
            <!--共通ボタン-->
            <specificationsExamplesBtn :btntxt="'トクトク据置シミュレーション '" :color="'#d80b24'" :url="'/sitemap/jaccs-simulator/'" :height="'50px'" />
            <!--共通ボタン-->
          </v-sheet>
        </section>
        <!--トクトク据置お支払い例-->

        <!--他のお支払い方法との比較-->
        <section class="grey-back">
          <h2>他のお支払い方法との比較（20万円の商品の場合）</h2>
          <p>クレジットカードやショッピングクレジットに比べて月々のお支払いを抑えられます！</p>
          <table>
            <tr class="red-back">
              <th></th>
              <th><span>トクトク据置</span>2年分割 (25回)</th>
              <th><span>ショッピングクレジット</span>2年分割 (24回)</th>
              <th><span>クレジットカード</span>2年分割 (24回)</th>
            </tr>
            <tr>
              <td class="pink-back">商品価格</td>
              <td><span class="price">200,000円</span></td>
              <td><span class="price">200,000円</span></td>
              <td><span class="price">200,000円</span></td>
            </tr>
            <tr>
              <td class="pink-back">初回の<br />お支払い額</td>
              <td><span class="price red-text">5,000円</span></td>
              <td><span class="price">9,100円</span></td>
              <td><span class="price">9,252円</span></td>
            </tr>
            <tr>
              <td class="pink-back">2～24回目までの<br />お支払い額 (月々)</td>
              <td><span class="price red-text">5,000円</span></td>
              <td><span class="price">8,300円</span></td>
              <td><span class="price">9,697円</span></td>
            </tr>
            <tr>
              <td class="pink-back">25回目の<br />お支払い額</td>
              <td>
                <span class="price">0</span> <br /><span class="text-body-2">※ご購入の場合は80,000円</span><br />
                <a v-scroll-to="'#topic'" class="body-2 hover"> 買取り価格に<br />関するご注意</a>
              </td>
              <td><span>－</span></td>
              <td><span>－</span></td>
            </tr>
            <tr>
              <td class="pink-back">お客さま<br />総支払い額</td>
              <td><span class="price red-text">120,000円</span><br /><span class="text-body-2">※ご購入の場合は200,000円</span></td>
              <td><span class="price">200,000円</span></td>
              <td><span class="price">232,276円</span></td>
            </tr>
            <tr>
              <td class="pink-back">お客さま負担<br />手数料</td>
              <td><span class="price red-text">0円</span></td>
              <td><span class="price red-text">0円</span></td>
              <td><span class="price">32,276円</span></td>
            </tr>
          </table>
        </section>
        <!--他のお支払い方法との比較-->

        <!--トクトク据置お支払いスケジュール-->
        <section>
          <h2>トクトク据置お支払いスケジュール</h2>
          <v-img
            class="mx-auto"
            max-width="950px"
            src="/ec/images2/special/general/tokutokusueoki/step2.png"
            alt="トクトク据置お支払いスケジュール ｜ イメージ"
          ></v-img>
          <p class="mt-2 text-body-2">※1 商品の状態によって買取り額が減額される場合は、25回目に請求されます</p>
        </section>
        <!--トクトク据置お支払いスケジュール-->

        <!--トクトク据置お申し込み方法-->
        <section class="grey-back">
          <h2>トクトク据置お申し込み方法</h2>
          <!--step-->
          <div class="white-back">
            <!--step.1-->
            <v-row>
              <v-col class="green-back text-center" cols="12" sm="2"> STEP.1 </v-col>
              <v-col cols="12" sm="10">
                <v-row class="pa-4">
                  <v-col cols="12" sm="8">
                    <p>トクトク据置対象商品を｢買い物カゴに入れ｣お支払い方法に進みます。</p>
                    <p class="text-body-2">
                      <span>※商品ページのこのアイコンが目印⇒</span>
                      <img src="/ec/images2/special/general/tokutokusueoki/bnr_pdtokutoku_sueoki.png" alt="トクトク据置 ｜ アイコン" /><br />
                      <span>※トクトク据置は宅配受取り限定のサービスになります</span>
                    </p>
                    <a v-scroll-to="'#a07'" class="body-2 hover">
                      <v-btn color="#d80b24"><span class="white--text">トクトク据置の対象商品はこちら</span></v-btn>
                    </a>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-img src="/ec/images2/special/general/tokutokusueoki/capture-pc1.png" alt="トクトク据置お申し込み方法 STEP.1 ｜ イメージ"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!--step.2-->
            <v-row>
              <v-col class="green-back text-center" cols="12" sm="2"> STEP.2 </v-col>
              <v-col cols="12" sm="10">
                <v-row class="pa-4">
                  <v-col cols="12" sm="8">
                    <p>お支払い方法から｢トクトク据置｣を選択し、ご注文を確定します。</p>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-img
                      class="d-none d-sm-block"
                      src="/ec/images2/special/general/tokutokusueoki/capture-pc2.png"
                      alt="トクトク据置お申し込み方法 STEP.2 ｜ イメージ"
                    ></v-img>
                    <v-img
                      class="d-block d-sm-none"
                      src="/ec/images2/special/general/tokutokusueoki/capture-sp2.png"
                      alt="トクトク据置お申し込み方法 STEP.2 ｜ イメージ"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <!--step.3-->
            <v-row>
              <v-col class="green-back text-center" cols="12" sm="2"> STEP.3 </v-col>
              <v-col cols="12" sm="10">
                <v-row class="pa-4">
                  <v-col cols="12" sm="8">
                    <p>ご注文完了ページの、｢トクトク据置お申し込みページへ｣ボタンから、トクトク据置をお申し込みください。</p>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-img
                      class="d-none d-sm-block"
                      src="/ec/images2/special/general/tokutokusueoki/capture-pc2.png"
                      alt="トクトク据置お申し込み方法 STEP.3 ｜ イメージ"
                    ></v-img>
                    <v-img
                      class="d-block d-sm-none"
                      src="/ec/images2/special/general/tokutokusueoki/capture-sp2.png"
                      alt="トクトク据置お申し込み方法 STEP.3 ｜ イメージ"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <!--step-->
        </section>
        <!--トクトク据置お申し込み方法-->

        <!--トクトク据置対象商品-->
        <section id="a07">
          <h2>トクトク据置対象商品</h2>
          <v-row class="text-center">
            <v-col cols="6" sm="3">
              <v-card class="hover sueoki--target" elevation="1" outlined href="/special/sale-fair/general/tokutokusueoki/ef-lens/">
                <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-item02.jpg" alt="キヤノン EFレンズ | イメージ"></v-img>
                <span>キヤノン EFレンズ</span>
              </v-card>
            </v-col>
            <v-col cols="6" sm="3">
              <v-card class="hover sueoki--target" elevation="1" outlined href="/special/sale-fair/general/tokutokusueoki/rf-lens/">
                <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-item03.jpg" alt="キヤノン RFレンズ | イメージ"></v-img>
                <span>キヤノン RFレンズ</span>
              </v-card>
            </v-col>
            <v-col cols="6" sm="3">
              <v-card class="hover sueoki--target" elevation="1" outlined href="/special/sale-fair/general/tokutokusueoki/z-lens/">
                <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-item04.jpg" alt="ニコン Zレンズ | イメージ"></v-img>
                <span>ニコン Zレンズ</span>
              </v-card>
            </v-col>
            <v-col cols="6" sm="3">
              <v-card class="hover sueoki--target" outlined href="/special/sale-fair/general/tokutokusueoki/fe-lens/">
                <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-item05.jpg" alt="ソニー FEレンズ | イメージ"></v-img>
                <span>ソニー FEレンズ</span>
              </v-card>
            </v-col>
          </v-row>
        </section>
        <!--トクトク据置対象商品-->

        <!--買取り金額の注意事項と査定時の減額対象について-->
        <section class="grey-back" id="topic">
          <h3>買取り金額の注意事項と査定時の減額対象について</h3>
          <p>
            ｢トクトク据置｣は、2年後にお支払い対象の商品をご返却いただくことで、最終回のお支払い（残価）が不要となりますが、商品の状態によっては買取り価格が減額され、減額分のお支払いが発生する場合がございます。<br />
            ｢商品購入時の付属品、取扱説明書等がすべて揃っていない｣、｢キズ・汚れ・摩耗などがある｣、｢動作に問題がある｣等の場合、買取り価格の減額対象となりますので、商品は大切にご使用ください。
          </p>
          <p>査定時の減額対象など、詳しくは下記よりご確認ください。</p>
          <h4>商品・付属品は大切に保管をお願いします</h4>
          <v-row class="text-center">
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-tyui01.png" alt="商品本体 ｜ イメージ"></v-img>
              <p>商品本体</p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-tyui02.png" alt="箱、取扱説明書 ｜ イメージ"></v-img>
              <p>箱、取扱説明書</p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-tyui03.png" alt="レンズキャップ、フード、三脚座等 ｜ イメージ"></v-img>
              <p>レンズキャップ、フード、三脚座等</p>
            </v-col>
          </v-row>
          <p class="text-body-2">※購入時の付属品や取扱説明書、純正箱がすべてそろっていない場合、減額の対象となります</p>
          <h4>査定時の減額対象について</h4>
          <p>以下に該当する場合は、査定時に減額の対象となります</p>
          <ol class="mt-4">
            <li>使用上、外観上問題がなく、かつ購入時の付属品等が完備されている、という条件を満たさない場合</li>
            <li>純正箱欠品、傷、破損、汚れ、カビ、クモリ、付属品の欠品（レンズキャップ、フード 等 ）・ 破損等がある場合</li>
            <li>
              火災・塩害・ガス害・地震・落雷・および風水害、その他天災地変、あるいは異常電圧などの外部要因に起因する故障および損傷、盗難における損失がある場合
            </li>
            <li>
              正常なご使用方法でも、消耗部品が自然消耗、摩耗、劣化した場合<span class="text-body-2"
                >※新品販売時との差が著しい場合、返却をお断りする場合があります</span
              >
            </li>
          </ol>
          <v-row>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-tyui04.png" alt="減額 ｜ イメージ"></v-img>
              <p>商品に貼付されたシールは剥がさないでください<br />(型名・シリアル記載シール など)</p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-tyui05.png" alt="減額 ｜ イメージ"></v-img>
              <p>カビ・クモリが発生している場合、減額対象です<br />本体・付属品のキズ・汚れは減額対象です</p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img src="/ec/images2/special/general/tokutokusueoki/sueoki-tyui06.png" alt="減額 ｜ イメージ"></v-img>
              <p>商品本体および付属品に不良・不具合がある場合は、減額対象です</p>
            </v-col>
          </v-row>
          <table class="mt-4">
            <tr class="green-back">
              <th>項目</th>
              <th>内容</th>
              <th>減額幅・金額</th>
            </tr>
            <tr>
              <th class="green-back" rowspan="7">本体</th>
              <td>シリアルシールはがれ・紛失、<br />シリアル違い、刻印削れ</td>
              <td>買取不可</td>
            </tr>
            <tr>
              <td>通電不可</td>
              <td>買取不可</td>
            </tr>
            <tr>
              <td>動作不良</td>
              <td>10～80％</td>
            </tr>
            <tr>
              <td>レンズ面傷、外観傷</td>
              <td>30～90％</td>
            </tr>
            <tr>
              <td>レンズ面汚れ、外観汚れ</td>
              <td>30～60％</td>
            </tr>
            <tr>
              <td>レンズ内ほこり、<br />クモリ、カビ</td>
              <td>30～90％</td>
            </tr>
            <tr>
              <td>レンズ外観欠け、<br />削れ、ニオイ</td>
              <td>30～90％</td>
            </tr>
            <tr>
              <th class="green-back">付属品</th>
              <td>欠品、破損、ニオイ、<br />カビ、汚れ</td>
              <td>各100～10,000円</td>
            </tr>
          </table>
        </section>
        <!--買取り金額の注意事項と査定時の減額対象について-->

        <!--基本条件など-->
        <section class="grey-back mt-4">
          <h3>基本条件</h3>
          <p>
            分割払手数料は0.0%（実質年率）です<br />
            お支払い回数は、24回 ＋ 残価（据置）1回（ご返却の場合は残価1回は不要）となります<br />
            回数の変更はできません<br />
            また、｢ボーナス併用分割払い｣｢ボーナス一括払い｣は選択できません
          </p>
          <h3>注意事項</h3>
          <ul>
            <li>
              (株)ジャックスの審査により、ご希望に沿えない場合もございますのでご了承ください<br />
              また、審査承認後、(株)ジャックスからご本人宛に｢クレジットお客さま控え｣と｢預貯金口座振替依頼書｣を送付いたします<br />
              お客さまより署名押印した｢預貯金口座振替依頼書｣をご返送していただきます
            </li>
            <li>
              ご契約完了後に商品の手配、配送手続きをいたします<br />
              また、(株)ジャックスによる審査が承認されない場合は、お客さまのご注文をキャンセルさせていただきます
            </li>
            <li>
              お支払い金融機関の設定には、一部ご利用いただけない金融機関もございます<br />
              詳しくは(株)ジャックスまでお問い合わせください
            </li>
            <li>
              ご注文者とお届け先が異なる場合、お支払い方法として｢残価設定クレジット｣はお選びいただけません<br />
              ご了承ください
            </li>
          </ul>
          <!--共通ボタン-->
          <specificationsExamplesBtn
            :btntxt="'よくあるお問い合わせ'"
            :color="'#3eb270'"
            :url="'https://ecfaq.kitamura.jp/s/topic/0TO7F000000q7tQWAQ/%E3%83%88%E3%82%AF%E3%83%88%E3%82%AF%E6%8D%AE%E7%BD%AE'"
            :height="'50px'"
          />
          <!--共通ボタン-->
          <h3>お問い合わせ</h3>
          <p>
            お客さまの｢トクトク据置｣のお申し込みが完了したかの確認、および｢トクトク据置｣全般についてのご相談については、当店指定の信販会社までお問い合わせください
          </p>
          <v-card class="mx-auto" max-width="640px">
            <span class="d-block pa-4 text-center green-back">株式会社 ジャックス東京クレジットセンター</span>
            <p class="pa-4 text-center">
              <span class="d-none d-sm-block">TEL：046-234-1187</span>
              <span class="d-block d-sm-none">
                <a href="tel:0462341187">TEL：046-234-1187</a>
              </span>
              営業時間：10:00～20:00（年末年始を除く）
            </p>
          </v-card>
        </section>
        <!--基本条件など-->
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
import SpecificationsExamplesBtn from '@/components/common/special/specifications-examples-btn.vue';
export default Vue.extend({
  name: 'tokutokusueoki',
  components: {
    breadcrumbs: Breadcrumbs,
    specificationsExamplesBtn: SpecificationsExamplesBtn
    //product: Product
  },
  props: {},
  setup: (props, context) => {
    document.title = '月々のお支払いを低く抑える｢トクトク据置｣ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '月々のお支払いを圧倒的に安く抑えられる｢トクトク据置｣ 商品の返却時の買取り予定価格を残価額とし、残価額を差し引いた代金を24ヶ月の分割でお支払いできます'
      );
    const state = reactive({
      // ↓ ---- 掲載期間 ----
      validFrom: '2021/01/22 00:00',
      validTo: '2099/01/25 23:59',
      // ↑ ---- 掲載期間 ----
      // ↓ ---- パンくず情報 ----
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: '月々のお支払いを低く抑える｢トクトク据置｣',
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
      formatPrice
    };
  }
});
</script>

<style lang="scss" scoped>
.main-contents-wrap {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 12px;
  /* 汎用 */
  h1,
  h2,
  h3 {
    font-weight: bold;
  }
  h1,
  h2 {
    border-left: 5px #d80b24 solid;
    font-size: 160%;
    margin-bottom: 32px;
    padding-left: 10px;
  }
  h3 {
    border-bottom: 1px #333 solid;
    font-size: 120%;
    margin: 32px auto 16px;
    padding-bottom: 10px;
  }
  h4 {
    background: #333;
    color: #fff;
    font-size: 120%;
    margin: 32px auto 16px;
    padding: 10px;
  }
  section {
    margin-bottom: 60px;
    padding: 40px 20px;
  }
  .grey-back {
    background: #eee;
  }
  .green-back {
    background: #3eb270;
    color: #fff;
  }
  .red-back {
    background: #d80b24;
    color: #fff;
  }
  .pink-back {
    background: #f5ebeb;
  }
  .white-back {
    background: #fff;
  }
  .red-text {
    color: #d80b24;
  }
  .price {
    font-size: 140%;
    font-weight: bold;
  }
  table {
    background: #fff;
    border-collapse: collapse;
    width: 100%;
    th,
    td {
      border: 1px solid #e0e0e0;
      padding: 10px;
      text-align: center;
      vertical-align: middle;
    }
  }
  /* 看板 */
  .kanban {
    background: #eee;
  }
  /* トクトク据置はここがお得 */
  .sueoki--value {
    padding: 15px;
    p {
      align-items: center;
      background: #3eb270;
      color: #fff;
      display: flex;
      font-size: 17px;
      font-weight: bold;
      min-height: 70px;
      margin: 0;
      max-width: 650px;
      padding: 5px 10px 5px 80px;
      position: relative;
    }
    p::before {
      content: url(/ec/images2/special/general/tokutokusueoki/icon-point.png);
      left: -20px;
      position: absolute;
      top: -10px;
      z-index: 1;
    }
  }
  /* トクトク据置お支払い例 */
  .sueoki--rei-item {
    border-bottom: 4px #bbb solid;
    border-top: 4px #bbb solid;
    margin-bottom: 80px;
    padding: 30px 0;
    .arrow1,
    .arrow2 {
      height: 30px;
      width: 50%;
      position: relative;
    }
    .arrow1 {
      float: left;
    }
    .arrow2 {
      display: inline-block;
    }
    .arrow1:before,
    .arrow2:before {
      content: '';
      position: absolute;
      bottom: -73px;
      left: 230px;
      margin-left: -33px;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 37px 37px 0 37px;
      border-color: #fff transparent transparent transparent;
      z-index: 2;
    }
    .arrow1:after,
    .arrow2:after {
      border-style: solid;
      border-width: 39px 39px 0 39px;
      border-color: #bbb transparent transparent transparent;
      content: '';
      position: absolute;
      bottom: -77px;
      left: 230px;
      margin-left: -35px;
      width: 0px;
      height: 0px;
      z-index: 1;
    }
    @media (max-width: 768px) {
      .arrow1 {
        float: none;
        width: 100%;
      }
      .arrow1:before {
        bottom: -66px;
        left: 50%;
      }
      .arrow1:after {
        bottom: -70px;
        left: 50%;
      }
      .arrow2 {
        display: none;
      }
    }
  }
  /*トクトク据置お支払い例*/
  .sueoki--rei-money--title {
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      width: 80px;
      @media (max-width: 768px) {
        img {
          width: 60px;
        }
      }
    }
  }
  /* トクトク据置対象商品 */
  .sueoki--target span {
    background: #d80b24;
    border-radius: 0 0 5px 5px;
    color: #fff;
    display: block;
    padding: 10px 0;
    text-align: center;
  }
}
</style>