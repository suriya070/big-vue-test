<template>
  <section id="header" class="desktop-header fixed-top">
    <div class="bg-purple">
      <b-navbar class="main-navbar container" toggleable="lg" type="dark">
        <b-navbar-brand>
          <a :href="revampWebURL">
            <img src="@/assets/logo.svg" alt="Paxel" />
          </a>
        </b-navbar-brand>
        <b-navbar-toggle target="main-navbar-collapse"></b-navbar-toggle>
        <b-collapse id="main-navbar-collapse" is-nav>
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
            <b-nav-item-dropdown
              menu-class="p-0 minw-none bg-purple border-none shadow animate slide-in">
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
              menu-class="p-0 minw-none bg-purple border-none shadow animate slide-in">
                <template slot="button-content">
                    <flag :iso="selectedFlag" v-bind:squared=false />
                </template>
                <b-dropdown-item
                  v-for="entry in availableLanguages"
                  :key="entry.title"
                  @click="changeLocale(entry.language)">
                    <flag :iso="entry.flag" v-bind:squared=false />
                    <span style="fontSize:14px;verticalAlign:top;">{{ entry.title }}</span>
                </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </section>
</template>

<script>
import i18n from '@/plugins/i18n';
import LocalStorage from '@/services/localstorage';

export default {
  name: 'DesktopHeader',
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
  },
  computed: {
    availableLanguages() {
      return this.languages.slice(0).sort((a) => (a.language === i18n.locale ? -1 : 1));
    },
    revampWebURL() {
      return `${this.revampWebBaseURL}/${i18n.locale}`;
    },
    revampFAQParams() {
      return `?category=${i18n.locale === 'id' ? this.revampWebFAQParamId : this.revampWebFAQParamEn}`;
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
    };
  },
};
</script>

<style scoped>
.main-navbar {
  font-family: 'GothamMedium';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 22px 15px 18px 15px;
  height: 100%;
}
.sub-navbar {
  font-family: 'GothamMedium';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 12px 15px 12px 15px;
}
.sub-navbar-colapse {
  margin-right: 70px;
}
.flag-icon {
  font-size: 16px;
  width: 24px;
  margin-right: 5px;
}
</style>
<style>
.desktop-header .dropdown-menu {
  top: 31px;
}
.desktop-header .dropdown-item {
  /* padding: 6px 20px 6px 20px; */
  padding: 7px 20px 7px 20px;
}
.desktop-header .dropdown-toggle::after {
  vertical-align: .125em;
}
</style>
