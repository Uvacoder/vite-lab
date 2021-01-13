<template>
  <div class="modal-experiment page container">
    <button
      type="button"
      @click="showModal = !showModal"
      class="mx-auto w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    >
      Open Modal
    </button>
  </div>
  <ModalDialog title="Teleporting" :show="showModal">
    <p class="mb-4">Gokuu is...</p>
    <img src="https://i.gifer.com/QjMQ.gif" />
  </ModalDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ModalExperiment',
  setup() {
    const showModal = ref(false);
    return {
      showModal,
    };
  },
});
</script>
