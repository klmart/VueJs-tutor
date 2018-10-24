new Vue({
  el: "#app-one",
  data: {
    title: 'Title'
  },

  computed: {},

  methods: {
    changeTitle: function() {
      console.log(this.$refs);
      this.title = this.$refs.myInput.value
    }
  }

});
