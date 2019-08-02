<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class Home extends Vue {
       public created() {
            console.log(this.$api)
            const b = { name: '12' }
            const a = this.$tool.copy(b)
            console.log(a)
            console.log(this.$tool.to)
            console.log(this.$tool.fdate())
            console.log(this.$tool.fprice(1259465))
            this.$tool.setItem('id', '111111')
            this.GetImageCaptcha()
        }
        public GetImageCaptcha() {
            this.$api.GetImageCaptcha().then((res: any) => {
                if (res.Code === 1) {
                    console.log(res.Data)
                    setTimeout(() => {
                        this.$tool.to('/about')
                    }, 5000)
                }
            })
        }
    }
</script>
