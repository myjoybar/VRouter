// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueHead from 'vue-head'
Vue.use(VueHead)

import globalConfig from '../../static/js/GlobalConfig'
Vue.prototype.globalConfig = globalConfig


// import MetaInfo from 'vue-meta-info'
// Vue.use(MetaInfo)

// import About from '../components/About.vue';
// import Home from '../components/Home.vue';
const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const router = new VueRouter({
    routes: [
        // { path: '/home', Home},
        // {  path: '/about', About},
        {path: '/home', component: require('../components/Home.vue').default},
        {path: '/about', component: require('../components/About.vue').default},
        {path: '/testnetwork', component: require('../components/TestNetwork.vue').default},
        {path: '/invite/:id*', component: require('../components/Invite.vue').default},
    ]
})
// 输出router
export default router;

