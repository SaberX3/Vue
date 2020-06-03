<template>
  <div id="hello">
    <h1 class="first">{{this.$store.state.title}}</h1>
    <div id='menu'>
      <ul>
        <li @click="routeto">Vuex学习项目</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      data: {

      }
    }
  },
  methods: {
    routeto () {
      this.$router.push({
        name: 'count'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 1rem 0;
}
#hello{
  text-align: center;
}
#menu{
  text-align: left;
  margin-left: 0;
}
</style>
