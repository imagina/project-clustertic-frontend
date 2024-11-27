<script setup lang="ts">
import { FlagIcon } from 'lucide-vue-next'
import { User } from '~/models/UserData'
import type { UserData } from '~/models/interfaces/user'

const profilesStore = useProfilesStore()
const experts = ref<User[]>([])
onMounted(() => {
  apiCluster
    .get('/api/profile/v1/users', {
      take: 6,
      include: 'information.files,skills',
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
  <div class="tw-bg-gray-200">
    <h3
      class="tw-font-extralight tw-text-black tw-text-center tw-text-[30px] tw-py-10"
    >
      De la mano de
      <b class="tw-font-bold">expertos</b>
      en múltiples campos
      <b class="tw-font-bold">creativos.</b>
    </h3>
    <div class="tw-gap-4 tw-py-10 lg:tw-px-40 tw-pb-20">
      <Carousel>
        <CarouselPrevious class="lg:tw-left-[-5%]" />
        <CarouselContent>
          <CarouselItem
            class="lg:!tw-basis-1/3"
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
                :rating="4.5"
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
