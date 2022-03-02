import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/Portfolio/home'},
        {path: '/Portfolio', redirect: '/Portfolio/home'},
        {path: '/Portfolio/home', component: Home},
        {path: '/Portfolio/resume', component: Resume},
        {path: '/Portfolio/work', component: Work},
        {path: '/Portfolio/contact', component: Contact},
    ]
})

export default router