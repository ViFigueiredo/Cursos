<template>
  <div>
    <h1 class="text-4xl text-center">{{ $t("titulo") }}</h1>

    <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center">
      <UCard v-for="video in videos" :key="video.id" class="my-4 mx-4">
        <h2 class="mb-4">{{ video.descricao }}</h2>
        <iframe
          class="w-full h-48"
          title="Youtube Video Player"
          :src="video.url"
          frameborder="0"
        ></iframe>
        <template #footer>
          <div class="flex justify-between">
            <UButton @click="favoritar(video)">
              {{ $t("textoBotaoFavorito") }}
            </UButton>
            <NuxtLink
              :to="{ name: 'videos-id', params: { id: video.id.toString() } }"
            >
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
import type { Video } from "@/interfaces/video";
// definePageMeta({ layout: 'default' })

const { $toast } = useNuxtApp();
const { adicionarFavorito } = useVideoStore();

const { data: videos, error } = await useFetch("/api/v1/videos");

const favoritar = (video: Video) => {
  adicionarFavorito(video);
  $toast.success("Adicionado com sucesso.");
};

onMounted(() => {
  if (error.value) {
    $toast.error(error.value.statusMessage || "");
  }
});
</script>
