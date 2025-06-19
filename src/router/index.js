import {createRouter, createWebHistory} from 'vue-router'

import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import BlogView from "../views/BlogView.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutView},
    {path: '/projects', component: ProjectsView},
    {path: '/blog', component: BlogView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;