<script setup lang="ts">
import DeskLandingSVG from '~/assets/svg/desk-landing.svg'
import CharacterLandingSVG from '~/assets/svg/character-landing.svg'
import { ArrowRightIcon, PlayIcon } from 'lucide-vue-next'
import profesionalCarousel from '~/components/sections/ProfesionalCarousel.vue'
import RocketSVG from '@/assets/svg/rocket.svg'
import BulbSVG from '@/assets/svg/bulb.svg'
import BrainSVG from '@/assets/svg/brain.svg'
import AffiliateSVG from '@/assets/svg/affiliate.svg'
import LoadingScreen from '~/components/sections/LoadingScreen.vue'
import SolarPanelSVG from '@/assets/svg/solar-panel.svg'
import DevicesPcSVG from '@/assets/svg/devices-pc.svg'
import BrushSVG from '@/assets/svg/brush.svg'
import PacManSVG from '@/assets/svg/pacman.svg'
import type { Project } from '~/models/interfaces/projects'
definePageMeta({
  layout: 'default',
})
const handleAnimationStart = (self: AnimationEvent) => {
  ;(<HTMLElement>self.currentTarget)?.classList.remove('tw-opacity-0') // Añade la clase de Tailwind al finalizar
  ;(<HTMLElement>self.currentTarget)?.classList.add('tw-opacity-80') // Añade la clase de Tailwind al finalizar
}
const slide = ref(1)
const project = ref<Project | null>(null)
const createdAt = computed(() => <string>project.value?.createdAt)
onMounted(() => {
  apiCluster
    .get('/api/ipin/v1/pins', {
      take: 1,
      include: 'categories',
      filter: '{"order":{"field":"created_at","way":"desc"}}',
    })
    .then((response: any) => {
      project.value = (<Project[]>response.data)[0]
    })
})
</script>

