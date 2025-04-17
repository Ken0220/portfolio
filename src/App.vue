<template>
  <main class="w-full items-start flex justify-center relative px-5">
    <div
      class="mx-5 w-full flex flex-col lg:flex-row items-start justify-center gap-10 py-10 h-full"
    >
      <Sidebar />
      <div
        class="w-full lg:w-9/12 mb-4 bg-[rgb(32,32,34)] border border-[rgb(56,56,56)] rounded-2xl shadow-xl relative"
      >
        <NavItems class="z-10 absolute top-0 left-0 hidden md:flex"/>
        <RouterView class="p-10" />
      </div>
    </div>
    <NavItems class="z-10 fixed bottom-0 w-full md:hidden"/>
  </main>
</template>

<script setup lang="ts">
import NavItems from "./layouts/NavItems.vue";
import Sidebar from "./layouts/Sidebar.vue";
</script>
