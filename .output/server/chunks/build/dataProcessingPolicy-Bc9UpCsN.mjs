import { _ as __nuxt_component_0 } from './searchProject-C9YkVT_M.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './CardTitle-BbDugV-N.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SearchProject = __nuxt_component_0;
  const _component_Card = _sfc_main$2;
  const _component_CardHeader = _sfc_main$1;
  const _component_CardTitle = _sfc_main$3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SearchProject, { class: "tw-mt-20" }, null, _parent));
  _push(`<section class="tw-container">`);
  _push(ssrRenderComponent(_component_Card, { class: "tw-py-2 tw-mb-5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, { class: "!tw-font-medium" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Pol\xEDtica de Tratamiento de Datos `);
                  } else {
                    return [
                      createTextVNode(" Pol\xEDtica de Tratamiento de Datos ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, { class: "!tw-font-medium" }, {
                  default: withCtx(() => [
                    createTextVNode(" Pol\xEDtica de Tratamiento de Datos ")
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
              createVNode(_component_CardTitle, { class: "!tw-font-medium" }, {
                default: withCtx(() => [
                  createTextVNode(" Pol\xEDtica de Tratamiento de Datos ")
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
  _push(`</section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dataProcessingPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataProcessingPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dataProcessingPolicy as default };
//# sourceMappingURL=dataProcessingPolicy-Bc9UpCsN.mjs.map
