import { Store } from "vuex";
import { TimezoneInfo } from "./store/index";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    now: Date;
    timezoneOptions: TimezoneInfo[];
    selectedTimezone: TimezoneInfo;
    handLoading: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
