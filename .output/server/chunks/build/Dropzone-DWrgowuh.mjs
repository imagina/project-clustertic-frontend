import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dropzone",
  __ssrInlineRender: true,
  props: {
    class: {},
    dark: { type: Boolean },
    modelValue: {},
    disable: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    ref(null);
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("dropzone", props.dark ? "dropzone-dark" : "", props.class)
      }, _attrs))} data-v-42d645e9><div class="tw-flex tw-flex-col tw-justify-center tw-items-center" data-v-42d645e9><div class="title" data-v-42d645e9>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
      _push(`</div><input type="file" multiple style="${ssrRenderStyle({ "display": "none" })}" data-v-42d645e9></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropzone/Dropzone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42d645e9"]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=Dropzone-DWrgowuh.mjs.map
