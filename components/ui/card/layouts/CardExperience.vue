<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: number
  rating?: number
  init?: Date
  end?: Date
  place: string
  img?: string
}>()

const dateInit = computed(() => {
  if (!props.init) return 'Actualidad'
  return Helper.parseDateToString(props.init, 'MMM, YYYY')
})
const dateEnd = computed(() => {
  if (!props.init) return 'Actualidad'
  return Helper.parseDateToString(props.init, 'MMM, YYYY')
})
const dateDiff = computed(() =>
  Helper.calculateDifferencesBetweenDays(props.init, props.end),
)
</script>

<template>
  <div class="tw-flex tw-gap-8 tw-p-4" :class="props.class">
    <div
      class="tw-h-24 tw-w-24 tw-rounded-3xl tw-bg-secondary tw-text-primary tw-flex-none img-container"
    >
      <div
        :style="
          img
            ? {
                backgroundImage: `url(${img})`,
              }
            : {}
        "
      ></div>
    </div>
    <div class="tw-flex-grow">
      <p class="tw-text-lg tw-text-muted-custom tw-font-light">
        <slot name="skills"></slot>
      </p>
      <div class="tw-flex tw-justify-between tw-mb-2">
        <p class="tw-text-lg tw-text-black tw-font-semibold">
          <slot name="title"></slot>
        </p>
        <p class="tw-text-md tw-text-black tw-font-semibold">
          <!-- TODO: colocar rango de inicio -->
          {{ dateInit }} - {{ dateEnd }}
        </p>
      </div>
      <div class="tw-flex tw-justify-between tw-gap-40 tw-mb-3">
        <p
          class="tw-text-base tw-font-light tw-line-clamp-3"
          style="color: hsla(213, 11%, 29%, 1)"
        >
          <slot name="description"></slot>
        </p>
        <p
          class="tw-text-md tw-text-black tw-font-semibold tw-whitespace-nowrap"
        >
          {{ dateDiff.years }} año, {{ dateDiff.month }} mes
        </p>
      </div>

      <div class="tw-flex tw-gap-10 tw-mb-2">
        <p class="tw-text-base tw-text-black tw-font-normal">{{ place }}</p>
        <p class="tw-text-base tw-text-black tw-font-normal">
          <!-- TODO: colocar fecha de inicio -->
          {{ dateInit }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.img-container {
  @apply tw-rounded-md tw-bottom-0 tw-h-14 tw-w-14 md:tw-h-28 md:tw-w-28 tw-p-1 tw-bg-white;
  box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.15);

  & > div {
    @apply tw-h-full tw-w-full tw-bg-white tw-rounded-md;
    background-size: 100% 100%;
    background-image: url('@/assets/images/login-bg.png');
  }
}
</style>
