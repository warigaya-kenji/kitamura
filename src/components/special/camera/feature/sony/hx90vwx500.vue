<template>
  <v-app>
    <div class="sony-hx90vwx500">
      <div class="w730 px-2 px-sm-0">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <h1>
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_mt.png"
            alt="手のひらサイズに凝縮された世界最小 光学30倍ズームモデル「誕生」※ 『DSC-HX90V』はファインダー及び30倍光学ズームレンズ搭載のコンパクトデジタルカメラにおいて。『DSC-WX500』は30倍光学ズームレンズ搭載のコンパクトデジタルカメラにおいて。2015年5月19日広報発表時点（ソニー調べ）"
            max-width="730"
            max-height="268"
            border="0"
          />
        </h1>
        <v-sheet id="topArea" color="#194B7D" class="pt-1">
          <v-container class="pa-0">
            <v-row no-gutters>
              <v-col cols="12" sm="5">
                <router-link to="/ec/pd/4548736012578">
                  <v-img
                    src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_01.png"
                    alt="デジタルスチルカメラ DSC-HX90V 「購入はこちら」"
                    max-width="296"
                    height="auto"
                    class="mx-auto"
                  >
                  </v-img>
                </router-link>
              </v-col>
              <v-col cols="12" sm="7">
                <router-link
                  to="/ec/list?narrow18=0&keyword=ソニー%20Cyber-shot%20DSC-WX500%20&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=ソニー%20Cyber-shot%20DSC-WX500%20&x=0&y=0"
                >
                  <v-img
                    src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_02.png"
                    alt="デジタルスチルカメラ DSC-WX500 「購入はこちら」カラー：（R）レッド、（B）ブラック、（W）ホワイト"
                    max-width="391"
                    height="auto"
                    class="mx-auto"
                  >
                  </v-img>
                </router-link>
              </v-col>
            </v-row>
          </v-container>

          <div class="mt-2 pc" v-if="$vuetify.breakpoint.mdAndUp">
            <img
              src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_03.png"
              alt="5大特長"
              width="730"
              height="104"
              border="0"
              usemap="#Map"
            />
            <map name="Map" id="Map">
              <area shape="rect" coords="-1,45,145,105" v-scroll-to="'#cnt_01'" alt="光学30倍ズーム" />
              <area shape="rect" coords="146,45,290,102" v-scroll-to="'#cnt_02'" alt="高感度性能" />
              <area shape="rect" coords="291,46,437,104" v-scroll-to="'#cnt_03'" alt="内蔵ファインダー" />
              <area shape="rect" coords="440,46,583,103" v-scroll-to="'#cnt_04'" alt="180度可動式モニター" />
              <area shape="rect" coords="584,46,729,106" v-scroll-to="'#cnt_05'" alt="スタミナ性能" />
            </map>
          </div>
        </v-sheet>

        <!-- Premium【01】 -->
        <div id="cnt_01" class="mt-6 mb-4">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_04.png"
            alt="【Premium 01】光学30倍 新開発のZEISSバリオ・ゾナーT＊レンズを採用"
            max-width="730"
            height="auto"
          />
        </div>
        <div class="mb-1">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_05.png"
            alt="遠くの被写体もここまで大きく"
            max-width="253"
            height="auto"
          />
        </div>
        <p>
          被写体に近づけないシーンでも、より大きく残したい。そんなときに活躍するのが光学30倍ズーム。離れている被写体にも大きく迫れます。さらに、全画素超解像ズームなら、解像感を保ったまま最大60倍（＊）まで撮影可能です。<br />
          <span class="caption mt-1">＊光学30倍ズームを含むワイド端からのズーム倍率</span>
        </p>
        <v-row class="mt-4">
          <v-col cols="12" sm="4" v-for="(n, i) in 3" :key="i">
            <v-img
              :src="`/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_0${n + 5}.png`"
              max-width="230"
              height="auto"
              class="mx-auto"
            ></v-img>
            <p class="mt-1 text-center">{{ n === 1 ? 'ズームなし' : n === 2 ? '光学30倍ズーム' : '全画素超解像60倍ズーム' }}</p>
          </v-col>
        </v-row>
        <div class="dot-line mb-1">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_09.png"
            alt="ズームにしてもブレずにキレイ"
            max-width="255"
            max-height="21"
            border="0"
          />
        </div>
        <p>
          高倍率ズーム撮影時に起こりやすい手ブレ。サイバーショットなら、進化した光学式手ブレ補正で、ブレをピタッと抑えられます。手ブレ補正は、カメラを構えているときは常に有効なので、フレーミングやピント合わせもスムーズ。撮りたいシーンを逃しません。
        </p>
        <v-row>
          <v-col cols="12" sm="6" v-for="(n, i) in 2" :key="i">
            <v-img :src="`/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_${n + 9}.png`" max-width="350" height="auto" class="mx-auto"></v-img>
            <p>{{ n === 1 ? '光学式手ブレ補正なし' : '光学式手ブレ補正あり' }}</p>
          </v-col>
        </v-row>

        <!-- Premium【02】 -->
        <div id="cnt_02" class="mt-6 mb-4">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_12.png"
            alt="【Premium 02】最高感度ISO12800＊ 高感度で暗いシーンも鮮やかに撮影"
            max-width="730"
            max-height="50"
          />
        </div>
        <div class="mb-1">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_13.png"
            alt="夜景も明るく美しくノイズやブレを抑えて撮影"
            max-width="387"
            height="auto"
          />
        </div>
        <p>
          ノイズやブレが目立ちやすい夜景撮影も、サイバーショットなら簡単キレイ。プレミアムおまかせオートを使えば、暗いシーンを自動で認識し、最大4枚の連写画像を重ね合わせてノイズを低減。三脚を使わなくても、ノイズやブレのない美しい夜景が撮影できます。<br />
          <span class="caption mt-1">＊ ISO6400以上では全画素超解像技術および重ね合わせ連写を使って実現しています</span>
        </p>
        <v-row>
          <v-col cols="12" sm="6" v-for="(n, i) in 2" :key="i">
            <v-img
              :src="`/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_${n + 13}.png`"
              max-width="350"
              height="auto"
              class="mx-auto"
            ></v-img>
            <p>{{ n === 1 ? 'スマートフォン' : 'サイバーショット' }}</p>
          </v-col>
        </v-row>

        <!-- Premium【03】 -->
        <div id="cnt_03" class="mt-6 mb-4">
          <v-img
            src="	/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_16.png"
            alt="【Premium 03】内蔵ファインダーはさまざまなシーンで便利"
            max-width="730"
            max-height="50"
          />
        </div>
        <v-row class="txtArea" no-gutters>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_17.png" max-width="350" height="auto" class="mx-auto"></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="mb-1">
              <v-img
                src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_18.png"
                alt="屋外でも被写体が見やすく、さらに手ブレを抑える効果も"
                max-width="244"
                height="auto"
              />
            </div>
            <p>
              HX90Vは、ポップアップ式のファインダーを内蔵。明るい屋外などで液晶が見えにくいシーンでも、ファインダー越しに被写体や構図をしっかり確認できます。また、ファインダーを覗くと、両手でカメラをしっかりと構える格好になるので、手ブレ防止にもつながります。
            </p>
            <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_19.png" max-width="359" height="auto"></v-img>
          </v-col>
        </v-row>

        <!-- Premium【04】 -->
        <div id="cnt_04" class="mt-6 mb-4">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_20.png"
            alt="【Premium 04】180度可動式モニターで撮影アングルがさらに自由に"
            max-width="730"
            max-height="50"
          />
        </div>
        <v-row class="txtArea" no-gutters>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_21.png" max-width="350" height="auto" class="mx-auto"></v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="mb-1">
              <v-img
                src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_22.png"
                alt="180度可動式モニターで自分撮りが簡単"
                max-width="346"
                height="auto"
              />
            </div>
            <p>
              人物がフレームアウトしてしまったり、表情が気に入らなかったり、撮影するのが難しい自分撮りも、180度可動式のモニターを使えば、アングルや構図、表情などをモニター上で確認しながら撮影できます。
            </p>
            <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_23.png" max-width="359" height="auto"></v-img>
          </v-col>
        </v-row>

        <!-- Premium【05】 -->
        <div id="cnt_05" class="mt-6 mb-4">
          <v-img
            src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_24.png"
            alt="【Premium 05】たっぷり撮れる電池長持ちスタミナ性能"
            max-width="730"
            max-height="50"
          />
        </div>
        <v-row class="txtArea" no-gutters>
          <v-col cols="12" sm="6">
            <div class="mb-1">
              <v-img
                src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_25.png"
                alt="旅行中やイベントでもバッテリーを気にせず撮影できる"
                max-width="283"
                height="auto"
              />
            </div>
            <p>
              1回の充電でWX500は約400枚（＊1）、HX90Vは約390枚（＊1＊2）撮影できます。旅行中や長時間のイベントなど、こまめに充電することができないシーンでも、バッテリー残量を気にすることなく、大切な思い出をたっぷりと残せます。
            </p>
            <p class="mt-1 caption kome_indent">
              ＊1
              測定条件：液晶画面をON、ズームをW側T側それぞれ交互に端点まで移動を繰り返し、2回に1回フラッシュ発光、10回に1回電源をON/OFFして、30秒ごとに1回撮影
            </p>
            <p class="mt-1 caption kome_indent">＊2 液晶モニター使用時。ファインダー使用時は約360枚</p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_26.png" max-width="359" height="auto" class="mx-auto"></v-img>
          </v-col>
        </v-row>
        <v-container class="pa-0 mt-4 dot-line">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img
                src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_27.png"
                alt="HX90V「NEW」有機ELファインダーを搭載。本格的な撮影を楽しめる光学30倍のフラッグシップ"
                max-width="350"
                height="auto"
                class="mx-auto"
              ></v-img>
              <router-link to="/ec/pd/4548736012578">
                <v-img
                  src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_28.png"
                  alt="デジタルスチルカメラ DSC-HX90V 「購入はこちら」"
                  max-width="322"
                  height="auto"
                  class="mx-auto mt-5"
                ></v-img>
              </router-link>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_29.png"
                alt="WX500「NEW」新開発のZEISSバリオ・ゾナーT＊レンズを採用、世界最小（＊）の光学30倍ハイズーム"
                max-width="350"
                height="auto"
                class="mx-auto"
              ></v-img>
              <router-link
                to="/ec/list?narrow18=0&keyword=ソニー%20Cyber-shot%20DSC-WX500%20&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=ソニー%20Cyber-shot%20DSC-WX500%20&x=0&y=0"
              >
                <v-img
                  src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_30.png"
                  alt="デジタルスチルカメラ DSC-WX500 「購入はこちら」カラー：（B）ブラック、（R）レッド、（W）ホワイト"
                  max-width="351"
                  height="auto"
                  class="mx-auto mt-5"
                ></v-img>
              </router-link>
              <p class="mt-1 caption kome_indent-2">※ 30倍光学ズームレンズ搭載のコンパクトデジタルカメラにおいて。2015年5月19日広報発表時点（ソニー調べ）</p>
            </v-col>
          </v-row>
        </v-container>
        <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_31.png" alt="比較表" max-width="730" max-height="756" class="mt-4" />
        <p class="mt-1 caption">
          ＊1 CIPA準拠 ＊2 光学ズーム含むワイド端からのズーム倍率 ＊3 静止画撮影時（アスペクト比4:3時）の35mmフィルム換算の数値です ＊4 電子式手ブレ補正併用 ＊5
          推奨露光指数 ＊6 ISO6400以上で、全画素超解像技術および重ね合わせ連写を使って実現しています ＊7
          液晶画面をON、ズームをW側T側それぞれ交互に端点まで移動を繰り返し、2回に1回フラッシュ発光、10回に1回電源をON/OFFして、30秒ごとに1回撮影
        </p>

        <!-- オススメのアクセサリー -->
        <div class="mt-6 mb-4">
          <v-img src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_32.png" alt="オススメのアクセサリー" max-width="730" max-height="35" />
        </div>
        <div :class="i === 1 ? 'dot-line' : ''" v-for="(accessory, i) in accessoryList" :key="i">
          <v-img :src="accessory.titleImage" :alt="accessory.titleImageAlt" :max-width="i === 0 ? '436' : '471'" height="auto"></v-img>
          <v-row no-gutters class="mt-2">
            <v-col cols="12" sm="6">
              <router-link :to="accessory.href">
                <v-img :src="accessory.leftImage" :alt="accessory.leftImageAlt" :max-width="i === 0 ? '310' : '300'" height="auto" class="mx-auto"></v-img>
              </router-link>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img :src="accessory.rightImage" :alt="accessory.rightImageAlt" max-width="406" height="auto" class="mx-auto"></v-img>
            </v-col>
          </v-row>
        </div>
        <v-row class="dot-line" no-gutters>
          <v-col cols="12" sm="4" v-for="(item, i) in accessoryList2" :key="i">
            <router-link :to="item.href">
              <v-img :src="item.src" :alt="item.alt" max-width="230" height="auto" class="mx-auto"></v-img>
            </router-link>
          </v-col>
        </v-row>
        <v-img
          src="/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_42.png"
          alt="当社はソニー特約店です。ご購入いただいたソニー製品に添付される保証書には、ソニー特約店としての販売証明を付しますので、ご安心ください。"
          max-width="506"
          height="auto"
          class="mx-auto mt-3"
        ></v-img>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { reactive, toRefs } from '@vue/composition-api';
