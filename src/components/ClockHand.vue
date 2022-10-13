<template>
  <div class="hand-container"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClockHand",
  props: {},
});
</script>
<style scoped>
.hand-container {
  position: absolute;
  width: 50%;
  right: 50%;
  bottom: 50%;
  height: 6px;
  background-color: black;
}
</style>
