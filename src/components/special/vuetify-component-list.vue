<!-- vuetifyのコンポーネントの使い方をここに記載しています -->
<template>
  <div class="main-contents-wrap pa-4">
    <!-- v-avatar 円形のコンテナ内にコンテンツを表示する時。 -->
    <subText :textItem="'v-avatar'" />
    <div class="text-center">
      <v-avatar color="primary" size="100"><v-icon dark large>fas fa-acorn</v-icon> </v-avatar>
    </div>

    <!-- v-badge アバターのようなアイコンやテキストをコンテンツに上付きまたは下付きで表示して、情報を明瞭に示したり、特定の要素に注目を集めたい時 -->
    <subText :textItem="'v-badge'" />
    <div class="text-center">
      <v-badge color="info"><v-icon large>fab fa-vuejs</v-icon></v-badge>
    </div>

    <!-- v-bottom navigation  vue-routerと一緒に使用することを意図していますが、valueプロパティを使って、ボタンのアクティブな状態をプログラムで制御することもできます。 v-bottom-navigation では、ボタンにはその_index_のデフォルト値が与えられます。 -->
    <subText :textItem="'v-bottom-navigation'" />
    <v-bottom-navigation v-model="value" color="info">
      <v-btn value="recent">
        <span>Recent</span>

        <v-icon>far fa-alarm-clock</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>

        <v-icon>fas fa-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>

        <v-icon>fas fa-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- v-bottom-sheet アプリケーションでよく使われるアクションの例を下に示します。 -->
    <subText :textItem="'v-bottom-sheet'" />
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset
        ><!-- insetはシートの最大幅を 70% に縮小します。 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on"> 開く </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet"> 閉じる </v-btn>
          <div class="my-3">これは、ボトムシートです</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>

    <!-- v-btn ボタンを表示したいとき(以下のようにプロパティがたくさんあるので適せん使用してください。) -->
    <subText :textItem="'v-btn'" />
    <div class="text-center">
      <v-btn color="info" elevation="6" large>クリックしてください。</v-btn>
      <!-- <v-btn
        color="info"
        elevation="6"
        href="link urlを入れてください"
        target="_blank"
        outlined
        rounded
        dark
        light
        text
        tile
        block
        disabled
        large
        loading
        small
        x-large
        x-small
      >
        クリックしてください。
      </v-btn> -->
    </div>

    <!-- v-card パネルから静的画像まであらゆるものに使用できる汎用性の高いコンポーネントです。
          v-card には v-card-title、v-card-subtitle、v-card-text、v-card-actionsの 4 つの基本コンポーネントがあります。 -->
    <subText :textItem="'v-card'" />
    <v-card elevation="6" class="pa-4" outlined shaped>
      <v-card-title>Card title</v-card-title>
      <v-card-subtitle>Subtitle text</v-card-subtitle>
      <v-card-text>Card text</v-card-text>
      <v-card-actions><v-btn text color="info">action</v-btn></v-card-actions>
    </v-card>

    <!-- v-carousel 数枚の大きなビジュアルコンテンツを表示するために使います。-->
    <subText :textItem="'v-carousel'" />
    <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- v-chip 小さな情報を伝えたい時-->
    <subText :textItem="'v-chip'" />
    <div class="text-center">
      <v-chip filter label link outlined pill close close-icon="fas fa-times" color="info">Chip Component</v-chip>
    </div>

    <!-- v-dialog ダイアログを表示したい時-->
    <subText :textItem="'v-dailog'" />
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="info" dark v-bind="attrs" v-on="on"> ダイアログを表示 </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> プライバシーポリシー </v-card-title>
          <v-card-text> 伝えたい内容をここに記載してください。 </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info" text @click="dialog = false"> OK </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- v-divider 水平線や縦線を引きたいとき-->
    <subText :textItem="'v-divider'" />
    <v-divider></v-divider>

    <!-- v-expansion-panel 大量の情報があり垂直方向のスペースを減らしたい時。-->
    <subText :textItem="'v-expansion-panel'" />
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header> Item </v-expansion-panel-header>
        <v-expansion-panel-content> テキスト内容をここに記述 </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- v-checkbox ユーザーに二値を選択する機能をつけたい時。-->
    <subText :textItem="'v-checkbox'" />
    <v-container class="px-0" fluid>
      <v-checkbox v-model="checkbox" :label="`Checkbox 1: ${checkbox.toString()}`"></v-checkbox>
    </v-container>

    <!-- v-file-input ファイルをインポートしたい時。-->
    <subText :textItem="'v-file-input'" />
    <v-file-input counter show-size truncate-length="15" color="info"></v-file-input>

    <!-- v-form 入力フォームにバリデーションを追加したい時。-->
    <subText :textItem="'v-form'" />
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required color="info"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required color="info"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required color="info"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!--v-overflow-btn ユーザにリストから項目を選択できるようにしたい時-->
    <subText :textItem="'v-overflow-btn'" />
    <v-container id="dropdown-example-3">
      <v-overflow-btn class="my-2" :items="dropdownEdit" label="Overflow Btn w/ counter" item-value="text"></v-overflow-btn>
    </v-container>

    <!--v-radio-btn ラジオボタンを表示したい時-->
    <subText :textItem="'v-radio-btn'" />
    <v-container class="px-0" fluid>
      <v-radio-group v-model="radioGroup">
        <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n" color="info"></v-radio>
      </v-radio-group>
    </v-container>

    <!--v-select リストからユーザーが提供した情報を収集したい時-->
    <subText :textItem="'v-select'" />
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Standard"></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" filled label="Filled style"></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Outlined style" outlined></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Solo field" solo></v-select>
        </v-col>
      </v-row>
    </v-container>

    <!--v-switch オン/オフスイッチみたいな感じにしたい時-->
    <subText :textItem="'v-switch'" />
    <v-container class="px-0" fluid>
      <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`" color="warning"></v-switch>
    </v-container>

    <!--v-textarea 複数行のテキストフィールドで、大量のテキストを扱いたい時-->
    <subText :textItem="'v-textarea'" />
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-textarea name="input-7-1" label="Default style" value="テキスト内容をここに記載" hint="Hint text" color="info"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea solo name="input-7-4" label="Solo textarea" color="info"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea filled name="input-7-4" label="Filled textarea" value="テキスト内容をここに記載" color="info"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea outlined name="input-7-4" label="Outlined textarea" value="テキスト内容をここに記載" color="info"></v-textarea>
        </v-col>
      </v-row>
    </v-container>

    <!--v-textarea ユーザーが入力した情報を収集したい時-->
    <subText :textItem="'v-textarea'" />
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Regular"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Regular" placeholder="Placeholder"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Solo" solo></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Solo" placeholder="Placeholder" solo></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Filled" filled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Filled" placeholder="Placeholder" filled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Outlined" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!--v-hover 任意のコンポーネントの hover 状態を処理したい時-->
    <subText :textItem="'v-hover'" />
    <v-row>
      <v-col cols="12" sm="6">
        <!--open-delayで開始を遅らせてます-->
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto" height="350" max-width="350">
            <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1"> Open Delay (Mouse enter) </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="6">
        <!--close-delayで終了を遅らせてます-->
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="mx-auto" height="350" max-width="350">
            <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1"> Close Delay (Mouse leave) </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!--v-icon アイコンを表示したい時-->
    <subText :textItem="'v-icon'" />
    <div class="text-center">
      <v-icon large color="indigo">fab fa-vuejs</v-icon>
      <!-- <v-icon disabled x-small small dense large x-large color="indigo">fas fa-vuejs</v-icon> -->
    </div>

    <!--v-img 画像を表示したい時-->
    <subText :textItem="'v-img'" />
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <!--v-list 縦にリスト表示したい時-->
    <subText :textItem="'v-list'" />
    <v-card class="mx-auto" max-width="300" tile>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="info">
          <v-list-item v-for="(item, i) in listItems" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <!--v-menu アクティベート要素の位置にメニューを表示したい時-->
    <subText :textItem="'v-menu'" />
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="info" dark v-bind="attrs" v-on="on"> Dropdown </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!--v-overlay アクティベート要素の位置にメニューを表示したい時-->
    <subText :textItem="'v-overlay'" />
    <v-row align="center" justify="center">
      <v-card height="300" width="250">
        <v-row justify="center">
          <v-btn color="success" class="mt-12" @click="overlay = !overlay"> Show Overlay </v-btn>

          <v-overlay :absolute="absolute" :value="overlay">
            <v-btn color="success" @click="overlay = false"> Hide Overlay </v-btn>
          </v-overlay>
        </v-row>
      </v-card>
    </v-row>

    <!--v-pagination ぺジネーションを表示したい時-->
    <subText :textItem="'v-pagination'" />
    <div class="text-center">
      <v-pagination v-model="page" :length="6" color="indigo"></v-pagination>
    </div>

    <!--v-parallax 画像をウィンドウよりも遅くスクロールさせて表示したい時-->
    <subText :textItem="'v-parallax'" />
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

    <!--v-progress-circular progress-circularを表示したい時-->
    <subText :textItem="'v-progress-circular'" />
    <div class="text-center">
      <v-progress-circular :size="50" color="primary" indeterminate class="mx-1"></v-progress-circular>

      <v-progress-circular :width="3" color="red" indeterminate class="mx-1"></v-progress-circular>

      <v-progress-circular :size="70" :width="7" color="purple" indeterminate class="mx-1"></v-progress-circular>

      <v-progress-circular :width="3" color="green" indeterminate class="mx-1"></v-progress-circular>

      <v-progress-circular :size="50" color="amber" indeterminate class="mx-1"></v-progress-circular>
    </div>

    <!--v-rating 星を表示したい時-->
    <subText :textItem="'v-rating'" />
    <div class="text-center">
      <v-rating v-model="rating" icon-label="custom icon label text {0} of {1}" color="yellow"></v-rating>
    </div>

    <!--v-sheet 紙と標高（影）を表示したい時-->
    <subText :textItem="'v-sheet'" />
    <v-sheet color="success" elevation="24" height="250" outlined rounded shaped width="236" class="mx-auto"></v-sheet>

    <!--v-snackbar 一時的で閉じることができる通知を表示したい時-->
    <subText :textItem="'v-snackbar'" />
    <div class="text-center ma-2">
      <v-btn dark @click="snackbar = true"> Open Snackbar </v-btn>
      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </div>

    <!--v-tabs タブを表示させたい時-->
    <subText :textItem="'v-tabs'" />
    <v-tabs>
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>

    <!--v-tooltip ユーザーが要素にカーソルを合わせた場合に情報を伝えたい時-->
    <subText :textItem="'v-tooltip'" />
    <div class="text-center d-flex align-center justify-space-around">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue" dark v-bind="attrs" v-on="on"> Left </v-btn>
        </template>
        <span>Left tooltip</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue" dark v-bind="attrs" v-on="on"> Top </v-btn>
        </template>
        <span>Top tooltip</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue" dark v-bind="attrs" v-on="on"> Bottom </v-btn>
        </template>
        <span>Bottom tooltip</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue" dark v-bind="attrs" v-on="on"> Right </v-btn>
        </template>
        <span>Right tooltip</span>
      </v-tooltip>
    </div>

    <!--v-treeview 大量のネストされたデータを表示したい時-->
    <subText :textItem="'v-treeview'" />
    <v-treeview :items="treeItems"></v-treeview>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import SubText from '@/components/common/special/subtext.vue';
import { reactive, toRefs } from '@vue/composition-api';

export default Vue.extend({
  name: 'vuetify',
  components: {
    subText: SubText,
  },
  setup: () => {
    const state = reactive({
      // v-bottom-navigation用
      value: 'recent',
      // v-bottom-sheet用
      sheet: false,
      // v-carousel用
      model: 0,
      colors: [
        'info',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      // v-dialog用
      dialog: false,
      // v-checkbox用
      checkbox: true,
      // v-form用
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        (v: any) => !!v || '名前が必要です',
        (v: string | any[]) => v.length <= 10 || '名前は10文字未満である必要があります',
      ],
      email: '',
      emailRules: [
        (v: any) => !!v || 'メールが必要です',
        (v: string) => /.+@.+/.test(v) || 'メール形式が違います',
      ],
      // v-overflow-btn用
      dropdownEdit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
      // v-radio用
      radioGroup: 1,
      // v-select用
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      // v-switch用
      switch1: true,
      // v-list用
      selectedItem: 1,
      listItems: [
        { text: 'Real-Time', icon: 'far fa-clock' },
        { text: 'Audience', icon: 'fas fa-user-circle' },
        { text: 'Conversions', icon: 'fas fa-flag' },
      ],
      // v-menu用
      menuItems: [
        { title: 'メニュー１' },
        { title: 'メニュー２' },
        { title: 'メニュー３' },
        { title: 'メニュー４' },
      ],
      // v-overlay用
      absolute: true,
      overlay: false,
      // v-pagination用
      page: 1,
      // v-rating用
      rating: 4,
      // v-snackbar用
      snackbar: false,
      text: `スナックバー`,
      // v-treeview用
      treeItems: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  }

});
</script>


<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>