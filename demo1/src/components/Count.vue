<template>
  <div>
    <h1>{{this.$store.state.count}}</h1>
    <div><button @click="blt">plus</button></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    blt () {
      this.$store.dispatch('addAsync', 3)
    }
  }
}
</script>>

<style scoped>
</style>
