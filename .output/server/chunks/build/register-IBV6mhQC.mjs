import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { _ as _sfc_main$1 } from './Checkbox-CeQigKqu.mjs';
import { _ as _sfc_main$2 } from './index-BUfu69CW.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, Transition } from 'vue';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './nuxt-icon-1v0WEHYY.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const _PasswordValidator = class _PasswordValidator2 {
  static is_password_valid(password) {
    const validators = _PasswordValidator2.rules;
    let is_valid = true;
    for (let i = 0; i < validators.length; i++) {
      if (typeof validators[i](password) === "string") {
        is_valid = false;
        break;
      }
    }
    return is_valid;
  }
};
__publicField(_PasswordValidator, "rules", [
  (val) => !!val || "Password is required",
  (val) => val.length >= 8 || "Password must be at least 8 characters long",
  (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
  (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
  (val) => /\d/.test(val) || "Must contain at least one number",
  (val) => /[\W_]/.test(val) || "Must contain at least one special character"
]);
let PasswordValidator = _PasswordValidator;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const refRegister = ref(null);
    const isPwd = ref(true);
    const store = useAuthStore();
    const auth = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordAgain: "",
      agreement: false
    });
    const loading = computed(() => store.loading);
    async function register2() {
      try {
        const validateRegister = await refRegister.value.validate();
        if (!validateRegister) return;
        await store.register(auth);
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_q_icon = QIcon;
      const _component_Checkbox = _sfc_main$1;
      const _component_Button = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12" }, _attrs))} data-v-99e6156d><div class="tw-mt-12 tw-flex tw-flex-col tw-items-center" data-v-99e6156d>`);
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
      _push(`<h1 class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-text-white tw-mb-4" data-v-99e6156d>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.title"))}</h1><div class="tw-w-full tw-flex-1" data-v-99e6156d><div class="" data-v-99e6156d>`);
      _push(ssrRenderComponent(_component_q_form, {
        onSubmit: register2,
        ref_key: "refRegister",
        ref: refRegister
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-flex" data-v-99e6156d${_scopeId}><div class="tw-basis-1/2 tw-pr-2" data-v-99e6156d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-3",
              modelValue: auth.firstName,
              "onUpdate:modelValue": ($event) => auth.firstName = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.firstName"),
              "lazy-rules": "",
              rules: [
                (val) => !!val || "Name is required.",
                (val) => val.length >= 3 || "Password must be at least 8 characters long"
              ]
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="tw-basis-1/2 tw-pl-2" data-v-99e6156d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-3",
              modelValue: auth.lastName,
              "onUpdate:modelValue": ($event) => auth.lastName = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.lastName"),
              "lazy-rules": "",
              rules: [
                (val) => !!val || "last name is required.",
                (val) => val.length >= 3 || "Password must be at least 8 characters long"
              ]
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-3",
              modelValue: auth.email,
              "onUpdate:modelValue": ($event) => auth.email = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.email"),
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
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.password"),
              "lazy-rules": "",
              rules: unref(PasswordValidator).rules,
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
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-2",
              modelValue: auth.passwordAgain,
              "onUpdate:modelValue": ($event) => auth.passwordAgain = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.passwordAgain"),
              "lazy-rules": "",
              rules: unref(PasswordValidator).rules,
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
            _push2(`<div class="tw-mb-6" data-v-99e6156d${_scopeId}><label class="tw-flex tw-items-center" data-v-99e6156d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkbox, {
              class: "tw-bg-input !tw-border-input",
              checked: auth.agreement,
              "onUpdate:checked": ($event) => auth.agreement = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="tw-text-white tw-ml-2" data-v-99e6156d${_scopeId}> Acepto el `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/termsAndConditions",
              class: "tw-text-primary tw-font-bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Acuerdo de usuario `);
                } else {
                  return [
                    createTextVNode(" Acuerdo de usuario ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` y la `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/privacyPolicy",
              class: "tw-text-primary tw-font-bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Pol\xEDtica de privacidad `);
                } else {
                  return [
                    createTextVNode(" Pol\xEDtica de privacidad ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` . </span></label></div>`);
            _push2(ssrRenderComponent(_component_Button, {
              disabled: unref(loading) || !auth.agreement || auth.password !== auth.passwordAgain,
              type: "submit",
              class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="tw-ml-3" data-v-99e6156d${_scopeId2}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.submitBtn"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.submitBtn")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "tw-flex" }, [
                createVNode("div", { class: "tw-basis-1/2 tw-pr-2" }, [
                  createVNode(_component_InputCPA, {
                    filled: "",
                    dark: "",
                    rounded: "",
                    class: "tw-mb-3",
                    modelValue: auth.firstName,
                    "onUpdate:modelValue": ($event) => auth.firstName = $event,
                    label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.firstName"),
                    "lazy-rules": "",
                    rules: [
                      (val) => !!val || "Name is required.",
                      (val) => val.length >= 3 || "Password must be at least 8 characters long"
                    ]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                ]),
                createVNode("div", { class: "tw-basis-1/2 tw-pl-2" }, [
                  createVNode(_component_InputCPA, {
                    filled: "",
                    dark: "",
                    rounded: "",
                    class: "tw-mb-3",
                    modelValue: auth.lastName,
                    "onUpdate:modelValue": ($event) => auth.lastName = $event,
                    label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.lastName"),
                    "lazy-rules": "",
                    rules: [
                      (val) => !!val || "last name is required.",
                      (val) => val.length >= 3 || "Password must be at least 8 characters long"
                    ]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"])
                ])
              ]),
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                rounded: "",
                class: "tw-mb-3",
                modelValue: auth.email,
                "onUpdate:modelValue": ($event) => auth.email = $event,
                label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.email"),
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
                label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.password"),
                "lazy-rules": "",
                rules: unref(PasswordValidator).rules,
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
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                rounded: "",
                class: "tw-mb-2",
                modelValue: auth.passwordAgain,
                "onUpdate:modelValue": ($event) => auth.passwordAgain = $event,
                label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.inputs.passwordAgain"),
                "lazy-rules": "",
                rules: unref(PasswordValidator).rules,
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
              createVNode("div", { class: "tw-mb-6" }, [
                createVNode("label", { class: "tw-flex tw-items-center" }, [
                  createVNode(_component_Checkbox, {
                    class: "tw-bg-input !tw-border-input",
                    checked: auth.agreement,
                    "onUpdate:checked": ($event) => auth.agreement = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("span", { class: "tw-text-white tw-ml-2" }, [
                    createTextVNode(" Acepto el "),
                    createVNode(_component_NuxtLink, {
                      to: "/termsAndConditions",
                      class: "tw-text-primary tw-font-bold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Acuerdo de usuario ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" y la "),
                    createVNode(_component_NuxtLink, {
                      to: "/privacyPolicy",
                      class: "tw-text-primary tw-font-bold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Pol\xEDtica de privacidad ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" . ")
                  ])
                ])
              ]),
              createVNode(Transition, { name: "hero" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    disabled: unref(loading) || !auth.agreement || auth.password !== auth.passwordAgain,
                    type: "submit",
                    class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.submitBtn")), 1)
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
      _push(`<p class="tw-mt-8 tw-text-sm tw-font-extralight tw-text-white tw-text-center" data-v-99e6156d>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.existAccount.content"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "tw-text-primary tw-ml-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.existAccount.link"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.existAccount.link")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-99e6156d"]]);

export { register as default };
//# sourceMappingURL=register-IBV6mhQC.mjs.map
