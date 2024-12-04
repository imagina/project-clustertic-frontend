<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { XIcon } from 'lucide-vue-next'
import type { QDialogProps } from 'quasar'
import FacebookSVG from '@/assets/svg/brand/facebook.svg'
import LinkedinSVG from '@/assets/svg/brand/linkedin.svg'
import InstagramSVG from '@/assets/svg/brand/instagram.svg'
import YouTubeSVG from '@/assets/svg/brand/youTube.svg'
import TwitterSVG from '@/assets/svg/brand/twitter.svg'
import TikTokSVG from '@/assets/svg/brand/tikTok.svg'

let debounceTimeout: any = null
const props = defineProps<QDialogProps>()
const authStore = useAuthStore()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.modelValue,
})

const newData = reactive<{
  companyName: string
  firstName: string
  lastName: string
  description: string
  facebook: string
  web: string
  twitter: string
  linkedin: string
  instagram: string
  tikTok: string
  youTube: string
  place: string
  phone: string
  email: string
}>({
  companyName: '',
  firstName: '',
  lastName: '',
  description: '',
  web: '',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://x.com/',
  linkedin: 'https://www.linkedin.com/',
  instagram: 'https://www.instagram.com/',
  tikTok: 'https://www.tiktok.com/',
  youTube: 'https://www.youtube.com/',
  place: '',
  phone: '',
  email: '',
})

watch(
  () => authStore.user,
  (newQuery, oldQuery) => {
    loadUser()
  },
)

function loadUser() {
  const fullUser = authStore.fullUser
  if (!fullUser) return
  newData.firstName = fullUser.firstName
  newData.lastName = fullUser.lastName
  newData.companyName = fullUser.extraFields.companyName?.value ?? ''
  newData.place = fullUser.extraFields.place?.value ?? ''
  newData.phone = fullUser.extraFields.phone?.value ?? ''
  newData.description = fullUser.extraFields.description?.value ?? ''
  newData.web = fullUser.socialMedia.web ?? ''
  newData.facebook = fullUser.socialMedia.facebook
    ? fullUser.socialMedia.facebook
    : 'https://www.facebook.com/'
  newData.twitter = fullUser.socialMedia.twitter
    ? fullUser.socialMedia.twitter
    : 'https://x.com/'
  newData.linkedin = fullUser.socialMedia.linkedin
    ? fullUser.socialMedia.linkedin
    : 'https://www.linkedin.com/'
  newData.instagram = fullUser.socialMedia.instagram
    ? fullUser.socialMedia.instagram
    : 'https://www.instagram.com/'
  newData.tikTok = fullUser.socialMedia.tikTok
    ? fullUser.socialMedia.tikTok
    : 'https://www.tiktok.com/'
  newData.youTube = fullUser.socialMedia.youTube
    ? fullUser.socialMedia.youTube
    : 'https://www.youtube.com/'
  newData.email = fullUser.email ?? ''
}

function handleSaveInfo() {
  const socialMedia = {
    facebook: newData.facebook,
    twitter: newData.twitter,
    linkedin: newData.linkedin,
    instagram: newData.instagram,
    tikTok: newData.tikTok,
    youTube: newData.youTube,
    web: newData.web,
  }

  authStore.editProfileInfo({
    'attributes[first_name]': newData.firstName,
    'attributes[last_name]': newData.lastName,
    'attributes[email]': newData.email,
    'attributes[fields]': [
      {
        name: 'description',
        value: newData.description,
      },
      {
        name: 'socialNetworks',
        value: JSON.stringify(socialMedia),
      },
      {
        name: 'place',
        value: newData.place,
      },
      {
        name: 'phone',
        value: newData.phone,
      },
      {
        name: 'companyName',
        value: newData.companyName,
      },
    ],
  })
}
function handleClose() {
  emits('update:modelValue', false)
  loadUser()
}
</script>

