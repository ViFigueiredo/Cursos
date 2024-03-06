<script lang="js" setup>
// const requiAsyncData = await useAsyncData("cliente", () =>
//   $fetch("https://reqres.in/api/users?page=2")
// );

// const { payload } = useNuxtApp();

// console.log(payload.data["cliente"]);

const pagina = ref(1);

// const {
//   data: clientes,
//   pending,
//   error,
//   refresh,
//   // execute,
//   status,
// } = useLazyFetch(`https://reqres.in/api/users`, {
//   server: false, // client side
//   // pick: ['page', 'data'] // seleciona dados
//   transform: (clientes) => {
//     return clientes.data.map((p) => ({
//       id: p.id,
//       nome: p.first_name,
//       sobrenome: p.last_name,
//       foto: p.avatar
//     }))
//   },
//   // watch: [pagina],
//   query: {
//     page: pagina
//   }
// });

const {data: clientes, pending, refresh, error, status } = await useAsyncData('clientes', async () => {
  const [pessoas, aleatorios] = await Promise.all([
    $fetch('https://reqres.in/api/users'),
    $fetch('https://reqres.in/api/unknown'),
  ])

  return {pessoas, aleatorios}
});

console.log(clientes.value.pessoas);
// console.log(clientes.value.aleatorios);

const pessoas = clientes.value.pessoas.data;

const irPagina = (numeroPagina) => {
  pagina.value = numeroPagina;
}
</script>

<template>
  <h1 class="text-5xl text-center my-4">Clientes</h1>
  <button @click="refresh" class="px-4 py-2 bg-green-400 shadow-md rounded-md">
    Recarregar
  </button>
  {{ status }}
  <div v-if="pending">Carregando...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
    <div class="shadow-md px-4 py-2" v-for="c in pessoas" :key="c.id">
      <img :src="c.avatar" class="rounded-full mx-auto" />
      <h3 class="text-2xl text-center">{{ c.first_name }} {{ c.last_name }}</h3>
    </div>
  </div>

  <div class="flex gap-2">
    <button
      v-for="i in 2"
      :key="n"
      class="px-2 bg-slate-400"
      @click="irPagina(i)"
    >
      {{ i }}
    </button>
  </div>
</template>

<style lang="css" scoped></style>
