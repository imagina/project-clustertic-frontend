import { _ as __nuxt_component_0 } from './searchProject-C9YkVT_M.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './CardTitle-BbDugV-N.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-WQaQD4mm.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createTextVNode, createVNode, unref, toDisplayString } from 'vue';
import { u as useCategoryStore } from './useCategories-iDCjhnnL.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { S as SolarPanelSVG, D as DevicesPcSVG, B as BrushSVG, P as PacManSVG } from './pacman-YLhGBYIX.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/QForm.mjs';
import '@vueuse/core';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '../_/vm.mjs';
import './server.mjs';
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
import './helper-C0GmhoMX.mjs';
import 'lucide-vue-next';
import './useAuth-CRsBI6Hp.mjs';
import './nuxt-icon-1v0WEHYY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(1);
    const categoriesStore = useCategoryStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchProject = __nuxt_component_0;
      const _component_Card = _sfc_main$2;
      const _component_CardHeader = _sfc_main$1;
      const _component_CardTitle = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SearchProject, { class: "tw-mt-20" }, null, _parent));
      _push(`<section class="tw-container tw-mt-5 tw-mb-16 tw-relative" data-v-5ca972e8>`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "tw-font-extrabold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Categor\xEDas`);
                      } else {
                        return [
                          createTextVNode("Categor\xEDas")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "tw-font-extrabold" }, {
                      default: withCtx(() => [
                        createTextVNode("Categor\xEDas")
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
                      createTextVNode("Categor\xEDas")
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
      _push(`<div class="tw-container tw-py-20" data-v-5ca972e8><div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 categories-container" data-v-5ca972e8><!--[-->`);
      ssrRenderList(unref(categoriesStore).parentCategories, (category) => {
        _push(`<div class="tw-flex tw-items-center tw-mb-4" data-v-5ca972e8><div class="tw-h-full tw-w-full" data-v-5ca972e8><div class="category-header" data-v-5ca972e8><span data-v-5ca972e8>`);
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
        _push(`</span><h4 data-v-5ca972e8>${ssrInterpolate(category.title)}</h4></div>`);
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
      _push(`<!--]--></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ca972e8"]]);

export { index as default };
//# sourceMappingURL=index-CYQJY5mr.mjs.map
