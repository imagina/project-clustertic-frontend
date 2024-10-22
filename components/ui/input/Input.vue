<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { QInputProps } from 'quasar'
import { cn } from '~/lib/utils'

interface customInputProps extends QInputProps {
  defaultValue?: string | number
  class?: string
  dark?: boolean
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
  <q-input
    v-bind="props"
    v-model="modelValue"
    :class="cn(props.class, props.dark ? 'input-dark' : '')"
  >
    <template v-slot:before v-if="$slots.before">
      <slot name="before"></slot>
    </template>
    <template v-slot:prepend v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </template>
    <template v-slot:append v-if="$slots.append">
      <slot name="append"></slot>
    </template>
    <template v-slot:hint v-if="$slots.hint">
      <slot name="hint"></slot>
    </template>

    <template v-slot:after v-if="$slots.after">
      <slot name="after"></slot>
    </template>
  </q-input>
</template>

<style scoped>
:deep(.q-field__contro)l {
  @apply !tw-rounded-2xl;
}
.input-dark :deep(.q-field__control) {
  background-color: hsla(var(--input), 1) !important;
  .q-field__control-container * {
    color: hsla(0, 0%, 90%, 1) !important;
  }
}
</style>
