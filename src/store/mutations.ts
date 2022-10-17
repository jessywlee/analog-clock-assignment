import { MutationTree } from "vuex";
import { State, TimezoneInfoState } from "./state";

const mutations: MutationTree<State> = {
  getNowDate(state) {
    state.now = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: state.selectedTimezone.timezone,
      })
    );
  },
  setSelectedTimezone(state, selected: TimezoneInfoState) {
    state.selectedTimezone = selected;
  },
  setHandLoading(state, value: boolean) {
    state.handLoading = value;
  },
};

export default mutations;
