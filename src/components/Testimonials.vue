<template>
    <li class="testimonials-item min-w-[400px] flex flex-col justify-center p-5 rounded-2xl z-10 shadow-custom2  border-gradient-onyx  relative">
          <div class="content-card relative px-5 py-3" data-testimonials-item>
            <figure class="testimonials-avatar-box absolute -top-10 left-5 bg-gradient-onyx  rounded-2xl ">
              <img
                :src="props.iconSrc"
                alt="avatar"
                data-testimonials-avatar
                width="70"
              />
            </figure>

            <h4 class="h4 testimonials-item-title text-xl font-bold ml-20 " data-testimonials-title>
              <slot name="personName">Name</slot>
            </h4>

            <div class="testimonials-text" data-testimonials-text>
              <p class="line-clamp-2 font-light text-[rgb(214,214,214)]">
                <slot name="text">Text</slot>
              </p>
            </div>
          </div>
        </li>
</template>

<script setup>
    import { defineProps } from 'vue';
const props = defineProps({
  iconSrc: {
    type: String,
    default: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
  },
});
</script>