<template>
  <div>
    <input type="text" v-model="message" @keyup.enter="saveMessage()">
    <h2>Inner Title</h2>
    <ul>
      <li v-for="person in people">
        {{person}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {bus} from '../main'

  export default {
    props:   {
      people: {
        type:     Array,
        required: false,
        default:  []
      }
    },
    data() {
      return {
        message: ''
      }
    },
    methods: {
      saveMessage: function () {
        //console.log(this.message);
        bus.$emit('message1', this.message);
        this.message = '';
      }
    }
  }
</script>

<style scoped>

</style>
