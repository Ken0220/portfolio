import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Resume from "@/views/Resume.vue";
import Portfolio from "@/views/Portfolio.vue"
import Blog from "@/views/Blog.vue"
import Contact from "@/views/Contact.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: "/about"},
        {path: "/about", component: About},
        {path: "/resume", component: Resume},
        {path: "/portfolio", component: Portfolio},
        {path: "/blog", component: Blog},
        {path: "/contact", component: Contact},
    ],
})
export default router;