import { _ as _sfc_main$1 } from './index-BUfu69CW.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { ChevronsLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsRightIcon } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Paginator",
  __ssrInlineRender: true,
  props: {
    current: { default: 3 },
    pages: { default: 5 },
    btnPerSide: { default: 2 }
  },
  emits: ["onPageSelected"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const range = computed(() => {
      let start = props.current - props.btnPerSide, end = props.current + props.btnPerSide;
      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    });
    const handleSelectPage = (page) => {
      emit("onPageSelected", page);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "paginator-container" }, _attrs))} data-v-44b7279e>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => handleSelectPage(1),
        variant: "ghost",
        class: "paginator-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronsLeftIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronsLeftIcon))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => handleSelectPage(props.current > 1 ? props.current - 1 : 1),
        variant: "ghost",
        class: "paginator-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronLeftIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronLeftIcon))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-44b7279e></div><!--[-->`);
      ssrRenderList(unref(range), (n) => {
        _push(`<!--[-->`);
        if (0 < n && n <= props.pages) {
          _push(ssrRenderComponent(_component_Button, {
            onClick: ($event) => handleSelectPage(n),
            type: "button",
            variant: "ghost",
            class: ["paginator-btn", props.current === n ? "tw-bg-primary !tw-opacity-100" : ""],
            disabled: props.current === n
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(n)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(n), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div data-v-44b7279e></div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => handleSelectPage(
          props.current < props.pages ? props.current + 1 : props.pages
        ),
        variant: "ghost",
        class: "paginator-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronRightIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronRightIcon))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => handleSelectPage(props.pages),
        variant: "ghost",
        class: "paginator-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronsRightIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronsRightIcon))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/paginator/Paginator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-44b7279e"]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=Paginator-BBLdPLWP.mjs.map
