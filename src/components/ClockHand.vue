<template>
  <div class="hand-container" :style="rotate"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClockHand",
  props: {
    handType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rotate: "",
      HAND_TYPE: {
        HOUR: "HOUR",
        MINUTE: "MINUTE",
        SECOND: "SECOND",
      },
      rotateInterval: null as number | null,
    };
  },
  computed: {},
  methods: {
    getDegreesToRotate() {
      const now = new Date();
      switch (this.handType) {
        case this.HAND_TYPE.HOUR: {
          const hours = now.getHours();
          return (hours / 12) * 360 + (now.getMinutes() / 60) * 30 + 90;
        }

        case this.HAND_TYPE.MINUTE: {
          const mins = now.getMinutes();
          return (mins / 60) * 360 + (now.getSeconds() / 60) * 6 + 90;
        }

        case this.HAND_TYPE.SECOND: {
          const seconds = now.getSeconds();
          return (seconds / 60) * 360;
        }

        default:
          return null;
      }
    },
    setRotation() {
      const degrees = this.getDegreesToRotate();
      this.rotate = `transform: rotate(${degrees}deg)`;
    },
  },
  mounted() {
    console.log("hand mounted!");
    this.rotateInterval = setInterval(this.setRotation, 1000);
  },
  unmounted() {
    if (this.rotateInterval) {
      clearInterval(this.rotateInterval);
    }
  },
});
</script>
<style scoped>
.hand-container {
  position: absolute;
  width: 50%;
  right: 50%;
  bottom: 50%;
  height: 6px;
  border-radius: 10px;
  transform-origin: 100%;
  transform: rotate(90deg);
  background-color: black;
}
</style>
