<template>
  <li
    class="service-item flex justify-center p-5 rounded-2xl z-10 shadow-custom2 border border-gradient-onyx relative"
  >
  <div style="border-radius: inherit;" class="bg-gradient-jet absolute inset-0.5 rounded-2xl w-full h-full -z-10"></div>
    <div class="service-icon-box p-3">
      <img :src="props.iconSrc" alt="icon" width="60" />
    </div>
<slot></slot>
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
