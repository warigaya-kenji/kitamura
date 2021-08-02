// Polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import VueMeta from 'vue-meta';

import App from './main.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import globalStore from './store/global';
import ApiService from './logic/api.service';
import './styles/common.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import VueEasyLightbox from 'vue-easy-lightbox';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;
Vue.prototype.$store = globalStore();
Vue.use(VueMeta);
Vue.use(VueEasyLightbox);
Vue.use(VueClipboard)

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

ApiService.init();

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
