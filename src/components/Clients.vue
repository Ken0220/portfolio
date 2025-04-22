<template>
    <li class="clients-item flex items-center justify-center cursor-pointer">
          <a href="#"
            ><img
            class="invert brightness-0 hover:invert-0 hover:brightness-100 transition-all duration-300"
               width="200"
              :src="props.iconSrc"
              alt="logo"
          /></a>
        </li>
</template>
<script setup> 
import { defineProps } from 'vue';
    const props = defineProps({
        iconSrc:{
            type: String,
            default: "https://i.postimg.cc/YqfKyG66/logo-1-color.png"
        }
    })
</script>