<script setup lang="ts">
import { DollarSignIcon, CompassIcon, Search } from 'lucide-vue-next'
import LoadingScreen from '~/components/sections/LoadingScreen.vue'
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
const perPage = computed(() => projectsStore.pagination.perPage)
let debounceTimeout: any = null

const filters = reactive<{
  minPrice: string
  maxPrice: string
  searchSkills: string
}>({
  minPrice: '0',
  maxPrice: '100000000',
  searchSkills: '',
})

onMounted(() => {
  handleRefreshPage()
  categoryStore.get(1)
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
    debugger
    const validate = await refForm.value.validate()
    if (!validate) return
    projectsStore.setFilters({
      search: router.query['search'] ? `${router.query['search']}` : '',
      minPrice: parseInt(filters.minPrice),
      maxPrice: parseInt(filters.maxPrice),
    })
  } catch (erro) {
    console.log(erro)
  }
}

function handleSelectProject(id: number) {
  projectsStore.viewDetails(id)
}
function handleEndWrite() {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    console.log('El usuario ha terminado de escribir:', filters.searchSkills) // Aquí puedes ejecutar la función que necesites
    searchCategories(filters.searchSkills)
  }, 500) // 500 ms de espera
}
function searchCategories(query?: string) {
  categoryStore.setFilters({ search: query })
  categoryStore.get(1)
}
</script>
<template>
  <SearchProject class="tw-mt-20" />
  <LoadingScreen :loading="projectsStore.loading" />
  <div
    class="tw-container tw-flex tw-flex-col md:tw-flex-row tw-mt-5 tw-mb-16 tw-relative"
  >
    <aside class="tw-basis-80 tw-px-5">
      <div
        class="filters-form tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6"
      >
        <q-form @submit.prevent.stop="filter" ref="refForm">
          <div class="tw-flex tw-justify-between">
            <h2 class="tw-text-xl tw-font-bold tw-mb-8">Filtros</h2>
            const
            <Button size="xs" type="submit">Go</Button>
          </div>
          <div class="tw-mb-5 tw-flex">
            <label
              class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1"
            >
              Precio
            </label>
            <Button
              variant="ghost"
              type="button"
              class="hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min"
            >
              clear
            </Button>
          </div>
          <label class="tw-text-xs tw-font-extralight">min</label>
          <div class="filter-money tw-mb-2">
            <DollarSignIcon class="tw-w-4 tw-mr-3" />
            <input outlined type="number" v-model="filters.minPrice" />
            <p class="tw-mb-0">USD</p>
          </div>
          <label class="tw-text-xs tw-font-extralight">max</label>
          <div class="filter-money tw-mb-2">
            <DollarSignIcon class="tw-w-4 tw-mr-3" />
            <input outlined type="number" v-model="filters.maxPrice" />
            <p class="tw-mb-0">USD</p>
          </div>
        </q-form>

        <div class="tw-mb-5 tw-flex">
          <label
            class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1"
          >
            Skills
          </label>
          <Button
            variant="ghost"
            type="button"
            class="hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min"
          >
            clear
          </Button>
        </div>

        <div class="filter-skills tw-mb-2">
          <CompassIcon class="tw-w-4 tw-text-primary tw-mr-3" />
          <input
            @input="handleEndWrite"
            placeholder="Search skills"
            v-model="filters.searchSkills"
          />
        </div>
        <ul>
          <li
            v-for="category in categoryStore.categories"
            class="tw-flex tw-items-center tw-mb-2"
          >
            <Checkbox />
            <label class="tw-ml-2">{{ category.title }}</label>
          </li>
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
            :rating="4.5"
            :skills="project.categories?.map((cat) => cat.title) ?? []"
          >
            <template v-slot:title>{{ project.title }}</template>
            <template v-slot:subtitle>
              Presupuesto {{ project.minPrice }} - {{ project.maxPrice }}$
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
    @apply tw-mb-5;
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
