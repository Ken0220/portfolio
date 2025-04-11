<template>
  <main class="w-full items-start flex justify-center relative px-5">
    <div
      class="mx-5 w-full flex items-start justify-center gap-10 py-20 h-full"
    >
      <Sidebar />
      <div
        class="w-9/12 mb-4 bg-[rgb(32,32,34)] border border-[rgb(56,56,56)] rounded-2xl shadow-xl relative"
      >
        <NavItems class="z-10 absolute top-0 left-0" />
        <RouterView class="p-10" />
      </div>
    </div>
   
  </main>
  <button
    @click="showModal = true"
    class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
  >
    Open Animated Modal
  </button>

  <MotionModal v-model="showModal" title="Animated Modal"></MotionModal>

  
</template>

<script setup lang="ts">
import MotionModal from "./components/MotionModal.vue";
import NavItems from "./layouts/NavItems.vue";
import Sidebar from "./layouts/Sidebar.vue";
import { ref } from "vue";

import { testemonials } from "@/assets/data/demo";

const showModal = ref(false);
const myData = ref(testemonials);


</script>
