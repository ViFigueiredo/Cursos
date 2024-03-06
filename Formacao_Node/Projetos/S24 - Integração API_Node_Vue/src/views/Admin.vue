<template>
  <div>
    <header>
      <h2>Painel Admin!</h2>
      <hr />
    </header>
    <div class="logout" @click="logout">Sair</div>

    <div class="admin-functions">
      <ul>
        <li>
          <router-link to="/admin/users">Listar usuários</router-link>
        </li>
        <li>
          <router-link to="/admin/register">Criar usuários</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'login' });
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

.admin-functions {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
}

.logout {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 25px;
  margin-bottom: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.logout:hover {
  text-decoration: underline;
  color: blue;
}
</style>
