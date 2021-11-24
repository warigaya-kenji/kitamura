import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';
import VueMeta from 'vue-meta';
import VueGtm from 'vue-gtm';
import { equalsHostname, getLocationRemovedQuery, isDebugMode, isLocalHost, isBot } from '@/logic/utils';
import MyPageRoutes from './mypage-routes';
import AuthService from '@/logic/auth.service';
import GtmService from '@/logic/gtm.service';
import CanonicalService from '@/logic/canonical.service';

// ページ
import NotFoundPage from '../views/not-found-page.vue';
import TopPage from '../views/top-page.vue';
import HtmlPage from '../views/static/html-page.vue';
import ProductListPage from '../views/product/product-list-page.vue';
import ProductDetailPage from '../views/product/product-detail-page.vue';
import ProductComparePage from '../views/product/product-compare-page.vue';
import SpecialSalePage from '../views/special/special-sale-page.vue';
import SpecialNewsPage from '../views/special/special-news-page.vue';
import SpecialPage from '../views/special/special-page.vue';
import SpecialCameraFramePage from '../views/special/camera/frame-page.vue';
import SpecialCameraAlbumPage from '../views/special/camera/album-page.vue';
import SpecialCameraPhotomountPage from '../views/special/camera/photomount-page.vue';
import SpecialCameraPrinterPage from '../views/special/camera/printer-page.vue';
import SpecialCameraBagFeaturePage from '../views/special/camera/bag-feature-page.vue';
import NewsListPage from '../views/news/news-list-page.vue';
import NewsDetailPage from '../views/news/news-detail-page.vue';
import MyPage from '../views/my-page.vue';
import ReviewListPage from '../views/review/review-list-page.vue';
import ReviewDetailPage from '../views/review/review-detail-page.vue';
import UsedProductCategoryListPage from '../views/product/used-category-list-page.vue';
import GuideMsupportPage from '../views/guide/m-support.vue';
import GuideServiceGuidePage from '../views/guide/service-guide.vue';
import GuideFirstGuidePage from '../views/guide/firstguide.vue';
import GuideRecyclePage from '../views/guide/recycle.vue';
import GuideSetupTelevisionPage from '../views/guide/setup/television.vue';
import GuideSetupRefrigeratorPage from '../views/guide/setup/refrigerator.vue';
import GuideSetupWasherPage from '../views/guide/setup/washer.vue';
import GuideSetupAirConditionerPage from '../views/guide/setup/air-conditioner.vue';
import GuideSetupAirConditionerFaqPage from '../views/guide/setup/air-conditioner-faq.vue';
import GuideSetupAirConditionerOptionPage from '../views/guide/setup/air-conditioner-option.vue';
import GuideSyuuriPage from '../views/guide/syuuri.vue';
import GuideSyuuriOnlinePage from '../views/guide/syuuri/online.vue';
import GuideSyuuriTenpoPage from '../views/guide/syuuri/tenpo.vue';
import GuideCreditCardPage from '../views/guide/credit_card.vue';
import GuideFaqTokutokukoukanPage from '../views/guide/faq_tokutokukoukan.vue';
import GuideHoshouPage from '../views/guide/hoshou.vue';
import GuideShiharaiPage from '../views/guide/shiharai.vue';
import GuideShitadoriPage from '../views/guide/shitadori.vue';
import GuideScredit01Page from '../views/guide/s_credit_01.vue';
import GuideSyuuriOnlineQandAPage from '../views/guide/syuuri/online/syuuriQ&A.vue';
import GuideSyuuriTenpoQandAPage from '../views/guide/syuuri/tenpo/syuuriQ&A.vue';
import GuideSyuuriSyouhinQandAPage from '../views/guide/syuuri/syouhinQ&A.vue';
import GuideRiyouKaiinPage from '../views/guide/riyou_kaiin.vue';
import GuideRiyouKaiinkakakuPage from '../views/guide/riyou_kaiinkakaku.vue';
import Guide3DsecurePage from '../views/guide/3Dsecure.vue';

