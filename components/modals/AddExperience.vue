<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Paperclip } from 'lucide-vue-next'
import type { QDialogProps } from 'quasar'

const props = defineProps<QDialogProps>()
const authStore = useAuthStore()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
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

function handleSaveInfo() {
  const toSend: {
    img?: File
    title: string
    description: string
    dateInit: Date
    dateEnd?: Date
    place: string
  } = {
    title: newData.title,
    description: newData.description,
    place: newData.place,
    dateInit: Helper.parseStringToDate(newData.dateInit, 'YYYY-MM-DD'),
    dateEnd: newData.dateEnd
      ? Helper.parseStringToDate(newData.dateEnd, 'YYYY-MM-DD')
      : undefined,
  }
  if (newData.files && newData.files.length > 0) {
    toSend.img = newData.files[0]
  }
  authStore.addExperience(toSend)
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
          bids.
        </p>
        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">Titulo</p>
        <InputCPA
          outlined
          dark
          rounded
          class="input-custom-outline tw-mb-3 search-input-border"
          v-model="newData.title"
          label="Titulo"
        >
          <template v-slot:prepend>F</template>
        </InputCPA>

        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
          Descripción
        </p>
        <Textarea
          v-model="newData.description"
          class="!tw-border-muted-custom tw-text-white"
        ></Textarea>
        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
          Locación
        </p>
        <InputCPA
          outlined
          dark
          rounded
          class="input-custom-outline tw-mb-3 search-input-border"
          v-model="newData.place"
          label="Facebook"
        >
          <template v-slot:prepend>F</template>
        </InputCPA>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <div>
            <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
              Fecha de inicio
            </p>
            <InputCPA
              outlined
              dark
              rounded
              class="input-custom-outline tw-mb-3 search-input-border"
              v-model="newData.dateInit"
              type="date"
            ></InputCPA>
          </div>
          <div>
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
          <div>
            <Dropzone v-model="newData.files">
              <template v-slot:title>
                <div
                  class="tw-flex tw-flex-col tw-items-center tw-justify-center"
                >
                  <Paperclip :size="50" class="tw-mb-3" />
                  <p class="tw-text-base tw-mb-3">
                    {{
                      newData.files
                        ? $t('projects.create.form.files.empty.title')
                        : $t('projects.create.form.files.loadedMsg')
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
                  {{ $t('projects.create.form.files.empty.description') }}
                </p>
              </template>
            </Dropzone>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Decline"
          color="primary"
          class="!tw-text-primary"
          v-close-popup
        />
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
