<script setup lang="ts">
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-vue-next'
const props = withDefaults(
  defineProps<{
    current?: number
    pages: number
    btnPerSide?: number
  }>(),
  {
    btnPerSide: 2,
    pages: 5,
    current: 3,
  },
)
const range = computed(() => {
  let start = props.current - props.btnPerSide,
    end = props.current + props.btnPerSide
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
})
const instance = getCurrentInstance()
const handleSelectPage = (page: number) => {
  instance?.emit('onPageSelected', page)
}
</script>

<template>
  <div class="paginator-container">
    <Button @click="handleSelectPage(1)" variant="ghost" class="paginator-btn">
      <ChevronsLeftIcon />
    </Button>
    <Button
      @click="handleSelectPage(props.current > 1 ? props.current - 1 : 1)"
      variant="ghost"
      class="paginator-btn"
    >
      <ChevronLeftIcon />
    </Button>
    <div></div>
    <template v-for="n in range" :key="`paginator-btn-${n}`">
      <Button
        v-if="0 < n && n <= props.pages"
        @click="handleSelectPage(n)"
        type="button"
        variant="ghost"
        class="paginator-btn"
        :disabled="props.current === n"
        :class="props.current === n ? 'tw-bg-primary !tw-opacity-100' : ''"
      >
        {{ n }}
      </Button>
    </template>

    <div></div>
    <Button
      @click="
        handleSelectPage(
          props.current < props.pages ? props.current + 1 : props.pages,
        )
      "
      variant="ghost"
      class="paginator-btn"
    >
      <ChevronRightIcon />
    </Button>
    <Button
      @click="handleSelectPage(props.pages)"
      variant="ghost"
      class="paginator-btn"
    >
      <ChevronsRightIcon />
    </Button>
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
  @apply hover:tw-bg-primary;
}
</style>
