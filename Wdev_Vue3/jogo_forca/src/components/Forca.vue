<template>
  <div class="forca">
    <img
      :src="`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${erros}.svg`"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'Forca',
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {
    erros: Number,
  },
  emits: [],
}
</script>

<style scoped>
.forca img {
  height: 100px;
}
</style>
