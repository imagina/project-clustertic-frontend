<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Paperclip } from 'lucide-vue-next'
import type { QDialogProps } from 'quasar'

const props = defineProps<QDialogProps>()
const authStore = useAuthStore()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})

const newData = reactive<{
  files?: FileList
  title: string
  description: string
  dateInit: string
  dateEnd?: string
  place: string
}>({
  files: undefined,
  title: '',
  description: '',
  dateInit: '',
  dateEnd: undefined,
  place: '',
})

async function handleSaveInfo() {
  const toSend: {
    img?: File
    title: string
    description: string
    dateInit: string
    dateEnd?: string
    place: string
  } = {
    title: newData.title,
    description: newData.description,
    place: newData.place,
    dateInit: newData.dateInit,
    dateEnd: newData.dateEnd ?? undefined,
  }
  if (newData.files && newData.files.length > 0) {
    toSend.img = newData.files[0]
  }
  try {
    await authStore.addExperience(toSend)
  } finally {
    emits('update:modelValue', false)
  }
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
          Nueva experiencia
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p class="tw-text-sm tw-font-normal tw-text-white">
          You will have the ability to choose wich profile to display in your
          bids.dddd
        </p>
        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">Titulo*</p>
        <InputCPA
          outlined
          dark
          rounded
          class="input-custom-outline tw-mb-3 search-input-border"
          v-model="newData.title"
          label="Titulo"
          required
        >
          <template v-slot:prepend>F</template>
        </InputCPA>

        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
          Descripción*
        </p>
        <Textarea
          v-model="newData.description"
          class="!tw-border-muted-custom tw-text-white"
        ></Textarea>
        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
          Locación*
        </p>
        <InputCPA
          outlined
          dark
          rounded
          class="input-custom-outline tw-mb-3 search-input-border"
          v-model="newData.place"
          label="Lugar"
          required
        ></InputCPA>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <div>
            <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
              Fecha de inicio*
            </p>
            <InputCPA
              outlined
              dark
              rounded
              class="input-custom-outline tw-mb-3 search-input-border"
              v-model="newData.dateInit"
              type="date"
              required
            ></InputCPA>
            <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
              Fecha de fin
            </p>
            <InputCPA
              outlined
              dark
              rounded
              class="input-custom-outline tw-mb-3 search-input-border"
              v-model="newData.dateEnd"
              type="date"
            ></InputCPA>
          </div>
          <div class="tw-flex tw-justify-center tw-items-center">
            <Dropzone class="tw-text-white" v-model="newData.files">
              <template v-slot:title>
                <div
                  class="tw-flex tw-flex-col tw-items-center tw-justify-center"
                >
                  <Paperclip :size="50" class="tw-mb-3" />
                  <p class="tw-text-base tw-mb-3">
                    {{
                      newData.files
                        ? Helper.tLang('projects.create.form.files.empty.title')
                        : Helper.tLang('projects.create.form.files.loadedMsg')
                    }}
                  </p>
                </div>
              </template>
              <template v-slot:subtitle>
                <p v-if="newData.files" class="tw-text-xs tw-text-center">
                  <span
                    class="tw-mr-2"
                    v-for="(file, index) in newData.files"
                    :key="index"
                  >
                    {{ file.name }}
                  </span>
                </p>
                <p v-else class="tw-text-xs tw-text-center">
                  {{
                    Helper.tLang('projects.create.form.files.empty.description')
                  }}
                </p>
              </template>
            </Dropzone>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <Button v-close-popup class="close-modal">Cerrar</Button>
        <Button @click="handleSaveInfo" class="tw-ml-5 tw-font-semibold">
          Guardar
        </Button>
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

.option-skill-list {
  @apply tw-absolute tw-top-full tw-left-0 tw-right-0 tw-bg-white tw-rounded-b-2xl tw-rounded-t-sm tw-z-50;
  ul {
    @apply tw-max-h-0  tw-overflow-y-scroll;
    transition: max-height 1s;
    li {
      @apply tw-p-2 tw-rounded-xl tw-mb-1 tw-cursor-pointer;
      transition: background 0.3s;
      &:hover {
        @apply tw-bg-input tw-text-primary;
      }
    }
  }
}

.skills-input {
  @apply tw-bg-input tw-w-full tw-text-white tw-border-none tw-py-4 tw-px-2 tw-rounded-2xl;
  &:focus {
    @apply tw-border-none tw-outline-none;
  }
}
.skills-input:focus ~ .option-skill-list {
  @apply tw-pb-1;
}
.skills-input:focus ~ .option-skill-list ul {
  @apply tw-max-h-40;
}
</style>
