<template>
  <ClockTimezoneSelection />
  <AnalogClock />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnalogClock from "./components/AnalogClock.vue";
import ClockTimezoneSelection from "./components/ClockTimezoneSelection.vue";

export default defineComponent({
  name: "App",
  components: {
    ClockTimezoneSelection,
    AnalogClock,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
