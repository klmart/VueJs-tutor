new Vue({
  el:   "#app",
  data: {
    name: 'klmart',
    job:  'Front-end developer'
  },

  methods: {
    greet: function () {
      return 'Hello me name is ' + this.name
    }
  }
})