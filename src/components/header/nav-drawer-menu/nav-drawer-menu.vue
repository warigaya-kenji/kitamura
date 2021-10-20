<template>
  <div>
    <div class="nav-drawer-container" v-if="!selectSubMenu">
      <v-list dense class="nav-drawer-header">
        <v-list-item>
          <v-list-item-title>{{ userName }}さま</v-list-item-title>
        </v-list-item>
        <div class="nav-drawer-header-contents">
          <v-list-item link @click="checkLoginStatus" v-if="!isLoggedIn">
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item>
          <v-list-item link exact to="/ec/mypage" v-if="isLoggedIn">
            <v-list-item-title>マイページ</v-list-item-title>
          </v-list-item>
          <v-list-item link exact to="/ec/mypage/favorite/list">
            <v-list-item-title>お気に入り</v-list-item-title>
          </v-list-item>
          <v-list-item link href="https://member.kitamura.jp/account/regist/basic/input" target="_blank" v-if="!isLoggedIn">
            <v-list-item-title>新規会員登録</v-list-item-title>
          </v-list-item>
          <v-list-item link exact to="/ec/mypage/odr/list" v-if="isLoggedIn">
            <v-list-item-title>注文履歴</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>

      <v-list dense>
        <v-list-item @click="selectSubMenu = buy">
          <v-list-item-title>買いたい</v-list-item-title>
          <v-icon>fas fa-chevron-right</v-icon>
        </v-list-item>
        <v-list-item @click="selectSubMenu = sell">
          <v-list-item-title>売りたい</v-list-item-title>
          <v-icon>fas fa-chevron-right</v-icon>
        </v-list-item>
        <v-list-item @click="selectSubMenu = service">
          <v-list-item-title>サービスメニュー</v-list-item-title>
          <v-icon>fas fa-chevron-right</v-icon>
        </v-list-item>
        <v-list-item link href="/sitemap/riyou_index.html">
          <v-list-item-title>ご利用案内</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/sitemap/otoiawase_index.html">
          <v-list-item-title>お問い合わせ</v-list-item-title>
        </v-list-item>
        <v-list-item link href="https://ecfaq.kitamura.jp/s/">
          <v-list-item-title>よくある質問</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/sitemap/kiyaku_index.html">
          <v-list-item-title>特定商取引法に基づく表示</v-list-item-title>
        </v-list-item>
        <v-list-item @click="selectSubMenu = group">
          <v-list-item-title>グループサイト</v-list-item-title>
          <v-icon>fas fa-chevron-right</v-icon>
        </v-list-item>
      </v-list>
    </div>

    <div v-if="selectSubMenu">
      <nav-drawer-sub-menu :selectSubMenu="selectSubMenu" @back-to-main-event="selectSubMenu = ''" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, toRefs, ref, watch } from '@vue/composition-api';
import NavDrawerSubMenu from './nav-drawer-sub-menu.vue';
import { APPLIANCES_CATEGORY_LIST, CAMERA_CATEGORY_LIST } from '@/constants/categories';
import AuthService from '@/logic/auth.service';

const CAMERA_CATEGORY_MIN_SIZE = 4;
const APPLIANCES_CATEGORY_MIN_SIZE = 3;

