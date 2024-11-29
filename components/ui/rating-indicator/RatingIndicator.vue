<script setup lang="ts">
import StarSVG from '@/assets/svg/star.svg'
import { cn } from '~/lib/utils'
const props = withDefaults(
  defineProps<{
    rating?: number
    max?: number
    starClass?: string
  }>(),
  {
    rating: undefined,
    max: 5,
  },
)
</script>
<template>
  <div v-if="rating" class="tw-flex">
    <StarSVG
      v-for="n in props.max"
      class="star !tw-h-full"
      :class="cn(n <= rating ? 'filled' : '', props.starClass)"
    />
  </div>
</template>

<style>
.star {
  color: hsla(0, 0%, 85%, 1);
}
.star.filled {
  color: hsla(40, 95%, 52%, 1);
}
</style>
