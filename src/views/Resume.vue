<script setup lang="ts">
    import Header from '@/components/Header.vue';
</script>
<template>
    <article class="resume " data-page="resume">
    
        <Header>Resume</Header>
                <section class="timeline py-5">
                    <div class="title-wrapper flex items-center gap-5">
                        <div class="icon-box border-gradient-onyx shadow-custom2 size-15 rounded-2xl flex justify-center items-center"><ion-icon name="book-outline"></ion-icon></div>

                        <h3 class="h3 text-3xl font-bold py-5">Education</h3>
                    </div>

                    <ol class="timeline-list font-light text-[rgb(214,214,214)] py-5 text-justify flex flex-col gap-5">
                        <li class="timeline-item ">
                            <h4 class="h4 timeline-item-title text-white font-bold py-2">University school of the arts</h4>
                            <span class="text-[rgb(206,177,90)]">2008 - 2010</span>
                            <p class="timeline-text">There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing. This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration and communication soft skills.</p>
                        </li>

                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title  text-white font-bold py-2">New York Academy of Art</h4>
                            <span class="text-[rgb(206,177,90)]">2006 - 2007</span>
                            <p class="timeline-text">I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to increase my career prospects in a competitive job market.</p>
                        </li>

                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title  text-white font-bold py-2">High School of Art and Design</h4>
                            <span class="text-[rgb(206,177,90)]">2003 - 2005</span>
                            <p class="timeline-text">There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems.</p>
                        </li>
                    </ol>
                </section>

                <section class="timeline py-5">
                    <div class="title-wrapper flex items-center gap-5">
                        <div class="icon-box border-gradient-onyx shadow-custom2 size-15 rounded-2xl flex justify-center items-center"><ion-icon name="book-outline"></ion-icon></div>

                        <h3 class="h3 text-3xl font-bold py-5">Experience</h3>
                    </div>

                    <ol class="timeline-list font-light text-[rgb(214,214,214)] py-5 text-justify flex flex-col gap-5">
                        <li class="timeline-item ">
                            <h4 class="h4 timeline-item-title text-white font-bold py-2">Creative director</h4>
                            <span class="text-[rgb(206,177,90)]">2015 - Present</span>
                            <p class="timeline-text">I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals.</p>
                        </li>

                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title  text-white font-bold py-2">New York Academy of Art</h4>
                            <span class="text-[rgb(206,177,90)]">2013 - 2015</span>
                            <p class="timeline-text">I create and develop visual concepts that align with the project's goals and objectives, supervising the design process and managing timelines and budgets for design projects.</p>
                        </li>

                        <li class="timeline-item">
                            <h4 class="h4 timeline-item-title  text-white font-bold py-2">High School of Art and Design</h4>
                            <span class="text-[rgb(206,177,90)]">2010 - 2013</span>
                            <p class="timeline-text">I create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience.</p>
                        </li>
                    </ol>
                </section>

                <section class="skill">
                    <h3 class="h3 skills-title text-3xl font-bold py-5">My Skills</h3>

                    <ul class="skills-list content-card border-gradient-onyx shadow-custom2 sm:p-10 p-5 rounded-2xl flex flex-col gap-10 mb-10 min-[380px]:mb-0">
                        <li class="skills-item flex flex-col gap-4">
                            <div class="title-wrapper flex gap-4">
                                <h5 class="h5">Web Design</h5>
                                <data value="80">80%</data>
                            </div>

                            <div class="skills-progress-bg bg-[rgba(214,214,214,0.7)] w-full h-2 rounded-full ">
                                <div class="skills-progress-fill bg-gradient-to-r from-[rgb(255,219,112)] to-[rgb(255,187,92)] rounded-full h-2" style="width: 80%;"></div>
                            </div>
                        </li>

                        <li class="skills-item flex flex-col gap-4">
                            <div class="title-wrapper flex gap-4">
                                <h5 class="h5">Graphic Design</h5>
                                <data value="70">70%</data>
                            </div>

                            <div class="skills-progress-bg bg-[rgba(214,214,214,0.7)] w-full h-2 rounded-full ">
                                <div class="skills-progress-fill bg-gradient-to-r from-[rgb(255,219,112)] to-[rgb(255,187,92)] rounded-full h-2" style="width: 70%;"></div>
                            </div>
                        </li>

                        <li class="skills-item flex flex-col gap-4">
                            <div class="title-wrapper flex gap-4">
                                <h5 class="h5">Branding</h5>
                                <data value="90">90%</data>
                            </div>

                            <div class="skills-progress-bg bg-[rgba(214,214,214,0.7)] w-full h-2 rounded-full ">
                                <div class="skills-progress-fill bg-gradient-to-r from-[rgb(255,219,112)] to-[rgb(255,187,92)] rounded-full h-2" style="width: 90%;"></div>
                            </div>
                        </li>

                        <li class="skills-item flex flex-col gap-4">
                            <div class="title-wrapper flex gap-4">
                                <h5 class="h5">WordPress</h5>
                                <data value="50">50%</data>
                            </div>

                            <div class="skills-progress-bg bg-[rgba(214,214,214,0.7)] w-full h-2 rounded-full ">
                                <div class="skills-progress-fill bg-gradient-to-r from-[rgb(255,219,112)] to-[rgb(255,187,92)] rounded-full h-2" style="width: 50%;"></div>
                            </div>
                        </li>
                    </ul>
                </section>
            </article>
</template>