<template>
  <div id="app" class="container mt-5">
    {{ $store.state.user.first_name }} <br><br>

    <label for=""> Primeiro Nome </label><br>
    <input class="form-control" type="text" name="" id="" v-model="myName"><br>

    <button class="btn btn-primary" @click.prevent.stop="saveName"> Save </button>
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

</style>
