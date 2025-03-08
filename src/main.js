import { createApp } from 'vue'
import './style.css'
import '../node_modules/flowbite/dist/flowbite.min.js'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from './components/About.vue'
import { createPinia } from 'pinia'
import Experience from './components/Experience.vue'
import Skill from './components/Skill.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'

const pinia = createPinia();

const router = createRouter({
    routes: [
        {
            path: "/",
            component: About,
            name: "about",
            meta: {
                title: "About | Dicki D. Saputra",
            }
        },
        {
            path: "/experience",
            component: Experience,
            name: "experience",
            meta: {
                title: "Experience | Dicki D. Saputra",
            }
        },
        {
            path: "/skill",
            component: Skill,
            name: "skill",
            meta: {
                title: "Skill | Dicki D. Saputra",
            }
        },
        {
            path: "/contact",
            component: Contact,
            name: "contact",
            meta: {
                title: "Contact | Dicki D. Saputra",
            }
        },
        {
            path: "/:notFound*",
            component: NotFound,
            name: "notFound",
            meta: {
                title: "404 Not Found | Dicki D. Saputra",
            }
        }
    ],
    history: createWebHistory(),
});

router.beforeEach((to) => {    
    document.title = to.meta?.title ?? 'Dicki D. Saputra';
});

createApp(App).use(pinia).use(router).mount('#app')
