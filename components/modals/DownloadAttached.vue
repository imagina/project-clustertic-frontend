<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Paperclip } from 'lucide-vue-next'
import type { QDialogProps } from 'quasar'
import type { File } from '~/models/interfaces/projects'

type AdditionalProps = {
  attachedFiles: File[]
}
const props = defineProps<AdditionalProps & QDialogProps>()
const authStore = useAuthStore()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})

function descargarArchivo(item: File) {
  fetch(item.path)
    .then((response) => response.blob())
    .then((blob) => {
      // Crear un objeto URL para el blob
      const enlace = document.createElement('a')
      const objetoURL = URL.createObjectURL(blob)

      // Configurar el enlace para descargar el archivo
      enlace.href = objetoURL
      enlace.download = item.filename ?? 'mi-archivo.pdf' // Nombre sugerido para el archivo descargado

      // Simular un clic en el enlace
      enlace.click()

      // Liberar el objeto URL
      URL.revokeObjectURL(objetoURL)
    })
    .catch((error) => console.error('Error al descargar el archivo:', error))
}
</script>

<template>
  <q-dialog v-model="modelValue" transition-show="fade" transition-hide="fade">
    <q-card
      class="card-edit !tw-rounded-lg lg:tw-w-1/2"
      style="max-width: 80vw"
    >
      <q-card-section>
        <div class="tw-text-lg tw-font-semibold tw-text-white">
          Archivos adjuntos
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p class="tw-text-sm tw-font-normal tw-text-white tw-mb-5">
          Selecciona el archivo a descargar
        </p>
        <div class="tw-flex tw-flex-wrap">
          <ul class="">
            <li
              v-for="item in attachedFiles"
              :key="`category_${item.id}`"
              class="tw-border tw-border-primary tw-text-white tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1 hover:tw-bg-primary hover:tw-text-input"
            >
              <button
                target="_blank"
                referrerpolicy="no-referrer"
                class="tw-bg-transparent tw-leading-loose tw-w-full !tw-justify-start"
                @click="descargarArchivo(item)"
              >
                Descargar Archivo ({{ item.filename }})
              </button>
            </li>
          </ul>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <Button v-close-popup class="close-modal">Cerrar</Button>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="css" scoped>
.card-edit {
  background-color: hsla(240, 23%, 17%, 1);
}

.close-modal {
  @apply tw-font-semibold tw-text-primary;
  background-color: hsla(240, 27%, 55%, 0.56);
}

:deep(.q-field__control) {
  @apply !tw-border-muted-custom !tw-border;
}
</style>
