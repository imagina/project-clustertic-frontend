import { c as createComponent, a as createDirective, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$4 } from './index-BUfu69CW.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$6 } from './CardTitle-BbDugV-N.mjs';
import { _ as _sfc_main$7 } from './CardContent-CfXgBR5p.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1$2 } from './RatingIndicator-CK_7lkYG.mjs';
import { S as ShareSVG, F as FacebookSVG, T as TwitterSVG, _ as __nuxt_component_4 } from './share-Cu-XUjKM.mjs';
import { u as useDarkProps, b as useDark, a as __nuxt_component_2$1, _ as __nuxt_component_1$1 } from '../_/QForm.mjs';
import { _ as __nuxt_component_3 } from './Textarea-DeRyVDAj.mjs';
import { _ as __nuxt_component_5 } from './Dropzone-DWrgowuh.mjs';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { getCurrentInstance, computed, h, useSSRContext, defineComponent, reactive, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, watch, vModelText, ref, withModifiers, createCommentVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
import { Paperclip, XIcon, SquarePenIcon, FactoryIcon, PhoneIcon, MailIcon, MapPinIcon, GlobeIcon } from 'lucide-vue-next';
import { _ as __nuxt_component_0 } from '../_/QDialog.mjs';
import { h as hSlot } from '../_/vm.mjs';
import { _ as __nuxt_component_6 } from '../_/QSeparator.mjs';
import { u as useAlignProps, a as useAlign, _ as __nuxt_component_8 } from '../_/QBtn.mjs';
import { g as getSSRProps } from '../_/Ripple.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { S as StarSVG } from './star-kerVB7NH.mjs';
import { L as LinkedinSVG } from './brand-linkedin-DRmOFgkr.mjs';
import { u as useCategoryStore } from './useCategories-iDCjhnnL.mjs';
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
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './nuxt-icon-1v0WEHYY.mjs';
import '../_/use-router-link.mjs';

const __nuxt_component_1 = createComponent({
  name: 'QCard',

  props: {
    ...useDarkProps,

    tag: {
      type: String,
      default: 'div'
    },

    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);

    const classes = computed(() =>
      'q-card'
      + (isDark.value === true ? ' q-card--dark q-dark' : '')
      + (props.bordered === true ? ' q-card--bordered' : '')
      + (props.square === true ? ' q-card--square no-border-radius' : '')
      + (props.flat === true ? ' q-card--flat no-shadow' : '')
    );

    return () => h(props.tag, { class: classes.value }, hSlot(slots.default))
  }
});

const __nuxt_component_2 = createComponent({
  name: 'QCardSection',

  props: {
    tag: {
      type: String,
      default: 'div'
    },

    horizontal: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-card__section'
      + ` q-card__section--${ props.horizontal === true ? 'horiz row no-wrap' : 'vert' }`
    );

    return () => h(props.tag, { class: classes.value }, hSlot(slots.default))
  }
});

