<template>
    <div class="main-home">
        <h1>{{ msg }}</h1>
        <div >
            <button class="btn" v-on:click="greetRemote">网络请求</button>

        </div>
        <div >
            <button class="btn" v-on:click="greetLocal">本地数据</button>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'home',
        data() {
            return {
                msg: ' I am page test net axios',
                name: 'Vue.js',
                // dataURL: "http://mobile.weather.com.cn",
                // method:"/data/forecast/101010100.html?_=1381891660081",
                dataURL: "https://106.14.139.72",
                method: "/constellation/findallbroadcast?pageNumber=0&pageSize=50&constellationType=1&sortDirection=0",
                localPath: "../../static/data/meta.json",

            }
        },
        mounted() {
           // this.greetLocal();
        },
        methods: {
            greetRemote: function (event) {
                // alert('Hello ' + this.name + '!')
                axios({
                    method: "get",
                    url: this.dataURL + this.method,
                }).then((news) => {
                        this.news = news.data;
                        console.log(news);
                    }
                ).catch((err) => {
                        console.log(err);
                    }
                );
                // axios.get(this.dataURL + this.method).then((news) => {
                //         this.news = news.data;
                //       console.log(news);
                //     }
                // ).catch((err) => {
                //         console.log(err);
                //     }
                // );
            },
            greetLocal: function (event) {
                axios.get(this.localPath).then((response) => {
                        console.log(response);
                      alert(response)
                    }
                ).catch((err) => {
                        console.log(err);
                    }
                );
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .main-home {
        text-align center
        h1 {
            font-size 100px
            color rgba(175, 47, 47, 0.4)
            margin 20px
        }
    }

    .btn {
        font-size 100px
    }
</style>