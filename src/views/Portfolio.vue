<script setup>
import { ref, computed } from 'vue';
import PortfolioProjects from '@/components/PortfolioProjects.vue';
import Header from '@/components/Header.vue';
import { portfolioProjects as allProjects } from '@/assets/data/demo';

// Выбранная категория
const selectedCategory = ref('All');

// Категории фильтра
const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

// Отфильтрованные проекты
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return allProjects;
  return allProjects.filter(
    project => project.direction === selectedCategory.value
  );
});

// Установить выбранную категорию
function setCategory(category) {
  selectedCategory.value = category;
}
</script>

<template>
    <article class="portfolio " data-page="portfolio">
                <Header>Portfolio</Header>

                <section class="projects">
                    <ul class="filter-list flex flex-wrap sm:justify-center gap-4 items-center">
                        <li v-for="category in categories" :key="category" class="filter-item cursor-pointer">
                            <button 
                            :class="{ 'text-[rgb(255,219,112)]': selectedCategory === category }"
                            @click="setCategory(category)"
                            >
                            {{ category }}
                            </button>
                        </li>
                    </ul>


                    

                    <ul class="project-list grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                        <PortfolioProjects
                            v-for="(el, i) in filteredProjects"
                            :key="i"
                            :icon-src="el.img"
                            >
                            <template v-slot:title>{{ el.title }}</template>
                            <template v-slot:direction>{{ el.direction }}</template>
                        </PortfolioProjects>
                    </ul>
                </section>
            </article>
</template>