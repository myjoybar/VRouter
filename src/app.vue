<template>
    <div id="app">
        <li>
            <router-link to="/home">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
        <li>
            <router-link to="/testnetwork">Testnetwork</router-link>
        </li>

        <li>
            <router-link to="/invite/ff">Invite/ff</router-link>
        </li>
        <li>
            <router-link to="/invite/ff2">Invite/ff2</router-link>
        </li>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        // beforeCreate(){//组件生命周期函数
        //     console.log('beforeCreate1111')
        // },
        // beforeRouteEnter(to,from,next){
        //     console.log('beforRouteEnter')
        //
        // },
        // beforeRouteLeave (to, from, next) {
        //     console.log('beforeRouteLeave')
        // },
        // beforeRouteUpdate (to, from, next) {
        //     console.log('beforeRouteUpdate')
        // }
    }
</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>

    .main {
        height 400px;
        margin-left 180px;
        margin-right 25px;
    }

</style>