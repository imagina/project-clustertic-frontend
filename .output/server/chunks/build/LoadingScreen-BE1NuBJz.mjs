import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Loader2Icon } from 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoadingScreen",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tw-fixed tw-inset-0 tw-flex tw-justify-center tw-items-center tw-bg-secondary tw-bg-opacity-50 tw-z-50", props.loading ? "" : "tw-hidden"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Loader2Icon), {
        size: 120,
        class: "tw-text-primary tw-animate-spin"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/LoadingScreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LoadingScreen-BE1NuBJz.mjs.map
