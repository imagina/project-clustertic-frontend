<script setup lang="ts">
import { DollarSignIcon, CompassIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'default',
})

const refForm: any = ref(null)
const projectsStore = useProjectsStore()

const filters = reactive<{
  minPrice: string
  maxPrice: string
}>({
  minPrice: '',
  maxPrice: '',
})

onMounted(() => {
  debugger
  projectsStore.requestPage(1)
})

async function filter() {
  try {
    debugger
    const validate = await refForm.value.validate()
    if (!validate) return
    // await store.login(auth);
  } catch (erro) {
    console.log(erro)
  }
}
</script>
<template>
  <SearchProject class="tw-mt-20" />
  <div class="tw-container tw-flex tw-flex-col md:tw-flex-row tw-mt-5">
    <aside class="tw-basis-80 tw-px-5">
      <div
        class="filters-form tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6"
      >
        <h2 class="tw-text-xl tw-font-bold tw-mb-8">Filtros</h2>
        <q-form @submit.prevent.stop="filter" ref="refForm">
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
        </q-form>

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

        <div class="filter-skills tw-mb-2">
          <CompassIcon class="tw-w-4 tw-text-primary tw-mr-3" />
          <input placeholder="Search skills" v-model="filters.minPrice" />
        </div>
        <div class="tw-flex tw-items-center">
          <Checkbox />
          <label class="tw-ml-2">Website Design</label>
        </div>
      </div>
    </aside>
    <section class="md:tw-basis-2/3 lg:tw-basis-9/12">
      <ul class="projects-list">
        <li>
          <Card>
            <CardHeader>
              <CardTitle class="tw-font-extrabold">
                Top results
                <span class="tw-font-normal tw-text-base tw-ml-5">
                  1 - 20 of 164 results
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        </li>
        <li>
          <CardProject
            v-for="project in projectsStore.projects"
            :key="`project-card=${project.id}`"
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
        <Paginator :btn-per-side="3" :current="7" />
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
