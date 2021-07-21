import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';
import VueMeta from 'vue-meta';
import VueGtm from 'vue-gtm';
import TopPage from '../views/top-page.vue';
import ProductListPage from '../views/product/product-list-page.vue';
import ProductDetailPage from '../views/product/product-detail-page.vue';
import SpecialSalePage from '../views/special/special-sale-page.vue';
import SpecialNewsPage from '../views/special/special-news-page.vue';
import SpecialPage from '../views/special/special-page.vue';
import NewsListPage from '../views/news/news-list-page.vue';
import NewsDetailPage from '../views/news/news-detail-page.vue';
import HtmlPage from '../views/static/html-page.vue';
import NotFoundPage from '../views/not-found-page.vue';
import AuthService from '@/logic/auth.service';
import { equalsHostname, getLocationRemovedQuery, isDebugMode, isLocalHost, isBot } from '@/logic/utils';
import GtmService from '@/logic/gtm.service';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'top-page',
    meta: { gtm: 'TopPage' },
    component: TopPage
  },
  {
    path: '/ec/list',
    name: 'product-list-page',
    meta: { gtm: 'ProductListPage' },
    component: ProductListPage
  },
  {
    path: '/ec/ct/:code([0-9a-zA-Z/]+)',
    name: 'product-category-page',
    meta: { gtm: 'ProductListPage' },
    component: ProductListPage
  },
  {
    path: '/ec/pd/:id',
    name: 'product-detail-page',
    meta: { gtm: 'ProductDetailPage' },
    component: ProductDetailPage
  },
  {
    path: '/ec/used/:id',
    name: 'product-used-detail-page',
    meta: { gtm: 'ProductDetailPage' },
    component: ProductDetailPage
  },
  {
    path: '/ec/guide/:page',
    name: 'guide-html-page',
    component: HtmlPage
  },
  {
    path: '/ec/sale/:name',
    name: 'special-sale-page',
    meta: { gtm: 'SpecialSalePage' },
    component: SpecialSalePage
  },
  {
    path: '/ec/special/news',
    name: 'special-news-page',
    meta: { gtm: 'SpecialNewsPage' },
    component: SpecialNewsPage
  },
  {
    path: '/ec/special/:page([0-9a-zA-Z/]+)',
    name: 'special-page',
    meta: { gtm: 'SpecialPage' },
    component: SpecialPage
  },
  {
    path: '/ec/news',
    name: 'news-list-page',
    meta: { gtm: 'NewsListPage' },
    component: NewsListPage
  },
  {
    path: '/ec/news/:year',
    name: 'news-list-year-page',
    meta: { gtm: 'NewsListPage' },
    component: NewsListPage
  },
  {
    path: '/ec/news/detail/:id',
    name: 'news-detail-page',
    meta: { gtm: 'NewsDetailPage' },
    component: NewsDetailPage
  },
  {
    path: '*',
    name: 'not-found-page',
    component: NotFoundPage
  },
  {
    path: '/ec/guide/tablet/:page',
    name: 'guide-html-page',
    component: HtmlPage
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    // 画面遷移時にページ上部に移動する
    return { x: 0, y: 0 };
  }
});

// vue-gtm設定
Vue.use(VueGtm, {
  // GTM ID設定
  id: 'GTM-T6TZ94D',
  // プラグイン有効
  enabled: true,
  // デバックモードON
  debug: isDebugMode(),
  // GTMスクリプトロード
  loadScript: true,
  // ルーターと同期
  vueRouter: router
});

/**
 * GTMのトラッキングイベントを発火する
 * ルーティング前に発火させる必要がある
 * @param route ルーティング
 */
const _trackEvent = async (route: Route): Promise<void> => {
  const gtmPageName = route.meta.gtm;
  if (gtmPageName) {
    if (!window.google_tag_manager) {
      // まだGTMの定義がされいない場合、待機する
      await GtmService.waitInitGtm();
    }
    const janCode = route.params.id;
    const netMemberId = Vue.prototype.$store.authorizer.user?.netMemberId || AuthService.getSession();
    const referrer = route.meta?.gtmAdditionalEventData?.gtm?.oldUrl;
    GtmService.trackEvent(gtmPageName, janCode, netMemberId, referrer);
  }
};

// ルーティング前
router.beforeEach(async (to, _, next) => {
  // 全体ローディングを表示にする
  Vue.prototype.$store.loader.routeUnset();

  if (isLocalHost() || equalsHostname(process.env.VUE_APP_SSO_SKIP_HOSTNAME)) {
    /**
     * ローカルホストまたは特定ドメインの場合APIがCORSエラーとなりリダイレクトを繰り返す可能性があるため、
     * SSO対応をスキップする
     */
    console.warn('This page url is localhost or specific domain. So, sso is skip.');

    // GTMイベント
    await _trackEvent(to);

    next();
    return;
  }

  let toUrl = location.origin + to.fullPath;
  let isExecutedSession = AuthService.isExecutedSession();
  AuthService.initLoginStatus();

  // ボットの場合、SSOはスキップする
  const userAgent = window.navigator.userAgent;
  if (!isExecutedSession && isBot(userAgent)) {
    console.warn('User-Agent of Bot was detected. User-Agent:', userAgent);
    AuthService.passSessionExecution();
    isExecutedSession = true;
  }

  // ハッシュ付きURLの場合、Tokenがto.queryで取得できないため、フルパスから取得する
  let nextTo = to;
  let { token } = to.query;
  if (to.hash && to.hash.search('token') !== -1) {
    token = to.hash.split('token')[1].replace('=', '');
    nextTo = {
      path: to.path,
      name: to.name,
      hash: to.hash.split('?')[0],
      query: to.query,
      params: to.params,
      fullPath: to.fullPath.replace('?token=' + token, ''),
      matched: to.matched,
      redirectedFrom: to.redirectedFrom,
      meta: to.meta || {}
    };
  }

  const queryReferer = to.query.r;
  if (queryReferer && isExecutedSession) {
    // GTMにリファラを付与
    nextTo.meta.gtmAdditionalEventData = { gtm: { oldUrl: queryReferer } };
    const nextLocation = getLocationRemovedQuery(nextTo, ['r']);
    next(nextLocation);
  } else if (isExecutedSession) {
    // GTMイベント
    await _trackEvent(to);

    // セッション情報が既にあるため、SSO対応は不要
    next();
  } else if (token) {
    // 引継ぎトークンが渡ってきた場合、セッション情報を取得する
    await AuthService.requestSession(token as string, toUrl);

    // 引継ぎトークン情報を削除する
    // お気に入り登録の際にtokenパラメータを入れた状態にしないため
    const nextLocation = getLocationRemovedQuery(nextTo, ['token', 'status']);
    next(nextLocation);
  } else {
    // リダイレクトによりリファラ情報が消えてしまうことを防ぐためにクエリパラメータに追加する
    const referrer = document.referrer;
    if (!queryReferer && !!referrer) {
      toUrl += to.query && !!Object.keys(to.query).length ? '&' : '?';
      toUrl += `r=${referrer}`;
    }

    // 引継ぎトークンもセッション情報もない場合、トークンを発行する
    // リダイレクトが発生する
    AuthService.createToken(toUrl);
  }
});

// ルーティング後
router.afterEach(async (to) => {
  // 全体ローディングを非表示にする
  Vue.prototype.$store.loader.routeLoaded();

  // GTM用のリファラ情報を削除
  delete to.meta.gtmAdditionalEventData?.gtm?.oldUrl;
});

export default router;
