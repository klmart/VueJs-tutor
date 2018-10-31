<template>
  <div id="app">
    <h2>Outer title</h2>
    <List/>
  </div>
</template>

<script>
  import List from './components/List';

  export default {
    components: {
      List,
    },

    data() {
      return {
        people: ['Max', 'Jack', 'Leo'],
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: yellow;
  }
</style>