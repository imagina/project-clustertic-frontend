<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
import { boolean } from 'zod'

interface rangePriceOptionsInterface {
  label: string
  value: string
  description: string
  category: string
  range: string
}

interface createDataInterface {
  name: string
  description: string
  files?: FileList
  skills: string[]
  searchSkills: string
  currency: string
  rangePrice: rangePriceOptionsInterface
}

definePageMeta({
  // middleware: "auth",

  layout: 'dark-bg',
})

const refForm: any = ref(null)
const step = ref<number>(0)
const stepsTitles: any = ref([
  {
    title: 'Cuéntanos qué necesitas',
    description:
      'Recibe ofertas de los principales expertos de la industria TIC y escoge la propuesta que mejor se adapte a tu necesidad.',
  },
  {
    title: '¿Qué habilidades se necesitan?',
    description:
      'Ingresa hasta 5 habilidades que describen mejor tu proyecto. Los freelancers utilizarán estas habilidades para encontrar proyectos en los que están más interesados y experimentados.',
  },
  {
    title: '¿Como quieres pagar?',
    description: '',
  },
  {
    title: '¿Son correctos tus datos?',
    description: '',
  },
])
const currencyOptions = ref<string[]>(['USD', 'COL'])
const rangePriceOptions = ref<rangePriceOptionsInterface[]>([
  {
    label: 'Proyecto muy pequeño ($250 - 750 USD)',
    value: 'range_xs',
    description: 'Proyecto muy pequeño',
    category: '1',
    range: '($250 - 750 USD)',
  },
  {
    label: 'Proyecto pequeño ($750 - 1250 USD)',
    value: 'range_sm',
    description: 'Proyecto pequeño',
    category: '2',
    range: '($750 - 1250 USD)',
  },
  {
    label: 'Proyecto mediano ($1250 - 1750 USD)',
    value: 'range_md',
    description: 'Proyecto mediano',
    category: '3',
    range: '($1250 - 1750 USD)',
  },
  {
    label: 'Proyecto grande ($1750 - 2250 USD)',
    value: 'range_lg',
    description: 'Proyecto grande',
    category: '4',
    range: '($1750 - 2250 USD)',
  },
  {
    label: 'Proyecto muy grande ($2250 - 2750 USD)',
    value: 'range_xl',
    description: 'Proyecto muy grande',
    category: '5',
    range: '($2250 - 2750 USD)',
  },
])

const suggestedSkills = ref<string[]>([
  'Ingeniería',
  'Web Hosting',
  'Verificación de software',
  'Arquitectura de software',
  'Verificación de páginas web',
])

const projectData = reactive<createDataInterface>({
  name: '',
  description: '',
  files: undefined,
  skills: ['PHP', 'HTML', 'Diseño de sitios web', 'Diseño gráfico', 'MySQL'],
  searchSkills: '',
  currency: 'USD',
  rangePrice: {
    label: 'Proyecto muy pequeño ($250 - 750 USD)',
    value: 'range_xs',
    description: 'Proyecto muy pequeño',
    category: '1',
    range: '($250 - 750 USD)',
  },
})

async function create() {
  debugger
  console.log(projectData)
  try {
    const validateForm = await refForm.value.validate()
    if (!validateForm) return
  } catch (erro) {
    console.log(erro)
  }
}

function handleRemoveSkill(index: number) {
  projectData.skills.splice(index, 1)
}
function handleAddSkill(skill: string) {
  if (projectData.skills.includes(skill)) return
  projectData.skills.push(skill)
}

function handleChangeStep(next_or_prev: number) {
  let new_step = step.value + next_or_prev

  if (new_step <= 3 && new_step >= 0) step.value = new_step
  else if (new_step > 3 && refForm.value) {
    create()
  }
}
</script>

