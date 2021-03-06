<template>
  <div class="home page container">
    <transition-group
      appear
      name="staggered-fade-in"
      tag="ul"
      v-show="experiments.length > 0"
      class="flex flex-wrap"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li
        class="p-4 w-full sm:w-1/2"
        v-for="experiment in experiments"
        :key="experiment.name"
      >
        <router-link
          :to="experiment.route"
          class="p-4 block rounded-md border border-gray-100 transition-colors"
          ><p>
            <span class="iconify" data-icon="fa:home" />{{ experiment.name }}
          </p>
          <ul class="flex flex-wrap mt-4" v-if="experiment?.tags?.length > 0">
            <li v-for="tag in experiment?.tags" :key="tag">
              <span
                :class="[
                  'text-xs  rounded-full bg-gradient-to-r from-blue-400 to-purple-600  mr-4 py-1 px-2 inline-block mb-2 text-white',
                ]"
                >{{ tag }}</span
              >
            </li>
          </ul>
        </router-link>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useExperiments } from '../composables/useExperiments';

export default defineComponent({
  name: 'Home',
  setup() {
    const { experiments } = useExperiments();

    const STAGGER_DELAY = 200;

    function beforeEnter(el) {
      el.style.visibility = 'hidden';
    }
    function enter(el) {
      const delay = el.dataset.index * STAGGER_DELAY;
      setTimeout(() => {
        el.classList.add('animate__animated', 'animate__fadeIn');
        el.style.visibility = 'visible';
      }, delay);
    }
    function leave(el) {
      const delay = el.dataset.index * STAGGER_DELAY;
      setTimeout(() => {
        el.classList.add('animate__animated', 'animate__fadeOut');
        el.style.visibility = 'hidden';
      }, delay);
    }
    return {
      experiments,
      beforeEnter,
      enter,
      leave,
    };
  },
});
</script>

<style></style>
