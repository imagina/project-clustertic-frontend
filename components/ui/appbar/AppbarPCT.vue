<script setup lang="ts">
import {
  BriefcaseIcon,
  CompassIcon,
  MessageSquareIcon,
  BellIcon,
  LogInIcon,
} from 'lucide-vue-next'
import LogoSVG from '~/assets/svg/logo.svg'
import type { UserData } from '~/models/interfaces/user'
const { locale } = useI18n()

const authStore = useAuthStore()
const user = computed<UserData | null>(() => authStore.user)
</script>

<template>
  <div
    class="tw-p-4 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-bg-white tw-z-50 tw-min-h-20"
  >
    <div class="tw-container tw-flex">
      <div class="tw-grow-0 tw-basis-auto">
        <NuxtLink class="tw-flex tw-items-center" to="/">
          <LogoSVG filled class="tw-text-primary tw-text-5xl" />
          <div class="tw-ml-1">
            <p class="tw-m-0 tw-leading-3 tw-text-xs">CLÚSTER</p>
            <p class="tw-m-0 tw-leading-3 tw-text-xs">TECNOLÓGICO</p>
            <p class="tw-m-0 tw-leading-3 tw-text-xs">DEL TOLIMA</p>
          </div>
        </NuxtLink>
      </div>

      <nav class="tw-flex-grow tw-flex tw-items-center tw-justify-end tw-mr-2">
        <client-only>
          <ul
            class="tw-hidden md:tw-flex tw-flex-wrap"
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
                    {{ $t('appbar.nav.briefcase') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects">
                <Button variant="ghost" type="button" class="tw-text-secondary">
                  <CompassIcon class="tw-text-primary tw-mr-3" />
                  <span class="tw-font-bold tw-capitalize">
                    {{ $t('appbar.nav.explore') }}
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
                    {{ $t('appbar.nav.login') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects/create">
                <Button class="tw-ml-5">
                  <span class="tw-font-bold">
                    {{ $t('appbar.publish_project') }}
                  </span>
                </Button>
              </NuxtLink>
            </li>
            <li v-if="user">
              <Button variant="ghost">
                <MessageSquareIcon :size="20" />
              </Button>
            </li>

            <li v-if="user">
              <Button variant="ghost">
                <BellIcon :size="20" />
              </Button>
            </li>
          </ul>
        </client-only>
      </nav>
      <div class="tw-flex tw-grow-0 tw-basis-auto tw-items-center">
        <select class="tw-bg-transparent tw-border-0 tw-p-2" v-model="locale">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-img {
  @apply tw-inline-block tw-p-1 tw-border tw-border-muted-custom tw-rounded-full tw-h-8 tw-w-8 tw-mr-2;
  & > div {
    @apply tw-rounded-full;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-image: url('@/assets/images/login-bg.png');
    @apply tw-text-primary tw-flex tw-justify-center tw-items-center tw-text-xs;
  }
}
</style>
