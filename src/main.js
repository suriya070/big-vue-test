import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import FlagIcon from 'vue-flag-icon';
import Vuelidate from 'vuelidate';
import VueSweetalert2 from 'vue-sweetalert2';

import { VueReCaptcha } from 'vue-recaptcha-v3';
import i18n from './plugins/i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import RevampAPI from './services/revampApi';

// scroll plugins
import './plugins/vpshowScroll';

// Bootstrap
Vue.use(BootstrapVue);
Vue.use(FlagIcon);

// Vuelidate for validate form
Vue.use(Vuelidate);

// SweetAlert
const options = {
  confirmButtonColor: '#5e51a1',
};
Vue.use(VueSweetalert2, options);

// Init Revamp API Service
RevampAPI.init(process.env.VUE_APP_REVAMP_API, process.env.VUE_APP_REVAMP_API_TOKEN);

// reCaptcha v3
Vue.use(VueReCaptcha, {
  siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY_V3,
  loaderOptions: {
    autoHideBadge: true,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  data() {
    return {
      revampWebBaseURL: process.env.VUE_APP_REVAMP_WEB,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    scrollToAnchor(hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace(/#/, ''));
        if (element && element.scrollIntoView) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }, 100);
    },
  },
  render: (h) => h(App),
}).$mount('#app');
