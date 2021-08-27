<template>
  <section id="banner" class="banner">
    <VueAgile :options="slideOptions" v-if="!loadingBanner" v-vpshow-scroll>
      <div class="agile-carousel">
        <div class="container">
          <div class="agile-carousel-caption">
            <h3 class="caption">{{ banner.heading }}</h3>
            <p class="text" v-html="banner.sub_heading"></p>
            <div class="cta-button mt-2"
              v-if="banner.is_with_button">
              <a :href="banner.button_url_desktop" class="cta-link-btn">
                {{ banner.button_text }}
              </a>
            </div>
          </div>
        </div>
        <img
          v-if="isImageAvailable"
          :src="banner.image_desktop_jpg"
          :alt="banner.heading"
          class="agile-carousel-image" />
      </div>
      <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
      <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
    </VueAgile>
    <PaxelLoader :loading="loadingBanner"></PaxelLoader>
  </section>
</template>

<script>
import { VueAgile } from 'vue-agile';
import PaxelLoader from '@/components/PaxelLoader.vue';

export default {
  name: 'DesktopBanner',
  components: {
    VueAgile,
    PaxelLoader,
  },
  data() {
    return {
      banner: {},
      loadingBanner: true,
      slideOptions: {
        navButtons: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 2500,
        fade: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        timing: 'ease-in-out',
        changeDelay: 300,
      },
    };
  },
  computed: {
    isImageAvailable() {
      return typeof this.banner.image_desktop_jpg !== 'undefined'
        && this.banner.image_desktop_jpg !== ''
        && this.banner.image_desktop_jpg !== null;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHomepageBanner', this.$store.getters.getLanguage);
  },
  created() {
    this.$store.watch(
      (state) => state.homepageBanner,
      (newValue) => {
        this.loadingBanner = true;
        this.banner = newValue;
        this.loadingBanner = false;
      },
    );
    this.$store.watch(
      (state) => state.language,
      (newValue) => {
        this.$store.dispatch('fetchHomepageBanner', newValue);
      },
    );
  },
};
</script>

<style>
.desktop-home .agile__nav-button {
  background: transparent;
  border: none;
  color: transparent;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 80px;
}
.desktop-home .agile__nav-button:hover {
  /* background-color: rgba(0, 0, 0, 0.5); */
  color: #ffffff;
  opacity: 1;
}
.desktop-home .agile__nav-button--prev {
  left: 0;
}
.desktop-home .agile__nav-button--next {
  right: 0;
}
.desktop-home .agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.desktop-home .agile__dot {
  margin: 0 10px;
}
.desktop-home .agile__dot button {
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.desktop-home .agile__dot--current button,
.desktop-home .agile__dot:hover button {
  background-color: #ffffff;
}
.desktop-home .agile-carousel-image {
  display: block;
  height: 700px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  background-color: #5e51a1;
}
.desktop-home .agile-carousel-caption {
  position: absolute;
  right: auto;
  top: 20%;
  width: 380px;
  left: auto;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  color: #ffffff;
}
.desktop-home .agile-carousel-caption .caption {
  font-family: "GothamBold";
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 52px;
  letter-spacing: normal;
  color: #ffffff;
  margin-bottom: 20px;
}
.desktop-home .agile-carousel-caption .text {
  font-family: "GothamMedium";
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 27px;
  letter-spacing: normal;
  color: #ffffff;
  margin-bottom: 40px;
}
.desktop-home .cta-button a {
  font-family: "GothamBold";
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  border: none;
  padding: 15px 50px;
  letter-spacing: normal;
  border-radius: 0.25rem;
  text-align: center;
  color: #424143;
  background-color: #ffffff;
}
.desktop-home .cta-button a.cta-link-btn:focus {
  border: none;
}
</style>