<template>
  <div class="lg:tw-w-2/3 xl:tw-w-8/12 tw-px-6 sm:tw-px-12">
    <div class="tw-flex tw-flex-col tw-items-center">
      <div class="tw-mb-8">
        <img src="@/assets/svg/logo-green.svg" alt="" />
      </div>
      <h1
        v-if="stepsTitles[step].title"
        class="tw-text-3xl lg:tw-text-[35px] xl:tw-text-5xl tw-font-extralight tw-text-white tw-mb-6 lg:tw-mb-8"
      >
        {{ stepsTitles[step].title }}
      </h1>
      <p
        v-if="stepsTitles[step].description"
        class="h2 tw-text-white tw-w-4/6 tw-text-center tw-mb-10 tw-text-[14px] tw-font-extralight"
      >
        {{ stepsTitles[step].description }}
      </p>
      <div class="tw-w-full tw-flex-1">
        <div class="tw-relative">
          <q-form @submit.prevent="create" ref="refForm">
            <div class="step-container step-0" :class="`show-${step}`">
              <p class="input-details">Elige un nombre para tu proyecto</p>
              <InputCPA
                id="input_uno"
                filled
                dark
                class="tw-mb-3"
                v-model="projectData.name"
                label="p. ej., Necesito un sitio web"
              >
              </InputCPA>
              <p class="input-details">Elige un nombre para tu proyecto</p>
              <Textarea
                placeholder="Describe tu proyecto aquí..."
                v-model="projectData.description"
                dark
                class="tw-h-28"
              >
              </Textarea>
              <div class="tw-flex tw-justify-end tw-mb-2">
                <Button
                  @click="projectData.description = ''"
                  type="button"
                  variant="ghost"
                  class="tw-text-white tw-underline"
                  >Borrar descripción</Button
                >
              </div>
              <Dropzone v-model="projectData.files" dark>
                <template v-slot:title>
                  <p class="tw-text-primary tw-text-base tw-mb-5">
                    {{
                      projectData.files
                        ? 'Documentos adjuntados'
                        : 'Adjuntar archivos'
                    }}
                  </p>
                </template>
                <template v-slot:subtitle>
                  <p
                    v-if="projectData.files"
                    class="tw-text-white tw-text-xs tw-text-center"
                  >
                    <span
                      class="tw-mr-2"
                      v-for="(file, index) in projectData.files"
                      :key="index"
                      >{{ file.name }}
                    </span>
                  </p>
                  <p v-else class="tw-text-white tw-text-xs tw-text-center">
                    Arrastra y suelta cualquier imagen o documento que podría
                    resultar útil para explicar aquí tu proyecto (tamaño de
                    archivo máx 25 MB)
                  </p>
                </template>
              </Dropzone>
            </div>

            <div class="step-container step-1" :class="`show-${step}`">
              <p class="input-details">Elige un nombre para tu proyecto</p>
              <div
                class="tw-bg-input tw-rounded-2xl tw-px-4 tw-pt-3 tw-relative"
              >
                <ul class="tw-min-h-28 tw-flex tw-flex-wrap">
                  <li
                    v-for="(item, index) in projectData.skills"
                    :key="`skill_${index}`"
                    class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
                  >
                    <p
                      class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose"
                    >
                      {{ item }}
                    </p>
                    <Button
                      size="xs"
                      variant="ghost"
                      class="hover:tw-bg-transparent !tw-pr-0"
                      ><XIcon
                        @click="handleRemoveSkill(index)"
                        class="tw-text-primary tw-text-xs"
                        :size="20"
                    /></Button>
                  </li>
                </ul>
                <input
                  class="skills-input"
                  placeholder="Ingresa habilidades aquí..."
                  v-model="projectData.searchSkills"
                />

                <div class="option-skill-list">
                  <ul class="">
                    <li>skill1</li>
                    <li>skill2</li>
                    <li>skill3</li>
                    <li>skill4</li>
                    <li>skill5</li>
                    <li>skill6</li>
                    <li>skill7</li>
                    <li>skill8</li>
                  </ul>
                </div>
              </div>
              <p class="tw-mt-2 tw-text-white tw-w-10/12 tw-m-auto">
                Habilidades sugeridas:

                <span
                  v-for="(item, index) in suggestedSkills"
                  :key="`suggested_skills_${index}`"
                  @click="handleAddSkill(item)"
                  class="tw-text-primary hover:tw-underline tw-cursor-pointer"
                >
                  {{ item
                  }}{{ index === suggestedSkills.length - 1 ? '.' : ', ' }}
                </span>
              </p>
            </div>

            <div class="step-container step-2 tw-mt-5" :class="`show-${step}`">
              <div class="info-extra">
                <div class="tw-text-primary">
                  <img
                    class="tw-h-20 tw-w-20"
                    src="@/assets/svg/shield-dollar.svg"
                    alt="Mi SVG"
                  />
                </div>
                <div class="tw-text-white tw-ml-8 lg:tw-w-2/5">
                  <h3 class="tw-mb-2 tw-text-lg tw-font-extrabold">
                    Precio fijo
                  </h3>
                  <p class="tw-font-extralight tw-text-xs">
                    Acepta un precio fijo y libera el pago cuando se realice el
                    trabajo. Es mejor para tareas esporádicas.
                  </p>
                </div>
              </div>
              <p class="input-details">Elige un nombre para tu proyecto</p>
              <div class="tw-flex">
                <div class="tw-basis-1/3 sm:tw-basis-1/5 lg:tw-basis-2/12">
                  <Select
                    center
                    dark
                    v-model="projectData.currency"
                    :options="currencyOptions"
                  />
                </div>
                <div class="tw-grow tw-pl-5 lg:tw-pl-10">
                  <Select
                    dark
                    v-model="projectData.rangePrice"
                    :options="rangePriceOptions"
                  />
                </div>
              </div>
            </div>

            <div class="step-container step-3 tw-mt-5" :class="`show-${step}`">
              <div class="info-extra">
                <div class="tw-text-primary">
                  <img
                    class="tw-h-20 tw-w-20"
                    src="@/assets/svg/file-shredder.svg"
                    alt="Mi SVG"
                  />
                </div>
                <div class="tw-text-white tw-ml-8">
                  <p class="tw-text-sm">
                    Proyecto
                    <span class="tw-text-primary"
                      >"{{ projectData.name }}"</span
                    >
                  </p>
                  <p class="tw-font-extrabold tw-text-sm">
                    {{ projectData.rangePrice.range }}
                  </p>
                </div>
              </div>
              <p class="input-details">Detalles del proyecto</p>
              <div
                class="tw-bg-input tw-rounded-2xl tw-p-6 tw-relative tw-min-h-44"
              >
                <p class="tw-text-white tw-mb-10">
                  {{ projectData.description }}
                </p>
                <ul class="tw-flex tw-flex-wrap">
                  <li
                    v-for="(item, index) in projectData.skills"
                    :key="`skill_${index}`"
                    class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
                  >
                    <p
                      class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose"
                    >
                      {{ item }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="tw-w-4/6 tw-mx-auto tw-flex">
              <Button
                v-if="step > 0"
                @click="handleChangeStep(-1)"
                type="button"
                variant="secondary"
                class="hero tw-mt-8 tw-tracking-wide tw-w-full tw-font-semibold tw-py-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mx-1"
              >
                <span class="tw-ml-3"> Volver </span>
              </Button>
              <Button
                @click="handleChangeStep(1)"
                type="button"
                class="hero tw-mt-8 tw-tracking-wide tw-w-full tw-font-semibold tw-py-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mx-1"
              >
                <span class="tw-ml-3">
                  {{ step < 3 ? 'Siguiente' : 'Crear' }}
                </span>
              </Button>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  transition: all 1s ease;
  view-transition-name: article-thumb;
}
/* 
.step-0,
.step-1,
.step-2,
.step-3{
  @apply tw-max-h-0 tw-overflow-hidden tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bg-secondary;
  transition: all 1s ;
}
.step-0.show-0,
.step-1.show-1,
.step-2.show-2,
.step-3.show-3{
  @apply tw-max-h-svh
} */

