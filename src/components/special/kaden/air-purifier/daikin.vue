<template>
  <v-app>
    <div class="air-purifier-daikin">
      <div class="main-contents-wrap">
        <!-- ↓ パンくず -->
        <breadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="text-h6 font-weight-normal">夏のお悩み、空気清浄機で解決！</h1>
        <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_01.png" max-width="950" max-height="609" alt="夏のお悩み、空気清浄機で解決！"></v-img>

        <!--=========== セクション(1) ===========-->
        <v-row class="mt-15 tx-18">
          <v-col cols="12" sm="6" class="relative">
            <v-img class="dani" src="/ec/images2/special/kaden/air-purifier/daikin/parts_02.png" max-width="110" max-height="110"></v-img>
            <p class="midashi01">そのアレルギー、ダニのせいかも！？</p>
            <p>実は、アトピー性皮膚炎やアレルギー性鼻炎、<br />ぜんそくの多くは、ダニが原因と言われています。</p>
            <p class="midashi01">ダニアレルゲンの最盛期は夏～秋</p>
            <p>
              アレルギーの原因となるのはダニの死がい。<br />
              ダニが増殖するのは夏場ですが、秋には死がいとなってアレルギーを引き起こします。<br />
              夏～秋に症状が悪化する方は、ダニが原因かもしれません。
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img class="mx-auto" src="/ec/images2/special/kaden/air-purifier/daikin/parts_03.png" max-width="437" max-height="310"></v-img>
          </v-col>
        </v-row>
        <!--=========== /セクション(1) ===========-->
        <!--=========== セクション(2) ===========-->
        <div class="pa-7 sc-02">
          <v-img
            class="mx-auto"
            src="/ec/images2/special/kaden/air-purifier/daikin/parts_04.png"
            max-width="890"
            max-height="264"
            alt="ダニの死がいを吸い取ってアレルゲンを除去。ダニは高温多湿を好むので、湿度をコントロールすることも効果的です。"
          ></v-img>
          <v-container v-for="(airCleaner, index) in airCleanerList" :key="index" class="mt-2 mt-sm-15 pa-0 tx-16">
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <a :href="airCleaner.href">
                  <v-img class="mx-auto mt-6" :src="airCleaner.productImage" max-width="266" max-height="266"></v-img>
                </a>
              </v-col>
              <v-col cols="12" sm="8">
                <v-sheet color="#ffffff" class="px-4 py-6 mt-2">
                  <v-row no-gutters>
                    <v-col cols="12" sm="6">
                      <p>{{ airCleaner.txt }}</p>
                      <v-divider class="mb-2"></v-divider>
                      <a :href="airCleaner.href">
                        {{ airCleaner.name }}
                      </a>
                      <p class="mt-4">価格：-円(税込)</p>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img class="mx-auto" :src="airCleaner.src" max-width="297" height="auto"></v-img>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
          <v-sheet class="mt-15 relative pa-4 tx-18" color="#ffffff">
            <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_08.png" max-width="46" max-height="60" class="pin"></v-img>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_07.png" max-width="437" max-height="242"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="mt-4">
                  <span class="font-weight-bold mb-3">ストリーマとは</span><br />フィルターでキャッチした有害物質を分解して無害にするダイキン独自の技術です。
                </p>
                <p>
                  <span class="font-weight-bold mb-3">花粉にも強い</span
                  ><br />花粉を本当に撃退するには内部を破壊することが必要。<br />花粉の芯を分解できるのはストリーマだけです。
                </p>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
        <!--=========== /セクション(2) ===========-->
        <!--=========== セクション(3) ===========-->
        <div class="mt-15 mb-4">
          <v-img
            src="/ec/images2/special/kaden/air-purifier/daikin/parts_09.png"
            max-width="890"
            max-height="240"
            alt="梅雨のジメジメ。部屋干し臭が気になるし、湿気でカビが･･･"
            class="mx-auto"
          ></v-img>
          <v-row class="tx-18">
            <v-col cols="12" sm="6">
              <p class="midashi01">イヤなニオイの原因は、雑菌</p>
              <p>生乾きの水分を含んだ状態だと菌が繁殖しやすくなります。 速く乾かせば、菌の数を抑えられニオイ対策に。</p>
              <p class="midashi01">部屋干しはカビの繁殖の原因にも</p>
              <p>
                カビは高温多湿の環境を好むので、部屋干しで湿度が上がると、カビ発生の原因に。<br />
                温度も高くなっているこの季節は、特に要注意です。
              </p>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img class="mx-auto" src="/ec/images2/special/kaden/air-purifier/daikin/parts_10.png" max-width="437" max-height="304"></v-img>
              <p class="caption">
                ＜試験条件＞ガーゼ ( 約5㎝×5㎝、12枚折 )
                に試験菌液1mlを滴下したものを各条件で乾燥後、経時的に回収し、洗い出して寒天培地で培養。コロニー数を測定することにより生菌数とした。( 大腸菌 )<br />ダイキン工業調べ
              </p>
            </v-col>
          </v-row>
        </div>
        <!--=========== /セクション(3) ===========-->
        <!--=========== セクション(4) ===========-->
        <div class="pa-7 sc-02">
          <v-img
            class="mx-auto"
            src="/ec/images2/special/kaden/air-purifier/daikin/parts_11.png"
            max-width="890"
            max-height="245"
            alt="ランドリー乾燥モードを使って、ニオイの原因菌を抑えながら乾燥しましょう。"
          ></v-img>
          <v-container class="mt-2 mt-sm-15 pa-0 tx-16">
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <a href="/ec/pd/4548848519491">
                  <v-img class="mx-auto mt-6" src="/ec/images2/special/kaden/air-purifier/daikin/mcz70t.png" max-width="266" max-height="266"></v-img>
                </a>
              </v-col>
              <v-col cols="12" sm="8">
                <v-sheet color="#ffffff" class="px-4 py-6 mt-2">
                  <v-row no-gutters>
                    <v-col cols="12" sm="6">
                      <p>除湿はもちろん、清浄機能でニオイの原因菌も低減</p>
                      <v-divider class="mb-2"></v-divider>
                      <a href="/ec/pd/4548848519491"> ダイキン 除加湿ストリーマ 空気清浄機 クリアフォースZ MCZ70T </a>
                      <p class="mt-4">価格：-円(税込)</p>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img class="mx-auto" src="/ec/images2/special/kaden/air-purifier/daikin/parts_12.png" max-width="235" max-height="188"></v-img>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
          <v-sheet class="mt-15 relative pa-4 tx-18" color="#ffffff">
            <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_08.png" max-width="46" max-height="60" class="pin"></v-img>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_07.png" max-width="437" max-height="242"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="mt-4">
                  <span class="font-weight-bold mb-3">ストリーマで脱臭力が持続</span><br />脱臭フィルターについたニオイを分解し、能力を再生します。
                </p>
                <p><span class="font-weight-bold mb-3">ストリーマでカビを分解</span><br />空気清浄機能でカビを吸い取り分解できるので、カビ抑制にも効果的。</p>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
        <!--=========== /セクション(4) ===========-->
        <!--=========== セクション(5) ===========-->
        <div class="mt-15">
          <v-img
            src="/ec/images2/special/kaden/air-purifier/daikin/parts_13.png"
            max-width="890"
            max-height="250"
            alt="暑い日に、部屋を閉め切ったまま出かけたら生ゴミ臭が充満･･･"
          ></v-img>
          <p class="tx-18">
            生ゴミ臭は温度が高くなると発生しやすくなります。<br />
            冬場は気にならなかったのに、夏場になるとニオイが気になる...なんてことも
          </p>
        </div>
        <!--=========== /セクション(5) ===========-->
        <!--=========== セクション(6) ===========-->
        <div class="pa-7 sc-02">
          <v-img
            class="mx-auto"
            src="/ec/images2/special/kaden/air-purifier/daikin/parts_14.png"
            max-width="890"
            max-height="245"
            alt="LDKをカバーできる大風量タイプで、しっかりニオイを吸い取りましょう。"
          ></v-img>
          <v-container class="mt-2 mt-sm-15 pa-0 tx-16">
            <v-row no-gutters>
              <v-col cols="12" sm="4">
                <a href="/ec/pd/4548848520855">
                  <v-img class="mx-auto mt-6" src="/ec/images2/special/kaden/air-purifier/daikin/mck70t.png" max-width="266" max-height="266"></v-img>
                </a>
              </v-col>
              <v-col cols="12" sm="8">
                <v-sheet color="#ffffff" class="px-4 py-6 mt-2">
                  <v-row no-gutters>
                    <v-col cols="12" sm="6">
                      <p>生ゴミ臭を吸い取って分解！<br />LDKにもおすすめのパワフルタイプ。</p>
                      <v-divider class="mb-2"></v-divider>
                      <a href="/ec/pd/4548848520855"> ダイキン 加湿ストリーマ 空気清浄機 MCK70T</a>
                      <p class="mt-4">価格：-円(税込)</p>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-img class="mx-auto" src="/ec/images2/special/kaden/air-purifier/daikin/parts_15.png" max-width="297" max-height="236"></v-img>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
          <v-sheet class="mt-15 relative pa-4 tx-18" color="#ffffff">
            <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_08.png" max-width="46" max-height="60" class="pin"></v-img>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_07.png" max-width="437" max-height="242"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="mt-4">
                  <span class="font-weight-bold mb-3">ストリーマで脱臭力が持続</span><br />脱臭フィルターについたニオイを分解し、能力を再生します。
                </p>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
        <!--=========== /セクション(6) ===========-->
        <!--=========== セクション(7) ===========-->
        <div class="mt-7">
          <v-img
            src="/ec/images2/special/kaden/air-purifier/daikin/parts_16.png"
            alt="ダイキンは全てストリーマ付。吸い取るだけじゃなく、分解までできます。"
            max-width="840"
            max-height="200"
          ></v-img>
          <v-row>
            <v-col cols="6" sm="3" v-for="(daikinType, index) in daikinTypeList" :key="index">
              <a :href="daikinType.href">
                <v-img :src="daikinType.src" max-width="170" max-height="220" class="mx-auto"></v-img>
              </a>
            </v-col>
            <v-col cols="12" sm="6" class="mt-7">
              <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_21.png" max-width="437" max-height="220" class="mx-auto"></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="mt-7">
              <v-img src="/ec/images2/special/kaden/air-purifier/daikin/parts_22.png" max-width="340" max-height="220" class="mx-auto"></v-img>
            </v-col>
          </v-row>
        </div>
        <!--=========== /セクション(7) ===========-->
        <!--=========== 関連おすすめ特集 ===========-->
        <p class="mt-15 text-h5 title01">関連おすすめ特集</p>
        <recommendedFeatures :recommendedFeaturesList="recommendedFeaturesList" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs } from '@vue/composition-api';
