<script setup lang="ts">
import ArrowSVG from '@/assets/svg/arrow.svg'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="
      cn(
        'tw-touch-manipulation tw-absolute tw-rounded-full tw-p-0 tw-z-40  tw-border-none ',
        orientation === 'horizontal'
          ? 'tw-left-0 tw-top-1/2 -tw-translate-y-1/2'
          : 'tw-top-0 tw-left-1/2 -tw-translate-x-1/2 tw-rotate-90',
        props.class,
      )
    "
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      
      <ArrowSVG filled class="tw-text-3xl tw-text-black" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
