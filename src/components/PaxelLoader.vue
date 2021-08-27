<template>
  <div v-if="isLoading">
    <div class="spinner-wrapper">
      <div id="spinner-bounce" class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paxel-loader',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    loading: {
      immediate: true,
      handler(neValue) {
        this.isLoading = neValue;
      },
    },
  },
  data() {
    return {
      isLoading: this.loading,
    };
  },
};
</script>

<style scoped>
.spinner-wrapper {
  display: flex;
  justify-content: center;
  margin: 100px auto;
}
.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #5e50a1;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}
@keyframes sk-bouncedelay {0%, 80%, 100% {
  -webkit-transform: scale(0);
  transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
