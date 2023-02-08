<template>
  <div>
    <main>
      <section class="container">
        <h1>Sobre</h1>
        <div class="about" v-html="about"></div>
      </section>
    </main>
  </div>
</template>

<script>
import api from '@/services/api.js'
export default {
  name: 'Sobre',
  data() {
    return {
      about: null,
    }
  },
  mounted() {
    api.get('/about.json').then(res => {
      console.log(res)
      this.about = res.data.about
    })
  },
  components: {},
  methods: {},
  props: {},
  emits: [],
}
</script>

<style scoped>
.about {
  margin-bottom: 40px;
  color: var(--color-text-dark);
}
</style>
