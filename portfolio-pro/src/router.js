import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import Intro from './components/Intro.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/portfolio'},
        {path: '/portfolio', component: Intro},
        {path: '/portfolio/home', component: Home},
        {path: '/portfolio/resume', component: Resume},
        {path: '/portfolio/work', component: Work},
        {path: '/portfolio/contact', component: Contact},
    ]
})

export default router