const __nuxt_component_7 = createComponent({
  name: 'QCardActions',

  props: {
    ...useAlignProps,
    vertical: Boolean
  },

  setup (props, { slots }) {
    const alignClass = useAlign(props);

    const classes = computed(() =>
      `q-card__actions ${ alignClass.value }`
      + ` q-card__actions--${ props.vertical === true ? 'vert column' : 'horiz row' }`
    );

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
});

const __q_directive_0 = createDirective({ name: 'close-popup', getSSRProps }
  
);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AddExperience",
  __ssrInlineRender: true,
  props: {
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    modelValue: { type: [Boolean, null] },
    persistent: { type: Boolean },
    noEscDismiss: { type: Boolean },
    noBackdropDismiss: { type: Boolean },
    noRouteDismiss: { type: Boolean },
    autoClose: { type: Boolean },
    seamless: { type: Boolean },
    backdropFilter: {},
    maximized: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    position: {},
    square: { type: Boolean },
    noRefocus: { type: Boolean },
    noFocus: { type: Boolean },
    noShake: { type: Boolean },
    allowFocusOutside: { type: Boolean },
    "onUpdate:modelValue": { type: Function },
    onShow: { type: Function },
    onBeforeShow: { type: Function },
    onHide: { type: Function },
    onBeforeHide: { type: Function },
    onShake: { type: Function },
    onEscapeKey: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const authStore = useAuthStore();
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.modelValue
    });
    const newData = reactive({
      files: void 0,
      title: "",
      description: "",
      dateInit: "",
      dateEnd: void 0,
      place: ""
    });
    async function handleSaveInfo() {
      var _a;
      const toSend = {
        title: newData.title,
        description: newData.description,
        place: newData.place,
        dateInit: newData.dateInit,
        dateEnd: (_a = newData.dateEnd) != null ? _a : void 0
      };
      if (newData.files && newData.files.length > 0) {
        toSend.img = newData.files[0];
      }
      try {
        await authStore.addExperience(toSend);
      } finally {
        emits("update:modelValue", false);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_dialog = __nuxt_component_0;
      const _component_q_card = __nuxt_component_1;
      const _component_q_card_section = __nuxt_component_2;
      const _component_InputCPA = __nuxt_component_2$1;
      const _component_Textarea = __nuxt_component_3;
      const _component_Dropzone = __nuxt_component_5;
      const _component_q_separator = __nuxt_component_6;
      const _component_q_card_actions = __nuxt_component_7;
      const _component_q_btn = __nuxt_component_8;
      const _component_Button = _sfc_main$4;
      const _directive_close_popup = __q_directive_0;
      _push(ssrRenderComponent(_component_q_dialog, mergeProps({
        modelValue: unref(modelValue),
        "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
        "transition-show": "fade",
        "transition-hide": "fade"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_card, {
              class: "card-edit !tw-rounded-lg lg:tw-w-1/2",
              style: { "max-width": "80vw" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_card_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tw-text-lg tw-font-semibold tw-text-white" data-v-f9d154d8${_scopeId3}> Nueva experiencia </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Nueva experiencia ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_section, { class: "q-pt-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="tw-text-sm tw-font-normal tw-text-white" data-v-f9d154d8${_scopeId3}> You will have the ability to choose wich profile to display in your bids. </p><p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5" data-v-f9d154d8${_scopeId3}>Titulo*</p>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          rounded: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).title,
                          "onUpdate:modelValue": ($event) => unref(newData).title = $event,
                          label: "Titulo",
                          required: ""
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`F`);
                            } else {
                              return [
                                createTextVNode("F")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5" data-v-f9d154d8${_scopeId3}> Descripci\xF3n* </p>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          modelValue: unref(newData).description,
                          "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                          class: "!tw-border-muted-custom tw-text-white"
                        }, null, _parent4, _scopeId3));
                        _push4(`<p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5" data-v-f9d154d8${_scopeId3}> Locaci\xF3n* </p>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          rounded: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).place,
                          "onUpdate:modelValue": ($event) => unref(newData).place = $event,
                          label: "Lugar",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="tw-grid tw-grid-cols-2 tw-gap-4" data-v-f9d154d8${_scopeId3}><div data-v-f9d154d8${_scopeId3}><p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5" data-v-f9d154d8${_scopeId3}> Fecha de inicio* </p>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          rounded: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).dateInit,
                          "onUpdate:modelValue": ($event) => unref(newData).dateInit = $event,
                          type: "date",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<p class="tw-text-sm tw-font-semibold tw-text-white tw-my-5" data-v-f9d154d8${_scopeId3}> Fecha de fin </p>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          rounded: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).dateEnd,
                          "onUpdate:modelValue": ($event) => unref(newData).dateEnd = $event,
                          type: "date"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="tw-flex tw-justify-center tw-items-center" data-v-f9d154d8${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Dropzone, {
                          class: "tw-text-white",
                          modelValue: unref(newData).files,
                          "onUpdate:modelValue": ($event) => unref(newData).files = $event
                        }, {
                          title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="tw-flex tw-flex-col tw-items-center tw-justify-center" data-v-f9d154d8${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(Paperclip), {
                                size: 50,
                                class: "tw-mb-3"
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="tw-text-base tw-mb-3" data-v-f9d154d8${_scopeId4}>${ssrInterpolate(unref(newData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg"))}</p></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                  createVNode(unref(Paperclip), {
                                    size: 50,
                                    class: "tw-mb-3"
                                  }),
                                  createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(newData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                ])
                              ];
                            }
                          }),
                          subtitle: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(newData).files) {
                                _push5(`<p class="tw-text-xs tw-text-center" data-v-f9d154d8${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(newData).files, (file, index) => {
                                  _push5(`<span class="tw-mr-2" data-v-f9d154d8${_scopeId4}>${ssrInterpolate(file.name)}</span>`);
                                });
                                _push5(`<!--]--></p>`);
                              } else {
                                _push5(`<p class="tw-text-xs tw-text-center" data-v-f9d154d8${_scopeId4}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description"))}</p>`);
                              }
                            } else {
                              return [
                                unref(newData).files ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "tw-text-xs tw-text-center"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).files, (file, index) => {
                                    return openBlock(), createBlock("span", {
                                      class: "tw-mr-2",
                                      key: index
                                    }, toDisplayString(file.name), 1);
                                  }), 128))
                                ])) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "tw-text-xs tw-text-center"
                                }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("p", { class: "tw-text-sm tw-font-normal tw-text-white" }, " You will have the ability to choose wich profile to display in your bids. "),
                          createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, "Titulo*"),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            rounded: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).title,
                            "onUpdate:modelValue": ($event) => unref(newData).title = $event,
                            label: "Titulo",
                            required: ""
                          }, {
                            prepend: withCtx(() => [
                              createTextVNode("F")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Descripci\xF3n* "),
                          createVNode(_component_Textarea, {
                            modelValue: unref(newData).description,
                            "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                            class: "!tw-border-muted-custom tw-text-white"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Locaci\xF3n* "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            rounded: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).place,
                            "onUpdate:modelValue": ($event) => unref(newData).place = $event,
                            label: "Lugar",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-4" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Fecha de inicio* "),
                              createVNode(_component_InputCPA, {
                                outlined: "",
                                dark: "",
                                rounded: "",
                                class: "input-custom-outline tw-mb-3 search-input-border",
                                modelValue: unref(newData).dateInit,
                                "onUpdate:modelValue": ($event) => unref(newData).dateInit = $event,
                                type: "date",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Fecha de fin "),
                              createVNode(_component_InputCPA, {
                                outlined: "",
                                dark: "",
                                rounded: "",
                                class: "input-custom-outline tw-mb-3 search-input-border",
                                modelValue: unref(newData).dateEnd,
                                "onUpdate:modelValue": ($event) => unref(newData).dateEnd = $event,
                                type: "date"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "tw-flex tw-justify-center tw-items-center" }, [
                              createVNode(_component_Dropzone, {
                                class: "tw-text-white",
                                modelValue: unref(newData).files,
                                "onUpdate:modelValue": ($event) => unref(newData).files = $event
                              }, {
                                title: withCtx(() => [
                                  createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                    createVNode(unref(Paperclip), {
                                      size: 50,
                                      class: "tw-mb-3"
                                    }),
                                    createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(newData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                  ])
                                ]),
                                subtitle: withCtx(() => [
                                  unref(newData).files ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "tw-text-xs tw-text-center"
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).files, (file, index) => {
                                      return openBlock(), createBlock("span", {
                                        class: "tw-mr-2",
                                        key: index
                                      }, toDisplayString(file.name), 1);
                                    }), 128))
                                  ])) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "tw-text-xs tw-text-center"
                                  }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_separator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_actions, { align: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, mergeProps({
                          flat: "",
                          label: "Cancelar",
                          color: "primary",
                          class: "!tw-text-primary"
                        }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: handleSaveInfo,
                          class: "tw-ml-5 tw-font-semibold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Guardar `);
                            } else {
                              return [
                                createTextVNode(" Guardar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          withDirectives(createVNode(_component_q_btn, {
                            flat: "",
                            label: "Cancelar",
                            color: "primary",
                            class: "!tw-text-primary"
                          }, null, 512), [
                            [_directive_close_popup]
                          ]),
                          createVNode(_component_Button, {
                            onClick: handleSaveInfo,
                            class: "tw-ml-5 tw-font-semibold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Guardar ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_card_section, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Nueva experiencia ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "tw-text-sm tw-font-normal tw-text-white" }, " You will have the ability to choose wich profile to display in your bids. "),
                        createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, "Titulo*"),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          rounded: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).title,
                          "onUpdate:modelValue": ($event) => unref(newData).title = $event,
                          label: "Titulo",
                          required: ""
                        }, {
                          prepend: withCtx(() => [
                            createTextVNode("F")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Descripci\xF3n* "),
                        createVNode(_component_Textarea, {
                          modelValue: unref(newData).description,
                          "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                          class: "!tw-border-muted-custom tw-text-white"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Locaci\xF3n* "),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          rounded: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).place,
                          "onUpdate:modelValue": ($event) => unref(newData).place = $event,
                          label: "Lugar",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-4" }, [
                          createVNode("div", null, [
                            createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Fecha de inicio* "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              rounded: "",
                              class: "input-custom-outline tw-mb-3 search-input-border",
                              modelValue: unref(newData).dateInit,
                              "onUpdate:modelValue": ($event) => unref(newData).dateInit = $event,
                              type: "date",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Fecha de fin "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              rounded: "",
                              class: "input-custom-outline tw-mb-3 search-input-border",
                              modelValue: unref(newData).dateEnd,
                              "onUpdate:modelValue": ($event) => unref(newData).dateEnd = $event,
                              type: "date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "tw-flex tw-justify-center tw-items-center" }, [
                            createVNode(_component_Dropzone, {
                              class: "tw-text-white",
                              modelValue: unref(newData).files,
                              "onUpdate:modelValue": ($event) => unref(newData).files = $event
                            }, {
                              title: withCtx(() => [
                                createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                  createVNode(unref(Paperclip), {
                                    size: 50,
                                    class: "tw-mb-3"
                                  }),
                                  createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(newData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                ])
                              ]),
                              subtitle: withCtx(() => [
                                unref(newData).files ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "tw-text-xs tw-text-center"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).files, (file, index) => {
                                    return openBlock(), createBlock("span", {
                                      class: "tw-mr-2",
                                      key: index
                                    }, toDisplayString(file.name), 1);
                                  }), 128))
                                ])) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "tw-text-xs tw-text-center"
                                }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_separator),
                    createVNode(_component_q_card_actions, { align: "right" }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_q_btn, {
                          flat: "",
                          label: "Cancelar",
                          color: "primary",
                          class: "!tw-text-primary"
                        }, null, 512), [
                          [_directive_close_popup]
                        ]),
                        createVNode(_component_Button, {
                          onClick: handleSaveInfo,
                          class: "tw-ml-5 tw-font-semibold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Guardar ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_card, {
                class: "card-edit !tw-rounded-lg lg:tw-w-1/2",
                style: { "max-width": "80vw" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_card_section, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Nueva experiencia ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "tw-text-sm tw-font-normal tw-text-white" }, " You will have the ability to choose wich profile to display in your bids. "),
                      createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, "Titulo*"),
                      createVNode(_component_InputCPA, {
                        outlined: "",
                        dark: "",
                        rounded: "",
                        class: "input-custom-outline tw-mb-3 search-input-border",
                        modelValue: unref(newData).title,
                        "onUpdate:modelValue": ($event) => unref(newData).title = $event,
                        label: "Titulo",
                        required: ""
                      }, {
                        prepend: withCtx(() => [
                          createTextVNode("F")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Descripci\xF3n* "),
                      createVNode(_component_Textarea, {
                        modelValue: unref(newData).description,
                        "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                        class: "!tw-border-muted-custom tw-text-white"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Locaci\xF3n* "),
                      createVNode(_component_InputCPA, {
                        outlined: "",
                        dark: "",
                        rounded: "",
                        class: "input-custom-outline tw-mb-3 search-input-border",
                        modelValue: unref(newData).place,
                        "onUpdate:modelValue": ($event) => unref(newData).place = $event,
                        label: "Lugar",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Fecha de inicio* "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            rounded: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).dateInit,
                            "onUpdate:modelValue": ($event) => unref(newData).dateInit = $event,
                            type: "date",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("p", { class: "tw-text-sm tw-font-semibold tw-text-white tw-my-5" }, " Fecha de fin "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            rounded: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).dateEnd,
                            "onUpdate:modelValue": ($event) => unref(newData).dateEnd = $event,
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "tw-flex tw-justify-center tw-items-center" }, [
                          createVNode(_component_Dropzone, {
                            class: "tw-text-white",
                            modelValue: unref(newData).files,
                            "onUpdate:modelValue": ($event) => unref(newData).files = $event
                          }, {
                            title: withCtx(() => [
                              createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                createVNode(unref(Paperclip), {
                                  size: 50,
                                  class: "tw-mb-3"
                                }),
                                createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(newData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                              ])
                            ]),
                            subtitle: withCtx(() => [
                              unref(newData).files ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "tw-text-xs tw-text-center"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).files, (file, index) => {
                                  return openBlock(), createBlock("span", {
                                    class: "tw-mr-2",
                                    key: index
                                  }, toDisplayString(file.name), 1);
                                }), 128))
                              ])) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "tw-text-xs tw-text-center"
                              }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_separator),
                  createVNode(_component_q_card_actions, { align: "right" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_q_btn, {
                        flat: "",
                        label: "Cancelar",
                        color: "primary",
                        class: "!tw-text-primary"
                      }, null, 512), [
                        [_directive_close_popup]
                      ]),
                      createVNode(_component_Button, {
                        onClick: handleSaveInfo,
                        class: "tw-ml-5 tw-font-semibold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Guardar ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/AddExperience.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f9d154d8"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProfileEdit",
  __ssrInlineRender: true,
  props: {
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    modelValue: { type: [Boolean, null] },
    persistent: { type: Boolean },
    noEscDismiss: { type: Boolean },
    noBackdropDismiss: { type: Boolean },
    noRouteDismiss: { type: Boolean },
    autoClose: { type: Boolean },
    seamless: { type: Boolean },
    backdropFilter: {},
    maximized: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    position: {},
    square: { type: Boolean },
    noRefocus: { type: Boolean },
    noFocus: { type: Boolean },
    noShake: { type: Boolean },
    allowFocusOutside: { type: Boolean },
    "onUpdate:modelValue": { type: Function },
    onShow: { type: Function },
    onBeforeShow: { type: Function },
    onHide: { type: Function },
    onBeforeHide: { type: Function },
    onShake: { type: Function },
    onEscapeKey: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let debounceTimeout = null;
    const props = __props;
    const categoryStore = useCategoryStore();
    const authStore = useAuthStore();
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.modelValue
    });
    const newData = reactive({
      companyName: "",
      firstName: "",
      lastName: "",
      description: "",
      skills: [],
      searchSkills: "",
      facebook: "",
      web: "",
      twitter: "",
      linkedin: "",
      place: "",
      phone: "",
      email: ""
    });
    const categories = computed(() => {
      return categoryStore.categories;
    });
    watch(
      () => authStore.user,
      (newQuery, oldQuery) => {
        var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j;
        var _a, _b, _c, _d;
        const fullUser = authStore.fullUser;
        if (!fullUser) return;
        newData.firstName = fullUser.firstName;
        newData.lastName = fullUser.lastName;
        newData.companyName = (_a2 = (_a = fullUser.extraFields.companyName) == null ? void 0 : _a.value) != null ? _a2 : "";
        newData.place = (_b2 = (_b = fullUser.extraFields.place) == null ? void 0 : _b.value) != null ? _b2 : "";
        newData.phone = (_c2 = (_c = fullUser.extraFields.phone) == null ? void 0 : _c.value) != null ? _c2 : "";
        newData.description = (_d2 = (_d = fullUser.extraFields.description) == null ? void 0 : _d.value) != null ? _d2 : "";
        newData.skills = (_e = fullUser == null ? void 0 : fullUser.skills) != null ? _e : [];
        newData.facebook = (_f = fullUser.socialMedia.facebook) != null ? _f : "";
        newData.web = (_g = fullUser.socialMedia.web) != null ? _g : "";
        newData.twitter = (_h = fullUser.socialMedia.twitter) != null ? _h : "";
        newData.linkedin = (_i = fullUser.socialMedia.linkedin) != null ? _i : "";
        newData.email = (_j = fullUser.email) != null ? _j : "";
      }
    );
    function handleEndWrite() {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        searchCategories(newData.searchSkills);
      }, 500);
    }
    function searchCategories(query) {
      categoryStore.setFilters({ search: query });
      categoryStore.get(1);
    }
    function handleRemoveSkill(index) {
      const [skillRemoved] = newData.skills.splice(index, 1);
      authStore.removeSkill(skillRemoved);
    }
    function handleAddSkill(skill) {
      var _a;
      if (!((_a = authStore.user) == null ? void 0 : _a.skills)) return;
      if (authStore.user.skills.findIndex((s) => s.entityId === `${skill.id}`) >= 0)
        return;
      authStore.addSkill(skill);
    }
    function handleSaveInfo() {
      const socialMedia = {
        facebook: newData.facebook,
        twitter: newData.twitter,
        linkedin: newData.linkedin,
        web: newData.web
      };
      authStore.editProfileInfo({
        "attributes[first_name]": newData.firstName,
        "attributes[last_name]": newData.lastName,
        "attributes[email]": newData.email,
        "attributes[fields]": [
          {
            name: "description",
            value: newData.description
          },
          {
            name: "socialNetworks",
            value: JSON.stringify(socialMedia)
          },
          {
            name: "place",
            value: newData.place
          },
          {
            name: "phone",
            value: newData.phone
          },
          {
            name: "companyName",
            value: newData.companyName
          }
        ]
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_dialog = __nuxt_component_0;
      const _component_q_card = __nuxt_component_1;
      const _component_q_card_section = __nuxt_component_2;
      const _component_q_separator = __nuxt_component_6;
      const _component_InputCPA = __nuxt_component_2$1;
      const _component_Textarea = __nuxt_component_3;
      const _component_Button = _sfc_main$4;
      const _component_q_card_actions = __nuxt_component_7;
      const _component_q_btn = __nuxt_component_8;
      const _directive_close_popup = __q_directive_0;
      _push(ssrRenderComponent(_component_q_dialog, mergeProps({
        modelValue: unref(modelValue),
        "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_card, {
              class: "card-edit tw-relative !tw-rounded-lg",
              style: { "max-width": "80vw" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_card_section, { class: "tw-sticky tw-z-40 tw-top-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tw-text-lg tw-font-semibold tw-text-white" data-v-9b4b50e8${_scopeId3}> Editar Perfil </div><p class="tw-text-sm tw-font-normal tw-text-white" data-v-9b4b50e8${_scopeId3}> Informaci\xF3n b\xE1sica </p>`);
                        _push4(ssrRenderComponent(_component_q_separator, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Editar Perfil "),
                          createVNode("p", { class: "tw-text-sm tw-font-normal tw-text-white" }, " Informaci\xF3n b\xE1sica "),
                          createVNode(_component_q_separator)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_section, { class: "q-pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tw-grid tw-grid-cols-2 tw-gap-2" data-v-9b4b50e8${_scopeId3}><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Nombre </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).firstName,
                          "onUpdate:modelValue": ($event) => unref(newData).firstName = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Apellido </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).lastName,
                          "onUpdate:modelValue": ($event) => unref(newData).lastName = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Nombre de la empresa </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).companyName,
                          "onUpdate:modelValue": ($event) => unref(newData).companyName = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Description </label>`);
                        _push4(ssrRenderComponent(_component_Textarea, {
                          modelValue: unref(newData).description,
                          "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                          class: "!tw-border-muted-custom tw-text-white tw-mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Pagina Web </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          type: "url",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).web,
                          "onUpdate:modelValue": ($event) => unref(newData).web = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Ubicaci\xF3n </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).place,
                          "onUpdate:modelValue": ($event) => unref(newData).place = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="tw-mb-4" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Habilidades principales </label><div class="tw-relative tw-border tw-border-muted-custom lg:tw-w-[34rem] tw-p-3 tw-rounded-md" data-v-9b4b50e8${_scopeId3}><ul class="tw-flex tw-flex-wrap" data-v-9b4b50e8${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(newData).skills, (item, index) => {
                          _push4(`<li class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1" data-v-9b4b50e8${_scopeId3}><p class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" data-v-9b4b50e8${_scopeId3}>${ssrInterpolate(item.title)}</p>`);
                          _push4(ssrRenderComponent(_component_Button, {
                            size: "xs",
                            type: "button",
                            variant: "ghost",
                            class: "hover:tw-bg-transparent !tw-pr-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(XIcon), {
                                  onClick: ($event) => handleRemoveSkill(index),
                                  class: "tw-text-primary tw-text-xs",
                                  size: 20
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(XIcon), {
                                    onClick: ($event) => handleRemoveSkill(index),
                                    class: "tw-text-primary tw-text-xs",
                                    size: 20
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</li>`);
                        });
                        _push4(`<!--]--></ul><input class="skills-input"${ssrRenderAttr("placeholder", ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.placeholder"))}${ssrRenderAttr("value", unref(newData).searchSkills)} data-v-9b4b50e8${_scopeId3}><div class="option-skill-list" data-v-9b4b50e8${_scopeId3}><ul class="" data-v-9b4b50e8${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(categories), (item) => {
                          _push4(`<li data-v-9b4b50e8${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Button, {
                            onClick: ($event) => handleAddSkill(item),
                            variant: "ghost",
                            type: "button",
                            class: "hover:tw-bg-transparent tw-w-full !tw-justify-start"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</li>`);
                        });
                        _push4(`<!--]--></ul></div></div></div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Email </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          type: "url",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).email,
                          "onUpdate:modelValue": ($event) => unref(newData).email = $event,
                          disable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="input-container" data-v-9b4b50e8${_scopeId3}><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Numero de tel\xE9fono </label>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).phone,
                          "onUpdate:modelValue": ($event) => unref(newData).phone = $event,
                          type: "tel"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><label class="tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" data-v-9b4b50e8${_scopeId3}> Conexiones </label><div class="tw-grid tw-grid-cols-2 tw-gap-4" data-v-9b4b50e8${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).facebook,
                          "onUpdate:modelValue": ($event) => unref(newData).facebook = $event,
                          label: "Facebook"
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`F`);
                            } else {
                              return [
                                createTextVNode("F")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).twitter,
                          "onUpdate:modelValue": ($event) => unref(newData).twitter = $event,
                          label: "Twitter"
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`X`);
                            } else {
                              return [
                                createTextVNode("X")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).linkedin,
                          "onUpdate:modelValue": ($event) => unref(newData).linkedin = $event,
                          label: "Linkedin"
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`L`);
                            } else {
                              return [
                                createTextVNode("L")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-2" }, [
                            createVNode("div", { class: "input-container" }, [
                              createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Nombre "),
                              createVNode(_component_InputCPA, {
                                outlined: "",
                                dark: "",
                                size: "sm",
                                class: "input-custom-outline search-input-border",
                                modelValue: unref(newData).firstName,
                                "onUpdate:modelValue": ($event) => unref(newData).firstName = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "input-container" }, [
                              createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Apellido "),
                              createVNode(_component_InputCPA, {
                                outlined: "",
                                dark: "",
                                size: "sm",
                                class: "input-custom-outline search-input-border",
                                modelValue: unref(newData).lastName,
                                "onUpdate:modelValue": ($event) => unref(newData).lastName = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Nombre de la empresa "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).companyName,
                              "onUpdate:modelValue": ($event) => unref(newData).companyName = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Description "),
                            createVNode(_component_Textarea, {
                              modelValue: unref(newData).description,
                              "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                              class: "!tw-border-muted-custom tw-text-white tw-mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Pagina Web "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              type: "url",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).web,
                              "onUpdate:modelValue": ($event) => unref(newData).web = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Ubicaci\xF3n "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).place,
                              "onUpdate:modelValue": ($event) => unref(newData).place = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "tw-mb-4" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Habilidades principales "),
                            createVNode("div", { class: "tw-relative tw-border tw-border-muted-custom lg:tw-w-[34rem] tw-p-3 tw-rounded-md" }, [
                              createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).skills, (item, index) => {
                                  return openBlock(), createBlock("li", {
                                    key: `skill_${index}`,
                                    class: "tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
                                  }, [
                                    createVNode("p", { class: "tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" }, toDisplayString(item.title), 1),
                                    createVNode(_component_Button, {
                                      size: "xs",
                                      type: "button",
                                      variant: "ghost",
                                      class: "hover:tw-bg-transparent !tw-pr-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(XIcon), {
                                          onClick: ($event) => handleRemoveSkill(index),
                                          class: "tw-text-primary tw-text-xs",
                                          size: 20
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]);
                                }), 128))
                              ]),
                              withDirectives(createVNode("input", {
                                onInput: handleEndWrite,
                                class: "skills-input",
                                placeholder: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.placeholder"),
                                "onUpdate:modelValue": ($event) => unref(newData).searchSkills = $event
                              }, null, 40, ["placeholder", "onUpdate:modelValue"]), [
                                [vModelText, unref(newData).searchSkills]
                              ]),
                              createVNode("div", { class: "option-skill-list" }, [
                                createVNode("ul", { class: "" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (item) => {
                                    return openBlock(), createBlock("li", {
                                      key: `category_${item.id}`
                                    }, [
                                      createVNode(_component_Button, {
                                        onClick: ($event) => handleAddSkill(item),
                                        variant: "ghost",
                                        type: "button",
                                        class: "hover:tw-bg-transparent tw-w-full !tw-justify-start"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Email "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              type: "url",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).email,
                              "onUpdate:modelValue": ($event) => unref(newData).email = $event,
                              disable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Numero de tel\xE9fono "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).phone,
                              "onUpdate:modelValue": ($event) => unref(newData).phone = $event,
                              type: "tel"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Conexiones "),
                          createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-4" }, [
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              class: "input-custom-outline tw-mb-3 search-input-border",
                              modelValue: unref(newData).facebook,
                              "onUpdate:modelValue": ($event) => unref(newData).facebook = $event,
                              label: "Facebook"
                            }, {
                              prepend: withCtx(() => [
                                createTextVNode("F")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              class: "input-custom-outline tw-mb-3 search-input-border",
                              modelValue: unref(newData).twitter,
                              "onUpdate:modelValue": ($event) => unref(newData).twitter = $event,
                              label: "Twitter"
                            }, {
                              prepend: withCtx(() => [
                                createTextVNode("X")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              class: "input-custom-outline tw-mb-3 search-input-border",
                              modelValue: unref(newData).linkedin,
                              "onUpdate:modelValue": ($event) => unref(newData).linkedin = $event,
                              label: "Linkedin"
                            }, {
                              prepend: withCtx(() => [
                                createTextVNode("L")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_separator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_actions, {
                    class: "tw-sticky tw-z-40 tw-bottom-0",
                    align: "right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, mergeProps({
                          flat: "",
                          label: "Cancelar",
                          color: "primary",
                          class: "!tw-text-primary"
                        }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: handleSaveInfo,
                          class: "tw-ml-5 tw-font-semibold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Guardar `);
                            } else {
                              return [
                                createTextVNode(" Guardar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          withDirectives(createVNode(_component_q_btn, {
                            flat: "",
                            label: "Cancelar",
                            color: "primary",
                            class: "!tw-text-primary"
                          }, null, 512), [
                            [_directive_close_popup]
                          ]),
                          createVNode(_component_Button, {
                            onClick: handleSaveInfo,
                            class: "tw-ml-5 tw-font-semibold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Guardar ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_card_section, { class: "tw-sticky tw-z-40 tw-top-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Editar Perfil "),
                        createVNode("p", { class: "tw-text-sm tw-font-normal tw-text-white" }, " Informaci\xF3n b\xE1sica "),
                        createVNode(_component_q_separator)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_card_section, { class: "q-pt-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-2" }, [
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Nombre "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).firstName,
                              "onUpdate:modelValue": ($event) => unref(newData).firstName = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "input-container" }, [
                            createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Apellido "),
                            createVNode(_component_InputCPA, {
                              outlined: "",
                              dark: "",
                              size: "sm",
                              class: "input-custom-outline search-input-border",
                              modelValue: unref(newData).lastName,
                              "onUpdate:modelValue": ($event) => unref(newData).lastName = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Nombre de la empresa "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).companyName,
                            "onUpdate:modelValue": ($event) => unref(newData).companyName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Description "),
                          createVNode(_component_Textarea, {
                            modelValue: unref(newData).description,
                            "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                            class: "!tw-border-muted-custom tw-text-white tw-mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Pagina Web "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            type: "url",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).web,
                            "onUpdate:modelValue": ($event) => unref(newData).web = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Ubicaci\xF3n "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).place,
                            "onUpdate:modelValue": ($event) => unref(newData).place = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "tw-mb-4" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Habilidades principales "),
                          createVNode("div", { class: "tw-relative tw-border tw-border-muted-custom lg:tw-w-[34rem] tw-p-3 tw-rounded-md" }, [
                            createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).skills, (item, index) => {
                                return openBlock(), createBlock("li", {
                                  key: `skill_${index}`,
                                  class: "tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
                                }, [
                                  createVNode("p", { class: "tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" }, toDisplayString(item.title), 1),
                                  createVNode(_component_Button, {
                                    size: "xs",
                                    type: "button",
                                    variant: "ghost",
                                    class: "hover:tw-bg-transparent !tw-pr-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(XIcon), {
                                        onClick: ($event) => handleRemoveSkill(index),
                                        class: "tw-text-primary tw-text-xs",
                                        size: 20
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]);
                              }), 128))
                            ]),
                            withDirectives(createVNode("input", {
                              onInput: handleEndWrite,
                              class: "skills-input",
                              placeholder: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.placeholder"),
                              "onUpdate:modelValue": ($event) => unref(newData).searchSkills = $event
                            }, null, 40, ["placeholder", "onUpdate:modelValue"]), [
                              [vModelText, unref(newData).searchSkills]
                            ]),
                            createVNode("div", { class: "option-skill-list" }, [
                              createVNode("ul", { class: "" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (item) => {
                                  return openBlock(), createBlock("li", {
                                    key: `category_${item.id}`
                                  }, [
                                    createVNode(_component_Button, {
                                      onClick: ($event) => handleAddSkill(item),
                                      variant: "ghost",
                                      type: "button",
                                      class: "hover:tw-bg-transparent tw-w-full !tw-justify-start"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Email "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            type: "url",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).email,
                            "onUpdate:modelValue": ($event) => unref(newData).email = $event,
                            disable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Numero de tel\xE9fono "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).phone,
                            "onUpdate:modelValue": ($event) => unref(newData).phone = $event,
                            type: "tel"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Conexiones "),
                        createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-4" }, [
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).facebook,
                            "onUpdate:modelValue": ($event) => unref(newData).facebook = $event,
                            label: "Facebook"
                          }, {
                            prepend: withCtx(() => [
                              createTextVNode("F")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).twitter,
                            "onUpdate:modelValue": ($event) => unref(newData).twitter = $event,
                            label: "Twitter"
                          }, {
                            prepend: withCtx(() => [
                              createTextVNode("X")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            class: "input-custom-outline tw-mb-3 search-input-border",
                            modelValue: unref(newData).linkedin,
                            "onUpdate:modelValue": ($event) => unref(newData).linkedin = $event,
                            label: "Linkedin"
                          }, {
                            prepend: withCtx(() => [
                              createTextVNode("L")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_separator),
                    createVNode(_component_q_card_actions, {
                      class: "tw-sticky tw-z-40 tw-bottom-0",
                      align: "right"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_q_btn, {
                          flat: "",
                          label: "Cancelar",
                          color: "primary",
                          class: "!tw-text-primary"
                        }, null, 512), [
                          [_directive_close_popup]
                        ]),
                        createVNode(_component_Button, {
                          onClick: handleSaveInfo,
                          class: "tw-ml-5 tw-font-semibold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Guardar ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_card, {
                class: "card-edit tw-relative !tw-rounded-lg",
                style: { "max-width": "80vw" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_card_section, { class: "tw-sticky tw-z-40 tw-top-0" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Editar Perfil "),
                      createVNode("p", { class: "tw-text-sm tw-font-normal tw-text-white" }, " Informaci\xF3n b\xE1sica "),
                      createVNode(_component_q_separator)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_card_section, { class: "q-pt-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-2" }, [
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Nombre "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).firstName,
                            "onUpdate:modelValue": ($event) => unref(newData).firstName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "input-container" }, [
                          createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Apellido "),
                          createVNode(_component_InputCPA, {
                            outlined: "",
                            dark: "",
                            size: "sm",
                            class: "input-custom-outline search-input-border",
                            modelValue: unref(newData).lastName,
                            "onUpdate:modelValue": ($event) => unref(newData).lastName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "input-container" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Nombre de la empresa "),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).companyName,
                          "onUpdate:modelValue": ($event) => unref(newData).companyName = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "input-container" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Description "),
                        createVNode(_component_Textarea, {
                          modelValue: unref(newData).description,
                          "onUpdate:modelValue": ($event) => unref(newData).description = $event,
                          class: "!tw-border-muted-custom tw-text-white tw-mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "input-container" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Pagina Web "),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          type: "url",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).web,
                          "onUpdate:modelValue": ($event) => unref(newData).web = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "input-container" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Ubicaci\xF3n "),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).place,
                          "onUpdate:modelValue": ($event) => unref(newData).place = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "tw-mb-4" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Habilidades principales "),
                        createVNode("div", { class: "tw-relative tw-border tw-border-muted-custom lg:tw-w-[34rem] tw-p-3 tw-rounded-md" }, [
                          createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(newData).skills, (item, index) => {
                              return openBlock(), createBlock("li", {
                                key: `skill_${index}`,
                                class: "tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
                              }, [
                                createVNode("p", { class: "tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" }, toDisplayString(item.title), 1),
                                createVNode(_component_Button, {
                                  size: "xs",
                                  type: "button",
                                  variant: "ghost",
                                  class: "hover:tw-bg-transparent !tw-pr-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(XIcon), {
                                      onClick: ($event) => handleRemoveSkill(index),
                                      class: "tw-text-primary tw-text-xs",
                                      size: 20
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]);
                            }), 128))
                          ]),
                          withDirectives(createVNode("input", {
                            onInput: handleEndWrite,
                            class: "skills-input",
                            placeholder: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.placeholder"),
                            "onUpdate:modelValue": ($event) => unref(newData).searchSkills = $event
                          }, null, 40, ["placeholder", "onUpdate:modelValue"]), [
                            [vModelText, unref(newData).searchSkills]
                          ]),
                          createVNode("div", { class: "option-skill-list" }, [
                            createVNode("ul", { class: "" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (item) => {
                                return openBlock(), createBlock("li", {
                                  key: `category_${item.id}`
                                }, [
                                  createVNode(_component_Button, {
                                    onClick: ($event) => handleAddSkill(item),
                                    variant: "ghost",
                                    type: "button",
                                    class: "hover:tw-bg-transparent tw-w-full !tw-justify-start"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "input-container" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Email "),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          type: "url",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).email,
                          "onUpdate:modelValue": ($event) => unref(newData).email = $event,
                          disable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "input-container" }, [
                        createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Numero de tel\xE9fono "),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          size: "sm",
                          class: "input-custom-outline search-input-border",
                          modelValue: unref(newData).phone,
                          "onUpdate:modelValue": ($event) => unref(newData).phone = $event,
                          type: "tel"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("label", { class: "tw-text-sm tw-font-extralight tw-text-primary tw-block tw-mb-4" }, " Conexiones "),
                      createVNode("div", { class: "tw-grid tw-grid-cols-2 tw-gap-4" }, [
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).facebook,
                          "onUpdate:modelValue": ($event) => unref(newData).facebook = $event,
                          label: "Facebook"
                        }, {
                          prepend: withCtx(() => [
                            createTextVNode("F")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).twitter,
                          "onUpdate:modelValue": ($event) => unref(newData).twitter = $event,
                          label: "Twitter"
                        }, {
                          prepend: withCtx(() => [
                            createTextVNode("X")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_InputCPA, {
                          outlined: "",
                          dark: "",
                          class: "input-custom-outline tw-mb-3 search-input-border",
                          modelValue: unref(newData).linkedin,
                          "onUpdate:modelValue": ($event) => unref(newData).linkedin = $event,
                          label: "Linkedin"
                        }, {
                          prepend: withCtx(() => [
                            createTextVNode("L")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_separator),
                  createVNode(_component_q_card_actions, {
                    class: "tw-sticky tw-z-40 tw-bottom-0",
                    align: "right"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_q_btn, {
                        flat: "",
                        label: "Cancelar",
                        color: "primary",
                        class: "!tw-text-primary"
                      }, null, 512), [
                        [_directive_close_popup]
                      ]),
                      createVNode(_component_Button, {
                        onClick: handleSaveInfo,
                        class: "tw-ml-5 tw-font-semibold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Guardar ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/ProfileEdit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9b4b50e8"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileChangeProfileImage",
  __ssrInlineRender: true,
  props: {
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    modelValue: { type: [Boolean, null] },
    persistent: { type: Boolean },
    noEscDismiss: { type: Boolean },
    noBackdropDismiss: { type: Boolean },
    noRouteDismiss: { type: Boolean },
    autoClose: { type: Boolean },
    seamless: { type: Boolean },
    backdropFilter: {},
    maximized: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    position: {},
    square: { type: Boolean },
    noRefocus: { type: Boolean },
    noFocus: { type: Boolean },
    noShake: { type: Boolean },
    allowFocusOutside: { type: Boolean },
    "onUpdate:modelValue": { type: Function },
    onShow: { type: Function },
    onBeforeShow: { type: Function },
    onHide: { type: Function },
    onBeforeHide: { type: Function },
    onShake: { type: Function },
    onEscapeKey: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const authStore = useAuthStore();
    const refForm = ref();
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.modelValue
    });
    const dataToSave = reactive({
      files: void 0
    });
    async function sendImg() {
      var _a;
      try {
        const is_valid = await refForm.value.validate();
        if (!is_valid) return;
        if (dataToSave.files && ((_a = dataToSave.files) == null ? void 0 : _a.length) > 0) {
          const file = dataToSave.files["0"];
          await authStore.changeProfileImage(file);
        }
      } catch (erro) {
        console.log(erro);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_dialog = __nuxt_component_0;
      const _component_q_card = __nuxt_component_1;
      const _component_q_card_section = __nuxt_component_2;
      const _component_q_form = __nuxt_component_1$1;
      const _component_Dropzone = __nuxt_component_5;
      const _component_q_card_actions = __nuxt_component_7;
      const _component_q_btn = __nuxt_component_8;
      const _component_Button = _sfc_main$4;
      const _directive_close_popup = __q_directive_0;
      _push(ssrRenderComponent(_component_q_dialog, mergeProps({
        modelValue: unref(modelValue),
        "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
        "transition-show": "fade",
        "transition-hide": "fade"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_card, {
              class: "card-edit !tw-rounded-lg",
              style: { "max-width": "80vw" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_card_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="tw-text-lg tw-font-semibold tw-text-white" data-v-03c4d10d${_scopeId3}> Editar Perfil </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Editar Perfil ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_section, { class: "q-pt-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_form, {
                          class: "tw-text-white lg:tw-min-w-[36rem]",
                          onSubmit: sendImg,
                          ref_key: "refForm",
                          ref: refForm
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<label class="tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" data-v-03c4d10d${_scopeId4}> selecciona la imagen del perfil </label>`);
                              _push5(ssrRenderComponent(_component_Dropzone, {
                                modelValue: unref(dataToSave).files,
                                "onUpdate:modelValue": ($event) => unref(dataToSave).files = $event
                              }, {
                                title: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="tw-flex tw-flex-col tw-items-center tw-justify-center" data-v-03c4d10d${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(Paperclip), {
                                      size: 50,
                                      class: "tw-mb-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<p class="tw-text-base tw-mb-3" data-v-03c4d10d${_scopeId5}>${ssrInterpolate(unref(dataToSave).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg"))}</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                        createVNode(unref(Paperclip), {
                                          size: 50,
                                          class: "tw-mb-3"
                                        }),
                                        createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(dataToSave).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                      ])
                                    ];
                                  }
                                }),
                                subtitle: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (unref(dataToSave).files) {
                                      _push6(`<p class="tw-text-xs tw-text-center" data-v-03c4d10d${_scopeId5}><!--[-->`);
                                      ssrRenderList(unref(dataToSave).files, (file, index) => {
                                        _push6(`<span class="tw-mr-2" data-v-03c4d10d${_scopeId5}>${ssrInterpolate(file.name)}</span>`);
                                      });
                                      _push6(`<!--]--></p>`);
                                    } else {
                                      _push6(`<p class="tw-text-xs tw-text-center" data-v-03c4d10d${_scopeId5}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description"))}</p>`);
                                    }
                                  } else {
                                    return [
                                      unref(dataToSave).files ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "tw-text-xs tw-text-center"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(dataToSave).files, (file, index) => {
                                          return openBlock(), createBlock("span", {
                                            class: "tw-mr-2",
                                            key: index
                                          }, toDisplayString(file.name), 1);
                                        }), 128))
                                      ])) : (openBlock(), createBlock("p", {
                                        key: 1,
                                        class: "tw-text-xs tw-text-center"
                                      }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " selecciona la imagen del perfil "),
                                createVNode(_component_Dropzone, {
                                  modelValue: unref(dataToSave).files,
                                  "onUpdate:modelValue": ($event) => unref(dataToSave).files = $event
                                }, {
                                  title: withCtx(() => [
                                    createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                      createVNode(unref(Paperclip), {
                                        size: 50,
                                        class: "tw-mb-3"
                                      }),
                                      createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(dataToSave).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                    ])
                                  ]),
                                  subtitle: withCtx(() => [
                                    unref(dataToSave).files ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "tw-text-xs tw-text-center"
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(dataToSave).files, (file, index) => {
                                        return openBlock(), createBlock("span", {
                                          class: "tw-mr-2",
                                          key: index
                                        }, toDisplayString(file.name), 1);
                                      }), 128))
                                    ])) : (openBlock(), createBlock("p", {
                                      key: 1,
                                      class: "tw-text-xs tw-text-center"
                                    }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_form, {
                            class: "tw-text-white lg:tw-min-w-[36rem]",
                            onSubmit: withModifiers(sendImg, ["prevent", "stop"]),
                            ref_key: "refForm",
                            ref: refForm
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " selecciona la imagen del perfil "),
                              createVNode(_component_Dropzone, {
                                modelValue: unref(dataToSave).files,
                                "onUpdate:modelValue": ($event) => unref(dataToSave).files = $event
                              }, {
                                title: withCtx(() => [
                                  createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                    createVNode(unref(Paperclip), {
                                      size: 50,
                                      class: "tw-mb-3"
                                    }),
                                    createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(dataToSave).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                  ])
                                ]),
                                subtitle: withCtx(() => [
                                  unref(dataToSave).files ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "tw-text-xs tw-text-center"
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(dataToSave).files, (file, index) => {
                                      return openBlock(), createBlock("span", {
                                        class: "tw-mr-2",
                                        key: index
                                      }, toDisplayString(file.name), 1);
                                    }), 128))
                                  ])) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "tw-text-xs tw-text-center"
                                  }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_actions, { align: "right" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, mergeProps({
                          flat: "",
                          label: "Cancelar",
                          class: "!tw-text-primary"
                        }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: sendImg,
                          class: "tw-ml-5 tw-font-semibold"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Guardar foto `);
                            } else {
                              return [
                                createTextVNode(" Guardar foto ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          withDirectives(createVNode(_component_q_btn, {
                            flat: "",
                            label: "Cancelar",
                            class: "!tw-text-primary"
                          }, null, 512), [
                            [_directive_close_popup]
                          ]),
                          createVNode(_component_Button, {
                            onClick: sendImg,
                            class: "tw-ml-5 tw-font-semibold"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Guardar foto ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_card_section, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Editar Perfil ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                      default: withCtx(() => [
                        createVNode(_component_q_form, {
                          class: "tw-text-white lg:tw-min-w-[36rem]",
                          onSubmit: withModifiers(sendImg, ["prevent", "stop"]),
                          ref_key: "refForm",
                          ref: refForm
                        }, {
                          default: withCtx(() => [
                            createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " selecciona la imagen del perfil "),
                            createVNode(_component_Dropzone, {
                              modelValue: unref(dataToSave).files,
                              "onUpdate:modelValue": ($event) => unref(dataToSave).files = $event
                            }, {
                              title: withCtx(() => [
                                createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                  createVNode(unref(Paperclip), {
                                    size: 50,
                                    class: "tw-mb-3"
                                  }),
                                  createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(dataToSave).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                                ])
                              ]),
                              subtitle: withCtx(() => [
                                unref(dataToSave).files ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "tw-text-xs tw-text-center"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(dataToSave).files, (file, index) => {
                                    return openBlock(), createBlock("span", {
                                      class: "tw-mr-2",
                                      key: index
                                    }, toDisplayString(file.name), 1);
                                  }), 128))
                                ])) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "tw-text-xs tw-text-center"
                                }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_card_actions, { align: "right" }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_q_btn, {
                          flat: "",
                          label: "Cancelar",
                          class: "!tw-text-primary"
                        }, null, 512), [
                          [_directive_close_popup]
                        ]),
                        createVNode(_component_Button, {
                          onClick: sendImg,
                          class: "tw-ml-5 tw-font-semibold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Guardar foto ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_card, {
                class: "card-edit !tw-rounded-lg",
                style: { "max-width": "80vw" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_card_section, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "tw-text-lg tw-font-semibold tw-text-white" }, " Editar Perfil ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_card_section, { class: "q-pt-none" }, {
                    default: withCtx(() => [
                      createVNode(_component_q_form, {
                        class: "tw-text-white lg:tw-min-w-[36rem]",
                        onSubmit: withModifiers(sendImg, ["prevent", "stop"]),
                        ref_key: "refForm",
                        ref: refForm
                      }, {
                        default: withCtx(() => [
                          createVNode("label", { class: "tw-font-semibold tw-text-[.95rem] tw-mb-3 tw-block tw-text-base tw-mt-10" }, " selecciona la imagen del perfil "),
                          createVNode(_component_Dropzone, {
                            modelValue: unref(dataToSave).files,
                            "onUpdate:modelValue": ($event) => unref(dataToSave).files = $event
                          }, {
                            title: withCtx(() => [
                              createVNode("div", { class: "tw-flex tw-flex-col tw-items-center tw-justify-center" }, [
                                createVNode(unref(Paperclip), {
                                  size: 50,
                                  class: "tw-mb-3"
                                }),
                                createVNode("p", { class: "tw-text-base tw-mb-3" }, toDisplayString(unref(dataToSave).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                              ])
                            ]),
                            subtitle: withCtx(() => [
                              unref(dataToSave).files ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "tw-text-xs tw-text-center"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(dataToSave).files, (file, index) => {
                                  return openBlock(), createBlock("span", {
                                    class: "tw-mr-2",
                                    key: index
                                  }, toDisplayString(file.name), 1);
                                }), 128))
                              ])) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "tw-text-xs tw-text-center"
                              }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_card_actions, { align: "right" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_q_btn, {
                        flat: "",
                        label: "Cancelar",
                        class: "!tw-text-primary"
                      }, null, 512), [
                        [_directive_close_popup]
                      ]),
                      createVNode(_component_Button, {
                        onClick: sendImg,
                        class: "tw-ml-5 tw-font-semibold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Guardar foto ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/ProfileChangeProfileImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProfileChangeProfileImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-03c4d10d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "me",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const user = computed(() => auth.user);
    const extraFields = computed(() => {
      var _a;
      return (_a = auth.fullUser) == null ? void 0 : _a.extraFields;
    });
    const description = computed(() => auth.userDescription);
    const socialMedia = computed(() => auth.userSocialMedia);
    const experiences = computed(
      () => {
        var _a2;
        var _a, _b;
        return (_a2 = (_b = (_a = auth.user) == null ? void 0 : _a.information) == null ? void 0 : _b.filter((item) => item.type === "experience")) != null ? _a2 : [];
      }
    );
    const show_modal_editSkills = ref(false);
    const show_modal_editPhoto = ref(false);
    const show_modal_addExperience = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_client_only = __nuxt_component_0$1;
      const _component_Button = _sfc_main$4;
      const _component_Card = _sfc_main$2$1;
      const _component_RatingIndicator = _sfc_main$5;
      const _component_CardExperience = __nuxt_component_4;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$6;
      const _component_CardContent = _sfc_main$7;
      const _component_CardFooter = _sfc_main$1$2;
      const _component_ModalsAddExperience = __nuxt_component_9;
      _push(`<!--[--><div class="tw-mt-20" data-v-9100ae6f><div class="tw-bg-gray-100 tw-h-64 img-profile" data-v-9100ae6f></div><div class="tw-container" data-v-9100ae6f><div class="tw-flex tw-mt-5" data-v-9100ae6f><div class="tw-basis-64 tw-relative" data-v-9100ae6f><div class="img-container" data-v-9100ae6f>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => show_modal_editPhoto.value = true,
        type: "button",
        variant: "outline",
        class: "tw-border-none profile-btn !tw-p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SquarePenIcon), { size: 20 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SquarePenIcon), { size: 20 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="tw-grow tw-border-b tw-border-[hsla(0, 0%, 90%, 1)]" data-v-9100ae6f><h2 class="tw-mb-0 tw-w-max tw-px-4 tw-py-3 tw-border-b-4 tw-text-xl tw-font-normal profile-title" data-v-9100ae6f> Perfil del usuario </h2></div></div><div class="tw-mt-10 tw-flex tw-items-center tw-gap-4" data-v-9100ae6f><h3 class="tw-font-bold tw-text-4xl" data-v-9100ae6f>${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.firstName)} ${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.lastName)}</h3><p class="tw-text-muted-custom tw-text-3xl tw-font-light" data-v-9100ae6f>${ssrInterpolate((_c = unref(user)) == null ? void 0 : _c.email)}</p><div class="tw-grow" data-v-9100ae6f></div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        variant: "outline",
        onClick: unref(auth).logout,
        class: "tw-border-none profile-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        variant: "outline",
        class: "tw-border-none profile-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShareSVG), {
              filled: "",
              class: "tw-text-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ShareSVG), {
                filled: "",
                class: "tw-text-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => show_modal_editSkills.value = true,
        type: "button",
        variant: "outline",
        class: "tw-border-none profile-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SquarePenIcon), {
              size: 15,
              class: "tw-mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Editar `);
          } else {
            return [
              createVNode(unref(SquarePenIcon), {
                size: 15,
                class: "tw-mr-2"
              }),
              createTextVNode(" Editar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tw-flex tw-gap-8 tw-mt-10" data-v-9100ae6f><div class="tw-basis-full lg:tw-flex-1 tw-overflow-hidden tw-pr-4" data-v-9100ae6f><h4 class="tw-text-xl tw-text-muted-custom tw-mb-5" data-v-9100ae6f>Descripci\xF3n</h4><p class="tw-text-xl" data-v-9100ae6f>${ssrInterpolate(unref(description))}</p><h4 class="tw-text-xl tw-text-black tw-font-bold tw-mb-10" data-v-9100ae6f>`);
      _push(ssrRenderComponent(unref(StarSVG), { class: "tw-inline-block tw-text-black tw-mr-5" }, null, _parent));
      _push(` 0.0 - 0 Reviews </h4><div data-v-9100ae6f>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-max-w-72 tw-py-3 tw-px-6 tw-mb-2 xl:tw-translate-x-1/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-lg tw-mr-1",
              rating: 5
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-mt-2 tw-flex tw-gap-3" data-v-9100ae6f${_scopeId}><div class="tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" data-v-9100ae6f${_scopeId}></div><div class="tw-flex-grow" data-v-9100ae6f${_scopeId}><div class="tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" data-v-9100ae6f${_scopeId}></div><div class="tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" data-v-9100ae6f${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode(_component_RatingIndicator, {
                starClass: "tw-text-lg tw-mr-1",
                rating: 5
              }),
              createVNode("div", { class: "tw-mt-2 tw-flex tw-gap-3" }, [
                createVNode("div", { class: "tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" }),
                createVNode("div", { class: "tw-flex-grow" }, [
                  createVNode("div", { class: "tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" }),
                  createVNode("div", { class: "tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "tw-max-w-72 tw-py-3 tw-px-6 tw-mb-2 xl:tw-transform translate-x-custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-lg tw-mr-1",
              rating: 5
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-mt-2 tw-flex tw-gap-3" data-v-9100ae6f${_scopeId}><div class="tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" data-v-9100ae6f${_scopeId}></div><div class="tw-flex-grow" data-v-9100ae6f${_scopeId}><div class="tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" data-v-9100ae6f${_scopeId}></div><div class="tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" data-v-9100ae6f${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode(_component_RatingIndicator, {
                starClass: "tw-text-lg tw-mr-1",
                rating: 5
              }),
              createVNode("div", { class: "tw-mt-2 tw-flex tw-gap-3" }, [
                createVNode("div", { class: "tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" }),
                createVNode("div", { class: "tw-flex-grow" }, [
                  createVNode("div", { class: "tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" }),
                  createVNode("div", { class: "tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "tw-max-w-72 tw-py-3 tw-px-6 tw-mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RatingIndicator, {
              starClass: "tw-text-lg tw-mr-1",
              rating: 5
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-mt-2 tw-flex tw-gap-3" data-v-9100ae6f${_scopeId}><div class="tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" data-v-9100ae6f${_scopeId}></div><div class="tw-flex-grow" data-v-9100ae6f${_scopeId}><div class="tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" data-v-9100ae6f${_scopeId}></div><div class="tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" data-v-9100ae6f${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode(_component_RatingIndicator, {
                starClass: "tw-text-lg tw-mr-1",
                rating: 5
              }),
              createVNode("div", { class: "tw-mt-2 tw-flex tw-gap-3" }, [
                createVNode("div", { class: "tw-bg-muted-light tw-h-10 tw-w-10 tw-rounded" }),
                createVNode("div", { class: "tw-flex-grow" }, [
                  createVNode("div", { class: "tw-bg-muted-light tw-w-full tw-h-2 tw-rounded-md tw-mb-3" }),
                  createVNode("div", { class: "tw-bg-muted-light tw-w-1/2 tw-h-2 tw-rounded-md" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:tw-w-1/2" data-v-9100ae6f><p class="tw-text-xl tw-text-muted-custom tw-font-light tw-my-10 tw-text-center" data-v-9100ae6f> Sin reviews </p></div><div class="tw-flex tw-mt-32 tw-mb-10" data-v-9100ae6f><h4 class="tw-font-bold tw-text-4xl" data-v-9100ae6f>Experiencia</h4><div class="tw-grow" data-v-9100ae6f></div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => show_modal_addExperience.value = true,
        type: "button",
        variant: "outline",
        class: "tw-border-none profile-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SquarePenIcon), {
              size: 15,
              class: "tw-mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Agregar experiencia `);
          } else {
            return [
              createVNode(unref(SquarePenIcon), {
                size: 15,
                class: "tw-mr-2"
              }),
              createTextVNode(" Agregar experiencia ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-9100ae6f><!--[-->`);
      ssrRenderList(unref(experiences), (experience) => {
        var _a2, _b2;
        _push(ssrRenderComponent(_component_CardExperience, {
          class: "tw-mb-3",
          key: `experience_user${experience.id}`,
          img: (_b2 = (_a2 = experience.mediaFiles) == null ? void 0 : _a2.mainimage) == null ? void 0 : _b2.path,
          id: experience.id,
          init: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).parseStringToDate(experience.options.dateInit),
          end: experience.options.dateEnd ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).parseStringToDate(experience.options.dateEnd) : void 0,
          place: experience.options.place
        }, {
          skill: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(experience.options.skill)}`);
            } else {
              return [
                createTextVNode(toDisplayString(experience.options.skill), 1)
              ];
            }
          }),
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(experience.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(experience.title), 1)
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(experience.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(experience.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><aside class="tw-basis-full lg:tw-flex-none tw-w-80 tw-pb-20" data-v-9100ae6f>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-py-3 tw-px-6 tw-sticky tw-top-28 tw-bottom-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "tw-h-full tw-justify-center tw-border-b-2 tw-border-muted-light !tw-p-2 !tw-pb-4 !tw-rounded-4xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "!tw-leading-normal tw-font-normal tw-text-base tw-text-muted-custom" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Datos de contacto `);
                      } else {
                        return [
                          createTextVNode(" Datos de contacto ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "!tw-leading-normal tw-font-normal tw-text-base tw-text-muted-custom" }, {
                      default: withCtx(() => [
                        createTextVNode(" Datos de contacto ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "!tw-py-5 !tw-px-0 tw-border-b-2 tw-border-muted-light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
                if (_push3) {
                  _push3(`<div class="tw-flex tw-items-center tw-mb-4" data-v-9100ae6f${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-9100ae6f${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(FactoryIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-9100ae6f${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-9100ae6f${_scopeId2}> Nombre de la empresa </p><p class="tw-mb-0 tw-text-xs" data-v-9100ae6f${_scopeId2}>${ssrInterpolate((_b2 = (_a2 = unref(extraFields)) == null ? void 0 : _a2.companyName) == null ? void 0 : _b2.value)}</p></div></div><div class="tw-flex tw-items-center tw-mb-4" data-v-9100ae6f${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-9100ae6f${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(PhoneIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-9100ae6f${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-9100ae6f${_scopeId2}>Tel\xE9fono</p><p class="tw-mb-0 tw-text-xs" data-v-9100ae6f${_scopeId2}>${ssrInterpolate((_d = (_c2 = unref(extraFields)) == null ? void 0 : _c2.phone) == null ? void 0 : _d.value)}</p></div></div><div class="tw-flex tw-items-center tw-mb-4" data-v-9100ae6f${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-9100ae6f${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MailIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-9100ae6f${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-9100ae6f${_scopeId2}>Email</p><p class="tw-mb-0 tw-text-xs" data-v-9100ae6f${_scopeId2}>${ssrInterpolate((_e = unref(user)) == null ? void 0 : _e.email)}</p></div></div><div class="tw-flex tw-items-center tw-mb-4" data-v-9100ae6f${_scopeId2}><div class="tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" data-v-9100ae6f${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MapPinIcon), {
                    class: "tw-text-black",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="tw-text-black tw-ml-3" data-v-9100ae6f${_scopeId2}><p class="tw-mb-1 tw-text-sm tw-font-bold" data-v-9100ae6f${_scopeId2}>Ubicaci\xF3n</p><p class="tw-mb-0 tw-text-xs" data-v-9100ae6f${_scopeId2}>${ssrInterpolate((_g = (_f = unref(extraFields)) == null ? void 0 : _f.place) == null ? void 0 : _g.value)}</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(FactoryIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, " Nombre de la empresa "),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_i = (_h = unref(extraFields)) == null ? void 0 : _h.companyName) == null ? void 0 : _i.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(PhoneIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Tel\xE9fono"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_k = (_j = unref(extraFields)) == null ? void 0 : _j.phone) == null ? void 0 : _k.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MailIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Email"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_l = unref(user)) == null ? void 0 : _l.email), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MapPinIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Ubicaci\xF3n"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_n = (_m = unref(extraFields)) == null ? void 0 : _m.place) == null ? void 0 : _n.value), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardFooter, { class: "tw-flex tw-gap-4 tw-justify-center !tw-p-0 !tw-pt-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(socialMedia).facebook) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).facebook)} class="social-icon facebook" data-v-9100ae6f${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(FacebookSVG), { class: "tw-text-white tw-text-3xl" }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(socialMedia).twitter) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).twitter)} class="social-icon !tw-bg-primary" data-v-9100ae6f${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(TwitterSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-3xl"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(socialMedia).linkedin) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).linkedin)} class="social-icon !tw-bg-primary" data-v-9100ae6f${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(LinkedinSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-2xl"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(socialMedia).web) {
                    _push3(`<a${ssrRenderAttr("href", unref(socialMedia).web)} class="social-icon !tw-bg-primary" data-v-9100ae6f${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(GlobeIcon), {
                      size: 30,
                      class: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</a>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(socialMedia).facebook ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: unref(socialMedia).facebook,
                      class: "social-icon facebook"
                    }, [
                      createVNode(unref(FacebookSVG), { class: "tw-text-white tw-text-3xl" })
                    ], 8, ["href"])) : createCommentVNode("", true),
                    unref(socialMedia).twitter ? (openBlock(), createBlock("a", {
                      key: 1,
                      href: unref(socialMedia).twitter,
                      class: "social-icon !tw-bg-primary"
                    }, [
                      createVNode(unref(TwitterSVG), {
                        filled: "",
                        class: "tw-text-white tw-text-3xl"
                      })
                    ], 8, ["href"])) : createCommentVNode("", true),
                    unref(socialMedia).linkedin ? (openBlock(), createBlock("a", {
                      key: 2,
                      href: unref(socialMedia).linkedin,
                      class: "social-icon !tw-bg-primary"
                    }, [
                      createVNode(unref(LinkedinSVG), {
                        filled: "",
                        class: "tw-text-white tw-text-2xl"
                      })
                    ], 8, ["href"])) : createCommentVNode("", true),
                    unref(socialMedia).web ? (openBlock(), createBlock("a", {
                      key: 3,
                      href: unref(socialMedia).web,
                      class: "social-icon !tw-bg-primary"
                    }, [
                      createVNode(unref(GlobeIcon), {
                        size: 30,
                        class: ""
                      })
                    ], 8, ["href"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "tw-h-full tw-justify-center tw-border-b-2 tw-border-muted-light !tw-p-2 !tw-pb-4 !tw-rounded-4xl" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "!tw-leading-normal tw-font-normal tw-text-base tw-text-muted-custom" }, {
                    default: withCtx(() => [
                      createTextVNode(" Datos de contacto ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "!tw-py-5 !tw-px-0 tw-border-b-2 tw-border-muted-light" }, {
                default: withCtx(() => {
                  var _a2, _b2, _c2, _d, _e, _f, _g;
                  return [
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(FactoryIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, " Nombre de la empresa "),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_b2 = (_a2 = unref(extraFields)) == null ? void 0 : _a2.companyName) == null ? void 0 : _b2.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(PhoneIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Tel\xE9fono"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_d = (_c2 = unref(extraFields)) == null ? void 0 : _c2.phone) == null ? void 0 : _d.value), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MailIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Email"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_e = unref(user)) == null ? void 0 : _e.email), 1)
                      ])
                    ]),
                    createVNode("div", { class: "tw-flex tw-items-center tw-mb-4" }, [
                      createVNode("div", { class: "tw-border-r-2 tw-border-muted-light tw-px-3 tw-py-5" }, [
                        createVNode(unref(MapPinIcon), {
                          class: "tw-text-black",
                          size: 20
                        })
                      ]),
                      createVNode("div", { class: "tw-text-black tw-ml-3" }, [
                        createVNode("p", { class: "tw-mb-1 tw-text-sm tw-font-bold" }, "Ubicaci\xF3n"),
                        createVNode("p", { class: "tw-mb-0 tw-text-xs" }, toDisplayString((_g = (_f = unref(extraFields)) == null ? void 0 : _f.place) == null ? void 0 : _g.value), 1)
                      ])
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_CardFooter, { class: "tw-flex tw-gap-4 tw-justify-center !tw-p-0 !tw-pt-3" }, {
                default: withCtx(() => [
                  unref(socialMedia).facebook ? (openBlock(), createBlock("a", {
                    key: 0,
                    href: unref(socialMedia).facebook,
                    class: "social-icon facebook"
                  }, [
                    createVNode(unref(FacebookSVG), { class: "tw-text-white tw-text-3xl" })
                  ], 8, ["href"])) : createCommentVNode("", true),
                  unref(socialMedia).twitter ? (openBlock(), createBlock("a", {
                    key: 1,
                    href: unref(socialMedia).twitter,
                    class: "social-icon !tw-bg-primary"
                  }, [
                    createVNode(unref(TwitterSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-3xl"
                    })
                  ], 8, ["href"])) : createCommentVNode("", true),
                  unref(socialMedia).linkedin ? (openBlock(), createBlock("a", {
                    key: 2,
                    href: unref(socialMedia).linkedin,
                    class: "social-icon !tw-bg-primary"
                  }, [
                    createVNode(unref(LinkedinSVG), {
                      filled: "",
                      class: "tw-text-white tw-text-2xl"
                    })
                  ], 8, ["href"])) : createCommentVNode("", true),
                  unref(socialMedia).web ? (openBlock(), createBlock("a", {
                    key: 3,
                    href: unref(socialMedia).web,
                    class: "social-icon !tw-bg-primary"
                  }, [
                    createVNode(unref(GlobeIcon), {
                      size: 30,
                      class: ""
                    })
                  ], 8, ["href"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside></div></div></div>`);
      _push(ssrRenderComponent(ProfileEdit, {
        modelValue: unref(show_modal_editSkills),
        "onUpdate:modelValue": ($event) => isRef(show_modal_editSkills) ? show_modal_editSkills.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(ProfileChangeProfileImage, {
        modelValue: unref(show_modal_editPhoto),
        "onUpdate:modelValue": ($event) => isRef(show_modal_editPhoto) ? show_modal_editPhoto.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_ModalsAddExperience, {
        modelValue: unref(show_modal_addExperience),
        "onUpdate:modelValue": ($event) => isRef(show_modal_addExperience) ? show_modal_addExperience.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profiles/me.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const me = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9100ae6f"]]);

export { me as default };
//# sourceMappingURL=me-B4GmPSPY.mjs.map
