<script setup lang="ts">
import { FlagIcon } from 'lucide-vue-next'
import ArrowSVG from '@/assets/svg/arrow.svg'
import { User } from '~/models/UserData'
import type { UserData } from '~/models/interfaces/user'

const profilesStore = useProfilesStore()

const props = defineProps<{
  title?: string
}>()
const experts = ref<User[]>([])
onMounted(() => {
  apiCluster
    .get('/api/profile/v1/users', {
      take: 6,
      include: 'information.files,skills',
      filter: '{"order":{"field":"created_at","way":"desc"},"roleId": 2}',
    })
    .then((response: any) => {
      experts.value = (<UserData[]>response.data).map((user) => new User(user))
    })
})
function handleSelectUsers(user_id: number) {
  profilesStore.viewDetails(user_id)
}
</script>
<template>
  <div class="carousel-users-container">
    <h3
      v-if="!title"
      class="tw-font-light tw-text-black tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-[30px] tw-py-4 md:tw-py-8 !tw-pt-16"
    >
      De la mano de
      <b class="tw-font-bold">expertos</b>
      en múltiples campos
      <b class="tw-font-bold">creativos.</b>
    </h3>
    <h3
      v-if="props.title"
      class="tw-font-light tw-text-black tw-text-center tw-text-2xl sm:tw-text-3xl md:tw-text-[30px] tw-py-4 md:tw-py-8 !tw-pt-16"
    >
      <b class="tw-font-bold">{{ props.title }}</b>
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
        <CarouselPrevious class="tw-left-0 lg:tw-left-[-5%]" />
        <CarouselContent>
          <CarouselItem
            class="xl:!tw-basis-1/3"
            v-for="user in experts"
            :key="`user-card=${user.id}`"
          >
            <div @click="handleSelectUsers(user.id)">
              <CardSmallProfile
                class="tw-h-full"
                :id="user.id"
                :name="user.extraFields.companyName?.value ?? user.fullName"
                :username="user.socialMedia['web'] ?? user.fullName"
                :img="user?.mediaFiles.profile.path ?? user?.mediumImage"
                location="xx, zz"
              >
                <template v-slot:tag>
                  <div class="tw-flex tw-mb-3">
                    <FlagIcon class="flag-icon tw-mr-2" :size="20" />
                    <p>
                      {{ user.extraFields.place?.value ?? 'Tolima, Colombia' }}
                    </p>
                  </div>
                </template>
              </CardSmallProfile>
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
  background-position: center;
  background-image: url('@/assets/images/nevado-tolima.jpg');
}
</style>
