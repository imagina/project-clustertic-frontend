<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { QDialogProps } from 'quasar'
import type { ProjectTag } from '~/models/projects'

const props = defineProps<QDialogProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})
const skills = ref<ProjectTag[]>([
  {
    createdAt: new Date('2024-10-21 11:48:14'),
    createdBy: 1,
    deletedAt: null,
    deletedBy: null,
    depth: null,
    description: '<p>APIs de Red</p>',
    id: 41,
    lft: 35,
    options: null,
    organizationId: null,
    parentId: 6,
    rgt: 36,
    slug: 'apis-de-red',
    sortOrder: 0,
    status: 1,
    title: 'APIs de Red',
    updatedAt: new Date('2024-10-21 11:48:14'),
    updatedBy: 1,
    url: 'https://dev-clustertic.ozonohosting.com/anuncios/c/apis-de-red',
  },
  {
    createdAt: new Date('2024-10-21 11:47:34'),
    createdBy: 1,
    deletedAt: null,
    deletedBy: null,
    depth: null,
    description: '<p>PowerShell</p>',
    id: 40,
    lft: 33,
    options: null,
    organizationId: null,
    parentId: 6,
    rgt: 34,
    slug: 'powershell',
    sortOrder: 0,
    status: 1,
    title: 'PowerShell',
    updatedAt: new Date('2024-10-21 11:47:34'),
    updatedBy: 1,
    url: 'https://dev-clustertic.ozonohosting.com/anuncios/c/powershell',
  },
  {
    createdAt: new Date('2024-10-21 11:47:00'),
    createdBy: 1,
    deletedAt: null,
    deletedBy: null,
    depth: null,
    description: '<p>Bash</p>',
    id: 39,
    lft: 31,
    options: null,
    organizationId: null,
    parentId: 6,
    rgt: 32,
    slug: 'bash',
    sortOrder: 0,
    status: 1,
    title: 'Bash',
    updatedAt: new Date('2024-10-21 11:47:00'),
    updatedBy: 1,
    url: 'https://dev-clustertic.ozonohosting.com/anuncios/c/bash',
  },
])
</script>

<template>
  <q-dialog
    v-model="modelValue"
    transition-show="rotate"
    transition-hide="rotate"
  >
    <q-card class="card-edit !tw-rounded-lg" style="max-width: 80vw">
      <q-card-section>
        <div class="tw-text-lg tw-font-semibold tw-text-white">
          Editar Perfil
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p class="tw-text-sm tw-font-normal tw-text-white">
          You will have the ability to choose wich profile to display in your
          bids.
        </p>
        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">
          Top skills
        </p>
        <ul
          class="tw-flex tw-flex-wrap tw-border tw-border-muted-custom lg:tw-w-[34rem] tw-p-3 tw-rounded-md"
        >
          <li
            v-for="(item, index) in skills"
            :key="`skill_${index}`"
            class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
          >
            <p class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose">
              {{ item.title }}
            </p>
          </li>
        </ul>
        <p class="tw-text-sm tw-font-normal tw-text-white tw-my-5">
          6417 jobs matching your skills
        </p>
        <p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5">Summary</p>
        <Textarea class="!tw-border-muted-custom"></Textarea>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="css" scoped>
.card-edit {
  background-color: hsla(240, 23%, 17%, 1);
}

.option-skill-list {
  @apply tw-absolute tw-top-full tw-left-0 tw-right-0 tw-bg-white tw-rounded-b-2xl tw-rounded-t-sm tw-z-50;
  ul {
    @apply tw-max-h-0  tw-overflow-y-scroll;
    transition: max-height 1s;
    li {
      @apply tw-p-2 tw-rounded-xl tw-mb-1 tw-cursor-pointer;
      transition: background 0.3s;
      &:hover {
        @apply tw-bg-input tw-text-primary;
      }
    }
  }
}

.skills-input:focus ~ .option-skill-list {
  @apply tw-pb-1;
}
.skills-input:focus ~ .option-skill-list ul {
  @apply tw-max-h-40;
}
</style>
