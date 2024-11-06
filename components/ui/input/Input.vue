<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { QInputProps } from 'quasar'
import { cn } from '~/lib/utils'

interface customInputProps extends QInputProps {
  defaultValue?: string | number
  class?: string
  dark?: boolean
  size?: 'sm'
}

const props = defineProps<customInputProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
const onModelUpdate = (newValue: string | number | null) => {
  if (!newValue) newValue = ''
  if (`${newValue}`.length > 0 && !/[a-zA-Z]/.test(`${newValue}`))
    newValue = parseFloat(`${newValue}`)
  emits('update:modelValue', newValue)
  modelValue.value = newValue
  // Aquí puedes manejar la lógica adicional que necesites cuando modelValue se actualice
}
</script>

<template>
  <q-input
    v-bind="props"
    v-model="modelValue"
    :class="cn(props.class, props.dark ? 'input-dark' : '', `input-${size}`)"
    @update:modelValue="onModelUpdate"
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
.q-field--rounded :deep(.q-field__control) {
  @apply !tw-rounded-2xl;
}
.input-sm {
  :deep(.q-field__control) {
    height: 32px;
    .q-field__marginal {
      height: 32px;
    }
  }
}
:deep(.q-field__label) {
  @apply !tw-pl-2;
}
.input-dark :deep(.q-field__control):before {
  @apply !tw-border-none;
}
.input-dark :deep(.q-field__control) {
  background-color: hsla(var(--input), 1) !important;
  .q-field__control-container * {
    color: hsla(0, 0%, 90%, 1) !important;
  }
}
</style>
