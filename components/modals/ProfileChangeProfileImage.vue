<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { QDialogProps } from 'quasar'
import type { ProjectTag } from '~/models/interfaces/projects'
import { Paperclip } from 'lucide-vue-next'

const props = defineProps<QDialogProps>()
const authStore = useAuthStore()

const refForm: any = ref()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})

const dataToSave = reactive<{
  files?: FileList
}>({
  files: undefined,
})

async function sendImg() {
  try {
    const is_valid = await refForm.value.validate()
    if (!is_valid) return

    // await store.login(auth);
    if (dataToSave.files && dataToSave.files?.length > 0) {
      const file = dataToSave.files['0']
      await authStore.changeProfileImage(file)
    }
  } catch (erro) {
    console.log(erro)
  }
}
</script>

<template>
  <q-dialog v-model="modelValue" transition-show="fade" transition-hide="fade">
    <q-card class="card-edit !tw-rounded-lg" style="max-width: 80vw">
      <q-card-section>
        <div class="tw-text-lg tw-font-semibold tw-text-white">
          Editar Perfil
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form
          class="tw-text-white lg:tw-min-w-[36rem]"
          @submit.prevent.stop="sendImg"
          ref="refForm"
        >
          <label
            class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10"
          >
            selecciona la imagen del perfil
          </label>
          <Dropzone v-model="dataToSave.files">
            <template v-slot:title>
              <div
                class="tw-flex tw-flex-col tw-items-center tw-justify-center"
              >
                <Paperclip :size="50" class="tw-mb-3" />
                <p class="tw-text-base tw-mb-3">
                  {{
                    dataToSave.files
                      ? Helper.tLang('projects.create.form.files.empty.title')
                      : Helper.tLang('projects.create.form.files.loadedMsg')
                  }}
                </p>
              </div>
            </template>
            <template v-slot:subtitle>
              <p v-if="dataToSave.files" class="tw-text-xs tw-text-center">
                <span
                  class="tw-mr-2"
                  v-for="(file, index) in dataToSave.files"
                  :key="index"
                >
                  {{ file.name }}
                </span>
              </p>
              <p v-else class="tw-text-xs tw-text-center">
                {{ Helper.tLang('projects.create.form.files.empty.description') }}
              </p>
            </template>
          </Dropzone>
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" class="!tw-text-primary" v-close-popup />
        <Button @click="sendImg" class="tw-ml-5 tw-font-semibold">
          Guardar foto
        </Button>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="css" scoped>
.card-edit {
  background-color: hsla(240, 23%, 17%, 1);
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

.skills-input:focus ~ .option-skill-list {
  @apply tw-pb-1;
}
.skills-input:focus ~ .option-skill-list ul {
  @apply tw-max-h-40;
}
</style>
