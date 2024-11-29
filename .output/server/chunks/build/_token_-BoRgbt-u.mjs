import { _ as _sfc_main$1 } from './AppbarSign-DIdsBOQw.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { _ as _sfc_main$2 } from './index-BUfu69CW.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { u as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, Transition, createTextVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { L as LogoGreenTextSVG } from './logo-green-text-CzNxdslO.mjs';
import { KeySquareIcon } from 'lucide-vue-next';
import { Q as QIcon } from '../_/vm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import './nuxt-icon-1v0WEHYY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[token]",
  __ssrInlineRender: true,
  setup(__props) {
    const refReset = ref(null);
    const isPwd = ref(true);
    const store = useAuthStore();
    const route = useRoute();
    const auth = reactive({
      password: "",
      confirmPassword: ""
    });
    computed(() => store.loading);
    const isEmpty = computed(
      () => auth.password == "" || auth.confirmPassword == ""
    );
    const isDiferent = computed(() => auth.password != auth.confirmPassword);
    async function reset() {
      try {
        const validateReset = await refReset.value.validate();
        if (!validateReset) return;
        if (route == null ? void 0 : route.params) {
          const formData = {
            password: auth.password,
            passwordConfirmation: auth.confirmPassword,
            userId: route.params.id,
            token: route.params.token
          };
          store.changedPasswordRequest(formData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppbarSign = _sfc_main$1;
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_q_icon = QIcon;
      const _component_Button = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sign-bg tw-min-h-screen tw-bg-secondary tw-text-gray-900 tw-flex tw-justify-center" }, _attrs))} data-v-0c37b27a>`);
      _push(ssrRenderComponent(_component_AppbarSign, null, null, _parent));
      _push(`<div class="tw-max-w-screen-xl tw-m-0 sm:tw-m-10 sm:tw-rounded-lg tw-flex tw-justify-center tw-flex-1" data-v-0c37b27a><div class="lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12" data-v-0c37b27a><div class="tw-mt-12 tw-flex tw-flex-col tw-items-center" data-v-0c37b27a><div class="tw-mb-8" data-v-0c37b27a><img${ssrRenderAttr("src", LogoGreenTextSVG)} alt="" data-v-0c37b27a></div><h1 class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-text-white tw-mb-4" data-v-0c37b27a>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.reset.title"))}</h1><div class="tw-w-full tw-flex-1" data-v-0c37b27a><div class="" data-v-0c37b27a>`);
      _push(ssrRenderComponent(_component_q_form, {
        onSubmit: reset,
        ref_key: "refReset",
        ref: refReset
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
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
            _push2(ssrRenderComponent(_component_InputCPA, {
              filled: "",
              dark: "",
              class: "tw-mb-2",
              modelValue: auth.confirmPassword,
              "onUpdate:modelValue": ($event) => auth.confirmPassword = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.reset.confirmPassword"),
              "lazy-rules": "",
              rules: [
                (val) => !!val || "Password is required",
                (val) => val.length >= 8 || "Password must be at least 8 characters long",
                (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
                (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
                (val) => /\d/.test(val) || "Must contain at least one number",
                (val) => /[\W_]/.test(val) || "Must contain at least one special character",
                (val) => val == auth.password || "Password does not match"
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
            _push2(``);
            _push2(ssrRenderComponent(_component_Button, {
              disabled: unref(isEmpty) || unref(isDiferent),
              type: "submit",
              class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="tw-ml-3" data-v-0c37b27a${_scopeId2}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.reset.submitBtn"))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.reset.submitBtn")), 1)
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
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                class: "tw-mb-2",
                modelValue: auth.confirmPassword,
                "onUpdate:modelValue": ($event) => auth.confirmPassword = $event,
                label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.reset.confirmPassword"),
                "lazy-rules": "",
                rules: [
                  (val) => !!val || "Password is required",
                  (val) => val.length >= 8 || "Password must be at least 8 characters long",
                  (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
                  (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
                  (val) => /\d/.test(val) || "Must contain at least one number",
                  (val) => /[\W_]/.test(val) || "Must contain at least one special character",
                  (val) => val == auth.password || "Password does not match"
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
              createVNode(Transition, { name: "hero" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    disabled: unref(isEmpty) || unref(isDiferent),
                    type: "submit",
                    class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.reset.submitBtn")), 1)
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
      _push(`<p class="tw-mt-8 tw-text-sm tw-font-extralight tw-text-white tw-text-center" data-v-0c37b27a>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("auth.register.existAccount.content"))} `);
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
      _push(`</p></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/resetPasswordComplete/[id]/[token].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _token_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c37b27a"]]);

export { _token_ as default };
//# sourceMappingURL=_token_-BoRgbt-u.mjs.map
