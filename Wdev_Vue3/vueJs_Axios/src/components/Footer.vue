<template>
  <div>
    <footer>
      <nav class="container">
        <a
          class="social-link"
          v-for="(socialLink, index) in socialLinks"
          :key="index"
          :href="socialLink.link"
          target="_blank"
          ><img :src="socialLink.icon" :alt="socialLink.label" :title="socialLink.label"
        /></a>
      </nav>
    </footer>
  </div>
</template>

<script>
import api from '@/services/api.js'
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [],
    }
  },
  mounted() {
    api.get('/social-links.json').then(res => {
      console.log(res)
      this.socialLinks = res.data
    })
  },
  components: {},
  methods: {},
  props: {},
  emits: [],
}
</script>

<style scoped>
footer {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  flex-grow: 5px;
  height: 60px;
  align-items: center;
}

.social-link {
  border: 1px solid var(--color-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.social-link img {
  width: 20px;
}
</style>
