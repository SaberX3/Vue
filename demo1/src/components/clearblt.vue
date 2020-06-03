<template>
  <div>
    <button @click="clear">归零</button>
  </div>
</template>

<script>
export default {
  name: 'clearblt',
  data () {
    return {
    }
  },
  methods: {
    clear: function () {
      this.$emit('func', 'ok')
    }
  }

}
</script>
