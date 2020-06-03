<template>
  <div id='main'>
    <h1>{{this.$store.state.count}}</h1>
    <div class="options cleanfloat">
      <div class="blt"><button @click="blt">+</button></div>
      <bltsubtract class="blt" v-bind:num="2"></bltsubtract>
    </div>
    <clearBlt @func="clear"></clearBlt>
  </div>
</template>

<script>
import bltsubtract from './bltsubtract'
import clearBlt from './clearblt'
export default {
  name: 'Count',
  components: {
    bltsubtract,
    clearBlt
  },
  data () {
    return {}
  },
  methods: {
    blt () {
      this.$store.commit('plus', 2)
    },
    clear (msg) {
      this.$store.commit('clear')
      console.log(msg)
    }
  }
}
</script>>

<style lang="less" scoped>
#main{
  text-align: center;
}
.options{
  width: 200px;
  margin: 0 auto;
}
.blt{
  float: left;
  margin-left: 50px;
}
.cleanfloat::after{
  content: '';
  display: block;
  clear: both;
}
</style>
