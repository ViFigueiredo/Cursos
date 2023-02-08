<template>
  <div>
    <main>
      <div class="text-top">Vídeos novos toda <b>quinta</b> às <b>20hs.</b></div>
      <a href="https://youtube.com/wdevoficial" target="_blank">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg"
          alt="Inscreva-se"
          id="subscribe"
        />
      </a>
      <div class="text-bottom">youtube.com/wdevoficial</div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {},
  emits: [],
}
</script>

<style scoped>
main {
  background-color: var(--color-background-home);
  justify-content: center;
  align-items: center;
}

.text-top,
.text-bottom {
  color: var(--color-text-light);
  margin: 20px 0;
}

.text-top {
  font-size: 22px;
}

.text-bottom {
  font-size: 18px;
}

#subscribe {
  width: 340px;
}

@media (min-width: 700px) {
  #subscribe {
    width: 370px;
  }
}
</style>