// 遅延ローディング
const CartListPage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/cart-list-page.vue');
const OrderPrecheckPage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/order-precheck-page.vue');
const OrderPage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/order-page.vue');
const OrderCompletePage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/order-complete-page.vue');
const ShoppingCreditCompletePage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/shopping-credit-complete-page.vue');
const OrderConfirmPage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/order-confirm-page.vue');
const OrderErrorPage = () => import(/* webpackChunkName: "Cart" */ '../views/cart/order-error-page.vue');

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
    path: '/ec/ct/used/list',
    name: 'used-category-list-page',
    meta: { gtm: 'UsedProductCategoryListPage' },
    component: UsedProductCategoryListPage
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
    path: '/ec/pd/compareproducts',
    name: 'product-compare-page',
    meta: { gtm: 'ProductComparePage' },
    component: ProductComparePage
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
    path: '/ec/review/:janCode',
    name: 'review-list-page',
    meta: { gtm: 'ReviewListPage' },
    component: ReviewListPage
  },
  {
    path: '/ec/review/:janCode/:reviewId',
    name: 'review-detail-page',
    meta: { gtm: 'ReviewDetailPage' },
    component: ReviewDetailPage
  },
  {
    path: '/ec/guide/recycle',
    name: 'guide-recycle-page',
    meta: { gtm: 'GuidePage' },
    component: GuideRecyclePage
  },
  {
    path: '/ec/guide/firstguide',
    name: 'guide-first-guide-page',
    meta: { gtm: 'GuidePage' },
    component: GuideFirstGuidePage
  },
  {
    path: '/ec/guide/service-guide',
    name: 'guide-service-guide-page',
    meta: { gtm: 'GuidePage' },
    component: GuideServiceGuidePage
  },
  {
    path: '/ec/guide/m_support',
    name: 'guide-m-support-page',
    meta: { gtm: 'GuidePage' },
    component: GuideMsupportPage
  },
  {
    path: '/ec/guide/setup/television',
    name: 'guide-setup-television-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSetupTelevisionPage
  },
  {
    path: '/ec/guide/setup/refrigerator',
    name: 'guide-setup-refrigerator-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSetupRefrigeratorPage
  },
  {
    path: '/ec/guide/setup/washer',
    name: 'guide-setup-washer-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSetupWasherPage
  },
  {
    path: '/ec/guide/setup/air-conditioner',
    name: 'guide-setup-air-conditioner-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSetupAirConditionerPage
  },
  {
    path: '/ec/guide/setup/air-conditioner-faq',
    name: 'guide-setup-air-conditioner-faq-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSetupAirConditionerFaqPage
  },
  {
    path: '/ec/guide/setup/air-conditioner-option',
    name: 'guide-setup-air-conditioner-option-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSetupAirConditionerOptionPage
  },
  {
    path: '/ec/guide/syuuri',
    name: 'guide-syuuri-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSyuuriPage
  },
  {
    path: '/ec/guide/syuuri/online',
    name: 'guide-syuuri-online-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSyuuriOnlinePage
  },
  {
    path: '/ec/guide/syuuri/tenpo',
    name: 'guide-syuuri-tenpo-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSyuuriTenpoPage
  },
  {
    path: '/ec/guide/credit_card',
    name: 'guide-credit-card-page',
    meta: { gtm: 'GuidePage' },
    component: GuideCreditCardPage
  },
  {
    path: '/ec/guide/faq_tokutokukoukan',
    name: 'guide-faq-tokutokukoukan-page',
    meta: { gtm: 'GuidePage' },
    component: GuideFaqTokutokukoukanPage
  },
  {
    path: '/ec/guide/hoshou',
    name: 'guide-hoshou-page',
    meta: { gtm: 'GuidePage' },
    component: GuideHoshouPage
  },
  {
    path: '/ec/guide/shiharai',
    name: 'guide-shiharai-page',
    meta: { gtm: 'GuidePage' },
    component: GuideShiharaiPage
  },
  {
    path: '/ec/guide/shitadori',
    name: 'guide-shitadori-page',
    meta: { gtm: 'GuidePage' },
    component: GuideShitadoriPage
  },
  {
    path: '/ec/guide/s_credit_01',
    name: 'guide-s-credit-01-page',
    meta: { gtm: 'GuidePage' },
    component: GuideScredit01Page
  },
  {
    path: '/ec/guide/syuuri/online/syuuriQ&A',
    name: 'guide-syuuri-online-syuuriQ&A-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSyuuriOnlineQandAPage
  },
  {
    path: '/ec/guide/syuuri/tenpo/syuuriQ&A',
    name: 'guide-syuuri-tenpo-syuuriQ&A-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSyuuriTenpoQandAPage
  },
  {
    path: '/ec/guide/syuuri/syouhinQ&A',
    name: 'guide-syuuri-syouhinQ&A-page',
    meta: { gtm: 'GuidePage' },
    component: GuideSyuuriSyouhinQandAPage
  },
  {
    path: '/ec/guide/riyou_kaiin',
    name: 'guide-riyou-kaiin-page',
    meta: { gtm: 'GuidePage' },
    component: GuideRiyouKaiinPage
  },
  {
    path: '/ec/guide/riyou_kaiinkakaku',
    name: 'guide-riyou_kaiinkakaku-page',
    meta: { gtm: 'GuidePage' },
    component: GuideRiyouKaiinkakakuPage
  },
  {
    path: '/ec/guide/3Dsecure',
    name: 'guide-3Dsecure-page',
    meta: { gtm: 'GuidePage' },
    component: Guide3DsecurePage
  },
  {
    path: '/ec/guide/:page',
    name: 'guide-html-page',
    meta: { gtm: 'GuidePage' },
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
    path: '/ec/special/camera/frame/:id',
    name: 'camera-frame-page',
    meta: { gtm: 'SpecialCameraFramePage' },
    component: SpecialCameraFramePage
  },
  {
    path: '/ec/special/camera/album/:id',
    name: 'camera-album-page',
    meta: { gtm: 'SpecialCameraAlbumPage' },
    component: SpecialCameraAlbumPage
  },
  {
    path: '/ec/special/camera/photomount/:id',
    name: 'camera-photomount-page',
    meta: { gtm: 'SpecialCameraPhotomountPage' },
    component: SpecialCameraPhotomountPage
  },
  {
    path: '/ec/special/camera/printer/:id',
    name: 'camera-printer-page',
    meta: { gtm: 'SpecialCameraPrinterPage' },
    component: SpecialCameraPrinterPage
  },
  {
    path: '/ec/special/camera/bag/feature/:id',
    name: 'camera-bag-feature-page',
    meta: { gtm: 'SpecialCameraBagFeaturePage' },
    component: SpecialCameraBagFeaturePage
  },
  {
    path: '/ec/special/*',
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
    path: '/ec/mypage',
    component: MyPage,
    children: [...MyPageRoutes]
  },
  {
    path: '/ec/cart',
    name: 'cart-list-page',
    meta: {
      gtm: 'CartListPage',
      showTabMenu: false,
      showSearchMenu: false
    },
    component: CartListPage
  },
  {
    path: '/ec/order',
    name: 'order-page',
    meta: {
      gtm: 'OrderPage',
      simpleHeader: true,
      simpleFooter: true
    },
    component: OrderPage
  },
  {
    // order-pageと同じpathだが、ルーティング設定で切り替わる
    path: '/ec/order',
    name: 'order-precheck-page',
    meta: {
      gtm: 'OrderPrecheckPage',
      simpleHeader: true,
      simpleFooter: true
    },
    component: OrderPrecheckPage
  },
  {
    // order-pageと同じpathだが、ルーティング設定で切り替わる
    path: '/ec/order',
    name: 'order-confirm-page',
    meta: {
      gtm: 'OrderConfirmPage',
      simpleHeader: true,
      simpleFooter: true
    },
    component: OrderConfirmPage
  },
  {
    path: '/ec/orderComp',
    name: 'order-complete-page',
    meta: { gtm: 'OrderCompletePage' },
    component: OrderCompletePage
  },
  {
    path: '/ec/orderError',
    name: 'order-error-page',
    meta: { gtm: 'OrderErrorPage' },
    component: OrderErrorPage
  },
  {
    path: '/ec/orderShoppingCredit',
    name: 'order-shopping-credit-page',
    meta: { gtm: 'orderShoppingCredit' },
    component: ShoppingCreditCompletePage
  },
  {
    path: '*',
    name: 'not-found-page',
    component: NotFoundPage
  },
  {
    path: '/ec/guide/tablet/:page',
    name: 'guide-tablet-html-page',
    meta: { gtm: 'GuidePage' },
    component: HtmlPage
  }
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
    GtmService.trackEventForGa(gtmPageName, janCode, netMemberId, referrer);
  }
};