import Breadcrumbs from '@/components/common/breadcrumbs.vue';
import { noimage } from '@/logic/utils';
import RecommendedFeatures from '@/components/common/special/recommended-features.vue';

export default Vue.extend({
  name: 'air-purifier-daikin',
  components: {
    breadcrumbs: Breadcrumbs,
    recommendedFeatures: RecommendedFeatures,
  },
  setup: () => {
    document.title = '夏のお悩み空気清浄機で解決！ | カメラのキタムラネットショップ';
    document
      .querySelector<any>('meta[name="description"]')
      .setAttribute(
        'content',
        '「ダニ・カビ・湿気」など、夏のお悩み空気清浄機で解決！'
      );
    const state = reactive({
      // パンくず情報
      breadcrumbs: [
        {
          path: 'ネットショップ',
          linkUrl: '/',
          disabled: false
        },
        {
          path: 'セール特集一覧',
          linkUrl: '/ec/special/sale-fair',
          disabled: false
        },
      ],
      airCleanerList: [
        { name: 'ダイキン 加湿ストリーマ 空気清浄機MCK55T', productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/mck55t.png', href: '/ec/pd/4548848520886', txt: 'ストリーマ技術ダニアレルゲンを吸い取るだけじゃなく分解までできる！', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/parts_05.png' },
        { name: 'ダイキン 除加湿ストリーマ 空気清浄機クリアフォースZ MCZ70T', productImage: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/mcz70t.png', href: '/ec/pd/4548848519491', txt: '除湿でダニが繁殖しにくい環境に！もちろんストリーマ付。', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/parts_06.png' },
      ],
      daikinTypeList: [
        { href: '/ec/pd/4548848520855', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/parts_17.png' },
        { href: '/ec/pd/4548848520886', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/parts_18.png' },
        { href: '/ec/pd/4548848519491', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/parts_19.png' },
        { href: '/ec/pd/4548848519514', src: process.env.VUE_APP_NET_SHOP_URL + '/ec/images2/special/kaden/air-purifier/daikin/parts_20.png' },
      ],
      recommendedFeaturesList: [
        {
          href: '/ec/special/kaden/fan-fair',
          img: 'https://shopimg.kitamura.jp/images/banner/4025.jpg',
          alt: 'おすすめ扇風機特集2017'
        },
        {
          href: '/ec/special/kaden/heyabosi',
          img: 'https://shopimg.kitamura.jp/images/banner/4005.jpg',
          alt: 'おすすめ除湿機特集2017'
        },
        {
          href: '/special/sale-fair/',
          img: 'https://shopimg.kitamura.jp/images/banner/3808.gif',
          alt: 'セール・特集一覧'
        }
      ],
    });

    return {
      ...toRefs(state),
      noimage
    };
  }
});
</script>

<style lang="scss" scoped>
.air-purifier-daikin {
  .relative {
    position: relative;
  }
  .dani {
    position: absolute;
    right: -60px;
    top: -20px;
  }
  .pin {
    position: absolute;
    right: 20px;
    top: -20px;
  }
  .midashi01 {
    border-bottom: 2px #005f8d solid;
    color: #005f8d;
    padding: 5px;
  }
  p {
    line-height: 1.4em;
    margin: 0 0 1.25em 0;
    padding: 0;
    text-align: left;
  }
  .tx-16 {
    font-size: 16px !important;
  }
  .tx-18 {
    font-size: 18px !important;
  }
  .sc-02 {
    background: url(/ec/images2/special/kaden/air-purifier/daikin/parts_bg.gif);
  }
  .title01 {
    border-bottom: 1px #666 solid;
    color: #222;
    padding: 10px 0;
  }
}
</style>
