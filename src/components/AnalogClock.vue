<template>
  <div class="clock-container">
    <div class="clock" @mousemove="hoverOnClock" @mouseleave="leaveFromClock">
      <img class="clock-img" src="@/assets/seoul.jpg" />
      <span v-if="hovered" class="clock-tooltip" :style="tooltipPosition">
        {{ $store.state.now.toLocaleString() }}
      </span>
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
  data() {
    return {
      hovered: false,
      pointerX: 0,
      pointerY: 0,
      getTimeInterval: null as number | null,
    };
  },
  computed: {
    tooltipPosition(): object {
      const yPosition = this.pointerY - 60;
      const xPosition = this.pointerX + 20;
      return {
        top: `${yPosition}px`,
        left: `${xPosition}px`,
      };
    },
  },
  methods: {
    hoverOnClock(e: MouseEvent) {
      this.hovered = true;
      this.pointerX = e.clientX;
      this.pointerY = e.clientY;
    },
    leaveFromClock() {
      this.hovered = false;
    },
    getTime() {
      this.$store.commit("getNewDate");
    },
  },
  mounted() {
    this.getTimeInterval = setInterval(this.getTime, 1000);
  },
  unmounted() {
    if (this.getTimeInterval) {
      clearInterval(this.getTimeInterval);
    }
  },
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
  /* box-shadow: -4px -4px 10px rgba(67, 67, 67, 0.5),
    inset 4px 4px 10px rgba(0, 0, 0, 0.5),
    inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3); */
}

.clock-img {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  opacity: 0.35;
}

.clock-tooltip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  z-index: 100;
  padding: 8px;
  background-color: rgba(76, 214, 175, 0.5);
  font-weight: 600;
}
</style>
