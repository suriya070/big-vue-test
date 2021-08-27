<template>
  <section id="flow" class="flow" v-vpshow-scroll>
    <div class="container">
      <div class="section-caption">{{ $t("flow_process_paxelbig") }}</div>
        <div class="text-center" v-vpshow-scroll="'slide-right'" v-if="!loadingFlow">
          <img
            v-if="flow.image_flow_right_mobile"
            :src="flow.image_flow_right_mobile"
            alt="paxel big flow"
            class="img-fluid">
      </div>
      <PaxelLoader :loading="loadingFlow"></PaxelLoader>
    </div>
  </section>
</template>

<script>
import PaxelLoader from '@/components/PaxelLoader.vue';

export default {
  name: 'MobileFlow',
  components: {
    PaxelLoader,
  },
  data() {
    return {
      flow: {},
      loadingFlow: true,
    };
  },
  mounted() {
    this.$store.dispatch('fetchHomepageFlow', this.$store.getters.getLanguage);
  },
  created() {
    this.$store.watch(
      (state) => state.homepageFlow,
      (newValue) => {
        this.loadingFlow = true;
        this.flow = newValue;
        this.loadingFlow = false;
      },
    );
    this.$store.watch(
      (state) => state.language,
      (newValue) => {
        this.$store.dispatch('fetchHomepageFlow', newValue);
      },
    );
  },
};
</script>

<style scoped>
.mobile-home .flow {
  background-color: #f9f9fb;
  padding: 50px 0px;
}
.mobile-home .flow-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
</style>
