<script setup lang="ts">
import { reactive, ref } from 'vue'
import { MailIcon, KeySquareIcon } from 'lucide-vue-next'

definePageMeta({
  middleware: 'auth',
})

const refReset: any = ref(null)
const isPwd = ref(true)
const store = useAuthStore()
const route = useRoute()

const auth = reactive<{
  password: string
  newPassword: string
  newPasswordConfirmation: string
}>({
  password: '',
  newPassword: '',
  newPasswordConfirmation: '',
})

const loading = computed(() => store.loading)
const isEmpty = computed(
  () =>
    auth.password == '' ||
    auth.newPassword == '' ||
    auth.newPasswordConfirmation == '',
)
const isDiferent = computed(
  () => auth.newPassword != auth.newPasswordConfirmation,
)

async function reset() {
  try {
    const validateReset = await refReset.value.validate()
    if (!validateReset) return
    store.changePassword(auth)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="tw-min-h-screen tw-flex tw-justify-center">
    <div
      class="tw-max-w-screen-xl tw-m-0 sm:tw-m-10 sm:tw-rounded-lg tw-flex tw-justify-center tw-flex-1"
    >
      <div class="lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12">
        <div class="tw-mt-12 tw-flex tw-flex-col tw-items-center">
          <h1
            class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-mb-4"
          >
            Change Password
          </h1>
          <div class="tw-w-full tw-flex-1">
            <div class="">
              <q-form @submit.prevent.stop="reset" ref="refReset">
                <InputCPA
                  filled
                  dark
                  class="tw-mb-2"
                  v-model="auth.password"
                  label="Current password"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Password is required',
                    (val) =>
                      val.length >= 8 ||
                      'Password must be at least 8 characters long',
                    (val) =>
                      /[A-Z]/.test(val) ||
                      'Must contain at least one uppercase letter',
                    (val) =>
                      /[a-z]/.test(val) ||
                      'Must contain at least one lowercase letter',
                    (val) =>
                      /\d/.test(val) || 'Must contain at least one number',
                    (val) =>
                      /[\W_]/.test(val) ||
                      'Must contain at least one special character',
                  ]"
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
                  class="tw-mb-2"
                  v-model="auth.newPassword"
                  label="New password"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Password is required',
                    (val) =>
                      val.length >= 8 ||
                      'Password must be at least 8 characters long',
                    (val) =>
                      /[A-Z]/.test(val) ||
                      'Must contain at least one uppercase letter',
                    (val) =>
                      /[a-z]/.test(val) ||
                      'Must contain at least one lowercase letter',
                    (val) =>
                      /\d/.test(val) || 'Must contain at least one number',
                    (val) =>
                      /[\W_]/.test(val) ||
                      'Must contain at least one special character',
                  ]"
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
                  class="tw-mb-2"
                  v-model="auth.newPasswordConfirmation"
                  label="Confirm new password"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Password is required',
                    (val) =>
                      val.length >= 8 ||
                      'Password must be at least 8 characters long',
                    (val) =>
                      /[A-Z]/.test(val) ||
                      'Must contain at least one uppercase letter',
                    (val) =>
                      /[a-z]/.test(val) ||
                      'Must contain at least one lowercase letter',
                    (val) =>
                      /\d/.test(val) || 'Must contain at least one number',
                    (val) =>
                      /[\W_]/.test(val) ||
                      'Must contain at least one special character',
                    (val) =>
                      val == auth.newPassword || 'Password does not match',
                  ]"
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
                <transition name="hero">
                  <Button
                    :disabled="isEmpty || isDiferent"
                    type="submit"
                    class="hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                  >
                    <span class="tw-ml-3">Change password</span>
                  </Button>
                </transition>
              </q-form>
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
