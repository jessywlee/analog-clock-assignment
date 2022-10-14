import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    now: Date;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
