<template>
    <div class="main-home">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: ' I am page home'
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
</style>