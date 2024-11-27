<script setup lang="ts">
import DeskLandingSVG from '~/assets/svg/desk-landing.svg'
import SolarPanelSVG from '@/assets/svg/solar-panel.svg'
import DevicesPcSVG from '@/assets/svg/devices-pc.svg'
import BrushSVG from '@/assets/svg/brush.svg'
import PacManSVG from '@/assets/svg/pacman.svg'
import {
  ArrowRightIcon,
  PlayIcon,
  GlobeIcon,
  ShuffleIcon,
  Laptop2Icon,
  MegaphoneIcon,
  MessagesSquareIcon,
  FlagIcon,
  BriefcaseBusinessIcon,
} from 'lucide-vue-next'
definePageMeta({
  layout: 'default',
})

const categoriesStore = useCategoryStore()
onMounted(() => {
  categoriesStore.requestParentsCategories()
})
const contactData = ref({
  firstName: '',
  lastName: '',
  company: '',
  phone: '',
  email: '',
  lineService: '',
  message: '',
  agreement: false,
})
const refForm = ref(null)
</script>

<template>
  <div class="tw-h-svh tw-relative">
    <div
      class="tw-absolute tw-inset-0 tw-z-[-1] tw-bg-primary tw-opacity-10"
    ></div>
    <div
      class="tw-container tw-flex tw-justify-center tw-items-center tw-h-[100%] tw-pt-24"
    >
      <div class="tw-flex tw-justify-between tw-flex-col lg:tw-flex-row">
        <div class="tw-basis-5/12 tw-flex tw-flex-col tw-justify-center">
          <h1
            class="tw-text-black tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-12"
          >
            Impulsando la
            <span class="tw-font-bold tw-block">Innovación Tecnológica</span>
            del Tolima
          </h1>
          <p class="tw-text-2xl tw-font-light h1 tw-leading-tight tw-mb-20">
            El Clúster TIC del Tolima es una comunidad que une talento,empresas
            y tecnología para transformar la región y ofrecer soluciones
            exportables al mundo
          </p>
          <div class="tw-flex tw-mb-10 lg:tw-mb-0">
            <NuxtLink to="/projects">
              <Button
                variant="ghost"
                class="md:tw-text-2xl hover:tw-bg-transparent hover:tw-underline !tw-pl-0 !tw-font-light h2"
              >
                Conoce nuestras soluciones
                <ArrowRightIcon class="tw-ml-3" />
              </Button>
            </NuxtLink>
          </div>
        </div>
        <div class="tw-basis-3/12 lg:tw-basis-6/12">
          <div class="tw-relative">
            <DeskLandingSVG
              filled
              class="tw-text-9xl lg:tw-text-[40rem] !tw-mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tw-container tw-py-24">
    <div class="tw-flex tw-flex-col tw-gap-20 lg:tw-flex-row">
      <div class="tw-basis-5/12 tw-pl-24">
        <h2
          class="tw-text-black tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative"
        >
          ¿Que es el cluster de Tolima?
          <PlayIcon
            :size="30"
            class="tw-absolute tw-text-primary -tw-left-24 tw-top-1/2 -tw-translate-y-1/3"
          />
        </h2>
        <p class="tw-text-lg h3 tw-mb-5 tw-font-bold">Descripción general</p>
        <p class="tw-text-md tw-font-light tw-leading-tight tw-mb-10">
          El Clúster TIC del Tolima es una comunidad que une talento,empresas y
          tecnología para transformar la región y ofrecer soluciones exportables
          al mundo
        </p>
        <Button size="lg" class="tw-text-lg md:tw-text-xl\!tw-font-normal h2">
          Conoce nuestra estrategia
        </Button>
      </div>
      <div class="tw-basis-3/12 lg:tw-basis-6/12">
        <div
          class="tw-w-full tw-max-w-[880px] tw-pb-[56.25%] tw-rounded-3xl tw-bg-black tw-relative"
        >
          <PlayIcon
            :size="120"
            class="!lg:tw-text-9xl tw-text-primary tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="tw-bg-black tw-py-20">
    <div class="tw-container">
      <h2
        class="tw-text-white tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative tw-pl-24"
      >
        ¿Que es el cluster de Tolima?
        <PlayIcon
          :size="30"
          class="tw-absolute tw-text-primary -tw-left-0 tw-top-1/2 -tw-translate-y-1/3"
        />
      </h2>
      <div
        class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 what-its-cluster-details"
      >
        <div
          v-for="category in categoriesStore.parentCategories"
          :key="`sub-category-${category.id}`"
          class="tw-flex tw-items-center tw-mb-4"
        >
          <div class="tw-h-full tw-w-full">
            <div class="category-header">
              <span>
                <SolarPanelSVG
                  v-if="category.id === 1"
                  class="tw-text-4xl"
                  filled
                />
                <DevicesPcSVG
                  v-if="category.id === 2"
                  class="tw-text-4xl"
                  filled
                />
                <BrushSVG v-if="category.id === 3" class="tw-text-4xl" filled />
                <PacManSVG
                  v-if="category.id === 4"
                  class="tw-text-4xl"
                  filled
                />
              </span>
              <h4>
                {{ category.title }}
              </h4>
            </div>
            <template v-if="category.children">
              <NuxtLink
                :to="`/categories/${subCategory.id}`"
                v-for="subCategory in category.children"
                :key="`sub-category-${subCategory.id}`"
              >
                {{ subCategory.title }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-bg-white tw-pt-20">
    <div class="tw-container">
      <h2
        class="tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative tw-pl-24"
      >
        ¿Que es el cluster de Tolima?
        <PlayIcon
          :size="30"
          class="tw-absolute tw-text-primary -tw-left-0 tw-top-1/2 -tw-translate-y-1/3"
        />
      </h2>
      <div
        class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 benefits-cluster-details"
      >
        <div>
          <GlobeIcon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>Acceso a nuevos mercados internacionales.</p>
        </div>
        <div>
          <ShuffleIcon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>
            Colaboración tecnológica y oportunidades de co-desarrollo de
            productos.
          </p>
        </div>
        <div>
          <Laptop2Icon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>Participación en mesas de trabajo especializadas.</p>
        </div>
        <div>
          <MegaphoneIcon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>Acceso a formación y capacitaciones exclusivas.</p>
        </div>
        <div>
          <MessagesSquareIcon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>Red de contactos y networking con otras empresas del sector.</p>
        </div>
        <div>
          <FlagIcon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>Apoyo en la internacionalización de productos y servicios.</p>
        </div>
        <div>
          <BriefcaseBusinessIcon :size="30" class="tw-mb-5 tw-text-primary" />
          <p>
            Visibilidad en el portafolio de soluciones exportables del clúster.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-container tw-max-w-[1000px] tw-mb-5">
    <q-form class="tw-pt-40" @submit.prevent.stop="() => {}" ref="refForm">
      <h2
        class="tw-text-black tw-font-light tw-text-center tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative"
      >
        Formemos juntos el
        <span class="tw-text-primary">futuro tecnológico</span>
        de nuestra región.
      </h2>
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-10">
        <div>
          <label class="tw-font-normal tw-mb-3 tw-block tw-text-base">
            Nombre
          </label>
          <InputCPA
            outlined
            rounded
            label="Nombre"
            class="tw-mb-3 tw-mt-2"
            v-model="contactData.firstName"
            fill-mask
            reverse-fill-mask
            :rules="[(val) => !!val || 'El valor es requerido']"
          ></InputCPA>
        </div>
        <div>
          <label
            class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap"
          >
            Apellido
          </label>
          <InputCPA
            outlined
            rounded
            label="Apellido"
            class="tw-mb-3 tw-mt-2"
            v-model="contactData.lastName"
          ></InputCPA>
        </div>
        <div>
          <label
            class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap"
          >
            Empresa
          </label>
          <InputCPA
            outlined
            rounded
            label="Empresa"
            class="tw-mb-3 tw-mt-2"
            v-model="contactData.company"
          ></InputCPA>
        </div>
        <div>
          <label
            class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap"
          >
            Teléfono
          </label>
          <InputCPA
            outlined
            rounded
            label="Teléfono"
            class="tw-mb-3 tw-mt-2"
            mask="phone"
            v-model="contactData.phone"
          ></InputCPA>
        </div>
      </div>

      <div>
        <label
          class="tw-font-normal tw-my-3 tw-block tw-text-base tw-whitespace-nowrap"
        >
          Correo electrónico
        </label>
        <InputCPA
          outlined
          rounded
          label="Correo electrónico"
          class="tw-mb-3 tw-mt-2"
          type="email"
          v-model="contactData.email"
        ></InputCPA>
      </div>
      <div>
        <label
          class="tw-font-normal tw-my-3 tw-block tw-text-base tw-whitespace-nowrap"
        >
          Linea de servicio
        </label>
        <Select
          class="tw-w-full"
          outlined
          rounded
          v-model="contactData.lineService"
          :options="[]"
        />
      </div>
      <label class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-mt-3">
        Mensaje
      </label>
      <Textarea
        placeholder="Mensaje"
        v-model="contactData.message"
        class="tw-h-52"
      ></Textarea>

      <div class="tw-flex tw-justify-between tw-mt-10 tw-px-10">
        <label class="tw-flex tw-items-center">
          <Checkbox
            class="tw-bg-white !tw-border-input"
            v-model:checked="contactData.agreement"
          ></Checkbox>
          <span class="tw-text-black tw-ml-2">
            Acepto los
            <a href="#" class="tw-text-primary tw-underline">
              términos y condiciones.
            </a>
          </span>
        </label>
        <Button
          type="submit"
          class="tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
        >
          Enviar propuesta
        </Button>
      </div>
    </q-form>
  </div>
</template>

<style scoped>
.cluster-details-img {
  background-image: url('@/assets/images/cluster-details-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: right;
}

.what-its-cluster-details {
  @apply tw-text-white;
  & > * {
    @apply md:tw-border-r-2 tw-border-muted-light tw-px-6;
  }
  & > *:nth-child(4n) {
    @apply tw-border-none;
  }
  & a {
    @apply tw-mb-6 tw-text-xs tw-font-normal tw-block tw-w-full;
  }
  & .category-header {
    @apply tw-text-white tw-mb-10 tw-flex tw-justify-start tw-items-center tw-w-full tw-rounded-[10rem] tw-border tw-border-primary tw-py-4 tw-px-2;
    & > span {
      @apply tw-px-3 tw-py-2 tw-border-r-2 tw-border-muted-foreground;
    }
    & > h4 {
      @apply tw-text-white tw-font-medium tw-text-base  tw-text-start tw-whitespace-normal tw-pl-3;
    }
  }
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Cuatro columnas de igual ancho */
  gap: 10px; /* Espacio entre las celdas */
}
.grid-item {
  border-right: 1px solid #ccc; /* Línea separadora entre columnas */
  padding: 10px;
} /* Quita el borde derecho cada 4 elementos */
.grid-item:nth-child(4n) {
  border-right: none;
}
.benefits-cluster-details {
  & > div {
    @apply md:tw-border-r-2 tw-border-muted-light tw-px-20 tw-pb-10;
  }
  & > div:nth-child(4n) {
    @apply tw-border-none;
  }
  & p {
    @apply tw-mb-6 tw-text-lg tw-font-normal tw-block tw-w-full;
  }
  & button {
    @apply tw-mb-10 tw-text-sm tw-font-bold tw-block tw-w-full tw-rounded-3xl;
  }
}

:deep(.card-shadow) {
  @apply tw-bg-white;
  box-shadow: 0px 25px 60px 0px hsla(0, 0%, 0%, 0.1);
}
.line-variant {
  position: relative;
  &::before {
    content: '';
    @apply tw-bg-gradient-to-b tw-from-primary tw-to-secondary;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
  }
}
</style>
