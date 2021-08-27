// mutations
const mutations = {
  setLanguage(state, language) {
    state.language = language;
  },
  setHomepageBanner(state, banner) {
    state.homepageBanner = banner;
  },
  setHomepageFeatureExcellences(state, featureExcellences) {
    state.homepageFeatureExcellences = featureExcellences;
  },
  setHomepageFlow(state, flow) {
    state.homepageFlow = flow;
  },
  setRegistration(state, registration) {
    state.registration = registration;
  },
};

export default mutations;
