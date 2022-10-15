<template>
  <div class="clock-container">
    <div class="clock" @mousemove="hoverOnClock" @mouseleave="leaveFromClock">
      <div class="clock-center"></div>
      <img class="clock-img" :src="$store.state.selectedTimezone.image" />
      <span v-if="hovered" class="clock-tooltip" :style="tooltipPosition">
        {{ $store.state.now.toLocaleString() }}
      </span>
      <span v-if="$store.state.handLoading" class="loading">✈️...</span>
      <div v-show="!$store.state.handLoading">
        <ClockHand handType="HOUR" />
        <ClockHand handType="MINUTE" />
        <ClockHand handType="SECOND" />
      </div>
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
      this.$store.commit("getNowDate");
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
}

.clock-center {
  position: absolute;
  top: 47%;
  left: 48%;
  width: 20px;
  height: 20px;
  z-index: 90;
  border-radius: 50%;
  background-color: black;
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

.loading {
  position: absolute;
  top: 45%;
  left: 42%;
  font-size: 30px;
  padding: 8px;
  z-index: 95;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}
</style>
