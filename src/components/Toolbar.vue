<template>
  <header class="toolbar flex px-8 py-4 border-b border-gray-100">
    <h1 class="text-bg text-xl font-bold font-display text-gray-700">
      ⚡️ {{ title }}
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Toolbar',
  setup() {
    const route = useRoute();
    const title = computed(() => route?.meta?.title || 'Vite Lab');

    return { title };
  },
});
</script>

<style></style>
