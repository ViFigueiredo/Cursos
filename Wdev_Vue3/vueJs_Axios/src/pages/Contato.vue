<template>
  <div>
    <main>
      <section class="container">
        <h1>Contato</h1>
        <section class="contacts">
          <div class="contact" v-for="(contact, index) in contacts" :key="index">
            <div class="contact-title">{{ contact.title }}</div>
            <a href="{{ contact.link }}" target="_blank">{{ contact.label }}</a>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import api from '@/services/api.js'
export default {
  name: 'Contato',
  data() {
    return {
      contacts: [],
    }
  },
  mounted() {
    api.get('/contacts.json').then(res => {
      console.log(res)
      this.contacts = res.data
    })
  },
  components: {},
  methods: {},
  props: {},
  emits: [],
}
</script>

<style scoped>
.contacts,
.contacts a,
.contact {
  color: var(--color-text-dark);
}

.contacts,
.contact {
  margin-bottom: 40px;
}

.contact-title {
  font-weight: 600;
}
</style>
