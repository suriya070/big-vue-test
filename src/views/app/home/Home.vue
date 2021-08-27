<template>
  <div class="desktop-home">
    <Banner />
    <Feature />
    <Flow />
    <Registration />
  </div>
</template>

<script>
import Banner from './Banner.vue';
import Feature from './Feature.vue';
import Flow from './Flow.vue';
import Registration from './Register.vue';

export default {
  name: 'DesktopHome',
  components: {
    Banner,
    Feature,
    Flow,
    Registration,
  },
};
</script>
<style>
.desktop-home section {
  margin-bottom: 100px;
}
.desktop-home section .section-caption {
  font-family: "GothamBold";
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 48px;
  letter-spacing: normal;
  margin-bottom: 40px;
  color: #5e51a1;
}
.desktop-home .services .slick-slide {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
