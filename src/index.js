import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'
const root = document.createElement('div')
document.body.appendChild(root);
new Vue({
    router,
    render: h => h(App)
}).$mount(root)

// new Vue({
//     el: '#app',    //这里绑定的是index.html中的id为app的div元素
//     router,
//     render: h => h(App)
// })



