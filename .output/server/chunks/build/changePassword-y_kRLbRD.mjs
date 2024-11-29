import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { _ as _sfc_main$1 } from './index-BUfu69CW.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, mergeProps, withCtx, unref, createVNode, Transition } from 'vue';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { u as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { KeySquareIcon } from 'lucide-vue-next';
import { Q as QIcon } from '../_/vm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@vueuse/core';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import './helper-C0GmhoMX.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "changePassword",
  __ssrInlineRender: true,
  setup(__props) {
    const refReset = ref(null);
    const isPwd = ref(true);
    const store = useAuthStore();
    useRoute();
    const auth = reactive({
      password: "",
      newPassword: "",
      newPasswordConfirmation: ""
    });
    computed(() => store.loading);
    const isEmpty = computed(
      () => auth.password == "" || auth.newPassword == "" || auth.newPasswordConfirmation == ""
    );
    const isDiferent = computed(
      () => auth.newPassword != auth.newPasswordConfirmation
    );
    async function reset() {
      try {
        const validateReset = await refReset.value.validate();
        if (!validateReset) return;
        store.changePassword(auth);
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_q_icon = QIcon;
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-min-h-screen tw-flex tw-justify-center" }, _attrs))} data-v-34046899><div class="tw-max-w-screen-xl tw-m-0 sm:tw-m-10 sm:tw-rounded-lg tw-flex tw-justify-center tw-flex-1" data-v-34046899><div class="lg:tw-w-1/2 xl:tw-w-5/12 tw-p-6 sm:tw-p-12" data-v-34046899><div class="tw-mt-12 tw-flex tw-flex-col tw-items-center" data-v-34046899><h1 class="tw-text-[35px] xl:tw-text-[50px] tw-font-extralight tw-mb-4" data-v-34046899> Change Password </h1><div class="tw-w-full tw-flex-1" data-v-34046899><div class="" data-v-34046899>`);
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
              label: "Current password",
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
              modelValue: auth.newPassword,
              "onUpdate:modelValue": ($event) => auth.newPassword = $event,
              label: "New password",
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
              modelValue: auth.newPasswordConfirmation,
              "onUpdate:modelValue": ($event) => auth.newPasswordConfirmation = $event,
              label: "Confirm new password",
              "lazy-rules": "",
              rules: [
                (val) => !!val || "Password is required",
                (val) => val.length >= 8 || "Password must be at least 8 characters long",
                (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
                (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
                (val) => /\d/.test(val) || "Must contain at least one number",
                (val) => /[\W_]/.test(val) || "Must contain at least one special character",
                (val) => val == auth.newPassword || "Password does not match"
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
                  _push3(`<span class="tw-ml-3" data-v-34046899${_scopeId2}>Change password</span>`);
                } else {
                  return [
                    createVNode("span", { class: "tw-ml-3" }, "Change password")
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
                label: "Current password",
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
              }, 8, ["modelValue", "onUpdate:modelValue", "rules", "type"]),
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                class: "tw-mb-2",
                modelValue: auth.newPassword,
                "onUpdate:modelValue": ($event) => auth.newPassword = $event,
                label: "New password",
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
              }, 8, ["modelValue", "onUpdate:modelValue", "rules", "type"]),
              createVNode(_component_InputCPA, {
                filled: "",
                dark: "",
                class: "tw-mb-2",
                modelValue: auth.newPasswordConfirmation,
                "onUpdate:modelValue": ($event) => auth.newPasswordConfirmation = $event,
                label: "Confirm new password",
                "lazy-rules": "",
                rules: [
                  (val) => !!val || "Password is required",
                  (val) => val.length >= 8 || "Password must be at least 8 characters long",
                  (val) => /[A-Z]/.test(val) || "Must contain at least one uppercase letter",
                  (val) => /[a-z]/.test(val) || "Must contain at least one lowercase letter",
                  (val) => /\d/.test(val) || "Must contain at least one number",
                  (val) => /[\W_]/.test(val) || "Must contain at least one special character",
                  (val) => val == auth.newPassword || "Password does not match"
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
              }, 8, ["modelValue", "onUpdate:modelValue", "rules", "type"]),
              createVNode(Transition, { name: "hero" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    disabled: unref(isEmpty) || unref(isDiferent),
                    type: "submit",
                    class: "hero tw-mt-5 tw-tracking-wide tw-font-semibold tw-bg-indigo-500 tw-text-gray-100 tw-w-full tw-py-4 tw-rounded-lg tw-hover:bg-indigo-700 tw-transition-all tw-duration-300 tw-ease-in-out tw-flex tw-items-center tw-justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "tw-ml-3" }, "Change password")
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
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/changePassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34046899"]]);

export { changePassword as default };
//# sourceMappingURL=changePassword-y_kRLbRD.mjs.map
