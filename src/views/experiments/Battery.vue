<script>
import { defineComponent, computed, ref } from 'vue';
import { useBattery } from '@vueuse/core';

export default defineComponent({
  name: 'BatteryExperiment',
  setup() {
    const { charging, chargingTime, dischargingTime, level } = useBattery();

    const batteryLevel = computed(() => Math.round(level.value * 100));

    console.log({ ...useBattery() });

    const batteryBg = computed(() => {
      if (batteryLevel.value > 75) {
        return 'bg-green-400';
      } else if (batteryLevel.value > 25 && batteryLevel.value <= 75) {
        return 'bg-yellow-400';
      } else {
        return 'bg-red-400';
      }
    });

    const batteryFill = computed(() => ({
      width: `${batteryLevel.value}%`,
    }));

    return {
      batteryFill,
      batteryLevel,
      batteryBg,
      charging,
    };
  },
});
</script>

<template>
  <div class="app container pt-8">
    <div
      class="card mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100 w-48"
    >
      <div class="battery w-48 relative flex items-center">
        <div
          class="shadow w-1/2 rounded border-2 border-gray-400 flex my-1 relative"
        >
          <div
            class="border-r-8 h-6 rounded-r absolute flex border-gray-400 transform translate-x-24 mt-2 z-10"
          ></div>
          <div
            class="cursor-default text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white"
            :class="batteryBg"
            :style="batteryFill"
          >
            <div class="absolute left-0 mx-8 text-gray-700">
              {{ batteryLevel }}%
            </div>
          </div>
        </div>
        <i-bx-bxs-zap class="fill-current text-gray-400 ml-4" v-if="charging" />
      </div>
    </div>
  </div>
</template>
