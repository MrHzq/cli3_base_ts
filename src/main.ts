import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTool from 'vue-tool-plugin'

Vue.use(VueTool, { router, prefix: 'lalal' })

console.log(Vue.prototype)

Vue.prototype.$mm = '妹妹'

// 全局方法 this. 的调用方式
declare module 'vue/types/vue' {
    interface Vue {
        $mm: any
        $setItem: any
        $tool: any
        $to: any
    }
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
