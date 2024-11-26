<script setup lang="ts">
import LoadingScreen from '~/components/sections/LoadingScreen.vue'

definePageMeta({
  layout: 'default',
})

const refForm: any = ref(null)
const router = useRoute()
const profilesStore = useProfilesStore()
const page = computed(() => profilesStore.pagination.currentPage)
const totalPages = computed(() => profilesStore.pagination.lastPage)
// const perPage = computed(() => projectsStore.pagination.perPage)
let debounceTimeout: any = null

const filters = reactive<{
  minPrice: string
  maxPrice: string
  searchSkills: string
  skills: number[]
}>({
  minPrice: '0',
  maxPrice: '100000000',
  searchSkills: '',
  skills: [],
})

onMounted(() => {
  handleRefreshPage()
})
watch(
  () => router.query,
  (newQuery, oldQuery) => {
    if (oldQuery['search'] !== newQuery['search']) handleRefreshPage()
  },
)

function handleRefreshPage(page = 1) {
  // profilesStore.setFilters({
  //   search: router.query['search'] ? `${router.query['search']}` : '',
  // })
  profilesStore.get(page, 12)
}

function handleSelectUsers(user_id: number) {
  profilesStore.viewDetails(user_id)
}
</script>

<template>
  <SearchProject class="tw-mt-20" />
  <LoadingScreen :loading="profilesStore.loading" />
  <div class="tw-container tw-mt-5 tw-mb-16 tw-relative">
    <section class="">
      <Card class="tw-mb-3 tw-h-full">
        <CardHeader>
          <CardTitle class="tw-font-extrabold">
            Resultados
            {{
              router.query['search']
                ? `que contengan "${router.query['search']}"`
                : ``
            }}
            <span class="tw-font-normal tw-text-base tw-ml-5">
              Página {{ page }} de {{ totalPages }}
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
      <ul class="profile-list">
        <li
          v-for="user in profilesStore.users"
          :key="`user-card=${user.id}`"
          @click="handleSelectUsers(user.id)"
        >
          <CardSmallProfile
            class="tw-h-full"
            :id="user.id"
            :name="user.fullName"
            :img="user?.mediaFiles.profile.path ?? user?.mediumImage"
            :rating="4.5"
            location="xx, zz"
            number-jobs="x"
            price="0"
          >
            <template v-slot:tag>
              <div v-if="user.skills" class="tw-flex tw-mb-3">
                <p>
                  {{
                    user.skills?.length > 0
                      ? user.skills[0].title
                      : 'Sin definir'
                  }}
                </p>
              </div>
            </template>
          </CardSmallProfile>
        </li>
      </ul>
      <div class="tw-flex tw-justify-center tw-mt-10">
        <Paginator
          @on-page-selected="handleRefreshPage"
          :pages="totalPages"
          :btn-per-side="3"
          :current="page"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-list {
  @apply tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4;
  li {
    @apply tw-mb-5 tw-cursor-pointer;
  }
}
.filters-form {
  .filter-money,
  .filter-skills {
    @apply tw-flex tw-border tw-border-input tw-rounded tw-py-1 tw-px-2;
    input {
      @apply tw-flex-1 tw-bg-transparent  tw-outline-none;
    }
  }
  .filter-skills {
    @apply tw-rounded-3xl;
  }
}
</style>
