<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-vue-next'
const props = withDefaults(
  defineProps<{
    current?: number
    btnPerSide?: number
  }>(),
  {
    btnPerSide: 2,
    current: 3,
  },
)
const range = computed(() => {
  let start = props.current - props.btnPerSide,
    end = props.current + props.btnPerSide
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
})
</script>

<template>
  <div class="paginator-container">
    <Button variant="ghost" class="paginator-btn"><ChevronsLeftIcon/></Button>
    <Button variant="ghost" class="paginator-btn"><ChevronLeftIcon/></Button>
    <div></div>
    <template v-for="n in range" :key="`paginator-btn-${n}`">
      <Button v-if="n > 0" type="button" variant="ghost" class="paginator-btn" :disabled="props.current===n " :class="props.current===n ?'tw-bg-primary !tw-opacity-100':''">
        {{ n }}
      </Button>
    </template>

    <div></div>
    <Button variant="ghost" class="paginator-btn"><ChevronRightIcon/></Button>
    <Button variant="ghost" class="paginator-btn"><ChevronsRightIcon/></Button>
  </div>
</template>

<style scoped>
.paginator-container {
  @apply tw-flex tw-w-min tw-gap-1;
}

.paginator-container > * {
  @apply tw-grow tw-min-h-10 tw-min-w-10 tw-rounded-lg tw-font-bold tw-text-base;
}
.paginator-container > button {
  @apply  hover:tw-bg-primary;
}
</style>
