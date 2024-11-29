import { useSSRContext, h, defineComponent, computed, mergeProps, unref, openBlock, createElementBlock, createElementVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { N as NuxtIcon } from './nuxt-icon-1v0WEHYY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardExperience",
  __ssrInlineRender: true,
  props: {
    class: {},
    id: {},
    rating: {},
    init: {},
    end: {},
    place: {},
    img: {}
  },
  setup(__props) {
    const props = __props;
    const dateInit = computed(() => {
      if (!props.init) return "Actualidad";
      return Helper.parseDateToString(props.init, "MMM, YYYY");
    });
    const dateEnd = computed(() => {
      if (!props.init) return "Actualidad";
      return Helper.parseDateToString(props.init, "MMM, YYYY");
    });
    const dateDiff = computed(
      () => Helper.calculateDifferencesBetweenDays(props.init, props.end)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tw-flex tw-gap-8 tw-p-4", props.class]
      }, _attrs))} data-v-e0e728cb><div class="tw-h-24 tw-w-24 tw-rounded-3xl tw-bg-secondary tw-text-primary tw-flex-none img-container" data-v-e0e728cb><div style="${ssrRenderStyle(
        _ctx.img ? {
          backgroundImage: `url(${_ctx.img})`
        } : {}
      )}" data-v-e0e728cb></div></div><div class="tw-flex-grow" data-v-e0e728cb><p class="tw-text-lg tw-text-muted-custom tw-font-light" data-v-e0e728cb>`);
      ssrRenderSlot(_ctx.$slots, "skills", {}, null, _push, _parent);
      _push(`</p><div class="tw-flex tw-justify-between tw-mb-2" data-v-e0e728cb><p class="tw-text-lg tw-text-black tw-font-semibold" data-v-e0e728cb>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</p><p class="tw-text-md tw-text-black tw-font-semibold" data-v-e0e728cb>${ssrInterpolate(unref(dateInit))} - ${ssrInterpolate(unref(dateEnd))}</p></div><div class="tw-flex tw-justify-between tw-gap-40 tw-mb-3" data-v-e0e728cb><p class="tw-text-base tw-font-light tw-line-clamp-3" style="${ssrRenderStyle({ "color": "hsla(213, 11%, 29%, 1)" })}" data-v-e0e728cb>`);
      ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
      _push(`</p><p class="tw-text-md tw-text-black tw-font-semibold tw-whitespace-nowrap" data-v-e0e728cb>${ssrInterpolate(unref(dateDiff).years)} a\xF1o, ${ssrInterpolate(unref(dateDiff).month)} mes </p></div><div class="tw-flex tw-gap-10 tw-mb-2" data-v-e0e728cb><p class="tw-text-base tw-text-black tw-font-normal" data-v-e0e728cb>${ssrInterpolate(_ctx.place)}</p><p class="tw-text-base tw-text-black tw-font-normal" data-v-e0e728cb>${ssrInterpolate(unref(dateInit))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/layouts/CardExperience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0e728cb"]]);
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 24 24"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7Z" }, null, -1)
  ]));
}
const FacebookSVG = { render() {
  return h(NuxtIcon, { icon: { render: render$2 }, name: "brand-facebook-filled" });
} };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M29.334 5.347c-1.334.653-2.64.918-4 1.32-1.495-1.687-3.711-1.78-5.84-.983-2.13.797-3.524 2.747-3.494 4.983V12c-4.326.11-8.18-1.86-10.666-5.333 0 0-5.576 9.91 5.333 14.666-2.496 1.663-4.985 2.784-8 2.667 4.41 2.404 9.217 3.23 13.379 2.023 4.773-1.387 8.696-4.964 10.201-10.323.449-1.63.672-3.313.663-5.004 0-.332 2.013-3.696 2.424-5.35v0Z"
    }, null, -1)
  ]));
}
const TwitterSVG = { render() {
  return h(NuxtIcon, { icon: { render: render$1 }, name: "brand-twitter" });
} };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      stroke: "#3D3D64",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-opacity": ".56",
      "stroke-width": "2",
      d: "m8.7 10.7 6.6-3.4m-6.6 6 6.6 3.4M3 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm12-6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
    }, null, -1)
  ]));
}
const ShareSVG = { render() {
  return h(NuxtIcon, { icon: { render }, name: "share" });
} };

export { FacebookSVG as F, ShareSVG as S, TwitterSVG as T, __nuxt_component_4 as _ };
//# sourceMappingURL=share-Cu-XUjKM.mjs.map
