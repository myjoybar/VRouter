<template>
    <div class="main-invite">
        <div v-show="isShow" class="ios">
            <img width='30%' class="begin-sub-img1" src="../assets/images/tu_icon.png"/>
            <p class="begin-sub-txt1"><strong>TalkU iOS </strong></p>
            <p v-on:click="gotoAppStore" class="begin-sub-txt2 roundedRectangle-blue">DOWNLOAD APP </p>
            <p class="begin-sub-txt3">Tap above to get this free calling app!</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import {browser} from '../../static/js/Browser.js'
    import {getGooglePlayUrlByChannel} from '../../static/js/GooglePlayLinks.js'
    import {getAppStoreUrlByChannel} from '../../static/js/AppStoreLinks.js'
    import {getChannel, getLanguage, getModule} from '../../static/js/UrlPathHander.js'
    import {loadLocalMetaJsonInfo} from '../../static/js/LoadLocalMetaJsonInfo.js'
    import Vue from 'vue'

    var vm = new Vue({})
    export default {
        name: 'home',
        head: {
            title: function () {
                return {
                    inner: this.globalConfig.og_title
                }
            },
            meta: function () {
                return [
                    {name: 'description', content: this.globalConfig.description},
                    {property: 'og:title', content: this.globalConfig.og_title},
                    {property: 'og:image', content: this.globalConfig.og_image},
                    {property: 'og:site_name', content: this.globalConfig.og_site_name},
                    {property: 'og:url', content: this.globalConfig.og_url},
                    {property: 'og:type', content: this.globalConfig.og_type},
                ]
            }
        },

        data() {
            return {

                msg: ' I am page invite',
                isShow: false,
                fullUrl: "",
            }
        }
        ,
        methods: {
            initData: function () {
                //判断是否IE内核
                if (browser.versions.mobile) {
                    console.log("is mobile");
                }
                this.fullUrl = window.location.href;
                // 处理meta
                var path = this.$route.path;
                console.log("path= "+path);
                var realChannel = getChannel(path);
                var language = getLanguage(path);
                var module = getModule(path);
                console.log("path = " + path);
                console.log("realChannel = " + realChannel);
                console.log("language = " + language);
                console.log("module = " + module);
            }
            ,
            gotoAppStore: function (event) {
                console.log("is IOS");
                this.isShow = true;
                var path = this.$route.path;
                var realChannel = getChannel(path);
                var url = getAppStoreUrlByChannel(realChannel)
                console.log("url = " + url);
            }
            ,
            gotoGooglePlay: function () {
                console.log("is Android");
                this.isShow = false;
                var path = this.$route.path;
                var realChannel = getChannel(path);
                var url = getGooglePlayUrlByChannel(realChannel)
                console.log("url = " + url);
                // window.location.href = url;
            }

        },
        beforeCreate() {
            console.log("beforeCreate")
        },
        created() {
            console.log("created")
            // console.log("this.$route.path=" + this.$route.path)
            // console.log("window.location.href=" + window.location.href)
            // console.log("this.$route.params=" + this.$route.params)
            this.initData()
        },
        mounted() {
            console.log("mounted")
            if (browser.versions.android) {
                this.gotoGooglePlay();
            }
            if (browser.versions.ios) {
                this.gotoAppStore();
            }
        },
        beforeRouteEnter(to, from, next) {
            var path = to.path
            console.log('beforeRouteEnter222= ' + path)
            loadLocalMetaJsonInfo(function () {
                vm.globalConfig.setog_url( window.location.href)
                next();
            });
        },
        beforeCreate() {//组件生命周期函数
            console.log('beforeCreate222')
        },
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave2222')
        },
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate2222')
        }
    }

</script>
<style lang="stylus" scoped>
    .main-invite {
        text-align center
        h1 {
            font-size 100px
            color rgba(175, 47, 47, 0.4)
            margin 20px
        }

    }

    .begin-sub-img1 {
        margin-top 30%
        left 0px
        top 0px
        z-index -1
    }

    .begin-sub-txt1 {
        left 0px
        top 0px
        z-index -1
        font-size 45px
        margin 2vh auto 0vh auto
        color #525252
        font-weight: bold

    }

    .begin-sub-txt2 {
        left 0px
        top 0px
        z-index -1
        font-size 50px
        margin 5vh auto 0vh auto
        color #ffffff

    }

    .begin-sub-txt3 {
        margin-top 4vh
        left 0px
        top 0px
        padding-right 4vh
        padding-left 4vh
        z-index -1
        font-size 42px
        color #b8b8b8
    }

    .roundedRectangle-blue {
        background #008ef0
        padding-bottom 10px
        padding-top 10px
        padding-right 20px
        padding-left 20px
        max-width 65%
        border-width thin
        border-style solid
        border-radius 2px
        border-color #4c92df #4c92df #4c92df #4c92df
    }

    .btn {
        font-size 100px
    }
</style>