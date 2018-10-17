new Vue({
  el: "#app",
  data: {
    counter: 0
  },

  methods: {
    substract: function() {
      this.counter--
    },
    reset: function() {
      this.counter = 0
    }
  }
})
