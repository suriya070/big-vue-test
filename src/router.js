import Vue from 'vue';
import VueRouter from 'vue-router';
import { isMobile } from 'mobile-device-detect';

import Home from './views/app/home/Home.vue';
import MobileHome from './views/mobile/home/Home.vue';

import Registration from './views/app/registration/Registration.vue';
import MobileRegistration from './views/mobile/registration/Registration.vue';

import RegistrationForm from './views/app/registration/RegistrationForm.vue';
import RegistrationSubmitted from './views/app/registration/RegistrationSubmitted.vue';
import MobileRegistrationForm from './views/mobile/registration/RegistrationForm.vue';
import MobileRegistrationSubmitted from './views/mobile/registration/RegistrationSubmitted.vue';

import NotFound from './views/error/NotFound.vue';

Vue.use(VueRouter);

const widthScreen = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const routes = [
  {
    path: '*',
    name: 'page-not-found',
    component: NotFound,
  },
  {
    path: '/',
    name: 'index',
    component: isMobile && widthScreen < 1024 ? MobileHome : Home,
  },
  {
    path: '/registration',
    component: isMobile && widthScreen < 1024 ? MobileRegistration : Registration,
    children: [
      {
        path: '',
        name: 'registration-form',
        component: isMobile && widthScreen < 1024 ? MobileRegistrationForm : RegistrationForm,
      },
      {
        path: 'submitted',
        name: 'registration-submitted',
        component: isMobile && widthScreen < 1024
          ? MobileRegistrationSubmitted : RegistrationSubmitted,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
