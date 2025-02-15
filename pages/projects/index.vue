<script setup lang="ts">
import { DollarSignIcon, CompassIcon, XIcon } from 'lucide-vue-next'
import LoadingScreen from '~/components/sections/LoadingScreen.vue'
import type { ProjectTag } from '~/models/interfaces/projects'
import { useCategoryStore } from '~/stores/useCategories'

definePageMeta({
  layout: 'default',
})

const refForm: any = ref(null)
const router = useRoute()
const projectsStore = useProjectsStore()
const categoryStore = useCategoryStore()
const page = computed(() => projectsStore.pagination.currentPage)
const totalPages = computed(() => projectsStore.pagination.lastPage)
// const perPage = computed(() => projectsStore.pagination.perPage)
let debounceTimeout: any = null

const filters = reactive<{
  minPrice: string
  maxPrice: string
  searchSkills: string
  skills: ProjectTag[]
}>({
  minPrice: '0',
  maxPrice: '100000000',
  searchSkills: '',
  skills: [],
})

onMounted(() => {
  handleRefreshPage()
  categoryStore.get(1, 5)
})
watch(
  () => router.query,
  (newQuery, oldQuery) => {
    if (oldQuery['search'] !== newQuery['search']) handleRefreshPage()
  },
)

function handleRefreshPage() {
  projectsStore.setFilters({
    search: router.query['search'] ? `${router.query['search']}` : '',
  })
  projectsStore.get(1)
}

async function filter() {
  try {
    const validate = await refForm.value.validate()
    if (!validate) return
    projectsStore.setFilters({
      search: router.query['search'] ? `${router.query['search']}` : '',

      minPrice: parseInt(filters.minPrice),
      maxPrice: parseInt(filters.maxPrice),
      categories: filters.skills.map((skill) => skill.id),
    })
    projectsStore.get(1)
  } catch (erro) {
    console.log(erro)
  }
}

function handleSelectProject(id: number) {
  projectsStore.viewDetails(id)
}
function handleToggleSkill(skill: ProjectTag) {
  filters.skills = [skill]//Helper.toggleItem(filters.skills, skill, 'id')
}
function handleEndWrite() {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    // console.log('El usuario ha terminado de escribir:', filters.searchSkills) // Aquí puedes ejecutar la función que necesites
    searchCategories(filters.searchSkills)
  }, 500) // 500 ms de espera
}
function searchCategories(query?: string) {
  categoryStore.setFilters({ search: query })
  categoryStore.get(1, 5)
}
</script>
<template>
  <SearchProject class="" />
  <LoadingScreen :loading="projectsStore.loading" />
  <div
    class="tw-container tw-flex tw-flex-col md:tw-flex-row tw-mt-5 tw-mb-16 tw-relative"
  >
    <aside class="lg:tw-basis-80 lg:tw-px-5">
      <div
        class="filters-form tw-sticky tw-top-28 tw-mb-2 tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6"
      >
        <q-form @submit.prevent.stop="filter" ref="refForm">
          <div class="tw-flex tw-justify-between">
            <h2 class="tw-text-xl tw-font-bold tw-mb-8">Filtros</h2>

            <Button size="xs" type="submit">Buscar</Button>
          </div>
          <div class="tw-mb-5 tw-flex tw-items-center">
            <label
              class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1"
            >
              Precio
            </label>
            <Button
              variant="ghost"
              type="button"
              class="hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min"
              @click="
                () => {
                  filters.minPrice = '0'
                  filters.maxPrice = '100000000'
                }
              "
            >
              <XIcon :size="20" />
            </Button>
          </div>
          <label class="tw-text-xs tw-font-extralight">min</label>
          <div class="filter-money tw-mb-2">
            <DollarSignIcon class="tw-w-4 tw-mr-3" />
            <input outlined type="number" v-model="filters.minPrice" />
            <!-- <p class="tw-mb-0">USD</p> -->
          </div>
          <label class="tw-text-xs tw-font-extralight">max</label>
          <div class="filter-money tw-mb-2">
            <DollarSignIcon class="tw-w-4 tw-mr-3" />
            <input outlined type="number" v-model="filters.maxPrice" />
            <!-- <p class="tw-mb-0">USD</p> -->
          </div>
        </q-form>

        <div class="tw-mb-4 tw-mt-3 tw-flex tw-items-center">
          <label
            class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1"
          >
            Habilidades
          </label>
          <Button
            variant="ghost"
            type="button"
            class="hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min"
            @click="
              () => {
                filters.skills = []
              }
            "
          >
            <XIcon :size="20" />
          </Button>
        </div>

        <div class="filter-skills tw-mb-4">
          <CompassIcon class="tw-w-4 tw-text-primary tw-mr-3" />
          <input
            @input="handleEndWrite"
            placeholder="Buscar habilidad"
            v-model="filters.searchSkills"
          />
        </div>
        <ul>
          <template
            v-for="category in filters.skills"
            :key="`category-selected-${category.id}`"
          >
            <li
              v-if="
                filters.skills.map((skill) => skill.id).includes(category.id)
              "
              class="tw-flex tw-items-center tw-mb-2"
              @click="handleToggleSkill(category)"
            >
              <Checkbox :checked="true" />
              <label class="tw-ml-2">{{ category.title }}</label>
            </li>
          </template>
          <template
            v-for="category in categoryStore.categories"
            :key="`category-${category.id}`"
          >
            <li
              v-if="
                !filters.skills.map((skill) => skill.id).includes(category.id)
              "
              class="tw-flex tw-items-center tw-mb-2"
              @click="handleToggleSkill(category)"
            >
              <Checkbox :checked="false" />
              <label class="tw-ml-2">{{ category.title }}</label>
            </li>
          </template>
        </ul>
      </div>
    </aside>
    <section class="md:tw-basis-2/3 lg:tw-basis-9/12">
      <ul class="projects-list">
        <li>
          <Card>
            <CardHeader>
              <CardTitle class="tw-font-extrabold">
                Resultados
                {{
                  router.query['search']
                    ? `que contengan "${router.query['search']}"`
                    : ``
                }}
                <span class="tw-font-normal tw-text-base tw-ml-5">
                  Página {{ page }} de {{ totalPages }}
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        </li>
        <li
          v-for="project in projectsStore.projects"
          :key="`project-card=${project.id}`"
          @click="handleSelectProject(project.id)"
        >
          <CardProject
            :id="project.id"
            :skills="project.categories?.map((cat) => cat.title) ?? []"
            :created-at="`${project.createdAt}`"
          >
            <template v-slot:title>{{ project.title }}</template>
            <template v-slot:subtitle>
              Presupuesto ${{ project.minPrice }} - ${{ project.maxPrice }}
              {{ project.options?.currency || 'COP' }}
            </template>
            <template v-slot:description>
              {{ project.description }}
            </template>
          </CardProject>
        </li>
      </ul>
      <div class="tw-flex tw-justify-center tw-mt-10">
        <Paginator
          @on-page-selected="projectsStore.get"
          :pages="totalPages"
          :btn-per-side="3"
          :current="page"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-list {
  li {
    @apply tw-mb-5 tw-cursor-pointer;
  }
}
.filters-form {
  .filter-money,
  .filter-skills {
    @apply tw-flex tw-border tw-border-input tw-rounded tw-py-1 tw-px-2;
    input {
      @apply tw-flex-1 tw-bg-transparent  tw-outline-none;
    }
  }
  .filter-skills {
    @apply tw-rounded-3xl;
  }
}
</style>
