import { createStore } from "vuex";
import TIME from "@/statics/constants";

const {
  CLOCK_DEGREES,
  HOURS_IN_ONE,
  MINS_IN_ONE,
  SECONDS_IN_ONE,
  DEGREES_PER_HOUR,
  DEGREES_PER_MIN,
  ROTATION_ADJUSTMENT,
} = TIME;
export interface TimezoneInfo {
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
    ] as TimezoneInfo[],
    selectedTimezone: {
      city: "Seoul",
      value: "seoul",
      timezone: "Asia/Seoul",
      image: require("@/assets/seoul.jpg"),
    } as TimezoneInfo,
    now: new Date(),
    handLoading: false,
  },
  getters: {
    hours(state) {
      return state.now.getHours();
    },
    minutes(state) {
      return state.now.getMinutes();
    },
    seconds(state) {
      return state.now.getSeconds();
    },
    rotationDegreesHours(state, getters) {
      return (
        (getters.hours / HOURS_IN_ONE) * CLOCK_DEGREES +
        (getters.minutes / MINS_IN_ONE) * DEGREES_PER_HOUR +
        ROTATION_ADJUSTMENT
      );
    },
    rotationDegreesMinutes(state, getters) {
      return (
        (getters.minutes / MINS_IN_ONE) * CLOCK_DEGREES +
        (getters.seconds / SECONDS_IN_ONE) * DEGREES_PER_MIN +
        ROTATION_ADJUSTMENT
      );
    },
    rotationDegreesSeconds(state, getters) {
      return (
        (getters.seconds / SECONDS_IN_ONE) * CLOCK_DEGREES + ROTATION_ADJUSTMENT
      );
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
    setSelectedTimezone(state, selected: TimezoneInfo) {
      state.selectedTimezone = selected;
    },
    setHandLoading(state, value: boolean) {
      state.handLoading = value;
    },
  },
  actions: {},
  modules: {},
});
