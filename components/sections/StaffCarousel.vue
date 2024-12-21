<script setup lang="ts">
import CardGrandStaff from '~/components/ui/card/layouts/CardGrandStaff.vue'
import ArrowSVG from '@/assets/svg/arrow.svg'
import type { Testimonial } from '~/models/interfaces/testimonial'

const profilesStore = useProfilesStore()
const staff = ref<Testimonial[]>([])
const special_staff = ref<Testimonial[]>([])
const roles_special = ['gerente']
onMounted(() => {
  apiCluster
    .get('/api/iblog/v1/posts', {
      filter: '{"categoryId":1}',
    })
    .then((response: any) => {
      staff.value = <Testimonial[]>(
        response.data.filter(
          (user: Testimonial) =>
            !roles_special.includes(`${user.options.profession}`.toLowerCase()),
        )
      )
      special_staff.value = <Testimonial[]>(
        response.data.filter((user: Testimonial) =>
          roles_special.includes(`${user.options.profession}`.toLowerCase()),
        )
      )
    })
})
function handleSelectUsers(user_id: number) {
  profilesStore.viewDetails(user_id)
}
</script>
<template>
  <div class="carousel-users-container">
    <h3
      class="tw-font-light tw-text-black tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-[30px] tw-py-5 md:tw-py-8 !tw-pt-16"
    >
      <b class="tw-font-bold">Nuestro equipo</b>
    </h3>
    <div class="tw-flex tw-justify-center tw-w-full">
      <ArrowSVG
        filled
        class="tw-text-3xl tw-text-black"
        style="transform: rotate(-90deg)"
      />
    </div>
    <div class="tw-py-10 lg:tw-px-40 tw-pb-20">
      <Carousel class="lg:!tw-px-14">
        <CarouselPrevious class="lg:tw-left-[-5%]" />
        <CarouselContent class="md:tw-gap-6 lg:!tw-mr-16">
          <CarouselItem
            class="!tw-basis-full md:!tw-basis-1/2 xl:!tw-basis-1/4"
            v-for="user in staff"
            :key="`user-card=${user.id}`"
          >
            <div @click="handleSelectUsers(user.id)">
              <CardStaff
                class="tw-h-full"
                :id="user.id"
                :img="user?.mainImage.path"
                :role="user.options.profession"
              >
                <template v-slot:name>
                  <div v-html="user.description"></div>
                </template>
              </CardStaff>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext class="lg:tw-right-[-5%]" />
      </Carousel>
    </div>
  </div>

  <div class="tw-container lg:tw-grid tw-grid-cols-2 tw-gap-10 !tw-px-16">
    <div
      class="tw-mb-4"
      v-for="user in special_staff"
      :key="`special-staff-card=${user.id}`"
      @click="handleSelectUsers(user.id)"
    >
      <CardGrandStaff
        class="tw-h-full"
        :id="user.id"
        :img="user?.mainImage.path"
        :name="'example'"
        :role="user.options.profession"
      >
        <template v-slot:name>
          <div v-html="user.description"></div>
        </template>
      </CardGrandStaff>
    </div>
  </div>
</template>

<style lang="css" scoped>
.carousel-users-container {
  background-color: white;
}
</style>
