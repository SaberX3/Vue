<template>
  <div>
    <button @click="substract">-</button>
  </div>
</template>

<script>
export default {
  name: 'bltsubtract',
  data () {
    return {}
  },
  props: {
    num: Number
  },
  methods: {
    substract: function () {
      this.$store.commit('subtract', this.num)
    }
  }
}
</script>
