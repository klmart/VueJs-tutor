var one = new Vue({
  el: "#app-one",
  data: {
    title: 'Title one'
  },

  methods: {},

  computed: {
    greet: function() {
      return 'Hello from Vue one!'
    }
  }
});

var two = new Vue({
  el: "#app-two",
  data: {
    title: 'Title two'
  },

  methods: {
    changeTitleOne: function() {
      one.title = 'Change from Vue two!'
    }
  },

  computed: {
    greet: function() {
      return 'Hello from Vue two!'
    }
  }
})

two.title = 'Change from outside!'
