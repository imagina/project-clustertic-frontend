<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: string | number
  rating?: number
  skills?: string[]
}>()
</script>

<!-- <template v-slot:before v-if="$slots.before">
  <slot name="before"></slot>
</template> -->
<template>
  <Card :class="cn(props.class)">
    <CardHeader>
      <CardTitle class="tw-font-bold"><slot name="title" /></CardTitle>
      <p v-if="$slots.subtitle" class="tw-font-semibold tw-text-sm tw-mt-2">
        <slot name="subtitle" />
      </p>
    </CardHeader>
    <CardContent>
      <div v-if="$slots.description" class="tw-relative">
        <p class="tw-text-sm tw-line-clamp-3">
          <slot name="description" />
        </p>

        <span
          class="more-info tw-text-blue-500 tw-absolute tw-right-0 tw-bg-white"
        >
          Más
        </span>
      </div>
      <p class="tw-mt-5 tw-text-link">
        {{ props.skills?.join(' • ') }}
        <!-- <span v-for="(skill, index) in props.skills" :key="`card_project_${id}_${index}`">
          {{skill}} • 
        </span>  -->
      </p>
    </CardContent>
    <CardFooter>
      <div class="tw-flex">
        <div class="tw-flex">
          <RatingIndicator
            starClass="tw-text-lg tw-mr-1"
            :rating="props.rating"
          />
          <p class="tw-mb-0 tw-ml-3 tw-text-base tw-text-link">
            {{ props.rating }}
          </p>
        </div>
      </div>
    </CardFooter>
  </Card>
</template>

<style lang="css" scoped>
.more-info {
  transform: translateX(-50%);
}
</style>
