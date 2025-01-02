<script setup lang="ts">
import LogoGreenTextSVG from '@/assets/svg/logo-green-text.svg'
import CategoriesSVG from '@/assets/svg/categories.svg'
import FacebookSVG from '@/assets/svg/brand/facebook.svg'
import InstagramSVG from '@/assets/svg/brand/instagram.svg'
import LinkedinSVG from '@/assets/svg/brand/linkedin.svg'
import { MailIcon, InfoIcon, PhoneIcon, PencilIcon } from 'lucide-vue-next'
import type { PaginationInfo } from '~/models/interfaces/utils'

// Primera solicitud de datos
const countUsers = ref(0)
const countProjects = ref(0)
onMounted(() => {
  Promise.all([
    apiCluster.get('/api/profile/v1/users', {
      take: 1,
      page: 1,
    }),
    apiCluster.get('/api/ipin/v1/pins', {
      take: 1,
      page: 1,
    }),
  ]).then(([usersRspn, projectRspn]: [any, any]) => {
    let metadata: {
      page: PaginationInfo
    } = usersRspn.meta
    countUsers.value = metadata.page.total
    metadata = projectRspn.meta
    countProjects.value = metadata.page.total
  })
})
</script>

<template>
  <div class="tw-bg-secondary tw-min-h-10">
    <div class="footer-container tw-pb-52 tw-pt-14">
      <div class="tw-container">
        <LogoGreenTextSVG class="tw-text-9xl !tw-h-auto !tw-mb-10" filled />
        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-max-w-6xl">
          <div>
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-border-r-2 tw-border-white tw-px-3 tw-py-5">
                <MailIcon class="tw-text-primary" />
              </div>
              <div class="tw-text-white tw-ml-3">
                <p class="tw-mb-1 tw-text-sm tw-font-bold">Ubicación</p>
                <p class="tw-mb-0 tw-text-xs">Colombia, Tolima</p>
              </div>
            </div>
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-border-r-2 tw-border-white tw-px-3 tw-py-5">
                <InfoIcon class="tw-text-primary" />
              </div>
              <div class="tw-text-white tw-ml-3">
                <p class="tw-mb-1 tw-text-sm tw-font-bold">Info</p>
                <a
                  href="#"
                  class="tw-mb-2 tw-text-xs tw-font-extralight tw-block"
                >
                  Ayuda y soporte
                </a>
              </div>
            </div>
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-border-r-2 tw-border-white tw-px-3 tw-py-5">
                <PhoneIcon class="tw-text-primary" />
              </div>
              <div class="tw-text-white tw-ml-3">
                <p class="tw-mb-1 tw-text-sm tw-font-bold">Teléfono</p>
                <a href="tel:+573173848266" class="tw-mb-0 tw-text-xs">
                  +57 317 3848266
                </a>
              </div>
            </div>
          </div>

          <div class="tw-flex tw-items-center tw-mb-4">
            <div
              class="tw-border-r-2 tw-border-input tw-px-3 tw-py-5 tw-h-full tw-pt-0"
            >
              <PencilIcon class="tw-text-primary" />
            </div>
            <div class="tw-text-white tw-ml-3 tw-h-full">
              <p class="tw-mb-10 tw-text-sm tw-font-bold">Términos</p>
              <a
                href="/data_processing_policy"
                target="_blank"
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
              >
                Política de Tratamiento de Datos
              </a>
              <a
                href="/terms_and_conditions"
                target="_blank"
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
              >
                Términos del Servicio
              </a>
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-mb-4">
            <div
              class="tw-border-r-2 tw-border-input tw-px-3 tw-py-5 tw-h-full tw-pt-0"
            >
              <CategoriesSVG class="tw-text-primary tw-text-3xl" filled />
            </div>
            <div class="tw-text-white tw-ml-3 tw-h-full">
              <p class="tw-mb-10 tw-text-sm tw-font-bold">Categorías</p>
              <NuxtLink
                to="/categories"
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
              >
                Infraestructura TI y Conectividad
              </NuxtLink>
              <NuxtLink
                to="/categories"
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
              >
                Transformación Digital y Desarrollo de Software
              </NuxtLink>
              <NuxtLink
                to="/categories"
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
              >
                Producción de Contenidos y Marketing Digital
              </NuxtLink>
              <NuxtLink
                to="/categories"
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
              >
                Videojuegos, Realidad Aumentada y Virtual
              </NuxtLink>
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-mb-4">
            <div
              class="tw-border-r-2 tw-border-input tw-px-3 tw-py-5 tw-h-full tw-pt-0"
            >
              <InfoIcon class="tw-text-primary" />
            </div>
            <div class="tw-text-white tw-ml-3 tw-h-full">
              <p class="tw-mb-10 tw-text-sm tw-font-bold">Acerca del Cluster</p>

              <NuxtLink
                class="tw-mb-3 tw-text-xs tw-font-extralight tw-block"
                to="/info"
              >
                Sobre el cluster
              </NuxtLink>
              <!-- <a
                href="#"
                class="tw-mb-7 tw-text-xs tw-font-extralight tw-block"
              >
                Recursos de ayuda
              </a> -->
              <div class="tw-flex tw-justify-between">
                <a
                  href=" https://www.instagram.com/clustertolimatic/"
                  target="_blank"
                  class="tw-block"
                >
                  <InstagramSVG class="tw-text-primary tw-text-4xl" filled />
                </a>
                <a
                  href="https://www.facebook.com/TolimaTIC"
                  target="_blank"
                  class="tw-block"
                >
                  <FacebookSVG class="tw-text-primary tw-text-4xl" filled />
                </a>
                <a
                  href="https://www.linkedin.com/in/cluster-tolima-tic-03081433a/"
                  target="_blank"
                  class="tw-block"
                >
                  <LinkedinSVG class="tw-text-primary tw-text-4xl" filled />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-container tw-pb-5 tw-pt-7 footer">
      <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-max-w-6xl">
        <div class="">
          <p class="tw-mb-0 tw-text-lg tw-font-bold tw-text-white">
            {{ countUsers.toLocaleString('en-US') }}
          </p>
          <p class="tw-mb-1 tw-text-sm tw-text-primary">Usuarios registrados</p>
        </div>
        <div class="">
          <p class="tw-mb-0 tw-text-lg tw-font-bold tw-text-white">
            {{ countProjects.toLocaleString('en-US') }}
          </p>
          <p class="tw-mb-1 tw-text-sm tw-text-primary">Proyectos totales</p>
        </div>
        <div class="">
          <p
            class="tw-mb-1 text-muted tw-text-xs lg:tw-text-sm tw-font-normal tw-text-nowrap"
          >
            Cluster ® is a registered Trademark of Cluster TIC
            <span class="tw-block md:tw-inline-block">(ABC 123 456 789)</span>
          </p>
          <p class="tw-mb-0 text-muted tw-text-xs lg:tw-text-sm tw-font-normal">
            Copyright © 2024 Cluster TIC (ABC 123 456 789)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  @apply tw-bg-secondary;
}
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .footer-container {
    background-image: url('@/assets/images/footer-lines.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
  }
}
.text-muted {
  color: hsla(240, 6%, 51%, 0.56);
}
.footer {
  position: relative;
  &::before {
    content: '';
    height: 2px;
    left: 10%;
    right: 10%;

    @apply tw-absolute tw-top-0 tw-rounded-xl tw-bg-input tw-opacity-75;
  }
}
</style>
