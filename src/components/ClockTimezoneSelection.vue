<template>
  <div class="timezone-btn-container">
    <button
      :key="item.value"
      v-for="(item, index) in $store.state.timezoneOptions"
      :class="`timezone-${item.value}`"
      @click="selectTimezone(item, index)"
      :style="{
        'background-color':
          activeButton === index ? 'rgba(76, 214, 175, 0.5)' : '',
      }"
    >
      {{ item.city }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Timezone } from "../store/index";

export default defineComponent({
  name: "ClockTimezoneSelection",
  props: {},
  data() {
    return {};
  },
  computed: {
    activeButton() {
      const timezoneIndex = this.$store.state.timezoneOptions.indexOf(
        this.$store.state.selectedTimezone
      );
      return timezoneIndex !== -1 ? timezoneIndex : 0;
    },
  },
  methods: {
    selectTimezone(item: Timezone) {
      this.$store.commit("setSelectedTimezone", item);
      this.$store.commit("setHandLoading", true);
      setTimeout(() => this.$store.commit("setHandLoading", false), 1000);
    },
  },
});
</script>
<style scoped>
button {
  border-style: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 10px;
  font-weight: 600;
}

.timezone-btn-container {
  margin-bottom: 30px;
}
</style>
