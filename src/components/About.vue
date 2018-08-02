<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'about',
        data () {
            return {
                msg: ' I am page about'
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .about {
    text-align center
    h1 {
      font-size 100px
      color rgba(175, 47, 47, 0.4)
      margin 20px
    }
  }
</style>
