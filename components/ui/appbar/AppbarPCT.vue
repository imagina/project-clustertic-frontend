<script setup lang="ts">
import {
  BriefcaseIcon,
  CompassIcon,
  MessageSquareIcon,
  InfoIcon,
  BellIcon,
  LogInIcon,
  MenuIcon,
} from 'lucide-vue-next'
import LogoSVG from '~/assets/svg/logo.svg'
import type { UserData } from '~/models/interfaces/user'
// const { locale } = useI18n()

import { watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const authStore = useAuthStore()
const menu = ref<HTMLInputElement | null>(null)
const user = computed<UserData | null>(() => authStore.user)

watch(route, (to, from) => {
  const target = menu.value as HTMLInputElement
  target.classList.remove('!tw-max-h-[48rem]')
})
function handleToggleMenu() {
  const target = menu.value as HTMLInputElement
  target.classList.toggle('!tw-max-h-[48rem]')
}
</script>

<template>
  <div
    ref="menu"
    class="tw-p-4 tw-sticky tw-top-0 tw-right-0 tw-left-0 tw-bg-white tw-z-50 tw-max-h-20 md:tw-max-h-max tw-overflow-hidden tw-transition-all"
  >
    <div class="md:tw-container md:tw-flex">
      <div class="tw-grow-0 tw-basis-auto">
        <div class="tw-flex tw-items-center">
          <NuxtLink to="/">
            <LogoSVG filled class="tw-text-primary tw-text-5xl" />
          </NuxtLink>
          <NuxtLink to="/">
            <div class="tw-ml-1">
              <p class="tw-m-0 tw-leading-3 tw-text-xs">CLÚSTER</p>
              <p class="tw-m-0 tw-leading-3 tw-text-xs">TECNOLÓGICO</p>
              <p class="tw-m-0 tw-leading-3 tw-text-xs">DEL TOLIMA</p>
            </div>
          </NuxtLink>
          <div class="tw-flex-grow"></div>
          <div class="md:tw-hidden">
            <button type="button" @click="handleToggleMenu">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      <nav
        class="tw-flex-grow tw-flex tw-items-center tw-justify-end tw-mr-2 tw-mt-4 md:tw-mt-0"
      >
        <client-only>
          <ul
            class="md:tw-flex tw-flex-wrap tw-w-full"
            :class="
              !authStore.getToken
                ? ' tw-justify-end'
                : 'tw-flex-row-reverse tw-justify-start'
            "
          >
            <li v-if="user">
              <NuxtLink to="/profiles/me">
                <Button variant="ghost" type="button" class="tw-text-secondary">
                  <div class="user-img tw-inline-block">
                    <div>
                      {{
                        user.fullName
                          .split(' ')
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join('')
                      }}
                    </div>
                  </div>
                  <span class="tw-font-bold tw-capitalize">
                    {{ user.fullName }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/categories">
                <Button variant="ghost" type="button" class="tw-text-secondary">
                  <BriefcaseIcon class="tw-text-primary tw-mr-3" />
                  <span class="tw-font-bold tw-capitalize">
                    {{ Helper.tLang('appbar.nav.briefcase') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/info">
                <Button variant="ghost" type="button" class="tw-text-secondary">
                  <InfoIcon class="tw-text-primary tw-mr-3" />
                  <span class="tw-font-bold tw-capitalize">Acerca de</span>
                </Button>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects">
                <Button variant="ghost" type="button" class="tw-text-secondary">
                  <CompassIcon class="tw-text-primary tw-mr-3" />
                  <span class="tw-font-bold tw-capitalize">
                    {{ Helper.tLang('appbar.nav.explore') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li v-if="!user">
              <NuxtLink to="/auth/login">
                <Button variant="ghost" type="button" class="tw-text-secondary">
                  <LogInIcon
                    class="tw-text-primary tw-mr-3"
                    style="transform: rotate(180deg)"
                  />
                  <span class="tw-font-bold tw-capitalize">
                    {{ Helper.tLang('appbar.nav.login') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li class="md:tw-ml-5">
              <NuxtLink to="/projects/create">
                <Button>
                  <span class="tw-font-bold">
                    {{ Helper.tLang('appbar.publish_project') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>

            <!-- <li v-if="user">
              <Button variant="ghost">
                <MessageSquareIcon :size="20" />
              </Button>
            </li>

            <li v-if="user">
              <Button variant="ghost">
                <BellIcon :size="20" />
              </Button>
            </li> -->
          </ul>
        </client-only>
      </nav>
      <div
        class="tw-flex tw-justify-center tw-grow-0 tw-basis-auto tw-items-center"
      >
        <li class="tw-flex tw-items-center md:tw-justify-end tw-pl-2">
          <TraductionSelector />
        </li>
        <!-- <select class="tw-bg-transparent tw-border-0 tw-p-2" v-model="locale">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-img {
  @apply tw-inline-block tw-p-1 tw-border tw-border-muted-custom tw-rounded-full tw-h-8 tw-w-8 tw-mr-2 tw-uppercase;
  & > div {
    @apply tw-rounded-full;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-image: url('@/assets/images/login-bg.png');
    @apply tw-text-primary tw-flex tw-justify-center tw-items-center tw-text-xs;
  }
}
nav {
  & button {
    @apply tw-w-full tw-mb-2 md:tw-mb-0;
  }
}
</style>
