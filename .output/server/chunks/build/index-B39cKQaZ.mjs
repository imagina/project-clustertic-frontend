import { _ as __nuxt_component_0 } from './searchProject-CPl_kmTa.mjs';
import { _ as _sfc_main$2 } from './index-BUfu69CW.mjs';
import { _ as _sfc_main$3 } from './Checkbox-CeQigKqu.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4 } from './CardTitle-BbDugV-N.mjs';
import { _ as __nuxt_component_7 } from './CardProject-CTkRXCLT.mjs';
import { _ as __nuxt_component_8 } from './Paginator-BBLdPLWP.mjs';
import { useSSRContext, defineComponent, ref, computed, reactive, watch, unref, withCtx, createTextVNode, createVNode, withDirectives, vModelText, toDisplayString } from 'vue';
import { u as useRoute } from './server.mjs';
import { u as useProjectsStore } from './useProjects-CIpw3REu.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { XIcon, DollarSignIcon, CompassIcon } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './LoadingScreen-BE1NuBJz.mjs';
import { u as useCategoryStore } from './useCategories-iDCjhnnL.mjs';
import { _ as __nuxt_component_1 } from '../_/QForm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './helper-C0GmhoMX.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './CardContent-CfXgBR5p.mjs';
import './RatingIndicator-CK_7lkYG.mjs';
import './star-kerVB7NH.mjs';
import './nuxt-icon-1v0WEHYY.mjs';
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
import './useAuth-CRsBI6Hp.mjs';
import '@vueuse/core';
import '../_/vm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const refForm = ref(null);
    const router = useRoute();
    const projectsStore = useProjectsStore();
    const categoryStore = useCategoryStore();
    const page = computed(() => projectsStore.pagination.currentPage);
    const totalPages = computed(() => projectsStore.pagination.lastPage);
    const filters = reactive({
      minPrice: "0",
      maxPrice: "100000000",
      searchSkills: "",
      skills: []
    });
    watch(
      () => router.query,
      (newQuery, oldQuery) => {
        if (oldQuery["search"] !== newQuery["search"]) handleRefreshPage();
      }
    );
    function handleRefreshPage() {
      projectsStore.setFilters({
        search: router.query["search"] ? `${router.query["search"]}` : ""
      });
      projectsStore.get(1);
    }
    async function filter() {
      try {
        const validate = await refForm.value.validate();
        if (!validate) return;
        projectsStore.setFilters({
          search: router.query["search"] ? `${router.query["search"]}` : "",
          minPrice: parseInt(filters.minPrice),
          maxPrice: parseInt(filters.maxPrice),
          categories: filters.skills
        });
        projectsStore.get(1);
      } catch (erro) {
        console.log(erro);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchProject = __nuxt_component_0;
      const _component_q_form = __nuxt_component_1;
      const _component_Button = _sfc_main$2;
      const _component_Checkbox = _sfc_main$3;
      const _component_Card = _sfc_main$2$1;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_CardTitle = _sfc_main$4;
      const _component_CardProject = __nuxt_component_7;
      const _component_Paginator = __nuxt_component_8;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SearchProject, { class: "tw-mt-20" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        loading: unref(projectsStore).loading
      }, null, _parent));
      _push(`<div class="tw-container tw-flex tw-flex-col md:tw-flex-row tw-mt-5 tw-mb-16 tw-relative" data-v-f93824f9><aside class="lg:tw-basis-80 tw-px-5" data-v-f93824f9><div class="filters-form tw-sticky tw-top-28 tw-mb-2 tw-bg-secondary tw-rounded-md !tw-text-white tw-p-6" data-v-f93824f9>`);
      _push(ssrRenderComponent(_component_q_form, {
        onSubmit: filter,
        ref_key: "refForm",
        ref: refForm
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tw-flex tw-justify-between" data-v-f93824f9${_scopeId}><h2 class="tw-text-xl tw-font-bold tw-mb-8" data-v-f93824f9${_scopeId}>Filtros</h2>`);
            _push2(ssrRenderComponent(_component_Button, {
              size: "xs",
              type: "submit"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Buscar`);
                } else {
                  return [
                    createTextVNode("Buscar")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="tw-mb-5 tw-flex tw-items-center" data-v-f93824f9${_scopeId}><label class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1" data-v-f93824f9${_scopeId}> Precio </label>`);
            _push2(ssrRenderComponent(_component_Button, {
              variant: "ghost",
              type: "button",
              class: "hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min",
              onClick: () => {
                unref(filters).minPrice = "0";
                unref(filters).maxPrice = "100000000";
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(XIcon), { size: 20 }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(XIcon), { size: 20 })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><label class="tw-text-xs tw-font-extralight" data-v-f93824f9${_scopeId}>min</label><div class="filter-money tw-mb-2" data-v-f93824f9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DollarSignIcon), { class: "tw-w-4 tw-mr-3" }, null, _parent2, _scopeId));
            _push2(`<input outlined type="number"${ssrRenderAttr("value", unref(filters).minPrice)} data-v-f93824f9${_scopeId}><p class="tw-mb-0" data-v-f93824f9${_scopeId}>USD</p></div><label class="tw-text-xs tw-font-extralight" data-v-f93824f9${_scopeId}>max</label><div class="filter-money tw-mb-2" data-v-f93824f9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DollarSignIcon), { class: "tw-w-4 tw-mr-3" }, null, _parent2, _scopeId));
            _push2(`<input outlined type="number"${ssrRenderAttr("value", unref(filters).maxPrice)} data-v-f93824f9${_scopeId}><p class="tw-mb-0" data-v-f93824f9${_scopeId}>USD</p></div>`);
          } else {
            return [
              createVNode("div", { class: "tw-flex tw-justify-between" }, [
                createVNode("h2", { class: "tw-text-xl tw-font-bold tw-mb-8" }, "Filtros"),
                createVNode(_component_Button, {
                  size: "xs",
                  type: "submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Buscar")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "tw-mb-5 tw-flex tw-items-center" }, [
                createVNode("label", { class: "tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1" }, " Precio "),
                createVNode(_component_Button, {
                  variant: "ghost",
                  type: "button",
                  class: "hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min",
                  onClick: () => {
                    unref(filters).minPrice = "0";
                    unref(filters).maxPrice = "100000000";
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(XIcon), { size: 20 })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode("label", { class: "tw-text-xs tw-font-extralight" }, "min"),
              createVNode("div", { class: "filter-money tw-mb-2" }, [
                createVNode(unref(DollarSignIcon), { class: "tw-w-4 tw-mr-3" }),
                withDirectives(createVNode("input", {
                  outlined: "",
                  type: "number",
                  "onUpdate:modelValue": ($event) => unref(filters).minPrice = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, unref(filters).minPrice]
                ]),
                createVNode("p", { class: "tw-mb-0" }, "USD")
              ]),
              createVNode("label", { class: "tw-text-xs tw-font-extralight" }, "max"),
              createVNode("div", { class: "filter-money tw-mb-2" }, [
                createVNode(unref(DollarSignIcon), { class: "tw-w-4 tw-mr-3" }),
                withDirectives(createVNode("input", {
                  outlined: "",
                  type: "number",
                  "onUpdate:modelValue": ($event) => unref(filters).maxPrice = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, unref(filters).maxPrice]
                ]),
                createVNode("p", { class: "tw-mb-0" }, "USD")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="tw-mb-5 tw-flex tw-items-center" data-v-f93824f9><label class="tw-leading-none tw-text-lg tw-font-bold tw-h-min tw-flex-1" data-v-f93824f9> Skills </label>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "ghost",
        type: "button",
        class: "hover:tw-bg-transparent hover:tw-underline hover:tw-text-primary tw-text-primary !tw-p-1 tw-leading-none tw-h-min",
        onClick: () => {
          unref(filters).skills = [];
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(XIcon), { size: 20 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(XIcon), { size: 20 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="filter-skills tw-mb-2" data-v-f93824f9>`);
      _push(ssrRenderComponent(unref(CompassIcon), { class: "tw-w-4 tw-text-primary tw-mr-3" }, null, _parent));
      _push(`<input placeholder="Search skills"${ssrRenderAttr("value", unref(filters).searchSkills)} data-v-f93824f9></div><ul data-v-f93824f9><!--[-->`);
      ssrRenderList(unref(categoryStore).categories, (category) => {
        _push(`<li class="tw-flex tw-items-center tw-mb-2" data-v-f93824f9>`);
        _push(ssrRenderComponent(_component_Checkbox, {
          checked: unref(filters).skills.includes(category.id)
        }, null, _parent));
        _push(`<label class="tw-ml-2" data-v-f93824f9>${ssrInterpolate(category.title)}</label></li>`);
      });
      _push(`<!--]--></ul></div></aside><section class="md:tw-basis-2/3 lg:tw-basis-9/12" data-v-f93824f9><ul class="projects-list" data-v-f93824f9><li data-v-f93824f9>`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Resultados ${ssrInterpolate(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``)} <span class="tw-font-normal tw-text-base tw-ml-5" data-v-f93824f9${_scopeId3}> P\xE1gina ${ssrInterpolate(unref(page))} de ${ssrInterpolate(unref(totalPages))}</span>`);
                      } else {
                        return [
                          createTextVNode(" Resultados " + toDisplayString(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``) + " ", 1),
                          createVNode("span", { class: "tw-font-normal tw-text-base tw-ml-5" }, " P\xE1gina " + toDisplayString(unref(page)) + " de " + toDisplayString(unref(totalPages)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                      default: withCtx(() => [
                        createTextVNode(" Resultados " + toDisplayString(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``) + " ", 1),
                        createVNode("span", { class: "tw-font-normal tw-text-base tw-ml-5" }, " P\xE1gina " + toDisplayString(unref(page)) + " de " + toDisplayString(unref(totalPages)), 1)
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
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx(() => [
                      createTextVNode(" Resultados " + toDisplayString(unref(router).query["search"] ? `que contengan "${unref(router).query["search"]}"` : ``) + " ", 1),
                      createVNode("span", { class: "tw-font-normal tw-text-base tw-ml-5" }, " P\xE1gina " + toDisplayString(unref(page)) + " de " + toDisplayString(unref(totalPages)), 1)
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
      _push(`</li><!--[-->`);
      ssrRenderList(unref(projectsStore).projects, (project) => {
        var _a2;
        var _a;
        _push(`<li data-v-f93824f9>`);
        _push(ssrRenderComponent(_component_CardProject, {
          id: project.id,
          rating: 4.5,
          skills: (_a2 = (_a = project.categories) == null ? void 0 : _a.map((cat) => cat.title)) != null ? _a2 : [],
          "created-at": `${project.createdAt}`
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(project.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(project.title), 1)
              ];
            }
          }),
          subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Presupuesto ${ssrInterpolate(project.minPrice)} - ${ssrInterpolate(project.maxPrice)}$ `);
            } else {
              return [
                createTextVNode(" Presupuesto " + toDisplayString(project.minPrice) + " - " + toDisplayString(project.maxPrice) + "$ ", 1)
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(project.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(project.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="tw-flex tw-justify-center tw-mt-10" data-v-f93824f9>`);
      _push(ssrRenderComponent(_component_Paginator, {
        onOnPageSelected: unref(projectsStore).get,
        pages: unref(totalPages),
        "btn-per-side": 3,
        current: unref(page)
      }, null, _parent));
      _push(`</div></section></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f93824f9"]]);

export { index as default };
//# sourceMappingURL=index-B39cKQaZ.mjs.map
