<script setup lang="ts">
import { reactive, ref } from 'vue'
import PasswordValidator from '@/utils/validators/passwordValidator'
import { MailIcon, KeySquareIcon } from 'lucide-vue-next'

const refRegister: any = ref(null)
const isPwd = ref(true)
const store = useAuthStore()

const auth = reactive<{
  email: string,  
}>({  
  email: '',
})
const loading = computed(() => store.loading)
async function register() {
  try {    
    //const validateRegister = await refRegister.value.validate()
    //if (!validateRegister) return
    //await store.register(auth);
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div
    class="sign-bg tw-min-h-screen tw-bg-secondary tw-text-gray-900 tw-flex tw-justify-center"
  >
    <AppbarSign />
    <div
      class="tw-max-w-screen-xl tw-m-0 sm:tw-m-10 sm:tw-rounded-lg tw-flex tw-justify-center tw-flex-1"
    >
      <div class="lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12">
        <div class="tw-mt-12 tw-flex tw-flex-col tw-items-center">
          <div class="tw-mb-8">
            <img src="@/assets/svg/logo-green-text.svg" alt="" />
          </div>
          <h1
            class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-text-white tw-mb-4"
          >
            {{ $t('auth.register.title') }}
          </h1>
          <div class="tw-w-full tw-flex-1">
            <div class="">
              <q-form @submit.prevent.stop="register" ref="refRegister">
                
                <InputCPA
                  filled
                  dark
                  class="tw-mb-3"
                  v-model="auth.email"
                  :label="$t('auth.register.inputs.email')"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Email is required.',
                    (val) =>
                      /.+@.+\..+/.test(val) || 'Please enter a valid email',
                  ]"
                >
                  <template v-slot:prepend>
                    <MailIcon class="!tw-text-primary" />
                  </template>
                </InputCPA>
                <transition name="hero">
                  <Button
                    :disabled="loading"
                    type="submit"
                    class="hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                  >
                    <span class="tw-ml-3">
                      {{ $t('auth.register.submitBtn') }}
                    </span>
                  </Button>
                </transition>
              </q-form>
              <p
                class="tw-mt-8 tw-text-sm tw-font-extralight tw-text-white tw-text-center"
              >
                {{ $t('auth.register.existAccount.content') }}
                <NuxtLink to="/auth/login" class="tw-text-primary tw-ml-1">
                  {{ $t('auth.register.existAccount.link') }}
                </NuxtLink>
              </p>
            </div>
          </div>
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
