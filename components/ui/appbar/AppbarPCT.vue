<script setup lang="ts">
import { BriefcaseIcon, CompassIcon } from 'lucide-vue-next'
const { locale } = useI18n()
</script>

<template>
  <div
    class="tw-p-4 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-bg-white tw-z-50"
  >
    <div class="tw-container tw-flex">
      <div class="tw-flex tw-grow-0 tw-items-center tw-basis-auto">
        <img class="tw-h-14 tw-w-14" src="@/assets/svg/logo.svg" alt="Mi SVG" />
        <div class="tw-ml-1">
          <p class="tw-m-0 tw-leading-3">CLÚSTER</p>
          <p class="tw-m-0 tw-leading-3">TECNOLÓGICO</p>
          <p class="tw-m-0 tw-leading-3">DEL TOLIMA</p>
        </div>
      </div>

      <nav class="tw-flex-grow tw-flex tw-items-center tw-justify-end tw-mr-2">
        <ul class="tw-hidden md:tw-flex tw-flex-wrap tw-justify-end">
          <li>
            <Button variant="ghost" class="tw-text-secondary">
              <BriefcaseIcon class="tw-text-primary tw-mr-3" />
              <span class="tw-font-bold tw-capitalize">{{
                $t('appbar.nav.briefcase')
              }}</span>
            </Button>
          </li>
          <li>
            <Button variant="ghost" class="tw-text-secondary">
              <CompassIcon class="tw-text-primary tw-mr-3" />
              <span class="tw-font-bold tw-capitalize">{{
                $t('appbar.nav.explore')
              }}</span>
            </Button>
          </li>
          <li>
            <NuxtLink to="/auth/login">
              <Button variant="ghost" class="tw-text-secondary">
                <span class="tw-font-bold tw-capitalize">{{
                  $t('appbar.nav.login')
                }}</span>
              </Button>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/auth/register">
              <Button variant="ghost" class="tw-text-secondary">
                <span class="tw-font-bold tw-capitalize">{{
                  $t('appbar.nav.register')
                }}</span>
              </Button>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="tw-flex tw-grow-0 tw-basis-auto tw-items-center tw-mr-2">
        <Button>
          <span class="tw-font-bold">{{ $t('appbar.publish_project') }}</span>
        </Button>
      </div>
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
