<script setup lang="ts">
import { FlagIcon } from 'lucide-vue-next'
import ArrowSVG from '@/assets/svg/arrow.svg'
import type { Testimonial } from '~/models/interfaces/testimonial'

const testimonials = ref<Testimonial[]>([])
onMounted(() => {
  apiCluster
    .get('/api/iblog/v1/posts', {
      filter: '{"categoryId":2}',
    })
    .then((response: any) => {
      testimonials.value = <Testimonial[]>response.data
    })
})
function handleSelect(user_id: number) {}
</script>
<template>
  <div class="carousel-users-container">
    <h3
      class="tw-font-light tw-text-black tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-[30px] tw-py-4 md:tw-py-8 !tw-pt-16"
    >
      <b class="tw-font-bold">Testimonios</b>
    </h3>
    <div class="tw-flex tw-justify-center tw-w-full">
      <ArrowSVG
        filled
        class="tw-text-3xl tw-text-black"
        style="transform: rotate(-90deg)"
      />
    </div>
    <div class="tw-gap-4 tw-py-10 lg:tw-px-40 tw-pb-20">
      <Carousel>
        <CarouselPrevious class="lg:tw-left-[-5%]" />
        <CarouselContent>
          <CarouselItem
            class="xl:!tw-basis-1/2"
            v-for="testimonial in testimonials"
            :key="`testimonial-card=${testimonial.id}`"
          >
            <div @click="handleSelect(testimonial.id)">
              <CardTestimonial
                class="tw-h-full"
                :id="testimonial.id"
                :name="testimonial.summary"
                :username="''"
                :date="
                  Helper.parseDateToString(
                    Helper.parseStringToDate(testimonial.createdAt),
                    'DD/MM/YYYY',
                  )
                "
                :img="testimonial?.mainImage.path"
              >
                <template v-slot:tag>
                  <div class="tw-flex tw-justify-center tw-mb-3">
                    <FlagIcon class="flag-icon tw-mr-2" :size="20" />
                    <p>Tolima, Colombia</p>
                  </div>
                </template>
                <template v-slot:description>
                  <div v-html="testimonial.description"></div>
                </template>
              </CardTestimonial>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext class="lg:tw-right-[-5%]" />
      </Carousel>
    </div>
  </div>
</template>

<style lang="css" scoped>
.carousel-users-container {
  background-color: hsla(157, 80%, 52%, 1);
  background-position: center;
  background-image: url('@/assets/svg/testimonial-bg.svg');
  background-size: cover;
}
</style>
