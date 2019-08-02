import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AxiosPlugin from 'axios-plugin'
import VueToolPlugin from 'vue-tool-plugin'

Vue.use(VueToolPlugin, { router })

Vue.use(AxiosPlugin, require.context('@/apiurl', true, /\.js$/), {
    baseURL: '/api',
    // 请求拦截之前
    beforeRequest(config: any) {
        console.log(config)
        return config
    },
    // 接口响应成功事件
    respSuccess(res: any) {
        console.log(res)
    },
    // 接口响应失败事件
    respError(e: any) {
        console.log(e)
    }
})

Vue.prototype.$mm = '妹妹'

// 全局方法 this. 的调用方式
declare module 'vue/types/vue' {
    interface Vue {
        $mm: any
        $tool: any
        $api: any
    }
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
