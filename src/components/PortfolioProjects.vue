<template>
    <li class="project-item active" data-filter-item data-category="web development">
                            <a href="#" class="flex flex-col gap-2">
                                <figure class="project-img ">
                                    <div class="relative overflow-hidden rounded-2xl group transition-all">
                                        <div class="project-item-icon-box absolute content-center size-15 top-20 left-30 bg-gradient-onyx rounded-xl flex items-center justify-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 z-10">
                                        <ion-icon class="text-[rgb(255,219,112)] size-6" name="eye-outline"></ion-icon>
                                    </div>
                                    <img :src="props.iconSrc" alt="finance"  class="rounded-xl group-hover:scale-105 group-hover:opacity-45 transition-transform duration-300" loading="lazy">
                                    </div>
                                </figure>
                                <div class="">
                                    <h3 class="project-title font-semibold text-white  text-justify"><slot name="title">Title</slot> </h3>
                                <p class="project-category font-light text-[rgb(214,214,214)]  "><slot name="direction">Direction</slot> </p>
                                </div>
                            </a>
                        </li>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        iconSrc:{
            type: String,
            default: "https://i.postimg.cc/qRHpHMyd/project-1.jpg"
        }
    })
</script>