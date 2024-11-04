<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: string
  rating?: number
  date?: Date
}>()
const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}
const formattedDate = computed(() => {
  const rawDate = props.date ?? new Date()
  let formattedDate = rawDate.toLocaleDateString('es-ES', options)

  // Eliminar los conectores
  return formattedDate.replace(/ de /g, ' ')
})
</script>

<template>
  <Card class="tw-overflow-hidden !tw-rounded-2xl card-portfolio">
    <CardHeader class="portfolio-img"></CardHeader>
    <CardContent class="tw-pt-3 !tw-px-8 tw-pb-14">
      <div class="tw-flex tw-justify-between tw-mb-4">
        <CardTitle class="tw-text-muted-custom !tw-text-xl tw-font-semibold">
          <slot name="title">Titulo</slot>
        </CardTitle>
        <p class="tw-text-muted-custom tw-text-lg tw-font-light">
          {{ formattedDate }}
        </p>
      </div>
      <p class="tw-line-clamp-1 tw-mb-4 tw-text-lg">
        <slot name="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          maxime porro mollitia exercitationem numquam neque nesciunt tenetur!
          Eaque magni ipsum labore minus, sit tempore corrupti, rerum a,
          laboriosam voluptas dolor.
        </slot>
      </p>
      <RatingIndicator
        starClass="tw-text-lg tw-mr-1"
        :rating="props.rating ?? 0"
      />
    </CardContent>
  </Card>
</template>

<style scoped>
.portfolio-img {
  @apply !tw-p-0 tw-bg-red-400 tw-h-60;
  background-image: url('@/assets/images/login-bg.png');
  background-size: 100% 100%;
}
.card-portfolio {
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.15);
}
</style>
