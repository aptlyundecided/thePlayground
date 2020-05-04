import Vue from 'vue'
import VueRouter from 'vue-router'
/*]
[|]
[*/
Vue.use(VueRouter)
/*]
[|] 
[*/
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Landing.vue')
    },
    {
        path: '/app-selector',
        name: 'AppSelector',
        component: () => import('../views/AppSelector.vue')
    },
    {
        path: '/WOD',
        name: 'WOD',
        component: () => import(/* webpackChunkName: "about" */ '../views/WOD.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
/*]
[|] 
[*/
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
/*]
[|] 
[*/
export default router
