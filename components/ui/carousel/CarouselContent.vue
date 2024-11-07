<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<WithClassAsProps>()

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div
      :class="
        cn(
          'tw-flex',
          orientation === 'horizontal' ? 'tw-ml-4' : 'tw-mt-4 tw-flex-col',
          props.class,
        )
      "
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
