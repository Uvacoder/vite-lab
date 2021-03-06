<script>
import { defineComponent, computed } from 'vue';
import { useNow } from '@vueuse/core';

export default defineComponent({
  name: 'FancyClockExperiment',
  setup() {
    const { now } = useNow();

    const hours = computed(() =>
      now.value.getHours() < 10
        ? `0${now.value.getHours()}`
        : now.value.getHours(),
    );
    const minutes = computed(() =>
      now.value.getMinutes() < 10
        ? `0${now.value.getMinutes()}`
        : now.value.getMinutes(),
    );
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
      <div class="clock flex flex-col items-center font-extrabold">
        <span
          class="hours text-6xl font-display text-gradient bg-gradient-to-t from-red-400 via-orange-500 to-yellow-200 z-10"
          >{{ hours }}</span
        >
        <span
          class="minutes text-6xl font-display text-gradient bg-gradient-to-t from-green-400 via-blue-400 to-lime-200 -mt-4"
          >{{ minutes }}</span
        >
      </div>
    </div>
  </div>
</template>
