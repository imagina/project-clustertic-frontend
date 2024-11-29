import { _ as __nuxt_component_0 } from './searchProject-CPl_kmTa.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './CardTitle-BbDugV-N.mjs';
import { _ as _sfc_main$4 } from './CardContent-CfXgBR5p.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-WQaQD4mm.mjs';
import { useSSRContext, defineComponent, ref, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { u as useCategoryStore } from './useCategories-iDCjhnnL.mjs';
import { u as useRoute } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './LoadingScreen-BE1NuBJz.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/QForm.mjs';
import '@vueuse/core';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '../_/vm.mjs';
import './helper-C0GmhoMX.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './useAuth-CRsBI6Hp.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    ref(1);
    const categoriesStore = useCategoryStore();
    useRoute();
    const category = computed(() => categoriesStore.selected);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchProject = __nuxt_component_0;
      const _component_Card = _sfc_main$2;
      const _component_CardHeader = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_CardContent = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        loading: unref(categoriesStore).loading
      }, null, _parent));
      _push(ssrRenderComponent(_component_SearchProject, { class: "tw-mt-20" }, null, _parent));
      _push(`<section class="tw-container tw-mt-5 tw-mb-16 tw-relative" data-v-7b9b8743>`);
      _push(ssrRenderComponent(_component_Card, { class: "tw-py-2 tw-mb-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "!tw-flex-row !tw-items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="tw-mr-3" data-v-7b9b8743${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/categories" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ChevronLeftIcon), { size: 30 }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ChevronLeftIcon), { size: 30 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "!tw-font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Volver a las categor\xEDas Generales `);
                      } else {
                        return [
                          createTextVNode(" Volver a las categor\xEDas Generales ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "tw-mr-3" }, [
                      createVNode(_component_NuxtLink, { to: "/categories" }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronLeftIcon), { size: 30 })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_CardTitle, { class: "!tw-font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Volver a las categor\xEDas Generales ")
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
              createVNode(_component_CardHeader, { class: "!tw-flex-row !tw-items-center" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "tw-mr-3" }, [
                    createVNode(_component_NuxtLink, { to: "/categories" }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronLeftIcon), { size: 30 })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_CardTitle, { class: "!tw-font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Volver a las categor\xEDas Generales ")
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
      _push(ssrRenderComponent(_component_Card, { class: "tw-py-3 tw-px-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "tw-border-b-2 tw-border-muted-light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a = unref(category)) == null ? void 0 : _a.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b = unref(category)) == null ? void 0 : _b.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = unref(category)) == null ? void 0 : _a.title), 1)
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "tw-mt-16" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<ul class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-3" data-v-7b9b8743${_scopeId2}><li class="tw-flex tw-text-sm md:tw-text-base" data-v-7b9b8743${_scopeId2}><span data-v-7b9b8743${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ChevronRightIcon), {
                    class: "tw-text-sky-600",
                    size: 25
                  }, null, _parent3, _scopeId2));
                  _push3(`</span> ${ssrInterpolate((_a = unref(category)) == null ? void 0 : _a.title)}</li><!--[-->`);
                  ssrRenderList((_b = unref(category)) == null ? void 0 : _b.children, (subCategory) => {
                    _push3(`<li class="tw-flex tw-text-sm md:tw-text-base" data-v-7b9b8743${_scopeId2}><span data-v-7b9b8743${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ChevronRightIcon), {
                      class: "tw-text-sky-600",
                      size: 25
                    }, null, _parent3, _scopeId2));
                    _push3(`</span> ${ssrInterpolate(subCategory.title)}</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-3" }, [
                      createVNode("li", { class: "tw-flex tw-text-sm md:tw-text-base" }, [
                        createVNode("span", null, [
                          createVNode(unref(ChevronRightIcon), {
                            class: "tw-text-sky-600",
                            size: 25
                          })
                        ]),
                        createTextVNode(" " + toDisplayString((_c = unref(category)) == null ? void 0 : _c.title), 1)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList((_d = unref(category)) == null ? void 0 : _d.children, (subCategory) => {
                        return openBlock(), createBlock("li", {
                          key: `sub-sub-category-${subCategory.id}`,
                          class: "tw-flex tw-text-sm md:tw-text-base"
                        }, [
                          createVNode("span", null, [
                            createVNode(unref(ChevronRightIcon), {
                              class: "tw-text-sky-600",
                              size: 25
                            })
                          ]),
                          createTextVNode(" " + toDisplayString(subCategory.title), 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "tw-border-b-2 tw-border-muted-light" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString((_a = unref(category)) == null ? void 0 : _a.title), 1)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "tw-mt-16" }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode("ul", { class: "tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-3" }, [
                      createVNode("li", { class: "tw-flex tw-text-sm md:tw-text-base" }, [
                        createVNode("span", null, [
                          createVNode(unref(ChevronRightIcon), {
                            class: "tw-text-sky-600",
                            size: 25
                          })
                        ]),
                        createTextVNode(" " + toDisplayString((_a = unref(category)) == null ? void 0 : _a.title), 1)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(category)) == null ? void 0 : _b.children, (subCategory) => {
                        return openBlock(), createBlock("li", {
                          key: `sub-sub-category-${subCategory.id}`,
                          class: "tw-flex tw-text-sm md:tw-text-base"
                        }, [
                          createVNode("span", null, [
                            createVNode(unref(ChevronRightIcon), {
                              class: "tw-text-sky-600",
                              size: 25
                            })
                          ]),
                          createTextVNode(" " + toDisplayString(subCategory.title), 1)
                        ]);
                      }), 128))
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b9b8743"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BK8O46NK.mjs.map
