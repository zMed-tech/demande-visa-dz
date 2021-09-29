import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refresh: false,
  },
  mutations: {
    refreshPage(state) {
      state.refresh = true;
    },
  },
  actions: {
    refreshPage({ commit }) {
      commit("refreshPage");
    },
  },
  modules: {},
});
