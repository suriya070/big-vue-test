<template>
  <div id="app">
    <app-header></app-header>
      <main id="content" ref="content" class="container-fluid" role="main">
        <transition name="fade" mode="out-in" appear>
          <router-view />
        </transition>
      </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { isMobile } from 'mobile-device-detect';

import Header from './views/template/Header.vue';
import Footer from './views/template/Footer.vue';
import MobileHeader from './views/template/mobile/Header.vue';
import MobileFooter from './views/template/mobile/Footer.vue';

const widthScreen = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

export default {
  name: 'App',
  components: {
    appHeader: isMobile && widthScreen < 1024 ? MobileHeader : Header,
    appFooter: isMobile && widthScreen < 1024 ? MobileFooter : Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "GothamBook";
  src: url("assets/fonts/GothamBook.woff") format('woff'),
       url("assets/fonts/GothamBook.woff2") format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GothamMedium";
  src: url("assets/fonts/GothamMedium.woff") format('woff'),
       url("assets/fonts/GothamMedium.woff2") format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GothamBold";
  src: url("assets/fonts/GothamBold.woff") format('woff'),
       url("assets/fonts/GothamBold.woff2") format('woff2');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: "GothamBook";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #424143;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
#content {
  padding-top: 100px;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px; /* height of sticky header */
}
body {
  height: 100vh;
  overflow-y: scroll;
}
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}
.bg-purple {
  background-color: #5e51a1;
}
.bg-dark-purple {
  background-color: #524494;
}
.bg-dark-grey {
  background-color: #424143;
}
.border-none {
  border: none;
}
.minw-none {
  min-width: 0;
}
.ml-15 {
  margin-left: 15px;
}
.disabled {
  opacity: 0.9;
  pointer-events: none;
}
.shadow {
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2) !important;
}
.btn-primary {
  color: #fff;
  background-color: #6051a2;
  border-color: #6051a2;
}
.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark a.dropdown-item {
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark a.dropdown-item:hover {
    color: #ffb003;
}
.navbar-dark.main-navbar .navbar-nav .nav-item {
 margin: 0px;
}
.navbar-dark.main-navbar .navbar-nav .nav-link {
  padding: 10px 20px 10px 20px;
}
.navbar-dark.main-navbar .dropdown-menu li:first-child {
  padding-top: 13px;
}
.navbar-dark.main-navbar .dropdown-menu li:last-child {
  padding-bottom: 13px;
}
.navbar-dark.main-navbar .navbar-nav .nav-item:last-child .nav-link {
  padding-right: 0;
}
.navbar-dark.sub-navbar .navbar-nav .nav-item {
  margin: 0px 27px 0px 27px;
}
.navbar-dark.sub-navbar .navbar-collapse {
  padding-right: 65px;
}
.navbar-dark.sub-navbar .navbar-nav .nav-item.active .nav-link.active {
  color: #5e50a1;
  border-radius: 3px;
  background-color: #ffffff;
}
.navbar-dark a.dropdown-item:hover{
  background-color: transparent;
}
.navbar-dark.main-navbar .navbar-nav .nav-item:last-child .dropdown-toggle::after {
  vertical-align: .155em;
}
.dropdown-toggle:focus {
  color: #ffffff;
  outline: none;
}
.navbar-dark .navbar-toggler {
  border: none;
  outline: none;
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  border-color: #ffffff;
}
.navbar-dark .b-sidebar {
  bottom: 0;
  height: 100%;
  background-color: #5e51a1;
  padding: 10px 0px 20px;
}
.navbar-dark .b-sidebar > .b-sidebar-header {
  margin-bottom: 30px;
  padding: 0px 0px 0px 25px;
  font-size: 14px;
}
.navbar-dark .b-sidebar:not(.b-sidebar-right) > .b-sidebar-header .close {
  position: absolute;
  right: -20.5%;
  top: 0px;
  font-size: 48px;
  color: #ffffff;
  opacity: 1;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .dropdown-menu {
  padding: 0;
  max-height: 200px;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2) !important;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .nav-item {
  margin: 0px;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .nav-item:last-child {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .nav-item:last-child a {
  /* font-size: 16px; */
  margin-left: 1px;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .nav-link,
.mobile-navbar.navbar-dark.main-navbar a.dropdown-item {
  /* padding: 5.5px 20px 5.7px 20px; */
  padding: 7px 20px 7px 25px;
}
.mobile-navbar.navbar-dark.sub-navbar .navbar-nav .nav-item {
  margin: 0px;
  width: fit-content;
}
.mobile-navbar.navbar-dark.sub-navbar .navbar-nav .nav-item a {
  padding: 6px 7px;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .nav-link {
  padding: 13px 20px 14px 25px;
}
.mobile-navbar.navbar-dark.main-navbar .navbar-nav .nav-item:last-child .dropdown-toggle::after {
  vertical-align: .125em;
}
/* .mobile-navbar.navbar-dark.main-navbar .dropdown-menu li:first-child {
  padding-top: 2px;
}
.mobile-navbar.navbar-dark.main-navbar .dropdown-menu li:last-child {
  padding-bottom: 2px;
} */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@media (min-width: 992px) {
  .animate {
    animation-duration: 0.3s;
    -webkit-animation-duration: 0.3s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
}
@keyframes slideIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform:translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}
@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 1;
  }
  0% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 0;
  }
}
.slide-in {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.vp-show-fade-before-enter,
.vp-show-slide-left-before-enter,
.vp-show-slide-right-before-enter,
.vp-show-slide-bottom-before-enter {
  opacity: 0;
}
.vp-show-fade-enter {
  transition: opacity 2s ease-in-out;
}
.vp-show-slide-left-enter {
  animation: slide-left 2s forwards;
  -webkit-animation: slide-left 2s forwards;
}
.vp-show-slide-right-enter {
  animation: slide-right 2s forwards;
  -webkit-animation: slide-right 2s forwards;
}
.vp-show-slide-bottom-enter {
  animation: slide-bottom 2s forwards;
  -webkit-animation: slide-bottom 2s forwards;
}
@keyframes slide-left {
  0% { transform: translateX(-10%); }
  100% { transform: translateX(0%); }
}
@-webkit-keyframes slide-left {
  0% { -webkit-transform: translateX(-10%); }
  100% { -webkit-transform: translateX(0%); }
}
@keyframes slide-right {
  0% { transform: translateX(10%); }
  100% { transform: translateX(0%); }
}
@-webkit-keyframes slide-right {
  0% { -webkit-transform: translateX(10%); }
  100% { -webkit-transform: translateX(0%); }
}
@keyframes slide-bottom {
  0% { transform: translateY(10%); }
  100% { transform: translateY(0%); }
}
@-webkit-keyframes slide-bottom {
  0% { -webkit-transform: translateY(10%); }
  100% { -webkit-transform: translateY(0%); }
}

@media screen and (max-width: 1024px) {
  #content {
    padding-top: 50px;
  }
}
</style>
