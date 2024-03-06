<template>
  <div>
    <header>
      <h2>Usuários</h2>
      <hr />
      <div class="back"><router-link to="/admin">&lt;- Voltar</router-link></div>
    </header>

    <div :class="{ modal: true, 'is-active': showModal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Tem certeza disso?</p>
          </header>
          <footer class="card-footer">
            <a href="#" class="card-footer-item" @click="closeModalDelete">Cancelar</a>
            <a href="#" class="card-footer-item" @click="deleteUser">Deletar</a>
          </footer>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModalDelete"></button>
    </div>

    <div class="table-container">
      <table class="table is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Status</th>
            <th class="actions-title">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ processRole(user.role) }}</td>
            <td>{{ user.status }}</td>
            <td>
              <button class="button is-small is-rounded is-warning actions">
                <router-link :to="{ path: '/admin/users/edit/' + user.id }">Editar</router-link>
              </button>
              <button
                class="button is-small is-rounded is-danger"
                @click="openModalDelete(user.id)"
              >
                Deletar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: null,
      showModal: false,
      idUserDelete: null
    };
  },
  methods: {
    processRole(v) {
      if (v == 0) return 'Administrador';
      if (v == 1) return 'Gestor';
      if (v == 2) return 'Usuário';
    },
    openModalDelete(id) {
      this.showModal = true;
      this.idUserDelete = id;
      // console.log(id);
    },
    closeModalDelete() {
      this.showModal = false;
    },
    deleteUser() {
      const req = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
      };
      axios
        .delete(`http://localhost:3000/users/${this.idUserDelete}`, req)
        .then((res) => {
          // console.log(res);
          this.showModal = false;
          // this.users = this.users.filter((u) => u.id != this.deleteUserId);
          window.location.reload();
        })
        .catch((err) => {
          const msgError = err.response.data.err;
          this.errorForm = msgError;
          this.showModal = false;
          // console.log(msgError);
        });
    }
  },
  created() {
    const req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      }
    };
    axios
      .get('http://localhost:3000/users', req)
      .then((res) => {
        return (this.users = res.data.users);
      })
      .catch((err) => {
        const msgError = err.response.data.err;
        this.errorForm = msgError;
        // console.log(msgError);
      });
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

.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  width: 100%;
  margin: 15px 0;
  text-align: center;
  font-size: 1.5rem;
}

.actions {
  margin-right: 10px;
}

.actions-title {
  text-align: center !important;
}

:is(td, th) {
  vertical-align: middle !important;
}
</style>
