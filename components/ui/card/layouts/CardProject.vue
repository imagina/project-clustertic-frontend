<script setup lang="ts">
import { BookmarkIcon } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id: string | number
  rating?: number
  skills?: string[]
  createdAt?: string
}>()

const daysSince = computed(() => {
  if (!props.createdAt) return 0
  const now = new Date().getTime()
  const created = Helper.parseStringToDate(props.createdAt).getTime()
  let diffMiliSeconds = Math.abs(now - created)
  let diffSeconds = Math.floor(diffMiliSeconds / 1000)
  let diffMinutes = Math.floor(diffSeconds / 60)
  let diffHours = Math.floor(diffMinutes / 60)
  return Math.floor(diffHours / 24)
})
</script>

<!-- <template v-slot:before v-if="$slots.before">
  <slot name="before"></slot>
</template> -->
<template>
  <Card :class="cn(props.class, 'tw-pt-4 tw-pb-1 tw-px-6 !tw-rounded-xl')">
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

        <!-- <span
          class="more-info tw-text-blue-500 tw-absolute tw-right-0 tw-bg-white"
        >
          Más
        </span> -->
      </div>
      <p v-if="props.skills" class="tw-mt-5 tw-text-link">
        <!-- {{ props.skills?.join(' • ') }} -->
        <span
          v-for="(skill, index) in props.skills.join(' • ..').split('..')"
          :key="`card_project_${id}_${index}`"
        >
          {{ skill }}
        </span>
      </p>
    </CardContent>
    <CardFooter class="d-flex">
      <div class="tw-flex">
        <RatingIndicator
          starClass="tw-text-lg tw-mr-1"
          :rating="props.rating"
        />
        <p class="tw-mb-0 tw-ml-3 tw-text-base tw-text-link">
          {{ props.rating }}
        </p>
      </div>
      <div class="tw-flex-grow"></div>
      <p>
        hace {{ daysSince }} días
        <BookmarkIcon color="#4848A9" :size="15" class="tw-inline tw-text-sm" />
      </p>
    </CardFooter>
  </Card>
</template>

<style lang="css" scoped>
.more-info {
  transform: translateX(-50%);
}
</style>
