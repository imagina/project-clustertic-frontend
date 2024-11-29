import { _ as __nuxt_component_1, a as __nuxt_component_2 } from '../_/QForm.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode } from 'vue';
import { H as Helper } from './helper-C0GmhoMX.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { CompassIcon } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "searchProject",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    function handleSearch() {
      Helper.redirectTo(`/projects?search=${search.value}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_form = __nuxt_component_1;
      const _component_InputCPA = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-project-bg tw-bg-black" }, _attrs))} data-v-4f41e0a8><div class="tw-container tw-flex tw-justify-center tw-py-16" data-v-4f41e0a8><div class="tw-basis-2/3 lg:tw-basis-3/6" data-v-4f41e0a8><h3 class="tw-font-light tw-text-white tw-text-center tw-text-[32px] tw-mb-14" data-v-4f41e0a8> \xBFQue est\xE1s buscando? </h3>`);
      _push(ssrRenderComponent(_component_q_form, { onSubmit: handleSearch }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputCPA, {
              outlined: "",
              dark: "",
              rounded: "",
              class: "input-custom-outline tw-mb-3 search-input-border",
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              label: "Explorar proyectos de..."
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CompassIcon), { class: "!tw-text-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CompassIcon), { class: "!tw-text-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputCPA, {
                outlined: "",
                dark: "",
                rounded: "",
                class: "input-custom-outline tw-mb-3 search-input-border",
                modelValue: unref(search),
                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                label: "Explorar proyectos de..."
              }, {
                prepend: withCtx(() => [
                  createVNode(unref(CompassIcon), { class: "!tw-text-primary" })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/custom/searchProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f41e0a8"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=searchProject-C9YkVT_M.mjs.map
