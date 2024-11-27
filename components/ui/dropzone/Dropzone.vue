<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '~/lib/utils'

const fileInput = ref<HTMLInputElement | null>(null)
const props = defineProps<{
  class?: string
  dark?: boolean
  modelValue: any
  disable?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'copy'
}
const handleDragEnterLeave = (event: DragEvent) => {
  event.preventDefault()
  const target = event.currentTarget as HTMLInputElement
  target.classList.toggle('dropzone-hover')
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const files = event.dataTransfer!.files
  const target = event.currentTarget as HTMLInputElement
  target.classList.remove('dropzone-hover')
  handleFiles(files)
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files!
  handleFiles(files)
}

const handleFiles = (files: FileList) => {
  if (props.disable) return
  emit('update:modelValue', files)
}

const openFileDialog = () => {
  fileInput.value!.click()
}
</script>

<template>
  <div
    :class="cn('dropzone', props.dark ? 'dropzone-dark' : '', props.class)"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
    @dragenter.prevent="handleDragEnterLeave"
    @dragleave.prevent="handleDragEnterLeave"
    @click="openFileDialog"
  >
    <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <slot name="subtitle"></slot>
    </div>

    <input
      type="file"
      multiple
      ref="fileInput"
      @change="handleFileSelect"
      style="display: none"
    />
  </div>
</template>

<style scoped>
.dropzone {
  @apply tw-rounded-2xl tw-min-h-16 tw-border tw-border-black tw-border-opacity-25  tw-p-10;
  transition: all 0.5s;
}
.dropzone-dark {
  @apply tw-bg-input;
  .title {
    @apply !tw-text-primary;
    transition: all 0.5s;
  }
}
.dropzone:hover,
.dropzone-hover {
  @apply !tw-text-blue-500 tw-border-blue-500 !tw-bg-blue-50;
  background-color: #f0f0f0;
}
.dropzone-dark:hover,
.dropzone-dark.dropzone-hover {
  @apply tw-bg-primary;
  .title {
    @apply !tw-text-input tw-font-bold;
  }
  * {
    @apply !tw-text-input;
  }
}
</style>
