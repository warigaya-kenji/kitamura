import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#d80b24',
        anchor: '#000000'
      }
    }
  },
  icons: {
    iconfont: 'fa'
  }
});
