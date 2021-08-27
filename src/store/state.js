import LocalStorage from '@/services/localstorage';
// state
const state = {
  language: LocalStorage.getLanguage(),
  homepageBanner: {},
  homepageFeatureExcellences: {
    language: LocalStorage.getLanguage(),
    data: {},
  },
  homepageFlow: {},
  registration: {},
};

export default state;
