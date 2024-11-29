import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { _ as _sfc_main$3 } from './Checkbox-CeQigKqu.mjs';
import { _ as _sfc_main$2 } from './index-BUfu69CW.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, reactive, computed, unref, mergeProps, withCtx, createVNode, ref, toDisplayString, Transition, createTextVNode, h, openBlock, createElementBlock, createElementVNode } from 'vue';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { N as NuxtIcon } from './nuxt-icon-1v0WEHYY.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { L as LogoGreenTextSVG } from './logo-green-text-CzNxdslO.mjs';
import { MailIcon, KeySquareIcon } from 'lucide-vue-next';
import { Q as QIcon } from '../_/vm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@vueuse/core';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 20 20"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      stroke: "#232323",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15.788 3.108A9 9 0 1 0 19 10h-8"
    }, null, -1)
  ]));
}
const GoogleSVG = { render() {
  return h(NuxtIcon, { icon: { render }, name: "brand-google" });
} };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "google",
  __ssrInlineRender: true,
  emits: ["logged"],
  setup(__props, { emit: __emit }) {
    getCurrentInstance().appContext.config.globalProperties;
    const store = useAuthStore();
    const state = reactive({
      success: true,
      loading: false
    });
    const clientIdGoogle = computed(() => store.getGoogleClientId);
    async function signIn(response) {
      google.accounts.id.prompt();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2;
      if (unref(clientIdGoogle)) {
        _push(ssrRenderComponent(_component_Button, mergeProps({
          onClick: ($event) => signIn(),
          type: "button",
          class: "!tw-rounded-[100%] tw-w-14 tw-h-14 tw-mr-5",
          loading: unref(state).loading
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(GoogleSVG), {
                filled: "",
                class: "tw-text-2xl !tw-h-auto !tw-m-0"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(GoogleSVG), {
                  filled: "",
                  class: "tw-text-2xl !tw-h-auto !tw-m-0"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/socialAuth/google.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const refLogin = ref(null);
    const isPwd = ref(true);
    const store = useAuthStore();
    const auth = reactive({
      username: "",
      password: "",
      remember_me: false
    });
    const loading = computed(() => store.loading);
    async function login2() {
      try {
        const validateLogin = await refLogin.value.validate();
        if (!validateLogin) return;
        await store.login(auth);
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_q_icon = QIcon;
      const _component_Checkbox = _sfc_main$3;
      const _component_SocialAuthGoogle = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12" }, _attrs))} data-v-f2a36287><div class="tw-mt-12 tw-flex tw-flex-col tw-items-center" data-v-f2a36287>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LogoGreenTextSVG), {
              filled: "",
              class: "tw-text-[10rem] !tw-h-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LogoGreenTextSVG), {
                filled: "",
                class: "tw-text-[10rem] !tw-h-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-text-white tw-mb-4" data-v-f2a36287>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.title"))}</h1><p class="tw-text-primary tw-mb-14 tw-text-[20px] tw-font-extralight" data-v-f2a36287>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.subtitle"))}</p><div class="tw-w-full tw-flex-1" data-v-f2a36287><div class="" data-v-f2a36287>`);
      _push(ssrRenderComponent(_component_q_form, {
        onSubmit: login2,
        ref_key: "refLogin",
        ref: refLogin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-3",
              modelValue: auth.username,
              "onUpdate:modelValue": ($event) => auth.username = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.inputs.email"),
              "lazy-rules": "",
              rules: [
                (val) => !!val || "Email is required.",
                (val) => /.+@.+\..+/.test(val) || "Please enter a valid email"
              ]
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MailIcon), { class: "!tw-text-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(MailIcon), { class: "!tw-text-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-2",
              modelValue: auth.password,
              "onUpdate:modelValue": ($event) => auth.password = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.inputs.password"),
              "lazy-rules": "",
              rules: [
                (val) => !!val || "Password is required",
                (val) => val.length >= 8 || "Password must be at least 8 characters long",
                (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
                (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
                (val) => /\d/.test(val) || "Must contain at least one number",
                (val) => /[\W_]/.test(val) || "Must contain at least one special character"
              ],
              type: isPwd.value ? "password" : "text"
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(KeySquareIcon), { class: "!tw-text-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(KeySquareIcon), { class: "!tw-text-primary" })
                  ];
                }
              }),
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_icon, {
                    name: isPwd.value ? "visibility_off" : "visibility",
                    class: "cursor-pointer",
                    onClick: ($event) => isPwd.value = !isPwd.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_icon, {
                      name: isPwd.value ? "visibility_off" : "visibility",
                      class: "cursor-pointer",
                      onClick: ($event) => isPwd.value = !isPwd.value
                    }, null, 8, ["name", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="tw-flex tw-justify-between tw-flex-row tw-mb-6" data-v-f2a36287${_scopeId}><label class="tw-flex tw-items-center" data-v-f2a36287${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkbox, {
              class: "tw-bg-input !tw-border-input",
              checked: auth.remember_me,
              "onUpdate:checked": ($event) => auth.remember_me = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="tw-text-white tw-ml-2" data-v-f2a36287${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.inputs.rememberMe"))}</span></label><a class="tw-text-primary" data-v-f2a36287${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.forgotPassword"))}</a></div><div class="tw-flex tw-justify-center tw-mb-6" data-v-f2a36287${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SocialAuthGoogle, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Button, {
              disabled: unref(loading),
              type: "submit",
              class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="tw-ml-3" data-v-f2a36287${_scopeId2}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.submitBtn"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.submitBtn")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                rounded: "",
                class: "tw-mb-3",
                modelValue: auth.username,
                "onUpdate:modelValue": ($event) => auth.username = $event,
                label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.inputs.email"),
                "lazy-rules": "",
                rules: [
                  (val) => !!val || "Email is required.",
                  (val) => /.+@.+\..+/.test(val) || "Please enter a valid email"
                ]
              }, {
                prepend: withCtx(() => [
                  createVNode(unref(MailIcon), { class: "!tw-text-primary" })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                rounded: "",
                class: "tw-mb-2",
                modelValue: auth.password,
                "onUpdate:modelValue": ($event) => auth.password = $event,
                label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.inputs.password"),
                "lazy-rules": "",
                rules: [
                  (val) => !!val || "Password is required",
                  (val) => val.length >= 8 || "Password must be at least 8 characters long",
                  (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
                  (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
                  (val) => /\d/.test(val) || "Must contain at least one number",
                  (val) => /[\W_]/.test(val) || "Must contain at least one special character"
                ],
                type: isPwd.value ? "password" : "text"
              }, {
                prepend: withCtx(() => [
                  createVNode(unref(KeySquareIcon), { class: "!tw-text-primary" })
                ]),
                append: withCtx(() => [
                  createVNode(_component_q_icon, {
                    name: isPwd.value ? "visibility_off" : "visibility",
                    class: "cursor-pointer",
                    onClick: ($event) => isPwd.value = !isPwd.value
                  }, null, 8, ["name", "onClick"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "label", "rules", "type"]),
              createVNode("div", { class: "tw-flex tw-justify-between tw-flex-row tw-mb-6" }, [
                createVNode("label", { class: "tw-flex tw-items-center" }, [
                  createVNode(_component_Checkbox, {
                    class: "tw-bg-input !tw-border-input",
                    checked: auth.remember_me,
                    "onUpdate:checked": ($event) => auth.remember_me = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("span", { class: "tw-text-white tw-ml-2" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.inputs.rememberMe")), 1)
                ]),
                createVNode("a", { class: "tw-text-primary" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.forgotPassword")), 1)
              ]),
              createVNode("div", { class: "tw-flex tw-justify-center tw-mb-6" }, [
                createVNode(_component_SocialAuthGoogle)
              ]),
              createVNode(Transition, { name: "hero" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    disabled: unref(loading),
                    type: "submit",
                    class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.submitBtn")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="tw-mt-8 tw-text-sm tw-font-extralight tw-text-white tw-text-center" data-v-f2a36287>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.withoutAccount.content"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register",
        class: "tw-text-primary tw-ml-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.withoutAccount.link"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.login.withoutAccount.link")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2a36287"]]);

export { login as default };
//# sourceMappingURL=login-Dh8Gyust.mjs.map
