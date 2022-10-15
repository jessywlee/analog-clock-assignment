<template>
  <div class="timezone-btn-container">
    <button
      :key="item.value"
      v-for="item in $store.state.timezoneOptions"
      :class="`timezone-${item.value}`"
      @click="selectTimezone(item)"
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
  computed: {},
  methods: {
    selectTimezone(item: Timezone) {
      this.$store.commit("setSelectedTimezone", item);
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
  margin-bottom: 20px;
}
</style>
