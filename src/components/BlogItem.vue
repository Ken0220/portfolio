<template>
    <li class="blog-post-item group">
                            <a href="#">
                                    <figure class="blog-banner-box">
                                        <img :src="props.blogSrc" alt="Design conferences in 2024" class="rounded-2xl" loading="lazy">
                                    </figure>

                                <div class="blog-content p-5">
                                    <div class="blog-meta flex items-center py-2 gap-2 text-[rgb(214,214,214)]">
                                        <p class="blog-category"><slot name="directory">Theme</slot></p>
                                        <div class="size-1 rounded-full bg-[rgb(214,214,214)]"></div>
                                        <time datetime="2024-02-23"><slot name="date">Date</slot></time>
                                    </div>

                                    <h3 class="h3 blog-item-title text-2xl font-bold group-hover:text-[rgb(255,219,112)]"> <slot name="title">Title</slot></h3>
                                    <p class="blog-text font-light text-[rgb(214,214,214)] py-5 text-justify"><slot name="text">Text</slot> </p>
                                </div>
                            </a>
                        </li>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        blogSrc:{
            type: String,
            default: "https://i.postimg.cc/DysCZrWs/blog-1.jpg"
        }
    })
</script>