// ルーティング前
router.beforeEach(async (to, from, next) => {
  // 全体ローディングを表示にする
  Vue.prototype.$store.loader.routeUnset();

  // headタグを初期化する
  CanonicalService.clear();

  // 比較ページ用
  if (to.name === 'product-compare-page' && to.query.prd) {
    // JanCodeソート
    const janCodes = to.query.prd as string;
    const sortJancodes = janCodes
      .split('-')
      .sort()
      .join('-');

    if (janCodes !== sortJancodes) {
      next({ name: 'product-compare-page', query: { prd: sortJancodes } });
      return;
    }
  }
  // レジページはクエリパラメータによって遷移先を変更する
  else if (to.name === 'order-page' && to.query.step === 'precheck') {
    next({ name: 'order-precheck-page', query: to.query });
    return;
  } else if (to.name === 'order-page' && to.query.step === 'confirm') {
    next({ name: 'order-confirm-page', query: to.query });
    return;
  } else if (to.name === 'order-precheck-page' && to.query.step !== 'precheck') {
    to.query.step = 'precheck';
    next({ name: 'order-precheck-page', query: to.query });
    return;
  } else if (to.name === 'order-confirm-page' && to.query.step !== 'confirm') {
    to.query.step = 'confirm';
    next({ name: 'order-confirm-page', query: to.query });
    return;
  }

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

  let nextTo = to;
  let token: string | null = null;
  const queryToken = to.query.token;

  // クエリパラメータにTokenが複数ある場合、一番最後の値を取得する
  if (queryToken && Array.isArray(queryToken)) {
    token = queryToken.length ? queryToken[queryToken.length - 1] : null;
  } else {
    token = queryToken;
  }

  // ハッシュ付きURLの場合、Tokenがto.queryで取得できないため、フルパスから取得する
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
    await AuthService.requestSession(token, toUrl);

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
