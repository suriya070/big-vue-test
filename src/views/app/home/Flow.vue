<template>
  <section id="flow" class="flow" v-vpshow-scroll>
    <div class="container">
      <div class="section-caption">{{ $t("flow_process_paxelbig") }}</div>
      <div class="flow-wrapper" v-if="!loadingFlow">
        <div class="flow-left align-self-center" v-vpshow-scroll="'slide-left'">
          <img
            v-if="flow.image_paxel_big_left"
            :src="flow.image_paxel_big_left"
            alt="paxel big logo"
            class="img-fluid">
        </div>
        <div class="flow-right align-self-center px-5" v-vpshow-scroll="'slide-right'">
          <img
            v-if="flow.image_flow_right"
            :src="flow.image_flow_right"
            alt="paxel big flow"
            class="img-fluid">
        </div>
      </div>
      <PaxelLoader :loading="loadingFlow"></PaxelLoader>
    </div>
  </section>
</template>

<script>
import PaxelLoader from '@/components/PaxelLoader.vue';

export default {
  name: 'DesktopFlow',
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
.desktop-home .flow {
  background-color: #f9f9fb;
  padding: 50px 0px;
}
.desktop-home .flow-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.desktop-home .flow-wrapper .flow-left {
  flex: 0 0 33%;
  max-width: 33%;
}
.desktop-home .flow-wrapper .flow-right {
  flex: 0 0 65%;
  max-width: 65%;
}
</style>
