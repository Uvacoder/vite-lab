<script>
import { defineComponent, computed, ref } from 'vue';
import { useNow } from '@vueuse/core';

export default defineComponent({
  name: 'FancyClockExperiment',
  setup() {
    const { now } = useNow();
    const showValues = ref(false);
    setTimeout(() => {
      showValues.value = true;
    }, 1000);

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
      showValues,
    };
  },
});
</script>

<template>
  <div class="app container pt-8">
    <div
      class="card mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100 w-48 h-30 min-h-30"
    >
      <div class="clock flex flex-col items-center font-extrabold">
        <transition
          name="custom-classes-transition"
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__bounceOutRight"
        >
          <span
            v-show="showValues"
            class="hours text-6xl font-display text-gradient bg-gradient-to-t from-red-400 via-orange-500 to-yellow-200 z-10"
            >{{ hours }}</span
          >
        </transition>
        <transition
          name="custom-classes-transition"
          enter-active-class="animate__animated animate__fadeInUp  animate__delay-1s"
          leave-active-class="animate__animated animate__bounceOutRight"
        >
          <span
            v-show="showValues"
            class="minutes text-6xl font-display text-gradient bg-gradient-to-t from-green-400 via-blue-400 to-lime-200 -mt-4"
            >{{ minutes }}</span
          >
        </transition>
      </div>
    </div>
  </div>
</template>
