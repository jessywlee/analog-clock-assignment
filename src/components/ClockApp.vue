<template>
  <div class="clock-app">
    <ClockTimezoneSelection />
    <ClockFace />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClockFace from "./ClockFace.vue";
import ClockTimezoneSelection from "./ClockTimezoneSelection.vue";

export default defineComponent({
  name: "ClockApp",
  components: { ClockTimezoneSelection, ClockFace },
});
</script>
<style scoped></style>