export default Vue.extend({
  name: 'sony-5074',
  components: {
    breadcrumbs: Breadcrumbs,
  },
  setup: () => {
    document.title = 'ソニー Cyber-shot DSC-HX90V/WX500 | カメラのキタムラネットショップ'
    document.querySelector<any>('meta[name="description"]').setAttribute('content', 'SONY新製品サイバーショットデジカメ。ソニー Cyber-shot DSC-HX90V/WX500手のひらサイズに凝縮された世界最小光学30倍ズームモデル誕生！デジタルカメラはカメラ専門店カメラのキタムラのショッピングサイトにお任せください。')

    const state = reactive({
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'ソニー Cyber-shot DSC-HX90V/WX500',
          disabled: true
        }
      ],
      accessoryList: [
        {
          titleImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_33.png',
          titleImageAlt: 'ファッションに合わせて選べる専用ジャケットケース',
          href: '/ec/list?narrow18=0&keyword=ソニー%20ジャケットケース%20LCJ-HWA&category=&r=&searchbox=1&sort=number20,rank,Score&index=all&path=&q=ソニー%20ジャケットケース%20LCJ-HWA&x=0&y=0',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_34.png',
          leftImageAlt: 'ジャケットケース LCJ-HWA「NEW」「購入はこちら」カラー：（T）ブラウン、（TI）ライトブラウン、（B）ブラック',
          rightImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_35.png',
          rightImageAlt: ''
        },
        {
          titleImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_36.png',
          titleImageAlt: '思い出を撮り逃さないお得で便利なアクセサリーキット',
          href: '/ec/pd/4905524899054',
          leftImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_37.png',
          leftImageAlt: 'バッテリー（NP-BX1）とUSB出力が可能なバッテリーチャージャー（BC-TRX） アクセサリーキット ACC-TRBX 「購入はこちら」',
          rightImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_38.png',
          rightImageAlt: 'こんなとき、予備バッテリーがあれば・・・'
        }
      ],
      accessoryList2: [
        { href: '/ec/pd/4905524948813', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_39.png', alt: 'モニターが見えにくくなる太陽光などの反射を低減 モニター保護シート PCK-LS30「購入はこちら」' },
        { href: '/ec/pd/4901780986446', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_40.png', alt: '旅行などに携帯しやすい軽量・コンパクト設計 三脚 VCT-R100「購入はこちら」' },
        { href: '/ec/list?narrow18=0&keyword=ソニー%20SDHCメモリーカード%20SF-&category=メモリーカード・記録メディア&r=&fmt=json&limit=20&path=メモリーカード・記録メディア&q=ソニー%20SDHCメモリーカード%20SF-&s1%5B%5D=ソニー&s19%5B%5D=1&sort=number20,rank,Score&style=0&index=all', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/camera/feature/sony/hx90vwx500/cybershot_cut_41.png', alt: '撮影データの記録に適したSDXC/SDHC/SDメモリーカード（Class4） 記録メディア〈容量〉64GB/32GB/16GB/8GB/4GB「購入はこちら」' },
      ]
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.w730 {
  max-width: 730px;
  margin: 0 auto;
  p {
    font-size: 14px;
    line-height: 150%;
    color: #333;
  }
  area {
    cursor: pointer;
  }
  .dot-line {
    border-top: #ccc 2px dotted;
    margin-top: 20px !important;
    padding-top: 20px !important;
    clear: both;
  }
  .txtArea {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .kome_indent {
    text-indent: -2em;
    padding-left: 2em;
  }
  .kome_indent-2 {
    text-indent: -1.2em;
    padding-left: 1.2em;
  }
}
</style>
