<template>
  <div class="clock-container">
    <div class="clock">
      <img class="clock-img" src="@/assets/seoul.jpg" />
      <ClockHand handType="HOUR" />
      <ClockHand handType="MINUTE" />
      <ClockHand handType="SECOND" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClockHand from "./ClockHand.vue";

export default defineComponent({
  name: "AnalogClock",
  components: { ClockHand },
  props: {},
});
</script>
<style scoped>
.clock-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock {
  position: relative;
  width: 400px;
  height: 400px;
  background: url("@/assets/clock.png");
  border-radius: 50%;
  border-color: black;
  box-shadow: -4px -4px 10px rgba(67, 67, 67, 0.5),
    inset 4px 4px 10px rgba(0, 0, 0, 0.5),
    inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3);
}

.clock-img {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  opacity: 0.35;
}
</style>
