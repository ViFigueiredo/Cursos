<template>
  <div>
    <header>
      <h2>Login de Usuários</h2>
      <hr />
    </header>
    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="errorForm != undefined" class="notification is-danger mb-4">
          {{ errorForm }}
        </div>

        <label for="">E-mail:</label>
        <input class="input" type="text" placeholder="email@email.com.br" v-model="email" />
        <label for="">Senha:</label>
        <input class="input" type="password" placeholder="******" v-model="password" />
        <button class="button is-success is-fullwidth" @click="login">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: null,
      password: null,
      errorForm: undefined
    };
  },
  methods: {
    login() {
      const dataForm = {
        email: this.email,
        password: this.password
      };
      axios
        .post('http://localhost:3000/auth/login', dataForm)
        .then((res) => {
          console.log(res);
          if (res.data.token != undefined) {
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('role', res.data.role);
            if (res.data.role == 0) this.$router.push({ name: 'admin' });
            if (res.data.role == 1) this.$router.push({ name: 'gestao' });
            if (res.data.role == 2) this.$router.push({ name: 'home' });
          }
        })
        .catch((err) => {
          // console.log(err);
          const msgError = err.response.data.err;
          this.errorForm = msgError;
        });
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 25px;
}
label + input {
  margin-bottom: 25px;
}

.select {
  margin-left: 15px;
}

button {
  margin-top: 25px;
}
</style>
