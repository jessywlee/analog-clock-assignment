import { Store } from "vuex";
import { Timezone } from "./store/index";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    now: Date;
    timezoneOptions: Timezone[];
    selectedTimezone: Timezone;
    handLoading: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
