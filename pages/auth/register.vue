<script setup lang="ts">
import LogoGreenSVG from '@/assets/svg/logo-green-text.svg'
import { reactive, ref } from 'vue'
import PasswordValidator from '@/utils/validators/passwordValidator'
import { MailIcon, KeySquareIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'dark-bg',
})

const refRegister: any = ref(null)
const isPwd = ref(true)
const store = useAuthStore()

const auth = reactive<{
  firstName: string
  lastName: string
  email: string
  password: string
  passwordAgain: string
  agreement: boolean
}>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordAgain: '',
  agreement: false,
})
const loading = computed(() => store.loading)
async function register() {
  try {
    const validateRegister = await refRegister.value.validate()
    if (!validateRegister) return
    await store.register(auth)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12">
    <div class="tw-mt-12 tw-flex tw-flex-col tw-items-center">
      <NuxtLink to="/">
        <LogoGreenSVG filled class="tw-text-[10rem] !tw-h-auto" />
      </NuxtLink>
      <h1
        class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-text-white tw-mb-4"
      >
        {{ Helper.tLang('auth.register.title') }}
      </h1>
      <div class="tw-w-full tw-flex-1">
        <div class="">
          <q-form @submit.prevent.stop="register" ref="refRegister">
            <div class="tw-flex">
              <div class="tw-basis-1/2 tw-pr-2">
                <InputCPA
                  filled
                  dark
                  rounded
                  class="tw-mb-3"
                  v-model="auth.firstName"
                  :label="Helper.tLang('auth.register.inputs.firstName')"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Name is required.',
                    (val) =>
                      val.length >= 3 ||
                      'Password must be at least 8 characters long',
                  ]"
                />
              </div>
              <div class="tw-basis-1/2 tw-pl-2">
                <InputCPA
                  filled
                  dark
                  rounded
                  class="tw-mb-3"
                  v-model="auth.lastName"
                  :label="Helper.tLang('auth.register.inputs.lastName')"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'last name is required.',
                    (val) =>
                      val.length >= 3 ||
                      'Password must be at least 8 characters long',
                  ]"
                />
              </div>
            </div>
            <InputCPA
              filled
              dark
              rounded
              class="tw-mb-3"
              v-model="auth.email"
              :label="Helper.tLang('auth.register.inputs.email')"
              lazy-rules
              :rules="[
                (val) => !!val || 'Email is required.',
                (val) => /.+@.+\..+/.test(val) || 'Please enter a valid email',
              ]"
            >
              <template v-slot:prepend>
                <MailIcon class="!tw-text-primary" />
              </template>
            </InputCPA>
            <InputCPA
              filled
              dark
              rounded
              class="tw-mb-2"
              v-model="auth.password"
              :label="Helper.tLang('auth.register.inputs.password')"
              lazy-rules
              :rules="PasswordValidator.rules"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:prepend>
                <KeySquareIcon class="!tw-text-primary" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </InputCPA>
            <InputCPA
              filled
              dark
              rounded
              class="tw-mb-2"
              v-model="auth.passwordAgain"
              :label="Helper.tLang('auth.register.inputs.passwordAgain')"
              lazy-rules
              :rules="PasswordValidator.rules"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:prepend>
                <KeySquareIcon class="!tw-text-primary" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </InputCPA>
            <div class="tw-mb-6">
              <label class="tw-flex tw-items-center">
                <Checkbox
                  class="tw-bg-input !tw-border-input"
                  v-model:checked="auth.agreement"
                ></Checkbox>
                <span class="tw-text-white tw-ml-2">
                  
                  <!-- <i18n-t keypath="auth.register.inputs.termsAndCond.content">
                    <template #highlight1>
                      <NuxtLink
                        to="/termsAndConditions"
                        class="tw-text-primary tw-font-bold"
                      >
                        {{ $t('auth.register.inputs.termsAndCond.highlight1') }}
                      </NuxtLink>
                    </template>
                    <template #highlight2>
                      <NuxtLink
                        to="/privacyPolicy"
                        class="tw-text-primary tw-font-bold"
                      >
                        {{ $t('auth.register.inputs.termsAndCond.highlight2') }}
                      </NuxtLink>
                    </template>
                  </i18n-t> -->
                  Acepto el
                  <NuxtLink
                    to="/termsAndConditions"
                    class="tw-text-primary tw-font-bold"
                  >
                    Acuerdo de usuario
                  </NuxtLink>
                  y la
                  <NuxtLink
                    to="/dataProcessingPolicy"
                    class="tw-text-primary tw-font-bold"
                  >
                    Política de privacidad
                  </NuxtLink>
                  .
                </span>
              </label>
            </div>
            <transition name="hero">
              <Button
                :disabled="
                  loading ||
                  !auth.agreement ||
                  auth.password !== auth.passwordAgain
                "
                type="submit"
                class="hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
              >
                <span class="tw-ml-3">
                  {{ Helper.tLang('auth.register.submitBtn') }}
                </span>
              </Button>
            </transition>
          </q-form>
          <p
            class="tw-mt-8 tw-text-sm tw-font-extralight tw-text-white tw-text-center"
          >
            {{ Helper.tLang('auth.register.existAccount.content') }}
            <NuxtLink to="/auth/login" class="tw-text-primary tw-ml-1">
              {{ Helper.tLang('auth.register.existAccount.link') }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  view-transition-name: article-thumb;
}
</style>
