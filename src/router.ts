import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VueRouterAuto from 'vue-router-auto'

Vue.use(Router)

const routes = VueRouterAuto({
    redirect: '/home',
    rc: require.context('@/views', true, /\.vue$/)
})

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
