/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import RevampAPIServices from '@/services/revampApi';

const v1 = 'api/paxel-big/v1';

// actions
const actions = {
  changeLanguage({ commit }, data) {
    commit('setLanguage', data);
  },
  fetchHomepageBanner({ commit }, language) {
    RevampAPIServices.get(`/${v1}/banner/${language}/find-one-published`)
      .then((response) => {
        const responseData = response.data;
        if (responseData.code === 200) {
          commit('setHomepageBanner', responseData.data);
        } else {
          commit('setHomepageBanner', {});
        }
      })
      .catch(() => {
        commit('setHomepageBanner', {});
      });
  },
  fetchHomepageFeatureExcellences({ commit }, data) {
    RevampAPIServices.post(`/${v1}/excellence/${data.language}/find-all-with-paging`, data)
      .then((response) => {
        const responseData = response.data;
        if (responseData.code === 200) {
          commit('setHomepageFeatureExcellences', { language: data.language, data: responseData.data });
        }
      })
      .catch(() => {});
  },
  fetchHomepageFlow({ commit }, language) {
    RevampAPIServices.get(`/${v1}/flow/${language}/find-one-published`)
      .then((response) => {
        const responseData = response.data;
        if (responseData.code === 200) {
          commit('setHomepageFlow', responseData.data);
        } else {
          commit('setHomepageFlow', {});
        }
      })
      .catch(() => {
        commit('setHomepageFlow', {});
      });
  },
  sendRegistration({ commit }, data) {
    return new Promise((resolve, reject) => {
      RevampAPIServices.post(`/${v1}/customer/registration`, data)
        .then((response) => {
          const responseData = response.data;
          if (responseData.code === 200) {
            commit('setRegistration', responseData.data);
          } else {
            commit('setRegistration', {});
          }
          resolve(response);
        })
        .catch((error) => {
          commit('setRegistration', {});
          reject(error);
        });
    });
  },
};

export default actions;
