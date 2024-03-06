<template>
  <div>
    <header>
      <h2>Painel Gestor!</h2>
      <hr />
    </header>
    <div class="logout" @click="logout">Sair</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 25px;
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
