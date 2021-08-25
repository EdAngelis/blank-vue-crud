import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'Home',
            component: () => import('../view/home/homepage_view.vue')
        },
        {
            path: '/register',
            name:'Register',
            component: () => import('../view/registro/register_view.vue')
        }
    ]
})