Vue.component('greet', {
  template: '<h2>{{title}}<button @click="changeTitle">Change title</button></h2>',
  data: function() {
    return {
      title: 'Title template'
    }
  },
  methods: {
    changeTitle: function() {
      this.title = 'Update title!'
    }
  },
});

new Vue({
  el: "#app-one",
  data: {},

  methods: {},

  computed: {}
});
