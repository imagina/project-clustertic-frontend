<script setup lang="ts">
import LogoGreenTextSVG from '@/assets/svg/logo-green-text.svg'
import CategoriesSVG from '@/assets/svg/categories.svg'
import FacebookSVG from '@/assets/svg/brand-facebook-green.svg'
import InstagramSVG from '@/assets/svg/brand-instagram.svg'
import TwitterSVG from '@/assets/svg/brand-twitter.svg'
import { MailIcon, InfoIcon, PhoneIcon, PencilIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="tw-bg-secondary tw-min-h-10 tw-mt-16">
    <div class="footer-container tw-pb-52 tw-pt-14">
      <div class="tw-container">
        <LogoGreenTextSVG class="tw-text-9xl !tw-h-auto !tw-mb-10" filled />
        <div class="tw-grid tw-grid-cols-4 tw-max-w-6xl">
          <div>
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-border-r-2 tw-border-white tw-px-3 tw-py-5">
                <MailIcon class="tw-text-primary" />
              </div>
              <div class="tw-text-white tw-ml-3">
                <p class="tw-mb-1 tw-text-sm tw-font-bold">Location</p>
                <p class="tw-mb-0 tw-text-xs">Colombia, Tolima</p>
              </div>
            </div>
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-border-r-2 tw-border-white tw-px-3 tw-py-5">
                <InfoIcon class="tw-text-primary" />
              </div>
              <div class="tw-text-white tw-ml-3">
                <p class="tw-mb-1 tw-text-sm tw-font-bold">Info</p>
                <a href="#" class="tw-mb-2 tw-text-xs tw-font-extralight tw-inline-block">Ayuda y soporte</a>
              </div>
            </div>
            <div class="tw-flex tw-items-center tw-mb-4">
              <div class="tw-border-r-2 tw-border-white tw-px-3 tw-py-5">
                <PhoneIcon class="tw-text-primary" />
              </div>
              <div class="tw-text-white tw-ml-3">
                <p class="tw-mb-1 tw-text-sm tw-font-bold">Teléfono</p>
                <p class="tw-mb-0 tw-text-xs">+57 310 5885854</p>
              </div>
            </div>
          </div>

          <div class="tw-flex tw-items-center tw-mb-4">
            <div
              class="tw-border-r-2 tw-border-input tw-px-3 tw-py-5 tw-h-full"
            >
              <PencilIcon class="tw-text-primary" />
            </div>
            <div class="tw-text-white tw-ml-3 tw-h-full">
              <p class="tw-mb-10 tw-text-sm tw-font-bold">Términos</p>
              <a href="#" class="tw-mb-3 tw-text-xs tw-font-extralight tw-inline-block">Política de Tratamiento de Datos</a>
              <a href="#" class="tw-mb-3 tw-text-xs tw-font-extralight tw-inline-block">Términos del Servicio</a>
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-mb-4">
            <div
              class="tw-border-r-2 tw-border-input tw-px-3 tw-py-5 tw-h-full"
            >
              <CategoriesSVG class="tw-text-primary tw-text-3xl" filled/>
            </div>
            <div class="tw-text-white tw-ml-3 tw-h-full">
              <p class="tw-mb-10 tw-text-sm tw-font-bold">Categorías</p>
              <a href="#" class="tw-mb-3 tw-text-xs tw-font-extralight tw-inline-block">Infraestructura TI y Conectividad</a>
              <a href="#" class="tw-mb-3 tw-text-xs tw-font-extralight tw-inline-block">Transformación Digital y Desarrollo de Software</a>
              <a href="#" class="tw-mb-3 tw-text-xs tw-font-extralight tw-inline-block">Producción de Contenidos y Marketing Digital</a>
              <a href="#" class="tw-mb-3 tw-text-xs tw-font-extralight tw-inline-block">Videojuegos, Realidad Aumentada y Virtual</a>
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-mb-4">
            <div
              class="tw-border-r-2 tw-border-input tw-px-3 tw-py-5 tw-h-full"
            >
              <InfoIcon class="tw-text-primary" />
            </div>
            <div class="tw-text-white tw-ml-3 tw-h-full">
              <p class="tw-mb-10 tw-text-sm tw-font-bold">Acerca del Cluster</p>
              <a href="#" class="tw-mb-7 tw-text-xs tw-font-extralight tw-inline-block">Recursos de ayuda</a>
              <div class="tw-flex tw-justify-between">
                <a href="#" class="tw-inline-block"><InstagramSVG class="tw-text-primary tw-text-4xl" filled/></a>
                <a href="#" class="tw-inline-block"><FacebookSVG class="tw-text-primary tw-text-4xl" filled/></a>
                <a href="#" class="tw-inline-block"><TwitterSVG class="tw-text-primary tw-text-4xl" filled/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-container tw-pb-5 tw-pt-7 footer">
      <div class="tw-grid tw-grid-cols-3 tw-max-w-6xl">
        <div class="">
          <p class="tw-mb-0 tw-text-lg tw-font-bold tw-text-white">1,456,789</p>
            <p class="tw-mb-1 tw-text-sm tw-text-primary">Registered Users</p>
        </div>
        <div class="">
          <p class="tw-mb-0 tw-text-lg tw-font-bold tw-text-white">1,456,789</p>
            <p class="tw-mb-1 tw-text-sm tw-text-primary">Registered Users</p>
        </div>
        <div class="">
            <p class="tw-mb-1 text-muted tw-text-sm tw-font-extralight tw-text-nowrap">Cluster ® is a registered Trademark of Cluster TIC (ABC 123 456 789)
               </p>
            <p class="tw-mb-0 text-muted tw-text-sm tw-font-extralight">Copyright © 2024 Cluster TIC (ABC 123 456 789)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-image: url('@/assets/images/footer-lines.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right;
}
.text-muted{
  color: hsla(240, 6%, 51%, 0.56);
}
.footer{
  position: relative;
  &::before{
    content: '';
    height: 2px;
    left: 10%;
    right: 10%;
  
    @apply tw-absolute tw-top-0 tw-rounded-xl tw-bg-input tw-opacity-75;
    

}
}
</style>
