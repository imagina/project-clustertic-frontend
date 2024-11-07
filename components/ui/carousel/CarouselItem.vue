<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="
      cn(
        'tw-min-w-0 tw-shrink-0 tw-grow-0 tw-basis-full',
        orientation === 'horizontal' ? 'tw-px-2' : 'tw-py-2',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
