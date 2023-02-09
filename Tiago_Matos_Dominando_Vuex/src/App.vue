<template>
  <div id="app">
    {{ $store.state.user.first_name }} <br>

    <input type="text" name="" id="" v-model="myName">

    <button @click.prevent.stop="saveName"> Save </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      myName: ''
    }
  },
  methods: {
    saveName() {

      /* action */
      // this.$store.dispatch('saveFirstName', this.myName);

      /* mutation */
      this.$store.commit('saveFirstName', this.myName);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
