<template>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        console.log(result);
      })
    }
  }
}
</script>

<style>

</style>