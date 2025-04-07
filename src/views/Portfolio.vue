<script setup>
    import PortfolioProjects from '@/components/PortfolioProjects.vue';
</script>

<template>
    <article class="portfolio " data-page="portfolio">
                <header>
                    <h2 class="h2 article-title text-3xl font-bold pb-10 relative before:content-[''] before:absolute before:size-10 before:w-10 before:h-1 before:bottom-5 before:rounded-2xl before:bg-gradient-to-r before:from-[rgb(255,219,112))] before:to-[rgb(255,187,92)]">Portfolio</h2>
                </header>

                <section class="projects">
                    <ul class="filter-list flex gap-4 items-center">
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

                    <ul class="project-list grid grid-cols-3 gap-5 py-5">
                        <PortfolioProjects icon-src="https://i.postimg.cc/qRHpHMyd/project-1.jpg">
                            <template v-slot:title>Finance</template>
                            <template v-slot:direction>Web Development</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/bNrcM2Wt/project-2.png">
                            <template v-slot:title>Orizon</template>
                            <template v-slot:direction>Web Development</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/jSJVqYsq/project-3.jpg">
                            <template v-slot:title>Fundo</template>
                            <template v-slot:direction>Web Design</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/dtpXxNGb/project-4.png">
                            <template v-slot:title>Brawlhalla</template>
                            <template v-slot:direction>Applications</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/43T0JKLw/project-5.png">
                            <template v-slot:title>DSM.</template>
                            <template v-slot:direction>Web Design</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/qR1DX1kZ/project-6.png">
                            <template v-slot:title>Metaspark</template>
                            <template v-slot:direction>Web Design</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/Kj4q9tjc/project-7.png">
                            <template v-slot:title>Summary</template>
                            <template v-slot:direction>Web Development</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/rw2j4B1w/project-8.jpg">
                            <template v-slot:title>Task Manager</template>
                            <template v-slot:direction>Applications</template>
                        </PortfolioProjects>
                        <PortfolioProjects icon-src="https://i.postimg.cc/7LxNsSQv/project-9.png">
                            <template v-slot:title>Arrival</template>
                            <template v-slot:direction>Web Development</template>
                        </PortfolioProjects>
                    </ul>
                </section>
            </article>
</template>