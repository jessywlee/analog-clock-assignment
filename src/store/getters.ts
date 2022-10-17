import { GetterTree } from "vuex";
import { State } from "./state";
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

const getters: GetterTree<State, State> = {
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
};

export default getters;