<template>
  <LoadingScreen />
  <div class="tw-min-h-svh tw-relative">
    <div
      class="tw-absolute tw-inset-0 tw-z-[-1] tw-bg-primary tw-opacity-10"
    ></div>
    <div class="tw-container tw-pt-5 md:tw-pt-24">
      <div class="lg:tw-flex lg:tw-flex-row">
        <div class="tw-basis-full lg:tw-basis-7/12">
          <h1
            class="tw-text-black tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-10"
          >
            <!-- <i18n-t keypath="landing.title.content">
              <template #highlight>
                <b class="tw-font-bold">{{ $t('landing.title.highlight') }}</b>
              </template>
              <template #br>
                <br />
              </template>
              <template #br2>
                <br />
              </template>
            </i18n-t> -->
            Conecta ahora tus ideas
            <br />
            con
            <b class="tw-font-bold">manos expertas</b>
            en
            <br />
            tecnología para hacerlas realidad
          </h1>
          <div class="tw-flex tw-flex-wrap tw-gap-y-2 tw-mb-10 lg:tw-mb-0">
            <NuxtLink class="tw-w-full md:tw-w-auto" to="/projects/create">
              <Button
                size="lg"
                class="tw-border tw-w-full md:tw-w-auto tw-border-black tw-border-solid md:tw-text-[20px]"
              >
                {{ Helper.tLang('landing.publishProject') }}
              </Button>
            </NuxtLink>

            <NuxtLink class="tw-w-full md:tw-w-auto" to="/projects">
              <Button
                variant="ghost"
                class="tw-w-full md:tw-w-auto tw-ml-5 md:tw-text-[20px] hover:tw-bg-transparent hover:tw-underline"
              >
                {{ Helper.tLang('landing.findProject') }}
                <ArrowRightIcon class="tw-ml-3" />
              </Button>
            </NuxtLink>
          </div>
        </div>
        <div class="tw-basis-full lg:tw-basis-6/12">
          <div class="tw-relative">
            <DeskLandingSVG
              filled
              class="tw-text-[20rem] md:tw-text-[30rem] tw-mx-auto lg:tw-text-[36rem] !tw-my-0"
            />
            <div
              class="float-label tw-items-center tw-opacity-0 first add-shadow tw-top-[5px]"
              @animationstart="handleAnimationStart"
            >
              <SolarPanelSVG class="tw-text-2xl tw-mr-2" filled />
              Infraestructura TI y Conectividad
            </div>
            <div
              class="float-label tw-items-center tw-opacity-0 second tw-top-[15%] md:tw-right-[8%] xl:tw-right-[-4%]"
              @animationstart="handleAnimationStart"
            >
              <PacManSVG class="tw-text-2xl tw-mr-2" filled />
              Videojuegos, Realidad Aumentada y Virtual
            </div>
            <div
              class="float-label tw-items-center tw-opacity-0 second tw-top-[35%] md:tw-left-[35%] xl:tw-left-[15%]"
              @animationstart="handleAnimationStart"
            >
              <BrushSVG class="tw-text-2xl tw-mr-2" filled />
              Producción de Contenidos y Marketing Digital
            </div>
            <div
              class="float-label tw-items-center tw-opacity-0 third tw-top-[50%] lg:tw-left-[-25%]"
              @animationstart="handleAnimationStart"
            >
              <DevicesPcSVG class="tw-text-2xl tw-mr-2" filled />
              Transformación Digital y Desarrollo de Software
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SearchProject />

  <div class="tw-bg-gray-200">
    <h3
      class="tw-font-light tw-text-black tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-[30px] tw-py-10"
    >
      {{ Helper.tLang('landing.recentProjects') }}
    </h3>
    <div class="tw-flex tw-justify-center tw-w-full">
      <PlayIcon style="transform: rotate(90deg)" />
    </div>
    <div class="tw-container tw-py-10 lg:tw-px-40 tw-mb-10">
      <CardProject
        class="card-shadow"
        v-if="project"
        :id="project.id"
        :skills="project.categories?.map((cat) => cat.title) ?? []"
        :created-at="createdAt"
      >
        <template v-slot:title>{{ project.title }}</template>
        <template v-slot:subtitle>
          Presupuesto {{ project.minPrice }} - {{ project.maxPrice }}$
        </template>
        <template v-slot:description>
          {{ project.description }}
        </template>
      </CardProject>
    </div>
    <div class="tw-flex tw-justify-center tw-pb-20">
      <NuxtLink to="/projects">
        <button
          variant="ghost"
          type="button"
          class="tw-bg-white !tw-px-10 !tw-py-4 tw-text-lg tw-rounded-xl tw-flex tw-justify-center tw-items-center"
        >
          Ver más
          <ArrowRightIcon class="tw-ml-3" />
        </button>
      </NuxtLink>
    </div>
  </div>

  <div class="tw-bg-secondary">
    <div class="tw-pl-5 lg:tw-pl-56 tw-pr-0 tw-flex">
      <div class="tw-basis-full lg:tw-basis-1/2 tw-my-20">
        <h3
          class="tw-text-white tw-font-light tw-text-2xl sm:tw-text-3xl md:tw-text-[30px] tw-leading-tight tw-mb-10"
        >
          <span class="tw-text-primary">Hazlo realidad</span>
          <br />
          con Clúster
        </h3>
        <div class="tw-px-5 lg:tw-px-20 line-variant">
          <div
            class="tw-grid md:tw-grid-cols-2 tw-gap-x-20 tw-gap-y-5 tw-mb-20"
          >
            <div class="">
              <AffiliateSVG filled class="tw-text-5xl tw-text-white" />
              <h4
                class="tw-text-primary tw-font-semibold tw-text-lg md:tw-text-xl tw-my-5"
              >
                Conexiones estratégicas
              </h4>
              <p class="tw-text-white">
                Encuentra a los socios tecnológicos adecuados con rapidez. Esta
                plataforma conecta a ofertantes del sector TIC con demandantes
                de soluciones en diversos sectores, facilitando colaboraciones
                clave para el desarrollo regional.
              </p>
            </div>
            <div class="">
              <BulbSVG filled class="tw-text-5xl tw-text-white" />
              <h4
                class="tw-text-primary tw-font-semibold tw-text-lg md:tw-text-xl tw-my-5"
              >
                Soluciones de calidad
              </h4>
              <p class="tw-text-white">
                Accede a una red de empresas y profesionales del Tolima
                reconocidos por su experiencia. Los proyectos publicados se
                desarrollan bajo altos estándares de calidad, garantizando
                resultados sobresalientes para cada necesidad tecnológica.
              </p>
            </div>
            <div class="">
              <RocketSVG filled class="tw-text-5xl tw-text-white" />
              <h4
                class="tw-text-primary tw-font-semibold tw-text-lg md:tw-text-xl tw-my-5"
              >
                Propuestas ágiles
              </h4>
              <p class="tw-text-white">
                Publica demandas y recibe respuestas rápidas y personalizadas.
                La plataforma permite gestionar ofertas y demandas de manera
                eficiente, asegurando que las oportunidades se concreten en
                tiempo récord.
              </p>
            </div>
            <div class="">
              <BrainSVG filled class="tw-text-5xl tw-text-white" />
              <h4
                class="tw-text-primary tw-font-semibold tw-text-lg md:tw-text-xl tw-my-5"
              >
                Gestión inteligente
              </h4>
              <p class="tw-text-white">
                Disfruta de herramientas avanzadas que simplifican la gestión de
                proyectos. Desde perfiles detallados hasta valoraciones y
                reseñas, todo está diseñado para fomentar relaciones confiables
                y exitosas entre las partes.
              </p>
            </div>
          </div>
          <div class="">
            <p class="tw-text-white tw-font-semibold tw-mb-3">
              Haz realidad tus sueños
            </p>
            <NuxtLink to="/auth/register">
              <Button
                variant="ghost"
                type="button"
                class="!tw-text-xl md:!tw-text-2xl !tw-font-semibold tw-text-primary hover:tw-text-primary hover:tw-underline !tw-p-0"
              >
                Comienza Ya
                <ArrowRightIcon class="tw-text-primary tw-ms-2" />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="tw-hidden lg:tw-basis-1/2 xl:tw-flex tw-items-end tw-justify-center cluster-details-img tw-pb-20"
      >
        <CharacterLandingSVG
          filled
          class="tw-text-9xl lg:tw-text-[36rem] !tw-m-0"
        />
      </div>
    </div>
  </div>

  <profesionalCarousel />
</template>

<style scoped>
.cluster-details-img {
  background-image: url('@/assets/images/cluster-details-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: right;
}

.float-label {
  @apply tw-hidden md:tw-flex tw-absolute tw-px-10  tw-py-2 tw-text-lg tw-rounded-lg tw-bg-white tw-animate-slide-down tw-text-muted-custom;
  animation-duration: 1s;
  &.add-shadow {
    box-shadow: 30px 45px 50px 0px hsla(157, 47%, 67%, 0.57);
  }
  &.first {
    animation-delay: 500ms;
    transition: all 0.5s linear;
  }
  &.second {
    animation-delay: 800ms;
    transition: all 0.5s linear;
  }
  &.third {
    animation-delay: 1.2s;
    transition: all 0.5s linear;
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
