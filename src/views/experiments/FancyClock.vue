<script>
import { defineComponent, computed, ref } from 'vue';
import { useNow } from '@vueuse/core';

export default defineComponent({
  name: 'FancyClockExperiment',
  setup() {
    const { now } = useNow();

    const hours = computed(() => now.value.getHours());
    const minutes = computed(() => now.value.getMinutes());
    return {
      hours,
      minutes,
    };
  },
});
</script>

<template>
  <div class="app container pt-8">
    <div
      class="card mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100 w-48"
    >
      <div class="clock column">
        <span
          class="hours text-gradient bg-gradient-to-t from-red-400 via-orange-500 to-yellow-500"
          >{{ hours }}</span
        >
        <span
          class="minutes text-gradient bg-gradient-to-t from-green-400 via-blue-500 to-yellow-500"
          >{{ minutes }}</span
        >
      </div>
    </div>
  </div>
</template>
