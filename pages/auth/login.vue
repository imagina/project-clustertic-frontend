<script setup lang="ts">
import { reactive, ref } from "vue";
import { MailIcon, KeySquareIcon, } from "lucide-vue-next";

const refLogin: any = ref(null);
const isPwd = ref(true);
const store = useAuthStore();
definePageMeta({
  middleware: "auth",
});
const auth = reactive<{
  username: string;
  password: string;
  remember_me: boolean;
}>({
  username: "",
  password: "",
  remember_me: false,
});
const loading = computed(() => store.loading);
async function login() {
  try {
    const validateLogin = await refLogin.value.validate();
    if (!validateLogin) return;
    await store.login(auth);
  } catch (erro) {
    console.log(erro);
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
            {{$t("auth.login.title")}}
          </h1>
          <p class="tw-text-primary tw-mb-14 tw-text-[20px] tw-font-extralight">{{$t("auth.login.subtitle")}}</p>
          <div class="tw-w-full tw-flex-1">
            <div class="">
              <q-form @submit.prevent.stop="login" ref="refLogin">
                <InputCPA
                  filled
                  class="input-dark tw-mb-3"
                  v-model="auth.username"
                  :label="$t('auth.login.inputs.email')"
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
                <InputCPA
                  filled
                  class="input-dark tw-mb-2"
                  v-model="auth.password"
                  :label="$t('auth.login.inputs.password')"
                  lazy-rules
                  :rules="[
                      val => !!val || 'Password is required',
                      val => val.length >= 8 || 'Password must be at least 8 characters long',
                      val => /[A-Z]/.test(val) || 'Must contain at least one uppercase letter',
                      val => /[a-z]/.test(val) || 'Must contain at least one lowercase letter',
                      val => /\d/.test(val) || 'Must contain at least one number',
                      val => /[\W_]/.test(val) || 'Must contain at least one special character'
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
                <div class="tw-flex tw-justify-between tw-flex-row tw-mb-6">
                    <label class="tw-flex tw-items-center">
                      <Checkbox
                        class="tw-bg-input !tw-border-input"
                        v-model:checked="auth.remember_me"
                      ></Checkbox>
                      <span class="tw-text-white tw-ml-2"
                        >{{$t('auth.login.inputs.rememberMe')}}</span
                      >
                    </label>
                    <a class="tw-text-primary">{{$t('auth.login.forgotPassword')}}</a>

                </div>
                <div class="tw-flex tw-justify-center tw-mb-6"> 
                  <Button class="!tw-rounded-[100%] tw-w-14 tw-h-14 tw-mr-5">
                    <img src="@/assets/svg/brand-google.svg" alt="" />
                  </Button>
                  <Button class="!tw-rounded-[100%] tw-w-14 tw-h-14"><img src="@/assets/svg/brand-facebook.svg" alt="" /></Button>
                </div>
                <transition name="hero">
                  <Button
                    :disabled="loading"
                    type="submit"
                    class="hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                    >
                    <span class="tw-ml-3"> {{$t('auth.login.submitBtn')}} </span>
                  </Button>
                </transition>
              </q-form>
              <p class="tw-mt-8 tw-text-sm tw-font-extralight tw-text-white tw-text-center">
                {{$t('auth.login.withoutAccount.content')}}
                <NuxtLink
                  to="/auth/register"
                  class=" tw-text-primary tw-ml-1"
                >
                {{$t('auth.login.withoutAccount.link')}}
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
  transition: all 1s ease;
  view-transition-name: article-thumb;
}

.hero-enter-active,
.hero-leave-active {
  transition: all 1s ease;
}

.hero-enter,
.hero-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>
