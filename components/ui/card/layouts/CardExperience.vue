<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: string
  rating?: number
  init?: Date
  end?: Date
}>()
</script>

<template>
  <div class="tw-flex tw-gap-8 tw-p-4" :class="props.class">
    <div
      class="tw-h-24 tw-w-24 tw-rounded-3xl tw-bg-secondary tw-text-primary tw-flex-none"
    >
      icon
    </div>
    <div class="tw-flex-grow">
      <p class="tw-text-lg tw-text-muted-custom tw-font-light">
        <slot name="skills">Desarrollo y diseño / página web</slot>
      </p>
      <div class="tw-flex tw-justify-between tw-mb-2">
        <p class="tw-text-lg tw-text-black tw-font-semibold">
          <slot name="title">Cocacola</slot>
        </p>
        <p class="tw-text-md tw-text-black tw-font-semibold">
          <!-- TODO: colocar rango de inicio -->
          <slot name="range">Jul, 2023 - Present</slot>
        </p>
      </div>
      <div class="tw-flex tw-justify-between tw-gap-40 tw-mb-3">
        <p
          class="tw-text-base tw-font-light tw-line-clamp-3"
          style="color: hsla(213, 11%, 29%, 1)"
        >
          <slot name="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quos necessitatibus cupiditate fuga, repudiandae neque alias
            eveniet, officiis nostrum labore possimus corporis consectetur
            eaque. Dolor, aliquid eos! Ipsum, facere odio.
          </slot>
        </p>
        <p
          class="tw-text-md tw-text-black tw-font-semibold tw-whitespace-nowrap"
        >
          <!-- TODO: colocar duracion -->

          1 año, 1 mes
        </p>
      </div>

      <div class="tw-flex tw-gap-10 tw-mb-2">
        <p class="tw-text-base tw-text-black tw-font-normal">New York, USA</p>
        <p class="tw-text-base tw-text-black tw-font-normal">
          <!-- TODO: colocar fecha de inicio -->
          Jul, 2023
        </p>
      </div>
    </div>
  </div>
</template>
