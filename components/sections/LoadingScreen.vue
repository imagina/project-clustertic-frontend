<script setup lang="ts">
import { Loader2Icon } from 'lucide-vue-next'

const props = defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <div
    class="tw-fixed tw-inset-0 tw-flex tw-justify-center tw-items-center tw-bg-secondary tw-bg-opacity-50 tw-z-50"
    :class="props.loading ? '' : 'tw-hidden'"
  >
    <Loader2Icon :size="120" class="tw-text-primary tw-animate-spin" />
  </div>
</template>
