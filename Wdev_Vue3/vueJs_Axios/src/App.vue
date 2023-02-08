<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import './styles/Global.css'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  props: {},
  emits: [],
}
</script>

<style scoped></style>
