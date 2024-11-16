<script setup lang="ts"></script>
<template>
  <div class="tw-bg-gray-200">
    <h3
      class="tw-font-extralight tw-text-black tw-text-center tw-text-[30px] tw-py-10"
    >
      De la mano de
      <b class="tw-font-bold">expertos</b>
      en múltiples campos
      <b class="tw-font-bold">creativos</b>
      .
    </h3>
    <div class="tw-gap-4 tw-py-10 lg:tw-px-40 tw-pb-20">
      <Carousel>
        <CarouselPrevious class="lg:tw-left-[-5%]" />
        <CarouselContent>
          <CarouselItem class="lg:!tw-basis-1/3">
            <CardSmallProfile
              id="project.id"
              name="CompanyName"
              username="CompanyName"
              :rating="4.5"
              location="Ibagué, Colombia"
              number-jobs="175"
              price="47"
            />
          </CarouselItem>
          <CarouselItem class="lg:!tw-basis-1/3">
            <CardSmallProfile
              id="project.id"
              name="CompanyName"
              username="CompanyName"
              :rating="4.5"
              location="Ibagué, Colombia"
              number-jobs="175"
              price="47"
            />
          </CarouselItem>
          <CarouselItem class="lg:!tw-basis-1/3">
            <CardSmallProfile
              id="project.id"
              name="CompanyName"
              username="CompanyName"
              :rating="4.5"
              location="Ibagué, Colombia"
              number-jobs="175"
              price="47"
            />
          </CarouselItem>
          <CarouselItem class="lg:!tw-basis-1/3">
            <CardSmallProfile
              id="project.id"
              name="CompanyName"
              username="CompanyName"
              :rating="4.5"
              location="Ibagué, Colombia"
              number-jobs="175"
              price="47"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext class="lg:tw-right-[-5%]" />
      </Carousel>
    </div>
  </div>
</template>
