<script setup lang="ts">
const slide = ref(1)
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import LoadingScreen from '~/components/sections/LoadingScreen.vue'
const categoriesStore = useCategoryStore()
const route = useRoute()

onMounted(() => {
  categoriesStore.requestParentsCategories()
})
onMounted(() => {
  if (
    !categoriesStore.selected ||
    `${categoriesStore.selected.id}` !== `${route.params.id}`
  ) {
    categoriesStore.viewDetails(parseInt(`${route.params.id}`))
  }
})

const category = computed(() => categoriesStore.selected)
</script>

<template>
  <LoadingScreen :loading="categoriesStore.loading" />
  <SearchProject />
  <section class="tw-container tw-mt-5 tw-mb-16 tw-relative">
    <Card class="tw-py-2 tw-mb-5">
      <CardHeader class="!tw-flex-row !tw-items-center">
        <div class="tw-mr-3">
          <NuxtLink to="/categories">
            <ChevronLeftIcon :size="30" />
          </NuxtLink>
        </div>
        <CardTitle class="!tw-font-medium">
          Volver a las categorías Generales
        </CardTitle>
      </CardHeader>
    </Card>

    <Card class="tw-py-3 tw-px-6">
      <CardHeader class="tw-border-b-2 tw-border-muted-light">
        <CardTitle class="tw-font-extrabold">
          {{ category?.title }}
        </CardTitle>
      </CardHeader>
      <CardContent class="tw-mt-16">
        <ul
          class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-3"
        >
          <li class="tw-flex tw-text-sm md:tw-text-base">
            <span><ChevronRightIcon class="tw-text-sky-600" :size="25" /></span>
            {{ category?.title }}
          </li>
          <li
            v-for="subCategory in category?.children"
            :key="`sub-sub-category-${subCategory.id}`"
            class="tw-flex tw-text-sm md:tw-text-base"
          >
            <span><ChevronRightIcon class="tw-text-sky-600" :size="25" /></span>
            {{ subCategory.title }}
          </li>
        </ul>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
.categories-container {
  & > * {
    @apply md:tw-border-r-2 tw-border-muted-light tw-px-6;
  }
  & > *:nth-child(4n) {
    @apply tw-border-none;
  }
  & a {
    @apply tw-mb-6 tw-text-xs tw-font-normal tw-block tw-w-full;
  }
  & .category-header {
    @apply tw-mb-10 tw-flex tw-justify-start tw-items-center tw-w-full tw-rounded-[10rem] tw-border tw-border-muted-light tw-py-4 tw-px-2;
    & > span {
      @apply tw-px-3 tw-py-2 tw-border-r-2 tw-border-muted-foreground;
    }
    & > h4 {
      @apply tw-font-medium tw-text-base  tw-text-start tw-whitespace-normal tw-pl-3;
    }
  }
}
</style>