.step-0,
.step-1,
.step-2,
.step-3 {
  @apply tw-hidden;
  transition: opacity 0.5s;
}
.step-0.show-0,
.step-1.show-1,
.step-2.show-2,
.step-3.show-3 {
  @apply tw-block;
}

.info-extra {
  @apply tw-border tw-border-primary tw-flex tw-justify-center tw-items-center tw-rounded-2xl tw-min-h-20 tw-p-5 lg:tw-p-10 tw-mb-10;
}
.input-details {
  @apply tw-text-white tw-font-bold tw-mb-4;
}
.skills-input {
  @apply tw-bg-input tw-w-full tw-text-white tw-border-none tw-py-4 tw-px-2 tw-rounded-2xl;
  &:focus {
    @apply tw-border-none tw-outline-none;
  }
}

.option-skill-list {
  @apply tw-absolute tw-top-full tw-left-0 tw-right-0 tw-bg-white tw-rounded-b-2xl tw-rounded-t-sm tw-z-50 tw-overflow-y-scroll;
  ul {
    @apply tw-max-h-0;
    transition: max-height 0.5s;
    li {
      @apply tw-p-2 tw-rounded-xl tw-mb-1 tw-cursor-pointer;
      transition: background 0.3s;
      &:hover {
        @apply tw-bg-input tw-text-primary;
      }
    }
  }
}

.skills-input:focus ~ .option-skill-list ul {
  @apply tw-max-h-40;
}
</style>
