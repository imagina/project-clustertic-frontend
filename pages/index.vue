<script setup lang="ts">

import { ArrowRightIcon } from "lucide-vue-next";
const handleAnimationStart = (self: AnimationEvent) => {
 (<HTMLElement>self.currentTarget)?.classList.remove('tw-opacity-0'); // Añade la clase de Tailwind al finalizar
 (<HTMLElement>self.currentTarget)?.classList.add('tw-opacity-80'); // Añade la clase de Tailwind al finalizar
};

</script>

<template>
  <AppbarPCT></AppbarPCT>
  <div class="tw-h-svh tw-relative">
    <div class="tw-absolute tw-inset-0 tw-z-[-1] tw-bg-primary tw-opacity-10"></div>
    <div class="tw-container tw-flex tw-justify-center tw-items-center tw-h-[100%] tw-pt-24">
      <div class="tw-flex tw-flex-col lg:tw-flex-row">
        <div class="tw-basis-7/12 ">
        <h1 class="tw-text-black tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-10">
          <i18n-t keypath="landing.title.content">
            <template #highlight>
              <b class="tw-font-bold"> {{ $t("landing.title.highlight") }}</b>
            </template>
            <template #br>
              <br/>
            </template>
          </i18n-t>
        </h1>
        <div class="tw-flex  tw-mb-10 lg:tw-mb-0">
          <Button size="lg" class="tw-border tw-border-black tw-border-solid md:tw-text-[20px]">Publicar proyectos</Button>
          <Button variant="ghost" class="tw-ml-5 md:tw-text-[20px]">Buscar Proyectos <ArrowRightIcon class="tw-ml-3"/></Button>
        </div>
      </div>
      <div class="tw-basis-3/12 lg:tw-basis-6/12">
        <div class="tw-relative">
          
        <img
          class=""
          src="@/assets/svg/desk-landing.svg"
          alt="Mi SVG"
        />
        <div class="float-label first add-shadow tw-top-[5px]  tw-opacity-0" @animationstart="handleAnimationStart">
          UI UX
        </div>
        <div class="float-label second tw-top-[35%] md:tw-right-[8%] lg:tw-right-[0%] xl:tw-right-[-4%] tw-opacity-0" @animationstart="handleAnimationStart">
          Marketing
        </div>
        <div class="float-label third tw-top-[56%]  tw-opacity-0" @animationstart="handleAnimationStart">
          Developers
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
.float-label{
  @apply tw-absolute tw-px-10  tw-py-2 tw-text-[25px] tw-rounded-lg tw-bg-white tw-animate-slide-down;
  animation-duration: 1s;
  color: hsla(240, 24%, 31%, 0.56);
  &.add-shadow {
    box-shadow: 30px 45px 50px 0px hsla(157, 47%, 67%, 0.57);
  }
  &.first {
    animation-delay: 500ms;
    transition: all .5s linear;
  }
  &.second {
    animation-delay: 800ms;
    transition: all .5s linear;
  }
  &.third {
    animation-delay: 1.2s;
    transition: all .5s linear;}
}
</style>