import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as _sfc_main$1 } from './index-BUfu69CW.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { _ as __nuxt_component_6 } from './Select-C7pQfx6s.mjs';
import { _ as __nuxt_component_3 } from './Textarea-DeRyVDAj.mjs';
import { _ as _sfc_main$2 } from './Checkbox-CeQigKqu.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString } from 'vue';
import { u as useCategoryStore } from './useCategories-iDCjhnnL.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { D as DeskLandingSVG } from './desk-landing-ClfVh3Rv.mjs';
import { S as SolarPanelSVG, D as DevicesPcSVG, B as BrushSVG, P as PacManSVG } from './pacman-YLhGBYIX.mjs';
import { ArrowRightIcon, PlayIcon, GlobeIcon, ShuffleIcon, Laptop2Icon, MegaphoneIcon, MessagesSquareIcon, FlagIcon, BriefcaseBusinessIcon } from 'lucide-vue-next';
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
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import '../_/vm.mjs';
import '../_/Ripple.mjs';
import '../_/use-router-link.mjs';
import '../_/QDialog.mjs';
import './useAuth-CRsBI6Hp.mjs';
import './helper-C0GmhoMX.mjs';
import './nuxt-icon-1v0WEHYY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "info",
  __ssrInlineRender: true,
  setup(__props) {
    const categoriesStore = useCategoryStore();
    const contactData = ref({
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      lineService: "",
      message: "",
      agreement: false
    });
    const refForm = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Button = _sfc_main$1;
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_Select = __nuxt_component_6;
      const _component_Textarea = __nuxt_component_3;
      const _component_Checkbox = _sfc_main$2;
      _push(`<!--[--><div class="tw-h-svh tw-relative" data-v-55f6730f><div class="tw-absolute tw-inset-0 tw-z-[-1] tw-bg-primary tw-opacity-10" data-v-55f6730f></div><div class="tw-container tw-flex tw-justify-center tw-items-center tw-h-[100%] tw-pt-24" data-v-55f6730f><div class="tw-flex tw-justify-between tw-flex-col lg:tw-flex-row" data-v-55f6730f><div class="tw-basis-5/12 tw-flex tw-flex-col tw-justify-center" data-v-55f6730f><h1 class="tw-text-black tw-font-light tw-text-[30px] sm:tw-text-[45px] md:tw-text-[55px] tw-leading-tight tw-mb-12" data-v-55f6730f> Impulsando la <span class="tw-font-bold tw-block" data-v-55f6730f>Innovaci\xF3n Tecnol\xF3gica</span> del Tolima </h1><p class="tw-text-2xl tw-font-light h1 tw-leading-tight tw-mb-20" data-v-55f6730f> El Cl\xFAster TIC del Tolima es una comunidad que une talento,empresas y tecnolog\xEDa para transformar la regi\xF3n y ofrecer soluciones exportables al mundo </p><div class="tw-flex tw-mb-10 lg:tw-mb-0" data-v-55f6730f>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: "ghost",
              class: "md:tw-text-2xl hover:tw-bg-transparent hover:tw-underline !tw-pl-0 !tw-font-light h2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Conoce nuestras soluciones `);
                  _push3(ssrRenderComponent(unref(ArrowRightIcon), { class: "tw-ml-3" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Conoce nuestras soluciones "),
                    createVNode(unref(ArrowRightIcon), { class: "tw-ml-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                variant: "ghost",
                class: "md:tw-text-2xl hover:tw-bg-transparent hover:tw-underline !tw-pl-0 !tw-font-light h2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Conoce nuestras soluciones "),
                  createVNode(unref(ArrowRightIcon), { class: "tw-ml-3" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="tw-basis-3/12 lg:tw-basis-6/12" data-v-55f6730f><div class="tw-relative" data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(DeskLandingSVG), {
        filled: "",
        class: "tw-text-9xl lg:tw-text-[40rem] !tw-mb-0"
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="tw-container tw-py-24" data-v-55f6730f><div class="tw-flex tw-flex-col tw-gap-20 lg:tw-flex-row" data-v-55f6730f><div class="tw-basis-5/12 tw-pl-24" data-v-55f6730f><h2 class="tw-text-black tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative" data-v-55f6730f> \xBFQue es el cluster de Tolima? `);
      _push(ssrRenderComponent(unref(PlayIcon), {
        size: 30,
        class: "tw-absolute tw-text-primary -tw-left-24 tw-top-1/2 -tw-translate-y-1/3"
      }, null, _parent));
      _push(`</h2><p class="tw-text-lg h3 tw-mb-5 tw-font-bold" data-v-55f6730f>Descripci\xF3n general</p><p class="tw-text-md tw-font-light tw-leading-tight tw-mb-10" data-v-55f6730f> El Cl\xFAster TIC del Tolima es una comunidad que une talento,empresas y tecnolog\xEDa para transformar la regi\xF3n y ofrecer soluciones exportables al mundo </p>`);
      _push(ssrRenderComponent(_component_Button, {
        size: "lg",
        class: "tw-text-lg md:tw-text-xl\\!tw-font-normal h2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conoce nuestra estrategia `);
          } else {
            return [
              createTextVNode(" Conoce nuestra estrategia ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="tw-basis-3/12 lg:tw-basis-6/12" data-v-55f6730f><div class="tw-w-full tw-max-w-[880px] tw-pb-[56.25%] tw-rounded-3xl tw-bg-black tw-relative" data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(PlayIcon), {
        size: 120,
        class: "!lg:tw-text-9xl tw-text-primary tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2"
      }, null, _parent));
      _push(`</div></div></div></div><div class="tw-bg-black tw-py-20" data-v-55f6730f><div class="tw-container" data-v-55f6730f><h2 class="tw-text-white tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative tw-pl-24" data-v-55f6730f> \xBFQue es el cluster de Tolima? `);
      _push(ssrRenderComponent(unref(PlayIcon), {
        size: 30,
        class: "tw-absolute tw-text-primary -tw-left-0 tw-top-1/2 -tw-translate-y-1/3"
      }, null, _parent));
      _push(`</h2><div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 what-its-cluster-details" data-v-55f6730f><!--[-->`);
      ssrRenderList(unref(categoriesStore).parentCategories, (category) => {
        _push(`<div class="tw-flex tw-items-center tw-mb-4" data-v-55f6730f><div class="tw-h-full tw-w-full" data-v-55f6730f><div class="category-header" data-v-55f6730f><span data-v-55f6730f>`);
        if (category.id === 1) {
          _push(ssrRenderComponent(unref(SolarPanelSVG), {
            class: "tw-text-4xl",
            filled: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (category.id === 2) {
          _push(ssrRenderComponent(unref(DevicesPcSVG), {
            class: "tw-text-4xl",
            filled: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (category.id === 3) {
          _push(ssrRenderComponent(unref(BrushSVG), {
            class: "tw-text-4xl",
            filled: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (category.id === 4) {
          _push(ssrRenderComponent(unref(PacManSVG), {
            class: "tw-text-4xl",
            filled: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span><h4 data-v-55f6730f>${ssrInterpolate(category.title)}</h4></div>`);
        if (category.children) {
          _push(`<!--[-->`);
          ssrRenderList(category.children, (subCategory) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/categories/${subCategory.id}`,
              key: `sub-category-${subCategory.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(subCategory.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(subCategory.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="tw-bg-white tw-pt-20" data-v-55f6730f><div class="tw-container" data-v-55f6730f><h2 class="tw-font-bold tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative tw-pl-24" data-v-55f6730f> \xBFQue es el cluster de Tolima? `);
      _push(ssrRenderComponent(unref(PlayIcon), {
        size: 30,
        class: "tw-absolute tw-text-primary -tw-left-0 tw-top-1/2 -tw-translate-y-1/3"
      }, null, _parent));
      _push(`</h2><div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 benefits-cluster-details" data-v-55f6730f><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(GlobeIcon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f>Acceso a nuevos mercados internacionales.</p></div><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(ShuffleIcon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f> Colaboraci\xF3n tecnol\xF3gica y oportunidades de co-desarrollo de productos. </p></div><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(Laptop2Icon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f>Participaci\xF3n en mesas de trabajo especializadas.</p></div><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(MegaphoneIcon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f>Acceso a formaci\xF3n y capacitaciones exclusivas.</p></div><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(MessagesSquareIcon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f>Red de contactos y networking con otras empresas del sector.</p></div><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(FlagIcon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f>Apoyo en la internacionalizaci\xF3n de productos y servicios.</p></div><div data-v-55f6730f>`);
      _push(ssrRenderComponent(unref(BriefcaseBusinessIcon), {
        size: 30,
        class: "tw-mb-5 tw-text-primary"
      }, null, _parent));
      _push(`<p data-v-55f6730f> Visibilidad en el portafolio de soluciones exportables del cl\xFAster. </p></div></div></div></div><div class="tw-container tw-max-w-[1000px] tw-mb-5" data-v-55f6730f>`);
      _push(ssrRenderComponent(_component_q_form, {
        class: "tw-pt-40",
        onSubmit: () => {
        },
        ref_key: "refForm",
        ref: refForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="tw-text-black tw-font-light tw-text-center tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative" data-v-55f6730f${_scopeId}> Formemos juntos el <span class="tw-text-primary" data-v-55f6730f${_scopeId}>futuro tecnol\xF3gico</span> de nuestra regi\xF3n. </h2><div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-10" data-v-55f6730f${_scopeId}><div data-v-55f6730f${_scopeId}><label class="tw-font-normal tw-mb-3 tw-block tw-text-base" data-v-55f6730f${_scopeId}> Nombre </label>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              outlined: "",
              rounded: "",
              label: "Nombre",
              class: "tw-mb-3 tw-mt-2",
              modelValue: unref(contactData).firstName,
              "onUpdate:modelValue": ($event) => unref(contactData).firstName = $event,
              "fill-mask": "",
              "reverse-fill-mask": "",
              rules: [(val) => !!val || "El valor es requerido"]
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-55f6730f${_scopeId}><label class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" data-v-55f6730f${_scopeId}> Apellido </label>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              outlined: "",
              rounded: "",
              label: "Apellido",
              class: "tw-mb-3 tw-mt-2",
              modelValue: unref(contactData).lastName,
              "onUpdate:modelValue": ($event) => unref(contactData).lastName = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-55f6730f${_scopeId}><label class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" data-v-55f6730f${_scopeId}> Empresa </label>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              outlined: "",
              rounded: "",
              label: "Empresa",
              class: "tw-mb-3 tw-mt-2",
              modelValue: unref(contactData).company,
              "onUpdate:modelValue": ($event) => unref(contactData).company = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-55f6730f${_scopeId}><label class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" data-v-55f6730f${_scopeId}> Tel\xE9fono </label>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              outlined: "",
              rounded: "",
              label: "Tel\xE9fono",
              class: "tw-mb-3 tw-mt-2",
              mask: "phone",
              modelValue: unref(contactData).phone,
              "onUpdate:modelValue": ($event) => unref(contactData).phone = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div data-v-55f6730f${_scopeId}><label class="tw-font-normal tw-my-3 tw-block tw-text-base tw-whitespace-nowrap" data-v-55f6730f${_scopeId}> Correo electr\xF3nico </label>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              outlined: "",
              rounded: "",
              label: "Correo electr\xF3nico",
              class: "tw-mb-3 tw-mt-2",
              type: "email",
              modelValue: unref(contactData).email,
              "onUpdate:modelValue": ($event) => unref(contactData).email = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-55f6730f${_scopeId}><label class="tw-font-normal tw-my-3 tw-block tw-text-base tw-whitespace-nowrap" data-v-55f6730f${_scopeId}> Linea de servicio </label>`);
            _push2(ssrRenderComponent(_component_Select, {
              class: "tw-w-full",
              outlined: "",
              rounded: "",
              modelValue: unref(contactData).lineService,
              "onUpdate:modelValue": ($event) => unref(contactData).lineService = $event,
              options: []
            }, null, _parent2, _scopeId));
            _push2(`</div><label class="tw-font-normal tw-mb-3 tw-block tw-text-base tw-mt-3" data-v-55f6730f${_scopeId}> Mensaje </label>`);
            _push2(ssrRenderComponent(_component_Textarea, {
              placeholder: "Mensaje",
              modelValue: unref(contactData).message,
              "onUpdate:modelValue": ($event) => unref(contactData).message = $event,
              class: "tw-h-52"
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-flex tw-justify-between tw-mt-10 tw-px-10" data-v-55f6730f${_scopeId}><label class="tw-flex tw-items-center" data-v-55f6730f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkbox, {
              class: "tw-bg-white !tw-border-input",
              checked: unref(contactData).agreement,
              "onUpdate:checked": ($event) => unref(contactData).agreement = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="tw-text-black tw-ml-2" data-v-55f6730f${_scopeId}> Acepto los <a href="#" class="tw-text-primary tw-underline" data-v-55f6730f${_scopeId}> t\xE9rminos y condiciones. </a></span></label>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Enviar propuesta `);
                } else {
                  return [
                    createTextVNode(" Enviar propuesta ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", { class: "tw-text-black tw-font-light tw-text-center tw-text-2xl lg:tw-text-3xl tw-leading-tight tw-mb-24 tw-relative" }, [
                createTextVNode(" Formemos juntos el "),
                createVNode("span", { class: "tw-text-primary" }, "futuro tecnol\xF3gico"),
                createTextVNode(" de nuestra regi\xF3n. ")
              ]),
              createVNode("div", { class: "tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-10" }, [
                createVNode("div", null, [
                  createVNode("label", { class: "tw-font-normal tw-mb-3 tw-block tw-text-base" }, " Nombre "),
                  createVNode(_component_InputCPA, {
                    outlined: "",
                    rounded: "",
                    label: "Nombre",
                    class: "tw-mb-3 tw-mt-2",
                    modelValue: unref(contactData).firstName,
                    "onUpdate:modelValue": ($event) => unref(contactData).firstName = $event,
                    "fill-mask": "",
                    "reverse-fill-mask": "",
                    rules: [(val) => !!val || "El valor es requerido"]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Apellido "),
                  createVNode(_component_InputCPA, {
                    outlined: "",
                    rounded: "",
                    label: "Apellido",
                    class: "tw-mb-3 tw-mt-2",
                    modelValue: unref(contactData).lastName,
                    "onUpdate:modelValue": ($event) => unref(contactData).lastName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Empresa "),
                  createVNode(_component_InputCPA, {
                    outlined: "",
                    rounded: "",
                    label: "Empresa",
                    class: "tw-mb-3 tw-mt-2",
                    modelValue: unref(contactData).company,
                    "onUpdate:modelValue": ($event) => unref(contactData).company = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "tw-font-normal tw-mb-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Tel\xE9fono "),
                  createVNode(_component_InputCPA, {
                    outlined: "",
                    rounded: "",
                    label: "Tel\xE9fono",
                    class: "tw-mb-3 tw-mt-2",
                    mask: "phone",
                    modelValue: unref(contactData).phone,
                    "onUpdate:modelValue": ($event) => unref(contactData).phone = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "tw-font-normal tw-my-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Correo electr\xF3nico "),
                createVNode(_component_InputCPA, {
                  outlined: "",
                  rounded: "",
                  label: "Correo electr\xF3nico",
                  class: "tw-mb-3 tw-mt-2",
                  type: "email",
                  modelValue: unref(contactData).email,
                  "onUpdate:modelValue": ($event) => unref(contactData).email = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "tw-font-normal tw-my-3 tw-block tw-text-base tw-whitespace-nowrap" }, " Linea de servicio "),
                createVNode(_component_Select, {
                  class: "tw-w-full",
                  outlined: "",
                  rounded: "",
                  modelValue: unref(contactData).lineService,
                  "onUpdate:modelValue": ($event) => unref(contactData).lineService = $event,
                  options: []
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("label", { class: "tw-font-normal tw-mb-3 tw-block tw-text-base tw-mt-3" }, " Mensaje "),
              createVNode(_component_Textarea, {
                placeholder: "Mensaje",
                modelValue: unref(contactData).message,
                "onUpdate:modelValue": ($event) => unref(contactData).message = $event,
                class: "tw-h-52"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "tw-flex tw-justify-between tw-mt-10 tw-px-10" }, [
                createVNode("label", { class: "tw-flex tw-items-center" }, [
                  createVNode(_component_Checkbox, {
                    class: "tw-bg-white !tw-border-input",
                    checked: unref(contactData).agreement,
                    "onUpdate:checked": ($event) => unref(contactData).agreement = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("span", { class: "tw-text-black tw-ml-2" }, [
                    createTextVNode(" Acepto los "),
                    createVNode("a", {
                      href: "#",
                      class: "tw-text-primary tw-underline"
                    }, " t\xE9rminos y condiciones. ")
                  ])
                ]),
                createVNode(_component_Button, {
                  type: "submit",
                  class: "tw-text-lg !tw-px-16 tw-py-6 tw-font-semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Enviar propuesta ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const info = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55f6730f"]]);

export { info as default };
//# sourceMappingURL=info-DY-yeTmF.mjs.map
