export const LANGUAGE = 'lang';

const LocalStorage = {
  setLanguage(language) {
    return localStorage.setItem(LANGUAGE, language);
  },
  getLanguage() {
    return localStorage.getItem(LANGUAGE) || 'id';
  },
};

export default LocalStorage;
