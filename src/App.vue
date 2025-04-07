<script setup>
   import NavItems from './layouts/NavItems.vue';
   import Sidebar from './layouts/Sidebar.vue';
</script>

<template>
 <main>
  <div class="w-[1440px] mx-auto flex gap-10 py-20 relative">
    <!-- Sidebar -->
    <div class="w-3/12 flex sticky top-10 h-[900px] justify-center items-center p-10 mb-4 
                bg-[rgb(32,32,34)] border border-[rgb(56,56,56)] rounded-2xl 
                shadow-xl">
      <Sidebar/>
    </div>
    
    <!-- Main content -->
    <div class="w-9/12  mb-4 bg-[rgb(32,32,34)] border border-[rgb(56,56,56)] 
                rounded-2xl shadow-xl relative">
      <NavItems class=" z-10 absolute top-0 left-0"/>
      <RouterView class="p-10"/>
    </div>
  </div>
</main>
</template>

