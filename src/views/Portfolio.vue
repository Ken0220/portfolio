<script setup>
    import PortfolioProjects from '@/components/PortfolioProjects.vue';
    import Header from '@/components/Header.vue';
    import { portfolioProjects } from '@/assets/data/demo';
</script>

<template>
    <article class="portfolio " data-page="portfolio">
                <Header>Portfolio</Header>

                <section class="projects">
                    <ul class="filter-list flex flex-wrap sm:justify-center gap-4 items-center">
                        <li class="filter-item"><button class="active" data-filter-btn>All</button></li>
                        <li class="filter-item"><button data-filter-btn>Web Design</button></li>
                        <li class="filter-item"><button data-filter-btn>Applications</button></li>
                        <li class="filter-item"><button data-filter-btn>Web Development</button></li>
                    </ul>

                    <div class="filter-select-box hidden">
                        <button class="filter-select " data-select>
                            <div class="select-value" data-select-value>Select Category</div>

                            <div class="select-icon">
                                <ion-icon name="chevron-down"></ion-icon>
                            </div>
                        </button>

                        <ul class="select-list">
                            <li class="select-item"><button data-select-item>All</button></li>
                            <li class="select-item"><button data-select-item>Web Design</button></li>
                            <li class="select-item"><button data-select-item>Applications</button></li>
                            <li class="select-item"><button data-select-item>Web Development</button></li>
                        </ul>
                    </div>

                    <ul class="project-list grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                        <PortfolioProjects v-for="(el, i) in portfolioProjects" :key="i" :icon-src="el.img">
                            <template v-slot:title>{{ el.title }}</template>
                            <template v-slot:direction>{{ el.direction }}</template>
                        </PortfolioProjects>
                       </ul>
                </section>
            </article>
</template>