export default Vue.extend({
  name: 'nav-drawer-menu',
  components: {
    'nav-drawer-sub-menu': NavDrawerSubMenu
  },
  setup: (_, context) => {
    const state = reactive({
      selectSubMenu: '',
      buy: [
        {
          plus: true,
          items: [
            { text: '買いたい', type: 'title', linkType: 'internal', url: '/' },
            { text: 'カメラ', type: 'main' }
          ],
          itemsPlus: ref<{ [key: string]: string }[]>([])
        },
        {
          plus: true,
          items: [{ text: '家電', type: 'main' }],
          itemsPlus: ref<{ [key: string]: string }[]>([])
        }
      ],
      sell: [
        {
          plus: false,
          items: [
            {
              text: '売りたい',
              type: 'title',
              linkType: 'external',
              url: process.env.VUE_APP_NET_CHUKO_URL
            },
            {
              text: '無料査定',
              type: 'main',
              linkType: 'external',
              url: process.env.VUE_APP_NET_CHUKO_URL + '#quick-assessment-link'
            },
            {
              text: '店舗で買取り',
              type: 'main',
              linkType: 'external',
              url: 'https://www.kitamura.jp/map/'
            },
            {
              text: '宅配で買取り',
              type: 'main',
              linkType: 'external',
              url: process.env.VUE_APP_NET_CHUKO_URL + 'sell/direct/about.do#a06'
            },
            {
              text: '出張で買取り',
              type: 'main',
              linkType: 'external',
              url: process.env.VUE_APP_NET_CHUKO_URL + 'static/contents/page/purchase-syutyou.html'
            }
          ]
        }
      ],
      service: [
        {
          plus: false,
          items: [
            { text: 'サービスメニュー', type: 'title' },
            {
              text: '買取・下取り',
              type: 'main',
              linkType: 'external',
              url: '/special/sale-fair/page/sell/'
            },
            {
              text: 'なんでも下取り',
              type: 'main',
              linkType: 'external',
              url: '/sitemap/riyou_shitadori_index.html'
            },
            {
              text: 'お支払い方法',
              type: 'main',
              linkType: 'external',
              url: '/sitemap/riyou_shiharai_index.html'
            },
            {
              text: '5年間保証',
              type: 'main',
              linkType: 'external',
              url: '/sitemap/riyou_hoshou_index.html'
            },
            {
              text: '修理のご案内',
              type: 'main',
              linkType: 'external',
              url: '/files/syuuri/index.html'
            },
            {
              text: '送料・手数料',
              type: 'main',
              linkType: 'external',
              url: '/sitemap/riyou_souryou_index.html'
            },
            {
              text: '返品・交換',
              type: 'main',
              linkType: 'external',
              url: '/sitemap/riyou_henpin_index.html'
            },
            {
              text: '商品お届け・納期',
              type: 'main',
              linkType: 'external',
              url: '/sitemap/riyou_otodoke_index.html'
            }
          ]
        }
      ],
      group: [
        {
          plus: false,
          items: [
            { text: 'グループサイト', type: 'title' },
            {
              text: 'プリントサービス',
              type: 'main',
              linkType: 'external',
              url: 'http://www.kitamura-print.com'
            },
            {
              text: 'フォトブック',
              type: 'main',
              linkType: 'external',
              url: 'http://photobook.kitamura.jp/'
            },
            {
              text: 'アップル製品修理サービス',
              type: 'main',
              linkType: 'external',
              url: 'http://www.kitamura.jp/service/apple/'
            },
            {
              text: 'スタジオマリオ',
              type: 'main',
              linkType: 'external',
              url: 'http://www.studio-mario.jp'
            },
            {
              text: '店舗検索',
              type: 'main',
              linkType: 'external',
              url: 'http://sss.kitamura.jp/'
            }
          ]
        }
      ],
      isLoggedIn: false,
      userName: 'ようこそ（ゲスト）',
      logoutUrl: ref<string>()
    });

    // ログアウトURL
    const currentUrl = location.origin + context.root.$route.fullPath;
    const urlParams = new URLSearchParams({
      s: process.env.VUE_APP_SITE_ID,
      u: currentUrl
    });
    const logoutUrl = process.env.VUE_APP_API_MEMBER_BASE_URL + 'sso/logout.html?' + urlParams.toString();
    state.logoutUrl = logoutUrl;

    // 買いたい＞カメラのサブ項目を設定
    const cameraSubItems = CAMERA_CATEGORY_LIST.map((category) => ({
      text: category.text,
      url: category.url,
      type: 'sub',
      linkType: category.linkType || 'internal'
    }));
    state.buy[0].items.push(...cameraSubItems.slice(0, CAMERA_CATEGORY_MIN_SIZE));
    state.buy[0].itemsPlus = cameraSubItems.slice(CAMERA_CATEGORY_MIN_SIZE);

    // 買いたい＞家電のサブ項目を設定
    const appliancesSubItems = APPLIANCES_CATEGORY_LIST.map((category) => ({
      text: category.text,
      url: category.url,
      type: 'sub',
      linkType: 'internal'
    }));
    state.buy[1].items.push(...appliancesSubItems.slice(0, APPLIANCES_CATEGORY_MIN_SIZE));
    state.buy[1].itemsPlus = appliancesSubItems.slice(APPLIANCES_CATEGORY_MIN_SIZE);

    /**
     * ログイン状態確認
     */
    const { authorizer } = context.root.$store;
    watch(
      () => [authorizer.isLoggedIn, authorizer.user],
      ([isLoggedIn, user]) => {
        state.isLoggedIn = isLoggedIn;
        if (user?.lastName && user?.firstName) {
          state.userName = user.lastName + ' ' + user.firstName;
        } else {
          state.userName = 'ようこそ（ゲスト）';
        }
      }
    );

    /**
     * ログインダイアログを表示する際に、すでにログイン状態であるか確認する
     * この実行は、リダイレクトが発生する
     */
    const checkLoginStatus = (): void => {
      AuthService.checkLoginStatus().then((isLoggined) => {
        if (!isLoggined) {
          authorizer.openLoginMenu();
        }
        context.emit('on-close-menu');
      });
    };

    return {
      ...toRefs(state),
      checkLoginStatus
    };
  }
});
</script>

<style scoped>
.nav-drawer-container .v-list {
  padding: 0;
}

.v-list:not(.nav-drawer-header) .v-list-item {
  border-bottom: 1px solid #ddd;
}

.v-list .v-list-item {
  height: 60px;
}

.nav-drawer-header {
  border-bottom: 10px solid #ddd;
}

.nav-drawer-header-contents .v-list-item {
  padding-left: 26px;
  height: 40px;
}
</style>
