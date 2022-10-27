<template>
  <div class="clock-container">
    <div
      class="clock"
      @mousemove="movePointerOnClock"
      @mouseleave="leaveFromClock"
    >
      <div class="clock-center"></div>
      <img class="clock-img" :src="selectedTimezone.image" />
      <span v-if="hovered" class="clock-tooltip" :style="tooltipPosition">
        {{ currentTimeInTexts }}
      </span>
      <span v-if="isHandLoading" class="loading">✈️...</span>
      <div v-show="!isHandLoading">
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
import { TimezoneInfoState } from "../store/state";
interface TooltipPosition {
  top: string;
  left: string;
}

export default defineComponent({
  name: "AnalogClock",
  components: { ClockHand },
  props: {},
  data() {
    return {
      pointerPositionTimer: undefined as number | undefined,
      hovered: false,
      pointerX: 0,
      pointerY: 0,
      getTimeInterval: null as number | null,
    };
  },
  computed: {
    currentTimeInTexts(): string {
      return this.$store.state.now.toLocaleString();
    },
    selectedTimezone(): TimezoneInfoState {
      return this.$store.state.selectedTimezone;
    },
    tooltipPosition(): TooltipPosition {
      const yPosition = this.pointerY - 60;
      const xPosition = this.pointerX + 20;
      return {
        top: `${yPosition}px`,
        left: `${xPosition}px`,
      };
    },
    isHandLoading(): boolean {
      return this.$store.state.handLoading;
    },
  },
  methods: {
    movePointerOnClock(e: MouseEvent) {
      this.hovered = true;
      if (!this.pointerPositionTimer) {
        this.pointerPositionTimer = setTimeout(() => {
          this.pointerPositionTimer = undefined;
          this.pointerX = e.clientX;
          this.pointerY = e.clientY;
        }, 200);
      }
    },
    leaveFromClock() {
      this.hovered = false;
      clearTimeout(this.pointerPositionTimer);
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
