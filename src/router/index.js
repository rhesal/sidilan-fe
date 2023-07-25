//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/',
        name: 'pages.peserta',
        component: () => import('../views/pages/peserta.vue')
    },
    {
        path: '/',
        name: 'pages.biodata',
        component: () => import('../views/pages/biodata.vue')
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import('../views/posts/index.vue')
    },
    {
        path: '/create',
        name: 'posts.create',
        component: () => import('../views/posts/create.vue')
    },
    {
        path: '/edit/:id',
        name: 'posts.edit',
        component: () => import('../views/posts/edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router