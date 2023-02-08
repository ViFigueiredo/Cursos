<template>
  <div class="formulario">
    <div class="formulario-title">{{ title }}</div>
    <input type="text" class="formulario-input" v-model="inputValue" />
    <button :disabled="inputValue.length === 0" @click="onSubmit">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'Formulario',
  data() {
    return {
      inputValue: '',
    }
  },
  components: {},
  methods: {
    onSubmit: function () {
      this.action(this.inputValue)
      this.inputValue = ''
    },
  },
  props: {
    title: String,
    button: String,
    action: Function,
  },
  emits: [],
}
</script>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
}

.formulario-input {
  padding: 10px 5px;
  border: 0;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  color: var(--color-text-dark);
}
</style>
