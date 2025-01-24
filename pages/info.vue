<script setup lang="ts">
import TestimonialsCarousel from '~/components/sections/TestimonialsCarousel.vue'
import ProfesionalCarousel from '~/components/sections/ProfesionalCarousel.vue'
import StaffCarousel from '~/components/sections/StaffCarousel.vue'
import DecorationContactSVG from '~/assets/svg/decoration-contact.svg'
import DeskContactSVG from '~/assets/svg/desk-contact.svg'
import CharacterSVG from '~/assets/svg/character-info.svg'
import SolarPanelSVG from '@/assets/svg/solar-panel.svg'
import DevicesPcSVG from '@/assets/svg/devices-pc.svg'
import BrushSVG from '@/assets/svg/brush.svg'
import PacManSVG from '@/assets/svg/pacman.svg'
import ArrowSVG from '@/assets/svg/arrow.svg'
import PlayVideoSVG from '@/assets/svg/play-video.svg'

import BriefcaseSVG from '~/assets/svg/briefcase.svg'
import DeviceLaptopSVG from '~/assets/svg/device-laptop.svg'
import FlagSVG from '~/assets/svg/flag.svg'
import MessageChatboxSVG from '@/assets/svg/message-chatbot.svg'
import SpeakerPhoneSVG from '@/assets/svg/speakerphone.svg'
import Switch3SVG from '@/assets/svg/switch-3.svg'
import WorldLatSVG from '@/assets/svg/world-longitude.svg'
import { ArrowRightIcon, FlagIcon, PlayIcon } from 'lucide-vue-next'
definePageMeta({
  layout: 'default',
})

const contactData = ref({
  nombre: '',
  apellido: '',
  empresa: '',
  teléfono: '',
  'correo electrónico': '',
  asunto: '',
  mensaje: '',
  agreement: false,
})
const contactFormKeys = ref<any>({
  nombre: '',
  apellido: '',
  empresa: '',
  teléfono: '',
  'correo electrónico': '',
  asunto: '',
  mensaje: '',
})
const what_ist_tolima_section = ref<{
  title: string
  description: string
  img: string
} | null>(null)
const categoriesStore = useCategoryStore()
onMounted(() => {
  categoriesStore.requestParentsCategories()
  apiCluster.get('/api/iform/v4/forms/2').then((response: any) => {
    const fields = response.data.fields
    fields.forEach((field: any) => {
      contactFormKeys.value[`${field.label}`.toLowerCase()] = field.name
    })
  })

  apiCluster.get('/api/iblog/v1/posts/8').then((response: any) => {
    what_ist_tolima_section.value = {
      title: response.data.title,
      description: response.data.description,
      img:
        response?.data?.mainImage?.path ||
        'https://s3.wasabisys.com/assets.cluster/assets/media/assets/video-cap.jpg',
    }
  })
})

function handleSelectCategory(category: any) {
  Helper.redirectTo(`/companies/?skill=${category.title}`)
}
function handleSelectSubCategory(category: any) {
  categoriesStore.viewDetails(parseInt(`${category.id}`))
}
const refForm = ref(null)

function handleSubmit() {
  const data: { [key: string]: any } = {
    attributes: {
      form_id: 2,
    },
  }
  data.attributes[`${contactFormKeys.value['nombre']}`] =
    contactData.value.nombre
  data.attributes[`${contactFormKeys.value['apellido']}`] =
    contactData.value.apellido
  data.attributes[`${contactFormKeys.value['empresa']}`] =
    contactData.value.empresa
  data.attributes[`${contactFormKeys.value['teléfono']}`] =
    contactData.value.teléfono
  data.attributes[`${contactFormKeys.value['correo electrónico']}`] =
    contactData.value['correo electrónico']
  data.attributes[`${contactFormKeys.value['asunto']}`] =
    contactData.value.asunto
  data.attributes[`${contactFormKeys.value['mensaje']}`] =
    contactData.value.mensaje

  apiCluster.post('/api/iform/v4/leads', data).then((response: any) => {
    console.log(response)
    
    contactData.value = {
      nombre: '',
      apellido: '',
      empresa: '',
      teléfono: '',
      'correo electrónico': '',
      asunto: '',
      mensaje: '',
      agreement: false,
    }
    Notify.create({
      message: 'Enviado exitosamente',
    })
  })
}
</script>