<template>
  <q-dialog v-model="modelValue">
    <q-card
      class="card-edit tw-w-full !tw-max-w-[48rem] tw-relative !tw-rounded-lg"
    >
      <q-card-section class="tw-sticky tw-z-40 tw-top-0">
        <div class="tw-text-lg tw-font-semibold tw-text-white">
          Editar Perfil
        </div>
        <p class="tw-text-sm tw-font-normal tw-text-white">
          Información básica
        </p>
        <q-separator />
      </q-card-section>
      <q-card-section class="q-pt-2">
        <div class="tw-grid tw-grid-cols-2 tw-gap-2">
          <div class="input-container">
            <label
              class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
            >
              Nombre
            </label>
            <InputCPA
              outlined
              dark
              size="sm"
              class="input-custom-outline search-input-border"
              v-model="newData.firstName"
            ></InputCPA>
          </div>

          <div class="input-container">
            <label
              class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
            >
              Apellido
            </label>
            <InputCPA
              outlined
              dark
              size="sm"
              class="input-custom-outline search-input-border"
              v-model="newData.lastName"
            ></InputCPA>
          </div>
        </div>
        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Nombre de la empresa
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            class="input-custom-outline search-input-border"
            v-model="newData.companyName"
          ></InputCPA>
        </div>

        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Descripción
          </label>
          <Textarea
            v-model="newData.description"
            class="!tw-border-muted-custom tw-text-white tw-mb-4"
          ></Textarea>
        </div>

        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Sitio Web
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            type="url"
            class="input-custom-outline search-input-border"
            v-model="newData.web"
          ></InputCPA>
        </div>
        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Ubicación
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            class="input-custom-outline search-input-border"
            v-model="newData.place"
          ></InputCPA>
        </div>

        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Email
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            type="url"
            class="input-custom-outline search-input-border"
            v-model="newData.email"
          ></InputCPA>
        </div>
        <div class="input-container">
          <label
            class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
          >
            Número de teléfono
          </label>
          <InputCPA
            outlined
            dark
            size="sm"
            class="input-custom-outline search-input-border"
            v-model="newData.phone"
            type="tel"
          ></InputCPA>
        </div>

        <label
          class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4"
        >
          Conexiones
        </label>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            type="url"
            v-model="newData.facebook"
            label="Facebook"
          >
            <template v-slot:prepend>
              <FacebookSVG filled class="tw-text-2xl tw-text-primary !tw-m-0" />
            </template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            type="url"
            v-model="newData.twitter"
            label="X"
          >
            <template v-slot:prepend>
              <TwitterSVG filled class="tw-text-2xl tw-text-primary !tw-m-0" />
            </template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            type="url"
            v-model="newData.linkedin"
            label="Linkedin"
          >
            <template v-slot:prepend>
              <LinkedinSVG filled class="tw-text-2xl tw-text-primary !tw-m-0" />
            </template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            type="url"
            v-model="newData.instagram"
            label="Instagram"
          >
            <template v-slot:prepend>
              <InstagramSVG
                filled
                class="tw-text-2xl tw-text-primary !tw-m-0"
              />
            </template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            type="url"
            v-model="newData.tikTok"
            label="TikTok"
          >
            <template v-slot:prepend>
              <TikTokSVG filled class="tw-text-2xl tw-text-primary !tw-m-0" />
            </template>
          </InputCPA>
          <InputCPA
            outlined
            dark
            class="input-custom-outline tw-mb-3 search-input-border"
            type="url"
            v-model="newData.youTube"
            label="YouTube"
          >
            <template v-slot:prepend>
              <YouTubeSVG filled class="tw-text-2xl tw-text-primary !tw-m-0" />
            </template>
          </InputCPA>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions class="tw-sticky tw-z-40 tw-bottom-0" align="right">
        <q-btn
          flat
          label="Cancelar"
          color="primary"
          class="!tw-text-primary"
          @click="handleClose"
        />
        <!-- v-close-popup -->
        <Button @click="handleSaveInfo" class="tw-ml-5 tw-font-semibold">
          Guardar
        </Button>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="css" scoped>
.card-edit,
.card-edit > div {
  background-color: hsla(240, 23%, 17%, 1);
}

:deep(.q-field__control) {
  @apply !tw-border-muted-custom !tw-border;
}

.option-skill-list {
  @apply tw-absolute tw-top-full tw-left-0 tw-right-0 tw-bg-white tw-rounded-b-2xl tw-rounded-t-sm tw-z-50;
  ul {
    @apply tw-max-h-0  tw-overflow-y-scroll;
    transition: max-height 1s;
    li {
      @apply tw-p-2 tw-rounded-xl tw-mb-1 tw-cursor-pointer;
      transition: background 0.3s;
      &:hover {
        @apply tw-bg-input tw-text-primary;
      }
    }
  }
}

.skills-input {
  @apply tw-bg-input tw-w-full tw-text-white tw-border-none tw-py-4 tw-px-2 tw-rounded-2xl;
  &:focus {
    @apply tw-border-none tw-outline-none;
  }
}
.skills-input:focus ~ .option-skill-list {
  @apply tw-pb-1;
}
.skills-input:focus ~ .option-skill-list ul {
  @apply tw-max-h-40;
}
</style>
