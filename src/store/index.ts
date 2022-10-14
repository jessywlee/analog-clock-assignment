import { createStore } from "vuex";

export default createStore({
  state: {
    now: new Date(),
  },
  getters: {
    rotationDegreesHours(state) {
      const hours = state.now.getHours();
      return (hours / 12) * 360 + (state.now.getMinutes() / 60) * 30 + 90;
    },
    rotationDegreesMinutes(state) {
      const mins = state.now.getMinutes();
      return (mins / 60) * 360 + (state.now.getSeconds() / 60) * 6 + 90;
    },
    rotationDegreesSeconds(state) {
      const seconds = state.now.getSeconds();
      return (seconds / 60) * 360 + 90;
    },
  },
  mutations: {
    getNewDate(state) {
      state.now = new Date();
    },
  },
  actions: {},
  modules: {},
});
