<script setup lang="ts">
import path from "path"
import NavItems from "./layouts/NavItems.vue"
import Sidebar from "./layouts/Sidebar.vue"
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(() => {
  window.addEventListener('load',()=>{
    loaded.value = true
  })
})
</script>

<template>
  <main class="w-full items-start flex justify-center relative px-5" >
    <div class="mx-5 w-full flex flex-col lg:flex-row items-start justify-center gap-10 py-10 h-full">
      
        <Sidebar  class="transition-all lg:duration-500 " :class="loaded == true? 'translate-x-0': '-translate-x-full'" />
      
      
        <div class="w-full lg:w-9/12 sm:mb-4 mb-20 bg-[rgb(32,32,34)] border border-[rgb(56,56,56)] rounded-2xl shadow-xl relative transition-all lg:duration-500"
        :class="loaded == true? 'opacity-100': 'opacity-0'">
          <NavItems class="z-10 absolute top-0 left-0 hidden md:flex"/>
          <Transition
            mode="out-in"
            appear
            enter-active-class="transition-opacity duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <RouterView :key="$route.fullPath" class="transition-all lg:duration-500 sm:p-10 p-5" :class="loaded == true? 'opacity-100': 'opacity-0'" />
          </Transition>
          
        </div>
     

    </div>

    <NavItems class="z-10 fixed bottom-0 w-full md:hidden"/>
  </main>
</template>


