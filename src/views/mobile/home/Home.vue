<template>
  <div class="mobile-home">
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
  name: 'MobileHome',
  components: {
    Banner,
    Feature,
    Flow,
    Registration,
  },
};
</script>
<style>
.mobile-home section {
  margin-bottom: 60px;
}
.mobile-home section .section-caption {
  font-family: "GothamBold";
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  margin-bottom: 40px;
  color: #5e51a1;
}
.mobile-home .services .slick-slide {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
