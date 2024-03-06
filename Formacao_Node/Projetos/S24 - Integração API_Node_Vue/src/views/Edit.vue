<template>
  <div>
    <header>
      <h2>Edição de Usuários</h2>
      <hr />
    </header>
    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="errorForm != undefined" class="notification is-danger mb-4">
          {{ errorForm }}
        </div>

        <label for="">Nome:</label>
        <input class="input" type="text" placeholder="Fulano de Tal" v-model="name" />
        <label for="">E-mail:</label>
        <input class="input" type="text" placeholder="email@email.com.br" v-model="email" />
        <label for="">Senha:</label>
        <input class="input" type="password" placeholder="******" v-model="password" />
        <div class="sel-container">
          <div>
            <label>Cargo:</label>
            <div class="select">
              <select v-model="role">
                <option value="2">Padrão</option>
                <option value="1">Gestor</option>
                <option value="0">Administrador</option>
              </select>
            </div>
          </div>
          <div>
            <label>Status:</label>
            <div class="select">
              <select v-model="status">
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
          </div>
        </div>
        <button class="button is-success is-fullwidth" @click="update">Editar</button>
        <div class="back"><router-link to="/admin">&lt;- Voltar</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    const req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    };
    axios
      .get('http://localhost:3000/users/' + this.$route.params.id, req)
      .then((res) => {
        // console.log(res.data.users);
        this.id = res.data.users[0].id
        this.name = res.data.users[0].name;
        this.email = res.data.users[0].email;
        this.password = res.data.users[0].password;
        this.role = res.data.users[0].role;
        this.status = res.data.users[0].status;
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ path: '/admin/users' });
      });
  },
  data() {
    return {
      id: null,
      name: null,
      email: null,
      password: null,
      role: 2,
      status: null,
      errorForm: undefined
    };
  },
  methods: {
    update() {
      const dataForm = {
        id: this.id,
        email: this.email,
        password: this.password,
        name: this.name,
        role: this.role,
        status: this.status
      };
      const req = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
      };
      axios
        .put('http://localhost:3000/users', dataForm, req)
        .then((res) => {
          // console.log('Sucesso!');
          // console.log(res);
          this.$router.push({ path: '/admin/users' });
        })
        .catch((err) => {
          const msgError = err.response.data.err;
          this.errorForm = msgError;
          // console.log(msgError);
        });
      // console.log(dataForm);
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

.back {
  width: 100%;
  margin-top: 15px;
  text-align: center;
  font-size: 1.5rem;
}

.sel-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.sel-container > div {
  margin-right: 35px;
}
</style>
