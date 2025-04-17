<script setup lang="ts">
import BlogItem from '@/components/BlogItem.vue';
import Header from '@/components/Header.vue';
import { blogItems } from '@/assets/data/demo';

</script>

<template>
    <article class="blog " data-page="blog">
        <Header>Blog</Header>
                <section class="blog-posts">
                    <ul class="blog-posts-list grid lg:grid-cols-2 gap-10 py-5 ">
                        <BlogItem v-for="(el,i) in blogItems" :key="i" :blog-src="el.img">
                            <template v-slot:directory>{{ el.directory }}</template>
                            <template v-slot:date>{{ el.date }}</template>
                            <template v-slot:title>{{ el.title }}</template>
                            <template v-slot:text>{{ el.info }}</template>
                        </BlogItem>
                    </ul>
                </section>
            </article>
</template>