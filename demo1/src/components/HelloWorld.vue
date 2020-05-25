<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  mounted () {
    this.$axios({
      method: 'get',
      url: 'https://api.cdnjs.com/libraries'
    }).then((response) => {
      this.msg = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
