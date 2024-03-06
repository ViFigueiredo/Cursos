<template>
  <div>
    <h1 class="text-4xl text-center">{{ $t("tituloFavoritos") }}</h1>

    <div class="grid grid-cols-2 lg:grid-cols-2 items-center justify-center">
      <UCard v-for="video in favoritos" :key="video.id" class="my-4 mx-4">
        <h2 class="mb-4"> {{ video.descricao }} </h2>
        <iframe class="w-full min-h-[400px]" title="Youtube Video Player" :src="video.url" frameborder="0"></iframe>
        <template #footer>
          <div class="flex justify-between">
            <UButton @click="removerFavorito(video.id)"> Remover Favorito </UButton>
            <NuxtLink :to="{ name: 'videos-id', params: { id: video.id.toString() } }">
              <UButton label="Ver mais..." color="gray">
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right-20-solid" />
                </template>
              </UButton>
            </NuxtLink>
          </div>
        </template>

      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore)
const { $toast } = useNuxtApp();
const removerFavorito = (id: Number) => {
  videoStore.deletarFavorito(id);
  $toast.error('Removido com sucesso.')
}

</script>