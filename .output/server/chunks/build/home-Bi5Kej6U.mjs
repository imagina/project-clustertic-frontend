import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAuthStore } from './useAuth-CRsBI6Hp.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_8 } from '../_/QBtn.mjs';
import './helper-C0GmhoMX.mjs';
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
import '../_/vm.mjs';
import '../_/Ripple.mjs';
import '../_/use-router-link.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><div><h1>Home Page</h1><p>${ssrInterpolate(unref(store).getUsername)}</p></div><div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        label: "Logout",
        color: "primary",
        "no-caps": "",
        onClick: ($event) => unref(store).logout()
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-Bi5Kej6U.mjs.map
