<template>
  <div class="clock-hand" :class="handStyle" :style="applyRotation"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type Hand = "HOUR" | "MINUTE" | "SECOND";
type HandStyleClass = "hand-hour" | "hand-minute" | "hand-second" | "";

export default defineComponent({
  name: "ClockHand",
  props: {
    handType: {
      type: String as () => Hand,
      required: true,
    },
  },
  data() {
    return {
      handStyle: "" as HandStyleClass,
    };
  },
  computed: {
    getDegreesToRotate() {
      switch (this.handType) {
        case "HOUR": {
          return this.$store.getters.rotationDegreesHours;
        }
        case "MINUTE": {
          return this.$store.getters.rotationDegreesMinutes;
        }
        case "SECOND": {
          return this.$store.getters.rotationDegreesSeconds;
        }
        default:
          return null;
      }
    },
    applyRotation() {
      return `transform: rotate(${this.getDegreesToRotate}deg)`;
    },
  },
  methods: {},
  mounted() {
    switch (this.handType) {
      case "HOUR": {
        this.handStyle = "hand-hour";
        break;
      }
      case "MINUTE": {
        this.handStyle = "hand-minute";
        break;
      }
      case "SECOND": {
        this.handStyle = "hand-second";
      }
    }
  },
});
</script>
<style scoped>
.clock-hand {
  position: absolute;
  right: 50%;
  bottom: 50%;
  border-radius: 10px;
  transform-origin: 100%;
  transform: rotate(90deg);
  background-color: black;
}

.hand-hour {
  width: 25%;
  height: 6px;
}
.hand-minute {
  width: 35%;
  height: 6px;
}

.hand-second {
  width: 40%;
  height: 3px;
}
</style>
