import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { _ as __nuxt_component_3 } from './Textarea-DeRyVDAj.mjs';
import { _ as _sfc_main$1 } from './index-BUfu69CW.mjs';
import { _ as __nuxt_component_5 } from './Dropzone-DWrgowuh.mjs';
import { _ as __nuxt_component_6 } from './Select-C7pQfx6s.mjs';
import { useSSRContext, defineComponent, ref, computed, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, createCommentVNode, h, createElementBlock, createElementVNode } from 'vue';
import { u as useProjectsStore } from './useProjects-CIpw3REu.mjs';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { XIcon, DollarSignIcon } from 'lucide-vue-next';
import { L as LogoGreenTextSVG } from './logo-green-text-CzNxdslO.mjs';
import { N as NuxtIcon } from './nuxt-icon-1v0WEHYY.mjs';
import { u as useCategoryStore } from './useCategories-iDCjhnnL.mjs';
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
import '../_/vm.mjs';
import 'radix-vue';
import 'class-variance-authority';
import '../_/Ripple.mjs';
import '../_/use-router-link.mjs';
import '../_/QDialog.mjs';
import './useAuth-CRsBI6Hp.mjs';

const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 74 74"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      stroke: "#40FFB7",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M40.14 63.785a37.334 37.334 0 0 1-3.14.965A36.999 36.999 0 0 1 10.792 18.5 37 37 0 0 0 37 9.25 37 37 0 0 0 63.21 18.5a36.994 36.994 0 0 1 1.344 13.86m.197 13.89h-7.708a4.625 4.625 0 0 0 0 9.25h3.083a4.625 4.625 0 1 1 0 9.25h-7.708m6.166 0v3.083m0-24.666v3.083"
    }, null, -1)
  ]));
}
const ShieldDollarSVG = { render() {
  return h(NuxtIcon, { icon: { render: render$1 }, name: "shield-dollar" });
} };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 74 74"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      stroke: "#40FFB7",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M43.167 9.25v12.333a3.083 3.083 0 0 0 3.083 3.084h12.333M43.167 9.25H21.583a6.167 6.167 0 0 0-6.166 6.167V37m27.75-27.75 15.416 15.417m0 0V37M9.25 37h55.5M18.5 49.333V55.5m12.333-6.167v18.5m12.334-18.5V55.5M55.5 49.333v12.334"
    }, null, -1)
  ]));
}
const FileShredderSVG = { render() {
  return h(NuxtIcon, { icon: { render }, name: "file-shredder" });
} };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    let debounceTimeout = null;
    const projectStore = useProjectsStore();
    const categoryStore = useCategoryStore();
    const refForm = ref(null);
    const step = ref(0);
    const categories = computed(() => {
      return categoryStore.categories;
    });
    const stepsTitles = ref([
      {
        title: "projects.create.pages.one.title",
        description: "projects.create.pages.one.description"
      },
      {
        title: "projects.create.pages.two.title",
        description: "projects.create.pages.two.description"
      },
      {
        title: "projects.create.pages.three.title",
        description: ""
      },
      {
        title: "projects.create.pages.four.title",
        description: ""
      }
    ]);
    const currencyOptions = ref(["USD", "COP"]);
    const rangePriceOptions = ref([
      {
        label: "Proyecto muy peque\xF1o ($250 - 750 USD)",
        value: "range_xs",
        description: "Proyecto muy peque\xF1o",
        category: "1",
        min: 250,
        max: 750
      },
      {
        label: "Proyecto peque\xF1o ($750 - 1250 USD)",
        value: "range_sm",
        description: "Proyecto peque\xF1o",
        category: "2",
        min: 750,
        max: 1250
      },
      {
        label: "Proyecto mediano ($1250 - 1750 USD)",
        value: "range_md",
        description: "Proyecto mediano",
        category: "3",
        min: 1250,
        max: 1750
      },
      {
        label: "Proyecto grande ($1750 - 2250 USD)",
        value: "range_lg",
        description: "Proyecto grande",
        category: "4",
        min: 1750,
        max: 2250
      },
      {
        label: "Proyecto muy grande ($2250 - 2750 USD)",
        value: "range_xl",
        description: "Proyecto muy grande",
        category: "5",
        min: 2250,
        max: 2750
      },
      {
        label: "Personalizar proyecto",
        value: "custom",
        description: "Personalizar proyecto",
        category: "6"
      }
    ]);
    const suggestedSkills = ref([]);
    const projectData = reactive({
      name: "",
      description: "",
      files: void 0,
      skills: [],
      searchSkills: "",
      currency: "USD",
      rangePrice: {
        label: "Proyecto muy peque\xF1o ($250 - 750 USD)",
        value: "range_xs",
        description: "Proyecto muy peque\xF1o",
        category: "1",
        min: 250,
        max: 750
      },
      customPrice: 0
    });
    async function create2() {
      var _a, _b;
      try {
        const validateForm = await refForm.value.validate();
        if (!validateForm) return;
        let mainFile;
        const multimedia = [];
        const dataToSend = {
          es: {
            title: projectData.name,
            slug: projectData.name.toLowerCase().replace(/\s/g, "-"),
            description: projectData.description
          },
          min_price: (_a = projectData.rangePrice.value === "custom" ? projectData.customPrice : projectData.rangePrice.min) != null ? _a : 0,
          max_price: (_b = projectData.rangePrice.value === "custom" ? projectData.customPrice : projectData.rangePrice.max) != null ? _b : 0,
          categories: projectData.skills.map((skill) => skill.id)
        };
        if (projectData.files && projectData.files.length > 0) {
          dataToSend.files = projectData.files;
        }
        projectStore.create(dataToSend).then((data) => {
        }).catch((error) => {
          console.error(error);
        });
      } catch (erro) {
        console.log(erro);
      }
    }
    function handleRemoveSkill(index) {
      projectData.skills.splice(index, 1);
    }
    function handleAddSkill(skill) {
      if (projectData.skills.findIndex((s) => s.id === skill.id) >= 0) return;
      projectData.skills.push(skill);
    }
    function handleChangeStep(next_or_prev) {
      let new_step = step.value + next_or_prev;
      if (new_step <= 3 && new_step >= 0) step.value = new_step;
      else if (new_step > 3 && refForm.value) {
        create2();
      }
    }
    function handleEndWrite() {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        searchCategories(projectData.searchSkills);
      }, 500);
    }
    function searchCategories(query) {
      categoryStore.setFilters({ search: query });
      categoryStore.get(1);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      const _component_Textarea = __nuxt_component_3;
      const _component_Button = _sfc_main$1;
      const _component_Dropzone = __nuxt_component_5;
      const _component_Select = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:tw-w-2/3 xl:tw-w-7/12 tw-px-6 sm:tw-px-12" }, _attrs))} data-v-0cd70050><div class="tw-flex tw-flex-col tw-items-center" data-v-0cd70050><div class="tw-mb-8" data-v-0cd70050>`);
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
      _push(`</div>`);
      if (unref(stepsTitles)[unref(step)].title) {
        _push(`<h1 class="tw-text-3xl lg:tw-text-[35px] xl:tw-text-5xl tw-font-extralight tw-text-white tw-mb-6 lg:tw-mb-8" data-v-0cd70050>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang(unref(stepsTitles)[unref(step)].title))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(stepsTitles)[unref(step)].description) {
        _push(`<p class="h2 tw-text-white tw-w-4/6 tw-text-center tw-mb-10 tw-text-[14px] tw-font-extralight" data-v-0cd70050>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang(unref(stepsTitles)[unref(step)].description))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="tw-w-full tw-flex-1" data-v-0cd70050><div class="tw-relative" data-v-0cd70050>`);
      _push(ssrRenderComponent(_component_q_form, {
        onSubmit: create2,
        ref_key: "refForm",
        ref: refForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([`show-${unref(step)}`, "step-container step-0"])}" data-v-0cd70050${_scopeId}><p class="input-details" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.name.label"))}</p>`);
            _push2(ssrRenderComponent(_component_InputCPA, {
              id: "input_uno",
              filled: "",
              dark: "",
              rounded: "",
              class: "tw-mb-3",
              modelValue: unref(projectData).name,
              "onUpdate:modelValue": ($event) => unref(projectData).name = $event,
              label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.name.placeholder")
            }, null, _parent2, _scopeId));
            _push2(`<p class="input-details" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.label"))}</p>`);
            _push2(ssrRenderComponent(_component_Textarea, {
              placeholder: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.placeholder"),
              modelValue: unref(projectData).description,
              "onUpdate:modelValue": ($event) => unref(projectData).description = $event,
              dark: "",
              class: "tw-h-28"
            }, null, _parent2, _scopeId));
            _push2(`<div class="tw-flex tw-justify-end tw-mb-2" data-v-0cd70050${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => unref(projectData).description = "",
              type: "button",
              variant: "ghost",
              class: "tw-text-white tw-underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.clearBtn"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.clearBtn")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Dropzone, {
              modelValue: unref(projectData).files,
              "onUpdate:modelValue": ($event) => unref(projectData).files = $event,
              dark: ""
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="tw-text-base tw-mb-5" data-v-0cd70050${_scopeId2}>${ssrInterpolate(unref(projectData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg"))}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "tw-text-base tw-mb-5" }, toDisplayString(unref(projectData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                  ];
                }
              }),
              subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(projectData).files) {
                    _push3(`<p class="tw-text-white tw-text-xs tw-text-center" data-v-0cd70050${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(projectData).files, (file, index) => {
                      _push3(`<span class="tw-mr-2" data-v-0cd70050${_scopeId2}>${ssrInterpolate(file.name)}</span>`);
                    });
                    _push3(`<!--]--></p>`);
                  } else {
                    _push3(`<p class="tw-text-white tw-text-xs tw-text-center" data-v-0cd70050${_scopeId2}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description"))}</p>`);
                  }
                } else {
                  return [
                    unref(projectData).files ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "tw-text-white tw-text-xs tw-text-center"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(projectData).files, (file, index) => {
                        return openBlock(), createBlock("span", {
                          class: "tw-mr-2",
                          key: index
                        }, toDisplayString(file.name), 1);
                      }), 128))
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "tw-text-white tw-text-xs tw-text-center"
                    }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass([`show-${unref(step)}`, "step-container step-1"])}" data-v-0cd70050${_scopeId}><p class="input-details" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.label"))}</p><div class="tw-bg-input tw-rounded-2xl tw-px-4 tw-pt-3 tw-relative" data-v-0cd70050${_scopeId}><ul class="tw-min-h-28 tw-flex tw-flex-wrap" data-v-0cd70050${_scopeId}><!--[-->`);
            ssrRenderList(unref(projectData).skills, (item, index) => {
              _push2(`<li class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1" data-v-0cd70050${_scopeId}><p class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" data-v-0cd70050${_scopeId}>${ssrInterpolate(item.title)}</p>`);
              _push2(ssrRenderComponent(_component_Button, {
                size: "xs",
                type: "button",
                variant: "ghost",
                class: "hover:tw-bg-transparent !tw-pr-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(XIcon), {
                      onClick: ($event) => handleRemoveSkill(index),
                      class: "tw-text-primary tw-text-xs",
                      size: 20
                    }, null, _parent3, _scopeId2));
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
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul><input class="skills-input"${ssrRenderAttr("placeholder", ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.placeholder"))}${ssrRenderAttr("value", unref(projectData).searchSkills)} data-v-0cd70050${_scopeId}><div class="option-skill-list" data-v-0cd70050${_scopeId}><ul class="" data-v-0cd70050${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (item) => {
              _push2(`<li data-v-0cd70050${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                onClick: ($event) => handleAddSkill(item),
                variant: "ghost",
                type: "button",
                class: "hover:tw-bg-transparent tw-w-full !tw-justify-start"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div></div><p class="tw-mt-4 tw-text-white tw-w-10/12 tw-m-auto tw-text-xs" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.suggested"))} <!--[-->`);
            ssrRenderList(unref(suggestedSkills), (item, index) => {
              _push2(`<span class="tw-text-primary hover:tw-underline tw-cursor-pointer" data-v-0cd70050${_scopeId}>${ssrInterpolate(item.title)}${ssrInterpolate(index === unref(suggestedSkills).length - 1 ? "." : ", ")}</span>`);
            });
            _push2(`<!--]--></p></div><div class="${ssrRenderClass([`show-${unref(step)}`, "step-container step-2 tw-mt-5"])}" data-v-0cd70050${_scopeId}><div class="info-extra" data-v-0cd70050${_scopeId}><div class="tw-text-primary" data-v-0cd70050${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldDollarSVG), {
              filled: "",
              class: "tw-text-8xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="tw-text-white tw-ml-8 lg:tw-w-2/5" data-v-0cd70050${_scopeId}><h3 class="tw-mb-2 tw-text-lg tw-font-extrabold" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.prices.details.title"))}</h3><p class="tw-font-extralight tw-text-xs" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.prices.details.description"))}</p></div></div><p class="input-details" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.prices.label"))}</p><div class="tw-flex" data-v-0cd70050${_scopeId}><div class="tw-basis-1/3 sm:tw-basis-1/5 lg:tw-basis-2/12 tw-flex tw-items-end" data-v-0cd70050${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Select, {
              class: "tw-w-full",
              center: "",
              dark: "",
              modelValue: unref(projectData).currency,
              "onUpdate:modelValue": ($event) => unref(projectData).currency = $event,
              options: unref(currencyOptions)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="tw-grow tw-pl-5 lg:tw-pl-10 tw-flex tw-flex-col tw-items-end" data-v-0cd70050${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Select, {
              class: "tw-w-full",
              dark: "",
              modelValue: unref(projectData).rangePrice,
              "onUpdate:modelValue": ($event) => unref(projectData).rangePrice = $event,
              options: unref(rangePriceOptions)
            }, null, _parent2, _scopeId));
            if (unref(projectData).rangePrice.value === "custom") {
              _push2(ssrRenderComponent(_component_InputCPA, {
                dark: "",
                rounded: "",
                type: "number",
                modelValue: unref(projectData).customPrice,
                "onUpdate:modelValue": ($event) => unref(projectData).customPrice = $event,
                filled: "",
                class: "tw-w-full"
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(DollarSignIcon), { class: "!tw-text-primary" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(DollarSignIcon), { class: "!tw-text-primary" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="${ssrRenderClass([`show-${unref(step)}`, "step-container step-3 tw-mt-5"])}" data-v-0cd70050${_scopeId}><div class="info-extra" data-v-0cd70050${_scopeId}><div class="tw-text-primary" data-v-0cd70050${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FileShredderSVG), {
              filled: "",
              class: "tw-text-8xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="tw-text-white tw-ml-8" data-v-0cd70050${_scopeId}><p class="tw-text-sm" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.singular"))} <span class="tw-text-primary" data-v-0cd70050${_scopeId}> &quot;${ssrInterpolate(unref(projectData).name)}&quot; </span></p><p class="tw-font-extrabold tw-text-sm" data-v-0cd70050${_scopeId}> ($${ssrInterpolate(unref(projectData).rangePrice.min)} - $${ssrInterpolate(unref(projectData).rangePrice.min)}) </p></div></div><p class="input-details" data-v-0cd70050${_scopeId}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.final.label"))}</p><div class="tw-bg-input tw-rounded-2xl tw-p-6 tw-relative tw-min-h-44" data-v-0cd70050${_scopeId}><p class="tw-text-white tw-mb-10" data-v-0cd70050${_scopeId}>${ssrInterpolate(unref(projectData).description)}</p><ul class="tw-flex tw-flex-wrap" data-v-0cd70050${_scopeId}><!--[-->`);
            ssrRenderList(unref(projectData).skills, (item, index) => {
              _push2(`<li class="tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1" data-v-0cd70050${_scopeId}><p class="tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" data-v-0cd70050${_scopeId}>${ssrInterpolate(item.title)}</p></li>`);
            });
            _push2(`<!--]--></ul></div></div><div class="tw-w-4/6 tw-mx-auto tw-flex" data-v-0cd70050${_scopeId}>`);
            if (unref(step) > 0) {
              _push2(ssrRenderComponent(_component_Button, {
                onClick: ($event) => handleChangeStep(-1),
                type: "button",
                variant: "secondary",
                class: "hero tw-mt-8 tw-tracking-wide tw-w-full tw-font-semibold tw-py-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mx-1 !tw-text-primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="tw-ml-3" data-v-0cd70050${_scopeId2}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.buttons.back"))}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.buttons.back")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => handleChangeStep(1),
              type: "button",
              class: "hero tw-mt-8 tw-tracking-wide tw-w-full tw-font-semibold tw-py-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mx-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="tw-ml-3" data-v-0cd70050${_scopeId2}>${ssrInterpolate(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang(
                    unref(step) < 3 ? "projects.create.form.buttons.next" : "projects.create.form.buttons.submit"
                  ))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang(
                      unref(step) < 3 ? "projects.create.form.buttons.next" : "projects.create.form.buttons.submit"
                    )), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["step-container step-0", `show-${unref(step)}`]
              }, [
                createVNode("p", { class: "input-details" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.name.label")), 1),
                createVNode(_component_InputCPA, {
                  id: "input_uno",
                  filled: "",
                  dark: "",
                  rounded: "",
                  class: "tw-mb-3",
                  modelValue: unref(projectData).name,
                  "onUpdate:modelValue": ($event) => unref(projectData).name = $event,
                  label: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.name.placeholder")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                createVNode("p", { class: "input-details" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.label")), 1),
                createVNode(_component_Textarea, {
                  placeholder: ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.placeholder"),
                  modelValue: unref(projectData).description,
                  "onUpdate:modelValue": ($event) => unref(projectData).description = $event,
                  dark: "",
                  class: "tw-h-28"
                }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "tw-flex tw-justify-end tw-mb-2" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => unref(projectData).description = "",
                    type: "button",
                    variant: "ghost",
                    class: "tw-text-white tw-underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.description.clearBtn")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(_component_Dropzone, {
                  modelValue: unref(projectData).files,
                  "onUpdate:modelValue": ($event) => unref(projectData).files = $event,
                  dark: ""
                }, {
                  title: withCtx(() => [
                    createVNode("p", { class: "tw-text-base tw-mb-5" }, toDisplayString(unref(projectData).files ? ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.title") : ("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.loadedMsg")), 1)
                  ]),
                  subtitle: withCtx(() => [
                    unref(projectData).files ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "tw-text-white tw-text-xs tw-text-center"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(projectData).files, (file, index) => {
                        return openBlock(), createBlock("span", {
                          class: "tw-mr-2",
                          key: index
                        }, toDisplayString(file.name), 1);
                      }), 128))
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "tw-text-white tw-text-xs tw-text-center"
                    }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.files.empty.description")), 1))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ], 2),
              createVNode("div", {
                class: ["step-container step-1", `show-${unref(step)}`]
              }, [
                createVNode("p", { class: "input-details" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.label")), 1),
                createVNode("div", { class: "tw-bg-input tw-rounded-2xl tw-px-4 tw-pt-3 tw-relative" }, [
                  createVNode("ul", { class: "tw-min-h-28 tw-flex tw-flex-wrap" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projectData).skills, (item, index) => {
                      return openBlock(), createBlock("li", {
                        key: `skill_${item.id}`,
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
                    "onUpdate:modelValue": ($event) => unref(projectData).searchSkills = $event
                  }, null, 40, ["placeholder", "onUpdate:modelValue"]), [
                    [vModelText, unref(projectData).searchSkills]
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
                ]),
                createVNode("p", { class: "tw-mt-4 tw-text-white tw-w-10/12 tw-m-auto tw-text-xs" }, [
                  createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.skills.suggested")) + " ", 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(suggestedSkills), (item, index) => {
                    return openBlock(), createBlock("span", {
                      key: `suggested_skills_${index}`,
                      onClick: ($event) => handleAddSkill(item),
                      class: "tw-text-primary hover:tw-underline tw-cursor-pointer"
                    }, toDisplayString(item.title) + toDisplayString(index === unref(suggestedSkills).length - 1 ? "." : ", "), 9, ["onClick"]);
                  }), 128))
                ])
              ], 2),
              createVNode("div", {
                class: ["step-container step-2 tw-mt-5", `show-${unref(step)}`]
              }, [
                createVNode("div", { class: "info-extra" }, [
                  createVNode("div", { class: "tw-text-primary" }, [
                    createVNode(unref(ShieldDollarSVG), {
                      filled: "",
                      class: "tw-text-8xl"
                    })
                  ]),
                  createVNode("div", { class: "tw-text-white tw-ml-8 lg:tw-w-2/5" }, [
                    createVNode("h3", { class: "tw-mb-2 tw-text-lg tw-font-extrabold" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.prices.details.title")), 1),
                    createVNode("p", { class: "tw-font-extralight tw-text-xs" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.prices.details.description")), 1)
                  ])
                ]),
                createVNode("p", { class: "input-details" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.prices.label")), 1),
                createVNode("div", { class: "tw-flex" }, [
                  createVNode("div", { class: "tw-basis-1/3 sm:tw-basis-1/5 lg:tw-basis-2/12 tw-flex tw-items-end" }, [
                    createVNode(_component_Select, {
                      class: "tw-w-full",
                      center: "",
                      dark: "",
                      modelValue: unref(projectData).currency,
                      "onUpdate:modelValue": ($event) => unref(projectData).currency = $event,
                      options: unref(currencyOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  createVNode("div", { class: "tw-grow tw-pl-5 lg:tw-pl-10 tw-flex tw-flex-col tw-items-end" }, [
                    createVNode(_component_Select, {
                      class: "tw-w-full",
                      dark: "",
                      modelValue: unref(projectData).rangePrice,
                      "onUpdate:modelValue": ($event) => unref(projectData).rangePrice = $event,
                      options: unref(rangePriceOptions)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    unref(projectData).rangePrice.value === "custom" ? (openBlock(), createBlock(_component_InputCPA, {
                      key: 0,
                      dark: "",
                      rounded: "",
                      type: "number",
                      modelValue: unref(projectData).customPrice,
                      "onUpdate:modelValue": ($event) => unref(projectData).customPrice = $event,
                      filled: "",
                      class: "tw-w-full"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(unref(DollarSignIcon), { class: "!tw-text-primary" })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ])
                ])
              ], 2),
              createVNode("div", {
                class: ["step-container step-3 tw-mt-5", `show-${unref(step)}`]
              }, [
                createVNode("div", { class: "info-extra" }, [
                  createVNode("div", { class: "tw-text-primary" }, [
                    createVNode(unref(FileShredderSVG), {
                      filled: "",
                      class: "tw-text-8xl"
                    })
                  ]),
                  createVNode("div", { class: "tw-text-white tw-ml-8" }, [
                    createVNode("p", { class: "tw-text-sm" }, [
                      createTextVNode(toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.singular")) + " ", 1),
                      createVNode("span", { class: "tw-text-primary" }, ' "' + toDisplayString(unref(projectData).name) + '" ', 1)
                    ]),
                    createVNode("p", { class: "tw-font-extrabold tw-text-sm" }, " ($" + toDisplayString(unref(projectData).rangePrice.min) + " - $" + toDisplayString(unref(projectData).rangePrice.min) + ") ", 1)
                  ])
                ]),
                createVNode("p", { class: "input-details" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.final.label")), 1),
                createVNode("div", { class: "tw-bg-input tw-rounded-2xl tw-p-6 tw-relative tw-min-h-44" }, [
                  createVNode("p", { class: "tw-text-white tw-mb-10" }, toDisplayString(unref(projectData).description), 1),
                  createVNode("ul", { class: "tw-flex tw-flex-wrap" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projectData).skills, (item, index) => {
                      return openBlock(), createBlock("li", {
                        key: `skill_${index}`,
                        class: "tw-border tw-border-primary tw-rounded-md tw-flex tw-px-5 tw-py-1 tw-h-min tw-mr-2 tw-mb-1"
                      }, [
                        createVNode("p", { class: "tw-mb-0 tw-text-sm tw-text-white tw-leading-loose" }, toDisplayString(item.title), 1)
                      ]);
                    }), 128))
                  ])
                ])
              ], 2),
              createVNode("div", { class: "tw-w-4/6 tw-mx-auto tw-flex" }, [
                unref(step) > 0 ? (openBlock(), createBlock(_component_Button, {
                  key: 0,
                  onClick: ($event) => handleChangeStep(-1),
                  type: "button",
                  variant: "secondary",
                  class: "hero tw-mt-8 tw-tracking-wide tw-w-full tw-font-semibold tw-py-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mx-1 !tw-text-primary"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang("projects.create.form.buttons.back")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(_component_Button, {
                  onClick: ($event) => handleChangeStep(1),
                  type: "button",
                  class: "hero tw-mt-8 tw-tracking-wide tw-w-full tw-font-semibold tw-py-4 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mx-1"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "tw-ml-3" }, toDisplayString(("Helper" in _ctx ? _ctx.Helper : unref(Helper)).tLang(
                      unref(step) < 3 ? "projects.create.form.buttons.next" : "projects.create.form.buttons.submit"
                    )), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cd70050"]]);

export { create as default };
//# sourceMappingURL=create-CTiNGzPk.mjs.map
