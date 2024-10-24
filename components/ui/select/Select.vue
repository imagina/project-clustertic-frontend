<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { QSelectProps } from 'quasar'
import { cn } from '~/lib/utils'

interface customInputProps extends QSelectProps {
  defaultValue?: string | number
  class?: string
  dark?: boolean
  center?: boolean
}

const props = defineProps<customInputProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>
<template>
  <q-select
    v-bind="props"
    :class="
      cn(
        props.class,
        props.dark ? 'input-dark' : '',
        props.center ? 'input-center' : '',
      )
    "
    filled
    v-model="modelValue"
  />
</template>

<style scoped>
:deep(.q-field__control) {
  @apply !tw-rounded-2xl;
}
:deep(.q-field__label) {
  @apply !tw-pl-2;
}
.input-center :deep(.q-field__native) {
  @apply tw-justify-center;
}
.input-dark :deep(.q-field__control) {
  background-color: hsla(var(--input), 1) !important;
  .q-field__control-container * {
    color: hsla(0, 0%, 90%, 1) !important;
  }
}
.input-dark :deep(.q-icon) {
  @apply tw-text-primary;
}
</style>
