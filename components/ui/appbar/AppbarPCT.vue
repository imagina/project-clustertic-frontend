<script setup lang="ts">
import {
  BriefcaseIcon,
  CompassIcon,
  MessageSquareIcon,
  BellIcon,
} from 'lucide-vue-next'
import LogoSVG from '~/assets/svg/logo.svg'
import { cn } from '~/lib/utils';
import type { UserData } from '~/models/user'
const { locale } = useI18n()

const authStore: any = useAuthStore()
const user = computed<UserData | null>(() => authStore.user)
</script>

<template>
  <div
    class="tw-p-4 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-bg-white tw-z-50 tw-min-h-20"
  >
    <div class="tw-container tw-flex">
      <div class="tw-flex tw-grow-0 tw-items-center tw-basis-auto">
        <LogoSVG filled class="tw-text-primary tw-text-5xl" />
        <div class="tw-ml-1">
          <p class="tw-m-0 tw-leading-3">CLÚSTER</p>
          <p class="tw-m-0 tw-leading-3">TECNOLÓGICO</p>
          <p class="tw-m-0 tw-leading-3">DEL TOLIMA</p>
        </div>
      </div>

      <nav class="tw-flex-grow tw-flex tw-items-center tw-justify-end tw-mr-2">
        <ul class="tw-hidden md:tw-flex tw-flex-wrap" :class="cn(
          !user? ' tw-justify-end': 'tw-flex-row-reverse tw-justify-start'
        )">
          <li>
            <Button variant="ghost" class="tw-text-secondary">
              <span class="tw-font-bold tw-capitalize">
                {{ user?.fullName }}
              </span>
            </Button>
          </li>
          <li>
            <Button variant="ghost" class="tw-text-secondary">
              <BriefcaseIcon class="tw-text-primary tw-mr-3" />
              <span class="tw-font-bold tw-capitalize">
                {{ $t('appbar.nav.briefcase') }}
              </span>
            </Button>
          </li>
          <li>
            <Button variant="ghost" class="tw-text-secondary">
              <CompassIcon class="tw-text-primary tw-mr-3" />
              <span class="tw-font-bold tw-capitalize">
                {{ $t('appbar.nav.explore') }}
              </span>
            </Button>
          </li>
          <li v-if="!user">
            <NuxtLink to="/auth/login">
              <Button variant="ghost" class="tw-text-secondary">
                <span class="tw-font-bold tw-capitalize">
                  {{ $t('appbar.nav.login') }}
                </span>
              </Button>
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/auth/register">
              <Button variant="ghost" class="tw-text-secondary">
                <span class="tw-font-bold tw-capitalize">
                  {{ $t('appbar.nav.register') }}
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
              <MessageSquareIcon :size="20"/>
            </Button>
          </li>

          <li v-if="user">
            <Button variant="ghost">
              <BellIcon  :size="20"/>
            </Button>
          </li>
        </ul>
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

<style scoped></style>
