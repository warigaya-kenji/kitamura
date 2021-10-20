import { RouteConfig } from 'vue-router';

import TopContents from '@/components/my-page/top-contents.vue';
import FavoriteList from '@/components/my-page/favorite-list.vue';
import OwnedList from '@/components/my-page/owned-list.vue';
import ReviewList from '@/components/my-page/review/review-list.vue';
import ReviewPost from '@/components/my-page/review/review-post.vue';
import ReviewPostCompleted from '@/components/my-page/review/review-post-completed.vue';
import DeliveryTargetList from '@/components/my-page/delivery-target/delivery-target-list.vue';
import CouponList from '@/components/my-page/coupon-list.vue';
import OrderList from '@/components/my-page/order-list/order-list.vue';
import OrderBuyDetail from '@/components/my-page/order-detail/order-buy-detail.vue';
import OrderSellDetail from '@/components/my-page/order-detail/order-sell-detail.vue';
import OrderTradeDetail from '@/components/my-page/order-detail/order-trade-detail.vue';
import OrderTokutokuDetail from '@/components/my-page/order-detail/order-tokutoku-detail.vue';
import NewsList from '@/components/my-page/news-list.vue';
import DeliveryTargetEditor from '@/components/my-page/delivery-target/delivery-target-editor.vue';

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'my-page-top',
    component: TopContents,
    meta: { gtm: 'MyPageTop' }
  },
  {
    path: 'news',
    name: 'my-page-news-list',
    component: NewsList,
    meta: { gtm: 'MyPageNewsList' }
  },
  {
    path: 'odr/list',
    name: 'my-page-order-list',
    component: OrderList,
    meta: { gtm: 'MyPageOrderList' }
  },
  {
    path: 'odr/:orderId',
    name: 'my-page-order-detail',
    component: OrderBuyDetail,
    meta: { gtm: 'MyPageOrderDetail' }
  },
  {
    path: 'odr/sell/:orderId',
    name: 'my-page-order-sell-detail',
    component: OrderSellDetail,
    meta: { gtm: 'MyPageOrderSellDetail' }
  },
  {
    path: 'odr/trade/:orderId',
    name: 'my-page-order-trade-detail',
    component: OrderTradeDetail,
    meta: { gtm: 'MyPageOrderTradeDetail' }
  },
  {
    path: 'odr/tokutoku/:orderId',
    name: 'my-page-order-tokutoku-detail',
    component: OrderTokutokuDetail,
    meta: { gtm: 'MyPageOrderTokutokuDetail' }
  },
  {
    path: 'sell/list',
    name: 'my-page-sell-list',
    meta: { gtm: 'MyPageSellList' }
  },
  {
    path: 'sell/:orderId',
    name: 'my-page-sell-detail',
    meta: { gtm: 'MyPageSellDetail' }
  },
  {
    path: 'favorite/list',
    name: 'my-page-favorite-list',
    component: FavoriteList,
    meta: { gtm: 'MyPageFavoriteList' }
  },
  {
    path: 'owned/list',
    name: 'my-page-owned-list',
    component: OwnedList,
    meta: { gtm: 'MyPageOwnedList' }
  },
  {
    path: 'coupon/list',
    name: 'my-page-coupon-list',
    component: CouponList,
    meta: { gtm: 'MyPageCouponList' }
  },
  {
    path: 'review/list',
    name: 'my-page-review-list',
    component: ReviewList,
    meta: { gtm: 'MyPageReviewList' }
  },
  {
    path: 'review/post/:janCode',
    name: 'my-page-review-post',
    component: ReviewPost,
    meta: { gtm: 'MyPageReviewPost' }
  },
  {
    path: 'review/post/:janCode/completed',
    name: 'my-page-review-post-completed',
    component: ReviewPostCompleted,
    meta: { gtm: 'MyPageReviewPostCompleted' }
  },
  {
    path: 'delivery/list',
    name: 'my-page-delivery-list',
    component: DeliveryTargetList,
    meta: { gtm: 'MyPageDeliveryList' }
  },
  {
    path: 'delivery/entry',
    name: 'my-page-delivery-entry',
    component: DeliveryTargetEditor,
    meta: { gtm: 'MyPageDeliveryEntry' }
  },
  {
    path: 'delivery/:addressId',
    name: 'my-page-delivery-update',
    component: DeliveryTargetEditor,
    meta: { gtm: 'MyPageDeliveryUpdate' }
  }
];

export default routes;
