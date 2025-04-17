<template>
  <li
    class="service-item flex p-5 rounded-2xl z-10 shadow-custom2 border border-gradient-onyx relative hover:scale-105 transition-all ease-in-out duration-300"
  >
    <div class="service-icon-box p-3 hidden md:block">
      <img :src="props.iconSrc" alt="icon" class="min-w-[50px]"  />
    </div>
    <div class="service-content-box">
      <h4 class="h4 service-item-title font-bold text-xl pb-2">
        <slot name="title">Title</slot>
      </h4>
      <p class="service-item-text font-light text-[rgb(214,214,214)]">
        <slot name="description"> Description </slot>
      </p>
    </div>
  </li>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  iconSrc: {
    type: String,
    default: "https://i.postimg.cc/4389jZkP/icon-design.png",
  },
});
</script>
