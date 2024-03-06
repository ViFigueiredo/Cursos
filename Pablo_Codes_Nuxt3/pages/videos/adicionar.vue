<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const router = useRouter();
const { $toast } = useNuxtApp()

const state = reactive({
  descricao: undefined,
  url: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.descricao) errors.push({ path: 'descricao', message: 'Required' })
  if (!state.url) errors.push({ path: 'url', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    await $fetch('/api/v1/videos',
      {
        method: 'POST',
        body: state
      })

    router.push('/videos');
    $toast.success('Adicionado com sucesso.')
  } catch (error) {
    $toast.success("Falha ao adicionar video!");
  }
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Descrição" name="descricao">
      <UInput v-model="state.descricao" />
    </UFormGroup>

    <UFormGroup label="URL" name="url">
      <UInput v-model="state.url" type="url" />
    </UFormGroup>

    <UButton type="submit">
      Adicionar
    </UButton>
  </UForm>
</template>

