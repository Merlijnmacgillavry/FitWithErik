import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('./components/Home.vue')
    },
    {
        path: "/online_coaching",
        name: "Online_Coaching",
        component: () => import('./components/Online_Coaching.vue')
    },
    {
        path: "/custom_plans",
        name: "Custom_Plans",
        component: () => import('./components/Custom_Plans.vue')
    },
    {
        path: "/recipes",
        name: "Recipes",
        component: () => import('./components/Recipes.vue')
    },
    {
        path: "/about",
        name: "About_Me",
        component: () => import('./components/About_Me.vue')
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import('./components/Contact.vue')
    },

]

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active',
    mode: 'history'
})

export default router;