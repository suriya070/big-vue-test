<template>
  <footer class="bg-dark-grey">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-menu">
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/about-us`">{{ $t('about_paxel') }}</a>
          </div>
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/our-service`">{{ $t('our_services') }}</a>
          </div>
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/news-and-promos`">{{ $t('news_and_promos') }}</a>
          </div>
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/antarkan-kebaikan`">#AntarkanKebaikan</a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/partnership`">{{ $t('about_partnership') }}</a>
          </div>
          <div class="footer-link">
            <a :href="`${corporateURL}`">Corporate</a>
          </div>
          <div class="footer-link">
            <a :href="`${revampWebBaseURL}/mitrapaxel`">Mitra PaxelCo</a>
          </div>
          <div class="footer-link">
            <router-link to="/">PaxelBig</router-link>
          </div>
          <div class="footer-link">
            <a :href="paxelBoxURL">PaxelBox</a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/help-and-support`">{{ $t('support') }}</a>
          </div>
          <div class="footer-link">
            <a :href="`${revampWebURL}?cek_ongkir=true`">{{ $t('check_rates') }}</a>
          </div>
          <div class="footer-link">
            <a :href="`${revampWebURL}/track-shipments`">{{ $t('track_shipment') }}</a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/terms-and-conditions`">{{ $t('terms_and_conditions') }}</a>
          </div>
          <div class="footer-link footer-link-bold">
            <a :href="`${revampWebURL}/privacy-policy`">{{ $t('privacy_policy') }}</a>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-link footer-link-bold">
            {{ $t('follow_us') }}
          </div>
          <div class="footer-link-social-media-wrapper mt-2">
            <div class="footer-link-social-media">
              <a :href="facebookURL"
                target="_blank" class="footer-social-media"
                style="font-size: 16px">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div class="footer-link-social-media">
              <a :href="instagramURL" target="_blank" class="footer-social-media">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div class="footer-link-social-media">
              <a :href="youtubeURL" target="_blank" class="footer-social-media">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div class="footer-link-social-media">
              <a :href="whatsappURL" target="_blank" class="footer-social-media">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-link footer-link-bold">
            {{ $t('download_paxel_app') }}
          </div>
          <div class="footer-download">
            <div class="footer-download-image">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.paxel&amp;referrer=utm_source%3Dwebrevamp%26utm_medium%3Dbadge">
                <img
                  src="@/assets/images/download-play.png"
                  width="160"
                  alt="Paxel App"
                  class="img-fluid mt-2"
                >
              </a>
            </div>
            <div class="footer-download-image">
              <a target="_blank" href="https://apps.apple.com/app/apple-store/id1372668166?pt=118967865&amp;ct=webrevamp&amp;mt=8">
                <img
                  src="@/assets/images/download-app.png"
                  width="160"
                  alt="Paxel App"
                  class="img-fluid mt-2"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-logo mt-3">
        <div class="footer-image"><img src="@/assets/logo-white.svg" alt="Paxel" /></div>
        <div class="footer-copyright align-self-end">© {{ new Date().getFullYear() }} Paxel</div>
      </div>
    </div>
  </footer>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: 'DesktopFooter',
  computed: {
    revampWebURL() {
      return `${this.revampWebBaseURL}/${i18n.locale}`;
    },
  },
  data() {
    return {
      revampWebBaseURL: process.env.VUE_APP_REVAMP_WEB,
      paxelBoxURL: process.env.VUE_APP_PAXELBOX_WEB,
      corporateURL: process.env.VUE_APP_CORPORATE_WEB,
      facebookURL: process.env.VUE_APP_FACEBOOK,
      instagramURL: process.env.VUE_APP_INSTAGRAM,
      youtubeURL: process.env.VUE_APP_YOUTUBE,
      whatsappURL: process.env.VUE_APP_WHATSAPP,
    };
  },
};
</script>

<style scoped>
footer {
  padding: 10px 0px 30px 0px;
}
.footer-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.footer-menu {
  flex: 0 0 16.5%;
  max-width: 16.5%;
  margin-top: 20px;
}
.footer-link {
  font-family: 'GothamBook';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 24px;
  letter-spacing: normal;
  color: #ffffff;
}
.footer-link-bold {
  font-family: 'GothamBold';
  font-weight: bold;
}
.footer-link > a {
  text-decoration: none;
  color: #ffffff;
}
.footer-link-social-media-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.footer-link-social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-right: 5px;
  border: 2px solid #d4d4d4;
}
a.footer-social-media {
  font-size: 18px;
  color: #d4d4d4;
}
.footer-logo {
  display: flex;
  justify-content: flex-start;
}
.footer-image {
  flex: 0 0 83%;
  max-width: 83%;
}
.footer-copyright {
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c4c7ca;
  flex: 0 0 17%;
  max-width: 17%;
}

@media screen and (max-width: 480px) {
  .footer-menu {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media screen and (max-width: 1024px) and (min-width: 480px) {
  .footer-menu {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media screen and (max-width: 1200px) and (min-width: 1024px) {
  .footer-menu {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
</style>
