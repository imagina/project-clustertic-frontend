import { _ as __nuxt_component_0 } from './nuxt-link-WQaQD4mm.mjs';
import { _ as _sfc_main$1 } from './index-BUfu69CW.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { ChevronsLeftIcon } from 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppbarSign",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tw-p-4 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-50" }, _attrs))}><div class="tw-px-10 tw-flex"><div class="tw-flex tw-grow-0 tw-items-center tw-basis-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, { variant: "outline" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ChevronsLeftIcon), { class: "tw-text-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ChevronsLeftIcon), { class: "tw-text-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, { variant: "outline" }, {
                default: withCtx(() => [
                  createVNode(unref(ChevronsLeftIcon), { class: "tw-text-primary" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="tw-flex-grow tw-flex tw-items-center tw-justify-end tw-mr-2"></nav><div class="tw-flex tw-grow-0 tw-basis-auto tw-items-center"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/appbar/AppbarSign.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppbarSign-DIdsBOQw.mjs.map
