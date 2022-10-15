import { createStore } from "vuex";
export interface Timezone {
  city: string;
  value: string;
  timezone: string;
  image: string;
}

export default createStore({
  state: {
    timezoneOptions: [
      {
        city: "Seoul",
        value: "seoul",
        timezone: "Asia/Seoul",
        image: require("@/assets/seoul.jpg"),
      },
      {
        city: "Los Angeles",
        value: "la",
        timezone: "America/Los_Angeles",
        image: require("@/assets/losangeles.jpg"),
      },
      {
        city: "London",
        value: "london",
        timezone: "Europe/London",
        image: require("@/assets/london.jpg"),
      },
    ] as Timezone[],
    selectedTimezone: {
      city: "Seoul",
      value: "seoul",
      timezone: "Asia/Seoul",
      image: require("@/assets/seoul.jpg"),
    } as Timezone,
    now: new Date(),
    handLoading: false,
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
    getNowDate(state) {
      state.now = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: state.selectedTimezone.timezone,
        })
      );
    },
    setSelectedTimezone(state, selected: Timezone) {
      state.selectedTimezone = selected;
    },
    setHandLoading(state, value) {
      state.handLoading = value;
      console.log(value);
    },
  },
  actions: {},
  modules: {},
});
