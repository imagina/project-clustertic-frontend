<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { XIcon } from 'lucide-vue-next'
import type { QDialogProps } from 'quasar'
import type { ProjectTag } from '~/models/interfaces/projects'
import type { UserSkill } from '~/models/interfaces/user'
import FacebookSVG from '@/assets/svg/brand/facebook.svg'
import LinkedinSVG from '@/assets/svg/brand/linkedin.svg'
import InstagramSVG from '@/assets/svg/brand/instagram.svg'
import YouTubeSVG from '@/assets/svg/brand/youTube.svg'
import TwitterSVG from '@/assets/svg/brand/twitter.svg'
import TikTokSVG from '@/assets/svg/brand/tikTok.svg'

let debounceTimeout: any = null
const props = defineProps<QDialogProps>()
const categoryStore = useCategoryStore()
const authStore = useAuthStore()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})

const newData = reactive<{
  skills: UserSkill[]
  searchSkills: string
}>({
  skills: [],
  searchSkills: '',
})

const categories = computed<ProjectTag[]>(() => {
  return categoryStore.categories
})

watch(
  () => authStore.user,
  (newQuery, oldQuery) => {
    loadUser()
  },
)

onMounted(() => {
  try {
    categoryStore.get(1, 10)
  } catch (error) {
    console.log(error)
  }
})

function loadUser() {
  const fullUser = authStore.fullUser
  if (!fullUser) return
  newData.skills = fullUser?.skills ?? []
}

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

function handleClose() {
  emits('update:modelValue', false)
  loadUser()
}
</script>

<template>
  <q-dialog v-model="modelValue">
    <q-card
      class="card-edit tw-w-full !tw-max-w-[48rem] tw-relative !tw-rounded-lg"
    >
      <q-card-section class="tw-sticky tw-z-40 tw-top-0">
        <div class="tw-text-lg tw-font-semibold tw-text-white">
          Editar Habilidades
        </div>
        <p class="tw-text-sm tw-font-normal tw-text-white">
          Administra, busca y seleccionas las habilidades que posee la empresa
        </p>
        <q-separator />
      </q-card-section>
      <q-card-section class="q-pt-2 tw-min-h-[30rem]">
        <div class="tw-mb-4">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Habilidades principales
          </label>
          <div
            class="tw-relative tw-border tw-border-muted-custom lg:tw-min-w-[34rem] tw-p-3 tw-rounded-md"
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
              :placeholder="
                Helper.tLang('projects.create.form.skills.placeholder')
              "
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
      </q-card-section>
      <q-separator />
      <q-card-actions class="tw-sticky tw-z-40 tw-bottom-0" align="right">
        <q-btn
          flat
          label="Cerrar"
          color="primary"
          class="!tw-text-primary"
          @click="handleClose"
        />
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
