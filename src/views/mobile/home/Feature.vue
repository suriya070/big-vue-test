<template>
  <section id="feature" class="feature container">
    <div class="section-caption text-center">{{ $t("featured_features") }}</div>
    <VueSlickCarousel
      ref="feature_carousel"
      v-bind="slickOptions"
      v-vpshow-scroll="'slide-bottom'"
      v-if="!loadingFeatureExcellence && featureExcellences.length > 0"
      @afterChange="loadFeatureExcellenceDataPage"
    >
      <div class="card"
        v-for="(featureExcellence, index) in featureExcellences"
        :key="`${index}`">
        <img
          class="card-img-top"
          v-if="!isLoader(featureExcellence)"
          v-bind:src="featureExcellence.image_jpg"
          v-bind:alt="featureExcellence.title"
        />
        <div class="card-img-top" v-else>
          <PaxelSkeletonLoader width="100%" height="150px"></PaxelSkeletonLoader>
        </div>
        <div class="card-body">
          <div class="card-text"
            v-if="!isLoader(featureExcellence)"
            v-html="featureExcellence.description">
          </div>
          <div class="card-text" v-else>
            <PaxelSkeletonLoader width="100%"></PaxelSkeletonLoader>
            <PaxelSkeletonLoader width="100%"></PaxelSkeletonLoader>
            <PaxelSkeletonLoader width="100%"></PaxelSkeletonLoader>
          </div>
        </div>
      </div>
      <template #prevArrow="arrowOption">
        <button class="slick-custom-arrow slick-custom-arrow-left"
          v-if="arrowOption.currentSlide > 0">
          <i class="fas fa-chevron-left"></i>
        </button>
        <span v-else></span>
      </template>
      <template #nextArrow="arrowOption">
        <button class="slick-custom-arrow slick-custom-arrow-right"
          v-if="arrowOption.currentSlide < lastSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
        <span v-else></span>
      </template>
    </VueSlickCarousel>
    <div
      class="text-center"
      v-else-if="!loadingFeatureExcellence && featureExcellences.length == 0">
    </div>
    <PaxelLoader :loading="loadingFeatureExcellence"></PaxelLoader>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import PaxelLoader from '@/components/PaxelLoader.vue';
import PaxelSkeletonLoader from '@/components/PaxelSkeletonLoader.vue';

const recordLimit = 4;
export default {
  name: 'DesktopFeature',
  components: {
    VueSlickCarousel,
    PaxelLoader,
    PaxelSkeletonLoader,
  },
  data() {
    return {
      featureExcellences: [],
      loadingFeatureExcellence: true,
      fetchFeatureExcellencePage: true,
      featureExcellenceLoadedPage: 1,
      featureExcellenceTotalPage: 1,
      featureExcellenceTotalRecord: 0,
      featureExcellenceRecordLimit: recordLimit,
      slickOptions: {
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  computed: {
    lastSlide() {
      return (this.featureExcellenceTotalPage - 1) * this.featureExcellenceRecordLimit;
    },
  },
  methods: {
    isLoader(featureExcellence) {
      return featureExcellence.id === 'loader';
    },
    buildSkeletonLoaderCard(number) {
      const data = [];
      for (let i = 0; i < number; i += 1) {
        const loader = {
          id: 'loader',
        };
        data.push(loader);
      }
      return data;
    },
    loadFeatureExcellenceDataPage(currentPosition) {
      if (this.fetchFeatureExcellencePage
          && currentPosition
              > (this.featureExcellenceLoadedPage - 1) * this.featureExcellenceRecordLimit
          && this.featureExcellenceTotalPage
              > this.featureExcellenceLoadedPage) {
        /* fetch data when next slide clicked */
        this.$store.dispatch('fetchHomepageFeatureExcellences', {
          language: this.$store.getters.getLanguage,
          limit: this.featureExcellenceRecordLimit,
          page: this.featureExcellenceLoadedPage + 1,
        });
      } else if (this.featureExcellenceTotalPage === this.featureExcellenceLoadedPage) {
        this.fetchFeatureExcellencePage = false;
      }
    },
  },
  mounted() {
    this.$store.dispatch('fetchHomepageFeatureExcellences', {
      language: this.$store.getters.getLanguage,
      limit: this.featureExcellenceRecordLimit,
      page: this.featureExcellenceLoadedPage,
    });
  },
  created() {
    this.$store.watch(
      (state) => state.homepageFeatureExcellences,
      (newValue, oldValue) => {
        this.loadingFeatureExcellence = true;
        let existingData = [];
        if (newValue.language === oldValue.language) {
          existingData = this.featureExcellences.filter((data) => data.id !== 'loader');
          this.featureExcellenceLoadedPage = newValue.data.current_page;
          this.featureExcellenceTotalPage = newValue.data.total_page;
        }
        const newData = newValue.data.results;
        const loadedData = existingData.length + newData.length;
        this.featureExcellences = existingData.concat(newData);

        // for loader card
        const loaderNumber = newValue.data.total_record - loadedData;
        if (loaderNumber > 0) {
          const loaderData = this.buildSkeletonLoaderCard(loaderNumber);
          if (loaderData.length > 0) {
            this.featureExcellences.push(...loaderData);
          }
        }

        this.featureExcellenceTotalRecord = newValue.data.total_record;
        this.loadingFeatureExcellence = false;
      },
    );
    this.$store.watch(
      (state) => state.language,
      (newValue) => {
        this.$store.dispatch('fetchHomepageFeatureExcellences', {
          language: newValue,
          limit: this.featureExcellenceRecordLimit * this.featureExcellenceLoadedPage,
          page: 1,
        });
      },
    );
  },
};
</script>
<style>
.mobile-home .slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  z-index: 1000;
}
.mobile-home .slick-dots li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.mobile-home .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.mobile-home .slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: #5e51a1;
}
.mobile-home .slick-dots li button:before {
  font-family: 'slick';
  font-size: 48px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: '•';
  text-align: center;
  opacity: 0.25;
  color: #5e51a1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped>
.mobile-home section .section-caption {
  padding-left: 15px;
}
.mobile-home .card {
  border: none;
  border-radius: 20px;
  overflow: hidden;
}
.mobile-home .card > img {
  height: 150px;
  padding-top: 10px;
  border-radius: 20px 20px 0px 0px;
}
.mobile-home .card-body {
  height: 200px;
  padding: 30px 10px;
  overflow: hidden;
  word-wrap: break-word;
}
.mobile-home .card-body .card-text {
  font-family: "GothamMedium";
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: center;
  color: #424143;
}
.mobile-home .slick-custom-arrow {
  background: transparent;
  border: none;
  color: transparent;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  z-index: 1000;
}
.mobile-home .slick-custom-arrow:hover {
  color: #575758;
  opacity: 1;
}
.mobile-home .slick-custom-arrow:focus {
  outline: none;
}
.mobile-home .slick-custom-arrow-left {
  left: -25px;
}
.mobile-home .slick-custom-arrow-right {
  right: -25px;
}
.mobile-home .card-img-top {
  width: 100%;
  object-fit: contain;
}
@-webkit-keyframes wobble-horizontal-on-hover {
  16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes wobble-horizontal-on-hover {
  16.65% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  33.3% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
  }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
