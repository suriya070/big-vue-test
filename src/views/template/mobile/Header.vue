<template>
  <section id="header" class="mobile-header fixed-top">
    <div class="bg-purple">
      <b-navbar class="main-navbar mobile-navbar container" toggleable="lg" type="dark">
        <b-navbar-brand>
          <a :href="`${this.revampWebURL}`">
            <img src="@/assets/logo.svg" width="92" height="30" alt="Paxel" />
          </a>
        </b-navbar-brand>
        <b-navbar-toggle target="main-navbar-collapse">
          <template #default="{ expanded }">
            <span v-if="!expanded" class="navbar-toggler-icon"></span>
            <span v-else></span>
          </template>
        </b-navbar-toggle>
        <b-sidebar
          id="main-navbar-collapse"
          bg-variant="none"
          width="80%"
          text-variant="light"
          :no-header-close="!isTooglerShow"
          backdrop
          no-close-on-backdrop
          is-nav
          @change="changeToggler">
          <template slot="title">
            <a :href="revampWebURL">
              <img src="@/assets/logo.svg" width="92" height="30" alt="Paxel" />
            </a>
          </template>
          <template slot="header-close">
            <svg
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="x"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-x b-icon bi"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1
                  .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646
                  2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                ></path>
              </g>
            </svg>
          </template>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :href="`${revampWebURL}/our-service`">
              {{ $t('our_services') }}
            </b-nav-item>
            <b-nav-item :href="`${revampWebURL}/news-and-promos`">
              {{ $t('news_and_promos') }}
            </b-nav-item>
            <b-nav-item :href="`${revampWebURL}/antarkan-kebaikan`">
              #AntarkanKebaikan
            </b-nav-item>
            <b-nav-item-dropdown menu-class="bg-purple border-none shadow">
                <template slot="text">
                    {{ $t('partnership') }}
                </template>
                <b-dropdown-item :href="`${revampWebURL}/partnership`">
                  {{ $t('about_partnership') }}
                </b-dropdown-item>
                <b-dropdown-item :href="corporateURL">
                  Corporate
                </b-dropdown-item>
                <b-dropdown-item :href="`${revampWebBaseURL}/mitrapaxel`">
                  Mitra PaxelCo
                </b-dropdown-item>
                <b-dropdown-item to="/">
                  PaxelBig
                </b-dropdown-item>
                <b-dropdown-item :href="paxelBoxURL">PaxelBox</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              menu-class="bg-purple border-none shadow">
                <template slot="button-content">
                    <flag :iso="selectedFlag" v-bind:squared="false"/>
                    <span style="fontSize: 14px;" v-if="selectedLanguage">
                      {{ selectedLanguage.title }}
                    </span>
                </template>
                <b-dropdown-item
                  v-for="entry in availableLanguages"
                  :key="entry.title"
                  @click="changeLocale(entry.language)">
                    <flag :iso="entry.flag" v-bind:squared="false" />
                    <span style="fontSize:14px;verticalAlign: text-top;">
                      {{ entry.title }}
                    </span>
                </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-sidebar>
      </b-navbar>
    </div>
  </section>
</template>

<script>
import i18n from '@/plugins/i18n';
import LocalStorage from '@/services/localstorage';

export default {
  name: 'MobileHeader',
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      this.selectedFlag = locale === 'id' ? 'id' : 'gb';
      this.$store.dispatch('changeLanguage', locale);
      LocalStorage.setLanguage(locale);
    },
    scrollToAnchor() {
      this.$root.scrollToAnchor(this.$route.hash);
    },
    changeToggler(visible) {
      if (visible) {
        setTimeout(() => {
          this.isTooglerShow = true;
        }, 300);
      } else {
        this.isTooglerShow = false;
      }
    },
  },
  computed: {
    selectedLanguage() {
      return this.languages.find((a) => a.language === i18n.locale);
    },
    availableLanguages() {
      return this.languages.slice(0).sort((a) => (a.language === i18n.locale ? -1 : 1));
    },
    revampWebURL() {
      return `${this.revampWebBaseURL}/${i18n.locale}`;
    },
  },
  data() {
    return {
      revampWebBaseURL: process.env.VUE_APP_REVAMP_WEB,
      revampWebFAQParamEn: process.env.VUE_APP_FAQ_PARAM_EN,
      revampWebFAQParamId: process.env.VUE_APP_FAQ_PARAM_ID,
      paxelBoxURL: process.env.VUE_APP_PAXELBOX_WEB,
      corporateURL: process.env.VUE_APP_CORPORATE_WEB,
      selectedFlag: i18n.locale === 'id' ? 'id' : 'gb',
      scrollConfig: {
        element: 'body',
        offset: 270,
        method: 'auto',
        throttle: 3000,
      },
      languages: [
        { flag: 'gb', language: 'en', title: 'English' },
        { flag: 'id', language: 'id', title: 'Bahasa' },
      ],
      isTooglerShow: false,
    };
  },
};
</script>

<style scoped>
  #header.fixed-top {
    background-color: #5e50a1;
  }
  .mobile-navbar.main-navbar {
    font-family: 'GothamMedium';
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    height: 50px;
    padding: 10px 25px 10px 25px;
  }
  .flag-icon {
    /* margin-right: 5px; */
    background-position: unset;
    width: 24px;
    height: 15.9px;
    line-height: 1.1em;
  }
  .navbar-dark .navbar-brand.tx-white {
      color: #ffffff;
  }
  .navbar-dark .navbar-brand.tx-purple {
      color: #5e50a1;
  }
  .mobile-navbar.main-navbar .navbar-brand {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .mobile-navbar.main-navbar .navbar-toggler {
    padding: 0px;
  }
</style>

<style>
  .mobile-header .dropdown-toggle::after {
    margin-left: 0.2em;
    vertical-align: 0.125em;
  }
</style>
