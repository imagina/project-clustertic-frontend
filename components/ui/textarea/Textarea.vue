<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  dark?: boolean
  resize?: boolean
  defaultValue?: string | number
  modelValue?: string | number
  disable?:boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea
    v-model="modelValue"
    :disabled="props.disable"
    :class="
      cn(
        'tw-flex tw-min-h-20 tw-w-full tw-rounded-2xl tw-border tw-border-black tw-border-opacity-25 tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50',
        props.dark ? 'input-dark' : '',
        !props.resize ? 'tw-resize-none' : '',
        props.class,
      )
    "
  />
</template>

<style scoped>
.input-dark {
  background-color: hsla(var(--input), 1) !important;
  color: hsla(0, 0%, 90%, 1) !important;
  &::placeholder {
    color: hsla(0, 0%, 90%, 1) !important;
  }
}
</style>
