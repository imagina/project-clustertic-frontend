<script setup lang="ts">
const slide = ref(1)
import SolarPanelSVG from '@/assets/svg/solar-panel.svg'
import DevicesPcSVG from '@/assets/svg/devices-pc.svg'
import BrushSVG from '@/assets/svg/brush.svg'
import PacManSVG from '@/assets/svg/pacman.svg'
const categoriesStore = useCategoryStore()

onMounted(() => {
  categoriesStore.requestParentsCategories()
})
</script>

<template>
  <SearchProject />
  <section class="tw-container tw-mt-5 tw-mb-16 tw-relative">
    <Card>
      <CardHeader>
        <CardTitle class="tw-font-extrabold">Categorías</CardTitle>
      </CardHeader>
    </Card>

    <div class="tw-container tw-py-20">
      <div
        class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-4 categories-container"
      >
        <div
          v-for="category in categoriesStore.parentCategories"
          :key="`sub-category-${category.id}`"
          class="tw-flex tw-items-center tw-mb-4"
        >
          <div class="tw-h-full tw-w-full">
            <div class="category-header">
              <span>
                <SolarPanelSVG
                  v-if="category.id === 1"
                  class="tw-text-4xl"
                  filled
                />
                <DevicesPcSVG
                  v-if="category.id === 2"
                  class="tw-text-4xl"
                  filled
                />
                <BrushSVG v-if="category.id === 3" class="tw-text-4xl" filled />
                <PacManSVG
                  v-if="category.id === 4"
                  class="tw-text-4xl"
                  filled
                />
              </span>
              <h4>
                {{ category.title }}
              </h4>
            </div>
            <template v-if="category.children">
              <NuxtLink
                :to="`/categories/${subCategory.id}`"
                v-for="subCategory in category.children"
                :key="`sub-category-${subCategory.id}`"
              >
                {{ subCategory.title }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories-container {
  & > * {
    @apply md:tw-border-r-2 tw-border-muted-light md:tw-px-6;
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
      @apply tw-font-medium tw-text-sm md:tw-text-base tw-text-start tw-whitespace-normal tw-pl-3;
    }
  }
}
</style>
