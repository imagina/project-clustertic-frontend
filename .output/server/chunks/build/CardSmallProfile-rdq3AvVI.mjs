import { _ as _sfc_main$2, b as _sfc_main$1 } from './CardTitle-BbDugV-N.mjs';
import { _ as _sfc_main$3 } from './index-BUfu69CW.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { S as StarSVG } from './star-kerVB7NH.mjs';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardSmallProfile",
  __ssrInlineRender: true,
  props: {
    class: {},
    id: {},
    name: {},
    img: {},
    username: {},
    rating: {},
    numberJobs: {},
    location: {},
    price: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$2;
      const _component_CardTitle = _sfc_main$1;
      const _component_Button = _sfc_main$3;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        class: unref(cn)(props.class, "tw-bg-white")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="tw-p-5 tw-h-full tw-flex tw-justify-between tw-flex-col" data-v-f2106ab0${_scopeId}><div class="tw-flex tw-justify-center tw-items-center tw-mb-1" data-v-f2106ab0${_scopeId}><div class="img-container tw-flex-auto tw-flex-shrink-0 tw-flex-grow-0" data-v-f2106ab0${_scopeId}><div style="${ssrRenderStyle(
              _ctx.img ? {
                backgroundImage: `url(${_ctx.img})`
              } : {}
            )}" data-v-f2106ab0${_scopeId}></div></div><div class="tw-pl-7 tw-py-5 tw-grow" data-v-f2106ab0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardTitle, { class: "tw-font-bold tw-text-lg tw-mb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.name)} `);
                  if (_ctx.username) {
                    _push3(`<span class="tw-ml-2 tw-font-light tw-text-blue-500" data-v-f2106ab0${_scopeId2}>${ssrInterpolate(_ctx.username)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.name) + " ", 1),
                    _ctx.username ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "tw-ml-2 tw-font-light tw-text-blue-500"
                    }, toDisplayString(_ctx.username), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "tag", {}, null, _push2, _parent2, _scopeId);
            if (_ctx.price) {
              _push2(`<p class="tw-text-base tw-font-semibold tw-mb-3" data-v-f2106ab0${_scopeId}> $${ssrInterpolate(_ctx.price)} por hora </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="tw-flex tw-gap-3 tw-mb-1" data-v-f2106ab0${_scopeId}><div class="tw-flex" data-v-f2106ab0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(StarSVG), { class: "star filled !tw-h-full" }, null, _parent2, _scopeId));
            _push2(`<p class="tw-mb-0 tw-ml-4 tw-text-sm" data-v-f2106ab0${_scopeId}>${ssrInterpolate((_a = _ctx.rating) == null ? void 0 : _a.toFixed(1))} `);
            if (_ctx.numberJobs) {
              _push2(`<span data-v-f2106ab0${_scopeId}>(${ssrInterpolate(_ctx.numberJobs)} trabajos)</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</p></div></div></div></div>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              class: "tw-w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ver perfil`);
                } else {
                  return [
                    createTextVNode("Ver perfil")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "tw-p-5 tw-h-full tw-flex tw-justify-between tw-flex-col" }, [
                createVNode("div", { class: "tw-flex tw-justify-center tw-items-center tw-mb-1" }, [
                  createVNode("div", { class: "img-container tw-flex-auto tw-flex-shrink-0 tw-flex-grow-0" }, [
                    createVNode("div", {
                      style: _ctx.img ? {
                        backgroundImage: `url(${_ctx.img})`
                      } : {}
                    }, null, 4)
                  ]),
                  createVNode("div", { class: "tw-pl-7 tw-py-5 tw-grow" }, [
                    createVNode(_component_CardTitle, { class: "tw-font-bold tw-text-lg tw-mb-4" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.name) + " ", 1),
                        _ctx.username ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "tw-ml-2 tw-font-light tw-text-blue-500"
                        }, toDisplayString(_ctx.username), 1)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    renderSlot(_ctx.$slots, "tag", {}, void 0, true),
                    _ctx.price ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "tw-text-base tw-font-semibold tw-mb-3"
                    }, " $" + toDisplayString(_ctx.price) + " por hora ", 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "tw-flex tw-gap-3 tw-mb-1" }, [
                      createVNode("div", { class: "tw-flex" }, [
                        createVNode(unref(StarSVG), { class: "star filled !tw-h-full" }),
                        createVNode("p", { class: "tw-mb-0 tw-ml-4 tw-text-sm" }, [
                          createTextVNode(toDisplayString((_b = _ctx.rating) == null ? void 0 : _b.toFixed(1)) + " ", 1),
                          _ctx.numberJobs ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(_ctx.numberJobs) + " trabajos)", 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode(_component_Button, {
                  type: "button",
                  class: "tw-w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Ver perfil")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/layouts/CardSmallProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2106ab0"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=CardSmallProfile-rdq3AvVI.mjs.map