<template>
  <div class="tw-relative">
    <div
      class="tw-absolute tw-inset-0 tw-z-[-1] tw-bg-primary tw-opacity-10"
    ></div>
    <div
      class="tw-container tw-flex tw-justify-center tw-items-center tw-h-[100%]"
    >
      <div class="tw-flex tw-justify-between tw-flex-col lg:tw-flex-row">
        <div class="tw-basis-5/12 tw-flex tw-flex-col tw-justify-center">
          <h1
            class="tw-text-black tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-12 tw-mt-6"
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
                class="md:tw-text-2xl hover:tw-bg-transparent hover:tw-underline !tw-pl-0 !tw-font-normal h2 text-league-spartan"
              >
                Conoce nuestras soluciones
                <ArrowRightIcon class="tw-ml-3" />
              </Button>
            </NuxtLink>
          </div>
        </div>
        <div class="tw-basis-3/12 lg:tw-basis-6/12">
          <div class="tw-relative tw-flex tw-justify-center">
            <CharacterSVG
              filled
              class="tw-text-[14rem] sm:tw-text-[20rem] lg:tw-text-[40rem] !tw-mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="what_ist_tolima_section"
    class="tw-container tw-py-24 play-container"
  >
    <div class="tw-flex tw-flex-col tw-gap-20 lg:tw-flex-row">
      <div class="tw-basis-5/12 lg:tw-pl-24">
        <h2
          class="tw-text-black tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative"
        >
          {{ what_ist_tolima_section.title }}

          <ArrowSVG
            filled
            class="tw-absolute tw-text-primary-alt tw-text-4xl -tw-left-24 tw-top-0 -tw-translate-y-1/2"
            style="transform: rotate(180deg)"
          />
        </h2>
        <p class="tw-text-lg h3 tw-mb-5 tw-font-bold">Descripción general</p>
        <p
          class="tw-text-md tw-font-normal tw-leading-tight tw-mb-10"
          v-html="what_ist_tolima_section.description"
        ></p>
        <button
          size="lg"
          class="tw-bg-primary tw-py-3 text-league-spartan tw-px-6 tw-text-lg md:tw-text-xl !tw-font-normal h2 tw-border-2 tw-border-black !tw-rounded-xl"
        >
          Conoce nuestra estrategia
        </button>
      </div>
      <div class="tw-basis-3/12 lg:tw-basis-6/12">
        <!-- <div
          class="tw-w-full tw-max-w-[880px] tw-pb-[56.25%] tw-rounded-3xl tw-bg-black tw-relative"
        >
          <PlayVideoSVG
            Filled
            class="tw-text-6xl md:tw-text-9xl lg:tw-text-6xl xl:tw-text-9xl tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
          />
        </div> -->
        <img
          class="tw-w-full tw-max-w-[880px] tw-rounded-3xl"
          :src="what_ist_tolima_section.img"
        />
      </div>
    </div>
  </div>

  <div class="tw-bg-black tw-py-20">
    <div class="tw-container">
      <h2
        class="tw-text-white tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative tw-pl-12 lg:tw-pl-24"
      >
        Lineas de servicio
        <ArrowSVG
          filled
          class="tw-absolute tw-text-primary-alt tw-text-4xl tw-left-0 tw-top-0 -tw-translate-y-1/2"
          style="transform: rotate(180deg)"
        />
      </h2>
      <div
        class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-4 what-its-cluster-details"
      >
        <div
          v-for="category in categoriesStore.parentCategories"
          :key="`sub-category-${category.id}`"
          class="tw-flex tw-items-center tw-mb-4"
        >
          <div class="tw-h-full tw-w-full">
            <div
              @click="handleSelectCategory(category)"
              class="category-header tw-cursor-pointer"
            >
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
              <p
                class="sub-category tw-cursor-pointer"
                @click="handleSelectSubCategory(subCategory)"
                v-for="subCategory in category.children"
                :key="`sub-category-${subCategory.id}`"
              >
                {{ subCategory.title }}
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TestimonialsCarousel />
  <ProfesionalCarousel title="Empresas" />
  <StaffCarousel />
  <div class="tw-bg-white tw-pt-20">
    <div class="tw-container">
      <h2
        class="tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative tw-pl-12 lg:tw-pl-24"
      >
        Beneficios de Ser Parte del Clúster
        <ArrowSVG
          filled
          class="tw-absolute tw-text-primary-alt tw-text-4xl tw-left-0 tw-top-0 -tw-translate-y-1/2"
          style="transform: rotate(180deg)"
        />
      </h2>
      <div
        class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 benefits-cluster-details"
      >
        <div>
          <WorldLatSVG filled class="tw-mb-5 tw-text-4xl" />
          <p>Acceso a nuevos mercados internacionales.</p>
        </div>
        <div>
          <Switch3SVG filled class="tw-mb-5 tw-text-4xl" />
          <p>
            Colaboración tecnológica y oportunidades de co-desarrollo de
            productos.
          </p>
        </div>
        <div>
          <DeviceLaptopSVG filled class="tw-mb-5 tw-text-4xl" />
          <p>Participación en mesas de trabajo especializadas.</p>
        </div>
        <div>
          <SpeakerPhoneSVG filled class="tw-mb-5 tw-text-4xl" />
          <p>Acceso a formación y capacitaciones exclusivas.</p>
        </div>
        <div>
          <MessageChatboxSVG filled class="tw-mb-5 tw-text-4xl" />
          <p>Red de contactos y networking con otras empresas del sector.</p>
        </div>
        <div>
          <FlagSVG filled class="tw-mb-5 tw-text-4xl" />
          <p>Apoyo en la internacionalización de productos y servicios.</p>
        </div>
        <div>
          <BriefcaseSVG filled class="tw-mb-5 tw-text-4xl" />
          <p>
            Visibilidad en el portafolio de soluciones exportables del clúster.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="tw-relative">
    <div class="tw-absolute tw-top-0 tw-bottom-0 tw-left-0">
      <DecorationContactSVG filled class="tw-text-8xl !tw-h-full !tw-w-full" />
    </div>
    <div class="tw-absolute tw-top-0 tw-bottom-0 tw-right-0">
      <DecorationContactSVG
        filled
        class="tw-text-8xl !tw-h-full !tw-w-full tw-rotate-180"
      />
    </div>
    <div class="tw-absolute tw-bottom-0 tw-right-0">
      <DeskContactSVG
        filled
        class="tw-opacity-0 lg:tw-opacity-100 lg:tw-text-[35rem] !tw-h-auto !tw-mb-0"
      />
    </div>

    <div class="tw-container tw-max-w-[1000px]">
      <q-form
        class="tw-p-4 tw-mt-40 tw-bg-white tw-bg-opacity-80"
        @submit.prevent.stop="handleSubmit"
        ref="refForm"
      >
        <h2
          class="tw-text-black tw-font-normal tw-text-center tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative"
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
              v-model="contactData.nombre"
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
              v-model="contactData.apellido"
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
              v-model="contactData.empresa"
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
              label="teléfono"
              class="tw-mb-3 tw-mt-2"
              mask="phone"
              v-model="contactData.teléfono"
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
            v-model="contactData['correo electrónico']"
          ></InputCPA>
        </div>
        <div>
          <label
            class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap"
          >
            Asunto
          </label>
          <InputCPA
            outlined
            rounded
            label="Asunto"
            class="tw-mb-3 tw-mt-2"
            v-model="contactData.asunto"
          ></InputCPA>
        </div>
        <label class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-mt-3">
          Mensaje
        </label>
        <Textarea
          placeholder="Escriba aquí..."
          v-model="contactData.mensaje"
          class="tw-h-52"
        ></Textarea>

        <div class="lg:tw-flex tw-justify-between tw-mt-10 tw-px-10">
          <label class="tw-flex tw-font-normal tw-items-center">
            <Checkbox
              class="tw-bg-white !tw-border-input tw-mr-3"
              v-model:checked="contactData.agreement"
            ></Checkbox>
            <span class="tw-text-black tw-ml-2">
              Acepto los
              <a 
              href="/terms_and_conditions" 
              target="_blank" 
              class="tw-text-primary tw-underline">
                términos y condiciones.
              </a>
            </span>
          </label>
          <button
            type="submit"
            :disabled="!contactData.agreement"
            class="tw-bg-primary tw-py-3 text-league-spartan tw-px-8 md:tw-px-16 tw-text-lg md:tw-text-xl !tw-font-normal h2 tw-border-2 tw-border-black !tw-rounded-xl tw-mt-4"
          >
            ¡Únete al Clúster!
          </button>
        </div>
      </q-form>

      <DeskContactSVG
        filled
        class="tw-opacity-0 tw-text-9xl lg:tw-text-[40rem] !tw-h-auto !tw-mb-0"
      />
    </div>
  </div>
</template>

<style scoped>
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .play-container {
    background-image: url('@/assets/images/fondo-video.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: right;
  }
}

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
  & .sub-category {
    @apply tw-mb-6 tw-text-xs tw-font-normal tw-block tw-w-full;
  }
  & .category-header {
    @apply tw-text-white tw-mb-10 tw-flex tw-justify-start tw-items-center tw-w-full tw-rounded-[10rem] tw-border tw-border-primary tw-py-4 tw-px-2;
    & > span {
      @apply tw-px-3 tw-py-2 tw-border-r-2 tw-border-muted-foreground;
    }
    & > h4 {
      @apply tw-text-white tw-font-medium tw-text-sm md:tw-text-base !tw-leading-none tw-text-start tw-whitespace-normal tw-pl-3;
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
    @apply md:tw-border-r-2 tw-border-muted-light tw-px-10 lg:tw-px-20 tw-pb-10;
  }
  & > div:nth-child(4n) {
    @apply tw-border-none;
  }
  & p {
    @apply tw-mb-6 tw-text-lg tw-font-medium tw-block tw-w-full;
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
