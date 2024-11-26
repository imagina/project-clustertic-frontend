<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { XIcon } from 'lucide-vue-next'
import type { QDialogProps } from 'quasar'
import type { ProjectTag } from '~/models/interfaces/projects'
import type { UserSkill } from '~/models/interfaces/user'

let debounceTimeout: any = null
const props = defineProps<QDialogProps>()
const categoryStore = useCategoryStore()
const authStore = useAuthStore()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})

const newData = reactive<{
  companyName: string
  firstName: string
  lastName: string
  description: string
  skills: UserSkill[]
  searchSkills: string
  facebook: string
  web: string
  twitter: string
  linkedin: string
  place: string
  phone: string
  email: string
}>({
  companyName: '',
  firstName: '',
  lastName: '',
  description: '',
  skills: [],
  searchSkills: '',
  facebook: '',
  web: '',
  twitter: '',
  linkedin: '',
  place: '',
  phone: '',
  email: '',
})

const categories = computed<ProjectTag[]>(() => {
  return categoryStore.categories
})

watch(
  () => authStore.user,
  (newQuery, oldQuery) => {
    const fullUser = authStore.fullUser
    if (!fullUser) return
    newData.firstName = fullUser.firstName
    newData.lastName = fullUser.lastName
    newData.companyName = fullUser.extraFields.companyName?.value ?? ''
    newData.place = fullUser.extraFields.place?.value ?? ''
    newData.phone = fullUser.extraFields.phone?.value ?? ''
    newData.description = fullUser.extraFields.description?.value ?? ''
    newData.skills = fullUser?.skills ?? []
    newData.facebook = fullUser.socialMedia.facebook ?? ''
    newData.web = fullUser.socialMedia.web ?? ''
    newData.twitter = fullUser.socialMedia.twitter ?? ''
    newData.linkedin = fullUser.socialMedia.linkedin ?? ''
    newData.email = fullUser.email ?? ''
  },
)

onMounted(() => {
  try {
    categoryStore.get(1, 10)
  } catch (error) {
    console.log(error)
  }
})

function handleEndWrite() {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    searchCategories(newData.searchSkills)
  }, 500) // 500 ms de espera
}
function searchCategories(query?: string) {
  categoryStore.setFilters({ search: query })
  categoryStore.get(1)
}

function handleRemoveSkill(index: number) {
  const [skillRemoved] = newData.skills.splice(index, 1)
  authStore.removeSkill(skillRemoved)
}
function handleAddSkill(skill: ProjectTag) {
  if (!authStore.user?.skills) return
  if (authStore.user.skills.findIndex((s) => s.entityId === `${skill.id}`) >= 0)
    return
  authStore.addSkill(skill)
}

function handleSaveInfo() {
  const socialMedia = {
    facebook: newData.facebook,
    twitter: newData.twitter,
    linkedin: newData.linkedin,
    web: newData.web,
  }

  authStore.editProfileInfo({
    'attributes[first_name]': newData.firstName,
    'attributes[last_name]': newData.lastName,
    'attributes[email]': newData.email,
    'attributes[fields]': [
      {
        name: 'description',
        value: newData.description,
      },
      {
        name: 'socialNetworks',
        value: JSON.stringify(socialMedia),
      },
      {
        name: 'place',
        value: newData.place,
      },
      {
        name: 'phone',
        value: newData.phone,
      },
      {
        name: 'companyName',
        value: newData.companyName,
      },
    ],
  })
}
</script>

<template>
  <q-dialog v-model="modelValue">
    <q-card
      class="card-edit tw-relative !tw-rounded-lg"
      style="max-width: 80vw"
    >
      <q-card-section class="tw-sticky tw-z-40 tw-top-0">
        <div class="tw-text-lg tw-font-semibold tw-text-white">
          Editar Perfil
        </div>
        <p class="tw-text-sm tw-font-normal tw-text-white">
          Información básica
        </p>
        <q-separator />
      </q-card-section>
      <q-card-section class="q-pt-2">
        <div class="tw-grid tw-grid-cols-2 tw-gap-2">
          <div class="input-container">
            <label
              class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
            >
              Nombre
            </label>
            <InputCPA
              outlined
              dark
              size="sm"
              class="input-custom-outline search-input-border"
              v-model="newData.firstName"
            ></InputCPA>
          </div>

          <div class="input-container">
            <label
              class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
            >
              Apellido
            </label>
            <InputCPA
              outlined
              dark
              size="sm"
              class="input-custom-outline search-input-border"
              v-model="newData.lastName"
            ></InputCPA>
          </div>
        </div>
        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Nombre de la empresa
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            class="input-custom-outline search-input-border"
            v-model="newData.companyName"
          ></InputCPA>
        </div>

        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Description
          </label>
          <Textarea
            v-model="newData.description"
            class="!tw-border-muted-custom tw-text-white tw-mb-4"
          ></Textarea>
        </div>

        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Pagina Web
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            type="url"
            class="input-custom-outline search-input-border"
            v-model="newData.web"
          ></InputCPA>
        </div>
        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Ubicación
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            class="input-custom-outline search-input-border"
            v-model="newData.place"
          ></InputCPA>
        </div>

        <div class="tw-mb-4">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Habilidades principales
          </label>
          <div
            class="tw-relative tw-border tw-border-muted-custom lg:tw-w-[34rem] tw-p-3 tw-rounded-md"
          >
            <ul class="tw-flex tw-flex-wrap">
              <li
                v-for="(item, index) in newData.skills"
                :key="`skill_${index}`"
                class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
              >
                <p class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose">
                  {{ item.title }}
                </p>
                <Button
                  size="xs"
                  type="button"
                  variant="ghost"
                  class="hover:tw-bg-transparent !tw-pr-0"
                >
                  <XIcon
                    @click="handleRemoveSkill(index)"
                    class="tw-text-primary tw-text-xs"
                    :size="20"
                  />
                </Button>
              </li>
            </ul>

            <input
              @input="handleEndWrite"
              class="skills-input"
              :placeholder="$t('projects.create.form.skills.placeholder')"
              v-model="newData.searchSkills"
            />

            <div class="option-skill-list">
              <ul class="">
                <li v-for="item in categories" :key="`category_${item.id}`">
                  <Button
                    @click="handleAddSkill(item)"
                    variant="ghost"
                    type="button"
                    class="hover:tw-bg-transparent tw-w-full !tw-justify-start"
                  >
                    {{ item.title }}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Email
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            type="url"
            class="input-custom-outline search-input-border"
            v-model="newData.email"
            disable
          ></InputCPA>
        </div>
        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Numero de teléfono
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            class="input-custom-outline search-input-border"
            v-model="newData.phone"
            type="tel"
          ></InputCPA>
        </div>

        <label
          class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
        >
          Conexiones
        </label>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            v-model="newData.facebook"
            label="Facebook"
          >
            <template v-slot:prepend>F</template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            v-model="newData.twitter"
            label="Twitter"
          >
            <template v-slot:prepend>X</template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            v-model="newData.linkedin"
            label="Linkedin"
          >
            <template v-slot:prepend>L</template>
          </InputCPA>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions class="tw-sticky tw-z-40 tw-bottom-0" align="right">
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
.card-edit,
.card-edit > div {
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
